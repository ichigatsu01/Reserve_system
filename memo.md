# 作成イメージ
## まとめ
- 患者・管理者ログイン画面
- 患者予約・予約取り消し画面
- 管理者　予約一覧画面

## 作成の狙い
ReactやMUIに頼らず、JavaScriptでサイトを作る。  
以前作ったFirebaseの認証機能をもう一度使う。    
予定ではTypeScriptの練習も兼ねるつもりだったが、Reactと組み合わせるほうが効果的と判断して今回は見送り。

## 色
#454545 #79A1D4 #9fbcdf #abcae8 #ffeed5     
参考：https://saruwakakun.com/design/gallery/palette

## JavaScriptの今更ながらの復習
- 関数に()を付けて書くか、付けないかの違い
()を付ける：その場で実行する　()を付けない：関数名そのものをなんらかに引き渡すか。

## その他メモ
- 変数をjsファイルをまたいで使う知識の習得
const hoge = new Fullcalender... ではなく window.hoge = new Fullcalender...と書く