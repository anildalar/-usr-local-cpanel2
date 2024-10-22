/*
# email_deliverability/index.devel.js                Copyright 2022 cPanel, L.L.C.
#                                                           All rights reserved.
# copyright@cpanel.net                                         http://cpanel.net
# This code is subject to the cPanel license. Unauthorized copying is prohibited
*/

/* global require: false */

// Loads the application with the non-combined files
/* global require: false */

require(
    [
        "app/index"
    ],
    function(APP) {

        "use strict";

        APP();
    }
);
