sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  (BaseController, MessageToast) => {
    "use strict";

    return BaseController.extend("sync.d04.exercised0405.controller.App", {
      onPress: function () {
        // read msg from i18n model
        var sMsg = this.getView().getModel().getProperty("/input");

        // show message
        if (!sMsg) {
          sMsg = "메세지 입력바랍니다.";
        }
        // 값이 있으면 입력값 그대로 출력
        MessageToast.show(sMsg);
      },
    });
  }
);
