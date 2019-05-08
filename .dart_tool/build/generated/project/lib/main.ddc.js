define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web/material'], function(dart_sdk, animation, assertions, material) {
  'use strict';
  const core = dart_sdk.core;
  const io = dart_sdk.io;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__binding = animation.src__widgets__binding;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__text = animation.src__widgets__text;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__icon = animation.src__widgets__icon;
  const src__foundation__platform = assertions.src__foundation__platform;
  const src__material__colors = material.src__material__colors;
  const src__material__theme_data = material.src__material__theme_data;
  const src__material__app = material.src__material__app;
  const src__material__app_bar = material.src__material__app_bar;
  const src__material__theme = material.src__material__theme;
  const src__material__icons = material.src__material__icons;
  const src__material__floating_action_button = material.src__material__floating_action_button;
  const src__material__scaffold = material.src__material__scaffold;
  const main = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  main.main = function() {
    main._setTargetPlatformForDesktop();
    src__widgets__binding.runApp(new main.MyApp.new());
  };
  main._setTargetPlatformForDesktop = function() {
    try {
      let targetPlatform = null;
      if (dart.test(io.Platform.isMacOS)) {
        targetPlatform = src__foundation__platform.TargetPlatform.iOS;
      } else if (dart.test(io.Platform.isLinux) || dart.test(io.Platform.isWindows)) {
        targetPlatform = src__foundation__platform.TargetPlatform.android;
      }
      if (targetPlatform != null) {
        src__foundation__platform.debugDefaultTargetPlatformOverride = targetPlatform;
      }
    } catch (e$) {
      let e = dart.getThrown(e$);
    }
  };
  main.MyApp = class MyApp extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__material__app.MaterialApp.new({title: "Flutter Demo", theme: src__material__theme_data.ThemeData.new({primarySwatch: src__material__colors.Colors.blue, fontFamily: "Roboto"}), home: new main.MyHomePage.new({title: "Flutter Demo Home Page"})});
    }
  };
  (main.MyApp.new = function() {
    main.MyApp.__proto__.new.call(this);
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  main.MyHomePage = class MyHomePage extends src__widgets__framework.StatefulWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    createState() {
      return new main._MyHomePageState.new();
    }
  };
  (main.MyHomePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let title = opts && 'title' in opts ? opts.title : null;
    this[title$] = title;
    main.MyHomePage.__proto__.new.call(this, {key: key});
  }).prototype = main.MyHomePage.prototype;
  dart.addTypeTests(main.MyHomePage);
  const title$ = Symbol("MyHomePage.title");
  dart.setMethodSignature(main.MyHomePage, () => ({
    __proto__: dart.getMethods(main.MyHomePage.__proto__),
    createState: dart.fnType(main._MyHomePageState, [])
  }));
  dart.setFieldSignature(main.MyHomePage, () => ({
    __proto__: dart.getFields(main.MyHomePage.__proto__),
    title: dart.finalFieldType(core.String)
  }));
  const _counter = dart.privateName(main, "_counter");
  const _incrementCounter = dart.privateName(main, "_incrementCounter");
  main._MyHomePageState = class _MyHomePageState extends src__widgets__framework.State$(main.MyHomePage) {
    [_incrementCounter]() {
      this.setState(dart.fn(() => {
        this[_counter] = dart.notNull(this[_counter]) + 1;
      }, VoidToNull()));
    }
    build(context) {
      return new src__material__scaffold.Scaffold.new({appBar: new src__material__app_bar.AppBar.new({title: new src__widgets__text.Text.new(this.widget.title)}), body: new src__widgets__basic.Center.new({child: new src__widgets__basic.Column.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new src__widgets__text.Text.new("You have pushed the button this many times:"), new src__widgets__text.Text.new(dart.str(this[_counter]), {style: src__material__theme.Theme.of(context).textTheme.display1})])})}), floatingActionButton: new src__material__floating_action_button.FloatingActionButton.new({onPressed: dart.bind(this, _incrementCounter), tooltip: "Increment", child: new src__widgets__icon.Icon.new(src__material__icons.Icons.add)})});
    }
  };
  (main._MyHomePageState.new = function() {
    this[_counter] = 0;
    main._MyHomePageState.__proto__.new.call(this);
  }).prototype = main._MyHomePageState.prototype;
  dart.addTypeTests(main._MyHomePageState);
  dart.setMethodSignature(main._MyHomePageState, () => ({
    __proto__: dart.getMethods(main._MyHomePageState.__proto__),
    [_incrementCounter]: dart.fnType(dart.void, []),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(main._MyHomePageState, () => ({
    __proto__: dart.getFields(main._MyHomePageState.__proto__),
    [_counter]: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/project/main.ddc", {
    "package:project/main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;AAsBE,qCAA4B;AAC5B,gCAAM,CAAC,IAAI,cAAK;EAClB;;AAME,QAAI;AACF,UAAe;AACf,oBAAI,WAAQ,QAAQ,GAAE;AACpB,sBAAc,GAAG,wCAAc,IAAI;YAC9B,eAAI,WAAQ,QAAQ,eAAI,WAAQ,UAAU,GAAE;AACjD,sBAAc,GAAG,wCAAc,QAAQ;;AAEzC,UAAI,cAAc,IAAI,MAAM;AAC1B,uEAAqC,cAAc;;;UAE9C;AAAG;EACd;;UAIe,OAAoB;AAC/B,iBAAO,kCAAW,SACT,uBACA,uCAAS,iBACC,4BAAM,KAAK,cAEd,sBAER,mBAAU,SAAQ;IAE5B;;;;EACF;;;;;;;IAKe;;;;;;;iBAGqB,yBAAgB;IAAE;;;QALpC;QAAU;gBAAK,GAAL,KAAK;AAAK,mDAAW,GAAG;EAAC;;;;;;;;;;;;;;;AAYjD,mBAAQ,CAAC;AACP,sBAAQ,gBAAR,cAAQ,IAxEd;;IA0EE;UAGa,OAAoB;AAC/B,iBAAO,oCAAQ,cACL,iCAAM,aACL,2BAAI,CAAC,WAAM,MAAM,eAEpB,8BAAM,aACH,8BAAM,qBACQ,sCAAiB,OAAO,YACjC,0BACR,2BAAI,CACF,oDAEF,2BAAI,CACF,SAAE,cAAQ,WACH,0BAAK,GAAG,CAAC,OAAO,WAAW,SAAS,oCAK7B,8DAAoB,aAC7B,kCAAiB,WACnB,wBACF,2BAAI,CAAC,0BAAK,IAAI;IAG3B;;;IAlCI,cAAQ,GAAG;;EAmCjB","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
