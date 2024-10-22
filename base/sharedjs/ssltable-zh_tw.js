//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/ssltable.js
// Generated: /usr/local/cpanel/base/sharedjs/ssltable-zh_tw.js
// Module:    legacy_shared/ssltable-zh_tw
// Locale:    zh_tw
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Certificate ID:":"憑證 ID:","Contact your Certificate Authority ([_1]) to request a certificate renewal.":"連絡您的憑證授權單位 ([_1])，要求憑證更新。","Contact your certificate authority ([_1]) to reissue this certificate with a [numf,_2]-bit key.":"連絡您的憑證授權單位 ([_1])，重新發行 [numf,_2] 位元金鑰的憑證。","Purchase a replacement certificate in the “[_1]”.":"Purchase a replacement certificate in the “[_1]”.","SSL/TLS Wizard":"SSL/TLS Wizard","This certificate has expired.":"此憑證已過期。","This certificate will expire in [quant,_1,day,days].":"此憑證將在 [quant,_1,天,天]後到期。","This certificate will expire later today.":"此憑證將在今天稍後過期。","This certificate’s key is too short ([quant,_1,bit,bits]). This key will not protect against a spoofing attack.":"憑證金鑰太短 ([quant,_1,位元,位元])。 此金鑰將無法防止詐騙攻擊。","You should generate another self-signed certificate for [quant,_1,this domain,these domains] with a [numf,_2]-bit key.":"您應該為 [quant,_1,此網域,這些網域] 產生另一個有 [numf,_2] 位元金鑰的自我簽署憑證。","unknown":"未知的"};

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