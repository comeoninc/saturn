"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modalView = "ns-ui-category/modal-view/modal-navigation/modal-root";
function openModal(args) {
    var mainpage = args.object.page;
    var options = {
        context: "some context",
        closeCallback: function () { },
        fullscreen: true
    };
    mainpage.showModal(modalView, options);
}
exports.openModal = openModal;
