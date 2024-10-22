//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/fetch_mail_queue.js
// Generated: /usr/local/cpanel/base/sharedjs/fetch_mail_queue-pl.js
// Module:    legacy_shared/fetch_mail_queue-pl
// Locale:    pl
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Actions":"Akcje","Are you sure you wish to attempt to deliver the entire mail queue?":"Czy na pewno chcesz spróbować dostarczyć wszystkie wiadomości istniejące w kolejce poczty?","Are you sure you wish to purge the entire mail queue?":"Czy na pewno chcesz wyczyścić całą kolejkę poczty?","Frozen":"Zablokowana","Invalid Date":"Nieprawidłowa data","Message ID":"Identyfikator wiadomości","Queued":"Dodano do kolejki","Recipient(s)":"Odbiorcy","Sender":"Nadawca","Size":"Rozmiar","Status":"Stan","System":"System","The fetch returned no data.":"Operacja pobierania nie zwróciła żadnych danych.","Time Received":"Godzina otrzymania","You must first select at least one message in the queue.":"Najpierw należy zaznaczyć co najmniej jedną wiadomość w kolejce."};

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