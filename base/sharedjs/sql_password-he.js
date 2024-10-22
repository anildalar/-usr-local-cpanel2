//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/sql_password.js
// Generated: /usr/local/cpanel/base/sharedjs/sql_password-he.js
// Module:    legacy_shared/sql_password-he
// Locale:    he
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Close":"סגור","OK":"אישור","Setting password …":"המערכת מגדירה סיסמה…","Success":"הצלחה","The system is asking you to set this PostgreSQL user’s password because you have renamed the user. This user will not be able to log in until you set its password (you may use the user’s previous password here).":"המערכת מבקשת להגדיר את סיסמת המשתמש של PostgreSQL זה משום ששינית את שם המשתמש. משתמש זה לא יוכל להיכנס עד אשר תגדיר את הסיסמה שלו (ניתן להשתמש בסיסמה הקודמת של המשתמש כאן).","You have successfully set this user’s password.":"הגדרת בהצלחה את הסיסמה של משתמש זה."};

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