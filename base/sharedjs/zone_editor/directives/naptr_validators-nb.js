//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/zone_editor/directives/naptr_validators.js
// Generated: /usr/local/cpanel/base/sharedjs/zone_editor/directives/naptr_validators-nb.js
// Module:    legacy_shared/zone_editor/directives/naptr_validators-nb
// Locale:    nb
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Each “rs” value (the value after ‘+’ symbols) must contain only case insensitive letters a-z, digits 0-9, ‘-’s and ‘+’s. It must not exceed 32 characters.":"Each “rs” value (the value after ‘+’ symbols) must contain only case insensitive letters a-z, digits 0-9, ‘-’s and ‘+’s. It must not exceed 32 characters.","Service must start with a letter.":"Service must start with a letter.","To separate regular and replacement expressions, you must enter the delimiter before, between, and after the expressions. For example, delim-char regex delim-char replacement delim-char.":"To separate regular and replacement expressions, you must enter the delimiter before, between, and after the expressions. For example, delim-char regex delim-char replacement delim-char.","You can not use a digit or the flag character ‘i’ as your delimiter.":"You can not use a digit or the flag character ‘i’ as your delimiter.","“Protocol”, the first part of the service field must contain only case insensitive letters a-z, digits 0-9, ‘-’s and ‘+’s. It must not exceed 32 characters.":"“Protocol”, the first part of the service field must contain only case insensitive letters a-z, digits 0-9, ‘-’s and ‘+’s. It must not exceed 32 characters."};

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
