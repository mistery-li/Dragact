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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
import { Dragact } from '../lib/dragact';
import './index.css';
var Words = [
    { content: 'You can do anything, but not everything.' },
    { content: 'Those who dare to fail miserably can achieve greatly.' },
    { content: 'You miss 100 percent of the shots you never take.', handle: true },
    { content: 'Those who believe in telekinetics, raise my hand.' },
    { content: 'I’d rather live with a good question than a bad answer.' }
];
var fakeData = function () {
    var Y = 0;
    return Words.map(function (item, index) {
        if (index % 4 === 0)
            Y++;
        return __assign({}, item, { GridX: index % 4 * 4, GridY: Y * 4, w: 4, h: 2, key: index + '' });
    });
};
var Card = function (props) {
    var item = props.item;
    return (React.createElement("div", { className: 'layout-Item' },
        React.createElement("div", { style: { padding: 5, textAlign: 'center', color: '#595959' } }, item.handle ? React.createElement("div", { className: 'card-handle', id: "dragact-handle" }, "\u70B9\u6211\u62D6\u52A8") : item.content)));
};
var HandleLayout = /** @class */ (function (_super) {
    __extends(HandleLayout, _super);
    function HandleLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HandleLayout.prototype.render = function () {
        var margin = [5, 5];
        var dragactInit = {
            width: 600,
            col: 12,
            rowHeight: 800 / 12,
            margin: margin,
            className: 'normal-layout',
            layout: fakeData(),
            placeholder: true
        };
        return (React.createElement("div", null,
            React.createElement("div", { style: { display: 'flex', justifyContent: 'center' } },
                React.createElement("div", null,
                    React.createElement("h1", { style: { textAlign: 'center' } }, "\u62D6\u62FD\u628A\u624B Demo"),
                    React.createElement(Dragact, __assign({}, dragactInit), function (item, isDragging) {
                        return React.createElement(Card, { item: item });
                    })))));
    };
    return HandleLayout;
}(React.Component));
export { HandleLayout };
