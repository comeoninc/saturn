"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var label_1 = require("tns-core-modules/ui/label");
var stack_layout_1 = require("tns-core-modules/ui/layouts/stack-layout");
var color_1 = require("tns-core-modules/color/color");
var tabs_1 = require("tns-core-modules/ui/tabs");
function onTabsLoaded(args) {
    var tabs = args.object;
    var tabContentItemsArray = createTabsContentArray();
    tabs.items = tabContentItemsArray;
    var tabStrip = createTabStrip();
    tabs.tabStrip = tabStrip;
    tabs.selectedIndex = 1;
    tabs.swipeEnabled = true;
    tabs.offscreenTabLimit = 1;
    tabs.tabsPosition = "top";
    console.log(tabs.nativeView);
}
exports.onTabsLoaded = onTabsLoaded;
function createTabStrip() {
    var tabStrip = new tabs_1.TabStrip();
    tabStrip.iosIconRenderingMode = "automatic";
    var tabStripItems = [];
    for (var index_1 = 0; index_1 < 5; index_1++) {
        var item = new tabs_1.TabStripItem();
        item.title = "Tab " + (index_1 + 1);
        item.iconSource = index_1 === 0
            ? "res://baseline_home_black_24pt"
            : (index_1 === 1
                ? "res://baseline_account_balance_black_24pt"
                : "res://baseline_search_black_24pt");
        tabStripItems.push(item);
    }
    tabStrip.items = tabStripItems;
    return tabStrip;
}
function createTabsContentArray() {
    var arr = [];
    for (var index_2 = 0; index_2 < 5; index_2++) {
        var item = new tabs_1.TabContentItem();
        item.content = createContent(index_2);
        arr.push(item);
    }
    return arr;
}
function createContent(index) {
    var label = new label_1.Label();
    label.text = "Content " + (index + 1);
    label.className = "h2 text-center";
    label.color = new color_1.Color("red");
    label.id = "label";
    var stack = new stack_layout_1.StackLayout();
    stack.verticalAlignment = "middle";
    stack.addChild(label);
    stack.on("loaded", function (args) {
        console.log("Loaded [" + args.object.getViewById("label").text + "]");
    });
    stack.on("unloaded", function (args) {
        console.log("UNLOADED [" + args.object.getViewById("label").text + "]");
    });
    return stack;
}
