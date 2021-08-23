/// <reference path="../lib\@types\xrm\index.d.ts" />


namespace D365Script {
    /**
     * ビューにアイコンとツールチップを表示させる。
     * @param rowData 行の値
     * @param userLCID ユーザーLCID
     */
    export function DisplayIconTooltip(rowData, userLCID) {
        debugger;
        // 行データをJSON解析する
        var rowDataJson = JSON.parse(rowData);
        // 行データから「成績」の値を取得する。
        var coldata = rowDataJson.pas_seiseki_tensu;
        // 変数の宣言：アイコン名
        var imgName = "";
        // 変数の宣言：ツールチップ
        var tooltip = "";
        // 成績によってスイッチ
        switch (Math.floor(coldata / 10)) {
            // ⇒100～90点:秀
            case 10:
            case 9:
                imgName = "pas_icon_90100";
                tooltip = "大変優秀な成績です。";
                break;  
            // ⇒89～80点:優
            case 8:
                imgName = "pas_icon_8089";
                tooltip = "優秀な成績です。";
                break;  
            // ⇒79～70点:良
            case 7:
                imgName = "pas_icon_7079";
                tooltip = "平均的な成績です。";
                break;  
            // ⇒69～60点:可
            case 6:
                imgName = "pas_icon_6069";
                tooltip = "努力を要する成績です。";
                break;  
            // ⇒59点以下:不
            case 5:
            case 4:
            case 3:
            case 2:
            case 1:
            case 0:
                imgName = "pas_icon_0059";
                tooltip = "より一層の努力を要する成績です。";
                break;  
            default:
                imgName = "";
                tooltip = "";
                break;
        }

        return [imgName, tooltip];
        // 結果を返却する
    }
}