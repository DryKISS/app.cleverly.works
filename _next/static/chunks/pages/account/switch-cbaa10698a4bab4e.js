(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[461],{55843:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var i,a,r,o,d,c=t(39725),l=t(51174),m=t(67294),g=t(45697),p=t(10367),u=t(66349),s=t(55255),f={xxsSize:"0.25rem",xsSize:"0.5rem",smSize:"0.75rem",mdSize:"1rem",lgSize:"1.5rem",xlSize:"2rem",xxlSize:"2.5rem",xxxlSize:"3rem"},v=function(e){var n="",t=0;return(e.forEach(function(e){e.v&&(t++,n+="".concat(e.k,": ").concat(f[e.v+"Size"],";\n      ").concat(s.Z.desktop(i||(i=(0,l.Z)(["\n        ",": calc("," * 2);"])),e.k,f[e.v+"Size"]),"\n      "))}),0===t)?(0,p.iv)(a||(a=(0,l.Z)(["\n      margin-bottom: ",";\n      ","\n    "])),f.mdSize,s.Z.desktop(r||(r=(0,l.Z)(["\n        margin-bottom: calc("," * 2);"])),f.mdSize)):(0,p.iv)(o||(o=(0,l.Z)(["\n    ","\n  "])),n)},Z=function(e){var n=e.children,t=e.className,i=e.content,a=e.margin,r=e.marginX,o=e.marginY,d=e.marginTop,c=e.marginRight,l=e.marginBottom,g=e.marginLeft,p=e.padding,u=e.paddingX,s=e.paddingY,f=e.paddingTop,v=e.paddingRight,Z=e.paddingBottom,b=e.paddingLeft;return m.createElement(h,{className:t,margin:a,marginX:r,marginY:o,marginTop:d,marginRight:c,marginBottom:l,marginLeft:g,padding:p,paddingX:u,paddingY:s,paddingTop:f,paddingRight:v,paddingBottom:Z,paddingLeft:b},i||n)};Z.displayName="Space";var h=p.ZP.div(d||(d=(0,l.Z)(["\n  margin: 0;\n  padding: 0;\n  ","\n"])),function(e){var n=e.margin,t=e.marginBottom,i=e.marginTop,a=e.marginLeft,r=e.marginRight,o=e.marginX,d=e.marginY,l=e.padding,m=e.paddingBottom,g=e.paddingLeft,p=e.paddingRight,u=e.paddingTop,s=e.paddingX,f=e.paddingY;return v([{k:"margin",v:n},{k:"margin-bottom",v:t},{k:"margin-left",v:a},{k:"margin-right",v:r},{k:"margin-top",v:i},{k:"padding",v:l},{k:"padding-bottom",v:m},{k:"padding-left",v:g},{k:"padding-right",v:p},{k:"padding-top",v:u}].concat((0,c.Z)(d?[{k:"margin-top",v:d},{k:"margin-bottom",v:d}]:[]),(0,c.Z)(o?[{k:"margin-left",v:o},{k:"margin-right",v:o}]:[]),(0,c.Z)(f?[{k:"padding-top",v:f},{k:"padding-bottom",v:f}]:[]),(0,c.Z)(s?[{k:"padding-left",v:s},{k:"padding-right",v:s}]:[])))});Z.propTypes={children:g.node,content:g.string,margin:(0,g.oneOf)(Object.values(u.Z)),marginY:(0,g.oneOf)(Object.values(u.Z)),marginX:(0,g.oneOf)(Object.values(u.Z)),marginTop:(0,g.oneOf)(Object.values(u.Z)),marginRight:(0,g.oneOf)(Object.values(u.Z)),marginBottom:(0,g.oneOf)(Object.values(u.Z)),marginLeft:(0,g.oneOf)(Object.values(u.Z)),padding:(0,g.oneOf)(Object.values(u.Z)),paddingY:(0,g.oneOf)(Object.values(u.Z)),paddingX:(0,g.oneOf)(Object.values(u.Z)),paddingTop:(0,g.oneOf)(Object.values(u.Z)),paddingRight:(0,g.oneOf)(Object.values(u.Z)),paddingBottom:(0,g.oneOf)(Object.values(u.Z)),paddingLeft:(0,g.oneOf)(Object.values(u.Z))};var b=Z},17813:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var i,a=t(51174),r=t(67294),o=t(45697),d=t(10367),c=t(94303),l=t(74147),m=t(9008),g=t.n(m),p=function(e){var n=e.canonical,t=e.brand,i=e.meta,a=i.description,o=i.path,d=i.title;return r.createElement(g(),null,r.createElement("title",null,d," | ",t),r.createElement("meta",{name:"description",content:a,key:"description"}),r.createElement("meta",{rel:"canonical",href:n+o,key:"canonical"}),r.createElement("meta",{property:"og:title",content:d}),r.createElement("meta",{property:"og:description",content:a}),r.createElement("meta",{property:"og:url",content:n+o}),r.createElement("meta",{name:"twitter:url",content:n+o}),r.createElement("meta",{name:"twitter:title",content:d}),r.createElement("meta",{name:"twitter:description",content:a}))};p.displayName="MetaHead",p.propTypes={brand:o.string.isRequired,meta:o.object.isRequired};var u=t(35599),s=t(55843),f=t(28368),v=t(66349),Z=function(e){var n=e.children,t=e.fluid,i=e.meta,a=e.padding,o=e.pageHeading,d=(0,r.useContext)(c.Z).config,m=d.Brand,g=d.Canonical;return r.createElement(h,null,a&&r.createElement(s.Z,{paddingTop:a}),i&&r.createElement(p,{canonical:g,brand:m.name,meta:i}),r.createElement(l.Z,{fluid:t},o&&r.createElement(u.Z,o),n),a&&r.createElement(s.Z,{paddingBottom:a}))};Z.displayName="Page";var h=d.ZP.div(i||(i=(0,a.Z)(["\n  background-color: ",";\n"])),function(e){return e.theme.PAGE.backGroundColour});Z.propTypes={children:o.node.isRequired,fluid:o.bool,meta:(0,o.shape)({description:o.string.isRequired,path:o.string,title:o.string.isRequired}),padding:(0,o.oneOfType)([o.bool,(0,o.oneOf)(Object.values(v.Z))]),pageHeading:(0,o.shape)({center:o.bool,context:(0,o.oneOf)(Object.values(f.Z)),divider:o.bool,heading:o.any.isRequired,help:o.bool,helpContent:o.any,strapline:o.string})},Z.defaultProps={fluid:!1,padding:"md"};var b=Z},35599:function(e,n,t){"use strict";var i,a,r,o,d,c=t(51174),l=t(67294),m=t(45697),g=t(10367),p=t(55377),u=t(33006),s=t(28368),f=function(e){var n=e.center,t=e.children,i=e.context,a=e.divider,r=e.heading,o=e.help,d=e.helpContent,c=e.strapline;return l.createElement(v,{center:n,divider:a},l.createElement(Z,null,l.createElement(b,{content:r,context:i,pageHeading:!0}),c&&l.createElement("div",null,c)),(t||o)&&l.createElement(h,null,t||d),a&&l.createElement(O,{size:"md"}))};f.displayName="PageHeading";var v=g.ZP.header(i||(i=(0,c.Z)(["\n  align-items: center;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  margin-bottom: ",";\n  text-align: ",";\n"])),function(e){return!e.divider&&"2rem"},function(e){return e.center&&"center"}),Z=g.ZP.span(a||(a=(0,c.Z)(["\n  flex: 1;\n"]))),h=g.ZP.span(r||(r=(0,c.Z)(["\n  display: flex;\n  flex: 1;\n  justify-content: flex-end;\n"]))),b=(0,g.ZP)(u.Z)(o||(o=(0,c.Z)(["\n  margin-bottom: ",";\n"])),function(e){return e.divider?"0.5rem":"0"}),O=(0,g.ZP)(p.Z)(d||(d=(0,c.Z)(["\n  width: 100%;\n"])));f.propTypes={center:m.bool,children:m.element,context:(0,m.oneOf)(Object.values(s.Z)),divider:m.bool,heading:m.any.isRequired,help:m.bool,helpContent:m.any,strapline:m.string},f.defaultProps={center:!1,context:"primary",divider:!0,help:!1,helpContent:"",strapline:""},n.Z=f},21031:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/switch",function(){return t(90143)}])},90143:function(e,n,t){"use strict";t.r(n);var i=t(85893),a=t(67294),r=t(66252),o=t(11163),d=t.n(o),c=t(73987),l=t(17813),m=t(9270),g=t(62140),p=t(15214),u=t(84808),s=t(98456),f=function(){var e=(0,a.useState)(!0),n=e[0],t=e[1],f=(0,a.useState)(null),v=f[0],Z=f[1],h=(0,a.useContext)(c.Z).switchAccount,b=(0,r.x)(),O=(0,o.useRouter)().query;return((0,a.useEffect)(function(){O.id&&(b.clearStore(),h(O.id,function(e){t(!1),Z(e||"Error switching account")}).then(function(){d().reload()}))},[O.id]),n)?(0,i.jsx)(u.Z,{sx:{zIndex:1e5},open:!0,children:(0,i.jsx)(s.Z,{color:"secondary"})}):(0,i.jsx)(l.Z,{children:(0,i.jsx)(m.Z,{children:(0,i.jsx)(g.Z,{md:6,offset:{md:3},style:{marginTop:"20px"},children:v&&(0,i.jsx)(p.Z,{content:v,context:"warning"})})})})};n.default=f}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=21031)}),_N_E=e.O()}]);