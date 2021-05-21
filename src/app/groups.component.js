"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var group_service_1 = require("./group.service");
var TimerObservable_1 = require("rxjs/observable/TimerObservable");
require("rxjs/Rx");
var GroupsComponent = (function () {
    function GroupsComponent(groupService) {
        this.groupService = groupService;
    }
    GroupsComponent.prototype.getGroups = function () {
        var _this = this;
        TimerObservable_1.TimerObservable.create(0, 2500)
            .subscribe(function () {
            _this.groupService.getGroups()
                .subscribe(function (data) { return _this.groups = data; });
        });
    };
    GroupsComponent.prototype.ngOnInit = function () {
        this.getGroups();
    };
    GroupsComponent = __decorate([
        core_1.Component({
            selector: 'my-groups',
            templateUrl: './groups.component.html',
            styleUrls: ['./groups.component.css']
        }),
        __metadata("design:paramtypes", [group_service_1.GroupService])
    ], GroupsComponent);
    return GroupsComponent;
}());
//# sourceMappingURL=heroes.component.js.map
