/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"syncd04/exercise_d04_06/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});