//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/frontend/jupiter/domains/validators/subdomain.js
// Generated: /usr/local/cpanel/base/frontend/jupiter/domains/validators/subdomain-ja.js
// Module:    /jupiter/domains/validators/subdomain-ja
// Locale:    ja
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"The server reserves this subdomain for system use only. Enter a different subdomain.":"サーバは、このサブドメインをシステム使用目的でのみ予約します。違うサブドメインを入力してください。","You must enter a valid subdomain.":"有効なサブドメインを入力してください。"};

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