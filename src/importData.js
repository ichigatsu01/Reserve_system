const admin = require("firebase-admin"); // node.jsのライブラリを参照しに行く。npm i firebase-adminが必要。
const serviceAccount = require("../reserve-system-139b2-firebase-adminsdk-fbsvc-cf5233e0b7.json"); // firestoreから発行するjsonファイル。けしてgithubに直接アップロードしてはいけない。
const data = require("../firebaseData.json"); // 今回firestoreに一括登録しようとしているデータ

admin.initializeApp({ // Firebase Admin SDKの初期化
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore(); // firebaseデータベースのオブジェクト生成、読み書き・追加削除が出来る
const batch = db.batch(); // バッチ処理用のオブジェクト生成

Object.entries(data).forEach(([id, doc]) => {
    const ref = db.collection("reservations").doc(id);
    batch.set(ref, doc);
});

batch.commit().then(() => {
    console.log("データインポート完了！");
}).catch((err) => {
    console.error("インポートエラー:", err);
});
