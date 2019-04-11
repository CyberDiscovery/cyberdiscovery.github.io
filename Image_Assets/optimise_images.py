#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#   optimise_images.py - Call convert on PNGs and JPEGs using Google's settings
#   Requires: Python >= 3.6
#   Requires: Dank memes in production.

from subprocess import CalledProcessError, check_output  # noqa: S404
from sys import argv, exit

ARG = "--replace"
_LEN = len(argv)
FILENAME = "optimise_images.py"
SEARCH_PATH = argv[1] if (_LEN > 1 and argv[1].lower() != f"{ARG}") else "."
REPLACE = True if (ARG in [i.lower() for i in argv]) else False
OPTIMISATION_MAP = {
    ".jpg": ("-sampling-factor 4:2:0 -strip -quality 85 "
             "-interlace JPEG -colorspace sRGB"),
    ".png": "-strip"
}


if _LEN == 1:
    print(f"{argv[0]} [directory with images] [--replace]")
    print("If you supply --replace, then the existing images")
    print("will be replaced, otherwise it will only be a dry run.")
    print("Implied directories, e.g. '.' or '..' will also work.")
    exit()


def output(cmd):
    try:
        _ = check_output(f"{cmd} 2>/dev/null", shell=True)  # noqa: S602
        return _.decode("utf-8").rstrip()
    except(CalledProcessError) as CMD_ERROR:
        print(f"Error encountered when running: {cmd}")
        print(CMD_ERROR)
        exit()


BACKUP_DIR = output("mktemp -u img_backup_XXXX")  # noqa: T000
DU_EXCLUDE = "--exclude=./img_backup*"
EXCLUDE_DIRS = output("ls -d */ -1 2>/dev/null ; :")
EXCLUDE_DIRS = EXCLUDE_DIRS.split("\n") if (EXCLUDE_DIRS is not None) else ""
for i in EXCLUDE_DIRS:
    DU_EXCLUDE += f" --exclude={i[:-1]}"
INIT_SIZE = int(output(f"du {SEARCH_PATH} -c {DU_EXCLUDE} | grep total | cut -f1"))  # noqa: E501
FILES = output(f"ls -1 {SEARCH_PATH} | grep -v {FILENAME}").split("\n")
DIR_PREPEND = output(f"readlink -f {SEARCH_PATH}") + "/"
output(f"mkdir {BACKUP_DIR}")
HUMAN_READABLE_SIZE = output(f"du {SEARCH_PATH} {DU_EXCLUDE} -sh | cut -f1")
print(f"Initial images size: {HUMAN_READABLE_SIZE}\n")

if not REPLACE:
    TEMPDIR = output("mktemp -d")

    for i in FILES:
        if i[-4:] in OPTIMISATION_MAP.keys():
            output(f"cp {DIR_PREPEND}{i} {TEMPDIR}")
            _ = f"convert {TEMPDIR}/{i} {OPTIMISATION_MAP[i[-4:]]} ./{BACKUP_DIR}/{i}"  # noqa: E501
            print(_)
            output(_)
        else:
            print(f"Exclude {i}")

    CURR_SIZE = int(output(f"du ./{BACKUP_DIR} -c | grep total | cut -f1"))
    SAVED = int(100 - (CURR_SIZE/INIT_SIZE)*100)
    _VE = "lost" if (SAVED < 0) else "saved"
    SAVED = abs(SAVED)
    FINAL_SIZE = f"du ./{BACKUP_DIR} -sh | cut -f1"

    print(f"\nImages size now: {output(FINAL_SIZE)}")
    print(f"\nIf you run with --replace, {SAVED}% space would be {_VE}.")
    output(f"rm {BACKUP_DIR} -rf")
    output(f"rm {TEMPDIR} -rf")

elif REPLACE:
    for i in FILES:
        if i[-4:] in OPTIMISATION_MAP.keys():
            output(f"mv {DIR_PREPEND}{i} ./{BACKUP_DIR}/{i}")
            _ = f"convert ./{BACKUP_DIR}/{i} {OPTIMISATION_MAP[i[-4:]]} {DIR_PREPEND}{i}"  # noqa: E501
            print(_)
            output(_)
    print(f"\nPrevious images have been backed up to {BACKUP_DIR}")
