sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  (Controller, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("exercised040314.controller.View1", {
      onInit() {},

      // 검색 필터 & 드롭다운
      onSearch() {
        // build filter array
        const aFilter = [];

        const sQuery = this.byId("inputField").getValue();
        if (sQuery && sQuery !== "") {
          aFilter.push(new Filter("class", FilterOperator.EQ, sQuery));
        }

        const sGender = this.byId("genderSelect").getSelectedKey();
        if (sGender && sGender !== "") {
          aFilter.push(new Filter("gender", FilterOperator.EQ, sGender));
        }

        // filter binding
        const oList = this.byId("cTable");
        const oBinding = oList.getBinding("items");
        oBinding.filter(aFilter);
      },

      async onDetails(oEvent) {
        // 클릭된 버튼이 속한 행(Row)의 바인딩 컨텍스트 가져오기
        var oButton = oEvent.getSource();
        var oContext = oButton.getBindingContext("data");

        if (!oContext) {
          MessageToast.show("데이터를 찾을 수 없습니다.");
          return;
        }

        // 선택된 행의 데이터 가져오기
        var oData = oContext.getObject();

        this.oDialog ??= await this.loadFragment({
          name: "exercised040314.view.Details",
        });

        this.byId("dName").setText("이름: " + oData.Name);
        this.byId("dClass").setText("클래스: " + oData.class);
        this.byId("dGender").setText("성별: " + oData.gender);


        this.oDialog.open();
      },

      onOk() {
        this.oDialog.close();
      },

      async onChart() {
        this.oDialog ??= await this.loadFragment({
          name: "exercised040314.view.Chart",
        });
        this.oDialog.open();
      },
    });
  }
);
