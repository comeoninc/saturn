"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onShowingModally(args) {
    console.log("" + args.eventName);
}
exports.onShowingModally = onShowingModally;
function onShownModally(args) {
    console.log(" " + args.context);
    console.log(" " + args.eventName);
    console.log(" " + args.object);
}
exports.onShownModally = onShownModally;
