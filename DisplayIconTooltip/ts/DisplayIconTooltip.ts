/// <reference path="../lib\@types\xrm\index.d.ts" />


namespace D365Script {
    /**
     * ビューにアイコンとツールチップを表示させる。
     * @param rowData 行の値
     * @param userLCID ユーザーLCID
     */
    export function DisplayIconTooltip(rowData, userLCID) {
        // 行データから「成績」の値を取得する。

        // 変数の宣言：アイコン名

        // 成績によってスイッチ

            // ⇒100～90点:秀

            // ⇒89～80点:優

            // ⇒79～70点:良

            // ⇒69～60点:可

            // ⇒59点以下:不

        // 結果を返却する
    }
}