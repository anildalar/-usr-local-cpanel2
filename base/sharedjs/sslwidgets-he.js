//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/sslwidgets.js
// Generated: /usr/local/cpanel/base/sharedjs/sslwidgets-he.js
// Module:    legacy_shared/sslwidgets-he
// Locale:    he
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Certificate Expiration":"תפוגת תוקף של אישור","Certificate Key Sizes":"גדלים של מפתחות אישורים","Contact your certificate authority ([_1]) to reissue this certificate with a [numf,_2]-bit key.":"פנה לרשות האישורים שלך ([_1]) כדי להנפיק מחדש אישור זה עם מפתח של [numf,_2] סיביות.","Contact your certificate authority to reissue this certificate with a longer key.":"פנה לרשות האישורים שלך כדי להנפיק מחדש אישור זה עם מפתח ארוך יותר.","Generate and install a new self-signed certificate immediately. Then, replace this certificate with a certificate signed by a valid certificate authority as soon as possible.":"הפק והתקן אישור חדש בחתימה עצמית מיד. לאחר מכן, החלף אישור זה באישור החתום על-ידי רשות אישורים חוקית בהקדם האפשרי.","It is highly recommended that you do not install this certificate.":"מומלץ מאוד שלא להתקין אישור זה.","Purchase a new certificate.":"Purchase a new certificate.","Self-Signed Certificates":"אישורים בחתימה עצמית","The recommended key size for a certificate is currently [quant,_1,bit,bits].":"גודל המפתח המומלץ בשלב זה עבור אישורים הוא [quant,_1,סיבית ,סיביות].","This certificate will expire in [quant,_1,day,days].":"התוקף של אישור זה יפוג בעוד [quant,_1,יום ,ימים].","This certificate’s key is too short ([quant,_1,bit,bits]). This key will not protect against a spoofing attack.":"המפתח של אישור זה קצר מדי ([quant,_1,סיבית ,סיביות]). מפתח זה לא יגן מפני התקפות זיוף.","You should generate another self-signed certificate for [quant,_1,this domain,these domains] with a [numf,_2]-bit key.":"יש להפיק אישור נוסף בחתימה עצמית עבור [quant,_1,תחום זה,תחומים אלה] עם מפתח של [numf,_2] סיביות.","You should request a replacement certificate from the issuer ([_1]) as soon as possible.":"עליך לבקש אישור חלופי מהמנפיק ([_1]) בהקדם האפשרי."};

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