sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("exercised0410.controller.Main", {

        // 컨트롤러가 로드될 때 한번만 실행 -> 모델은 여기서 생성 
        onInit() {
            //해당 라우터 정보를 가져옴 
            // 컨트롤러에 유효한 객체 
            // getRouter : 라우터에 모든 정보를 가져옴 -> 거기서 getRoute로 특정 하나만 가져옴 
            this.oRouter = this.getOwnerComponent().getRouter();

            // 다른 매개 변수로 전달해주는?
            // 추가 메소드인 onPatternMatched 
            // getRoute : 특정한 하나의 라우트를 가져옴 getRouter는 다 가져옴 
            this.oRouter.getRoute("RouteMain").attachPatternMatched(this._onPatternMatched, this);


            //student 정보 가져오기 

        },
        //pattern이란 일치할때만, 일치할때마다 실행되는 이벤트
        // 라우터 객체 안에서 이벤트들이 계속일어날때마다
        // 이 함수를 통해 동작 수행 : 값 초기화, 세팅 등 
        _onPatternMatched(oEvent){
            // 특정한 파라미터 가져올 때
            var oArgu = oEvent.getParameter("arguments"); //key1, key2 에 대한 값이 들어옴
            // -> manifest의 name과 pattern이 argument 형태로 들어오게 됨

            // 2. 새로운 JSON 모델을 생성하여 ID 값을 저장
            var oModel = new JSONModel(oArgu);
            
            // 3. 뷰에 "detailModel"로 모델 설정
            this.getView().setModel(oModel, "detailModel");
        },



        onGoDetail(){
            // mTable 에서 선택한 아이템
            
            var oTable = this.getView().byId("mTable");
            var sItem = oTable.getSelectedItem();
            if (!sItem) {
                MessageToast.show("항목을 선택하세요");
                return;
            }
            
            // var oModel = this.getView().getModel("detailModel");

            var mContext = sItem.getBindingContext("students");
            var oData = mContext.getObject();

            //input 필드에 들어오는 값 찾기 -> 매개변수로 전달하기
            //let sValue = this.byId("idInput").getValue();

            this.oRouter.navTo('RouteDetail',{
                "no" : oData.no,
                "name" : oData.name,
                "gender" : oData.gender,
                "birthdate" : oData.birthdate
            },true);
            
        }
    });
});