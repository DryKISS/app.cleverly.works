(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9857],{94992:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/notifications",function(){return n(56616)}])},31113:function(e,t,n){"use strict";n.d(t,{H:function(){return c}});var i=n(26042),r=n(85893),o=n(45697),a=n(55377),s=n(16551),u=n(77439),c=function(e){var t=e.children,n=e.content,o=e.context,c=e.data,l=e.disabled,d=e.handleClick,f=e.size,v=e.type;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{size:"sm"}),(0,r.jsxs)(s.Z,{align:"flex-end",children:[t,(0,r.jsx)(u.Z,(0,i.Z)({content:n,context:o,disabled:l,onClick:d,size:f,type:v},c))]})]})};c.propTypes={children:o.node,content:o.string,context:o.string,data:o.object,disabled:o.bool,handleClick:o.func,size:o.string,type:o.string},c.defaultProps={content:"Add",context:"secondary",disabled:!1,size:"sm",type:"button"}},87336:function(e,t,n){"use strict";n.d(t,{t:function(){return c}});var i=n(85893),r=n(67294),o=n(45697),a=n(11163),s=n(98209),u=n(16540),c=(0,r.forwardRef)(function(e,t){var n=e.columns,o=e.history,c=e.initialSort,l=e.loading,d=e.meta,f=e.paginationSize,v=e.refetch,m=e.rowClick,g=e.rows,p=e.xeroPageSize,h=(0,a.useRouter)(),b=h.query,y=void 0===b?{}:b,S=(0,r.useState)(parseInt(null==y?void 0:y.page,10)||1),j=S[0],x=S[1],w=(0,r.useState)(p||s.C1.paginationSize),Z=w[0],C=w[1];c||(c={item:"createdAt",order:"desc"});var I=(0,r.useState)({item:c.item,order:c.order}),_=I[0],k=I[1],F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=h.query,n=void 0===t?{}:t;if(e>1?n.page=e:delete n.page,!(Object.keys(n).length>0))return{};var i=Object.keys(n).map(function(t){return"page"===t?"".concat(t,"=").concat(e):"".concat(t,"=").concat(n[t])}).join("&");return"?".concat(i)},q=function(){k({item:c.item,order:c.order}),x(1);var e=F();h.push(e),C(p||s.C1.paginationSize)};(0,r.useImperativeHandle)(t,function(){return{currentPage:j,pageSize:Z,sort:_,resetPagination:function(){q()}}});var N=function(e){var t=F(e);o&&h.push(t),x(e),!o&&v&&v()},z=function(e){e!==s.C1.paginationSize&&(C(e),v&&v())},$=function(e){var t;k({item:e.item,order:e.order}),v&&v()};return(0,i.jsx)(u.Z,{columns:n,loading:l,paginationSize:f,pagination:d&&!0,paginationProps:d&&{currentPage:j,onPageChange:N,onPageSizeChange:z,pageCount:Math.ceil(d.aggregate.totalCount/Z),perPage:Z},rowClick:m,rows:g,sort:_,setSort:$})});c.propTypes={columns:o.array.isRequired,history:o.bool,initialSort:o.object,loading:o.bool,meta:o.object,refetch:o.func,rowClick:o.func,rows:o.array.isRequired},c.defaultProps={history:!0,loading:!0,paginationSize:!1}},12632:function(e,t,n){"use strict";n.d(t,{x:function(){return l}});var i=n(14924),r=n(26042),o=n(69396),a=n(67294),s=n(96486),u=n(98209),c=n(59577),l=function(e){var t,n,l,d,f,v,m,g,p,h,b,y=e.filters,S=e.newFilters,j=e.initialSort,x=(0,a.useRef)(),w=(0,a.useState)({}),Z=w[0],C=w[1],I=(0,a.useState)({}),_=I[0],k=I[1],F=j||{item:"createdAt",order:"desc"},q=(0,i.Z)({},(null===(t=x.current)||void 0===t?void 0:t.sort.item)||F.item,F.inneritem?(0,i.Z)({},F.inneritem,(null===(n=x.current)||void 0===n?void 0:n.sort.order)||F.order):(null===(l=x.current)||void 0===l?void 0:l.sort.order)||F.order);return(0,a.useEffect)(function(){var e=!(0,s.isEqual)(Z,y),t=!(0,s.isEqual)(_,S);if(e&&(C(y),null==x||null===(i=x.current)||void 0===i||i.resetPagination()),t&&(k(S),null==x||null===(r=x.current)||void 0===r||r.resetPagination()),(null==x?void 0:null===(n=x.current)||void 0===n?void 0:n.setSort)&&!(e||t)){var n,i,r,o,a,u,c,l,d,f,v,m=(null===(o=x.current)||void 0===o?void 0:null===(a=o.sort)||void 0===a?void 0:a.item)&&(null===(u=x.current)||void 0===u?void 0:null===(c=u.sort)||void 0===c?void 0:c.order)?{item:null===(l=x.current)||void 0===l?void 0:null===(d=l.sort)||void 0===d?void 0:d.item,order:null===(f=x.current)||void 0===f?void 0:null===(v=f.sort)||void 0===v?void 0:v.order}:q;x.current.setSort(m)}},[y,S]),{initialData:(0,o.Z)((0,r.Z)({},y),{newFilters:(null==S?void 0:S.length)>0?S:void 0,limit:(null===(d=x.current)||void 0===d?void 0:d.pageSize)==="Infinity"?null:parseInt(null===(f=x.current)||void 0===f?void 0:f.pageSize,10)||u.C1.paginationSize,offset:((null===(v=x.current)||void 0===v?void 0:v.currentPage)-1||0)*((null===(m=x.current)||void 0===m?void 0:m.pageSize)||u.C1.paginationSize),orderBy:(0,c.c)(null===(g=x.current)||void 0===g?void 0:null===(p=g.sort)||void 0===p?void 0:null===(h=p.item)||void 0===h?void 0:h.replace(/ORDER/i,null===(b=x.current)||void 0===b?void 0:b.sort.order))||q}),initialSort:j,ref:x}}},59577:function(e,t,n){"use strict";n.d(t,{c:function(){return i}});var i=function(e){try{return JSON.parse(e)}catch(t){return!1}}},45307:function(e,t,n){"use strict";n.d(t,{X:function(){return m}});var i=n(14924),r=n(82670),o=n(828),a=n(7297),s=n(67294),u=n(6812),c=n(50319),l=n(75063),d=n(53767);function f(){var e=(0,a.Z)(["\n  query GetAccountUserFilters($accountUserId: Int!) {\n    accountUser: Account_User_by_pk(id: $accountUserId) {\n      filters\n    }\n  }\n"]);return f=function(){return e},e}function v(){var e=(0,a.Z)(["\n  mutation SetAccountUserFilters($accountUserId: Int!, $filters: jsonb) {\n    update_Account_User_by_pk(pk_columns: { id: $accountUserId }, _append: { filters: $filters }) {\n      id\n    }\n  }\n"]);return v=function(){return e},e}function m(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"sessionStorage",a=(0,d.q)().user,l=(0,s.useState)(function(){try{switch(n){case"network":case"state":return t;case"sessionStorage":return JSON.parse(window.sessionStorage.getItem(e))||t}}catch(i){return t}}),f=l[0],v=l[1],m=function(t){try{var o=(0,r.Z)(t,Function)?t(f):t;switch(v(o),n){case"network":h({variables:{accountUserId:null==a?void 0:a.accountUserId,filters:(0,i.Z)({},e,o)}});break;case"sessionStorage":window.sessionStorage.setItem(e,JSON.stringify(o))}}catch(s){}};(0,u.a)(g,{variables:{accountUserId:null==a?void 0:a.accountUserId},skip:"network"!==n,onCompleted:function(n){var i=n.accountUser;i&&v(i.filters[e]||t)}});var h=(0,o.Z)((0,c.D)(p),1)[0];return[f,m]}var g=(0,l.Ps)(f()),p=(0,l.Ps)(v())},66267:function(e,t,n){"use strict";n.d(t,{J:function(){return x}});var i=n(26042),r=n(69396),o=n(99534),a=n(828),s=n(85893),u=n(11163),c=n(67294),l=n(45697),d=n(9270),f=n(62140),v=n(42283),m=n(76600),g=n(11585),p=n(49501),h=n(75903),b=n(77439),y=n(31113),S=n(45307),j=function(e){var t=e.initialValues,n=e.renderFilters,o=e.setFilters,u=e.lastQuery,l=e.filters,j=(0,a.Z)((0,S.X)("form_data_".concat(t.filterType),t),2),x=j[0],w=j[1],Z=(0,v.cI)({defaultValues:x||t}),C=Z.control,I=Z.errors,_=Z.handleSubmit,k=Z.register,F=Z.reset,q=Z.watch,N=Z.setValue,z=q(),$=(0,r.Z)((0,i.Z)({},z),{filterType:t.filterType});(0,c.useEffect)(function(){F($)},[F]),(0,c.useEffect)(function(){w($)},[l]);var P=function(e){var n=e.query;if(n!==u){var r={q:"%".concat(n,"%")||0},a=/^\d+$/.test(n);"id"in t&&(r.id=a?Number(n):null),"meta"in t&&(r.meta=a?{invoiceNumbers:[n]}:null),"jobNumber"in t&&(r.jobNumber=a?String(n):null,r.invoiceNumber=a?Number(n):null),o(function(e){return(0,i.Z)({},e,r)})}},T=function(e){Object.keys(t).map(function(e){return N(e,null)}),o(t),F(t),P("")};return(0,s.jsx)(m.Z,{handleSubmit:_(P),children:(0,s.jsxs)(g.Z,{title:"Filters",children:[(0,s.jsxs)(d.Z,{children:[(0,s.jsx)(f.Z,{sm:12,lg:12,children:(0,s.jsx)(p.Z,{label:"",children:(0,s.jsx)(h.Z,{errors:I,label:"Search",name:"email",placeholder:"Search...",prependSearchIcon:!0,register:k,type:"search"})})}),(0,s.jsx)(f.Z,{sm:12,lg:12,children:n({control:C,errors:I,initialValues:t,register:k,setFilters:o,watch:q,setValue:N,reset:F})})]}),(0,s.jsx)(y.H,{content:"Search",context:"secondary",handleClick:P,type:"submit",children:(0,s.jsx)(b.Z,{content:"Clear",context:"danger",onClick:T,size:"sm"})})]})})};j.propTypes={initialValues:l.object,renderFilters:l.func.isRequired,setFilters:l.func.isRequired};var x=function(e){var t=e.FiltersComp,n=e.initialFilters,l=e.TableComp,v=(0,o.Z)(e,["FiltersComp","initialFilters","TableComp"]),m=(0,a.Z)((0,S.X)("form_data_".concat(n.filterType),n),2),g=m[0],p=m[1],h=(0,c.useState)(g||n),b=h[0],y=h[1],x=(0,u.useRouter)().query.show;return(0,c.useEffect)(function(){p(b)},[b,p]),(0,s.jsx)(d.Z,{children:(0,s.jsxs)(f.Z,{sm:12,lg:12,children:[(0,s.jsx)(j,{initialValues:n,renderFilters:function(e){return(0,s.jsx)(t,(0,r.Z)((0,i.Z)({},e,v),{show:x}))},setFilters:y,filters:b}),(0,s.jsx)(l,(0,i.Z)({filters:b,initialFilters:n},v))]})})};x.propTypes={FiltersComp:l.func,initialFilters:l.object.isRequired,TableComp:l.func}},56616:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return q}});var i=n(85893),r=n(19076),o=n(66267),a=n(26042),s=n(69396),u=n(828),c=n(67294),l=n(45697),d=n(6812),f=n(50319),v=n(7297),m=n(75063);function g(){var e=(0,v.Z)(["\n  query GetNotifications(\n    $limit: Int\n    $offset: Int\n    $orderBy: Notification_order_by!\n    $q: String\n    $type: String\n    $userId: Int!\n  ) {\n    notifications: Notification(\n      limit: $limit\n      offset: $offset\n      where: { Communication: { text: { _ilike: $q } }, userId: { _eq: $userId } }\n      order_by: [$orderBy]\n    ) {\n      id\n      status\n      statusLog\n      createdAt\n      userId\n      communication: Communication {\n        id\n        text\n        type\n        meta\n        accountId\n        jobId\n        locationId\n        job: Job {\n          id\n        }\n        account: Account {\n          id\n          name\n        }\n      }\n    }\n    meta: Notification_aggregate(\n      where: { Communication: { content: { _ilike: $q } }, userId: { _eq: $userId } }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n"]);return g=function(){return e},e}var p=(0,m.Ps)(g()),h=n(43734),b=n(73987),y=n(78289),S=n(26186),j=n(11585),x=n(87336),w=n(21813),Z=n(12632),C=n(93282),I=function(e){var t=e.filters,n=(0,Z.x)({filters:t}),r=n.initialData,o=n.ref,l=(0,c.useContext)(b.Z).user,v=(0,c.useContext)(y.Z),m=(0,s.Z)((0,a.Z)({},r),{userId:l.id}),g=(0,d.a)(p,{variables:(0,a.Z)({},m)}),I=g.loading,_=g.data,k=void 0===_?{notifications:[],meta:{aggregate:{totalCount:0}}}:_,F=k.notifications,q=k.meta,N=g.refetch,z=(0,u.Z)((0,f.D)(h.G,{onCompleted:function(e){N()}}),1)[0],$=function(e){var t=e.row;return"unread"===t.status?(0,i.jsx)("strong",{children:t.message}):(0,i.jsx)("span",{children:t.message})},P=function(e){var t="read",n={createdAt:(0,C.v)(),status:t,userId:e.userId};z({variables:{id:e.id,changes:{status:t,statusLog:n}}}),e.communication&&e.communication.jobId&&v.show({title:"Job details",content:(0,i.jsx)(w.g,{jobId:e.communication.jobId,toggleShow:v.close}),submit:!1,xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"40vw",md2:"40vw",lg:"40vw",lg2:"40vw"})};return(0,i.jsx)(j.Z,{open:!0,summary:"Notifications",children:(0,i.jsx)(x.t,{columns:[{hidden:!0},{formatter:$,text:"Message"},{text:"Date",sortable:!0,sortName:"createdAt"},{hidden:!0},{hidden:!0}],loading:I,meta:q,ref:o,refetch:N,rowClick:P,rows:F.map(function(e){var t,n,i=e.communication,r=i.text;return(null===(t=i.meta)||void 0===t?void 0:null===(n=t.content)||void 0===n?void 0:n.toast)&&(r=i.meta.content.toast),{id:e.id,message:r,date:(0,S.Z)(e.createdAt,!0),status:e.status,communication:i}})})})};I.propTypes={filters:l.object};var _=function(){return""},k={q:null,filterType:"notifications_table"},F=function(){return(0,i.jsx)(o.J,{FiltersComp:_,initialFilters:k,TableComp:I})},q=function(){return(0,i.jsx)(r.Z,{pageHeading:{heading:"Notifications"},View:(0,i.jsx)(F,{})})}}},function(e){e.O(0,[3662,2283,212,8890,9511,2583,6310,4135,8579,4244,7645,1564,3054,3911,6540,3425,9100,8359,9774,2888,179],function(){return e(e.s=94992)}),_N_E=e.O()}]);