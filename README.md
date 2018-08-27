# R10 Project

A mobile application using React Native for an upcoming developer conference called R10.

## Getting Started

To get started, fork this repository to your local machine. You will need to ensure you have the following prerequisites. Afterwards follow the installation instructions below.

### Prerequisites

[React Native](https://facebook.github.io/react-native/) - Follow the instructions for `Building Projects with Native Code`.

[Xcode](https://developer.apple.com/xcode/) - Download this from the App Store for (MacOS only).

[Android Studio](https://developer.android.com/studio/) - Download this from the link provided and follow the instructions for download using React Natives documentation.

[Node](https://nodejs.org/en/) - JavaScript runtime environment



### Installing

Fork Repository

```
click the fork button in the top right of this page
```

Clone the projected onto you local machine

```
git clone https://github.com/<USERNAME>/r10.git
```

Navigate into the folder and run the following commands

```
npm install or yarn install
```

Then

```
react-native run-ios or run-android 

if developing in android ensure you have setup your virtual device as instructed in the react native docs and have the emulator running before running the command.
```

Possible Error with Android

```
The project uses react-native-splash-screen which sometimes has a conflict with its build.gradle file. In order to fix this issue follow the instructions immediately below.
```

## Android SplashScreen Error Instructions

navigate into /node_modules/react-native-splash-screen/android/build.gradle
Replace the entire file with the following:

```
apply plugin: 'com.android.library'

android {
    compileSdkVersion 26
    buildToolsVersion "26.0.3"

    defaultConfig {
        minSdkVersion 16
        targetSdkVersion 26
        versionCode 1
        versionName "1.0"
    }
    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}

dependencies {
    compile fileTree(dir: 'libs', include: ['*.jar'])
    testCompile 'junit:junit:4.12'
    compile 'com.android.support:appcompat-v7:26.1.0'
    compile "com.facebook.react:react-native:+" // From node_modules
}
```

## Built With

[React](https://reactjs.org/docs/hello-world.html) - A JavaScript library for building user interfaces 

[React Native](https://facebook.github.io/react-native/) - Build native mobile apps using JavaScript and React


## Authors

**Cody Rathor** - RED Academy student currently taking the App Development course.

LinkedIn: [Cody Rathor](https://www.linkedin.com/in/cody-rathor-7557a212b/)


Twitter : [@codyrathor](https://twitter.com/CodyRathor?lang=en)

# Screen Shots

## IOS:

![Schedule](/screenshots/ios-schedule.png)
![Session](/screenshots/ios-session.png)
![Speaker](/screenshots/ios-speaker.png)
![SpeakerExt](/screenshots/ios-speaker-ext.png)
![Faves](/screenshots/ios-faves.png)
![About](/screenshots/ios-about.png)

## Android:

![Schedule](/screenshots/android-schedule.png)
![Session](/screenshots/android-session.png)
![Speaker](/screenshots/android-speaker.png)
![SpeakerExt](/screenshots/android-speaker-ext.png)
![Faves](/screenshots/android-faves.png)
![About](/screenshots/android-about.png)
![Drawer Nav](/screenshots/android-drawer-nav.png)