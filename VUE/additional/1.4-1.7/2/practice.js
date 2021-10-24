// 飲食店のメニューの一覧
var menuArray = [
    {
        "id": "1", // id
        "name": "こってり", // 商品名
        "price": 790 // 金額
    },
    {
        "id": "2",
        "name": "あっさり　大盛",
        "price": 950
    },
    {
        "id": "3",
        "name": "味がさね",
        "price": 980
    },
    {
        "id": "4",
        "name": "焼豚2倍盛りチャーシューメン",
        "price": 1230
    }
]

var app = new Vue({
    el: "#ramen-shop",
    data: {
        menuArray: menuArray
    },
    filters: {
        parsePrice: function(price) {
            return price + "円"
        }
    },
    computed:{
        totalPrice: function() {
            return this.menuArray.reduce(function (sum, menu) {
                return sum + menu.price
            }, 0)
        }
    }
});


