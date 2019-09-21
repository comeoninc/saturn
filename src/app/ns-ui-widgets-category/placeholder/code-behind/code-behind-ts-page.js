"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var placeholder_1 = require("tns-core-modules/ui/placeholder");
var platform_1 = require("tns-core-modules/platform");
var utils_1 = require("tns-core-modules/utils/utils");
function onLayoutLoaded(ltargs) {
    var layout = ltargs.object;
    var placeholder = new placeholder_1.Placeholder();
    placeholder.on("creatingView", function (args) {
        var nativeView;
        if (platform_1.isIOS) {
            nativeView = UITextView.new();
            nativeView.text = "Native View (iOS)";
        }
        else if (platform_1.isAndroid) {
            nativeView = new android.widget.TextView(utils_1.ad.getApplicationContext());
            nativeView.setText("Native View (Android)");
        }
        args.view = nativeView;
    });
    layout.addChild(placeholder);
}
exports.onLayoutLoaded = onLayoutLoaded;
