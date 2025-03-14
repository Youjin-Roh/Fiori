sap.ui.define([
],function () {
   "use strict";

   return {
    // status에 따른 색 표현 
       statusColor: function (fStatus) {
        if (fStatus === '배송완료') {
            return "Success";
        }else{
            return "Error";
        }
       },

       // 배송 정보 
       statusInfo: function(fStatus, fdelivery){
        if (fStatus === '배송완료') {
            return "배송일 : " + fdelivery;
        }
       }

    //    // 다이얼로그 
    //    dialogInfo: function(fid, fpro, fstock){
    //     if (fstock < 5) {
    //         return '('+ fid +')' + fpro + ' ' + '재고 : ' + fstock;   
    //     }else{
    //         return;
    //     }
    //    }

   };
});