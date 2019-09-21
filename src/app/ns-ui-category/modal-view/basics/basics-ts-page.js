"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modalViewModulets = "ns-ui-category/modal-view/basics/modal-ts-view-page";
function openModal(args) {
    var mainView = args.object;
    var option = {
        context: { username: "test_username", password: "test" },
        closeCallback: function (username, password) {
            alert("Username: " + username + " : Password: " + password);
        },
        fullscreen: true
    };
    mainView.showModal(modalViewModulets, option);
}
exports.openModal = openModal;
