//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/share/libraries/cjt2/src/validator/email-validator.js
// Generated: /usr/local/cpanel/share/libraries/cjt2/src/validator/email-validator-it.js
// Module:    cjt/validator/email-validator-it
// Locale:    it
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Do not include the [asis,@] character or the domain name.":"Non includere il carattere [asis,@] o il nome di dominio.","The email must contain a username and a domain.":"L’e-mail deve contenere un nome utente e un dominio.","The username can only contain letters, numbers, periods, hyphens, and underscores.":"Il nome utente può contenere solo lettere, numeri, punti, trattini e caratteri di sottolineatura.","The username can only contain the following characters: [asis,a-zA-Z0-9!#$%][output,asis,amp()][output,apos][asis,*+/=?^_`{|}~-]":"Il nome utente può contenere solo i seguenti caratteri: [asis,a-zA-Z0-9!#$%][output,asis,amp()][output,apos][asis,*+/=?^_`{|}~-]","The username cannot begin or end with a period.":"Il nome utente non può iniziare o terminare con un punto.","The username cannot contain two consecutive periods.":"Il nome utente non può contenere due punti consecutivi.","The username cannot exceed [numf,_1] characters.":"Il nome utente non può superare [numf,_1] caratteri.","You must enter a username.":"È necessario inserire un nome utente."};

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