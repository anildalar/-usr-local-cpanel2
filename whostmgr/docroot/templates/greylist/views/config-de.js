//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/whostmgr/docroot/templates/greylist/views/config.js
// Generated: /usr/local/cpanel/whostmgr/docroot/templates/greylist/views/config-de.js
// Module:    /templates/greylist/views/config-de
// Locale:    de
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"The number of minutes during which the mail server accepts a resent email from an unknown triplet.":"Die Anzahl der Minuten, in denen der Mailserver eine erneut gesendete E-Mail von einem unbekannten Triplett akzeptiert.","The number of minutes during which the mail server defers email from an unknown triplet.":"Die Anzahl der Minuten, in denen der Mailserver E-Mails von einem unbekannten Triplett zurückstellt.","The system successfully saved your [asis,Greylisting] configuration settings.":"The system successfully saved your [asis,Greylisting] configuration settings.","The time at which the mail server treats a resent email as coming from a new, unknown triplet.":"Der Zeitpunkt, zu dem der E-Mail-Server eine erneut gesendete E-Mail so behandelt, als käme sie von einem neuen, unbekannten Triplet.","Whether the system automatically accepts email from hosts with a valid [asis,SPF] record.[comment,this text is used in a tooltip]":"Whether the system automatically accepts email from hosts with a valid [asis,SPF] record.[comment,this text is used in a tooltip]"};

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
