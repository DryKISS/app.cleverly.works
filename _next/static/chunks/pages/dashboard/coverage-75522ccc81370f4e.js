(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7528],{39582:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/coverage",function(){return n(84236)}])},25742:function(e,t,n){"use strict";n.d(t,{H:function(){return c}});var r=n(26042),i=n(85893),o=n(45697),a=n(55377),s=n(16551),u=n(77439),c=function(e){var t=e.children,n=e.content,o=e.context,c=e.data,l=e.disabled,d=e.handleClick,f=e.size,v=e.type;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Z,{size:"sm"}),(0,i.jsxs)(s.Z,{align:"flex-end",children:[t,(0,i.jsx)(u.Z,(0,r.Z)({content:n,context:o,disabled:l,onClick:d,size:f,type:v},c))]})]})};c.propTypes={children:o.node,content:o.string,context:o.string,data:o.object,disabled:o.bool,handleClick:o.func,size:o.string,type:o.string},c.defaultProps={content:"Add",context:"secondary",disabled:!1,size:"sm",type:"button"}},64973:function(e,t,n){"use strict";n.d(t,{NG:function(){return f},NK:function(){return d},OW:function(){return v},sM:function(){return l}});var r=n(7297),i=n(75063);function o(){var e=(0,r.Z)(["\n  query GetPostcodeAreas(\n    $countryId: Int\n    $limit: Int\n    $offset: Int\n    $q: String\n    $orderBy: PostcodeArea_order_by!\n  ) {\n    postcodeAreas: PostcodeArea(\n      limit: $limit\n      offset: $offset\n      where: { countryId: { _eq: $countryId }, name: { _ilike: $q } }\n      order_by: [$orderBy]\n    ) {\n      id\n      area\n      name\n      status\n      country: Country {\n        id\n        name\n        code\n      }\n    }\n    meta: PostcodeArea_aggregate(where: { countryId: { _eq: $countryId }, name: { _ilike: $q } }) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n"]);return o=function(){return e},e}function a(){var e=(0,r.Z)(["\n  query GetPostcodeArea($id: Int!) {\n    postcodeArea: PostcodeArea_by_pk(id: $id) {\n      id\n      area\n      name\n      status\n      country: Country {\n        id\n        name\n        code\n      }\n    }\n  }\n"]);return a=function(){return e},e}function s(){var e=(0,r.Z)(["\n  mutation AddPostcodeArea($areas: [PostcodeArea_insert_input!]!) {\n    insert_PostcodeArea(objects: $areas) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return s=function(){return e},e}function u(){var e=(0,r.Z)(["\n  mutation InsertPostCodeArea($objects: [PostcodeArea_Entity_insert_input!]!) {\n    insert_PostcodeArea_Entity(\n      objects: $objects\n      on_conflict: {\n        constraint: PostcodeArea_Entity_postcodeAreaId_entityId_entity_key\n        update_columns: status\n      }\n    ) {\n      returning {\n        id\n        status\n      }\n    }\n  }\n"]);return u=function(){return e},e}function c(){var e=(0,r.Z)(["\n  mutation UpdateEntityAssign($id: Int!, $changes: PostcodeArea_Entity_set_input) {\n    update_PostcodeArea_Entity_by_pk(pk_columns: { id: $id }, _set: $changes) {\n      id\n      status\n    }\n  }\n"]);return c=function(){return e},e}var l=(0,i.Ps)(o()),d=(0,i.Ps)(a());(0,i.Ps)(s());var f=(0,i.Ps)(u()),v=(0,i.Ps)(c())},91272:function(e,t,n){"use strict";n.d(t,{t:function(){return c}});var r=n(85893),i=n(67294),o=n(45697),a=n(11163),s=n(46003),u=n(16540),c=(0,i.forwardRef)(function(e,t){var n=e.columns,o=e.history,c=e.initialSort,l=e.loading,d=e.meta,f=e.paginationSize,v=e.refetch,p=e.rowClick,g=e.rows,m=e.xeroPageSize,y=(0,a.useRouter)(),h=y.query,_=void 0===h?{}:h,b=(0,i.useState)(parseInt(null==_?void 0:_.page,10)||1),S=b[0],x=b[1],Z=(0,i.useState)(m||s.C1.paginationSize),j=Z[0],C=Z[1];c||(c={item:"createdAt",order:"desc"});var P=(0,i.useState)({item:c.item,order:c.order}),I=P[0],w=P[1],k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=y.query,n=void 0===t?{}:t;if(e>1?n.page=e:delete n.page,!(Object.keys(n).length>0))return{};var r=Object.keys(n).map(function(t){return"page"===t?"".concat(t,"=").concat(e):"".concat(t,"=").concat(n[t])}).join("&");return"?".concat(r)},A=function(){w({item:c.item,order:c.order}),x(1);var e=k();y.push(e),C(m||s.C1.paginationSize)};(0,i.useImperativeHandle)(t,function(){return{currentPage:S,pageSize:j,sort:I,resetPagination:function(){A()}}});var $=function(e){var t=k(e);o&&y.push(t),x(e),!o&&v&&v()},q=function(e){e!==s.C1.paginationSize&&(C(e),v&&v())},F=function(e){var t;w({item:e.item,order:e.order}),v&&v()};return(0,r.jsx)(u.Z,{columns:n,loading:l,paginationSize:f,pagination:d&&!0,paginationProps:d&&{currentPage:S,onPageChange:$,onPageSizeChange:q,pageCount:Math.ceil(d.aggregate.totalCount/j),perPage:j},rowClick:p,rows:g,sort:I,setSort:F})});c.propTypes={columns:o.array.isRequired,history:o.bool,initialSort:o.object,loading:o.bool,meta:o.object,refetch:o.func,rowClick:o.func,rows:o.array.isRequired},c.defaultProps={history:!0,loading:!0,paginationSize:!1}},20705:function(e,t,n){"use strict";n.d(t,{x:function(){return l}});var r=n(14924),i=n(26042),o=n(69396),a=n(67294),s=n(96486),u=n(46003),c=function(e){try{return JSON.parse(e)}catch(t){return!1}},l=function(e){var t,n,l,d,f,v,p,g,m,y,h,_=e.filters,b=e.newFilters,S=e.initialSort,x=(0,a.useRef)(),Z=(0,a.useState)({}),j=Z[0],C=Z[1],P=(0,a.useState)({}),I=P[0],w=P[1],k=S||{item:"createdAt",order:"desc"},A=(0,r.Z)({},(null===(t=x.current)||void 0===t?void 0:t.sort.item)||k.item,k.inneritem?(0,r.Z)({},k.inneritem,(null===(n=x.current)||void 0===n?void 0:n.sort.order)||k.order):(null===(l=x.current)||void 0===l?void 0:l.sort.order)||k.order);return(0,a.useEffect)(function(){var e=!(0,s.isEqual)(j,_),t=!(0,s.isEqual)(I,b);if(e&&(C(_),null==x||null===(r=x.current)||void 0===r||r.resetPagination()),t&&(w(b),null==x||null===(i=x.current)||void 0===i||i.resetPagination()),(null==x?void 0:null===(n=x.current)||void 0===n?void 0:n.setSort)&&!(e||t)){var n,r,i,o,a,u,c,l,d,f,v,p=(null===(o=x.current)||void 0===o?void 0:null===(a=o.sort)||void 0===a?void 0:a.item)&&(null===(u=x.current)||void 0===u?void 0:null===(c=u.sort)||void 0===c?void 0:c.order)?{item:null===(l=x.current)||void 0===l?void 0:null===(d=l.sort)||void 0===d?void 0:d.item,order:null===(f=x.current)||void 0===f?void 0:null===(v=f.sort)||void 0===v?void 0:v.order}:A;x.current.setSort(p)}},[_,b]),{initialData:(0,o.Z)((0,i.Z)({},_),{newFilters:(null==b?void 0:b.length)>0?b:void 0,limit:(null===(d=x.current)||void 0===d?void 0:d.pageSize)==="Infinity"?null:parseInt(null===(f=x.current)||void 0===f?void 0:f.pageSize,10)||u.C1.paginationSize,offset:((null===(v=x.current)||void 0===v?void 0:v.currentPage)-1||0)*((null===(p=x.current)||void 0===p?void 0:p.pageSize)||u.C1.paginationSize),orderBy:c(null===(g=x.current)||void 0===g?void 0:null===(m=g.sort)||void 0===m?void 0:null===(y=m.item)||void 0===y?void 0:y.replace(/ORDER/i,null===(h=x.current)||void 0===h?void 0:h.sort.order))||A}),initialSort:S,ref:x}}},59938:function(e,t,n){"use strict";n.d(t,{X:function(){return p}});var r=n(14924),i=n(82670),o=n(828),a=n(7297),s=n(67294),u=n(6812),c=n(50319),l=n(75063),d=n(18586);function f(){var e=(0,a.Z)(["\n  query GetAccountUserFilters($accountUserId: Int!) {\n    accountUser: Account_User_by_pk(id: $accountUserId) {\n      filters\n    }\n  }\n"]);return f=function(){return e},e}function v(){var e=(0,a.Z)(["\n  mutation SetAccountUserFilters($accountUserId: Int!, $filters: jsonb) {\n    update_Account_User_by_pk(pk_columns: { id: $accountUserId }, _append: { filters: $filters }) {\n      id\n    }\n  }\n"]);return v=function(){return e},e}function p(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"sessionStorage",a=(0,d.q)().user,l=(0,s.useState)(function(){try{switch(n){case"network":case"state":return t;case"sessionStorage":return JSON.parse(window.sessionStorage.getItem(e))||t}}catch(r){return t}}),f=l[0],v=l[1],p=function(t){try{var o=(0,i.Z)(t,Function)?t(f):t;switch(v(o),n){case"network":y({variables:{accountUserId:null==a?void 0:a.accountUserId,filters:(0,r.Z)({},e,o)}});break;case"sessionStorage":window.sessionStorage.setItem(e,JSON.stringify(o))}}catch(s){}};(0,u.a)(g,{variables:{accountUserId:null==a?void 0:a.accountUserId},skip:"network"!==n,onCompleted:function(n){var r=n.accountUser;r&&v(r.filters[e]||t)}});var y=(0,o.Z)((0,c.D)(m),1)[0];return[f,p]}var g=(0,l.Ps)(f()),m=(0,l.Ps)(v())},73760:function(e,t,n){"use strict";n.d(t,{O:function(){return r},v:function(){return i}});var r=[{text:"Country",value:""},{text:"United Kingdom",value:1},{text:"Ireland",value:4}],i=[{label:"United Kingdom",value:1},{label:"Ireland",value:4}]},55862:function(e,t,n){"use strict";n.d(t,{J:function(){return x}});var r=n(26042),i=n(69396),o=n(99534),a=n(828),s=n(85893),u=n(11163),c=n(67294),l=n(45697),d=n(9270),f=n(62140),v=n(42283),p=n(76600),g=n(11585),m=n(49501),y=n(75903),h=n(77439),_=n(25742),b=n(59938),S=function(e){var t=e.initialValues,n=e.renderFilters,o=e.setFilters,u=e.lastQuery,l=e.filters,S=(0,a.Z)((0,b.X)("form_data_".concat(t.filterType),t),2),x=S[0],Z=S[1],j=(0,v.cI)({defaultValues:x||t}),C=j.control,P=j.errors,I=j.handleSubmit,w=j.register,k=j.reset,A=j.watch,$=j.setValue,q=A(),F=(0,i.Z)((0,r.Z)({},q),{filterType:t.filterType});(0,c.useEffect)(function(){k(F)},[k]),(0,c.useEffect)(function(){Z(F)},[l]);var z=function(e){var n=e.query;if(n!==u){var i={q:"%".concat(n,"%")||0},a=/^\d+$/.test(n);"id"in t&&(i.id=a?Number(n):null),"meta"in t&&(i.meta=a?{invoiceNumbers:[n]}:null),"jobNumber"in t&&(i.jobNumber=a?String(n):null,i.invoiceNumber=a?Number(n):null),o(function(e){return(0,r.Z)({},e,i)})}},E=function(e){Object.keys(t).map(function(e){return $(e,null)}),o(t),k(t),z("")};return(0,s.jsx)(p.Z,{handleSubmit:I(z),children:(0,s.jsxs)(g.Z,{title:"Filters",children:[(0,s.jsxs)(d.Z,{children:[(0,s.jsx)(f.Z,{sm:12,lg:12,children:(0,s.jsx)(m.Z,{label:"",children:(0,s.jsx)(y.Z,{errors:P,label:"Search",name:"email",placeholder:"Search...",prependSearchIcon:!0,register:w,type:"search"})})}),(0,s.jsx)(f.Z,{sm:12,lg:12,children:n({control:C,errors:P,initialValues:t,register:w,setFilters:o,watch:A,setValue:$,reset:k})})]}),(0,s.jsx)(_.H,{content:"Search",context:"secondary",handleClick:z,type:"submit",children:(0,s.jsx)(h.Z,{content:"Clear",context:"danger",onClick:E,size:"sm"})})]})})};S.propTypes={initialValues:l.object,renderFilters:l.func.isRequired,setFilters:l.func.isRequired};var x=function(e){var t=e.FiltersComp,n=e.initialFilters,l=e.TableComp,v=(0,o.Z)(e,["FiltersComp","initialFilters","TableComp"]),p=(0,a.Z)((0,b.X)("form_data_".concat(n.filterType),n),2),g=p[0],m=p[1],y=(0,c.useState)(g||n),h=y[0],_=y[1],x=(0,u.useRouter)().query.show;return(0,c.useEffect)(function(){m(h)},[h,m]),(0,s.jsx)(d.Z,{children:(0,s.jsxs)(f.Z,{sm:12,lg:12,children:[(0,s.jsx)(S,{initialValues:n,renderFilters:function(e){return(0,s.jsx)(t,(0,i.Z)((0,r.Z)({},e,v),{show:x}))},setFilters:_,filters:h}),(0,s.jsx)(l,(0,r.Z)({filters:h,initialFilters:n},v))]})})};x.propTypes={FiltersComp:l.func,initialFilters:l.object.isRequired,TableComp:l.func}},84236:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var r=n(85893),i=n(19076),o=n(55862),a=n(45697),s=n(11163),u=n.n(s),c=n(6812),l=n(64973),d=n(74297),f=n(11585),v=n(91272),p=n(20705),g={item:"area",order:"asc"},m=function(e){var t=e.filters,n=(0,p.x)({filters:t,initialSort:g}),i=n.initialData,o=n.ref,a=(0,c.a)(l.sM,{variables:i}),s=a.data,m=void 0===s?{areas:[],meta:{aggregate:{totalCount:0}}}:s,y=m.postcodeAreas,h=m.meta,_=a.loading,b=a.refetch,S=function(e){u().push("".concat("/dashboard/coverage/","view?id=").concat(e.id))};return(0,r.jsx)(f.Z,{open:!0,title:"Coverage Areas",children:(0,r.jsx)(v.t,{columns:[{hidden:!0},{text:"Postcode"},{sortable:!0,sortName:"area",text:"Area"},{text:"Country"},{text:"# Services"},{text:"# Suppliers"},{text:"Status"}],initialSort:g,loading:_,meta:h,ref:o,refetch:b,rowClick:S,rows:y?y.map(function(e){var t,n,r;return{id:e.id,postcode:e.area,area:e.name,country:null===(t=e.country)||void 0===t?void 0:t.name,servicesCount:(null===(n=e.services)||void 0===n?void 0:n.length)||0,suppliersCount:(null===(r=e.suppliers)||void 0===r?void 0:r.length)||0,status:(0,d.Z)(e.status)}}):[]})})};m.propTypes={filters:a.object};var y=n(26042),h=n(69396),_=n(9270),b=n(62140),S=n(95103),x=n(73760),Z=function(e){var t=e.errors,n=e.register,i=e.setFilters;return(0,r.jsx)(_.Z,{children:(0,r.jsx)(b.Z,{md:6,children:(0,r.jsx)(S.Z,{errors:t,name:"countryId",onChange:function(e){return i(function(t){return(0,h.Z)((0,y.Z)({},t),{countryId:e.target.value||null})})},options:x.O,register:n})})})};Z.propTypes={errors:a.object.isRequired,register:a.func.isRequired,setFilters:a.func.isRequired};var j={countryId:null,q:null,filterType:"coverage_table"},C=function(){return(0,r.jsx)(o.J,{FiltersComp:Z,initialFilters:j,TableComp:m})},P=function(){return(0,r.jsx)(i.Z,{pageHeading:{heading:"Coverage"},View:(0,r.jsx)(C,{})})}}},function(e){e.O(0,[3662,2283,1336,6540,4259,9774,2888,179],function(){return e(e.s=39582)}),_N_E=e.O()}]);