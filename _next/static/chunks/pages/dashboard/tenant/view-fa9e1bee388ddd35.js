(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5355],{86036:function(n,e,t){"use strict";var r=t(67294),i=t(45697),o=t(55843),a=t(51466),l=function(n){var e=n.content,t=n.text;return r.createElement(r.Fragment,null,r.createElement(o.Z,{marginBottom:"sm"}),r.createElement(a.Z,{content:e,context:"dark",size:"sm"}),r.createElement(a.Z,null,t))};l.propTypes={content:i.string.isRequired,text:(0,i.oneOfType)([i.node,i.string]).isRequired},e.Z=l},45481:function(n,e,t){"use strict";var r=t(67294),i=t(45697),o=t(40826),a=function(n){var e=n.icon,t=n.prefix;return r.createElement("span",{className:"fa-stack fa-1x",style:{pointerEvents:"none"}},r.createElement(o.Z,{className:"fa-stack-2x",color:"#eaf0f6",fixedWidth:!1,icon:"circle"}),r.createElement(o.Z,{className:"fa-stack-1x",color:"#506e91",fixedWidth:!1,icon:e,prefix:t}))};a.displayName="IconStacked",a.propTypes={icon:i.string.isRequired,prefix:i.string},a.defaultProps={prefix:"fas"},e.Z=a},93517:function(n,e,t){"use strict";t.d(e,{Z:function(){return p}});var r=t(76702),i=t(67294),o=t(45697),a=t(87850),l=t(39725);function u(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function s(n){var e=this,t=[];if(Array.isArray(n)){var r=n.map(function(n){return e.locationBuilder(n)});t.push.apply(t,(0,l.Z)(r))}return("string"==typeof n||"number"==typeof n)&&t.push(n),"object"===(0,a.Z)(n)&&n.lat&&n.lng&&t.push("".concat(n.lat,",").concat(n.lng)),t.join("%7C")}var c=function(){var n,e,t;function r(n){var e=n.apiKey,t=n.center,i=n.channel,o=n.client,a=n.format,l=n.language,u=n.location,s=n.maptype,c=n.markers,d=n.paths,p=n.region,v=n.rootURL,h=n.scale,f=n.signature,m=n.size,g=n.style,b=n.visible,y=n.zoom;!function(n,e){if(!(n instanceof e))throw TypeError("Cannot call a class as a function")}(this,r),this.apiKey=e,this.channel=i,this.center=t,this.client=o,this.format=void 0===a?"png":a,this.language=l,this.location=void 0===u?"":u,this.maptype=void 0===s?"roadmap":s,this.markers=void 0===c?[]:c,this.paths=void 0===d?[]:d,this.region=p,this.rootURL=void 0===v?"https://maps.googleapis.com/maps/api/staticmap":v,this.scale=void 0===h?1:h,this.signature=f,this.size=void 0===m?"400x200":m,this.style=g,this.visible=b,this.zoom=void 0===y?15:y}return e=[{key:"urlBuilder",value:function(n,e,t){return e?"".concat(n).concat(t).concat(e):null}},{key:"renderBaseMap",value:function(){var n=[];n.push(this.urlBuilder("key",this.apiKey,"=")),n.push(this.urlBuilder("center",this.center,"=")),n.push(this.urlBuilder("channel",this.channel,"=")),n.push(this.urlBuilder("client",this.client,"=")),n.push(this.urlBuilder("format",this.format,"=")),n.push(this.urlBuilder("language",this.language,"=")),n.push(this.urlBuilder("maptype",this.maptype,"=")),n.push(this.urlBuilder("region",this.region,"=")),n.push(this.urlBuilder("scale",this.scale,"=")),n.push(this.urlBuilder("signature",this.signature,"=")),n.push(this.urlBuilder("size",this.size,"=")),n.push(this.urlBuilder("style",this.style,"=")),n.push(this.urlBuilder("visible",this.visible,"=")),n.push(this.urlBuilder("zoom",this.zoom,"="));var e=n.filter(function(n){return n}).join("&");return"".concat(this.rootURL,"?").concat(e)}},{key:"locationBuilder",value:function(n){var e=this,t=[];if(Array.isArray(n)){var r=n.map(function(n){return e.locationBuilder(n)});t.push.apply(t,(0,l.Z)(r))}return("string"==typeof n||"number"==typeof n)&&t.push(encodeURI(n)),"object"===(0,a.Z)(n)&&n.lat&&n.lng&&t.push("".concat(n.lat,",").concat(n.lng)),t.join("%7C")}},{key:"renderPath",value:function(n){var e=n.circle,t=n.color,r=n.fillcolor,i=n.geodesic,o=n.points,a=n.weight,l=[];if(e){var u,c,d,p=(u=e.latitude,c=e.longitude,function(n,e,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:8,i=Math.PI,o="",a=n*i/180,l=e*i/180,u=t/1e3/6371,c=0;for(c=0;c<=360;c+=r){var d=c*i/180,p=Math.asin(Math.sin(a)*Math.cos(u)+Math.cos(a)*Math.sin(u)*Math.cos(d)),v=(l+Math.atan2(Math.sin(d)*Math.sin(u)*Math.cos(a),Math.cos(u)-Math.sin(a)*Math.sin(p)))*180/i;o+=s((p=180*p/i)+","+v)}return encodeURI(o)}(u,c,d=e.radius));l.push(this.urlBuilder("",this.locationBuilder("".concat(p)),""))}l.push(this.urlBuilder("color",t,":")),l.push(this.urlBuilder("weight",a,":")),l.push(this.urlBuilder("fillcolor",r,":")),l.push(this.urlBuilder("geodesic",i,":")),l.push(this.urlBuilder("",this.locationBuilder(o),""));var v=l.filter(function(n){return n}).join("%7C");return"path=".concat(v)}},{key:"renderParts",value:function(){var n=this;return this.paths.map(function(e){return n.renderPath(e)})}},{key:"renderMarkers",value:function(){var n=this.markers,e=this.locationBuilder,t=this.location,r={};return(n.length?n.map(function(n){var t="markers=";switch((0,a.Z)(n)){case"string":t+=e(n);break;case"object":var r,i=n.colour,o=n.label,l=n.location,u=i&&"color:".concat(i,"|");t+=u+(o&&"label:".concat(o,"|"))+(l&&"".concat(e(l),"|"))}return t}):["markers=".concat(e(t))]).join("&")}},{key:"generateUrl",value:function(){var n=this.renderParts()||[],e=this.renderBaseMap(),t=this.renderMarkers();return"".concat(e,"&").concat(n,"&").concat(t)}}],u(r.prototype,e),t&&u(r,t),r}(),d=function(n){var e=n.apiKey,t=n.center,o=n.channel,a=n.className,l=n.client,u=n.container,s=n.format,d=n.language,p=n.location,v=n.maptype,h=n.markers,f=n.paths,m=n.region,g=n.scale,b=n.signature,y=n.size,x=n.style,T=n.styleMap,Z=n.visible,I=n.zoom,k=y.split("x"),w=(0,r.Z)(k,2),C=w[0],j=w[1],A=(0,i.useState)(""),B=(0,r.Z)(A,2),P=B[0],S=B[1];return(0,i.useEffect)(function(){S(new c({apiKey:e,center:t,channel:o,client:l,format:s,language:d,location:p,maptype:v,markers:h,paths:f,region:m,scale:g,signature:b,size:y,style:T,visible:Z,zoom:I}).generateUrl())},[]),i.createElement(void 0===u?"img":u,{className:a,width:C,height:j,src:P,style:x,alt:"map"})};d.displayName="StaticLocation",d.propTypes={apiKey:o.string.isRequired,center:o.string,channel:o.string,className:o.string,client:o.string,container:o.node,format:(0,o.oneOf)(["png","png8","png32","gif","jpg","jpg-baseline"]),language:o.string,location:o.string,maptype:(0,o.oneOf)(["roadmap","satellite","terrain","hybrid"]),markers:o.array,paths:o.array,region:o.string,scale:(0,o.oneOf)([1,2,4,"1","2","4"]),signature:o.string,size:o.string.isRequired,style:o.object,styleMap:o.string,visible:o.string,zoom:o.number},d.defaultProps={format:"png",maptype:"roadmap",scale:1,size:"400x200",zoom:15};var p=d},41085:function(n,e,t){"use strict";t.d(e,{Z:function(){return S}});var r,i,o,a,l,u,s,c,d,p,v,h,f=t(51174),m=t(18391),g=t(76702),b=t(67294),y=t(45697),x=t(11163),T=t.n(x),Z=t(10367),I=function(n){return n.toString().toLowerCase().trim().normalize("NFKD").replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(RegExp("-$"),"")},k=function(n){var e=n.activeTab,t=n.childClick,r=n.context,i=n.data,o=n.disabled,a=n.gap,l=n.index,u=n.indicatorSize,s=n.label,c=n.onClick,d=n.scrollToActiveTab,p=(0,b.useRef)(null),v=I(s),h=e.label===v;(0,b.useEffect)(function(){d&&p.current&&p.current.scrollIntoView({behavior:"smooth",block:"end"})},[h]);var f=function(n){!h&&(c&&c({index:l,label:v}),t&&t())};return i||(i={"data-cy":"".concat(v,"Tab")}),b.createElement(w,(0,m.Z)({active:h,context:r},i,{disabled:o,indicatorSize:u,onClick:f,ref:h&&d?p:null,gap:a}),s)};k.displayName="Tab";var w=Z.ZP.li(r||(r=(0,f.Z)(["\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  &:hover {\n    ","\n\n    ","\n  }\n\n  &:last-of-type {\n    border-top-right-radius: ",";\n    border-top-left-radius: inherit;\n    border-right: 1px solid ",";\n  }\n\n  &:first-child {\n    border-top-left-radius: ",";\n    border-top-right-radius: inherit;\n    border-right: 0px;\n  }\n\n  min-width: fit-content;\n  display: inline-block;\n  list-style: none;\n  margin-bottom: -1px;\n  padding: 0.5rem 0.75rem;\n"])),function(n){var e=n.context,t=n.theme,r=n.gap;return(0,Z.iv)(i||(i=(0,f.Z)(["\n    background-color: ",";\n    border-left: 1px solid ",";\n    border-bottom: 1px solid ",";\n    border-top: 1px solid ",";\n    color: ",";\n    ","\n  "])),t.TABS.colour,t.TABS.borderColour,e?t.COLOUR[e]:t.TABS.borderColour,t.TABS.borderColour,t.TABS.tabTextColour,0!==r&&(0,Z.iv)(o||(o=(0,f.Z)(["\n      border-right: 1px solid ",";\n    "])),t.TABS.borderColour))},function(n){var e=n.active,t=(n.context,n.indicatorSize),r=n.theme;return e&&(0,Z.iv)(a||(a=(0,f.Z)(["\n      background-color: ",";\n      border-bottom: ","px solid ",";\n      color: ",";\n    "])),r.TABS.activeColour,t,r.COLOUR.primary,r.TABS.activeTabTextColour)},function(n){var e=n.active;return n.theme,!e&&(0,Z.iv)(l||(l=(0,f.Z)(["\n      cursor: pointer;\n    "])))},function(n){var e=n.disabled,t=n.theme;return e&&(0,Z.iv)(u||(u=(0,f.Z)(["\n      background-color: ",";\n      cursor: not-allowed;\n    "])),t.TABS.disabledColour)},function(n){var e=n.active,t=n.theme;return!e&&(0,Z.iv)(s||(s=(0,f.Z)(["\n        background-color: ",";\n      "])),t.TABS.hoverColour)},function(n){var e=n.disabled,t=n.theme;return e&&(0,Z.iv)(c||(c=(0,f.Z)(["\n        background-color: ",";\n      "])),t.TABS.disabledColour)},function(n){return n.theme.TABS.borderRadius},function(n){return n.theme.TABS.borderColour},function(n){return n.theme.TABS.borderRadius});k.propTypes={activeTab:y.string.isRequired,childClick:y.func,context:(0,y.oneOfType)([y.bool,y.string]),data:y.object,disabled:y.bool,index:y.number,label:y.string.isRequired,onClick:(0,y.oneOfType)([y.bool,y.func]).isRequired,scrollToActiveTab:y.bool},k.defaultProps={context:!1,scrollToActiveTab:!0};var C=function(n,e,t){var r,i,o,a=n,l=!1,u=!1;a.addEventListener("mousedown",function(n){r=n.timeStamp,l=!0,i=n.pageX-a.offsetLeft,o=a.scrollLeft}),a.addEventListener("mouseleave",function(){l=!1,u=!1,a.classList.remove("active")}),a.addEventListener("mouseup",function(){l=!1,u=!1,a.classList.remove("active")}),a.addEventListener("mousemove",function(n){if(u||l&&n.timeStamp-r>t){n.preventDefault(),a.classList.add("active");var s=n.pageX-a.offsetLeft-i;u=!0,a.scrollLeft=o-s+e}})},j=function(n){var e=n.activeTab;return n.children[e.index].props.children},A="",B=function(n){var e=n.centerTabs,t=n.children,r=n.className,i=n.indicatorSize,o=n.gap,a=n.grabbable,l=n.grabWalkSpeed,u=n.grabTimeout,s=n.handleChange,c=n.onTabChange,d=n.scrollToActiveTab,p=(0,x.useRouter)(),v=(0,b.createRef)();(0,b.useEffect)(function(){a&&C(v.current,l,u)},[]),Array.isArray(t)||(t=b.Children.toArray(t)),t.length>1?t.forEach(function(n,e){!0===n.props.active&&(A={index:e,label:I(n.props.label)})}):A={index:0,label:I(t[0].props.label)};var h=(0,b.useState)(A),f=(0,g.Z)(h,2),y=f[0],Z=f[1],w=function(n){var e=n.index,t=I(n.label);Z({index:e,label:t}),s&&B(t),c&&c(t)},B=function(n){var e=p.query;delete e.tab,e.tab=n,T().push({pathname:p.pathname,query:e,shallow:!0})};return b.createElement(b.Fragment,null,b.createElement(P,{centerTabs:e,className:r,gap:o,grabbable:a,ref:v},t.map(function(n,e){var t=n.props;return b.createElement(k,(0,m.Z)({activeTab:y,index:e,key:t.label,onClick:!t.disabled&&w,scrollToActiveTab:d,gap:o,indicatorSize:i},t))})),b.createElement(j,{activeTab:y,children:t}))},P=Z.ZP.ol(d||(d=(0,f.Z)(["\n  align-items: flex-end;\n  border-bottom: 1px solid ",";\n  display: flex;\n  ","\n\n  ","\n\n  margin: 0 0 1rem 0;\n  padding-left: 0;\n  overflow-x: scroll;\n  user-select: none;\n  white-space: nowrap;\n  -ms-overflow-style: none;\n  &&::-webkit-scrollbar {\n    display: none;\n  }\n\n  ","\n"])),function(n){return n.theme.TABS.borderColour},function(n){var e=n.gap;return 0!==e&&(0,Z.iv)(p||(p=(0,f.Z)(["\n      gap: ","px;\n    "])),e)},function(n){return n.centerTabs&&(0,Z.iv)(v||(v=(0,f.Z)(["\n      justify-content: center;\n    "])))},function(n){return n.grabbable&&(0,Z.iv)(h||(h=(0,f.Z)(["\n      &.active {\n        cursor: grabbing;\n\n        li {\n          cursor: grabbing;\n          pointer-events: none;\n        }\n      }\n    "])))});B.propTypes={centerTabs:y.bool,children:(0,y.oneOfType)([y.array,y.object]).isRequired,className:y.string,gap:y.number,grabbable:y.bool,grabWalkSpeed:y.number,grabTimeout:y.number,handleChange:y.bool,indicatorSize:y.number,scrollToActiveTab:y.bool},B.defaultProps={centerTabs:!1,gap:0,grabbable:!0,grabWalkSpeed:25,grabTimeout:100,handleChange:!0,indicatorSize:1,scrollToActiveTab:!0};var S=B},30845:function(n,e){"use strict";var t=Number.isNaN||function(n){return"number"==typeof n&&n!=n};function r(n,e){return!!(n===e||t(n)&&t(e))}function i(n,e){if(n.length!==e.length)return!1;for(var t=0;t<n.length;t++)if(!r(n[t],e[t]))return!1;return!0}e.Z=function(n,e){void 0===e&&(e=i);var t,r,o=[],a=!1;return function(){for(var i=[],l=0;l<arguments.length;l++)i[l]=arguments[l];return a&&t===this&&e(i,o)||(r=n.apply(this,i),a=!0,t=this,o=i),r}}},24903:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/tenant/view",function(){return t(14381)}])},2173:function(n,e,t){"use strict";t.d(e,{W:function(){return d}});var r=t(47568),i=t(7297),o=t(97582),a=t(75063),l=t(63139),u=t(13777);function s(){var n=(0,i.Z)(["\n  mutation CreateSupplierPpmInvoicePdf($accountEntryId: Int!) {\n    invoice: createSupplierPpmInvoicePdf(accountEntryId: $accountEntryId) {\n      success\n      key\n    }\n  }\n"]);return s=function(){return n},n}var c,d=(c=(0,r.Z)(function(n){var e,t,r,i,a,s,c,d,v,h,f,m;return(0,o.__generator)(this,function(o){switch(o.label){case 0:e=n.client,t=n.accountEntryId,r=n.getUrl,o.label=1;case 1:return o.trys.push([1,3,,4]),a="",(0,l.a)()||r||(i=window.open("/download","_blank")),[4,e.mutate({mutation:p,variables:{accountEntryId:t}})];case 2:return d=o.sent().data.invoice.key,r?a="".concat("https://cleverly-media.s3.eu-west-2.amazonaws.com","/").concat(d):(null==i||null===(v=i.location)||void 0===v||v.assign("".concat("https://cleverly-media.s3.eu-west-2.amazonaws.com","/").concat(d)),(null==window?void 0:null===(h=window.Capacitor)||void 0===h?void 0:null===(f=h.Plugins)||void 0===f?void 0:f.Browser)&&window.Capacitor.Plugins.Browser.open({url:"".concat("https://cleverly-media.s3.eu-west-2.amazonaws.com","/").concat(d)})),[2,a];case 3:return m=o.sent(),(0,u.Tb)({message:m,section:"fetch"}),[3,4];case 4:return[2]}})}),function(n){return c.apply(this,arguments)}),p=(0,a.Ps)(s())},9489:function(n,e,t){"use strict";t.d(e,{I:function(){return p}});var r=t(26042),i=t(69396),o=t(99534),a=t(85893),l=t(5616),u=t(51233),s=t(50135),c=t(90948),d=t(15861),p=function(n){var e=n.leftLabel,t=n.rightLabel,l=n.error,s=(0,o.Z)(n,["leftLabel","rightLabel","error"]);return(0,a.jsxs)(u.Z,{direction:"row",alignItems:"center",children:[(0,a.jsx)(v,{sx:{borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"},error:l,children:(0,a.jsx)(d.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",whiteSpace:"nowrap"},children:e})}),(0,a.jsx)(h,(0,i.Z)((0,r.Z)({},s),{variant:"outlined",size:"small",error:l})),(0,a.jsx)(v,{sx:{borderTopRightRadius:"5px",borderBottomRightRadius:"5px"},error:l,children:(0,a.jsx)(d.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",whiteSpace:"nowrap"},variant:"body2",fontWeight:700,children:t})})]})},v=(0,c.ZP)(l.Z)(function(n){var e=n.theme;return{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:n.error?e.palette.danger.main:"#D9D9D9",minwidth:"28px",height:"28px",padding:"0 5px"}}),h=(0,c.ZP)(s.Z)(function(n){var e=n.theme,t=n.error;return{height:"28px","& .MuiInputBase-root ":{borderRadius:"0px","&.Mui-focused":{"& .MuiOutlinedInput-notchedOutline":{borderColor:t?e.palette.danger.main:"#D9D9D9"}},"& .MuiInputBase-input":{padding:"2px 14px",borderColor:t?e.palette.danger.main:"#D9D9D9",borderStyle:"solid",borderBottomWidth:"2.5px",borderTopWidth:"2px"},"& .MuiOutlinedInput-notchedOutline":{border:"none"}}}})},78232:function(n,e,t){"use strict";t.d(e,{F:function(){return j}});var r=t(14924),i=t(26042),o=t(69396),a=t(85893),l=t(45697),u=t.n(l),s=t(10166),c=t(80482),d=t(23776),p=t(98456),v=t(16143),h=t(50135),f=t(99534),m=t(29815),g=t(74061),b=t(6498),y=t(75438),x=t(15861),T=t(61730),Z=t(67294),I=(0,Z.createContext)({}),k=(0,Z.forwardRef)(function(n,e){var t=(0,Z.useContext)(I);return(0,a.jsx)("div",(0,i.Z)({ref:e},n,t))}),w=(0,Z.forwardRef)(function(n,e){var t=n.children,r=(0,f.Z)(n,["children"]),i=[];t.forEach(function(n){i.push(n),i.push.apply(i,(0,m.Z)(n.children||[]))});var o,l,u=(0,b.u)(),s=(0,T.Z)(u.breakpoints.up("sm"),{noSsr:!0}),c=i.length,d=s?36:48,p=function(n){return n.hasOwnProperty("group")?48:d},v=(l=(0,Z.useRef)(null),(0,Z.useEffect)(function(){null!=l.current&&l.current.resetAfterIndex(0,!0)},[c]),l);return(0,a.jsx)("div",{ref:e,children:(0,a.jsx)(I.Provider,{value:r,children:(0,a.jsx)(g.S_,{itemData:i,height:(c>8?8*d:i.map(p).reduce(function(n,e){return n+e},0))+16,width:"100%",ref:v,outerElementType:k,innerElementType:"ul",itemSize:function(n){return p(i[n])},overscanCount:5,itemCount:c,children:C})})})});function C(n){var e=n.data,t=n.index,r=n.style,l=e[t],u=(0,o.Z)((0,i.Z)({},r),{top:r.top+8});return l.hasOwnProperty("group")?(0,a.jsx)(y.Z,{component:"div",style:u,children:l.group},l.key):(0,a.jsx)(x.Z,(0,o.Z)((0,i.Z)({component:"li"},l[0]),{noWrap:!0,style:u,children:l[1].label}))}var j=function(n){var e=n.label,t=n.loading,r=n.placeholder,l=n.error,u=n.helperText,s=n.inputProps;return(0,a.jsx)(B,(0,o.Z)((0,i.Z)({},n),{disableListWrap:!0,PopperComponent:A,ListboxComponent:w,renderInput:function(n){return(0,a.jsx)(h.Z,(0,o.Z)((0,i.Z)({},n,s),{error:l,helperText:u,label:e,placeholder:r,color:"secondary",variant:"standard",InputProps:(0,o.Z)((0,i.Z)({},n.InputProps,(null==s?void 0:s.InputProps)||{}),{endAdornment:(0,a.jsxs)(a.Fragment,{children:[t?(0,a.jsx)(p.Z,{color:"inherit",size:20}):null,n.InputProps.endAdornment]})})}))},renderOption:function(n,e,t){return[n,e,t.index]},renderGroup:function(n){return n}}))};j.defaultProps={value:null,onChange:function(){},label:"",loading:!1,error:!1,onOpen:function(){},options:[],inputProps:{},withoutSelectIcon:!1},j.propTypes={value:u().shape({value:u().any,label:u().string}),onChange:u().func,label:u().string,loading:u().bool,onOpen:u().func,options:u().arrayOf(u().shape({value:u().any,label:u().string})),inputProps:u().object,withoutSelectIcon:u().bool,inputValue:u().string,onInputChange:u().func};var A=(0,s.Z)(v.Z)((0,r.Z)({zIndex:"12000 !important"},"& .".concat(c.Z.listbox),{boxSizing:"border-box","& ul":{padding:0,margin:0}})),B=(0,s.Z)(d.Z)(function(n){var e=n.withoutSelectIcon;return{"& .MuiAutocomplete-root":{cursor:"pointer"},"& .MuiAutocomplete-popper":{zIndex:"12000 "},"& .MuiAutocomplete-endAdornment":{"& .MuiButtonBase-root.MuiIconButton-root.MuiAutocomplete-popupIndicator":{"& .MuiSvgIcon-root":(0,i.Z)({},e&&{display:"none"})}}}})},35381:function(n,e,t){"use strict";t.d(e,{il:function(){return o},j$:function(){return r},wo:function(){return i}});var r=function(n,e){if(Array.isArray(e)){var t,r,i=null;return e.forEach(function(e){var t,r,o=null===(t=n.timings)||void 0===t?void 0:t.find(function(n){return n.status===e});i=(null==o?void 0:null===(r=o.user)||void 0===r?void 0:r.fullName)||i}),i}var o=null===(t=n.timings)||void 0===t?void 0:t.find(function(n){return n.status===e});return(null==o?void 0:null===(r=o.user)||void 0===r?void 0:r.fullName)||null},i=function(n,e){if(Array.isArray(e)){var t,r=null;return e.forEach(function(e){var t,i=null===(t=n.timings)||void 0===t?void 0:t.find(function(n){return n.status===e});r=(null==i?void 0:i.id)||r}),r}var i=null===(t=n.timings)||void 0===t?void 0:t.find(function(n){return n.status===e});return(null==i?void 0:i.id)||null},o=function(n,e){return!n||n>e}},97432:function(n,e,t){"use strict";t.d(e,{l:function(){return r}});var r=function(n,e){var t=Math.pow(10,e);return Math.round(n*t)/t}},98552:function(n,e,t){"use strict";t.d(e,{SR:function(){return a},Tq:function(){return l},YK:function(){return o},cJ:function(){return i},pX:function(){return r}});var r=["customerVat","supplier"],i=["ProformaInvoiceCustomer","ProformaInvoiceSupplier"],o=["customerPpmInvoice","supplierPpmInvoice"],a={customer:["customerVat","ProformaInvoiceCustomer","customerPpmInvoice"],supplier:["supplier","ProformaInvoiceSupplier","supplierPpmInvoice"]},l={customerVat:"Customer VAT Invoice",supplier:"Supplier Invoice",ProformaInvoiceCustomer:"Customer ad-hoc Invoice",ProformaInvoiceSupplier:"Supplier ad-hoc Invoice",customerPpmInvoice:"PPM Customer Invoice",supplierPpmInvoice:"PPM Supplier Invoice"}},14381:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return R}});var r=t(85893),i=t(11163),o=t.n(i),a=t(67294),l=t(6812),u=t(41085),s=t(45697),c=t(9270),d=t(62140),p=t(11585),v=t(16540),h=t(71225),f=t(30016),m=t(4380),g=t(1306),b=t(76225),y=t(85113),x=t(2845),T=function(n){var e,t,i,o,a,l,u,s,T,Z,I=n.tenant,k=n.refetch,w=n.location,C=(0,x.x)().hasRole,j=(0,y.WE)(w,"registered"),A=w.createdAt;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(c.Z,{children:(0,r.jsxs)(d.Z,{md:4,children:[(0,r.jsx)(m.g,{avatar:(0,h.Q)(null===(e=w.customer[0].account)||void 0===e?void 0:e.media),entity:{id:w.id,description:w.customer[0].account.name,name:I.fullName||"Not Specified"},entityName:"Tenant"}),(0,r.jsx)(b.J,{data:{accountName:null,country:null==j?void 0:null===(t=j.address)||void 0===t?void 0:null===(i=t.country)||void 0===i?void 0:i.name,createdAt:A,fullName:null==I?void 0:I.fullName,position:null==I?void 0:I.position,phone:null==I?void 0:I.phone,xeroContactId:null===(o=w.customer)||void 0===o?void 0:null===(a=o[0])||void 0===a?void 0:null===(l=a.account)||void 0===l?void 0:null===(u=l.meta)||void 0===u?void 0:u.xeroContactId}}),(0,r.jsx)(p.Z,{title:"Contact",children:(0,r.jsxs)("div",{children:[(0,r.jsx)(v.Z,{rows:[{key:"Name",value:"".concat(I.nameFirst," ").concat(I.nameLast)},{key:"Phone",value:I.phone},{key:"Email",value:I.email}]}),(0,r.jsx)("br",{})]})}),I&&(0,r.jsx)(g.f,{address:null===(T=null===(s=null==I?void 0:I.booking[0])||void 0===s?void 0:s.location.addresses[0])||void 0===T?void 0:T.address,entity:"Account",entityId:null==I?void 0:I.id,id:null==I?void 0:I.id,refetch:k,title:"Registered Address",type:"registered"}),C("admin")&&(0,r.jsx)(f.E,{entity:"Account",entityId:I.id,open:!0,title:"Notes"})]})})})};T.propTypes={tenant:s.object.isRequired};var Z=t(7297),I=t(75063);function k(){var n=(0,Z.Z)(['\n  query GetTenant($id: Int!) {\n    tenant: User_by_pk(id: $id) {\n      email\n      fullName\n      id\n      phone\n      invoiceThreshold\n      meta\n      nameFirst\n      nameLast\n      booking: TenantBookings {\n        id\n        location: Location {\n          name\n          id\n          addresses: Addresses {\n            address: Address {\n              geo\n              id\n              invoicingEntity\n              name\n              county\n              addressLine1\n              addressLine2\n              addressLine3\n              postCode\n              city\n            }\n          }\n          customer: Account_Locations(where: { Account: { type: { _eq: "customer" } } }) {\n            account: Account {\n              id\n              companyNumber\n              createdAt\n              name\n              status\n              type\n              updatedAt\n              website\n              clientType\n              managerId\n              vatId\n              meta\n              media: Media {\n                id\n                medium: Medium {\n                  id\n                  category\n                  filename\n                  meta\n                  type\n                }\n              }\n              manager: Manager {\n                id\n                fullName\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n']);return k=function(){return n},n}var w=(0,I.Ps)(k()),C=t(98456),j=t(51233),A=t(67259),B=t(62302),P=function(n){var e,t,s,c,d,p,v,h,f,m,g,b,y,Z,I,k,P,S,E,M,R,N,z,L,_,O,q,F=n.id,D=(0,x.x)().hasRole,W=(0,i.useRouter)().query,U=(0,a.useMemo)(function(){return W.tab||"details"},[W.tab]),K=(0,l.a)(w,{fetchPolicy:"no-cache",variables:{id:F}}),V=K.loading,$=K.data,X=K.error,G=K.refetch;if(X)return o().push("/404"),!1;if(V)return(0,r.jsx)(j.Z,{height:"100%",width:"100%",justifyContent:"center",alignItems:"center",children:(0,r.jsx)(C.Z,{color:"secondary"})});var J=[(0,r.jsx)("div",{active:"details"===U||!U,label:"Details",children:(0,r.jsx)(T,{tenant:$.tenant,refetch:G,location:$.tenant.booking[0].location})}),(0,r.jsx)("div",{active:"work-orders"===U,label:"Work Orders",children:(0,r.jsx)(A.A,{filtersVisibilityModel:{customer:D("admin"),location:D(["admin","supplier"]),user:D("supplier"),manager:!1,customerManager:!1,accountManager:!1},entityRelationToFetch:{locationId:null===(t=null==$?void 0:null===(e=$.tenant)||void 0===e?void 0:e.booking[0])||void 0===t?void 0:null===(s=t.location)||void 0===s?void 0:s.id},initialFilters:{startDate:null,endDate:null,status:null,id:null,filterType:"tenants_work_orders_tab"}})}),(0,r.jsx)("div",{active:"planned-maintenance"===U,label:"Planned Maintenance",children:(0,r.jsx)(B.A,{locationId:null===(d=null==$?void 0:null===(c=$.tenant)||void 0===c?void 0:c.booking[0])||void 0===d?void 0:null===(p=d.location)||void 0===p?void 0:p.id,locationName:null===(h=null==$?void 0:null===(v=$.tenant)||void 0===v?void 0:v.booking[0])||void 0===h?void 0:null===(f=h.location)||void 0===f?void 0:f.name,calendarInitialFilters:{filterType:"tenant_".concat(null===(g=null==$?void 0:null===(m=$.tenant)||void 0===m?void 0:m.booking[0])||void 0===g?void 0:null===(b=g.location)||void 0===b?void 0:b.id),locationId:null===(Z=null==$?void 0:null===(y=$.tenant)||void 0===y?void 0:y.booking[0])||void 0===Z?void 0:null===(I=Z.location)||void 0===I?void 0:I.id},hideCalendarFilters:["location"],tableInitialFilters:{filterType:"tenant_".concat(null===(P=null==$?void 0:null===(k=$.tenant)||void 0===k?void 0:k.booking[0])||void 0===P?void 0:null===(S=P.location)||void 0===S?void 0:S.id),locationId:null===(M=null==$?void 0:null===(E=$.tenant)||void 0===E?void 0:E.booking[0])||void 0===M?void 0:null===(R=M.location)||void 0===R?void 0:R.id},hideTableFilters:["location"],itemsInitialFilters:{locationId:null===(z=null==$?void 0:null===(N=$.tenant)||void 0===N?void 0:N.booking[0])||void 0===z?void 0:null===(L=z.location)||void 0===L?void 0:L.id,filterType:"tenant_".concat(null===(O=null==$?void 0:null===(_=$.tenant)||void 0===_?void 0:_.booking[0])||void 0===O?void 0:null===(q=O.location)||void 0===q?void 0:q.id)},hideItemsFilters:["location"],hideFinances:!0,hideItems:!0})})];return(0,r.jsx)(u.Z,{children:J.filter(function(n){return!n.props.hide}).map(function(n){return n})},U)},S=function(){var n=(0,i.useRouter)().query,e=(0,x.x)(),t=e.hasRole,a=e.user,l=t("tenant"),u=l?a.id:n.id;return u?(0,r.jsx)(P,{id:u,isTenant:l,adminId:null==a?void 0:a.adminId}):(o().push("/404"),null)},E=t(58849),M=function(){return(0,r.jsx)(S,{})};M.getLayout=function(n){return(0,r.jsx)(E.Z,{children:n})};var R=M}},function(n){n.O(0,[3662,367,6898,9809,2283,212,619,8890,2583,4135,8579,6043,1564,4244,1336,3911,3776,5370,2329,778,6540,4046,1023,9957,1870,2797,3282,8062,1207,2429,4061,597,4211,3704,1121,9792,6127,6799,8344,8849,3749,1741,7305,2781,798,2302,9774,2888,179],function(){return n(n.s=24903)}),_N_E=n.O()}]);