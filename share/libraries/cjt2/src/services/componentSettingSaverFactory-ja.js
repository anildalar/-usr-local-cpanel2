//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/share/libraries/cjt2/src/services/componentSettingSaverFactory.js
// Generated: /usr/local/cpanel/share/libraries/cjt2/src/services/componentSettingSaverFactory-ja.js
// Module:    cjt/services/componentSettingSaverFactory-ja
// Locale:    ja
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"The [asis,register] method requires the [asis,componentName].":"[asis,register]メソッドには、[asis,componentName]が必要です。","The system could not register the page for the interface settings reset. Is the [asis,interfacereset.js] file missing?":"システムがインターフェース設定リセットのページを登録することができませんでした。[asis,interfacereset.js]ファイルが見当たりませんか?","[asis,ComponentSettingSaverService] failed to parse the stored [asis,NVData] file for this page “[_1]”.":"[asis,ComponentSettingSaverService] failed to parse the stored [asis,NVData] file for this page “[_1]”.","[asis,ComponentSettingSaverService] failed to register the component “[_1]”. A component with the same identifier already exists.":"[asis,ComponentSettingSaverService] failed to register the component “[_1]”. A component with the same identifier already exists.","[asis,ComponentSettingSaverService] failed to register the component “[_1]”. You must set the page identifier.":"[asis,ComponentSettingSaverService] failed to register the component “[_1]”. You must set the page identifier.","[asis,ComponentSettingSaverService] failed to retrieve the requested component settings. You must set the page identifier.":"[asis,ComponentSettingSaverService]が要求コンポーネント設定の取得に失敗しました。ページIDを設定する必要があります。","[asis,ComponentSettingSaverService] failed to save the component settings for “[_1]”. You must set the page identifier.":"[asis,ComponentSettingSaverService] failed to save the component settings for “[_1]”. You must set the page identifier.","[asis,ComponentSettingSaverService] failed to unregister the component “[_1]”. No such component exists.":"[asis,ComponentSettingSaverService] failed to unregister the component “[_1]”. No such component exists."};

    if (!this.LEXICON) {
        this.LEXICON = {};
    }

    for(var item in newLex) {
        if(newLex.hasOwnProperty(item)) {
            var value = newLex[item];
            if (typeof(value) === "string" && value !== "") {
                // Only add it if there is a value.
                this.LEXICON[item] = value;
            }
        }
    }
})();
//~~END-GENERATED~~
