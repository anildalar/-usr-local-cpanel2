(function(){"use strict";var VALIDATION=CPANEL.validate;var DOM=YAHOO.util.Dom;var APPLICATIONS=CPANEL.namespace("CPANEL.Applications");APPLICATIONS.SSL={isValidSSLDomain:function(el){var domain=el.value.trim();return VALIDATION.host(domain.replace(/^\*\./,""))},areValidSSLDomains:function(el){var domains=el.value.trim().split(/[,;\s]+/);return domains.every((function(d){return VALIDATION.host(d.replace(/^\*\./,""))}))},isOptionalIfUndefined:function(el){if(el&&el.value!==""){return true}return false},isAlphaOrWhitespace:function(el){if(el&&el.value!==""){return/^[\-A-Za-z ]+$/.test(el.value)}return false}}})();
