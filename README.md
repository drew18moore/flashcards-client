# flashcards-client

The front-end for a flashcards mobile app for iOS and Android

### Built With

![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

## Features

- User authentication with JWT
- Persistent user login
- Create, edit, or delete decks
- Create, edit, or delete cards in a deck
- Study your flashcards

## Getting Started
### Prerequisites
- Run flashcards-api

Follow the instructions here: https://github.com/drew18moore/flashcards-api
- Node.js

Go to https://nodejs.org/en/download and install the LTS version
- Install Yarn

```
npm install --global yarn
```
- Install `expo-cli`
```
npm install -g expo-cli
```
- Android Studio

Go to https://developer.android.com/studio and install Android Studio Giraffe
- XCode (MacOS only)

Go to the App Store to install XCode

### Usage
1. Clone the repo
```
git clone https://github.com/drew18moore/flashcards-client.git
```
2. Navigate to the project's root directory and run the following commands
```
yarn install
yarn start
```
3. Run the client by pressing `i` to open the iPhone simulator or pressing `a` to open the app on you android emulator
 * If you want to run the app in the android emulator, make sure the emulator is running before pressing `a`. Open Android Studio, press 'More Actions' and select 'Virtual Device Manager'. Create a device if needed and run the device's emulator.