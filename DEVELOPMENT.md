# Development

In order for continued development on Herd a compatible development environment needs to be set up.

## Step 1

You will need to Install an IDE but for this walkthrough we have specified using VS Code.

We first need to (Download Visual Studio Code)[https://code.visualstudio.com/download], then install and open it.

Open Extensions (`Cmd-Shift-X`), and add the following extensions:

- Debugger for Chrome
- EditorConfig for Visual Studio Code
- GitLens
  - suggestion: configure the Absolute date format setting: ddd D MMM YYYY
- Rainbow Brackets
- VScode-icons
- GraphQL for VSCode
- Prettier formatter for Visual Studio Code

Open Settings (`Cmd-`,)

- customise User settings:
  - `"terminal.integrated.shell.osx": "/bin/zsh"`
  - `"terminal.external.osxExec": "iTerm.app"`


## Step 2

In order to view the app on an iOS emulater you will need to install Xcode.

Download and install Xcode from this [link](https://developer.apple.com/xcode/).

- After installation, start Xcode and accept the terms and conditions agreement.
- Run

```
xcode-select --install
``` 

in your terminal
- Start your Xcode again and accept any terms and conditions required to get to the welcome screen of your Xcode.

Install HomeBrew from this [link](https://brew.sh/).

## Step 3

In order to View this app on an Android emulator you will need to install Android Studio.
- ( DO NOT update Gradle or Maven if asked by Android Studio.)

###  Step 3.1

- Ensure you have JDK 8 installed on your computer by running 
```
java -version
```
in your command line interface. It should return 1.8x but if not install it [here].(http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).

You will also want to set your `$JAVA_HOME` environment variable in your `.bash_profile` too:

```
export JAVA_HOME="/Library/Java/JavaVirtualMachines/[JDK VERSION HERE]/Contents/Home"
```

### Step 3.2

Install Android Studio as per the instruction in the [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment).

## Step 4

In order to run the project clone or download the project and install the modules in the home directory with:
```
yarn
```
Start the packager, in the home directory, with:
```
react-native start
```

## To run the app on iOS

In the home directory, run:
```
react-native run-ios --simulator="iPhone SE"
```

## To run the app on Android

Open an emulator in android studio and, with a new terminal window the home directory, run:
```
react-native run-android
```
