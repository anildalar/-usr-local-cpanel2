//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/email_deliverability/services/domains.js
// Generated: /usr/local/cpanel/base/sharedjs/email_deliverability/services/domains-ko.js
// Module:    legacy_shared/email_deliverability/services/domains-ko
// Locale:    ko
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Because this is not an authoritative nameserver for the domain “[_1]”, the current or suggested records will not reflect your changes.":"Because this is not an authoritative nameserver for the domain “[_1]”, the current or suggested records will not reflect your changes.","Contact the person responsible for the [list_and_quoted,_3] [numerate,_2,nameserver,nameservers] and request that they update the “[_1]” record with the following:":"Contact the person responsible for the [list_and_quoted,_3] [numerate,_2,nameserver,nameservers] and request that they update the “[_1]” record with the following:","Contact your domain registrar to verify this domain’s registration.":"Contact your domain registrar to verify this domain’s registration.","The server records have not updated after [quant,_1,second,seconds]. The system will try again in [quant,_2,second,seconds].":"The server records have not updated after [quant,_1,second,seconds]. The system will try again in [quant,_2,second,seconds].","The system cannot verify that the record updated after 120 seconds.":"The system cannot verify that the record updated after 120 seconds.","The system detected [quant,_1,domain,domains] whose [output,acronym,DKIM,DomainKeys Identified Mail] signatures were inactive despite valid [asis,DKIM] configuration. The system has automatically enabled [asis,DKIM] signatures for the following [numerate,_1,domain,domains]: [list_and_quoted,_2]":"The system detected [quant,_1,domain,domains] whose [output,acronym,DKIM,DomainKeys Identified Mail] signatures were inactive despite valid [asis,DKIM] configuration. The system has automatically enabled [asis,DKIM] signatures for the following [numerate,_1,domain,domains]: [list_and_quoted,_2]","The system failed to update the “[_1]” record for “[_2]” because of an error: [_3]":"The system failed to update the “[_1]” record for “[_2]” because of an error: [_3]","The system successfully updated the [asis,DNS] records.":"The system successfully updated the [asis,DNS] records.","The system updated the “[_1]” record for “[_2]” to the following: [_3]":"The system updated the “[_1]” record for “[_2]” to the following: [_3]","This system does not control [asis,DNS] for the “[_1]” domain and the system did not find any authoritative nameservers for this domain.":"This system does not control [asis,DNS] for the “[_1]” domain and the system did not find any authoritative nameservers for this domain.","This system does not control [asis,DNS] for the “[_1]” domain.":"This system does not control [asis,DNS] for the “[_1]” domain.","Use the [output,url,_1,Zone Editor] to ensure that the system applied your changes.":"Use the [output,url,_1,Zone Editor] to ensure that the system applied your changes.","You can install the suggested “[_1]” record locally. However, this server is not the authoritative nameserver. If you install this record, this change will not be effective.":"You can install the suggested “[_1]” record locally. However, this server is not the authoritative nameserver. If you install this record, this change will not be effective."};

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
