//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/share/libraries/cjt2/src/validator/domain-validators.js
// Generated: /usr/local/cpanel/share/libraries/cjt2/src/validator/domain-validators-pt.js
// Module:    cjt/validator/domain-validators-pt
// Locale:    pt
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"A [asis,DNS] label must not be empty.":"A [asis,DNS] label must not be empty.","A [asis,DNS] label must not begin with “[_1]”.":"A [asis,DNS] label must not begin with “[_1]”.","A [asis,DNS] label must not end with “[_1]”.":"A [asis,DNS] label must not end with “[_1]”.","A [asis,DNS] label must not exceed [quant,_1,character,characters].":"A [asis,DNS] label must not exceed [quant,_1,character,characters].","A [asis,URL] must contain a domain.":"A [asis,URL] must contain a domain.","A [asis,URL] must contain a valid protocol.":"A [asis,URL] must contain a valid protocol.","A [asis,URL] must not contain illegal characters.":"A [asis,URL] must not contain illegal characters.","A [asis,URL] must not contain invalid hexadecimal escaped characters.":"A [asis,URL] must not contain invalid hexadecimal escaped characters.","A domain name cannot begin with “[_1]”.":"A domain name cannot begin with “[_1]”.","A domain name cannot contain only numerals.":"A domain name cannot contain only numerals.","A domain name cannot contain two consecutive dots.":"A domain name cannot contain two consecutive dots.","A domain name cannot end with “[_1]”.":"A domain name cannot end with “[_1]”.","A fully qualified domain name must contain at least 3 parts.":"A fully qualified domain name must contain at least 3 parts.","An “[_1]” record may not contain an underscore. Are you trying to create a “[asis,CNAME]”?":"An “[_1]” record may not contain an underscore. Are you trying to create a “[asis,CNAME]”?","The [asis,DNS] label must contain only non-[asis,ASCII] characters and the following: [list_and,_1].":"The [asis,DNS] label must contain only non-[asis,ASCII] characters and the following: [list_and,_1].","The [asis,DNS] label must contain only the following characters: [list_and,_1].":"The [asis,DNS] label must contain only the following characters: [list_and,_1].","The [asis,DNS] label’s [asis,Punycode] representation cannot exceed [quant,_1,byte,bytes]. (Non-[asis,ASCII] characters, like “[_2]”, require multiple characters to represent in [asis,Punycode].)":"The [asis,DNS] label’s [asis,Punycode] representation cannot exceed [quant,_1,byte,bytes]. (Non-[asis,ASCII] characters, like “[_2]”, require multiple characters to represent in [asis,Punycode].)","The [asis,Punycode] representation of this domain or record name cannot exceed [quant,_1,character,characters]. (Non-[asis,ASCII] characters, like “[_2]”, require multiple characters to represent in [asis,Punycode].)":"The [asis,Punycode] representation of this domain or record name cannot exceed [quant,_1,character,characters]. (Non-[asis,ASCII] characters, like “[_2]”, require multiple characters to represent in [asis,Punycode].)","The domain cannot be [asis,IPv4] or [asis,IPv6].":"The domain cannot be [asis,IPv4] or [asis,IPv6].","The domain name cannot exceed [quant,_1,character,characters].":"The domain name cannot exceed [quant,_1,character,characters].","The domain name must include a valid [output,acronym,TLD,Top Level Domain].":"The domain name must include a valid [output,acronym,TLD,Top Level Domain].","The domain name must include at least two labels.":"The domain name must include at least two labels.","The domain or record name cannot be [asis,IPv4] or [asis,IPv6].":"The domain or record name cannot be [asis,IPv4] or [asis,IPv6].","The domain or record name cannot exceed [quant,_1,character,characters].":"The domain or record name cannot exceed [quant,_1,character,characters].","The first [asis,mbox] label must contain only the following characters: [list_and,_1]. The label cannot begin or end with a symbol.":"The first [asis,mbox] label must contain only the following characters: [list_and,_1]. The label cannot begin or end with a symbol.","You must enter a domain name.":"You must enter a domain name.","You must specify a [asis,URL].":"You must specify a [asis,URL].","You must specify a fully qualified domain name.":"You must specify a fully qualified domain name.","You must specify a valid [asis,mbox] name.":"You must specify a valid [asis,mbox] name.","You must specify a valid domain name.":"You must specify a valid domain name.","You must specify a valid hostname.":"You must specify a valid hostname.","You must specify a valid zone name.":"You must specify a valid zone name.","“[_1]” can appear only at the start of a wildcard domain name.":"“[_1]” can appear only at the start of a wildcard domain name."};

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
