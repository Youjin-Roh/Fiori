sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/odata/v2/ODataModel"
], (Controller, JSONModel, ODataModel) => {
    "use strict";

    return Controller.extend("exercised0409.controller.View1", {
        onInit() {
            // OData 모델 생성
            // /v2/northwind/northwind.svc/ 라는 Odata 서비스를 이용하여 ODataModel 을 만들겠다고 선언
            var oDataModel = new ODataModel("/v2/northwind/northwind.svc/");

            // OData 읽기
            // OdataModel 안에 있는 데이터 셋인 /Products, /Orders, /Customers 등 중
            // /Products 를 읽겠다!  
            oDataModel.read("/Products",{
                
                // Products 데이터셋을 oData 라는 매개변수에 담겨서 함수가 작동함 
                success: function (oData){
                    

                    // 1️⃣ 데이터 정렬: UnitsInStock(재고수량) 기준으로 내림차순 정렬
                    var sortedData = oData.results.sort((a, b) => b.UnitsInStock - a.UnitsInStock);


                    // 2️⃣ 상위 5개 제품만 추출
                    var top5Products = sortedData.slice(0, 5);
                    

                    // oData.results의 데이터들을 data라는 키를 가진 상태로 JSONModel로 생성하겠다  
                    //var oChartModel = new JSONModel({data : oData.results});


                    // 3️⃣ JSONModel로 변환 (차트에서 사용하기 위해 ProductID + ProductName 결합)
                    var processedData = top5Products.map(item => ({
                        Product: `${item.ProductID} - ${item.ProductName}`, // 차트의 X축
                        UnitsInStock: item.UnitsInStock // 차트의 Y축
                    }));


                    // 4️⃣ 모델 바인딩
                    var oChartModel = new JSONModel({ data: processedData });


                    // Product라는 이름으로 설정하겠다 -> view에서 이제 Product로 부르면 됨 
                    // Product라는 모델이 JSON 구조로 데이트를 보관하고
                    // 그 안에 data라는 키로 processeData 배열이 들어간다
                    // 따라서 뷰에서 Product/>data로 데이터를 불러야한다 
                    this.getView().setModel(oChartModel,"Product");

                }.bind(this),
                error: function (oError) {
                    console.error("ODataModel 읽기 실패", oError);
                }
                

            });
        }
    });
});