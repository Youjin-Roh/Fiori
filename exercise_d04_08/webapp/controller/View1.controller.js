sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("exercised0408.controller.View1", {
        onInit() {
            // 1. 데이터 정의
            var oData = {
                data1: [
                    { month: "2023-01", sales: 12000 },
                    { month: "2023-02", sales: 14000 },
                    { month: "2023-03", sales: 15000 },
                    { month: "2023-04", sales: 13000 },
                    { month: "2023-05", sales: 16000 },
                    { month: "2023-06", sales: 17000 }
                ]
            };

            // 2. oData 모델을 JSON 모델로 변환해주기
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel, "chart");


            // 1. 데이터 정의
            var oData2 = {
                data2: [
                    { category: "A등급", value: 50 },
                    { category: "B등급", value: 65 },
                    { category: "C등급", value: 75 },
                    { category: "D등급", value: 40 }
                ]
            };

            // 2. oData 모델을 JSON 모델로 변환해주기
            var oModel2 = new JSONModel(oData2);
            this.getView().setModel(oModel2, "score");


        }
    });
});