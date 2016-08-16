System.register(['angular2/core', 'angular2/router', '../shared/star.component', './tag-filter.pipe', './tag.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, star_component_1, tag_filter_pipe_1, tag_service_1;
    var TagListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (star_component_1_1) {
                star_component_1 = star_component_1_1;
            },
            function (tag_filter_pipe_1_1) {
                tag_filter_pipe_1 = tag_filter_pipe_1_1;
            },
            function (tag_service_1_1) {
                tag_service_1 = tag_service_1_1;
            }],
        execute: function() {
            TagListComponent = (function () {
                function TagListComponent(_tagService) {
                    this._tagService = _tagService;
                    this.pageTitle = 'Device List';
                    this.imageWidth = 50;
                    this.imageMargin = 2;
                    this.showImage = false;
                }
                TagListComponent.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                TagListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._tagService.getTags()
                        .subscribe(function (tags) { return _this.tags = tags; }, function (error) { return _this.errorMessage = error; });
                };
                TagListComponent.prototype.onRatingClicked = function (message) {
                    this.pageTitle = 'Tags List: ' + message;
                };
                TagListComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-tags',
                        templateUrl: 'app/tags/tag-list.component.html',
                        styleUrls: ['app/tags/tag-list.component.css'],
                        directives: [star_component_1.StarComponent, router_1.ROUTER_DIRECTIVES],
                        pipes: [tag_filter_pipe_1.TagFilterPipe]
                    }), 
                    __metadata('design:paramtypes', [tag_service_1.TagService])
                ], TagListComponent);
                return TagListComponent;
            }());
            exports_1("TagListComponent", TagListComponent);
        }
    }
});
//# sourceMappingURL=tag-list.component.js.map