//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/ssltable.js
// Generated: /usr/local/cpanel/base/sharedjs/ssltable-ro.js
// Module:    legacy_shared/ssltable-ro
// Locale:    ro
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Certificate ID:":"ID certificat:","Contact your Certificate Authority ([_1]) to request a certificate renewal.":"Contactaţi autoritatea de certificare ([_1]) pentru a solicita reînnoirea certificatului.","Contact your certificate authority ([_1]) to reissue this certificate with a [numf,_2]-bit key.":"Contactaţi autoritatea de certificare ([_1]) pentru a emite din nou acest certificat cu o cheie [numf,_2]-bit.","Purchase a replacement certificate in the “[_1]”.":"Purchase a replacement certificate in the “[_1]”.","SSL/TLS Wizard":"SSL/TLS Wizard","This certificate has expired.":"Acest certificat a expirat.","This certificate will expire in [quant,_1,day,days].":"Acest certificat va expira în [quant,_1,zi,zile].","This certificate will expire later today.":"Acest certificat va expira astăzi.","This certificate’s key is too short ([quant,_1,bit,bits]). This key will not protect against a spoofing attack.":"Această cheie de certificat este prea scurtă ([quant,_1,bit,biţi]). Această cheie nu va asigura protecţie împotriva atacurilor prin falsificare.","You should generate another self-signed certificate for [quant,_1,this domain,these domains] with a [numf,_2]-bit key.":"Trebuie să generaţi un alt certificat autosemnat pentru [quant,_1,acest domeniu,aceste domenii] cu o cheie [numf,_2]-bit.","unknown":"necunoscut"};

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