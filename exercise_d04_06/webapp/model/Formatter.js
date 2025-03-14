sap.ui.define([
     "sap/ui/core/format/DateFormat"
],function (DateFormat) {
    "use strict";

    return {
        formatDate: function (fDate) {
            
        // 날짜 포맷 객체 생성
        var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
            pattern: "yyyy/MM/dd"
        });

        // 날짜 변환 후 반환
        return oDateFormat.format(new Date(fDate));
        },



        
        // marker 달기 
        isFutureMonth: function (fDate) {
            console.log(fDate)
        // 현재 월 가져오기
        var iMonth = new Date().getMonth() + 1;
 
        // 생년월일의 월 가져오기 
        var bDate = new Date(fDate);
        var fMonth = bDate.getMonth() + 1;
     
        if (fMonth < iMonth) {
         return "Flagged";
 
        }else{
 
         return "Favorite";
 
        }
 
        }

    };
});