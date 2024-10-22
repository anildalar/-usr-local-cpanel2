//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/sql_password.js
// Generated: /usr/local/cpanel/base/sharedjs/sql_password-es.js
// Module:    legacy_shared/sql_password-es
// Locale:    es
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Close":"Cerrar","OK":"Aceptar","Setting password …":"Estableciendo contraseña…","Success":"Éxito","The system is asking you to set this PostgreSQL user’s password because you have renamed the user. This user will not be able to log in until you set its password (you may use the user’s previous password here).":"El sistema le solicita que establezca la contraseña de este usuario de PostgreSQL porque renombró al usuario. Este usuario no podrá iniciar sesión hasta que usted establezca la contraseña (puede usar aquí la contraseña anterior del usuario).","You have successfully set this user’s password.":"Estableció esta contraseña del usuario correctamente."};

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
