//-------------------------------------------------------------
// CLDR Data for uk
//-------------------------------------------------------------
(function(context) {
    var locale = "uk",
        functions = {'get_plural_form':function(n){var category;var category_values=Array.prototype.slice.call(arguments,1);var has_extra_for_zero=0;var abs_n=Math.abs(n);var category_process_order=["zero","one","two","few","many","other"];var category_rules_lookup={"one":function(n){if((((n%10)==1)&&((n%100)!=11))){return'one';}return;},"few":function(n){if(((parseInt(n)==n&&(n%10)>=2&&(n%10)<=4)&&(parseInt(n)!=n||(n%100)<12||(n%100)>14))){return'few';}return;},"many":function(n){if((((n%10)==0))||((parseInt(n)==n&&(n%10)>=5&&(n%10)<=9))||((parseInt(n)==n&&(n%100)>=11&&(n%100)<=14))){return'many';}return;}};for(i=0;i<category_process_order.length;i++){if(category_rules_lookup[category_process_order[i]]){category=category_rules_lookup[category_process_order[i]](abs_n);if(category)break;}}
var categories=["one","few","many","other"];if(category_values.length===0){category_values=categories;}
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
        datetime_info = {"territory":null,"quarter_stand_alone_narrow":["1","2","3","4"],"time_formats":{"short":"HH:mm","medium":"HH:mm:ss","long":"HH:mm:ss z","full":"HH:mm:ss zzzz"},"era_narrow":["до н.е.","н.е."],"datetime_format_full":"EEEE, d MMMM y 'р'. HH:mm:ss zzzz","glibc_date_1_format":"%a %b %e %H:%M:%S %Z %Y","datetime_format_long":"d MMMM y 'р'. HH:mm:ss z","date_format_short":"dd.MM.yy","native_variant":null,"name":"Ukrainian","language_id":"uk","era_wide":["до нашої ери","нашої ери"],"variant_id":null,"date_format_medium":"d MMM y","time_format_default":"HH:mm:ss","era_abbreviated":["до н.е.","н.е."],"datetime_format":"{1} {0}","month_format_wide":["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"],"quarter_format_abbreviated":["I кв.","II кв.","III кв.","IV кв."],"datetime_format_short":"dd.MM.yy HH:mm","glibc_datetime_format":"%a %b %e %H:%M:%S %Y","quarter_stand_alone_abbreviated":["I кв.","II кв.","III кв.","IV кв."],"script_id":null,"prefers_24_hour_time":1,"cldr_version":"1.7.1","day_format_wide":["Понеділок","Вівторок","Середа","Четвер","Пʼятниця","Субота","Неділя"],"language":"Ukrainian","month_format_narrow":["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],"time_format_full":"HH:mm:ss zzzz","date_format_default":"d MMM y","am_pm_abbreviated":["дп","пп"],"native_territory":null,"glibc_time_12_format":"%I:%M:%S %p","month_stand_alone_wide":["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],"time_format_long":"HH:mm:ss z","day_stand_alone_wide":["Понеділок","Вівторок","Середа","Четвер","Пʼятниця","Субота","Неділя"],"variant":null,"id":"uk","available_formats":null,"quarter_stand_alone_wide":["I квартал","II квартал","III квартал","IV квартал"],"time_format_medium":"HH:mm:ss","time_format_short":"HH:mm","date_format_full":"EEEE, d MMMM y 'р'.","territory_id":null,"first_day_of_week":"1","glibc_date_format":"%m/%d/%y","quarter_format_wide":["I квартал","II квартал","III квартал","IV квартал"],"day_stand_alone_abbreviated":["Пн","Вт","Ср","Чт","Пт","Сб","Нд"],"month_stand_alone_narrow":["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],"format_for":{"yQQQ":"y QQQ","yMMMEd":"EEE, d MMM y","d":"d","y":"y","hms":"h:mm:ss a","MMMMd":"d MMMM","yMMMM":"LLLL y","ms":"mm:ss","M":"L","yM":"y-M","MEd":"E, M-d","MMM":"LLL","Md":"M-d","yQ":"y Q","yMEd":"EEE, y-M-d","Hm":"H:mm","EEEd":"d EEE","Hms":"H:mm:ss","hm":"h:mm a","MMMEd":"E, d MMM","MMMMEd":"E, d MMMM","MMMd":"d MMM","yMMM":"LLL y"},"quarter_format_narrow":["1","2","3","4"],"date_formats":{"short":"dd.MM.yy","medium":"d MMM y","long":"d MMMM y 'р'.","full":"EEEE, d MMMM y 'р'."},"date_format_long":"d MMMM y 'р'.","month_stand_alone_abbreviated":["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"],"native_language":"українська","datetime_format_default":"d MMM y HH:mm:ss","native_name":"українська","day_format_narrow":["П","В","С","Ч","П","С","Н"],"script":null,"default_time_format_length":"medium","glibc_time_format":"%H:%M:%S","native_script":null,"month_format_abbreviated":["січ.","лют.","бер.","квіт.","трав.","черв.","лип.","серп.","вер.","жовт.","лист.","груд."],"default_date_format_length":"medium","day_stand_alone_narrow":["П","В","С","Ч","П","С","Н"],"day_format_abbreviated":["Пн","Вт","Ср","Чт","Пт","Сб","Нд"],"datetime_format_medium":"d MMM y HH:mm:ss"},
        misc_info = {"delimiters":{"quotation_start":"«","quotation_end":"»","alternate_quotation_start":"„","alternate_quotation_end":"“"},"orientation":{"lines":"top-to-bottom","characters":"left-to-right"},"posix":{"nostr":"ні:н","yesstr":"так:т"},"plural_forms":{"category_list":["one","few","many","other"],"category_rules_function":null,"category_rules":{"one":"n mod 10 is 1 and n mod 100 is not 11","few":"n mod 10 in 2..4 and n mod 100 not in 12..14","many":"n mod 10 is 0 or n mod 10 in 5..9 or n mod 100 in 11..14"},"category_rules_compiled":{"one":function (n) {if ( (( (n % 10) == 1) && ( (n % 100) != 11))) { return 'one'; } return;},"few":function (n) {if ( (( parseInt(n) == n && (n % 10) >= 2 && (n % 10) <= 4 ) && ( parseInt(n) != n || (n % 100) < 12 || (n % 100) > 14 ))) { return 'few'; } return;},"many":function (n) {if ( (( (n % 10) == 0)) ||  (( parseInt(n) == n && (n % 10) >= 5 && (n % 10) <= 9 )) ||  (( parseInt(n) == n && (n % 100) >= 11 && (n % 100) <= 14 ))) { return 'many'; } return;}}},"cldr_formats":{"territory":"Територія з кодом {0}","_decimal_format_decimal":",","language":"Мова з кодом {0}","percent":"#,##0%","locale":"{0} ({1})","_decimal_format_group":" ","_percent_format_percent":"%","decimal":"#,##0.###","ellipsis":{"medial":"{0}…{1}","final":"{0}…","initial":"…{0}"},"list_or":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0} або {1}","2":"{0} або {1}"},"list":{"middle":"{0}, {1}","2":"{0} та {1}","start":"{0}, {1}","end":"{0} та {1}"}},"fallback":["ru"],"characters":{"more_information":"?"}};

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