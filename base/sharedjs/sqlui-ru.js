//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/sqlui.js
// Generated: /usr/local/cpanel/base/sharedjs/sqlui-ru.js
// Module:    legacy_shared/sqlui-ru
// Locale:    ru
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Close":"Закрыть","If you change this database’s name, you will be unable to rename it back to “[_1]”. This is because the old name lacks the username prefix ([_2]) that this system requires on the names of all new databases and database users. If you require a name without the prefix, you must contact your server administrator.":"If you change this database’s name, you will be unable to rename it back to “[_1]”. This is because the old name lacks the username prefix ([_2]) that this system requires on the names of all new databases and database users. If you require a name without the prefix, you must contact your server administrator.","If you change this user’s name, you will be unable to rename it back to “[_1]”. This is because the old name lacks the username prefix ([_2]) that this system requires on the names of all new databases and database users. If you require a name without the prefix, you must contact your server administrator.":"If you change this user’s name, you will be unable to rename it back to “[_1]”. This is because the old name lacks the username prefix ([_2]) that this system requires on the names of all new databases and database users. If you require a name without the prefix, you must contact your server administrator.","It is a potentially dangerous operation to rename a database. You may want to [output,url,_1,back up this database] before renaming it.":"It is a potentially dangerous operation to rename a database. You may want to [output,url,_1,back up this database] before renaming it.","Rename Database":"Переименовать базу данных","Rename Database User":"Переименовать пользователя базы данных","Renaming database user …":"Переименование пользователя базы данных …","Renaming database …":"Переименование базы данных …","Success! The browser is now redirecting …":"Готово! Браузер выполняет перенаправление …","Success! This page will now reload.":"Готово! Сейчас эта страница будет перезагружена.","The new name must be different from the old name.":"Новое имя должно отличаться от старого."};

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
