sap.ui.define([
],function () {
   "use strict";

   return {
    // price와 currency 를 합쳐서 나타내는 함수 
       formatPrice: function (fPrice, fCurrency) {
        var nPrice = String(fPrice)+ " " + String(fCurrency);

        return nPrice;
       },

       // 가격 색 설정 
       mColor: function (fStock){
        if (fStock === 0) {
            return "Error";  // 빨간색 (비쌈)
        } else{
            return "Success"; // 초록색 (저렴함)
        }
       },

       // rating 아이콘 넣기 
       mRating: function (fRating){
        return fRating <= 4.0 ? 'Flagged' : 'Favorite'
       },

       // 정가, 할인중 표시 
       mDiscount: function (fDiscount){
        return fDiscount === 0 ? '정가' : '할인 중'
       },

       // 재고 표시   
       mUnit: function (fStock, fUnit){
        var nUnit = String(fStock);

        if (fUnit==='piece') {
            return nUnit + ' ' + '대 (제품에 따라)';
        }else if(fUnit==='unit'){
            return nUnit + ' ' + '개';
        }else if(fUnit==='set'){
            return nUnit + ' ' + '세트';
        }else{
            return nUnit + ' ' + '박스, 상자';
        }
       }

   };
});