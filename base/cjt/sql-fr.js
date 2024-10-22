//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/cjt/sql.js
// Generated: /usr/local/cpanel/base/cjt/sql-fr.js
// Module:    legacy_cjt/sql-fr
// Locale:    fr
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"A database name cannot be empty.":"Le nom d’une base de données ne peut pas être vide.","A database name cannot end with a space character.":"A database name cannot end with a space character.","A username cannot be empty.":"Un nom d’utilisateur est obligatoire.","Database Name":"Nom de la base de données","Database Username":"Database Username","The name of a database user on this system may include only the following characters: [join, ,_1]":"Le nom d’un utilisateur de base de données sur ce système peut uniquement contenir les caractères suivants : [join, ,_1]","This database name has too many wildcard-sensitive characters ([list_and_quoted,_1]). The system stores each of these as two characters internally, up to a limit of [quant,_2,character,characters]. This name would take up [quant,_3,character,characters] of internal storage, which is [numf,_4] too many.":"Ce nom de base de données comporte trop de caractères génériques ([list_and_quoted,_1]). Le système enregistre chacun d’entre eux en interne comme s’il s’agissait de deux caractères, dans une limite de [quant,_2, caractère, caractères]. Ce nom nécessiterait jusqu’à [quant,_3, caractère, caractères] de stockage interne, ce qui dépasse la limite autorisée de [numf,_4] caractères.","This system allows only printable [asis,ASCII] characters in database names.":"Ce système autorise uniquement les caractères [asis,ASCII] imprimables dans les noms de base de données.","This system prohibits the backslash ([_1]) character in database names.":"This system prohibits the backslash ([_1]) character in database names.","This system prohibits the following [numerate,_1,character,characters] in database names: [join, ,_2]":"Ce système interdit [numerate,_1,le caractère suivant,les caractères suivants] dans les noms de base de données : [join, ,_2]","This system prohibits the slash ([_1]) character in database names.":"Ce système interdit les barres obliques ([_1]) dans les noms de base de données.","This system’s database version ([_1]) prohibits the character “[_2]” in database names. Ask your administrator to upgrade to a newer version.":"This system’s database version ([_1]) prohibits the character “[_2]” in database names. Ask your administrator to upgrade to a newer version.","This value is too long by [quant,_1,character,characters]. The maximum length is [quant,_2,character,characters].":"Cette valeur est trop longue de [quant,_1, caractère, caractères]. La longueur maximale est de [quant,_2, caractère, caractères].","Username cannot begin with a number.":"Le nom d’utilisateur ne peut pas commencer par un chiffre.","[asis,PostgreSQL] Database Name":"Nom de la base de données [asis,PostgreSQL]","[asis,PostgreSQL] Username":"Nom d’utilisateur [asis,PostgreSQL]"};

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