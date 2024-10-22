//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/whostmgr/docroot/templates/mod_security/directives/ruleVendorUrlValidator.js
// Generated: /usr/local/cpanel/whostmgr/docroot/templates/mod_security/directives/ruleVendorUrlValidator-el.js
// Module:    /templates/mod_security/directives/ruleVendorUrlValidator-el
// Locale:    el
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"The URL must contain a protocol, domain, and file name in the correct format. (Example: [asis,https://example.com/example/meta_example.yaml])":"Η διεύθυνση URL πρέπει να περιέχει ένα πρωτόκολλο, έναν τομέα και ένα όνομα αρχείου στη σωστή μορφή. (Παράδειγμα: [asis,https://example.com/example/meta_example.yaml])","The URL must use one of the following recognized protocols: [join,~, ,_1]":"Η διεύθυνση URL πρέπει να χρησιμοποιεί ένα από τα παρακάτω αναγνωρισμένα πρωτόκολλα: [join,~, ,_1]","The file name must have the .yaml extension. (Example: [asis,meta_example.yaml])":"Το όνομα του αρχείου πρέπει να έχει την επέκταση .yaml. (Παράδειγμα: [asis,meta_example.yaml])","The file name must start with meta_, followed by the vendor name and have the .yaml extension. (Example: [asis,meta_example.yaml])":"Το όνομα του αρχείου πρέπει να αρχίζει με το meta_, ακολουθούμενο από το όνομα προμηθευτή και να έχει μια επέκταση .yaml. (Παράδειγμα: [asis,meta_example.yaml])","The file name must use the meta_ prefix, followed by the vendor name and a .yaml extension. The vendor name must only contain characters in the following set: [join,~, ,_1] (Example: [asis,meta_example.yaml])":"Το όνομα του αρχείου πρέπει να χρησιμοποιεί το πρόθημα meta_ ακολουθούμενο από το όνομα προμηθευτή και μια επέκταση .yaml. Το όνομα του προμηθευτή μπορεί να περιέχει μόνο τους χαρακτήρες του ακόλουθου συνόλου: [join,~, ,_1] (Παράδειγμα: [asis,meta_example.yaml])","The file name must use the meta_ prefix. (Example: [asis,meta_example.yaml])":"Το όνομα του αρχείου πρέπει να χρησιμοποιεί το πρόθημα meta_. (Παράδειγμα: [asis,meta_example.yaml])","The protocol should be followed by a colon and two forward slashes. (Example: [asis,https://])":"Το πρωτόκολλο θα πρέπει να ακολουθείται από μια άνω-κάτω τελεία και δύο καθέτους. (Παράδειγμα: [asis,https://])","The vendor name part of the file name must only contain characters in the following set: [join,~, ,_1] (Example: [asis,meta_example.yaml])":"Το μέρος του ονόματος αρχείου που περιλαμβάνει το όνομα του προμηθευτή μπορεί να περιέχει μόνο τους χαρακτήρες του ακόλουθου συνόλου: [join,~, ,_1] (Παράδειγμα: [asis,meta_example.yaml])"};

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
