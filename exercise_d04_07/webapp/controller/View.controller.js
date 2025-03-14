sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel", // ODataModel 모듈 추가
], (Controller, ODataModel) => {
    "use strict";

    return Controller.extend("exercised0407.controller.View", {
        onInit() {
            console.log("1234");
            // OData 모델 생성 및 설정
            // var oModel = new ODataModel("/sap/opu/odata/sap/ZCARR_D04_SRV/");
            // //console.log(oModel, "dd");

            // // view 에 모델 설정
            // this.getView().setModel(oModel);
            //this.getView().setModel(oModel, "data");
        }
    });
});