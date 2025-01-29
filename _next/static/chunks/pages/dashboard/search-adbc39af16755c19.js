(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9673],{92833:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/search",function(){return n(55048)}])},75118:function(e,t,n){"use strict";n.d(t,{p:function(){return o}});var o=function(e){var t=e.id,n=e.number,o=e.invoiceNumber,r=e.numberPrefix,i=e.numberSuffix,c=t?"".concat(r," ").concat(n||t," ").concat(i):"";return o?"".concat(c," / ").concat(o):c}},16166:function(e,t,n){"use strict";n.d(t,{B:function(){return f}});var o=n(7297),r=n(29815),i=n(85893),c=n(45697),s=n(10367),u=n(41564),a=n(51466),l=n(31312),d=n(52150),x=n(74944);function p(){var e=(0,o.Z)(["\n  display: flex;\n  align-items: center;\n"]);return p=function(){return e},e}var f=function(e){var t=e.size,n=e.value,o=e.withTooltip,c=e.textColor,s=(0,d.t)(n),p=(0,x.x)().hasRole,f=(0,r.Z)(l.iz).concat((0,r.Z)(l.yW),(0,r.Z)(l.l8)).find(function(e){return e.value===n})||{statusText:""},m=f.text,h=f.customerText,j=f.supplierText,Z=p("admin")?m:p("supplier")?j||m:p("customer")&&h||m;return o?(0,i.jsx)(u.Z,{content:Z,context:"black",children:(0,i.jsx)(v,{children:(0,i.jsx)("svg",{height:"16",width:"16",children:(0,i.jsx)("circle",{cx:"8",cy:"8",r:"6",fill:s})})})}):(0,i.jsxs)(v,{children:[(0,i.jsx)("svg",{height:"16",width:"16",children:(0,i.jsx)("circle",{cx:"8",cy:"8",r:"6",fill:s})}),(0,i.jsx)(a.Z,{size:t,context:c,children:Z})]})},v=s.ZP.span.withConfig({displayName:"status__StyledLabel",componentId:"sc-92a50dbd-0"})(p());f.propTypes={size:c.string,value:c.string.isRequired,withTooltip:c.bool},f.defaultProps={size:"sm",withTooltip:!1}},52150:function(e,t,n){"use strict";n.d(t,{b:function(){return i},t:function(){return r}});var o=n(83372),r=function(e){switch(e){case"raised":case"pending":default:return o.Q.COLOUR.info;case"offered":return o.Q.COLOUR.warning;case"accepted":return o.Q.COLOUR.success;case"inProgress":return o.Q.COLOUR.primary;case"completed":return o.Q.COLOUR.muiLightGray;case"reportSent":case"quoteRejected":return o.Q.COLOUR.muiGray;case"invoiceSent":return o.Q.COLOUR.secondary;case"customerPaid":case"supplierPaid":case"quoteReceived":return o.Q.COLOUR.help;case"closed":case"quoteClosed":return o.Q.COLOUR.black;case"quoteOffered":return o.Q.COLOUR.danger;case"quoteNew":return o.Q.COLOUR.muiLightViolet;case"quoteSent":return o.Q.COLOUR.muiInfo}},i=function(e){switch(e){case"raised":case"pending":default:return"info";case"offered":return"warning";case"accepted":return"success";case"inProgress":case"quoteReceived":return"primary";case"completed":return"muiLightGray";case"reportSent":return"muiGray";case"invoiceSent":return"secondary";case"customerPaid":case"supplierPaid":return"help";case"quoteClosed":case"closed":case"quoteCancelled":case"quoteRejected":return"black";case"quoteOffered":return"danger";case"quoteNew":return"muiLightViolet";case"quoteSent":return"muiInfo"}}},31312:function(e,t,n){"use strict";n.d(t,{AK:function(){return u},E6:function(){return r},cj:function(){return s},hD:function(){return l},iz:function(){return i},l8:function(){return a},yW:function(){return c}});var o=n(83372),r=[{text:"Quotation Requested",value:"supplierQuoteRequested",context:"info"},{text:"Quotation Completed",value:"supplierQuoteComplete",context:"help"},{text:"Draft Quotation",value:"supplierQuoteDraft",context:"info"},{text:"Awaiting threshold approval",value:"waitingThresholdApproval",context:"info"},{text:"Quotation Refused",value:"supplierQuoteRefused",context:"danger"},{text:"Quotation Sent",value:"supplierQuoteSent",context:"success"},{text:"Quotation Accepted",value:"quotationAccepted",context:"success"},{text:"Quotation Rejected",value:"quotationRejected",context:"danger"},{text:"Quotation Updated",value:"supplierQuoteUpdated",context:"success"}],i=[{text:"New Quote",value:"quoteNew",customerText:"Quote issued",supplierText:null},{text:"Sent to Supplier(s)",value:"quoteOffered",customerText:"Quote issued",supplierText:"Quote offered"},{text:"Received from Supplier(s)",value:"quoteReceived",customerText:"Final review",supplierText:"Quote submitted"},{text:"Sent to Customer",value:"quoteSent",customerText:"Awaiting approval",supplierText:"Awaiting approval"},{text:"Quote Accepted",value:"quoteAccepted",customerText:"Quote accepted",supplierText:"Quote accepted"},{text:"Quote Rejected",value:"quoteRejected",customerText:"Quote rejected",supplierText:"Quote rejected"},{text:"Canceled",value:"quoteCancelled",customerText:"Cancelled",supplierText:null},{text:"Closed",value:"quoteClosed",customerText:"Closed",supplierText:"Closed"}],c=[{text:"Pending",value:"pending",colour:o.Q.COLOUR.info},{text:"Raised",value:"raised",colour:o.Q.COLOUR.info},{text:"Offered",value:"offered",colour:o.Q.COLOUR.warning},{text:"Accepted",value:"accepted",colour:o.Q.COLOUR.success},{text:"In Progress",value:"inProgress",colour:o.Q.COLOUR.primary},{text:"Completed",value:"completed",colour:o.Q.COLOUR.muiLightGray},{text:"Awaiting threshold approval",value:"waitingThresholdApproval",colour:o.Q.COLOUR.info},{text:"Report Sent",value:"reportSent",colour:o.Q.COLOUR.muiGray},{text:"Invoice Sent",value:"invoiceSent",colour:o.Q.COLOUR.secondary},{text:"Customer Paid",value:"customerPaid",colour:o.Q.COLOUR.help},{text:"Supplier Paid",value:"supplierPaid",colour:o.Q.COLOUR.help},{text:"Canceled",value:"canceled",colour:o.Q.COLOUR.black},{text:"Closed",value:"closed",colour:o.Q.COLOUR.black},{text:"On Hold",value:"onHold",colour:o.Q.COLOUR.black},{text:"Continued",value:"continued",colour:o.Q.COLOUR.primary},{text:"Paused",value:"paused",colour:o.Q.COLOUR.black}],s=[{label:"Pending",value:"pending"},{label:"Raised",value:"raised"},{label:"Offered",value:"offered"},{label:"Accepted",value:"accepted"},{label:"In Progress",value:"inProgress"},{label:"Completed",value:"completed"},{label:"Awaiting threshold approval",value:"waitingThresholdApproval"},{label:"Report Sent",value:"reportSent"},{label:"Invoice Sent",value:"invoiceSent"},{label:"Customer Paid",value:"customerPaid"},{label:"Supplier Paid",value:"supplierPaid"},{label:"Quote",value:"quote"},{label:"Site Visit",value:"siteVisit"},{label:"Canceled",value:"canceled"},{label:"Closed",value:"closed"},{label:"On Hold",value:"onHold"},{label:"Continued",value:"continued"},{label:"Paused",value:"paused"}],u=[{text:"Uplift Draft",value:"upliftDraft",context:"info"},{text:"Supplier Uplift Requested",value:"supplierUpliftRequested",context:"secondary"},{text:"Uplift Requested Send to Customer",value:"upliftRequestSendCustomer",context:"secondary"},{text:"Uplift Approved",value:"customerUpliftApproved",context:"success"},{text:"Uplift Rejected",value:"customerUpliftRejected",context:"danger"}],a=[{text:"Offered",value:"offered",context:"info"},{text:"Raised",value:"raised",context:"info"},{text:"Pending",value:"pending",context:"info"},{text:"Accepted",value:"accepted",context:"info"},{text:"Uplift Requested by Supplier",value:"supplierUpliftRequested",context:"info"},{text:"Uplift Draft",value:"upliftDraft",context:"info"},{text:"Uplift Requested Send Customer",value:"upliftRequestSendCustomer",context:"info"},{text:"Uplift Requested Approved",value:"customerUpliftApproved",context:"success"},{text:"In Dispute",value:"inDispute",context:"info"},{text:"Resumed",value:"resumed",context:"Danger"},{text:"Quote Sent",value:"quoteSent",context:"info"},{text:"Quote Offered",value:"quoteOffered",context:"info"},{text:"Report Sent Supplier",value:"reportSentSupplier",context:"info"},{text:"Dispute Resolved",value:"disputeResolved",context:"info"},{text:"Validated",value:"validated",context:"success"},{text:"Un Validated",value:"unvalidated",context:"success"},{text:"Paused",value:"paused",context:"info"},{text:"TimingChanged",value:"timingChanged",context:"info"},{text:"Customer Paid",value:"customerPaid",context:"info"},{text:"In Progress",value:"inProgress",context:"info"},{text:"PPM Invoice Created",value:"ppmInvoiceCreated",context:"success"},{text:"Late Arrival",value:"lateArrival",context:"info"},{text:"Pricing Changed",value:"pricingChanged",context:"info"},{text:"Report Sent",value:"reportSent",context:"info"},{text:"Invoice Sent Supplier",value:"invoiceSentSupplier",context:"info"},{text:"Invoice Sent",value:"invoiceSent",context:"info"},{text:"Invoice Sent Customer",value:"invoiceSentCustomer",context:"info"},{text:"Quote Accepted",value:"quoteAccepted",context:"info"},{text:"On Hold",value:"onHold",context:"info"},{text:"Continued",value:"continued",context:"info"},{text:"Quote Received",value:"quoteReceived",context:"info"},{text:"Quote New",value:"quoteNew",context:"info"},{text:"Closed",value:"closed",context:"danger"},{text:"Re posted",value:"reposted",context:"info"},{text:"Supplier Paid",value:"supplierPaid",context:"info"},{text:"Rejected",value:"rejected",context:"info"},{text:"Completed",value:"completed",context:"info"},{text:"Canceled",value:"canceled",context:"danger"}],l=[{value:"complete",text:"Complete"},{value:"returnVisitByAnother",text:"Return Visit By Another"},{value:"returnVisit",text:"Return Visit"},{value:"completeCertificate",text:"Complete Certificate"},{value:"couldNotDo",text:"Could Not Do"}]},55048:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ex}});var o=n(85893),r=n(19076),i=n(47568),c=n(26042),s=n(69396),u=n(828),a=n(97582),l=n(67294),d=n(73359),x=n(7297),p=n(75063);function f(){var e=(0,x.Z)(["\n  query search($adminId: Int, $index: String, $keyword: String) {\n    Search(adminId: $adminId, index: $index, keyword: $keyword) {\n      data\n    }\n  }\n"]);return f=function(){return e},e}var v=(0,p.Ps)(f()),m=n(42283),h=n(11163),j=n(76600),Z=n(43916),g=n(55563),C=n(19639),S=n(77439),b=n(55843),R=n(16551),O=n(10367),y=n(9270),w=n(62140),Q=n(33006),P=n(51466),q=n(93750),U=n(40826),L=n(97303),_=n(55377),A=n(2305);function N(){var e=(0,x.Z)(["\n  margin-bottom: 0.5rem;\n"]);return N=function(){return e},e}var z=function(e){var t=e.data;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(y.Z,{children:[(0,o.jsxs)(w.Z,{md:2,children:[(0,o.jsx)(Q.Z,{content:"Users",tag:"h2"}),(0,o.jsxs)(P.Z,{children:[t[1]," results"]})]}),(0,o.jsx)(w.Z,{md:10,children:(0,o.jsx)(y.Z,{children:t[0].slice(0,8).map(function(e,t){var n=e._source,r=n.email,i=n.nameFirst,c=n.nameLast,s=n.phone;return(0,o.jsx)(w.Z,{sm:12,md:6,lg:3,children:(0,o.jsx)(T,{bordered:!0,shadow:!0,children:(0,o.jsxs)(q.Z,{children:[(0,o.jsx)(P.Z,{size:"lg",children:"".concat(i," ").concat(c)}),(0,o.jsxs)(P.Z,{size:"sm",children:[(0,o.jsx)(U.Z,{icon:"phone"})," ",(0,o.jsx)(L.Z,{to:"tel:".concat(s),children:s})]}),(0,o.jsxs)(P.Z,{size:"sm",children:[(0,o.jsx)(U.Z,{icon:"envelope"})," ",(0,o.jsx)(L.Z,{to:"mailto:".concat(r),children:r})]})]})})},"user".concat(t))})})})]}),(0,o.jsx)(_.Z,{})]})},T=(0,O.ZP)(A.Z).withConfig({displayName:"user__StyledCard",componentId:"sc-8e2fddfc-0"})(N()),I=n(26186),k=n(79292),D=n(52150),V=n(16166),E=n(75118),F=n(53767);function H(){var e=(0,x.Z)(["\n  position: absolute;\n  right: 0.5rem;\n  top: -0.5rem;\n  z-index: 10000;\n"]);return H=function(){return e},e}function B(){var e=(0,x.Z)(["\n  margin-bottom: 0.5rem;\n"]);return B=function(){return e},e}function G(){var e=(0,x.Z)(["\n  display: flex;\n  justify-content: center;\n"]);return G=function(){return e},e}var $=function(e){var t,n,r=e.data,i=e.handleExpand,c=e.index,s=(0,F.q)(),u=(0,h.useRouter)(),a=null===(t=s.admin.jobSetting)||void 0===t?void 0:t.jobNumberPrefix,l=null===(n=s.admin.jobSetting)||void 0===n?void 0:n.jobNumberSuffix,d=8,x=1;"job"===c&&(d=16,x=Math.ceil(r[1]/16));var p=function(e){u.query.page=e,u.push(u)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(y.Z,{children:[(0,o.jsxs)(w.Z,{md:2,children:[(0,o.jsx)(Q.Z,{content:"Work orders",tag:"h2"}),(0,o.jsxs)(P.Z,{children:[r[1]," results"]}),(0,o.jsx)(b.Z,{}),"job"===c&&(0,o.jsxs)(L.Z,{onClick:function(){return i(null)},size:"sm",to:"",children:[(0,o.jsx)(U.Z,{icon:"caret-left"}),"Back to results"]})]}),(0,o.jsx)(w.Z,{md:10,children:(0,o.jsx)(y.Z,{children:r[0].slice(0,d).map(function(e,t){var n=e._source,r=n.date,i=n.id,c=n.customerName,s=n.locationName,u=n.serviceName,d=n.status,x=n.supplierName,p=n.title,f=(0,D.t)(d);return(0,o.jsxs)(w.Z,{sm:12,md:6,lg:3,children:[(0,o.jsx)(W,{children:(0,o.jsx)("svg",{height:"16",width:"16",children:(0,o.jsx)("circle",{cx:"8",cy:"8",r:"6",fill:f})})}),"//@ts-ignore",(0,o.jsx)(M,{bordered:!0,shadow:!0,to:"/dashboard/issues/view?id=".concat(i),children:(0,o.jsxs)(q.Z,{children:[(0,E.p)({id:i,numberPrefix:a,numberSuffix:l}),(0,o.jsx)(P.Z,{size:"sm",children:p}),(0,o.jsxs)(P.Z,{size:"sm",children:[c," @ ",s]}),(0,o.jsx)(P.Z,{size:"sm",children:"Supplier: ".concat(x)}),(0,o.jsx)(P.Z,{size:"sm",children:"".concat(u)}),r&&(0,o.jsx)(P.Z,{size:"sm",children:"Date: ".concat((0,I.Z)(r))}),(0,o.jsx)(V.B,{value:d})]})})]},"job".concat(t))})})})]}),"job"===c&&(0,o.jsx)(k.Z,{breakCount:5,currentPage:1,pageCount:x,onPageChange:p,size:"md",showNextAndPrev:!1}),!c&&(0,o.jsx)(X,{children:(0,o.jsx)(S.Z,{content:r[1]>8&&"Expand",onClick:function(){return i("job")},size:"sm"})}),(0,o.jsx)(_.Z,{})]})},W=O.ZP.div.withConfig({displayName:"job__StyledSvg",componentId:"sc-cc100f98-0"})(H()),M=(0,O.ZP)(A.Z).withConfig({displayName:"job__StyledCard",componentId:"sc-cc100f98-1"})(B()),X=O.ZP.div.withConfig({displayName:"job__StyledDiv",componentId:"sc-cc100f98-2"})(G()),K=n(2931);function J(){var e=(0,x.Z)(["\n  font-size: 0.75rem !important;\n"]);return J=function(){return e},e}function Y(){var e=(0,x.Z)(["\n  margin-bottom: 0.5rem;\n"]);return Y=function(){return e},e}var ee=function(e){var t=e.data;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(y.Z,{children:[(0,o.jsxs)(w.Z,{md:2,children:[(0,o.jsx)(Q.Z,{content:"Locations",tag:"h2"}),(0,o.jsxs)(P.Z,{children:[t[1]," results"]})]}),(0,o.jsx)(w.Z,{md:10,children:(0,o.jsx)(y.Z,{children:t[0].slice(0,8).map(function(e,t){var n=e._source,r=n.addresses,i=n.customerName,c=n.id,s=n.name;return(0,o.jsx)(w.Z,{sm:12,md:6,lg:3,children:(0,o.jsx)(en,{bordered:!0,shadow:!0,to:"/dashboard/properties/view?id=".concat(c),children:(0,o.jsxs)(q.Z,{children:[(0,o.jsx)(P.Z,{size:"lg",children:s}),(0,o.jsx)(P.Z,{size:"md",children:i}),r.slice(0,1).map(function(e,t){var n=e.address,r=n.addressLine1,i=n.addressLine2,c=n.addressLine3,s=n.city,u=n.county,a=n.postCode;return(0,o.jsx)(et,{county:u,line1:r,line2:i,line3:c,postcode:a,town:s},"address".concat(t))})]})})},"location".concat(t))})})})]}),(0,o.jsx)(_.Z,{})]})},et=(0,O.ZP)(K.Z).withConfig({displayName:"location__StyledAddress",componentId:"sc-e15a38f2-0"})(J()),en=(0,O.ZP)(A.Z).withConfig({displayName:"location__StyledCard",componentId:"sc-e15a38f2-1"})(Y()),eo=n(65414);function er(){var e=(0,x.Z)(["\n  position: absolute;\n  right: 0;\n  top: -1rem;\n  z-index: 10000;\n"]);return er=function(){return e},e}function ei(){var e=(0,x.Z)(["\n  margin-bottom: 0.5rem;\n"]);return ei=function(){return e},e}var ec=function(e){var t=e.data;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(y.Z,{children:[(0,o.jsxs)(w.Z,{md:2,children:[(0,o.jsx)(Q.Z,{content:"Accounts",tag:"h2"}),(0,o.jsxs)(P.Z,{children:[t[1]," results"]})]}),(0,o.jsx)(w.Z,{md:10,children:(0,o.jsx)(y.Z,{children:t[0].slice(0,8).map(function(e,t){var n=e._source,r=n.id,i=n.name,c=n.ownerName,s=n.ownerPhone,u=n.ownerEmail,a=n.type;return(0,o.jsxs)(w.Z,{sm:12,md:6,lg:3,children:[(0,o.jsx)(es,{context:"customer"===a?"primary":"secondary",size:"xs",children:(0,o.jsx)(U.Z,{icon:"customer"===a?"user-tie":"user-cog"})}),(0,o.jsx)(eu,{bordered:!0,shadow:!0,to:"/dashboard/".concat(a,"s/view?id=").concat(r),children:(0,o.jsxs)(q.Z,{children:[(0,o.jsx)(P.Z,{size:"lg",children:i}),(0,o.jsxs)(P.Z,{size:"sm",children:[(0,o.jsx)(U.Z,{icon:"user-tie"})," ",c]}),(0,o.jsxs)(P.Z,{size:"sm",children:[(0,o.jsx)(U.Z,{icon:"phone"})," ",(0,o.jsx)(L.Z,{to:"tel:".concat(s),children:s})]}),(0,o.jsxs)(P.Z,{size:"sm",children:[(0,o.jsx)(U.Z,{icon:"envelope"})," ",(0,o.jsx)(L.Z,{to:"mailto:".concat(u),children:u})]})]})})]},"account".concat(t))})})})]}),(0,o.jsx)(_.Z,{})]})},es=(0,O.ZP)(eo.Z).withConfig({displayName:"account__StyledAvatar",componentId:"sc-9a35288-0"})(er()),eu=(0,O.ZP)(A.Z).withConfig({displayName:"account__StyledCard",componentId:"sc-9a35288-1"})(ei()),ea=n(74944),el=["",""],ed=function(){var e=(0,h.useRouter)(),t=e.query.q,n=(0,ea.x)().user,r=(0,l.useState)(el),x=r[0],p=r[1],f=(0,l.useState)(el),O=f[0],y=f[1],w=(0,l.useState)(el),Q=w[0],P=w[1],q=(0,l.useState)(el),U=q[0],L=q[1],_=(0,l.useState)(),A=_[0],N=_[1],T=(0,l.useState)(t),I=T[0],k=T[1],D=(0,m.cI)(),V=D.errors,E=D.handleSubmit,F=D.register,H=D.setValue,B=D.trigger;(0,l.useEffect)(function(){k(t),H("q",t),t&&B()},[t]);var G,W=(0,u.Z)((0,d.t)(v,{variables:{adminId:n.adminId,index:A,keyword:I},onCompleted:function(e){var t=e.Search.data.hits.hits,n=t.filter(function(e){return"account"===e._index}),o=t.filter(function(e){return"job"===e._index}),r=t.filter(function(e){return"location"===e._index}),i=t.filter(function(e){return"user"===e._index});p([n,n.length]),y([o,o.length]),P([r,r.length]),L([i,i.length])}}),1)[0],M=(G=(0,i.Z)(function(t){return(0,a.__generator)(this,function(n){return p(el),y(el),P(el),L(el),N(null),k(t.q),W(),e.push({pathname:"/dashboard/search",query:{q:t.q}},void 0,{shallow:!0}),[2]})}),function(e){return G.apply(this,arguments)}),X=function(e){N(e)},K={outline:!0,size:"sm"};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(j.Z,{handleSubmit:E(M),children:(0,o.jsxs)(Z.Z,{children:[(0,o.jsx)(g.Z,{errors:V,name:"q",placeholder:"Search",register:F}),(0,o.jsxs)(C.Z,{addonType:"append",children:[(0,o.jsx)(S.Z,{content:"Clear",type:"reset",size:"sm"}),(0,o.jsx)(S.Z,{content:"Search",type:"submit",size:"sm"})]})]})}),(0,o.jsx)(b.Z,{marginBottom:"xs"}),(0,o.jsxs)(R.Z,{align:"flex-start",children:[(0,o.jsx)(S.Z,(0,s.Z)((0,c.Z)({},K),{content:"All",context:null===A?"success":"secondary",onClick:function(){return X(null)}})),(0,o.jsx)(S.Z,(0,s.Z)((0,c.Z)({},K),{content:"Work Orders",context:"job"===A?"success":"secondary",onClick:function(){return X("job")}})),(0,o.jsx)(S.Z,(0,s.Z)((0,c.Z)({},K),{content:"Locations",context:"location"===A?"success":"secondary",onClick:function(){return X("location")}})),(0,o.jsx)(S.Z,(0,s.Z)((0,c.Z)({},K),{content:"Accounts",context:"account"===A?"success":"secondary",onClick:function(){return X("account")}})),(0,o.jsx)(S.Z,(0,s.Z)((0,c.Z)({},K),{content:"Users",context:"user"===A?"success":"secondary",onClick:function(){return X("user")}}))]}),(0,o.jsx)(b.Z,{}),O[0].length>0&&(0,o.jsx)($,{data:O,handleExpand:X,index:A}),Q[0].length>0&&(0,o.jsx)(ee,{data:Q}),x[0].length>0&&(0,o.jsx)(ec,{data:x}),U[0].length>0&&(0,o.jsx)(z,{data:U})]})},ex=function(){return(0,o.jsx)(r.Z,{pageHeading:{heading:"Search"},View:(0,o.jsx)(ed,{})})}}},function(e){e.O(0,[2283,212,7645,1564,2439,6996,9774,2888,179],function(){return e(e.s=92833)}),_N_E=e.O()}]);