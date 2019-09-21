"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var bottom_navigation_1 = require("tns-core-modules/ui/bottom-navigation");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = observable_1.fromObject({
        selectedIndex: 1
    });
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onBottomNavLoaded(args) {
    var bottomNavigation = args.object;
    bottomNavigation.on(bottom_navigation_1.BottomNavigation.selectedIndexChangedEvent, function (data) {
        var oldIndex = data.oldIndex;
        var newIndex = data.newIndex;
        console.log("oldIndex: " + oldIndex + "; newIndex: " + newIndex);
        args.object.page.bindingContext.set("selectedIndex", newIndex);
    });
}
exports.onBottomNavLoaded = onBottomNavLoaded;
