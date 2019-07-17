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

# Minify the JS with Google's Closure compiler
with open(MAIN_SCRIPT_PATH, "r") as site_script:
    js_code = site_script.read()

req_params = {
    "js_code": js_code,
    "compilation_level": "SIMPLE_OPTIMIZATIONS",
    "output_format": "text",
    "output_info": "compiled_code"
}

print("[+] Minify JS")

minified_js = requests.post("https://closure-compiler.appspot.com/compile",
                            data=req_params).text
