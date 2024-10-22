//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/whostmgr/docroot/templates/mod_security/directives/ruleVendorUrlValidator.js
// Generated: /usr/local/cpanel/whostmgr/docroot/templates/mod_security/directives/ruleVendorUrlValidator-zh_tw.js
// Module:    /templates/mod_security/directives/ruleVendorUrlValidator-zh_tw
// Locale:    zh_tw
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"The URL must contain a protocol, domain, and file name in the correct format. (Example: [asis,https://example.com/example/meta_example.yaml])":"URL 必須包含正確格式的通訊協定、網域和檔案名稱。 (範例: [asis,https://example.com/example/meta_example.yaml])","The URL must use one of the following recognized protocols: [join,~, ,_1]":"URL 必須使用下列其中一個可辨識的通訊協定: [join,~, ,_1]","The file name must have the .yaml extension. (Example: [asis,meta_example.yaml])":"檔案名稱的副檔名必須是 .yaml。 (範例: [asis,meta_example.yaml])","The file name must start with meta_, followed by the vendor name and have the .yaml extension. (Example: [asis,meta_example.yaml])":"檔案名稱必須以 meta_ 開頭，後面接著廠商名稱，且副檔名為 .yaml。 (範例: [asis,meta_example.yaml])","The file name must use the meta_ prefix, followed by the vendor name and a .yaml extension. The vendor name must only contain characters in the following set: [join,~, ,_1] (Example: [asis,meta_example.yaml])":"檔案名稱必須使用 meta_ 首碼，後面接著廠商名稱和 .yaml 副檔名。 廠商名稱只能包含下列集合中的字元: [join,~, ,_1] (範例: [asis,meta_example.yaml])","The file name must use the meta_ prefix. (Example: [asis,meta_example.yaml])":"檔案名稱必須使用 meta_ 首碼。 (範例: [asis,meta_example.yaml])","The protocol should be followed by a colon and two forward slashes. (Example: [asis,https://])":"通訊協定後面應接著冒號和兩個斜線。 (範例: [asis,https://])","The vendor name part of the file name must only contain characters in the following set: [join,~, ,_1] (Example: [asis,meta_example.yaml])":"檔案名稱的廠商名稱部分只能包含下列集合中的字元: [join,~, ,_1] (範例: [asis,meta_example.yaml])"};

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