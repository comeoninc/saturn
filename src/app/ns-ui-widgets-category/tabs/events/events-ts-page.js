"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var tabs_1 = require("tns-core-modules/ui/tabs");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = observable_1.fromObject({
        selectedIndex: 1
    });
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onTabsLoaded(args) {
    var tabs = args.object;
    tabs.on(tabs_1.Tabs.selectedIndexChangedEvent, function (data) {
        var oldIndex = data.oldIndex;
        var newIndex = data.newIndex;
        console.log("oldIndex: " + oldIndex + "; newIndex: " + newIndex);
        args.object.page.bindingContext.set("selectedIndex", newIndex);
    });
}
exports.onTabsLoaded = onTabsLoaded;
