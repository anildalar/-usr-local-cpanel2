/*
PAGE variables:
    - dbuser
    - action_context
    - required_password_strength
    - db_engine
    - success_url
*/
( function(window) {

    "use strict";

    var CPANEL = window.CPANEL;
    var EVENT = window.EVENT;
    var DOM = window.DOM;

    var LOCALE = window.LOCALE;

    var PAGE = window.PAGE;

    // NOTE: *many* assumptions about the DOM structure here.
    var _init = function() {
        var password_validators = CPANEL.password.setup("password", "password2", "password_strength", PAGE.required_password_strength || 1, "create_strong_password", "why_strong_passwords_link", "why_strong_passwords_text");
        CPANEL.validate.attach_to_form("submit_new_password", password_validators, _submit_new_password);

        if ( PAGE.db_engine === "postgresql" && PAGE.action_context === "rename" ) {
            (new CPANEL.widgets.Page_Notice( {
                level: "info",
                visible: false,
                content: LOCALE.maketext("The system is asking you to set this PostgreSQL user’s password because you have renamed the user. This user will not be able to log in until you set its password (you may use the user’s previous password here).")
            } ) ).show();
        }
    };

    function _submit_new_password(e) {
        var overlay = new CPANEL.ajax.Page_Progress_Overlay(
            null,
            {
                covers: "userform",
                show_status: true,
                status_html: LOCALE.maketext("Setting password …")
            }
        );
        overlay.show();

        CPANEL.api( {
            version: CPANEL.is_whm() ? 1 : 3,
            module: (PAGE.db_engine === "mysql") ? "Mysql" : "Postgresql",
            func: "set_password",
            data: {
                user: PAGE.dbuser,
                password: DOM.get("userform").pass.value
            },
            callback: CPANEL.ajax.build_page_callback(
                _make_reload_dialog,
                { hide_on_return: overlay }
            )
        } );
    }

    function _make_reload_dialog() {
        var dialog = new CPANEL.ajax.Common_Dialog( null, {
            effect: CPANEL.ajax.FADE_MODAL,
            modal: true,
            fixedcenter: true,
            strings: {
                "close": LOCALE.maketext("Close")
            },
            buttons: [
                {
                    text: LOCALE.maketext("OK"),
                    handler: _redirect_back,
                    isDefault: true
                }
            ]
        } );
        dialog.setHeader( CPANEL.widgets.Dialog.applyDialogHeader( LOCALE.maketext("Success") ) );
        dialog.setBody( LOCALE.maketext("You have successfully set this user’s password.") );

        // dialog.beforeShowEvent.subscribe( dialog.center );
        dialog.show();
    }

    function _redirect_back() {
        if ( PAGE.success_url ) {
            location.href = PAGE.success_url;
        } else {
            history.back();
        }
    }

    EVENT.onDOMReady(_init);

}(window) );
