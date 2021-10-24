// 飲食店のメニューの一覧
var menuArray = [
    {
        "id": "1", // id
        "name": "トリート with トリック フラペチーノ", // 商品名
        "price": 690, // 金額
        "url": "https://product.starbucks.co.jp/beverage/frappuccino/4524785457669/?category=beverage"
    },
    {
        "id": "2",
        "name": "キャラメル アップル ルイボス ティー",
        "price": 540,
        "url": "https://product.starbucks.co.jp/beverage/tea/4524785483293/?category=beverage"
    },
    {
        "id": "3",
        "name": "ダーク モカ チップ フラペチーノ",
        "price": 550,
        "url": "https://product.starbucks.co.jp/beverage/frappuccino/4524785166066/?category=beverage"
    },
    {
        "id": "4",
        "name": "チャイ ティー ラテ",
        "price": 484,
        "url": "https://product.starbucks.co.jp/beverage/tea/4524785034204/?category=beverage"
    }
]

var app = new Vue({
    el: "#cafe",
    data: {
        menuArray: menuArray
    },
    filters: {
        parsePrice: function(price) {
            return price + "円"
        }
    },
    computed: {
        /*
        ★要確認★
        600円を超える場合には「alert」を返したいが、priceが取得できない
        */
        over600: function() {
            if (this.price > 600) {
                return 'alert'
            }
        }
    }
});