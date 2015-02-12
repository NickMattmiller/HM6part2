(function(){

    var app = angular.module('tutorials-directives', []);

    app.directive("url", function () {
        return {
            restrict: 'E',
            templateUrl: "thing-url.html"
        };
    });

    app.directive("title", function () {
        return {
            restrict: 'E',
            templateUrl: "thing-title.html"
        };
    });

    app.directive("image", function () {
        return {
            restrict: "E",
            templateUrl: "thing-image.html"
        };
    });

    app.directive("text", function () {
        return {
            restrict: "E",
            templateUrl: "thing-text.html"
        };
    });

    app.directive("thingsTabs", function() {
        return {
            restrict: "E",
            templateUrl: "things-tabs.html",
            controller: function () {
                this.tab = 1;

                this.isSet = function (checkTab) {
                    return this.tab === checkTab;
                };

                this.setTab = function (activeTab) {
                    this.tab = activeTab;
                };
            },
            controllerAs: "tab"
        };
    });
      })();