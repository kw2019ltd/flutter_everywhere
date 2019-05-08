[![Codemagic build status](https://api.codemagic.io/apps/5cd2d9cbc959181f99f3bc4b/5cd2d9cbc959181f99f3bc4a/status_badge.svg)](https://codemagic.io/apps/5cd2d9cbc959181f99f3bc4b/5cd2d9cbc959181f99f3bc4a/latest_build)

## Flutter Everywhere

The goal of this repo is to have everything you need to start with flutter desktop + mobile simply by forking the project. This will no longer be necessary once `flutter create` supports desktop.

Fork this project to get started! :)

## Getting Started - Mobile

Good to go!

## Getting Started - Desktop

This project was originally created to develop Windows, macOS, and Linux
implementations of [Flutter](https://github.com/flutter/flutter). That work has
since become part of the
[Flutter engine repository](https://github.com/flutter/engine), and this
project is now just an example of, and test environment for, building
applications using those libraries.

For information about the shells themselves, see the [Flutter page about
desktop support](https://github.com/flutter/flutter/wiki/Desktop-shells).

## Getting started - Web

Flutter 1.5 and above enable support for targeting the web with Flutter,
including Dart compilation to JavaScript. To use the Flutter SDK with the
`flutter_web` preview make sure you have upgraded Flutter to at least `v1.5.4`
by running `flutter upgrade` from your machine. If you're actively developing
for Flutter for web, you may prefer to be running from one of the unstable
channels. Our wiki describes the
[Flutter channels](https://github.com/flutter/flutter/wiki/Flutter-build-release-channels)
and how to select the right one for your needs.

### Clone the flutter_web source code

Clone this repository locally.

### Install the flutter_web build tools

To install the
[`webdev` package](https://pub.dartlang.org/packages/webdev),
which provides the build tools for Flutter for web, run the following:

```console
$ flutter packages pub global activate webdev
```

Ensure that the `$HOME/.pub-cache/bin` directory
[is in your path](https://www.dartlang.org/tools/pub/cmd/pub-global#running-a-script-from-your-path),
and then you may use the `webdev` command directly from your terminal.

### Run the project example

1. The project exists in the repository.

2. Update packages.

    ```console
    $ flutter packages upgrade
    ! flutter_web 0.0.0 from path ../../flutter_web
    ! flutter_web_ui 0.0.0 from path ../../flutter_web_ui
    Running "flutter packages upgrade" in hello_world...                5.0s
    ```

    If that succeeds, you're ready to run it!

3. Build and serve the example locally.

    ```console
    $ webdev serve
    [INFO] Generating build script completed, took 331ms
    ...
    [INFO] Building new asset graph completed, took 1.4s
    ...
    [INFO] Running build completed, took 27.9s
    ...
    [INFO] Succeeded after 28.1s with 618 outputs (3233 actions)
    Serving `web` on http://localhost:8080
    ```

    Open <http://localhost:8080> in Chrome and you should see `Hello World` in
    red text in the upper-left corner.

