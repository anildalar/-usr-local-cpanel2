//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/fetch_mail_queue.js
// Generated: /usr/local/cpanel/base/sharedjs/fetch_mail_queue-zh.js
// Module:    legacy_shared/fetch_mail_queue-zh
// Locale:    zh
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Actions":"操作","Are you sure you wish to attempt to deliver the entire mail queue?":"是否确定要尝试传递整个邮件队列?","Are you sure you wish to purge the entire mail queue?":"是否确定要清除整个邮件队列?","Frozen":"已冻结","Invalid Date":"日期无效","Message ID":"邮件 ID","Queued":"已排队","Recipient(s)":"收件人","Sender":"发件人","Size":"大小","Status":"状态","System":"系统","The fetch returned no data.":"提取未返回任何数据。","Time Received":"接收时间","You must first select at least one message in the queue.":"必须先在队列中至少选择一封邮件。"};

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
