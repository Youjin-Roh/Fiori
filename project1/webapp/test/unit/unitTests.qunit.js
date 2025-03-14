/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"sync_d04/project1/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});