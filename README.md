# Fluid React Native Tutorial Overview

## Hello team!

You know what's not cool anymore? Literally anything that isn't JavaScript.

As an introduction to the general idea of React Native (and why we use it at Fluid) you can [watch me talk to a room of strangers about it in London here](https://www.youtube.com/watch?v=ASNoodFP8U4).

This README is a combination of my own notes and the boilerplate README from a `create-react-native-app`

Lets talk about how this is going to work

## Structure

We will do an hour every morning before the scrum starting at 9:15BST and ending at 10:15BST. This will be me teaching you guys new cool things about mobile app development. After every session I'll leave you with a little problem to solve. Googling skills will be required and you'll be spending a lot of time with the React Native docs. In an ideal world where there's not too many hotfixes to implement, these tasks can be done in the morning before the tutorial session.

So far I'm planning 5 tutorials with the following structure:

*   Introduction to React Native (and 2018 style JavaScript)
*   React in 60 minutes
*   Making an app that looks good
*   Dealing with navigation, user input and state management
*   Solving a Fluid problem: How I learned to stop worrying and make Martine happy

## Learning Objectives

By the end of this you will be able to:

*   Understand and write modern JavaScript
*   Understand why React exists, the problems it solves and its rules
*   Understand the difference between designing an interface for web and mobile apps
*   Be able to create a native looking app with React Native
*   Understand what Redux is, how it's used and why it's used
*   Understand the need for Immutable data structures and how to use ImmutableJS
*   Be able to apply these skills to a much larger scale project
*   Start making Pull Requests on the Fluid Mobile App Repo (Please!)

## Useful Links

*   [React Native Docs](https://facebook.github.io/react-native/)
*   [Expo Docs](https://docs.expo.io/versions/latest/)
*   [Redux Docs](https://redux.js.org/)
*   [Navigation Docs](https://reactnavigation.org/)

## Pre Lesson 1 Requirements

0.  [Install NodeJS (and NPM but it's bundled with Node)](https://nodejs.org/en/)
1.  [Install VSCode](https://code.visualstudio.com/)
1.  [Get setup for React Native Dev](https://medium.com/react-native-training/vscode-for-react-native-526ec4a368ce) (you don't have to follow this perfectly the React Native Tools extension is the most important part)
1.  [Install Yarn](https://yarnpkg.com/lang/en/)
1.  Install Create React App - `yarn global add create-react-app`
1.  Install React Native CLI - `yarn global add react-native-cli`
1.  Install Create React Native App - `yarn global add create-react-native-app`

If you want to get comfortable with VSCode I found [this video](https://www.youtube.com/watch?v=pI1skOo2yjk)

If you want to test on a simulator than you must install Android Studio and all the related tooling.

If you want to test on your actual phones (this is easy) then you don't have to do this!

A notebook may be helpful for you people who like to write stuff down :)

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

Every lesson will start with a quick overview of the previous lesson.

## Lesson 1

Mostly me presenting with slides.

Q&A at the end

### Homework: Read through the lesson-1.js file and understand it

## Lesson 2

Live coding showing React/React Native lifecycles, state and props etc

### Homework: Create a very simple React app with input and output (refer to lesson-2 folder for help)

# Weekend Alert!

## Lesson 3

Live designing with team input!

We will create a design together in Adobe XD and then replicate it in React Native

### Homework: Take a design I've made and attempt to recreate it in React Native (refer to lesson-3 folder for help)

## Lesson 4

Handling state in mobile apps, immutable data and navigation.

### Homework: Watch a video from the creator of Redux explaining it way better than I can

## Lesson 5

Summary of everything so far

Switching to React Native CLI

How everything can be applied at a much larger scale to the Fluid app

Fluid App code walkthrough

### Homework: Clone Fluid mobile repo and get it running locally with RN CLI (Message me for help if you get stuck/have build errors)

# Yarn scripts

*   [Available Scripts](#available-scripts)
    *   [yarn start](#yarn-start)
    *   [yarn test](#yarn-test)
    *   [yarn ios](#yarn-ios)
    *   [yarn android](#yarn-android)
    *   [yarn eject](#yarn-eject)

## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `yarn start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
yarn start --reset-cache
# or
yarn start --reset-cache
```

#### `yarn test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `yarn ios`

Like `yarn start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `yarn android`

Like `yarn start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

##### Using Android Studio's `adb`

1.  Make sure that you can run adb from your terminal.
2.  Open Genymotion and navigate to `Settings -> ADB`. Select “Use custom Android SDK tools” and update with your [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).

##### Using Genymotion's `adb`

1.  Find Genymotion’s copy of adb. On macOS for example, this is normally `/Applications/Genymotion.app/Contents/MacOS/tools/`.
2.  Add the Genymotion tools directory to your path (instructions for [Mac](http://osxdaily.com/2014/08/14/add-new-path-to-path-command-line/), [Linux](http://www.computerhope.com/issues/ch001647.htm), and [Windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/)).
3.  Make sure that you can run adb from your terminal.

#### `yarn eject`

This will start the process of "ejecting" from Create React Native App's build scripts. You'll be asked a couple of questions about how you'd like to build your project.

**Warning:** Running eject is a permanent action (aside from whatever version control system you use). An ejected app will require you to have an [Xcode and/or Android Studio environment](https://facebook.github.io/react-native/docs/getting-started.html) set up.

### Configuring Packager IP Address

When starting your project, you'll see something like this for your project URL:

```
exp://192.168.0.2:19000
```

The "manifest" at that URL tells the Expo app how to retrieve and load your app's JavaScript bundle, so even if you load it in the app via a URL like `exp://localhost:19000`, the Expo client app will still try to retrieve your app at the IP address that the start script provides.

In some cases, this is less than ideal. This might be the case if you need to run your project inside of a virtual machine and you have to access the packager via a different IP address than the one which prints by default. In order to override the IP address or hostname that is detected by Create React Native App, you can specify your own hostname via the `REACT_NATIVE_PACKAGER_HOSTNAME` environment variable:

Mac and Linux:

```
REACT_NATIVE_PACKAGER_HOSTNAME='my-custom-ip-address-or-hostname' yarn start
```

Windows:

```
set REACT_NATIVE_PACKAGER_HOSTNAME='my-custom-ip-address-or-hostname'
yarn start
```

The above example would cause the development server to listen on `exp://my-custom-ip-address-or-hostname:19000`.

## Sharing and Deployment

Create React Native App does a lot of work to make app setup and development simple and straightforward, but it's very difficult to do the same for deploying to Apple's App Store or Google's Play Store without relying on a hosted service.

### Publishing to Expo's React Native Community

Expo provides free hosting for the JS-only apps created by CRNA, allowing you to share your app through the Expo client app. This requires registration for an Expo account.

Install the `exp` command-line tool, and run the publish command:

```
$ npm i -g exp
$ exp publish
```

### Building an Expo "standalone" app

You can also use a service like [Expo's standalone builds](https://docs.expo.io/versions/latest/guides/building-standalone-apps.html) if you want to get an IPA/APK for distribution without having to build the native code yourself.

### Ejecting from Create React Native App

If you want to build and deploy your app yourself, you'll need to eject from CRNA and use Xcode and Android Studio.

This is usually as simple as running `npm run eject` in your project, which will walk you through the process. Make sure to install `react-native-cli` and follow the [native code getting started guide for React Native](https://facebook.github.io/react-native/docs/getting-started.html).

#### Should I Use ExpoKit?

If you have made use of Expo APIs while working on your project, then those API calls will stop working if you eject to a regular React Native project. If you want to continue using those APIs, you can eject to "React Native + ExpoKit" which will still allow you to build your own native code and continue using the Expo APIs. See the [ejecting guide](https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md) for more details about this option.

## Troubleshooting

### Networking

If you're unable to load your app on your phone due to a network timeout or a refused connection, a good first step is to verify that your phone and computer are on the same network and that they can reach each other. Create React Native App needs access to ports 19000 and 19001 so ensure that your network and firewall settings allow access from your device to your computer on both of these ports.

Try opening a web browser on your phone and opening the URL that the packager script prints, replacing `exp://` with `http://`. So, for example, if underneath the QR code in your terminal you see:

```
exp://192.168.0.1:19000
```

Try opening Safari or Chrome on your phone and loading

```
http://192.168.0.1:19000
```

and

```
http://192.168.0.1:19001
```

If this works, but you're still unable to load your app by scanning the QR code, please open an issue on the [Create React Native App repository](https://github.com/react-community/create-react-native-app) with details about these steps and any other error messages you may have received.

If you're not able to load the `http` URL in your phone's web browser, try using the tethering/mobile hotspot feature on your phone (beware of data usage, though), connecting your computer to that WiFi network, and restarting the packager. If you are using a VPN you may need to disable it.

### iOS Simulator won't open

If you're on a Mac, there are a few errors that users sometimes see when attempting to `npm run ios`:

*   "non-zero exit code: 107"
*   "You may need to install Xcode" but it is already installed
*   and others

There are a few steps you may want to take to troubleshoot these kinds of errors:

1.  Make sure Xcode is installed and open it to accept the license agreement if it prompts you. You can install it from the Mac App Store.
2.  Open Xcode's Preferences, the Locations tab, and make sure that the `Command Line Tools` menu option is set to something. Sometimes when the CLI tools are first installed by Homebrew this option is left blank, which can prevent Apple utilities from finding the simulator. Make sure to re-run `npm/yarn run ios` after doing so.
3.  If that doesn't work, open the Simulator, and under the app menu select `Reset Contents and Settings...`. After that has finished, quit the Simulator, and re-run `npm/yarn run ios`.

### QR Code does not scan

If you're not able to scan the QR code, make sure your phone's camera is focusing correctly, and also make sure that the contrast on the two colors in your terminal is high enough. For example, WebStorm's default themes may [not have enough contrast](https://github.com/react-community/create-react-native-app/issues/49) for terminal QR codes to be scannable with the system barcode scanners that the Expo app uses.

If this causes problems for you, you may want to try changing your terminal's color theme to have more contrast, or running Create React Native App from a different terminal. You can also manually enter the URL printed by the packager script in the Expo app's search bar to load it manually.
