# Build from source (Android)

## Prerequisites

You will need the Apache Cordova cli utility, along with Node.js. Follow
[instructions in the Cordova docs](https://cordova.apache.org/docs/en/5.1.1/guide_cli_index.md.html#The%20Command-Line%20Interface).

As extra requisites, you'll need the Java 7 JDK, and the Android JDK.
Follow the [instructions on the Cordova docs](http://cordova.apache.org/docs/en/5.0.0/guide_platforms_android_index.md.html#Android%20Platform%20Guide) to install the Java SDK, install the Android SDK, and install SDK Packages (you can safely ignore the rest).

On your Android device, you may have to enable USB debugging. Follow
[this guide](http://developer.android.com/tools/device.html#setting-up).

# Configure

Some of the apps require custom configuration (ie, your own API keys).

You will need an `appconfig.js` in the `/www` folder. You can use the sample config file `appconfig.js.sample` as a base, and then edit to your needs.

    cp appconfig.js.sample www/appconfig.js
    vim www/appconfig.js  # or your favourite editor!

# Build and install

Now plug your Android phone to your PC via USB. And on a terminal, do:

  $ . run.sh

If all goes well, you should see a bunch of things happening in the logs:
dependencies being installed, program being built, and finally, installed
in the Android device. Search for it on the list of apps, and you should be
able to use it right away!

If there are any errors while building there's likely that you have some
of the setup wrong. A common one is Cordova complaining that you need to
install a different Android target version in the SDK. Cordova will give
you instructions on how to do it, but it should be as simple as opening
the SDK manager app again, finding and installing the required packages.
Or it may be that you forgot to set up the `ANDROID_HOME` and `JAVA_HOME`
environment variables.

# Allow the app access to your notifications

In order for the app to be able to pick up your phone notifications, you'll
need to explicitly grant it permissions.

Go to your phone settings, `Notifications`>`Notification access`, and tick
the Watchduino box.

![](imgs/settings.jpg)
