"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = require("tns-core-modules/ui/image");
var grid_layout_1 = require("tns-core-modules/ui/layouts/grid-layout");
function containerLoaded(args) {
    var container = args.object;
    var newImage = new image_1.Image();
    var imageString = String.fromCharCode(0xF2b9);
    newImage.src = "font://" + imageString;
    newImage.className = "font-awesome font-size";
    newImage.width = 49;
    newImage.height = 49;
    container.addChild(newImage);
    grid_layout_1.GridLayout.setRow(newImage, 1);
    grid_layout_1.GridLayout.setColumn(newImage, 0);
    grid_layout_1.GridLayout.setColumnSpan(newImage, 2);
}
exports.containerLoaded = containerLoaded;
