//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/transfers/TransferSession.js
// Generated: /usr/local/cpanel/base/sharedjs/transfers/TransferSession-ro.js
// Module:    legacy_shared/transfers/TransferSession-ro
// Locale:    ro
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Abort Session Processing":"Se abandonează procesarea sesiunii","Are you sure you want to abort this transfer?":"Sigur doriţi să abandonaţi acest transfer?","Are you sure you want to pause this transfer?":"Sigur doriţi să opriţi acest transfer?","Failed to abort the session.":"Nu a reuşit abandonarea sesiunii.","Failed to pause the session.":"Nu a reuşit oprirea sesiunii.","Failed to start transfer.":"Nu a reuşit pornirea transferului.","Pausing queue processing …":"Se procesează oprirea cozii…","The system will abort any transfer processes as soon as possible. In order to prevent data loss, the system will complete ongoing restore operations before the entire session aborts.":"Sistemul va abandona toate procesele de transfer cât mai curând posibil. Pentru a împiedica pierderea datelor, sistemul va finaliza operaţiunile de restaurare în desfăşurare înainte de abandonarea întregii sesiuni.","The system will not add new items to the queue until you choose to resume. In order to prevent data loss, the system will complete ongoing operations.":"Sistemul nu va adăuga elemente noi în coadă până nu reluaţi. Pentru a împiedica pierderea datelor, sistemul va finaliza operaţiunile în desfăşurare.","There is no handler for [asis,sessionState]: [_1]":"Nu există niciun manipulator pentru [asis,sessionState]: [_1]"};

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
