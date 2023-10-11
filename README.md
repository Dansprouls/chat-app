# ChatApp

ChatApp is an application for mobile devices that allows users to chat and send messages in real-time and offers other useful features such as location sharing and image/video sharing. ChatApp is built with React Native.

![Screenshot of ChatApp homescreen](/chatapp-assets/app-screenshot.png)

## Features

- Customization of background colors - four colors to select from
- Allow users to send/receive texts in real-time
- Image/Location Sharing
- Anonymous sign in
- Offline viewing of previous messages
- Expo ImagePicker & MediaLibrary - multimedia sharing

## Tech used

- React Native
- Expo
- Google Firebase - Authenitication/Database/Storage
- AsyncStorage Caching for offline viewing
- React Native Gifted Chat Library

## Setting up the Environment

`npx create-expo-app chat_app --template`
New React Native project

`npm install - expo-cli`
Install Expo

`expo start or npm start`
Start Expo

### Setting up Google's Firebase Database

Firebase link -> (https://firebase.google.com/)

- Sign-up or sign in to Firebase
- `npm install firebase` to add firebase connection into your project directory
- Copy the Firebase Config from the project setting tab and paste into you App.js file
- In order to allow read and write access to the database - navigate to the rules tab in the console and change the code from `allow read, write: if false;` to `allow read, write: if true;` then click publish

### Packages to install

```
* npm install --save @react-navigation/native @react-navigation/native-stack
* expo install react-native-screens react-native-safe-area-context
* npm install react-native-gifted-chat --save
* npm install firebase@9.13.0 --save
* expo install @react-native-async-storage/async-storage
* expo install @react-native-community/netinfo
* expo install expo-image-picker
* expo install expo-location
* expo install react-native-maps
```
