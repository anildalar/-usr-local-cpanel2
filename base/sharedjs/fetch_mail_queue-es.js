//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/fetch_mail_queue.js
// Generated: /usr/local/cpanel/base/sharedjs/fetch_mail_queue-es.js
// Module:    legacy_shared/fetch_mail_queue-es
// Locale:    es
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Actions":"Acciones","Are you sure you wish to attempt to deliver the entire mail queue?":"¿Está seguro de que desea intentar entregar toda la cola de correo?","Are you sure you wish to purge the entire mail queue?":"¿Está seguro de que desea purgar toda la cola de correo?","Frozen":"Inmovilizado","Invalid Date":"Fecha no válida","Message ID":"ID del Mensaje","Queued":"En cola","Recipient(s)":"Destinatarios","Sender":"Remitente","Size":"Tamaño","Status":"Estado","System":"Sistema","The fetch returned no data.":"La recuperación no devolvió información.","Time Received":"Hora de recepción","You must first select at least one message in the queue.":"Primero debe seleccionar al menos un mensaje en la cola."};

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
