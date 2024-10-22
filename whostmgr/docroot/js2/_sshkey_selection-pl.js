//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/whostmgr/docroot/js2/_sshkey_selection.js
// Generated: /usr/local/cpanel/whostmgr/docroot/js2/_sshkey_selection-pl.js
// Module:    /js2/_sshkey_selection-pl
// Locale:    pl
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Checking connection …":"Trwa sprawdzanie połączenia…","No SSH key has been selected.":"Nie wybrano klucza SSH.","Root Password:":"Hasło główne:","There is no SSH server listening on “[_1]”: [_2]":"Nie ma żadnego serwera SSH nasłuchującego na porcie „[_1]”: [_2]","Unknown error; No error sent.":"Nieznany błąd; nie wysłano żadnego błędu.","You must specify a host name or IP address.":"Musisz określić nazwę lub adres IP hosta.","You must specify a port number.":"Musisz określić numer portu.","You must specify a user name.":"Musisz podać nazwę użytkownika.","You must specify the key phrase for the selected SSH Key.":"Musisz określić hasło dla wybranego klucza SSH.","You must specify the password for your login.":"Musisz określić hasło dla swojego identyfikatora logowania.","You must specify the root password for “su” access.":"Musisz określić hasło główne dla dostępu „su”.","“[_1]” Password:":"Hasło „[_1]”:"};

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