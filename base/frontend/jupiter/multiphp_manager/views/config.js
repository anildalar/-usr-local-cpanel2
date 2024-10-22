/*
 * multiphp_manager/views/config.js                Copyright(c) 2020 cPanel, L.L.C.
 *                                                           All rights reserved.
 * copyright@cpanel.net                                         http://cpanel.net
 * This code is subject to the cPanel license. Unauthorized copying is prohibited
 */

/* global define: false, PAGE: true */

define(
    [
        "angular",
        "cjt/util/locale",
        "lodash",
        "uiBootstrap",
        "cjt/services/alertService",
        "cjt/directives/alert",
        "cjt/directives/alertList",
        "cjt/directives/callout",
        "app/services/configService",
        "app/views/impactedDomainsPopup"
    ],
    function(angular, LOCALE, _) {
        "use strict";

        // Retrieve the current application
        var app = angular.module("App");

        var controller = app.controller(
            "config",
            ["$scope", "configService", "$uibModal", "$timeout", "alertService",
                function($scope, configService, $uibModal, $timeout, alertService) {

                    // Setup data structures for the view
                    $scope.loadingVhostList = false;
                    $scope.phpVersionsEmpty = true;
                    $scope.selectedVersion = {};
                    $scope.phpVhostList = [];

                    // Setup data structures for restricted versions/alert
                    $scope.restrictedPhp = {
                        domainsSelected: [],
                        showAlert: false,
                        alertInfo: "",
                        showAllDomains: false,
                        showMore: true
                    };

                    $scope.vhostSelected = false;
                    var selectedVhostList = [];

                    $scope.totalSelectedDomains = 0;

                    $scope.checkdropdownOpen = false;

                    // meta information
                    $scope.meta = {

                        // Sort settings
                        sortReverse: false,
                        sortBy: "vhost",
                        sortDirection: "asc",

                        // Search/Filter options
                        filterBy: "*",
                        filterCompare: "contains",
                        filterValue: "",

                        // Pager settings
                        maxPages: 0,
                        totalItems: $scope.phpVhostList.length,
                        currentPage: 1,
                        pageSize: 10,
                        pageSizes: [10, 20, 50, 100, 500, 1000],
                        start: 0,
                        limit: 10
                    };

                    var impactedDomains = {
                        loading: false,
                        warn: false,
                        show: false,
                        showMore: false,
                        text: ""
                    };

                    var eolWarningMsgLastPart = LOCALE.maketext("We recommend that you update to a supported version of [asis,PHP]. For more information, read our [output,url,_1,PHP,target,_2] documentation.", "https://go.cpanel.net/eaphp", "_blank");
                    var phpVersionRegex = /^ea-php\d{2,}$/;
                    $scope.php = {
                        systemPhp: {
                            isEol: false
                        },
                        showEolMsg: false,
                        eolWarningMsg: ""
                    };

                    var getSelectedRestrictedDomains = function() {
                        var totalRestricted = [];

                        // check if it is a PHP restricted versions
                        $scope.phpVhostList.forEach(function(item) {
                            if (item.rowSelected && item.isRestricted) {
                                totalRestricted.push(item.vhost);
                            }
                        });
                        return totalRestricted;
                    };

                    var updatePhpAlert = function() {

                        // update restricted versions selected
                        $scope.restrictedPhp.domainsSelected = getSelectedRestrictedDomains();
                        $scope.restrictedPhp.showMore = 6 < $scope.restrictedPhp.domainsSelected.length;
                        var restrictedDomains = $scope.restrictedPhp.domainsSelected;
                        if (restrictedDomains.length > 0) {
                            $scope.restrictedPhp.showAlert = true;

                            // reduce is used to extract the display version list from $scope.phpVersions
                            // to enumerate them in the LOCALE make text list_and method
                            var phpVersions = $scope.phpVersions.reduce(function(acc, item) {
                                if (item.version !== "inherit") {
                                    acc.push(item.displayPhpVersion);
                                }
                                return acc;
                            }, []);

                            $scope.restrictedPhp.alertInfo = LOCALE.maketext("The system administrator only allows this account to use the [asis,PHP] [numerate,_2,version,versions] [list_and,_1].", phpVersions.map(_.escape), phpVersions.length) + " " + LOCALE.maketext("If you change the [asis,PHP] version for the following [numerate,_1,domain,domains], you cannot use this interface to change the [numerate,_1,domain,domains] back to use [numerate,_1,its,their] original version of [asis,PHP].", restrictedDomains.length);
                        } else {
                            $scope.restrictedPhp.showAlert = false;
                        }
                    };

                    $scope.selectAllVhosts = function() {
                        if ($scope.allRowsSelected) {
                            $scope.phpVhostList.forEach(function(item) {
                                item.rowSelected = true;

                                if ( selectedVhostList.indexOf(item.vhost) !== -1 ) {
                                    return;
                                }

                                selectedVhostList.push(item.vhost);
                            });
                        } else {

                            var unselectedDomains = $scope.phpVhostList.map(function(item) {
                                item.rowSelected = false;
                                return item.vhost;
                            });

                            selectedVhostList = _.difference(selectedVhostList, unselectedDomains);
                            $scope.restrictedPhp.showAlert = false;
                        }

                        $scope.totalSelectedDomains = selectedVhostList.length;
                        $scope.vhostSelected = $scope.totalSelectedDomains > 0;
                        $scope.restrictedPhp.domainsSelected = getSelectedRestrictedDomains();

                        // update restricted versions if warning is showing
                        if ($scope.restrictedPhp.showAlert) {
                            updatePhpAlert();
                        }
                    };

                    var processImpactedDomains = function(vhostInfo, selected) {

                        // Get impacted domains for this vhost selection and show them to
                        // to warn the user about the impact that the change has.
                        if (selected) {
                            vhostInfo.impactedDomains.loading = true;
                            configService.fetchImpactedDomains("domain", vhostInfo.vhost)
                                .then(function(result) {

                                    // Original vhost we are getting this data for, is also
                                    // returned as part of the result. Let's remove that so we can
                                    // just show the other impacted domains.
                                    var domains = _.without(result.data.domains, vhostInfo.vhost);
                                    if (result.status && domains.length > 0) {
                                        vhostInfo.impactedDomains.show = vhostInfo.impactedDomains.warn = vhostInfo.rowSelected;
                                        vhostInfo.impactedDomains.showMore = domains.length > 10;
                                        vhostInfo.impactedDomains.text = LOCALE.maketext("A change to the “[output,strong,_1]” domain‘s PHP version affects the following domains:", _.escape(vhostInfo.vhost));
                                        vhostInfo.impactedDomains.domains = _.sortBy(domains);
                                    }
                                },
                                function(error) {
                                    alertService.add({
                                        type: "danger",
                                        message: error,
                                        closeable: true,
                                        replace: false,
                                        group: "multiphpManager"
                                    });
                                }).finally(function() {
                                    vhostInfo.impactedDomains.loading = false;
                                });
                        } else {
                            vhostInfo.impactedDomains.show = vhostInfo.impactedDomains.warn = selected;
                        }
                    };

                    $scope.toggleRestrictedDomains = function() {
                        $scope.restrictedPhp.showAllDomains = !$scope.restrictedPhp.showAllDomains;
                    };

                    $scope.selectVhost = function(vhostInfo) {
                        if (typeof vhostInfo !== "undefined") {
                            processImpactedDomains(vhostInfo, vhostInfo.rowSelected);

                            if (vhostInfo.rowSelected) {
                                selectedVhostList.push(vhostInfo.vhost);
                                $scope.allRowsSelected = $scope.phpVhostList.every(function(item) {
                                    return item.rowSelected;
                                });
                            } else {
                                selectedVhostList = selectedVhostList.filter(function(item) {
                                    return item !== vhostInfo.vhost;
                                });

                                // Unselect Select All checkbox.
                                $scope.allRowsSelected = false;
                            }
                        }

                        $scope.totalSelectedDomains = selectedVhostList.length;
                        $scope.vhostSelected = $scope.totalSelectedDomains > 0;
                        $scope.restrictedPhp.domainsSelected = getSelectedRestrictedDomains();

                        // update restricted versions if warning is showing
                        if ($scope.restrictedPhp.showAlert) {
                            updatePhpAlert();
                        }
                    };

                    $scope.rowClass = function(vhostInfo) {
                        if (vhostInfo.impactedDomains.warn) {
                            return "warning";
                        }

                        if (vhostInfo.impactedDomains.loading) {
                            return "processing";
                        }
                    };

                    $scope.showAllImpactedDomains = function(vhostInfo) {

                        // var viewingProfile = angular.copy(thisProfile);
                        $uibModal.open({
                            templateUrl: "impactedDomainsPopup.ptt",
                            controller: "impactedDomainsPopup",
                            resolve: {
                                data: function() {
                                    return vhostInfo;
                                }
                            }
                        });
                    };

                    $scope.clearAllSelections = function(event) {
                        event.preventDefault();
                        event.stopPropagation();

                        selectedVhostList = [];
                        $scope.phpVhostList.forEach(function(item) {
                            item.rowSelected = false;
                        });

                        $scope.checkdropdownOpen = false;
                        $scope.allRowsSelected = false;
                        $scope.totalSelectedDomains = 0;
                        $scope.vhostSelected = false;
                        $scope.restrictedPhp.showAlert = false;
                    };

                    $scope.hidePhpAlert = function() {
                        $scope.restrictedPhp.showAlert = false;
                    };

                    var setPhpRecommendedVersion = function() {
                        configService.getCustomRecommendations().then(function(result) {
                            if (result && result.data.length > 0 ) {
                                var recVersions = result.data;
                                var matchedVers = [];

                                recVersions.forEach(function(recVer) {
                                    $scope.phpVersions.forEach(function(v) {
                                        if (v.version.includes(recVer)) {

                                            // Add recommended label to display version for dropdown
                                            matchedVers.push(configService.friendlyPhpFormat(v.version));
                                            v.displayPhpVersion = v.displayPhpVersion + " - " + LOCALE.maketext("Recommended");
                                            $scope.showRecommendedVersion = true;
                                        }
                                    });
                                });

                                // Add sentence about recommended version for display in UI
                                if ( matchedVers.length > 0 ) {
                                    $scope.recommendedVersionMessage = LOCALE.maketext("Your hosting provider recommends [list_or,_1].", matchedVers);
                                }
                            }
                        });

                    };

                    var setDomainPhpDropdown = function(versionList) {

                        // versionList is sent to the function when the
                        // dropdown is bound the first time.
                        if (typeof versionList !== "undefined") {
                            $scope.phpVersions = versionList;

                            // Cannot show "inherit" in the dropdown if system default itself doesn't exist.
                            if (typeof $scope.systemPhp !== "undefined" && $scope.systemPhp !== "") {

                                // A new entry 'inherit' will be added to PHP version list. It allows domains
                                // to reset back to 'inherit' value.
                                $scope.phpVersions.push({ version: "inherit", displayPhpVersion: "inherit" });
                            }
                        }

                        if ($scope.phpVersions && $scope.phpVersions.length > 0) {
                            setPhpRecommendedVersion();
                            $scope.selectedVersion = $scope.phpVersions[0];
                            $scope.phpVersionsEmpty = false;
                        } else {
                            $scope.phpVersionsEmpty = true;
                        }
                    };

                    var resetForm = function() {
                        setDomainPhpDropdown();
                        selectedVhostList = [];
                        $scope.phpVhostList.forEach(function(item) {
                            item.rowSelected = false;
                        });

                        // Unselect Select All checkbox.
                        $scope.allRowsSelected = false;

                        $scope.totalSelectedDomains = 0;
                        $scope.vhostSelected = false;
                    };

                    // Apply the new PHP version setting of a selected user
                    $scope.performApplyDomainPhp = function() {

                        alertService.clear();

                        // hide restricted php warning
                        if ($scope.restrictedPhp.showAlert) {
                            $scope.restrictedPhp.showAlert = false;
                        }

                        return configService.applyDomainSetting($scope.selectedVersion.version, selectedVhostList)
                            .then(
                                function(data) {
                                    if (typeof data !== "undefined") {
                                        alertService.add({
                                            type: "success",
                                            message: LOCALE.maketext("Successfully applied [asis,PHP] version “[_1]” to the selected [numerate,_2,domain,domains].", $scope.selectedVersion.displayPhpVersion, selectedVhostList.length),
                                            closeable: true,
                                            replace: false,
                                            autoClose: 10000,
                                            group: "multiphpManager"
                                        });
                                        $scope.selectPage();
                                    }
                                }, function(response) {
                                    if (typeof (response.raw) !== "undefined") {
                                        var errors = response.raw.errors;

                                        // ::TODO:: Should scroll to the error alert when
                                        // multiple errors occur.
                                        if (errors.length > 0) {
                                            var successfulDomains = [];
                                            if (response.data && response.data.vhosts) {
                                                successfulDomains = response.data.vhosts;
                                            }
                                            errors.forEach(function(error) {
                                                alertService.add({
                                                    type: "danger",
                                                    message: error,
                                                    closeable: true,
                                                    replace: false,
                                                    group: "multiphpManager"
                                                });
                                            });

                                            if (successfulDomains.length > 0) {
                                                alertService.add({
                                                    type: "success",
                                                    message: LOCALE.maketext("Successfully applied [asis,PHP] version “[_1]” to [numerate,_2,a domain,some domains].", $scope.selectedVersion.displayPhpVersion, successfulDomains.length),
                                                    closeable: true,
                                                    replace: false,
                                                    autoClose: 10000,
                                                    group: "multiphpManager"
                                                });
                                            }
                                        }
                                    } else {
                                        alertService.add({
                                            type: "danger",
                                            message: response.error,
                                            closeable: true,
                                            replace: false,
                                            group: "multiphpManager"
                                        });
                                    }
                                }).finally(function() {
                                resetForm();
                            });
                    };

                    $scope.applyDomainPhp = function() {
                        if ($scope.restrictedPhp.domainsSelected.length > 0) {
                            return updatePhpAlert();
                        } else {
                            return $scope.performApplyDomainPhp();
                        }
                    };

                    var applyListToTable = function(resultList) {
                        var vhostList = resultList.items;

                        // update the total items after search
                        $scope.meta.totalItems = resultList.totalItems;

                        var filteredList = vhostList;

                        // filter list based on page size and pagination
                        if ($scope.meta.totalItems > _.min($scope.meta.pageSizes)) {
                            var start = ($scope.meta.currentPage - 1) * $scope.meta.pageSize;

                            $scope.showPager = true;

                            // table statistics
                            $scope.meta.start = start + 1;
                            $scope.meta.limit = start + filteredList.length;
                        } else {

                            // hide pager and pagination
                            $scope.showPager = false;

                            if (filteredList.length === 0) {
                                $scope.meta.start = 0;
                            } else {

                                // table statistics
                                $scope.meta.start = 1;
                            }

                            $scope.meta.limit = filteredList.length;
                        }

                        var countNonSelected = 0;

                        // Select the rows if they were previously selected on this page.
                        filteredList.forEach(function(item) {
                            if (selectedVhostList.indexOf(item.vhost) !== -1) {
                                item.rowSelected = true;
                            } else {
                                item.rowSelected = false;
                                countNonSelected++;
                            }

                            item.impactedDomains = angular.copy(impactedDomains);

                            // Initialize the 'inherited' bool flag for every time to false.
                            item.inherited = false;
                            var version_source = item.phpversion_source;
                            if ( typeof version_source !== "undefined" ) {
                                var type = "", value = "";
                                if ( typeof version_source.domain !== "undefined" ) {
                                    type = "domain";
                                    value = version_source.domain;
                                } else if (typeof version_source.system_default !== "undefined") {
                                    type = "system_default";
                                    value = LOCALE.maketext("System Default");
                                }

                                if ((type === "domain" && value !== item.vhost) ||
                                type === "system_default") {
                                    item.inherited = true;
                                    item.inheritedInfo = LOCALE.maketext("This domain inherits its [asis,PHP] version “[output,em,_1]” from: [output,strong,_2]", _.escape(item.displayPhpVersion), _.escape(value));
                                }
                            }

                            // Initialize 'restricted' values
                            item.isRestricted = false;
                            item.showInheritInfo = false;

                            var installedVersions = PAGE.versionListData.data.versions;

                            // checks if the PHP version is not installed on the system
                            if (!_.some(installedVersions, ["version", item.version])) {
                                item.isRestricted = true;
                            }
                        });

                        $scope.restrictedPhp.showMore = 6 < $scope.restrictedPhp.domainsSelected.length;

                        $scope.phpVhostList = filteredList;

                        // Clear the 'Select All' checkbox if at least one row is not selected.
                        $scope.allRowsSelected = (filteredList.length > 0) && (countNonSelected === 0);
                    };

                    /**
                     * Fetch the list of vhosts for the user account with their default PHP versions.
                     * @return {Promise} Promise that when fulfilled will result in the list being loaded with the account's vhost list.
                     */
                    var fetchVhostList = function() {
                        $scope.loadingVhostList = true;
                        return configService
                            .fetchList($scope.meta)
                            .then(function(results) {
                                applyListToTable(results);
                            }, function(error) {

                                // failure
                                alertService.add({
                                    type: "danger",
                                    message: error,
                                    closeable: true,
                                    replace: false,
                                    group: "multiphpManager"
                                });
                            })
                            .then(function() {
                                $scope.loadingVhostList = false;
                            });
                    };

                    /**
                     * Select a specific page
                     * @param  {Number} page Page number
                     */
                    $scope.selectPage = function(page) {

                        // set the page if requested.
                        if (page && angular.isNumber(page)) {
                            $scope.meta.currentPage = page;
                        }

                        return fetchVhostList();
                    };

                    /**
                     * Filter the End of life PHP recommendations
                     * from the EA4 recommendation pool.
                     * @method filterEolPhpRecos
                     * @param {Object} data
                     * @returns {Array} Array of PHP End of life recommndations.
                     */
                    var filterEolPhpRecos = function(data) {
                        var eolPhps = [];
                        var keys = _.sortBy(_.filter(_.keys(data), function(key) {
                            return (phpVersionRegex.test(key));
                        }));

                        _.each(keys, function(key) {
                            _.each(data[key], function(reco) {
                                if (_.includes(reco.filter, "eol")) {
                                    eolPhps.push(key);
                                }
                            });
                        });
                        return eolPhps;
                    };

                    /**
                     * Sets the view parameters that show the PHP
                     * EOL warning.
                     * @method setPhpEolData
                     * @param {Array} versionList
                     */
                    var setPhpEolData = function(versionList) {
                        return configService.getEA4Recommendations()
                            .then(function(result) {
                                if (result && typeof result.data !== "undefined") {
                                    var eolPhps = filterEolPhpRecos(result.data);
                                    if (eolPhps.length > 0) {

                                        // Show if system PHP is EOL.
                                        $scope.php.systemPhp.isEol = _.includes(eolPhps, PAGE.systemPHPData.data.version);

                                        // Check if there are any EOL PHPs installed.
                                        var installedEolPhps = _.intersection(eolPhps, versionList);

                                        // Show the deprecation message only if EOL PHPs are installed on the system.
                                        if (installedEolPhps.length > 0) {
                                            var displayEolPhps = _.map(installedEolPhps, function(php) {
                                                return configService.friendlyPhpFormat(php);
                                            });
                                            var eolWarningMsg = LOCALE.maketext("[output,strong,Warning]: [asis,PHP] [numerate,_2,version,versions] [list_and,_1] [numerate,_2,is,are] [output,strong,deprecated].", displayEolPhps.map(_.escape), installedEolPhps.length) + " " + eolWarningMsgLastPart;
                                            $scope.php.showEolMsg = true;
                                            $scope.php.eolWarningMsg = eolWarningMsg;
                                        }
                                    }
                                } else {
                                    alertService.add({
                                        type: "warning",
                                        message: LOCALE.maketext("The system could not retrieve data for deprecated versions of PHP."),
                                        closeable: true,
                                        id: "recommendationsError",
                                        group: "multiphpManager"
                                    });
                                }
                            })
                            .catch(function(error) {
                                alertService.add({
                                    type: "warning",
                                    message: error,
                                    closeable: true,
                                    id: "recommendationsError",
                                    group: "multiphpManager"
                                });
                            });
                    };

                    $scope.$on("$viewContentLoaded", function() {
                        alertService.clear();
                        setPhpEolData(PAGE.versionListData.data.versions);

                        // add php user friendly version
                        if (PAGE.versionListData.data) {
                            PAGE.versionListData.data.versions = PAGE.versionListData.data.versions.map(function(version) {
                                return {
                                    version: version,
                                    displayPhpVersion: configService.transformPhpFormat(version)
                                };
                            });
                        }

                        var errorMsg;

                        // Load the domain table
                        if (PAGE.vhostListData.status) {
                            $scope.loadingVhostList = false;
                            var results = configService.convertResponseToList(PAGE.vhostListData);
                            applyListToTable(results);
                        } else {
                            errorMsg = PAGE.vhostListData.errors[0];
                            alertService.add({
                                type: "danger",
                                message: PAGE.vhostListData.errors[0],
                                closeable: true,
                                replace: false,
                                group: "multiphpManager"
                            });
                        }

                        // Load system PHP version.
                        if (PAGE.systemPHPData.status) {
                            $scope.systemPhp = {
                                version: PAGE.systemPHPData.data.version,
                                displayPhpVersion: configService.transformPhpFormat(PAGE.systemPHPData.data.version)
                            };

                        } else {
                            if (errorMsg !== PAGE.systemPHPData.errors[0]) {
                                alertService.add({
                                    type: "danger",
                                    message: PAGE.systemPHPData.errors[0],
                                    closeable: true,
                                    replace: false,
                                    group: "multiphpManager"
                                });
                            }
                        }

                        // Load the installed PHP versions.
                        if (PAGE.versionListData.status) {
                            setDomainPhpDropdown(PAGE.versionListData.data.versions );
                        } else {
                            setDomainPhpDropdown();
                            if (errorMsg !== PAGE.versionListData.errors[0]) {
                                alertService.add({
                                    type: "danger",
                                    message: PAGE.versionListData.errors[0],
                                    closeable: true,
                                    replace: false,
                                    group: "multiphpManager"
                                });
                            }
                        }
                    });
                }
            ]);

        return controller;
    }
);
