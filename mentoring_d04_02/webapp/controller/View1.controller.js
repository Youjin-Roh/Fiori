sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/FilterOperator"
], (Controller, Filter,JSONModel, FilterOperator) => {
    "use strict";

    return Controller.extend("mentoringd0402.controller.View1", {
        onInit() {
          // price 단위 설정 
          const oViewModel = new JSONModel({
            currency: "KRW",
          });
          this.getView().setModel(oViewModel, "curr");
        },



        // 필터 검색 
      onFilter(oEvent) {
        // build filter array
        const aFilter = [];
        const sQuery = oEvent.getParameter("query");
        if (sQuery) {
          aFilter.push(
            new Filter("product", FilterOperator.EQ, sQuery)
          );
        }

        // filter binding
        const oList = this.byId("orderList");
        const oBinding = oList.getBinding("items");
        oBinding.filter(aFilter);
      },
      

      // 재고 부족 버튼 -> 다이얼로그 
      async onButton(){
        this.oDialog ??= await this.loadFragment({
          name: "mentoringd0402.view.stock",
      });

      this.oDialog.open();

      // 재고가 5 미만인 데이터만 필터로 가져오기 
      // 필터링된 데이터를 담을 배열 선언
      const bFilter = [];

      bFilter.push(new Filter("quantity", FilterOperator.LE,5));  
      
      // 다이얼로그 속 리스트 불러오기 
      const oList = this.byId("orderList2");
      const oBinding = oList.getBinding("items");
      oBinding.filter(bFilter);


      },

      onClose(){
      this.oDialog.close();
      },

      onCheckbox: function(oEvent){
        // 체크 상태 가져오기
        // oEvent : 이벤트 핸들러에서 자동으로 전달되는 이벤트 
        var bSelected = oEvent.getParameter("selected");

        // 리스트 객체 가져오기 -> 내가 지정한 ID인 orderList 
        var oList = this.getView().byId("orderList");

        // 리스트의 바인딩된 아이템 가져오기
        var oBinding = oList.getBinding("items");

        // 선별된 데이터들을 새로 넣어줄 배열 선언
        var aFilters = [];

        if (bSelected) {
            // 체크되었을 경우, "배송완료" 상태만 필터링
            var oFilter = new Filter("status", FilterOperator.EQ, "배송완료");
            // 새로운 배열에 데이터 넣어주기 
            aFilters.push(oFilter);
        }

        // 리스트에 필터 적용
        oBinding.filter(aFilters);

      }
    });
});