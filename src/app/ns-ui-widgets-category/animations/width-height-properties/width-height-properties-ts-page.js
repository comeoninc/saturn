"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("tns-core-modules/ui/enums");
function animateWidth(args) {
    var button = args.object;
    var page = button.page;
    var view = page.getViewById("lbl");
    view.animate({
        width: 320,
        duration: 1000,
        curve: enums_1.AnimationCurve.easeIn
    });
}
exports.animateWidth = animateWidth;
function animateHeight(args) {
    var button = args.object;
    var page = button.page;
    var view = page.getViewById("lbl");
    view.animate({
        height: 400,
        duration: 1000,
        curve: enums_1.AnimationCurve.easeIn
    });
}
exports.animateHeight = animateHeight;
