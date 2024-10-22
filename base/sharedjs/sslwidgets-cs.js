//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/sslwidgets.js
// Generated: /usr/local/cpanel/base/sharedjs/sslwidgets-cs.js
// Module:    legacy_shared/sslwidgets-cs
// Locale:    cs
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Certificate Expiration":"Vypršení platnosti certifikátu","Certificate Key Sizes":"Velikosti klíčů certifikátu","Contact your certificate authority ([_1]) to reissue this certificate with a [numf,_2]-bit key.":"Požádejte certifikační autoritu ([_1]) o opětovné vydání tohoto certifikátu s [numf,_2]bitovým klíčem.","Contact your certificate authority to reissue this certificate with a longer key.":"Požádejte svoji certifikační autoritu o opětovné vydání certifikátu s delším klíčem.","Generate and install a new self-signed certificate immediately. Then, replace this certificate with a certificate signed by a valid certificate authority as soon as possible.":"Vygenerujte a nainstalujte nový certifikát podepsaný svým držitelem ihned. Poté co nejdříve nahraďte tento certifikát certifikátem podepsaným platnou certifikační autoritou.","It is highly recommended that you do not install this certificate.":"Tento certifikát se důrazně nedoporučuje instalovat.","Purchase a new certificate.":"Purchase a new certificate.","Self-Signed Certificates":"Certifikáty podepsané svým držitelem","The recommended key size for a certificate is currently [quant,_1,bit,bits].":"Doporučená velikost klíče pro certifikát je nyní [quant,_1,bit,bitů].","This certificate will expire in [quant,_1,day,days].":"Platnost tohoto certifikátu vyprší za [quant,_1,den,dny/dnů].","This certificate’s key is too short ([quant,_1,bit,bits]). This key will not protect against a spoofing attack.":"Klíč tohoto certifikátu je příliš krátký ([quant,_1,bit,bitů]). Tento klíč nebude chránit před útokem falšováním.","You should generate another self-signed certificate for [quant,_1,this domain,these domains] with a [numf,_2]-bit key.":"Měli byste pro [quant,_1,tuto doménu,tyto domény] vygenerovat jiný certifikát podepsaný svým držitelem s [numf,_2]bitovým klíčem.","You should request a replacement certificate from the issuer ([_1]) as soon as possible.":"Měli byste vyžádat náhradní certifikát pro vydavatele ([_1]), a to co nejdříve."};

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
