/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";

var IMAGE_SIZE_X = 32;
var IMAGE_SIZE_Y = 32;
var DESTINATION_SIZE_X = 64;
var DESTINATION_SIZE_Y = 64;


function AnimatedImage(filename) {
    this.image = new Image();
    this.frameSize = new Vector(0, 0);
    this.frameCount = 0;
    this.image.onload = this.loadCallback.bind(this);
    this.image.onerror = this.errorCallback.bind(this);
    this.image.src = filename;
}

AnimatedImage.setLoadCallback = function (loadCallback) {
    AnimatedImage.loadCallback = loadCallback;
};

AnimatedImage.setErrorCallback = function (errorCallback) {
    AnimatedImage.errorCallback = errorCallback;
};

AnimatedImage.setContext = function (context) {
    AnimatedImage.context = context;
};

AnimatedImage.prototype.loadCallback = function () {
    this.frameSize = new Vector(this.image.width, this.image.width);
    this.frameCount = Math.floor(this.image.height / this.image.width);
    AnimatedImage.loadCallback();
};

AnimatedImage.prototype.errorCallback = function () {
    this.frameSize = new Vector(0, 0);
    this.frameCount = 0;
    AnimatedImage.errorCallback();
};

AnimatedImage.prototype.getFrameSize = function() {
    return this.frameSize;
};

AnimatedImage.prototype.getFrameCount = function() {
    return this.frameCount;
};






//this.draw = function (position, frameNumber) {
//    var sourcePosition = new Vector(0, frameNumber * this.size.y);
//    var destinationSize = new Vector(DESTINATION_SIZE_X, DESTINATION_SIZE_Y);
//    context.drawImage(this.image,
//            sourcePosition.x,
//            sourcePosition.y,
//            this.size.x,
//            this.size.y,
//            position.x,
//            position.y,
//            destinationSize.x,
//            destinationSize.y);
//};
//this.getFrameCount = function () {
//};