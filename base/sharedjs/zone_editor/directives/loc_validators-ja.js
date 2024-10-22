//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/zone_editor/directives/loc_validators.js
// Generated: /usr/local/cpanel/base/sharedjs/zone_editor/directives/loc_validators-ja.js
// Module:    legacy_shared/zone_editor/directives/loc_validators-ja
// Locale:    ja
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Latitude must be entered in “Degree Minute Seconds Hemisphere” format. Example: “12 45 52.233 N”.":"緯度は「度分秒半球」の形式で入力してください。例: 「12 45 52.233 N」。","Longitude must be entered in “Degree Minute Seconds Hemisphere” format. Example: “105 40 33.452 W”.":"経度は「度分秒半球」の形式で入力してください。例: 「105 40 33.452 W」。","The first set of digits of Latitude are for Degrees. Degrees must be a 1 or 2 digit number between 0 and 90.":"緯度の最初のセットは角度表記に使用します。角度は、0～90の1桁または2桁の数字でなければなりません。","The first set of digits of Longitude are for Degrees. Degrees must be a 1 to 2 digit number between 0 and 180.":"経度の最初のセットは角度表記に使用します。角度は、0～180の1桁または2桁の数字でなければなりません。","The last character of Latitude is the hemisphere, which can only be N or S.":"緯度の最後の文字は半球で、N（北）またはS（南）しか選べません。","The last character of Longitude is the hemisphere, which can only be E or W.":"経度の最後の文字は半球で、E（東）またはW（西）しか選べません。","The second set of digits of Latitude are for Minutes. Minutes must be a 1 or 2 digit number between 0 and 59.":"緯度の2番目のセットは、分の表記に使用します。分は、0～59の1桁または2桁の数字でなければなりません。","The second set of digits of Longitude are for Minutes. Minutes must be a 1 or 2 digit number between 0 and 59.":"経度の2番目のセットは、分の表記に使用します。分は、0～59の1または2桁の数字でなければなりません。","The third set of digits of Latitude are for Seconds. Seconds can only have up to 3 decimal places, and must be between 0 and 59.999.":"緯度の3番目の数字セットは秒の表記に使用します。秒は小数点以下3桁までとし、0~59.999でなければなりません。","The third set of digits of Longitude are for Seconds. Seconds can only have up to 3 decimal places, and must be between 0 and 59.999.":"経度の3番目の数字セットは秒の表記に使用します。秒は小数点以下3桁までとし、0~59.999でなければなりません。"};

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