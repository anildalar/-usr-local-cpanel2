//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/transfers/TransferSession.js
// Generated: /usr/local/cpanel/base/sharedjs/transfers/TransferSession-fil.js
// Module:    legacy_shared/transfers/TransferSession-fil
// Locale:    fil
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Abort Session Processing":"I-abort ang Pagpoproseso sa Session","Are you sure you want to abort this transfer?":"Sigurado ka bang gusto mong i-abort ang paglilipat na ito?","Are you sure you want to pause this transfer?":"Sigurado ka bang gusto mong i-pause ang paglilipat na ito?","Failed to abort the session.":"Hindi na-abort ang session.","Failed to pause the session.":"Hindi na-pause ang session.","Failed to start transfer.":"Hindi nasimulan ang paglilipat.","Pausing queue processing …":"Pino-pause ang pagpoproseso ng queue …","The system will abort any transfer processes as soon as possible. In order to prevent data loss, the system will complete ongoing restore operations before the entire session aborts.":"Mag-a-abort ang system ng anumang mga proseso ng paglilipat sa lalong madaling panahon. Upang maiwasan ang pagkawala ng data, kukumpletuhin ng system ang tuluy-tuloy na operation ng pag-restore bago mag-abort ang buong session.","The system will not add new items to the queue until you choose to resume. In order to prevent data loss, the system will complete ongoing operations.":"Hindi magdaragdag ang system ng mga bagong item sa queue hanggang sa piliin mong tumuloy. Upang maiwasan ang pagkawala ng data, kukumpletuhin ng system ang tuluy-tuloy na operation.","There is no handler for [asis,sessionState]: [_1]":"Walang handler para sa [asis,sessionState]: [_1]"};

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