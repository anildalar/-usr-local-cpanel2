//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/sslwidgets.js
// Generated: /usr/local/cpanel/base/sharedjs/sslwidgets-es_419.js
// Module:    legacy_shared/sslwidgets-es_419
// Locale:    es_419
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Certificate Expiration":"Certificate Expiration","Certificate Key Sizes":"Certificate Key Sizes","Contact your certificate authority ([_1]) to reissue this certificate with a [numf,_2]-bit key.":"Contact your certificate authority ([_1]) to reissue this certificate with a [numf,_2]-bit key.","Contact your certificate authority to reissue this certificate with a longer key.":"Contact your certificate authority to reissue this certificate with a longer key.","Generate and install a new self-signed certificate immediately. Then, replace this certificate with a certificate signed by a valid certificate authority as soon as possible.":"Generate and install a new self-signed certificate immediately. Then, replace this certificate with a certificate signed by a valid certificate authority as soon as possible.","It is highly recommended that you do not install this certificate.":"It is highly recommended that you do not install this certificate.","Purchase a new certificate.":"Purchase a new certificate.","Self-Signed Certificates":"Self-Signed Certificates","The recommended key size for a certificate is currently [quant,_1,bit,bits].":"The recommended key size for a certificate is currently [quant,_1,bit,bits].","This certificate will expire in [quant,_1,day,days].":"This certificate will expire in [quant,_1,day,days].","This certificate’s key is too short ([quant,_1,bit,bits]). This key will not protect against a spoofing attack.":"This certificate’s key is too short ([quant,_1,bit,bits]). This key will not protect against a spoofing attack.","You should generate another self-signed certificate for [quant,_1,this domain,these domains] with a [numf,_2]-bit key.":"You should generate another self-signed certificate for [quant,_1,this domain,these domains] with a [numf,_2]-bit key.","You should request a replacement certificate from the issuer ([_1]) as soon as possible.":"You should request a replacement certificate from the issuer ([_1]) as soon as possible."};

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