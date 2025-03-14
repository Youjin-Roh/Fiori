sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/m/MessageToast"
], (Controller, ODataModel, MessageToast) => {
    "use strict";

    return Controller.extend("exercised04072.controller.View1", {
        onInit() {
            // OData 모델 생성 및 설정
            var oModel = new ODataModel("/sap/opu/odata/sap/ZCARR_D04_SRV/");
            //console.log(oModel, "dd");

            // 현재 컨트롤러와 연결된 뷰 View1의 ODataModel를 생성 
            //data라는 이름의 ODataModel 모델을 뷰에 바인딩  
            this.getView().setModel(oModel, "data");

        },


        onCreateEntry() {
            // 현재 뷰에 설정된 OData 모델을 가져옴 
            var oModel = this.getView().getModel("data");
            
            // this객체에 해당하는 뷰를 얻어오기 : getView
            // 뷰와 컨트롤러는 1대1 대응이니까 그 연결된 뷰 객체를 가져옴 
            // input 컨트롤 가져오기 : byId -> 뷰에 내가 쓴 객체 ID로 가져옴 
            // input 값을 가져오기 : getValue 
            var sCarrid = this.getView().byId("inputCarrid").getValue();
            var sCarrname = this.getView().byId("inputCarrname").getValue();
            var sCurrcode = this.getView().byId("inputCurrcode").getValue();
            var sUrl = this.getView().byId("inputUrl").getValue();
        
            // input을 통해 받은 값들을 새로운 데이터로 추가
            // JSON 객체를 생성 
            var oNewEntry = {
                Carrid: sCarrid,
                Carrname: sCarrname,
                Currcode: sCurrcode,
                Url: sUrl
            };

            // OData 모델을 통해 데이터 생성 (POST 요청)
            oModel.create("/zcarr_d04Set", oNewEntry, {
                success: function() {
                    MessageToast.show("항공사 데이터가 성공적으로 생성되었습니다.");
                    
                    // 테이블 데이터 새로고침
                    oModel.refresh(true);
                },
                error: function() {
                    MessageToast.show("데이터 생성 오류");
                }
            });

            // 입력 필드 초기화
            this.getView().byId("inputCarrid").setValue("");
            this.getView().byId("inputCarrname").setValue("");
            this.getView().byId("inputCurrcode").setValue("");
            this.getView().byId("inputUrl").setValue("");
        },


        onDelete() {
            // 연결된 뷰에서 데이터 모델이 적용된 테이블 객체 가져옴 
            var oTable = this.getView().byId("mTable");

            // 테이블에서 선택된 아이템 가져오기
            // 뷰에서 모드를 mode="SingleSelect" 로 설정함 
            var sItem = oTable.getSelectedItem();
            //console.log(sItem);

            if (sItem) {  //아이템이 있으면 
                // 바인딩된 context 가져오기
            var mContext = sItem.getBindingContext("data");
            }else{  //없으면 
                MessageToast.show("삭제할 항목을 선택하세요");
                return ;
            }

            // mContext는 선택된 데이터 항목에 대한 OData 바인딩 정보를 포함
            // 선택된 항목의 경로 찾기 
            var mPath = mContext.getPath();
            //console

            // oData 모델 가져오기 
            var oModel = this.getView().getModel("data");

            oModel.remove(mPath, {
                success: function() {
                    MessageToast.show("데이터가 성공적으로 삭제되었습니다.");
                    
                    // 테이블 데이터 삭제 후, 새로고침
                    oTable.removeSelections();

                    oModel.refresh(true);

                    // oTable.refresh(true);
                },
                error: function() {
                    MessageToast.show("데이터 삭제에 실패했습니다.");
                }
            });

        },
        // onUpdate() { // update 버튼을 눌렀을 때 이벤트 
        //     // 데이터 모델이 적용된 테이블 객체 가져옴 
        //     var oTable = this.getView().byId("mTable");

        //     // 테이블에서 선택된 아이템 가져오기
        //     var sItem = oTable.getSelectedItem();
        //     //console.log(sItem);

        //     if(!sItem){
        //         MessageToast.show("변경할 항목을 선택하세요");
        //     }
        //     else{
        //     // 바인딩된 컨텍스트 가져오기 
        //     var mContext = sItem.getBindingContext("data");
        //     // -> 해당 객체 가져오기 
        //     var oData = mContext.getObject();
        //     // console.log(123);
        //     // this.oDialog ??= await this.loadFragment({
        //     //         name: "exercised04072.view.UpdateDialog",
        //     // });
            
            
        //     }
        // },

        async openDialog(){
            this.oDialog ??= await this.loadFragment({
                name: "exercised04072.view.UpdateDialog",
        });
        var oDataTable = this.getView().byId("mTable");
        var selectedItem = oDataTable.getSelectedItem();

        // 선택 안하고 버튼 누를 때 
        if(!selectedItem){
            MessageToast.show("변경할 항목을 선택하세요");
        }

        var oContext = selectedItem.getBindingContext("data");
        // 다이얼로그에 내가 선택한 데이터들이 바로 뜨도록 설정 
        this.oDialog.setBindingContext(oContext, "data");

        this.oDialog.open();

        },


        onCloseDialog() {
			this.oDialog.close();
		},


        onUpdateSaveDialog(){ // Dialog에서 update 버튼을 눌러 변경 내용을 저장할때 

            // 데이터 모델이 적용된 테이블 객체 가져옴 
            var oTable = this.getView().byId("mTable");

            // 테이블에서 선택된 아이템 가져오기
            var sItem = oTable.getSelectedItem();

            var mContext = sItem.getBindingContext("data");

            // 선택된 항목의 경로 찾기 
            var sPath = mContext.getPath();

            var oEditModel = this.getView().getModel("data"); // 수정 데이터 모델 가져오기
            
            var updatedCarrname = this.byId("uCarrname").getValue();
            var updatedUrl = this.byId("uUrl").getValue();
            var carrId = this.byId("uCarrid").getValue();
            var currCode = this.byId("uCurrcode").getValue();

            
            var updateEntry = {
                Carrid: carrId,
                Carrname: updatedCarrname,
                Currcode: currCode,
                Url: updatedUrl,
                };

            // OData 업데이트 (PUT 요청)
            oEditModel.update(sPath, updateEntry, {
                success: function () {
                    MessageToast.show("데이터가 성공적으로 수정되었습니다.");
                    oEditModel.refresh(true); // 데이터 새로고침
                },
                error: function () {
                    MessageToast.show("데이터 수정에 실패했습니다.");
                }
    });
    this.oDialog.close();
        }
    });
});