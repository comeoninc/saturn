"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var label_1 = require("tns-core-modules/ui/label");
var stack_layout_1 = require("tns-core-modules/ui/layouts/stack-layout");
var color_1 = require("tns-core-modules/color/color");
var bottom_navigation_1 = require("tns-core-modules/ui/bottom-navigation");
function onBottomNavLoaded(args) {
    var bottomNav = args.object;
    var tabContentItemsArray = createTabsContentArray();
    bottomNav.items = tabContentItemsArray;
    var tabStrip = createTabStrip();
    bottomNav.tabStrip = tabStrip;
    bottomNav.selectedIndex = 1;
    console.log(bottomNav.nativeView);
}
exports.onBottomNavLoaded = onBottomNavLoaded;
function createTabStrip() {
    var tabStrip = new bottom_navigation_1.TabStrip();
    tabStrip.iosIconRenderingMode = "automatic";
    var tabStripItems = [];
    for (var index_1 = 0; index_1 < 3; index_1++) {
        var item = new bottom_navigation_1.TabStripItem();
        item.title = "Tab " + index_1;
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
    for (var index_2 = 0; index_2 < 3; index_2++) {
        var item = new bottom_navigation_1.TabContentItem();
        item.content = createContent(index_2);
        arr.push(item);
    }
    return arr;
}
function createContent(index) {
    var label = new label_1.Label();
    label.text = "" + (index === 0 ? "Home" : (index === 1 ? "Account" : "Search"));
    label.className = "h2 text-center";
    label.color = new color_1.Color("red");
    var stack = new stack_layout_1.StackLayout();
    stack.verticalAlignment = "middle";
    stack.addChild(label);
    return stack;
}
