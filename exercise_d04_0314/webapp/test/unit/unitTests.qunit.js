/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"exercise_d04_0314/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});