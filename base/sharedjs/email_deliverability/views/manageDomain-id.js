//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/email_deliverability/views/manageDomain.js
// Generated: /usr/local/cpanel/base/sharedjs/email_deliverability/views/manageDomain-id.js
// Module:    legacy_shared/email_deliverability/views/manageDomain-id
// Locale:    id
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"A “[_1]” record does [output,strong,not] exist for this domain.":"Catatan “[_1]” [output,strong,tidak] ditemukan untuk domain ini.","The only [asis,PTR] value for this [output,abbr,IP,Internet Protocol] address must be “[_1]”. This is the name that this server sends with [output,abbr,SMTP,Simple Mail Transfer Protocol]’s “[_2]” command to send “[_3]”’s outgoing email.":"The only [asis,PTR] value for this [output,abbr,IP,Internet Protocol] address must be “[_1]”. This is the name that this server sends with [output,abbr,SMTP,Simple Mail Transfer Protocol]’s “[_2]” command to send “[_3]”’s outgoing email.","The system failed to complete validation of “[_1]”’s “[_2]” because of an error: [_3]":"Sistem gagal menyelesaikan validasi “[_1]”’ “[_2]” karena kesalahan: [_3]","The system sends the domain “[_1]” in the [output,abbr,SMTP,Simple Mail Transfer Protocol] handshake for this domain’s email.":"Sistem mengirimkan domain “[_1]” dalam handshake [output,abbr,SMTP,Simple Mail Transfer Protocol] untuk email domain ini.","The system sends “[_1]”’s outgoing email from the “[_2]” [output,abbr,IP,Internet Protocol] address.":"Sistem mengirimkan email keluar “[_1]” dari alamat “[_2]” [output,abbr,IP,Protokol Internet].","There is no reverse [asis,DNS] configured for the [asis,IP] address ([_1]) that the system uses to send this domain’s outgoing email.":"There is no reverse [asis,DNS] configured for the [asis,IP] address ([_1]) that the system uses to send this domain’s outgoing email.","To fix this problem, contact your system administrator and request that they create a [output,abbr,DNS,Domain Name System] “[_1]” record for “[_2]” whose value is “[_3]”.":"To fix this problem, contact your system administrator and request that they create a [output,abbr,DNS,Domain Name System] “[_1]” record for “[_2]” whose value is “[_3]”.","To fix this problem, contact your system administrator and request that they create the following [asis,PTR] record at [list_and_quoted,_1]:":"To fix this problem, contact your system administrator and request that they create the following [asis,PTR] record at [list_and_quoted,_1]:","To fix this problem, contact your system administrator and request that they create the following [asis,PTR] record in [asis,DNS]:":"Untuk memperbaiki masalah ini, hubungi administrator sistem Anda dan minta mereka membuat catatan [asis,PTR] di [asis,DNS]:","To fix this problem, contact your system administrator and request that they replace all [asis,PTR] records for “[_1]” with the following record at [list_and_quoted,_2]:":"To fix this problem, contact your system administrator and request that they replace all [asis,PTR] records for “[_1]” with the following record at [list_and_quoted,_2]:","To fix this problem, contact your system administrator and request that they replace all [asis,PTR] records for “[_1]” with the following record:":"To fix this problem, contact your system administrator and request that they replace all [asis,PTR] records for “[_1]” with the following record:","To fix this problem, create a [output,abbr,DNS,Domain Name System] “[_1]” record for “[_2]” whose value is “[_3]”.":"To fix this problem, create a [output,abbr,DNS,Domain Name System] “[_1]” record for “[_2]” whose value is “[_3]”.","To fix this problem, create the following [asis,PTR] record at [list_and_quoted,_1]:":"To fix this problem, create the following [asis,PTR] record at [list_and_quoted,_1]:","To fix this problem, create the following [asis,PTR] record in [asis,DNS]:":"Untuk memperbaiki masalah ini, buat catatan [asis,PTR] di [asis,DNS]:","To fix this problem, replace all [asis,PTR] records for “[_1]” with the following record at [list_and_quoted,_2]:":"To fix this problem, replace all [asis,PTR] records for “[_1]” with the following record at [list_and_quoted,_2]:","To fix this problem, replace all [asis,PTR] records for “[_1]” with the following record:":"To fix this problem, replace all [asis,PTR] records for “[_1]” with the following record:","You did not specify a domain to manage.":"Anda tidak menentukan domain untuk dikelola.","[numf,_1] unexpected [asis,PTR] [numerate,_1,value exists,values exist] for this [output,abbr,IP,Internet Protocol] address:":"[numf,_1] unexpected [asis,PTR] [numerate,_1,value exists,values exist] for this [output,abbr,IP,Internet Protocol] address:","“[_1]” does not resolve to any [output,abbr,IP,Internet Protocol] addresses.":"“[_1]” tidak menyelesaikan ke alamat [output,abbr,IP,Protokol Internet] mana pun di internet.","“[_1]” is [output,strong,not] properly configured for this domain.":"“[_1]” [output,strong,tidak] dikonfigurasi dengan benar untuk domain ini.","“[_1]” is properly configured for this domain.":"“[_1]” dikonfigurasi dengan benar untuk domain ini.","“[_1]” resolves to [list_and_quoted,_2], not “[_3]”.":"“[_1]” resolves to [list_and_quoted,_2], not “[_3]”."};

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