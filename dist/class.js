"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    name; // どこからでもアクセス可能
    price; // 同じクラス内からのみアクセス可能
    category; // 同じクラス内及びサブクラス（継承先のクラス）からのみアクセス可能
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    // 同じクラス内からは全てのプロパティにアクセス可能
    describe() {
        console.log('----同じクラス内からのアクセス----');
        console.log(`商品名：${this.name}`);
        console.log(`価格：${this.price}`);
        console.log(`カテゴリ：${this.category}`);
    }
}
// Productクラスのサブクラス
class Dring extends Product {
    // サブクラスからはprivate以外のプロパティにアクセス可能
    describe() {
        console.log('----サブクラスからのアクセス----');
        console.log(`商品名：${this.name}`);
        // console.log(`価格：${this.price}`); // エラー
        console.log(`カテゴリ：${this.category}`);
    }
}
// Productクラスをインスタンス化する
const shampoo = new Product('シャンプー', 500, '生活雑貨');
shampoo.describe();
// Drinkクラスをインスタンス化する
const coffee = new Dring('コーヒー', 1500, '飲料');
coffee.describe();
// 外部からはpublicなプロパティにのみアクセス可能
console.log('----外部からのアクセス----');
console.log(`商品名：${shampoo.name}`);
// console.log(`価格：${shampoo.price}`); // エラー
// console.log(`カテゴリ：${shampoo.category}`); // エラー
//# sourceMappingURL=class.js.map