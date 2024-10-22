//-------------------------------------------------------------
// CLDR Data for zh
//-------------------------------------------------------------
(function(context) {
    var locale = "zh",
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
        datetime_info = {"territory":null,"quarter_stand_alone_narrow":["1","2","3","4"],"time_formats":{"short":"ah:mm","medium":"ahh:mm:ss","long":"zah时mm分ss秒","full":"zzzzah时mm分ss秒"},"era_narrow":["公元前","公元"],"datetime_format_full":"y年M月d日EEEEzzzzah时mm分ss秒","glibc_date_1_format":"%a %b %e %H:%M:%S %Z %Y","datetime_format_long":"y年M月d日zah时mm分ss秒","date_format_short":"yy-M-d","native_variant":null,"name":"Chinese","language_id":"zh","era_wide":["公元前","公元"],"variant_id":null,"date_format_medium":"yyyy-M-d","time_format_default":"ahh:mm:ss","era_abbreviated":["公元前","公元"],"datetime_format":"{1}{0}","month_format_wide":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"quarter_format_abbreviated":["1季","2季","3季","4季"],"datetime_format_short":"yy-M-dah:mm","glibc_datetime_format":"%a %b %e %H:%M:%S %Y","quarter_stand_alone_abbreviated":["1季","2季","3季","4季"],"script_id":null,"prefers_24_hour_time":0,"cldr_version":"1.7.1","day_format_wide":["星期一","星期二","星期三","星期四","星期五","星期六","星期日"],"language":"Chinese","month_format_narrow":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"time_format_full":"zzzzah时mm分ss秒","date_format_default":"yyyy-M-d","am_pm_abbreviated":["上午","下午"],"native_territory":null,"glibc_time_12_format":"%I:%M:%S %p","month_stand_alone_wide":["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],"time_format_long":"zah时mm分ss秒","day_stand_alone_wide":["星期一","星期二","星期三","星期四","星期五","星期六","星期日"],"variant":null,"id":"zh","available_formats":null,"quarter_stand_alone_wide":["第1季度","第2季度","第3季度","第4季度"],"time_format_medium":"ahh:mm:ss","time_format_short":"ah:mm","date_format_full":"y年M月d日EEEE","territory_id":null,"first_day_of_week":"1","glibc_date_format":"%m/%d/%y","quarter_format_wide":["第1季度","第2季度","第3季度","第4季度"],"day_stand_alone_abbreviated":["周一","周二","周三","周四","周五","周六","周日"],"month_stand_alone_narrow":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"format_for":{"yQQQ":"y年QQQ","yMMMEd":"y年MMMd日EEE","d":"d日","y":"y年","hms":"ah:mm:ss","MMMMd":"MMMMd日","yMMMM":"y年MMMM","ms":"mm:ss","M":"L","yM":"yyyy-M","MEd":"M-dE","MMM":"LLL","Md":"M-d","yQ":"y年QQQ","yMEd":"y年M月d日，E","Hm":"H:mm","EEEd":"d EEE","Hms":"H:mm:ss","hm":"ah:mm","MMMEd":"MMMd日E","MMMMEd":"MMMMd日E","MMMd":"MMMd日","yMMM":"y年MMM"},"quarter_format_narrow":["1","2","3","4"],"date_formats":{"short":"yy-M-d","medium":"yyyy-M-d","long":"y年M月d日","full":"y年M月d日EEEE"},"date_format_long":"y年M月d日","month_stand_alone_abbreviated":["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],"native_language":"中文","datetime_format_default":"yyyy-M-dahh:mm:ss","native_name":"中文","day_format_narrow":["一","二","三","四","五","六","日"],"script":null,"default_time_format_length":"medium","glibc_time_format":"%H:%M:%S","native_script":null,"month_format_abbreviated":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"default_date_format_length":"medium","day_stand_alone_narrow":["一","二","三","四","五","六","日"],"day_format_abbreviated":["周一","周二","周三","周四","周五","周六","周日"],"datetime_format_medium":"yyyy-M-dahh:mm:ss"},
        misc_info = {"delimiters":{"quotation_start":"“","quotation_end":"”","alternate_quotation_start":"‘","alternate_quotation_end":"’"},"orientation":{"lines":"top-to-bottom","characters":"left-to-right"},"posix":{"nostr":"否:否定","yesstr":"是:确定"},"plural_forms":{"category_list":["other"],"category_rules_function":null,"category_rules":{},"category_rules_compiled":{}},"cldr_formats":{"territory":"区域：{0}","_decimal_format_decimal":".","language":"语言：{0}","percent":"#,##0%","locale":"{0}（{1}）","_decimal_format_group":",","_percent_format_percent":"%","decimal":"#,##0.###","ellipsis":{"medial":"{0}…{1}","final":"{0}…","initial":"…{0}"},"list_or":{"start":"{0}、{1}","end":"{0}或{1}","middle":"{0}、{1}","2":"{0}或{1}"},"list":{"middle":"{0}、{1}","2":"{0}和{1}","start":"{0}、{1}","end":"{0}和{1}"}},"fallback":[],"characters":{"more_information":"？"}};

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