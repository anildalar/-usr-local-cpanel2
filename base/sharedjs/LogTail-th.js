//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/LogTail.js
// Generated: /usr/local/cpanel/base/sharedjs/LogTail-th.js
// Module:    legacy_shared/LogTail-th
// Locale:    th
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Too many errors from “[_1]”. Future errors will be suppressed.":"มีข้อผิดพลาดมากเกินไปจาก “[_1]” ระบบจะไม่แสดงข้อผิดพลาดที่เกิดขึ้นหลังจากนี้","[asis,live_tail_log] encountered an internal error: [_1]":"[asis,live_tail_log] พบข้อผิดพลาดภายใน: [_1]","[asis,live_tail_log] encountered the maximum allowed errors ([numf,_1]) and will not continue.":"[asis,live_tail_log] พบข้อผิดพลาดถึงจำนวนสูงสุดที่ได้รับอนุญาต ([numf,_1]) และจะไม่ดำเนินการต่อ"};

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