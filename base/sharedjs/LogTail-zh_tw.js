//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/LogTail.js
// Generated: /usr/local/cpanel/base/sharedjs/LogTail-zh_tw.js
// Module:    legacy_shared/LogTail-zh_tw
// Locale:    zh_tw
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Too many errors from “[_1]”. Future errors will be suppressed.":"“[_1]”產生太多錯誤。 未來的錯誤將不顯示。","[asis,live_tail_log] encountered an internal error: [_1]":"[asis,live_tail_log] 發生內部錯誤: [_1]","[asis,live_tail_log] encountered the maximum allowed errors ([numf,_1]) and will not continue.":"[asis,live_tail_log] 發生允許的錯誤數上限 ([numf,_1])，將不會繼續。"};

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