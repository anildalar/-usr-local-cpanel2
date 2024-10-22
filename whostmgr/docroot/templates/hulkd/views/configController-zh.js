//~~GENERATED~~
//-------------------------------------------------------------
// Source:    /usr/local/cpanel/whostmgr/docroot/templates/hulkd/views/configController.js
// Generated: /usr/local/cpanel/whostmgr/docroot/templates/hulkd/views/configController-zh.js
// Module:    /templates/hulkd/views/configController-zh
// Locale:    zh
// This file is generated by the cpanel localization system
// using the bin/_build_translated_js_hash_files.pl script.
//-------------------------------------------------------------
// !!! Do not hand edit this file !!!
//-------------------------------------------------------------
(function() {
    // The raw lexicon.
    var newLex = {"The system disabled the [asis,UseDNS] setting for [asis,SSHD] in order to add IP addresses to the whitelist. You must restart SSH through the [output,url,_1,Restart SSH Server,_2] page to implement the change.":"为了将 IP 地址添加到白名单，系统禁用了 [asis,SSHD] 的 [asis,UseDNS] 设置。 必须通过[output,url,_1,重新启动 SSH 服务器,_2]页面重新启动 SSH 才能实施此更改。","The system successfully saved your [asis,cPHulk] configuration settings.":"系统已成功保存您的 [asis,cPHulk] 配置设置。","You changed the protection level of [asis,cPHulk]. Click Save to implement this change.":"您更改了 [asis,cPHulk] 的保护级别。 请单击“保存”实施此更改。"};

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