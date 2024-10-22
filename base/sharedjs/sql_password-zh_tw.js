//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/sql_password.js
// Generated: /usr/local/cpanel/base/sharedjs/sql_password-zh_tw.js
// Module:    legacy_shared/sql_password-zh_tw
// Locale:    zh_tw
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Close":"關閉","OK":"確定","Setting password …":"正在設定密碼…","Success":"成功","The system is asking you to set this PostgreSQL user’s password because you have renamed the user. This user will not be able to log in until you set its password (you may use the user’s previous password here).":"系統要求您設定這個 PostgreSQL 使用者的密碼，因為您將該使用者重新命名。 必須等到您設定密碼後，此使用者才能登入 (您可以在這裡使用使用者之前的密碼)。","You have successfully set this user’s password.":"您已成功設定這個使用者的密碼。"};

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