"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modalView = "ns-ui-category/modal-view/custom-actionbar/modal-ts-root";
function openModal(args) {
    var mainpage = args.object.page;
    var option = {
        context: "some context",
        closeCallback: function () { },
        fullscreen: true
    };
    mainpage.showModal(modalView, option);
}
exports.openModal = openModal;
