# R10 Project

## Initial Commit 


### React-Native-Splash-Screen

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