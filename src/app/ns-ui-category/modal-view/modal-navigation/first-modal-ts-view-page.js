"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onNavigate(args) {
    var view = args.object;
    var page = view.page;
    page.frame.navigate("ns-ui-category/modal-view/modal-navigation/second-modal-ts-view-page");
}
exports.onNavigate = onNavigate;
function onPageLoaded(args) {
    console.log("onPageLoaded");
}
exports.onPageLoaded = onPageLoaded;
function onCloseModal(args) {
    args.object.closeModal();
}
exports.onCloseModal = onCloseModal;
