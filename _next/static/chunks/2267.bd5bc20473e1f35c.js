"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2267],{2267:function(e,n,r){r.r(n);var o=r(18391),a=r(67294),l=r(820),i=r(47736),t=function(e){return a.createElement(i.Z,(0,o.Z)({},e,{mainSize:20}),a.createElement("path",{d:"M18.5293 8.06066L15.7207 5.43934C15.4193 5.15804 15.0105 5 14.5843 5H5.60714C4.71953 5 4 5.67156 4 6.5V17.5C4 18.3284 4.71953 19 5.60714 19H17.3929C18.2805 19 19 18.3284 19 17.5V9.12131C19 8.72349 18.8307 8.34196 18.5293 8.06066ZM11.5 17C10.3165 17 9.35714 16.1046 9.35714 15C9.35714 13.8954 10.3165 13 11.5 13C12.6835 13 13.6429 13.8954 13.6429 15C13.6429 16.1046 12.6835 17 11.5 17ZM14.7143 7.48375V10.625C14.7143 10.8321 14.5344 11 14.3125 11H6.54464C6.32276 11 6.14286 10.8321 6.14286 10.625V7.375C6.14286 7.16791 6.32276 7 6.54464 7H14.196C14.3026 7 14.4047 7.0395 14.4801 7.10984L14.5966 7.21859C14.6339 7.25341 14.6635 7.29475 14.6837 7.34024C14.7039 7.38574 14.7143 7.4345 14.7143 7.48375Z"}))};t.displayName="SaveIcon",t.propTypes=l.Z,n.default=t},820:function(e,n,r){var o=r(45697),a={colour:o.string,disabled:o.bool,disabledColour:o.string,fixColour:o.string,hoverColour:(0,o.oneOfType)([o.bool,o.string]),onClick:o.func,size:(0,o.oneOfType)([o.number,o.string])};n.Z=a},47736:function(e,n,r){var o,a,l,i,t=r(51174),s=r(18391),c=r(66080),u=r(67294),C=r(10367),d=["children","colour","disabled","disabledColour","hoverColour","onClick","size","translate"],b=function(e){var n=e.children,r=e.colour,o=e.disabled,a=e.disabledColour,l=e.hoverColour,i=e.onClick,t=e.size,C=e.translate,b=(0,c.Z)(e,d),f=b.mainSize;if("string"==typeof t){var v=22;switch(t){case"xxxs":v=8;break;case"xxs":v=12;break;case"xs":v=16;break;case"sm":v=20;break;case"md":v=24;break;case"lg":v=32;break;case"xl":v=36;break;case"xxl":v=40;break;case"xxxl":v=48;break;default:v=22}t=v}else t=t||22;var p=1;return f&&t!==f&&(p=Number(t/f)),u.createElement(h,(0,s.Z)({colour:r,disabled:o,disabledColour:a,hoverColour:l,onClick:i,scale:p,size:t,translate:C,xmlns:"http://www.w3.org/2000/svg"},b),n)};b.displayName="IconWrapper";var f={DEFAULT:"default",HOVER:"hover"},v=function(e,n){var r=n.colour,o=n.context,a=n.disabled,l=n.disabledColour,i=n.hoverColour,t=n.theme,s=t.ICONS,c=t.THEME_COLOUR,u=o?c.context:r||s.defaultIconColour;return e===f.DEFAULT?a&&l?l:a?s.disabledIconColour:u:e===f.HOVER&&i?(!0===i&&(i=s.hoverIconColour),a&&l?l:a?s.disabledIconColour:i||s.hoverIconColour||u):a?l||s.disabledIconColour:u},h=C.ZP.svg(o||(o=(0,t.Z)(["\n  ","\n\n  path {\n    transition: fill 0.2s ease;\n\n    fill: ",";\n\n    ","\n  }\n\n  &:hover {\n    path {\n      fill: ",";\n    }\n  }\n\n  ","\n"])),function(e){var n=e.size;if("number"==typeof n)return(0,C.iv)(a||(a=(0,t.Z)(["\n        height: ","px;\n        width: ","px;\n      "])),n,n)},function(e){return v(f.DEFAULT,e)},function(e){var n=e.scale,r=e.translate;return n&&(0,C.iv)(l||(l=(0,t.Z)(["\n          transform: scale(",") ",";\n        "])),n,r||"")},function(e){return v(f.HOVER,e)},function(e){var n=e.onClick,r=e.disabled;return n&&!r&&(0,C.iv)(i||(i=(0,t.Z)(["\n      cursor: pointer;\n    "])))});n.Z=b}}]);