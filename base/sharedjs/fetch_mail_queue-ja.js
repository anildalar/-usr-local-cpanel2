//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/base/sharedjs/fetch_mail_queue.js
// Generated: /usr/local/cpanel/base/sharedjs/fetch_mail_queue-ja.js
// Module:    legacy_shared/fetch_mail_queue-ja
// Locale:    ja
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"Actions":"アクション","Are you sure you wish to attempt to deliver the entire mail queue?":"メールキュー全てを送信しますか？","Are you sure you wish to purge the entire mail queue?":"メールキュー全てをパージしますか？","Frozen":"凍結","Invalid Date":"日付が正しくありません","Message ID":"メッセージ ID","Queued":"待機中","Recipient(s)":"受信者","Sender":"送信者","Size":"サイズ","Status":"ステータス","System":"システム","The fetch returned no data.":"フェッチの結果、データが返ってきませんでした。","Time Received":"受信時刻","You must first select at least one message in the queue.":"待機に入っているメッセージをまず1つ以上選択する必要があります。"};

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