(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
!function(t){const e=t.en=t.en||{};e.dictionary=Object.assign(e.dictionary||{},{"(may require <kbd>Fn</kbd>)":"(may require <kbd>Fn</kbd>)","%0 of %1":"%0 of %1",Accept:"Accept",Accessibility:"Accessibility","Accessibility help":"Accessibility help","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"Below, you can find a list of keyboard shortcuts that can be used in the editor.",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Bold text":"Bold text",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot access default workspace.":"Cannot access default workspace.","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Clear:"Clear","Click to edit block":"Click to edit block",Close:"Close","Close contextual balloons, dropdowns, and dialogs":"Close contextual balloons, dropdowns, and dialogs",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Content editing keystrokes":"Content editing keystrokes","Copy selected content":"Copy selected content","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Create link":"Create link",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Decrease list item indent":"Decrease list item indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Drag to move":"Drag to move","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit image":"Edit image","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor dialog":"Editor dialog","Editor editing area: %0":"Editor editing area: %0","Editor menu bar":"Editor menu bar","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.","Failed to determine category of edited image.":"Failed to determine category of edited image.","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height","Help Contents. To close this dialog press ESC.":"Help Contents. To close this dialog press ESC.",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image from computer":"Image from computer","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Increase list item indent":"Increase list item indent",Insert:"Insert","Insert a hard break (a new paragraph)":"Insert a hard break (a new paragraph)","Insert a new paragraph directly after a widget":"Insert a new paragraph directly after a widget","Insert a new paragraph directly before a widget":"Insert a new paragraph directly before a widget","Insert a new table row (when in the last cell of a table)":"Insert a new table row (when in the last cell of a table)","Insert a soft break (a <code>&lt;br&gt;</code> element)":"Insert a soft break (a <code>&lt;br&gt;</code> element)","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image via URL":"Insert image via URL","Insert image with file manager":"Insert image with file manager","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Insert with file manager":"Insert with file manager","Inserting image failed":"Inserting image failed",Inset:"Inset","Invalid start index value.":"Invalid start index value.",Italic:"Italic","Italic text":"Italic text","Justify cell text":"Justify cell text","Keystrokes that can be used in a list":"Keystrokes that can be used in a list","Keystrokes that can be used in a table cell":"Keystrokes that can be used in a table cell","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Keystrokes that can be used when a widget is selected (for example: image, table, etc.)","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget",MENU_BAR_MENU_EDIT:"Edit",MENU_BAR_MENU_FILE:"File",MENU_BAR_MENU_FONT:"Font",MENU_BAR_MENU_FORMAT:"Format",MENU_BAR_MENU_HELP:"Help",MENU_BAR_MENU_INSERT:"Insert",MENU_BAR_MENU_TEXT:"Text",MENU_BAR_MENU_TOOLS:"Tools",MENU_BAR_MENU_VIEW:"View","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells","Move focus between form fields (inputs, buttons, etc.)":"Move focus between form fields (inputs, buttons, etc.)","Move focus in and out of an active dialog window":"Move focus in and out of an active dialog window","Move focus to the menu bar, navigate between menu bars":"Move focus to the menu bar, navigate between menu bars","Move focus to the toolbar, navigate between toolbars":"Move focus to the toolbar, navigate between toolbars","Move out of a link":"Move out of a link","Move out of an inline code style":"Move out of an inline code style","Move the caret to allow typing directly after a widget":"Move the caret to allow typing directly after a widget","Move the caret to allow typing directly before a widget":"Move the caret to allow typing directly before a widget","Move the selection to the next cell":"Move the selection to the next cell","Move the selection to the previous cell":"Move the selection to the previous cell","Navigate through the table":"Navigate through the table","Navigate through the toolbar or menu bar":"Navigate through the toolbar or menu bar",Next:"Next","No results found":"No results found","No searchable items":"No searchable items",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab","Open the accessibility help dialog":"Open the accessibility help dialog",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste content":"Paste content","Paste content as plain text":"Paste content as plain text","Paste the media URL in the input.":"Paste the media URL in the input.","Press %0 for help.":"Press %0 for help.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous","Processing the edited image.":"Processing the edited image.",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Replace from computer":"Replace from computer","Replace image":"Replace image","Replace image from computer":"Replace image from computer","Replace image with file manager":"Replace image with file manager","Replace with file manager":"Replace with file manager","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Revert autoformatting action":"Revert autoformatting action","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Server failed to process the image.":"Server failed to process the image.","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough","Strikethrough text":"Strikethrough text",Style:"Style",Subscript:"Subscript",Superscript:"Superscript",Table:"Table","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"These keyboard shortcuts allow for quick access to content editing features.":"These keyboard shortcuts allow for quick access to content editing features.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline","Underline text":"Underline text",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload from computer":"Upload from computer","Upload image from computer":"Upload image from computer","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.","User interface and content navigation keystrokes":"User interface and content navigation keystrokes","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */
(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
typeof define === 'function' && define.amd ? define(factory) :
(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["@kurkle/color"] = factory());
})(this, (function () { 'use strict';

function round(v) {
  return v + 0.5 | 0;
}
const lim = (v, l, h) => Math.max(Math.min(v, h), l);
function p2b(v) {
  return lim(round(v * 2.55), 0, 255);
}
function b2p(v) {
  return lim(round(v / 2.55), 0, 100);
}
function n2b(v) {
  return lim(round(v * 255), 0, 255);
}
function b2n(v) {
  return lim(round(v / 2.55) / 100, 0, 1);
}
function n2p(v) {
  return lim(round(v * 100), 0, 100);
}

const map$1 = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15};
const hex = [...'0123456789ABCDEF'];
const h1 = b => hex[b & 0xF];
const h2 = b => hex[(b & 0xF0) >> 4] + hex[b & 0xF];
const eq = b => ((b & 0xF0) >> 4) === (b & 0xF);
const isShort = v => eq(v.r) && eq(v.g) && eq(v.b) && eq(v.a);
function hexParse(str) {
  var len = str.length;
  var ret;
  if (str[0] === '#') {
    if (len === 4 || len === 5) {
      ret = {
        r: 255 & map$1[str[1]] * 17,
        g: 255 & map$1[str[2]] * 17,
        b: 255 & map$1[str[3]] * 17,
        a: len === 5 ? map$1[str[4]] * 17 : 255
      };
    } else if (len === 7 || len === 9) {
      ret = {
        r: map$1[str[1]] << 4 | map$1[str[2]],
        g: map$1[str[3]] << 4 | map$1[str[4]],
        b: map$1[str[5]] << 4 | map$1[str[6]],
        a: len === 9 ? (map$1[str[7]] << 4 | map$1[str[8]]) : 255
      };
    }
  }
  return ret;
}
const alpha = (a, f) => a < 255 ? f(a) : '';
function hexString(v) {
  var f = isShort(v) ? h1 : h2;
  return v
    ? '#' + f(v.r) + f(v.g) + f(v.b) + alpha(v.a, f)
    : undefined;
}

const HUE_RE = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function hsl2rgbn(h, s, l) {
  const a = s * Math.min(l, 1 - l);
  const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  return [f(0), f(8), f(4)];
}
function hsv2rgbn(h, s, v) {
  const f = (n, k = (n + h / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
  return [f(5), f(3), f(1)];
}
function hwb2rgbn(h, w, b) {
  const rgb = hsl2rgbn(h, 1, 0.5);
  let i;
  if (w + b > 1) {
    i = 1 / (w + b);
    w *= i;
    b *= i;
  }
  for (i = 0; i < 3; i++) {
    rgb[i] *= 1 - w - b;
    rgb[i] += w;
  }
  return rgb;
}
function hueValue(r, g, b, d, max) {
  if (r === max) {
    return ((g - b) / d) + (g < b ? 6 : 0);
  }
  if (g === max) {
    return (b - r) / d + 2;
  }
  return (r - g) / d + 4;
}
function rgb2hsl(v) {
  const range = 255;
  const r = v.r / range;
  const g = v.g / range;
  const b = v.b / range;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h, s, d;
  if (max !== min) {
    d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    h = hueValue(r, g, b, d, max);
    h = h * 60 + 0.5;
  }
  return [h | 0, s || 0, l];
}
function calln(f, a, b, c) {
  return (
    Array.isArray(a)
      ? f(a[0], a[1], a[2])
      : f(a, b, c)
  ).map(n2b);
}
function hsl2rgb(h, s, l) {
  return calln(hsl2rgbn, h, s, l);
}
function hwb2rgb(h, w, b) {
  return calln(hwb2rgbn, h, w, b);
}
function hsv2rgb(h, s, v) {
  return calln(hsv2rgbn, h, s, v);
}
function hue(h) {
  return (h % 360 + 360) % 360;
}
function hueParse(str) {
  const m = HUE_RE.exec(str);
  let a = 255;
  let v;
  if (!m) {
    return;
  }
  if (m[5] !== v) {
    a = m[6] ? p2b(+m[5]) : n2b(+m[5]);
  }
  const h = hue(+m[2]);
  const p1 = +m[3] / 100;
  const p2 = +m[4] / 100;
  if (m[1] === 'hwb') {
    v = hwb2rgb(h, p1, p2);
  } else if (m[1] === 'hsv') {
    v = hsv2rgb(h, p1, p2);
  } else {
    v = hsl2rgb(h, p1, p2);
  }
  return {
    r: v[0],
    g: v[1],
    b: v[2],
    a: a
  };
}
function rotate(v, deg) {
  var h = rgb2hsl(v);
  h[0] = hue(h[0] + deg);
  h = hsl2rgb(h);
  v.r = h[0];
  v.g = h[1];
  v.b = h[2];
}
function hslString(v) {
  if (!v) {
    return;
  }
  const a = rgb2hsl(v);
  const h = a[0];
  const s = n2p(a[1]);
  const l = n2p(a[2]);
  return v.a < 255
    ? `hsla(${h}, ${s}%, ${l}%, ${b2n(v.a)})`
    : `hsl(${h}, ${s}%, ${l}%)`;
}

const map = {
  x: 'dark',
  Z: 'light',
  Y: 're',
  X: 'blu',
  W: 'gr',
  V: 'medium',
  U: 'slate',
  A: 'ee',
  T: 'ol',
  S: 'or',
  B: 'ra',
  C: 'lateg',
  D: 'ights',
  R: 'in',
  Q: 'turquois',
  E: 'hi',
  P: 'ro',
  O: 'al',
  N: 'le',
  M: 'de',
  L: 'yello',
  F: 'en',
  K: 'ch',
  G: 'arks',
  H: 'ea',
  I: 'ightg',
  J: 'wh'
};
const names$1 = {
  OiceXe: 'f0f8ff',
  antiquewEte: 'faebd7',
  aqua: 'ffff',
  aquamarRe: '7fffd4',
  azuY: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '0',
  blanKedOmond: 'ffebcd',
  Xe: 'ff',
  XeviTet: '8a2be2',
  bPwn: 'a52a2a',
  burlywood: 'deb887',
  caMtXe: '5f9ea0',
  KartYuse: '7fff00',
  KocTate: 'd2691e',
  cSO: 'ff7f50',
  cSnflowerXe: '6495ed',
  cSnsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: 'ffff',
  xXe: '8b',
  xcyan: '8b8b',
  xgTMnPd: 'b8860b',
  xWay: 'a9a9a9',
  xgYF: '6400',
  xgYy: 'a9a9a9',
  xkhaki: 'bdb76b',
  xmagFta: '8b008b',
  xTivegYF: '556b2f',
  xSange: 'ff8c00',
  xScEd: '9932cc',
  xYd: '8b0000',
  xsOmon: 'e9967a',
  xsHgYF: '8fbc8f',
  xUXe: '483d8b',
  xUWay: '2f4f4f',
  xUgYy: '2f4f4f',
  xQe: 'ced1',
  xviTet: '9400d3',
  dAppRk: 'ff1493',
  dApskyXe: 'bfff',
  dimWay: '696969',
  dimgYy: '696969',
  dodgerXe: '1e90ff',
  fiYbrick: 'b22222',
  flSOwEte: 'fffaf0',
  foYstWAn: '228b22',
  fuKsia: 'ff00ff',
  gaRsbSo: 'dcdcdc',
  ghostwEte: 'f8f8ff',
  gTd: 'ffd700',
  gTMnPd: 'daa520',
  Way: '808080',
  gYF: '8000',
  gYFLw: 'adff2f',
  gYy: '808080',
  honeyMw: 'f0fff0',
  hotpRk: 'ff69b4',
  RdianYd: 'cd5c5c',
  Rdigo: '4b0082',
  ivSy: 'fffff0',
  khaki: 'f0e68c',
  lavFMr: 'e6e6fa',
  lavFMrXsh: 'fff0f5',
  lawngYF: '7cfc00',
  NmoncEffon: 'fffacd',
  ZXe: 'add8e6',
  ZcSO: 'f08080',
  Zcyan: 'e0ffff',
  ZgTMnPdLw: 'fafad2',
  ZWay: 'd3d3d3',
  ZgYF: '90ee90',
  ZgYy: 'd3d3d3',
  ZpRk: 'ffb6c1',
  ZsOmon: 'ffa07a',
  ZsHgYF: '20b2aa',
  ZskyXe: '87cefa',
  ZUWay: '778899',
  ZUgYy: '778899',
  ZstAlXe: 'b0c4de',
  ZLw: 'ffffe0',
  lime: 'ff00',
  limegYF: '32cd32',
  lRF: 'faf0e6',
  magFta: 'ff00ff',
  maPon: '800000',
  VaquamarRe: '66cdaa',
  VXe: 'cd',
  VScEd: 'ba55d3',
  VpurpN: '9370db',
  VsHgYF: '3cb371',
  VUXe: '7b68ee',
  VsprRggYF: 'fa9a',
  VQe: '48d1cc',
  VviTetYd: 'c71585',
  midnightXe: '191970',
  mRtcYam: 'f5fffa',
  mistyPse: 'ffe4e1',
  moccasR: 'ffe4b5',
  navajowEte: 'ffdead',
  navy: '80',
  Tdlace: 'fdf5e6',
  Tive: '808000',
  TivedBb: '6b8e23',
  Sange: 'ffa500',
  SangeYd: 'ff4500',
  ScEd: 'da70d6',
  pOegTMnPd: 'eee8aa',
  pOegYF: '98fb98',
  pOeQe: 'afeeee',
  pOeviTetYd: 'db7093',
  papayawEp: 'ffefd5',
  pHKpuff: 'ffdab9',
  peru: 'cd853f',
  pRk: 'ffc0cb',
  plum: 'dda0dd',
  powMrXe: 'b0e0e6',
  purpN: '800080',
  YbeccapurpN: '663399',
  Yd: 'ff0000',
  Psybrown: 'bc8f8f',
  PyOXe: '4169e1',
  saddNbPwn: '8b4513',
  sOmon: 'fa8072',
  sandybPwn: 'f4a460',
  sHgYF: '2e8b57',
  sHshell: 'fff5ee',
  siFna: 'a0522d',
  silver: 'c0c0c0',
  skyXe: '87ceeb',
  UXe: '6a5acd',
  UWay: '708090',
  UgYy: '708090',
  snow: 'fffafa',
  sprRggYF: 'ff7f',
  stAlXe: '4682b4',
  tan: 'd2b48c',
  teO: '8080',
  tEstN: 'd8bfd8',
  tomato: 'ff6347',
  Qe: '40e0d0',
  viTet: 'ee82ee',
  JHt: 'f5deb3',
  wEte: 'ffffff',
  wEtesmoke: 'f5f5f5',
  Lw: 'ffff00',
  LwgYF: '9acd32'
};
function unpack() {
  const unpacked = {};
  const keys = Object.keys(names$1);
  const tkeys = Object.keys(map);
  let i, j, k, ok, nk;
  for (i = 0; i < keys.length; i++) {
    ok = nk = keys[i];
    for (j = 0; j < tkeys.length; j++) {
      k = tkeys[j];
      nk = nk.replace(k, map[k]);
    }
    k = parseInt(names$1[ok], 16);
    unpacked[nk] = [k >> 16 & 0xFF, k >> 8 & 0xFF, k & 0xFF];
  }
  return unpacked;
}

let names;
function nameParse(str) {
  if (!names) {
    names = unpack();
    names.transparent = [0, 0, 0, 0];
  }
  const a = names[str.toLowerCase()];
  return a && {
    r: a[0],
    g: a[1],
    b: a[2],
    a: a.length === 4 ? a[3] : 255
  };
}

const RGB_RE = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function rgbParse(str) {
  const m = RGB_RE.exec(str);
  let a = 255;
  let r, g, b;
  if (!m) {
    return;
  }
  if (m[7] !== r) {
    const v = +m[7];
    a = m[8] ? p2b(v) : lim(v * 255, 0, 255);
  }
  r = +m[1];
  g = +m[3];
  b = +m[5];
  r = 255 & (m[2] ? p2b(r) : lim(r, 0, 255));
  g = 255 & (m[4] ? p2b(g) : lim(g, 0, 255));
  b = 255 & (m[6] ? p2b(b) : lim(b, 0, 255));
  return {
    r: r,
    g: g,
    b: b,
    a: a
  };
}
function rgbString(v) {
  return v && (
    v.a < 255
      ? `rgba(${v.r}, ${v.g}, ${v.b}, ${b2n(v.a)})`
      : `rgb(${v.r}, ${v.g}, ${v.b})`
  );
}

const to = v => v <= 0.0031308 ? v * 12.92 : Math.pow(v, 1.0 / 2.4) * 1.055 - 0.055;
const from = v => v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
function interpolate(rgb1, rgb2, t) {
  const r = from(b2n(rgb1.r));
  const g = from(b2n(rgb1.g));
  const b = from(b2n(rgb1.b));
  return {
    r: n2b(to(r + t * (from(b2n(rgb2.r)) - r))),
    g: n2b(to(g + t * (from(b2n(rgb2.g)) - g))),
    b: n2b(to(b + t * (from(b2n(rgb2.b)) - b))),
    a: rgb1.a + t * (rgb2.a - rgb1.a)
  };
}

function modHSL(v, i, ratio) {
  if (v) {
    let tmp = rgb2hsl(v);
    tmp[i] = Math.max(0, Math.min(tmp[i] + tmp[i] * ratio, i === 0 ? 360 : 1));
    tmp = hsl2rgb(tmp);
    v.r = tmp[0];
    v.g = tmp[1];
    v.b = tmp[2];
  }
}
function clone(v, proto) {
  return v ? Object.assign(proto || {}, v) : v;
}
function fromObject(input) {
  var v = {r: 0, g: 0, b: 0, a: 255};
  if (Array.isArray(input)) {
    if (input.length >= 3) {
      v = {r: input[0], g: input[1], b: input[2], a: 255};
      if (input.length > 3) {
        v.a = n2b(input[3]);
      }
    }
  } else {
    v = clone(input, {r: 0, g: 0, b: 0, a: 1});
    v.a = n2b(v.a);
  }
  return v;
}
function functionParse(str) {
  if (str.charAt(0) === 'r') {
    return rgbParse(str);
  }
  return hueParse(str);
}
class Color {
  constructor(input) {
    if (input instanceof Color) {
      return input;
    }
    const type = typeof input;
    let v;
    if (type === 'object') {
      v = fromObject(input);
    } else if (type === 'string') {
      v = hexParse(input) || nameParse(input) || functionParse(input);
    }
    this._rgb = v;
    this._valid = !!v;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var v = clone(this._rgb);
    if (v) {
      v.a = b2n(v.a);
    }
    return v;
  }
  set rgb(obj) {
    this._rgb = fromObject(obj);
  }
  rgbString() {
    return this._valid ? rgbString(this._rgb) : undefined;
  }
  hexString() {
    return this._valid ? hexString(this._rgb) : undefined;
  }
  hslString() {
    return this._valid ? hslString(this._rgb) : undefined;
  }
  mix(color, weight) {
    if (color) {
      const c1 = this.rgb;
      const c2 = color.rgb;
      let w2;
      const p = weight === w2 ? 0.5 : weight;
      const w = 2 * p - 1;
      const a = c1.a - c2.a;
      const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
      w2 = 1 - w1;
      c1.r = 0xFF & w1 * c1.r + w2 * c2.r + 0.5;
      c1.g = 0xFF & w1 * c1.g + w2 * c2.g + 0.5;
      c1.b = 0xFF & w1 * c1.b + w2 * c2.b + 0.5;
      c1.a = p * c1.a + (1 - p) * c2.a;
      this.rgb = c1;
    }
    return this;
  }
  interpolate(color, t) {
    if (color) {
      this._rgb = interpolate(this._rgb, color._rgb, t);
    }
    return this;
  }
  clone() {
    return new Color(this.rgb);
  }
  alpha(a) {
    this._rgb.a = n2b(a);
    return this;
  }
  clearer(ratio) {
    const rgb = this._rgb;
    rgb.a *= 1 - ratio;
    return this;
  }
  greyscale() {
    const rgb = this._rgb;
    const val = round(rgb.r * 0.3 + rgb.g * 0.59 + rgb.b * 0.11);
    rgb.r = rgb.g = rgb.b = val;
    return this;
  }
  opaquer(ratio) {
    const rgb = this._rgb;
    rgb.a *= 1 + ratio;
    return this;
  }
  negate() {
    const v = this._rgb;
    v.r = 255 - v.r;
    v.g = 255 - v.g;
    v.b = 255 - v.b;
    return this;
  }
  lighten(ratio) {
    modHSL(this._rgb, 2, ratio);
    return this;
  }
  darken(ratio) {
    modHSL(this._rgb, 2, -ratio);
    return this;
  }
  saturate(ratio) {
    modHSL(this._rgb, 1, ratio);
    return this;
  }
  desaturate(ratio) {
    modHSL(this._rgb, 1, -ratio);
    return this;
  }
  rotate(deg) {
    rotate(this._rgb, deg);
    return this;
  }
}

function index_esm(input) {
  return new Color(input);
}

var color = /*#__PURE__*/Object.freeze({
__proto__: null,
Color: Color,
default: index_esm,
round: round,
lim: lim,
p2b: p2b,
b2p: b2p,
n2b: n2b,
b2n: b2n,
n2p: n2p,
hexParse: hexParse,
hexString: hexString,
rgb2hsl: rgb2hsl,
hsl2rgb: hsl2rgb,
hwb2rgb: hwb2rgb,
hsv2rgb: hsv2rgb,
hueParse: hueParse,
rotate: rotate,
hslString: hslString,
nameParse: nameParse,
rgbParse: rgbParse,
rgbString: rgbString
});

var index = Object.assign(index_esm, color);

return index;

}));

},{}],3:[function(require,module,exports){
/*
Tagify v4.21.1 - tags input component
By: Yair Even-Or <vsync.design@gmail.com>
https://github.com/yairEO/tagify

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

THE SOFTWARE IS NOT PERMISSIBLE TO BE SOLD.
*/

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Tagify=e()}(this,(function(){"use strict";function t(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function e(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?t(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(t,e,i){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var s=i.call(t,e||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const s=(t,e,i,s)=>(t=""+t,e=""+e,s&&(t=t.trim(),e=e.trim()),i?t==e:t.toLowerCase()==e.toLowerCase()),a=(t,e)=>t&&Array.isArray(t)&&t.map((t=>n(t,e)));function n(t,e){var i,s={};for(i in t)e.indexOf(i)<0&&(s[i]=t[i]);return s}function o(t){var e=document.createElement("div");return t.replace(/\&#?[0-9a-z]+;/gi,(function(t){return e.innerHTML=t,e.innerText}))}function r(t){return(new DOMParser).parseFromString(t.trim(),"text/html").body.firstElementChild}function l(t,e){for(e=e||"previous";t=t[e+"Sibling"];)if(3==t.nodeType)return t}function d(t){return"string"==typeof t?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/`|'/g,"&#039;"):t}function h(t){var e=Object.prototype.toString.call(t).split(" ")[1].slice(0,-1);return t===Object(t)&&"Array"!=e&&"Function"!=e&&"RegExp"!=e&&"HTMLUnknownElement"!=e}function g(t,e,i){function s(t,e){for(var i in e)if(e.hasOwnProperty(i)){if(h(e[i])){h(t[i])?s(t[i],e[i]):t[i]=Object.assign({},e[i]);continue}if(Array.isArray(e[i])){t[i]=Object.assign([],e[i]);continue}t[i]=e[i]}}return t instanceof Object||(t={}),s(t,e),i&&s(t,i),t}function p(){const t=[],e={};for(let i of arguments)for(let s of i)h(s)?e[s.value]||(t.push(s),e[s.value]=1):t.includes(s)||t.push(s);return t}function c(t){return String.prototype.normalize?"string"==typeof t?t.normalize("NFD").replace(/[\u0300-\u036f]/g,""):void 0:t}var u=()=>/(?=.*chrome)(?=.*android)/i.test(navigator.userAgent);function m(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(t=>(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)))}function v(t){return t&&t.classList&&t.classList.contains(this.settings.classNames.tag)}function f(t,e){var i=window.getSelection();return e=e||i.getRangeAt(0),"string"==typeof t&&(t=document.createTextNode(t)),e&&(e.deleteContents(),e.insertNode(t)),t}function T(t,e,i){return t?(e&&(t.__tagifyTagData=i?e:g({},t.__tagifyTagData||{},e)),t.__tagifyTagData):(console.warn("tag element doesn't exist",t,e),e)}function w(t){if(t&&t.parentNode){var e=t,i=window.getSelection(),s=i.getRangeAt(0);i.rangeCount&&(s.setStartAfter(e),s.collapse(!0),i.removeAllRanges(),i.addRange(s))}}function b(t,e){t.forEach((t=>{if(T(t.previousSibling)||!t.previousSibling){var i=document.createTextNode("​");t.before(i),e&&w(i)}}))}var y={delimiters:",",pattern:null,tagTextProp:"value",maxTags:1/0,callbacks:{},addTagOnBlur:!0,addTagOn:["blur","tab","enter"],onChangeAfterBlur:!0,duplicates:!1,whitelist:[],blacklist:[],enforceWhitelist:!1,userInput:!0,keepInvalidTags:!1,createInvalidTags:!0,mixTagsAllowedAfter:/,|\.|\:|\s/,mixTagsInterpolator:["[[","]]"],backspace:!0,skipInvalid:!1,pasteAsTags:!0,editTags:{clicks:2,keepInvalid:!0},transformTag:()=>{},trim:!0,a11y:{focusableTags:!1},mixMode:{insertAfterTag:" "},autoComplete:{enabled:!0,rightKey:!1,tabKey:!1},classNames:{namespace:"tagify",mixMode:"tagify--mix",selectMode:"tagify--select",input:"tagify__input",focus:"tagify--focus",tagNoAnimation:"tagify--noAnim",tagInvalid:"tagify--invalid",tagNotAllowed:"tagify--notAllowed",scopeLoading:"tagify--loading",hasMaxTags:"tagify--hasMaxTags",hasNoTags:"tagify--noTags",empty:"tagify--empty",inputInvalid:"tagify__input--invalid",dropdown:"tagify__dropdown",dropdownWrapper:"tagify__dropdown__wrapper",dropdownHeader:"tagify__dropdown__header",dropdownFooter:"tagify__dropdown__footer",dropdownItem:"tagify__dropdown__item",dropdownItemActive:"tagify__dropdown__item--active",dropdownItemHidden:"tagify__dropdown__item--hidden",dropdownInital:"tagify__dropdown--initial",tag:"tagify__tag",tagText:"tagify__tag-text",tagX:"tagify__tag__removeBtn",tagLoading:"tagify__tag--loading",tagEditing:"tagify__tag--editable",tagFlash:"tagify__tag--flash",tagHide:"tagify__tag--hide"},dropdown:{classname:"",enabled:2,maxItems:10,searchKeys:["value","searchBy"],fuzzySearch:!0,caseSensitive:!1,accentedSearch:!0,includeSelectedTags:!1,escapeHTML:!0,highlightFirst:!0,closeOnSelect:!0,clearOnSelect:!0,position:"all",appendTarget:null},hooks:{beforeRemoveTag:()=>Promise.resolve(),beforePaste:()=>Promise.resolve(),suggestionClick:()=>Promise.resolve(),beforeKeyDown:()=>Promise.resolve()}},x={events:{binding(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];var e=this.dropdown.events.callbacks,i=this.listeners.dropdown=this.listeners.dropdown||{position:this.dropdown.position.bind(this,null),onKeyDown:e.onKeyDown.bind(this),onMouseOver:e.onMouseOver.bind(this),onMouseLeave:e.onMouseLeave.bind(this),onClick:e.onClick.bind(this),onScroll:e.onScroll.bind(this)},s=t?"addEventListener":"removeEventListener";"manual"!=this.settings.dropdown.position&&(document[s]("scroll",i.position,!0),window[s]("resize",i.position),window[s]("keydown",i.onKeyDown)),this.DOM.dropdown[s]("mouseover",i.onMouseOver),this.DOM.dropdown[s]("mouseleave",i.onMouseLeave),this.DOM.dropdown[s]("mousedown",i.onClick),this.DOM.dropdown.content[s]("scroll",i.onScroll)},callbacks:{onKeyDown(t){if(this.state.hasFocus&&!this.state.composing){var e=this.settings,i=this.DOM.dropdown.querySelector(e.classNames.dropdownItemActiveSelector),s=this.dropdown.getSuggestionDataByNode(i),a="mix"==e.mode;e.hooks.beforeKeyDown(t,{tagify:this}).then((n=>{switch(t.key){case"ArrowDown":case"ArrowUp":case"Down":case"Up":t.preventDefault();var o=this.dropdown.getAllSuggestionsRefs(),r="ArrowUp"==t.key||"Up"==t.key;i&&(i=this.dropdown.getNextOrPrevOption(i,!r)),i&&i.matches(e.classNames.dropdownItemSelector)||(i=o[r?o.length-1:0]),this.dropdown.highlightOption(i,!0);break;case"Escape":case"Esc":this.dropdown.hide();break;case"ArrowRight":if(this.state.actions.ArrowLeft)return;case"Tab":{let n=!e.autoComplete.rightKey||!e.autoComplete.tabKey;if(!a&&i&&n&&!this.state.editing){t.preventDefault();var l=this.dropdown.getMappedValue(s);return this.input.autocomplete.set.call(this,l),!1}return!0}case"Enter":t.preventDefault(),e.hooks.suggestionClick(t,{tagify:this,tagData:s,suggestionElm:i}).then((()=>{if(i)return this.dropdown.selectOption(i),i=this.dropdown.getNextOrPrevOption(i,!r),void this.dropdown.highlightOption(i);this.dropdown.hide(),a||this.addTags(this.state.inputText.trim(),!0)})).catch((t=>console.warn(t)));break;case"Backspace":{if(a||this.state.editing.scope)return;const t=this.input.raw.call(this);""!=t&&8203!=t.charCodeAt(0)||(!0===e.backspace?this.removeTags():"edit"==e.backspace&&setTimeout(this.editTag.bind(this),0))}}}))}},onMouseOver(t){var e=t.target.closest(this.settings.classNames.dropdownItemSelector);this.dropdown.highlightOption(e)},onMouseLeave(t){this.dropdown.highlightOption()},onClick(t){if(0==t.button&&t.target!=this.DOM.dropdown&&t.target!=this.DOM.dropdown.content){var e=t.target.closest(this.settings.classNames.dropdownItemSelector),i=this.dropdown.getSuggestionDataByNode(e);this.state.actions.selectOption=!0,setTimeout((()=>this.state.actions.selectOption=!1),50),this.settings.hooks.suggestionClick(t,{tagify:this,tagData:i,suggestionElm:e}).then((()=>{e?this.dropdown.selectOption(e,t):this.dropdown.hide()})).catch((t=>console.warn(t)))}},onScroll(t){var e=t.target,i=e.scrollTop/(e.scrollHeight-e.parentNode.clientHeight)*100;this.trigger("dropdown:scroll",{percentage:Math.round(i)})}}},refilter(t){t=t||this.state.dropdown.query||"",this.suggestedListItems=this.dropdown.filterListItems(t),this.dropdown.fill(),this.suggestedListItems.length||this.dropdown.hide(),this.trigger("dropdown:updated",this.DOM.dropdown)},getSuggestionDataByNode(t){var e=t&&t.getAttribute("value");return this.suggestedListItems.find((t=>t.value==e))||null},getNextOrPrevOption(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];var i=this.dropdown.getAllSuggestionsRefs(),s=i.findIndex((e=>e===t));return e?i[s+1]:i[s-1]},highlightOption(t,e){var i,s=this.settings.classNames.dropdownItemActive;if(this.state.ddItemElm&&(this.state.ddItemElm.classList.remove(s),this.state.ddItemElm.removeAttribute("aria-selected")),!t)return this.state.ddItemData=null,this.state.ddItemElm=null,void this.input.autocomplete.suggest.call(this);i=this.dropdown.getSuggestionDataByNode(t),this.state.ddItemData=i,this.state.ddItemElm=t,t.classList.add(s),t.setAttribute("aria-selected",!0),e&&(t.parentNode.scrollTop=t.clientHeight+t.offsetTop-t.parentNode.clientHeight),this.settings.autoComplete&&(this.input.autocomplete.suggest.call(this,i),this.dropdown.position())},selectOption(t,e){var i=this.settings,s=i.dropdown,a=s.clearOnSelect,n=s.closeOnSelect;if(!t)return this.addTags(this.state.inputText,!0),void(n&&this.dropdown.hide());e=e||{};var o=t.getAttribute("value"),r="noMatch"==o,l="mix"==i.mode,d=this.suggestedListItems.find((t=>(t.value??t)==o));if(this.trigger("dropdown:select",{data:d,elm:t,event:e}),o&&(d||r)){if(this.state.editing){let t=this.normalizeTags([d])[0];d=i.transformTag.call(this,t)||t,this.onEditTagDone(null,g({__isValid:!0},d))}else this[l?"addMixTags":"addTags"]([d||this.input.raw.call(this)],a);(l||this.DOM.input.parentNode)&&(setTimeout((()=>{this.DOM.input.focus(),this.toggleFocusClass(!0)})),n&&setTimeout(this.dropdown.hide.bind(this)),t.addEventListener("transitionend",(()=>{this.dropdown.fillHeaderFooter(),setTimeout((()=>t.remove()),100)}),{once:!0}),t.classList.add(this.settings.classNames.dropdownItemHidden))}else n&&setTimeout(this.dropdown.hide.bind(this))},selectAll(t){this.suggestedListItems.length=0,this.dropdown.hide(),this.dropdown.filterListItems("");var e=this.dropdown.filterListItems("");return t||(e=this.state.dropdown.suggestions),this.addTags(e,!0),this},filterListItems(t,e){var i,s,a,n,o,r=this.settings,l=r.dropdown,d=(e=e||{},[]),g=[],p=r.whitelist,u=l.maxItems>=0?l.maxItems:1/0,m=l.searchKeys,v=0;if(!(t="select"==r.mode&&this.value.length&&this.value[0][r.tagTextProp]==t?"":t)||!m.length)return d=l.includeSelectedTags?p:p.filter((t=>!this.isTagDuplicate(h(t)?t.value:t))),this.state.dropdown.suggestions=d,d.slice(0,u);function f(t,e){return e.toLowerCase().split(" ").every((e=>t.includes(e.toLowerCase())))}for(o=l.caseSensitive?""+t:(""+t).toLowerCase();v<p.length;v++){let t,r;i=p[v]instanceof Object?p[v]:{value:p[v]};let u=!Object.keys(i).some((t=>m.includes(t)))?["value"]:m;l.fuzzySearch&&!e.exact?(a=u.reduce(((t,e)=>t+" "+(i[e]||"")),"").toLowerCase().trim(),l.accentedSearch&&(a=c(a),o=c(o)),t=0==a.indexOf(o),r=a===o,s=f(a,o)):(t=!0,s=u.some((t=>{var s=""+(i[t]||"");return l.accentedSearch&&(s=c(s),o=c(o)),l.caseSensitive||(s=s.toLowerCase()),r=s===o,e.exact?s===o:0==s.indexOf(o)}))),n=!l.includeSelectedTags&&this.isTagDuplicate(h(i)?i.value:i),s&&!n&&(r&&t?g.push(i):"startsWith"==l.sortby&&t?d.unshift(i):d.push(i))}return this.state.dropdown.suggestions=g.concat(d),"function"==typeof l.sortby?l.sortby(g.concat(d),o):g.concat(d).slice(0,u)},getMappedValue(t){var e=this.settings.dropdown.mapValueTo;return e?"function"==typeof e?e(t):t[e]||t.value:t.value},createListHTML(t){return g([],t).map(((t,i)=>{"string"!=typeof t&&"number"!=typeof t||(t={value:t});var s=this.dropdown.getMappedValue(t);return s="string"==typeof s&&this.settings.dropdown.escapeHTML?d(s):s,this.settings.templates.dropdownItem.apply(this,[e(e({},t),{},{mappedValue:s}),this])})).join("")}};function O(){this.dropdown={};for(let t in this._dropdown)this.dropdown[t]="function"==typeof this._dropdown[t]?this._dropdown[t].bind(this):this._dropdown[t];this.dropdown.refs()}var D=e(e({},x),{},{refs(){this.DOM.dropdown=this.parseTemplate("dropdown",[this.settings]),this.DOM.dropdown.content=this.DOM.dropdown.querySelector("[data-selector='tagify-suggestions-wrapper']")},getHeaderRef(){return this.DOM.dropdown.querySelector("[data-selector='tagify-suggestions-header']")},getFooterRef(){return this.DOM.dropdown.querySelector("[data-selector='tagify-suggestions-footer']")},getAllSuggestionsRefs(){return[...this.DOM.dropdown.content.querySelectorAll(this.settings.classNames.dropdownItemSelector)]},show(t){var e,i,a,n=this.settings,o="mix"==n.mode&&!n.enforceWhitelist,r=!n.whitelist||!n.whitelist.length,l="manual"==n.dropdown.position;if(t=void 0===t?this.state.inputText:t,!(r&&!o&&!n.templates.dropdownItemNoMatch||!1===n.dropdown.enable||this.state.isLoading||this.settings.readonly)){if(clearTimeout(this.dropdownHide__bindEventsTimeout),this.suggestedListItems=this.dropdown.filterListItems(t),t&&!this.suggestedListItems.length&&(this.trigger("dropdown:noMatch",t),n.templates.dropdownItemNoMatch&&(a=n.templates.dropdownItemNoMatch.call(this,{value:t}))),!a){if(this.suggestedListItems.length)t&&o&&!this.state.editing.scope&&!s(this.suggestedListItems[0].value,t)&&this.suggestedListItems.unshift({value:t});else{if(!t||!o||this.state.editing.scope)return this.input.autocomplete.suggest.call(this),void this.dropdown.hide();this.suggestedListItems=[{value:t}]}i=""+(h(e=this.suggestedListItems[0])?e.value:e),n.autoComplete&&i&&0==i.indexOf(t)&&this.input.autocomplete.suggest.call(this,e)}this.dropdown.fill(a),n.dropdown.highlightFirst&&this.dropdown.highlightOption(this.DOM.dropdown.content.querySelector(n.classNames.dropdownItemSelector)),this.state.dropdown.visible||setTimeout(this.dropdown.events.binding.bind(this)),this.state.dropdown.visible=t||!0,this.state.dropdown.query=t,this.setStateSelection(),l||setTimeout((()=>{this.dropdown.position(),this.dropdown.render()})),setTimeout((()=>{this.trigger("dropdown:show",this.DOM.dropdown)}))}},hide(t){var e=this.DOM,i=e.scope,s=e.dropdown,a="manual"==this.settings.dropdown.position&&!t;if(s&&document.body.contains(s)&&!a)return window.removeEventListener("resize",this.dropdown.position),this.dropdown.events.binding.call(this,!1),i.setAttribute("aria-expanded",!1),s.parentNode.removeChild(s),setTimeout((()=>{this.state.dropdown.visible=!1}),100),this.state.dropdown.query=this.state.ddItemData=this.state.ddItemElm=this.state.selection=null,this.state.tag&&this.state.tag.value.length&&(this.state.flaggedTags[this.state.tag.baseOffset]=this.state.tag),this.trigger("dropdown:hide",s),this},toggle(t){this.dropdown[this.state.dropdown.visible&&!t?"hide":"show"]()},getAppendTarget(){var t=this.settings.dropdown;return"function"==typeof t.appendTarget?t.appendTarget():t.appendTarget},render(){var t,e,i,s=(t=this.DOM.dropdown,(i=t.cloneNode(!0)).style.cssText="position:fixed; top:-9999px; opacity:0",document.body.appendChild(i),e=i.clientHeight,i.parentNode.removeChild(i),e),a=this.settings,n="number"==typeof a.dropdown.enabled&&a.dropdown.enabled>=0,o=this.dropdown.getAppendTarget();return n?(this.DOM.scope.setAttribute("aria-expanded",!0),document.body.contains(this.DOM.dropdown)||(this.DOM.dropdown.classList.add(a.classNames.dropdownInital),this.dropdown.position(s),o.appendChild(this.DOM.dropdown),setTimeout((()=>this.DOM.dropdown.classList.remove(a.classNames.dropdownInital)))),this):this},fill(t){t="string"==typeof t?t:this.dropdown.createListHTML(t||this.suggestedListItems);var e,i=this.settings.templates.dropdownContent.call(this,t);this.DOM.dropdown.content.innerHTML=(e=i)?e.replace(/\>[\r\n ]+\</g,"><").split(/>\s+</).join("><").trim():""},fillHeaderFooter(){var t=this.dropdown.filterListItems(this.state.dropdown.query),e=this.parseTemplate("dropdownHeader",[t]),i=this.parseTemplate("dropdownFooter",[t]),s=this.dropdown.getHeaderRef(),a=this.dropdown.getFooterRef();e&&s?.parentNode.replaceChild(e,s),i&&a?.parentNode.replaceChild(i,a)},position(t){var e=this.settings.dropdown,i=this.dropdown.getAppendTarget();if("manual"!=e.position&&i){var s,a,n,o,r,l,d,h,g,p=this.DOM.dropdown,c=e.RTL,u=i===document.body,m=i===this.DOM.scope,v=u?window.pageYOffset:i.scrollTop,f=document.fullscreenElement||document.webkitFullscreenElement||document.documentElement,T=f.clientHeight,w=Math.max(f.clientWidth||0,window.innerWidth||0)>480?e.position:"all",b=this.DOM["input"==w?"input":"scope"];if(t=t||p.clientHeight,this.state.dropdown.visible){if("text"==w?(n=(s=function(){const t=document.getSelection();if(t.rangeCount){const e=t.getRangeAt(0),i=e.startContainer,s=e.startOffset;let a,n;if(s>0)return n=document.createRange(),n.setStart(i,s-1),n.setEnd(i,s),a=n.getBoundingClientRect(),{left:a.right,top:a.top,bottom:a.bottom};if(i.getBoundingClientRect)return i.getBoundingClientRect()}return{left:-9999,top:-9999}}()).bottom,a=s.top,o=s.left,r="auto"):(l=function(t){var e=0,i=0;for(t=t.parentNode;t&&t!=f;)e+=t.offsetTop||0,i+=t.offsetLeft||0,t=t.parentNode;return{top:e,left:i}}(i),s=b.getBoundingClientRect(),a=m?-1:s.top-l.top,n=(m?s.height:s.bottom-l.top)-1,o=m?-1:s.left-l.left,r=s.width+"px"),!u){let t=function(){for(var t=0,i=e.appendTarget.parentNode;i;)t+=i.scrollTop||0,i=i.parentNode;return t}();a+=t,n+=t}a=Math.floor(a),n=Math.ceil(n),h=((d=e.placeAbove??T-s.bottom<t)?a:n)+v,g=`left: ${o+(c&&s.width||0)+window.pageXOffset}px;`,p.style.cssText=`${g}; top: ${h}px; min-width: ${r}; max-width: ${r}`,p.setAttribute("placement",d?"top":"bottom"),p.setAttribute("position",w)}}}});const N="@yaireo/tagify/";var M,I={empty:"empty",exceed:"number of tags exceeded",pattern:"pattern mismatch",duplicate:"already exists",notAllowed:"not allowed"},E={wrapper:(t,e)=>`<tags class="${e.classNames.namespace} ${e.mode?`${e.classNames[e.mode+"Mode"]}`:""} ${t.className}"\n                    ${e.readonly?"readonly":""}\n                    ${e.disabled?"disabled":""}\n                    ${e.required?"required":""}\n                    ${"select"===e.mode?"spellcheck='false'":""}\n                    tabIndex="-1">\n            <span ${!e.readonly&&e.userInput?"contenteditable":""} tabIndex="0" data-placeholder="${e.placeholder||"&#8203;"}" aria-placeholder="${e.placeholder||""}"\n                class="${e.classNames.input}"\n                role="textbox"\n                aria-autocomplete="both"\n                aria-multiline="${"mix"==e.mode}"></span>\n                &#8203;\n        </tags>`,tag(t,e){let i=e.settings;return`<tag title="${t.title||t.value}"\n                    contenteditable='false'\n                    spellcheck='false'\n                    tabIndex="${i.a11y.focusableTags?0:-1}"\n                    class="${i.classNames.tag} ${t.class||""}"\n                    ${this.getAttributes(t)}>\n            <x title='' class="${i.classNames.tagX}" role='button' aria-label='remove tag'></x>\n            <div>\n                <span class="${i.classNames.tagText}">${t[i.tagTextProp]||t.value}</span>\n            </div>\n        </tag>`},dropdown(t){var e=t.dropdown;return`<div class="${"manual"==e.position?"":t.classNames.dropdown} ${e.classname}" role="listbox" aria-labelledby="dropdown" dir="${e.RTL?"rtl":""}">\n                    <div data-selector='tagify-suggestions-wrapper' class="${t.classNames.dropdownWrapper}"></div>\n                </div>`},dropdownContent(t){var e=this.settings.templates,i=this.state.dropdown.suggestions;return`\n            ${e.dropdownHeader.call(this,i)}\n            ${t}\n            ${e.dropdownFooter.call(this,i)}\n        `},dropdownItem(t){return`<div ${this.getAttributes(t)}\n                    class='${this.settings.classNames.dropdownItem} ${t.class||""}'\n                    tabindex="0"\n                    role="option">${t.mappedValue||t.value}</div>`},dropdownHeader(t){return`<header data-selector='tagify-suggestions-header' class="${this.settings.classNames.dropdownHeader}"></header>`},dropdownFooter(t){var e=t.length-this.settings.dropdown.maxItems;return e>0?`<footer data-selector='tagify-suggestions-footer' class="${this.settings.classNames.dropdownFooter}">\n                ${e} more items. Refine your search.\n            </footer>`:""},dropdownItemNoMatch:null};var S={customBinding(){this.customEventsList.forEach((t=>{this.on(t,this.settings.callbacks[t])}))},binding(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];var e,i=this.settings,s=this.events.callbacks,a=t?"addEventListener":"removeEventListener";if(!this.state.mainEvents||!t){for(var n in this.state.mainEvents=t,t&&!this.listeners.main&&(this.events.bindGlobal.call(this),this.settings.isJQueryPlugin&&jQuery(this.DOM.originalInput).on("tagify.removeAllTags",this.removeAllTags.bind(this))),e=this.listeners.main=this.listeners.main||{focus:["input",s.onFocusBlur.bind(this)],keydown:["input",s.onKeydown.bind(this)],click:["scope",s.onClickScope.bind(this)],dblclick:"select"!=i.mode&&["scope",s.onDoubleClickScope.bind(this)],paste:["input",s.onPaste.bind(this)],drop:["input",s.onDrop.bind(this)],compositionstart:["input",s.onCompositionStart.bind(this)],compositionend:["input",s.onCompositionEnd.bind(this)]})e[n]&&this.DOM[e[n][0]][a](n,e[n][1]);clearInterval(this.listeners.main.originalInputValueObserverInterval),this.listeners.main.originalInputValueObserverInterval=setInterval(s.observeOriginalInputValue.bind(this),500);var o=this.listeners.main.inputMutationObserver||new MutationObserver(s.onInputDOMChange.bind(this));o.disconnect(),"mix"==i.mode&&o.observe(this.DOM.input,{childList:!0})}},bindGlobal(t){var e,i=this.events.callbacks,s=t?"removeEventListener":"addEventListener";if(this.listeners&&(t||!this.listeners.global))for(e of(this.listeners.global=this.listeners.global||[{type:this.isIE?"keydown":"input",target:this.DOM.input,cb:i[this.isIE?"onInputIE":"onInput"].bind(this)},{type:"keydown",target:window,cb:i.onWindowKeyDown.bind(this)},{type:"blur",target:this.DOM.input,cb:i.onFocusBlur.bind(this)},{type:"click",target:document,cb:i.onClickAnywhere.bind(this),useCapture:!0}],this.listeners.global))e.target[s](e.type,e.cb,!!e.useCapture)},unbindGlobal(){this.events.bindGlobal.call(this,!0)},callbacks:{onFocusBlur(t){var e=this.settings,i=t.target?this.trim(t.target.textContent):"",s=this.value?.[0]?.[e.tagTextProp],a=t.type,n=e.dropdown.enabled>=0,o={relatedTarget:t.relatedTarget},r=this.state.actions.selectOption&&(n||!e.dropdown.closeOnSelect),l=this.state.actions.addNew&&n;if("blur"==a){if(t.relatedTarget===this.DOM.scope)return this.dropdown.hide(),void this.DOM.input.focus();this.postUpdate(),e.onChangeAfterBlur&&this.triggerChangeEvent()}if(!r&&!l)if(this.state.hasFocus="focus"==a&&+new Date,this.toggleFocusClass(this.state.hasFocus),"mix"!=e.mode){if("focus"==a)return this.trigger("focus",o),void(0!==e.dropdown.enabled&&e.userInput||this.state.dropdown.visible||this.dropdown.show(this.value.length?"":void 0));"blur"==a&&(this.trigger("blur",o),this.loading(!1),"select"==e.mode&&s===i&&(i=""),i&&!this.state.actions.selectOption&&e.addTagOnBlur&&e.addTagOn.includes("blur")&&this.addTags(i,!0)),this.DOM.input.removeAttribute("style"),this.dropdown.hide()}else"focus"==a?this.trigger("focus",o):"blur"==t.type&&(this.trigger("blur",o),this.loading(!1),this.dropdown.hide(),this.state.dropdown.visible=void 0,this.setStateSelection())},onCompositionStart(t){this.state.composing=!0},onCompositionEnd(t){this.state.composing=!1},onWindowKeyDown(t){var e,i=document.activeElement,s=v.call(this,i)&&this.DOM.scope.contains(document.activeElement),a=s&&i.hasAttribute("readonly");if(s&&!a)switch(e=i.nextElementSibling,t.key){case"Backspace":this.settings.readonly||(this.removeTags(i),(e||this.DOM.input).focus());break;case"Enter":setTimeout(this.editTag.bind(this),0,i)}},onKeydown(t){var e=this.settings;if(!this.state.composing&&e.userInput){"select"==e.mode&&e.enforceWhitelist&&this.value.length&&"Tab"!=t.key&&t.preventDefault();var i=this.trim(t.target.textContent);this.trigger("keydown",{event:t}),e.hooks.beforeKeyDown(t,{tagify:this}).then((s=>{if("mix"==e.mode){switch(t.key){case"Left":case"ArrowLeft":this.state.actions.ArrowLeft=!0;break;case"Delete":case"Backspace":if(this.state.editing)return;var a=document.getSelection(),n="Delete"==t.key&&a.anchorOffset==(a.anchorNode.length||0),r=a.anchorNode.previousSibling,d=1==a.anchorNode.nodeType||!a.anchorOffset&&r&&1==r.nodeType&&a.anchorNode.previousSibling;o(this.DOM.input.innerHTML);var h,g,p,c=this.getTagElms(),m=1===a.anchorNode.length&&a.anchorNode.nodeValue==String.fromCharCode(8203);if("edit"==e.backspace&&d)return h=1==a.anchorNode.nodeType?null:a.anchorNode.previousElementSibling,setTimeout(this.editTag.bind(this),0,h),void t.preventDefault();if(u()&&d instanceof Element)return p=l(d),d.hasAttribute("readonly")||d.remove(),this.DOM.input.focus(),void setTimeout((()=>{w(p),this.DOM.input.click()}));if("BR"==a.anchorNode.nodeName)return;if((n||d)&&1==a.anchorNode.nodeType?g=0==a.anchorOffset?n?c[0]:null:c[Math.min(c.length,a.anchorOffset)-1]:n?g=a.anchorNode.nextElementSibling:d instanceof Element&&(g=d),3==a.anchorNode.nodeType&&!a.anchorNode.nodeValue&&a.anchorNode.previousElementSibling&&t.preventDefault(),(d||n)&&!e.backspace)return void t.preventDefault();if("Range"!=a.type&&!a.anchorOffset&&a.anchorNode==this.DOM.input&&"Delete"!=t.key)return void t.preventDefault();if("Range"!=a.type&&g&&g.hasAttribute("readonly"))return void w(l(g));"Delete"==t.key&&m&&T(a.anchorNode.nextSibling)&&this.removeTags(a.anchorNode.nextSibling),clearTimeout(M),M=setTimeout((()=>{var t=document.getSelection();o(this.DOM.input.innerHTML),!n&&t.anchorNode.previousSibling,this.value=[].map.call(c,((t,e)=>{var i=T(t);if(t.parentNode||i.readonly)return i;this.trigger("remove",{tag:t,index:e,data:i})})).filter((t=>t))}),20)}return!0}var v="manual"==e.dropdown.position;switch(t.key){case"Backspace":"select"==e.mode&&e.enforceWhitelist&&this.value.length?this.removeTags():this.state.dropdown.visible&&"manual"!=e.dropdown.position||""!=t.target.textContent&&8203!=i.charCodeAt(0)||(!0===e.backspace?this.removeTags():"edit"==e.backspace&&setTimeout(this.editTag.bind(this),0));break;case"Esc":case"Escape":if(this.state.dropdown.visible)return;t.target.blur();break;case"Down":case"ArrowDown":this.state.dropdown.visible||this.dropdown.show();break;case"ArrowRight":{let t=this.state.inputSuggestion||this.state.ddItemData;if(t&&e.autoComplete.rightKey)return void this.addTags([t],!0);break}case"Tab":{let s="select"==e.mode;if(!i||s)return!0;t.preventDefault()}case"Enter":if(this.state.dropdown.visible&&!v)return;t.preventDefault(),setTimeout((()=>{this.state.dropdown.visible&&!v||this.state.actions.selectOption||!e.addTagOn.includes(t.key.toLowerCase())||this.addTags(i,!0)}))}})).catch((t=>t))}},onInput(t){this.postUpdate();var e=this.settings;if("mix"==e.mode)return this.events.callbacks.onMixTagsInput.call(this,t);var i=this.input.normalize.call(this,void 0,{trim:!1}),s=i.length>=e.dropdown.enabled,a={value:i,inputElm:this.DOM.input},n=this.validateTag({value:i});"select"==e.mode&&this.toggleScopeValidation(n),a.isValid=n,this.state.inputText!=i&&(this.input.set.call(this,i,!1),-1!=i.search(e.delimiters)?this.addTags(i)&&this.input.set.call(this):e.dropdown.enabled>=0&&this.dropdown[s?"show":"hide"](i),this.trigger("input",a))},onMixTagsInput(t){var e,i,s,a,n,o,r,l,d=this.settings,h=this.value.length,p=this.getTagElms(),c=document.createDocumentFragment(),m=window.getSelection().getRangeAt(0),v=[].map.call(p,(t=>T(t).value));if("deleteContentBackward"==t.inputType&&u()&&this.events.callbacks.onKeydown.call(this,{target:t.target,key:"Backspace"}),b(this.getTagElms()),this.value.slice().forEach((t=>{t.readonly&&!v.includes(t.value)&&c.appendChild(this.createTagElem(t))})),c.childNodes.length&&(m.insertNode(c),this.setRangeAtStartEnd(!1,c.lastChild)),p.length!=h)return this.value=[].map.call(this.getTagElms(),(t=>T(t))),void this.update({withoutChangeEvent:!0});if(this.hasMaxTags())return!0;if(window.getSelection&&(o=window.getSelection()).rangeCount>0&&3==o.anchorNode.nodeType){if((m=o.getRangeAt(0).cloneRange()).collapse(!0),m.setStart(o.focusNode,0),s=(e=m.toString().slice(0,m.endOffset)).split(d.pattern).length-1,(i=e.match(d.pattern))&&(a=e.slice(e.lastIndexOf(i[i.length-1]))),a){if(this.state.actions.ArrowLeft=!1,this.state.tag={prefix:a.match(d.pattern)[0],value:a.replace(d.pattern,"")},this.state.tag.baseOffset=o.baseOffset-this.state.tag.value.length,l=this.state.tag.value.match(d.delimiters))return this.state.tag.value=this.state.tag.value.replace(d.delimiters,""),this.state.tag.delimiters=l[0],this.addTags(this.state.tag.value,d.dropdown.clearOnSelect),void this.dropdown.hide();n=this.state.tag.value.length>=d.dropdown.enabled;try{r=(r=this.state.flaggedTags[this.state.tag.baseOffset]).prefix==this.state.tag.prefix&&r.value[0]==this.state.tag.value[0],this.state.flaggedTags[this.state.tag.baseOffset]&&!this.state.tag.value&&delete this.state.flaggedTags[this.state.tag.baseOffset]}catch(t){}(r||s<this.state.mixMode.matchedPatternCount)&&(n=!1)}else this.state.flaggedTags={};this.state.mixMode.matchedPatternCount=s}setTimeout((()=>{this.update({withoutChangeEvent:!0}),this.trigger("input",g({},this.state.tag,{textContent:this.DOM.input.textContent})),this.state.tag&&this.dropdown[n?"show":"hide"](this.state.tag.value)}),10)},onInputIE(t){var e=this;setTimeout((function(){e.events.callbacks.onInput.call(e,t)}))},observeOriginalInputValue(){this.DOM.originalInput.parentNode||this.destroy(),this.DOM.originalInput.value!=this.DOM.originalInput.tagifyValue&&this.loadOriginalValues()},onClickAnywhere(t){t.target==this.DOM.scope||this.DOM.scope.contains(t.target)||(this.toggleFocusClass(!1),this.state.hasFocus=!1,!this.settings.userInput&&this.dropdown.hide())},onClickScope(t){var i=this.settings,s=t.target.closest("."+i.classNames.tag),a=t.target===this.DOM.scope,n=+new Date-this.state.hasFocus;if(a&&"select"!=i.mode)this.DOM.input.focus();else{if(!t.target.classList.contains(i.classNames.tagX))return s&&!this.state.editing?(this.trigger("click",{tag:s,index:this.getNodeIndex(s),data:T(s),event:t}),void(1!==i.editTags&&1!==i.editTags.clicks&&"select"!=i.mode||this.events.callbacks.onDoubleClickScope.call(this,t))):void(t.target==this.DOM.input&&("mix"==i.mode&&this.fixFirefoxLastTagNoCaret(),n>500)?this.state.dropdown.visible?this.dropdown.hide():0===i.dropdown.enabled&&"mix"!=i.mode&&this.dropdown.show(this.value.length?"":void 0):"select"!=i.mode||0!==i.dropdown.enabled||this.state.dropdown.visible||(this.events.callbacks.onDoubleClickScope.call(this,e(e({},t),{},{target:this.getTagElms()[0]})),!i.userInput&&this.dropdown.show()));this.removeTags(t.target.parentNode)}},onPaste(t){t.preventDefault();var e,i,s,a=this.settings;if("select"==a.mode&&a.enforceWhitelist||!a.userInput)return!1;a.readonly||(i=t.clipboardData||window.clipboardData,s=i.getData("Text"),a.hooks.beforePaste(t,{tagify:this,pastedText:s,clipboardData:i}).then((a=>{void 0===a&&(a=s),a&&(this.injectAtCaret(a,window.getSelection().getRangeAt(0)),"mix"==this.settings.mode?this.events.callbacks.onMixTagsInput.call(this,t):this.settings.pasteAsTags?e=this.addTags(this.state.inputText+a,!0):(this.state.inputText=a,this.dropdown.show(a))),this.trigger("paste",{event:t,pastedText:s,clipboardData:i,tagsElems:e})})).catch((t=>t)))},onDrop(t){t.preventDefault()},onEditTagInput(t,e){var i=t.closest("."+this.settings.classNames.tag),s=this.getNodeIndex(i),a=T(i),n=this.input.normalize.call(this,t),o={[this.settings.tagTextProp]:n,__tagId:a.__tagId},r=this.validateTag(o);this.editTagChangeDetected(g(a,o))||!0!==t.originalIsValid||(r=!0),i.classList.toggle(this.settings.classNames.tagInvalid,!0!==r),a.__isValid=r,i.title=!0===r?a.title||a.value:r,n.length>=this.settings.dropdown.enabled&&(this.state.editing&&(this.state.editing.value=n),this.dropdown.show(n)),this.trigger("edit:input",{tag:i,index:s,data:g({},this.value[s],{newValue:n}),event:e})},onEditTagPaste(t,e){var i=(e.clipboardData||window.clipboardData).getData("Text");e.preventDefault();var s=f(i);this.setRangeAtStartEnd(!1,s)},onEditTagClick(t,e){this.events.callbacks.onClickScope.call(this,e)},onEditTagFocus(t){this.state.editing={scope:t,input:t.querySelector("[contenteditable]")}},onEditTagBlur(t,e){if(v.call(this,e.relatedTarget)&&e.relatedTarget.contains(e.target))this.dropdown.hide();else if(this.state.editing&&(this.state.hasFocus||this.toggleFocusClass(),this.DOM.scope.contains(t))){var i,s,a=this.settings,n=t.closest("."+a.classNames.tag),o=T(n),r=this.input.normalize.call(this,t),l={[a.tagTextProp]:r,__tagId:o.__tagId},d=o.__originalData,h=this.editTagChangeDetected(g(o,l)),p=this.validateTag(l);if(r)if(h){if(i=this.hasMaxTags(),s=g({},d,{[a.tagTextProp]:this.trim(r),__isValid:p}),a.transformTag.call(this,s,d),!0!==(p=(!i||!0===d.__isValid)&&this.validateTag(s))){if(this.trigger("invalid",{data:s,tag:n,message:p}),a.editTags.keepInvalid)return;a.keepInvalidTags?s.__isValid=p:s=d}else a.keepInvalidTags&&(delete s.title,delete s["aria-invalid"],delete s.class);this.onEditTagDone(n,s)}else this.onEditTagDone(n,d);else this.onEditTagDone(n)}},onEditTagkeydown(t,e){if(!this.state.composing)switch(this.trigger("edit:keydown",{event:t}),t.key){case"Esc":case"Escape":this.state.editing=!1,!!e.__tagifyTagData.__originalData.value?e.parentNode.replaceChild(e.__tagifyTagData.__originalHTML,e):e.remove();break;case"Enter":case"Tab":t.preventDefault();setTimeout((()=>t.target.blur()),0)}},onDoubleClickScope(t){var e,i,s=t.target.closest("."+this.settings.classNames.tag),a=T(s),n=this.settings;s&&!1!==a.editable&&(e=s.classList.contains(this.settings.classNames.tagEditing),i=s.hasAttribute("readonly"),n.readonly||e||i||!this.settings.editTags||!n.userInput||this.editTag(s),this.toggleFocusClass(!0),"select"!=n.mode&&this.trigger("dblclick",{tag:s,index:this.getNodeIndex(s),data:T(s)}))},onInputDOMChange(t){t.forEach((t=>{t.addedNodes.forEach((t=>{if("<div><br></div>"==t.outerHTML)t.replaceWith(document.createElement("br"));else if(1==t.nodeType&&t.querySelector(this.settings.classNames.tagSelector)){let e=document.createTextNode("");3==t.childNodes[0].nodeType&&"BR"!=t.previousSibling.nodeName&&(e=document.createTextNode("\n")),t.replaceWith(e,...[...t.childNodes].slice(0,-1)),w(e)}else if(v.call(this,t))if(3!=t.previousSibling?.nodeType||t.previousSibling.textContent||t.previousSibling.remove(),t.previousSibling&&"BR"==t.previousSibling.nodeName){t.previousSibling.replaceWith("\n​");let e=t.nextSibling,i="";for(;e;)i+=e.textContent,e=e.nextSibling;i.trim()&&w(t.previousSibling)}else t.previousSibling&&!T(t.previousSibling)||t.before("​")})),t.removedNodes.forEach((t=>{t&&"BR"==t.nodeName&&v.call(this,e)&&(this.removeTags(e),this.fixFirefoxLastTagNoCaret())}))}));var e=this.DOM.input.lastChild;e&&""==e.nodeValue&&e.remove(),e&&"BR"==e.nodeName||this.DOM.input.appendChild(document.createElement("br"))}}};function _(t,e){if(!t){console.warn("Tagify:","input element not found",t);const e=new Proxy(this,{get:()=>()=>e});return e}if(t.__tagify)return console.warn("Tagify: ","input element is already Tagified - Same instance is returned.",t),t.__tagify;var i;g(this,function(t){var e=document.createTextNode("");function i(t,i,s){s&&i.split(/\s+/g).forEach((i=>e[t+"EventListener"].call(e,i,s)))}return{off(t,e){return i("remove",t,e),this},on(t,e){return e&&"function"==typeof e&&i("add",t,e),this},trigger(i,s,a){var n;if(a=a||{cloneData:!0},i)if(t.settings.isJQueryPlugin)"remove"==i&&(i="removeTag"),jQuery(t.DOM.originalInput).triggerHandler(i,[s]);else{try{var o="object"==typeof s?s:{value:s};if((o=a.cloneData?g({},o):o).tagify=this,s.event&&(o.event=this.cloneEvent(s.event)),s instanceof Object)for(var r in s)s[r]instanceof HTMLElement&&(o[r]=s[r]);n=new CustomEvent(i,{detail:o})}catch(t){console.warn(t)}e.dispatchEvent(n)}}}}(this)),this.isFirefox=/firefox|fxios/i.test(navigator.userAgent)&&!/seamonkey/i.test(navigator.userAgent),this.isIE=window.document.documentMode,e=e||{},this.getPersistedData=(i=e.id,t=>{let e,s="/"+t;if(1==localStorage.getItem(N+i+"/v",1))try{e=JSON.parse(localStorage[N+i+s])}catch(t){}return e}),this.setPersistedData=(t=>t?(localStorage.setItem(N+t+"/v",1),(e,i)=>{let s="/"+i,a=JSON.stringify(e);e&&i&&(localStorage.setItem(N+t+s,a),dispatchEvent(new Event("storage")))}):()=>{})(e.id),this.clearPersistedData=(t=>e=>{const i=N+"/"+t+"/";if(e)localStorage.removeItem(i+e);else for(let t in localStorage)t.includes(i)&&localStorage.removeItem(t)})(e.id),this.applySettings(t,e),this.state={inputText:"",editing:!1,composing:!1,actions:{},mixMode:{},dropdown:{},flaggedTags:{}},this.value=[],this.listeners={},this.DOM={},this.build(t),O.call(this),this.getCSSVars(),this.loadOriginalValues(),this.events.customBinding.call(this),this.events.binding.call(this),t.autofocus&&this.DOM.input.focus(),t.__tagify=this}return _.prototype={_dropdown:D,placeCaretAfterNode:w,getSetTagData:T,helpers:{sameStr:s,removeCollectionProp:a,omit:n,isObject:h,parseHTML:r,escapeHTML:d,extend:g,concatWithoutDups:p,getUID:m,isNodeTag:v},customEventsList:["change","add","remove","invalid","input","paste","click","keydown","focus","blur","edit:input","edit:beforeUpdate","edit:updated","edit:start","edit:keydown","dropdown:show","dropdown:hide","dropdown:select","dropdown:updated","dropdown:noMatch","dropdown:scroll"],dataProps:["__isValid","__removed","__originalData","__originalHTML","__tagId"],trim(t){return this.settings.trim&&t&&"string"==typeof t?t.trim():t},parseHTML:r,templates:E,parseTemplate(t,e){return r((t=this.settings.templates[t]||t).apply(this,e))},set whitelist(t){const e=t&&Array.isArray(t);this.settings.whitelist=e?t:[],this.setPersistedData(e?t:[],"whitelist")},get whitelist(){return this.settings.whitelist},generateClassSelectors(t){for(let e in t){let i=e;Object.defineProperty(t,i+"Selector",{get(){return"."+this[i].split(" ")[0]}})}},applySettings(t,i){y.templates=this.templates;var s=g({},y,"mix"==i.mode?{dropdown:{position:"text"}}:{}),a=this.settings=g({},s,i);if(a.disabled=t.hasAttribute("disabled"),a.readonly=a.readonly||t.hasAttribute("readonly"),a.placeholder=d(t.getAttribute("placeholder")||a.placeholder||""),a.required=t.hasAttribute("required"),this.generateClassSelectors(a.classNames),void 0===a.dropdown.includeSelectedTags&&(a.dropdown.includeSelectedTags=a.duplicates),this.isIE&&(a.autoComplete=!1),["whitelist","blacklist"].forEach((e=>{var i=t.getAttribute("data-"+e);i&&(i=i.split(a.delimiters))instanceof Array&&(a[e]=i)})),"autoComplete"in i&&!h(i.autoComplete)&&(a.autoComplete=y.autoComplete,a.autoComplete.enabled=i.autoComplete),"mix"==a.mode&&(a.pattern=a.pattern||/@/,a.autoComplete.rightKey=!0,a.delimiters=i.delimiters||null,a.tagTextProp&&!a.dropdown.searchKeys.includes(a.tagTextProp)&&a.dropdown.searchKeys.push(a.tagTextProp)),t.pattern)try{a.pattern=new RegExp(t.pattern)}catch(t){}if(a.delimiters){a._delimiters=a.delimiters;try{a.delimiters=new RegExp(this.settings.delimiters,"g")}catch(t){}}a.disabled&&(a.userInput=!1),this.TEXTS=e(e({},I),a.texts||{}),("select"!=a.mode||i.dropdown?.enabled)&&a.userInput||(a.dropdown.enabled=0),a.dropdown.appendTarget=i.dropdown?.appendTarget||document.body;let n=this.getPersistedData("whitelist");Array.isArray(n)&&(this.whitelist=Array.isArray(a.whitelist)?p(a.whitelist,n):n)},getAttributes(t){var e,i=this.getCustomAttributes(t),s="";for(e in i)s+=" "+e+(void 0!==t[e]?`="${i[e]}"`:"");return s},getCustomAttributes(t){if(!h(t))return"";var e,i={};for(e in t)"__"!=e.slice(0,2)&&"class"!=e&&t.hasOwnProperty(e)&&void 0!==t[e]&&(i[e]=d(t[e]));return i},setStateSelection(){var t=window.getSelection(),e={anchorOffset:t.anchorOffset,anchorNode:t.anchorNode,range:t.getRangeAt&&t.rangeCount&&t.getRangeAt(0)};return this.state.selection=e,e},getCSSVars(){var t=getComputedStyle(this.DOM.scope,null);var e;this.CSSVars={tagHideTransition:(t=>{let e=t.value;return"s"==t.unit?1e3*e:e})(function(t){if(!t)return{};var e=(t=t.trim().split(" ")[0]).split(/\d+/g).filter((t=>t)).pop().trim();return{value:+t.split(e).filter((t=>t))[0].trim(),unit:e}}((e="tag-hide-transition",t.getPropertyValue("--"+e))))}},build(t){var e=this.DOM,i=t.closest("label");this.settings.mixMode.integrated?(e.originalInput=null,e.scope=t,e.input=t):(e.originalInput=t,e.originalInput_tabIndex=t.tabIndex,e.scope=this.parseTemplate("wrapper",[t,this.settings]),e.input=e.scope.querySelector(this.settings.classNames.inputSelector),t.parentNode.insertBefore(e.scope,t),t.tabIndex=-1),i&&i.setAttribute("for","")},destroy(){this.events.unbindGlobal.call(this),this.DOM.scope.parentNode.removeChild(this.DOM.scope),this.DOM.originalInput.tabIndex=this.DOM.originalInput_tabIndex,delete this.DOM.originalInput.__tagify,this.dropdown.hide(!0),clearTimeout(this.dropdownHide__bindEventsTimeout),clearInterval(this.listeners.main.originalInputValueObserverInterval)},loadOriginalValues(t){var e,i=this.settings;if(this.state.blockChangeEvent=!0,void 0===t){const e=this.getPersistedData("value");t=e&&!this.DOM.originalInput.value?e:i.mixMode.integrated?this.DOM.input.textContent:this.DOM.originalInput.value}if(this.removeAllTags(),t)if("mix"==i.mode)this.parseMixTags(t),(e=this.DOM.input.lastChild)&&"BR"==e.tagName||this.DOM.input.insertAdjacentHTML("beforeend","<br>");else{try{JSON.parse(t)instanceof Array&&(t=JSON.parse(t))}catch(t){}this.addTags(t,!0).forEach((t=>t&&t.classList.add(i.classNames.tagNoAnimation)))}else this.postUpdate();this.state.lastOriginalValueReported=i.mixMode.integrated?"":this.DOM.originalInput.value},cloneEvent(t){var e={};for(var i in t)"path"!=i&&(e[i]=t[i]);return e},loading(t){return this.state.isLoading=t,this.DOM.scope.classList[t?"add":"remove"](this.settings.classNames.scopeLoading),this},tagLoading(t,e){return t&&t.classList[e?"add":"remove"](this.settings.classNames.tagLoading),this},toggleClass(t,e){"string"==typeof t&&this.DOM.scope.classList.toggle(t,e)},toggleScopeValidation(t){var e=!0===t||void 0===t;!this.settings.required&&t&&t===this.TEXTS.empty&&(e=!0),this.toggleClass(this.settings.classNames.tagInvalid,!e),this.DOM.scope.title=e?"":t},toggleFocusClass(t){this.toggleClass(this.settings.classNames.focus,!!t)},triggerChangeEvent:function(){if(!this.settings.mixMode.integrated){var t=this.DOM.originalInput,e=this.state.lastOriginalValueReported!==t.value,i=new CustomEvent("change",{bubbles:!0});e&&(this.state.lastOriginalValueReported=t.value,i.simulated=!0,t._valueTracker&&t._valueTracker.setValue(Math.random()),t.dispatchEvent(i),this.trigger("change",this.state.lastOriginalValueReported),t.value=this.state.lastOriginalValueReported)}},events:S,fixFirefoxLastTagNoCaret(){},setRangeAtStartEnd(t,e){if(e){t="number"==typeof t?t:!!t,e=e.lastChild||e;var i=document.getSelection();if(i.focusNode instanceof Element&&!this.DOM.input.contains(i.focusNode))return!0;try{i.rangeCount>=1&&["Start","End"].forEach((s=>i.getRangeAt(0)["set"+s](e,t||e.length)))}catch(t){console.warn("Tagify: ",t)}}},insertAfterTag(t,e){if(e=e||this.settings.mixMode.insertAfterTag,t&&t.parentNode&&e)return e="string"==typeof e?document.createTextNode(e):e,t.parentNode.insertBefore(e,t.nextSibling),e},editTagChangeDetected(t){var e=t.__originalData;for(var i in e)if(!this.dataProps.includes(i)&&t[i]!=e[i])return!0;return!1},getTagTextNode(t){return t.querySelector(this.settings.classNames.tagTextSelector)},setTagTextNode(t,e){this.getTagTextNode(t).innerHTML=d(e)},editTag(t,e){t=t||this.getLastTag(),e=e||{},this.dropdown.hide();var i=this.settings,s=this.getTagTextNode(t),a=this.getNodeIndex(t),n=T(t),o=this.events.callbacks,r=!0;if(s){if(!(n instanceof Object&&"editable"in n)||n.editable)return n=T(t,{__originalData:g({},n),__originalHTML:t.cloneNode(!0)}),T(n.__originalHTML,n.__originalData),s.setAttribute("contenteditable",!0),t.classList.add(i.classNames.tagEditing),s.addEventListener("click",o.onEditTagClick.bind(this,t)),s.addEventListener("focus",o.onEditTagFocus.bind(this,t)),s.addEventListener("blur",o.onEditTagBlur.bind(this,this.getTagTextNode(t))),s.addEventListener("input",o.onEditTagInput.bind(this,s)),s.addEventListener("paste",o.onEditTagPaste.bind(this,s)),s.addEventListener("keydown",(e=>o.onEditTagkeydown.call(this,e,t))),s.addEventListener("compositionstart",o.onCompositionStart.bind(this)),s.addEventListener("compositionend",o.onCompositionEnd.bind(this)),e.skipValidation||(r=this.editTagToggleValidity(t)),s.originalIsValid=r,this.trigger("edit:start",{tag:t,index:a,data:n,isValid:r}),s.focus(),this.setRangeAtStartEnd(!1,s),0===i.dropdown.enabled&&this.dropdown.show(),this.state.hasFocus=!0,this}else console.warn("Cannot find element in Tag template: .",i.classNames.tagTextSelector)},editTagToggleValidity(t,e){var i;if(e=e||T(t))return(i=!("__isValid"in e)||!0===e.__isValid)||this.removeTagsFromValue(t),this.update(),t.classList.toggle(this.settings.classNames.tagNotAllowed,!i),e.__isValid=i,e.__isValid;console.warn("tag has no data: ",t,e)},onEditTagDone(t,e){t=t||this.state.editing.scope,e=e||{};var i,s={tag:t,index:this.getNodeIndex(t),previousData:T(t),data:e},a=this.settings;this.trigger("edit:beforeUpdate",s,{cloneData:!1}),this.state.editing=!1,delete e.__originalData,delete e.__originalHTML,t&&((i=e[a.tagTextProp])?i.trim?.():a.tagTextProp in e?void 0:e.value)?(t=this.replaceTag(t,e),this.editTagToggleValidity(t,e),a.a11y.focusableTags?t.focus():w(t)):t&&this.removeTags(t),this.trigger("edit:updated",s),this.dropdown.hide(),this.settings.keepInvalidTags&&this.reCheckInvalidTags()},replaceTag(t,e){e&&""!==e.value&&void 0!==e.value||(e=t.__tagifyTagData),e.__isValid&&1!=e.__isValid&&g(e,this.getInvalidTagAttrs(e,e.__isValid));var i=this.createTagElem(e);return t.parentNode.replaceChild(i,t),this.updateValueByDOMTags(),i},updateValueByDOMTags(){this.value.length=0,[].forEach.call(this.getTagElms(),(t=>{t.classList.contains(this.settings.classNames.tagNotAllowed.split(" ")[0])||this.value.push(T(t))})),this.update()},injectAtCaret(t,e){if(!(e=e||this.state.selection?.range)&&t)return this.appendMixTags(t),this;let i=f(t,e);return this.setRangeAtStartEnd(!1,i),this.updateValueByDOMTags(),this.update(),this},input:{set(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];var i=this.settings.dropdown.closeOnSelect;this.state.inputText=t,e&&(this.DOM.input.innerHTML=d(""+t)),!t&&i&&this.dropdown.hide.bind(this),this.input.autocomplete.suggest.call(this),this.input.validate.call(this)},raw(){return this.DOM.input.textContent},validate(){var t=!this.state.inputText||!0===this.validateTag({value:this.state.inputText});return this.DOM.input.classList.toggle(this.settings.classNames.inputInvalid,!t),t},normalize(t,e){var i=t||this.DOM.input,s=[];i.childNodes.forEach((t=>3==t.nodeType&&s.push(t.nodeValue))),s=s.join("\n");try{s=s.replace(/(?:\r\n|\r|\n)/g,this.settings.delimiters.source.charAt(0))}catch(t){}return s=s.replace(/\s/g," "),e?.trim?this.trim(s):s},autocomplete:{suggest(t){if(this.settings.autoComplete.enabled){"object"!=typeof(t=t||{value:""})&&(t={value:t});var e=this.dropdown.getMappedValue(t);if("number"!=typeof e){var i=this.state.inputText.toLowerCase(),s=e.substr(0,this.state.inputText.length).toLowerCase(),a=e.substring(this.state.inputText.length);e&&this.state.inputText&&s==i?(this.DOM.input.setAttribute("data-suggest",a),this.state.inputSuggestion=t):(this.DOM.input.removeAttribute("data-suggest"),delete this.state.inputSuggestion)}}},set(t){var e=this.DOM.input.getAttribute("data-suggest"),i=t||(e?this.state.inputText+e:null);return!!i&&("mix"==this.settings.mode?this.replaceTextWithNode(document.createTextNode(this.state.tag.prefix+i)):(this.input.set.call(this,i),this.setRangeAtStartEnd(!1,this.DOM.input)),this.input.autocomplete.suggest.call(this),this.dropdown.hide(),!0)}}},getTagIdx(t){return this.value.findIndex((e=>e.__tagId==(t||{}).__tagId))},getNodeIndex(t){var e=0;if(t)for(;t=t.previousElementSibling;)e++;return e},getTagElms(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];var s="."+[...this.settings.classNames.tag.split(" "),...e].join(".");return[].slice.call(this.DOM.scope.querySelectorAll(s))},getLastTag(){var t=this.DOM.scope.querySelectorAll(`${this.settings.classNames.tagSelector}:not(.${this.settings.classNames.tagHide}):not([readonly])`);return t[t.length-1]},isTagDuplicate(t,e,i){var a=0;if("select"==this.settings.mode)return!1;for(let n of this.value){s(this.trim(""+t),n.value,e)&&i!=n.__tagId&&a++}return a},getTagIndexByValue(t){var e=[],i=this.settings.dropdown.caseSensitive;return this.getTagElms().forEach(((a,n)=>{a.__tagifyTagData&&s(this.trim(a.__tagifyTagData.value),t,i)&&e.push(n)})),e},getTagElmByValue(t){var e=this.getTagIndexByValue(t)[0];return this.getTagElms()[e]},flashTag(t){t&&(t.classList.add(this.settings.classNames.tagFlash),setTimeout((()=>{t.classList.remove(this.settings.classNames.tagFlash)}),100))},isTagBlacklisted(t){return t=this.trim(t.toLowerCase()),this.settings.blacklist.filter((e=>(""+e).toLowerCase()==t)).length},isTagWhitelisted(t){return!!this.getWhitelistItem(t)},getWhitelistItem(t,e,i){e=e||"value";var a,n=this.settings;return(i=i||n.whitelist).some((i=>{var o="string"==typeof i?i:i[e]||i.value;if(s(o,t,n.dropdown.caseSensitive,n.trim))return a="string"==typeof i?{value:i}:i,!0})),a||"value"!=e||"value"==n.tagTextProp||(a=this.getWhitelistItem(t,n.tagTextProp,i)),a},validateTag(t){var e=this.settings,i="value"in t?"value":e.tagTextProp,s=this.trim(t[i]+"");return(t[i]+"").trim()?"mix"!=e.mode&&e.pattern&&e.pattern instanceof RegExp&&!e.pattern.test(s)?this.TEXTS.pattern:!e.duplicates&&this.isTagDuplicate(s,e.dropdown.caseSensitive,t.__tagId)?this.TEXTS.duplicate:this.isTagBlacklisted(s)||e.enforceWhitelist&&!this.isTagWhitelisted(s)?this.TEXTS.notAllowed:!e.validate||e.validate(t):this.TEXTS.empty},getInvalidTagAttrs(t,e){return{"aria-invalid":!0,class:`${t.class||""} ${this.settings.classNames.tagNotAllowed}`.trim(),title:e}},hasMaxTags(){return this.value.length>=this.settings.maxTags&&this.TEXTS.exceed},setReadonly(t,e){var i=this.settings;document.activeElement.blur(),i[e||"readonly"]=t,this.DOM.scope[(t?"set":"remove")+"Attribute"](e||"readonly",!0),this.settings.userInput=!0,this.setContentEditable(!t)},setContentEditable(t){this.settings.userInput&&(this.DOM.input.contentEditable=t,this.DOM.input.tabIndex=t?0:-1)},setDisabled(t){this.setReadonly(t,"disabled")},normalizeTags(t){var e=this.settings,i=e.whitelist,s=e.delimiters,a=e.mode,n=e.tagTextProp,o=[],r=!!i&&i[0]instanceof Object,l=Array.isArray(t),d=l&&t[0].value,h=t=>(t+"").split(s).filter((t=>t)).map((t=>({[n]:this.trim(t),value:this.trim(t)})));if("number"==typeof t&&(t=t.toString()),"string"==typeof t){if(!t.trim())return[];t=h(t)}else l&&(t=[].concat(...t.map((t=>null!=t.value?t:h(t)))));return r&&!d&&(t.forEach((t=>{var e=o.map((t=>t.value)),i=this.dropdown.filterListItems.call(this,t[n],{exact:!0});this.settings.duplicates||(i=i.filter((t=>!e.includes(t.value))));var s=i.length>1?this.getWhitelistItem(t[n],n,i):i[0];s&&s instanceof Object?o.push(s):"mix"!=a&&(null==t.value&&(t.value=t[n]),o.push(t))})),o.length&&(t=o)),t},parseMixTags(t){var e=this.settings,i=e.mixTagsInterpolator,s=e.duplicates,a=e.transformTag,n=e.enforceWhitelist,o=e.maxTags,r=e.tagTextProp,l=[];t=t.split(i[0]).map(((t,e)=>{var d,h,g,p=t.split(i[1]),c=p[0],u=l.length==o;try{if(c==+c)throw Error;h=JSON.parse(c)}catch(t){h=this.normalizeTags(c)[0]||{value:c}}if(a.call(this,h),u||!(p.length>1)||n&&!this.isTagWhitelisted(h.value)||!s&&this.isTagDuplicate(h.value)){if(t)return e?i[0]+t:t}else h[d=h[r]?r:"value"]=this.trim(h[d]),g=this.createTagElem(h),l.push(h),g.classList.add(this.settings.classNames.tagNoAnimation),p[0]=g.outerHTML,this.value.push(h);return p.join("")})).join(""),this.DOM.input.innerHTML=t,this.DOM.input.appendChild(document.createTextNode("")),this.DOM.input.normalize();var d=this.getTagElms();return d.forEach(((t,e)=>T(t,l[e]))),this.update({withoutChangeEvent:!0}),b(d,this.state.hasFocus),t},replaceTextWithNode(t,e){if(this.state.tag||e){e=e||this.state.tag.prefix+this.state.tag.value;var i,s,a=this.state.selection||window.getSelection(),n=a.anchorNode,o=this.state.tag.delimiters?this.state.tag.delimiters.length:0;return n.splitText(a.anchorOffset-o),-1==(i=n.nodeValue.lastIndexOf(e))?!0:(s=n.splitText(i),t&&n.parentNode.replaceChild(t,s),!0)}},prepareNewTagNode(t,e){e=e||{};var i=this.settings,s=[],a={},n=Object.assign({},t,{value:t.value+""});if(t=Object.assign({},n),i.transformTag.call(this,t),t.__isValid=this.hasMaxTags()||this.validateTag(t),!0!==t.__isValid){if(e.skipInvalid)return;if(g(a,this.getInvalidTagAttrs(t,t.__isValid),{__preInvalidData:n}),t.__isValid==this.TEXTS.duplicate&&this.flashTag(this.getTagElmByValue(t.value)),!i.createInvalidTags)return void s.push(t.value)}return"readonly"in t&&(t.readonly?a["aria-readonly"]=!0:delete t.readonly),{tagElm:this.createTagElem(t,a),tagData:t,aggregatedInvalidInput:s}},postProcessNewTagNode(t,e){var i=this.settings,s=e.__isValid;s&&!0===s?(this.value.push(e),this.trigger("add",{tag:t,index:this.value.length-1,data:e})):(this.trigger("invalid",{data:e,index:this.value.length,tag:t,message:s}),i.keepInvalidTags||setTimeout((()=>this.removeTags(t,!0)),1e3)),this.dropdown.position()},selectTag(t,e){if(!this.settings.enforceWhitelist||this.isTagWhitelisted(e.value)){this.state.actions.selectOption&&setTimeout((()=>this.setRangeAtStartEnd(!1,this.DOM.input)));var i=this.getLastTag();return i?this.replaceTag(i,e):this.appendTag(t),this.value[0]=e,this.update(),this.trigger("add",{tag:t,data:e}),[t]}},addEmptyTag(t){var e=g({value:""},t||{}),i=this.createTagElem(e);T(i,e),this.appendTag(i),this.editTag(i,{skipValidation:!0}),this.toggleFocusClass(!0)},addTags(t,e,i){var s=[],a=this.settings,n=[],o=document.createDocumentFragment();if(!t||0==t.length)return s;switch(t=this.normalizeTags(t),a.mode){case"mix":return this.addMixTags(t);case"select":e=!1,this.removeAllTags()}return this.DOM.input.removeAttribute("style"),t.forEach((t=>{const e=this.prepareNewTagNode(t,{skipInvalid:i||a.skipInvalid}),r=e.tagElm;if(t=e.tagData,n=e.aggregatedInvalidInput,s.push(r),"select"==a.mode)return this.selectTag(r,t);o.appendChild(r),this.postProcessNewTagNode(r,t)})),this.appendTag(o),this.update(),t.length&&e&&(this.input.set.call(this,a.createInvalidTags?"":n.join(a._delimiters)),this.setRangeAtStartEnd(!1,this.DOM.input)),a.dropdown.enabled&&this.dropdown.refilter(),s},addMixTags(t){if((t=this.normalizeTags(t))[0].prefix||this.state.tag)return this.prefixedTextToTag(t[0]);var e=document.createDocumentFragment();return t.forEach((t=>{const i=this.prepareNewTagNode(t);e.appendChild(i.tagElm),this.postProcessNewTagNode(tagElm,i.tagData)})),this.appendMixTags(e),e},appendMixTags(t){var e=!!this.state.selection;e?this.injectAtCaret(t):(this.DOM.input.focus(),(e=this.setStateSelection()).range.setStart(this.DOM.input,e.range.endOffset),e.range.setEnd(this.DOM.input,e.range.endOffset),this.DOM.input.appendChild(t),this.updateValueByDOMTags(),this.update())},prefixedTextToTag(t){var e,i,s=this.settings,a=this.state.tag?.delimiters;if(t.prefix=t.prefix||this.state.tag?this.state.tag.prefix:(s.pattern.source||s.pattern)[0],i=this.prepareNewTagNode(t),e=i.tagElm,this.replaceTextWithNode(e)||this.DOM.input.appendChild(e),setTimeout((()=>e.classList.add(this.settings.classNames.tagNoAnimation)),300),this.value.push(i.tagData),this.update(),!a){var n=this.insertAfterTag(e)||e;setTimeout(w,0,n)}return this.state.tag=null,this.postProcessNewTagNode(e,i.tagData),e},appendTag(t){var e=this.DOM,i=e.input;e.scope.insertBefore(t,i)},createTagElem(t,i){t.__tagId=m();var s,a=g({},t,e({value:d(t.value+"")},i));return function(t){for(var e,i=document.createNodeIterator(t,NodeFilter.SHOW_TEXT,null,!1);e=i.nextNode();)e.textContent.trim()||e.parentNode.removeChild(e)}(s=this.parseTemplate("tag",[a,this])),T(s,t),s},reCheckInvalidTags(){var t=this.settings;this.getTagElms(t.classNames.tagNotAllowed).forEach(((e,i)=>{var s=T(e),a=this.hasMaxTags(),n=this.validateTag(s),o=!0===n&&!a;if("select"==t.mode&&this.toggleScopeValidation(n),o)return s=s.__preInvalidData?s.__preInvalidData:{value:s.value},this.replaceTag(e,s);e.title=a||n}))},removeTags(t,e,i){var s,a=this.settings;if(t=t&&t instanceof HTMLElement?[t]:t instanceof Array?t:t?[t]:[this.getLastTag()],s=t.reduce(((t,e)=>{e&&"string"==typeof e&&(e=this.getTagElmByValue(e));var i=T(e);return e&&i&&!i.readonly&&t.push({node:e,idx:this.getTagIdx(i),data:T(e,{__removed:!0})}),t}),[]),i="number"==typeof i?i:this.CSSVars.tagHideTransition,"select"==a.mode&&(i=0,this.input.set.call(this)),1==s.length&&"select"!=a.mode&&s[0].node.classList.contains(a.classNames.tagNotAllowed)&&(e=!0),s.length)return a.hooks.beforeRemoveTag(s,{tagify:this}).then((()=>{function t(t){t.node.parentNode&&(t.node.parentNode.removeChild(t.node),e?a.keepInvalidTags&&this.trigger("remove",{tag:t.node,index:t.idx}):(this.trigger("remove",{tag:t.node,index:t.idx,data:t.data}),this.dropdown.refilter(),this.dropdown.position(),this.DOM.input.normalize(),a.keepInvalidTags&&this.reCheckInvalidTags()))}i&&i>10&&1==s.length?function(e){e.node.style.width=parseFloat(window.getComputedStyle(e.node).width)+"px",document.body.clientTop,e.node.classList.add(a.classNames.tagHide),setTimeout(t.bind(this),i,e)}.call(this,s[0]):s.forEach(t.bind(this)),e||(this.removeTagsFromValue(s.map((t=>t.node))),this.update(),"select"==a.mode&&this.setContentEditable(!0))})).catch((t=>{}))},removeTagsFromDOM(){[].slice.call(this.getTagElms()).forEach((t=>t.parentNode.removeChild(t)))},removeTagsFromValue(t){(t=Array.isArray(t)?t:[t]).forEach((t=>{var e=T(t),i=this.getTagIdx(e);i>-1&&this.value.splice(i,1)}))},removeAllTags(t){t=t||{},this.value=[],"mix"==this.settings.mode?this.DOM.input.innerHTML="":this.removeTagsFromDOM(),this.dropdown.refilter(),this.dropdown.position(),this.state.dropdown.visible&&setTimeout((()=>{this.DOM.input.focus()})),"select"==this.settings.mode&&(this.input.set.call(this),this.setContentEditable(!0)),this.update(t)},postUpdate(){this.state.blockChangeEvent=!1;var t=this.settings,e=t.classNames,i="mix"==t.mode?t.mixMode.integrated?this.DOM.input.textContent:this.DOM.originalInput.value.trim():this.value.length+this.input.raw.call(this).length;this.toggleClass(e.hasMaxTags,this.value.length>=t.maxTags),this.toggleClass(e.hasNoTags,!this.value.length),this.toggleClass(e.empty,!i),"select"==t.mode&&this.toggleScopeValidation(this.value?.[0]?.__isValid)},setOriginalInputValue(t){var e=this.DOM.originalInput;this.settings.mixMode.integrated||(e.value=t,e.tagifyValue=e.value,this.setPersistedData(t,"value"))},update(t){clearTimeout(this.debouncedUpdateTimeout),this.debouncedUpdateTimeout=setTimeout(function(){var e=this.getInputValue();this.setOriginalInputValue(e),this.settings.onChangeAfterBlur&&(t||{}).withoutChangeEvent||this.state.blockChangeEvent||this.triggerChangeEvent();this.postUpdate()}.bind(this),100)},getInputValue(){var t=this.getCleanValue();return"mix"==this.settings.mode?this.getMixedTagsAsString(t):t.length?this.settings.originalInputValueFormat?this.settings.originalInputValueFormat(t):JSON.stringify(t):""},getCleanValue(t){return a(t||this.value,this.dataProps)},getMixedTagsAsString(){var t="",e=this,i=this.settings,s=i.originalInputValueFormat||JSON.stringify,a=i.mixTagsInterpolator;return function i(o){o.childNodes.forEach((o=>{if(1==o.nodeType){const r=T(o);if("BR"==o.tagName&&(t+="\r\n"),r&&v.call(e,o)){if(r.__removed)return;t+=a[0]+s(n(r,e.dataProps))+a[1]}else o.getAttribute("style")||["B","I","U"].includes(o.tagName)?t+=o.textContent:"DIV"!=o.tagName&&"P"!=o.tagName||(t+="\r\n",i(o))}else t+=o.textContent}))}(this.DOM.input),t}},_.prototype.removeTag=_.prototype.removeTags,_}));


},{}],4:[function(require,module,exports){
(function (global){(function (){
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@vue/shared/dist/shared.cjs.js
var require_shared_cjs = __commonJS({
  "node_modules/@vue/shared/dist/shared.cjs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function makeMap(str, expectsLowerCase) {
      const map = /* @__PURE__ */ Object.create(null);
      const list = str.split(",");
      for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
      }
      return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
    }
    var PatchFlagNames = {
      [
        1
        /* TEXT */
      ]: `TEXT`,
      [
        2
        /* CLASS */
      ]: `CLASS`,
      [
        4
        /* STYLE */
      ]: `STYLE`,
      [
        8
        /* PROPS */
      ]: `PROPS`,
      [
        16
        /* FULL_PROPS */
      ]: `FULL_PROPS`,
      [
        32
        /* HYDRATE_EVENTS */
      ]: `HYDRATE_EVENTS`,
      [
        64
        /* STABLE_FRAGMENT */
      ]: `STABLE_FRAGMENT`,
      [
        128
        /* KEYED_FRAGMENT */
      ]: `KEYED_FRAGMENT`,
      [
        256
        /* UNKEYED_FRAGMENT */
      ]: `UNKEYED_FRAGMENT`,
      [
        512
        /* NEED_PATCH */
      ]: `NEED_PATCH`,
      [
        1024
        /* DYNAMIC_SLOTS */
      ]: `DYNAMIC_SLOTS`,
      [
        2048
        /* DEV_ROOT_FRAGMENT */
      ]: `DEV_ROOT_FRAGMENT`,
      [
        -1
        /* HOISTED */
      ]: `HOISTED`,
      [
        -2
        /* BAIL */
      ]: `BAIL`
    };
    var slotFlagsText = {
      [
        1
        /* STABLE */
      ]: "STABLE",
      [
        2
        /* DYNAMIC */
      ]: "DYNAMIC",
      [
        3
        /* FORWARDED */
      ]: "FORWARDED"
    };
    var GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
    var isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);
    var range = 2;
    function generateCodeFrame(source, start2 = 0, end = source.length) {
      let lines = source.split(/(\r?\n)/);
      const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
      lines = lines.filter((_, idx) => idx % 2 === 0);
      let count = 0;
      const res = [];
      for (let i = 0; i < lines.length; i++) {
        count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
        if (count >= start2) {
          for (let j = i - range; j <= i + range || end > count; j++) {
            if (j < 0 || j >= lines.length)
              continue;
            const line = j + 1;
            res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
            const lineLength = lines[j].length;
            const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
            if (j === i) {
              const pad = start2 - (count - (lineLength + newLineSeqLength));
              const length = Math.max(1, end > count ? lineLength - pad : end - start2);
              res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
            } else if (j > i) {
              if (end > count) {
                const length = Math.max(Math.min(end - count, lineLength), 1);
                res.push(`   |  ` + "^".repeat(length));
              }
              count += lineLength + newLineSeqLength;
            }
          }
          break;
        }
      }
      return res.join("\n");
    }
    var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
    var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
    var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
    var unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
    var attrValidationCache = {};
    function isSSRSafeAttrName(name) {
      if (attrValidationCache.hasOwnProperty(name)) {
        return attrValidationCache[name];
      }
      const isUnsafe = unsafeAttrCharRE.test(name);
      if (isUnsafe) {
        console.error(`unsafe attribute name: ${name}`);
      }
      return attrValidationCache[name] = !isUnsafe;
    }
    var propsToAttrMap = {
      acceptCharset: "accept-charset",
      className: "class",
      htmlFor: "for",
      httpEquiv: "http-equiv"
    };
    var isNoUnitNumericStyleProp = /* @__PURE__ */ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width`);
    var isKnownAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
    function normalizeStyle(value) {
      if (isArray(value)) {
        const res = {};
        for (let i = 0; i < value.length; i++) {
          const item = value[i];
          const normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);
          if (normalized) {
            for (const key in normalized) {
              res[key] = normalized[key];
            }
          }
        }
        return res;
      } else if (isObject(value)) {
        return value;
      }
    }
    var listDelimiterRE = /;(?![^(]*\))/g;
    var propertyDelimiterRE = /:(.+)/;
    function parseStringStyle(cssText) {
      const ret = {};
      cssText.split(listDelimiterRE).forEach((item) => {
        if (item) {
          const tmp = item.split(propertyDelimiterRE);
          tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
      });
      return ret;
    }
    function stringifyStyle(styles) {
      let ret = "";
      if (!styles) {
        return ret;
      }
      for (const key in styles) {
        const value = styles[key];
        const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
        if (isString(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) {
          ret += `${normalizedKey}:${value};`;
        }
      }
      return ret;
    }
    function normalizeClass(value) {
      let res = "";
      if (isString(value)) {
        res = value;
      } else if (isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          const normalized = normalizeClass(value[i]);
          if (normalized) {
            res += normalized + " ";
          }
        }
      } else if (isObject(value)) {
        for (const name in value) {
          if (value[name]) {
            res += name + " ";
          }
        }
      }
      return res.trim();
    }
    var HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
    var SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
    var VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
    var isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
    var isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
    var isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
    var escapeRE = /["'&<>]/;
    function escapeHtml(string) {
      const str = "" + string;
      const match = escapeRE.exec(str);
      if (!match) {
        return str;
      }
      let html = "";
      let escaped;
      let index;
      let lastIndex = 0;
      for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
          case 34:
            escaped = "&quot;";
            break;
          case 38:
            escaped = "&amp;";
            break;
          case 39:
            escaped = "&#39;";
            break;
          case 60:
            escaped = "&lt;";
            break;
          case 62:
            escaped = "&gt;";
            break;
          default:
            continue;
        }
        if (lastIndex !== index) {
          html += str.substring(lastIndex, index);
        }
        lastIndex = index + 1;
        html += escaped;
      }
      return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
    }
    var commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
    function escapeHtmlComment(src) {
      return src.replace(commentStripRE, "");
    }
    function looseCompareArrays(a, b) {
      if (a.length !== b.length)
        return false;
      let equal = true;
      for (let i = 0; equal && i < a.length; i++) {
        equal = looseEqual(a[i], b[i]);
      }
      return equal;
    }
    function looseEqual(a, b) {
      if (a === b)
        return true;
      let aValidType = isDate(a);
      let bValidType = isDate(b);
      if (aValidType || bValidType) {
        return aValidType && bValidType ? a.getTime() === b.getTime() : false;
      }
      aValidType = isArray(a);
      bValidType = isArray(b);
      if (aValidType || bValidType) {
        return aValidType && bValidType ? looseCompareArrays(a, b) : false;
      }
      aValidType = isObject(a);
      bValidType = isObject(b);
      if (aValidType || bValidType) {
        if (!aValidType || !bValidType) {
          return false;
        }
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) {
          return false;
        }
        for (const key in a) {
          const aHasKey = a.hasOwnProperty(key);
          const bHasKey = b.hasOwnProperty(key);
          if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
            return false;
          }
        }
      }
      return String(a) === String(b);
    }
    function looseIndexOf(arr, val) {
      return arr.findIndex((item) => looseEqual(item, val));
    }
    var toDisplayString = (val) => {
      return val == null ? "" : isObject(val) ? JSON.stringify(val, replacer, 2) : String(val);
    };
    var replacer = (_key, val) => {
      if (isMap(val)) {
        return {
          [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
            entries[`${key} =>`] = val2;
            return entries;
          }, {})
        };
      } else if (isSet(val)) {
        return {
          [`Set(${val.size})`]: [...val.values()]
        };
      } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
        return String(val);
      }
      return val;
    };
    var babelParserDefaultPlugins = [
      "bigInt",
      "optionalChaining",
      "nullishCoalescingOperator"
    ];
    var EMPTY_OBJ = Object.freeze({});
    var EMPTY_ARR = Object.freeze([]);
    var NOOP = () => {
    };
    var NO = () => false;
    var onRE = /^on[^a-z]/;
    var isOn = (key) => onRE.test(key);
    var isModelListener = (key) => key.startsWith("onUpdate:");
    var extend = Object.assign;
    var remove = (arr, el) => {
      const i = arr.indexOf(el);
      if (i > -1) {
        arr.splice(i, 1);
      }
    };
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var hasOwn = (val, key) => hasOwnProperty.call(val, key);
    var isArray = Array.isArray;
    var isMap = (val) => toTypeString(val) === "[object Map]";
    var isSet = (val) => toTypeString(val) === "[object Set]";
    var isDate = (val) => val instanceof Date;
    var isFunction = (val) => typeof val === "function";
    var isString = (val) => typeof val === "string";
    var isSymbol = (val) => typeof val === "symbol";
    var isObject = (val) => val !== null && typeof val === "object";
    var isPromise = (val) => {
      return isObject(val) && isFunction(val.then) && isFunction(val.catch);
    };
    var objectToString = Object.prototype.toString;
    var toTypeString = (value) => objectToString.call(value);
    var toRawType = (value) => {
      return toTypeString(value).slice(8, -1);
    };
    var isPlainObject = (val) => toTypeString(val) === "[object Object]";
    var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
    var isReservedProp = /* @__PURE__ */ makeMap(
      // the leading comma is intentional so empty string "" is also included
      ",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
    );
    var cacheStringFunction = (fn) => {
      const cache = /* @__PURE__ */ Object.create(null);
      return (str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
      };
    };
    var camelizeRE = /-(\w)/g;
    var camelize = cacheStringFunction((str) => {
      return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
    });
    var hyphenateRE = /\B([A-Z])/g;
    var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
    var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
    var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
    var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
    var invokeArrayFns = (fns, arg) => {
      for (let i = 0; i < fns.length; i++) {
        fns[i](arg);
      }
    };
    var def = (obj, key, value) => {
      Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value
      });
    };
    var toNumber = (val) => {
      const n = parseFloat(val);
      return isNaN(n) ? val : n;
    };
    var _globalThis;
    var getGlobalThis = () => {
      return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    };
    exports.EMPTY_ARR = EMPTY_ARR;
    exports.EMPTY_OBJ = EMPTY_OBJ;
    exports.NO = NO;
    exports.NOOP = NOOP;
    exports.PatchFlagNames = PatchFlagNames;
    exports.babelParserDefaultPlugins = babelParserDefaultPlugins;
    exports.camelize = camelize;
    exports.capitalize = capitalize;
    exports.def = def;
    exports.escapeHtml = escapeHtml;
    exports.escapeHtmlComment = escapeHtmlComment;
    exports.extend = extend;
    exports.generateCodeFrame = generateCodeFrame;
    exports.getGlobalThis = getGlobalThis;
    exports.hasChanged = hasChanged;
    exports.hasOwn = hasOwn;
    exports.hyphenate = hyphenate;
    exports.invokeArrayFns = invokeArrayFns;
    exports.isArray = isArray;
    exports.isBooleanAttr = isBooleanAttr2;
    exports.isDate = isDate;
    exports.isFunction = isFunction;
    exports.isGloballyWhitelisted = isGloballyWhitelisted;
    exports.isHTMLTag = isHTMLTag;
    exports.isIntegerKey = isIntegerKey;
    exports.isKnownAttr = isKnownAttr;
    exports.isMap = isMap;
    exports.isModelListener = isModelListener;
    exports.isNoUnitNumericStyleProp = isNoUnitNumericStyleProp;
    exports.isObject = isObject;
    exports.isOn = isOn;
    exports.isPlainObject = isPlainObject;
    exports.isPromise = isPromise;
    exports.isReservedProp = isReservedProp;
    exports.isSSRSafeAttrName = isSSRSafeAttrName;
    exports.isSVGTag = isSVGTag;
    exports.isSet = isSet;
    exports.isSpecialBooleanAttr = isSpecialBooleanAttr;
    exports.isString = isString;
    exports.isSymbol = isSymbol;
    exports.isVoidTag = isVoidTag;
    exports.looseEqual = looseEqual;
    exports.looseIndexOf = looseIndexOf;
    exports.makeMap = makeMap;
    exports.normalizeClass = normalizeClass;
    exports.normalizeStyle = normalizeStyle;
    exports.objectToString = objectToString;
    exports.parseStringStyle = parseStringStyle;
    exports.propsToAttrMap = propsToAttrMap;
    exports.remove = remove;
    exports.slotFlagsText = slotFlagsText;
    exports.stringifyStyle = stringifyStyle;
    exports.toDisplayString = toDisplayString;
    exports.toHandlerKey = toHandlerKey;
    exports.toNumber = toNumber;
    exports.toRawType = toRawType;
    exports.toTypeString = toTypeString;
  }
});

// node_modules/@vue/shared/index.js
var require_shared = __commonJS({
  "node_modules/@vue/shared/index.js"(exports, module2) {
    "use strict";
    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_shared_cjs();
    }
  }
});

// node_modules/@vue/reactivity/dist/reactivity.cjs.js
var require_reactivity_cjs = __commonJS({
  "node_modules/@vue/reactivity/dist/reactivity.cjs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var shared = require_shared();
    var targetMap = /* @__PURE__ */ new WeakMap();
    var effectStack = [];
    var activeEffect;
    var ITERATE_KEY = Symbol("iterate");
    var MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
    function isEffect(fn) {
      return fn && fn._isEffect === true;
    }
    function effect3(fn, options = shared.EMPTY_OBJ) {
      if (isEffect(fn)) {
        fn = fn.raw;
      }
      const effect4 = createReactiveEffect(fn, options);
      if (!options.lazy) {
        effect4();
      }
      return effect4;
    }
    function stop2(effect4) {
      if (effect4.active) {
        cleanup(effect4);
        if (effect4.options.onStop) {
          effect4.options.onStop();
        }
        effect4.active = false;
      }
    }
    var uid = 0;
    function createReactiveEffect(fn, options) {
      const effect4 = function reactiveEffect() {
        if (!effect4.active) {
          return fn();
        }
        if (!effectStack.includes(effect4)) {
          cleanup(effect4);
          try {
            enableTracking();
            effectStack.push(effect4);
            activeEffect = effect4;
            return fn();
          } finally {
            effectStack.pop();
            resetTracking();
            activeEffect = effectStack[effectStack.length - 1];
          }
        }
      };
      effect4.id = uid++;
      effect4.allowRecurse = !!options.allowRecurse;
      effect4._isEffect = true;
      effect4.active = true;
      effect4.raw = fn;
      effect4.deps = [];
      effect4.options = options;
      return effect4;
    }
    function cleanup(effect4) {
      const { deps } = effect4;
      if (deps.length) {
        for (let i = 0; i < deps.length; i++) {
          deps[i].delete(effect4);
        }
        deps.length = 0;
      }
    }
    var shouldTrack = true;
    var trackStack = [];
    function pauseTracking() {
      trackStack.push(shouldTrack);
      shouldTrack = false;
    }
    function enableTracking() {
      trackStack.push(shouldTrack);
      shouldTrack = true;
    }
    function resetTracking() {
      const last = trackStack.pop();
      shouldTrack = last === void 0 ? true : last;
    }
    function track(target, type, key) {
      if (!shouldTrack || activeEffect === void 0) {
        return;
      }
      let depsMap = targetMap.get(target);
      if (!depsMap) {
        targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
      }
      let dep = depsMap.get(key);
      if (!dep) {
        depsMap.set(key, dep = /* @__PURE__ */ new Set());
      }
      if (!dep.has(activeEffect)) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
        if (activeEffect.options.onTrack) {
          activeEffect.options.onTrack({
            effect: activeEffect,
            target,
            type,
            key
          });
        }
      }
    }
    function trigger(target, type, key, newValue, oldValue, oldTarget) {
      const depsMap = targetMap.get(target);
      if (!depsMap) {
        return;
      }
      const effects = /* @__PURE__ */ new Set();
      const add2 = (effectsToAdd) => {
        if (effectsToAdd) {
          effectsToAdd.forEach((effect4) => {
            if (effect4 !== activeEffect || effect4.allowRecurse) {
              effects.add(effect4);
            }
          });
        }
      };
      if (type === "clear") {
        depsMap.forEach(add2);
      } else if (key === "length" && shared.isArray(target)) {
        depsMap.forEach((dep, key2) => {
          if (key2 === "length" || key2 >= newValue) {
            add2(dep);
          }
        });
      } else {
        if (key !== void 0) {
          add2(depsMap.get(key));
        }
        switch (type) {
          case "add":
            if (!shared.isArray(target)) {
              add2(depsMap.get(ITERATE_KEY));
              if (shared.isMap(target)) {
                add2(depsMap.get(MAP_KEY_ITERATE_KEY));
              }
            } else if (shared.isIntegerKey(key)) {
              add2(depsMap.get("length"));
            }
            break;
          case "delete":
            if (!shared.isArray(target)) {
              add2(depsMap.get(ITERATE_KEY));
              if (shared.isMap(target)) {
                add2(depsMap.get(MAP_KEY_ITERATE_KEY));
              }
            }
            break;
          case "set":
            if (shared.isMap(target)) {
              add2(depsMap.get(ITERATE_KEY));
            }
            break;
        }
      }
      const run = (effect4) => {
        if (effect4.options.onTrigger) {
          effect4.options.onTrigger({
            effect: effect4,
            target,
            key,
            type,
            newValue,
            oldValue,
            oldTarget
          });
        }
        if (effect4.options.scheduler) {
          effect4.options.scheduler(effect4);
        } else {
          effect4();
        }
      };
      effects.forEach(run);
    }
    var isNonTrackableKeys = /* @__PURE__ */ shared.makeMap(`__proto__,__v_isRef,__isVue`);
    var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(shared.isSymbol));
    var get2 = /* @__PURE__ */ createGetter();
    var shallowGet = /* @__PURE__ */ createGetter(false, true);
    var readonlyGet = /* @__PURE__ */ createGetter(true);
    var shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
    var arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
    function createArrayInstrumentations() {
      const instrumentations = {};
      ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
        instrumentations[key] = function(...args) {
          const arr = toRaw2(this);
          for (let i = 0, l = this.length; i < l; i++) {
            track(arr, "get", i + "");
          }
          const res = arr[key](...args);
          if (res === -1 || res === false) {
            return arr[key](...args.map(toRaw2));
          } else {
            return res;
          }
        };
      });
      ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
        instrumentations[key] = function(...args) {
          pauseTracking();
          const res = toRaw2(this)[key].apply(this, args);
          resetTracking();
          return res;
        };
      });
      return instrumentations;
    }
    function createGetter(isReadonly2 = false, shallow = false) {
      return function get3(target, key, receiver) {
        if (key === "__v_isReactive") {
          return !isReadonly2;
        } else if (key === "__v_isReadonly") {
          return isReadonly2;
        } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
          return target;
        }
        const targetIsArray = shared.isArray(target);
        if (!isReadonly2 && targetIsArray && shared.hasOwn(arrayInstrumentations, key)) {
          return Reflect.get(arrayInstrumentations, key, receiver);
        }
        const res = Reflect.get(target, key, receiver);
        if (shared.isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
          return res;
        }
        if (!isReadonly2) {
          track(target, "get", key);
        }
        if (shallow) {
          return res;
        }
        if (isRef(res)) {
          const shouldUnwrap = !targetIsArray || !shared.isIntegerKey(key);
          return shouldUnwrap ? res.value : res;
        }
        if (shared.isObject(res)) {
          return isReadonly2 ? readonly(res) : reactive3(res);
        }
        return res;
      };
    }
    var set2 = /* @__PURE__ */ createSetter();
    var shallowSet = /* @__PURE__ */ createSetter(true);
    function createSetter(shallow = false) {
      return function set3(target, key, value, receiver) {
        let oldValue = target[key];
        if (!shallow) {
          value = toRaw2(value);
          oldValue = toRaw2(oldValue);
          if (!shared.isArray(target) && isRef(oldValue) && !isRef(value)) {
            oldValue.value = value;
            return true;
          }
        }
        const hadKey = shared.isArray(target) && shared.isIntegerKey(key) ? Number(key) < target.length : shared.hasOwn(target, key);
        const result = Reflect.set(target, key, value, receiver);
        if (target === toRaw2(receiver)) {
          if (!hadKey) {
            trigger(target, "add", key, value);
          } else if (shared.hasChanged(value, oldValue)) {
            trigger(target, "set", key, value, oldValue);
          }
        }
        return result;
      };
    }
    function deleteProperty(target, key) {
      const hadKey = shared.hasOwn(target, key);
      const oldValue = target[key];
      const result = Reflect.deleteProperty(target, key);
      if (result && hadKey) {
        trigger(target, "delete", key, void 0, oldValue);
      }
      return result;
    }
    function has(target, key) {
      const result = Reflect.has(target, key);
      if (!shared.isSymbol(key) || !builtInSymbols.has(key)) {
        track(target, "has", key);
      }
      return result;
    }
    function ownKeys(target) {
      track(target, "iterate", shared.isArray(target) ? "length" : ITERATE_KEY);
      return Reflect.ownKeys(target);
    }
    var mutableHandlers = {
      get: get2,
      set: set2,
      deleteProperty,
      has,
      ownKeys
    };
    var readonlyHandlers = {
      get: readonlyGet,
      set(target, key) {
        {
          console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
        }
        return true;
      },
      deleteProperty(target, key) {
        {
          console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
        }
        return true;
      }
    };
    var shallowReactiveHandlers = /* @__PURE__ */ shared.extend({}, mutableHandlers, {
      get: shallowGet,
      set: shallowSet
    });
    var shallowReadonlyHandlers = /* @__PURE__ */ shared.extend({}, readonlyHandlers, {
      get: shallowReadonlyGet
    });
    var toReactive = (value) => shared.isObject(value) ? reactive3(value) : value;
    var toReadonly = (value) => shared.isObject(value) ? readonly(value) : value;
    var toShallow = (value) => value;
    var getProto = (v) => Reflect.getPrototypeOf(v);
    function get$1(target, key, isReadonly2 = false, isShallow = false) {
      target = target[
        "__v_raw"
        /* RAW */
      ];
      const rawTarget = toRaw2(target);
      const rawKey = toRaw2(key);
      if (key !== rawKey) {
        !isReadonly2 && track(rawTarget, "get", key);
      }
      !isReadonly2 && track(rawTarget, "get", rawKey);
      const { has: has2 } = getProto(rawTarget);
      const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
      if (has2.call(rawTarget, key)) {
        return wrap(target.get(key));
      } else if (has2.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
      } else if (target !== rawTarget) {
        target.get(key);
      }
    }
    function has$1(key, isReadonly2 = false) {
      const target = this[
        "__v_raw"
        /* RAW */
      ];
      const rawTarget = toRaw2(target);
      const rawKey = toRaw2(key);
      if (key !== rawKey) {
        !isReadonly2 && track(rawTarget, "has", key);
      }
      !isReadonly2 && track(rawTarget, "has", rawKey);
      return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
    }
    function size(target, isReadonly2 = false) {
      target = target[
        "__v_raw"
        /* RAW */
      ];
      !isReadonly2 && track(toRaw2(target), "iterate", ITERATE_KEY);
      return Reflect.get(target, "size", target);
    }
    function add(value) {
      value = toRaw2(value);
      const target = toRaw2(this);
      const proto = getProto(target);
      const hadKey = proto.has.call(target, value);
      if (!hadKey) {
        target.add(value);
        trigger(target, "add", value, value);
      }
      return this;
    }
    function set$1(key, value) {
      value = toRaw2(value);
      const target = toRaw2(this);
      const { has: has2, get: get3 } = getProto(target);
      let hadKey = has2.call(target, key);
      if (!hadKey) {
        key = toRaw2(key);
        hadKey = has2.call(target, key);
      } else {
        checkIdentityKeys(target, has2, key);
      }
      const oldValue = get3.call(target, key);
      target.set(key, value);
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (shared.hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
      return this;
    }
    function deleteEntry(key) {
      const target = toRaw2(this);
      const { has: has2, get: get3 } = getProto(target);
      let hadKey = has2.call(target, key);
      if (!hadKey) {
        key = toRaw2(key);
        hadKey = has2.call(target, key);
      } else {
        checkIdentityKeys(target, has2, key);
      }
      const oldValue = get3 ? get3.call(target, key) : void 0;
      const result = target.delete(key);
      if (hadKey) {
        trigger(target, "delete", key, void 0, oldValue);
      }
      return result;
    }
    function clear() {
      const target = toRaw2(this);
      const hadItems = target.size !== 0;
      const oldTarget = shared.isMap(target) ? new Map(target) : new Set(target);
      const result = target.clear();
      if (hadItems) {
        trigger(target, "clear", void 0, void 0, oldTarget);
      }
      return result;
    }
    function createForEach(isReadonly2, isShallow) {
      return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed[
          "__v_raw"
          /* RAW */
        ];
        const rawTarget = toRaw2(target);
        const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
        !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
        return target.forEach((value, key) => {
          return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
      };
    }
    function createIterableMethod(method, isReadonly2, isShallow) {
      return function(...args) {
        const target = this[
          "__v_raw"
          /* RAW */
        ];
        const rawTarget = toRaw2(target);
        const targetIsMap = shared.isMap(rawTarget);
        const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
        const isKeyOnly = method === "keys" && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
        !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        return {
          // iterator protocol
          next() {
            const { value, done } = innerIterator.next();
            return done ? { value, done } : {
              value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
              done
            };
          },
          // iterable protocol
          [Symbol.iterator]() {
            return this;
          }
        };
      };
    }
    function createReadonlyMethod(type) {
      return function(...args) {
        {
          const key = args[0] ? `on key "${args[0]}" ` : ``;
          console.warn(`${shared.capitalize(type)} operation ${key}failed: target is readonly.`, toRaw2(this));
        }
        return type === "delete" ? false : this;
      };
    }
    function createInstrumentations() {
      const mutableInstrumentations2 = {
        get(key) {
          return get$1(this, key);
        },
        get size() {
          return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, false)
      };
      const shallowInstrumentations2 = {
        get(key) {
          return get$1(this, key, false, true);
        },
        get size() {
          return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, true)
      };
      const readonlyInstrumentations2 = {
        get(key) {
          return get$1(this, key, true);
        },
        get size() {
          return size(this, true);
        },
        has(key) {
          return has$1.call(this, key, true);
        },
        add: createReadonlyMethod(
          "add"
          /* ADD */
        ),
        set: createReadonlyMethod(
          "set"
          /* SET */
        ),
        delete: createReadonlyMethod(
          "delete"
          /* DELETE */
        ),
        clear: createReadonlyMethod(
          "clear"
          /* CLEAR */
        ),
        forEach: createForEach(true, false)
      };
      const shallowReadonlyInstrumentations2 = {
        get(key) {
          return get$1(this, key, true, true);
        },
        get size() {
          return size(this, true);
        },
        has(key) {
          return has$1.call(this, key, true);
        },
        add: createReadonlyMethod(
          "add"
          /* ADD */
        ),
        set: createReadonlyMethod(
          "set"
          /* SET */
        ),
        delete: createReadonlyMethod(
          "delete"
          /* DELETE */
        ),
        clear: createReadonlyMethod(
          "clear"
          /* CLEAR */
        ),
        forEach: createForEach(true, true)
      };
      const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
      iteratorMethods.forEach((method) => {
        mutableInstrumentations2[method] = createIterableMethod(method, false, false);
        readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
        shallowInstrumentations2[method] = createIterableMethod(method, false, true);
        shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
      });
      return [
        mutableInstrumentations2,
        readonlyInstrumentations2,
        shallowInstrumentations2,
        shallowReadonlyInstrumentations2
      ];
    }
    var [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
    function createInstrumentationGetter(isReadonly2, shallow) {
      const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
      return (target, key, receiver) => {
        if (key === "__v_isReactive") {
          return !isReadonly2;
        } else if (key === "__v_isReadonly") {
          return isReadonly2;
        } else if (key === "__v_raw") {
          return target;
        }
        return Reflect.get(shared.hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
      };
    }
    var mutableCollectionHandlers = {
      get: /* @__PURE__ */ createInstrumentationGetter(false, false)
    };
    var shallowCollectionHandlers = {
      get: /* @__PURE__ */ createInstrumentationGetter(false, true)
    };
    var readonlyCollectionHandlers = {
      get: /* @__PURE__ */ createInstrumentationGetter(true, false)
    };
    var shallowReadonlyCollectionHandlers = {
      get: /* @__PURE__ */ createInstrumentationGetter(true, true)
    };
    function checkIdentityKeys(target, has2, key) {
      const rawKey = toRaw2(key);
      if (rawKey !== key && has2.call(target, rawKey)) {
        const type = shared.toRawType(target);
        console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
      }
    }
    var reactiveMap = /* @__PURE__ */ new WeakMap();
    var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
    var readonlyMap = /* @__PURE__ */ new WeakMap();
    var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
    function targetTypeMap(rawType) {
      switch (rawType) {
        case "Object":
        case "Array":
          return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
          return 2;
        default:
          return 0;
      }
    }
    function getTargetType(value) {
      return value[
        "__v_skip"
        /* SKIP */
      ] || !Object.isExtensible(value) ? 0 : targetTypeMap(shared.toRawType(value));
    }
    function reactive3(target) {
      if (target && target[
        "__v_isReadonly"
        /* IS_READONLY */
      ]) {
        return target;
      }
      return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
    }
    function shallowReactive(target) {
      return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
    }
    function readonly(target) {
      return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
    }
    function shallowReadonly(target) {
      return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
    }
    function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
      if (!shared.isObject(target)) {
        {
          console.warn(`value cannot be made reactive: ${String(target)}`);
        }
        return target;
      }
      if (target[
        "__v_raw"
        /* RAW */
      ] && !(isReadonly2 && target[
        "__v_isReactive"
        /* IS_REACTIVE */
      ])) {
        return target;
      }
      const existingProxy = proxyMap.get(target);
      if (existingProxy) {
        return existingProxy;
      }
      const targetType = getTargetType(target);
      if (targetType === 0) {
        return target;
      }
      const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
      proxyMap.set(target, proxy);
      return proxy;
    }
    function isReactive2(value) {
      if (isReadonly(value)) {
        return isReactive2(value[
          "__v_raw"
          /* RAW */
        ]);
      }
      return !!(value && value[
        "__v_isReactive"
        /* IS_REACTIVE */
      ]);
    }
    function isReadonly(value) {
      return !!(value && value[
        "__v_isReadonly"
        /* IS_READONLY */
      ]);
    }
    function isProxy(value) {
      return isReactive2(value) || isReadonly(value);
    }
    function toRaw2(observed) {
      return observed && toRaw2(observed[
        "__v_raw"
        /* RAW */
      ]) || observed;
    }
    function markRaw(value) {
      shared.def(value, "__v_skip", true);
      return value;
    }
    var convert = (val) => shared.isObject(val) ? reactive3(val) : val;
    function isRef(r) {
      return Boolean(r && r.__v_isRef === true);
    }
    function ref(value) {
      return createRef(value);
    }
    function shallowRef(value) {
      return createRef(value, true);
    }
    var RefImpl = class {
      constructor(value, _shallow = false) {
        this._shallow = _shallow;
        this.__v_isRef = true;
        this._rawValue = _shallow ? value : toRaw2(value);
        this._value = _shallow ? value : convert(value);
      }
      get value() {
        track(toRaw2(this), "get", "value");
        return this._value;
      }
      set value(newVal) {
        newVal = this._shallow ? newVal : toRaw2(newVal);
        if (shared.hasChanged(newVal, this._rawValue)) {
          this._rawValue = newVal;
          this._value = this._shallow ? newVal : convert(newVal);
          trigger(toRaw2(this), "set", "value", newVal);
        }
      }
    };
    function createRef(rawValue, shallow = false) {
      if (isRef(rawValue)) {
        return rawValue;
      }
      return new RefImpl(rawValue, shallow);
    }
    function triggerRef(ref2) {
      trigger(toRaw2(ref2), "set", "value", ref2.value);
    }
    function unref(ref2) {
      return isRef(ref2) ? ref2.value : ref2;
    }
    var shallowUnwrapHandlers = {
      get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
      set: (target, key, value, receiver) => {
        const oldValue = target[key];
        if (isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        } else {
          return Reflect.set(target, key, value, receiver);
        }
      }
    };
    function proxyRefs(objectWithRefs) {
      return isReactive2(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
    }
    var CustomRefImpl = class {
      constructor(factory) {
        this.__v_isRef = true;
        const { get: get3, set: set3 } = factory(() => track(this, "get", "value"), () => trigger(this, "set", "value"));
        this._get = get3;
        this._set = set3;
      }
      get value() {
        return this._get();
      }
      set value(newVal) {
        this._set(newVal);
      }
    };
    function customRef(factory) {
      return new CustomRefImpl(factory);
    }
    function toRefs(object) {
      if (!isProxy(object)) {
        console.warn(`toRefs() expects a reactive object but received a plain one.`);
      }
      const ret = shared.isArray(object) ? new Array(object.length) : {};
      for (const key in object) {
        ret[key] = toRef(object, key);
      }
      return ret;
    }
    var ObjectRefImpl = class {
      constructor(_object, _key) {
        this._object = _object;
        this._key = _key;
        this.__v_isRef = true;
      }
      get value() {
        return this._object[this._key];
      }
      set value(newVal) {
        this._object[this._key] = newVal;
      }
    };
    function toRef(object, key) {
      return isRef(object[key]) ? object[key] : new ObjectRefImpl(object, key);
    }
    var ComputedRefImpl = class {
      constructor(getter, _setter, isReadonly2) {
        this._setter = _setter;
        this._dirty = true;
        this.__v_isRef = true;
        this.effect = effect3(getter, {
          lazy: true,
          scheduler: () => {
            if (!this._dirty) {
              this._dirty = true;
              trigger(toRaw2(this), "set", "value");
            }
          }
        });
        this[
          "__v_isReadonly"
          /* IS_READONLY */
        ] = isReadonly2;
      }
      get value() {
        const self2 = toRaw2(this);
        if (self2._dirty) {
          self2._value = this.effect();
          self2._dirty = false;
        }
        track(self2, "get", "value");
        return self2._value;
      }
      set value(newValue) {
        this._setter(newValue);
      }
    };
    function computed(getterOrOptions) {
      let getter;
      let setter;
      if (shared.isFunction(getterOrOptions)) {
        getter = getterOrOptions;
        setter = () => {
          console.warn("Write operation failed: computed value is readonly");
        };
      } else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
      }
      return new ComputedRefImpl(getter, setter, shared.isFunction(getterOrOptions) || !getterOrOptions.set);
    }
    exports.ITERATE_KEY = ITERATE_KEY;
    exports.computed = computed;
    exports.customRef = customRef;
    exports.effect = effect3;
    exports.enableTracking = enableTracking;
    exports.isProxy = isProxy;
    exports.isReactive = isReactive2;
    exports.isReadonly = isReadonly;
    exports.isRef = isRef;
    exports.markRaw = markRaw;
    exports.pauseTracking = pauseTracking;
    exports.proxyRefs = proxyRefs;
    exports.reactive = reactive3;
    exports.readonly = readonly;
    exports.ref = ref;
    exports.resetTracking = resetTracking;
    exports.shallowReactive = shallowReactive;
    exports.shallowReadonly = shallowReadonly;
    exports.shallowRef = shallowRef;
    exports.stop = stop2;
    exports.toRaw = toRaw2;
    exports.toRef = toRef;
    exports.toRefs = toRefs;
    exports.track = track;
    exports.trigger = trigger;
    exports.triggerRef = triggerRef;
    exports.unref = unref;
  }
});

// node_modules/@vue/reactivity/index.js
var require_reactivity = __commonJS({
  "node_modules/@vue/reactivity/index.js"(exports, module2) {
    "use strict";
    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_reactivity_cjs();
    }
  }
});

// packages/alpinejs/builds/module.js
var module_exports = {};
__export(module_exports, {
  default: () => module_default
});
module.exports = __toCommonJS(module_exports);

// packages/alpinejs/src/scheduler.js
var flushPending = false;
var flushing = false;
var queue = [];
var lastFlushedIndex = -1;
function scheduler(callback) {
  queueJob(callback);
}
function queueJob(job) {
  if (!queue.includes(job))
    queue.push(job);
  queueFlush();
}
function dequeueJob(job) {
  let index = queue.indexOf(job);
  if (index !== -1 && index > lastFlushedIndex)
    queue.splice(index, 1);
}
function queueFlush() {
  if (!flushing && !flushPending) {
    flushPending = true;
    queueMicrotask(flushJobs);
  }
}
function flushJobs() {
  flushPending = false;
  flushing = true;
  for (let i = 0; i < queue.length; i++) {
    queue[i]();
    lastFlushedIndex = i;
  }
  queue.length = 0;
  lastFlushedIndex = -1;
  flushing = false;
}

// packages/alpinejs/src/reactivity.js
var reactive;
var effect;
var release;
var raw;
var shouldSchedule = true;
function disableEffectScheduling(callback) {
  shouldSchedule = false;
  callback();
  shouldSchedule = true;
}
function setReactivityEngine(engine) {
  reactive = engine.reactive;
  release = engine.release;
  effect = (callback) => engine.effect(callback, { scheduler: (task) => {
    if (shouldSchedule) {
      scheduler(task);
    } else {
      task();
    }
  } });
  raw = engine.raw;
}
function overrideEffect(override) {
  effect = override;
}
function elementBoundEffect(el) {
  let cleanup = () => {
  };
  let wrappedEffect = (callback) => {
    let effectReference = effect(callback);
    if (!el._x_effects) {
      el._x_effects = /* @__PURE__ */ new Set();
      el._x_runEffects = () => {
        el._x_effects.forEach((i) => i());
      };
    }
    el._x_effects.add(effectReference);
    cleanup = () => {
      if (effectReference === void 0)
        return;
      el._x_effects.delete(effectReference);
      release(effectReference);
    };
    return effectReference;
  };
  return [wrappedEffect, () => {
    cleanup();
  }];
}

// packages/alpinejs/src/utils/dispatch.js
function dispatch(el, name, detail = {}) {
  el.dispatchEvent(
    new CustomEvent(name, {
      detail,
      bubbles: true,
      // Allows events to pass the shadow DOM barrier.
      composed: true,
      cancelable: true
    })
  );
}

// packages/alpinejs/src/utils/walk.js
function walk(el, callback) {
  if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
    Array.from(el.children).forEach((el2) => walk(el2, callback));
    return;
  }
  let skip = false;
  callback(el, () => skip = true);
  if (skip)
    return;
  let node = el.firstElementChild;
  while (node) {
    walk(node, callback, false);
    node = node.nextElementSibling;
  }
}

// packages/alpinejs/src/utils/warn.js
function warn(message, ...args) {
  console.warn(`Alpine Warning: ${message}`, ...args);
}

// packages/alpinejs/src/lifecycle.js
var started = false;
function start() {
  if (started)
    warn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems.");
  started = true;
  if (!document.body)
    warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
  dispatch(document, "alpine:init");
  dispatch(document, "alpine:initializing");
  startObservingMutations();
  onElAdded((el) => initTree(el, walk));
  onElRemoved((el) => destroyTree(el));
  onAttributesAdded((el, attrs) => {
    directives(el, attrs).forEach((handle) => handle());
  });
  let outNestedComponents = (el) => !closestRoot(el.parentElement, true);
  Array.from(document.querySelectorAll(allSelectors().join(","))).filter(outNestedComponents).forEach((el) => {
    initTree(el);
  });
  dispatch(document, "alpine:initialized");
}
var rootSelectorCallbacks = [];
var initSelectorCallbacks = [];
function rootSelectors() {
  return rootSelectorCallbacks.map((fn) => fn());
}
function allSelectors() {
  return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn) => fn());
}
function addRootSelector(selectorCallback) {
  rootSelectorCallbacks.push(selectorCallback);
}
function addInitSelector(selectorCallback) {
  initSelectorCallbacks.push(selectorCallback);
}
function closestRoot(el, includeInitSelectors = false) {
  return findClosest(el, (element) => {
    const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
    if (selectors.some((selector) => element.matches(selector)))
      return true;
  });
}
function findClosest(el, callback) {
  if (!el)
    return;
  if (callback(el))
    return el;
  if (el._x_teleportBack)
    el = el._x_teleportBack;
  if (!el.parentElement)
    return;
  return findClosest(el.parentElement, callback);
}
function isRoot(el) {
  return rootSelectors().some((selector) => el.matches(selector));
}
var initInterceptors = [];
function interceptInit(callback) {
  initInterceptors.push(callback);
}
function initTree(el, walker = walk, intercept = () => {
}) {
  deferHandlingDirectives(() => {
    walker(el, (el2, skip) => {
      intercept(el2, skip);
      initInterceptors.forEach((i) => i(el2, skip));
      directives(el2, el2.attributes).forEach((handle) => handle());
      el2._x_ignore && skip();
    });
  });
}
function destroyTree(root) {
  walk(root, (el) => {
    cleanupAttributes(el);
    cleanupElement(el);
  });
}

// packages/alpinejs/src/mutation.js
var onAttributeAddeds = [];
var onElRemoveds = [];
var onElAddeds = [];
function onElAdded(callback) {
  onElAddeds.push(callback);
}
function onElRemoved(el, callback) {
  if (typeof callback === "function") {
    if (!el._x_cleanups)
      el._x_cleanups = [];
    el._x_cleanups.push(callback);
  } else {
    callback = el;
    onElRemoveds.push(callback);
  }
}
function onAttributesAdded(callback) {
  onAttributeAddeds.push(callback);
}
function onAttributeRemoved(el, name, callback) {
  if (!el._x_attributeCleanups)
    el._x_attributeCleanups = {};
  if (!el._x_attributeCleanups[name])
    el._x_attributeCleanups[name] = [];
  el._x_attributeCleanups[name].push(callback);
}
function cleanupAttributes(el, names) {
  if (!el._x_attributeCleanups)
    return;
  Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
    if (names === void 0 || names.includes(name)) {
      value.forEach((i) => i());
      delete el._x_attributeCleanups[name];
    }
  });
}
function cleanupElement(el) {
  if (el._x_cleanups) {
    while (el._x_cleanups.length)
      el._x_cleanups.pop()();
  }
}
var observer = new MutationObserver(onMutate);
var currentlyObserving = false;
function startObservingMutations() {
  observer.observe(document, { subtree: true, childList: true, attributes: true, attributeOldValue: true });
  currentlyObserving = true;
}
function stopObservingMutations() {
  flushObserver();
  observer.disconnect();
  currentlyObserving = false;
}
var recordQueue = [];
var willProcessRecordQueue = false;
function flushObserver() {
  recordQueue = recordQueue.concat(observer.takeRecords());
  if (recordQueue.length && !willProcessRecordQueue) {
    willProcessRecordQueue = true;
    queueMicrotask(() => {
      processRecordQueue();
      willProcessRecordQueue = false;
    });
  }
}
function processRecordQueue() {
  onMutate(recordQueue);
  recordQueue.length = 0;
}
function mutateDom(callback) {
  if (!currentlyObserving)
    return callback();
  stopObservingMutations();
  let result = callback();
  startObservingMutations();
  return result;
}
var isCollecting = false;
var deferredMutations = [];
function deferMutations() {
  isCollecting = true;
}
function flushAndStopDeferringMutations() {
  isCollecting = false;
  onMutate(deferredMutations);
  deferredMutations = [];
}
function onMutate(mutations) {
  if (isCollecting) {
    deferredMutations = deferredMutations.concat(mutations);
    return;
  }
  let addedNodes = [];
  let removedNodes = [];
  let addedAttributes = /* @__PURE__ */ new Map();
  let removedAttributes = /* @__PURE__ */ new Map();
  for (let i = 0; i < mutations.length; i++) {
    if (mutations[i].target._x_ignoreMutationObserver)
      continue;
    if (mutations[i].type === "childList") {
      mutations[i].addedNodes.forEach((node) => node.nodeType === 1 && addedNodes.push(node));
      mutations[i].removedNodes.forEach((node) => node.nodeType === 1 && removedNodes.push(node));
    }
    if (mutations[i].type === "attributes") {
      let el = mutations[i].target;
      let name = mutations[i].attributeName;
      let oldValue = mutations[i].oldValue;
      let add = () => {
        if (!addedAttributes.has(el))
          addedAttributes.set(el, []);
        addedAttributes.get(el).push({ name, value: el.getAttribute(name) });
      };
      let remove = () => {
        if (!removedAttributes.has(el))
          removedAttributes.set(el, []);
        removedAttributes.get(el).push(name);
      };
      if (el.hasAttribute(name) && oldValue === null) {
        add();
      } else if (el.hasAttribute(name)) {
        remove();
        add();
      } else {
        remove();
      }
    }
  }
  removedAttributes.forEach((attrs, el) => {
    cleanupAttributes(el, attrs);
  });
  addedAttributes.forEach((attrs, el) => {
    onAttributeAddeds.forEach((i) => i(el, attrs));
  });
  for (let node of removedNodes) {
    if (addedNodes.includes(node))
      continue;
    onElRemoveds.forEach((i) => i(node));
    destroyTree(node);
  }
  addedNodes.forEach((node) => {
    node._x_ignoreSelf = true;
    node._x_ignore = true;
  });
  for (let node of addedNodes) {
    if (removedNodes.includes(node))
      continue;
    if (!node.isConnected)
      continue;
    delete node._x_ignoreSelf;
    delete node._x_ignore;
    onElAddeds.forEach((i) => i(node));
    node._x_ignore = true;
    node._x_ignoreSelf = true;
  }
  addedNodes.forEach((node) => {
    delete node._x_ignoreSelf;
    delete node._x_ignore;
  });
  addedNodes = null;
  removedNodes = null;
  addedAttributes = null;
  removedAttributes = null;
}

// packages/alpinejs/src/scope.js
function scope(node) {
  return mergeProxies(closestDataStack(node));
}
function addScopeToNode(node, data2, referenceNode) {
  node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)];
  return () => {
    node._x_dataStack = node._x_dataStack.filter((i) => i !== data2);
  };
}
function closestDataStack(node) {
  if (node._x_dataStack)
    return node._x_dataStack;
  if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) {
    return closestDataStack(node.host);
  }
  if (!node.parentNode) {
    return [];
  }
  return closestDataStack(node.parentNode);
}
function mergeProxies(objects) {
  return new Proxy({ objects }, mergeProxyTrap);
}
var mergeProxyTrap = {
  ownKeys({ objects }) {
    return Array.from(
      new Set(objects.flatMap((i) => Object.keys(i)))
    );
  },
  has({ objects }, name) {
    if (name == Symbol.unscopables)
      return false;
    return objects.some(
      (obj) => Object.prototype.hasOwnProperty.call(obj, name)
    );
  },
  get({ objects }, name, thisProxy) {
    if (name == "toJSON")
      return collapseProxies;
    return Reflect.get(
      objects.find(
        (obj) => Object.prototype.hasOwnProperty.call(obj, name)
      ) || {},
      name,
      thisProxy
    );
  },
  set({ objects }, name, value, thisProxy) {
    const target = objects.find(
      (obj) => Object.prototype.hasOwnProperty.call(obj, name)
    ) || objects[objects.length - 1];
    const descriptor = Object.getOwnPropertyDescriptor(target, name);
    if ((descriptor == null ? void 0 : descriptor.set) && (descriptor == null ? void 0 : descriptor.get))
      return Reflect.set(target, name, value, thisProxy);
    return Reflect.set(target, name, value);
  }
};
function collapseProxies() {
  let keys = Reflect.ownKeys(this);
  return keys.reduce((acc, key) => {
    acc[key] = Reflect.get(this, key);
    return acc;
  }, {});
}

// packages/alpinejs/src/interceptor.js
function initInterceptors2(data2) {
  let isObject = (val) => typeof val === "object" && !Array.isArray(val) && val !== null;
  let recurse = (obj, basePath = "") => {
    Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value, enumerable }]) => {
      if (enumerable === false || value === void 0)
        return;
      let path = basePath === "" ? key : `${basePath}.${key}`;
      if (typeof value === "object" && value !== null && value._x_interceptor) {
        obj[key] = value.initialize(data2, path, key);
      } else {
        if (isObject(value) && value !== obj && !(value instanceof Element)) {
          recurse(value, path);
        }
      }
    });
  };
  return recurse(data2);
}
function interceptor(callback, mutateObj = () => {
}) {
  let obj = {
    initialValue: void 0,
    _x_interceptor: true,
    initialize(data2, path, key) {
      return callback(this.initialValue, () => get(data2, path), (value) => set(data2, path, value), path, key);
    }
  };
  mutateObj(obj);
  return (initialValue) => {
    if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
      let initialize = obj.initialize.bind(obj);
      obj.initialize = (data2, path, key) => {
        let innerValue = initialValue.initialize(data2, path, key);
        obj.initialValue = innerValue;
        return initialize(data2, path, key);
      };
    } else {
      obj.initialValue = initialValue;
    }
    return obj;
  };
}
function get(obj, path) {
  return path.split(".").reduce((carry, segment) => carry[segment], obj);
}
function set(obj, path, value) {
  if (typeof path === "string")
    path = path.split(".");
  if (path.length === 1)
    obj[path[0]] = value;
  else if (path.length === 0)
    throw error;
  else {
    if (obj[path[0]])
      return set(obj[path[0]], path.slice(1), value);
    else {
      obj[path[0]] = {};
      return set(obj[path[0]], path.slice(1), value);
    }
  }
}

// packages/alpinejs/src/magics.js
var magics = {};
function magic(name, callback) {
  magics[name] = callback;
}
function injectMagics(obj, el) {
  Object.entries(magics).forEach(([name, callback]) => {
    let memoizedUtilities = null;
    function getUtilities() {
      if (memoizedUtilities) {
        return memoizedUtilities;
      } else {
        let [utilities, cleanup] = getElementBoundUtilities(el);
        memoizedUtilities = { interceptor, ...utilities };
        onElRemoved(el, cleanup);
        return memoizedUtilities;
      }
    }
    Object.defineProperty(obj, `$${name}`, {
      get() {
        return callback(el, getUtilities());
      },
      enumerable: false
    });
  });
  return obj;
}

// packages/alpinejs/src/utils/error.js
function tryCatch(el, expression, callback, ...args) {
  try {
    return callback(...args);
  } catch (e) {
    handleError(e, el, expression);
  }
}
function handleError(error2, el, expression = void 0) {
  Object.assign(error2, { el, expression });
  console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
  setTimeout(() => {
    throw error2;
  }, 0);
}

// packages/alpinejs/src/evaluator.js
var shouldAutoEvaluateFunctions = true;
function dontAutoEvaluateFunctions(callback) {
  let cache = shouldAutoEvaluateFunctions;
  shouldAutoEvaluateFunctions = false;
  let result = callback();
  shouldAutoEvaluateFunctions = cache;
  return result;
}
function evaluate(el, expression, extras = {}) {
  let result;
  evaluateLater(el, expression)((value) => result = value, extras);
  return result;
}
function evaluateLater(...args) {
  return theEvaluatorFunction(...args);
}
var theEvaluatorFunction = normalEvaluator;
function setEvaluator(newEvaluator) {
  theEvaluatorFunction = newEvaluator;
}
function normalEvaluator(el, expression) {
  let overriddenMagics = {};
  injectMagics(overriddenMagics, el);
  let dataStack = [overriddenMagics, ...closestDataStack(el)];
  let evaluator = typeof expression === "function" ? generateEvaluatorFromFunction(dataStack, expression) : generateEvaluatorFromString(dataStack, expression, el);
  return tryCatch.bind(null, el, expression, evaluator);
}
function generateEvaluatorFromFunction(dataStack, func) {
  return (receiver = () => {
  }, { scope: scope2 = {}, params = [] } = {}) => {
    let result = func.apply(mergeProxies([scope2, ...dataStack]), params);
    runIfTypeOfFunction(receiver, result);
  };
}
var evaluatorMemo = {};
function generateFunctionFromString(expression, el) {
  if (evaluatorMemo[expression]) {
    return evaluatorMemo[expression];
  }
  let AsyncFunction = Object.getPrototypeOf(async function() {
  }).constructor;
  let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression.trim()) || /^(let|const)\s/.test(expression.trim()) ? `(async()=>{ ${expression} })()` : expression;
  const safeAsyncFunction = () => {
    try {
      let func2 = new AsyncFunction(
        ["__self", "scope"],
        `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`
      );
      Object.defineProperty(func2, "name", {
        value: `[Alpine] ${expression}`
      });
      return func2;
    } catch (error2) {
      handleError(error2, el, expression);
      return Promise.resolve();
    }
  };
  let func = safeAsyncFunction();
  evaluatorMemo[expression] = func;
  return func;
}
function generateEvaluatorFromString(dataStack, expression, el) {
  let func = generateFunctionFromString(expression, el);
  return (receiver = () => {
  }, { scope: scope2 = {}, params = [] } = {}) => {
    func.result = void 0;
    func.finished = false;
    let completeScope = mergeProxies([scope2, ...dataStack]);
    if (typeof func === "function") {
      let promise = func(func, completeScope).catch((error2) => handleError(error2, el, expression));
      if (func.finished) {
        runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
        func.result = void 0;
      } else {
        promise.then((result) => {
          runIfTypeOfFunction(receiver, result, completeScope, params, el);
        }).catch((error2) => handleError(error2, el, expression)).finally(() => func.result = void 0);
      }
    }
  };
}
function runIfTypeOfFunction(receiver, value, scope2, params, el) {
  if (shouldAutoEvaluateFunctions && typeof value === "function") {
    let result = value.apply(scope2, params);
    if (result instanceof Promise) {
      result.then((i) => runIfTypeOfFunction(receiver, i, scope2, params)).catch((error2) => handleError(error2, el, value));
    } else {
      receiver(result);
    }
  } else if (typeof value === "object" && value instanceof Promise) {
    value.then((i) => receiver(i));
  } else {
    receiver(value);
  }
}

// packages/alpinejs/src/directives.js
var prefixAsString = "x-";
function prefix(subject = "") {
  return prefixAsString + subject;
}
function setPrefix(newPrefix) {
  prefixAsString = newPrefix;
}
var directiveHandlers = {};
function directive(name, callback) {
  directiveHandlers[name] = callback;
  return {
    before(directive2) {
      if (!directiveHandlers[directive2]) {
        console.warn(
          "Cannot find directive `${directive}`. `${name}` will use the default order of execution"
        );
        return;
      }
      const pos = directiveOrder.indexOf(directive2);
      directiveOrder.splice(pos >= 0 ? pos : directiveOrder.indexOf("DEFAULT"), 0, name);
    }
  };
}
function directives(el, attributes, originalAttributeOverride) {
  attributes = Array.from(attributes);
  if (el._x_virtualDirectives) {
    let vAttributes = Object.entries(el._x_virtualDirectives).map(([name, value]) => ({ name, value }));
    let staticAttributes = attributesOnly(vAttributes);
    vAttributes = vAttributes.map((attribute) => {
      if (staticAttributes.find((attr) => attr.name === attribute.name)) {
        return {
          name: `x-bind:${attribute.name}`,
          value: `"${attribute.value}"`
        };
      }
      return attribute;
    });
    attributes = attributes.concat(vAttributes);
  }
  let transformedAttributeMap = {};
  let directives2 = attributes.map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
  return directives2.map((directive2) => {
    return getDirectiveHandler(el, directive2);
  });
}
function attributesOnly(attributes) {
  return Array.from(attributes).map(toTransformedAttributes()).filter((attr) => !outNonAlpineAttributes(attr));
}
var isDeferringHandlers = false;
var directiveHandlerStacks = /* @__PURE__ */ new Map();
var currentHandlerStackKey = Symbol();
function deferHandlingDirectives(callback) {
  isDeferringHandlers = true;
  let key = Symbol();
  currentHandlerStackKey = key;
  directiveHandlerStacks.set(key, []);
  let flushHandlers = () => {
    while (directiveHandlerStacks.get(key).length)
      directiveHandlerStacks.get(key).shift()();
    directiveHandlerStacks.delete(key);
  };
  let stopDeferring = () => {
    isDeferringHandlers = false;
    flushHandlers();
  };
  callback(flushHandlers);
  stopDeferring();
}
function getElementBoundUtilities(el) {
  let cleanups = [];
  let cleanup = (callback) => cleanups.push(callback);
  let [effect3, cleanupEffect] = elementBoundEffect(el);
  cleanups.push(cleanupEffect);
  let utilities = {
    Alpine: alpine_default,
    effect: effect3,
    cleanup,
    evaluateLater: evaluateLater.bind(evaluateLater, el),
    evaluate: evaluate.bind(evaluate, el)
  };
  let doCleanup = () => cleanups.forEach((i) => i());
  return [utilities, doCleanup];
}
function getDirectiveHandler(el, directive2) {
  let noop = () => {
  };
  let handler4 = directiveHandlers[directive2.type] || noop;
  let [utilities, cleanup] = getElementBoundUtilities(el);
  onAttributeRemoved(el, directive2.original, cleanup);
  let fullHandler = () => {
    if (el._x_ignore || el._x_ignoreSelf)
      return;
    handler4.inline && handler4.inline(el, directive2, utilities);
    handler4 = handler4.bind(handler4, el, directive2, utilities);
    isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler4) : handler4();
  };
  fullHandler.runCleanups = cleanup;
  return fullHandler;
}
var startingWith = (subject, replacement) => ({ name, value }) => {
  if (name.startsWith(subject))
    name = name.replace(subject, replacement);
  return { name, value };
};
var into = (i) => i;
function toTransformedAttributes(callback = () => {
}) {
  return ({ name, value }) => {
    let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform) => {
      return transform(carry);
    }, { name, value });
    if (newName !== name)
      callback(newName, name);
    return { name: newName, value: newValue };
  };
}
var attributeTransformers = [];
function mapAttributes(callback) {
  attributeTransformers.push(callback);
}
function outNonAlpineAttributes({ name }) {
  return alpineAttributeRegex().test(name);
}
var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
  return ({ name, value }) => {
    let typeMatch = name.match(alpineAttributeRegex());
    let valueMatch = name.match(/:([a-zA-Z0-9\-_:]+)/);
    let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
    let original = originalAttributeOverride || transformedAttributeMap[name] || name;
    return {
      type: typeMatch ? typeMatch[1] : null,
      value: valueMatch ? valueMatch[1] : null,
      modifiers: modifiers.map((i) => i.replace(".", "")),
      expression: value,
      original
    };
  };
}
var DEFAULT = "DEFAULT";
var directiveOrder = [
  "ignore",
  "ref",
  "data",
  "id",
  "anchor",
  "bind",
  "init",
  "for",
  "model",
  "modelable",
  "transition",
  "show",
  "if",
  DEFAULT,
  "teleport"
];
function byPriority(a, b) {
  let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
  let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
  return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
}

// packages/alpinejs/src/nextTick.js
var tickStack = [];
var isHolding = false;
function nextTick(callback = () => {
}) {
  queueMicrotask(() => {
    isHolding || setTimeout(() => {
      releaseNextTicks();
    });
  });
  return new Promise((res) => {
    tickStack.push(() => {
      callback();
      res();
    });
  });
}
function releaseNextTicks() {
  isHolding = false;
  while (tickStack.length)
    tickStack.shift()();
}
function holdNextTicks() {
  isHolding = true;
}

// packages/alpinejs/src/utils/classes.js
function setClasses(el, value) {
  if (Array.isArray(value)) {
    return setClassesFromString(el, value.join(" "));
  } else if (typeof value === "object" && value !== null) {
    return setClassesFromObject(el, value);
  } else if (typeof value === "function") {
    return setClasses(el, value());
  }
  return setClassesFromString(el, value);
}
function setClassesFromString(el, classString) {
  let split = (classString2) => classString2.split(" ").filter(Boolean);
  let missingClasses = (classString2) => classString2.split(" ").filter((i) => !el.classList.contains(i)).filter(Boolean);
  let addClassesAndReturnUndo = (classes) => {
    el.classList.add(...classes);
    return () => {
      el.classList.remove(...classes);
    };
  };
  classString = classString === true ? classString = "" : classString || "";
  return addClassesAndReturnUndo(missingClasses(classString));
}
function setClassesFromObject(el, classObject) {
  let split = (classString) => classString.split(" ").filter(Boolean);
  let forAdd = Object.entries(classObject).flatMap(([classString, bool]) => bool ? split(classString) : false).filter(Boolean);
  let forRemove = Object.entries(classObject).flatMap(([classString, bool]) => !bool ? split(classString) : false).filter(Boolean);
  let added = [];
  let removed = [];
  forRemove.forEach((i) => {
    if (el.classList.contains(i)) {
      el.classList.remove(i);
      removed.push(i);
    }
  });
  forAdd.forEach((i) => {
    if (!el.classList.contains(i)) {
      el.classList.add(i);
      added.push(i);
    }
  });
  return () => {
    removed.forEach((i) => el.classList.add(i));
    added.forEach((i) => el.classList.remove(i));
  };
}

// packages/alpinejs/src/utils/styles.js
function setStyles(el, value) {
  if (typeof value === "object" && value !== null) {
    return setStylesFromObject(el, value);
  }
  return setStylesFromString(el, value);
}
function setStylesFromObject(el, value) {
  let previousStyles = {};
  Object.entries(value).forEach(([key, value2]) => {
    previousStyles[key] = el.style[key];
    if (!key.startsWith("--")) {
      key = kebabCase(key);
    }
    el.style.setProperty(key, value2);
  });
  setTimeout(() => {
    if (el.style.length === 0) {
      el.removeAttribute("style");
    }
  });
  return () => {
    setStyles(el, previousStyles);
  };
}
function setStylesFromString(el, value) {
  let cache = el.getAttribute("style", value);
  el.setAttribute("style", value);
  return () => {
    el.setAttribute("style", cache || "");
  };
}
function kebabCase(subject) {
  return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

// packages/alpinejs/src/utils/once.js
function once(callback, fallback = () => {
}) {
  let called = false;
  return function() {
    if (!called) {
      called = true;
      callback.apply(this, arguments);
    } else {
      fallback.apply(this, arguments);
    }
  };
}

// packages/alpinejs/src/directives/x-transition.js
directive("transition", (el, { value, modifiers, expression }, { evaluate: evaluate2 }) => {
  if (typeof expression === "function")
    expression = evaluate2(expression);
  if (expression === false)
    return;
  if (!expression || typeof expression === "boolean") {
    registerTransitionsFromHelper(el, modifiers, value);
  } else {
    registerTransitionsFromClassString(el, expression, value);
  }
});
function registerTransitionsFromClassString(el, classString, stage) {
  registerTransitionObject(el, setClasses, "");
  let directiveStorageMap = {
    "enter": (classes) => {
      el._x_transition.enter.during = classes;
    },
    "enter-start": (classes) => {
      el._x_transition.enter.start = classes;
    },
    "enter-end": (classes) => {
      el._x_transition.enter.end = classes;
    },
    "leave": (classes) => {
      el._x_transition.leave.during = classes;
    },
    "leave-start": (classes) => {
      el._x_transition.leave.start = classes;
    },
    "leave-end": (classes) => {
      el._x_transition.leave.end = classes;
    }
  };
  directiveStorageMap[stage](classString);
}
function registerTransitionsFromHelper(el, modifiers, stage) {
  registerTransitionObject(el, setStyles);
  let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
  let transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
  let transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);
  if (modifiers.includes("in") && !doesntSpecify) {
    modifiers = modifiers.filter((i, index) => index < modifiers.indexOf("out"));
  }
  if (modifiers.includes("out") && !doesntSpecify) {
    modifiers = modifiers.filter((i, index) => index > modifiers.indexOf("out"));
  }
  let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
  let wantsOpacity = wantsAll || modifiers.includes("opacity");
  let wantsScale = wantsAll || modifiers.includes("scale");
  let opacityValue = wantsOpacity ? 0 : 1;
  let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
  let delay = modifierValue(modifiers, "delay", 0) / 1e3;
  let origin = modifierValue(modifiers, "origin", "center");
  let property = "opacity, transform";
  let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
  let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
  let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
  if (transitioningIn) {
    el._x_transition.enter.during = {
      transformOrigin: origin,
      transitionDelay: `${delay}s`,
      transitionProperty: property,
      transitionDuration: `${durationIn}s`,
      transitionTimingFunction: easing
    };
    el._x_transition.enter.start = {
      opacity: opacityValue,
      transform: `scale(${scaleValue})`
    };
    el._x_transition.enter.end = {
      opacity: 1,
      transform: `scale(1)`
    };
  }
  if (transitioningOut) {
    el._x_transition.leave.during = {
      transformOrigin: origin,
      transitionDelay: `${delay}s`,
      transitionProperty: property,
      transitionDuration: `${durationOut}s`,
      transitionTimingFunction: easing
    };
    el._x_transition.leave.start = {
      opacity: 1,
      transform: `scale(1)`
    };
    el._x_transition.leave.end = {
      opacity: opacityValue,
      transform: `scale(${scaleValue})`
    };
  }
}
function registerTransitionObject(el, setFunction, defaultValue = {}) {
  if (!el._x_transition)
    el._x_transition = {
      enter: { during: defaultValue, start: defaultValue, end: defaultValue },
      leave: { during: defaultValue, start: defaultValue, end: defaultValue },
      in(before = () => {
      }, after = () => {
      }) {
        transition(el, setFunction, {
          during: this.enter.during,
          start: this.enter.start,
          end: this.enter.end
        }, before, after);
      },
      out(before = () => {
      }, after = () => {
      }) {
        transition(el, setFunction, {
          during: this.leave.during,
          start: this.leave.start,
          end: this.leave.end
        }, before, after);
      }
    };
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
  const nextTick2 = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
  let clickAwayCompatibleShow = () => nextTick2(show);
  if (value) {
    if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) {
      el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
    } else {
      el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
    }
    return;
  }
  el._x_hidePromise = el._x_transition ? new Promise((resolve, reject) => {
    el._x_transition.out(() => {
    }, () => resolve(hide));
    el._x_transitioning && el._x_transitioning.beforeCancel(() => reject({ isFromCancelledTransition: true }));
  }) : Promise.resolve(hide);
  queueMicrotask(() => {
    let closest = closestHide(el);
    if (closest) {
      if (!closest._x_hideChildren)
        closest._x_hideChildren = [];
      closest._x_hideChildren.push(el);
    } else {
      nextTick2(() => {
        let hideAfterChildren = (el2) => {
          let carry = Promise.all([
            el2._x_hidePromise,
            ...(el2._x_hideChildren || []).map(hideAfterChildren)
          ]).then(([i]) => i());
          delete el2._x_hidePromise;
          delete el2._x_hideChildren;
          return carry;
        };
        hideAfterChildren(el).catch((e) => {
          if (!e.isFromCancelledTransition)
            throw e;
        });
      });
    }
  });
};
function closestHide(el) {
  let parent = el.parentNode;
  if (!parent)
    return;
  return parent._x_hidePromise ? parent : closestHide(parent);
}
function transition(el, setFunction, { during, start: start2, end } = {}, before = () => {
}, after = () => {
}) {
  if (el._x_transitioning)
    el._x_transitioning.cancel();
  if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
    before();
    after();
    return;
  }
  let undoStart, undoDuring, undoEnd;
  performTransition(el, {
    start() {
      undoStart = setFunction(el, start2);
    },
    during() {
      undoDuring = setFunction(el, during);
    },
    before,
    end() {
      undoStart();
      undoEnd = setFunction(el, end);
    },
    after,
    cleanup() {
      undoDuring();
      undoEnd();
    }
  });
}
function performTransition(el, stages) {
  let interrupted, reachedBefore, reachedEnd;
  let finish = once(() => {
    mutateDom(() => {
      interrupted = true;
      if (!reachedBefore)
        stages.before();
      if (!reachedEnd) {
        stages.end();
        releaseNextTicks();
      }
      stages.after();
      if (el.isConnected)
        stages.cleanup();
      delete el._x_transitioning;
    });
  });
  el._x_transitioning = {
    beforeCancels: [],
    beforeCancel(callback) {
      this.beforeCancels.push(callback);
    },
    cancel: once(function() {
      while (this.beforeCancels.length) {
        this.beforeCancels.shift()();
      }
      ;
      finish();
    }),
    finish
  };
  mutateDom(() => {
    stages.start();
    stages.during();
  });
  holdNextTicks();
  requestAnimationFrame(() => {
    if (interrupted)
      return;
    let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
    let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
    if (duration === 0)
      duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
    mutateDom(() => {
      stages.before();
    });
    reachedBefore = true;
    requestAnimationFrame(() => {
      if (interrupted)
        return;
      mutateDom(() => {
        stages.end();
      });
      releaseNextTicks();
      setTimeout(el._x_transitioning.finish, duration + delay);
      reachedEnd = true;
    });
  });
}
function modifierValue(modifiers, key, fallback) {
  if (modifiers.indexOf(key) === -1)
    return fallback;
  const rawValue = modifiers[modifiers.indexOf(key) + 1];
  if (!rawValue)
    return fallback;
  if (key === "scale") {
    if (isNaN(rawValue))
      return fallback;
  }
  if (key === "duration" || key === "delay") {
    let match = rawValue.match(/([0-9]+)ms/);
    if (match)
      return match[1];
  }
  if (key === "origin") {
    if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
      return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
    }
  }
  return rawValue;
}

// packages/alpinejs/src/clone.js
var isCloning = false;
function skipDuringClone(callback, fallback = () => {
}) {
  return (...args) => isCloning ? fallback(...args) : callback(...args);
}
function onlyDuringClone(callback) {
  return (...args) => isCloning && callback(...args);
}
var interceptors = [];
function interceptClone(callback) {
  interceptors.push(callback);
}
function cloneNode(from, to) {
  interceptors.forEach((i) => i(from, to));
  isCloning = true;
  dontRegisterReactiveSideEffects(() => {
    initTree(to, (el, callback) => {
      callback(el, () => {
      });
    });
  });
  isCloning = false;
}
var isCloningLegacy = false;
function clone(oldEl, newEl) {
  if (!newEl._x_dataStack)
    newEl._x_dataStack = oldEl._x_dataStack;
  isCloning = true;
  isCloningLegacy = true;
  dontRegisterReactiveSideEffects(() => {
    cloneTree(newEl);
  });
  isCloning = false;
  isCloningLegacy = false;
}
function cloneTree(el) {
  let hasRunThroughFirstEl = false;
  let shallowWalker = (el2, callback) => {
    walk(el2, (el3, skip) => {
      if (hasRunThroughFirstEl && isRoot(el3))
        return skip();
      hasRunThroughFirstEl = true;
      callback(el3, skip);
    });
  };
  initTree(el, shallowWalker);
}
function dontRegisterReactiveSideEffects(callback) {
  let cache = effect;
  overrideEffect((callback2, el) => {
    let storedEffect = cache(callback2);
    release(storedEffect);
    return () => {
    };
  });
  callback();
  overrideEffect(cache);
}

// packages/alpinejs/src/utils/bind.js
function bind(el, name, value, modifiers = []) {
  if (!el._x_bindings)
    el._x_bindings = reactive({});
  el._x_bindings[name] = value;
  name = modifiers.includes("camel") ? camelCase(name) : name;
  switch (name) {
    case "value":
      bindInputValue(el, value);
      break;
    case "style":
      bindStyles(el, value);
      break;
    case "class":
      bindClasses(el, value);
      break;
    case "selected":
    case "checked":
      bindAttributeAndProperty(el, name, value);
      break;
    default:
      bindAttribute(el, name, value);
      break;
  }
}
function bindInputValue(el, value) {
  if (el.type === "radio") {
    if (el.attributes.value === void 0) {
      el.value = value;
    }
    if (window.fromModel) {
      if (typeof value === "boolean") {
        el.checked = safeParseBoolean(el.value) === value;
      } else {
        el.checked = checkedAttrLooseCompare(el.value, value);
      }
    }
  } else if (el.type === "checkbox") {
    if (Number.isInteger(value)) {
      el.value = value;
    } else if (!Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
      el.value = String(value);
    } else {
      if (Array.isArray(value)) {
        el.checked = value.some((val) => checkedAttrLooseCompare(val, el.value));
      } else {
        el.checked = !!value;
      }
    }
  } else if (el.tagName === "SELECT") {
    updateSelect(el, value);
  } else {
    if (el.value === value)
      return;
    el.value = value === void 0 ? "" : value;
  }
}
function bindClasses(el, value) {
  if (el._x_undoAddedClasses)
    el._x_undoAddedClasses();
  el._x_undoAddedClasses = setClasses(el, value);
}
function bindStyles(el, value) {
  if (el._x_undoAddedStyles)
    el._x_undoAddedStyles();
  el._x_undoAddedStyles = setStyles(el, value);
}
function bindAttributeAndProperty(el, name, value) {
  bindAttribute(el, name, value);
  setPropertyIfChanged(el, name, value);
}
function bindAttribute(el, name, value) {
  if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
    el.removeAttribute(name);
  } else {
    if (isBooleanAttr(name))
      value = name;
    setIfChanged(el, name, value);
  }
}
function setIfChanged(el, attrName, value) {
  if (el.getAttribute(attrName) != value) {
    el.setAttribute(attrName, value);
  }
}
function setPropertyIfChanged(el, propName, value) {
  if (el[propName] !== value) {
    el[propName] = value;
  }
}
function updateSelect(el, value) {
  const arrayWrappedValue = [].concat(value).map((value2) => {
    return value2 + "";
  });
  Array.from(el.options).forEach((option) => {
    option.selected = arrayWrappedValue.includes(option.value);
  });
}
function camelCase(subject) {
  return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
}
function checkedAttrLooseCompare(valueA, valueB) {
  return valueA == valueB;
}
function safeParseBoolean(rawValue) {
  if ([1, "1", "true", "on", "yes", true].includes(rawValue)) {
    return true;
  }
  if ([0, "0", "false", "off", "no", false].includes(rawValue)) {
    return false;
  }
  return rawValue ? Boolean(rawValue) : null;
}
function isBooleanAttr(attrName) {
  const booleanAttributes = [
    "disabled",
    "checked",
    "required",
    "readonly",
    "hidden",
    "open",
    "selected",
    "autofocus",
    "itemscope",
    "multiple",
    "novalidate",
    "allowfullscreen",
    "allowpaymentrequest",
    "formnovalidate",
    "autoplay",
    "controls",
    "loop",
    "muted",
    "playsinline",
    "default",
    "ismap",
    "reversed",
    "async",
    "defer",
    "nomodule"
  ];
  return booleanAttributes.includes(attrName);
}
function attributeShouldntBePreservedIfFalsy(name) {
  return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(name);
}
function getBinding(el, name, fallback) {
  if (el._x_bindings && el._x_bindings[name] !== void 0)
    return el._x_bindings[name];
  return getAttributeBinding(el, name, fallback);
}
function extractProp(el, name, fallback, extract = true) {
  if (el._x_bindings && el._x_bindings[name] !== void 0)
    return el._x_bindings[name];
  if (el._x_inlineBindings && el._x_inlineBindings[name] !== void 0) {
    let binding = el._x_inlineBindings[name];
    binding.extract = extract;
    return dontAutoEvaluateFunctions(() => {
      return evaluate(el, binding.expression);
    });
  }
  return getAttributeBinding(el, name, fallback);
}
function getAttributeBinding(el, name, fallback) {
  let attr = el.getAttribute(name);
  if (attr === null)
    return typeof fallback === "function" ? fallback() : fallback;
  if (attr === "")
    return true;
  if (isBooleanAttr(name)) {
    return !![name, "true"].includes(attr);
  }
  return attr;
}

// packages/alpinejs/src/utils/debounce.js
function debounce(func, wait) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// packages/alpinejs/src/utils/throttle.js
function throttle(func, limit) {
  let inThrottle;
  return function() {
    let context = this, args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// packages/alpinejs/src/entangle.js
function entangle({ get: outerGet, set: outerSet }, { get: innerGet, set: innerSet }) {
  let firstRun = true;
  let outerHash;
  let reference = effect(() => {
    const outer = outerGet();
    const inner = innerGet();
    if (firstRun) {
      innerSet(cloneIfObject(outer));
      firstRun = false;
      outerHash = JSON.stringify(outer);
    } else {
      const outerHashLatest = JSON.stringify(outer);
      if (outerHashLatest !== outerHash) {
        innerSet(cloneIfObject(outer));
        outerHash = outerHashLatest;
      } else {
        outerSet(cloneIfObject(inner));
        outerHash = JSON.stringify(inner);
      }
    }
    JSON.stringify(innerGet());
    JSON.stringify(outerGet());
  });
  return () => {
    release(reference);
  };
}
function cloneIfObject(value) {
  return typeof value === "object" ? JSON.parse(JSON.stringify(value)) : value;
}

// packages/alpinejs/src/plugin.js
function plugin(callback) {
  let callbacks = Array.isArray(callback) ? callback : [callback];
  callbacks.forEach((i) => i(alpine_default));
}

// packages/alpinejs/src/store.js
var stores = {};
var isReactive = false;
function store(name, value) {
  if (!isReactive) {
    stores = reactive(stores);
    isReactive = true;
  }
  if (value === void 0) {
    return stores[name];
  }
  stores[name] = value;
  if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
    stores[name].init();
  }
  initInterceptors2(stores[name]);
}
function getStores() {
  return stores;
}

// packages/alpinejs/src/binds.js
var binds = {};
function bind2(name, bindings) {
  let getBindings = typeof bindings !== "function" ? () => bindings : bindings;
  if (name instanceof Element) {
    return applyBindingsObject(name, getBindings());
  } else {
    binds[name] = getBindings;
  }
  return () => {
  };
}
function injectBindingProviders(obj) {
  Object.entries(binds).forEach(([name, callback]) => {
    Object.defineProperty(obj, name, {
      get() {
        return (...args) => {
          return callback(...args);
        };
      }
    });
  });
  return obj;
}
function applyBindingsObject(el, obj, original) {
  let cleanupRunners = [];
  while (cleanupRunners.length)
    cleanupRunners.pop()();
  let attributes = Object.entries(obj).map(([name, value]) => ({ name, value }));
  let staticAttributes = attributesOnly(attributes);
  attributes = attributes.map((attribute) => {
    if (staticAttributes.find((attr) => attr.name === attribute.name)) {
      return {
        name: `x-bind:${attribute.name}`,
        value: `"${attribute.value}"`
      };
    }
    return attribute;
  });
  directives(el, attributes, original).map((handle) => {
    cleanupRunners.push(handle.runCleanups);
    handle();
  });
  return () => {
    while (cleanupRunners.length)
      cleanupRunners.pop()();
  };
}

// packages/alpinejs/src/datas.js
var datas = {};
function data(name, callback) {
  datas[name] = callback;
}
function injectDataProviders(obj, context) {
  Object.entries(datas).forEach(([name, callback]) => {
    Object.defineProperty(obj, name, {
      get() {
        return (...args) => {
          return callback.bind(context)(...args);
        };
      },
      enumerable: false
    });
  });
  return obj;
}

// packages/alpinejs/src/alpine.js
var Alpine = {
  get reactive() {
    return reactive;
  },
  get release() {
    return release;
  },
  get effect() {
    return effect;
  },
  get raw() {
    return raw;
  },
  version: "3.13.3",
  flushAndStopDeferringMutations,
  dontAutoEvaluateFunctions,
  disableEffectScheduling,
  startObservingMutations,
  stopObservingMutations,
  setReactivityEngine,
  onAttributeRemoved,
  onAttributesAdded,
  closestDataStack,
  skipDuringClone,
  onlyDuringClone,
  addRootSelector,
  addInitSelector,
  interceptClone,
  addScopeToNode,
  deferMutations,
  mapAttributes,
  evaluateLater,
  interceptInit,
  setEvaluator,
  mergeProxies,
  extractProp,
  findClosest,
  onElRemoved,
  closestRoot,
  destroyTree,
  interceptor,
  // INTERNAL: not public API and is subject to change without major release.
  transition,
  // INTERNAL
  setStyles,
  // INTERNAL
  mutateDom,
  directive,
  entangle,
  throttle,
  debounce,
  evaluate,
  initTree,
  nextTick,
  prefixed: prefix,
  prefix: setPrefix,
  plugin,
  magic,
  store,
  start,
  clone,
  // INTERNAL
  cloneNode,
  // INTERNAL
  bound: getBinding,
  $data: scope,
  walk,
  data,
  bind: bind2
};
var alpine_default = Alpine;

// packages/alpinejs/src/index.js
var import_reactivity9 = __toESM(require_reactivity());

// packages/alpinejs/src/magics/$nextTick.js
magic("nextTick", () => nextTick);

// packages/alpinejs/src/magics/$dispatch.js
magic("dispatch", (el) => dispatch.bind(dispatch, el));

// packages/alpinejs/src/magics/$watch.js
magic("watch", (el, { evaluateLater: evaluateLater2, effect: effect3 }) => (key, callback) => {
  let evaluate2 = evaluateLater2(key);
  let firstTime = true;
  let oldValue;
  let effectReference = effect3(() => evaluate2((value) => {
    JSON.stringify(value);
    if (!firstTime) {
      queueMicrotask(() => {
        callback(value, oldValue);
        oldValue = value;
      });
    } else {
      oldValue = value;
    }
    firstTime = false;
  }));
  el._x_effects.delete(effectReference);
});

// packages/alpinejs/src/magics/$store.js
magic("store", getStores);

// packages/alpinejs/src/magics/$data.js
magic("data", (el) => scope(el));

// packages/alpinejs/src/magics/$root.js
magic("root", (el) => closestRoot(el));

// packages/alpinejs/src/magics/$refs.js
magic("refs", (el) => {
  if (el._x_refs_proxy)
    return el._x_refs_proxy;
  el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
  return el._x_refs_proxy;
});
function getArrayOfRefObject(el) {
  let refObjects = [];
  let currentEl = el;
  while (currentEl) {
    if (currentEl._x_refs)
      refObjects.push(currentEl._x_refs);
    currentEl = currentEl.parentNode;
  }
  return refObjects;
}

// packages/alpinejs/src/ids.js
var globalIdMemo = {};
function findAndIncrementId(name) {
  if (!globalIdMemo[name])
    globalIdMemo[name] = 0;
  return ++globalIdMemo[name];
}
function closestIdRoot(el, name) {
  return findClosest(el, (element) => {
    if (element._x_ids && element._x_ids[name])
      return true;
  });
}
function setIdRoot(el, name) {
  if (!el._x_ids)
    el._x_ids = {};
  if (!el._x_ids[name])
    el._x_ids[name] = findAndIncrementId(name);
}

// packages/alpinejs/src/magics/$id.js
magic("id", (el) => (name, key = null) => {
  let root = closestIdRoot(el, name);
  let id = root ? root._x_ids[name] : findAndIncrementId(name);
  return key ? `${name}-${id}-${key}` : `${name}-${id}`;
});

// packages/alpinejs/src/magics/$el.js
magic("el", (el) => el);

// packages/alpinejs/src/magics/index.js
warnMissingPluginMagic("Focus", "focus", "focus");
warnMissingPluginMagic("Persist", "persist", "persist");
function warnMissingPluginMagic(name, magicName, slug) {
  magic(magicName, (el) => warn(`You can't use [$${magicName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
}

// packages/alpinejs/src/directives/x-modelable.js
directive("modelable", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2, cleanup }) => {
  let func = evaluateLater2(expression);
  let innerGet = () => {
    let result;
    func((i) => result = i);
    return result;
  };
  let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
  let innerSet = (val) => evaluateInnerSet(() => {
  }, { scope: { "__placeholder": val } });
  let initialValue = innerGet();
  innerSet(initialValue);
  queueMicrotask(() => {
    if (!el._x_model)
      return;
    el._x_removeModelListeners["default"]();
    let outerGet = el._x_model.get;
    let outerSet = el._x_model.set;
    let releaseEntanglement = entangle(
      {
        get() {
          return outerGet();
        },
        set(value) {
          outerSet(value);
        }
      },
      {
        get() {
          return innerGet();
        },
        set(value) {
          innerSet(value);
        }
      }
    );
    cleanup(releaseEntanglement);
  });
});

// packages/alpinejs/src/directives/x-teleport.js
directive("teleport", (el, { modifiers, expression }, { cleanup }) => {
  if (el.tagName.toLowerCase() !== "template")
    warn("x-teleport can only be used on a <template> tag", el);
  let target = getTarget(expression);
  let clone2 = el.content.cloneNode(true).firstElementChild;
  el._x_teleport = clone2;
  clone2._x_teleportBack = el;
  el.setAttribute("data-teleport-template", true);
  clone2.setAttribute("data-teleport-target", true);
  if (el._x_forwardEvents) {
    el._x_forwardEvents.forEach((eventName) => {
      clone2.addEventListener(eventName, (e) => {
        e.stopPropagation();
        el.dispatchEvent(new e.constructor(e.type, e));
      });
    });
  }
  addScopeToNode(clone2, {}, el);
  let placeInDom = (clone3, target2, modifiers2) => {
    if (modifiers2.includes("prepend")) {
      target2.parentNode.insertBefore(clone3, target2);
    } else if (modifiers2.includes("append")) {
      target2.parentNode.insertBefore(clone3, target2.nextSibling);
    } else {
      target2.appendChild(clone3);
    }
  };
  mutateDom(() => {
    placeInDom(clone2, target, modifiers);
    initTree(clone2);
    clone2._x_ignore = true;
  });
  el._x_teleportPutBack = () => {
    let target2 = getTarget(expression);
    mutateDom(() => {
      placeInDom(el._x_teleport, target2, modifiers);
    });
  };
  cleanup(() => clone2.remove());
});
var teleportContainerDuringClone = document.createElement("div");
function getTarget(expression) {
  let target = skipDuringClone(() => {
    return document.querySelector(expression);
  }, () => {
    return teleportContainerDuringClone;
  })();
  if (!target)
    warn(`Cannot find x-teleport element for selector: "${expression}"`);
  return target;
}

// packages/alpinejs/src/directives/x-ignore.js
var handler = () => {
};
handler.inline = (el, { modifiers }, { cleanup }) => {
  modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
  cleanup(() => {
    modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
  });
};
directive("ignore", handler);

// packages/alpinejs/src/directives/x-effect.js
directive("effect", skipDuringClone((el, { expression }, { effect: effect3 }) => {
  effect3(evaluateLater(el, expression));
}));

// packages/alpinejs/src/utils/on.js
function on(el, event, modifiers, callback) {
  let listenerTarget = el;
  let handler4 = (e) => callback(e);
  let options = {};
  let wrapHandler = (callback2, wrapper) => (e) => wrapper(callback2, e);
  if (modifiers.includes("dot"))
    event = dotSyntax(event);
  if (modifiers.includes("camel"))
    event = camelCase2(event);
  if (modifiers.includes("passive"))
    options.passive = true;
  if (modifiers.includes("capture"))
    options.capture = true;
  if (modifiers.includes("window"))
    listenerTarget = window;
  if (modifiers.includes("document"))
    listenerTarget = document;
  if (modifiers.includes("debounce")) {
    let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
    let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
    handler4 = debounce(handler4, wait);
  }
  if (modifiers.includes("throttle")) {
    let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
    let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
    handler4 = throttle(handler4, wait);
  }
  if (modifiers.includes("prevent"))
    handler4 = wrapHandler(handler4, (next, e) => {
      e.preventDefault();
      next(e);
    });
  if (modifiers.includes("stop"))
    handler4 = wrapHandler(handler4, (next, e) => {
      e.stopPropagation();
      next(e);
    });
  if (modifiers.includes("self"))
    handler4 = wrapHandler(handler4, (next, e) => {
      e.target === el && next(e);
    });
  if (modifiers.includes("away") || modifiers.includes("outside")) {
    listenerTarget = document;
    handler4 = wrapHandler(handler4, (next, e) => {
      if (el.contains(e.target))
        return;
      if (e.target.isConnected === false)
        return;
      if (el.offsetWidth < 1 && el.offsetHeight < 1)
        return;
      if (el._x_isShown === false)
        return;
      next(e);
    });
  }
  if (modifiers.includes("once")) {
    handler4 = wrapHandler(handler4, (next, e) => {
      next(e);
      listenerTarget.removeEventListener(event, handler4, options);
    });
  }
  handler4 = wrapHandler(handler4, (next, e) => {
    if (isKeyEvent(event)) {
      if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
        return;
      }
    }
    next(e);
  });
  listenerTarget.addEventListener(event, handler4, options);
  return () => {
    listenerTarget.removeEventListener(event, handler4, options);
  };
}
function dotSyntax(subject) {
  return subject.replace(/-/g, ".");
}
function camelCase2(subject) {
  return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
}
function isNumeric(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}
function kebabCase2(subject) {
  if ([" ", "_"].includes(
    subject
  ))
    return subject;
  return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
}
function isKeyEvent(event) {
  return ["keydown", "keyup"].includes(event);
}
function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
  let keyModifiers = modifiers.filter((i) => {
    return !["window", "document", "prevent", "stop", "once", "capture"].includes(i);
  });
  if (keyModifiers.includes("debounce")) {
    let debounceIndex = keyModifiers.indexOf("debounce");
    keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (keyModifiers.includes("throttle")) {
    let debounceIndex = keyModifiers.indexOf("throttle");
    keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (keyModifiers.length === 0)
    return false;
  if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0]))
    return false;
  const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
  const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) => keyModifiers.includes(modifier));
  keyModifiers = keyModifiers.filter((i) => !selectedSystemKeyModifiers.includes(i));
  if (selectedSystemKeyModifiers.length > 0) {
    const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier) => {
      if (modifier === "cmd" || modifier === "super")
        modifier = "meta";
      return e[`${modifier}Key`];
    });
    if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
      if (keyToModifiers(e.key).includes(keyModifiers[0]))
        return false;
    }
  }
  return true;
}
function keyToModifiers(key) {
  if (!key)
    return [];
  key = kebabCase2(key);
  let modifierToKeyMap = {
    "ctrl": "control",
    "slash": "/",
    "space": " ",
    "spacebar": " ",
    "cmd": "meta",
    "esc": "escape",
    "up": "arrow-up",
    "down": "arrow-down",
    "left": "arrow-left",
    "right": "arrow-right",
    "period": ".",
    "equal": "=",
    "minus": "-",
    "underscore": "_"
  };
  modifierToKeyMap[key] = key;
  return Object.keys(modifierToKeyMap).map((modifier) => {
    if (modifierToKeyMap[modifier] === key)
      return modifier;
  }).filter((modifier) => modifier);
}

// packages/alpinejs/src/directives/x-model.js
directive("model", (el, { modifiers, expression }, { effect: effect3, cleanup }) => {
  let scopeTarget = el;
  if (modifiers.includes("parent")) {
    scopeTarget = el.parentNode;
  }
  let evaluateGet = evaluateLater(scopeTarget, expression);
  let evaluateSet;
  if (typeof expression === "string") {
    evaluateSet = evaluateLater(scopeTarget, `${expression} = __placeholder`);
  } else if (typeof expression === "function" && typeof expression() === "string") {
    evaluateSet = evaluateLater(scopeTarget, `${expression()} = __placeholder`);
  } else {
    evaluateSet = () => {
    };
  }
  let getValue = () => {
    let result;
    evaluateGet((value) => result = value);
    return isGetterSetter(result) ? result.get() : result;
  };
  let setValue = (value) => {
    let result;
    evaluateGet((value2) => result = value2);
    if (isGetterSetter(result)) {
      result.set(value);
    } else {
      evaluateSet(() => {
      }, {
        scope: { "__placeholder": value }
      });
    }
  };
  if (typeof expression === "string" && el.type === "radio") {
    mutateDom(() => {
      if (!el.hasAttribute("name"))
        el.setAttribute("name", expression);
    });
  }
  var event = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
  let removeListener = isCloning ? () => {
  } : on(el, event, modifiers, (e) => {
    setValue(getInputValue(el, modifiers, e, getValue()));
  });
  if (modifiers.includes("fill")) {
    if ([null, ""].includes(getValue()) || el.type === "checkbox" && Array.isArray(getValue())) {
      el.dispatchEvent(new Event(event, {}));
    }
  }
  if (!el._x_removeModelListeners)
    el._x_removeModelListeners = {};
  el._x_removeModelListeners["default"] = removeListener;
  cleanup(() => el._x_removeModelListeners["default"]());
  if (el.form) {
    let removeResetListener = on(el.form, "reset", [], (e) => {
      nextTick(() => el._x_model && el._x_model.set(el.value));
    });
    cleanup(() => removeResetListener());
  }
  el._x_model = {
    get() {
      return getValue();
    },
    set(value) {
      setValue(value);
    }
  };
  el._x_forceModelUpdate = (value) => {
    if (value === void 0 && typeof expression === "string" && expression.match(/\./))
      value = "";
    window.fromModel = true;
    mutateDom(() => bind(el, "value", value));
    delete window.fromModel;
  };
  effect3(() => {
    let value = getValue();
    if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el))
      return;
    el._x_forceModelUpdate(value);
  });
});
function getInputValue(el, modifiers, event, currentValue) {
  return mutateDom(() => {
    if (event instanceof CustomEvent && event.detail !== void 0)
      return event.detail !== null && event.detail !== void 0 ? event.detail : event.target.value;
    else if (el.type === "checkbox") {
      if (Array.isArray(currentValue)) {
        let newValue = null;
        if (modifiers.includes("number")) {
          newValue = safeParseNumber(event.target.value);
        } else if (modifiers.includes("boolean")) {
          newValue = safeParseBoolean(event.target.value);
        } else {
          newValue = event.target.value;
        }
        return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter((el2) => !checkedAttrLooseCompare2(el2, newValue));
      } else {
        return event.target.checked;
      }
    } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
      if (modifiers.includes("number")) {
        return Array.from(event.target.selectedOptions).map((option) => {
          let rawValue = option.value || option.text;
          return safeParseNumber(rawValue);
        });
      } else if (modifiers.includes("boolean")) {
        return Array.from(event.target.selectedOptions).map((option) => {
          let rawValue = option.value || option.text;
          return safeParseBoolean(rawValue);
        });
      }
      return Array.from(event.target.selectedOptions).map((option) => {
        return option.value || option.text;
      });
    } else {
      if (modifiers.includes("number")) {
        return safeParseNumber(event.target.value);
      } else if (modifiers.includes("boolean")) {
        return safeParseBoolean(event.target.value);
      }
      return modifiers.includes("trim") ? event.target.value.trim() : event.target.value;
    }
  });
}
function safeParseNumber(rawValue) {
  let number = rawValue ? parseFloat(rawValue) : null;
  return isNumeric2(number) ? number : rawValue;
}
function checkedAttrLooseCompare2(valueA, valueB) {
  return valueA == valueB;
}
function isNumeric2(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}
function isGetterSetter(value) {
  return value !== null && typeof value === "object" && typeof value.get === "function" && typeof value.set === "function";
}

// packages/alpinejs/src/directives/x-cloak.js
directive("cloak", (el) => queueMicrotask(() => mutateDom(() => el.removeAttribute(prefix("cloak")))));

// packages/alpinejs/src/directives/x-init.js
addInitSelector(() => `[${prefix("init")}]`);
directive("init", skipDuringClone((el, { expression }, { evaluate: evaluate2 }) => {
  if (typeof expression === "string") {
    return !!expression.trim() && evaluate2(expression, {}, false);
  }
  return evaluate2(expression, {}, false);
}));

// packages/alpinejs/src/directives/x-text.js
directive("text", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
  let evaluate2 = evaluateLater2(expression);
  effect3(() => {
    evaluate2((value) => {
      mutateDom(() => {
        el.textContent = value;
      });
    });
  });
});

// packages/alpinejs/src/directives/x-html.js
directive("html", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
  let evaluate2 = evaluateLater2(expression);
  effect3(() => {
    evaluate2((value) => {
      mutateDom(() => {
        el.innerHTML = value;
        el._x_ignoreSelf = true;
        initTree(el);
        delete el._x_ignoreSelf;
      });
    });
  });
});

// packages/alpinejs/src/directives/x-bind.js
mapAttributes(startingWith(":", into(prefix("bind:"))));
var handler2 = (el, { value, modifiers, expression, original }, { effect: effect3 }) => {
  if (!value) {
    let bindingProviders = {};
    injectBindingProviders(bindingProviders);
    let getBindings = evaluateLater(el, expression);
    getBindings((bindings) => {
      applyBindingsObject(el, bindings, original);
    }, { scope: bindingProviders });
    return;
  }
  if (value === "key")
    return storeKeyForXFor(el, expression);
  if (el._x_inlineBindings && el._x_inlineBindings[value] && el._x_inlineBindings[value].extract) {
    return;
  }
  let evaluate2 = evaluateLater(el, expression);
  effect3(() => evaluate2((result) => {
    if (result === void 0 && typeof expression === "string" && expression.match(/\./)) {
      result = "";
    }
    mutateDom(() => bind(el, value, result, modifiers));
  }));
};
handler2.inline = (el, { value, modifiers, expression }) => {
  if (!value)
    return;
  if (!el._x_inlineBindings)
    el._x_inlineBindings = {};
  el._x_inlineBindings[value] = { expression, extract: false };
};
directive("bind", handler2);
function storeKeyForXFor(el, expression) {
  el._x_keyExpression = expression;
}

// packages/alpinejs/src/directives/x-data.js
addRootSelector(() => `[${prefix("data")}]`);
directive("data", (el, { expression }, { cleanup }) => {
  if (shouldSkipRegisteringDataDuringClone(el))
    return;
  expression = expression === "" ? "{}" : expression;
  let magicContext = {};
  injectMagics(magicContext, el);
  let dataProviderContext = {};
  injectDataProviders(dataProviderContext, magicContext);
  let data2 = evaluate(el, expression, { scope: dataProviderContext });
  if (data2 === void 0 || data2 === true)
    data2 = {};
  injectMagics(data2, el);
  let reactiveData = reactive(data2);
  initInterceptors2(reactiveData);
  let undo = addScopeToNode(el, reactiveData);
  reactiveData["init"] && evaluate(el, reactiveData["init"]);
  cleanup(() => {
    reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
    undo();
  });
});
interceptClone((from, to) => {
  if (from._x_dataStack) {
    to._x_dataStack = from._x_dataStack;
    to.setAttribute("data-has-alpine-state", true);
  }
});
function shouldSkipRegisteringDataDuringClone(el) {
  if (!isCloning)
    return false;
  if (isCloningLegacy)
    return true;
  return el.hasAttribute("data-has-alpine-state");
}

// packages/alpinejs/src/directives/x-show.js
directive("show", (el, { modifiers, expression }, { effect: effect3 }) => {
  let evaluate2 = evaluateLater(el, expression);
  if (!el._x_doHide)
    el._x_doHide = () => {
      mutateDom(() => {
        el.style.setProperty("display", "none", modifiers.includes("important") ? "important" : void 0);
      });
    };
  if (!el._x_doShow)
    el._x_doShow = () => {
      mutateDom(() => {
        if (el.style.length === 1 && el.style.display === "none") {
          el.removeAttribute("style");
        } else {
          el.style.removeProperty("display");
        }
      });
    };
  let hide = () => {
    el._x_doHide();
    el._x_isShown = false;
  };
  let show = () => {
    el._x_doShow();
    el._x_isShown = true;
  };
  let clickAwayCompatibleShow = () => setTimeout(show);
  let toggle = once(
    (value) => value ? show() : hide(),
    (value) => {
      if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
        el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
      } else {
        value ? clickAwayCompatibleShow() : hide();
      }
    }
  );
  let oldValue;
  let firstTime = true;
  effect3(() => evaluate2((value) => {
    if (!firstTime && value === oldValue)
      return;
    if (modifiers.includes("immediate"))
      value ? clickAwayCompatibleShow() : hide();
    toggle(value);
    oldValue = value;
    firstTime = false;
  }));
});

// packages/alpinejs/src/directives/x-for.js
directive("for", (el, { expression }, { effect: effect3, cleanup }) => {
  let iteratorNames = parseForExpression(expression);
  let evaluateItems = evaluateLater(el, iteratorNames.items);
  let evaluateKey = evaluateLater(
    el,
    // the x-bind:key expression is stored for our use instead of evaluated.
    el._x_keyExpression || "index"
  );
  el._x_prevKeys = [];
  el._x_lookup = {};
  effect3(() => loop(el, iteratorNames, evaluateItems, evaluateKey));
  cleanup(() => {
    Object.values(el._x_lookup).forEach((el2) => el2.remove());
    delete el._x_prevKeys;
    delete el._x_lookup;
  });
});
function loop(el, iteratorNames, evaluateItems, evaluateKey) {
  let isObject = (i) => typeof i === "object" && !Array.isArray(i);
  let templateEl = el;
  evaluateItems((items) => {
    if (isNumeric3(items) && items >= 0) {
      items = Array.from(Array(items).keys(), (i) => i + 1);
    }
    if (items === void 0)
      items = [];
    let lookup = el._x_lookup;
    let prevKeys = el._x_prevKeys;
    let scopes = [];
    let keys = [];
    if (isObject(items)) {
      items = Object.entries(items).map(([key, value]) => {
        let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
        evaluateKey((value2) => keys.push(value2), { scope: { index: key, ...scope2 } });
        scopes.push(scope2);
      });
    } else {
      for (let i = 0; i < items.length; i++) {
        let scope2 = getIterationScopeVariables(iteratorNames, items[i], i, items);
        evaluateKey((value) => keys.push(value), { scope: { index: i, ...scope2 } });
        scopes.push(scope2);
      }
    }
    let adds = [];
    let moves = [];
    let removes = [];
    let sames = [];
    for (let i = 0; i < prevKeys.length; i++) {
      let key = prevKeys[i];
      if (keys.indexOf(key) === -1)
        removes.push(key);
    }
    prevKeys = prevKeys.filter((key) => !removes.includes(key));
    let lastKey = "template";
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let prevIndex = prevKeys.indexOf(key);
      if (prevIndex === -1) {
        prevKeys.splice(i, 0, key);
        adds.push([lastKey, i]);
      } else if (prevIndex !== i) {
        let keyInSpot = prevKeys.splice(i, 1)[0];
        let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
        prevKeys.splice(i, 0, keyForSpot);
        prevKeys.splice(prevIndex, 0, keyInSpot);
        moves.push([keyInSpot, keyForSpot]);
      } else {
        sames.push(key);
      }
      lastKey = key;
    }
    for (let i = 0; i < removes.length; i++) {
      let key = removes[i];
      if (!!lookup[key]._x_effects) {
        lookup[key]._x_effects.forEach(dequeueJob);
      }
      lookup[key].remove();
      lookup[key] = null;
      delete lookup[key];
    }
    for (let i = 0; i < moves.length; i++) {
      let [keyInSpot, keyForSpot] = moves[i];
      let elInSpot = lookup[keyInSpot];
      let elForSpot = lookup[keyForSpot];
      let marker = document.createElement("div");
      mutateDom(() => {
        if (!elForSpot)
          warn(`x-for ":key" is undefined or invalid`, templateEl);
        elForSpot.after(marker);
        elInSpot.after(elForSpot);
        elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
        marker.before(elInSpot);
        elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
        marker.remove();
      });
      elForSpot._x_refreshXForScope(scopes[keys.indexOf(keyForSpot)]);
    }
    for (let i = 0; i < adds.length; i++) {
      let [lastKey2, index] = adds[i];
      let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
      if (lastEl._x_currentIfEl)
        lastEl = lastEl._x_currentIfEl;
      let scope2 = scopes[index];
      let key = keys[index];
      let clone2 = document.importNode(templateEl.content, true).firstElementChild;
      let reactiveScope = reactive(scope2);
      addScopeToNode(clone2, reactiveScope, templateEl);
      clone2._x_refreshXForScope = (newScope) => {
        Object.entries(newScope).forEach(([key2, value]) => {
          reactiveScope[key2] = value;
        });
      };
      mutateDom(() => {
        lastEl.after(clone2);
        initTree(clone2);
      });
      if (typeof key === "object") {
        warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
      }
      lookup[key] = clone2;
    }
    for (let i = 0; i < sames.length; i++) {
      lookup[sames[i]]._x_refreshXForScope(scopes[keys.indexOf(sames[i])]);
    }
    templateEl._x_prevKeys = keys;
  });
}
function parseForExpression(expression) {
  let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  let stripParensRE = /^\s*\(|\)\s*$/g;
  let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  let inMatch = expression.match(forAliasRE);
  if (!inMatch)
    return;
  let res = {};
  res.items = inMatch[2].trim();
  let item = inMatch[1].replace(stripParensRE, "").trim();
  let iteratorMatch = item.match(forIteratorRE);
  if (iteratorMatch) {
    res.item = item.replace(forIteratorRE, "").trim();
    res.index = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.collection = iteratorMatch[2].trim();
    }
  } else {
    res.item = item;
  }
  return res;
}
function getIterationScopeVariables(iteratorNames, item, index, items) {
  let scopeVariables = {};
  if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
    let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i) => i.trim());
    names.forEach((name, i) => {
      scopeVariables[name] = item[i];
    });
  } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
    let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i) => i.trim());
    names.forEach((name) => {
      scopeVariables[name] = item[name];
    });
  } else {
    scopeVariables[iteratorNames.item] = item;
  }
  if (iteratorNames.index)
    scopeVariables[iteratorNames.index] = index;
  if (iteratorNames.collection)
    scopeVariables[iteratorNames.collection] = items;
  return scopeVariables;
}
function isNumeric3(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}

// packages/alpinejs/src/directives/x-ref.js
function handler3() {
}
handler3.inline = (el, { expression }, { cleanup }) => {
  let root = closestRoot(el);
  if (!root._x_refs)
    root._x_refs = {};
  root._x_refs[expression] = el;
  cleanup(() => delete root._x_refs[expression]);
};
directive("ref", handler3);

// packages/alpinejs/src/directives/x-if.js
directive("if", (el, { expression }, { effect: effect3, cleanup }) => {
  if (el.tagName.toLowerCase() !== "template")
    warn("x-if can only be used on a <template> tag", el);
  let evaluate2 = evaluateLater(el, expression);
  let show = () => {
    if (el._x_currentIfEl)
      return el._x_currentIfEl;
    let clone2 = el.content.cloneNode(true).firstElementChild;
    addScopeToNode(clone2, {}, el);
    mutateDom(() => {
      el.after(clone2);
      initTree(clone2);
    });
    el._x_currentIfEl = clone2;
    el._x_undoIf = () => {
      walk(clone2, (node) => {
        if (!!node._x_effects) {
          node._x_effects.forEach(dequeueJob);
        }
      });
      clone2.remove();
      delete el._x_currentIfEl;
    };
    return clone2;
  };
  let hide = () => {
    if (!el._x_undoIf)
      return;
    el._x_undoIf();
    delete el._x_undoIf;
  };
  effect3(() => evaluate2((value) => {
    value ? show() : hide();
  }));
  cleanup(() => el._x_undoIf && el._x_undoIf());
});

// packages/alpinejs/src/directives/x-id.js
directive("id", (el, { expression }, { evaluate: evaluate2 }) => {
  let names = evaluate2(expression);
  names.forEach((name) => setIdRoot(el, name));
});

// packages/alpinejs/src/directives/x-on.js
mapAttributes(startingWith("@", into(prefix("on:"))));
directive("on", skipDuringClone((el, { value, modifiers, expression }, { cleanup }) => {
  let evaluate2 = expression ? evaluateLater(el, expression) : () => {
  };
  if (el.tagName.toLowerCase() === "template") {
    if (!el._x_forwardEvents)
      el._x_forwardEvents = [];
    if (!el._x_forwardEvents.includes(value))
      el._x_forwardEvents.push(value);
  }
  let removeListener = on(el, value, modifiers, (e) => {
    evaluate2(() => {
    }, { scope: { "$event": e }, params: [e] });
  });
  cleanup(() => removeListener());
}));

// packages/alpinejs/src/directives/index.js
warnMissingPluginDirective("Collapse", "collapse", "collapse");
warnMissingPluginDirective("Intersect", "intersect", "intersect");
warnMissingPluginDirective("Focus", "trap", "focus");
warnMissingPluginDirective("Mask", "mask", "mask");
function warnMissingPluginDirective(name, directiveName, slug) {
  directive(directiveName, (el) => warn(`You can't use [x-${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
}

// packages/alpinejs/src/index.js
alpine_default.setEvaluator(normalEvaluator);
alpine_default.setReactivityEngine({ reactive: import_reactivity9.reactive, effect: import_reactivity9.effect, release: import_reactivity9.stop, raw: import_reactivity9.toRaw });
var src_default = alpine_default;

// packages/alpinejs/builds/module.js
var module_default = src_default;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
const chartjs = require('../dist/chart.cjs');
const {Chart, registerables} = chartjs;

Chart.register(...registerables);

module.exports = Object.assign(Chart, chartjs);

},{"../dist/chart.cjs":6}],6:[function(require,module,exports){
/*!
 * Chart.js v4.4.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */
'use strict';

var helpers_segment = require('./chunks/helpers.segment.cjs');
require('@kurkle/color');

class Animator {
    constructor(){
        this._request = null;
        this._charts = new Map();
        this._running = false;
        this._lastDate = undefined;
    }
 _notify(chart, anims, date, type) {
        const callbacks = anims.listeners[type];
        const numSteps = anims.duration;
        callbacks.forEach((fn)=>fn({
                chart,
                initial: anims.initial,
                numSteps,
                currentStep: Math.min(date - anims.start, numSteps)
            }));
    }
 _refresh() {
        if (this._request) {
            return;
        }
        this._running = true;
        this._request = helpers_segment.requestAnimFrame.call(window, ()=>{
            this._update();
            this._request = null;
            if (this._running) {
                this._refresh();
            }
        });
    }
 _update(date = Date.now()) {
        let remaining = 0;
        this._charts.forEach((anims, chart)=>{
            if (!anims.running || !anims.items.length) {
                return;
            }
            const items = anims.items;
            let i = items.length - 1;
            let draw = false;
            let item;
            for(; i >= 0; --i){
                item = items[i];
                if (item._active) {
                    if (item._total > anims.duration) {
                        anims.duration = item._total;
                    }
                    item.tick(date);
                    draw = true;
                } else {
                    items[i] = items[items.length - 1];
                    items.pop();
                }
            }
            if (draw) {
                chart.draw();
                this._notify(chart, anims, date, 'progress');
            }
            if (!items.length) {
                anims.running = false;
                this._notify(chart, anims, date, 'complete');
                anims.initial = false;
            }
            remaining += items.length;
        });
        this._lastDate = date;
        if (remaining === 0) {
            this._running = false;
        }
    }
 _getAnims(chart) {
        const charts = this._charts;
        let anims = charts.get(chart);
        if (!anims) {
            anims = {
                running: false,
                initial: true,
                items: [],
                listeners: {
                    complete: [],
                    progress: []
                }
            };
            charts.set(chart, anims);
        }
        return anims;
    }
 listen(chart, event, cb) {
        this._getAnims(chart).listeners[event].push(cb);
    }
 add(chart, items) {
        if (!items || !items.length) {
            return;
        }
        this._getAnims(chart).items.push(...items);
    }
 has(chart) {
        return this._getAnims(chart).items.length > 0;
    }
 start(chart) {
        const anims = this._charts.get(chart);
        if (!anims) {
            return;
        }
        anims.running = true;
        anims.start = Date.now();
        anims.duration = anims.items.reduce((acc, cur)=>Math.max(acc, cur._duration), 0);
        this._refresh();
    }
    running(chart) {
        if (!this._running) {
            return false;
        }
        const anims = this._charts.get(chart);
        if (!anims || !anims.running || !anims.items.length) {
            return false;
        }
        return true;
    }
 stop(chart) {
        const anims = this._charts.get(chart);
        if (!anims || !anims.items.length) {
            return;
        }
        const items = anims.items;
        let i = items.length - 1;
        for(; i >= 0; --i){
            items[i].cancel();
        }
        anims.items = [];
        this._notify(chart, anims, Date.now(), 'complete');
    }
 remove(chart) {
        return this._charts.delete(chart);
    }
}
var animator = /* #__PURE__ */ new Animator();

const transparent = 'transparent';
const interpolators = {
    boolean (from, to, factor) {
        return factor > 0.5 ? to : from;
    },
 color (from, to, factor) {
        const c0 = helpers_segment.color(from || transparent);
        const c1 = c0.valid && helpers_segment.color(to || transparent);
        return c1 && c1.valid ? c1.mix(c0, factor).hexString() : to;
    },
    number (from, to, factor) {
        return from + (to - from) * factor;
    }
};
class Animation {
    constructor(cfg, target, prop, to){
        const currentValue = target[prop];
        to = helpers_segment.resolve([
            cfg.to,
            to,
            currentValue,
            cfg.from
        ]);
        const from = helpers_segment.resolve([
            cfg.from,
            currentValue,
            to
        ]);
        this._active = true;
        this._fn = cfg.fn || interpolators[cfg.type || typeof from];
        this._easing = helpers_segment.effects[cfg.easing] || helpers_segment.effects.linear;
        this._start = Math.floor(Date.now() + (cfg.delay || 0));
        this._duration = this._total = Math.floor(cfg.duration);
        this._loop = !!cfg.loop;
        this._target = target;
        this._prop = prop;
        this._from = from;
        this._to = to;
        this._promises = undefined;
    }
    active() {
        return this._active;
    }
    update(cfg, to, date) {
        if (this._active) {
            this._notify(false);
            const currentValue = this._target[this._prop];
            const elapsed = date - this._start;
            const remain = this._duration - elapsed;
            this._start = date;
            this._duration = Math.floor(Math.max(remain, cfg.duration));
            this._total += elapsed;
            this._loop = !!cfg.loop;
            this._to = helpers_segment.resolve([
                cfg.to,
                to,
                currentValue,
                cfg.from
            ]);
            this._from = helpers_segment.resolve([
                cfg.from,
                currentValue,
                to
            ]);
        }
    }
    cancel() {
        if (this._active) {
            this.tick(Date.now());
            this._active = false;
            this._notify(false);
        }
    }
    tick(date) {
        const elapsed = date - this._start;
        const duration = this._duration;
        const prop = this._prop;
        const from = this._from;
        const loop = this._loop;
        const to = this._to;
        let factor;
        this._active = from !== to && (loop || elapsed < duration);
        if (!this._active) {
            this._target[prop] = to;
            this._notify(true);
            return;
        }
        if (elapsed < 0) {
            this._target[prop] = from;
            return;
        }
        factor = elapsed / duration % 2;
        factor = loop && factor > 1 ? 2 - factor : factor;
        factor = this._easing(Math.min(1, Math.max(0, factor)));
        this._target[prop] = this._fn(from, to, factor);
    }
    wait() {
        const promises = this._promises || (this._promises = []);
        return new Promise((res, rej)=>{
            promises.push({
                res,
                rej
            });
        });
    }
    _notify(resolved) {
        const method = resolved ? 'res' : 'rej';
        const promises = this._promises || [];
        for(let i = 0; i < promises.length; i++){
            promises[i][method]();
        }
    }
}

class Animations {
    constructor(chart, config){
        this._chart = chart;
        this._properties = new Map();
        this.configure(config);
    }
    configure(config) {
        if (!helpers_segment.isObject(config)) {
            return;
        }
        const animationOptions = Object.keys(helpers_segment.defaults.animation);
        const animatedProps = this._properties;
        Object.getOwnPropertyNames(config).forEach((key)=>{
            const cfg = config[key];
            if (!helpers_segment.isObject(cfg)) {
                return;
            }
            const resolved = {};
            for (const option of animationOptions){
                resolved[option] = cfg[option];
            }
            (helpers_segment.isArray(cfg.properties) && cfg.properties || [
                key
            ]).forEach((prop)=>{
                if (prop === key || !animatedProps.has(prop)) {
                    animatedProps.set(prop, resolved);
                }
            });
        });
    }
 _animateOptions(target, values) {
        const newOptions = values.options;
        const options = resolveTargetOptions(target, newOptions);
        if (!options) {
            return [];
        }
        const animations = this._createAnimations(options, newOptions);
        if (newOptions.$shared) {
            awaitAll(target.options.$animations, newOptions).then(()=>{
                target.options = newOptions;
            }, ()=>{
            });
        }
        return animations;
    }
 _createAnimations(target, values) {
        const animatedProps = this._properties;
        const animations = [];
        const running = target.$animations || (target.$animations = {});
        const props = Object.keys(values);
        const date = Date.now();
        let i;
        for(i = props.length - 1; i >= 0; --i){
            const prop = props[i];
            if (prop.charAt(0) === '$') {
                continue;
            }
            if (prop === 'options') {
                animations.push(...this._animateOptions(target, values));
                continue;
            }
            const value = values[prop];
            let animation = running[prop];
            const cfg = animatedProps.get(prop);
            if (animation) {
                if (cfg && animation.active()) {
                    animation.update(cfg, value, date);
                    continue;
                } else {
                    animation.cancel();
                }
            }
            if (!cfg || !cfg.duration) {
                target[prop] = value;
                continue;
            }
            running[prop] = animation = new Animation(cfg, target, prop, value);
            animations.push(animation);
        }
        return animations;
    }
 update(target, values) {
        if (this._properties.size === 0) {
            Object.assign(target, values);
            return;
        }
        const animations = this._createAnimations(target, values);
        if (animations.length) {
            animator.add(this._chart, animations);
            return true;
        }
    }
}
function awaitAll(animations, properties) {
    const running = [];
    const keys = Object.keys(properties);
    for(let i = 0; i < keys.length; i++){
        const anim = animations[keys[i]];
        if (anim && anim.active()) {
            running.push(anim.wait());
        }
    }
    return Promise.all(running);
}
function resolveTargetOptions(target, newOptions) {
    if (!newOptions) {
        return;
    }
    let options = target.options;
    if (!options) {
        target.options = newOptions;
        return;
    }
    if (options.$shared) {
        target.options = options = Object.assign({}, options, {
            $shared: false,
            $animations: {}
        });
    }
    return options;
}

function scaleClip(scale, allowedOverflow) {
    const opts = scale && scale.options || {};
    const reverse = opts.reverse;
    const min = opts.min === undefined ? allowedOverflow : 0;
    const max = opts.max === undefined ? allowedOverflow : 0;
    return {
        start: reverse ? max : min,
        end: reverse ? min : max
    };
}
function defaultClip(xScale, yScale, allowedOverflow) {
    if (allowedOverflow === false) {
        return false;
    }
    const x = scaleClip(xScale, allowedOverflow);
    const y = scaleClip(yScale, allowedOverflow);
    return {
        top: y.end,
        right: x.end,
        bottom: y.start,
        left: x.start
    };
}
function toClip(value) {
    let t, r, b, l;
    if (helpers_segment.isObject(value)) {
        t = value.top;
        r = value.right;
        b = value.bottom;
        l = value.left;
    } else {
        t = r = b = l = value;
    }
    return {
        top: t,
        right: r,
        bottom: b,
        left: l,
        disabled: value === false
    };
}
function getSortedDatasetIndices(chart, filterVisible) {
    const keys = [];
    const metasets = chart._getSortedDatasetMetas(filterVisible);
    let i, ilen;
    for(i = 0, ilen = metasets.length; i < ilen; ++i){
        keys.push(metasets[i].index);
    }
    return keys;
}
function applyStack(stack, value, dsIndex, options = {}) {
    const keys = stack.keys;
    const singleMode = options.mode === 'single';
    let i, ilen, datasetIndex, otherValue;
    if (value === null) {
        return;
    }
    for(i = 0, ilen = keys.length; i < ilen; ++i){
        datasetIndex = +keys[i];
        if (datasetIndex === dsIndex) {
            if (options.all) {
                continue;
            }
            break;
        }
        otherValue = stack.values[datasetIndex];
        if (helpers_segment.isNumberFinite(otherValue) && (singleMode || value === 0 || helpers_segment.sign(value) === helpers_segment.sign(otherValue))) {
            value += otherValue;
        }
    }
    return value;
}
function convertObjectDataToArray(data) {
    const keys = Object.keys(data);
    const adata = new Array(keys.length);
    let i, ilen, key;
    for(i = 0, ilen = keys.length; i < ilen; ++i){
        key = keys[i];
        adata[i] = {
            x: key,
            y: data[key]
        };
    }
    return adata;
}
function isStacked(scale, meta) {
    const stacked = scale && scale.options.stacked;
    return stacked || stacked === undefined && meta.stack !== undefined;
}
function getStackKey(indexScale, valueScale, meta) {
    return `${indexScale.id}.${valueScale.id}.${meta.stack || meta.type}`;
}
function getUserBounds(scale) {
    const { min , max , minDefined , maxDefined  } = scale.getUserBounds();
    return {
        min: minDefined ? min : Number.NEGATIVE_INFINITY,
        max: maxDefined ? max : Number.POSITIVE_INFINITY
    };
}
function getOrCreateStack(stacks, stackKey, indexValue) {
    const subStack = stacks[stackKey] || (stacks[stackKey] = {});
    return subStack[indexValue] || (subStack[indexValue] = {});
}
function getLastIndexInStack(stack, vScale, positive, type) {
    for (const meta of vScale.getMatchingVisibleMetas(type).reverse()){
        const value = stack[meta.index];
        if (positive && value > 0 || !positive && value < 0) {
            return meta.index;
        }
    }
    return null;
}
function updateStacks(controller, parsed) {
    const { chart , _cachedMeta: meta  } = controller;
    const stacks = chart._stacks || (chart._stacks = {});
    const { iScale , vScale , index: datasetIndex  } = meta;
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    const key = getStackKey(iScale, vScale, meta);
    const ilen = parsed.length;
    let stack;
    for(let i = 0; i < ilen; ++i){
        const item = parsed[i];
        const { [iAxis]: index , [vAxis]: value  } = item;
        const itemStacks = item._stacks || (item._stacks = {});
        stack = itemStacks[vAxis] = getOrCreateStack(stacks, key, index);
        stack[datasetIndex] = value;
        stack._top = getLastIndexInStack(stack, vScale, true, meta.type);
        stack._bottom = getLastIndexInStack(stack, vScale, false, meta.type);
        const visualValues = stack._visualValues || (stack._visualValues = {});
        visualValues[datasetIndex] = value;
    }
}
function getFirstScaleId(chart, axis) {
    const scales = chart.scales;
    return Object.keys(scales).filter((key)=>scales[key].axis === axis).shift();
}
function createDatasetContext(parent, index) {
    return helpers_segment.createContext(parent, {
        active: false,
        dataset: undefined,
        datasetIndex: index,
        index,
        mode: 'default',
        type: 'dataset'
    });
}
function createDataContext(parent, index, element) {
    return helpers_segment.createContext(parent, {
        active: false,
        dataIndex: index,
        parsed: undefined,
        raw: undefined,
        element,
        index,
        mode: 'default',
        type: 'data'
    });
}
function clearStacks(meta, items) {
    const datasetIndex = meta.controller.index;
    const axis = meta.vScale && meta.vScale.axis;
    if (!axis) {
        return;
    }
    items = items || meta._parsed;
    for (const parsed of items){
        const stacks = parsed._stacks;
        if (!stacks || stacks[axis] === undefined || stacks[axis][datasetIndex] === undefined) {
            return;
        }
        delete stacks[axis][datasetIndex];
        if (stacks[axis]._visualValues !== undefined && stacks[axis]._visualValues[datasetIndex] !== undefined) {
            delete stacks[axis]._visualValues[datasetIndex];
        }
    }
}
const isDirectUpdateMode = (mode)=>mode === 'reset' || mode === 'none';
const cloneIfNotShared = (cached, shared)=>shared ? cached : Object.assign({}, cached);
const createStack = (canStack, meta, chart)=>canStack && !meta.hidden && meta._stacked && {
        keys: getSortedDatasetIndices(chart, true),
        values: null
    };
class DatasetController {
 static defaults = {};
 static datasetElementType = null;
 static dataElementType = null;
 constructor(chart, datasetIndex){
        this.chart = chart;
        this._ctx = chart.ctx;
        this.index = datasetIndex;
        this._cachedDataOpts = {};
        this._cachedMeta = this.getMeta();
        this._type = this._cachedMeta.type;
        this.options = undefined;
         this._parsing = false;
        this._data = undefined;
        this._objectData = undefined;
        this._sharedOptions = undefined;
        this._drawStart = undefined;
        this._drawCount = undefined;
        this.enableOptionSharing = false;
        this.supportsDecimation = false;
        this.$context = undefined;
        this._syncList = [];
        this.datasetElementType = new.target.datasetElementType;
        this.dataElementType = new.target.dataElementType;
        this.initialize();
    }
    initialize() {
        const meta = this._cachedMeta;
        this.configure();
        this.linkScales();
        meta._stacked = isStacked(meta.vScale, meta);
        this.addElements();
        if (this.options.fill && !this.chart.isPluginEnabled('filler')) {
            console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
        }
    }
    updateIndex(datasetIndex) {
        if (this.index !== datasetIndex) {
            clearStacks(this._cachedMeta);
        }
        this.index = datasetIndex;
    }
    linkScales() {
        const chart = this.chart;
        const meta = this._cachedMeta;
        const dataset = this.getDataset();
        const chooseId = (axis, x, y, r)=>axis === 'x' ? x : axis === 'r' ? r : y;
        const xid = meta.xAxisID = helpers_segment.valueOrDefault(dataset.xAxisID, getFirstScaleId(chart, 'x'));
        const yid = meta.yAxisID = helpers_segment.valueOrDefault(dataset.yAxisID, getFirstScaleId(chart, 'y'));
        const rid = meta.rAxisID = helpers_segment.valueOrDefault(dataset.rAxisID, getFirstScaleId(chart, 'r'));
        const indexAxis = meta.indexAxis;
        const iid = meta.iAxisID = chooseId(indexAxis, xid, yid, rid);
        const vid = meta.vAxisID = chooseId(indexAxis, yid, xid, rid);
        meta.xScale = this.getScaleForId(xid);
        meta.yScale = this.getScaleForId(yid);
        meta.rScale = this.getScaleForId(rid);
        meta.iScale = this.getScaleForId(iid);
        meta.vScale = this.getScaleForId(vid);
    }
    getDataset() {
        return this.chart.data.datasets[this.index];
    }
    getMeta() {
        return this.chart.getDatasetMeta(this.index);
    }
 getScaleForId(scaleID) {
        return this.chart.scales[scaleID];
    }
 _getOtherScale(scale) {
        const meta = this._cachedMeta;
        return scale === meta.iScale ? meta.vScale : meta.iScale;
    }
    reset() {
        this._update('reset');
    }
 _destroy() {
        const meta = this._cachedMeta;
        if (this._data) {
            helpers_segment.unlistenArrayEvents(this._data, this);
        }
        if (meta._stacked) {
            clearStacks(meta);
        }
    }
 _dataCheck() {
        const dataset = this.getDataset();
        const data = dataset.data || (dataset.data = []);
        const _data = this._data;
        if (helpers_segment.isObject(data)) {
            this._data = convertObjectDataToArray(data);
        } else if (_data !== data) {
            if (_data) {
                helpers_segment.unlistenArrayEvents(_data, this);
                const meta = this._cachedMeta;
                clearStacks(meta);
                meta._parsed = [];
            }
            if (data && Object.isExtensible(data)) {
                helpers_segment.listenArrayEvents(data, this);
            }
            this._syncList = [];
            this._data = data;
        }
    }
    addElements() {
        const meta = this._cachedMeta;
        this._dataCheck();
        if (this.datasetElementType) {
            meta.dataset = new this.datasetElementType();
        }
    }
    buildOrUpdateElements(resetNewElements) {
        const meta = this._cachedMeta;
        const dataset = this.getDataset();
        let stackChanged = false;
        this._dataCheck();
        const oldStacked = meta._stacked;
        meta._stacked = isStacked(meta.vScale, meta);
        if (meta.stack !== dataset.stack) {
            stackChanged = true;
            clearStacks(meta);
            meta.stack = dataset.stack;
        }
        this._resyncElements(resetNewElements);
        if (stackChanged || oldStacked !== meta._stacked) {
            updateStacks(this, meta._parsed);
        }
    }
 configure() {
        const config = this.chart.config;
        const scopeKeys = config.datasetScopeKeys(this._type);
        const scopes = config.getOptionScopes(this.getDataset(), scopeKeys, true);
        this.options = config.createResolver(scopes, this.getContext());
        this._parsing = this.options.parsing;
        this._cachedDataOpts = {};
    }
 parse(start, count) {
        const { _cachedMeta: meta , _data: data  } = this;
        const { iScale , _stacked  } = meta;
        const iAxis = iScale.axis;
        let sorted = start === 0 && count === data.length ? true : meta._sorted;
        let prev = start > 0 && meta._parsed[start - 1];
        let i, cur, parsed;
        if (this._parsing === false) {
            meta._parsed = data;
            meta._sorted = true;
            parsed = data;
        } else {
            if (helpers_segment.isArray(data[start])) {
                parsed = this.parseArrayData(meta, data, start, count);
            } else if (helpers_segment.isObject(data[start])) {
                parsed = this.parseObjectData(meta, data, start, count);
            } else {
                parsed = this.parsePrimitiveData(meta, data, start, count);
            }
            const isNotInOrderComparedToPrev = ()=>cur[iAxis] === null || prev && cur[iAxis] < prev[iAxis];
            for(i = 0; i < count; ++i){
                meta._parsed[i + start] = cur = parsed[i];
                if (sorted) {
                    if (isNotInOrderComparedToPrev()) {
                        sorted = false;
                    }
                    prev = cur;
                }
            }
            meta._sorted = sorted;
        }
        if (_stacked) {
            updateStacks(this, parsed);
        }
    }
 parsePrimitiveData(meta, data, start, count) {
        const { iScale , vScale  } = meta;
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        const labels = iScale.getLabels();
        const singleScale = iScale === vScale;
        const parsed = new Array(count);
        let i, ilen, index;
        for(i = 0, ilen = count; i < ilen; ++i){
            index = i + start;
            parsed[i] = {
                [iAxis]: singleScale || iScale.parse(labels[index], index),
                [vAxis]: vScale.parse(data[index], index)
            };
        }
        return parsed;
    }
 parseArrayData(meta, data, start, count) {
        const { xScale , yScale  } = meta;
        const parsed = new Array(count);
        let i, ilen, index, item;
        for(i = 0, ilen = count; i < ilen; ++i){
            index = i + start;
            item = data[index];
            parsed[i] = {
                x: xScale.parse(item[0], index),
                y: yScale.parse(item[1], index)
            };
        }
        return parsed;
    }
 parseObjectData(meta, data, start, count) {
        const { xScale , yScale  } = meta;
        const { xAxisKey ='x' , yAxisKey ='y'  } = this._parsing;
        const parsed = new Array(count);
        let i, ilen, index, item;
        for(i = 0, ilen = count; i < ilen; ++i){
            index = i + start;
            item = data[index];
            parsed[i] = {
                x: xScale.parse(helpers_segment.resolveObjectKey(item, xAxisKey), index),
                y: yScale.parse(helpers_segment.resolveObjectKey(item, yAxisKey), index)
            };
        }
        return parsed;
    }
 getParsed(index) {
        return this._cachedMeta._parsed[index];
    }
 getDataElement(index) {
        return this._cachedMeta.data[index];
    }
 applyStack(scale, parsed, mode) {
        const chart = this.chart;
        const meta = this._cachedMeta;
        const value = parsed[scale.axis];
        const stack = {
            keys: getSortedDatasetIndices(chart, true),
            values: parsed._stacks[scale.axis]._visualValues
        };
        return applyStack(stack, value, meta.index, {
            mode
        });
    }
 updateRangeFromParsed(range, scale, parsed, stack) {
        const parsedValue = parsed[scale.axis];
        let value = parsedValue === null ? NaN : parsedValue;
        const values = stack && parsed._stacks[scale.axis];
        if (stack && values) {
            stack.values = values;
            value = applyStack(stack, parsedValue, this._cachedMeta.index);
        }
        range.min = Math.min(range.min, value);
        range.max = Math.max(range.max, value);
    }
 getMinMax(scale, canStack) {
        const meta = this._cachedMeta;
        const _parsed = meta._parsed;
        const sorted = meta._sorted && scale === meta.iScale;
        const ilen = _parsed.length;
        const otherScale = this._getOtherScale(scale);
        const stack = createStack(canStack, meta, this.chart);
        const range = {
            min: Number.POSITIVE_INFINITY,
            max: Number.NEGATIVE_INFINITY
        };
        const { min: otherMin , max: otherMax  } = getUserBounds(otherScale);
        let i, parsed;
        function _skip() {
            parsed = _parsed[i];
            const otherValue = parsed[otherScale.axis];
            return !helpers_segment.isNumberFinite(parsed[scale.axis]) || otherMin > otherValue || otherMax < otherValue;
        }
        for(i = 0; i < ilen; ++i){
            if (_skip()) {
                continue;
            }
            this.updateRangeFromParsed(range, scale, parsed, stack);
            if (sorted) {
                break;
            }
        }
        if (sorted) {
            for(i = ilen - 1; i >= 0; --i){
                if (_skip()) {
                    continue;
                }
                this.updateRangeFromParsed(range, scale, parsed, stack);
                break;
            }
        }
        return range;
    }
    getAllParsedValues(scale) {
        const parsed = this._cachedMeta._parsed;
        const values = [];
        let i, ilen, value;
        for(i = 0, ilen = parsed.length; i < ilen; ++i){
            value = parsed[i][scale.axis];
            if (helpers_segment.isNumberFinite(value)) {
                values.push(value);
            }
        }
        return values;
    }
 getMaxOverflow() {
        return false;
    }
 getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const iScale = meta.iScale;
        const vScale = meta.vScale;
        const parsed = this.getParsed(index);
        return {
            label: iScale ? '' + iScale.getLabelForValue(parsed[iScale.axis]) : '',
            value: vScale ? '' + vScale.getLabelForValue(parsed[vScale.axis]) : ''
        };
    }
 _update(mode) {
        const meta = this._cachedMeta;
        this.update(mode || 'default');
        meta._clip = toClip(helpers_segment.valueOrDefault(this.options.clip, defaultClip(meta.xScale, meta.yScale, this.getMaxOverflow())));
    }
 update(mode) {}
    draw() {
        const ctx = this._ctx;
        const chart = this.chart;
        const meta = this._cachedMeta;
        const elements = meta.data || [];
        const area = chart.chartArea;
        const active = [];
        const start = this._drawStart || 0;
        const count = this._drawCount || elements.length - start;
        const drawActiveElementsOnTop = this.options.drawActiveElementsOnTop;
        let i;
        if (meta.dataset) {
            meta.dataset.draw(ctx, area, start, count);
        }
        for(i = start; i < start + count; ++i){
            const element = elements[i];
            if (element.hidden) {
                continue;
            }
            if (element.active && drawActiveElementsOnTop) {
                active.push(element);
            } else {
                element.draw(ctx, area);
            }
        }
        for(i = 0; i < active.length; ++i){
            active[i].draw(ctx, area);
        }
    }
 getStyle(index, active) {
        const mode = active ? 'active' : 'default';
        return index === undefined && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(mode) : this.resolveDataElementOptions(index || 0, mode);
    }
 getContext(index, active, mode) {
        const dataset = this.getDataset();
        let context;
        if (index >= 0 && index < this._cachedMeta.data.length) {
            const element = this._cachedMeta.data[index];
            context = element.$context || (element.$context = createDataContext(this.getContext(), index, element));
            context.parsed = this.getParsed(index);
            context.raw = dataset.data[index];
            context.index = context.dataIndex = index;
        } else {
            context = this.$context || (this.$context = createDatasetContext(this.chart.getContext(), this.index));
            context.dataset = dataset;
            context.index = context.datasetIndex = this.index;
        }
        context.active = !!active;
        context.mode = mode;
        return context;
    }
 resolveDatasetElementOptions(mode) {
        return this._resolveElementOptions(this.datasetElementType.id, mode);
    }
 resolveDataElementOptions(index, mode) {
        return this._resolveElementOptions(this.dataElementType.id, mode, index);
    }
 _resolveElementOptions(elementType, mode = 'default', index) {
        const active = mode === 'active';
        const cache = this._cachedDataOpts;
        const cacheKey = elementType + '-' + mode;
        const cached = cache[cacheKey];
        const sharing = this.enableOptionSharing && helpers_segment.defined(index);
        if (cached) {
            return cloneIfNotShared(cached, sharing);
        }
        const config = this.chart.config;
        const scopeKeys = config.datasetElementScopeKeys(this._type, elementType);
        const prefixes = active ? [
            `${elementType}Hover`,
            'hover',
            elementType,
            ''
        ] : [
            elementType,
            ''
        ];
        const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
        const names = Object.keys(helpers_segment.defaults.elements[elementType]);
        const context = ()=>this.getContext(index, active, mode);
        const values = config.resolveNamedOptions(scopes, names, context, prefixes);
        if (values.$shared) {
            values.$shared = sharing;
            cache[cacheKey] = Object.freeze(cloneIfNotShared(values, sharing));
        }
        return values;
    }
 _resolveAnimations(index, transition, active) {
        const chart = this.chart;
        const cache = this._cachedDataOpts;
        const cacheKey = `animation-${transition}`;
        const cached = cache[cacheKey];
        if (cached) {
            return cached;
        }
        let options;
        if (chart.options.animation !== false) {
            const config = this.chart.config;
            const scopeKeys = config.datasetAnimationScopeKeys(this._type, transition);
            const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
            options = config.createResolver(scopes, this.getContext(index, active, transition));
        }
        const animations = new Animations(chart, options && options.animations);
        if (options && options._cacheable) {
            cache[cacheKey] = Object.freeze(animations);
        }
        return animations;
    }
 getSharedOptions(options) {
        if (!options.$shared) {
            return;
        }
        return this._sharedOptions || (this._sharedOptions = Object.assign({}, options));
    }
 includeOptions(mode, sharedOptions) {
        return !sharedOptions || isDirectUpdateMode(mode) || this.chart._animationsDisabled;
    }
 _getSharedOptions(start, mode) {
        const firstOpts = this.resolveDataElementOptions(start, mode);
        const previouslySharedOptions = this._sharedOptions;
        const sharedOptions = this.getSharedOptions(firstOpts);
        const includeOptions = this.includeOptions(mode, sharedOptions) || sharedOptions !== previouslySharedOptions;
        this.updateSharedOptions(sharedOptions, mode, firstOpts);
        return {
            sharedOptions,
            includeOptions
        };
    }
 updateElement(element, index, properties, mode) {
        if (isDirectUpdateMode(mode)) {
            Object.assign(element, properties);
        } else {
            this._resolveAnimations(index, mode).update(element, properties);
        }
    }
 updateSharedOptions(sharedOptions, mode, newOptions) {
        if (sharedOptions && !isDirectUpdateMode(mode)) {
            this._resolveAnimations(undefined, mode).update(sharedOptions, newOptions);
        }
    }
 _setStyle(element, index, mode, active) {
        element.active = active;
        const options = this.getStyle(index, active);
        this._resolveAnimations(index, mode, active).update(element, {
            options: !active && this.getSharedOptions(options) || options
        });
    }
    removeHoverStyle(element, datasetIndex, index) {
        this._setStyle(element, index, 'active', false);
    }
    setHoverStyle(element, datasetIndex, index) {
        this._setStyle(element, index, 'active', true);
    }
 _removeDatasetHoverStyle() {
        const element = this._cachedMeta.dataset;
        if (element) {
            this._setStyle(element, undefined, 'active', false);
        }
    }
 _setDatasetHoverStyle() {
        const element = this._cachedMeta.dataset;
        if (element) {
            this._setStyle(element, undefined, 'active', true);
        }
    }
 _resyncElements(resetNewElements) {
        const data = this._data;
        const elements = this._cachedMeta.data;
        for (const [method, arg1, arg2] of this._syncList){
            this[method](arg1, arg2);
        }
        this._syncList = [];
        const numMeta = elements.length;
        const numData = data.length;
        const count = Math.min(numData, numMeta);
        if (count) {
            this.parse(0, count);
        }
        if (numData > numMeta) {
            this._insertElements(numMeta, numData - numMeta, resetNewElements);
        } else if (numData < numMeta) {
            this._removeElements(numData, numMeta - numData);
        }
    }
 _insertElements(start, count, resetNewElements = true) {
        const meta = this._cachedMeta;
        const data = meta.data;
        const end = start + count;
        let i;
        const move = (arr)=>{
            arr.length += count;
            for(i = arr.length - 1; i >= end; i--){
                arr[i] = arr[i - count];
            }
        };
        move(data);
        for(i = start; i < end; ++i){
            data[i] = new this.dataElementType();
        }
        if (this._parsing) {
            move(meta._parsed);
        }
        this.parse(start, count);
        if (resetNewElements) {
            this.updateElements(data, start, count, 'reset');
        }
    }
    updateElements(element, start, count, mode) {}
 _removeElements(start, count) {
        const meta = this._cachedMeta;
        if (this._parsing) {
            const removed = meta._parsed.splice(start, count);
            if (meta._stacked) {
                clearStacks(meta, removed);
            }
        }
        meta.data.splice(start, count);
    }
 _sync(args) {
        if (this._parsing) {
            this._syncList.push(args);
        } else {
            const [method, arg1, arg2] = args;
            this[method](arg1, arg2);
        }
        this.chart._dataChanges.push([
            this.index,
            ...args
        ]);
    }
    _onDataPush() {
        const count = arguments.length;
        this._sync([
            '_insertElements',
            this.getDataset().data.length - count,
            count
        ]);
    }
    _onDataPop() {
        this._sync([
            '_removeElements',
            this._cachedMeta.data.length - 1,
            1
        ]);
    }
    _onDataShift() {
        this._sync([
            '_removeElements',
            0,
            1
        ]);
    }
    _onDataSplice(start, count) {
        if (count) {
            this._sync([
                '_removeElements',
                start,
                count
            ]);
        }
        const newCount = arguments.length - 2;
        if (newCount) {
            this._sync([
                '_insertElements',
                start,
                newCount
            ]);
        }
    }
    _onDataUnshift() {
        this._sync([
            '_insertElements',
            0,
            arguments.length
        ]);
    }
}

function getAllScaleValues(scale, type) {
    if (!scale._cache.$bar) {
        const visibleMetas = scale.getMatchingVisibleMetas(type);
        let values = [];
        for(let i = 0, ilen = visibleMetas.length; i < ilen; i++){
            values = values.concat(visibleMetas[i].controller.getAllParsedValues(scale));
        }
        scale._cache.$bar = helpers_segment._arrayUnique(values.sort((a, b)=>a - b));
    }
    return scale._cache.$bar;
}
 function computeMinSampleSize(meta) {
    const scale = meta.iScale;
    const values = getAllScaleValues(scale, meta.type);
    let min = scale._length;
    let i, ilen, curr, prev;
    const updateMinAndPrev = ()=>{
        if (curr === 32767 || curr === -32768) {
            return;
        }
        if (helpers_segment.defined(prev)) {
            min = Math.min(min, Math.abs(curr - prev) || min);
        }
        prev = curr;
    };
    for(i = 0, ilen = values.length; i < ilen; ++i){
        curr = scale.getPixelForValue(values[i]);
        updateMinAndPrev();
    }
    prev = undefined;
    for(i = 0, ilen = scale.ticks.length; i < ilen; ++i){
        curr = scale.getPixelForTick(i);
        updateMinAndPrev();
    }
    return min;
}
 function computeFitCategoryTraits(index, ruler, options, stackCount) {
    const thickness = options.barThickness;
    let size, ratio;
    if (helpers_segment.isNullOrUndef(thickness)) {
        size = ruler.min * options.categoryPercentage;
        ratio = options.barPercentage;
    } else {
        size = thickness * stackCount;
        ratio = 1;
    }
    return {
        chunk: size / stackCount,
        ratio,
        start: ruler.pixels[index] - size / 2
    };
}
 function computeFlexCategoryTraits(index, ruler, options, stackCount) {
    const pixels = ruler.pixels;
    const curr = pixels[index];
    let prev = index > 0 ? pixels[index - 1] : null;
    let next = index < pixels.length - 1 ? pixels[index + 1] : null;
    const percent = options.categoryPercentage;
    if (prev === null) {
        prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
    }
    if (next === null) {
        next = curr + curr - prev;
    }
    const start = curr - (curr - Math.min(prev, next)) / 2 * percent;
    const size = Math.abs(next - prev) / 2 * percent;
    return {
        chunk: size / stackCount,
        ratio: options.barPercentage,
        start
    };
}
function parseFloatBar(entry, item, vScale, i) {
    const startValue = vScale.parse(entry[0], i);
    const endValue = vScale.parse(entry[1], i);
    const min = Math.min(startValue, endValue);
    const max = Math.max(startValue, endValue);
    let barStart = min;
    let barEnd = max;
    if (Math.abs(min) > Math.abs(max)) {
        barStart = max;
        barEnd = min;
    }
    item[vScale.axis] = barEnd;
    item._custom = {
        barStart,
        barEnd,
        start: startValue,
        end: endValue,
        min,
        max
    };
}
function parseValue(entry, item, vScale, i) {
    if (helpers_segment.isArray(entry)) {
        parseFloatBar(entry, item, vScale, i);
    } else {
        item[vScale.axis] = vScale.parse(entry, i);
    }
    return item;
}
function parseArrayOrPrimitive(meta, data, start, count) {
    const iScale = meta.iScale;
    const vScale = meta.vScale;
    const labels = iScale.getLabels();
    const singleScale = iScale === vScale;
    const parsed = [];
    let i, ilen, item, entry;
    for(i = start, ilen = start + count; i < ilen; ++i){
        entry = data[i];
        item = {};
        item[iScale.axis] = singleScale || iScale.parse(labels[i], i);
        parsed.push(parseValue(entry, item, vScale, i));
    }
    return parsed;
}
function isFloatBar(custom) {
    return custom && custom.barStart !== undefined && custom.barEnd !== undefined;
}
function barSign(size, vScale, actualBase) {
    if (size !== 0) {
        return helpers_segment.sign(size);
    }
    return (vScale.isHorizontal() ? 1 : -1) * (vScale.min >= actualBase ? 1 : -1);
}
function borderProps(properties) {
    let reverse, start, end, top, bottom;
    if (properties.horizontal) {
        reverse = properties.base > properties.x;
        start = 'left';
        end = 'right';
    } else {
        reverse = properties.base < properties.y;
        start = 'bottom';
        end = 'top';
    }
    if (reverse) {
        top = 'end';
        bottom = 'start';
    } else {
        top = 'start';
        bottom = 'end';
    }
    return {
        start,
        end,
        reverse,
        top,
        bottom
    };
}
function setBorderSkipped(properties, options, stack, index) {
    let edge = options.borderSkipped;
    const res = {};
    if (!edge) {
        properties.borderSkipped = res;
        return;
    }
    if (edge === true) {
        properties.borderSkipped = {
            top: true,
            right: true,
            bottom: true,
            left: true
        };
        return;
    }
    const { start , end , reverse , top , bottom  } = borderProps(properties);
    if (edge === 'middle' && stack) {
        properties.enableBorderRadius = true;
        if ((stack._top || 0) === index) {
            edge = top;
        } else if ((stack._bottom || 0) === index) {
            edge = bottom;
        } else {
            res[parseEdge(bottom, start, end, reverse)] = true;
            edge = top;
        }
    }
    res[parseEdge(edge, start, end, reverse)] = true;
    properties.borderSkipped = res;
}
function parseEdge(edge, a, b, reverse) {
    if (reverse) {
        edge = swap(edge, a, b);
        edge = startEnd(edge, b, a);
    } else {
        edge = startEnd(edge, a, b);
    }
    return edge;
}
function swap(orig, v1, v2) {
    return orig === v1 ? v2 : orig === v2 ? v1 : orig;
}
function startEnd(v, start, end) {
    return v === 'start' ? start : v === 'end' ? end : v;
}
function setInflateAmount(properties, { inflateAmount  }, ratio) {
    properties.inflateAmount = inflateAmount === 'auto' ? ratio === 1 ? 0.33 : 0 : inflateAmount;
}
class BarController extends DatasetController {
    static id = 'bar';
 static defaults = {
        datasetElementType: false,
        dataElementType: 'bar',
        categoryPercentage: 0.8,
        barPercentage: 0.9,
        grouped: true,
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'x',
                    'y',
                    'base',
                    'width',
                    'height'
                ]
            }
        }
    };
 static overrides = {
        scales: {
            _index_: {
                type: 'category',
                offset: true,
                grid: {
                    offset: true
                }
            },
            _value_: {
                type: 'linear',
                beginAtZero: true
            }
        }
    };
 parsePrimitiveData(meta, data, start, count) {
        return parseArrayOrPrimitive(meta, data, start, count);
    }
 parseArrayData(meta, data, start, count) {
        return parseArrayOrPrimitive(meta, data, start, count);
    }
 parseObjectData(meta, data, start, count) {
        const { iScale , vScale  } = meta;
        const { xAxisKey ='x' , yAxisKey ='y'  } = this._parsing;
        const iAxisKey = iScale.axis === 'x' ? xAxisKey : yAxisKey;
        const vAxisKey = vScale.axis === 'x' ? xAxisKey : yAxisKey;
        const parsed = [];
        let i, ilen, item, obj;
        for(i = start, ilen = start + count; i < ilen; ++i){
            obj = data[i];
            item = {};
            item[iScale.axis] = iScale.parse(helpers_segment.resolveObjectKey(obj, iAxisKey), i);
            parsed.push(parseValue(helpers_segment.resolveObjectKey(obj, vAxisKey), item, vScale, i));
        }
        return parsed;
    }
 updateRangeFromParsed(range, scale, parsed, stack) {
        super.updateRangeFromParsed(range, scale, parsed, stack);
        const custom = parsed._custom;
        if (custom && scale === this._cachedMeta.vScale) {
            range.min = Math.min(range.min, custom.min);
            range.max = Math.max(range.max, custom.max);
        }
    }
 getMaxOverflow() {
        return 0;
    }
 getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const { iScale , vScale  } = meta;
        const parsed = this.getParsed(index);
        const custom = parsed._custom;
        const value = isFloatBar(custom) ? '[' + custom.start + ', ' + custom.end + ']' : '' + vScale.getLabelForValue(parsed[vScale.axis]);
        return {
            label: '' + iScale.getLabelForValue(parsed[iScale.axis]),
            value
        };
    }
    initialize() {
        this.enableOptionSharing = true;
        super.initialize();
        const meta = this._cachedMeta;
        meta.stack = this.getDataset().stack;
    }
    update(mode) {
        const meta = this._cachedMeta;
        this.updateElements(meta.data, 0, meta.data.length, mode);
    }
    updateElements(bars, start, count, mode) {
        const reset = mode === 'reset';
        const { index , _cachedMeta: { vScale  }  } = this;
        const base = vScale.getBasePixel();
        const horizontal = vScale.isHorizontal();
        const ruler = this._getRuler();
        const { sharedOptions , includeOptions  } = this._getSharedOptions(start, mode);
        for(let i = start; i < start + count; i++){
            const parsed = this.getParsed(i);
            const vpixels = reset || helpers_segment.isNullOrUndef(parsed[vScale.axis]) ? {
                base,
                head: base
            } : this._calculateBarValuePixels(i);
            const ipixels = this._calculateBarIndexPixels(i, ruler);
            const stack = (parsed._stacks || {})[vScale.axis];
            const properties = {
                horizontal,
                base: vpixels.base,
                enableBorderRadius: !stack || isFloatBar(parsed._custom) || index === stack._top || index === stack._bottom,
                x: horizontal ? vpixels.head : ipixels.center,
                y: horizontal ? ipixels.center : vpixels.head,
                height: horizontal ? ipixels.size : Math.abs(vpixels.size),
                width: horizontal ? Math.abs(vpixels.size) : ipixels.size
            };
            if (includeOptions) {
                properties.options = sharedOptions || this.resolveDataElementOptions(i, bars[i].active ? 'active' : mode);
            }
            const options = properties.options || bars[i].options;
            setBorderSkipped(properties, options, stack, index);
            setInflateAmount(properties, options, ruler.ratio);
            this.updateElement(bars[i], i, properties, mode);
        }
    }
 _getStacks(last, dataIndex) {
        const { iScale  } = this._cachedMeta;
        const metasets = iScale.getMatchingVisibleMetas(this._type).filter((meta)=>meta.controller.options.grouped);
        const stacked = iScale.options.stacked;
        const stacks = [];
        const skipNull = (meta)=>{
            const parsed = meta.controller.getParsed(dataIndex);
            const val = parsed && parsed[meta.vScale.axis];
            if (helpers_segment.isNullOrUndef(val) || isNaN(val)) {
                return true;
            }
        };
        for (const meta of metasets){
            if (dataIndex !== undefined && skipNull(meta)) {
                continue;
            }
            if (stacked === false || stacks.indexOf(meta.stack) === -1 || stacked === undefined && meta.stack === undefined) {
                stacks.push(meta.stack);
            }
            if (meta.index === last) {
                break;
            }
        }
        if (!stacks.length) {
            stacks.push(undefined);
        }
        return stacks;
    }
 _getStackCount(index) {
        return this._getStacks(undefined, index).length;
    }
 _getStackIndex(datasetIndex, name, dataIndex) {
        const stacks = this._getStacks(datasetIndex, dataIndex);
        const index = name !== undefined ? stacks.indexOf(name) : -1;
        return index === -1 ? stacks.length - 1 : index;
    }
 _getRuler() {
        const opts = this.options;
        const meta = this._cachedMeta;
        const iScale = meta.iScale;
        const pixels = [];
        let i, ilen;
        for(i = 0, ilen = meta.data.length; i < ilen; ++i){
            pixels.push(iScale.getPixelForValue(this.getParsed(i)[iScale.axis], i));
        }
        const barThickness = opts.barThickness;
        const min = barThickness || computeMinSampleSize(meta);
        return {
            min,
            pixels,
            start: iScale._startPixel,
            end: iScale._endPixel,
            stackCount: this._getStackCount(),
            scale: iScale,
            grouped: opts.grouped,
            ratio: barThickness ? 1 : opts.categoryPercentage * opts.barPercentage
        };
    }
 _calculateBarValuePixels(index) {
        const { _cachedMeta: { vScale , _stacked , index: datasetIndex  } , options: { base: baseValue , minBarLength  }  } = this;
        const actualBase = baseValue || 0;
        const parsed = this.getParsed(index);
        const custom = parsed._custom;
        const floating = isFloatBar(custom);
        let value = parsed[vScale.axis];
        let start = 0;
        let length = _stacked ? this.applyStack(vScale, parsed, _stacked) : value;
        let head, size;
        if (length !== value) {
            start = length - value;
            length = value;
        }
        if (floating) {
            value = custom.barStart;
            length = custom.barEnd - custom.barStart;
            if (value !== 0 && helpers_segment.sign(value) !== helpers_segment.sign(custom.barEnd)) {
                start = 0;
            }
            start += value;
        }
        const startValue = !helpers_segment.isNullOrUndef(baseValue) && !floating ? baseValue : start;
        let base = vScale.getPixelForValue(startValue);
        if (this.chart.getDataVisibility(index)) {
            head = vScale.getPixelForValue(start + length);
        } else {
            head = base;
        }
        size = head - base;
        if (Math.abs(size) < minBarLength) {
            size = barSign(size, vScale, actualBase) * minBarLength;
            if (value === actualBase) {
                base -= size / 2;
            }
            const startPixel = vScale.getPixelForDecimal(0);
            const endPixel = vScale.getPixelForDecimal(1);
            const min = Math.min(startPixel, endPixel);
            const max = Math.max(startPixel, endPixel);
            base = Math.max(Math.min(base, max), min);
            head = base + size;
            if (_stacked && !floating) {
                parsed._stacks[vScale.axis]._visualValues[datasetIndex] = vScale.getValueForPixel(head) - vScale.getValueForPixel(base);
            }
        }
        if (base === vScale.getPixelForValue(actualBase)) {
            const halfGrid = helpers_segment.sign(size) * vScale.getLineWidthForValue(actualBase) / 2;
            base += halfGrid;
            size -= halfGrid;
        }
        return {
            size,
            base,
            head,
            center: head + size / 2
        };
    }
 _calculateBarIndexPixels(index, ruler) {
        const scale = ruler.scale;
        const options = this.options;
        const skipNull = options.skipNull;
        const maxBarThickness = helpers_segment.valueOrDefault(options.maxBarThickness, Infinity);
        let center, size;
        if (ruler.grouped) {
            const stackCount = skipNull ? this._getStackCount(index) : ruler.stackCount;
            const range = options.barThickness === 'flex' ? computeFlexCategoryTraits(index, ruler, options, stackCount) : computeFitCategoryTraits(index, ruler, options, stackCount);
            const stackIndex = this._getStackIndex(this.index, this._cachedMeta.stack, skipNull ? index : undefined);
            center = range.start + range.chunk * stackIndex + range.chunk / 2;
            size = Math.min(maxBarThickness, range.chunk * range.ratio);
        } else {
            center = scale.getPixelForValue(this.getParsed(index)[scale.axis], index);
            size = Math.min(maxBarThickness, ruler.min * ruler.ratio);
        }
        return {
            base: center - size / 2,
            head: center + size / 2,
            center,
            size
        };
    }
    draw() {
        const meta = this._cachedMeta;
        const vScale = meta.vScale;
        const rects = meta.data;
        const ilen = rects.length;
        let i = 0;
        for(; i < ilen; ++i){
            if (this.getParsed(i)[vScale.axis] !== null) {
                rects[i].draw(this._ctx);
            }
        }
    }
}

class BubbleController extends DatasetController {
    static id = 'bubble';
 static defaults = {
        datasetElementType: false,
        dataElementType: 'point',
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'x',
                    'y',
                    'borderWidth',
                    'radius'
                ]
            }
        }
    };
 static overrides = {
        scales: {
            x: {
                type: 'linear'
            },
            y: {
                type: 'linear'
            }
        }
    };
    initialize() {
        this.enableOptionSharing = true;
        super.initialize();
    }
 parsePrimitiveData(meta, data, start, count) {
        const parsed = super.parsePrimitiveData(meta, data, start, count);
        for(let i = 0; i < parsed.length; i++){
            parsed[i]._custom = this.resolveDataElementOptions(i + start).radius;
        }
        return parsed;
    }
 parseArrayData(meta, data, start, count) {
        const parsed = super.parseArrayData(meta, data, start, count);
        for(let i = 0; i < parsed.length; i++){
            const item = data[start + i];
            parsed[i]._custom = helpers_segment.valueOrDefault(item[2], this.resolveDataElementOptions(i + start).radius);
        }
        return parsed;
    }
 parseObjectData(meta, data, start, count) {
        const parsed = super.parseObjectData(meta, data, start, count);
        for(let i = 0; i < parsed.length; i++){
            const item = data[start + i];
            parsed[i]._custom = helpers_segment.valueOrDefault(item && item.r && +item.r, this.resolveDataElementOptions(i + start).radius);
        }
        return parsed;
    }
 getMaxOverflow() {
        const data = this._cachedMeta.data;
        let max = 0;
        for(let i = data.length - 1; i >= 0; --i){
            max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
        }
        return max > 0 && max;
    }
 getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const labels = this.chart.data.labels || [];
        const { xScale , yScale  } = meta;
        const parsed = this.getParsed(index);
        const x = xScale.getLabelForValue(parsed.x);
        const y = yScale.getLabelForValue(parsed.y);
        const r = parsed._custom;
        return {
            label: labels[index] || '',
            value: '(' + x + ', ' + y + (r ? ', ' + r : '') + ')'
        };
    }
    update(mode) {
        const points = this._cachedMeta.data;
        this.updateElements(points, 0, points.length, mode);
    }
    updateElements(points, start, count, mode) {
        const reset = mode === 'reset';
        const { iScale , vScale  } = this._cachedMeta;
        const { sharedOptions , includeOptions  } = this._getSharedOptions(start, mode);
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        for(let i = start; i < start + count; i++){
            const point = points[i];
            const parsed = !reset && this.getParsed(i);
            const properties = {};
            const iPixel = properties[iAxis] = reset ? iScale.getPixelForDecimal(0.5) : iScale.getPixelForValue(parsed[iAxis]);
            const vPixel = properties[vAxis] = reset ? vScale.getBasePixel() : vScale.getPixelForValue(parsed[vAxis]);
            properties.skip = isNaN(iPixel) || isNaN(vPixel);
            if (includeOptions) {
                properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
                if (reset) {
                    properties.options.radius = 0;
                }
            }
            this.updateElement(point, i, properties, mode);
        }
    }
 resolveDataElementOptions(index, mode) {
        const parsed = this.getParsed(index);
        let values = super.resolveDataElementOptions(index, mode);
        if (values.$shared) {
            values = Object.assign({}, values, {
                $shared: false
            });
        }
        const radius = values.radius;
        if (mode !== 'active') {
            values.radius = 0;
        }
        values.radius += helpers_segment.valueOrDefault(parsed && parsed._custom, radius);
        return values;
    }
}

function getRatioAndOffset(rotation, circumference, cutout) {
    let ratioX = 1;
    let ratioY = 1;
    let offsetX = 0;
    let offsetY = 0;
    if (circumference < helpers_segment.TAU) {
        const startAngle = rotation;
        const endAngle = startAngle + circumference;
        const startX = Math.cos(startAngle);
        const startY = Math.sin(startAngle);
        const endX = Math.cos(endAngle);
        const endY = Math.sin(endAngle);
        const calcMax = (angle, a, b)=>helpers_segment._angleBetween(angle, startAngle, endAngle, true) ? 1 : Math.max(a, a * cutout, b, b * cutout);
        const calcMin = (angle, a, b)=>helpers_segment._angleBetween(angle, startAngle, endAngle, true) ? -1 : Math.min(a, a * cutout, b, b * cutout);
        const maxX = calcMax(0, startX, endX);
        const maxY = calcMax(helpers_segment.HALF_PI, startY, endY);
        const minX = calcMin(helpers_segment.PI, startX, endX);
        const minY = calcMin(helpers_segment.PI + helpers_segment.HALF_PI, startY, endY);
        ratioX = (maxX - minX) / 2;
        ratioY = (maxY - minY) / 2;
        offsetX = -(maxX + minX) / 2;
        offsetY = -(maxY + minY) / 2;
    }
    return {
        ratioX,
        ratioY,
        offsetX,
        offsetY
    };
}
class DoughnutController extends DatasetController {
    static id = 'doughnut';
 static defaults = {
        datasetElementType: false,
        dataElementType: 'arc',
        animation: {
            animateRotate: true,
            animateScale: false
        },
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'circumference',
                    'endAngle',
                    'innerRadius',
                    'outerRadius',
                    'startAngle',
                    'x',
                    'y',
                    'offset',
                    'borderWidth',
                    'spacing'
                ]
            }
        },
        cutout: '50%',
        rotation: 0,
        circumference: 360,
        radius: '100%',
        spacing: 0,
        indexAxis: 'r'
    };
    static descriptors = {
        _scriptable: (name)=>name !== 'spacing',
        _indexable: (name)=>name !== 'spacing' && !name.startsWith('borderDash') && !name.startsWith('hoverBorderDash')
    };
 static overrides = {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels (chart) {
                        const data = chart.data;
                        if (data.labels.length && data.datasets.length) {
                            const { labels: { pointStyle , color  }  } = chart.legend.options;
                            return data.labels.map((label, i)=>{
                                const meta = chart.getDatasetMeta(0);
                                const style = meta.controller.getStyle(i);
                                return {
                                    text: label,
                                    fillStyle: style.backgroundColor,
                                    strokeStyle: style.borderColor,
                                    fontColor: color,
                                    lineWidth: style.borderWidth,
                                    pointStyle: pointStyle,
                                    hidden: !chart.getDataVisibility(i),
                                    index: i
                                };
                            });
                        }
                        return [];
                    }
                },
                onClick (e, legendItem, legend) {
                    legend.chart.toggleDataVisibility(legendItem.index);
                    legend.chart.update();
                }
            }
        }
    };
    constructor(chart, datasetIndex){
        super(chart, datasetIndex);
        this.enableOptionSharing = true;
        this.innerRadius = undefined;
        this.outerRadius = undefined;
        this.offsetX = undefined;
        this.offsetY = undefined;
    }
    linkScales() {}
 parse(start, count) {
        const data = this.getDataset().data;
        const meta = this._cachedMeta;
        if (this._parsing === false) {
            meta._parsed = data;
        } else {
            let getter = (i)=>+data[i];
            if (helpers_segment.isObject(data[start])) {
                const { key ='value'  } = this._parsing;
                getter = (i)=>+helpers_segment.resolveObjectKey(data[i], key);
            }
            let i, ilen;
            for(i = start, ilen = start + count; i < ilen; ++i){
                meta._parsed[i] = getter(i);
            }
        }
    }
 _getRotation() {
        return helpers_segment.toRadians(this.options.rotation - 90);
    }
 _getCircumference() {
        return helpers_segment.toRadians(this.options.circumference);
    }
 _getRotationExtents() {
        let min = helpers_segment.TAU;
        let max = -helpers_segment.TAU;
        for(let i = 0; i < this.chart.data.datasets.length; ++i){
            if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) {
                const controller = this.chart.getDatasetMeta(i).controller;
                const rotation = controller._getRotation();
                const circumference = controller._getCircumference();
                min = Math.min(min, rotation);
                max = Math.max(max, rotation + circumference);
            }
        }
        return {
            rotation: min,
            circumference: max - min
        };
    }
 update(mode) {
        const chart = this.chart;
        const { chartArea  } = chart;
        const meta = this._cachedMeta;
        const arcs = meta.data;
        const spacing = this.getMaxBorderWidth() + this.getMaxOffset(arcs) + this.options.spacing;
        const maxSize = Math.max((Math.min(chartArea.width, chartArea.height) - spacing) / 2, 0);
        const cutout = Math.min(helpers_segment.toPercentage(this.options.cutout, maxSize), 1);
        const chartWeight = this._getRingWeight(this.index);
        const { circumference , rotation  } = this._getRotationExtents();
        const { ratioX , ratioY , offsetX , offsetY  } = getRatioAndOffset(rotation, circumference, cutout);
        const maxWidth = (chartArea.width - spacing) / ratioX;
        const maxHeight = (chartArea.height - spacing) / ratioY;
        const maxRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
        const outerRadius = helpers_segment.toDimension(this.options.radius, maxRadius);
        const innerRadius = Math.max(outerRadius * cutout, 0);
        const radiusLength = (outerRadius - innerRadius) / this._getVisibleDatasetWeightTotal();
        this.offsetX = offsetX * outerRadius;
        this.offsetY = offsetY * outerRadius;
        meta.total = this.calculateTotal();
        this.outerRadius = outerRadius - radiusLength * this._getRingWeightOffset(this.index);
        this.innerRadius = Math.max(this.outerRadius - radiusLength * chartWeight, 0);
        this.updateElements(arcs, 0, arcs.length, mode);
    }
 _circumference(i, reset) {
        const opts = this.options;
        const meta = this._cachedMeta;
        const circumference = this._getCircumference();
        if (reset && opts.animation.animateRotate || !this.chart.getDataVisibility(i) || meta._parsed[i] === null || meta.data[i].hidden) {
            return 0;
        }
        return this.calculateCircumference(meta._parsed[i] * circumference / helpers_segment.TAU);
    }
    updateElements(arcs, start, count, mode) {
        const reset = mode === 'reset';
        const chart = this.chart;
        const chartArea = chart.chartArea;
        const opts = chart.options;
        const animationOpts = opts.animation;
        const centerX = (chartArea.left + chartArea.right) / 2;
        const centerY = (chartArea.top + chartArea.bottom) / 2;
        const animateScale = reset && animationOpts.animateScale;
        const innerRadius = animateScale ? 0 : this.innerRadius;
        const outerRadius = animateScale ? 0 : this.outerRadius;
        const { sharedOptions , includeOptions  } = this._getSharedOptions(start, mode);
        let startAngle = this._getRotation();
        let i;
        for(i = 0; i < start; ++i){
            startAngle += this._circumference(i, reset);
        }
        for(i = start; i < start + count; ++i){
            const circumference = this._circumference(i, reset);
            const arc = arcs[i];
            const properties = {
                x: centerX + this.offsetX,
                y: centerY + this.offsetY,
                startAngle,
                endAngle: startAngle + circumference,
                circumference,
                outerRadius,
                innerRadius
            };
            if (includeOptions) {
                properties.options = sharedOptions || this.resolveDataElementOptions(i, arc.active ? 'active' : mode);
            }
            startAngle += circumference;
            this.updateElement(arc, i, properties, mode);
        }
    }
    calculateTotal() {
        const meta = this._cachedMeta;
        const metaData = meta.data;
        let total = 0;
        let i;
        for(i = 0; i < metaData.length; i++){
            const value = meta._parsed[i];
            if (value !== null && !isNaN(value) && this.chart.getDataVisibility(i) && !metaData[i].hidden) {
                total += Math.abs(value);
            }
        }
        return total;
    }
    calculateCircumference(value) {
        const total = this._cachedMeta.total;
        if (total > 0 && !isNaN(value)) {
            return helpers_segment.TAU * (Math.abs(value) / total);
        }
        return 0;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const chart = this.chart;
        const labels = chart.data.labels || [];
        const value = helpers_segment.formatNumber(meta._parsed[index], chart.options.locale);
        return {
            label: labels[index] || '',
            value
        };
    }
    getMaxBorderWidth(arcs) {
        let max = 0;
        const chart = this.chart;
        let i, ilen, meta, controller, options;
        if (!arcs) {
            for(i = 0, ilen = chart.data.datasets.length; i < ilen; ++i){
                if (chart.isDatasetVisible(i)) {
                    meta = chart.getDatasetMeta(i);
                    arcs = meta.data;
                    controller = meta.controller;
                    break;
                }
            }
        }
        if (!arcs) {
            return 0;
        }
        for(i = 0, ilen = arcs.length; i < ilen; ++i){
            options = controller.resolveDataElementOptions(i);
            if (options.borderAlign !== 'inner') {
                max = Math.max(max, options.borderWidth || 0, options.hoverBorderWidth || 0);
            }
        }
        return max;
    }
    getMaxOffset(arcs) {
        let max = 0;
        for(let i = 0, ilen = arcs.length; i < ilen; ++i){
            const options = this.resolveDataElementOptions(i);
            max = Math.max(max, options.offset || 0, options.hoverOffset || 0);
        }
        return max;
    }
 _getRingWeightOffset(datasetIndex) {
        let ringWeightOffset = 0;
        for(let i = 0; i < datasetIndex; ++i){
            if (this.chart.isDatasetVisible(i)) {
                ringWeightOffset += this._getRingWeight(i);
            }
        }
        return ringWeightOffset;
    }
 _getRingWeight(datasetIndex) {
        return Math.max(helpers_segment.valueOrDefault(this.chart.data.datasets[datasetIndex].weight, 1), 0);
    }
 _getVisibleDatasetWeightTotal() {
        return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
    }
}

class LineController extends DatasetController {
    static id = 'line';
 static defaults = {
        datasetElementType: 'line',
        dataElementType: 'point',
        showLine: true,
        spanGaps: false
    };
 static overrides = {
        scales: {
            _index_: {
                type: 'category'
            },
            _value_: {
                type: 'linear'
            }
        }
    };
    initialize() {
        this.enableOptionSharing = true;
        this.supportsDecimation = true;
        super.initialize();
    }
    update(mode) {
        const meta = this._cachedMeta;
        const { dataset: line , data: points = [] , _dataset  } = meta;
        const animationsDisabled = this.chart._animationsDisabled;
        let { start , count  } = helpers_segment._getStartAndCountOfVisiblePoints(meta, points, animationsDisabled);
        this._drawStart = start;
        this._drawCount = count;
        if (helpers_segment._scaleRangesChanged(meta)) {
            start = 0;
            count = points.length;
        }
        line._chart = this.chart;
        line._datasetIndex = this.index;
        line._decimated = !!_dataset._decimated;
        line.points = points;
        const options = this.resolveDatasetElementOptions(mode);
        if (!this.options.showLine) {
            options.borderWidth = 0;
        }
        options.segment = this.options.segment;
        this.updateElement(line, undefined, {
            animated: !animationsDisabled,
            options
        }, mode);
        this.updateElements(points, start, count, mode);
    }
    updateElements(points, start, count, mode) {
        const reset = mode === 'reset';
        const { iScale , vScale , _stacked , _dataset  } = this._cachedMeta;
        const { sharedOptions , includeOptions  } = this._getSharedOptions(start, mode);
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        const { spanGaps , segment  } = this.options;
        const maxGapLength = helpers_segment.isNumber(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
        const directUpdate = this.chart._animationsDisabled || reset || mode === 'none';
        const end = start + count;
        const pointsCount = points.length;
        let prevParsed = start > 0 && this.getParsed(start - 1);
        for(let i = 0; i < pointsCount; ++i){
            const point = points[i];
            const properties = directUpdate ? point : {};
            if (i < start || i >= end) {
                properties.skip = true;
                continue;
            }
            const parsed = this.getParsed(i);
            const nullData = helpers_segment.isNullOrUndef(parsed[vAxis]);
            const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
            const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
            properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
            properties.stop = i > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
            if (segment) {
                properties.parsed = parsed;
                properties.raw = _dataset.data[i];
            }
            if (includeOptions) {
                properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
            }
            if (!directUpdate) {
                this.updateElement(point, i, properties, mode);
            }
            prevParsed = parsed;
        }
    }
 getMaxOverflow() {
        const meta = this._cachedMeta;
        const dataset = meta.dataset;
        const border = dataset.options && dataset.options.borderWidth || 0;
        const data = meta.data || [];
        if (!data.length) {
            return border;
        }
        const firstPoint = data[0].size(this.resolveDataElementOptions(0));
        const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
        return Math.max(border, firstPoint, lastPoint) / 2;
    }
    draw() {
        const meta = this._cachedMeta;
        meta.dataset.updateControlPoints(this.chart.chartArea, meta.iScale.axis);
        super.draw();
    }
}

class PolarAreaController extends DatasetController {
    static id = 'polarArea';
 static defaults = {
        dataElementType: 'arc',
        animation: {
            animateRotate: true,
            animateScale: true
        },
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'x',
                    'y',
                    'startAngle',
                    'endAngle',
                    'innerRadius',
                    'outerRadius'
                ]
            }
        },
        indexAxis: 'r',
        startAngle: 0
    };
 static overrides = {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels (chart) {
                        const data = chart.data;
                        if (data.labels.length && data.datasets.length) {
                            const { labels: { pointStyle , color  }  } = chart.legend.options;
                            return data.labels.map((label, i)=>{
                                const meta = chart.getDatasetMeta(0);
                                const style = meta.controller.getStyle(i);
                                return {
                                    text: label,
                                    fillStyle: style.backgroundColor,
                                    strokeStyle: style.borderColor,
                                    fontColor: color,
                                    lineWidth: style.borderWidth,
                                    pointStyle: pointStyle,
                                    hidden: !chart.getDataVisibility(i),
                                    index: i
                                };
                            });
                        }
                        return [];
                    }
                },
                onClick (e, legendItem, legend) {
                    legend.chart.toggleDataVisibility(legendItem.index);
                    legend.chart.update();
                }
            }
        },
        scales: {
            r: {
                type: 'radialLinear',
                angleLines: {
                    display: false
                },
                beginAtZero: true,
                grid: {
                    circular: true
                },
                pointLabels: {
                    display: false
                },
                startAngle: 0
            }
        }
    };
    constructor(chart, datasetIndex){
        super(chart, datasetIndex);
        this.innerRadius = undefined;
        this.outerRadius = undefined;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const chart = this.chart;
        const labels = chart.data.labels || [];
        const value = helpers_segment.formatNumber(meta._parsed[index].r, chart.options.locale);
        return {
            label: labels[index] || '',
            value
        };
    }
    parseObjectData(meta, data, start, count) {
        return helpers_segment._parseObjectDataRadialScale.bind(this)(meta, data, start, count);
    }
    update(mode) {
        const arcs = this._cachedMeta.data;
        this._updateRadius();
        this.updateElements(arcs, 0, arcs.length, mode);
    }
 getMinMax() {
        const meta = this._cachedMeta;
        const range = {
            min: Number.POSITIVE_INFINITY,
            max: Number.NEGATIVE_INFINITY
        };
        meta.data.forEach((element, index)=>{
            const parsed = this.getParsed(index).r;
            if (!isNaN(parsed) && this.chart.getDataVisibility(index)) {
                if (parsed < range.min) {
                    range.min = parsed;
                }
                if (parsed > range.max) {
                    range.max = parsed;
                }
            }
        });
        return range;
    }
 _updateRadius() {
        const chart = this.chart;
        const chartArea = chart.chartArea;
        const opts = chart.options;
        const minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
        const outerRadius = Math.max(minSize / 2, 0);
        const innerRadius = Math.max(opts.cutoutPercentage ? outerRadius / 100 * opts.cutoutPercentage : 1, 0);
        const radiusLength = (outerRadius - innerRadius) / chart.getVisibleDatasetCount();
        this.outerRadius = outerRadius - radiusLength * this.index;
        this.innerRadius = this.outerRadius - radiusLength;
    }
    updateElements(arcs, start, count, mode) {
        const reset = mode === 'reset';
        const chart = this.chart;
        const opts = chart.options;
        const animationOpts = opts.animation;
        const scale = this._cachedMeta.rScale;
        const centerX = scale.xCenter;
        const centerY = scale.yCenter;
        const datasetStartAngle = scale.getIndexAngle(0) - 0.5 * helpers_segment.PI;
        let angle = datasetStartAngle;
        let i;
        const defaultAngle = 360 / this.countVisibleElements();
        for(i = 0; i < start; ++i){
            angle += this._computeAngle(i, mode, defaultAngle);
        }
        for(i = start; i < start + count; i++){
            const arc = arcs[i];
            let startAngle = angle;
            let endAngle = angle + this._computeAngle(i, mode, defaultAngle);
            let outerRadius = chart.getDataVisibility(i) ? scale.getDistanceFromCenterForValue(this.getParsed(i).r) : 0;
            angle = endAngle;
            if (reset) {
                if (animationOpts.animateScale) {
                    outerRadius = 0;
                }
                if (animationOpts.animateRotate) {
                    startAngle = endAngle = datasetStartAngle;
                }
            }
            const properties = {
                x: centerX,
                y: centerY,
                innerRadius: 0,
                outerRadius,
                startAngle,
                endAngle,
                options: this.resolveDataElementOptions(i, arc.active ? 'active' : mode)
            };
            this.updateElement(arc, i, properties, mode);
        }
    }
    countVisibleElements() {
        const meta = this._cachedMeta;
        let count = 0;
        meta.data.forEach((element, index)=>{
            if (!isNaN(this.getParsed(index).r) && this.chart.getDataVisibility(index)) {
                count++;
            }
        });
        return count;
    }
 _computeAngle(index, mode, defaultAngle) {
        return this.chart.getDataVisibility(index) ? helpers_segment.toRadians(this.resolveDataElementOptions(index, mode).angle || defaultAngle) : 0;
    }
}

class PieController extends DoughnutController {
    static id = 'pie';
 static defaults = {
        cutout: 0,
        rotation: 0,
        circumference: 360,
        radius: '100%'
    };
}

class RadarController extends DatasetController {
    static id = 'radar';
 static defaults = {
        datasetElementType: 'line',
        dataElementType: 'point',
        indexAxis: 'r',
        showLine: true,
        elements: {
            line: {
                fill: 'start'
            }
        }
    };
 static overrides = {
        aspectRatio: 1,
        scales: {
            r: {
                type: 'radialLinear'
            }
        }
    };
 getLabelAndValue(index) {
        const vScale = this._cachedMeta.vScale;
        const parsed = this.getParsed(index);
        return {
            label: vScale.getLabels()[index],
            value: '' + vScale.getLabelForValue(parsed[vScale.axis])
        };
    }
    parseObjectData(meta, data, start, count) {
        return helpers_segment._parseObjectDataRadialScale.bind(this)(meta, data, start, count);
    }
    update(mode) {
        const meta = this._cachedMeta;
        const line = meta.dataset;
        const points = meta.data || [];
        const labels = meta.iScale.getLabels();
        line.points = points;
        if (mode !== 'resize') {
            const options = this.resolveDatasetElementOptions(mode);
            if (!this.options.showLine) {
                options.borderWidth = 0;
            }
            const properties = {
                _loop: true,
                _fullLoop: labels.length === points.length,
                options
            };
            this.updateElement(line, undefined, properties, mode);
        }
        this.updateElements(points, 0, points.length, mode);
    }
    updateElements(points, start, count, mode) {
        const scale = this._cachedMeta.rScale;
        const reset = mode === 'reset';
        for(let i = start; i < start + count; i++){
            const point = points[i];
            const options = this.resolveDataElementOptions(i, point.active ? 'active' : mode);
            const pointPosition = scale.getPointPositionForValue(i, this.getParsed(i).r);
            const x = reset ? scale.xCenter : pointPosition.x;
            const y = reset ? scale.yCenter : pointPosition.y;
            const properties = {
                x,
                y,
                angle: pointPosition.angle,
                skip: isNaN(x) || isNaN(y),
                options
            };
            this.updateElement(point, i, properties, mode);
        }
    }
}

class ScatterController extends DatasetController {
    static id = 'scatter';
 static defaults = {
        datasetElementType: false,
        dataElementType: 'point',
        showLine: false,
        fill: false
    };
 static overrides = {
        interaction: {
            mode: 'point'
        },
        scales: {
            x: {
                type: 'linear'
            },
            y: {
                type: 'linear'
            }
        }
    };
 getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const labels = this.chart.data.labels || [];
        const { xScale , yScale  } = meta;
        const parsed = this.getParsed(index);
        const x = xScale.getLabelForValue(parsed.x);
        const y = yScale.getLabelForValue(parsed.y);
        return {
            label: labels[index] || '',
            value: '(' + x + ', ' + y + ')'
        };
    }
    update(mode) {
        const meta = this._cachedMeta;
        const { data: points = []  } = meta;
        const animationsDisabled = this.chart._animationsDisabled;
        let { start , count  } = helpers_segment._getStartAndCountOfVisiblePoints(meta, points, animationsDisabled);
        this._drawStart = start;
        this._drawCount = count;
        if (helpers_segment._scaleRangesChanged(meta)) {
            start = 0;
            count = points.length;
        }
        if (this.options.showLine) {
            if (!this.datasetElementType) {
                this.addElements();
            }
            const { dataset: line , _dataset  } = meta;
            line._chart = this.chart;
            line._datasetIndex = this.index;
            line._decimated = !!_dataset._decimated;
            line.points = points;
            const options = this.resolveDatasetElementOptions(mode);
            options.segment = this.options.segment;
            this.updateElement(line, undefined, {
                animated: !animationsDisabled,
                options
            }, mode);
        } else if (this.datasetElementType) {
            delete meta.dataset;
            this.datasetElementType = false;
        }
        this.updateElements(points, start, count, mode);
    }
    addElements() {
        const { showLine  } = this.options;
        if (!this.datasetElementType && showLine) {
            this.datasetElementType = this.chart.registry.getElement('line');
        }
        super.addElements();
    }
    updateElements(points, start, count, mode) {
        const reset = mode === 'reset';
        const { iScale , vScale , _stacked , _dataset  } = this._cachedMeta;
        const firstOpts = this.resolveDataElementOptions(start, mode);
        const sharedOptions = this.getSharedOptions(firstOpts);
        const includeOptions = this.includeOptions(mode, sharedOptions);
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        const { spanGaps , segment  } = this.options;
        const maxGapLength = helpers_segment.isNumber(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
        const directUpdate = this.chart._animationsDisabled || reset || mode === 'none';
        let prevParsed = start > 0 && this.getParsed(start - 1);
        for(let i = start; i < start + count; ++i){
            const point = points[i];
            const parsed = this.getParsed(i);
            const properties = directUpdate ? point : {};
            const nullData = helpers_segment.isNullOrUndef(parsed[vAxis]);
            const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
            const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
            properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
            properties.stop = i > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
            if (segment) {
                properties.parsed = parsed;
                properties.raw = _dataset.data[i];
            }
            if (includeOptions) {
                properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
            }
            if (!directUpdate) {
                this.updateElement(point, i, properties, mode);
            }
            prevParsed = parsed;
        }
        this.updateSharedOptions(sharedOptions, mode, firstOpts);
    }
 getMaxOverflow() {
        const meta = this._cachedMeta;
        const data = meta.data || [];
        if (!this.options.showLine) {
            let max = 0;
            for(let i = data.length - 1; i >= 0; --i){
                max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
            }
            return max > 0 && max;
        }
        const dataset = meta.dataset;
        const border = dataset.options && dataset.options.borderWidth || 0;
        if (!data.length) {
            return border;
        }
        const firstPoint = data[0].size(this.resolveDataElementOptions(0));
        const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
        return Math.max(border, firstPoint, lastPoint) / 2;
    }
}

var controllers = /*#__PURE__*/Object.freeze({
__proto__: null,
BarController: BarController,
BubbleController: BubbleController,
DoughnutController: DoughnutController,
LineController: LineController,
PieController: PieController,
PolarAreaController: PolarAreaController,
RadarController: RadarController,
ScatterController: ScatterController
});

/**
 * @namespace Chart._adapters
 * @since 2.8.0
 * @private
 */ function abstract() {
    throw new Error('This method is not implemented: Check that a complete date adapter is provided.');
}
/**
 * Date adapter (current used by the time scale)
 * @namespace Chart._adapters._date
 * @memberof Chart._adapters
 * @private
 */ class DateAdapterBase {
    /**
   * Override default date adapter methods.
   * Accepts type parameter to define options type.
   * @example
   * Chart._adapters._date.override<{myAdapterOption: string}>({
   *   init() {
   *     console.log(this.options.myAdapterOption);
   *   }
   * })
   */ static override(members) {
        Object.assign(DateAdapterBase.prototype, members);
    }
    options;
    constructor(options){
        this.options = options || {};
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    init() {}
    formats() {
        return abstract();
    }
    parse() {
        return abstract();
    }
    format() {
        return abstract();
    }
    add() {
        return abstract();
    }
    diff() {
        return abstract();
    }
    startOf() {
        return abstract();
    }
    endOf() {
        return abstract();
    }
}
var adapters = {
    _date: DateAdapterBase
};

function binarySearch(metaset, axis, value, intersect) {
    const { controller , data , _sorted  } = metaset;
    const iScale = controller._cachedMeta.iScale;
    if (iScale && axis === iScale.axis && axis !== 'r' && _sorted && data.length) {
        const lookupMethod = iScale._reversePixels ? helpers_segment._rlookupByKey : helpers_segment._lookupByKey;
        if (!intersect) {
            return lookupMethod(data, axis, value);
        } else if (controller._sharedOptions) {
            const el = data[0];
            const range = typeof el.getRange === 'function' && el.getRange(axis);
            if (range) {
                const start = lookupMethod(data, axis, value - range);
                const end = lookupMethod(data, axis, value + range);
                return {
                    lo: start.lo,
                    hi: end.hi
                };
            }
        }
    }
    return {
        lo: 0,
        hi: data.length - 1
    };
}
 function evaluateInteractionItems(chart, axis, position, handler, intersect) {
    const metasets = chart.getSortedVisibleDatasetMetas();
    const value = position[axis];
    for(let i = 0, ilen = metasets.length; i < ilen; ++i){
        const { index , data  } = metasets[i];
        const { lo , hi  } = binarySearch(metasets[i], axis, value, intersect);
        for(let j = lo; j <= hi; ++j){
            const element = data[j];
            if (!element.skip) {
                handler(element, index, j);
            }
        }
    }
}
 function getDistanceMetricForAxis(axis) {
    const useX = axis.indexOf('x') !== -1;
    const useY = axis.indexOf('y') !== -1;
    return function(pt1, pt2) {
        const deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
        const deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
        return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    };
}
 function getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) {
    const items = [];
    if (!includeInvisible && !chart.isPointInArea(position)) {
        return items;
    }
    const evaluationFunc = function(element, datasetIndex, index) {
        if (!includeInvisible && !helpers_segment._isPointInArea(element, chart.chartArea, 0)) {
            return;
        }
        if (element.inRange(position.x, position.y, useFinalPosition)) {
            items.push({
                element,
                datasetIndex,
                index
            });
        }
    };
    evaluateInteractionItems(chart, axis, position, evaluationFunc, true);
    return items;
}
 function getNearestRadialItems(chart, position, axis, useFinalPosition) {
    let items = [];
    function evaluationFunc(element, datasetIndex, index) {
        const { startAngle , endAngle  } = element.getProps([
            'startAngle',
            'endAngle'
        ], useFinalPosition);
        const { angle  } = helpers_segment.getAngleFromPoint(element, {
            x: position.x,
            y: position.y
        });
        if (helpers_segment._angleBetween(angle, startAngle, endAngle)) {
            items.push({
                element,
                datasetIndex,
                index
            });
        }
    }
    evaluateInteractionItems(chart, axis, position, evaluationFunc);
    return items;
}
 function getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
    let items = [];
    const distanceMetric = getDistanceMetricForAxis(axis);
    let minDistance = Number.POSITIVE_INFINITY;
    function evaluationFunc(element, datasetIndex, index) {
        const inRange = element.inRange(position.x, position.y, useFinalPosition);
        if (intersect && !inRange) {
            return;
        }
        const center = element.getCenterPoint(useFinalPosition);
        const pointInArea = !!includeInvisible || chart.isPointInArea(center);
        if (!pointInArea && !inRange) {
            return;
        }
        const distance = distanceMetric(position, center);
        if (distance < minDistance) {
            items = [
                {
                    element,
                    datasetIndex,
                    index
                }
            ];
            minDistance = distance;
        } else if (distance === minDistance) {
            items.push({
                element,
                datasetIndex,
                index
            });
        }
    }
    evaluateInteractionItems(chart, axis, position, evaluationFunc);
    return items;
}
 function getNearestItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
    if (!includeInvisible && !chart.isPointInArea(position)) {
        return [];
    }
    return axis === 'r' && !intersect ? getNearestRadialItems(chart, position, axis, useFinalPosition) : getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible);
}
 function getAxisItems(chart, position, axis, intersect, useFinalPosition) {
    const items = [];
    const rangeMethod = axis === 'x' ? 'inXRange' : 'inYRange';
    let intersectsItem = false;
    evaluateInteractionItems(chart, axis, position, (element, datasetIndex, index)=>{
        if (element[rangeMethod](position[axis], useFinalPosition)) {
            items.push({
                element,
                datasetIndex,
                index
            });
            intersectsItem = intersectsItem || element.inRange(position.x, position.y, useFinalPosition);
        }
    });
    if (intersect && !intersectsItem) {
        return [];
    }
    return items;
}
 var Interaction = {
    evaluateInteractionItems,
    modes: {
 index (chart, e, options, useFinalPosition) {
            const position = helpers_segment.getRelativePosition(e, chart);
            const axis = options.axis || 'x';
            const includeInvisible = options.includeInvisible || false;
            const items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
            const elements = [];
            if (!items.length) {
                return [];
            }
            chart.getSortedVisibleDatasetMetas().forEach((meta)=>{
                const index = items[0].index;
                const element = meta.data[index];
                if (element && !element.skip) {
                    elements.push({
                        element,
                        datasetIndex: meta.index,
                        index
                    });
                }
            });
            return elements;
        },
 dataset (chart, e, options, useFinalPosition) {
            const position = helpers_segment.getRelativePosition(e, chart);
            const axis = options.axis || 'xy';
            const includeInvisible = options.includeInvisible || false;
            let items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
            if (items.length > 0) {
                const datasetIndex = items[0].datasetIndex;
                const data = chart.getDatasetMeta(datasetIndex).data;
                items = [];
                for(let i = 0; i < data.length; ++i){
                    items.push({
                        element: data[i],
                        datasetIndex,
                        index: i
                    });
                }
            }
            return items;
        },
 point (chart, e, options, useFinalPosition) {
            const position = helpers_segment.getRelativePosition(e, chart);
            const axis = options.axis || 'xy';
            const includeInvisible = options.includeInvisible || false;
            return getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible);
        },
 nearest (chart, e, options, useFinalPosition) {
            const position = helpers_segment.getRelativePosition(e, chart);
            const axis = options.axis || 'xy';
            const includeInvisible = options.includeInvisible || false;
            return getNearestItems(chart, position, axis, options.intersect, useFinalPosition, includeInvisible);
        },
 x (chart, e, options, useFinalPosition) {
            const position = helpers_segment.getRelativePosition(e, chart);
            return getAxisItems(chart, position, 'x', options.intersect, useFinalPosition);
        },
 y (chart, e, options, useFinalPosition) {
            const position = helpers_segment.getRelativePosition(e, chart);
            return getAxisItems(chart, position, 'y', options.intersect, useFinalPosition);
        }
    }
};

const STATIC_POSITIONS = [
    'left',
    'top',
    'right',
    'bottom'
];
function filterByPosition(array, position) {
    return array.filter((v)=>v.pos === position);
}
function filterDynamicPositionByAxis(array, axis) {
    return array.filter((v)=>STATIC_POSITIONS.indexOf(v.pos) === -1 && v.box.axis === axis);
}
function sortByWeight(array, reverse) {
    return array.sort((a, b)=>{
        const v0 = reverse ? b : a;
        const v1 = reverse ? a : b;
        return v0.weight === v1.weight ? v0.index - v1.index : v0.weight - v1.weight;
    });
}
function wrapBoxes(boxes) {
    const layoutBoxes = [];
    let i, ilen, box, pos, stack, stackWeight;
    for(i = 0, ilen = (boxes || []).length; i < ilen; ++i){
        box = boxes[i];
        ({ position: pos , options: { stack , stackWeight =1  }  } = box);
        layoutBoxes.push({
            index: i,
            box,
            pos,
            horizontal: box.isHorizontal(),
            weight: box.weight,
            stack: stack && pos + stack,
            stackWeight
        });
    }
    return layoutBoxes;
}
function buildStacks(layouts) {
    const stacks = {};
    for (const wrap of layouts){
        const { stack , pos , stackWeight  } = wrap;
        if (!stack || !STATIC_POSITIONS.includes(pos)) {
            continue;
        }
        const _stack = stacks[stack] || (stacks[stack] = {
            count: 0,
            placed: 0,
            weight: 0,
            size: 0
        });
        _stack.count++;
        _stack.weight += stackWeight;
    }
    return stacks;
}
 function setLayoutDims(layouts, params) {
    const stacks = buildStacks(layouts);
    const { vBoxMaxWidth , hBoxMaxHeight  } = params;
    let i, ilen, layout;
    for(i = 0, ilen = layouts.length; i < ilen; ++i){
        layout = layouts[i];
        const { fullSize  } = layout.box;
        const stack = stacks[layout.stack];
        const factor = stack && layout.stackWeight / stack.weight;
        if (layout.horizontal) {
            layout.width = factor ? factor * vBoxMaxWidth : fullSize && params.availableWidth;
            layout.height = hBoxMaxHeight;
        } else {
            layout.width = vBoxMaxWidth;
            layout.height = factor ? factor * hBoxMaxHeight : fullSize && params.availableHeight;
        }
    }
    return stacks;
}
function buildLayoutBoxes(boxes) {
    const layoutBoxes = wrapBoxes(boxes);
    const fullSize = sortByWeight(layoutBoxes.filter((wrap)=>wrap.box.fullSize), true);
    const left = sortByWeight(filterByPosition(layoutBoxes, 'left'), true);
    const right = sortByWeight(filterByPosition(layoutBoxes, 'right'));
    const top = sortByWeight(filterByPosition(layoutBoxes, 'top'), true);
    const bottom = sortByWeight(filterByPosition(layoutBoxes, 'bottom'));
    const centerHorizontal = filterDynamicPositionByAxis(layoutBoxes, 'x');
    const centerVertical = filterDynamicPositionByAxis(layoutBoxes, 'y');
    return {
        fullSize,
        leftAndTop: left.concat(top),
        rightAndBottom: right.concat(centerVertical).concat(bottom).concat(centerHorizontal),
        chartArea: filterByPosition(layoutBoxes, 'chartArea'),
        vertical: left.concat(right).concat(centerVertical),
        horizontal: top.concat(bottom).concat(centerHorizontal)
    };
}
function getCombinedMax(maxPadding, chartArea, a, b) {
    return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
}
function updateMaxPadding(maxPadding, boxPadding) {
    maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
    maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
    maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
    maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
}
function updateDims(chartArea, params, layout, stacks) {
    const { pos , box  } = layout;
    const maxPadding = chartArea.maxPadding;
    if (!helpers_segment.isObject(pos)) {
        if (layout.size) {
            chartArea[pos] -= layout.size;
        }
        const stack = stacks[layout.stack] || {
            size: 0,
            count: 1
        };
        stack.size = Math.max(stack.size, layout.horizontal ? box.height : box.width);
        layout.size = stack.size / stack.count;
        chartArea[pos] += layout.size;
    }
    if (box.getPadding) {
        updateMaxPadding(maxPadding, box.getPadding());
    }
    const newWidth = Math.max(0, params.outerWidth - getCombinedMax(maxPadding, chartArea, 'left', 'right'));
    const newHeight = Math.max(0, params.outerHeight - getCombinedMax(maxPadding, chartArea, 'top', 'bottom'));
    const widthChanged = newWidth !== chartArea.w;
    const heightChanged = newHeight !== chartArea.h;
    chartArea.w = newWidth;
    chartArea.h = newHeight;
    return layout.horizontal ? {
        same: widthChanged,
        other: heightChanged
    } : {
        same: heightChanged,
        other: widthChanged
    };
}
function handleMaxPadding(chartArea) {
    const maxPadding = chartArea.maxPadding;
    function updatePos(pos) {
        const change = Math.max(maxPadding[pos] - chartArea[pos], 0);
        chartArea[pos] += change;
        return change;
    }
    chartArea.y += updatePos('top');
    chartArea.x += updatePos('left');
    updatePos('right');
    updatePos('bottom');
}
function getMargins(horizontal, chartArea) {
    const maxPadding = chartArea.maxPadding;
    function marginForPositions(positions) {
        const margin = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        };
        positions.forEach((pos)=>{
            margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
        });
        return margin;
    }
    return horizontal ? marginForPositions([
        'left',
        'right'
    ]) : marginForPositions([
        'top',
        'bottom'
    ]);
}
function fitBoxes(boxes, chartArea, params, stacks) {
    const refitBoxes = [];
    let i, ilen, layout, box, refit, changed;
    for(i = 0, ilen = boxes.length, refit = 0; i < ilen; ++i){
        layout = boxes[i];
        box = layout.box;
        box.update(layout.width || chartArea.w, layout.height || chartArea.h, getMargins(layout.horizontal, chartArea));
        const { same , other  } = updateDims(chartArea, params, layout, stacks);
        refit |= same && refitBoxes.length;
        changed = changed || other;
        if (!box.fullSize) {
            refitBoxes.push(layout);
        }
    }
    return refit && fitBoxes(refitBoxes, chartArea, params, stacks) || changed;
}
function setBoxDims(box, left, top, width, height) {
    box.top = top;
    box.left = left;
    box.right = left + width;
    box.bottom = top + height;
    box.width = width;
    box.height = height;
}
function placeBoxes(boxes, chartArea, params, stacks) {
    const userPadding = params.padding;
    let { x , y  } = chartArea;
    for (const layout of boxes){
        const box = layout.box;
        const stack = stacks[layout.stack] || {
            count: 1,
            placed: 0,
            weight: 1
        };
        const weight = layout.stackWeight / stack.weight || 1;
        if (layout.horizontal) {
            const width = chartArea.w * weight;
            const height = stack.size || box.height;
            if (helpers_segment.defined(stack.start)) {
                y = stack.start;
            }
            if (box.fullSize) {
                setBoxDims(box, userPadding.left, y, params.outerWidth - userPadding.right - userPadding.left, height);
            } else {
                setBoxDims(box, chartArea.left + stack.placed, y, width, height);
            }
            stack.start = y;
            stack.placed += width;
            y = box.bottom;
        } else {
            const height = chartArea.h * weight;
            const width = stack.size || box.width;
            if (helpers_segment.defined(stack.start)) {
                x = stack.start;
            }
            if (box.fullSize) {
                setBoxDims(box, x, userPadding.top, width, params.outerHeight - userPadding.bottom - userPadding.top);
            } else {
                setBoxDims(box, x, chartArea.top + stack.placed, width, height);
            }
            stack.start = x;
            stack.placed += height;
            x = box.right;
        }
    }
    chartArea.x = x;
    chartArea.y = y;
}
var layouts = {
 addBox (chart, item) {
        if (!chart.boxes) {
            chart.boxes = [];
        }
        item.fullSize = item.fullSize || false;
        item.position = item.position || 'top';
        item.weight = item.weight || 0;
        item._layers = item._layers || function() {
            return [
                {
                    z: 0,
                    draw (chartArea) {
                        item.draw(chartArea);
                    }
                }
            ];
        };
        chart.boxes.push(item);
    },
 removeBox (chart, layoutItem) {
        const index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
        if (index !== -1) {
            chart.boxes.splice(index, 1);
        }
    },
 configure (chart, item, options) {
        item.fullSize = options.fullSize;
        item.position = options.position;
        item.weight = options.weight;
    },
 update (chart, width, height, minPadding) {
        if (!chart) {
            return;
        }
        const padding = helpers_segment.toPadding(chart.options.layout.padding);
        const availableWidth = Math.max(width - padding.width, 0);
        const availableHeight = Math.max(height - padding.height, 0);
        const boxes = buildLayoutBoxes(chart.boxes);
        const verticalBoxes = boxes.vertical;
        const horizontalBoxes = boxes.horizontal;
        helpers_segment.each(chart.boxes, (box)=>{
            if (typeof box.beforeLayout === 'function') {
                box.beforeLayout();
            }
        });
        const visibleVerticalBoxCount = verticalBoxes.reduce((total, wrap)=>wrap.box.options && wrap.box.options.display === false ? total : total + 1, 0) || 1;
        const params = Object.freeze({
            outerWidth: width,
            outerHeight: height,
            padding,
            availableWidth,
            availableHeight,
            vBoxMaxWidth: availableWidth / 2 / visibleVerticalBoxCount,
            hBoxMaxHeight: availableHeight / 2
        });
        const maxPadding = Object.assign({}, padding);
        updateMaxPadding(maxPadding, helpers_segment.toPadding(minPadding));
        const chartArea = Object.assign({
            maxPadding,
            w: availableWidth,
            h: availableHeight,
            x: padding.left,
            y: padding.top
        }, padding);
        const stacks = setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);
        fitBoxes(boxes.fullSize, chartArea, params, stacks);
        fitBoxes(verticalBoxes, chartArea, params, stacks);
        if (fitBoxes(horizontalBoxes, chartArea, params, stacks)) {
            fitBoxes(verticalBoxes, chartArea, params, stacks);
        }
        handleMaxPadding(chartArea);
        placeBoxes(boxes.leftAndTop, chartArea, params, stacks);
        chartArea.x += chartArea.w;
        chartArea.y += chartArea.h;
        placeBoxes(boxes.rightAndBottom, chartArea, params, stacks);
        chart.chartArea = {
            left: chartArea.left,
            top: chartArea.top,
            right: chartArea.left + chartArea.w,
            bottom: chartArea.top + chartArea.h,
            height: chartArea.h,
            width: chartArea.w
        };
        helpers_segment.each(boxes.chartArea, (layout)=>{
            const box = layout.box;
            Object.assign(box, chart.chartArea);
            box.update(chartArea.w, chartArea.h, {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            });
        });
    }
};

class BasePlatform {
 acquireContext(canvas, aspectRatio) {}
 releaseContext(context) {
        return false;
    }
 addEventListener(chart, type, listener) {}
 removeEventListener(chart, type, listener) {}
 getDevicePixelRatio() {
        return 1;
    }
 getMaximumSize(element, width, height, aspectRatio) {
        width = Math.max(0, width || element.width);
        height = height || element.height;
        return {
            width,
            height: Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height)
        };
    }
 isAttached(canvas) {
        return true;
    }
 updateConfig(config) {
    }
}

class BasicPlatform extends BasePlatform {
    acquireContext(item) {
        return item && item.getContext && item.getContext('2d') || null;
    }
    updateConfig(config) {
        config.options.animation = false;
    }
}

const EXPANDO_KEY = '$chartjs';
 const EVENT_TYPES = {
    touchstart: 'mousedown',
    touchmove: 'mousemove',
    touchend: 'mouseup',
    pointerenter: 'mouseenter',
    pointerdown: 'mousedown',
    pointermove: 'mousemove',
    pointerup: 'mouseup',
    pointerleave: 'mouseout',
    pointerout: 'mouseout'
};
const isNullOrEmpty = (value)=>value === null || value === '';
 function initCanvas(canvas, aspectRatio) {
    const style = canvas.style;
    const renderHeight = canvas.getAttribute('height');
    const renderWidth = canvas.getAttribute('width');
    canvas[EXPANDO_KEY] = {
        initial: {
            height: renderHeight,
            width: renderWidth,
            style: {
                display: style.display,
                height: style.height,
                width: style.width
            }
        }
    };
    style.display = style.display || 'block';
    style.boxSizing = style.boxSizing || 'border-box';
    if (isNullOrEmpty(renderWidth)) {
        const displayWidth = helpers_segment.readUsedSize(canvas, 'width');
        if (displayWidth !== undefined) {
            canvas.width = displayWidth;
        }
    }
    if (isNullOrEmpty(renderHeight)) {
        if (canvas.style.height === '') {
            canvas.height = canvas.width / (aspectRatio || 2);
        } else {
            const displayHeight = helpers_segment.readUsedSize(canvas, 'height');
            if (displayHeight !== undefined) {
                canvas.height = displayHeight;
            }
        }
    }
    return canvas;
}
const eventListenerOptions = helpers_segment.supportsEventListenerOptions ? {
    passive: true
} : false;
function addListener(node, type, listener) {
    node.addEventListener(type, listener, eventListenerOptions);
}
function removeListener(chart, type, listener) {
    chart.canvas.removeEventListener(type, listener, eventListenerOptions);
}
function fromNativeEvent(event, chart) {
    const type = EVENT_TYPES[event.type] || event.type;
    const { x , y  } = helpers_segment.getRelativePosition(event, chart);
    return {
        type,
        chart,
        native: event,
        x: x !== undefined ? x : null,
        y: y !== undefined ? y : null
    };
}
function nodeListContains(nodeList, canvas) {
    for (const node of nodeList){
        if (node === canvas || node.contains(canvas)) {
            return true;
        }
    }
}
function createAttachObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const observer = new MutationObserver((entries)=>{
        let trigger = false;
        for (const entry of entries){
            trigger = trigger || nodeListContains(entry.addedNodes, canvas);
            trigger = trigger && !nodeListContains(entry.removedNodes, canvas);
        }
        if (trigger) {
            listener();
        }
    });
    observer.observe(document, {
        childList: true,
        subtree: true
    });
    return observer;
}
function createDetachObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const observer = new MutationObserver((entries)=>{
        let trigger = false;
        for (const entry of entries){
            trigger = trigger || nodeListContains(entry.removedNodes, canvas);
            trigger = trigger && !nodeListContains(entry.addedNodes, canvas);
        }
        if (trigger) {
            listener();
        }
    });
    observer.observe(document, {
        childList: true,
        subtree: true
    });
    return observer;
}
const drpListeningCharts = new Map();
let oldDevicePixelRatio = 0;
function onWindowResize() {
    const dpr = window.devicePixelRatio;
    if (dpr === oldDevicePixelRatio) {
        return;
    }
    oldDevicePixelRatio = dpr;
    drpListeningCharts.forEach((resize, chart)=>{
        if (chart.currentDevicePixelRatio !== dpr) {
            resize();
        }
    });
}
function listenDevicePixelRatioChanges(chart, resize) {
    if (!drpListeningCharts.size) {
        window.addEventListener('resize', onWindowResize);
    }
    drpListeningCharts.set(chart, resize);
}
function unlistenDevicePixelRatioChanges(chart) {
    drpListeningCharts.delete(chart);
    if (!drpListeningCharts.size) {
        window.removeEventListener('resize', onWindowResize);
    }
}
function createResizeObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const container = canvas && helpers_segment._getParentNode(canvas);
    if (!container) {
        return;
    }
    const resize = helpers_segment.throttled((width, height)=>{
        const w = container.clientWidth;
        listener(width, height);
        if (w < container.clientWidth) {
            listener();
        }
    }, window);
    const observer = new ResizeObserver((entries)=>{
        const entry = entries[0];
        const width = entry.contentRect.width;
        const height = entry.contentRect.height;
        if (width === 0 && height === 0) {
            return;
        }
        resize(width, height);
    });
    observer.observe(container);
    listenDevicePixelRatioChanges(chart, resize);
    return observer;
}
function releaseObserver(chart, type, observer) {
    if (observer) {
        observer.disconnect();
    }
    if (type === 'resize') {
        unlistenDevicePixelRatioChanges(chart);
    }
}
function createProxyAndListen(chart, type, listener) {
    const canvas = chart.canvas;
    const proxy = helpers_segment.throttled((event)=>{
        if (chart.ctx !== null) {
            listener(fromNativeEvent(event, chart));
        }
    }, chart);
    addListener(canvas, type, proxy);
    return proxy;
}
 class DomPlatform extends BasePlatform {
 acquireContext(canvas, aspectRatio) {
        const context = canvas && canvas.getContext && canvas.getContext('2d');
        if (context && context.canvas === canvas) {
            initCanvas(canvas, aspectRatio);
            return context;
        }
        return null;
    }
 releaseContext(context) {
        const canvas = context.canvas;
        if (!canvas[EXPANDO_KEY]) {
            return false;
        }
        const initial = canvas[EXPANDO_KEY].initial;
        [
            'height',
            'width'
        ].forEach((prop)=>{
            const value = initial[prop];
            if (helpers_segment.isNullOrUndef(value)) {
                canvas.removeAttribute(prop);
            } else {
                canvas.setAttribute(prop, value);
            }
        });
        const style = initial.style || {};
        Object.keys(style).forEach((key)=>{
            canvas.style[key] = style[key];
        });
        canvas.width = canvas.width;
        delete canvas[EXPANDO_KEY];
        return true;
    }
 addEventListener(chart, type, listener) {
        this.removeEventListener(chart, type);
        const proxies = chart.$proxies || (chart.$proxies = {});
        const handlers = {
            attach: createAttachObserver,
            detach: createDetachObserver,
            resize: createResizeObserver
        };
        const handler = handlers[type] || createProxyAndListen;
        proxies[type] = handler(chart, type, listener);
    }
 removeEventListener(chart, type) {
        const proxies = chart.$proxies || (chart.$proxies = {});
        const proxy = proxies[type];
        if (!proxy) {
            return;
        }
        const handlers = {
            attach: releaseObserver,
            detach: releaseObserver,
            resize: releaseObserver
        };
        const handler = handlers[type] || removeListener;
        handler(chart, type, proxy);
        proxies[type] = undefined;
    }
    getDevicePixelRatio() {
        return window.devicePixelRatio;
    }
 getMaximumSize(canvas, width, height, aspectRatio) {
        return helpers_segment.getMaximumSize(canvas, width, height, aspectRatio);
    }
 isAttached(canvas) {
        const container = helpers_segment._getParentNode(canvas);
        return !!(container && container.isConnected);
    }
}

function _detectPlatform(canvas) {
    if (!helpers_segment._isDomSupported() || typeof OffscreenCanvas !== 'undefined' && canvas instanceof OffscreenCanvas) {
        return BasicPlatform;
    }
    return DomPlatform;
}

class Element {
    static defaults = {};
    static defaultRoutes = undefined;
    x;
    y;
    active = false;
    options;
    $animations;
    tooltipPosition(useFinalPosition) {
        const { x , y  } = this.getProps([
            'x',
            'y'
        ], useFinalPosition);
        return {
            x,
            y
        };
    }
    hasValue() {
        return helpers_segment.isNumber(this.x) && helpers_segment.isNumber(this.y);
    }
    getProps(props, final) {
        const anims = this.$animations;
        if (!final || !anims) {
            // let's not create an object, if not needed
            return this;
        }
        const ret = {};
        props.forEach((prop)=>{
            ret[prop] = anims[prop] && anims[prop].active() ? anims[prop]._to : this[prop];
        });
        return ret;
    }
}

function autoSkip(scale, ticks) {
    const tickOpts = scale.options.ticks;
    const determinedMaxTicks = determineMaxTicks(scale);
    const ticksLimit = Math.min(tickOpts.maxTicksLimit || determinedMaxTicks, determinedMaxTicks);
    const majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
    const numMajorIndices = majorIndices.length;
    const first = majorIndices[0];
    const last = majorIndices[numMajorIndices - 1];
    const newTicks = [];
    if (numMajorIndices > ticksLimit) {
        skipMajors(ticks, newTicks, majorIndices, numMajorIndices / ticksLimit);
        return newTicks;
    }
    const spacing = calculateSpacing(majorIndices, ticks, ticksLimit);
    if (numMajorIndices > 0) {
        let i, ilen;
        const avgMajorSpacing = numMajorIndices > 1 ? Math.round((last - first) / (numMajorIndices - 1)) : null;
        skip(ticks, newTicks, spacing, helpers_segment.isNullOrUndef(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
        for(i = 0, ilen = numMajorIndices - 1; i < ilen; i++){
            skip(ticks, newTicks, spacing, majorIndices[i], majorIndices[i + 1]);
        }
        skip(ticks, newTicks, spacing, last, helpers_segment.isNullOrUndef(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
        return newTicks;
    }
    skip(ticks, newTicks, spacing);
    return newTicks;
}
function determineMaxTicks(scale) {
    const offset = scale.options.offset;
    const tickLength = scale._tickSize();
    const maxScale = scale._length / tickLength + (offset ? 0 : 1);
    const maxChart = scale._maxLength / tickLength;
    return Math.floor(Math.min(maxScale, maxChart));
}
 function calculateSpacing(majorIndices, ticks, ticksLimit) {
    const evenMajorSpacing = getEvenSpacing(majorIndices);
    const spacing = ticks.length / ticksLimit;
    if (!evenMajorSpacing) {
        return Math.max(spacing, 1);
    }
    const factors = helpers_segment._factorize(evenMajorSpacing);
    for(let i = 0, ilen = factors.length - 1; i < ilen; i++){
        const factor = factors[i];
        if (factor > spacing) {
            return factor;
        }
    }
    return Math.max(spacing, 1);
}
 function getMajorIndices(ticks) {
    const result = [];
    let i, ilen;
    for(i = 0, ilen = ticks.length; i < ilen; i++){
        if (ticks[i].major) {
            result.push(i);
        }
    }
    return result;
}
 function skipMajors(ticks, newTicks, majorIndices, spacing) {
    let count = 0;
    let next = majorIndices[0];
    let i;
    spacing = Math.ceil(spacing);
    for(i = 0; i < ticks.length; i++){
        if (i === next) {
            newTicks.push(ticks[i]);
            count++;
            next = majorIndices[count * spacing];
        }
    }
}
 function skip(ticks, newTicks, spacing, majorStart, majorEnd) {
    const start = helpers_segment.valueOrDefault(majorStart, 0);
    const end = Math.min(helpers_segment.valueOrDefault(majorEnd, ticks.length), ticks.length);
    let count = 0;
    let length, i, next;
    spacing = Math.ceil(spacing);
    if (majorEnd) {
        length = majorEnd - majorStart;
        spacing = length / Math.floor(length / spacing);
    }
    next = start;
    while(next < 0){
        count++;
        next = Math.round(start + count * spacing);
    }
    for(i = Math.max(start, 0); i < end; i++){
        if (i === next) {
            newTicks.push(ticks[i]);
            count++;
            next = Math.round(start + count * spacing);
        }
    }
}
 function getEvenSpacing(arr) {
    const len = arr.length;
    let i, diff;
    if (len < 2) {
        return false;
    }
    for(diff = arr[0], i = 1; i < len; ++i){
        if (arr[i] - arr[i - 1] !== diff) {
            return false;
        }
    }
    return diff;
}

const reverseAlign = (align)=>align === 'left' ? 'right' : align === 'right' ? 'left' : align;
const offsetFromEdge = (scale, edge, offset)=>edge === 'top' || edge === 'left' ? scale[edge] + offset : scale[edge] - offset;
const getTicksLimit = (ticksLength, maxTicksLimit)=>Math.min(maxTicksLimit || ticksLength, ticksLength);
 function sample(arr, numItems) {
    const result = [];
    const increment = arr.length / numItems;
    const len = arr.length;
    let i = 0;
    for(; i < len; i += increment){
        result.push(arr[Math.floor(i)]);
    }
    return result;
}
 function getPixelForGridLine(scale, index, offsetGridLines) {
    const length = scale.ticks.length;
    const validIndex = Math.min(index, length - 1);
    const start = scale._startPixel;
    const end = scale._endPixel;
    const epsilon = 1e-6;
    let lineValue = scale.getPixelForTick(validIndex);
    let offset;
    if (offsetGridLines) {
        if (length === 1) {
            offset = Math.max(lineValue - start, end - lineValue);
        } else if (index === 0) {
            offset = (scale.getPixelForTick(1) - lineValue) / 2;
        } else {
            offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
        }
        lineValue += validIndex < index ? offset : -offset;
        if (lineValue < start - epsilon || lineValue > end + epsilon) {
            return;
        }
    }
    return lineValue;
}
 function garbageCollect(caches, length) {
    helpers_segment.each(caches, (cache)=>{
        const gc = cache.gc;
        const gcLen = gc.length / 2;
        let i;
        if (gcLen > length) {
            for(i = 0; i < gcLen; ++i){
                delete cache.data[gc[i]];
            }
            gc.splice(0, gcLen);
        }
    });
}
 function getTickMarkLength(options) {
    return options.drawTicks ? options.tickLength : 0;
}
 function getTitleHeight(options, fallback) {
    if (!options.display) {
        return 0;
    }
    const font = helpers_segment.toFont(options.font, fallback);
    const padding = helpers_segment.toPadding(options.padding);
    const lines = helpers_segment.isArray(options.text) ? options.text.length : 1;
    return lines * font.lineHeight + padding.height;
}
function createScaleContext(parent, scale) {
    return helpers_segment.createContext(parent, {
        scale,
        type: 'scale'
    });
}
function createTickContext(parent, index, tick) {
    return helpers_segment.createContext(parent, {
        tick,
        index,
        type: 'tick'
    });
}
function titleAlign(align, position, reverse) {
     let ret = helpers_segment._toLeftRightCenter(align);
    if (reverse && position !== 'right' || !reverse && position === 'right') {
        ret = reverseAlign(ret);
    }
    return ret;
}
function titleArgs(scale, offset, position, align) {
    const { top , left , bottom , right , chart  } = scale;
    const { chartArea , scales  } = chart;
    let rotation = 0;
    let maxWidth, titleX, titleY;
    const height = bottom - top;
    const width = right - left;
    if (scale.isHorizontal()) {
        titleX = helpers_segment._alignStartEnd(align, left, right);
        if (helpers_segment.isObject(position)) {
            const positionAxisID = Object.keys(position)[0];
            const value = position[positionAxisID];
            titleY = scales[positionAxisID].getPixelForValue(value) + height - offset;
        } else if (position === 'center') {
            titleY = (chartArea.bottom + chartArea.top) / 2 + height - offset;
        } else {
            titleY = offsetFromEdge(scale, position, offset);
        }
        maxWidth = right - left;
    } else {
        if (helpers_segment.isObject(position)) {
            const positionAxisID = Object.keys(position)[0];
            const value = position[positionAxisID];
            titleX = scales[positionAxisID].getPixelForValue(value) - width + offset;
        } else if (position === 'center') {
            titleX = (chartArea.left + chartArea.right) / 2 - width + offset;
        } else {
            titleX = offsetFromEdge(scale, position, offset);
        }
        titleY = helpers_segment._alignStartEnd(align, bottom, top);
        rotation = position === 'left' ? -helpers_segment.HALF_PI : helpers_segment.HALF_PI;
    }
    return {
        titleX,
        titleY,
        maxWidth,
        rotation
    };
}
class Scale extends Element {
    constructor(cfg){
        super();
         this.id = cfg.id;
         this.type = cfg.type;
         this.options = undefined;
         this.ctx = cfg.ctx;
         this.chart = cfg.chart;
         this.top = undefined;
         this.bottom = undefined;
         this.left = undefined;
         this.right = undefined;
         this.width = undefined;
         this.height = undefined;
        this._margins = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        };
         this.maxWidth = undefined;
         this.maxHeight = undefined;
         this.paddingTop = undefined;
         this.paddingBottom = undefined;
         this.paddingLeft = undefined;
         this.paddingRight = undefined;
         this.axis = undefined;
         this.labelRotation = undefined;
        this.min = undefined;
        this.max = undefined;
        this._range = undefined;
         this.ticks = [];
         this._gridLineItems = null;
         this._labelItems = null;
         this._labelSizes = null;
        this._length = 0;
        this._maxLength = 0;
        this._longestTextCache = {};
         this._startPixel = undefined;
         this._endPixel = undefined;
        this._reversePixels = false;
        this._userMax = undefined;
        this._userMin = undefined;
        this._suggestedMax = undefined;
        this._suggestedMin = undefined;
        this._ticksLength = 0;
        this._borderValue = 0;
        this._cache = {};
        this._dataLimitsCached = false;
        this.$context = undefined;
    }
 init(options) {
        this.options = options.setContext(this.getContext());
        this.axis = options.axis;
        this._userMin = this.parse(options.min);
        this._userMax = this.parse(options.max);
        this._suggestedMin = this.parse(options.suggestedMin);
        this._suggestedMax = this.parse(options.suggestedMax);
    }
 parse(raw, index) {
        return raw;
    }
 getUserBounds() {
        let { _userMin , _userMax , _suggestedMin , _suggestedMax  } = this;
        _userMin = helpers_segment.finiteOrDefault(_userMin, Number.POSITIVE_INFINITY);
        _userMax = helpers_segment.finiteOrDefault(_userMax, Number.NEGATIVE_INFINITY);
        _suggestedMin = helpers_segment.finiteOrDefault(_suggestedMin, Number.POSITIVE_INFINITY);
        _suggestedMax = helpers_segment.finiteOrDefault(_suggestedMax, Number.NEGATIVE_INFINITY);
        return {
            min: helpers_segment.finiteOrDefault(_userMin, _suggestedMin),
            max: helpers_segment.finiteOrDefault(_userMax, _suggestedMax),
            minDefined: helpers_segment.isNumberFinite(_userMin),
            maxDefined: helpers_segment.isNumberFinite(_userMax)
        };
    }
 getMinMax(canStack) {
        let { min , max , minDefined , maxDefined  } = this.getUserBounds();
        let range;
        if (minDefined && maxDefined) {
            return {
                min,
                max
            };
        }
        const metas = this.getMatchingVisibleMetas();
        for(let i = 0, ilen = metas.length; i < ilen; ++i){
            range = metas[i].controller.getMinMax(this, canStack);
            if (!minDefined) {
                min = Math.min(min, range.min);
            }
            if (!maxDefined) {
                max = Math.max(max, range.max);
            }
        }
        min = maxDefined && min > max ? max : min;
        max = minDefined && min > max ? min : max;
        return {
            min: helpers_segment.finiteOrDefault(min, helpers_segment.finiteOrDefault(max, min)),
            max: helpers_segment.finiteOrDefault(max, helpers_segment.finiteOrDefault(min, max))
        };
    }
 getPadding() {
        return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0
        };
    }
 getTicks() {
        return this.ticks;
    }
 getLabels() {
        const data = this.chart.data;
        return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
    }
 getLabelItems(chartArea = this.chart.chartArea) {
        const items = this._labelItems || (this._labelItems = this._computeLabelItems(chartArea));
        return items;
    }
    beforeLayout() {
        this._cache = {};
        this._dataLimitsCached = false;
    }
    beforeUpdate() {
        helpers_segment.callback(this.options.beforeUpdate, [
            this
        ]);
    }
 update(maxWidth, maxHeight, margins) {
        const { beginAtZero , grace , ticks: tickOpts  } = this.options;
        const sampleSize = tickOpts.sampleSize;
        this.beforeUpdate();
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
        this._margins = margins = Object.assign({
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, margins);
        this.ticks = null;
        this._labelSizes = null;
        this._gridLineItems = null;
        this._labelItems = null;
        this.beforeSetDimensions();
        this.setDimensions();
        this.afterSetDimensions();
        this._maxLength = this.isHorizontal() ? this.width + margins.left + margins.right : this.height + margins.top + margins.bottom;
        if (!this._dataLimitsCached) {
            this.beforeDataLimits();
            this.determineDataLimits();
            this.afterDataLimits();
            this._range = helpers_segment._addGrace(this, grace, beginAtZero);
            this._dataLimitsCached = true;
        }
        this.beforeBuildTicks();
        this.ticks = this.buildTicks() || [];
        this.afterBuildTicks();
        const samplingEnabled = sampleSize < this.ticks.length;
        this._convertTicksToLabels(samplingEnabled ? sample(this.ticks, sampleSize) : this.ticks);
        this.configure();
        this.beforeCalculateLabelRotation();
        this.calculateLabelRotation();
        this.afterCalculateLabelRotation();
        if (tickOpts.display && (tickOpts.autoSkip || tickOpts.source === 'auto')) {
            this.ticks = autoSkip(this, this.ticks);
            this._labelSizes = null;
            this.afterAutoSkip();
        }
        if (samplingEnabled) {
            this._convertTicksToLabels(this.ticks);
        }
        this.beforeFit();
        this.fit();
        this.afterFit();
        this.afterUpdate();
    }
 configure() {
        let reversePixels = this.options.reverse;
        let startPixel, endPixel;
        if (this.isHorizontal()) {
            startPixel = this.left;
            endPixel = this.right;
        } else {
            startPixel = this.top;
            endPixel = this.bottom;
            reversePixels = !reversePixels;
        }
        this._startPixel = startPixel;
        this._endPixel = endPixel;
        this._reversePixels = reversePixels;
        this._length = endPixel - startPixel;
        this._alignToPixels = this.options.alignToPixels;
    }
    afterUpdate() {
        helpers_segment.callback(this.options.afterUpdate, [
            this
        ]);
    }
    beforeSetDimensions() {
        helpers_segment.callback(this.options.beforeSetDimensions, [
            this
        ]);
    }
    setDimensions() {
        if (this.isHorizontal()) {
            this.width = this.maxWidth;
            this.left = 0;
            this.right = this.width;
        } else {
            this.height = this.maxHeight;
            this.top = 0;
            this.bottom = this.height;
        }
        this.paddingLeft = 0;
        this.paddingTop = 0;
        this.paddingRight = 0;
        this.paddingBottom = 0;
    }
    afterSetDimensions() {
        helpers_segment.callback(this.options.afterSetDimensions, [
            this
        ]);
    }
    _callHooks(name) {
        this.chart.notifyPlugins(name, this.getContext());
        helpers_segment.callback(this.options[name], [
            this
        ]);
    }
    beforeDataLimits() {
        this._callHooks('beforeDataLimits');
    }
    determineDataLimits() {}
    afterDataLimits() {
        this._callHooks('afterDataLimits');
    }
    beforeBuildTicks() {
        this._callHooks('beforeBuildTicks');
    }
 buildTicks() {
        return [];
    }
    afterBuildTicks() {
        this._callHooks('afterBuildTicks');
    }
    beforeTickToLabelConversion() {
        helpers_segment.callback(this.options.beforeTickToLabelConversion, [
            this
        ]);
    }
 generateTickLabels(ticks) {
        const tickOpts = this.options.ticks;
        let i, ilen, tick;
        for(i = 0, ilen = ticks.length; i < ilen; i++){
            tick = ticks[i];
            tick.label = helpers_segment.callback(tickOpts.callback, [
                tick.value,
                i,
                ticks
            ], this);
        }
    }
    afterTickToLabelConversion() {
        helpers_segment.callback(this.options.afterTickToLabelConversion, [
            this
        ]);
    }
    beforeCalculateLabelRotation() {
        helpers_segment.callback(this.options.beforeCalculateLabelRotation, [
            this
        ]);
    }
    calculateLabelRotation() {
        const options = this.options;
        const tickOpts = options.ticks;
        const numTicks = getTicksLimit(this.ticks.length, options.ticks.maxTicksLimit);
        const minRotation = tickOpts.minRotation || 0;
        const maxRotation = tickOpts.maxRotation;
        let labelRotation = minRotation;
        let tickWidth, maxHeight, maxLabelDiagonal;
        if (!this._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !this.isHorizontal()) {
            this.labelRotation = minRotation;
            return;
        }
        const labelSizes = this._getLabelSizes();
        const maxLabelWidth = labelSizes.widest.width;
        const maxLabelHeight = labelSizes.highest.height;
        const maxWidth = helpers_segment._limitValue(this.chart.width - maxLabelWidth, 0, this.maxWidth);
        tickWidth = options.offset ? this.maxWidth / numTicks : maxWidth / (numTicks - 1);
        if (maxLabelWidth + 6 > tickWidth) {
            tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
            maxHeight = this.maxHeight - getTickMarkLength(options.grid) - tickOpts.padding - getTitleHeight(options.title, this.chart.options.font);
            maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
            labelRotation = helpers_segment.toDegrees(Math.min(Math.asin(helpers_segment._limitValue((labelSizes.highest.height + 6) / tickWidth, -1, 1)), Math.asin(helpers_segment._limitValue(maxHeight / maxLabelDiagonal, -1, 1)) - Math.asin(helpers_segment._limitValue(maxLabelHeight / maxLabelDiagonal, -1, 1))));
            labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
        }
        this.labelRotation = labelRotation;
    }
    afterCalculateLabelRotation() {
        helpers_segment.callback(this.options.afterCalculateLabelRotation, [
            this
        ]);
    }
    afterAutoSkip() {}
    beforeFit() {
        helpers_segment.callback(this.options.beforeFit, [
            this
        ]);
    }
    fit() {
        const minSize = {
            width: 0,
            height: 0
        };
        const { chart , options: { ticks: tickOpts , title: titleOpts , grid: gridOpts  }  } = this;
        const display = this._isVisible();
        const isHorizontal = this.isHorizontal();
        if (display) {
            const titleHeight = getTitleHeight(titleOpts, chart.options.font);
            if (isHorizontal) {
                minSize.width = this.maxWidth;
                minSize.height = getTickMarkLength(gridOpts) + titleHeight;
            } else {
                minSize.height = this.maxHeight;
                minSize.width = getTickMarkLength(gridOpts) + titleHeight;
            }
            if (tickOpts.display && this.ticks.length) {
                const { first , last , widest , highest  } = this._getLabelSizes();
                const tickPadding = tickOpts.padding * 2;
                const angleRadians = helpers_segment.toRadians(this.labelRotation);
                const cos = Math.cos(angleRadians);
                const sin = Math.sin(angleRadians);
                if (isHorizontal) {
                    const labelHeight = tickOpts.mirror ? 0 : sin * widest.width + cos * highest.height;
                    minSize.height = Math.min(this.maxHeight, minSize.height + labelHeight + tickPadding);
                } else {
                    const labelWidth = tickOpts.mirror ? 0 : cos * widest.width + sin * highest.height;
                    minSize.width = Math.min(this.maxWidth, minSize.width + labelWidth + tickPadding);
                }
                this._calculatePadding(first, last, sin, cos);
            }
        }
        this._handleMargins();
        if (isHorizontal) {
            this.width = this._length = chart.width - this._margins.left - this._margins.right;
            this.height = minSize.height;
        } else {
            this.width = minSize.width;
            this.height = this._length = chart.height - this._margins.top - this._margins.bottom;
        }
    }
    _calculatePadding(first, last, sin, cos) {
        const { ticks: { align , padding  } , position  } = this.options;
        const isRotated = this.labelRotation !== 0;
        const labelsBelowTicks = position !== 'top' && this.axis === 'x';
        if (this.isHorizontal()) {
            const offsetLeft = this.getPixelForTick(0) - this.left;
            const offsetRight = this.right - this.getPixelForTick(this.ticks.length - 1);
            let paddingLeft = 0;
            let paddingRight = 0;
            if (isRotated) {
                if (labelsBelowTicks) {
                    paddingLeft = cos * first.width;
                    paddingRight = sin * last.height;
                } else {
                    paddingLeft = sin * first.height;
                    paddingRight = cos * last.width;
                }
            } else if (align === 'start') {
                paddingRight = last.width;
            } else if (align === 'end') {
                paddingLeft = first.width;
            } else if (align !== 'inner') {
                paddingLeft = first.width / 2;
                paddingRight = last.width / 2;
            }
            this.paddingLeft = Math.max((paddingLeft - offsetLeft + padding) * this.width / (this.width - offsetLeft), 0);
            this.paddingRight = Math.max((paddingRight - offsetRight + padding) * this.width / (this.width - offsetRight), 0);
        } else {
            let paddingTop = last.height / 2;
            let paddingBottom = first.height / 2;
            if (align === 'start') {
                paddingTop = 0;
                paddingBottom = first.height;
            } else if (align === 'end') {
                paddingTop = last.height;
                paddingBottom = 0;
            }
            this.paddingTop = paddingTop + padding;
            this.paddingBottom = paddingBottom + padding;
        }
    }
 _handleMargins() {
        if (this._margins) {
            this._margins.left = Math.max(this.paddingLeft, this._margins.left);
            this._margins.top = Math.max(this.paddingTop, this._margins.top);
            this._margins.right = Math.max(this.paddingRight, this._margins.right);
            this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom);
        }
    }
    afterFit() {
        helpers_segment.callback(this.options.afterFit, [
            this
        ]);
    }
 isHorizontal() {
        const { axis , position  } = this.options;
        return position === 'top' || position === 'bottom' || axis === 'x';
    }
 isFullSize() {
        return this.options.fullSize;
    }
 _convertTicksToLabels(ticks) {
        this.beforeTickToLabelConversion();
        this.generateTickLabels(ticks);
        let i, ilen;
        for(i = 0, ilen = ticks.length; i < ilen; i++){
            if (helpers_segment.isNullOrUndef(ticks[i].label)) {
                ticks.splice(i, 1);
                ilen--;
                i--;
            }
        }
        this.afterTickToLabelConversion();
    }
 _getLabelSizes() {
        let labelSizes = this._labelSizes;
        if (!labelSizes) {
            const sampleSize = this.options.ticks.sampleSize;
            let ticks = this.ticks;
            if (sampleSize < ticks.length) {
                ticks = sample(ticks, sampleSize);
            }
            this._labelSizes = labelSizes = this._computeLabelSizes(ticks, ticks.length, this.options.ticks.maxTicksLimit);
        }
        return labelSizes;
    }
 _computeLabelSizes(ticks, length, maxTicksLimit) {
        const { ctx , _longestTextCache: caches  } = this;
        const widths = [];
        const heights = [];
        const increment = Math.floor(length / getTicksLimit(length, maxTicksLimit));
        let widestLabelSize = 0;
        let highestLabelSize = 0;
        let i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel;
        for(i = 0; i < length; i += increment){
            label = ticks[i].label;
            tickFont = this._resolveTickFontOptions(i);
            ctx.font = fontString = tickFont.string;
            cache = caches[fontString] = caches[fontString] || {
                data: {},
                gc: []
            };
            lineHeight = tickFont.lineHeight;
            width = height = 0;
            if (!helpers_segment.isNullOrUndef(label) && !helpers_segment.isArray(label)) {
                width = helpers_segment._measureText(ctx, cache.data, cache.gc, width, label);
                height = lineHeight;
            } else if (helpers_segment.isArray(label)) {
                for(j = 0, jlen = label.length; j < jlen; ++j){
                    nestedLabel =  label[j];
                    if (!helpers_segment.isNullOrUndef(nestedLabel) && !helpers_segment.isArray(nestedLabel)) {
                        width = helpers_segment._measureText(ctx, cache.data, cache.gc, width, nestedLabel);
                        height += lineHeight;
                    }
                }
            }
            widths.push(width);
            heights.push(height);
            widestLabelSize = Math.max(width, widestLabelSize);
            highestLabelSize = Math.max(height, highestLabelSize);
        }
        garbageCollect(caches, length);
        const widest = widths.indexOf(widestLabelSize);
        const highest = heights.indexOf(highestLabelSize);
        const valueAt = (idx)=>({
                width: widths[idx] || 0,
                height: heights[idx] || 0
            });
        return {
            first: valueAt(0),
            last: valueAt(length - 1),
            widest: valueAt(widest),
            highest: valueAt(highest),
            widths,
            heights
        };
    }
 getLabelForValue(value) {
        return value;
    }
 getPixelForValue(value, index) {
        return NaN;
    }
 getValueForPixel(pixel) {}
 getPixelForTick(index) {
        const ticks = this.ticks;
        if (index < 0 || index > ticks.length - 1) {
            return null;
        }
        return this.getPixelForValue(ticks[index].value);
    }
 getPixelForDecimal(decimal) {
        if (this._reversePixels) {
            decimal = 1 - decimal;
        }
        const pixel = this._startPixel + decimal * this._length;
        return helpers_segment._int16Range(this._alignToPixels ? helpers_segment._alignPixel(this.chart, pixel, 0) : pixel);
    }
 getDecimalForPixel(pixel) {
        const decimal = (pixel - this._startPixel) / this._length;
        return this._reversePixels ? 1 - decimal : decimal;
    }
 getBasePixel() {
        return this.getPixelForValue(this.getBaseValue());
    }
 getBaseValue() {
        const { min , max  } = this;
        return min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0;
    }
 getContext(index) {
        const ticks = this.ticks || [];
        if (index >= 0 && index < ticks.length) {
            const tick = ticks[index];
            return tick.$context || (tick.$context = createTickContext(this.getContext(), index, tick));
        }
        return this.$context || (this.$context = createScaleContext(this.chart.getContext(), this));
    }
 _tickSize() {
        const optionTicks = this.options.ticks;
        const rot = helpers_segment.toRadians(this.labelRotation);
        const cos = Math.abs(Math.cos(rot));
        const sin = Math.abs(Math.sin(rot));
        const labelSizes = this._getLabelSizes();
        const padding = optionTicks.autoSkipPadding || 0;
        const w = labelSizes ? labelSizes.widest.width + padding : 0;
        const h = labelSizes ? labelSizes.highest.height + padding : 0;
        return this.isHorizontal() ? h * cos > w * sin ? w / cos : h / sin : h * sin < w * cos ? h / cos : w / sin;
    }
 _isVisible() {
        const display = this.options.display;
        if (display !== 'auto') {
            return !!display;
        }
        return this.getMatchingVisibleMetas().length > 0;
    }
 _computeGridLineItems(chartArea) {
        const axis = this.axis;
        const chart = this.chart;
        const options = this.options;
        const { grid , position , border  } = options;
        const offset = grid.offset;
        const isHorizontal = this.isHorizontal();
        const ticks = this.ticks;
        const ticksLength = ticks.length + (offset ? 1 : 0);
        const tl = getTickMarkLength(grid);
        const items = [];
        const borderOpts = border.setContext(this.getContext());
        const axisWidth = borderOpts.display ? borderOpts.width : 0;
        const axisHalfWidth = axisWidth / 2;
        const alignBorderValue = function(pixel) {
            return helpers_segment._alignPixel(chart, pixel, axisWidth);
        };
        let borderValue, i, lineValue, alignedLineValue;
        let tx1, ty1, tx2, ty2, x1, y1, x2, y2;
        if (position === 'top') {
            borderValue = alignBorderValue(this.bottom);
            ty1 = this.bottom - tl;
            ty2 = borderValue - axisHalfWidth;
            y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
            y2 = chartArea.bottom;
        } else if (position === 'bottom') {
            borderValue = alignBorderValue(this.top);
            y1 = chartArea.top;
            y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
            ty1 = borderValue + axisHalfWidth;
            ty2 = this.top + tl;
        } else if (position === 'left') {
            borderValue = alignBorderValue(this.right);
            tx1 = this.right - tl;
            tx2 = borderValue - axisHalfWidth;
            x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
            x2 = chartArea.right;
        } else if (position === 'right') {
            borderValue = alignBorderValue(this.left);
            x1 = chartArea.left;
            x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
            tx1 = borderValue + axisHalfWidth;
            tx2 = this.left + tl;
        } else if (axis === 'x') {
            if (position === 'center') {
                borderValue = alignBorderValue((chartArea.top + chartArea.bottom) / 2 + 0.5);
            } else if (helpers_segment.isObject(position)) {
                const positionAxisID = Object.keys(position)[0];
                const value = position[positionAxisID];
                borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
            }
            y1 = chartArea.top;
            y2 = chartArea.bottom;
            ty1 = borderValue + axisHalfWidth;
            ty2 = ty1 + tl;
        } else if (axis === 'y') {
            if (position === 'center') {
                borderValue = alignBorderValue((chartArea.left + chartArea.right) / 2);
            } else if (helpers_segment.isObject(position)) {
                const positionAxisID = Object.keys(position)[0];
                const value = position[positionAxisID];
                borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
            }
            tx1 = borderValue - axisHalfWidth;
            tx2 = tx1 - tl;
            x1 = chartArea.left;
            x2 = chartArea.right;
        }
        const limit = helpers_segment.valueOrDefault(options.ticks.maxTicksLimit, ticksLength);
        const step = Math.max(1, Math.ceil(ticksLength / limit));
        for(i = 0; i < ticksLength; i += step){
            const context = this.getContext(i);
            const optsAtIndex = grid.setContext(context);
            const optsAtIndexBorder = border.setContext(context);
            const lineWidth = optsAtIndex.lineWidth;
            const lineColor = optsAtIndex.color;
            const borderDash = optsAtIndexBorder.dash || [];
            const borderDashOffset = optsAtIndexBorder.dashOffset;
            const tickWidth = optsAtIndex.tickWidth;
            const tickColor = optsAtIndex.tickColor;
            const tickBorderDash = optsAtIndex.tickBorderDash || [];
            const tickBorderDashOffset = optsAtIndex.tickBorderDashOffset;
            lineValue = getPixelForGridLine(this, i, offset);
            if (lineValue === undefined) {
                continue;
            }
            alignedLineValue = helpers_segment._alignPixel(chart, lineValue, lineWidth);
            if (isHorizontal) {
                tx1 = tx2 = x1 = x2 = alignedLineValue;
            } else {
                ty1 = ty2 = y1 = y2 = alignedLineValue;
            }
            items.push({
                tx1,
                ty1,
                tx2,
                ty2,
                x1,
                y1,
                x2,
                y2,
                width: lineWidth,
                color: lineColor,
                borderDash,
                borderDashOffset,
                tickWidth,
                tickColor,
                tickBorderDash,
                tickBorderDashOffset
            });
        }
        this._ticksLength = ticksLength;
        this._borderValue = borderValue;
        return items;
    }
 _computeLabelItems(chartArea) {
        const axis = this.axis;
        const options = this.options;
        const { position , ticks: optionTicks  } = options;
        const isHorizontal = this.isHorizontal();
        const ticks = this.ticks;
        const { align , crossAlign , padding , mirror  } = optionTicks;
        const tl = getTickMarkLength(options.grid);
        const tickAndPadding = tl + padding;
        const hTickAndPadding = mirror ? -padding : tickAndPadding;
        const rotation = -helpers_segment.toRadians(this.labelRotation);
        const items = [];
        let i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;
        let textBaseline = 'middle';
        if (position === 'top') {
            y = this.bottom - hTickAndPadding;
            textAlign = this._getXAxisLabelAlignment();
        } else if (position === 'bottom') {
            y = this.top + hTickAndPadding;
            textAlign = this._getXAxisLabelAlignment();
        } else if (position === 'left') {
            const ret = this._getYAxisLabelAlignment(tl);
            textAlign = ret.textAlign;
            x = ret.x;
        } else if (position === 'right') {
            const ret = this._getYAxisLabelAlignment(tl);
            textAlign = ret.textAlign;
            x = ret.x;
        } else if (axis === 'x') {
            if (position === 'center') {
                y = (chartArea.top + chartArea.bottom) / 2 + tickAndPadding;
            } else if (helpers_segment.isObject(position)) {
                const positionAxisID = Object.keys(position)[0];
                const value = position[positionAxisID];
                y = this.chart.scales[positionAxisID].getPixelForValue(value) + tickAndPadding;
            }
            textAlign = this._getXAxisLabelAlignment();
        } else if (axis === 'y') {
            if (position === 'center') {
                x = (chartArea.left + chartArea.right) / 2 - tickAndPadding;
            } else if (helpers_segment.isObject(position)) {
                const positionAxisID = Object.keys(position)[0];
                const value = position[positionAxisID];
                x = this.chart.scales[positionAxisID].getPixelForValue(value);
            }
            textAlign = this._getYAxisLabelAlignment(tl).textAlign;
        }
        if (axis === 'y') {
            if (align === 'start') {
                textBaseline = 'top';
            } else if (align === 'end') {
                textBaseline = 'bottom';
            }
        }
        const labelSizes = this._getLabelSizes();
        for(i = 0, ilen = ticks.length; i < ilen; ++i){
            tick = ticks[i];
            label = tick.label;
            const optsAtIndex = optionTicks.setContext(this.getContext(i));
            pixel = this.getPixelForTick(i) + optionTicks.labelOffset;
            font = this._resolveTickFontOptions(i);
            lineHeight = font.lineHeight;
            lineCount = helpers_segment.isArray(label) ? label.length : 1;
            const halfCount = lineCount / 2;
            const color = optsAtIndex.color;
            const strokeColor = optsAtIndex.textStrokeColor;
            const strokeWidth = optsAtIndex.textStrokeWidth;
            let tickTextAlign = textAlign;
            if (isHorizontal) {
                x = pixel;
                if (textAlign === 'inner') {
                    if (i === ilen - 1) {
                        tickTextAlign = !this.options.reverse ? 'right' : 'left';
                    } else if (i === 0) {
                        tickTextAlign = !this.options.reverse ? 'left' : 'right';
                    } else {
                        tickTextAlign = 'center';
                    }
                }
                if (position === 'top') {
                    if (crossAlign === 'near' || rotation !== 0) {
                        textOffset = -lineCount * lineHeight + lineHeight / 2;
                    } else if (crossAlign === 'center') {
                        textOffset = -labelSizes.highest.height / 2 - halfCount * lineHeight + lineHeight;
                    } else {
                        textOffset = -labelSizes.highest.height + lineHeight / 2;
                    }
                } else {
                    if (crossAlign === 'near' || rotation !== 0) {
                        textOffset = lineHeight / 2;
                    } else if (crossAlign === 'center') {
                        textOffset = labelSizes.highest.height / 2 - halfCount * lineHeight;
                    } else {
                        textOffset = labelSizes.highest.height - lineCount * lineHeight;
                    }
                }
                if (mirror) {
                    textOffset *= -1;
                }
                if (rotation !== 0 && !optsAtIndex.showLabelBackdrop) {
                    x += lineHeight / 2 * Math.sin(rotation);
                }
            } else {
                y = pixel;
                textOffset = (1 - lineCount) * lineHeight / 2;
            }
            let backdrop;
            if (optsAtIndex.showLabelBackdrop) {
                const labelPadding = helpers_segment.toPadding(optsAtIndex.backdropPadding);
                const height = labelSizes.heights[i];
                const width = labelSizes.widths[i];
                let top = textOffset - labelPadding.top;
                let left = 0 - labelPadding.left;
                switch(textBaseline){
                    case 'middle':
                        top -= height / 2;
                        break;
                    case 'bottom':
                        top -= height;
                        break;
                }
                switch(textAlign){
                    case 'center':
                        left -= width / 2;
                        break;
                    case 'right':
                        left -= width;
                        break;
                    case 'inner':
                        if (i === ilen - 1) {
                            left -= width;
                        } else if (i > 0) {
                            left -= width / 2;
                        }
                        break;
                }
                backdrop = {
                    left,
                    top,
                    width: width + labelPadding.width,
                    height: height + labelPadding.height,
                    color: optsAtIndex.backdropColor
                };
            }
            items.push({
                label,
                font,
                textOffset,
                options: {
                    rotation,
                    color,
                    strokeColor,
                    strokeWidth,
                    textAlign: tickTextAlign,
                    textBaseline,
                    translation: [
                        x,
                        y
                    ],
                    backdrop
                }
            });
        }
        return items;
    }
    _getXAxisLabelAlignment() {
        const { position , ticks  } = this.options;
        const rotation = -helpers_segment.toRadians(this.labelRotation);
        if (rotation) {
            return position === 'top' ? 'left' : 'right';
        }
        let align = 'center';
        if (ticks.align === 'start') {
            align = 'left';
        } else if (ticks.align === 'end') {
            align = 'right';
        } else if (ticks.align === 'inner') {
            align = 'inner';
        }
        return align;
    }
    _getYAxisLabelAlignment(tl) {
        const { position , ticks: { crossAlign , mirror , padding  }  } = this.options;
        const labelSizes = this._getLabelSizes();
        const tickAndPadding = tl + padding;
        const widest = labelSizes.widest.width;
        let textAlign;
        let x;
        if (position === 'left') {
            if (mirror) {
                x = this.right + padding;
                if (crossAlign === 'near') {
                    textAlign = 'left';
                } else if (crossAlign === 'center') {
                    textAlign = 'center';
                    x += widest / 2;
                } else {
                    textAlign = 'right';
                    x += widest;
                }
            } else {
                x = this.right - tickAndPadding;
                if (crossAlign === 'near') {
                    textAlign = 'right';
                } else if (crossAlign === 'center') {
                    textAlign = 'center';
                    x -= widest / 2;
                } else {
                    textAlign = 'left';
                    x = this.left;
                }
            }
        } else if (position === 'right') {
            if (mirror) {
                x = this.left + padding;
                if (crossAlign === 'near') {
                    textAlign = 'right';
                } else if (crossAlign === 'center') {
                    textAlign = 'center';
                    x -= widest / 2;
                } else {
                    textAlign = 'left';
                    x -= widest;
                }
            } else {
                x = this.left + tickAndPadding;
                if (crossAlign === 'near') {
                    textAlign = 'left';
                } else if (crossAlign === 'center') {
                    textAlign = 'center';
                    x += widest / 2;
                } else {
                    textAlign = 'right';
                    x = this.right;
                }
            }
        } else {
            textAlign = 'right';
        }
        return {
            textAlign,
            x
        };
    }
 _computeLabelArea() {
        if (this.options.ticks.mirror) {
            return;
        }
        const chart = this.chart;
        const position = this.options.position;
        if (position === 'left' || position === 'right') {
            return {
                top: 0,
                left: this.left,
                bottom: chart.height,
                right: this.right
            };
        }
        if (position === 'top' || position === 'bottom') {
            return {
                top: this.top,
                left: 0,
                bottom: this.bottom,
                right: chart.width
            };
        }
    }
 drawBackground() {
        const { ctx , options: { backgroundColor  } , left , top , width , height  } = this;
        if (backgroundColor) {
            ctx.save();
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(left, top, width, height);
            ctx.restore();
        }
    }
    getLineWidthForValue(value) {
        const grid = this.options.grid;
        if (!this._isVisible() || !grid.display) {
            return 0;
        }
        const ticks = this.ticks;
        const index = ticks.findIndex((t)=>t.value === value);
        if (index >= 0) {
            const opts = grid.setContext(this.getContext(index));
            return opts.lineWidth;
        }
        return 0;
    }
 drawGrid(chartArea) {
        const grid = this.options.grid;
        const ctx = this.ctx;
        const items = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(chartArea));
        let i, ilen;
        const drawLine = (p1, p2, style)=>{
            if (!style.width || !style.color) {
                return;
            }
            ctx.save();
            ctx.lineWidth = style.width;
            ctx.strokeStyle = style.color;
            ctx.setLineDash(style.borderDash || []);
            ctx.lineDashOffset = style.borderDashOffset;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
        };
        if (grid.display) {
            for(i = 0, ilen = items.length; i < ilen; ++i){
                const item = items[i];
                if (grid.drawOnChartArea) {
                    drawLine({
                        x: item.x1,
                        y: item.y1
                    }, {
                        x: item.x2,
                        y: item.y2
                    }, item);
                }
                if (grid.drawTicks) {
                    drawLine({
                        x: item.tx1,
                        y: item.ty1
                    }, {
                        x: item.tx2,
                        y: item.ty2
                    }, {
                        color: item.tickColor,
                        width: item.tickWidth,
                        borderDash: item.tickBorderDash,
                        borderDashOffset: item.tickBorderDashOffset
                    });
                }
            }
        }
    }
 drawBorder() {
        const { chart , ctx , options: { border , grid  }  } = this;
        const borderOpts = border.setContext(this.getContext());
        const axisWidth = border.display ? borderOpts.width : 0;
        if (!axisWidth) {
            return;
        }
        const lastLineWidth = grid.setContext(this.getContext(0)).lineWidth;
        const borderValue = this._borderValue;
        let x1, x2, y1, y2;
        if (this.isHorizontal()) {
            x1 = helpers_segment._alignPixel(chart, this.left, axisWidth) - axisWidth / 2;
            x2 = helpers_segment._alignPixel(chart, this.right, lastLineWidth) + lastLineWidth / 2;
            y1 = y2 = borderValue;
        } else {
            y1 = helpers_segment._alignPixel(chart, this.top, axisWidth) - axisWidth / 2;
            y2 = helpers_segment._alignPixel(chart, this.bottom, lastLineWidth) + lastLineWidth / 2;
            x1 = x2 = borderValue;
        }
        ctx.save();
        ctx.lineWidth = borderOpts.width;
        ctx.strokeStyle = borderOpts.color;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.restore();
    }
 drawLabels(chartArea) {
        const optionTicks = this.options.ticks;
        if (!optionTicks.display) {
            return;
        }
        const ctx = this.ctx;
        const area = this._computeLabelArea();
        if (area) {
            helpers_segment.clipArea(ctx, area);
        }
        const items = this.getLabelItems(chartArea);
        for (const item of items){
            const renderTextOptions = item.options;
            const tickFont = item.font;
            const label = item.label;
            const y = item.textOffset;
            helpers_segment.renderText(ctx, label, 0, y, tickFont, renderTextOptions);
        }
        if (area) {
            helpers_segment.unclipArea(ctx);
        }
    }
 drawTitle() {
        const { ctx , options: { position , title , reverse  }  } = this;
        if (!title.display) {
            return;
        }
        const font = helpers_segment.toFont(title.font);
        const padding = helpers_segment.toPadding(title.padding);
        const align = title.align;
        let offset = font.lineHeight / 2;
        if (position === 'bottom' || position === 'center' || helpers_segment.isObject(position)) {
            offset += padding.bottom;
            if (helpers_segment.isArray(title.text)) {
                offset += font.lineHeight * (title.text.length - 1);
            }
        } else {
            offset += padding.top;
        }
        const { titleX , titleY , maxWidth , rotation  } = titleArgs(this, offset, position, align);
        helpers_segment.renderText(ctx, title.text, 0, 0, font, {
            color: title.color,
            maxWidth,
            rotation,
            textAlign: titleAlign(align, position, reverse),
            textBaseline: 'middle',
            translation: [
                titleX,
                titleY
            ]
        });
    }
    draw(chartArea) {
        if (!this._isVisible()) {
            return;
        }
        this.drawBackground();
        this.drawGrid(chartArea);
        this.drawBorder();
        this.drawTitle();
        this.drawLabels(chartArea);
    }
 _layers() {
        const opts = this.options;
        const tz = opts.ticks && opts.ticks.z || 0;
        const gz = helpers_segment.valueOrDefault(opts.grid && opts.grid.z, -1);
        const bz = helpers_segment.valueOrDefault(opts.border && opts.border.z, 0);
        if (!this._isVisible() || this.draw !== Scale.prototype.draw) {
            return [
                {
                    z: tz,
                    draw: (chartArea)=>{
                        this.draw(chartArea);
                    }
                }
            ];
        }
        return [
            {
                z: gz,
                draw: (chartArea)=>{
                    this.drawBackground();
                    this.drawGrid(chartArea);
                    this.drawTitle();
                }
            },
            {
                z: bz,
                draw: ()=>{
                    this.drawBorder();
                }
            },
            {
                z: tz,
                draw: (chartArea)=>{
                    this.drawLabels(chartArea);
                }
            }
        ];
    }
 getMatchingVisibleMetas(type) {
        const metas = this.chart.getSortedVisibleDatasetMetas();
        const axisID = this.axis + 'AxisID';
        const result = [];
        let i, ilen;
        for(i = 0, ilen = metas.length; i < ilen; ++i){
            const meta = metas[i];
            if (meta[axisID] === this.id && (!type || meta.type === type)) {
                result.push(meta);
            }
        }
        return result;
    }
 _resolveTickFontOptions(index) {
        const opts = this.options.ticks.setContext(this.getContext(index));
        return helpers_segment.toFont(opts.font);
    }
 _maxDigits() {
        const fontSize = this._resolveTickFontOptions(0).lineHeight;
        return (this.isHorizontal() ? this.width : this.height) / fontSize;
    }
}

class TypedRegistry {
    constructor(type, scope, override){
        this.type = type;
        this.scope = scope;
        this.override = override;
        this.items = Object.create(null);
    }
    isForType(type) {
        return Object.prototype.isPrototypeOf.call(this.type.prototype, type.prototype);
    }
 register(item) {
        const proto = Object.getPrototypeOf(item);
        let parentScope;
        if (isIChartComponent(proto)) {
            parentScope = this.register(proto);
        }
        const items = this.items;
        const id = item.id;
        const scope = this.scope + '.' + id;
        if (!id) {
            throw new Error('class does not have id: ' + item);
        }
        if (id in items) {
            return scope;
        }
        items[id] = item;
        registerDefaults(item, scope, parentScope);
        if (this.override) {
            helpers_segment.defaults.override(item.id, item.overrides);
        }
        return scope;
    }
 get(id) {
        return this.items[id];
    }
 unregister(item) {
        const items = this.items;
        const id = item.id;
        const scope = this.scope;
        if (id in items) {
            delete items[id];
        }
        if (scope && id in helpers_segment.defaults[scope]) {
            delete helpers_segment.defaults[scope][id];
            if (this.override) {
                delete helpers_segment.overrides[id];
            }
        }
    }
}
function registerDefaults(item, scope, parentScope) {
    const itemDefaults = helpers_segment.merge(Object.create(null), [
        parentScope ? helpers_segment.defaults.get(parentScope) : {},
        helpers_segment.defaults.get(scope),
        item.defaults
    ]);
    helpers_segment.defaults.set(scope, itemDefaults);
    if (item.defaultRoutes) {
        routeDefaults(scope, item.defaultRoutes);
    }
    if (item.descriptors) {
        helpers_segment.defaults.describe(scope, item.descriptors);
    }
}
function routeDefaults(scope, routes) {
    Object.keys(routes).forEach((property)=>{
        const propertyParts = property.split('.');
        const sourceName = propertyParts.pop();
        const sourceScope = [
            scope
        ].concat(propertyParts).join('.');
        const parts = routes[property].split('.');
        const targetName = parts.pop();
        const targetScope = parts.join('.');
        helpers_segment.defaults.route(sourceScope, sourceName, targetScope, targetName);
    });
}
function isIChartComponent(proto) {
    return 'id' in proto && 'defaults' in proto;
}

class Registry {
    constructor(){
        this.controllers = new TypedRegistry(DatasetController, 'datasets', true);
        this.elements = new TypedRegistry(Element, 'elements');
        this.plugins = new TypedRegistry(Object, 'plugins');
        this.scales = new TypedRegistry(Scale, 'scales');
        this._typedRegistries = [
            this.controllers,
            this.scales,
            this.elements
        ];
    }
 add(...args) {
        this._each('register', args);
    }
    remove(...args) {
        this._each('unregister', args);
    }
 addControllers(...args) {
        this._each('register', args, this.controllers);
    }
 addElements(...args) {
        this._each('register', args, this.elements);
    }
 addPlugins(...args) {
        this._each('register', args, this.plugins);
    }
 addScales(...args) {
        this._each('register', args, this.scales);
    }
 getController(id) {
        return this._get(id, this.controllers, 'controller');
    }
 getElement(id) {
        return this._get(id, this.elements, 'element');
    }
 getPlugin(id) {
        return this._get(id, this.plugins, 'plugin');
    }
 getScale(id) {
        return this._get(id, this.scales, 'scale');
    }
 removeControllers(...args) {
        this._each('unregister', args, this.controllers);
    }
 removeElements(...args) {
        this._each('unregister', args, this.elements);
    }
 removePlugins(...args) {
        this._each('unregister', args, this.plugins);
    }
 removeScales(...args) {
        this._each('unregister', args, this.scales);
    }
 _each(method, args, typedRegistry) {
        [
            ...args
        ].forEach((arg)=>{
            const reg = typedRegistry || this._getRegistryForType(arg);
            if (typedRegistry || reg.isForType(arg) || reg === this.plugins && arg.id) {
                this._exec(method, reg, arg);
            } else {
                helpers_segment.each(arg, (item)=>{
                    const itemReg = typedRegistry || this._getRegistryForType(item);
                    this._exec(method, itemReg, item);
                });
            }
        });
    }
 _exec(method, registry, component) {
        const camelMethod = helpers_segment._capitalize(method);
        helpers_segment.callback(component['before' + camelMethod], [], component);
        registry[method](component);
        helpers_segment.callback(component['after' + camelMethod], [], component);
    }
 _getRegistryForType(type) {
        for(let i = 0; i < this._typedRegistries.length; i++){
            const reg = this._typedRegistries[i];
            if (reg.isForType(type)) {
                return reg;
            }
        }
        return this.plugins;
    }
 _get(id, typedRegistry, type) {
        const item = typedRegistry.get(id);
        if (item === undefined) {
            throw new Error('"' + id + '" is not a registered ' + type + '.');
        }
        return item;
    }
}
var registry = /* #__PURE__ */ new Registry();

class PluginService {
    constructor(){
        this._init = [];
    }
 notify(chart, hook, args, filter) {
        if (hook === 'beforeInit') {
            this._init = this._createDescriptors(chart, true);
            this._notify(this._init, chart, 'install');
        }
        const descriptors = filter ? this._descriptors(chart).filter(filter) : this._descriptors(chart);
        const result = this._notify(descriptors, chart, hook, args);
        if (hook === 'afterDestroy') {
            this._notify(descriptors, chart, 'stop');
            this._notify(this._init, chart, 'uninstall');
        }
        return result;
    }
 _notify(descriptors, chart, hook, args) {
        args = args || {};
        for (const descriptor of descriptors){
            const plugin = descriptor.plugin;
            const method = plugin[hook];
            const params = [
                chart,
                args,
                descriptor.options
            ];
            if (helpers_segment.callback(method, params, plugin) === false && args.cancelable) {
                return false;
            }
        }
        return true;
    }
    invalidate() {
        if (!helpers_segment.isNullOrUndef(this._cache)) {
            this._oldCache = this._cache;
            this._cache = undefined;
        }
    }
 _descriptors(chart) {
        if (this._cache) {
            return this._cache;
        }
        const descriptors = this._cache = this._createDescriptors(chart);
        this._notifyStateChanges(chart);
        return descriptors;
    }
    _createDescriptors(chart, all) {
        const config = chart && chart.config;
        const options = helpers_segment.valueOrDefault(config.options && config.options.plugins, {});
        const plugins = allPlugins(config);
        return options === false && !all ? [] : createDescriptors(chart, plugins, options, all);
    }
 _notifyStateChanges(chart) {
        const previousDescriptors = this._oldCache || [];
        const descriptors = this._cache;
        const diff = (a, b)=>a.filter((x)=>!b.some((y)=>x.plugin.id === y.plugin.id));
        this._notify(diff(previousDescriptors, descriptors), chart, 'stop');
        this._notify(diff(descriptors, previousDescriptors), chart, 'start');
    }
}
 function allPlugins(config) {
    const localIds = {};
    const plugins = [];
    const keys = Object.keys(registry.plugins.items);
    for(let i = 0; i < keys.length; i++){
        plugins.push(registry.getPlugin(keys[i]));
    }
    const local = config.plugins || [];
    for(let i = 0; i < local.length; i++){
        const plugin = local[i];
        if (plugins.indexOf(plugin) === -1) {
            plugins.push(plugin);
            localIds[plugin.id] = true;
        }
    }
    return {
        plugins,
        localIds
    };
}
function getOpts(options, all) {
    if (!all && options === false) {
        return null;
    }
    if (options === true) {
        return {};
    }
    return options;
}
function createDescriptors(chart, { plugins , localIds  }, options, all) {
    const result = [];
    const context = chart.getContext();
    for (const plugin of plugins){
        const id = plugin.id;
        const opts = getOpts(options[id], all);
        if (opts === null) {
            continue;
        }
        result.push({
            plugin,
            options: pluginOpts(chart.config, {
                plugin,
                local: localIds[id]
            }, opts, context)
        });
    }
    return result;
}
function pluginOpts(config, { plugin , local  }, opts, context) {
    const keys = config.pluginScopeKeys(plugin);
    const scopes = config.getOptionScopes(opts, keys);
    if (local && plugin.defaults) {
        scopes.push(plugin.defaults);
    }
    return config.createResolver(scopes, context, [
        ''
    ], {
        scriptable: false,
        indexable: false,
        allKeys: true
    });
}

function getIndexAxis(type, options) {
    const datasetDefaults = helpers_segment.defaults.datasets[type] || {};
    const datasetOptions = (options.datasets || {})[type] || {};
    return datasetOptions.indexAxis || options.indexAxis || datasetDefaults.indexAxis || 'x';
}
function getAxisFromDefaultScaleID(id, indexAxis) {
    let axis = id;
    if (id === '_index_') {
        axis = indexAxis;
    } else if (id === '_value_') {
        axis = indexAxis === 'x' ? 'y' : 'x';
    }
    return axis;
}
function getDefaultScaleIDFromAxis(axis, indexAxis) {
    return axis === indexAxis ? '_index_' : '_value_';
}
function idMatchesAxis(id) {
    if (id === 'x' || id === 'y' || id === 'r') {
        return id;
    }
}
function axisFromPosition(position) {
    if (position === 'top' || position === 'bottom') {
        return 'x';
    }
    if (position === 'left' || position === 'right') {
        return 'y';
    }
}
function determineAxis(id, ...scaleOptions) {
    if (idMatchesAxis(id)) {
        return id;
    }
    for (const opts of scaleOptions){
        const axis = opts.axis || axisFromPosition(opts.position) || id.length > 1 && idMatchesAxis(id[0].toLowerCase());
        if (axis) {
            return axis;
        }
    }
    throw new Error(`Cannot determine type of '${id}' axis. Please provide 'axis' or 'position' option.`);
}
function getAxisFromDataset(id, axis, dataset) {
    if (dataset[axis + 'AxisID'] === id) {
        return {
            axis
        };
    }
}
function retrieveAxisFromDatasets(id, config) {
    if (config.data && config.data.datasets) {
        const boundDs = config.data.datasets.filter((d)=>d.xAxisID === id || d.yAxisID === id);
        if (boundDs.length) {
            return getAxisFromDataset(id, 'x', boundDs[0]) || getAxisFromDataset(id, 'y', boundDs[0]);
        }
    }
    return {};
}
function mergeScaleConfig(config, options) {
    const chartDefaults = helpers_segment.overrides[config.type] || {
        scales: {}
    };
    const configScales = options.scales || {};
    const chartIndexAxis = getIndexAxis(config.type, options);
    const scales = Object.create(null);
    Object.keys(configScales).forEach((id)=>{
        const scaleConf = configScales[id];
        if (!helpers_segment.isObject(scaleConf)) {
            return console.error(`Invalid scale configuration for scale: ${id}`);
        }
        if (scaleConf._proxy) {
            return console.warn(`Ignoring resolver passed as options for scale: ${id}`);
        }
        const axis = determineAxis(id, scaleConf, retrieveAxisFromDatasets(id, config), helpers_segment.defaults.scales[scaleConf.type]);
        const defaultId = getDefaultScaleIDFromAxis(axis, chartIndexAxis);
        const defaultScaleOptions = chartDefaults.scales || {};
        scales[id] = helpers_segment.mergeIf(Object.create(null), [
            {
                axis
            },
            scaleConf,
            defaultScaleOptions[axis],
            defaultScaleOptions[defaultId]
        ]);
    });
    config.data.datasets.forEach((dataset)=>{
        const type = dataset.type || config.type;
        const indexAxis = dataset.indexAxis || getIndexAxis(type, options);
        const datasetDefaults = helpers_segment.overrides[type] || {};
        const defaultScaleOptions = datasetDefaults.scales || {};
        Object.keys(defaultScaleOptions).forEach((defaultID)=>{
            const axis = getAxisFromDefaultScaleID(defaultID, indexAxis);
            const id = dataset[axis + 'AxisID'] || axis;
            scales[id] = scales[id] || Object.create(null);
            helpers_segment.mergeIf(scales[id], [
                {
                    axis
                },
                configScales[id],
                defaultScaleOptions[defaultID]
            ]);
        });
    });
    Object.keys(scales).forEach((key)=>{
        const scale = scales[key];
        helpers_segment.mergeIf(scale, [
            helpers_segment.defaults.scales[scale.type],
            helpers_segment.defaults.scale
        ]);
    });
    return scales;
}
function initOptions(config) {
    const options = config.options || (config.options = {});
    options.plugins = helpers_segment.valueOrDefault(options.plugins, {});
    options.scales = mergeScaleConfig(config, options);
}
function initData(data) {
    data = data || {};
    data.datasets = data.datasets || [];
    data.labels = data.labels || [];
    return data;
}
function initConfig(config) {
    config = config || {};
    config.data = initData(config.data);
    initOptions(config);
    return config;
}
const keyCache = new Map();
const keysCached = new Set();
function cachedKeys(cacheKey, generate) {
    let keys = keyCache.get(cacheKey);
    if (!keys) {
        keys = generate();
        keyCache.set(cacheKey, keys);
        keysCached.add(keys);
    }
    return keys;
}
const addIfFound = (set, obj, key)=>{
    const opts = helpers_segment.resolveObjectKey(obj, key);
    if (opts !== undefined) {
        set.add(opts);
    }
};
class Config {
    constructor(config){
        this._config = initConfig(config);
        this._scopeCache = new Map();
        this._resolverCache = new Map();
    }
    get platform() {
        return this._config.platform;
    }
    get type() {
        return this._config.type;
    }
    set type(type) {
        this._config.type = type;
    }
    get data() {
        return this._config.data;
    }
    set data(data) {
        this._config.data = initData(data);
    }
    get options() {
        return this._config.options;
    }
    set options(options) {
        this._config.options = options;
    }
    get plugins() {
        return this._config.plugins;
    }
    update() {
        const config = this._config;
        this.clearCache();
        initOptions(config);
    }
    clearCache() {
        this._scopeCache.clear();
        this._resolverCache.clear();
    }
 datasetScopeKeys(datasetType) {
        return cachedKeys(datasetType, ()=>[
                [
                    `datasets.${datasetType}`,
                    ''
                ]
            ]);
    }
 datasetAnimationScopeKeys(datasetType, transition) {
        return cachedKeys(`${datasetType}.transition.${transition}`, ()=>[
                [
                    `datasets.${datasetType}.transitions.${transition}`,
                    `transitions.${transition}`
                ],
                [
                    `datasets.${datasetType}`,
                    ''
                ]
            ]);
    }
 datasetElementScopeKeys(datasetType, elementType) {
        return cachedKeys(`${datasetType}-${elementType}`, ()=>[
                [
                    `datasets.${datasetType}.elements.${elementType}`,
                    `datasets.${datasetType}`,
                    `elements.${elementType}`,
                    ''
                ]
            ]);
    }
 pluginScopeKeys(plugin) {
        const id = plugin.id;
        const type = this.type;
        return cachedKeys(`${type}-plugin-${id}`, ()=>[
                [
                    `plugins.${id}`,
                    ...plugin.additionalOptionScopes || []
                ]
            ]);
    }
 _cachedScopes(mainScope, resetCache) {
        const _scopeCache = this._scopeCache;
        let cache = _scopeCache.get(mainScope);
        if (!cache || resetCache) {
            cache = new Map();
            _scopeCache.set(mainScope, cache);
        }
        return cache;
    }
 getOptionScopes(mainScope, keyLists, resetCache) {
        const { options , type  } = this;
        const cache = this._cachedScopes(mainScope, resetCache);
        const cached = cache.get(keyLists);
        if (cached) {
            return cached;
        }
        const scopes = new Set();
        keyLists.forEach((keys)=>{
            if (mainScope) {
                scopes.add(mainScope);
                keys.forEach((key)=>addIfFound(scopes, mainScope, key));
            }
            keys.forEach((key)=>addIfFound(scopes, options, key));
            keys.forEach((key)=>addIfFound(scopes, helpers_segment.overrides[type] || {}, key));
            keys.forEach((key)=>addIfFound(scopes, helpers_segment.defaults, key));
            keys.forEach((key)=>addIfFound(scopes, helpers_segment.descriptors, key));
        });
        const array = Array.from(scopes);
        if (array.length === 0) {
            array.push(Object.create(null));
        }
        if (keysCached.has(keyLists)) {
            cache.set(keyLists, array);
        }
        return array;
    }
 chartOptionScopes() {
        const { options , type  } = this;
        return [
            options,
            helpers_segment.overrides[type] || {},
            helpers_segment.defaults.datasets[type] || {},
            {
                type
            },
            helpers_segment.defaults,
            helpers_segment.descriptors
        ];
    }
 resolveNamedOptions(scopes, names, context, prefixes = [
        ''
    ]) {
        const result = {
            $shared: true
        };
        const { resolver , subPrefixes  } = getResolver(this._resolverCache, scopes, prefixes);
        let options = resolver;
        if (needContext(resolver, names)) {
            result.$shared = false;
            context = helpers_segment.isFunction(context) ? context() : context;
            const subResolver = this.createResolver(scopes, context, subPrefixes);
            options = helpers_segment._attachContext(resolver, context, subResolver);
        }
        for (const prop of names){
            result[prop] = options[prop];
        }
        return result;
    }
 createResolver(scopes, context, prefixes = [
        ''
    ], descriptorDefaults) {
        const { resolver  } = getResolver(this._resolverCache, scopes, prefixes);
        return helpers_segment.isObject(context) ? helpers_segment._attachContext(resolver, context, undefined, descriptorDefaults) : resolver;
    }
}
function getResolver(resolverCache, scopes, prefixes) {
    let cache = resolverCache.get(scopes);
    if (!cache) {
        cache = new Map();
        resolverCache.set(scopes, cache);
    }
    const cacheKey = prefixes.join();
    let cached = cache.get(cacheKey);
    if (!cached) {
        const resolver = helpers_segment._createResolver(scopes, prefixes);
        cached = {
            resolver,
            subPrefixes: prefixes.filter((p)=>!p.toLowerCase().includes('hover'))
        };
        cache.set(cacheKey, cached);
    }
    return cached;
}
const hasFunction = (value)=>helpers_segment.isObject(value) && Object.getOwnPropertyNames(value).some((key)=>helpers_segment.isFunction(value[key]));
function needContext(proxy, names) {
    const { isScriptable , isIndexable  } = helpers_segment._descriptors(proxy);
    for (const prop of names){
        const scriptable = isScriptable(prop);
        const indexable = isIndexable(prop);
        const value = (indexable || scriptable) && proxy[prop];
        if (scriptable && (helpers_segment.isFunction(value) || hasFunction(value)) || indexable && helpers_segment.isArray(value)) {
            return true;
        }
    }
    return false;
}

var version = "4.4.1";

const KNOWN_POSITIONS = [
    'top',
    'bottom',
    'left',
    'right',
    'chartArea'
];
function positionIsHorizontal(position, axis) {
    return position === 'top' || position === 'bottom' || KNOWN_POSITIONS.indexOf(position) === -1 && axis === 'x';
}
function compare2Level(l1, l2) {
    return function(a, b) {
        return a[l1] === b[l1] ? a[l2] - b[l2] : a[l1] - b[l1];
    };
}
function onAnimationsComplete(context) {
    const chart = context.chart;
    const animationOptions = chart.options.animation;
    chart.notifyPlugins('afterRender');
    helpers_segment.callback(animationOptions && animationOptions.onComplete, [
        context
    ], chart);
}
function onAnimationProgress(context) {
    const chart = context.chart;
    const animationOptions = chart.options.animation;
    helpers_segment.callback(animationOptions && animationOptions.onProgress, [
        context
    ], chart);
}
 function getCanvas(item) {
    if (helpers_segment._isDomSupported() && typeof item === 'string') {
        item = document.getElementById(item);
    } else if (item && item.length) {
        item = item[0];
    }
    if (item && item.canvas) {
        item = item.canvas;
    }
    return item;
}
const instances = {};
const getChart = (key)=>{
    const canvas = getCanvas(key);
    return Object.values(instances).filter((c)=>c.canvas === canvas).pop();
};
function moveNumericKeys(obj, start, move) {
    const keys = Object.keys(obj);
    for (const key of keys){
        const intKey = +key;
        if (intKey >= start) {
            const value = obj[key];
            delete obj[key];
            if (move > 0 || intKey > start) {
                obj[intKey + move] = value;
            }
        }
    }
}
 function determineLastEvent(e, lastEvent, inChartArea, isClick) {
    if (!inChartArea || e.type === 'mouseout') {
        return null;
    }
    if (isClick) {
        return lastEvent;
    }
    return e;
}
function getSizeForArea(scale, chartArea, field) {
    return scale.options.clip ? scale[field] : chartArea[field];
}
function getDatasetArea(meta, chartArea) {
    const { xScale , yScale  } = meta;
    if (xScale && yScale) {
        return {
            left: getSizeForArea(xScale, chartArea, 'left'),
            right: getSizeForArea(xScale, chartArea, 'right'),
            top: getSizeForArea(yScale, chartArea, 'top'),
            bottom: getSizeForArea(yScale, chartArea, 'bottom')
        };
    }
    return chartArea;
}
class Chart {
    static defaults = helpers_segment.defaults;
    static instances = instances;
    static overrides = helpers_segment.overrides;
    static registry = registry;
    static version = version;
    static getChart = getChart;
    static register(...items) {
        registry.add(...items);
        invalidatePlugins();
    }
    static unregister(...items) {
        registry.remove(...items);
        invalidatePlugins();
    }
    constructor(item, userConfig){
        const config = this.config = new Config(userConfig);
        const initialCanvas = getCanvas(item);
        const existingChart = getChart(initialCanvas);
        if (existingChart) {
            throw new Error('Canvas is already in use. Chart with ID \'' + existingChart.id + '\'' + ' must be destroyed before the canvas with ID \'' + existingChart.canvas.id + '\' can be reused.');
        }
        const options = config.createResolver(config.chartOptionScopes(), this.getContext());
        this.platform = new (config.platform || _detectPlatform(initialCanvas))();
        this.platform.updateConfig(config);
        const context = this.platform.acquireContext(initialCanvas, options.aspectRatio);
        const canvas = context && context.canvas;
        const height = canvas && canvas.height;
        const width = canvas && canvas.width;
        this.id = helpers_segment.uid();
        this.ctx = context;
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        this._options = options;
        this._aspectRatio = this.aspectRatio;
        this._layers = [];
        this._metasets = [];
        this._stacks = undefined;
        this.boxes = [];
        this.currentDevicePixelRatio = undefined;
        this.chartArea = undefined;
        this._active = [];
        this._lastEvent = undefined;
        this._listeners = {};
         this._responsiveListeners = undefined;
        this._sortedMetasets = [];
        this.scales = {};
        this._plugins = new PluginService();
        this.$proxies = {};
        this._hiddenIndices = {};
        this.attached = false;
        this._animationsDisabled = undefined;
        this.$context = undefined;
        this._doResize = helpers_segment.debounce((mode)=>this.update(mode), options.resizeDelay || 0);
        this._dataChanges = [];
        instances[this.id] = this;
        if (!context || !canvas) {
            console.error("Failed to create chart: can't acquire context from the given item");
            return;
        }
        animator.listen(this, 'complete', onAnimationsComplete);
        animator.listen(this, 'progress', onAnimationProgress);
        this._initialize();
        if (this.attached) {
            this.update();
        }
    }
    get aspectRatio() {
        const { options: { aspectRatio , maintainAspectRatio  } , width , height , _aspectRatio  } = this;
        if (!helpers_segment.isNullOrUndef(aspectRatio)) {
            return aspectRatio;
        }
        if (maintainAspectRatio && _aspectRatio) {
            return _aspectRatio;
        }
        return height ? width / height : null;
    }
    get data() {
        return this.config.data;
    }
    set data(data) {
        this.config.data = data;
    }
    get options() {
        return this._options;
    }
    set options(options) {
        this.config.options = options;
    }
    get registry() {
        return registry;
    }
 _initialize() {
        this.notifyPlugins('beforeInit');
        if (this.options.responsive) {
            this.resize();
        } else {
            helpers_segment.retinaScale(this, this.options.devicePixelRatio);
        }
        this.bindEvents();
        this.notifyPlugins('afterInit');
        return this;
    }
    clear() {
        helpers_segment.clearCanvas(this.canvas, this.ctx);
        return this;
    }
    stop() {
        animator.stop(this);
        return this;
    }
 resize(width, height) {
        if (!animator.running(this)) {
            this._resize(width, height);
        } else {
            this._resizeBeforeDraw = {
                width,
                height
            };
        }
    }
    _resize(width, height) {
        const options = this.options;
        const canvas = this.canvas;
        const aspectRatio = options.maintainAspectRatio && this.aspectRatio;
        const newSize = this.platform.getMaximumSize(canvas, width, height, aspectRatio);
        const newRatio = options.devicePixelRatio || this.platform.getDevicePixelRatio();
        const mode = this.width ? 'resize' : 'attach';
        this.width = newSize.width;
        this.height = newSize.height;
        this._aspectRatio = this.aspectRatio;
        if (!helpers_segment.retinaScale(this, newRatio, true)) {
            return;
        }
        this.notifyPlugins('resize', {
            size: newSize
        });
        helpers_segment.callback(options.onResize, [
            this,
            newSize
        ], this);
        if (this.attached) {
            if (this._doResize(mode)) {
                this.render();
            }
        }
    }
    ensureScalesHaveIDs() {
        const options = this.options;
        const scalesOptions = options.scales || {};
        helpers_segment.each(scalesOptions, (axisOptions, axisID)=>{
            axisOptions.id = axisID;
        });
    }
 buildOrUpdateScales() {
        const options = this.options;
        const scaleOpts = options.scales;
        const scales = this.scales;
        const updated = Object.keys(scales).reduce((obj, id)=>{
            obj[id] = false;
            return obj;
        }, {});
        let items = [];
        if (scaleOpts) {
            items = items.concat(Object.keys(scaleOpts).map((id)=>{
                const scaleOptions = scaleOpts[id];
                const axis = determineAxis(id, scaleOptions);
                const isRadial = axis === 'r';
                const isHorizontal = axis === 'x';
                return {
                    options: scaleOptions,
                    dposition: isRadial ? 'chartArea' : isHorizontal ? 'bottom' : 'left',
                    dtype: isRadial ? 'radialLinear' : isHorizontal ? 'category' : 'linear'
                };
            }));
        }
        helpers_segment.each(items, (item)=>{
            const scaleOptions = item.options;
            const id = scaleOptions.id;
            const axis = determineAxis(id, scaleOptions);
            const scaleType = helpers_segment.valueOrDefault(scaleOptions.type, item.dtype);
            if (scaleOptions.position === undefined || positionIsHorizontal(scaleOptions.position, axis) !== positionIsHorizontal(item.dposition)) {
                scaleOptions.position = item.dposition;
            }
            updated[id] = true;
            let scale = null;
            if (id in scales && scales[id].type === scaleType) {
                scale = scales[id];
            } else {
                const scaleClass = registry.getScale(scaleType);
                scale = new scaleClass({
                    id,
                    type: scaleType,
                    ctx: this.ctx,
                    chart: this
                });
                scales[scale.id] = scale;
            }
            scale.init(scaleOptions, options);
        });
        helpers_segment.each(updated, (hasUpdated, id)=>{
            if (!hasUpdated) {
                delete scales[id];
            }
        });
        helpers_segment.each(scales, (scale)=>{
            layouts.configure(this, scale, scale.options);
            layouts.addBox(this, scale);
        });
    }
 _updateMetasets() {
        const metasets = this._metasets;
        const numData = this.data.datasets.length;
        const numMeta = metasets.length;
        metasets.sort((a, b)=>a.index - b.index);
        if (numMeta > numData) {
            for(let i = numData; i < numMeta; ++i){
                this._destroyDatasetMeta(i);
            }
            metasets.splice(numData, numMeta - numData);
        }
        this._sortedMetasets = metasets.slice(0).sort(compare2Level('order', 'index'));
    }
 _removeUnreferencedMetasets() {
        const { _metasets: metasets , data: { datasets  }  } = this;
        if (metasets.length > datasets.length) {
            delete this._stacks;
        }
        metasets.forEach((meta, index)=>{
            if (datasets.filter((x)=>x === meta._dataset).length === 0) {
                this._destroyDatasetMeta(index);
            }
        });
    }
    buildOrUpdateControllers() {
        const newControllers = [];
        const datasets = this.data.datasets;
        let i, ilen;
        this._removeUnreferencedMetasets();
        for(i = 0, ilen = datasets.length; i < ilen; i++){
            const dataset = datasets[i];
            let meta = this.getDatasetMeta(i);
            const type = dataset.type || this.config.type;
            if (meta.type && meta.type !== type) {
                this._destroyDatasetMeta(i);
                meta = this.getDatasetMeta(i);
            }
            meta.type = type;
            meta.indexAxis = dataset.indexAxis || getIndexAxis(type, this.options);
            meta.order = dataset.order || 0;
            meta.index = i;
            meta.label = '' + dataset.label;
            meta.visible = this.isDatasetVisible(i);
            if (meta.controller) {
                meta.controller.updateIndex(i);
                meta.controller.linkScales();
            } else {
                const ControllerClass = registry.getController(type);
                const { datasetElementType , dataElementType  } = helpers_segment.defaults.datasets[type];
                Object.assign(ControllerClass, {
                    dataElementType: registry.getElement(dataElementType),
                    datasetElementType: datasetElementType && registry.getElement(datasetElementType)
                });
                meta.controller = new ControllerClass(this, i);
                newControllers.push(meta.controller);
            }
        }
        this._updateMetasets();
        return newControllers;
    }
 _resetElements() {
        helpers_segment.each(this.data.datasets, (dataset, datasetIndex)=>{
            this.getDatasetMeta(datasetIndex).controller.reset();
        }, this);
    }
 reset() {
        this._resetElements();
        this.notifyPlugins('reset');
    }
    update(mode) {
        const config = this.config;
        config.update();
        const options = this._options = config.createResolver(config.chartOptionScopes(), this.getContext());
        const animsDisabled = this._animationsDisabled = !options.animation;
        this._updateScales();
        this._checkEventBindings();
        this._updateHiddenIndices();
        this._plugins.invalidate();
        if (this.notifyPlugins('beforeUpdate', {
            mode,
            cancelable: true
        }) === false) {
            return;
        }
        const newControllers = this.buildOrUpdateControllers();
        this.notifyPlugins('beforeElementsUpdate');
        let minPadding = 0;
        for(let i = 0, ilen = this.data.datasets.length; i < ilen; i++){
            const { controller  } = this.getDatasetMeta(i);
            const reset = !animsDisabled && newControllers.indexOf(controller) === -1;
            controller.buildOrUpdateElements(reset);
            minPadding = Math.max(+controller.getMaxOverflow(), minPadding);
        }
        minPadding = this._minPadding = options.layout.autoPadding ? minPadding : 0;
        this._updateLayout(minPadding);
        if (!animsDisabled) {
            helpers_segment.each(newControllers, (controller)=>{
                controller.reset();
            });
        }
        this._updateDatasets(mode);
        this.notifyPlugins('afterUpdate', {
            mode
        });
        this._layers.sort(compare2Level('z', '_idx'));
        const { _active , _lastEvent  } = this;
        if (_lastEvent) {
            this._eventHandler(_lastEvent, true);
        } else if (_active.length) {
            this._updateHoverStyles(_active, _active, true);
        }
        this.render();
    }
 _updateScales() {
        helpers_segment.each(this.scales, (scale)=>{
            layouts.removeBox(this, scale);
        });
        this.ensureScalesHaveIDs();
        this.buildOrUpdateScales();
    }
 _checkEventBindings() {
        const options = this.options;
        const existingEvents = new Set(Object.keys(this._listeners));
        const newEvents = new Set(options.events);
        if (!helpers_segment.setsEqual(existingEvents, newEvents) || !!this._responsiveListeners !== options.responsive) {
            this.unbindEvents();
            this.bindEvents();
        }
    }
 _updateHiddenIndices() {
        const { _hiddenIndices  } = this;
        const changes = this._getUniformDataChanges() || [];
        for (const { method , start , count  } of changes){
            const move = method === '_removeElements' ? -count : count;
            moveNumericKeys(_hiddenIndices, start, move);
        }
    }
 _getUniformDataChanges() {
        const _dataChanges = this._dataChanges;
        if (!_dataChanges || !_dataChanges.length) {
            return;
        }
        this._dataChanges = [];
        const datasetCount = this.data.datasets.length;
        const makeSet = (idx)=>new Set(_dataChanges.filter((c)=>c[0] === idx).map((c, i)=>i + ',' + c.splice(1).join(',')));
        const changeSet = makeSet(0);
        for(let i = 1; i < datasetCount; i++){
            if (!helpers_segment.setsEqual(changeSet, makeSet(i))) {
                return;
            }
        }
        return Array.from(changeSet).map((c)=>c.split(',')).map((a)=>({
                method: a[1],
                start: +a[2],
                count: +a[3]
            }));
    }
 _updateLayout(minPadding) {
        if (this.notifyPlugins('beforeLayout', {
            cancelable: true
        }) === false) {
            return;
        }
        layouts.update(this, this.width, this.height, minPadding);
        const area = this.chartArea;
        const noArea = area.width <= 0 || area.height <= 0;
        this._layers = [];
        helpers_segment.each(this.boxes, (box)=>{
            if (noArea && box.position === 'chartArea') {
                return;
            }
            if (box.configure) {
                box.configure();
            }
            this._layers.push(...box._layers());
        }, this);
        this._layers.forEach((item, index)=>{
            item._idx = index;
        });
        this.notifyPlugins('afterLayout');
    }
 _updateDatasets(mode) {
        if (this.notifyPlugins('beforeDatasetsUpdate', {
            mode,
            cancelable: true
        }) === false) {
            return;
        }
        for(let i = 0, ilen = this.data.datasets.length; i < ilen; ++i){
            this.getDatasetMeta(i).controller.configure();
        }
        for(let i = 0, ilen = this.data.datasets.length; i < ilen; ++i){
            this._updateDataset(i, helpers_segment.isFunction(mode) ? mode({
                datasetIndex: i
            }) : mode);
        }
        this.notifyPlugins('afterDatasetsUpdate', {
            mode
        });
    }
 _updateDataset(index, mode) {
        const meta = this.getDatasetMeta(index);
        const args = {
            meta,
            index,
            mode,
            cancelable: true
        };
        if (this.notifyPlugins('beforeDatasetUpdate', args) === false) {
            return;
        }
        meta.controller._update(mode);
        args.cancelable = false;
        this.notifyPlugins('afterDatasetUpdate', args);
    }
    render() {
        if (this.notifyPlugins('beforeRender', {
            cancelable: true
        }) === false) {
            return;
        }
        if (animator.has(this)) {
            if (this.attached && !animator.running(this)) {
                animator.start(this);
            }
        } else {
            this.draw();
            onAnimationsComplete({
                chart: this
            });
        }
    }
    draw() {
        let i;
        if (this._resizeBeforeDraw) {
            const { width , height  } = this._resizeBeforeDraw;
            this._resize(width, height);
            this._resizeBeforeDraw = null;
        }
        this.clear();
        if (this.width <= 0 || this.height <= 0) {
            return;
        }
        if (this.notifyPlugins('beforeDraw', {
            cancelable: true
        }) === false) {
            return;
        }
        const layers = this._layers;
        for(i = 0; i < layers.length && layers[i].z <= 0; ++i){
            layers[i].draw(this.chartArea);
        }
        this._drawDatasets();
        for(; i < layers.length; ++i){
            layers[i].draw(this.chartArea);
        }
        this.notifyPlugins('afterDraw');
    }
 _getSortedDatasetMetas(filterVisible) {
        const metasets = this._sortedMetasets;
        const result = [];
        let i, ilen;
        for(i = 0, ilen = metasets.length; i < ilen; ++i){
            const meta = metasets[i];
            if (!filterVisible || meta.visible) {
                result.push(meta);
            }
        }
        return result;
    }
 getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(true);
    }
 _drawDatasets() {
        if (this.notifyPlugins('beforeDatasetsDraw', {
            cancelable: true
        }) === false) {
            return;
        }
        const metasets = this.getSortedVisibleDatasetMetas();
        for(let i = metasets.length - 1; i >= 0; --i){
            this._drawDataset(metasets[i]);
        }
        this.notifyPlugins('afterDatasetsDraw');
    }
 _drawDataset(meta) {
        const ctx = this.ctx;
        const clip = meta._clip;
        const useClip = !clip.disabled;
        const area = getDatasetArea(meta, this.chartArea);
        const args = {
            meta,
            index: meta.index,
            cancelable: true
        };
        if (this.notifyPlugins('beforeDatasetDraw', args) === false) {
            return;
        }
        if (useClip) {
            helpers_segment.clipArea(ctx, {
                left: clip.left === false ? 0 : area.left - clip.left,
                right: clip.right === false ? this.width : area.right + clip.right,
                top: clip.top === false ? 0 : area.top - clip.top,
                bottom: clip.bottom === false ? this.height : area.bottom + clip.bottom
            });
        }
        meta.controller.draw();
        if (useClip) {
            helpers_segment.unclipArea(ctx);
        }
        args.cancelable = false;
        this.notifyPlugins('afterDatasetDraw', args);
    }
 isPointInArea(point) {
        return helpers_segment._isPointInArea(point, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(e, mode, options, useFinalPosition) {
        const method = Interaction.modes[mode];
        if (typeof method === 'function') {
            return method(this, e, options, useFinalPosition);
        }
        return [];
    }
    getDatasetMeta(datasetIndex) {
        const dataset = this.data.datasets[datasetIndex];
        const metasets = this._metasets;
        let meta = metasets.filter((x)=>x && x._dataset === dataset).pop();
        if (!meta) {
            meta = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: dataset && dataset.order || 0,
                index: datasetIndex,
                _dataset: dataset,
                _parsed: [],
                _sorted: false
            };
            metasets.push(meta);
        }
        return meta;
    }
    getContext() {
        return this.$context || (this.$context = helpers_segment.createContext(null, {
            chart: this,
            type: 'chart'
        }));
    }
    getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(datasetIndex) {
        const dataset = this.data.datasets[datasetIndex];
        if (!dataset) {
            return false;
        }
        const meta = this.getDatasetMeta(datasetIndex);
        return typeof meta.hidden === 'boolean' ? !meta.hidden : !dataset.hidden;
    }
    setDatasetVisibility(datasetIndex, visible) {
        const meta = this.getDatasetMeta(datasetIndex);
        meta.hidden = !visible;
    }
    toggleDataVisibility(index) {
        this._hiddenIndices[index] = !this._hiddenIndices[index];
    }
    getDataVisibility(index) {
        return !this._hiddenIndices[index];
    }
 _updateVisibility(datasetIndex, dataIndex, visible) {
        const mode = visible ? 'show' : 'hide';
        const meta = this.getDatasetMeta(datasetIndex);
        const anims = meta.controller._resolveAnimations(undefined, mode);
        if (helpers_segment.defined(dataIndex)) {
            meta.data[dataIndex].hidden = !visible;
            this.update();
        } else {
            this.setDatasetVisibility(datasetIndex, visible);
            anims.update(meta, {
                visible
            });
            this.update((ctx)=>ctx.datasetIndex === datasetIndex ? mode : undefined);
        }
    }
    hide(datasetIndex, dataIndex) {
        this._updateVisibility(datasetIndex, dataIndex, false);
    }
    show(datasetIndex, dataIndex) {
        this._updateVisibility(datasetIndex, dataIndex, true);
    }
 _destroyDatasetMeta(datasetIndex) {
        const meta = this._metasets[datasetIndex];
        if (meta && meta.controller) {
            meta.controller._destroy();
        }
        delete this._metasets[datasetIndex];
    }
    _stop() {
        let i, ilen;
        this.stop();
        animator.remove(this);
        for(i = 0, ilen = this.data.datasets.length; i < ilen; ++i){
            this._destroyDatasetMeta(i);
        }
    }
    destroy() {
        this.notifyPlugins('beforeDestroy');
        const { canvas , ctx  } = this;
        this._stop();
        this.config.clearCache();
        if (canvas) {
            this.unbindEvents();
            helpers_segment.clearCanvas(canvas, ctx);
            this.platform.releaseContext(ctx);
            this.canvas = null;
            this.ctx = null;
        }
        delete instances[this.id];
        this.notifyPlugins('afterDestroy');
    }
    toBase64Image(...args) {
        return this.canvas.toDataURL(...args);
    }
 bindEvents() {
        this.bindUserEvents();
        if (this.options.responsive) {
            this.bindResponsiveEvents();
        } else {
            this.attached = true;
        }
    }
 bindUserEvents() {
        const listeners = this._listeners;
        const platform = this.platform;
        const _add = (type, listener)=>{
            platform.addEventListener(this, type, listener);
            listeners[type] = listener;
        };
        const listener = (e, x, y)=>{
            e.offsetX = x;
            e.offsetY = y;
            this._eventHandler(e);
        };
        helpers_segment.each(this.options.events, (type)=>_add(type, listener));
    }
 bindResponsiveEvents() {
        if (!this._responsiveListeners) {
            this._responsiveListeners = {};
        }
        const listeners = this._responsiveListeners;
        const platform = this.platform;
        const _add = (type, listener)=>{
            platform.addEventListener(this, type, listener);
            listeners[type] = listener;
        };
        const _remove = (type, listener)=>{
            if (listeners[type]) {
                platform.removeEventListener(this, type, listener);
                delete listeners[type];
            }
        };
        const listener = (width, height)=>{
            if (this.canvas) {
                this.resize(width, height);
            }
        };
        let detached;
        const attached = ()=>{
            _remove('attach', attached);
            this.attached = true;
            this.resize();
            _add('resize', listener);
            _add('detach', detached);
        };
        detached = ()=>{
            this.attached = false;
            _remove('resize', listener);
            this._stop();
            this._resize(0, 0);
            _add('attach', attached);
        };
        if (platform.isAttached(this.canvas)) {
            attached();
        } else {
            detached();
        }
    }
 unbindEvents() {
        helpers_segment.each(this._listeners, (listener, type)=>{
            this.platform.removeEventListener(this, type, listener);
        });
        this._listeners = {};
        helpers_segment.each(this._responsiveListeners, (listener, type)=>{
            this.platform.removeEventListener(this, type, listener);
        });
        this._responsiveListeners = undefined;
    }
    updateHoverStyle(items, mode, enabled) {
        const prefix = enabled ? 'set' : 'remove';
        let meta, item, i, ilen;
        if (mode === 'dataset') {
            meta = this.getDatasetMeta(items[0].datasetIndex);
            meta.controller['_' + prefix + 'DatasetHoverStyle']();
        }
        for(i = 0, ilen = items.length; i < ilen; ++i){
            item = items[i];
            const controller = item && this.getDatasetMeta(item.datasetIndex).controller;
            if (controller) {
                controller[prefix + 'HoverStyle'](item.element, item.datasetIndex, item.index);
            }
        }
    }
 getActiveElements() {
        return this._active || [];
    }
 setActiveElements(activeElements) {
        const lastActive = this._active || [];
        const active = activeElements.map(({ datasetIndex , index  })=>{
            const meta = this.getDatasetMeta(datasetIndex);
            if (!meta) {
                throw new Error('No dataset found at index ' + datasetIndex);
            }
            return {
                datasetIndex,
                element: meta.data[index],
                index
            };
        });
        const changed = !helpers_segment._elementsEqual(active, lastActive);
        if (changed) {
            this._active = active;
            this._lastEvent = null;
            this._updateHoverStyles(active, lastActive);
        }
    }
 notifyPlugins(hook, args, filter) {
        return this._plugins.notify(this, hook, args, filter);
    }
 isPluginEnabled(pluginId) {
        return this._plugins._cache.filter((p)=>p.plugin.id === pluginId).length === 1;
    }
 _updateHoverStyles(active, lastActive, replay) {
        const hoverOptions = this.options.hover;
        const diff = (a, b)=>a.filter((x)=>!b.some((y)=>x.datasetIndex === y.datasetIndex && x.index === y.index));
        const deactivated = diff(lastActive, active);
        const activated = replay ? active : diff(active, lastActive);
        if (deactivated.length) {
            this.updateHoverStyle(deactivated, hoverOptions.mode, false);
        }
        if (activated.length && hoverOptions.mode) {
            this.updateHoverStyle(activated, hoverOptions.mode, true);
        }
    }
 _eventHandler(e, replay) {
        const args = {
            event: e,
            replay,
            cancelable: true,
            inChartArea: this.isPointInArea(e)
        };
        const eventFilter = (plugin)=>(plugin.options.events || this.options.events).includes(e.native.type);
        if (this.notifyPlugins('beforeEvent', args, eventFilter) === false) {
            return;
        }
        const changed = this._handleEvent(e, replay, args.inChartArea);
        args.cancelable = false;
        this.notifyPlugins('afterEvent', args, eventFilter);
        if (changed || args.changed) {
            this.render();
        }
        return this;
    }
 _handleEvent(e, replay, inChartArea) {
        const { _active: lastActive = [] , options  } = this;
        const useFinalPosition = replay;
        const active = this._getActiveElements(e, lastActive, inChartArea, useFinalPosition);
        const isClick = helpers_segment._isClickEvent(e);
        const lastEvent = determineLastEvent(e, this._lastEvent, inChartArea, isClick);
        if (inChartArea) {
            this._lastEvent = null;
            helpers_segment.callback(options.onHover, [
                e,
                active,
                this
            ], this);
            if (isClick) {
                helpers_segment.callback(options.onClick, [
                    e,
                    active,
                    this
                ], this);
            }
        }
        const changed = !helpers_segment._elementsEqual(active, lastActive);
        if (changed || replay) {
            this._active = active;
            this._updateHoverStyles(active, lastActive, replay);
        }
        this._lastEvent = lastEvent;
        return changed;
    }
 _getActiveElements(e, lastActive, inChartArea, useFinalPosition) {
        if (e.type === 'mouseout') {
            return [];
        }
        if (!inChartArea) {
            return lastActive;
        }
        const hoverOptions = this.options.hover;
        return this.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions, useFinalPosition);
    }
}
function invalidatePlugins() {
    return helpers_segment.each(Chart.instances, (chart)=>chart._plugins.invalidate());
}

function clipArc(ctx, element, endAngle) {
    const { startAngle , pixelMargin , x , y , outerRadius , innerRadius  } = element;
    let angleMargin = pixelMargin / outerRadius;
    // Draw an inner border by clipping the arc and drawing a double-width border
    // Enlarge the clipping arc by 0.33 pixels to eliminate glitches between borders
    ctx.beginPath();
    ctx.arc(x, y, outerRadius, startAngle - angleMargin, endAngle + angleMargin);
    if (innerRadius > pixelMargin) {
        angleMargin = pixelMargin / innerRadius;
        ctx.arc(x, y, innerRadius, endAngle + angleMargin, startAngle - angleMargin, true);
    } else {
        ctx.arc(x, y, pixelMargin, endAngle + helpers_segment.HALF_PI, startAngle - helpers_segment.HALF_PI);
    }
    ctx.closePath();
    ctx.clip();
}
function toRadiusCorners(value) {
    return helpers_segment._readValueToProps(value, [
        'outerStart',
        'outerEnd',
        'innerStart',
        'innerEnd'
    ]);
}
/**
 * Parse border radius from the provided options
 */ function parseBorderRadius$1(arc, innerRadius, outerRadius, angleDelta) {
    const o = toRadiusCorners(arc.options.borderRadius);
    const halfThickness = (outerRadius - innerRadius) / 2;
    const innerLimit = Math.min(halfThickness, angleDelta * innerRadius / 2);
    // Outer limits are complicated. We want to compute the available angular distance at
    // a radius of outerRadius - borderRadius because for small angular distances, this term limits.
    // We compute at r = outerRadius - borderRadius because this circle defines the center of the border corners.
    //
    // If the borderRadius is large, that value can become negative.
    // This causes the outer borders to lose their radius entirely, which is rather unexpected. To solve that, if borderRadius > outerRadius
    // we know that the thickness term will dominate and compute the limits at that point
    const computeOuterLimit = (val)=>{
        const outerArcLimit = (outerRadius - Math.min(halfThickness, val)) * angleDelta / 2;
        return helpers_segment._limitValue(val, 0, Math.min(halfThickness, outerArcLimit));
    };
    return {
        outerStart: computeOuterLimit(o.outerStart),
        outerEnd: computeOuterLimit(o.outerEnd),
        innerStart: helpers_segment._limitValue(o.innerStart, 0, innerLimit),
        innerEnd: helpers_segment._limitValue(o.innerEnd, 0, innerLimit)
    };
}
/**
 * Convert (r, 𝜃) to (x, y)
 */ function rThetaToXY(r, theta, x, y) {
    return {
        x: x + r * Math.cos(theta),
        y: y + r * Math.sin(theta)
    };
}
/**
 * Path the arc, respecting border radius by separating into left and right halves.
 *
 *   Start      End
 *
 *    1--->a--->2    Outer
 *   /           \
 *   8           3
 *   |           |
 *   |           |
 *   7           4
 *   \           /
 *    6<---b<---5    Inner
 */ function pathArc(ctx, element, offset, spacing, end, circular) {
    const { x , y , startAngle: start , pixelMargin , innerRadius: innerR  } = element;
    const outerRadius = Math.max(element.outerRadius + spacing + offset - pixelMargin, 0);
    const innerRadius = innerR > 0 ? innerR + spacing + offset + pixelMargin : 0;
    let spacingOffset = 0;
    const alpha = end - start;
    if (spacing) {
        // When spacing is present, it is the same for all items
        // So we adjust the start and end angle of the arc such that
        // the distance is the same as it would be without the spacing
        const noSpacingInnerRadius = innerR > 0 ? innerR - spacing : 0;
        const noSpacingOuterRadius = outerRadius > 0 ? outerRadius - spacing : 0;
        const avNogSpacingRadius = (noSpacingInnerRadius + noSpacingOuterRadius) / 2;
        const adjustedAngle = avNogSpacingRadius !== 0 ? alpha * avNogSpacingRadius / (avNogSpacingRadius + spacing) : alpha;
        spacingOffset = (alpha - adjustedAngle) / 2;
    }
    const beta = Math.max(0.001, alpha * outerRadius - offset / helpers_segment.PI) / outerRadius;
    const angleOffset = (alpha - beta) / 2;
    const startAngle = start + angleOffset + spacingOffset;
    const endAngle = end - angleOffset - spacingOffset;
    const { outerStart , outerEnd , innerStart , innerEnd  } = parseBorderRadius$1(element, innerRadius, outerRadius, endAngle - startAngle);
    const outerStartAdjustedRadius = outerRadius - outerStart;
    const outerEndAdjustedRadius = outerRadius - outerEnd;
    const outerStartAdjustedAngle = startAngle + outerStart / outerStartAdjustedRadius;
    const outerEndAdjustedAngle = endAngle - outerEnd / outerEndAdjustedRadius;
    const innerStartAdjustedRadius = innerRadius + innerStart;
    const innerEndAdjustedRadius = innerRadius + innerEnd;
    const innerStartAdjustedAngle = startAngle + innerStart / innerStartAdjustedRadius;
    const innerEndAdjustedAngle = endAngle - innerEnd / innerEndAdjustedRadius;
    ctx.beginPath();
    if (circular) {
        // The first arc segments from point 1 to point a to point 2
        const outerMidAdjustedAngle = (outerStartAdjustedAngle + outerEndAdjustedAngle) / 2;
        ctx.arc(x, y, outerRadius, outerStartAdjustedAngle, outerMidAdjustedAngle);
        ctx.arc(x, y, outerRadius, outerMidAdjustedAngle, outerEndAdjustedAngle);
        // The corner segment from point 2 to point 3
        if (outerEnd > 0) {
            const pCenter = rThetaToXY(outerEndAdjustedRadius, outerEndAdjustedAngle, x, y);
            ctx.arc(pCenter.x, pCenter.y, outerEnd, outerEndAdjustedAngle, endAngle + helpers_segment.HALF_PI);
        }
        // The line from point 3 to point 4
        const p4 = rThetaToXY(innerEndAdjustedRadius, endAngle, x, y);
        ctx.lineTo(p4.x, p4.y);
        // The corner segment from point 4 to point 5
        if (innerEnd > 0) {
            const pCenter = rThetaToXY(innerEndAdjustedRadius, innerEndAdjustedAngle, x, y);
            ctx.arc(pCenter.x, pCenter.y, innerEnd, endAngle + helpers_segment.HALF_PI, innerEndAdjustedAngle + Math.PI);
        }
        // The inner arc from point 5 to point b to point 6
        const innerMidAdjustedAngle = (endAngle - innerEnd / innerRadius + (startAngle + innerStart / innerRadius)) / 2;
        ctx.arc(x, y, innerRadius, endAngle - innerEnd / innerRadius, innerMidAdjustedAngle, true);
        ctx.arc(x, y, innerRadius, innerMidAdjustedAngle, startAngle + innerStart / innerRadius, true);
        // The corner segment from point 6 to point 7
        if (innerStart > 0) {
            const pCenter = rThetaToXY(innerStartAdjustedRadius, innerStartAdjustedAngle, x, y);
            ctx.arc(pCenter.x, pCenter.y, innerStart, innerStartAdjustedAngle + Math.PI, startAngle - helpers_segment.HALF_PI);
        }
        // The line from point 7 to point 8
        const p8 = rThetaToXY(outerStartAdjustedRadius, startAngle, x, y);
        ctx.lineTo(p8.x, p8.y);
        // The corner segment from point 8 to point 1
        if (outerStart > 0) {
            const pCenter = rThetaToXY(outerStartAdjustedRadius, outerStartAdjustedAngle, x, y);
            ctx.arc(pCenter.x, pCenter.y, outerStart, startAngle - helpers_segment.HALF_PI, outerStartAdjustedAngle);
        }
    } else {
        ctx.moveTo(x, y);
        const outerStartX = Math.cos(outerStartAdjustedAngle) * outerRadius + x;
        const outerStartY = Math.sin(outerStartAdjustedAngle) * outerRadius + y;
        ctx.lineTo(outerStartX, outerStartY);
        const outerEndX = Math.cos(outerEndAdjustedAngle) * outerRadius + x;
        const outerEndY = Math.sin(outerEndAdjustedAngle) * outerRadius + y;
        ctx.lineTo(outerEndX, outerEndY);
    }
    ctx.closePath();
}
function drawArc(ctx, element, offset, spacing, circular) {
    const { fullCircles , startAngle , circumference  } = element;
    let endAngle = element.endAngle;
    if (fullCircles) {
        pathArc(ctx, element, offset, spacing, endAngle, circular);
        for(let i = 0; i < fullCircles; ++i){
            ctx.fill();
        }
        if (!isNaN(circumference)) {
            endAngle = startAngle + (circumference % helpers_segment.TAU || helpers_segment.TAU);
        }
    }
    pathArc(ctx, element, offset, spacing, endAngle, circular);
    ctx.fill();
    return endAngle;
}
function drawBorder(ctx, element, offset, spacing, circular) {
    const { fullCircles , startAngle , circumference , options  } = element;
    const { borderWidth , borderJoinStyle , borderDash , borderDashOffset  } = options;
    const inner = options.borderAlign === 'inner';
    if (!borderWidth) {
        return;
    }
    ctx.setLineDash(borderDash || []);
    ctx.lineDashOffset = borderDashOffset;
    if (inner) {
        ctx.lineWidth = borderWidth * 2;
        ctx.lineJoin = borderJoinStyle || 'round';
    } else {
        ctx.lineWidth = borderWidth;
        ctx.lineJoin = borderJoinStyle || 'bevel';
    }
    let endAngle = element.endAngle;
    if (fullCircles) {
        pathArc(ctx, element, offset, spacing, endAngle, circular);
        for(let i = 0; i < fullCircles; ++i){
            ctx.stroke();
        }
        if (!isNaN(circumference)) {
            endAngle = startAngle + (circumference % helpers_segment.TAU || helpers_segment.TAU);
        }
    }
    if (inner) {
        clipArc(ctx, element, endAngle);
    }
    if (!fullCircles) {
        pathArc(ctx, element, offset, spacing, endAngle, circular);
        ctx.stroke();
    }
}
class ArcElement extends Element {
    static id = 'arc';
    static defaults = {
        borderAlign: 'center',
        borderColor: '#fff',
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: undefined,
        borderRadius: 0,
        borderWidth: 2,
        offset: 0,
        spacing: 0,
        angle: undefined,
        circular: true
    };
    static defaultRoutes = {
        backgroundColor: 'backgroundColor'
    };
    static descriptors = {
        _scriptable: true,
        _indexable: (name)=>name !== 'borderDash'
    };
    circumference;
    endAngle;
    fullCircles;
    innerRadius;
    outerRadius;
    pixelMargin;
    startAngle;
    constructor(cfg){
        super();
        this.options = undefined;
        this.circumference = undefined;
        this.startAngle = undefined;
        this.endAngle = undefined;
        this.innerRadius = undefined;
        this.outerRadius = undefined;
        this.pixelMargin = 0;
        this.fullCircles = 0;
        if (cfg) {
            Object.assign(this, cfg);
        }
    }
    inRange(chartX, chartY, useFinalPosition) {
        const point = this.getProps([
            'x',
            'y'
        ], useFinalPosition);
        const { angle , distance  } = helpers_segment.getAngleFromPoint(point, {
            x: chartX,
            y: chartY
        });
        const { startAngle , endAngle , innerRadius , outerRadius , circumference  } = this.getProps([
            'startAngle',
            'endAngle',
            'innerRadius',
            'outerRadius',
            'circumference'
        ], useFinalPosition);
        const rAdjust = (this.options.spacing + this.options.borderWidth) / 2;
        const _circumference = helpers_segment.valueOrDefault(circumference, endAngle - startAngle);
        const betweenAngles = _circumference >= helpers_segment.TAU || helpers_segment._angleBetween(angle, startAngle, endAngle);
        const withinRadius = helpers_segment._isBetween(distance, innerRadius + rAdjust, outerRadius + rAdjust);
        return betweenAngles && withinRadius;
    }
    getCenterPoint(useFinalPosition) {
        const { x , y , startAngle , endAngle , innerRadius , outerRadius  } = this.getProps([
            'x',
            'y',
            'startAngle',
            'endAngle',
            'innerRadius',
            'outerRadius'
        ], useFinalPosition);
        const { offset , spacing  } = this.options;
        const halfAngle = (startAngle + endAngle) / 2;
        const halfRadius = (innerRadius + outerRadius + spacing + offset) / 2;
        return {
            x: x + Math.cos(halfAngle) * halfRadius,
            y: y + Math.sin(halfAngle) * halfRadius
        };
    }
    tooltipPosition(useFinalPosition) {
        return this.getCenterPoint(useFinalPosition);
    }
    draw(ctx) {
        const { options , circumference  } = this;
        const offset = (options.offset || 0) / 4;
        const spacing = (options.spacing || 0) / 2;
        const circular = options.circular;
        this.pixelMargin = options.borderAlign === 'inner' ? 0.33 : 0;
        this.fullCircles = circumference > helpers_segment.TAU ? Math.floor(circumference / helpers_segment.TAU) : 0;
        if (circumference === 0 || this.innerRadius < 0 || this.outerRadius < 0) {
            return;
        }
        ctx.save();
        const halfAngle = (this.startAngle + this.endAngle) / 2;
        ctx.translate(Math.cos(halfAngle) * offset, Math.sin(halfAngle) * offset);
        const fix = 1 - Math.sin(Math.min(helpers_segment.PI, circumference || 0));
        const radiusOffset = offset * fix;
        ctx.fillStyle = options.backgroundColor;
        ctx.strokeStyle = options.borderColor;
        drawArc(ctx, this, radiusOffset, spacing, circular);
        drawBorder(ctx, this, radiusOffset, spacing, circular);
        ctx.restore();
    }
}

function setStyle(ctx, options, style = options) {
    ctx.lineCap = helpers_segment.valueOrDefault(style.borderCapStyle, options.borderCapStyle);
    ctx.setLineDash(helpers_segment.valueOrDefault(style.borderDash, options.borderDash));
    ctx.lineDashOffset = helpers_segment.valueOrDefault(style.borderDashOffset, options.borderDashOffset);
    ctx.lineJoin = helpers_segment.valueOrDefault(style.borderJoinStyle, options.borderJoinStyle);
    ctx.lineWidth = helpers_segment.valueOrDefault(style.borderWidth, options.borderWidth);
    ctx.strokeStyle = helpers_segment.valueOrDefault(style.borderColor, options.borderColor);
}
function lineTo(ctx, previous, target) {
    ctx.lineTo(target.x, target.y);
}
 function getLineMethod(options) {
    if (options.stepped) {
        return helpers_segment._steppedLineTo;
    }
    if (options.tension || options.cubicInterpolationMode === 'monotone') {
        return helpers_segment._bezierCurveTo;
    }
    return lineTo;
}
function pathVars(points, segment, params = {}) {
    const count = points.length;
    const { start: paramsStart = 0 , end: paramsEnd = count - 1  } = params;
    const { start: segmentStart , end: segmentEnd  } = segment;
    const start = Math.max(paramsStart, segmentStart);
    const end = Math.min(paramsEnd, segmentEnd);
    const outside = paramsStart < segmentStart && paramsEnd < segmentStart || paramsStart > segmentEnd && paramsEnd > segmentEnd;
    return {
        count,
        start,
        loop: segment.loop,
        ilen: end < start && !outside ? count + end - start : end - start
    };
}
 function pathSegment(ctx, line, segment, params) {
    const { points , options  } = line;
    const { count , start , loop , ilen  } = pathVars(points, segment, params);
    const lineMethod = getLineMethod(options);
    let { move =true , reverse  } = params || {};
    let i, point, prev;
    for(i = 0; i <= ilen; ++i){
        point = points[(start + (reverse ? ilen - i : i)) % count];
        if (point.skip) {
            continue;
        } else if (move) {
            ctx.moveTo(point.x, point.y);
            move = false;
        } else {
            lineMethod(ctx, prev, point, reverse, options.stepped);
        }
        prev = point;
    }
    if (loop) {
        point = points[(start + (reverse ? ilen : 0)) % count];
        lineMethod(ctx, prev, point, reverse, options.stepped);
    }
    return !!loop;
}
 function fastPathSegment(ctx, line, segment, params) {
    const points = line.points;
    const { count , start , ilen  } = pathVars(points, segment, params);
    const { move =true , reverse  } = params || {};
    let avgX = 0;
    let countX = 0;
    let i, point, prevX, minY, maxY, lastY;
    const pointIndex = (index)=>(start + (reverse ? ilen - index : index)) % count;
    const drawX = ()=>{
        if (minY !== maxY) {
            ctx.lineTo(avgX, maxY);
            ctx.lineTo(avgX, minY);
            ctx.lineTo(avgX, lastY);
        }
    };
    if (move) {
        point = points[pointIndex(0)];
        ctx.moveTo(point.x, point.y);
    }
    for(i = 0; i <= ilen; ++i){
        point = points[pointIndex(i)];
        if (point.skip) {
            continue;
        }
        const x = point.x;
        const y = point.y;
        const truncX = x | 0;
        if (truncX === prevX) {
            if (y < minY) {
                minY = y;
            } else if (y > maxY) {
                maxY = y;
            }
            avgX = (countX * avgX + x) / ++countX;
        } else {
            drawX();
            ctx.lineTo(x, y);
            prevX = truncX;
            countX = 0;
            minY = maxY = y;
        }
        lastY = y;
    }
    drawX();
}
 function _getSegmentMethod(line) {
    const opts = line.options;
    const borderDash = opts.borderDash && opts.borderDash.length;
    const useFastPath = !line._decimated && !line._loop && !opts.tension && opts.cubicInterpolationMode !== 'monotone' && !opts.stepped && !borderDash;
    return useFastPath ? fastPathSegment : pathSegment;
}
 function _getInterpolationMethod(options) {
    if (options.stepped) {
        return helpers_segment._steppedInterpolation;
    }
    if (options.tension || options.cubicInterpolationMode === 'monotone') {
        return helpers_segment._bezierInterpolation;
    }
    return helpers_segment._pointInLine;
}
function strokePathWithCache(ctx, line, start, count) {
    let path = line._path;
    if (!path) {
        path = line._path = new Path2D();
        if (line.path(path, start, count)) {
            path.closePath();
        }
    }
    setStyle(ctx, line.options);
    ctx.stroke(path);
}
function strokePathDirect(ctx, line, start, count) {
    const { segments , options  } = line;
    const segmentMethod = _getSegmentMethod(line);
    for (const segment of segments){
        setStyle(ctx, options, segment.style);
        ctx.beginPath();
        if (segmentMethod(ctx, line, segment, {
            start,
            end: start + count - 1
        })) {
            ctx.closePath();
        }
        ctx.stroke();
    }
}
const usePath2D = typeof Path2D === 'function';
function draw(ctx, line, start, count) {
    if (usePath2D && !line.options.segment) {
        strokePathWithCache(ctx, line, start, count);
    } else {
        strokePathDirect(ctx, line, start, count);
    }
}
class LineElement extends Element {
    static id = 'line';
 static defaults = {
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: 'miter',
        borderWidth: 3,
        capBezierPoints: true,
        cubicInterpolationMode: 'default',
        fill: false,
        spanGaps: false,
        stepped: false,
        tension: 0
    };
 static defaultRoutes = {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
    };
    static descriptors = {
        _scriptable: true,
        _indexable: (name)=>name !== 'borderDash' && name !== 'fill'
    };
    constructor(cfg){
        super();
        this.animated = true;
        this.options = undefined;
        this._chart = undefined;
        this._loop = undefined;
        this._fullLoop = undefined;
        this._path = undefined;
        this._points = undefined;
        this._segments = undefined;
        this._decimated = false;
        this._pointsUpdated = false;
        this._datasetIndex = undefined;
        if (cfg) {
            Object.assign(this, cfg);
        }
    }
    updateControlPoints(chartArea, indexAxis) {
        const options = this.options;
        if ((options.tension || options.cubicInterpolationMode === 'monotone') && !options.stepped && !this._pointsUpdated) {
            const loop = options.spanGaps ? this._loop : this._fullLoop;
            helpers_segment._updateBezierControlPoints(this._points, options, chartArea, loop, indexAxis);
            this._pointsUpdated = true;
        }
    }
    set points(points) {
        this._points = points;
        delete this._segments;
        delete this._path;
        this._pointsUpdated = false;
    }
    get points() {
        return this._points;
    }
    get segments() {
        return this._segments || (this._segments = helpers_segment._computeSegments(this, this.options.segment));
    }
 first() {
        const segments = this.segments;
        const points = this.points;
        return segments.length && points[segments[0].start];
    }
 last() {
        const segments = this.segments;
        const points = this.points;
        const count = segments.length;
        return count && points[segments[count - 1].end];
    }
 interpolate(point, property) {
        const options = this.options;
        const value = point[property];
        const points = this.points;
        const segments = helpers_segment._boundSegments(this, {
            property,
            start: value,
            end: value
        });
        if (!segments.length) {
            return;
        }
        const result = [];
        const _interpolate = _getInterpolationMethod(options);
        let i, ilen;
        for(i = 0, ilen = segments.length; i < ilen; ++i){
            const { start , end  } = segments[i];
            const p1 = points[start];
            const p2 = points[end];
            if (p1 === p2) {
                result.push(p1);
                continue;
            }
            const t = Math.abs((value - p1[property]) / (p2[property] - p1[property]));
            const interpolated = _interpolate(p1, p2, t, options.stepped);
            interpolated[property] = point[property];
            result.push(interpolated);
        }
        return result.length === 1 ? result[0] : result;
    }
 pathSegment(ctx, segment, params) {
        const segmentMethod = _getSegmentMethod(this);
        return segmentMethod(ctx, this, segment, params);
    }
 path(ctx, start, count) {
        const segments = this.segments;
        const segmentMethod = _getSegmentMethod(this);
        let loop = this._loop;
        start = start || 0;
        count = count || this.points.length - start;
        for (const segment of segments){
            loop &= segmentMethod(ctx, this, segment, {
                start,
                end: start + count - 1
            });
        }
        return !!loop;
    }
 draw(ctx, chartArea, start, count) {
        const options = this.options || {};
        const points = this.points || [];
        if (points.length && options.borderWidth) {
            ctx.save();
            draw(ctx, this, start, count);
            ctx.restore();
        }
        if (this.animated) {
            this._pointsUpdated = false;
            this._path = undefined;
        }
    }
}

function inRange$1(el, pos, axis, useFinalPosition) {
    const options = el.options;
    const { [axis]: value  } = el.getProps([
        axis
    ], useFinalPosition);
    return Math.abs(pos - value) < options.radius + options.hitRadius;
}
class PointElement extends Element {
    static id = 'point';
    parsed;
    skip;
    stop;
    /**
   * @type {any}
   */ static defaults = {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: 'circle',
        radius: 3,
        rotation: 0
    };
    /**
   * @type {any}
   */ static defaultRoutes = {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
    };
    constructor(cfg){
        super();
        this.options = undefined;
        this.parsed = undefined;
        this.skip = undefined;
        this.stop = undefined;
        if (cfg) {
            Object.assign(this, cfg);
        }
    }
    inRange(mouseX, mouseY, useFinalPosition) {
        const options = this.options;
        const { x , y  } = this.getProps([
            'x',
            'y'
        ], useFinalPosition);
        return Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2) < Math.pow(options.hitRadius + options.radius, 2);
    }
    inXRange(mouseX, useFinalPosition) {
        return inRange$1(this, mouseX, 'x', useFinalPosition);
    }
    inYRange(mouseY, useFinalPosition) {
        return inRange$1(this, mouseY, 'y', useFinalPosition);
    }
    getCenterPoint(useFinalPosition) {
        const { x , y  } = this.getProps([
            'x',
            'y'
        ], useFinalPosition);
        return {
            x,
            y
        };
    }
    size(options) {
        options = options || this.options || {};
        let radius = options.radius || 0;
        radius = Math.max(radius, radius && options.hoverRadius || 0);
        const borderWidth = radius && options.borderWidth || 0;
        return (radius + borderWidth) * 2;
    }
    draw(ctx, area) {
        const options = this.options;
        if (this.skip || options.radius < 0.1 || !helpers_segment._isPointInArea(this, area, this.size(options) / 2)) {
            return;
        }
        ctx.strokeStyle = options.borderColor;
        ctx.lineWidth = options.borderWidth;
        ctx.fillStyle = options.backgroundColor;
        helpers_segment.drawPoint(ctx, options, this.x, this.y);
    }
    getRange() {
        const options = this.options || {};
        // @ts-expect-error Fallbacks should never be hit in practice
        return options.radius + options.hitRadius;
    }
}

function getBarBounds(bar, useFinalPosition) {
    const { x , y , base , width , height  } =  bar.getProps([
        'x',
        'y',
        'base',
        'width',
        'height'
    ], useFinalPosition);
    let left, right, top, bottom, half;
    if (bar.horizontal) {
        half = height / 2;
        left = Math.min(x, base);
        right = Math.max(x, base);
        top = y - half;
        bottom = y + half;
    } else {
        half = width / 2;
        left = x - half;
        right = x + half;
        top = Math.min(y, base);
        bottom = Math.max(y, base);
    }
    return {
        left,
        top,
        right,
        bottom
    };
}
function skipOrLimit(skip, value, min, max) {
    return skip ? 0 : helpers_segment._limitValue(value, min, max);
}
function parseBorderWidth(bar, maxW, maxH) {
    const value = bar.options.borderWidth;
    const skip = bar.borderSkipped;
    const o = helpers_segment.toTRBL(value);
    return {
        t: skipOrLimit(skip.top, o.top, 0, maxH),
        r: skipOrLimit(skip.right, o.right, 0, maxW),
        b: skipOrLimit(skip.bottom, o.bottom, 0, maxH),
        l: skipOrLimit(skip.left, o.left, 0, maxW)
    };
}
function parseBorderRadius(bar, maxW, maxH) {
    const { enableBorderRadius  } = bar.getProps([
        'enableBorderRadius'
    ]);
    const value = bar.options.borderRadius;
    const o = helpers_segment.toTRBLCorners(value);
    const maxR = Math.min(maxW, maxH);
    const skip = bar.borderSkipped;
    const enableBorder = enableBorderRadius || helpers_segment.isObject(value);
    return {
        topLeft: skipOrLimit(!enableBorder || skip.top || skip.left, o.topLeft, 0, maxR),
        topRight: skipOrLimit(!enableBorder || skip.top || skip.right, o.topRight, 0, maxR),
        bottomLeft: skipOrLimit(!enableBorder || skip.bottom || skip.left, o.bottomLeft, 0, maxR),
        bottomRight: skipOrLimit(!enableBorder || skip.bottom || skip.right, o.bottomRight, 0, maxR)
    };
}
function boundingRects(bar) {
    const bounds = getBarBounds(bar);
    const width = bounds.right - bounds.left;
    const height = bounds.bottom - bounds.top;
    const border = parseBorderWidth(bar, width / 2, height / 2);
    const radius = parseBorderRadius(bar, width / 2, height / 2);
    return {
        outer: {
            x: bounds.left,
            y: bounds.top,
            w: width,
            h: height,
            radius
        },
        inner: {
            x: bounds.left + border.l,
            y: bounds.top + border.t,
            w: width - border.l - border.r,
            h: height - border.t - border.b,
            radius: {
                topLeft: Math.max(0, radius.topLeft - Math.max(border.t, border.l)),
                topRight: Math.max(0, radius.topRight - Math.max(border.t, border.r)),
                bottomLeft: Math.max(0, radius.bottomLeft - Math.max(border.b, border.l)),
                bottomRight: Math.max(0, radius.bottomRight - Math.max(border.b, border.r))
            }
        }
    };
}
function inRange(bar, x, y, useFinalPosition) {
    const skipX = x === null;
    const skipY = y === null;
    const skipBoth = skipX && skipY;
    const bounds = bar && !skipBoth && getBarBounds(bar, useFinalPosition);
    return bounds && (skipX || helpers_segment._isBetween(x, bounds.left, bounds.right)) && (skipY || helpers_segment._isBetween(y, bounds.top, bounds.bottom));
}
function hasRadius(radius) {
    return radius.topLeft || radius.topRight || radius.bottomLeft || radius.bottomRight;
}
 function addNormalRectPath(ctx, rect) {
    ctx.rect(rect.x, rect.y, rect.w, rect.h);
}
function inflateRect(rect, amount, refRect = {}) {
    const x = rect.x !== refRect.x ? -amount : 0;
    const y = rect.y !== refRect.y ? -amount : 0;
    const w = (rect.x + rect.w !== refRect.x + refRect.w ? amount : 0) - x;
    const h = (rect.y + rect.h !== refRect.y + refRect.h ? amount : 0) - y;
    return {
        x: rect.x + x,
        y: rect.y + y,
        w: rect.w + w,
        h: rect.h + h,
        radius: rect.radius
    };
}
class BarElement extends Element {
    static id = 'bar';
 static defaults = {
        borderSkipped: 'start',
        borderWidth: 0,
        borderRadius: 0,
        inflateAmount: 'auto',
        pointStyle: undefined
    };
 static defaultRoutes = {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
    };
    constructor(cfg){
        super();
        this.options = undefined;
        this.horizontal = undefined;
        this.base = undefined;
        this.width = undefined;
        this.height = undefined;
        this.inflateAmount = undefined;
        if (cfg) {
            Object.assign(this, cfg);
        }
    }
    draw(ctx) {
        const { inflateAmount , options: { borderColor , backgroundColor  }  } = this;
        const { inner , outer  } = boundingRects(this);
        const addRectPath = hasRadius(outer.radius) ? helpers_segment.addRoundedRectPath : addNormalRectPath;
        ctx.save();
        if (outer.w !== inner.w || outer.h !== inner.h) {
            ctx.beginPath();
            addRectPath(ctx, inflateRect(outer, inflateAmount, inner));
            ctx.clip();
            addRectPath(ctx, inflateRect(inner, -inflateAmount, outer));
            ctx.fillStyle = borderColor;
            ctx.fill('evenodd');
        }
        ctx.beginPath();
        addRectPath(ctx, inflateRect(inner, inflateAmount));
        ctx.fillStyle = backgroundColor;
        ctx.fill();
        ctx.restore();
    }
    inRange(mouseX, mouseY, useFinalPosition) {
        return inRange(this, mouseX, mouseY, useFinalPosition);
    }
    inXRange(mouseX, useFinalPosition) {
        return inRange(this, mouseX, null, useFinalPosition);
    }
    inYRange(mouseY, useFinalPosition) {
        return inRange(this, null, mouseY, useFinalPosition);
    }
    getCenterPoint(useFinalPosition) {
        const { x , y , base , horizontal  } =  this.getProps([
            'x',
            'y',
            'base',
            'horizontal'
        ], useFinalPosition);
        return {
            x: horizontal ? (x + base) / 2 : x,
            y: horizontal ? y : (y + base) / 2
        };
    }
    getRange(axis) {
        return axis === 'x' ? this.width / 2 : this.height / 2;
    }
}

var elements = /*#__PURE__*/Object.freeze({
__proto__: null,
ArcElement: ArcElement,
BarElement: BarElement,
LineElement: LineElement,
PointElement: PointElement
});

const BORDER_COLORS = [
    'rgb(54, 162, 235)',
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)' // grey
];
// Border colors with 50% transparency
const BACKGROUND_COLORS = /* #__PURE__ */ BORDER_COLORS.map((color)=>color.replace('rgb(', 'rgba(').replace(')', ', 0.5)'));
function getBorderColor(i) {
    return BORDER_COLORS[i % BORDER_COLORS.length];
}
function getBackgroundColor(i) {
    return BACKGROUND_COLORS[i % BACKGROUND_COLORS.length];
}
function colorizeDefaultDataset(dataset, i) {
    dataset.borderColor = getBorderColor(i);
    dataset.backgroundColor = getBackgroundColor(i);
    return ++i;
}
function colorizeDoughnutDataset(dataset, i) {
    dataset.backgroundColor = dataset.data.map(()=>getBorderColor(i++));
    return i;
}
function colorizePolarAreaDataset(dataset, i) {
    dataset.backgroundColor = dataset.data.map(()=>getBackgroundColor(i++));
    return i;
}
function getColorizer(chart) {
    let i = 0;
    return (dataset, datasetIndex)=>{
        const controller = chart.getDatasetMeta(datasetIndex).controller;
        if (controller instanceof DoughnutController) {
            i = colorizeDoughnutDataset(dataset, i);
        } else if (controller instanceof PolarAreaController) {
            i = colorizePolarAreaDataset(dataset, i);
        } else if (controller) {
            i = colorizeDefaultDataset(dataset, i);
        }
    };
}
function containsColorsDefinitions(descriptors) {
    let k;
    for(k in descriptors){
        if (descriptors[k].borderColor || descriptors[k].backgroundColor) {
            return true;
        }
    }
    return false;
}
function containsColorsDefinition(descriptor) {
    return descriptor && (descriptor.borderColor || descriptor.backgroundColor);
}
var plugin_colors = {
    id: 'colors',
    defaults: {
        enabled: true,
        forceOverride: false
    },
    beforeLayout (chart, _args, options) {
        if (!options.enabled) {
            return;
        }
        const { data: { datasets  } , options: chartOptions  } = chart.config;
        const { elements  } = chartOptions;
        if (!options.forceOverride && (containsColorsDefinitions(datasets) || containsColorsDefinition(chartOptions) || elements && containsColorsDefinitions(elements))) {
            return;
        }
        const colorizer = getColorizer(chart);
        datasets.forEach(colorizer);
    }
};

function lttbDecimation(data, start, count, availableWidth, options) {
 const samples = options.samples || availableWidth;
    if (samples >= count) {
        return data.slice(start, start + count);
    }
    const decimated = [];
    const bucketWidth = (count - 2) / (samples - 2);
    let sampledIndex = 0;
    const endIndex = start + count - 1;
    let a = start;
    let i, maxAreaPoint, maxArea, area, nextA;
    decimated[sampledIndex++] = data[a];
    for(i = 0; i < samples - 2; i++){
        let avgX = 0;
        let avgY = 0;
        let j;
        const avgRangeStart = Math.floor((i + 1) * bucketWidth) + 1 + start;
        const avgRangeEnd = Math.min(Math.floor((i + 2) * bucketWidth) + 1, count) + start;
        const avgRangeLength = avgRangeEnd - avgRangeStart;
        for(j = avgRangeStart; j < avgRangeEnd; j++){
            avgX += data[j].x;
            avgY += data[j].y;
        }
        avgX /= avgRangeLength;
        avgY /= avgRangeLength;
        const rangeOffs = Math.floor(i * bucketWidth) + 1 + start;
        const rangeTo = Math.min(Math.floor((i + 1) * bucketWidth) + 1, count) + start;
        const { x: pointAx , y: pointAy  } = data[a];
        maxArea = area = -1;
        for(j = rangeOffs; j < rangeTo; j++){
            area = 0.5 * Math.abs((pointAx - avgX) * (data[j].y - pointAy) - (pointAx - data[j].x) * (avgY - pointAy));
            if (area > maxArea) {
                maxArea = area;
                maxAreaPoint = data[j];
                nextA = j;
            }
        }
        decimated[sampledIndex++] = maxAreaPoint;
        a = nextA;
    }
    decimated[sampledIndex++] = data[endIndex];
    return decimated;
}
function minMaxDecimation(data, start, count, availableWidth) {
    let avgX = 0;
    let countX = 0;
    let i, point, x, y, prevX, minIndex, maxIndex, startIndex, minY, maxY;
    const decimated = [];
    const endIndex = start + count - 1;
    const xMin = data[start].x;
    const xMax = data[endIndex].x;
    const dx = xMax - xMin;
    for(i = start; i < start + count; ++i){
        point = data[i];
        x = (point.x - xMin) / dx * availableWidth;
        y = point.y;
        const truncX = x | 0;
        if (truncX === prevX) {
            if (y < minY) {
                minY = y;
                minIndex = i;
            } else if (y > maxY) {
                maxY = y;
                maxIndex = i;
            }
            avgX = (countX * avgX + point.x) / ++countX;
        } else {
            const lastIndex = i - 1;
            if (!helpers_segment.isNullOrUndef(minIndex) && !helpers_segment.isNullOrUndef(maxIndex)) {
                const intermediateIndex1 = Math.min(minIndex, maxIndex);
                const intermediateIndex2 = Math.max(minIndex, maxIndex);
                if (intermediateIndex1 !== startIndex && intermediateIndex1 !== lastIndex) {
                    decimated.push({
                        ...data[intermediateIndex1],
                        x: avgX
                    });
                }
                if (intermediateIndex2 !== startIndex && intermediateIndex2 !== lastIndex) {
                    decimated.push({
                        ...data[intermediateIndex2],
                        x: avgX
                    });
                }
            }
            if (i > 0 && lastIndex !== startIndex) {
                decimated.push(data[lastIndex]);
            }
            decimated.push(point);
            prevX = truncX;
            countX = 0;
            minY = maxY = y;
            minIndex = maxIndex = startIndex = i;
        }
    }
    return decimated;
}
function cleanDecimatedDataset(dataset) {
    if (dataset._decimated) {
        const data = dataset._data;
        delete dataset._decimated;
        delete dataset._data;
        Object.defineProperty(dataset, 'data', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: data
        });
    }
}
function cleanDecimatedData(chart) {
    chart.data.datasets.forEach((dataset)=>{
        cleanDecimatedDataset(dataset);
    });
}
function getStartAndCountOfVisiblePointsSimplified(meta, points) {
    const pointCount = points.length;
    let start = 0;
    let count;
    const { iScale  } = meta;
    const { min , max , minDefined , maxDefined  } = iScale.getUserBounds();
    if (minDefined) {
        start = helpers_segment._limitValue(helpers_segment._lookupByKey(points, iScale.axis, min).lo, 0, pointCount - 1);
    }
    if (maxDefined) {
        count = helpers_segment._limitValue(helpers_segment._lookupByKey(points, iScale.axis, max).hi + 1, start, pointCount) - start;
    } else {
        count = pointCount - start;
    }
    return {
        start,
        count
    };
}
var plugin_decimation = {
    id: 'decimation',
    defaults: {
        algorithm: 'min-max',
        enabled: false
    },
    beforeElementsUpdate: (chart, args, options)=>{
        if (!options.enabled) {
            cleanDecimatedData(chart);
            return;
        }
        const availableWidth = chart.width;
        chart.data.datasets.forEach((dataset, datasetIndex)=>{
            const { _data , indexAxis  } = dataset;
            const meta = chart.getDatasetMeta(datasetIndex);
            const data = _data || dataset.data;
            if (helpers_segment.resolve([
                indexAxis,
                chart.options.indexAxis
            ]) === 'y') {
                return;
            }
            if (!meta.controller.supportsDecimation) {
                return;
            }
            const xAxis = chart.scales[meta.xAxisID];
            if (xAxis.type !== 'linear' && xAxis.type !== 'time') {
                return;
            }
            if (chart.options.parsing) {
                return;
            }
            let { start , count  } = getStartAndCountOfVisiblePointsSimplified(meta, data);
            const threshold = options.threshold || 4 * availableWidth;
            if (count <= threshold) {
                cleanDecimatedDataset(dataset);
                return;
            }
            if (helpers_segment.isNullOrUndef(_data)) {
                dataset._data = data;
                delete dataset.data;
                Object.defineProperty(dataset, 'data', {
                    configurable: true,
                    enumerable: true,
                    get: function() {
                        return this._decimated;
                    },
                    set: function(d) {
                        this._data = d;
                    }
                });
            }
            let decimated;
            switch(options.algorithm){
                case 'lttb':
                    decimated = lttbDecimation(data, start, count, availableWidth, options);
                    break;
                case 'min-max':
                    decimated = minMaxDecimation(data, start, count, availableWidth);
                    break;
                default:
                    throw new Error(`Unsupported decimation algorithm '${options.algorithm}'`);
            }
            dataset._decimated = decimated;
        });
    },
    destroy (chart) {
        cleanDecimatedData(chart);
    }
};

function _segments(line, target, property) {
    const segments = line.segments;
    const points = line.points;
    const tpoints = target.points;
    const parts = [];
    for (const segment of segments){
        let { start , end  } = segment;
        end = _findSegmentEnd(start, end, points);
        const bounds = _getBounds(property, points[start], points[end], segment.loop);
        if (!target.segments) {
            parts.push({
                source: segment,
                target: bounds,
                start: points[start],
                end: points[end]
            });
            continue;
        }
        const targetSegments = helpers_segment._boundSegments(target, bounds);
        for (const tgt of targetSegments){
            const subBounds = _getBounds(property, tpoints[tgt.start], tpoints[tgt.end], tgt.loop);
            const fillSources = helpers_segment._boundSegment(segment, points, subBounds);
            for (const fillSource of fillSources){
                parts.push({
                    source: fillSource,
                    target: tgt,
                    start: {
                        [property]: _getEdge(bounds, subBounds, 'start', Math.max)
                    },
                    end: {
                        [property]: _getEdge(bounds, subBounds, 'end', Math.min)
                    }
                });
            }
        }
    }
    return parts;
}
function _getBounds(property, first, last, loop) {
    if (loop) {
        return;
    }
    let start = first[property];
    let end = last[property];
    if (property === 'angle') {
        start = helpers_segment._normalizeAngle(start);
        end = helpers_segment._normalizeAngle(end);
    }
    return {
        property,
        start,
        end
    };
}
function _pointsFromSegments(boundary, line) {
    const { x =null , y =null  } = boundary || {};
    const linePoints = line.points;
    const points = [];
    line.segments.forEach(({ start , end  })=>{
        end = _findSegmentEnd(start, end, linePoints);
        const first = linePoints[start];
        const last = linePoints[end];
        if (y !== null) {
            points.push({
                x: first.x,
                y
            });
            points.push({
                x: last.x,
                y
            });
        } else if (x !== null) {
            points.push({
                x,
                y: first.y
            });
            points.push({
                x,
                y: last.y
            });
        }
    });
    return points;
}
function _findSegmentEnd(start, end, points) {
    for(; end > start; end--){
        const point = points[end];
        if (!isNaN(point.x) && !isNaN(point.y)) {
            break;
        }
    }
    return end;
}
function _getEdge(a, b, prop, fn) {
    if (a && b) {
        return fn(a[prop], b[prop]);
    }
    return a ? a[prop] : b ? b[prop] : 0;
}

function _createBoundaryLine(boundary, line) {
    let points = [];
    let _loop = false;
    if (helpers_segment.isArray(boundary)) {
        _loop = true;
        points = boundary;
    } else {
        points = _pointsFromSegments(boundary, line);
    }
    return points.length ? new LineElement({
        points,
        options: {
            tension: 0
        },
        _loop,
        _fullLoop: _loop
    }) : null;
}
function _shouldApplyFill(source) {
    return source && source.fill !== false;
}

function _resolveTarget(sources, index, propagate) {
    const source = sources[index];
    let fill = source.fill;
    const visited = [
        index
    ];
    let target;
    if (!propagate) {
        return fill;
    }
    while(fill !== false && visited.indexOf(fill) === -1){
        if (!helpers_segment.isNumberFinite(fill)) {
            return fill;
        }
        target = sources[fill];
        if (!target) {
            return false;
        }
        if (target.visible) {
            return fill;
        }
        visited.push(fill);
        fill = target.fill;
    }
    return false;
}
 function _decodeFill(line, index, count) {
     const fill = parseFillOption(line);
    if (helpers_segment.isObject(fill)) {
        return isNaN(fill.value) ? false : fill;
    }
    let target = parseFloat(fill);
    if (helpers_segment.isNumberFinite(target) && Math.floor(target) === target) {
        return decodeTargetIndex(fill[0], index, target, count);
    }
    return [
        'origin',
        'start',
        'end',
        'stack',
        'shape'
    ].indexOf(fill) >= 0 && fill;
}
function decodeTargetIndex(firstCh, index, target, count) {
    if (firstCh === '-' || firstCh === '+') {
        target = index + target;
    }
    if (target === index || target < 0 || target >= count) {
        return false;
    }
    return target;
}
 function _getTargetPixel(fill, scale) {
    let pixel = null;
    if (fill === 'start') {
        pixel = scale.bottom;
    } else if (fill === 'end') {
        pixel = scale.top;
    } else if (helpers_segment.isObject(fill)) {
        pixel = scale.getPixelForValue(fill.value);
    } else if (scale.getBasePixel) {
        pixel = scale.getBasePixel();
    }
    return pixel;
}
 function _getTargetValue(fill, scale, startValue) {
    let value;
    if (fill === 'start') {
        value = startValue;
    } else if (fill === 'end') {
        value = scale.options.reverse ? scale.min : scale.max;
    } else if (helpers_segment.isObject(fill)) {
        value = fill.value;
    } else {
        value = scale.getBaseValue();
    }
    return value;
}
 function parseFillOption(line) {
    const options = line.options;
    const fillOption = options.fill;
    let fill = helpers_segment.valueOrDefault(fillOption && fillOption.target, fillOption);
    if (fill === undefined) {
        fill = !!options.backgroundColor;
    }
    if (fill === false || fill === null) {
        return false;
    }
    if (fill === true) {
        return 'origin';
    }
    return fill;
}

function _buildStackLine(source) {
    const { scale , index , line  } = source;
    const points = [];
    const segments = line.segments;
    const sourcePoints = line.points;
    const linesBelow = getLinesBelow(scale, index);
    linesBelow.push(_createBoundaryLine({
        x: null,
        y: scale.bottom
    }, line));
    for(let i = 0; i < segments.length; i++){
        const segment = segments[i];
        for(let j = segment.start; j <= segment.end; j++){
            addPointsBelow(points, sourcePoints[j], linesBelow);
        }
    }
    return new LineElement({
        points,
        options: {}
    });
}
 function getLinesBelow(scale, index) {
    const below = [];
    const metas = scale.getMatchingVisibleMetas('line');
    for(let i = 0; i < metas.length; i++){
        const meta = metas[i];
        if (meta.index === index) {
            break;
        }
        if (!meta.hidden) {
            below.unshift(meta.dataset);
        }
    }
    return below;
}
 function addPointsBelow(points, sourcePoint, linesBelow) {
    const postponed = [];
    for(let j = 0; j < linesBelow.length; j++){
        const line = linesBelow[j];
        const { first , last , point  } = findPoint(line, sourcePoint, 'x');
        if (!point || first && last) {
            continue;
        }
        if (first) {
            postponed.unshift(point);
        } else {
            points.push(point);
            if (!last) {
                break;
            }
        }
    }
    points.push(...postponed);
}
 function findPoint(line, sourcePoint, property) {
    const point = line.interpolate(sourcePoint, property);
    if (!point) {
        return {};
    }
    const pointValue = point[property];
    const segments = line.segments;
    const linePoints = line.points;
    let first = false;
    let last = false;
    for(let i = 0; i < segments.length; i++){
        const segment = segments[i];
        const firstValue = linePoints[segment.start][property];
        const lastValue = linePoints[segment.end][property];
        if (helpers_segment._isBetween(pointValue, firstValue, lastValue)) {
            first = pointValue === firstValue;
            last = pointValue === lastValue;
            break;
        }
    }
    return {
        first,
        last,
        point
    };
}

class simpleArc {
    constructor(opts){
        this.x = opts.x;
        this.y = opts.y;
        this.radius = opts.radius;
    }
    pathSegment(ctx, bounds, opts) {
        const { x , y , radius  } = this;
        bounds = bounds || {
            start: 0,
            end: helpers_segment.TAU
        };
        ctx.arc(x, y, radius, bounds.end, bounds.start, true);
        return !opts.bounds;
    }
    interpolate(point) {
        const { x , y , radius  } = this;
        const angle = point.angle;
        return {
            x: x + Math.cos(angle) * radius,
            y: y + Math.sin(angle) * radius,
            angle
        };
    }
}

function _getTarget(source) {
    const { chart , fill , line  } = source;
    if (helpers_segment.isNumberFinite(fill)) {
        return getLineByIndex(chart, fill);
    }
    if (fill === 'stack') {
        return _buildStackLine(source);
    }
    if (fill === 'shape') {
        return true;
    }
    const boundary = computeBoundary(source);
    if (boundary instanceof simpleArc) {
        return boundary;
    }
    return _createBoundaryLine(boundary, line);
}
 function getLineByIndex(chart, index) {
    const meta = chart.getDatasetMeta(index);
    const visible = meta && chart.isDatasetVisible(index);
    return visible ? meta.dataset : null;
}
function computeBoundary(source) {
    const scale = source.scale || {};
    if (scale.getPointPositionForValue) {
        return computeCircularBoundary(source);
    }
    return computeLinearBoundary(source);
}
function computeLinearBoundary(source) {
    const { scale ={} , fill  } = source;
    const pixel = _getTargetPixel(fill, scale);
    if (helpers_segment.isNumberFinite(pixel)) {
        const horizontal = scale.isHorizontal();
        return {
            x: horizontal ? pixel : null,
            y: horizontal ? null : pixel
        };
    }
    return null;
}
function computeCircularBoundary(source) {
    const { scale , fill  } = source;
    const options = scale.options;
    const length = scale.getLabels().length;
    const start = options.reverse ? scale.max : scale.min;
    const value = _getTargetValue(fill, scale, start);
    const target = [];
    if (options.grid.circular) {
        const center = scale.getPointPositionForValue(0, start);
        return new simpleArc({
            x: center.x,
            y: center.y,
            radius: scale.getDistanceFromCenterForValue(value)
        });
    }
    for(let i = 0; i < length; ++i){
        target.push(scale.getPointPositionForValue(i, value));
    }
    return target;
}

function _drawfill(ctx, source, area) {
    const target = _getTarget(source);
    const { line , scale , axis  } = source;
    const lineOpts = line.options;
    const fillOption = lineOpts.fill;
    const color = lineOpts.backgroundColor;
    const { above =color , below =color  } = fillOption || {};
    if (target && line.points.length) {
        helpers_segment.clipArea(ctx, area);
        doFill(ctx, {
            line,
            target,
            above,
            below,
            area,
            scale,
            axis
        });
        helpers_segment.unclipArea(ctx);
    }
}
function doFill(ctx, cfg) {
    const { line , target , above , below , area , scale  } = cfg;
    const property = line._loop ? 'angle' : cfg.axis;
    ctx.save();
    if (property === 'x' && below !== above) {
        clipVertical(ctx, target, area.top);
        fill(ctx, {
            line,
            target,
            color: above,
            scale,
            property
        });
        ctx.restore();
        ctx.save();
        clipVertical(ctx, target, area.bottom);
    }
    fill(ctx, {
        line,
        target,
        color: below,
        scale,
        property
    });
    ctx.restore();
}
function clipVertical(ctx, target, clipY) {
    const { segments , points  } = target;
    let first = true;
    let lineLoop = false;
    ctx.beginPath();
    for (const segment of segments){
        const { start , end  } = segment;
        const firstPoint = points[start];
        const lastPoint = points[_findSegmentEnd(start, end, points)];
        if (first) {
            ctx.moveTo(firstPoint.x, firstPoint.y);
            first = false;
        } else {
            ctx.lineTo(firstPoint.x, clipY);
            ctx.lineTo(firstPoint.x, firstPoint.y);
        }
        lineLoop = !!target.pathSegment(ctx, segment, {
            move: lineLoop
        });
        if (lineLoop) {
            ctx.closePath();
        } else {
            ctx.lineTo(lastPoint.x, clipY);
        }
    }
    ctx.lineTo(target.first().x, clipY);
    ctx.closePath();
    ctx.clip();
}
function fill(ctx, cfg) {
    const { line , target , property , color , scale  } = cfg;
    const segments = _segments(line, target, property);
    for (const { source: src , target: tgt , start , end  } of segments){
        const { style: { backgroundColor =color  } = {}  } = src;
        const notShape = target !== true;
        ctx.save();
        ctx.fillStyle = backgroundColor;
        clipBounds(ctx, scale, notShape && _getBounds(property, start, end));
        ctx.beginPath();
        const lineLoop = !!line.pathSegment(ctx, src);
        let loop;
        if (notShape) {
            if (lineLoop) {
                ctx.closePath();
            } else {
                interpolatedLineTo(ctx, target, end, property);
            }
            const targetLoop = !!target.pathSegment(ctx, tgt, {
                move: lineLoop,
                reverse: true
            });
            loop = lineLoop && targetLoop;
            if (!loop) {
                interpolatedLineTo(ctx, target, start, property);
            }
        }
        ctx.closePath();
        ctx.fill(loop ? 'evenodd' : 'nonzero');
        ctx.restore();
    }
}
function clipBounds(ctx, scale, bounds) {
    const { top , bottom  } = scale.chart.chartArea;
    const { property , start , end  } = bounds || {};
    if (property === 'x') {
        ctx.beginPath();
        ctx.rect(start, top, end - start, bottom - top);
        ctx.clip();
    }
}
function interpolatedLineTo(ctx, target, point, property) {
    const interpolatedPoint = target.interpolate(point, property);
    if (interpolatedPoint) {
        ctx.lineTo(interpolatedPoint.x, interpolatedPoint.y);
    }
}

var index = {
    id: 'filler',
    afterDatasetsUpdate (chart, _args, options) {
        const count = (chart.data.datasets || []).length;
        const sources = [];
        let meta, i, line, source;
        for(i = 0; i < count; ++i){
            meta = chart.getDatasetMeta(i);
            line = meta.dataset;
            source = null;
            if (line && line.options && line instanceof LineElement) {
                source = {
                    visible: chart.isDatasetVisible(i),
                    index: i,
                    fill: _decodeFill(line, i, count),
                    chart,
                    axis: meta.controller.options.indexAxis,
                    scale: meta.vScale,
                    line
                };
            }
            meta.$filler = source;
            sources.push(source);
        }
        for(i = 0; i < count; ++i){
            source = sources[i];
            if (!source || source.fill === false) {
                continue;
            }
            source.fill = _resolveTarget(sources, i, options.propagate);
        }
    },
    beforeDraw (chart, _args, options) {
        const draw = options.drawTime === 'beforeDraw';
        const metasets = chart.getSortedVisibleDatasetMetas();
        const area = chart.chartArea;
        for(let i = metasets.length - 1; i >= 0; --i){
            const source = metasets[i].$filler;
            if (!source) {
                continue;
            }
            source.line.updateControlPoints(area, source.axis);
            if (draw && source.fill) {
                _drawfill(chart.ctx, source, area);
            }
        }
    },
    beforeDatasetsDraw (chart, _args, options) {
        if (options.drawTime !== 'beforeDatasetsDraw') {
            return;
        }
        const metasets = chart.getSortedVisibleDatasetMetas();
        for(let i = metasets.length - 1; i >= 0; --i){
            const source = metasets[i].$filler;
            if (_shouldApplyFill(source)) {
                _drawfill(chart.ctx, source, chart.chartArea);
            }
        }
    },
    beforeDatasetDraw (chart, args, options) {
        const source = args.meta.$filler;
        if (!_shouldApplyFill(source) || options.drawTime !== 'beforeDatasetDraw') {
            return;
        }
        _drawfill(chart.ctx, source, chart.chartArea);
    },
    defaults: {
        propagate: true,
        drawTime: 'beforeDatasetDraw'
    }
};

const getBoxSize = (labelOpts, fontSize)=>{
    let { boxHeight =fontSize , boxWidth =fontSize  } = labelOpts;
    if (labelOpts.usePointStyle) {
        boxHeight = Math.min(boxHeight, fontSize);
        boxWidth = labelOpts.pointStyleWidth || Math.min(boxWidth, fontSize);
    }
    return {
        boxWidth,
        boxHeight,
        itemHeight: Math.max(fontSize, boxHeight)
    };
};
const itemsEqual = (a, b)=>a !== null && b !== null && a.datasetIndex === b.datasetIndex && a.index === b.index;
class Legend extends Element {
 constructor(config){
        super();
        this._added = false;
        this.legendHitBoxes = [];
 this._hoveredItem = null;
        this.doughnutMode = false;
        this.chart = config.chart;
        this.options = config.options;
        this.ctx = config.ctx;
        this.legendItems = undefined;
        this.columnSizes = undefined;
        this.lineWidths = undefined;
        this.maxHeight = undefined;
        this.maxWidth = undefined;
        this.top = undefined;
        this.bottom = undefined;
        this.left = undefined;
        this.right = undefined;
        this.height = undefined;
        this.width = undefined;
        this._margins = undefined;
        this.position = undefined;
        this.weight = undefined;
        this.fullSize = undefined;
    }
    update(maxWidth, maxHeight, margins) {
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
        this._margins = margins;
        this.setDimensions();
        this.buildLabels();
        this.fit();
    }
    setDimensions() {
        if (this.isHorizontal()) {
            this.width = this.maxWidth;
            this.left = this._margins.left;
            this.right = this.width;
        } else {
            this.height = this.maxHeight;
            this.top = this._margins.top;
            this.bottom = this.height;
        }
    }
    buildLabels() {
        const labelOpts = this.options.labels || {};
        let legendItems = helpers_segment.callback(labelOpts.generateLabels, [
            this.chart
        ], this) || [];
        if (labelOpts.filter) {
            legendItems = legendItems.filter((item)=>labelOpts.filter(item, this.chart.data));
        }
        if (labelOpts.sort) {
            legendItems = legendItems.sort((a, b)=>labelOpts.sort(a, b, this.chart.data));
        }
        if (this.options.reverse) {
            legendItems.reverse();
        }
        this.legendItems = legendItems;
    }
    fit() {
        const { options , ctx  } = this;
        if (!options.display) {
            this.width = this.height = 0;
            return;
        }
        const labelOpts = options.labels;
        const labelFont = helpers_segment.toFont(labelOpts.font);
        const fontSize = labelFont.size;
        const titleHeight = this._computeTitleHeight();
        const { boxWidth , itemHeight  } = getBoxSize(labelOpts, fontSize);
        let width, height;
        ctx.font = labelFont.string;
        if (this.isHorizontal()) {
            width = this.maxWidth;
            height = this._fitRows(titleHeight, fontSize, boxWidth, itemHeight) + 10;
        } else {
            height = this.maxHeight;
            width = this._fitCols(titleHeight, labelFont, boxWidth, itemHeight) + 10;
        }
        this.width = Math.min(width, options.maxWidth || this.maxWidth);
        this.height = Math.min(height, options.maxHeight || this.maxHeight);
    }
 _fitRows(titleHeight, fontSize, boxWidth, itemHeight) {
        const { ctx , maxWidth , options: { labels: { padding  }  }  } = this;
        const hitboxes = this.legendHitBoxes = [];
        const lineWidths = this.lineWidths = [
            0
        ];
        const lineHeight = itemHeight + padding;
        let totalHeight = titleHeight;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        let row = -1;
        let top = -lineHeight;
        this.legendItems.forEach((legendItem, i)=>{
            const itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;
            if (i === 0 || lineWidths[lineWidths.length - 1] + itemWidth + 2 * padding > maxWidth) {
                totalHeight += lineHeight;
                lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
                top += lineHeight;
                row++;
            }
            hitboxes[i] = {
                left: 0,
                top,
                row,
                width: itemWidth,
                height: itemHeight
            };
            lineWidths[lineWidths.length - 1] += itemWidth + padding;
        });
        return totalHeight;
    }
    _fitCols(titleHeight, labelFont, boxWidth, _itemHeight) {
        const { ctx , maxHeight , options: { labels: { padding  }  }  } = this;
        const hitboxes = this.legendHitBoxes = [];
        const columnSizes = this.columnSizes = [];
        const heightLimit = maxHeight - titleHeight;
        let totalWidth = padding;
        let currentColWidth = 0;
        let currentColHeight = 0;
        let left = 0;
        let col = 0;
        this.legendItems.forEach((legendItem, i)=>{
            const { itemWidth , itemHeight  } = calculateItemSize(boxWidth, labelFont, ctx, legendItem, _itemHeight);
            if (i > 0 && currentColHeight + itemHeight + 2 * padding > heightLimit) {
                totalWidth += currentColWidth + padding;
                columnSizes.push({
                    width: currentColWidth,
                    height: currentColHeight
                });
                left += currentColWidth + padding;
                col++;
                currentColWidth = currentColHeight = 0;
            }
            hitboxes[i] = {
                left,
                top: currentColHeight,
                col,
                width: itemWidth,
                height: itemHeight
            };
            currentColWidth = Math.max(currentColWidth, itemWidth);
            currentColHeight += itemHeight + padding;
        });
        totalWidth += currentColWidth;
        columnSizes.push({
            width: currentColWidth,
            height: currentColHeight
        });
        return totalWidth;
    }
    adjustHitBoxes() {
        if (!this.options.display) {
            return;
        }
        const titleHeight = this._computeTitleHeight();
        const { legendHitBoxes: hitboxes , options: { align , labels: { padding  } , rtl  }  } = this;
        const rtlHelper = helpers_segment.getRtlAdapter(rtl, this.left, this.width);
        if (this.isHorizontal()) {
            let row = 0;
            let left = helpers_segment._alignStartEnd(align, this.left + padding, this.right - this.lineWidths[row]);
            for (const hitbox of hitboxes){
                if (row !== hitbox.row) {
                    row = hitbox.row;
                    left = helpers_segment._alignStartEnd(align, this.left + padding, this.right - this.lineWidths[row]);
                }
                hitbox.top += this.top + titleHeight + padding;
                hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(left), hitbox.width);
                left += hitbox.width + padding;
            }
        } else {
            let col = 0;
            let top = helpers_segment._alignStartEnd(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
            for (const hitbox of hitboxes){
                if (hitbox.col !== col) {
                    col = hitbox.col;
                    top = helpers_segment._alignStartEnd(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
                }
                hitbox.top = top;
                hitbox.left += this.left + padding;
                hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(hitbox.left), hitbox.width);
                top += hitbox.height + padding;
            }
        }
    }
    isHorizontal() {
        return this.options.position === 'top' || this.options.position === 'bottom';
    }
    draw() {
        if (this.options.display) {
            const ctx = this.ctx;
            helpers_segment.clipArea(ctx, this);
            this._draw();
            helpers_segment.unclipArea(ctx);
        }
    }
 _draw() {
        const { options: opts , columnSizes , lineWidths , ctx  } = this;
        const { align , labels: labelOpts  } = opts;
        const defaultColor = helpers_segment.defaults.color;
        const rtlHelper = helpers_segment.getRtlAdapter(opts.rtl, this.left, this.width);
        const labelFont = helpers_segment.toFont(labelOpts.font);
        const { padding  } = labelOpts;
        const fontSize = labelFont.size;
        const halfFontSize = fontSize / 2;
        let cursor;
        this.drawTitle();
        ctx.textAlign = rtlHelper.textAlign('left');
        ctx.textBaseline = 'middle';
        ctx.lineWidth = 0.5;
        ctx.font = labelFont.string;
        const { boxWidth , boxHeight , itemHeight  } = getBoxSize(labelOpts, fontSize);
        const drawLegendBox = function(x, y, legendItem) {
            if (isNaN(boxWidth) || boxWidth <= 0 || isNaN(boxHeight) || boxHeight < 0) {
                return;
            }
            ctx.save();
            const lineWidth = helpers_segment.valueOrDefault(legendItem.lineWidth, 1);
            ctx.fillStyle = helpers_segment.valueOrDefault(legendItem.fillStyle, defaultColor);
            ctx.lineCap = helpers_segment.valueOrDefault(legendItem.lineCap, 'butt');
            ctx.lineDashOffset = helpers_segment.valueOrDefault(legendItem.lineDashOffset, 0);
            ctx.lineJoin = helpers_segment.valueOrDefault(legendItem.lineJoin, 'miter');
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = helpers_segment.valueOrDefault(legendItem.strokeStyle, defaultColor);
            ctx.setLineDash(helpers_segment.valueOrDefault(legendItem.lineDash, []));
            if (labelOpts.usePointStyle) {
                const drawOptions = {
                    radius: boxHeight * Math.SQRT2 / 2,
                    pointStyle: legendItem.pointStyle,
                    rotation: legendItem.rotation,
                    borderWidth: lineWidth
                };
                const centerX = rtlHelper.xPlus(x, boxWidth / 2);
                const centerY = y + halfFontSize;
                helpers_segment.drawPointLegend(ctx, drawOptions, centerX, centerY, labelOpts.pointStyleWidth && boxWidth);
            } else {
                const yBoxTop = y + Math.max((fontSize - boxHeight) / 2, 0);
                const xBoxLeft = rtlHelper.leftForLtr(x, boxWidth);
                const borderRadius = helpers_segment.toTRBLCorners(legendItem.borderRadius);
                ctx.beginPath();
                if (Object.values(borderRadius).some((v)=>v !== 0)) {
                    helpers_segment.addRoundedRectPath(ctx, {
                        x: xBoxLeft,
                        y: yBoxTop,
                        w: boxWidth,
                        h: boxHeight,
                        radius: borderRadius
                    });
                } else {
                    ctx.rect(xBoxLeft, yBoxTop, boxWidth, boxHeight);
                }
                ctx.fill();
                if (lineWidth !== 0) {
                    ctx.stroke();
                }
            }
            ctx.restore();
        };
        const fillText = function(x, y, legendItem) {
            helpers_segment.renderText(ctx, legendItem.text, x, y + itemHeight / 2, labelFont, {
                strikethrough: legendItem.hidden,
                textAlign: rtlHelper.textAlign(legendItem.textAlign)
            });
        };
        const isHorizontal = this.isHorizontal();
        const titleHeight = this._computeTitleHeight();
        if (isHorizontal) {
            cursor = {
                x: helpers_segment._alignStartEnd(align, this.left + padding, this.right - lineWidths[0]),
                y: this.top + padding + titleHeight,
                line: 0
            };
        } else {
            cursor = {
                x: this.left + padding,
                y: helpers_segment._alignStartEnd(align, this.top + titleHeight + padding, this.bottom - columnSizes[0].height),
                line: 0
            };
        }
        helpers_segment.overrideTextDirection(this.ctx, opts.textDirection);
        const lineHeight = itemHeight + padding;
        this.legendItems.forEach((legendItem, i)=>{
            ctx.strokeStyle = legendItem.fontColor;
            ctx.fillStyle = legendItem.fontColor;
            const textWidth = ctx.measureText(legendItem.text).width;
            const textAlign = rtlHelper.textAlign(legendItem.textAlign || (legendItem.textAlign = labelOpts.textAlign));
            const width = boxWidth + halfFontSize + textWidth;
            let x = cursor.x;
            let y = cursor.y;
            rtlHelper.setWidth(this.width);
            if (isHorizontal) {
                if (i > 0 && x + width + padding > this.right) {
                    y = cursor.y += lineHeight;
                    cursor.line++;
                    x = cursor.x = helpers_segment._alignStartEnd(align, this.left + padding, this.right - lineWidths[cursor.line]);
                }
            } else if (i > 0 && y + lineHeight > this.bottom) {
                x = cursor.x = x + columnSizes[cursor.line].width + padding;
                cursor.line++;
                y = cursor.y = helpers_segment._alignStartEnd(align, this.top + titleHeight + padding, this.bottom - columnSizes[cursor.line].height);
            }
            const realX = rtlHelper.x(x);
            drawLegendBox(realX, y, legendItem);
            x = helpers_segment._textX(textAlign, x + boxWidth + halfFontSize, isHorizontal ? x + width : this.right, opts.rtl);
            fillText(rtlHelper.x(x), y, legendItem);
            if (isHorizontal) {
                cursor.x += width + padding;
            } else if (typeof legendItem.text !== 'string') {
                const fontLineHeight = labelFont.lineHeight;
                cursor.y += calculateLegendItemHeight(legendItem, fontLineHeight) + padding;
            } else {
                cursor.y += lineHeight;
            }
        });
        helpers_segment.restoreTextDirection(this.ctx, opts.textDirection);
    }
 drawTitle() {
        const opts = this.options;
        const titleOpts = opts.title;
        const titleFont = helpers_segment.toFont(titleOpts.font);
        const titlePadding = helpers_segment.toPadding(titleOpts.padding);
        if (!titleOpts.display) {
            return;
        }
        const rtlHelper = helpers_segment.getRtlAdapter(opts.rtl, this.left, this.width);
        const ctx = this.ctx;
        const position = titleOpts.position;
        const halfFontSize = titleFont.size / 2;
        const topPaddingPlusHalfFontSize = titlePadding.top + halfFontSize;
        let y;
        let left = this.left;
        let maxWidth = this.width;
        if (this.isHorizontal()) {
            maxWidth = Math.max(...this.lineWidths);
            y = this.top + topPaddingPlusHalfFontSize;
            left = helpers_segment._alignStartEnd(opts.align, left, this.right - maxWidth);
        } else {
            const maxHeight = this.columnSizes.reduce((acc, size)=>Math.max(acc, size.height), 0);
            y = topPaddingPlusHalfFontSize + helpers_segment._alignStartEnd(opts.align, this.top, this.bottom - maxHeight - opts.labels.padding - this._computeTitleHeight());
        }
        const x = helpers_segment._alignStartEnd(position, left, left + maxWidth);
        ctx.textAlign = rtlHelper.textAlign(helpers_segment._toLeftRightCenter(position));
        ctx.textBaseline = 'middle';
        ctx.strokeStyle = titleOpts.color;
        ctx.fillStyle = titleOpts.color;
        ctx.font = titleFont.string;
        helpers_segment.renderText(ctx, titleOpts.text, x, y, titleFont);
    }
 _computeTitleHeight() {
        const titleOpts = this.options.title;
        const titleFont = helpers_segment.toFont(titleOpts.font);
        const titlePadding = helpers_segment.toPadding(titleOpts.padding);
        return titleOpts.display ? titleFont.lineHeight + titlePadding.height : 0;
    }
 _getLegendItemAt(x, y) {
        let i, hitBox, lh;
        if (helpers_segment._isBetween(x, this.left, this.right) && helpers_segment._isBetween(y, this.top, this.bottom)) {
            lh = this.legendHitBoxes;
            for(i = 0; i < lh.length; ++i){
                hitBox = lh[i];
                if (helpers_segment._isBetween(x, hitBox.left, hitBox.left + hitBox.width) && helpers_segment._isBetween(y, hitBox.top, hitBox.top + hitBox.height)) {
                    return this.legendItems[i];
                }
            }
        }
        return null;
    }
 handleEvent(e) {
        const opts = this.options;
        if (!isListened(e.type, opts)) {
            return;
        }
        const hoveredItem = this._getLegendItemAt(e.x, e.y);
        if (e.type === 'mousemove' || e.type === 'mouseout') {
            const previous = this._hoveredItem;
            const sameItem = itemsEqual(previous, hoveredItem);
            if (previous && !sameItem) {
                helpers_segment.callback(opts.onLeave, [
                    e,
                    previous,
                    this
                ], this);
            }
            this._hoveredItem = hoveredItem;
            if (hoveredItem && !sameItem) {
                helpers_segment.callback(opts.onHover, [
                    e,
                    hoveredItem,
                    this
                ], this);
            }
        } else if (hoveredItem) {
            helpers_segment.callback(opts.onClick, [
                e,
                hoveredItem,
                this
            ], this);
        }
    }
}
function calculateItemSize(boxWidth, labelFont, ctx, legendItem, _itemHeight) {
    const itemWidth = calculateItemWidth(legendItem, boxWidth, labelFont, ctx);
    const itemHeight = calculateItemHeight(_itemHeight, legendItem, labelFont.lineHeight);
    return {
        itemWidth,
        itemHeight
    };
}
function calculateItemWidth(legendItem, boxWidth, labelFont, ctx) {
    let legendItemText = legendItem.text;
    if (legendItemText && typeof legendItemText !== 'string') {
        legendItemText = legendItemText.reduce((a, b)=>a.length > b.length ? a : b);
    }
    return boxWidth + labelFont.size / 2 + ctx.measureText(legendItemText).width;
}
function calculateItemHeight(_itemHeight, legendItem, fontLineHeight) {
    let itemHeight = _itemHeight;
    if (typeof legendItem.text !== 'string') {
        itemHeight = calculateLegendItemHeight(legendItem, fontLineHeight);
    }
    return itemHeight;
}
function calculateLegendItemHeight(legendItem, fontLineHeight) {
    const labelHeight = legendItem.text ? legendItem.text.length : 0;
    return fontLineHeight * labelHeight;
}
function isListened(type, opts) {
    if ((type === 'mousemove' || type === 'mouseout') && (opts.onHover || opts.onLeave)) {
        return true;
    }
    if (opts.onClick && (type === 'click' || type === 'mouseup')) {
        return true;
    }
    return false;
}
var plugin_legend = {
    id: 'legend',
 _element: Legend,
    start (chart, _args, options) {
        const legend = chart.legend = new Legend({
            ctx: chart.ctx,
            options,
            chart
        });
        layouts.configure(chart, legend, options);
        layouts.addBox(chart, legend);
    },
    stop (chart) {
        layouts.removeBox(chart, chart.legend);
        delete chart.legend;
    },
    beforeUpdate (chart, _args, options) {
        const legend = chart.legend;
        layouts.configure(chart, legend, options);
        legend.options = options;
    },
    afterUpdate (chart) {
        const legend = chart.legend;
        legend.buildLabels();
        legend.adjustHitBoxes();
    },
    afterEvent (chart, args) {
        if (!args.replay) {
            chart.legend.handleEvent(args.event);
        }
    },
    defaults: {
        display: true,
        position: 'top',
        align: 'center',
        fullSize: true,
        reverse: false,
        weight: 1000,
        onClick (e, legendItem, legend) {
            const index = legendItem.datasetIndex;
            const ci = legend.chart;
            if (ci.isDatasetVisible(index)) {
                ci.hide(index);
                legendItem.hidden = true;
            } else {
                ci.show(index);
                legendItem.hidden = false;
            }
        },
        onHover: null,
        onLeave: null,
        labels: {
            color: (ctx)=>ctx.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels (chart) {
                const datasets = chart.data.datasets;
                const { labels: { usePointStyle , pointStyle , textAlign , color , useBorderRadius , borderRadius  }  } = chart.legend.options;
                return chart._getSortedDatasetMetas().map((meta)=>{
                    const style = meta.controller.getStyle(usePointStyle ? 0 : undefined);
                    const borderWidth = helpers_segment.toPadding(style.borderWidth);
                    return {
                        text: datasets[meta.index].label,
                        fillStyle: style.backgroundColor,
                        fontColor: color,
                        hidden: !meta.visible,
                        lineCap: style.borderCapStyle,
                        lineDash: style.borderDash,
                        lineDashOffset: style.borderDashOffset,
                        lineJoin: style.borderJoinStyle,
                        lineWidth: (borderWidth.width + borderWidth.height) / 4,
                        strokeStyle: style.borderColor,
                        pointStyle: pointStyle || style.pointStyle,
                        rotation: style.rotation,
                        textAlign: textAlign || style.textAlign,
                        borderRadius: useBorderRadius && (borderRadius || style.borderRadius),
                        datasetIndex: meta.index
                    };
                }, this);
            }
        },
        title: {
            color: (ctx)=>ctx.chart.options.color,
            display: false,
            position: 'center',
            text: ''
        }
    },
    descriptors: {
        _scriptable: (name)=>!name.startsWith('on'),
        labels: {
            _scriptable: (name)=>![
                    'generateLabels',
                    'filter',
                    'sort'
                ].includes(name)
        }
    }
};

class Title extends Element {
 constructor(config){
        super();
        this.chart = config.chart;
        this.options = config.options;
        this.ctx = config.ctx;
        this._padding = undefined;
        this.top = undefined;
        this.bottom = undefined;
        this.left = undefined;
        this.right = undefined;
        this.width = undefined;
        this.height = undefined;
        this.position = undefined;
        this.weight = undefined;
        this.fullSize = undefined;
    }
    update(maxWidth, maxHeight) {
        const opts = this.options;
        this.left = 0;
        this.top = 0;
        if (!opts.display) {
            this.width = this.height = this.right = this.bottom = 0;
            return;
        }
        this.width = this.right = maxWidth;
        this.height = this.bottom = maxHeight;
        const lineCount = helpers_segment.isArray(opts.text) ? opts.text.length : 1;
        this._padding = helpers_segment.toPadding(opts.padding);
        const textSize = lineCount * helpers_segment.toFont(opts.font).lineHeight + this._padding.height;
        if (this.isHorizontal()) {
            this.height = textSize;
        } else {
            this.width = textSize;
        }
    }
    isHorizontal() {
        const pos = this.options.position;
        return pos === 'top' || pos === 'bottom';
    }
    _drawArgs(offset) {
        const { top , left , bottom , right , options  } = this;
        const align = options.align;
        let rotation = 0;
        let maxWidth, titleX, titleY;
        if (this.isHorizontal()) {
            titleX = helpers_segment._alignStartEnd(align, left, right);
            titleY = top + offset;
            maxWidth = right - left;
        } else {
            if (options.position === 'left') {
                titleX = left + offset;
                titleY = helpers_segment._alignStartEnd(align, bottom, top);
                rotation = helpers_segment.PI * -0.5;
            } else {
                titleX = right - offset;
                titleY = helpers_segment._alignStartEnd(align, top, bottom);
                rotation = helpers_segment.PI * 0.5;
            }
            maxWidth = bottom - top;
        }
        return {
            titleX,
            titleY,
            maxWidth,
            rotation
        };
    }
    draw() {
        const ctx = this.ctx;
        const opts = this.options;
        if (!opts.display) {
            return;
        }
        const fontOpts = helpers_segment.toFont(opts.font);
        const lineHeight = fontOpts.lineHeight;
        const offset = lineHeight / 2 + this._padding.top;
        const { titleX , titleY , maxWidth , rotation  } = this._drawArgs(offset);
        helpers_segment.renderText(ctx, opts.text, 0, 0, fontOpts, {
            color: opts.color,
            maxWidth,
            rotation,
            textAlign: helpers_segment._toLeftRightCenter(opts.align),
            textBaseline: 'middle',
            translation: [
                titleX,
                titleY
            ]
        });
    }
}
function createTitle(chart, titleOpts) {
    const title = new Title({
        ctx: chart.ctx,
        options: titleOpts,
        chart
    });
    layouts.configure(chart, title, titleOpts);
    layouts.addBox(chart, title);
    chart.titleBlock = title;
}
var plugin_title = {
    id: 'title',
 _element: Title,
    start (chart, _args, options) {
        createTitle(chart, options);
    },
    stop (chart) {
        const titleBlock = chart.titleBlock;
        layouts.removeBox(chart, titleBlock);
        delete chart.titleBlock;
    },
    beforeUpdate (chart, _args, options) {
        const title = chart.titleBlock;
        layouts.configure(chart, title, options);
        title.options = options;
    },
    defaults: {
        align: 'center',
        display: false,
        font: {
            weight: 'bold'
        },
        fullSize: true,
        padding: 10,
        position: 'top',
        text: '',
        weight: 2000
    },
    defaultRoutes: {
        color: 'color'
    },
    descriptors: {
        _scriptable: true,
        _indexable: false
    }
};

const map = new WeakMap();
var plugin_subtitle = {
    id: 'subtitle',
    start (chart, _args, options) {
        const title = new Title({
            ctx: chart.ctx,
            options,
            chart
        });
        layouts.configure(chart, title, options);
        layouts.addBox(chart, title);
        map.set(chart, title);
    },
    stop (chart) {
        layouts.removeBox(chart, map.get(chart));
        map.delete(chart);
    },
    beforeUpdate (chart, _args, options) {
        const title = map.get(chart);
        layouts.configure(chart, title, options);
        title.options = options;
    },
    defaults: {
        align: 'center',
        display: false,
        font: {
            weight: 'normal'
        },
        fullSize: true,
        padding: 0,
        position: 'top',
        text: '',
        weight: 1500
    },
    defaultRoutes: {
        color: 'color'
    },
    descriptors: {
        _scriptable: true,
        _indexable: false
    }
};

const positioners = {
 average (items) {
        if (!items.length) {
            return false;
        }
        let i, len;
        let x = 0;
        let y = 0;
        let count = 0;
        for(i = 0, len = items.length; i < len; ++i){
            const el = items[i].element;
            if (el && el.hasValue()) {
                const pos = el.tooltipPosition();
                x += pos.x;
                y += pos.y;
                ++count;
            }
        }
        return {
            x: x / count,
            y: y / count
        };
    },
 nearest (items, eventPosition) {
        if (!items.length) {
            return false;
        }
        let x = eventPosition.x;
        let y = eventPosition.y;
        let minDistance = Number.POSITIVE_INFINITY;
        let i, len, nearestElement;
        for(i = 0, len = items.length; i < len; ++i){
            const el = items[i].element;
            if (el && el.hasValue()) {
                const center = el.getCenterPoint();
                const d = helpers_segment.distanceBetweenPoints(eventPosition, center);
                if (d < minDistance) {
                    minDistance = d;
                    nearestElement = el;
                }
            }
        }
        if (nearestElement) {
            const tp = nearestElement.tooltipPosition();
            x = tp.x;
            y = tp.y;
        }
        return {
            x,
            y
        };
    }
};
function pushOrConcat(base, toPush) {
    if (toPush) {
        if (helpers_segment.isArray(toPush)) {
            Array.prototype.push.apply(base, toPush);
        } else {
            base.push(toPush);
        }
    }
    return base;
}
 function splitNewlines(str) {
    if ((typeof str === 'string' || str instanceof String) && str.indexOf('\n') > -1) {
        return str.split('\n');
    }
    return str;
}
 function createTooltipItem(chart, item) {
    const { element , datasetIndex , index  } = item;
    const controller = chart.getDatasetMeta(datasetIndex).controller;
    const { label , value  } = controller.getLabelAndValue(index);
    return {
        chart,
        label,
        parsed: controller.getParsed(index),
        raw: chart.data.datasets[datasetIndex].data[index],
        formattedValue: value,
        dataset: controller.getDataset(),
        dataIndex: index,
        datasetIndex,
        element
    };
}
 function getTooltipSize(tooltip, options) {
    const ctx = tooltip.chart.ctx;
    const { body , footer , title  } = tooltip;
    const { boxWidth , boxHeight  } = options;
    const bodyFont = helpers_segment.toFont(options.bodyFont);
    const titleFont = helpers_segment.toFont(options.titleFont);
    const footerFont = helpers_segment.toFont(options.footerFont);
    const titleLineCount = title.length;
    const footerLineCount = footer.length;
    const bodyLineItemCount = body.length;
    const padding = helpers_segment.toPadding(options.padding);
    let height = padding.height;
    let width = 0;
    let combinedBodyLength = body.reduce((count, bodyItem)=>count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length, 0);
    combinedBodyLength += tooltip.beforeBody.length + tooltip.afterBody.length;
    if (titleLineCount) {
        height += titleLineCount * titleFont.lineHeight + (titleLineCount - 1) * options.titleSpacing + options.titleMarginBottom;
    }
    if (combinedBodyLength) {
        const bodyLineHeight = options.displayColors ? Math.max(boxHeight, bodyFont.lineHeight) : bodyFont.lineHeight;
        height += bodyLineItemCount * bodyLineHeight + (combinedBodyLength - bodyLineItemCount) * bodyFont.lineHeight + (combinedBodyLength - 1) * options.bodySpacing;
    }
    if (footerLineCount) {
        height += options.footerMarginTop + footerLineCount * footerFont.lineHeight + (footerLineCount - 1) * options.footerSpacing;
    }
    let widthPadding = 0;
    const maxLineWidth = function(line) {
        width = Math.max(width, ctx.measureText(line).width + widthPadding);
    };
    ctx.save();
    ctx.font = titleFont.string;
    helpers_segment.each(tooltip.title, maxLineWidth);
    ctx.font = bodyFont.string;
    helpers_segment.each(tooltip.beforeBody.concat(tooltip.afterBody), maxLineWidth);
    widthPadding = options.displayColors ? boxWidth + 2 + options.boxPadding : 0;
    helpers_segment.each(body, (bodyItem)=>{
        helpers_segment.each(bodyItem.before, maxLineWidth);
        helpers_segment.each(bodyItem.lines, maxLineWidth);
        helpers_segment.each(bodyItem.after, maxLineWidth);
    });
    widthPadding = 0;
    ctx.font = footerFont.string;
    helpers_segment.each(tooltip.footer, maxLineWidth);
    ctx.restore();
    width += padding.width;
    return {
        width,
        height
    };
}
function determineYAlign(chart, size) {
    const { y , height  } = size;
    if (y < height / 2) {
        return 'top';
    } else if (y > chart.height - height / 2) {
        return 'bottom';
    }
    return 'center';
}
function doesNotFitWithAlign(xAlign, chart, options, size) {
    const { x , width  } = size;
    const caret = options.caretSize + options.caretPadding;
    if (xAlign === 'left' && x + width + caret > chart.width) {
        return true;
    }
    if (xAlign === 'right' && x - width - caret < 0) {
        return true;
    }
}
function determineXAlign(chart, options, size, yAlign) {
    const { x , width  } = size;
    const { width: chartWidth , chartArea: { left , right  }  } = chart;
    let xAlign = 'center';
    if (yAlign === 'center') {
        xAlign = x <= (left + right) / 2 ? 'left' : 'right';
    } else if (x <= width / 2) {
        xAlign = 'left';
    } else if (x >= chartWidth - width / 2) {
        xAlign = 'right';
    }
    if (doesNotFitWithAlign(xAlign, chart, options, size)) {
        xAlign = 'center';
    }
    return xAlign;
}
 function determineAlignment(chart, options, size) {
    const yAlign = size.yAlign || options.yAlign || determineYAlign(chart, size);
    return {
        xAlign: size.xAlign || options.xAlign || determineXAlign(chart, options, size, yAlign),
        yAlign
    };
}
function alignX(size, xAlign) {
    let { x , width  } = size;
    if (xAlign === 'right') {
        x -= width;
    } else if (xAlign === 'center') {
        x -= width / 2;
    }
    return x;
}
function alignY(size, yAlign, paddingAndSize) {
    let { y , height  } = size;
    if (yAlign === 'top') {
        y += paddingAndSize;
    } else if (yAlign === 'bottom') {
        y -= height + paddingAndSize;
    } else {
        y -= height / 2;
    }
    return y;
}
 function getBackgroundPoint(options, size, alignment, chart) {
    const { caretSize , caretPadding , cornerRadius  } = options;
    const { xAlign , yAlign  } = alignment;
    const paddingAndSize = caretSize + caretPadding;
    const { topLeft , topRight , bottomLeft , bottomRight  } = helpers_segment.toTRBLCorners(cornerRadius);
    let x = alignX(size, xAlign);
    const y = alignY(size, yAlign, paddingAndSize);
    if (yAlign === 'center') {
        if (xAlign === 'left') {
            x += paddingAndSize;
        } else if (xAlign === 'right') {
            x -= paddingAndSize;
        }
    } else if (xAlign === 'left') {
        x -= Math.max(topLeft, bottomLeft) + caretSize;
    } else if (xAlign === 'right') {
        x += Math.max(topRight, bottomRight) + caretSize;
    }
    return {
        x: helpers_segment._limitValue(x, 0, chart.width - size.width),
        y: helpers_segment._limitValue(y, 0, chart.height - size.height)
    };
}
function getAlignedX(tooltip, align, options) {
    const padding = helpers_segment.toPadding(options.padding);
    return align === 'center' ? tooltip.x + tooltip.width / 2 : align === 'right' ? tooltip.x + tooltip.width - padding.right : tooltip.x + padding.left;
}
 function getBeforeAfterBodyLines(callback) {
    return pushOrConcat([], splitNewlines(callback));
}
function createTooltipContext(parent, tooltip, tooltipItems) {
    return helpers_segment.createContext(parent, {
        tooltip,
        tooltipItems,
        type: 'tooltip'
    });
}
function overrideCallbacks(callbacks, context) {
    const override = context && context.dataset && context.dataset.tooltip && context.dataset.tooltip.callbacks;
    return override ? callbacks.override(override) : callbacks;
}
const defaultCallbacks = {
    beforeTitle: helpers_segment.noop,
    title (tooltipItems) {
        if (tooltipItems.length > 0) {
            const item = tooltipItems[0];
            const labels = item.chart.data.labels;
            const labelCount = labels ? labels.length : 0;
            if (this && this.options && this.options.mode === 'dataset') {
                return item.dataset.label || '';
            } else if (item.label) {
                return item.label;
            } else if (labelCount > 0 && item.dataIndex < labelCount) {
                return labels[item.dataIndex];
            }
        }
        return '';
    },
    afterTitle: helpers_segment.noop,
    beforeBody: helpers_segment.noop,
    beforeLabel: helpers_segment.noop,
    label (tooltipItem) {
        if (this && this.options && this.options.mode === 'dataset') {
            return tooltipItem.label + ': ' + tooltipItem.formattedValue || tooltipItem.formattedValue;
        }
        let label = tooltipItem.dataset.label || '';
        if (label) {
            label += ': ';
        }
        const value = tooltipItem.formattedValue;
        if (!helpers_segment.isNullOrUndef(value)) {
            label += value;
        }
        return label;
    },
    labelColor (tooltipItem) {
        const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
        const options = meta.controller.getStyle(tooltipItem.dataIndex);
        return {
            borderColor: options.borderColor,
            backgroundColor: options.backgroundColor,
            borderWidth: options.borderWidth,
            borderDash: options.borderDash,
            borderDashOffset: options.borderDashOffset,
            borderRadius: 0
        };
    },
    labelTextColor () {
        return this.options.bodyColor;
    },
    labelPointStyle (tooltipItem) {
        const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
        const options = meta.controller.getStyle(tooltipItem.dataIndex);
        return {
            pointStyle: options.pointStyle,
            rotation: options.rotation
        };
    },
    afterLabel: helpers_segment.noop,
    afterBody: helpers_segment.noop,
    beforeFooter: helpers_segment.noop,
    footer: helpers_segment.noop,
    afterFooter: helpers_segment.noop
};
 function invokeCallbackWithFallback(callbacks, name, ctx, arg) {
    const result = callbacks[name].call(ctx, arg);
    if (typeof result === 'undefined') {
        return defaultCallbacks[name].call(ctx, arg);
    }
    return result;
}
class Tooltip extends Element {
 static positioners = positioners;
    constructor(config){
        super();
        this.opacity = 0;
        this._active = [];
        this._eventPosition = undefined;
        this._size = undefined;
        this._cachedAnimations = undefined;
        this._tooltipItems = [];
        this.$animations = undefined;
        this.$context = undefined;
        this.chart = config.chart;
        this.options = config.options;
        this.dataPoints = undefined;
        this.title = undefined;
        this.beforeBody = undefined;
        this.body = undefined;
        this.afterBody = undefined;
        this.footer = undefined;
        this.xAlign = undefined;
        this.yAlign = undefined;
        this.x = undefined;
        this.y = undefined;
        this.height = undefined;
        this.width = undefined;
        this.caretX = undefined;
        this.caretY = undefined;
        this.labelColors = undefined;
        this.labelPointStyles = undefined;
        this.labelTextColors = undefined;
    }
    initialize(options) {
        this.options = options;
        this._cachedAnimations = undefined;
        this.$context = undefined;
    }
 _resolveAnimations() {
        const cached = this._cachedAnimations;
        if (cached) {
            return cached;
        }
        const chart = this.chart;
        const options = this.options.setContext(this.getContext());
        const opts = options.enabled && chart.options.animation && options.animations;
        const animations = new Animations(this.chart, opts);
        if (opts._cacheable) {
            this._cachedAnimations = Object.freeze(animations);
        }
        return animations;
    }
 getContext() {
        return this.$context || (this.$context = createTooltipContext(this.chart.getContext(), this, this._tooltipItems));
    }
    getTitle(context, options) {
        const { callbacks  } = options;
        const beforeTitle = invokeCallbackWithFallback(callbacks, 'beforeTitle', this, context);
        const title = invokeCallbackWithFallback(callbacks, 'title', this, context);
        const afterTitle = invokeCallbackWithFallback(callbacks, 'afterTitle', this, context);
        let lines = [];
        lines = pushOrConcat(lines, splitNewlines(beforeTitle));
        lines = pushOrConcat(lines, splitNewlines(title));
        lines = pushOrConcat(lines, splitNewlines(afterTitle));
        return lines;
    }
    getBeforeBody(tooltipItems, options) {
        return getBeforeAfterBodyLines(invokeCallbackWithFallback(options.callbacks, 'beforeBody', this, tooltipItems));
    }
    getBody(tooltipItems, options) {
        const { callbacks  } = options;
        const bodyItems = [];
        helpers_segment.each(tooltipItems, (context)=>{
            const bodyItem = {
                before: [],
                lines: [],
                after: []
            };
            const scoped = overrideCallbacks(callbacks, context);
            pushOrConcat(bodyItem.before, splitNewlines(invokeCallbackWithFallback(scoped, 'beforeLabel', this, context)));
            pushOrConcat(bodyItem.lines, invokeCallbackWithFallback(scoped, 'label', this, context));
            pushOrConcat(bodyItem.after, splitNewlines(invokeCallbackWithFallback(scoped, 'afterLabel', this, context)));
            bodyItems.push(bodyItem);
        });
        return bodyItems;
    }
    getAfterBody(tooltipItems, options) {
        return getBeforeAfterBodyLines(invokeCallbackWithFallback(options.callbacks, 'afterBody', this, tooltipItems));
    }
    getFooter(tooltipItems, options) {
        const { callbacks  } = options;
        const beforeFooter = invokeCallbackWithFallback(callbacks, 'beforeFooter', this, tooltipItems);
        const footer = invokeCallbackWithFallback(callbacks, 'footer', this, tooltipItems);
        const afterFooter = invokeCallbackWithFallback(callbacks, 'afterFooter', this, tooltipItems);
        let lines = [];
        lines = pushOrConcat(lines, splitNewlines(beforeFooter));
        lines = pushOrConcat(lines, splitNewlines(footer));
        lines = pushOrConcat(lines, splitNewlines(afterFooter));
        return lines;
    }
 _createItems(options) {
        const active = this._active;
        const data = this.chart.data;
        const labelColors = [];
        const labelPointStyles = [];
        const labelTextColors = [];
        let tooltipItems = [];
        let i, len;
        for(i = 0, len = active.length; i < len; ++i){
            tooltipItems.push(createTooltipItem(this.chart, active[i]));
        }
        if (options.filter) {
            tooltipItems = tooltipItems.filter((element, index, array)=>options.filter(element, index, array, data));
        }
        if (options.itemSort) {
            tooltipItems = tooltipItems.sort((a, b)=>options.itemSort(a, b, data));
        }
        helpers_segment.each(tooltipItems, (context)=>{
            const scoped = overrideCallbacks(options.callbacks, context);
            labelColors.push(invokeCallbackWithFallback(scoped, 'labelColor', this, context));
            labelPointStyles.push(invokeCallbackWithFallback(scoped, 'labelPointStyle', this, context));
            labelTextColors.push(invokeCallbackWithFallback(scoped, 'labelTextColor', this, context));
        });
        this.labelColors = labelColors;
        this.labelPointStyles = labelPointStyles;
        this.labelTextColors = labelTextColors;
        this.dataPoints = tooltipItems;
        return tooltipItems;
    }
    update(changed, replay) {
        const options = this.options.setContext(this.getContext());
        const active = this._active;
        let properties;
        let tooltipItems = [];
        if (!active.length) {
            if (this.opacity !== 0) {
                properties = {
                    opacity: 0
                };
            }
        } else {
            const position = positioners[options.position].call(this, active, this._eventPosition);
            tooltipItems = this._createItems(options);
            this.title = this.getTitle(tooltipItems, options);
            this.beforeBody = this.getBeforeBody(tooltipItems, options);
            this.body = this.getBody(tooltipItems, options);
            this.afterBody = this.getAfterBody(tooltipItems, options);
            this.footer = this.getFooter(tooltipItems, options);
            const size = this._size = getTooltipSize(this, options);
            const positionAndSize = Object.assign({}, position, size);
            const alignment = determineAlignment(this.chart, options, positionAndSize);
            const backgroundPoint = getBackgroundPoint(options, positionAndSize, alignment, this.chart);
            this.xAlign = alignment.xAlign;
            this.yAlign = alignment.yAlign;
            properties = {
                opacity: 1,
                x: backgroundPoint.x,
                y: backgroundPoint.y,
                width: size.width,
                height: size.height,
                caretX: position.x,
                caretY: position.y
            };
        }
        this._tooltipItems = tooltipItems;
        this.$context = undefined;
        if (properties) {
            this._resolveAnimations().update(this, properties);
        }
        if (changed && options.external) {
            options.external.call(this, {
                chart: this.chart,
                tooltip: this,
                replay
            });
        }
    }
    drawCaret(tooltipPoint, ctx, size, options) {
        const caretPosition = this.getCaretPosition(tooltipPoint, size, options);
        ctx.lineTo(caretPosition.x1, caretPosition.y1);
        ctx.lineTo(caretPosition.x2, caretPosition.y2);
        ctx.lineTo(caretPosition.x3, caretPosition.y3);
    }
    getCaretPosition(tooltipPoint, size, options) {
        const { xAlign , yAlign  } = this;
        const { caretSize , cornerRadius  } = options;
        const { topLeft , topRight , bottomLeft , bottomRight  } = helpers_segment.toTRBLCorners(cornerRadius);
        const { x: ptX , y: ptY  } = tooltipPoint;
        const { width , height  } = size;
        let x1, x2, x3, y1, y2, y3;
        if (yAlign === 'center') {
            y2 = ptY + height / 2;
            if (xAlign === 'left') {
                x1 = ptX;
                x2 = x1 - caretSize;
                y1 = y2 + caretSize;
                y3 = y2 - caretSize;
            } else {
                x1 = ptX + width;
                x2 = x1 + caretSize;
                y1 = y2 - caretSize;
                y3 = y2 + caretSize;
            }
            x3 = x1;
        } else {
            if (xAlign === 'left') {
                x2 = ptX + Math.max(topLeft, bottomLeft) + caretSize;
            } else if (xAlign === 'right') {
                x2 = ptX + width - Math.max(topRight, bottomRight) - caretSize;
            } else {
                x2 = this.caretX;
            }
            if (yAlign === 'top') {
                y1 = ptY;
                y2 = y1 - caretSize;
                x1 = x2 - caretSize;
                x3 = x2 + caretSize;
            } else {
                y1 = ptY + height;
                y2 = y1 + caretSize;
                x1 = x2 + caretSize;
                x3 = x2 - caretSize;
            }
            y3 = y1;
        }
        return {
            x1,
            x2,
            x3,
            y1,
            y2,
            y3
        };
    }
    drawTitle(pt, ctx, options) {
        const title = this.title;
        const length = title.length;
        let titleFont, titleSpacing, i;
        if (length) {
            const rtlHelper = helpers_segment.getRtlAdapter(options.rtl, this.x, this.width);
            pt.x = getAlignedX(this, options.titleAlign, options);
            ctx.textAlign = rtlHelper.textAlign(options.titleAlign);
            ctx.textBaseline = 'middle';
            titleFont = helpers_segment.toFont(options.titleFont);
            titleSpacing = options.titleSpacing;
            ctx.fillStyle = options.titleColor;
            ctx.font = titleFont.string;
            for(i = 0; i < length; ++i){
                ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFont.lineHeight / 2);
                pt.y += titleFont.lineHeight + titleSpacing;
                if (i + 1 === length) {
                    pt.y += options.titleMarginBottom - titleSpacing;
                }
            }
        }
    }
 _drawColorBox(ctx, pt, i, rtlHelper, options) {
        const labelColor = this.labelColors[i];
        const labelPointStyle = this.labelPointStyles[i];
        const { boxHeight , boxWidth  } = options;
        const bodyFont = helpers_segment.toFont(options.bodyFont);
        const colorX = getAlignedX(this, 'left', options);
        const rtlColorX = rtlHelper.x(colorX);
        const yOffSet = boxHeight < bodyFont.lineHeight ? (bodyFont.lineHeight - boxHeight) / 2 : 0;
        const colorY = pt.y + yOffSet;
        if (options.usePointStyle) {
            const drawOptions = {
                radius: Math.min(boxWidth, boxHeight) / 2,
                pointStyle: labelPointStyle.pointStyle,
                rotation: labelPointStyle.rotation,
                borderWidth: 1
            };
            const centerX = rtlHelper.leftForLtr(rtlColorX, boxWidth) + boxWidth / 2;
            const centerY = colorY + boxHeight / 2;
            ctx.strokeStyle = options.multiKeyBackground;
            ctx.fillStyle = options.multiKeyBackground;
            helpers_segment.drawPoint(ctx, drawOptions, centerX, centerY);
            ctx.strokeStyle = labelColor.borderColor;
            ctx.fillStyle = labelColor.backgroundColor;
            helpers_segment.drawPoint(ctx, drawOptions, centerX, centerY);
        } else {
            ctx.lineWidth = helpers_segment.isObject(labelColor.borderWidth) ? Math.max(...Object.values(labelColor.borderWidth)) : labelColor.borderWidth || 1;
            ctx.strokeStyle = labelColor.borderColor;
            ctx.setLineDash(labelColor.borderDash || []);
            ctx.lineDashOffset = labelColor.borderDashOffset || 0;
            const outerX = rtlHelper.leftForLtr(rtlColorX, boxWidth);
            const innerX = rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), boxWidth - 2);
            const borderRadius = helpers_segment.toTRBLCorners(labelColor.borderRadius);
            if (Object.values(borderRadius).some((v)=>v !== 0)) {
                ctx.beginPath();
                ctx.fillStyle = options.multiKeyBackground;
                helpers_segment.addRoundedRectPath(ctx, {
                    x: outerX,
                    y: colorY,
                    w: boxWidth,
                    h: boxHeight,
                    radius: borderRadius
                });
                ctx.fill();
                ctx.stroke();
                ctx.fillStyle = labelColor.backgroundColor;
                ctx.beginPath();
                helpers_segment.addRoundedRectPath(ctx, {
                    x: innerX,
                    y: colorY + 1,
                    w: boxWidth - 2,
                    h: boxHeight - 2,
                    radius: borderRadius
                });
                ctx.fill();
            } else {
                ctx.fillStyle = options.multiKeyBackground;
                ctx.fillRect(outerX, colorY, boxWidth, boxHeight);
                ctx.strokeRect(outerX, colorY, boxWidth, boxHeight);
                ctx.fillStyle = labelColor.backgroundColor;
                ctx.fillRect(innerX, colorY + 1, boxWidth - 2, boxHeight - 2);
            }
        }
        ctx.fillStyle = this.labelTextColors[i];
    }
    drawBody(pt, ctx, options) {
        const { body  } = this;
        const { bodySpacing , bodyAlign , displayColors , boxHeight , boxWidth , boxPadding  } = options;
        const bodyFont = helpers_segment.toFont(options.bodyFont);
        let bodyLineHeight = bodyFont.lineHeight;
        let xLinePadding = 0;
        const rtlHelper = helpers_segment.getRtlAdapter(options.rtl, this.x, this.width);
        const fillLineOfText = function(line) {
            ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyLineHeight / 2);
            pt.y += bodyLineHeight + bodySpacing;
        };
        const bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
        let bodyItem, textColor, lines, i, j, ilen, jlen;
        ctx.textAlign = bodyAlign;
        ctx.textBaseline = 'middle';
        ctx.font = bodyFont.string;
        pt.x = getAlignedX(this, bodyAlignForCalculation, options);
        ctx.fillStyle = options.bodyColor;
        helpers_segment.each(this.beforeBody, fillLineOfText);
        xLinePadding = displayColors && bodyAlignForCalculation !== 'right' ? bodyAlign === 'center' ? boxWidth / 2 + boxPadding : boxWidth + 2 + boxPadding : 0;
        for(i = 0, ilen = body.length; i < ilen; ++i){
            bodyItem = body[i];
            textColor = this.labelTextColors[i];
            ctx.fillStyle = textColor;
            helpers_segment.each(bodyItem.before, fillLineOfText);
            lines = bodyItem.lines;
            if (displayColors && lines.length) {
                this._drawColorBox(ctx, pt, i, rtlHelper, options);
                bodyLineHeight = Math.max(bodyFont.lineHeight, boxHeight);
            }
            for(j = 0, jlen = lines.length; j < jlen; ++j){
                fillLineOfText(lines[j]);
                bodyLineHeight = bodyFont.lineHeight;
            }
            helpers_segment.each(bodyItem.after, fillLineOfText);
        }
        xLinePadding = 0;
        bodyLineHeight = bodyFont.lineHeight;
        helpers_segment.each(this.afterBody, fillLineOfText);
        pt.y -= bodySpacing;
    }
    drawFooter(pt, ctx, options) {
        const footer = this.footer;
        const length = footer.length;
        let footerFont, i;
        if (length) {
            const rtlHelper = helpers_segment.getRtlAdapter(options.rtl, this.x, this.width);
            pt.x = getAlignedX(this, options.footerAlign, options);
            pt.y += options.footerMarginTop;
            ctx.textAlign = rtlHelper.textAlign(options.footerAlign);
            ctx.textBaseline = 'middle';
            footerFont = helpers_segment.toFont(options.footerFont);
            ctx.fillStyle = options.footerColor;
            ctx.font = footerFont.string;
            for(i = 0; i < length; ++i){
                ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFont.lineHeight / 2);
                pt.y += footerFont.lineHeight + options.footerSpacing;
            }
        }
    }
    drawBackground(pt, ctx, tooltipSize, options) {
        const { xAlign , yAlign  } = this;
        const { x , y  } = pt;
        const { width , height  } = tooltipSize;
        const { topLeft , topRight , bottomLeft , bottomRight  } = helpers_segment.toTRBLCorners(options.cornerRadius);
        ctx.fillStyle = options.backgroundColor;
        ctx.strokeStyle = options.borderColor;
        ctx.lineWidth = options.borderWidth;
        ctx.beginPath();
        ctx.moveTo(x + topLeft, y);
        if (yAlign === 'top') {
            this.drawCaret(pt, ctx, tooltipSize, options);
        }
        ctx.lineTo(x + width - topRight, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + topRight);
        if (yAlign === 'center' && xAlign === 'right') {
            this.drawCaret(pt, ctx, tooltipSize, options);
        }
        ctx.lineTo(x + width, y + height - bottomRight);
        ctx.quadraticCurveTo(x + width, y + height, x + width - bottomRight, y + height);
        if (yAlign === 'bottom') {
            this.drawCaret(pt, ctx, tooltipSize, options);
        }
        ctx.lineTo(x + bottomLeft, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - bottomLeft);
        if (yAlign === 'center' && xAlign === 'left') {
            this.drawCaret(pt, ctx, tooltipSize, options);
        }
        ctx.lineTo(x, y + topLeft);
        ctx.quadraticCurveTo(x, y, x + topLeft, y);
        ctx.closePath();
        ctx.fill();
        if (options.borderWidth > 0) {
            ctx.stroke();
        }
    }
 _updateAnimationTarget(options) {
        const chart = this.chart;
        const anims = this.$animations;
        const animX = anims && anims.x;
        const animY = anims && anims.y;
        if (animX || animY) {
            const position = positioners[options.position].call(this, this._active, this._eventPosition);
            if (!position) {
                return;
            }
            const size = this._size = getTooltipSize(this, options);
            const positionAndSize = Object.assign({}, position, this._size);
            const alignment = determineAlignment(chart, options, positionAndSize);
            const point = getBackgroundPoint(options, positionAndSize, alignment, chart);
            if (animX._to !== point.x || animY._to !== point.y) {
                this.xAlign = alignment.xAlign;
                this.yAlign = alignment.yAlign;
                this.width = size.width;
                this.height = size.height;
                this.caretX = position.x;
                this.caretY = position.y;
                this._resolveAnimations().update(this, point);
            }
        }
    }
 _willRender() {
        return !!this.opacity;
    }
    draw(ctx) {
        const options = this.options.setContext(this.getContext());
        let opacity = this.opacity;
        if (!opacity) {
            return;
        }
        this._updateAnimationTarget(options);
        const tooltipSize = {
            width: this.width,
            height: this.height
        };
        const pt = {
            x: this.x,
            y: this.y
        };
        opacity = Math.abs(opacity) < 1e-3 ? 0 : opacity;
        const padding = helpers_segment.toPadding(options.padding);
        const hasTooltipContent = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
        if (options.enabled && hasTooltipContent) {
            ctx.save();
            ctx.globalAlpha = opacity;
            this.drawBackground(pt, ctx, tooltipSize, options);
            helpers_segment.overrideTextDirection(ctx, options.textDirection);
            pt.y += padding.top;
            this.drawTitle(pt, ctx, options);
            this.drawBody(pt, ctx, options);
            this.drawFooter(pt, ctx, options);
            helpers_segment.restoreTextDirection(ctx, options.textDirection);
            ctx.restore();
        }
    }
 getActiveElements() {
        return this._active || [];
    }
 setActiveElements(activeElements, eventPosition) {
        const lastActive = this._active;
        const active = activeElements.map(({ datasetIndex , index  })=>{
            const meta = this.chart.getDatasetMeta(datasetIndex);
            if (!meta) {
                throw new Error('Cannot find a dataset at index ' + datasetIndex);
            }
            return {
                datasetIndex,
                element: meta.data[index],
                index
            };
        });
        const changed = !helpers_segment._elementsEqual(lastActive, active);
        const positionChanged = this._positionChanged(active, eventPosition);
        if (changed || positionChanged) {
            this._active = active;
            this._eventPosition = eventPosition;
            this._ignoreReplayEvents = true;
            this.update(true);
        }
    }
 handleEvent(e, replay, inChartArea = true) {
        if (replay && this._ignoreReplayEvents) {
            return false;
        }
        this._ignoreReplayEvents = false;
        const options = this.options;
        const lastActive = this._active || [];
        const active = this._getActiveElements(e, lastActive, replay, inChartArea);
        const positionChanged = this._positionChanged(active, e);
        const changed = replay || !helpers_segment._elementsEqual(active, lastActive) || positionChanged;
        if (changed) {
            this._active = active;
            if (options.enabled || options.external) {
                this._eventPosition = {
                    x: e.x,
                    y: e.y
                };
                this.update(true, replay);
            }
        }
        return changed;
    }
 _getActiveElements(e, lastActive, replay, inChartArea) {
        const options = this.options;
        if (e.type === 'mouseout') {
            return [];
        }
        if (!inChartArea) {
            return lastActive.filter((i)=>this.chart.data.datasets[i.datasetIndex] && this.chart.getDatasetMeta(i.datasetIndex).controller.getParsed(i.index) !== undefined);
        }
        const active = this.chart.getElementsAtEventForMode(e, options.mode, options, replay);
        if (options.reverse) {
            active.reverse();
        }
        return active;
    }
 _positionChanged(active, e) {
        const { caretX , caretY , options  } = this;
        const position = positioners[options.position].call(this, active, e);
        return position !== false && (caretX !== position.x || caretY !== position.y);
    }
}
var plugin_tooltip = {
    id: 'tooltip',
    _element: Tooltip,
    positioners,
    afterInit (chart, _args, options) {
        if (options) {
            chart.tooltip = new Tooltip({
                chart,
                options
            });
        }
    },
    beforeUpdate (chart, _args, options) {
        if (chart.tooltip) {
            chart.tooltip.initialize(options);
        }
    },
    reset (chart, _args, options) {
        if (chart.tooltip) {
            chart.tooltip.initialize(options);
        }
    },
    afterDraw (chart) {
        const tooltip = chart.tooltip;
        if (tooltip && tooltip._willRender()) {
            const args = {
                tooltip
            };
            if (chart.notifyPlugins('beforeTooltipDraw', {
                ...args,
                cancelable: true
            }) === false) {
                return;
            }
            tooltip.draw(chart.ctx);
            chart.notifyPlugins('afterTooltipDraw', args);
        }
    },
    afterEvent (chart, args) {
        if (chart.tooltip) {
            const useFinalPosition = args.replay;
            if (chart.tooltip.handleEvent(args.event, useFinalPosition, args.inChartArea)) {
                args.changed = true;
            }
        }
    },
    defaults: {
        enabled: true,
        external: null,
        position: 'average',
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleColor: '#fff',
        titleFont: {
            weight: 'bold'
        },
        titleSpacing: 2,
        titleMarginBottom: 6,
        titleAlign: 'left',
        bodyColor: '#fff',
        bodySpacing: 2,
        bodyFont: {},
        bodyAlign: 'left',
        footerColor: '#fff',
        footerSpacing: 2,
        footerMarginTop: 6,
        footerFont: {
            weight: 'bold'
        },
        footerAlign: 'left',
        padding: 6,
        caretPadding: 2,
        caretSize: 5,
        cornerRadius: 6,
        boxHeight: (ctx, opts)=>opts.bodyFont.size,
        boxWidth: (ctx, opts)=>opts.bodyFont.size,
        multiKeyBackground: '#fff',
        displayColors: true,
        boxPadding: 0,
        borderColor: 'rgba(0,0,0,0)',
        borderWidth: 0,
        animation: {
            duration: 400,
            easing: 'easeOutQuart'
        },
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'x',
                    'y',
                    'width',
                    'height',
                    'caretX',
                    'caretY'
                ]
            },
            opacity: {
                easing: 'linear',
                duration: 200
            }
        },
        callbacks: defaultCallbacks
    },
    defaultRoutes: {
        bodyFont: 'font',
        footerFont: 'font',
        titleFont: 'font'
    },
    descriptors: {
        _scriptable: (name)=>name !== 'filter' && name !== 'itemSort' && name !== 'external',
        _indexable: false,
        callbacks: {
            _scriptable: false,
            _indexable: false
        },
        animation: {
            _fallback: false
        },
        animations: {
            _fallback: 'animation'
        }
    },
    additionalOptionScopes: [
        'interaction'
    ]
};

var plugins = /*#__PURE__*/Object.freeze({
__proto__: null,
Colors: plugin_colors,
Decimation: plugin_decimation,
Filler: index,
Legend: plugin_legend,
SubTitle: plugin_subtitle,
Title: plugin_title,
Tooltip: plugin_tooltip
});

const addIfString = (labels, raw, index, addedLabels)=>{
    if (typeof raw === 'string') {
        index = labels.push(raw) - 1;
        addedLabels.unshift({
            index,
            label: raw
        });
    } else if (isNaN(raw)) {
        index = null;
    }
    return index;
};
function findOrAddLabel(labels, raw, index, addedLabels) {
    const first = labels.indexOf(raw);
    if (first === -1) {
        return addIfString(labels, raw, index, addedLabels);
    }
    const last = labels.lastIndexOf(raw);
    return first !== last ? index : first;
}
const validIndex = (index, max)=>index === null ? null : helpers_segment._limitValue(Math.round(index), 0, max);
function _getLabelForValue(value) {
    const labels = this.getLabels();
    if (value >= 0 && value < labels.length) {
        return labels[value];
    }
    return value;
}
class CategoryScale extends Scale {
    static id = 'category';
 static defaults = {
        ticks: {
            callback: _getLabelForValue
        }
    };
    constructor(cfg){
        super(cfg);
         this._startValue = undefined;
        this._valueRange = 0;
        this._addedLabels = [];
    }
    init(scaleOptions) {
        const added = this._addedLabels;
        if (added.length) {
            const labels = this.getLabels();
            for (const { index , label  } of added){
                if (labels[index] === label) {
                    labels.splice(index, 1);
                }
            }
            this._addedLabels = [];
        }
        super.init(scaleOptions);
    }
    parse(raw, index) {
        if (helpers_segment.isNullOrUndef(raw)) {
            return null;
        }
        const labels = this.getLabels();
        index = isFinite(index) && labels[index] === raw ? index : findOrAddLabel(labels, raw, helpers_segment.valueOrDefault(index, raw), this._addedLabels);
        return validIndex(index, labels.length - 1);
    }
    determineDataLimits() {
        const { minDefined , maxDefined  } = this.getUserBounds();
        let { min , max  } = this.getMinMax(true);
        if (this.options.bounds === 'ticks') {
            if (!minDefined) {
                min = 0;
            }
            if (!maxDefined) {
                max = this.getLabels().length - 1;
            }
        }
        this.min = min;
        this.max = max;
    }
    buildTicks() {
        const min = this.min;
        const max = this.max;
        const offset = this.options.offset;
        const ticks = [];
        let labels = this.getLabels();
        labels = min === 0 && max === labels.length - 1 ? labels : labels.slice(min, max + 1);
        this._valueRange = Math.max(labels.length - (offset ? 0 : 1), 1);
        this._startValue = this.min - (offset ? 0.5 : 0);
        for(let value = min; value <= max; value++){
            ticks.push({
                value
            });
        }
        return ticks;
    }
    getLabelForValue(value) {
        return _getLabelForValue.call(this, value);
    }
 configure() {
        super.configure();
        if (!this.isHorizontal()) {
            this._reversePixels = !this._reversePixels;
        }
    }
    getPixelForValue(value) {
        if (typeof value !== 'number') {
            value = this.parse(value);
        }
        return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
    }
    getPixelForTick(index) {
        const ticks = this.ticks;
        if (index < 0 || index > ticks.length - 1) {
            return null;
        }
        return this.getPixelForValue(ticks[index].value);
    }
    getValueForPixel(pixel) {
        return Math.round(this._startValue + this.getDecimalForPixel(pixel) * this._valueRange);
    }
    getBasePixel() {
        return this.bottom;
    }
}

function generateTicks$1(generationOptions, dataRange) {
    const ticks = [];
    const MIN_SPACING = 1e-14;
    const { bounds , step , min , max , precision , count , maxTicks , maxDigits , includeBounds  } = generationOptions;
    const unit = step || 1;
    const maxSpaces = maxTicks - 1;
    const { min: rmin , max: rmax  } = dataRange;
    const minDefined = !helpers_segment.isNullOrUndef(min);
    const maxDefined = !helpers_segment.isNullOrUndef(max);
    const countDefined = !helpers_segment.isNullOrUndef(count);
    const minSpacing = (rmax - rmin) / (maxDigits + 1);
    let spacing = helpers_segment.niceNum((rmax - rmin) / maxSpaces / unit) * unit;
    let factor, niceMin, niceMax, numSpaces;
    if (spacing < MIN_SPACING && !minDefined && !maxDefined) {
        return [
            {
                value: rmin
            },
            {
                value: rmax
            }
        ];
    }
    numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
    if (numSpaces > maxSpaces) {
        spacing = helpers_segment.niceNum(numSpaces * spacing / maxSpaces / unit) * unit;
    }
    if (!helpers_segment.isNullOrUndef(precision)) {
        factor = Math.pow(10, precision);
        spacing = Math.ceil(spacing * factor) / factor;
    }
    if (bounds === 'ticks') {
        niceMin = Math.floor(rmin / spacing) * spacing;
        niceMax = Math.ceil(rmax / spacing) * spacing;
    } else {
        niceMin = rmin;
        niceMax = rmax;
    }
    if (minDefined && maxDefined && step && helpers_segment.almostWhole((max - min) / step, spacing / 1000)) {
        numSpaces = Math.round(Math.min((max - min) / spacing, maxTicks));
        spacing = (max - min) / numSpaces;
        niceMin = min;
        niceMax = max;
    } else if (countDefined) {
        niceMin = minDefined ? min : niceMin;
        niceMax = maxDefined ? max : niceMax;
        numSpaces = count - 1;
        spacing = (niceMax - niceMin) / numSpaces;
    } else {
        numSpaces = (niceMax - niceMin) / spacing;
        if (helpers_segment.almostEquals(numSpaces, Math.round(numSpaces), spacing / 1000)) {
            numSpaces = Math.round(numSpaces);
        } else {
            numSpaces = Math.ceil(numSpaces);
        }
    }
    const decimalPlaces = Math.max(helpers_segment._decimalPlaces(spacing), helpers_segment._decimalPlaces(niceMin));
    factor = Math.pow(10, helpers_segment.isNullOrUndef(precision) ? decimalPlaces : precision);
    niceMin = Math.round(niceMin * factor) / factor;
    niceMax = Math.round(niceMax * factor) / factor;
    let j = 0;
    if (minDefined) {
        if (includeBounds && niceMin !== min) {
            ticks.push({
                value: min
            });
            if (niceMin < min) {
                j++;
            }
            if (helpers_segment.almostEquals(Math.round((niceMin + j * spacing) * factor) / factor, min, relativeLabelSize(min, minSpacing, generationOptions))) {
                j++;
            }
        } else if (niceMin < min) {
            j++;
        }
    }
    for(; j < numSpaces; ++j){
        const tickValue = Math.round((niceMin + j * spacing) * factor) / factor;
        if (maxDefined && tickValue > max) {
            break;
        }
        ticks.push({
            value: tickValue
        });
    }
    if (maxDefined && includeBounds && niceMax !== max) {
        if (ticks.length && helpers_segment.almostEquals(ticks[ticks.length - 1].value, max, relativeLabelSize(max, minSpacing, generationOptions))) {
            ticks[ticks.length - 1].value = max;
        } else {
            ticks.push({
                value: max
            });
        }
    } else if (!maxDefined || niceMax === max) {
        ticks.push({
            value: niceMax
        });
    }
    return ticks;
}
function relativeLabelSize(value, minSpacing, { horizontal , minRotation  }) {
    const rad = helpers_segment.toRadians(minRotation);
    const ratio = (horizontal ? Math.sin(rad) : Math.cos(rad)) || 0.001;
    const length = 0.75 * minSpacing * ('' + value).length;
    return Math.min(minSpacing / ratio, length);
}
class LinearScaleBase extends Scale {
    constructor(cfg){
        super(cfg);
         this.start = undefined;
         this.end = undefined;
         this._startValue = undefined;
         this._endValue = undefined;
        this._valueRange = 0;
    }
    parse(raw, index) {
        if (helpers_segment.isNullOrUndef(raw)) {
            return null;
        }
        if ((typeof raw === 'number' || raw instanceof Number) && !isFinite(+raw)) {
            return null;
        }
        return +raw;
    }
    handleTickRangeOptions() {
        const { beginAtZero  } = this.options;
        const { minDefined , maxDefined  } = this.getUserBounds();
        let { min , max  } = this;
        const setMin = (v)=>min = minDefined ? min : v;
        const setMax = (v)=>max = maxDefined ? max : v;
        if (beginAtZero) {
            const minSign = helpers_segment.sign(min);
            const maxSign = helpers_segment.sign(max);
            if (minSign < 0 && maxSign < 0) {
                setMax(0);
            } else if (minSign > 0 && maxSign > 0) {
                setMin(0);
            }
        }
        if (min === max) {
            let offset = max === 0 ? 1 : Math.abs(max * 0.05);
            setMax(max + offset);
            if (!beginAtZero) {
                setMin(min - offset);
            }
        }
        this.min = min;
        this.max = max;
    }
    getTickLimit() {
        const tickOpts = this.options.ticks;
        let { maxTicksLimit , stepSize  } = tickOpts;
        let maxTicks;
        if (stepSize) {
            maxTicks = Math.ceil(this.max / stepSize) - Math.floor(this.min / stepSize) + 1;
            if (maxTicks > 1000) {
                console.warn(`scales.${this.id}.ticks.stepSize: ${stepSize} would result generating up to ${maxTicks} ticks. Limiting to 1000.`);
                maxTicks = 1000;
            }
        } else {
            maxTicks = this.computeTickLimit();
            maxTicksLimit = maxTicksLimit || 11;
        }
        if (maxTicksLimit) {
            maxTicks = Math.min(maxTicksLimit, maxTicks);
        }
        return maxTicks;
    }
 computeTickLimit() {
        return Number.POSITIVE_INFINITY;
    }
    buildTicks() {
        const opts = this.options;
        const tickOpts = opts.ticks;
        let maxTicks = this.getTickLimit();
        maxTicks = Math.max(2, maxTicks);
        const numericGeneratorOptions = {
            maxTicks,
            bounds: opts.bounds,
            min: opts.min,
            max: opts.max,
            precision: tickOpts.precision,
            step: tickOpts.stepSize,
            count: tickOpts.count,
            maxDigits: this._maxDigits(),
            horizontal: this.isHorizontal(),
            minRotation: tickOpts.minRotation || 0,
            includeBounds: tickOpts.includeBounds !== false
        };
        const dataRange = this._range || this;
        const ticks = generateTicks$1(numericGeneratorOptions, dataRange);
        if (opts.bounds === 'ticks') {
            helpers_segment._setMinAndMaxByKey(ticks, this, 'value');
        }
        if (opts.reverse) {
            ticks.reverse();
            this.start = this.max;
            this.end = this.min;
        } else {
            this.start = this.min;
            this.end = this.max;
        }
        return ticks;
    }
 configure() {
        const ticks = this.ticks;
        let start = this.min;
        let end = this.max;
        super.configure();
        if (this.options.offset && ticks.length) {
            const offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
            start -= offset;
            end += offset;
        }
        this._startValue = start;
        this._endValue = end;
        this._valueRange = end - start;
    }
    getLabelForValue(value) {
        return helpers_segment.formatNumber(value, this.chart.options.locale, this.options.ticks.format);
    }
}

class LinearScale extends LinearScaleBase {
    static id = 'linear';
 static defaults = {
        ticks: {
            callback: helpers_segment.Ticks.formatters.numeric
        }
    };
    determineDataLimits() {
        const { min , max  } = this.getMinMax(true);
        this.min = helpers_segment.isNumberFinite(min) ? min : 0;
        this.max = helpers_segment.isNumberFinite(max) ? max : 1;
        this.handleTickRangeOptions();
    }
 computeTickLimit() {
        const horizontal = this.isHorizontal();
        const length = horizontal ? this.width : this.height;
        const minRotation = helpers_segment.toRadians(this.options.ticks.minRotation);
        const ratio = (horizontal ? Math.sin(minRotation) : Math.cos(minRotation)) || 0.001;
        const tickFont = this._resolveTickFontOptions(0);
        return Math.ceil(length / Math.min(40, tickFont.lineHeight / ratio));
    }
    getPixelForValue(value) {
        return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
    }
    getValueForPixel(pixel) {
        return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
    }
}

const log10Floor = (v)=>Math.floor(helpers_segment.log10(v));
const changeExponent = (v, m)=>Math.pow(10, log10Floor(v) + m);
function isMajor(tickVal) {
    const remain = tickVal / Math.pow(10, log10Floor(tickVal));
    return remain === 1;
}
function steps(min, max, rangeExp) {
    const rangeStep = Math.pow(10, rangeExp);
    const start = Math.floor(min / rangeStep);
    const end = Math.ceil(max / rangeStep);
    return end - start;
}
function startExp(min, max) {
    const range = max - min;
    let rangeExp = log10Floor(range);
    while(steps(min, max, rangeExp) > 10){
        rangeExp++;
    }
    while(steps(min, max, rangeExp) < 10){
        rangeExp--;
    }
    return Math.min(rangeExp, log10Floor(min));
}
 function generateTicks(generationOptions, { min , max  }) {
    min = helpers_segment.finiteOrDefault(generationOptions.min, min);
    const ticks = [];
    const minExp = log10Floor(min);
    let exp = startExp(min, max);
    let precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;
    const stepSize = Math.pow(10, exp);
    const base = minExp > exp ? Math.pow(10, minExp) : 0;
    const start = Math.round((min - base) * precision) / precision;
    const offset = Math.floor((min - base) / stepSize / 10) * stepSize * 10;
    let significand = Math.floor((start - offset) / Math.pow(10, exp));
    let value = helpers_segment.finiteOrDefault(generationOptions.min, Math.round((base + offset + significand * Math.pow(10, exp)) * precision) / precision);
    while(value < max){
        ticks.push({
            value,
            major: isMajor(value),
            significand
        });
        if (significand >= 10) {
            significand = significand < 15 ? 15 : 20;
        } else {
            significand++;
        }
        if (significand >= 20) {
            exp++;
            significand = 2;
            precision = exp >= 0 ? 1 : precision;
        }
        value = Math.round((base + offset + significand * Math.pow(10, exp)) * precision) / precision;
    }
    const lastTick = helpers_segment.finiteOrDefault(generationOptions.max, value);
    ticks.push({
        value: lastTick,
        major: isMajor(lastTick),
        significand
    });
    return ticks;
}
class LogarithmicScale extends Scale {
    static id = 'logarithmic';
 static defaults = {
        ticks: {
            callback: helpers_segment.Ticks.formatters.logarithmic,
            major: {
                enabled: true
            }
        }
    };
    constructor(cfg){
        super(cfg);
         this.start = undefined;
         this.end = undefined;
         this._startValue = undefined;
        this._valueRange = 0;
    }
    parse(raw, index) {
        const value = LinearScaleBase.prototype.parse.apply(this, [
            raw,
            index
        ]);
        if (value === 0) {
            this._zero = true;
            return undefined;
        }
        return helpers_segment.isNumberFinite(value) && value > 0 ? value : null;
    }
    determineDataLimits() {
        const { min , max  } = this.getMinMax(true);
        this.min = helpers_segment.isNumberFinite(min) ? Math.max(0, min) : null;
        this.max = helpers_segment.isNumberFinite(max) ? Math.max(0, max) : null;
        if (this.options.beginAtZero) {
            this._zero = true;
        }
        if (this._zero && this.min !== this._suggestedMin && !helpers_segment.isNumberFinite(this._userMin)) {
            this.min = min === changeExponent(this.min, 0) ? changeExponent(this.min, -1) : changeExponent(this.min, 0);
        }
        this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
        const { minDefined , maxDefined  } = this.getUserBounds();
        let min = this.min;
        let max = this.max;
        const setMin = (v)=>min = minDefined ? min : v;
        const setMax = (v)=>max = maxDefined ? max : v;
        if (min === max) {
            if (min <= 0) {
                setMin(1);
                setMax(10);
            } else {
                setMin(changeExponent(min, -1));
                setMax(changeExponent(max, +1));
            }
        }
        if (min <= 0) {
            setMin(changeExponent(max, -1));
        }
        if (max <= 0) {
            setMax(changeExponent(min, +1));
        }
        this.min = min;
        this.max = max;
    }
    buildTicks() {
        const opts = this.options;
        const generationOptions = {
            min: this._userMin,
            max: this._userMax
        };
        const ticks = generateTicks(generationOptions, this);
        if (opts.bounds === 'ticks') {
            helpers_segment._setMinAndMaxByKey(ticks, this, 'value');
        }
        if (opts.reverse) {
            ticks.reverse();
            this.start = this.max;
            this.end = this.min;
        } else {
            this.start = this.min;
            this.end = this.max;
        }
        return ticks;
    }
 getLabelForValue(value) {
        return value === undefined ? '0' : helpers_segment.formatNumber(value, this.chart.options.locale, this.options.ticks.format);
    }
 configure() {
        const start = this.min;
        super.configure();
        this._startValue = helpers_segment.log10(start);
        this._valueRange = helpers_segment.log10(this.max) - helpers_segment.log10(start);
    }
    getPixelForValue(value) {
        if (value === undefined || value === 0) {
            value = this.min;
        }
        if (value === null || isNaN(value)) {
            return NaN;
        }
        return this.getPixelForDecimal(value === this.min ? 0 : (helpers_segment.log10(value) - this._startValue) / this._valueRange);
    }
    getValueForPixel(pixel) {
        const decimal = this.getDecimalForPixel(pixel);
        return Math.pow(10, this._startValue + decimal * this._valueRange);
    }
}

function getTickBackdropHeight(opts) {
    const tickOpts = opts.ticks;
    if (tickOpts.display && opts.display) {
        const padding = helpers_segment.toPadding(tickOpts.backdropPadding);
        return helpers_segment.valueOrDefault(tickOpts.font && tickOpts.font.size, helpers_segment.defaults.font.size) + padding.height;
    }
    return 0;
}
function measureLabelSize(ctx, font, label) {
    label = helpers_segment.isArray(label) ? label : [
        label
    ];
    return {
        w: helpers_segment._longestText(ctx, font.string, label),
        h: label.length * font.lineHeight
    };
}
function determineLimits(angle, pos, size, min, max) {
    if (angle === min || angle === max) {
        return {
            start: pos - size / 2,
            end: pos + size / 2
        };
    } else if (angle < min || angle > max) {
        return {
            start: pos - size,
            end: pos
        };
    }
    return {
        start: pos,
        end: pos + size
    };
}
 function fitWithPointLabels(scale) {
    const orig = {
        l: scale.left + scale._padding.left,
        r: scale.right - scale._padding.right,
        t: scale.top + scale._padding.top,
        b: scale.bottom - scale._padding.bottom
    };
    const limits = Object.assign({}, orig);
    const labelSizes = [];
    const padding = [];
    const valueCount = scale._pointLabels.length;
    const pointLabelOpts = scale.options.pointLabels;
    const additionalAngle = pointLabelOpts.centerPointLabels ? helpers_segment.PI / valueCount : 0;
    for(let i = 0; i < valueCount; i++){
        const opts = pointLabelOpts.setContext(scale.getPointLabelContext(i));
        padding[i] = opts.padding;
        const pointPosition = scale.getPointPosition(i, scale.drawingArea + padding[i], additionalAngle);
        const plFont = helpers_segment.toFont(opts.font);
        const textSize = measureLabelSize(scale.ctx, plFont, scale._pointLabels[i]);
        labelSizes[i] = textSize;
        const angleRadians = helpers_segment._normalizeAngle(scale.getIndexAngle(i) + additionalAngle);
        const angle = Math.round(helpers_segment.toDegrees(angleRadians));
        const hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
        const vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);
        updateLimits(limits, orig, angleRadians, hLimits, vLimits);
    }
    scale.setCenterPoint(orig.l - limits.l, limits.r - orig.r, orig.t - limits.t, limits.b - orig.b);
    scale._pointLabelItems = buildPointLabelItems(scale, labelSizes, padding);
}
function updateLimits(limits, orig, angle, hLimits, vLimits) {
    const sin = Math.abs(Math.sin(angle));
    const cos = Math.abs(Math.cos(angle));
    let x = 0;
    let y = 0;
    if (hLimits.start < orig.l) {
        x = (orig.l - hLimits.start) / sin;
        limits.l = Math.min(limits.l, orig.l - x);
    } else if (hLimits.end > orig.r) {
        x = (hLimits.end - orig.r) / sin;
        limits.r = Math.max(limits.r, orig.r + x);
    }
    if (vLimits.start < orig.t) {
        y = (orig.t - vLimits.start) / cos;
        limits.t = Math.min(limits.t, orig.t - y);
    } else if (vLimits.end > orig.b) {
        y = (vLimits.end - orig.b) / cos;
        limits.b = Math.max(limits.b, orig.b + y);
    }
}
function createPointLabelItem(scale, index, itemOpts) {
    const outerDistance = scale.drawingArea;
    const { extra , additionalAngle , padding , size  } = itemOpts;
    const pointLabelPosition = scale.getPointPosition(index, outerDistance + extra + padding, additionalAngle);
    const angle = Math.round(helpers_segment.toDegrees(helpers_segment._normalizeAngle(pointLabelPosition.angle + helpers_segment.HALF_PI)));
    const y = yForAngle(pointLabelPosition.y, size.h, angle);
    const textAlign = getTextAlignForAngle(angle);
    const left = leftForTextAlign(pointLabelPosition.x, size.w, textAlign);
    return {
        visible: true,
        x: pointLabelPosition.x,
        y,
        textAlign,
        left,
        top: y,
        right: left + size.w,
        bottom: y + size.h
    };
}
function isNotOverlapped(item, area) {
    if (!area) {
        return true;
    }
    const { left , top , right , bottom  } = item;
    const apexesInArea = helpers_segment._isPointInArea({
        x: left,
        y: top
    }, area) || helpers_segment._isPointInArea({
        x: left,
        y: bottom
    }, area) || helpers_segment._isPointInArea({
        x: right,
        y: top
    }, area) || helpers_segment._isPointInArea({
        x: right,
        y: bottom
    }, area);
    return !apexesInArea;
}
function buildPointLabelItems(scale, labelSizes, padding) {
    const items = [];
    const valueCount = scale._pointLabels.length;
    const opts = scale.options;
    const { centerPointLabels , display  } = opts.pointLabels;
    const itemOpts = {
        extra: getTickBackdropHeight(opts) / 2,
        additionalAngle: centerPointLabels ? helpers_segment.PI / valueCount : 0
    };
    let area;
    for(let i = 0; i < valueCount; i++){
        itemOpts.padding = padding[i];
        itemOpts.size = labelSizes[i];
        const item = createPointLabelItem(scale, i, itemOpts);
        items.push(item);
        if (display === 'auto') {
            item.visible = isNotOverlapped(item, area);
            if (item.visible) {
                area = item;
            }
        }
    }
    return items;
}
function getTextAlignForAngle(angle) {
    if (angle === 0 || angle === 180) {
        return 'center';
    } else if (angle < 180) {
        return 'left';
    }
    return 'right';
}
function leftForTextAlign(x, w, align) {
    if (align === 'right') {
        x -= w;
    } else if (align === 'center') {
        x -= w / 2;
    }
    return x;
}
function yForAngle(y, h, angle) {
    if (angle === 90 || angle === 270) {
        y -= h / 2;
    } else if (angle > 270 || angle < 90) {
        y -= h;
    }
    return y;
}
function drawPointLabelBox(ctx, opts, item) {
    const { left , top , right , bottom  } = item;
    const { backdropColor  } = opts;
    if (!helpers_segment.isNullOrUndef(backdropColor)) {
        const borderRadius = helpers_segment.toTRBLCorners(opts.borderRadius);
        const padding = helpers_segment.toPadding(opts.backdropPadding);
        ctx.fillStyle = backdropColor;
        const backdropLeft = left - padding.left;
        const backdropTop = top - padding.top;
        const backdropWidth = right - left + padding.width;
        const backdropHeight = bottom - top + padding.height;
        if (Object.values(borderRadius).some((v)=>v !== 0)) {
            ctx.beginPath();
            helpers_segment.addRoundedRectPath(ctx, {
                x: backdropLeft,
                y: backdropTop,
                w: backdropWidth,
                h: backdropHeight,
                radius: borderRadius
            });
            ctx.fill();
        } else {
            ctx.fillRect(backdropLeft, backdropTop, backdropWidth, backdropHeight);
        }
    }
}
function drawPointLabels(scale, labelCount) {
    const { ctx , options: { pointLabels  }  } = scale;
    for(let i = labelCount - 1; i >= 0; i--){
        const item = scale._pointLabelItems[i];
        if (!item.visible) {
            continue;
        }
        const optsAtIndex = pointLabels.setContext(scale.getPointLabelContext(i));
        drawPointLabelBox(ctx, optsAtIndex, item);
        const plFont = helpers_segment.toFont(optsAtIndex.font);
        const { x , y , textAlign  } = item;
        helpers_segment.renderText(ctx, scale._pointLabels[i], x, y + plFont.lineHeight / 2, plFont, {
            color: optsAtIndex.color,
            textAlign: textAlign,
            textBaseline: 'middle'
        });
    }
}
function pathRadiusLine(scale, radius, circular, labelCount) {
    const { ctx  } = scale;
    if (circular) {
        ctx.arc(scale.xCenter, scale.yCenter, radius, 0, helpers_segment.TAU);
    } else {
        let pointPosition = scale.getPointPosition(0, radius);
        ctx.moveTo(pointPosition.x, pointPosition.y);
        for(let i = 1; i < labelCount; i++){
            pointPosition = scale.getPointPosition(i, radius);
            ctx.lineTo(pointPosition.x, pointPosition.y);
        }
    }
}
function drawRadiusLine(scale, gridLineOpts, radius, labelCount, borderOpts) {
    const ctx = scale.ctx;
    const circular = gridLineOpts.circular;
    const { color , lineWidth  } = gridLineOpts;
    if (!circular && !labelCount || !color || !lineWidth || radius < 0) {
        return;
    }
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.setLineDash(borderOpts.dash);
    ctx.lineDashOffset = borderOpts.dashOffset;
    ctx.beginPath();
    pathRadiusLine(scale, radius, circular, labelCount);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
}
function createPointLabelContext(parent, index, label) {
    return helpers_segment.createContext(parent, {
        label,
        index,
        type: 'pointLabel'
    });
}
class RadialLinearScale extends LinearScaleBase {
    static id = 'radialLinear';
 static defaults = {
        display: true,
        animate: true,
        position: 'chartArea',
        angleLines: {
            display: true,
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0.0
        },
        grid: {
            circular: false
        },
        startAngle: 0,
        ticks: {
            showLabelBackdrop: true,
            callback: helpers_segment.Ticks.formatters.numeric
        },
        pointLabels: {
            backdropColor: undefined,
            backdropPadding: 2,
            display: true,
            font: {
                size: 10
            },
            callback (label) {
                return label;
            },
            padding: 5,
            centerPointLabels: false
        }
    };
    static defaultRoutes = {
        'angleLines.color': 'borderColor',
        'pointLabels.color': 'color',
        'ticks.color': 'color'
    };
    static descriptors = {
        angleLines: {
            _fallback: 'grid'
        }
    };
    constructor(cfg){
        super(cfg);
         this.xCenter = undefined;
         this.yCenter = undefined;
         this.drawingArea = undefined;
         this._pointLabels = [];
        this._pointLabelItems = [];
    }
    setDimensions() {
        const padding = this._padding = helpers_segment.toPadding(getTickBackdropHeight(this.options) / 2);
        const w = this.width = this.maxWidth - padding.width;
        const h = this.height = this.maxHeight - padding.height;
        this.xCenter = Math.floor(this.left + w / 2 + padding.left);
        this.yCenter = Math.floor(this.top + h / 2 + padding.top);
        this.drawingArea = Math.floor(Math.min(w, h) / 2);
    }
    determineDataLimits() {
        const { min , max  } = this.getMinMax(false);
        this.min = helpers_segment.isNumberFinite(min) && !isNaN(min) ? min : 0;
        this.max = helpers_segment.isNumberFinite(max) && !isNaN(max) ? max : 0;
        this.handleTickRangeOptions();
    }
 computeTickLimit() {
        return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
    }
    generateTickLabels(ticks) {
        LinearScaleBase.prototype.generateTickLabels.call(this, ticks);
        this._pointLabels = this.getLabels().map((value, index)=>{
            const label = helpers_segment.callback(this.options.pointLabels.callback, [
                value,
                index
            ], this);
            return label || label === 0 ? label : '';
        }).filter((v, i)=>this.chart.getDataVisibility(i));
    }
    fit() {
        const opts = this.options;
        if (opts.display && opts.pointLabels.display) {
            fitWithPointLabels(this);
        } else {
            this.setCenterPoint(0, 0, 0, 0);
        }
    }
    setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
        this.xCenter += Math.floor((leftMovement - rightMovement) / 2);
        this.yCenter += Math.floor((topMovement - bottomMovement) / 2);
        this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(leftMovement, rightMovement, topMovement, bottomMovement));
    }
    getIndexAngle(index) {
        const angleMultiplier = helpers_segment.TAU / (this._pointLabels.length || 1);
        const startAngle = this.options.startAngle || 0;
        return helpers_segment._normalizeAngle(index * angleMultiplier + helpers_segment.toRadians(startAngle));
    }
    getDistanceFromCenterForValue(value) {
        if (helpers_segment.isNullOrUndef(value)) {
            return NaN;
        }
        const scalingFactor = this.drawingArea / (this.max - this.min);
        if (this.options.reverse) {
            return (this.max - value) * scalingFactor;
        }
        return (value - this.min) * scalingFactor;
    }
    getValueForDistanceFromCenter(distance) {
        if (helpers_segment.isNullOrUndef(distance)) {
            return NaN;
        }
        const scaledDistance = distance / (this.drawingArea / (this.max - this.min));
        return this.options.reverse ? this.max - scaledDistance : this.min + scaledDistance;
    }
    getPointLabelContext(index) {
        const pointLabels = this._pointLabels || [];
        if (index >= 0 && index < pointLabels.length) {
            const pointLabel = pointLabels[index];
            return createPointLabelContext(this.getContext(), index, pointLabel);
        }
    }
    getPointPosition(index, distanceFromCenter, additionalAngle = 0) {
        const angle = this.getIndexAngle(index) - helpers_segment.HALF_PI + additionalAngle;
        return {
            x: Math.cos(angle) * distanceFromCenter + this.xCenter,
            y: Math.sin(angle) * distanceFromCenter + this.yCenter,
            angle
        };
    }
    getPointPositionForValue(index, value) {
        return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
    }
    getBasePosition(index) {
        return this.getPointPositionForValue(index || 0, this.getBaseValue());
    }
    getPointLabelPosition(index) {
        const { left , top , right , bottom  } = this._pointLabelItems[index];
        return {
            left,
            top,
            right,
            bottom
        };
    }
 drawBackground() {
        const { backgroundColor , grid: { circular  }  } = this.options;
        if (backgroundColor) {
            const ctx = this.ctx;
            ctx.save();
            ctx.beginPath();
            pathRadiusLine(this, this.getDistanceFromCenterForValue(this._endValue), circular, this._pointLabels.length);
            ctx.closePath();
            ctx.fillStyle = backgroundColor;
            ctx.fill();
            ctx.restore();
        }
    }
 drawGrid() {
        const ctx = this.ctx;
        const opts = this.options;
        const { angleLines , grid , border  } = opts;
        const labelCount = this._pointLabels.length;
        let i, offset, position;
        if (opts.pointLabels.display) {
            drawPointLabels(this, labelCount);
        }
        if (grid.display) {
            this.ticks.forEach((tick, index)=>{
                if (index !== 0) {
                    offset = this.getDistanceFromCenterForValue(tick.value);
                    const context = this.getContext(index);
                    const optsAtIndex = grid.setContext(context);
                    const optsAtIndexBorder = border.setContext(context);
                    drawRadiusLine(this, optsAtIndex, offset, labelCount, optsAtIndexBorder);
                }
            });
        }
        if (angleLines.display) {
            ctx.save();
            for(i = labelCount - 1; i >= 0; i--){
                const optsAtIndex = angleLines.setContext(this.getPointLabelContext(i));
                const { color , lineWidth  } = optsAtIndex;
                if (!lineWidth || !color) {
                    continue;
                }
                ctx.lineWidth = lineWidth;
                ctx.strokeStyle = color;
                ctx.setLineDash(optsAtIndex.borderDash);
                ctx.lineDashOffset = optsAtIndex.borderDashOffset;
                offset = this.getDistanceFromCenterForValue(opts.ticks.reverse ? this.min : this.max);
                position = this.getPointPosition(i, offset);
                ctx.beginPath();
                ctx.moveTo(this.xCenter, this.yCenter);
                ctx.lineTo(position.x, position.y);
                ctx.stroke();
            }
            ctx.restore();
        }
    }
 drawBorder() {}
 drawLabels() {
        const ctx = this.ctx;
        const opts = this.options;
        const tickOpts = opts.ticks;
        if (!tickOpts.display) {
            return;
        }
        const startAngle = this.getIndexAngle(0);
        let offset, width;
        ctx.save();
        ctx.translate(this.xCenter, this.yCenter);
        ctx.rotate(startAngle);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        this.ticks.forEach((tick, index)=>{
            if (index === 0 && !opts.reverse) {
                return;
            }
            const optsAtIndex = tickOpts.setContext(this.getContext(index));
            const tickFont = helpers_segment.toFont(optsAtIndex.font);
            offset = this.getDistanceFromCenterForValue(this.ticks[index].value);
            if (optsAtIndex.showLabelBackdrop) {
                ctx.font = tickFont.string;
                width = ctx.measureText(tick.label).width;
                ctx.fillStyle = optsAtIndex.backdropColor;
                const padding = helpers_segment.toPadding(optsAtIndex.backdropPadding);
                ctx.fillRect(-width / 2 - padding.left, -offset - tickFont.size / 2 - padding.top, width + padding.width, tickFont.size + padding.height);
            }
            helpers_segment.renderText(ctx, tick.label, 0, -offset, tickFont, {
                color: optsAtIndex.color,
                strokeColor: optsAtIndex.textStrokeColor,
                strokeWidth: optsAtIndex.textStrokeWidth
            });
        });
        ctx.restore();
    }
 drawTitle() {}
}

const INTERVALS = {
    millisecond: {
        common: true,
        size: 1,
        steps: 1000
    },
    second: {
        common: true,
        size: 1000,
        steps: 60
    },
    minute: {
        common: true,
        size: 60000,
        steps: 60
    },
    hour: {
        common: true,
        size: 3600000,
        steps: 24
    },
    day: {
        common: true,
        size: 86400000,
        steps: 30
    },
    week: {
        common: false,
        size: 604800000,
        steps: 4
    },
    month: {
        common: true,
        size: 2.628e9,
        steps: 12
    },
    quarter: {
        common: false,
        size: 7.884e9,
        steps: 4
    },
    year: {
        common: true,
        size: 3.154e10
    }
};
 const UNITS =  /* #__PURE__ */ Object.keys(INTERVALS);
 function sorter(a, b) {
    return a - b;
}
 function parse(scale, input) {
    if (helpers_segment.isNullOrUndef(input)) {
        return null;
    }
    const adapter = scale._adapter;
    const { parser , round , isoWeekday  } = scale._parseOpts;
    let value = input;
    if (typeof parser === 'function') {
        value = parser(value);
    }
    if (!helpers_segment.isNumberFinite(value)) {
        value = typeof parser === 'string' ? adapter.parse(value,  parser) : adapter.parse(value);
    }
    if (value === null) {
        return null;
    }
    if (round) {
        value = round === 'week' && (helpers_segment.isNumber(isoWeekday) || isoWeekday === true) ? adapter.startOf(value, 'isoWeek', isoWeekday) : adapter.startOf(value, round);
    }
    return +value;
}
 function determineUnitForAutoTicks(minUnit, min, max, capacity) {
    const ilen = UNITS.length;
    for(let i = UNITS.indexOf(minUnit); i < ilen - 1; ++i){
        const interval = INTERVALS[UNITS[i]];
        const factor = interval.steps ? interval.steps : Number.MAX_SAFE_INTEGER;
        if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
            return UNITS[i];
        }
    }
    return UNITS[ilen - 1];
}
 function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
    for(let i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--){
        const unit = UNITS[i];
        if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) {
            return unit;
        }
    }
    return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
}
 function determineMajorUnit(unit) {
    for(let i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i){
        if (INTERVALS[UNITS[i]].common) {
            return UNITS[i];
        }
    }
}
 function addTick(ticks, time, timestamps) {
    if (!timestamps) {
        ticks[time] = true;
    } else if (timestamps.length) {
        const { lo , hi  } = helpers_segment._lookup(timestamps, time);
        const timestamp = timestamps[lo] >= time ? timestamps[lo] : timestamps[hi];
        ticks[timestamp] = true;
    }
}
 function setMajorTicks(scale, ticks, map, majorUnit) {
    const adapter = scale._adapter;
    const first = +adapter.startOf(ticks[0].value, majorUnit);
    const last = ticks[ticks.length - 1].value;
    let major, index;
    for(major = first; major <= last; major = +adapter.add(major, 1, majorUnit)){
        index = map[major];
        if (index >= 0) {
            ticks[index].major = true;
        }
    }
    return ticks;
}
 function ticksFromTimestamps(scale, values, majorUnit) {
    const ticks = [];
     const map = {};
    const ilen = values.length;
    let i, value;
    for(i = 0; i < ilen; ++i){
        value = values[i];
        map[value] = i;
        ticks.push({
            value,
            major: false
        });
    }
    return ilen === 0 || !majorUnit ? ticks : setMajorTicks(scale, ticks, map, majorUnit);
}
class TimeScale extends Scale {
    static id = 'time';
 static defaults = {
 bounds: 'data',
        adapters: {},
        time: {
            parser: false,
            unit: false,
            round: false,
            isoWeekday: false,
            minUnit: 'millisecond',
            displayFormats: {}
        },
        ticks: {
 source: 'auto',
            callback: false,
            major: {
                enabled: false
            }
        }
    };
 constructor(props){
        super(props);
         this._cache = {
            data: [],
            labels: [],
            all: []
        };
         this._unit = 'day';
         this._majorUnit = undefined;
        this._offsets = {};
        this._normalized = false;
        this._parseOpts = undefined;
    }
    init(scaleOpts, opts = {}) {
        const time = scaleOpts.time || (scaleOpts.time = {});
         const adapter = this._adapter = new adapters._date(scaleOpts.adapters.date);
        adapter.init(opts);
        helpers_segment.mergeIf(time.displayFormats, adapter.formats());
        this._parseOpts = {
            parser: time.parser,
            round: time.round,
            isoWeekday: time.isoWeekday
        };
        super.init(scaleOpts);
        this._normalized = opts.normalized;
    }
 parse(raw, index) {
        if (raw === undefined) {
            return null;
        }
        return parse(this, raw);
    }
    beforeLayout() {
        super.beforeLayout();
        this._cache = {
            data: [],
            labels: [],
            all: []
        };
    }
    determineDataLimits() {
        const options = this.options;
        const adapter = this._adapter;
        const unit = options.time.unit || 'day';
        let { min , max , minDefined , maxDefined  } = this.getUserBounds();
 function _applyBounds(bounds) {
            if (!minDefined && !isNaN(bounds.min)) {
                min = Math.min(min, bounds.min);
            }
            if (!maxDefined && !isNaN(bounds.max)) {
                max = Math.max(max, bounds.max);
            }
        }
        if (!minDefined || !maxDefined) {
            _applyBounds(this._getLabelBounds());
            if (options.bounds !== 'ticks' || options.ticks.source !== 'labels') {
                _applyBounds(this.getMinMax(false));
            }
        }
        min = helpers_segment.isNumberFinite(min) && !isNaN(min) ? min : +adapter.startOf(Date.now(), unit);
        max = helpers_segment.isNumberFinite(max) && !isNaN(max) ? max : +adapter.endOf(Date.now(), unit) + 1;
        this.min = Math.min(min, max - 1);
        this.max = Math.max(min + 1, max);
    }
 _getLabelBounds() {
        const arr = this.getLabelTimestamps();
        let min = Number.POSITIVE_INFINITY;
        let max = Number.NEGATIVE_INFINITY;
        if (arr.length) {
            min = arr[0];
            max = arr[arr.length - 1];
        }
        return {
            min,
            max
        };
    }
 buildTicks() {
        const options = this.options;
        const timeOpts = options.time;
        const tickOpts = options.ticks;
        const timestamps = tickOpts.source === 'labels' ? this.getLabelTimestamps() : this._generate();
        if (options.bounds === 'ticks' && timestamps.length) {
            this.min = this._userMin || timestamps[0];
            this.max = this._userMax || timestamps[timestamps.length - 1];
        }
        const min = this.min;
        const max = this.max;
        const ticks = helpers_segment._filterBetween(timestamps, min, max);
        this._unit = timeOpts.unit || (tickOpts.autoSkip ? determineUnitForAutoTicks(timeOpts.minUnit, this.min, this.max, this._getLabelCapacity(min)) : determineUnitForFormatting(this, ticks.length, timeOpts.minUnit, this.min, this.max));
        this._majorUnit = !tickOpts.major.enabled || this._unit === 'year' ? undefined : determineMajorUnit(this._unit);
        this.initOffsets(timestamps);
        if (options.reverse) {
            ticks.reverse();
        }
        return ticksFromTimestamps(this, ticks, this._majorUnit);
    }
    afterAutoSkip() {
        if (this.options.offsetAfterAutoskip) {
            this.initOffsets(this.ticks.map((tick)=>+tick.value));
        }
    }
 initOffsets(timestamps = []) {
        let start = 0;
        let end = 0;
        let first, last;
        if (this.options.offset && timestamps.length) {
            first = this.getDecimalForValue(timestamps[0]);
            if (timestamps.length === 1) {
                start = 1 - first;
            } else {
                start = (this.getDecimalForValue(timestamps[1]) - first) / 2;
            }
            last = this.getDecimalForValue(timestamps[timestamps.length - 1]);
            if (timestamps.length === 1) {
                end = last;
            } else {
                end = (last - this.getDecimalForValue(timestamps[timestamps.length - 2])) / 2;
            }
        }
        const limit = timestamps.length < 3 ? 0.5 : 0.25;
        start = helpers_segment._limitValue(start, 0, limit);
        end = helpers_segment._limitValue(end, 0, limit);
        this._offsets = {
            start,
            end,
            factor: 1 / (start + 1 + end)
        };
    }
 _generate() {
        const adapter = this._adapter;
        const min = this.min;
        const max = this.max;
        const options = this.options;
        const timeOpts = options.time;
        const minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, this._getLabelCapacity(min));
        const stepSize = helpers_segment.valueOrDefault(options.ticks.stepSize, 1);
        const weekday = minor === 'week' ? timeOpts.isoWeekday : false;
        const hasWeekday = helpers_segment.isNumber(weekday) || weekday === true;
        const ticks = {};
        let first = min;
        let time, count;
        if (hasWeekday) {
            first = +adapter.startOf(first, 'isoWeek', weekday);
        }
        first = +adapter.startOf(first, hasWeekday ? 'day' : minor);
        if (adapter.diff(max, min, minor) > 100000 * stepSize) {
            throw new Error(min + ' and ' + max + ' are too far apart with stepSize of ' + stepSize + ' ' + minor);
        }
        const timestamps = options.ticks.source === 'data' && this.getDataTimestamps();
        for(time = first, count = 0; time < max; time = +adapter.add(time, stepSize, minor), count++){
            addTick(ticks, time, timestamps);
        }
        if (time === max || options.bounds === 'ticks' || count === 1) {
            addTick(ticks, time, timestamps);
        }
        return Object.keys(ticks).sort(sorter).map((x)=>+x);
    }
 getLabelForValue(value) {
        const adapter = this._adapter;
        const timeOpts = this.options.time;
        if (timeOpts.tooltipFormat) {
            return adapter.format(value, timeOpts.tooltipFormat);
        }
        return adapter.format(value, timeOpts.displayFormats.datetime);
    }
 format(value, format) {
        const options = this.options;
        const formats = options.time.displayFormats;
        const unit = this._unit;
        const fmt = format || formats[unit];
        return this._adapter.format(value, fmt);
    }
 _tickFormatFunction(time, index, ticks, format) {
        const options = this.options;
        const formatter = options.ticks.callback;
        if (formatter) {
            return helpers_segment.callback(formatter, [
                time,
                index,
                ticks
            ], this);
        }
        const formats = options.time.displayFormats;
        const unit = this._unit;
        const majorUnit = this._majorUnit;
        const minorFormat = unit && formats[unit];
        const majorFormat = majorUnit && formats[majorUnit];
        const tick = ticks[index];
        const major = majorUnit && majorFormat && tick && tick.major;
        return this._adapter.format(time, format || (major ? majorFormat : minorFormat));
    }
 generateTickLabels(ticks) {
        let i, ilen, tick;
        for(i = 0, ilen = ticks.length; i < ilen; ++i){
            tick = ticks[i];
            tick.label = this._tickFormatFunction(tick.value, i, ticks);
        }
    }
 getDecimalForValue(value) {
        return value === null ? NaN : (value - this.min) / (this.max - this.min);
    }
 getPixelForValue(value) {
        const offsets = this._offsets;
        const pos = this.getDecimalForValue(value);
        return this.getPixelForDecimal((offsets.start + pos) * offsets.factor);
    }
 getValueForPixel(pixel) {
        const offsets = this._offsets;
        const pos = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
        return this.min + pos * (this.max - this.min);
    }
 _getLabelSize(label) {
        const ticksOpts = this.options.ticks;
        const tickLabelWidth = this.ctx.measureText(label).width;
        const angle = helpers_segment.toRadians(this.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
        const cosRotation = Math.cos(angle);
        const sinRotation = Math.sin(angle);
        const tickFontSize = this._resolveTickFontOptions(0).size;
        return {
            w: tickLabelWidth * cosRotation + tickFontSize * sinRotation,
            h: tickLabelWidth * sinRotation + tickFontSize * cosRotation
        };
    }
 _getLabelCapacity(exampleTime) {
        const timeOpts = this.options.time;
        const displayFormats = timeOpts.displayFormats;
        const format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
        const exampleLabel = this._tickFormatFunction(exampleTime, 0, ticksFromTimestamps(this, [
            exampleTime
        ], this._majorUnit), format);
        const size = this._getLabelSize(exampleLabel);
        const capacity = Math.floor(this.isHorizontal() ? this.width / size.w : this.height / size.h) - 1;
        return capacity > 0 ? capacity : 1;
    }
 getDataTimestamps() {
        let timestamps = this._cache.data || [];
        let i, ilen;
        if (timestamps.length) {
            return timestamps;
        }
        const metas = this.getMatchingVisibleMetas();
        if (this._normalized && metas.length) {
            return this._cache.data = metas[0].controller.getAllParsedValues(this);
        }
        for(i = 0, ilen = metas.length; i < ilen; ++i){
            timestamps = timestamps.concat(metas[i].controller.getAllParsedValues(this));
        }
        return this._cache.data = this.normalize(timestamps);
    }
 getLabelTimestamps() {
        const timestamps = this._cache.labels || [];
        let i, ilen;
        if (timestamps.length) {
            return timestamps;
        }
        const labels = this.getLabels();
        for(i = 0, ilen = labels.length; i < ilen; ++i){
            timestamps.push(parse(this, labels[i]));
        }
        return this._cache.labels = this._normalized ? timestamps : this.normalize(timestamps);
    }
 normalize(values) {
        return helpers_segment._arrayUnique(values.sort(sorter));
    }
}

function interpolate(table, val, reverse) {
    let lo = 0;
    let hi = table.length - 1;
    let prevSource, nextSource, prevTarget, nextTarget;
    if (reverse) {
        if (val >= table[lo].pos && val <= table[hi].pos) {
            ({ lo , hi  } = helpers_segment._lookupByKey(table, 'pos', val));
        }
        ({ pos: prevSource , time: prevTarget  } = table[lo]);
        ({ pos: nextSource , time: nextTarget  } = table[hi]);
    } else {
        if (val >= table[lo].time && val <= table[hi].time) {
            ({ lo , hi  } = helpers_segment._lookupByKey(table, 'time', val));
        }
        ({ time: prevSource , pos: prevTarget  } = table[lo]);
        ({ time: nextSource , pos: nextTarget  } = table[hi]);
    }
    const span = nextSource - prevSource;
    return span ? prevTarget + (nextTarget - prevTarget) * (val - prevSource) / span : prevTarget;
}
class TimeSeriesScale extends TimeScale {
    static id = 'timeseries';
 static defaults = TimeScale.defaults;
 constructor(props){
        super(props);
         this._table = [];
         this._minPos = undefined;
         this._tableRange = undefined;
    }
 initOffsets() {
        const timestamps = this._getTimestampsForTable();
        const table = this._table = this.buildLookupTable(timestamps);
        this._minPos = interpolate(table, this.min);
        this._tableRange = interpolate(table, this.max) - this._minPos;
        super.initOffsets(timestamps);
    }
 buildLookupTable(timestamps) {
        const { min , max  } = this;
        const items = [];
        const table = [];
        let i, ilen, prev, curr, next;
        for(i = 0, ilen = timestamps.length; i < ilen; ++i){
            curr = timestamps[i];
            if (curr >= min && curr <= max) {
                items.push(curr);
            }
        }
        if (items.length < 2) {
            return [
                {
                    time: min,
                    pos: 0
                },
                {
                    time: max,
                    pos: 1
                }
            ];
        }
        for(i = 0, ilen = items.length; i < ilen; ++i){
            next = items[i + 1];
            prev = items[i - 1];
            curr = items[i];
            if (Math.round((next + prev) / 2) !== curr) {
                table.push({
                    time: curr,
                    pos: i / (ilen - 1)
                });
            }
        }
        return table;
    }
 _generate() {
        const min = this.min;
        const max = this.max;
        let timestamps = super.getDataTimestamps();
        if (!timestamps.includes(min) || !timestamps.length) {
            timestamps.splice(0, 0, min);
        }
        if (!timestamps.includes(max) || timestamps.length === 1) {
            timestamps.push(max);
        }
        return timestamps.sort((a, b)=>a - b);
    }
 _getTimestampsForTable() {
        let timestamps = this._cache.all || [];
        if (timestamps.length) {
            return timestamps;
        }
        const data = this.getDataTimestamps();
        const label = this.getLabelTimestamps();
        if (data.length && label.length) {
            timestamps = this.normalize(data.concat(label));
        } else {
            timestamps = data.length ? data : label;
        }
        timestamps = this._cache.all = timestamps;
        return timestamps;
    }
 getDecimalForValue(value) {
        return (interpolate(this._table, value) - this._minPos) / this._tableRange;
    }
 getValueForPixel(pixel) {
        const offsets = this._offsets;
        const decimal = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
        return interpolate(this._table, decimal * this._tableRange + this._minPos, true);
    }
}

var scales = /*#__PURE__*/Object.freeze({
__proto__: null,
CategoryScale: CategoryScale,
LinearScale: LinearScale,
LogarithmicScale: LogarithmicScale,
RadialLinearScale: RadialLinearScale,
TimeScale: TimeScale,
TimeSeriesScale: TimeSeriesScale
});

const registerables = [
    controllers,
    elements,
    plugins,
    scales
];

exports.Ticks = helpers_segment.Ticks;
exports.defaults = helpers_segment.defaults;
exports.Animation = Animation;
exports.Animations = Animations;
exports.ArcElement = ArcElement;
exports.BarController = BarController;
exports.BarElement = BarElement;
exports.BasePlatform = BasePlatform;
exports.BasicPlatform = BasicPlatform;
exports.BubbleController = BubbleController;
exports.CategoryScale = CategoryScale;
exports.Chart = Chart;
exports.Colors = plugin_colors;
exports.DatasetController = DatasetController;
exports.Decimation = plugin_decimation;
exports.DomPlatform = DomPlatform;
exports.DoughnutController = DoughnutController;
exports.Element = Element;
exports.Filler = index;
exports.Interaction = Interaction;
exports.Legend = plugin_legend;
exports.LineController = LineController;
exports.LineElement = LineElement;
exports.LinearScale = LinearScale;
exports.LogarithmicScale = LogarithmicScale;
exports.PieController = PieController;
exports.PointElement = PointElement;
exports.PolarAreaController = PolarAreaController;
exports.RadarController = RadarController;
exports.RadialLinearScale = RadialLinearScale;
exports.Scale = Scale;
exports.ScatterController = ScatterController;
exports.SubTitle = plugin_subtitle;
exports.TimeScale = TimeScale;
exports.TimeSeriesScale = TimeSeriesScale;
exports.Title = plugin_title;
exports.Tooltip = plugin_tooltip;
exports._adapters = adapters;
exports._detectPlatform = _detectPlatform;
exports.animator = animator;
exports.controllers = controllers;
exports.elements = elements;
exports.layouts = layouts;
exports.plugins = plugins;
exports.registerables = registerables;
exports.registry = registry;
exports.scales = scales;


},{"./chunks/helpers.segment.cjs":7,"@kurkle/color":2}],7:[function(require,module,exports){
/*!
 * Chart.js v4.4.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */
'use strict';

var color$1 = require('@kurkle/color');

/**
 * @namespace Chart.helpers
 */ /**
 * An empty function that can be used, for example, for optional callback.
 */ function noop() {
/* noop */ }
/**
 * Returns a unique id, sequentially generated from a global variable.
 */ const uid = (()=>{
    let id = 0;
    return ()=>id++;
})();
/**
 * Returns true if `value` is neither null nor undefined, else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */ function isNullOrUndef(value) {
    return value === null || typeof value === 'undefined';
}
/**
 * Returns true if `value` is an array (including typed arrays), else returns false.
 * @param value - The value to test.
 * @function
 */ function isArray(value) {
    if (Array.isArray && Array.isArray(value)) {
        return true;
    }
    const type = Object.prototype.toString.call(value);
    if (type.slice(0, 7) === '[object' && type.slice(-6) === 'Array]') {
        return true;
    }
    return false;
}
/**
 * Returns true if `value` is an object (excluding null), else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */ function isObject(value) {
    return value !== null && Object.prototype.toString.call(value) === '[object Object]';
}
/**
 * Returns true if `value` is a finite number, else returns false
 * @param value  - The value to test.
 */ function isNumberFinite(value) {
    return (typeof value === 'number' || value instanceof Number) && isFinite(+value);
}
/**
 * Returns `value` if finite, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is not finite.
 */ function finiteOrDefault(value, defaultValue) {
    return isNumberFinite(value) ? value : defaultValue;
}
/**
 * Returns `value` if defined, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is undefined.
 */ function valueOrDefault(value, defaultValue) {
    return typeof value === 'undefined' ? defaultValue : value;
}
const toPercentage = (value, dimension)=>typeof value === 'string' && value.endsWith('%') ? parseFloat(value) / 100 : +value / dimension;
const toDimension = (value, dimension)=>typeof value === 'string' && value.endsWith('%') ? parseFloat(value) / 100 * dimension : +value;
/**
 * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
 * value returned by `fn`. If `fn` is not a function, this method returns undefined.
 * @param fn - The function to call.
 * @param args - The arguments with which `fn` should be called.
 * @param [thisArg] - The value of `this` provided for the call to `fn`.
 */ function callback(fn, args, thisArg) {
    if (fn && typeof fn.call === 'function') {
        return fn.apply(thisArg, args);
    }
}
function each(loopable, fn, thisArg, reverse) {
    let i, len, keys;
    if (isArray(loopable)) {
        len = loopable.length;
        if (reverse) {
            for(i = len - 1; i >= 0; i--){
                fn.call(thisArg, loopable[i], i);
            }
        } else {
            for(i = 0; i < len; i++){
                fn.call(thisArg, loopable[i], i);
            }
        }
    } else if (isObject(loopable)) {
        keys = Object.keys(loopable);
        len = keys.length;
        for(i = 0; i < len; i++){
            fn.call(thisArg, loopable[keys[i]], keys[i]);
        }
    }
}
/**
 * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
 * @param a0 - The array to compare
 * @param a1 - The array to compare
 * @private
 */ function _elementsEqual(a0, a1) {
    let i, ilen, v0, v1;
    if (!a0 || !a1 || a0.length !== a1.length) {
        return false;
    }
    for(i = 0, ilen = a0.length; i < ilen; ++i){
        v0 = a0[i];
        v1 = a1[i];
        if (v0.datasetIndex !== v1.datasetIndex || v0.index !== v1.index) {
            return false;
        }
    }
    return true;
}
/**
 * Returns a deep copy of `source` without keeping references on objects and arrays.
 * @param source - The value to clone.
 */ function clone(source) {
    if (isArray(source)) {
        return source.map(clone);
    }
    if (isObject(source)) {
        const target = Object.create(null);
        const keys = Object.keys(source);
        const klen = keys.length;
        let k = 0;
        for(; k < klen; ++k){
            target[keys[k]] = clone(source[keys[k]]);
        }
        return target;
    }
    return source;
}
function isValidKey(key) {
    return [
        '__proto__',
        'prototype',
        'constructor'
    ].indexOf(key) === -1;
}
/**
 * The default merger when Chart.helpers.merge is called without merger option.
 * Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
 * @private
 */ function _merger(key, target, source, options) {
    if (!isValidKey(key)) {
        return;
    }
    const tval = target[key];
    const sval = source[key];
    if (isObject(tval) && isObject(sval)) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        merge(tval, sval, options);
    } else {
        target[key] = clone(sval);
    }
}
function merge(target, source, options) {
    const sources = isArray(source) ? source : [
        source
    ];
    const ilen = sources.length;
    if (!isObject(target)) {
        return target;
    }
    options = options || {};
    const merger = options.merger || _merger;
    let current;
    for(let i = 0; i < ilen; ++i){
        current = sources[i];
        if (!isObject(current)) {
            continue;
        }
        const keys = Object.keys(current);
        for(let k = 0, klen = keys.length; k < klen; ++k){
            merger(keys[k], target, current, options);
        }
    }
    return target;
}
function mergeIf(target, source) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return merge(target, source, {
        merger: _mergerIf
    });
}
/**
 * Merges source[key] in target[key] only if target[key] is undefined.
 * @private
 */ function _mergerIf(key, target, source) {
    if (!isValidKey(key)) {
        return;
    }
    const tval = target[key];
    const sval = source[key];
    if (isObject(tval) && isObject(sval)) {
        mergeIf(tval, sval);
    } else if (!Object.prototype.hasOwnProperty.call(target, key)) {
        target[key] = clone(sval);
    }
}
/**
 * @private
 */ function _deprecated(scope, value, previous, current) {
    if (value !== undefined) {
        console.warn(scope + ': "' + previous + '" is deprecated. Please use "' + current + '" instead');
    }
}
// resolveObjectKey resolver cache
const keyResolvers = {
    // Chart.helpers.core resolveObjectKey should resolve empty key to root object
    '': (v)=>v,
    // default resolvers
    x: (o)=>o.x,
    y: (o)=>o.y
};
/**
 * @private
 */ function _splitKey(key) {
    const parts = key.split('.');
    const keys = [];
    let tmp = '';
    for (const part of parts){
        tmp += part;
        if (tmp.endsWith('\\')) {
            tmp = tmp.slice(0, -1) + '.';
        } else {
            keys.push(tmp);
            tmp = '';
        }
    }
    return keys;
}
function _getKeyResolver(key) {
    const keys = _splitKey(key);
    return (obj)=>{
        for (const k of keys){
            if (k === '') {
                break;
            }
            obj = obj && obj[k];
        }
        return obj;
    };
}
function resolveObjectKey(obj, key) {
    const resolver = keyResolvers[key] || (keyResolvers[key] = _getKeyResolver(key));
    return resolver(obj);
}
/**
 * @private
 */ function _capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
const defined = (value)=>typeof value !== 'undefined';
const isFunction = (value)=>typeof value === 'function';
// Adapted from https://stackoverflow.com/questions/31128855/comparing-ecma6-sets-for-equality#31129384
const setsEqual = (a, b)=>{
    if (a.size !== b.size) {
        return false;
    }
    for (const item of a){
        if (!b.has(item)) {
            return false;
        }
    }
    return true;
};
/**
 * @param e - The event
 * @private
 */ function _isClickEvent(e) {
    return e.type === 'mouseup' || e.type === 'click' || e.type === 'contextmenu';
}

/**
 * @alias Chart.helpers.math
 * @namespace
 */ const PI = Math.PI;
const TAU = 2 * PI;
const PITAU = TAU + PI;
const INFINITY = Number.POSITIVE_INFINITY;
const RAD_PER_DEG = PI / 180;
const HALF_PI = PI / 2;
const QUARTER_PI = PI / 4;
const TWO_THIRDS_PI = PI * 2 / 3;
const log10 = Math.log10;
const sign = Math.sign;
function almostEquals(x, y, epsilon) {
    return Math.abs(x - y) < epsilon;
}
/**
 * Implementation of the nice number algorithm used in determining where axis labels will go
 */ function niceNum(range) {
    const roundedRange = Math.round(range);
    range = almostEquals(range, roundedRange, range / 1000) ? roundedRange : range;
    const niceRange = Math.pow(10, Math.floor(log10(range)));
    const fraction = range / niceRange;
    const niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
    return niceFraction * niceRange;
}
/**
 * Returns an array of factors sorted from 1 to sqrt(value)
 * @private
 */ function _factorize(value) {
    const result = [];
    const sqrt = Math.sqrt(value);
    let i;
    for(i = 1; i < sqrt; i++){
        if (value % i === 0) {
            result.push(i);
            result.push(value / i);
        }
    }
    if (sqrt === (sqrt | 0)) {
        result.push(sqrt);
    }
    result.sort((a, b)=>a - b).pop();
    return result;
}
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function almostWhole(x, epsilon) {
    const rounded = Math.round(x);
    return rounded - epsilon <= x && rounded + epsilon >= x;
}
/**
 * @private
 */ function _setMinAndMaxByKey(array, target, property) {
    let i, ilen, value;
    for(i = 0, ilen = array.length; i < ilen; i++){
        value = array[i][property];
        if (!isNaN(value)) {
            target.min = Math.min(target.min, value);
            target.max = Math.max(target.max, value);
        }
    }
}
function toRadians(degrees) {
    return degrees * (PI / 180);
}
function toDegrees(radians) {
    return radians * (180 / PI);
}
/**
 * Returns the number of decimal places
 * i.e. the number of digits after the decimal point, of the value of this Number.
 * @param x - A number.
 * @returns The number of decimal places.
 * @private
 */ function _decimalPlaces(x) {
    if (!isNumberFinite(x)) {
        return;
    }
    let e = 1;
    let p = 0;
    while(Math.round(x * e) / e !== x){
        e *= 10;
        p++;
    }
    return p;
}
// Gets the angle from vertical upright to the point about a centre.
function getAngleFromPoint(centrePoint, anglePoint) {
    const distanceFromXCenter = anglePoint.x - centrePoint.x;
    const distanceFromYCenter = anglePoint.y - centrePoint.y;
    const radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
    let angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);
    if (angle < -0.5 * PI) {
        angle += TAU; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
    }
    return {
        angle,
        distance: radialDistanceFromCenter
    };
}
function distanceBetweenPoints(pt1, pt2) {
    return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
}
/**
 * Shortest distance between angles, in either direction.
 * @private
 */ function _angleDiff(a, b) {
    return (a - b + PITAU) % TAU - PI;
}
/**
 * Normalize angle to be between 0 and 2*PI
 * @private
 */ function _normalizeAngle(a) {
    return (a % TAU + TAU) % TAU;
}
/**
 * @private
 */ function _angleBetween(angle, start, end, sameAngleIsFullCircle) {
    const a = _normalizeAngle(angle);
    const s = _normalizeAngle(start);
    const e = _normalizeAngle(end);
    const angleToStart = _normalizeAngle(s - a);
    const angleToEnd = _normalizeAngle(e - a);
    const startToAngle = _normalizeAngle(a - s);
    const endToAngle = _normalizeAngle(a - e);
    return a === s || a === e || sameAngleIsFullCircle && s === e || angleToStart > angleToEnd && startToAngle < endToAngle;
}
/**
 * Limit `value` between `min` and `max`
 * @param value
 * @param min
 * @param max
 * @private
 */ function _limitValue(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
/**
 * @param {number} value
 * @private
 */ function _int16Range(value) {
    return _limitValue(value, -32768, 32767);
}
/**
 * @param value
 * @param start
 * @param end
 * @param [epsilon]
 * @private
 */ function _isBetween(value, start, end, epsilon = 1e-6) {
    return value >= Math.min(start, end) - epsilon && value <= Math.max(start, end) + epsilon;
}

function _lookup(table, value, cmp) {
    cmp = cmp || ((index)=>table[index] < value);
    let hi = table.length - 1;
    let lo = 0;
    let mid;
    while(hi - lo > 1){
        mid = lo + hi >> 1;
        if (cmp(mid)) {
            lo = mid;
        } else {
            hi = mid;
        }
    }
    return {
        lo,
        hi
    };
}
/**
 * Binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @param last - lookup last index
 * @private
 */ const _lookupByKey = (table, key, value, last)=>_lookup(table, value, last ? (index)=>{
        const ti = table[index][key];
        return ti < value || ti === value && table[index + 1][key] === value;
    } : (index)=>table[index][key] < value);
/**
 * Reverse binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @private
 */ const _rlookupByKey = (table, key, value)=>_lookup(table, value, (index)=>table[index][key] >= value);
/**
 * Return subset of `values` between `min` and `max` inclusive.
 * Values are assumed to be in sorted order.
 * @param values - sorted array of values
 * @param min - min value
 * @param max - max value
 */ function _filterBetween(values, min, max) {
    let start = 0;
    let end = values.length;
    while(start < end && values[start] < min){
        start++;
    }
    while(end > start && values[end - 1] > max){
        end--;
    }
    return start > 0 || end < values.length ? values.slice(start, end) : values;
}
const arrayEvents = [
    'push',
    'pop',
    'shift',
    'splice',
    'unshift'
];
function listenArrayEvents(array, listener) {
    if (array._chartjs) {
        array._chartjs.listeners.push(listener);
        return;
    }
    Object.defineProperty(array, '_chartjs', {
        configurable: true,
        enumerable: false,
        value: {
            listeners: [
                listener
            ]
        }
    });
    arrayEvents.forEach((key)=>{
        const method = '_onData' + _capitalize(key);
        const base = array[key];
        Object.defineProperty(array, key, {
            configurable: true,
            enumerable: false,
            value (...args) {
                const res = base.apply(this, args);
                array._chartjs.listeners.forEach((object)=>{
                    if (typeof object[method] === 'function') {
                        object[method](...args);
                    }
                });
                return res;
            }
        });
    });
}
function unlistenArrayEvents(array, listener) {
    const stub = array._chartjs;
    if (!stub) {
        return;
    }
    const listeners = stub.listeners;
    const index = listeners.indexOf(listener);
    if (index !== -1) {
        listeners.splice(index, 1);
    }
    if (listeners.length > 0) {
        return;
    }
    arrayEvents.forEach((key)=>{
        delete array[key];
    });
    delete array._chartjs;
}
/**
 * @param items
 */ function _arrayUnique(items) {
    const set = new Set(items);
    if (set.size === items.length) {
        return items;
    }
    return Array.from(set);
}

function fontString(pixelSize, fontStyle, fontFamily) {
    return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
}
/**
* Request animation polyfill
*/ const requestAnimFrame = function() {
    if (typeof window === 'undefined') {
        return function(callback) {
            return callback();
        };
    }
    return window.requestAnimationFrame;
}();
/**
 * Throttles calling `fn` once per animation frame
 * Latest arguments are used on the actual call
 */ function throttled(fn, thisArg) {
    let argsToUse = [];
    let ticking = false;
    return function(...args) {
        // Save the args for use later
        argsToUse = args;
        if (!ticking) {
            ticking = true;
            requestAnimFrame.call(window, ()=>{
                ticking = false;
                fn.apply(thisArg, argsToUse);
            });
        }
    };
}
/**
 * Debounces calling `fn` for `delay` ms
 */ function debounce(fn, delay) {
    let timeout;
    return function(...args) {
        if (delay) {
            clearTimeout(timeout);
            timeout = setTimeout(fn, delay, args);
        } else {
            fn.apply(this, args);
        }
        return delay;
    };
}
/**
 * Converts 'start' to 'left', 'end' to 'right' and others to 'center'
 * @private
 */ const _toLeftRightCenter = (align)=>align === 'start' ? 'left' : align === 'end' ? 'right' : 'center';
/**
 * Returns `start`, `end` or `(start + end) / 2` depending on `align`. Defaults to `center`
 * @private
 */ const _alignStartEnd = (align, start, end)=>align === 'start' ? start : align === 'end' ? end : (start + end) / 2;
/**
 * Returns `left`, `right` or `(left + right) / 2` depending on `align`. Defaults to `left`
 * @private
 */ const _textX = (align, left, right, rtl)=>{
    const check = rtl ? 'left' : 'right';
    return align === check ? right : align === 'center' ? (left + right) / 2 : left;
};
/**
 * Return start and count of visible points.
 * @private
 */ function _getStartAndCountOfVisiblePoints(meta, points, animationsDisabled) {
    const pointCount = points.length;
    let start = 0;
    let count = pointCount;
    if (meta._sorted) {
        const { iScale , _parsed  } = meta;
        const axis = iScale.axis;
        const { min , max , minDefined , maxDefined  } = iScale.getUserBounds();
        if (minDefined) {
            start = _limitValue(Math.min(// @ts-expect-error Need to type _parsed
            _lookupByKey(_parsed, axis, min).lo, // @ts-expect-error Need to fix types on _lookupByKey
            animationsDisabled ? pointCount : _lookupByKey(points, axis, iScale.getPixelForValue(min)).lo), 0, pointCount - 1);
        }
        if (maxDefined) {
            count = _limitValue(Math.max(// @ts-expect-error Need to type _parsed
            _lookupByKey(_parsed, iScale.axis, max, true).hi + 1, // @ts-expect-error Need to fix types on _lookupByKey
            animationsDisabled ? 0 : _lookupByKey(points, axis, iScale.getPixelForValue(max), true).hi + 1), start, pointCount) - start;
        } else {
            count = pointCount - start;
        }
    }
    return {
        start,
        count
    };
}
/**
 * Checks if the scale ranges have changed.
 * @param {object} meta - dataset meta.
 * @returns {boolean}
 * @private
 */ function _scaleRangesChanged(meta) {
    const { xScale , yScale , _scaleRanges  } = meta;
    const newRanges = {
        xmin: xScale.min,
        xmax: xScale.max,
        ymin: yScale.min,
        ymax: yScale.max
    };
    if (!_scaleRanges) {
        meta._scaleRanges = newRanges;
        return true;
    }
    const changed = _scaleRanges.xmin !== xScale.min || _scaleRanges.xmax !== xScale.max || _scaleRanges.ymin !== yScale.min || _scaleRanges.ymax !== yScale.max;
    Object.assign(_scaleRanges, newRanges);
    return changed;
}

const atEdge = (t)=>t === 0 || t === 1;
const elasticIn = (t, s, p)=>-(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * TAU / p));
const elasticOut = (t, s, p)=>Math.pow(2, -10 * t) * Math.sin((t - s) * TAU / p) + 1;
/**
 * Easing functions adapted from Robert Penner's easing equations.
 * @namespace Chart.helpers.easing.effects
 * @see http://www.robertpenner.com/easing/
 */ const effects = {
    linear: (t)=>t,
    easeInQuad: (t)=>t * t,
    easeOutQuad: (t)=>-t * (t - 2),
    easeInOutQuad: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
    easeInCubic: (t)=>t * t * t,
    easeOutCubic: (t)=>(t -= 1) * t * t + 1,
    easeInOutCubic: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
    easeInQuart: (t)=>t * t * t * t,
    easeOutQuart: (t)=>-((t -= 1) * t * t * t - 1),
    easeInOutQuart: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
    easeInQuint: (t)=>t * t * t * t * t,
    easeOutQuint: (t)=>(t -= 1) * t * t * t * t + 1,
    easeInOutQuint: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2),
    easeInSine: (t)=>-Math.cos(t * HALF_PI) + 1,
    easeOutSine: (t)=>Math.sin(t * HALF_PI),
    easeInOutSine: (t)=>-0.5 * (Math.cos(PI * t) - 1),
    easeInExpo: (t)=>t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
    easeOutExpo: (t)=>t === 1 ? 1 : -Math.pow(2, -10 * t) + 1,
    easeInOutExpo: (t)=>atEdge(t) ? t : t < 0.5 ? 0.5 * Math.pow(2, 10 * (t * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
    easeInCirc: (t)=>t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
    easeOutCirc: (t)=>Math.sqrt(1 - (t -= 1) * t),
    easeInOutCirc: (t)=>(t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
    easeInElastic: (t)=>atEdge(t) ? t : elasticIn(t, 0.075, 0.3),
    easeOutElastic: (t)=>atEdge(t) ? t : elasticOut(t, 0.075, 0.3),
    easeInOutElastic (t) {
        const s = 0.1125;
        const p = 0.45;
        return atEdge(t) ? t : t < 0.5 ? 0.5 * elasticIn(t * 2, s, p) : 0.5 + 0.5 * elasticOut(t * 2 - 1, s, p);
    },
    easeInBack (t) {
        const s = 1.70158;
        return t * t * ((s + 1) * t - s);
    },
    easeOutBack (t) {
        const s = 1.70158;
        return (t -= 1) * t * ((s + 1) * t + s) + 1;
    },
    easeInOutBack (t) {
        let s = 1.70158;
        if ((t /= 0.5) < 1) {
            return 0.5 * (t * t * (((s *= 1.525) + 1) * t - s));
        }
        return 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
    },
    easeInBounce: (t)=>1 - effects.easeOutBounce(1 - t),
    easeOutBounce (t) {
        const m = 7.5625;
        const d = 2.75;
        if (t < 1 / d) {
            return m * t * t;
        }
        if (t < 2 / d) {
            return m * (t -= 1.5 / d) * t + 0.75;
        }
        if (t < 2.5 / d) {
            return m * (t -= 2.25 / d) * t + 0.9375;
        }
        return m * (t -= 2.625 / d) * t + 0.984375;
    },
    easeInOutBounce: (t)=>t < 0.5 ? effects.easeInBounce(t * 2) * 0.5 : effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5
};

function isPatternOrGradient(value) {
    if (value && typeof value === 'object') {
        const type = value.toString();
        return type === '[object CanvasPattern]' || type === '[object CanvasGradient]';
    }
    return false;
}
function color(value) {
    return isPatternOrGradient(value) ? value : new color$1.Color(value);
}
function getHoverColor(value) {
    return isPatternOrGradient(value) ? value : new color$1.Color(value).saturate(0.5).darken(0.1).hexString();
}

const numbers = [
    'x',
    'y',
    'borderWidth',
    'radius',
    'tension'
];
const colors = [
    'color',
    'borderColor',
    'backgroundColor'
];
function applyAnimationsDefaults(defaults) {
    defaults.set('animation', {
        delay: undefined,
        duration: 1000,
        easing: 'easeOutQuart',
        fn: undefined,
        from: undefined,
        loop: undefined,
        to: undefined,
        type: undefined
    });
    defaults.describe('animation', {
        _fallback: false,
        _indexable: false,
        _scriptable: (name)=>name !== 'onProgress' && name !== 'onComplete' && name !== 'fn'
    });
    defaults.set('animations', {
        colors: {
            type: 'color',
            properties: colors
        },
        numbers: {
            type: 'number',
            properties: numbers
        }
    });
    defaults.describe('animations', {
        _fallback: 'animation'
    });
    defaults.set('transitions', {
        active: {
            animation: {
                duration: 400
            }
        },
        resize: {
            animation: {
                duration: 0
            }
        },
        show: {
            animations: {
                colors: {
                    from: 'transparent'
                },
                visible: {
                    type: 'boolean',
                    duration: 0
                }
            }
        },
        hide: {
            animations: {
                colors: {
                    to: 'transparent'
                },
                visible: {
                    type: 'boolean',
                    easing: 'linear',
                    fn: (v)=>v | 0
                }
            }
        }
    });
}

function applyLayoutsDefaults(defaults) {
    defaults.set('layout', {
        autoPadding: true,
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    });
}

const intlCache = new Map();
function getNumberFormat(locale, options) {
    options = options || {};
    const cacheKey = locale + JSON.stringify(options);
    let formatter = intlCache.get(cacheKey);
    if (!formatter) {
        formatter = new Intl.NumberFormat(locale, options);
        intlCache.set(cacheKey, formatter);
    }
    return formatter;
}
function formatNumber(num, locale, options) {
    return getNumberFormat(locale, options).format(num);
}

const formatters = {
 values (value) {
        return isArray(value) ?  value : '' + value;
    },
 numeric (tickValue, index, ticks) {
        if (tickValue === 0) {
            return '0';
        }
        const locale = this.chart.options.locale;
        let notation;
        let delta = tickValue;
        if (ticks.length > 1) {
            const maxTick = Math.max(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));
            if (maxTick < 1e-4 || maxTick > 1e+15) {
                notation = 'scientific';
            }
            delta = calculateDelta(tickValue, ticks);
        }
        const logDelta = log10(Math.abs(delta));
        const numDecimal = isNaN(logDelta) ? 1 : Math.max(Math.min(-1 * Math.floor(logDelta), 20), 0);
        const options = {
            notation,
            minimumFractionDigits: numDecimal,
            maximumFractionDigits: numDecimal
        };
        Object.assign(options, this.options.ticks.format);
        return formatNumber(tickValue, locale, options);
    },
 logarithmic (tickValue, index, ticks) {
        if (tickValue === 0) {
            return '0';
        }
        const remain = ticks[index].significand || tickValue / Math.pow(10, Math.floor(log10(tickValue)));
        if ([
            1,
            2,
            3,
            5,
            10,
            15
        ].includes(remain) || index > 0.8 * ticks.length) {
            return formatters.numeric.call(this, tickValue, index, ticks);
        }
        return '';
    }
};
function calculateDelta(tickValue, ticks) {
    let delta = ticks.length > 3 ? ticks[2].value - ticks[1].value : ticks[1].value - ticks[0].value;
    if (Math.abs(delta) >= 1 && tickValue !== Math.floor(tickValue)) {
        delta = tickValue - Math.floor(tickValue);
    }
    return delta;
}
 var Ticks = {
    formatters
};

function applyScaleDefaults(defaults) {
    defaults.set('scale', {
        display: true,
        offset: false,
        reverse: false,
        beginAtZero: false,
 bounds: 'ticks',
        clip: true,
 grace: 0,
        grid: {
            display: true,
            lineWidth: 1,
            drawOnChartArea: true,
            drawTicks: true,
            tickLength: 8,
            tickWidth: (_ctx, options)=>options.lineWidth,
            tickColor: (_ctx, options)=>options.color,
            offset: false
        },
        border: {
            display: true,
            dash: [],
            dashOffset: 0.0,
            width: 1
        },
        title: {
            display: false,
            text: '',
            padding: {
                top: 4,
                bottom: 4
            }
        },
        ticks: {
            minRotation: 0,
            maxRotation: 50,
            mirror: false,
            textStrokeWidth: 0,
            textStrokeColor: '',
            padding: 3,
            display: true,
            autoSkip: true,
            autoSkipPadding: 3,
            labelOffset: 0,
            callback: Ticks.formatters.values,
            minor: {},
            major: {},
            align: 'center',
            crossAlign: 'near',
            showLabelBackdrop: false,
            backdropColor: 'rgba(255, 255, 255, 0.75)',
            backdropPadding: 2
        }
    });
    defaults.route('scale.ticks', 'color', '', 'color');
    defaults.route('scale.grid', 'color', '', 'borderColor');
    defaults.route('scale.border', 'color', '', 'borderColor');
    defaults.route('scale.title', 'color', '', 'color');
    defaults.describe('scale', {
        _fallback: false,
        _scriptable: (name)=>!name.startsWith('before') && !name.startsWith('after') && name !== 'callback' && name !== 'parser',
        _indexable: (name)=>name !== 'borderDash' && name !== 'tickBorderDash' && name !== 'dash'
    });
    defaults.describe('scales', {
        _fallback: 'scale'
    });
    defaults.describe('scale.ticks', {
        _scriptable: (name)=>name !== 'backdropPadding' && name !== 'callback',
        _indexable: (name)=>name !== 'backdropPadding'
    });
}

const overrides = Object.create(null);
const descriptors = Object.create(null);
 function getScope$1(node, key) {
    if (!key) {
        return node;
    }
    const keys = key.split('.');
    for(let i = 0, n = keys.length; i < n; ++i){
        const k = keys[i];
        node = node[k] || (node[k] = Object.create(null));
    }
    return node;
}
function set(root, scope, values) {
    if (typeof scope === 'string') {
        return merge(getScope$1(root, scope), values);
    }
    return merge(getScope$1(root, ''), scope);
}
 class Defaults {
    constructor(_descriptors, _appliers){
        this.animation = undefined;
        this.backgroundColor = 'rgba(0,0,0,0.1)';
        this.borderColor = 'rgba(0,0,0,0.1)';
        this.color = '#666';
        this.datasets = {};
        this.devicePixelRatio = (context)=>context.chart.platform.getDevicePixelRatio();
        this.elements = {};
        this.events = [
            'mousemove',
            'mouseout',
            'click',
            'touchstart',
            'touchmove'
        ];
        this.font = {
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            size: 12,
            style: 'normal',
            lineHeight: 1.2,
            weight: null
        };
        this.hover = {};
        this.hoverBackgroundColor = (ctx, options)=>getHoverColor(options.backgroundColor);
        this.hoverBorderColor = (ctx, options)=>getHoverColor(options.borderColor);
        this.hoverColor = (ctx, options)=>getHoverColor(options.color);
        this.indexAxis = 'x';
        this.interaction = {
            mode: 'nearest',
            intersect: true,
            includeInvisible: false
        };
        this.maintainAspectRatio = true;
        this.onHover = null;
        this.onClick = null;
        this.parsing = true;
        this.plugins = {};
        this.responsive = true;
        this.scale = undefined;
        this.scales = {};
        this.showLine = true;
        this.drawActiveElementsOnTop = true;
        this.describe(_descriptors);
        this.apply(_appliers);
    }
 set(scope, values) {
        return set(this, scope, values);
    }
 get(scope) {
        return getScope$1(this, scope);
    }
 describe(scope, values) {
        return set(descriptors, scope, values);
    }
    override(scope, values) {
        return set(overrides, scope, values);
    }
 route(scope, name, targetScope, targetName) {
        const scopeObject = getScope$1(this, scope);
        const targetScopeObject = getScope$1(this, targetScope);
        const privateName = '_' + name;
        Object.defineProperties(scopeObject, {
            [privateName]: {
                value: scopeObject[name],
                writable: true
            },
            [name]: {
                enumerable: true,
                get () {
                    const local = this[privateName];
                    const target = targetScopeObject[targetName];
                    if (isObject(local)) {
                        return Object.assign({}, target, local);
                    }
                    return valueOrDefault(local, target);
                },
                set (value) {
                    this[privateName] = value;
                }
            }
        });
    }
    apply(appliers) {
        appliers.forEach((apply)=>apply(this));
    }
}
var defaults = /* #__PURE__ */ new Defaults({
    _scriptable: (name)=>!name.startsWith('on'),
    _indexable: (name)=>name !== 'events',
    hover: {
        _fallback: 'interaction'
    },
    interaction: {
        _scriptable: false,
        _indexable: false
    }
}, [
    applyAnimationsDefaults,
    applyLayoutsDefaults,
    applyScaleDefaults
]);

/**
 * Converts the given font object into a CSS font string.
 * @param font - A font object.
 * @return The CSS font string. See https://developer.mozilla.org/en-US/docs/Web/CSS/font
 * @private
 */ function toFontString(font) {
    if (!font || isNullOrUndef(font.size) || isNullOrUndef(font.family)) {
        return null;
    }
    return (font.style ? font.style + ' ' : '') + (font.weight ? font.weight + ' ' : '') + font.size + 'px ' + font.family;
}
/**
 * @private
 */ function _measureText(ctx, data, gc, longest, string) {
    let textWidth = data[string];
    if (!textWidth) {
        textWidth = data[string] = ctx.measureText(string).width;
        gc.push(string);
    }
    if (textWidth > longest) {
        longest = textWidth;
    }
    return longest;
}
/**
 * @private
 */ // eslint-disable-next-line complexity
function _longestText(ctx, font, arrayOfThings, cache) {
    cache = cache || {};
    let data = cache.data = cache.data || {};
    let gc = cache.garbageCollect = cache.garbageCollect || [];
    if (cache.font !== font) {
        data = cache.data = {};
        gc = cache.garbageCollect = [];
        cache.font = font;
    }
    ctx.save();
    ctx.font = font;
    let longest = 0;
    const ilen = arrayOfThings.length;
    let i, j, jlen, thing, nestedThing;
    for(i = 0; i < ilen; i++){
        thing = arrayOfThings[i];
        // Undefined strings and arrays should not be measured
        if (thing !== undefined && thing !== null && !isArray(thing)) {
            longest = _measureText(ctx, data, gc, longest, thing);
        } else if (isArray(thing)) {
            // if it is an array lets measure each element
            // to do maybe simplify this function a bit so we can do this more recursively?
            for(j = 0, jlen = thing.length; j < jlen; j++){
                nestedThing = thing[j];
                // Undefined strings and arrays should not be measured
                if (nestedThing !== undefined && nestedThing !== null && !isArray(nestedThing)) {
                    longest = _measureText(ctx, data, gc, longest, nestedThing);
                }
            }
        }
    }
    ctx.restore();
    const gcLen = gc.length / 2;
    if (gcLen > arrayOfThings.length) {
        for(i = 0; i < gcLen; i++){
            delete data[gc[i]];
        }
        gc.splice(0, gcLen);
    }
    return longest;
}
/**
 * Returns the aligned pixel value to avoid anti-aliasing blur
 * @param chart - The chart instance.
 * @param pixel - A pixel value.
 * @param width - The width of the element.
 * @returns The aligned pixel value.
 * @private
 */ function _alignPixel(chart, pixel, width) {
    const devicePixelRatio = chart.currentDevicePixelRatio;
    const halfWidth = width !== 0 ? Math.max(width / 2, 0.5) : 0;
    return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
}
/**
 * Clears the entire canvas.
 */ function clearCanvas(canvas, ctx) {
    ctx = ctx || canvas.getContext('2d');
    ctx.save();
    // canvas.width and canvas.height do not consider the canvas transform,
    // while clearRect does
    ctx.resetTransform();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
}
function drawPoint(ctx, options, x, y) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    drawPointLegend(ctx, options, x, y, null);
}
// eslint-disable-next-line complexity
function drawPointLegend(ctx, options, x, y, w) {
    let type, xOffset, yOffset, size, cornerRadius, width, xOffsetW, yOffsetW;
    const style = options.pointStyle;
    const rotation = options.rotation;
    const radius = options.radius;
    let rad = (rotation || 0) * RAD_PER_DEG;
    if (style && typeof style === 'object') {
        type = style.toString();
        if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rad);
            ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
            ctx.restore();
            return;
        }
    }
    if (isNaN(radius) || radius <= 0) {
        return;
    }
    ctx.beginPath();
    switch(style){
        // Default includes circle
        default:
            if (w) {
                ctx.ellipse(x, y, w / 2, radius, 0, 0, TAU);
            } else {
                ctx.arc(x, y, radius, 0, TAU);
            }
            ctx.closePath();
            break;
        case 'triangle':
            width = w ? w / 2 : radius;
            ctx.moveTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
            rad += TWO_THIRDS_PI;
            ctx.lineTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
            rad += TWO_THIRDS_PI;
            ctx.lineTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
            ctx.closePath();
            break;
        case 'rectRounded':
            // NOTE: the rounded rect implementation changed to use `arc` instead of
            // `quadraticCurveTo` since it generates better results when rect is
            // almost a circle. 0.516 (instead of 0.5) produces results with visually
            // closer proportion to the previous impl and it is inscribed in the
            // circle with `radius`. For more details, see the following PRs:
            // https://github.com/chartjs/Chart.js/issues/5597
            // https://github.com/chartjs/Chart.js/issues/5858
            cornerRadius = radius * 0.516;
            size = radius - cornerRadius;
            xOffset = Math.cos(rad + QUARTER_PI) * size;
            xOffsetW = Math.cos(rad + QUARTER_PI) * (w ? w / 2 - cornerRadius : size);
            yOffset = Math.sin(rad + QUARTER_PI) * size;
            yOffsetW = Math.sin(rad + QUARTER_PI) * (w ? w / 2 - cornerRadius : size);
            ctx.arc(x - xOffsetW, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
            ctx.arc(x + yOffsetW, y - xOffset, cornerRadius, rad - HALF_PI, rad);
            ctx.arc(x + xOffsetW, y + yOffset, cornerRadius, rad, rad + HALF_PI);
            ctx.arc(x - yOffsetW, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
            ctx.closePath();
            break;
        case 'rect':
            if (!rotation) {
                size = Math.SQRT1_2 * radius;
                width = w ? w / 2 : size;
                ctx.rect(x - width, y - size, 2 * width, 2 * size);
                break;
            }
            rad += QUARTER_PI;
        /* falls through */ case 'rectRot':
            xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
            ctx.moveTo(x - xOffsetW, y - yOffset);
            ctx.lineTo(x + yOffsetW, y - xOffset);
            ctx.lineTo(x + xOffsetW, y + yOffset);
            ctx.lineTo(x - yOffsetW, y + xOffset);
            ctx.closePath();
            break;
        case 'crossRot':
            rad += QUARTER_PI;
        /* falls through */ case 'cross':
            xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
            ctx.moveTo(x - xOffsetW, y - yOffset);
            ctx.lineTo(x + xOffsetW, y + yOffset);
            ctx.moveTo(x + yOffsetW, y - xOffset);
            ctx.lineTo(x - yOffsetW, y + xOffset);
            break;
        case 'star':
            xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
            ctx.moveTo(x - xOffsetW, y - yOffset);
            ctx.lineTo(x + xOffsetW, y + yOffset);
            ctx.moveTo(x + yOffsetW, y - xOffset);
            ctx.lineTo(x - yOffsetW, y + xOffset);
            rad += QUARTER_PI;
            xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
            ctx.moveTo(x - xOffsetW, y - yOffset);
            ctx.lineTo(x + xOffsetW, y + yOffset);
            ctx.moveTo(x + yOffsetW, y - xOffset);
            ctx.lineTo(x - yOffsetW, y + xOffset);
            break;
        case 'line':
            xOffset = w ? w / 2 : Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            ctx.moveTo(x - xOffset, y - yOffset);
            ctx.lineTo(x + xOffset, y + yOffset);
            break;
        case 'dash':
            ctx.moveTo(x, y);
            ctx.lineTo(x + Math.cos(rad) * (w ? w / 2 : radius), y + Math.sin(rad) * radius);
            break;
        case false:
            ctx.closePath();
            break;
    }
    ctx.fill();
    if (options.borderWidth > 0) {
        ctx.stroke();
    }
}
/**
 * Returns true if the point is inside the rectangle
 * @param point - The point to test
 * @param area - The rectangle
 * @param margin - allowed margin
 * @private
 */ function _isPointInArea(point, area, margin) {
    margin = margin || 0.5; // margin - default is to match rounded decimals
    return !area || point && point.x > area.left - margin && point.x < area.right + margin && point.y > area.top - margin && point.y < area.bottom + margin;
}
function clipArea(ctx, area) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
    ctx.clip();
}
function unclipArea(ctx) {
    ctx.restore();
}
/**
 * @private
 */ function _steppedLineTo(ctx, previous, target, flip, mode) {
    if (!previous) {
        return ctx.lineTo(target.x, target.y);
    }
    if (mode === 'middle') {
        const midpoint = (previous.x + target.x) / 2.0;
        ctx.lineTo(midpoint, previous.y);
        ctx.lineTo(midpoint, target.y);
    } else if (mode === 'after' !== !!flip) {
        ctx.lineTo(previous.x, target.y);
    } else {
        ctx.lineTo(target.x, previous.y);
    }
    ctx.lineTo(target.x, target.y);
}
/**
 * @private
 */ function _bezierCurveTo(ctx, previous, target, flip) {
    if (!previous) {
        return ctx.lineTo(target.x, target.y);
    }
    ctx.bezierCurveTo(flip ? previous.cp1x : previous.cp2x, flip ? previous.cp1y : previous.cp2y, flip ? target.cp2x : target.cp1x, flip ? target.cp2y : target.cp1y, target.x, target.y);
}
function setRenderOpts(ctx, opts) {
    if (opts.translation) {
        ctx.translate(opts.translation[0], opts.translation[1]);
    }
    if (!isNullOrUndef(opts.rotation)) {
        ctx.rotate(opts.rotation);
    }
    if (opts.color) {
        ctx.fillStyle = opts.color;
    }
    if (opts.textAlign) {
        ctx.textAlign = opts.textAlign;
    }
    if (opts.textBaseline) {
        ctx.textBaseline = opts.textBaseline;
    }
}
function decorateText(ctx, x, y, line, opts) {
    if (opts.strikethrough || opts.underline) {
        /**
     * Now that IE11 support has been dropped, we can use more
     * of the TextMetrics object. The actual bounding boxes
     * are unflagged in Chrome, Firefox, Edge, and Safari so they
     * can be safely used.
     * See https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics#Browser_compatibility
     */ const metrics = ctx.measureText(line);
        const left = x - metrics.actualBoundingBoxLeft;
        const right = x + metrics.actualBoundingBoxRight;
        const top = y - metrics.actualBoundingBoxAscent;
        const bottom = y + metrics.actualBoundingBoxDescent;
        const yDecoration = opts.strikethrough ? (top + bottom) / 2 : bottom;
        ctx.strokeStyle = ctx.fillStyle;
        ctx.beginPath();
        ctx.lineWidth = opts.decorationWidth || 2;
        ctx.moveTo(left, yDecoration);
        ctx.lineTo(right, yDecoration);
        ctx.stroke();
    }
}
function drawBackdrop(ctx, opts) {
    const oldColor = ctx.fillStyle;
    ctx.fillStyle = opts.color;
    ctx.fillRect(opts.left, opts.top, opts.width, opts.height);
    ctx.fillStyle = oldColor;
}
/**
 * Render text onto the canvas
 */ function renderText(ctx, text, x, y, font, opts = {}) {
    const lines = isArray(text) ? text : [
        text
    ];
    const stroke = opts.strokeWidth > 0 && opts.strokeColor !== '';
    let i, line;
    ctx.save();
    ctx.font = font.string;
    setRenderOpts(ctx, opts);
    for(i = 0; i < lines.length; ++i){
        line = lines[i];
        if (opts.backdrop) {
            drawBackdrop(ctx, opts.backdrop);
        }
        if (stroke) {
            if (opts.strokeColor) {
                ctx.strokeStyle = opts.strokeColor;
            }
            if (!isNullOrUndef(opts.strokeWidth)) {
                ctx.lineWidth = opts.strokeWidth;
            }
            ctx.strokeText(line, x, y, opts.maxWidth);
        }
        ctx.fillText(line, x, y, opts.maxWidth);
        decorateText(ctx, x, y, line, opts);
        y += Number(font.lineHeight);
    }
    ctx.restore();
}
/**
 * Add a path of a rectangle with rounded corners to the current sub-path
 * @param ctx - Context
 * @param rect - Bounding rect
 */ function addRoundedRectPath(ctx, rect) {
    const { x , y , w , h , radius  } = rect;
    // top left arc
    ctx.arc(x + radius.topLeft, y + radius.topLeft, radius.topLeft, 1.5 * PI, PI, true);
    // line from top left to bottom left
    ctx.lineTo(x, y + h - radius.bottomLeft);
    // bottom left arc
    ctx.arc(x + radius.bottomLeft, y + h - radius.bottomLeft, radius.bottomLeft, PI, HALF_PI, true);
    // line from bottom left to bottom right
    ctx.lineTo(x + w - radius.bottomRight, y + h);
    // bottom right arc
    ctx.arc(x + w - radius.bottomRight, y + h - radius.bottomRight, radius.bottomRight, HALF_PI, 0, true);
    // line from bottom right to top right
    ctx.lineTo(x + w, y + radius.topRight);
    // top right arc
    ctx.arc(x + w - radius.topRight, y + radius.topRight, radius.topRight, 0, -HALF_PI, true);
    // line from top right to top left
    ctx.lineTo(x + radius.topLeft, y);
}

const LINE_HEIGHT = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/;
const FONT_STYLE = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
/**
 * @alias Chart.helpers.options
 * @namespace
 */ /**
 * Converts the given line height `value` in pixels for a specific font `size`.
 * @param value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
 * @param size - The font size (in pixels) used to resolve relative `value`.
 * @returns The effective line height in pixels (size * 1.2 if value is invalid).
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
 * @since 2.7.0
 */ function toLineHeight(value, size) {
    const matches = ('' + value).match(LINE_HEIGHT);
    if (!matches || matches[1] === 'normal') {
        return size * 1.2;
    }
    value = +matches[2];
    switch(matches[3]){
        case 'px':
            return value;
        case '%':
            value /= 100;
            break;
    }
    return size * value;
}
const numberOrZero = (v)=>+v || 0;
function _readValueToProps(value, props) {
    const ret = {};
    const objProps = isObject(props);
    const keys = objProps ? Object.keys(props) : props;
    const read = isObject(value) ? objProps ? (prop)=>valueOrDefault(value[prop], value[props[prop]]) : (prop)=>value[prop] : ()=>value;
    for (const prop of keys){
        ret[prop] = numberOrZero(read(prop));
    }
    return ret;
}
/**
 * Converts the given value into a TRBL object.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left)
 * @since 3.0.0
 */ function toTRBL(value) {
    return _readValueToProps(value, {
        top: 'y',
        right: 'x',
        bottom: 'y',
        left: 'x'
    });
}
/**
 * Converts the given value into a TRBL corners object (similar with css border-radius).
 * @param value - If a number, set the value to all TRBL corner components,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 * @returns The TRBL corner values (topLeft, topRight, bottomLeft, bottomRight)
 * @since 3.0.0
 */ function toTRBLCorners(value) {
    return _readValueToProps(value, [
        'topLeft',
        'topRight',
        'bottomLeft',
        'bottomRight'
    ]);
}
/**
 * Converts the given value into a padding object with pre-computed width/height.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left, width, height)
 * @since 2.7.0
 */ function toPadding(value) {
    const obj = toTRBL(value);
    obj.width = obj.left + obj.right;
    obj.height = obj.top + obj.bottom;
    return obj;
}
/**
 * Parses font options and returns the font object.
 * @param options - A object that contains font options to be parsed.
 * @param fallback - A object that contains fallback font options.
 * @return The font object.
 * @private
 */ function toFont(options, fallback) {
    options = options || {};
    fallback = fallback || defaults.font;
    let size = valueOrDefault(options.size, fallback.size);
    if (typeof size === 'string') {
        size = parseInt(size, 10);
    }
    let style = valueOrDefault(options.style, fallback.style);
    if (style && !('' + style).match(FONT_STYLE)) {
        console.warn('Invalid font style specified: "' + style + '"');
        style = undefined;
    }
    const font = {
        family: valueOrDefault(options.family, fallback.family),
        lineHeight: toLineHeight(valueOrDefault(options.lineHeight, fallback.lineHeight), size),
        size,
        style,
        weight: valueOrDefault(options.weight, fallback.weight),
        string: ''
    };
    font.string = toFontString(font);
    return font;
}
/**
 * Evaluates the given `inputs` sequentially and returns the first defined value.
 * @param inputs - An array of values, falling back to the last value.
 * @param context - If defined and the current value is a function, the value
 * is called with `context` as first argument and the result becomes the new input.
 * @param index - If defined and the current value is an array, the value
 * at `index` become the new input.
 * @param info - object to return information about resolution in
 * @param info.cacheable - Will be set to `false` if option is not cacheable.
 * @since 2.7.0
 */ function resolve(inputs, context, index, info) {
    let cacheable = true;
    let i, ilen, value;
    for(i = 0, ilen = inputs.length; i < ilen; ++i){
        value = inputs[i];
        if (value === undefined) {
            continue;
        }
        if (context !== undefined && typeof value === 'function') {
            value = value(context);
            cacheable = false;
        }
        if (index !== undefined && isArray(value)) {
            value = value[index % value.length];
            cacheable = false;
        }
        if (value !== undefined) {
            if (info && !cacheable) {
                info.cacheable = false;
            }
            return value;
        }
    }
}
/**
 * @param minmax
 * @param grace
 * @param beginAtZero
 * @private
 */ function _addGrace(minmax, grace, beginAtZero) {
    const { min , max  } = minmax;
    const change = toDimension(grace, (max - min) / 2);
    const keepZero = (value, add)=>beginAtZero && value === 0 ? 0 : value + add;
    return {
        min: keepZero(min, -Math.abs(change)),
        max: keepZero(max, change)
    };
}
function createContext(parentContext, context) {
    return Object.assign(Object.create(parentContext), context);
}

/**
 * Creates a Proxy for resolving raw values for options.
 * @param scopes - The option scopes to look for values, in resolution order
 * @param prefixes - The prefixes for values, in resolution order.
 * @param rootScopes - The root option scopes
 * @param fallback - Parent scopes fallback
 * @param getTarget - callback for getting the target for changed values
 * @returns Proxy
 * @private
 */ function _createResolver(scopes, prefixes = [
    ''
], rootScopes, fallback, getTarget = ()=>scopes[0]) {
    const finalRootScopes = rootScopes || scopes;
    if (typeof fallback === 'undefined') {
        fallback = _resolve('_fallback', scopes);
    }
    const cache = {
        [Symbol.toStringTag]: 'Object',
        _cacheable: true,
        _scopes: scopes,
        _rootScopes: finalRootScopes,
        _fallback: fallback,
        _getTarget: getTarget,
        override: (scope)=>_createResolver([
                scope,
                ...scopes
            ], prefixes, finalRootScopes, fallback)
    };
    return new Proxy(cache, {
        /**
     * A trap for the delete operator.
     */ deleteProperty (target, prop) {
            delete target[prop]; // remove from cache
            delete target._keys; // remove cached keys
            delete scopes[0][prop]; // remove from top level scope
            return true;
        },
        /**
     * A trap for getting property values.
     */ get (target, prop) {
            return _cached(target, prop, ()=>_resolveWithPrefixes(prop, prefixes, scopes, target));
        },
        /**
     * A trap for Object.getOwnPropertyDescriptor.
     * Also used by Object.hasOwnProperty.
     */ getOwnPropertyDescriptor (target, prop) {
            return Reflect.getOwnPropertyDescriptor(target._scopes[0], prop);
        },
        /**
     * A trap for Object.getPrototypeOf.
     */ getPrototypeOf () {
            return Reflect.getPrototypeOf(scopes[0]);
        },
        /**
     * A trap for the in operator.
     */ has (target, prop) {
            return getKeysFromAllScopes(target).includes(prop);
        },
        /**
     * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
     */ ownKeys (target) {
            return getKeysFromAllScopes(target);
        },
        /**
     * A trap for setting property values.
     */ set (target, prop, value) {
            const storage = target._storage || (target._storage = getTarget());
            target[prop] = storage[prop] = value; // set to top level scope + cache
            delete target._keys; // remove cached keys
            return true;
        }
    });
}
/**
 * Returns an Proxy for resolving option values with context.
 * @param proxy - The Proxy returned by `_createResolver`
 * @param context - Context object for scriptable/indexable options
 * @param subProxy - The proxy provided for scriptable options
 * @param descriptorDefaults - Defaults for descriptors
 * @private
 */ function _attachContext(proxy, context, subProxy, descriptorDefaults) {
    const cache = {
        _cacheable: false,
        _proxy: proxy,
        _context: context,
        _subProxy: subProxy,
        _stack: new Set(),
        _descriptors: _descriptors(proxy, descriptorDefaults),
        setContext: (ctx)=>_attachContext(proxy, ctx, subProxy, descriptorDefaults),
        override: (scope)=>_attachContext(proxy.override(scope), context, subProxy, descriptorDefaults)
    };
    return new Proxy(cache, {
        /**
     * A trap for the delete operator.
     */ deleteProperty (target, prop) {
            delete target[prop]; // remove from cache
            delete proxy[prop]; // remove from proxy
            return true;
        },
        /**
     * A trap for getting property values.
     */ get (target, prop, receiver) {
            return _cached(target, prop, ()=>_resolveWithContext(target, prop, receiver));
        },
        /**
     * A trap for Object.getOwnPropertyDescriptor.
     * Also used by Object.hasOwnProperty.
     */ getOwnPropertyDescriptor (target, prop) {
            return target._descriptors.allKeys ? Reflect.has(proxy, prop) ? {
                enumerable: true,
                configurable: true
            } : undefined : Reflect.getOwnPropertyDescriptor(proxy, prop);
        },
        /**
     * A trap for Object.getPrototypeOf.
     */ getPrototypeOf () {
            return Reflect.getPrototypeOf(proxy);
        },
        /**
     * A trap for the in operator.
     */ has (target, prop) {
            return Reflect.has(proxy, prop);
        },
        /**
     * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
     */ ownKeys () {
            return Reflect.ownKeys(proxy);
        },
        /**
     * A trap for setting property values.
     */ set (target, prop, value) {
            proxy[prop] = value; // set to proxy
            delete target[prop]; // remove from cache
            return true;
        }
    });
}
/**
 * @private
 */ function _descriptors(proxy, defaults = {
    scriptable: true,
    indexable: true
}) {
    const { _scriptable =defaults.scriptable , _indexable =defaults.indexable , _allKeys =defaults.allKeys  } = proxy;
    return {
        allKeys: _allKeys,
        scriptable: _scriptable,
        indexable: _indexable,
        isScriptable: isFunction(_scriptable) ? _scriptable : ()=>_scriptable,
        isIndexable: isFunction(_indexable) ? _indexable : ()=>_indexable
    };
}
const readKey = (prefix, name)=>prefix ? prefix + _capitalize(name) : name;
const needsSubResolver = (prop, value)=>isObject(value) && prop !== 'adapters' && (Object.getPrototypeOf(value) === null || value.constructor === Object);
function _cached(target, prop, resolve) {
    if (Object.prototype.hasOwnProperty.call(target, prop)) {
        return target[prop];
    }
    const value = resolve();
    // cache the resolved value
    target[prop] = value;
    return value;
}
function _resolveWithContext(target, prop, receiver) {
    const { _proxy , _context , _subProxy , _descriptors: descriptors  } = target;
    let value = _proxy[prop]; // resolve from proxy
    // resolve with context
    if (isFunction(value) && descriptors.isScriptable(prop)) {
        value = _resolveScriptable(prop, value, target, receiver);
    }
    if (isArray(value) && value.length) {
        value = _resolveArray(prop, value, target, descriptors.isIndexable);
    }
    if (needsSubResolver(prop, value)) {
        // if the resolved value is an object, create a sub resolver for it
        value = _attachContext(value, _context, _subProxy && _subProxy[prop], descriptors);
    }
    return value;
}
function _resolveScriptable(prop, getValue, target, receiver) {
    const { _proxy , _context , _subProxy , _stack  } = target;
    if (_stack.has(prop)) {
        throw new Error('Recursion detected: ' + Array.from(_stack).join('->') + '->' + prop);
    }
    _stack.add(prop);
    let value = getValue(_context, _subProxy || receiver);
    _stack.delete(prop);
    if (needsSubResolver(prop, value)) {
        // When scriptable option returns an object, create a resolver on that.
        value = createSubResolver(_proxy._scopes, _proxy, prop, value);
    }
    return value;
}
function _resolveArray(prop, value, target, isIndexable) {
    const { _proxy , _context , _subProxy , _descriptors: descriptors  } = target;
    if (typeof _context.index !== 'undefined' && isIndexable(prop)) {
        return value[_context.index % value.length];
    } else if (isObject(value[0])) {
        // Array of objects, return array or resolvers
        const arr = value;
        const scopes = _proxy._scopes.filter((s)=>s !== arr);
        value = [];
        for (const item of arr){
            const resolver = createSubResolver(scopes, _proxy, prop, item);
            value.push(_attachContext(resolver, _context, _subProxy && _subProxy[prop], descriptors));
        }
    }
    return value;
}
function resolveFallback(fallback, prop, value) {
    return isFunction(fallback) ? fallback(prop, value) : fallback;
}
const getScope = (key, parent)=>key === true ? parent : typeof key === 'string' ? resolveObjectKey(parent, key) : undefined;
function addScopes(set, parentScopes, key, parentFallback, value) {
    for (const parent of parentScopes){
        const scope = getScope(key, parent);
        if (scope) {
            set.add(scope);
            const fallback = resolveFallback(scope._fallback, key, value);
            if (typeof fallback !== 'undefined' && fallback !== key && fallback !== parentFallback) {
                // When we reach the descriptor that defines a new _fallback, return that.
                // The fallback will resume to that new scope.
                return fallback;
            }
        } else if (scope === false && typeof parentFallback !== 'undefined' && key !== parentFallback) {
            // Fallback to `false` results to `false`, when falling back to different key.
            // For example `interaction` from `hover` or `plugins.tooltip` and `animation` from `animations`
            return null;
        }
    }
    return false;
}
function createSubResolver(parentScopes, resolver, prop, value) {
    const rootScopes = resolver._rootScopes;
    const fallback = resolveFallback(resolver._fallback, prop, value);
    const allScopes = [
        ...parentScopes,
        ...rootScopes
    ];
    const set = new Set();
    set.add(value);
    let key = addScopesFromKey(set, allScopes, prop, fallback || prop, value);
    if (key === null) {
        return false;
    }
    if (typeof fallback !== 'undefined' && fallback !== prop) {
        key = addScopesFromKey(set, allScopes, fallback, key, value);
        if (key === null) {
            return false;
        }
    }
    return _createResolver(Array.from(set), [
        ''
    ], rootScopes, fallback, ()=>subGetTarget(resolver, prop, value));
}
function addScopesFromKey(set, allScopes, key, fallback, item) {
    while(key){
        key = addScopes(set, allScopes, key, fallback, item);
    }
    return key;
}
function subGetTarget(resolver, prop, value) {
    const parent = resolver._getTarget();
    if (!(prop in parent)) {
        parent[prop] = {};
    }
    const target = parent[prop];
    if (isArray(target) && isObject(value)) {
        // For array of objects, the object is used to store updated values
        return value;
    }
    return target || {};
}
function _resolveWithPrefixes(prop, prefixes, scopes, proxy) {
    let value;
    for (const prefix of prefixes){
        value = _resolve(readKey(prefix, prop), scopes);
        if (typeof value !== 'undefined') {
            return needsSubResolver(prop, value) ? createSubResolver(scopes, proxy, prop, value) : value;
        }
    }
}
function _resolve(key, scopes) {
    for (const scope of scopes){
        if (!scope) {
            continue;
        }
        const value = scope[key];
        if (typeof value !== 'undefined') {
            return value;
        }
    }
}
function getKeysFromAllScopes(target) {
    let keys = target._keys;
    if (!keys) {
        keys = target._keys = resolveKeysFromAllScopes(target._scopes);
    }
    return keys;
}
function resolveKeysFromAllScopes(scopes) {
    const set = new Set();
    for (const scope of scopes){
        for (const key of Object.keys(scope).filter((k)=>!k.startsWith('_'))){
            set.add(key);
        }
    }
    return Array.from(set);
}
function _parseObjectDataRadialScale(meta, data, start, count) {
    const { iScale  } = meta;
    const { key ='r'  } = this._parsing;
    const parsed = new Array(count);
    let i, ilen, index, item;
    for(i = 0, ilen = count; i < ilen; ++i){
        index = i + start;
        item = data[index];
        parsed[i] = {
            r: iScale.parse(resolveObjectKey(item, key), index)
        };
    }
    return parsed;
}

const EPSILON = Number.EPSILON || 1e-14;
const getPoint = (points, i)=>i < points.length && !points[i].skip && points[i];
const getValueAxis = (indexAxis)=>indexAxis === 'x' ? 'y' : 'x';
function splineCurve(firstPoint, middlePoint, afterPoint, t) {
    // Props to Rob Spencer at scaled innovation for his post on splining between points
    // http://scaledinnovation.com/analytics/splines/aboutSplines.html
    // This function must also respect "skipped" points
    const previous = firstPoint.skip ? middlePoint : firstPoint;
    const current = middlePoint;
    const next = afterPoint.skip ? middlePoint : afterPoint;
    const d01 = distanceBetweenPoints(current, previous);
    const d12 = distanceBetweenPoints(next, current);
    let s01 = d01 / (d01 + d12);
    let s12 = d12 / (d01 + d12);
    // If all points are the same, s01 & s02 will be inf
    s01 = isNaN(s01) ? 0 : s01;
    s12 = isNaN(s12) ? 0 : s12;
    const fa = t * s01; // scaling factor for triangle Ta
    const fb = t * s12;
    return {
        previous: {
            x: current.x - fa * (next.x - previous.x),
            y: current.y - fa * (next.y - previous.y)
        },
        next: {
            x: current.x + fb * (next.x - previous.x),
            y: current.y + fb * (next.y - previous.y)
        }
    };
}
/**
 * Adjust tangents to ensure monotonic properties
 */ function monotoneAdjust(points, deltaK, mK) {
    const pointsLen = points.length;
    let alphaK, betaK, tauK, squaredMagnitude, pointCurrent;
    let pointAfter = getPoint(points, 0);
    for(let i = 0; i < pointsLen - 1; ++i){
        pointCurrent = pointAfter;
        pointAfter = getPoint(points, i + 1);
        if (!pointCurrent || !pointAfter) {
            continue;
        }
        if (almostEquals(deltaK[i], 0, EPSILON)) {
            mK[i] = mK[i + 1] = 0;
            continue;
        }
        alphaK = mK[i] / deltaK[i];
        betaK = mK[i + 1] / deltaK[i];
        squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
        if (squaredMagnitude <= 9) {
            continue;
        }
        tauK = 3 / Math.sqrt(squaredMagnitude);
        mK[i] = alphaK * tauK * deltaK[i];
        mK[i + 1] = betaK * tauK * deltaK[i];
    }
}
function monotoneCompute(points, mK, indexAxis = 'x') {
    const valueAxis = getValueAxis(indexAxis);
    const pointsLen = points.length;
    let delta, pointBefore, pointCurrent;
    let pointAfter = getPoint(points, 0);
    for(let i = 0; i < pointsLen; ++i){
        pointBefore = pointCurrent;
        pointCurrent = pointAfter;
        pointAfter = getPoint(points, i + 1);
        if (!pointCurrent) {
            continue;
        }
        const iPixel = pointCurrent[indexAxis];
        const vPixel = pointCurrent[valueAxis];
        if (pointBefore) {
            delta = (iPixel - pointBefore[indexAxis]) / 3;
            pointCurrent[`cp1${indexAxis}`] = iPixel - delta;
            pointCurrent[`cp1${valueAxis}`] = vPixel - delta * mK[i];
        }
        if (pointAfter) {
            delta = (pointAfter[indexAxis] - iPixel) / 3;
            pointCurrent[`cp2${indexAxis}`] = iPixel + delta;
            pointCurrent[`cp2${valueAxis}`] = vPixel + delta * mK[i];
        }
    }
}
/**
 * This function calculates Bézier control points in a similar way than |splineCurve|,
 * but preserves monotonicity of the provided data and ensures no local extremums are added
 * between the dataset discrete points due to the interpolation.
 * See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
 */ function splineCurveMonotone(points, indexAxis = 'x') {
    const valueAxis = getValueAxis(indexAxis);
    const pointsLen = points.length;
    const deltaK = Array(pointsLen).fill(0);
    const mK = Array(pointsLen);
    // Calculate slopes (deltaK) and initialize tangents (mK)
    let i, pointBefore, pointCurrent;
    let pointAfter = getPoint(points, 0);
    for(i = 0; i < pointsLen; ++i){
        pointBefore = pointCurrent;
        pointCurrent = pointAfter;
        pointAfter = getPoint(points, i + 1);
        if (!pointCurrent) {
            continue;
        }
        if (pointAfter) {
            const slopeDelta = pointAfter[indexAxis] - pointCurrent[indexAxis];
            // In the case of two points that appear at the same x pixel, slopeDeltaX is 0
            deltaK[i] = slopeDelta !== 0 ? (pointAfter[valueAxis] - pointCurrent[valueAxis]) / slopeDelta : 0;
        }
        mK[i] = !pointBefore ? deltaK[i] : !pointAfter ? deltaK[i - 1] : sign(deltaK[i - 1]) !== sign(deltaK[i]) ? 0 : (deltaK[i - 1] + deltaK[i]) / 2;
    }
    monotoneAdjust(points, deltaK, mK);
    monotoneCompute(points, mK, indexAxis);
}
function capControlPoint(pt, min, max) {
    return Math.max(Math.min(pt, max), min);
}
function capBezierPoints(points, area) {
    let i, ilen, point, inArea, inAreaPrev;
    let inAreaNext = _isPointInArea(points[0], area);
    for(i = 0, ilen = points.length; i < ilen; ++i){
        inAreaPrev = inArea;
        inArea = inAreaNext;
        inAreaNext = i < ilen - 1 && _isPointInArea(points[i + 1], area);
        if (!inArea) {
            continue;
        }
        point = points[i];
        if (inAreaPrev) {
            point.cp1x = capControlPoint(point.cp1x, area.left, area.right);
            point.cp1y = capControlPoint(point.cp1y, area.top, area.bottom);
        }
        if (inAreaNext) {
            point.cp2x = capControlPoint(point.cp2x, area.left, area.right);
            point.cp2y = capControlPoint(point.cp2y, area.top, area.bottom);
        }
    }
}
/**
 * @private
 */ function _updateBezierControlPoints(points, options, area, loop, indexAxis) {
    let i, ilen, point, controlPoints;
    // Only consider points that are drawn in case the spanGaps option is used
    if (options.spanGaps) {
        points = points.filter((pt)=>!pt.skip);
    }
    if (options.cubicInterpolationMode === 'monotone') {
        splineCurveMonotone(points, indexAxis);
    } else {
        let prev = loop ? points[points.length - 1] : points[0];
        for(i = 0, ilen = points.length; i < ilen; ++i){
            point = points[i];
            controlPoints = splineCurve(prev, point, points[Math.min(i + 1, ilen - (loop ? 0 : 1)) % ilen], options.tension);
            point.cp1x = controlPoints.previous.x;
            point.cp1y = controlPoints.previous.y;
            point.cp2x = controlPoints.next.x;
            point.cp2y = controlPoints.next.y;
            prev = point;
        }
    }
    if (options.capBezierPoints) {
        capBezierPoints(points, area);
    }
}

/**
 * Note: typedefs are auto-exported, so use a made-up `dom` namespace where
 * necessary to avoid duplicates with `export * from './helpers`; see
 * https://github.com/microsoft/TypeScript/issues/46011
 * @typedef { import('../core/core.controller.js').default } dom.Chart
 * @typedef { import('../../types').ChartEvent } ChartEvent
 */ /**
 * @private
 */ function _isDomSupported() {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * @private
 */ function _getParentNode(domNode) {
    let parent = domNode.parentNode;
    if (parent && parent.toString() === '[object ShadowRoot]') {
        parent = parent.host;
    }
    return parent;
}
/**
 * convert max-width/max-height values that may be percentages into a number
 * @private
 */ function parseMaxStyle(styleValue, node, parentProperty) {
    let valueInPixels;
    if (typeof styleValue === 'string') {
        valueInPixels = parseInt(styleValue, 10);
        if (styleValue.indexOf('%') !== -1) {
            // percentage * size in dimension
            valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
        }
    } else {
        valueInPixels = styleValue;
    }
    return valueInPixels;
}
const getComputedStyle = (element)=>element.ownerDocument.defaultView.getComputedStyle(element, null);
function getStyle(el, property) {
    return getComputedStyle(el).getPropertyValue(property);
}
const positions = [
    'top',
    'right',
    'bottom',
    'left'
];
function getPositionedStyle(styles, style, suffix) {
    const result = {};
    suffix = suffix ? '-' + suffix : '';
    for(let i = 0; i < 4; i++){
        const pos = positions[i];
        result[pos] = parseFloat(styles[style + '-' + pos + suffix]) || 0;
    }
    result.width = result.left + result.right;
    result.height = result.top + result.bottom;
    return result;
}
const useOffsetPos = (x, y, target)=>(x > 0 || y > 0) && (!target || !target.shadowRoot);
/**
 * @param e
 * @param canvas
 * @returns Canvas position
 */ function getCanvasPosition(e, canvas) {
    const touches = e.touches;
    const source = touches && touches.length ? touches[0] : e;
    const { offsetX , offsetY  } = source;
    let box = false;
    let x, y;
    if (useOffsetPos(offsetX, offsetY, e.target)) {
        x = offsetX;
        y = offsetY;
    } else {
        const rect = canvas.getBoundingClientRect();
        x = source.clientX - rect.left;
        y = source.clientY - rect.top;
        box = true;
    }
    return {
        x,
        y,
        box
    };
}
/**
 * Gets an event's x, y coordinates, relative to the chart area
 * @param event
 * @param chart
 * @returns x and y coordinates of the event
 */ function getRelativePosition(event, chart) {
    if ('native' in event) {
        return event;
    }
    const { canvas , currentDevicePixelRatio  } = chart;
    const style = getComputedStyle(canvas);
    const borderBox = style.boxSizing === 'border-box';
    const paddings = getPositionedStyle(style, 'padding');
    const borders = getPositionedStyle(style, 'border', 'width');
    const { x , y , box  } = getCanvasPosition(event, canvas);
    const xOffset = paddings.left + (box && borders.left);
    const yOffset = paddings.top + (box && borders.top);
    let { width , height  } = chart;
    if (borderBox) {
        width -= paddings.width + borders.width;
        height -= paddings.height + borders.height;
    }
    return {
        x: Math.round((x - xOffset) / width * canvas.width / currentDevicePixelRatio),
        y: Math.round((y - yOffset) / height * canvas.height / currentDevicePixelRatio)
    };
}
function getContainerSize(canvas, width, height) {
    let maxWidth, maxHeight;
    if (width === undefined || height === undefined) {
        const container = _getParentNode(canvas);
        if (!container) {
            width = canvas.clientWidth;
            height = canvas.clientHeight;
        } else {
            const rect = container.getBoundingClientRect(); // this is the border box of the container
            const containerStyle = getComputedStyle(container);
            const containerBorder = getPositionedStyle(containerStyle, 'border', 'width');
            const containerPadding = getPositionedStyle(containerStyle, 'padding');
            width = rect.width - containerPadding.width - containerBorder.width;
            height = rect.height - containerPadding.height - containerBorder.height;
            maxWidth = parseMaxStyle(containerStyle.maxWidth, container, 'clientWidth');
            maxHeight = parseMaxStyle(containerStyle.maxHeight, container, 'clientHeight');
        }
    }
    return {
        width,
        height,
        maxWidth: maxWidth || INFINITY,
        maxHeight: maxHeight || INFINITY
    };
}
const round1 = (v)=>Math.round(v * 10) / 10;
// eslint-disable-next-line complexity
function getMaximumSize(canvas, bbWidth, bbHeight, aspectRatio) {
    const style = getComputedStyle(canvas);
    const margins = getPositionedStyle(style, 'margin');
    const maxWidth = parseMaxStyle(style.maxWidth, canvas, 'clientWidth') || INFINITY;
    const maxHeight = parseMaxStyle(style.maxHeight, canvas, 'clientHeight') || INFINITY;
    const containerSize = getContainerSize(canvas, bbWidth, bbHeight);
    let { width , height  } = containerSize;
    if (style.boxSizing === 'content-box') {
        const borders = getPositionedStyle(style, 'border', 'width');
        const paddings = getPositionedStyle(style, 'padding');
        width -= paddings.width + borders.width;
        height -= paddings.height + borders.height;
    }
    width = Math.max(0, width - margins.width);
    height = Math.max(0, aspectRatio ? width / aspectRatio : height - margins.height);
    width = round1(Math.min(width, maxWidth, containerSize.maxWidth));
    height = round1(Math.min(height, maxHeight, containerSize.maxHeight));
    if (width && !height) {
        // https://github.com/chartjs/Chart.js/issues/4659
        // If the canvas has width, but no height, default to aspectRatio of 2 (canvas default)
        height = round1(width / 2);
    }
    const maintainHeight = bbWidth !== undefined || bbHeight !== undefined;
    if (maintainHeight && aspectRatio && containerSize.height && height > containerSize.height) {
        height = containerSize.height;
        width = round1(Math.floor(height * aspectRatio));
    }
    return {
        width,
        height
    };
}
/**
 * @param chart
 * @param forceRatio
 * @param forceStyle
 * @returns True if the canvas context size or transformation has changed.
 */ function retinaScale(chart, forceRatio, forceStyle) {
    const pixelRatio = forceRatio || 1;
    const deviceHeight = Math.floor(chart.height * pixelRatio);
    const deviceWidth = Math.floor(chart.width * pixelRatio);
    chart.height = Math.floor(chart.height);
    chart.width = Math.floor(chart.width);
    const canvas = chart.canvas;
    // If no style has been set on the canvas, the render size is used as display size,
    // making the chart visually bigger, so let's enforce it to the "correct" values.
    // See https://github.com/chartjs/Chart.js/issues/3575
    if (canvas.style && (forceStyle || !canvas.style.height && !canvas.style.width)) {
        canvas.style.height = `${chart.height}px`;
        canvas.style.width = `${chart.width}px`;
    }
    if (chart.currentDevicePixelRatio !== pixelRatio || canvas.height !== deviceHeight || canvas.width !== deviceWidth) {
        chart.currentDevicePixelRatio = pixelRatio;
        canvas.height = deviceHeight;
        canvas.width = deviceWidth;
        chart.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        return true;
    }
    return false;
}
/**
 * Detects support for options object argument in addEventListener.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 * @private
 */ const supportsEventListenerOptions = function() {
    let passiveSupported = false;
    try {
        const options = {
            get passive () {
                passiveSupported = true;
                return false;
            }
        };
        if (_isDomSupported()) {
            window.addEventListener('test', null, options);
            window.removeEventListener('test', null, options);
        }
    } catch (e) {
    // continue regardless of error
    }
    return passiveSupported;
}();
/**
 * The "used" size is the final value of a dimension property after all calculations have
 * been performed. This method uses the computed style of `element` but returns undefined
 * if the computed style is not expressed in pixels. That can happen in some cases where
 * `element` has a size relative to its parent and this last one is not yet displayed,
 * for example because of `display: none` on a parent node.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 * @returns Size in pixels or undefined if unknown.
 */ function readUsedSize(element, property) {
    const value = getStyle(element, property);
    const matches = value && value.match(/^(\d+)(\.\d+)?px$/);
    return matches ? +matches[1] : undefined;
}

/**
 * @private
 */ function _pointInLine(p1, p2, t, mode) {
    return {
        x: p1.x + t * (p2.x - p1.x),
        y: p1.y + t * (p2.y - p1.y)
    };
}
/**
 * @private
 */ function _steppedInterpolation(p1, p2, t, mode) {
    return {
        x: p1.x + t * (p2.x - p1.x),
        y: mode === 'middle' ? t < 0.5 ? p1.y : p2.y : mode === 'after' ? t < 1 ? p1.y : p2.y : t > 0 ? p2.y : p1.y
    };
}
/**
 * @private
 */ function _bezierInterpolation(p1, p2, t, mode) {
    const cp1 = {
        x: p1.cp2x,
        y: p1.cp2y
    };
    const cp2 = {
        x: p2.cp1x,
        y: p2.cp1y
    };
    const a = _pointInLine(p1, cp1, t);
    const b = _pointInLine(cp1, cp2, t);
    const c = _pointInLine(cp2, p2, t);
    const d = _pointInLine(a, b, t);
    const e = _pointInLine(b, c, t);
    return _pointInLine(d, e, t);
}

const getRightToLeftAdapter = function(rectX, width) {
    return {
        x (x) {
            return rectX + rectX + width - x;
        },
        setWidth (w) {
            width = w;
        },
        textAlign (align) {
            if (align === 'center') {
                return align;
            }
            return align === 'right' ? 'left' : 'right';
        },
        xPlus (x, value) {
            return x - value;
        },
        leftForLtr (x, itemWidth) {
            return x - itemWidth;
        }
    };
};
const getLeftToRightAdapter = function() {
    return {
        x (x) {
            return x;
        },
        setWidth (w) {},
        textAlign (align) {
            return align;
        },
        xPlus (x, value) {
            return x + value;
        },
        leftForLtr (x, _itemWidth) {
            return x;
        }
    };
};
function getRtlAdapter(rtl, rectX, width) {
    return rtl ? getRightToLeftAdapter(rectX, width) : getLeftToRightAdapter();
}
function overrideTextDirection(ctx, direction) {
    let style, original;
    if (direction === 'ltr' || direction === 'rtl') {
        style = ctx.canvas.style;
        original = [
            style.getPropertyValue('direction'),
            style.getPropertyPriority('direction')
        ];
        style.setProperty('direction', direction, 'important');
        ctx.prevTextDirection = original;
    }
}
function restoreTextDirection(ctx, original) {
    if (original !== undefined) {
        delete ctx.prevTextDirection;
        ctx.canvas.style.setProperty('direction', original[0], original[1]);
    }
}

function propertyFn(property) {
    if (property === 'angle') {
        return {
            between: _angleBetween,
            compare: _angleDiff,
            normalize: _normalizeAngle
        };
    }
    return {
        between: _isBetween,
        compare: (a, b)=>a - b,
        normalize: (x)=>x
    };
}
function normalizeSegment({ start , end , count , loop , style  }) {
    return {
        start: start % count,
        end: end % count,
        loop: loop && (end - start + 1) % count === 0,
        style
    };
}
function getSegment(segment, points, bounds) {
    const { property , start: startBound , end: endBound  } = bounds;
    const { between , normalize  } = propertyFn(property);
    const count = points.length;
    let { start , end , loop  } = segment;
    let i, ilen;
    if (loop) {
        start += count;
        end += count;
        for(i = 0, ilen = count; i < ilen; ++i){
            if (!between(normalize(points[start % count][property]), startBound, endBound)) {
                break;
            }
            start--;
            end--;
        }
        start %= count;
        end %= count;
    }
    if (end < start) {
        end += count;
    }
    return {
        start,
        end,
        loop,
        style: segment.style
    };
}
 function _boundSegment(segment, points, bounds) {
    if (!bounds) {
        return [
            segment
        ];
    }
    const { property , start: startBound , end: endBound  } = bounds;
    const count = points.length;
    const { compare , between , normalize  } = propertyFn(property);
    const { start , end , loop , style  } = getSegment(segment, points, bounds);
    const result = [];
    let inside = false;
    let subStart = null;
    let value, point, prevValue;
    const startIsBefore = ()=>between(startBound, prevValue, value) && compare(startBound, prevValue) !== 0;
    const endIsBefore = ()=>compare(endBound, value) === 0 || between(endBound, prevValue, value);
    const shouldStart = ()=>inside || startIsBefore();
    const shouldStop = ()=>!inside || endIsBefore();
    for(let i = start, prev = start; i <= end; ++i){
        point = points[i % count];
        if (point.skip) {
            continue;
        }
        value = normalize(point[property]);
        if (value === prevValue) {
            continue;
        }
        inside = between(value, startBound, endBound);
        if (subStart === null && shouldStart()) {
            subStart = compare(value, startBound) === 0 ? i : prev;
        }
        if (subStart !== null && shouldStop()) {
            result.push(normalizeSegment({
                start: subStart,
                end: i,
                loop,
                count,
                style
            }));
            subStart = null;
        }
        prev = i;
        prevValue = value;
    }
    if (subStart !== null) {
        result.push(normalizeSegment({
            start: subStart,
            end,
            loop,
            count,
            style
        }));
    }
    return result;
}
 function _boundSegments(line, bounds) {
    const result = [];
    const segments = line.segments;
    for(let i = 0; i < segments.length; i++){
        const sub = _boundSegment(segments[i], line.points, bounds);
        if (sub.length) {
            result.push(...sub);
        }
    }
    return result;
}
 function findStartAndEnd(points, count, loop, spanGaps) {
    let start = 0;
    let end = count - 1;
    if (loop && !spanGaps) {
        while(start < count && !points[start].skip){
            start++;
        }
    }
    while(start < count && points[start].skip){
        start++;
    }
    start %= count;
    if (loop) {
        end += start;
    }
    while(end > start && points[end % count].skip){
        end--;
    }
    end %= count;
    return {
        start,
        end
    };
}
 function solidSegments(points, start, max, loop) {
    const count = points.length;
    const result = [];
    let last = start;
    let prev = points[start];
    let end;
    for(end = start + 1; end <= max; ++end){
        const cur = points[end % count];
        if (cur.skip || cur.stop) {
            if (!prev.skip) {
                loop = false;
                result.push({
                    start: start % count,
                    end: (end - 1) % count,
                    loop
                });
                start = last = cur.stop ? end : null;
            }
        } else {
            last = end;
            if (prev.skip) {
                start = end;
            }
        }
        prev = cur;
    }
    if (last !== null) {
        result.push({
            start: start % count,
            end: last % count,
            loop
        });
    }
    return result;
}
 function _computeSegments(line, segmentOptions) {
    const points = line.points;
    const spanGaps = line.options.spanGaps;
    const count = points.length;
    if (!count) {
        return [];
    }
    const loop = !!line._loop;
    const { start , end  } = findStartAndEnd(points, count, loop, spanGaps);
    if (spanGaps === true) {
        return splitByStyles(line, [
            {
                start,
                end,
                loop
            }
        ], points, segmentOptions);
    }
    const max = end < start ? end + count : end;
    const completeLoop = !!line._fullLoop && start === 0 && end === count - 1;
    return splitByStyles(line, solidSegments(points, start, max, completeLoop), points, segmentOptions);
}
 function splitByStyles(line, segments, points, segmentOptions) {
    if (!segmentOptions || !segmentOptions.setContext || !points) {
        return segments;
    }
    return doSplitByStyles(line, segments, points, segmentOptions);
}
 function doSplitByStyles(line, segments, points, segmentOptions) {
    const chartContext = line._chart.getContext();
    const baseStyle = readStyle(line.options);
    const { _datasetIndex: datasetIndex , options: { spanGaps  }  } = line;
    const count = points.length;
    const result = [];
    let prevStyle = baseStyle;
    let start = segments[0].start;
    let i = start;
    function addStyle(s, e, l, st) {
        const dir = spanGaps ? -1 : 1;
        if (s === e) {
            return;
        }
        s += count;
        while(points[s % count].skip){
            s -= dir;
        }
        while(points[e % count].skip){
            e += dir;
        }
        if (s % count !== e % count) {
            result.push({
                start: s % count,
                end: e % count,
                loop: l,
                style: st
            });
            prevStyle = st;
            start = e % count;
        }
    }
    for (const segment of segments){
        start = spanGaps ? start : segment.start;
        let prev = points[start % count];
        let style;
        for(i = start + 1; i <= segment.end; i++){
            const pt = points[i % count];
            style = readStyle(segmentOptions.setContext(createContext(chartContext, {
                type: 'segment',
                p0: prev,
                p1: pt,
                p0DataIndex: (i - 1) % count,
                p1DataIndex: i % count,
                datasetIndex
            })));
            if (styleChanged(style, prevStyle)) {
                addStyle(start, i - 1, segment.loop, prevStyle);
            }
            prev = pt;
            prevStyle = style;
        }
        if (start < i - 1) {
            addStyle(start, i - 1, segment.loop, prevStyle);
        }
    }
    return result;
}
function readStyle(options) {
    return {
        backgroundColor: options.backgroundColor,
        borderCapStyle: options.borderCapStyle,
        borderDash: options.borderDash,
        borderDashOffset: options.borderDashOffset,
        borderJoinStyle: options.borderJoinStyle,
        borderWidth: options.borderWidth,
        borderColor: options.borderColor
    };
}
function styleChanged(style, prevStyle) {
    if (!prevStyle) {
        return false;
    }
    const cache = [];
    const replacer = function(key, value) {
        if (!isPatternOrGradient(value)) {
            return value;
        }
        if (!cache.includes(value)) {
            cache.push(value);
        }
        return cache.indexOf(value);
    };
    return JSON.stringify(style, replacer) !== JSON.stringify(prevStyle, replacer);
}

exports.HALF_PI = HALF_PI;
exports.INFINITY = INFINITY;
exports.PI = PI;
exports.PITAU = PITAU;
exports.QUARTER_PI = QUARTER_PI;
exports.RAD_PER_DEG = RAD_PER_DEG;
exports.TAU = TAU;
exports.TWO_THIRDS_PI = TWO_THIRDS_PI;
exports.Ticks = Ticks;
exports._addGrace = _addGrace;
exports._alignPixel = _alignPixel;
exports._alignStartEnd = _alignStartEnd;
exports._angleBetween = _angleBetween;
exports._angleDiff = _angleDiff;
exports._arrayUnique = _arrayUnique;
exports._attachContext = _attachContext;
exports._bezierCurveTo = _bezierCurveTo;
exports._bezierInterpolation = _bezierInterpolation;
exports._boundSegment = _boundSegment;
exports._boundSegments = _boundSegments;
exports._capitalize = _capitalize;
exports._computeSegments = _computeSegments;
exports._createResolver = _createResolver;
exports._decimalPlaces = _decimalPlaces;
exports._deprecated = _deprecated;
exports._descriptors = _descriptors;
exports._elementsEqual = _elementsEqual;
exports._factorize = _factorize;
exports._filterBetween = _filterBetween;
exports._getParentNode = _getParentNode;
exports._getStartAndCountOfVisiblePoints = _getStartAndCountOfVisiblePoints;
exports._int16Range = _int16Range;
exports._isBetween = _isBetween;
exports._isClickEvent = _isClickEvent;
exports._isDomSupported = _isDomSupported;
exports._isPointInArea = _isPointInArea;
exports._limitValue = _limitValue;
exports._longestText = _longestText;
exports._lookup = _lookup;
exports._lookupByKey = _lookupByKey;
exports._measureText = _measureText;
exports._merger = _merger;
exports._mergerIf = _mergerIf;
exports._normalizeAngle = _normalizeAngle;
exports._parseObjectDataRadialScale = _parseObjectDataRadialScale;
exports._pointInLine = _pointInLine;
exports._readValueToProps = _readValueToProps;
exports._rlookupByKey = _rlookupByKey;
exports._scaleRangesChanged = _scaleRangesChanged;
exports._setMinAndMaxByKey = _setMinAndMaxByKey;
exports._splitKey = _splitKey;
exports._steppedInterpolation = _steppedInterpolation;
exports._steppedLineTo = _steppedLineTo;
exports._textX = _textX;
exports._toLeftRightCenter = _toLeftRightCenter;
exports._updateBezierControlPoints = _updateBezierControlPoints;
exports.addRoundedRectPath = addRoundedRectPath;
exports.almostEquals = almostEquals;
exports.almostWhole = almostWhole;
exports.callback = callback;
exports.clearCanvas = clearCanvas;
exports.clipArea = clipArea;
exports.clone = clone;
exports.color = color;
exports.createContext = createContext;
exports.debounce = debounce;
exports.defaults = defaults;
exports.defined = defined;
exports.descriptors = descriptors;
exports.distanceBetweenPoints = distanceBetweenPoints;
exports.drawPoint = drawPoint;
exports.drawPointLegend = drawPointLegend;
exports.each = each;
exports.effects = effects;
exports.finiteOrDefault = finiteOrDefault;
exports.fontString = fontString;
exports.formatNumber = formatNumber;
exports.getAngleFromPoint = getAngleFromPoint;
exports.getHoverColor = getHoverColor;
exports.getMaximumSize = getMaximumSize;
exports.getRelativePosition = getRelativePosition;
exports.getRtlAdapter = getRtlAdapter;
exports.getStyle = getStyle;
exports.isArray = isArray;
exports.isFunction = isFunction;
exports.isNullOrUndef = isNullOrUndef;
exports.isNumber = isNumber;
exports.isNumberFinite = isNumberFinite;
exports.isObject = isObject;
exports.isPatternOrGradient = isPatternOrGradient;
exports.listenArrayEvents = listenArrayEvents;
exports.log10 = log10;
exports.merge = merge;
exports.mergeIf = mergeIf;
exports.niceNum = niceNum;
exports.noop = noop;
exports.overrideTextDirection = overrideTextDirection;
exports.overrides = overrides;
exports.readUsedSize = readUsedSize;
exports.renderText = renderText;
exports.requestAnimFrame = requestAnimFrame;
exports.resolve = resolve;
exports.resolveObjectKey = resolveObjectKey;
exports.restoreTextDirection = restoreTextDirection;
exports.retinaScale = retinaScale;
exports.setsEqual = setsEqual;
exports.sign = sign;
exports.splineCurve = splineCurve;
exports.splineCurveMonotone = splineCurveMonotone;
exports.supportsEventListenerOptions = supportsEventListenerOptions;
exports.throttled = throttled;
exports.toDegrees = toDegrees;
exports.toDimension = toDimension;
exports.toFont = toFont;
exports.toFontString = toFontString;
exports.toLineHeight = toLineHeight;
exports.toPadding = toPadding;
exports.toPercentage = toPercentage;
exports.toRadians = toRadians;
exports.toTRBL = toTRBL;
exports.toTRBLCorners = toTRBLCorners;
exports.uid = uid;
exports.unclipArea = unclipArea;
exports.unlistenArrayEvents = unlistenArrayEvents;
exports.valueOrDefault = valueOrDefault;


},{"@kurkle/color":2}],8:[function(require,module,exports){
/*!
  * chartjs-adapter-moment v1.0.1
  * https://www.chartjs.org
  * (c) 2022 chartjs-adapter-moment Contributors
  * Released under the MIT license
  */
(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('moment'), require('chart.js')) :
typeof define === 'function' && define.amd ? define(['moment', 'chart.js'], factory) :
(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.moment, global.Chart));
}(this, (function (moment, chart_js) { 'use strict';

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);

const FORMATS = {
  datetime: 'MMM D, YYYY, h:mm:ss a',
  millisecond: 'h:mm:ss.SSS a',
  second: 'h:mm:ss a',
  minute: 'h:mm a',
  hour: 'hA',
  day: 'MMM D',
  week: 'll',
  month: 'MMM YYYY',
  quarter: '[Q]Q - YYYY',
  year: 'YYYY'
};

chart_js._adapters._date.override(typeof moment__default['default'] === 'function' ? {
  _id: 'moment', // DEBUG ONLY

  formats: function() {
    return FORMATS;
  },

  parse: function(value, format) {
    if (typeof value === 'string' && typeof format === 'string') {
      value = moment__default['default'](value, format);
    } else if (!(value instanceof moment__default['default'])) {
      value = moment__default['default'](value);
    }
    return value.isValid() ? value.valueOf() : null;
  },

  format: function(time, format) {
    return moment__default['default'](time).format(format);
  },

  add: function(time, amount, unit) {
    return moment__default['default'](time).add(amount, unit).valueOf();
  },

  diff: function(max, min, unit) {
    return moment__default['default'](max).diff(moment__default['default'](min), unit);
  },

  startOf: function(time, unit, weekday) {
    time = moment__default['default'](time);
    if (unit === 'isoWeek') {
      weekday = Math.trunc(Math.min(Math.max(0, weekday), 6));
      return time.isoWeekday(weekday).startOf('day').valueOf();
    }
    return time.startOf(unit).valueOf();
  },

  endOf: function(time, unit) {
    return moment__default['default'](time).endOf(unit).valueOf();
  }
} : {});

})));

},{"chart.js":6,"moment":12}],9:[function(require,module,exports){
/* flatpickr v4.6.13, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.flatpickr = factory());
}(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    var HOOKS = [
        "onChange",
        "onClose",
        "onDayCreate",
        "onDestroy",
        "onKeyDown",
        "onMonthChange",
        "onOpen",
        "onParseConfig",
        "onReady",
        "onValueUpdate",
        "onYearChange",
        "onPreCalendarPosition",
    ];
    var defaults = {
        _disable: [],
        allowInput: false,
        allowInvalidPreload: false,
        altFormat: "F j, Y",
        altInput: false,
        altInputClass: "form-control input",
        animate: typeof window === "object" &&
            window.navigator.userAgent.indexOf("MSIE") === -1,
        ariaDateFormat: "F j, Y",
        autoFillDefaultTime: true,
        clickOpens: true,
        closeOnSelect: true,
        conjunction: ", ",
        dateFormat: "Y-m-d",
        defaultHour: 12,
        defaultMinute: 0,
        defaultSeconds: 0,
        disable: [],
        disableMobile: false,
        enableSeconds: false,
        enableTime: false,
        errorHandler: function (err) {
            return typeof console !== "undefined" && console.warn(err);
        },
        getWeek: function (givenDate) {
            var date = new Date(givenDate.getTime());
            date.setHours(0, 0, 0, 0);
            // Thursday in current week decides the year.
            date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
            // January 4 is always in week 1.
            var week1 = new Date(date.getFullYear(), 0, 4);
            // Adjust to Thursday in week 1 and count number of weeks from date to week1.
            return (1 +
                Math.round(((date.getTime() - week1.getTime()) / 86400000 -
                    3 +
                    ((week1.getDay() + 6) % 7)) /
                    7));
        },
        hourIncrement: 1,
        ignoredFocusElements: [],
        inline: false,
        locale: "default",
        minuteIncrement: 5,
        mode: "single",
        monthSelectorType: "dropdown",
        nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
        noCalendar: false,
        now: new Date(),
        onChange: [],
        onClose: [],
        onDayCreate: [],
        onDestroy: [],
        onKeyDown: [],
        onMonthChange: [],
        onOpen: [],
        onParseConfig: [],
        onReady: [],
        onValueUpdate: [],
        onYearChange: [],
        onPreCalendarPosition: [],
        plugins: [],
        position: "auto",
        positionElement: undefined,
        prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
        shorthandCurrentMonth: false,
        showMonths: 1,
        static: false,
        time_24hr: false,
        weekNumbers: false,
        wrap: false,
    };

    var english = {
        weekdays: {
            shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            longhand: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ],
        },
        months: {
            shorthand: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            longhand: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ],
        },
        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        firstDayOfWeek: 0,
        ordinal: function (nth) {
            var s = nth % 100;
            if (s > 3 && s < 21)
                return "th";
            switch (s % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th";
            }
        },
        rangeSeparator: " to ",
        weekAbbreviation: "Wk",
        scrollTitle: "Scroll to increment",
        toggleTitle: "Click to toggle",
        amPM: ["AM", "PM"],
        yearAriaLabel: "Year",
        monthAriaLabel: "Month",
        hourAriaLabel: "Hour",
        minuteAriaLabel: "Minute",
        time_24hr: false,
    };

    var pad = function (number, length) {
        if (length === void 0) { length = 2; }
        return ("000" + number).slice(length * -1);
    };
    var int = function (bool) { return (bool === true ? 1 : 0); };
    /* istanbul ignore next */
    function debounce(fn, wait) {
        var t;
        return function () {
            var _this = this;
            var args = arguments;
            clearTimeout(t);
            t = setTimeout(function () { return fn.apply(_this, args); }, wait);
        };
    }
    var arrayify = function (obj) {
        return obj instanceof Array ? obj : [obj];
    };

    function toggleClass(elem, className, bool) {
        if (bool === true)
            return elem.classList.add(className);
        elem.classList.remove(className);
    }
    function createElement(tag, className, content) {
        var e = window.document.createElement(tag);
        className = className || "";
        content = content || "";
        e.className = className;
        if (content !== undefined)
            e.textContent = content;
        return e;
    }
    function clearNode(node) {
        while (node.firstChild)
            node.removeChild(node.firstChild);
    }
    function findParent(node, condition) {
        if (condition(node))
            return node;
        else if (node.parentNode)
            return findParent(node.parentNode, condition);
        return undefined; // nothing found
    }
    function createNumberInput(inputClassName, opts) {
        var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
        if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
            numInput.type = "number";
        }
        else {
            numInput.type = "text";
            numInput.pattern = "\\d*";
        }
        if (opts !== undefined)
            for (var key in opts)
                numInput.setAttribute(key, opts[key]);
        wrapper.appendChild(numInput);
        wrapper.appendChild(arrowUp);
        wrapper.appendChild(arrowDown);
        return wrapper;
    }
    function getEventTarget(event) {
        try {
            if (typeof event.composedPath === "function") {
                var path = event.composedPath();
                return path[0];
            }
            return event.target;
        }
        catch (error) {
            return event.target;
        }
    }

    var doNothing = function () { return undefined; };
    var monthToStr = function (monthNumber, shorthand, locale) { return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber]; };
    var revFormat = {
        D: doNothing,
        F: function (dateObj, monthName, locale) {
            dateObj.setMonth(locale.months.longhand.indexOf(monthName));
        },
        G: function (dateObj, hour) {
            dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
        },
        H: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        J: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        K: function (dateObj, amPM, locale) {
            dateObj.setHours((dateObj.getHours() % 12) +
                12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
        },
        M: function (dateObj, shortMonth, locale) {
            dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
        },
        S: function (dateObj, seconds) {
            dateObj.setSeconds(parseFloat(seconds));
        },
        U: function (_, unixSeconds) { return new Date(parseFloat(unixSeconds) * 1000); },
        W: function (dateObj, weekNum, locale) {
            var weekNumber = parseInt(weekNum);
            var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
            date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
            return date;
        },
        Y: function (dateObj, year) {
            dateObj.setFullYear(parseFloat(year));
        },
        Z: function (_, ISODate) { return new Date(ISODate); },
        d: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        h: function (dateObj, hour) {
            dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
        },
        i: function (dateObj, minutes) {
            dateObj.setMinutes(parseFloat(minutes));
        },
        j: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        l: doNothing,
        m: function (dateObj, month) {
            dateObj.setMonth(parseFloat(month) - 1);
        },
        n: function (dateObj, month) {
            dateObj.setMonth(parseFloat(month) - 1);
        },
        s: function (dateObj, seconds) {
            dateObj.setSeconds(parseFloat(seconds));
        },
        u: function (_, unixMillSeconds) {
            return new Date(parseFloat(unixMillSeconds));
        },
        w: doNothing,
        y: function (dateObj, year) {
            dateObj.setFullYear(2000 + parseFloat(year));
        },
    };
    var tokenRegex = {
        D: "",
        F: "",
        G: "(\\d\\d|\\d)",
        H: "(\\d\\d|\\d)",
        J: "(\\d\\d|\\d)\\w+",
        K: "",
        M: "",
        S: "(\\d\\d|\\d)",
        U: "(.+)",
        W: "(\\d\\d|\\d)",
        Y: "(\\d{4})",
        Z: "(.+)",
        d: "(\\d\\d|\\d)",
        h: "(\\d\\d|\\d)",
        i: "(\\d\\d|\\d)",
        j: "(\\d\\d|\\d)",
        l: "",
        m: "(\\d\\d|\\d)",
        n: "(\\d\\d|\\d)",
        s: "(\\d\\d|\\d)",
        u: "(.+)",
        w: "(\\d\\d|\\d)",
        y: "(\\d{2})",
    };
    var formats = {
        // get the date in UTC
        Z: function (date) { return date.toISOString(); },
        // weekday name, short, e.g. Thu
        D: function (date, locale, options) {
            return locale.weekdays.shorthand[formats.w(date, locale, options)];
        },
        // full month name e.g. January
        F: function (date, locale, options) {
            return monthToStr(formats.n(date, locale, options) - 1, false, locale);
        },
        // padded hour 1-12
        G: function (date, locale, options) {
            return pad(formats.h(date, locale, options));
        },
        // hours with leading zero e.g. 03
        H: function (date) { return pad(date.getHours()); },
        // day (1-30) with ordinal suffix e.g. 1st, 2nd
        J: function (date, locale) {
            return locale.ordinal !== undefined
                ? date.getDate() + locale.ordinal(date.getDate())
                : date.getDate();
        },
        // AM/PM
        K: function (date, locale) { return locale.amPM[int(date.getHours() > 11)]; },
        // shorthand month e.g. Jan, Sep, Oct, etc
        M: function (date, locale) {
            return monthToStr(date.getMonth(), true, locale);
        },
        // seconds 00-59
        S: function (date) { return pad(date.getSeconds()); },
        // unix timestamp
        U: function (date) { return date.getTime() / 1000; },
        W: function (date, _, options) {
            return options.getWeek(date);
        },
        // full year e.g. 2016, padded (0001-9999)
        Y: function (date) { return pad(date.getFullYear(), 4); },
        // day in month, padded (01-30)
        d: function (date) { return pad(date.getDate()); },
        // hour from 1-12 (am/pm)
        h: function (date) { return (date.getHours() % 12 ? date.getHours() % 12 : 12); },
        // minutes, padded with leading zero e.g. 09
        i: function (date) { return pad(date.getMinutes()); },
        // day in month (1-30)
        j: function (date) { return date.getDate(); },
        // weekday name, full, e.g. Thursday
        l: function (date, locale) {
            return locale.weekdays.longhand[date.getDay()];
        },
        // padded month number (01-12)
        m: function (date) { return pad(date.getMonth() + 1); },
        // the month number (1-12)
        n: function (date) { return date.getMonth() + 1; },
        // seconds 0-59
        s: function (date) { return date.getSeconds(); },
        // Unix Milliseconds
        u: function (date) { return date.getTime(); },
        // number of the day of the week
        w: function (date) { return date.getDay(); },
        // last two digits of year e.g. 16 for 2016
        y: function (date) { return String(date.getFullYear()).substring(2); },
    };

    var createDateFormatter = function (_a) {
        var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c, _d = _a.isMobile, isMobile = _d === void 0 ? false : _d;
        return function (dateObj, frmt, overrideLocale) {
            var locale = overrideLocale || l10n;
            if (config.formatDate !== undefined && !isMobile) {
                return config.formatDate(dateObj, frmt, locale);
            }
            return frmt
                .split("")
                .map(function (c, i, arr) {
                return formats[c] && arr[i - 1] !== "\\"
                    ? formats[c](dateObj, locale, config)
                    : c !== "\\"
                        ? c
                        : "";
            })
                .join("");
        };
    };
    var createDateParser = function (_a) {
        var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
        return function (date, givenFormat, timeless, customLocale) {
            if (date !== 0 && !date)
                return undefined;
            var locale = customLocale || l10n;
            var parsedDate;
            var dateOrig = date;
            if (date instanceof Date)
                parsedDate = new Date(date.getTime());
            else if (typeof date !== "string" &&
                date.toFixed !== undefined // timestamp
            )
                // create a copy
                parsedDate = new Date(date);
            else if (typeof date === "string") {
                // date string
                var format = givenFormat || (config || defaults).dateFormat;
                var datestr = String(date).trim();
                if (datestr === "today") {
                    parsedDate = new Date();
                    timeless = true;
                }
                else if (config && config.parseDate) {
                    parsedDate = config.parseDate(date, format);
                }
                else if (/Z$/.test(datestr) ||
                    /GMT$/.test(datestr) // datestrings w/ timezone
                ) {
                    parsedDate = new Date(date);
                }
                else {
                    var matched = void 0, ops = [];
                    for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                        var token_1 = format[i];
                        var isBackSlash = token_1 === "\\";
                        var escaped = format[i - 1] === "\\" || isBackSlash;
                        if (tokenRegex[token_1] && !escaped) {
                            regexStr += tokenRegex[token_1];
                            var match = new RegExp(regexStr).exec(date);
                            if (match && (matched = true)) {
                                ops[token_1 !== "Y" ? "push" : "unshift"]({
                                    fn: revFormat[token_1],
                                    val: match[++matchIndex],
                                });
                            }
                        }
                        else if (!isBackSlash)
                            regexStr += "."; // don't really care
                    }
                    parsedDate =
                        !config || !config.noCalendar
                            ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                            : new Date(new Date().setHours(0, 0, 0, 0));
                    ops.forEach(function (_a) {
                        var fn = _a.fn, val = _a.val;
                        return (parsedDate = fn(parsedDate, val, locale) || parsedDate);
                    });
                    parsedDate = matched ? parsedDate : undefined;
                }
            }
            /* istanbul ignore next */
            if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
                config.errorHandler(new Error("Invalid date provided: " + dateOrig));
                return undefined;
            }
            if (timeless === true)
                parsedDate.setHours(0, 0, 0, 0);
            return parsedDate;
        };
    };
    /**
     * Compute the difference in dates, measured in ms
     */
    function compareDates(date1, date2, timeless) {
        if (timeless === void 0) { timeless = true; }
        if (timeless !== false) {
            return (new Date(date1.getTime()).setHours(0, 0, 0, 0) -
                new Date(date2.getTime()).setHours(0, 0, 0, 0));
        }
        return date1.getTime() - date2.getTime();
    }
    var isBetween = function (ts, ts1, ts2) {
        return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
    };
    var calculateSecondsSinceMidnight = function (hours, minutes, seconds) {
        return hours * 3600 + minutes * 60 + seconds;
    };
    var parseSeconds = function (secondsSinceMidnight) {
        var hours = Math.floor(secondsSinceMidnight / 3600), minutes = (secondsSinceMidnight - hours * 3600) / 60;
        return [hours, minutes, secondsSinceMidnight - hours * 3600 - minutes * 60];
    };
    var duration = {
        DAY: 86400000,
    };
    function getDefaultHours(config) {
        var hours = config.defaultHour;
        var minutes = config.defaultMinute;
        var seconds = config.defaultSeconds;
        if (config.minDate !== undefined) {
            var minHour = config.minDate.getHours();
            var minMinutes = config.minDate.getMinutes();
            var minSeconds = config.minDate.getSeconds();
            if (hours < minHour) {
                hours = minHour;
            }
            if (hours === minHour && minutes < minMinutes) {
                minutes = minMinutes;
            }
            if (hours === minHour && minutes === minMinutes && seconds < minSeconds)
                seconds = config.minDate.getSeconds();
        }
        if (config.maxDate !== undefined) {
            var maxHr = config.maxDate.getHours();
            var maxMinutes = config.maxDate.getMinutes();
            hours = Math.min(hours, maxHr);
            if (hours === maxHr)
                minutes = Math.min(maxMinutes, minutes);
            if (hours === maxHr && minutes === maxMinutes)
                seconds = config.maxDate.getSeconds();
        }
        return { hours: hours, minutes: minutes, seconds: seconds };
    }

    if (typeof Object.assign !== "function") {
        Object.assign = function (target) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (!target) {
                throw TypeError("Cannot convert undefined or null to object");
            }
            var _loop_1 = function (source) {
                if (source) {
                    Object.keys(source).forEach(function (key) { return (target[key] = source[key]); });
                }
            };
            for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
                var source = args_1[_a];
                _loop_1(source);
            }
            return target;
        };
    }

    var DEBOUNCED_CHANGE_MS = 300;
    function FlatpickrInstance(element, instanceConfig) {
        var self = {
            config: __assign(__assign({}, defaults), flatpickr.defaultConfig),
            l10n: english,
        };
        self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
        self._handlers = [];
        self.pluginElements = [];
        self.loadedPlugins = [];
        self._bind = bind;
        self._setHoursFromDate = setHoursFromDate;
        self._positionCalendar = positionCalendar;
        self.changeMonth = changeMonth;
        self.changeYear = changeYear;
        self.clear = clear;
        self.close = close;
        self.onMouseOver = onMouseOver;
        self._createElement = createElement;
        self.createDay = createDay;
        self.destroy = destroy;
        self.isEnabled = isEnabled;
        self.jumpToDate = jumpToDate;
        self.updateValue = updateValue;
        self.open = open;
        self.redraw = redraw;
        self.set = set;
        self.setDate = setDate;
        self.toggle = toggle;
        function setupHelperFunctions() {
            self.utils = {
                getDaysInMonth: function (month, yr) {
                    if (month === void 0) { month = self.currentMonth; }
                    if (yr === void 0) { yr = self.currentYear; }
                    if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0))
                        return 29;
                    return self.l10n.daysInMonth[month];
                },
            };
        }
        function init() {
            self.element = self.input = element;
            self.isOpen = false;
            parseConfig();
            setupLocale();
            setupInputs();
            setupDates();
            setupHelperFunctions();
            if (!self.isMobile)
                build();
            bindEvents();
            if (self.selectedDates.length || self.config.noCalendar) {
                if (self.config.enableTime) {
                    setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : undefined);
                }
                updateValue(false);
            }
            setCalendarWidth();
            var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            /* TODO: investigate this further
        
              Currently, there is weird positioning behavior in safari causing pages
              to scroll up. https://github.com/chmln/flatpickr/issues/563
        
              However, most browsers are not Safari and positioning is expensive when used
              in scale. https://github.com/chmln/flatpickr/issues/1096
            */
            if (!self.isMobile && isSafari) {
                positionCalendar();
            }
            triggerEvent("onReady");
        }
        function getClosestActiveElement() {
            var _a;
            return (((_a = self.calendarContainer) === null || _a === void 0 ? void 0 : _a.getRootNode())
                .activeElement || document.activeElement);
        }
        function bindToInstance(fn) {
            return fn.bind(self);
        }
        function setCalendarWidth() {
            var config = self.config;
            if (config.weekNumbers === false && config.showMonths === 1) {
                return;
            }
            else if (config.noCalendar !== true) {
                window.requestAnimationFrame(function () {
                    if (self.calendarContainer !== undefined) {
                        self.calendarContainer.style.visibility = "hidden";
                        self.calendarContainer.style.display = "block";
                    }
                    if (self.daysContainer !== undefined) {
                        var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
                        self.daysContainer.style.width = daysWidth + "px";
                        self.calendarContainer.style.width =
                            daysWidth +
                                (self.weekWrapper !== undefined
                                    ? self.weekWrapper.offsetWidth
                                    : 0) +
                                "px";
                        self.calendarContainer.style.removeProperty("visibility");
                        self.calendarContainer.style.removeProperty("display");
                    }
                });
            }
        }
        /**
         * The handler for all events targeting the time inputs
         */
        function updateTime(e) {
            if (self.selectedDates.length === 0) {
                var defaultDate = self.config.minDate === undefined ||
                    compareDates(new Date(), self.config.minDate) >= 0
                    ? new Date()
                    : new Date(self.config.minDate.getTime());
                var defaults = getDefaultHours(self.config);
                defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
                self.selectedDates = [defaultDate];
                self.latestSelectedDateObj = defaultDate;
            }
            if (e !== undefined && e.type !== "blur") {
                timeWrapper(e);
            }
            var prevValue = self._input.value;
            setHoursFromInputs();
            updateValue();
            if (self._input.value !== prevValue) {
                self._debouncedChange();
            }
        }
        function ampm2military(hour, amPM) {
            return (hour % 12) + 12 * int(amPM === self.l10n.amPM[1]);
        }
        function military2ampm(hour) {
            switch (hour % 24) {
                case 0:
                case 12:
                    return 12;
                default:
                    return hour % 12;
            }
        }
        /**
         * Syncs the selected date object time with user's time input
         */
        function setHoursFromInputs() {
            if (self.hourElement === undefined || self.minuteElement === undefined)
                return;
            var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined
                ? (parseInt(self.secondElement.value, 10) || 0) % 60
                : 0;
            if (self.amPM !== undefined) {
                hours = ampm2military(hours, self.amPM.textContent);
            }
            var limitMinHours = self.config.minTime !== undefined ||
                (self.config.minDate &&
                    self.minDateHasTime &&
                    self.latestSelectedDateObj &&
                    compareDates(self.latestSelectedDateObj, self.config.minDate, true) ===
                        0);
            var limitMaxHours = self.config.maxTime !== undefined ||
                (self.config.maxDate &&
                    self.maxDateHasTime &&
                    self.latestSelectedDateObj &&
                    compareDates(self.latestSelectedDateObj, self.config.maxDate, true) ===
                        0);
            if (self.config.maxTime !== undefined &&
                self.config.minTime !== undefined &&
                self.config.minTime > self.config.maxTime) {
                var minBound = calculateSecondsSinceMidnight(self.config.minTime.getHours(), self.config.minTime.getMinutes(), self.config.minTime.getSeconds());
                var maxBound = calculateSecondsSinceMidnight(self.config.maxTime.getHours(), self.config.maxTime.getMinutes(), self.config.maxTime.getSeconds());
                var currentTime = calculateSecondsSinceMidnight(hours, minutes, seconds);
                if (currentTime > maxBound && currentTime < minBound) {
                    var result = parseSeconds(minBound);
                    hours = result[0];
                    minutes = result[1];
                    seconds = result[2];
                }
            }
            else {
                if (limitMaxHours) {
                    var maxTime = self.config.maxTime !== undefined
                        ? self.config.maxTime
                        : self.config.maxDate;
                    hours = Math.min(hours, maxTime.getHours());
                    if (hours === maxTime.getHours())
                        minutes = Math.min(minutes, maxTime.getMinutes());
                    if (minutes === maxTime.getMinutes())
                        seconds = Math.min(seconds, maxTime.getSeconds());
                }
                if (limitMinHours) {
                    var minTime = self.config.minTime !== undefined
                        ? self.config.minTime
                        : self.config.minDate;
                    hours = Math.max(hours, minTime.getHours());
                    if (hours === minTime.getHours() && minutes < minTime.getMinutes())
                        minutes = minTime.getMinutes();
                    if (minutes === minTime.getMinutes())
                        seconds = Math.max(seconds, minTime.getSeconds());
                }
            }
            setHours(hours, minutes, seconds);
        }
        /**
         * Syncs time input values with a date
         */
        function setHoursFromDate(dateObj) {
            var date = dateObj || self.latestSelectedDateObj;
            if (date && date instanceof Date) {
                setHours(date.getHours(), date.getMinutes(), date.getSeconds());
            }
        }
        /**
         * Sets the hours, minutes, and optionally seconds
         * of the latest selected date object and the
         * corresponding time inputs
         * @param {Number} hours the hour. whether its military
         *                 or am-pm gets inferred from config
         * @param {Number} minutes the minutes
         * @param {Number} seconds the seconds (optional)
         */
        function setHours(hours, minutes, seconds) {
            if (self.latestSelectedDateObj !== undefined) {
                self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
            }
            if (!self.hourElement || !self.minuteElement || self.isMobile)
                return;
            self.hourElement.value = pad(!self.config.time_24hr
                ? ((12 + hours) % 12) + 12 * int(hours % 12 === 0)
                : hours);
            self.minuteElement.value = pad(minutes);
            if (self.amPM !== undefined)
                self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
            if (self.secondElement !== undefined)
                self.secondElement.value = pad(seconds);
        }
        /**
         * Handles the year input and incrementing events
         * @param {Event} event the keyup or increment event
         */
        function onYearInput(event) {
            var eventTarget = getEventTarget(event);
            var year = parseInt(eventTarget.value) + (event.delta || 0);
            if (year / 1000 > 1 ||
                (event.key === "Enter" && !/[^\d]/.test(year.toString()))) {
                changeYear(year);
            }
        }
        /**
         * Essentially addEventListener + tracking
         * @param {Element} element the element to addEventListener to
         * @param {String} event the event name
         * @param {Function} handler the event handler
         */
        function bind(element, event, handler, options) {
            if (event instanceof Array)
                return event.forEach(function (ev) { return bind(element, ev, handler, options); });
            if (element instanceof Array)
                return element.forEach(function (el) { return bind(el, event, handler, options); });
            element.addEventListener(event, handler, options);
            self._handlers.push({
                remove: function () { return element.removeEventListener(event, handler, options); },
            });
        }
        function triggerChange() {
            triggerEvent("onChange");
        }
        /**
         * Adds all the necessary event listeners
         */
        function bindEvents() {
            if (self.config.wrap) {
                ["open", "close", "toggle", "clear"].forEach(function (evt) {
                    Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
                        return bind(el, "click", self[evt]);
                    });
                });
            }
            if (self.isMobile) {
                setupMobile();
                return;
            }
            var debouncedResize = debounce(onResize, 50);
            self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
            if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
                bind(self.daysContainer, "mouseover", function (e) {
                    if (self.config.mode === "range")
                        onMouseOver(getEventTarget(e));
                });
            bind(self._input, "keydown", onKeyDown);
            if (self.calendarContainer !== undefined) {
                bind(self.calendarContainer, "keydown", onKeyDown);
            }
            if (!self.config.inline && !self.config.static)
                bind(window, "resize", debouncedResize);
            if (window.ontouchstart !== undefined)
                bind(window.document, "touchstart", documentClick);
            else
                bind(window.document, "mousedown", documentClick);
            bind(window.document, "focus", documentClick, { capture: true });
            if (self.config.clickOpens === true) {
                bind(self._input, "focus", self.open);
                bind(self._input, "click", self.open);
            }
            if (self.daysContainer !== undefined) {
                bind(self.monthNav, "click", onMonthNavClick);
                bind(self.monthNav, ["keyup", "increment"], onYearInput);
                bind(self.daysContainer, "click", selectDate);
            }
            if (self.timeContainer !== undefined &&
                self.minuteElement !== undefined &&
                self.hourElement !== undefined) {
                var selText = function (e) {
                };
                    });