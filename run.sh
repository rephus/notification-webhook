#!/bin/bash
cordova platform add android # In case you didn't add the platform

cordova run android --device

adb logcat  -T 1 | grep "CONSOLE\|NotificationService\|Notification"
