//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/whostmgr/docroot/templates/greylist/views/base.js
// Generated: /usr/local/cpanel/whostmgr/docroot/templates/greylist/views/base-fr.js
// Module:    /templates/greylist/views/base-fr
// Locale:    fr
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Add to Trusted Hosts":"Ajouter aux hôtes certifiés","Some Host [asis,IP] addresses were not added to the Trusted Hosts list.":"Certaines adresses [asis,IP] d’hôtes n’ont pas été ajoutées à la liste des hôtes certifiés.","The status for [asis,Greylisting] has changed, possibly in another browser session.":"Le statut de [asis,Greylisting] a changé. Cela est peut-être survenu au cours d’une autre session de navigateur.","You have successfully added [quant,_1,record,records] to the Trusted Hosts list.":"Vous avez ajouté [quant,_1, enregistrement, enregistrements] à la liste des hôtes certifiés.","You have successfully added “[_1]” to the Trusted Hosts list.":"Vous avez ajouté « [_1] » à la liste des hôtes certifiés.","You have successfully updated the comment for “[_1]”.":"Le commentaire pour « [_1] » a bien été mis à jour.","Your neighboring [asis,IP] addresses are not in the Trusted Hosts list.":"Les adresses [asis,IP] de voisinage ne figurent pas dans la liste des hôtes certifiés.","[asis,Exim] is disabled on the server which makes [asis,Greylisting] ineffective. Use the [output,url,_1,Service Manager page,_2] to enable [asis,Exim].":"La commande [asis,Exim] est désactivée sur le serveur. En conséquence, [asis,Greylisting] n’est pas disponible. Utilisez la [output,url,_1,page Gestionnaire de services,_2] pour activer [asis,Exim].","[asis,Greylisting] is now disabled.":"[asis,Greylisting] est maintenant désactivé.","[asis,Greylisting] is now enabled.":"Le [asis,Greylisting] est maintenant activé."};

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