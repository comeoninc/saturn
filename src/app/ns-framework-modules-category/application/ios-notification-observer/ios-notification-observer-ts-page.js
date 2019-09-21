"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var platform_1 = require("tns-core-modules/platform");
var application_1 = require("tns-core-modules/application");
var vm;
var observer;
function onNavigatingTo(args) {
    var page = args.object;
    vm = new observable_1.Observable();
    vm.set("info", "Using iOS Notification Observer \nto check the battery life");
    vm.set("batteryLife", "0");
    vm.set("isIOS", platform_1.isIOS);
    page.bindingContext = vm;
    page.actionBar.title = args.context.title;
}
exports.onNavigatingTo = onNavigatingTo;
function onNavigatedTo(args) {
    vm.set("actionBarTitle", args.context.actionBarTitle);
    var delegate = application_1.ios.delegate;
    var nativeApp = application_1.ios.nativeApp;
    var rootController = application_1.ios.rootController;
    var window = application_1.ios.window;
    if (platform_1.isIOS) {
        UIDevice.currentDevice.batteryMonitoringEnabled = true;
        vm.set("batteryLife", +(UIDevice.currentDevice.batteryLevel * 100).toFixed(1));
        observer = application_1.ios.addNotificationObserver(UIDeviceBatteryLevelDidChangeNotification, function (notification) {
            vm.set("batteryLife", +(UIDevice.currentDevice.batteryLevel * 100).toFixed(1));
        });
    }
}
exports.onNavigatedTo = onNavigatedTo;
function onUnloaded() {
    if (platform_1.isIOS) {
        application_1.ios.removeNotificationObserver(observer, UIDeviceBatteryLevelDidChangeNotification);
    }
}
exports.onUnloaded = onUnloaded;
