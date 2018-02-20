import * as React from 'react';
import { Dragact } from '../lib/dragact';
import './index.css';
var Words = [
    { content: 'You can do anything, but not everything.', img: 'http://pic.sc.chinaz.com/files/pic/pic9/201303/xpic10472.jpg' },
    { content: 'Those who dare to fail miserably can achieve greatly.', img: 'https://img00.deviantart.net/1163/i/2013/059/d/7/irish_views_by_ssquared_photography-d5wjnsk.jpg' },
    { content: 'You miss 100 percent of the shots you never take.', img: 'http://www.landsendhotel.co.uk/uploads/gallery/gallery/coastal_scenery_seascapes_6.jpg' },
    { content: 'Those who believe in telekinetics, raise my hand.', img: 'https://tctechcrunch2011.files.wordpress.com/2017/10/26099344353_18cd6fabb8_k.jpg?w=738' },
    { content: 'I’d rather live with a good question than a bad answer.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVa26cLzh6PYUwY4LMpwbHyDHFmWi_w2JuqDzeOdm1IIEbBZO0Vg' }
];
var Cell = function (props) {
    var item = props.item;
    return (React.createElement("div", { className: 'layout-Cell' },
        React.createElement("img", { src: item.img, style: { width: 45, height: 45 }, draggable: false, alt: 'card' }),
        React.createElement("div", { style: { paddingLeft: 12, color: '#595959' } }, item.content)));
};
export var SortedTable = function () {
    return (React.createElement("div", { style: { display: 'flex', justifyContent: 'center' } },
        React.createElement("div", null,
            React.createElement("h1", { style: { textAlign: 'center' } }, "Sorted Table Demo"),
            React.createElement(Dragact, { width: 800, col: 1, rowHeight: 60, margin: [2, 2], className: 'normal-layout' }, Words.map(function (el, index) {
                return React.createElement(Cell, { item: el, key: index, "data-set": { GridX: 0, GridY: 0, w: 1, h: 1 } });
            })))));
};