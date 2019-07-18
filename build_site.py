#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#   build_site.py - Update framework version, minify scripts and stylesheets.
#   Requires: Python >= 3.6, requests

import requests

# Set our relative paths.
STYLESHEET_MAIN_PATH = "./Site_Code/styles.css"
LIGHT_THEME_PATH = "./Site_Code/light_theme.css"
DARK_THEME_PATH = "./Site_Code/dark_theme.css"
MAIN_SCRIPT_PATH = "./Site_Code/script.js"


def min_js(file_path, output_path):

    # Minify the JS with Google's Closure compiler
    with open(file_path, "r") as site_script:
        js_code = site_script.read()

    req_params = {
        "js_code": js_code,
        "compilation_level": "SIMPLE_OPTIMIZATIONS",
        "output_format": "text",
        "output_info": "compiled_code"
    }

    minified_js = requests.post("https://closure-compiler.appspot.com/compile",
                                data=req_params).text

    with open(output_path, "w") as minified_file:
        minified_file.write(minified_js)


def min_css(file_path, output_path):

    # Minify the CSS using css-minifier
    # This is marginally worse than CSSO,
    # but that doesn't have an API, so rip.
    with open(file_path, "r") as site_stylesheet:
        css_code = site_stylesheet.read()

    req_params = {
        "input": css_code
    }

    minified_css = requests.post("https://cssminifier.com/raw",
                                 data=req_params).text

    with open(output_path, "w") as minified_file:
        minified_file.write(minified_css)


print("[+] Minify JS")
min_js(MAIN_SCRIPT_PATH, MAIN_SCRIPT_PATH[:-3] + ".min.js")

print("[+] Minify CSS")
min_css(STYLESHEET_MAIN_PATH, STYLESHEET_MAIN_PATH[:-4] + ".min.css")
min_css(LIGHT_THEME_PATH, LIGHT_THEME_PATH[:-4] + ".min.css")
min_css(DARK_THEME_PATH, DARK_THEME_PATH[:-4] + ".min.css")

print("[+] Done.")
exit(0)
