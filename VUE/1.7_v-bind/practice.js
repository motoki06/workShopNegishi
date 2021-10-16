var app = new Vue({
    el: "#app",
    data: {
        estimate: 1000, // 予算
        expenditure: 1001 // 支出
    },
    filters: {
        // 予算の表示
        parseEstimate: function(estimate) {
            return "予算：" + estimate + "円"
        },
        // 支出の表示
        parseExpenditure: function(expenditure) {
            return "支出：" + expenditure + "円"
        }
    },
    computed:{
        showAlertClass: function(){
            // 予算よりも支出が高ければ、alertクラスを付与
            if(this.estimate < this.expenditure){
                return 'alert'
            } 
        },
        showAlertClass2: function(){
            // 予算よりも支出が高ければ、alertクラスを付与
            if(this.estimate < this.expenditure){
                return true
            } 
        }
    }
});