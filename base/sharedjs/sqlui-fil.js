//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/sqlui.js
// Generated: /usr/local/cpanel/base/sharedjs/sqlui-fil.js
// Module:    legacy_shared/sqlui-fil
// Locale:    fil
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Close":"Isara","If you change this database’s name, you will be unable to rename it back to “[_1]”. This is because the old name lacks the username prefix ([_2]) that this system requires on the names of all new databases and database users. If you require a name without the prefix, you must contact your server administrator.":"Kung papalitan mo ang pangalan ng database na ito, hindi mo na maibabalik ang pangalan nito sa “[_1]”. Ito ay dahil wala sa lumang pangalan ang username prefix ([_2]) na kinakailangan ng system na ito sa mga pangalan ng lahat ng bagong database at user ng database. Kung kailangan mo ng pangalan na walang prefix, dapat kang makipag-ugnayan sa server administrator.","If you change this user’s name, you will be unable to rename it back to “[_1]”. This is because the old name lacks the username prefix ([_2]) that this system requires on the names of all new databases and database users. If you require a name without the prefix, you must contact your server administrator.":"Kung papalitan mo ang pangalan ng user na ito, hindi mo na maibabalik ang pangalan nito sa “[_1]”. Ito ay dahil wala sa lumang pangalan ang username prefix ([_2]) na kinakailangan ng system na ito sa mga pangalan ng lahat ng bagong database at user ng database. Kung kailangan mo ng pangalan na walang prefix, dapat kang makipag-ugnayan sa server administrator.","It is a potentially dangerous operation to rename a database. You may want to [output,url,_1,back up this database] before renaming it.":"It is a potentially dangerous operation to rename a database. You may want to [output,url,_1,back up this database] before renaming it.","Rename Database":"Palitan ang Pangalan ng Database:","Rename Database User":"Palitan ang Pangalan ng User ng Database:","Renaming database user …":"Pinapalitan ang pangalan ng user ng database …","Renaming database …":"Pinapalitan ang pangalan ng database …","Success! The browser is now redirecting …":"Tagumpay! Nagre-redirect na ngayon ang browser …","Success! This page will now reload.":"Tagumpay! Magre-reload na ngayon ang page na ito.","The new name must be different from the old name.":"Ang bagong pangalan ay dapat naiiba sa lumang pangalan."};

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