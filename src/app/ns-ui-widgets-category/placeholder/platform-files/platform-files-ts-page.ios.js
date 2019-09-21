"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function creatingView(args) {
    var nativeView = UILabel.new();
    nativeView.text = "Native View - iOS app";
    args.view = nativeView;
}
exports.creatingView = creatingView;
