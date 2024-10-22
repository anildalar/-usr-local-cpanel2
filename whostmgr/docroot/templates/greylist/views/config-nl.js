//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/whostmgr/docroot/templates/greylist/views/config.js
// Generated: /usr/local/cpanel/whostmgr/docroot/templates/greylist/views/config-nl.js
// Module:    /templates/greylist/views/config-nl
// Locale:    nl
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"The number of minutes during which the mail server accepts a resent email from an unknown triplet.":"Het aantal minuten dat de e-mailserver een opnieuw verzonden e-mail van een onbekende triplet uitstelt.","The number of minutes during which the mail server defers email from an unknown triplet.":"Het aantal minuten dat de e-mailserver e-mail van een onbekende triplet uitstelt.","The system successfully saved your [asis,Greylisting] configuration settings.":"De instellingen van uw [asis,Greylisting]-configuratie zijn opgeslagen.","The time at which the mail server treats a resent email as coming from a new, unknown triplet.":"De tijd waarop de e-mailserver een opnieuw verzonden e-mail verwerkt als afkomstig van een nieuwe, onbekende triplet.","Whether the system automatically accepts email from hosts with a valid [asis,SPF] record.[comment,this text is used in a tooltip]":"Of e-mail van hosts met een geldige [asis,SPF]-record automatisch worden geaccepteerd.[comment,this text is used in a tooltip]"};

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