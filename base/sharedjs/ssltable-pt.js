//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/ssltable.js
// Generated: /usr/local/cpanel/base/sharedjs/ssltable-pt.js
// Module:    legacy_shared/ssltable-pt
// Locale:    pt
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Certificate ID:":"Certificate ID:","Contact your Certificate Authority ([_1]) to request a certificate renewal.":"Contact your Certificate Authority ([_1]) to request a certificate renewal.","Contact your certificate authority ([_1]) to reissue this certificate with a [numf,_2]-bit key.":"Contact your certificate authority ([_1]) to reissue this certificate with a [numf,_2]-bit key.","Purchase a replacement certificate in the “[_1]”.":"Purchase a replacement certificate in the “[_1]”.","SSL/TLS Wizard":"SSL/TLS Wizard","This certificate has expired.":"This certificate has expired.","This certificate will expire in [quant,_1,day,days].":"This certificate will expire in [quant,_1,day,days].","This certificate will expire later today.":"This certificate will expire later today.","This certificate’s key is too short ([quant,_1,bit,bits]). This key will not protect against a spoofing attack.":"This certificate’s key is too short ([quant,_1,bit,bits]). This key will not protect against a spoofing attack.","You should generate another self-signed certificate for [quant,_1,this domain,these domains] with a [numf,_2]-bit key.":"You should generate another self-signed certificate for [quant,_1,this domain,these domains] with a [numf,_2]-bit key.","unknown":"unknown"};

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