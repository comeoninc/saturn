"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var button_1 = require("tns-core-modules/ui/button/");
var stack_layout_1 = require("tns-core-modules/ui/layouts/stack-layout");
function onNavigatingTo(args) {
    var page = args.object;
    var myStack = new stack_layout_1.StackLayout();
    myStack.orientation = "horizontal";
    var button1 = new button_1.Button();
    button1.backgroundColor = "#0099CC";
    button1.width = 100;
    button1.margin = 8;
    var button2 = new button_1.Button();
    button2.backgroundColor = "#CCFFFF";
    button2.width = 100;
    button2.margin = 8;
    var button3 = new button_1.Button();
    button3.backgroundColor = "#8C489F";
    button3.width = 100;
    button3.margin = 8;
    myStack.addChild(button1);
    myStack.addChild(button2);
    myStack.addChild(button3);
    page.content = myStack;
}
exports.onNavigatingTo = onNavigatingTo;
