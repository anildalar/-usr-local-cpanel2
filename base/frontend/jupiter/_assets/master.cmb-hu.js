//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/frontend/jupiter/_assets/master.cmb.js
// Generated: /usr/local/cpanel/base/frontend/jupiter/_assets/master.cmb-hu.js
// Module:    /jupiter/_assets/master.cmb-hu
// Locale:    hu
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"[quant,_1,%s byte,%s bytes]":"[quant,_1,%s bájt,%s bájt]"};

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
//-------------------------------------------------------------
// CLDR Data for hu
//-------------------------------------------------------------
(function(context) {
    var locale = "hu",
        functions = {'get_plural_form':function(n){var category;var category_values=Array.prototype.slice.call(arguments,1);var has_extra_for_zero=0;var abs_n=Math.abs(n);var category_process_order=["zero","one","two","few","many","other"];var category_rules_lookup={};for(i=0;i<category_process_order.length;i++){if(category_rules_lookup[category_process_order[i]]){category=category_rules_lookup[category_process_order[i]](abs_n);if(category)break;}}
var categories=["other"];if(category_values.length===0){category_values=categories;}
else{var cat_len=categories.length;var val_len=category_values.length;var cat_len_plus_one=cat_len+1;if(val_len===cat_len_plus_one){has_extra_for_zero++;}
else if(cat_len!==val_len){if(window.console)console.warn('The number of given values ('+val_len+') does not match the number of categories ('+cat_len+').');}}
if(category===undefined){var cat_idx=has_extra_for_zero&&abs_n!==0?-2:-1;var sliced=category_values.slice(cat_idx);return[sliced[0],has_extra_for_zero&&abs_n===0?1:0];}
else{var return_value;GET_POSITION:while(1){var cat_pos_in_list;var index=-1;CATEGORY:for(i=0;i<categories.length;i++){index++;if(categories[i]===category){cat_pos_in_list=index;break CATEGORY;}}
if(cat_pos_in_list===undefined&&category!=='other'){if(window.console)console.warn('The category ('+category+') is not used by this locale.');category='other';continue GET_POSITION;}
else if(cat_pos_in_list===undefined){var cat_idx=has_extra_for_zero&&abs_n!==0?-2:-1;var sliced=category_values.slice(cat_idx);return_value=[sliced[0],has_extra_for_zero&&abs_n===0?1:0]
break GET_POSITION;}
else{if(has_extra_for_zero&&category==='other'){var cat_idx=has_extra_for_zero&&abs_n===0?-1:cat_pos_in_list;var sliced=category_values.slice(cat_idx);return_value=[sliced[0],has_extra_for_zero&&abs_n===0?1:0];break GET_POSITION;}
else{return_value=[category_values[cat_pos_in_list],0];break GET_POSITION;}}
break GET_POSITION;}
return return_value;}}},
        datetime_info = {"territory":null,"quarter_stand_alone_narrow":["1","2","3","4"],"time_formats":{"short":"H:mm","medium":"H:mm:ss","long":"H:mm:ss z","full":"H:mm:ss zzzz"},"era_narrow":["i. e.","i. sz."],"datetime_format_full":"y. MMMM d., EEEE H:mm:ss zzzz","glibc_date_1_format":"%a %b %e %H:%M:%S %Z %Y","datetime_format_long":"y. MMMM d. H:mm:ss z","date_format_short":"yyyy.MM.dd.","native_variant":null,"name":"Hungarian","language_id":"hu","era_wide":["időszámításunk előtt","időszámításunk szerint"],"variant_id":null,"date_format_medium":"yyyy.MM.dd.","time_format_default":"H:mm:ss","era_abbreviated":["i. e.","i. sz."],"datetime_format":"{1} {0}","month_format_wide":["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"],"quarter_format_abbreviated":["N1","N2","N3","N4"],"datetime_format_short":"yyyy.MM.dd. H:mm","glibc_datetime_format":"%a %b %e %H:%M:%S %Y","quarter_stand_alone_abbreviated":["N1","N2","N3","N4"],"script_id":null,"prefers_24_hour_time":1,"cldr_version":"1.7.1","day_format_wide":["hétfő","kedd","szerda","csütörtök","péntek","szombat","vasárnap"],"language":"Hungarian","month_format_narrow":["J","F","M","Á","M","J","J","A","S","O","N","D"],"time_format_full":"H:mm:ss zzzz","date_format_default":"yyyy.MM.dd.","am_pm_abbreviated":["de.","du."],"native_territory":null,"glibc_time_12_format":"%I:%M:%S %p","month_stand_alone_wide":["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"],"time_format_long":"H:mm:ss z","day_stand_alone_wide":["hétfő","kedd","szerda","csütörtök","péntek","szombat","vasárnap"],"variant":null,"id":"hu","available_formats":null,"quarter_stand_alone_wide":["I. negyedév","II. negyedév","III. negyedév","IV. negyedév"],"time_format_medium":"H:mm:ss","time_format_short":"H:mm","date_format_full":"y. MMMM d., EEEE","territory_id":null,"first_day_of_week":"1","glibc_date_format":"%m/%d/%y","quarter_format_wide":["I. negyedév","II. negyedév","III. negyedév","IV. negyedév"],"day_stand_alone_abbreviated":["H","K","Sze","Cs","P","Szo","V"],"month_stand_alone_narrow":["J","F","M","Á","M","J","J","A","S","O","N","D"],"format_for":{"yQQQ":"y QQQ","yMMMEd":"EEE, y MMM d","d":"d","y":"y","hms":"h:mm:ss a","MMMMd":"MMMM d.","yMMMM":"y MMMM","ms":"mm:ss","M":"L","yM":"y-M","MEd":"M. d., E","MMM":"LLL","Md":"M. d.","yQ":"y Q","yMEd":"EEE, y-M-d","Hm":"HH:mm","EEEd":"d EEE","Hms":"H:mm:ss","hm":"h:mm a","MMMEd":"E MMM d","MMMMEd":"E MMMM d","MMMd":"MMM d.","yMMM":"y MMM"},"quarter_format_narrow":["1","2","3","4"],"date_formats":{"short":"yyyy.MM.dd.","medium":"yyyy.MM.dd.","long":"y. MMMM d.","full":"y. MMMM d., EEEE"},"date_format_long":"y. MMMM d.","month_stand_alone_abbreviated":["jan.","febr.","márc.","ápr.","máj.","jún.","júl.","aug.","szept.","okt.","nov.","dec."],"native_language":"magyar","datetime_format_default":"yyyy.MM.dd. H:mm:ss","native_name":"magyar","day_format_narrow":["H","K","S","C","P","S","V"],"script":null,"default_time_format_length":"medium","glibc_time_format":"%H:%M:%S","native_script":null,"month_format_abbreviated":["jan.","febr.","márc.","ápr.","máj.","jún.","júl.","aug.","szept.","okt.","nov.","dec."],"default_date_format_length":"medium","day_stand_alone_narrow":["H","K","S","C","P","S","V"],"day_format_abbreviated":["H","K","Sze","Cs","P","Szo","V"],"datetime_format_medium":"yyyy.MM.dd. H:mm:ss"},
        misc_info = {"delimiters":{"quotation_start":"„","quotation_end":"”","alternate_quotation_start":"„","alternate_quotation_end":"”"},"orientation":{"lines":"top-to-bottom","characters":"left-to-right"},"posix":{"nostr":"nem:n","yesstr":"igen:i"},"plural_forms":{"category_list":["other"],"category_rules_function":null,"category_rules":{},"category_rules_compiled":{}},"cldr_formats":{"territory":"Régió: {0}","_decimal_format_decimal":",","language":"Nyelv: {0}","percent":"#,##0%","locale":"{0} ({1})","_decimal_format_group":" ","_percent_format_percent":"%","decimal":"#,##0.###","ellipsis":{"medial":"{0}…{1}","final":"{0}…","initial":"…{0}"},"list_or":{"2":"{0} vagy {1}","start":"{0}, {1}","middle":"{0}, {1}","end":"{0} vagy {1}"},"list":{"middle":"{0}, {1}","2":"{0} és {1}","start":"{0}, {1}","end":"{0} és {1}"}},"fallback":[],"characters":{"more_information":"?"}};

    // Legacy cjt 1.0 support
    if ( context.YAHOO ) {
        context.YAHOO.util.Event.onDOMReady(function() {
            var Locale = CPANEL.Locale.generateClassFromCldr(locale, functions, datetime_info, misc_info);
            context.LOCALE = new Locale();
        });
    }

    // Modern cjt 2.0 support
    context.CJT2_loader = {
        current_locale: locale,
        CLDR: {}
    };

    var CLDR = {
        locale: locale,
        functions: functions,
        datetime_info: datetime_info,
        misc_info: misc_info
    };

    context.CJT2_loader.CLDR[locale] = CLDR;
    context.CLDR = CLDR;

})(window);
//~~END-GENERATED~~