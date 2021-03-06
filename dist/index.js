var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import * as ReactDOM from "react-dom";
import { LayoutDemo } from './NormalLayout/index';
import { SortedTableWithStatic } from "./StaticWidget/index";
import { LayoutRestore } from "./LayoutRestore/index";
import { HandleLayout } from "./HandleLayout/index";
// import { AddRemove } from "./AddRemove/index";
import { Mobile } from "./mobileLayout/index";
import './index.css';
var DemoMap = {
    normalLayout: React.createElement(LayoutDemo, null),
    // SortedTable: <SortedTable />,
    StaticHeader: React.createElement(SortedTableWithStatic, null),
    LayoutRestore: React.createElement(LayoutRestore, null),
    HandleLayout: React.createElement(HandleLayout, null),
    // AddRemove: <AddRemove />,
    Mobile: React.createElement(Mobile, null)
};
var DemoDispatcher = /** @class */ (function (_super) {
    __extends(DemoDispatcher, _super);
    function DemoDispatcher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            demo: React.createElement(LayoutDemo, null)
        };
        _this.handleLayoutChange = function (demoName) {
            _this.setState({
                demo: DemoMap[demoName]
            });
        };
        return _this;
    }
    DemoDispatcher.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("div", null, "\u5207\u6362 Demos"),
            React.createElement("div", { className: 'demo-button-layout' },
                React.createElement("button", { onClick: function () { return _this.handleLayoutChange('normalLayout'); } }, "\u666E\u901A\u5E03\u5C40"),
                React.createElement("button", { onClick: function () { return _this.handleLayoutChange('StaticHeader'); } }, "\u9759\u6001\u7EC4\u4EF6"),
                React.createElement("button", { onClick: function () { return _this.handleLayoutChange('LayoutRestore'); } }, "\u5B58\u50A8\u5E03\u5C40"),
                React.createElement("button", { onClick: function () { return _this.handleLayoutChange('HandleLayout'); } }, "\u62D6\u62FD\u628A\u624B"),
                React.createElement("button", { onClick: function () { return _this.handleLayoutChange('Mobile'); } }, "\u79FB\u52A8\u7AEF")),
            this.state.demo));
    };
    return DemoDispatcher;
}(React.Component));
React.createElement(DemoDispatcher, null);
ReactDOM.render(React.createElement(DemoDispatcher, null), document.getElementById('root'));
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
