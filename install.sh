#!/bin/bash
cordova build

mkdir -p "tmp"
newfile="tmp/$(date +%s).apk"
cp ./platforms/android/build/outputs/apk/android-debug.apk "$newfile"
adb install -r "$newfile"

adb logcat | grep "watchduino\|CONSOLE"
