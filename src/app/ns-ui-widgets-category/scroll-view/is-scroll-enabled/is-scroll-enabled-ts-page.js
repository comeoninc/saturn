"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = observable_1.fromObject({ scrollEnabled: true });
}
exports.onPageLoaded = onPageLoaded;
function onTap(args) {
    var page = args.object.page;
    var viewModel = page.bindingContext;
    viewModel.scrollEnabled = !viewModel.scrollEnabled;
}
exports.onTap = onTap;
