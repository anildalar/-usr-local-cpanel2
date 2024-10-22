//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/share/libraries/cjt2/src/validator/length-validators.js
// Generated: /usr/local/cpanel/share/libraries/cjt2/src/validator/length-validators-pt_br.js
// Module:    cjt/validator/length-validators-pt_br
// Locale:    pt_br
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Select at least [quant,_1,item,items] from the list.":"Selecione pelo menos [quant,_1,item,itens] na lista.","The length of the string cannot be greater than [quant,_1,character,characters].":"O tamanho da cadeia de caracteres não pode ser maior que [quant,_1,caractere,caracteres].","The length of the string cannot be less than [quant,_1,character,characters].":"O tamanho da cadeia de caracteres não pode ser menor que [quant,_1,caractere,caracteres].","The length of the string should be [quant,_1,character,characters,zero].":"O tamanho da cadeia de caracteres deve ser [quant,_1,caractere,caracteres,zero].","This string is too long or complex. Shorten it, or replace complex (non-[asis,ASCII]) characters with simple ([asis,ASCII]) ones. (The string’s [asis,UTF-8] encoding cannot exceed [quant,_1,byte,bytes].)":"This string is too long or complex. Shorten it, or replace complex (non-[asis,ASCII]) characters with simple ([asis,ASCII]) ones. (The string’s [asis,UTF-8] encoding cannot exceed [quant,_1,byte,bytes].)"};

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
