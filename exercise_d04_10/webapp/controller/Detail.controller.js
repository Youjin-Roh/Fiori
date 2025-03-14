sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("exercised0410.controller.Detail", {
        // 컨트롤러가 로드될 때 한번만 실행 -> 모델은 여기서 생성 
        onInit() {
            this.oRouter = this.getOwnerComponent().getRouter();
            this.oRouter.getRoute("RouteDetail").attachPatternMatched(this._onPatternMatched, this);

            
        },
        //pattern이란 일치할때만, 일치할때마다 실행되는 이벤트
        _onPatternMatched(oEvent){
            // 특정한 파라미터 가져올 때
            var oArgu = oEvent.getParameters().arguments; //key1, key2 에 대한 값이 들어옴
            // -> manifest의 name과 pattern이 argument 형태로 들어오게 됨

            var oModel = new JSONModel(oArgu);

            this.getView().setModel(oModel, "detailModel");

            // if (oArgu) {
            //     // 바인딩 데이터 업데이트
            //     this.getView().byId("id").setValue(oArgu.no);
            //     this.getView().byId("name").setValue(oArgu.name);
            //     this.getView().byId("gender").setValue(oArgu.gender);
            //     this.getView().byId("birthdate").setValue(oArgu.birthdate);
            // }
        },

        onGoBack(){
            //메인으로 돌아가는 로직 구성 
            this.getOwnerComponent().getRouter().navTo("RouteMain",{
                // "?query" : {
                //     // 메인으로 돌아올 때의 파라미터 값은 없다 
                //     // key1:"Key1",
                //     // key2:"Key2"
                // }
            }
            );
                
        
        }
    });
});