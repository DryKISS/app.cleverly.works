(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2323],{55843:function(e,t,o){"use strict";o.d(t,{Z:function(){return w}});var r,n,a,i,s,l=o(39725),c=o(51174),d=o(67294),h=o(45697),u=o(10367),p=o(66349),m=o(55255),f={xxsSize:"0.25rem",xsSize:"0.5rem",smSize:"0.75rem",mdSize:"1rem",lgSize:"1.5rem",xlSize:"2rem",xxlSize:"2.5rem",xxxlSize:"3rem"},y=function(e){var t="",o=0;return(e.forEach(function(e){e.v&&(o++,t+="".concat(e.k,": ").concat(f[e.v+"Size"],";\n      ").concat(m.Z.desktop(r||(r=(0,c.Z)(["\n        ",": calc("," * 2);"])),e.k,f[e.v+"Size"]),"\n      "))}),0===o)?(0,u.iv)(n||(n=(0,c.Z)(["\n      margin-bottom: ",";\n      ","\n    "])),f.mdSize,m.Z.desktop(a||(a=(0,c.Z)(["\n        margin-bottom: calc("," * 2);"])),f.mdSize)):(0,u.iv)(i||(i=(0,c.Z)(["\n    ","\n  "])),t)},g=function(e){var t=e.children,o=e.className,r=e.content,n=e.margin,a=e.marginX,i=e.marginY,s=e.marginTop,l=e.marginRight,c=e.marginBottom,h=e.marginLeft,u=e.padding,p=e.paddingX,m=e.paddingY,f=e.paddingTop,y=e.paddingRight,g=e.paddingBottom,w=e.paddingLeft;return d.createElement(b,{className:o,margin:n,marginX:a,marginY:i,marginTop:s,marginRight:l,marginBottom:c,marginLeft:h,padding:u,paddingX:p,paddingY:m,paddingTop:f,paddingRight:y,paddingBottom:g,paddingLeft:w},r||t)};g.displayName="Space";var b=u.ZP.div(s||(s=(0,c.Z)(["\n  margin: 0;\n  padding: 0;\n  ","\n"])),function(e){var t=e.margin,o=e.marginBottom,r=e.marginTop,n=e.marginLeft,a=e.marginRight,i=e.marginX,s=e.marginY,c=e.padding,d=e.paddingBottom,h=e.paddingLeft,u=e.paddingRight,p=e.paddingTop,m=e.paddingX,f=e.paddingY;return y([{k:"margin",v:t},{k:"margin-bottom",v:o},{k:"margin-left",v:n},{k:"margin-right",v:a},{k:"margin-top",v:r},{k:"padding",v:c},{k:"padding-bottom",v:d},{k:"padding-left",v:h},{k:"padding-right",v:u},{k:"padding-top",v:p}].concat((0,l.Z)(s?[{k:"margin-top",v:s},{k:"margin-bottom",v:s}]:[]),(0,l.Z)(i?[{k:"margin-left",v:i},{k:"margin-right",v:i}]:[]),(0,l.Z)(f?[{k:"padding-top",v:f},{k:"padding-bottom",v:f}]:[]),(0,l.Z)(m?[{k:"padding-left",v:m},{k:"padding-right",v:m}]:[])))});g.propTypes={children:h.node,content:h.string,margin:(0,h.oneOf)(Object.values(p.Z)),marginY:(0,h.oneOf)(Object.values(p.Z)),marginX:(0,h.oneOf)(Object.values(p.Z)),marginTop:(0,h.oneOf)(Object.values(p.Z)),marginRight:(0,h.oneOf)(Object.values(p.Z)),marginBottom:(0,h.oneOf)(Object.values(p.Z)),marginLeft:(0,h.oneOf)(Object.values(p.Z)),padding:(0,h.oneOf)(Object.values(p.Z)),paddingY:(0,h.oneOf)(Object.values(p.Z)),paddingX:(0,h.oneOf)(Object.values(p.Z)),paddingTop:(0,h.oneOf)(Object.values(p.Z)),paddingRight:(0,h.oneOf)(Object.values(p.Z)),paddingBottom:(0,h.oneOf)(Object.values(p.Z)),paddingLeft:(0,h.oneOf)(Object.values(p.Z))};var w=g},17813:function(e,t,o){"use strict";o.d(t,{Z:function(){return w}});var r,n=o(51174),a=o(67294),i=o(45697),s=o(10367),l=o(94303),c=o(74147),d=o(9008),h=o.n(d),u=function(e){var t=e.canonical,o=e.brand,r=e.meta,n=r.description,i=r.path,s=r.title;return a.createElement(h(),null,a.createElement("title",null,s," | ",o),a.createElement("meta",{name:"description",content:n,key:"description"}),a.createElement("meta",{rel:"canonical",href:t+i,key:"canonical"}),a.createElement("meta",{property:"og:title",content:s}),a.createElement("meta",{property:"og:description",content:n}),a.createElement("meta",{property:"og:url",content:t+i}),a.createElement("meta",{name:"twitter:url",content:t+i}),a.createElement("meta",{name:"twitter:title",content:s}),a.createElement("meta",{name:"twitter:description",content:n}))};u.displayName="MetaHead",u.propTypes={brand:i.string.isRequired,meta:i.object.isRequired};var p=o(35599),m=o(55843),f=o(28368),y=o(66349),g=function(e){var t=e.children,o=e.fluid,r=e.meta,n=e.padding,i=e.pageHeading,s=(0,a.useContext)(l.Z).config,d=s.Brand,h=s.Canonical;return a.createElement(b,null,n&&a.createElement(m.Z,{paddingTop:n}),r&&a.createElement(u,{canonical:h,brand:d.name,meta:r}),a.createElement(c.Z,{fluid:o},i&&a.createElement(p.Z,i),t),n&&a.createElement(m.Z,{paddingBottom:n}))};g.displayName="Page";var b=s.ZP.div(r||(r=(0,n.Z)(["\n  background-color: ",";\n"])),function(e){return e.theme.PAGE.backGroundColour});g.propTypes={children:i.node.isRequired,fluid:i.bool,meta:(0,i.shape)({description:i.string.isRequired,path:i.string,title:i.string.isRequired}),padding:(0,i.oneOfType)([i.bool,(0,i.oneOf)(Object.values(y.Z))]),pageHeading:(0,i.shape)({center:i.bool,context:(0,i.oneOf)(Object.values(f.Z)),divider:i.bool,heading:i.any.isRequired,help:i.bool,helpContent:i.any,strapline:i.string})},g.defaultProps={fluid:!1,padding:"md"};var w=g},35599:function(e,t,o){"use strict";var r,n,a,i,s,l=o(51174),c=o(67294),d=o(45697),h=o(10367),u=o(55377),p=o(33006),m=o(28368),f=function(e){var t=e.center,o=e.children,r=e.context,n=e.divider,a=e.heading,i=e.help,s=e.helpContent,l=e.strapline;return c.createElement(y,{center:t,divider:n},c.createElement(g,null,c.createElement(w,{content:a,context:r,pageHeading:!0}),l&&c.createElement("div",null,l)),(o||i)&&c.createElement(b,null,o||s),n&&c.createElement(v,{size:"md"}))};f.displayName="PageHeading";var y=h.ZP.header(r||(r=(0,l.Z)(["\n  align-items: center;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  margin-bottom: ",";\n  text-align: ",";\n"])),function(e){return!e.divider&&"2rem"},function(e){return e.center&&"center"}),g=h.ZP.span(n||(n=(0,l.Z)(["\n  flex: 1;\n"]))),b=h.ZP.span(a||(a=(0,l.Z)(["\n  display: flex;\n  flex: 1;\n  justify-content: flex-end;\n"]))),w=(0,h.ZP)(p.Z)(i||(i=(0,l.Z)(["\n  margin-bottom: ",";\n"])),function(e){return e.divider?"0.5rem":"0"}),v=(0,h.ZP)(u.Z)(s||(s=(0,l.Z)(["\n  width: 100%;\n"])));f.propTypes={center:d.bool,children:d.element,context:(0,d.oneOf)(Object.values(m.Z)),divider:d.bool,heading:d.any.isRequired,help:d.bool,helpContent:d.any,strapline:d.string},f.defaultProps={center:!1,context:"primary",divider:!0,help:!1,helpContent:"",strapline:""},t.Z=f},71578:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/policies/terms-conditions",function(){return o(6761)}])},6761:function(e,t,o){"use strict";o.r(t);var r=o(85893),n=o(17813),a=function(){return(0,r.jsxs)(n.Z,{pageHeading:{heading:"Homyze – WORK REQUEST TERMS OF USE"},children:[(0,r.jsx)("h5",{children:"Effective Date: September 30th, 2018"}),(0,r.jsx)("h4",{children:"1. THE Homyze SERVICE"}),(0,r.jsx)("p",{children:"1.1. We appreciate Your using the Homyze service. Please read these Terms carefully as they govern Your use of the Homyze service. Do not use the service unless You wish to be bound by the Terms because, by making a request for services or quotes and/or continuing to use any part of Homyze, You confirm Your acceptance of the Terms (which also include the Privacy Policy). By submitting a request for work and/or a quote to be done, You are requesting Us to provide the Homyze service as soon as reasonably practicable or at an agreed time."}),(0,r.jsx)("p",{children:"1.2. Homyze is a marketplace through which You can insert details of, or make requests of tradespeople to perform, work You need doing in the United Kingdom, and are introduced to tradespeople whose profiles appear to Us to fit the task, based on their location, availability and other factors. Homyze acts as an agent for the tradesperson in promoting the tradesperson’s services and uses a payment service provider to collect charges on behalf of the tradesperson. No contract exists between Homyze and the tradesperson, or Homyze and You, for the fulfilment of any work, task or associated materials. Homyze is an intermediary between the tradesperson and You. All contracts for the fulfilment of any work request are solely between the tradesperson and You."}),(0,r.jsxs)("p",{children:["1.3. Please note that the Terms do not apply to Our service provider partners; if You are a service provider and wish to discuss working with Us as a Pro, please contact Us at"," ",(0,r.jsx)("a",{href:"mailto:pro@homyze.com",children:"pro@homyze.com"}),"."]}),(0,r.jsx)("p",{children:"1.4. The Service is for use in connection with work to be provided in the United Kingdom only."}),(0,r.jsx)("p",{children:"1.5. Your attention is drawn to the following clauses in particular:"}),(0,r.jsx)("p",{children:"1.5.1. Sections 5.1 and 5.7 contain disclaimers in relation to Our relationship with You and those providing services to You."}),(0,r.jsx)("p",{children:"1.5.2. Sections 13 and 14 below contain important restrictions on Our liability to You."}),(0,r.jsx)("p",{children:"1.5.3. Section 5.8 limits Your dealings with Pros outside of the Service."}),(0,r.jsx)("p",{children:"1.5.4. Section 6.7 entitles us to reproduce any comments you provide to us in relation to the Homyze service, or your experience in relation to any Pro or any Work."}),(0,r.jsx)("h4",{children:"2. DEFINITIONS"}),(0,r.jsxs)("p",{children:["2.1. The provider of Homyze is Homyze Ltd. You can contact Us via Our online"," ",(0,r.jsx)("a",{href:"https://www.homyze.com/contact",children:"contact form"})," or at"," ",(0,r.jsx)("a",{href:"mailto:hello@homyze.com",children:"hello@homyze.com"}),". When the Terms make a reference to ‘We’ or ‘Us’ or ‘Our’, that is a reference to Homyze Ltd."]}),(0,r.jsx)("p",{children:"2.2. Where We refer to “You” in the Terms, that means any person viewing or using the Service. The “Terms” includes the terms set out here and the Privacy Policy as made available on Our Service."}),(0,r.jsxs)("p",{children:["2.3. “Homyze” or “the Service” consists of the Homyze mobile app, Our website at"," ",(0,r.jsx)("a",{href:"https://www.homyze.com",children:"www.homyze.com"}),", any pages We operate on third party social media applications, and any other Homyze-branded content and services We make available via the internet or mobile devices. It also includes the provision by Us of associated information, products and services by e-mail or Your mobile device."]}),(0,r.jsx)("p",{children:"2.4. Homyze is designed to enable users to request tradespeople to perform services or provide quotes for services that would typically fall within or be associated with a domestic environment. Users can submit to Us details of home improvement projects in respect of which they require assistance (“Requests”) and receive responses from tradespeople accepting the Request, or arranging an appointment to provide an estimate with an indication of the fees chargeable in respect of the assistance (“Estimates”)."}),(0,r.jsx)("p",{children:"2.5. You are responsible for accurately describing Your requirements for any project in respect of which You submit a Request (“Project“)."}),(0,r.jsx)("p",{children:"2.6. Work carried out under a Contract is referred to in these Terms as ‘Work’."}),(0,r.jsx)("p",{children:"2.7. Any person to whom We introduce You for the purposes of performing services in response to Your Request by means of Homyze is a “Pro”. Any agreement You make with a Pro in respect of a Project is a “Contract”. Contracts are either On-Demand Contracts or Estimate Contracts:"}),(0,r.jsx)("p",{children:"2.7.1. “On-Demand Contracts” are between You and a Pro, where You schedule bookings of a Pro, at fixed hourly rates (minimum 1 hour) which You will be informed of while booking through the Service. (On-Demand Contracts are either ‘Scheduled Contracts’, where an appointment is made with the Pro for some time (at least 24 hours) in the future, or ‘Now Contracts’, where an appointment is made for the Work to be provided immediately or as soon as reasonably practicable but not more than 24 hours in the future); and"}),(0,r.jsx)("p",{children:"2.7.2. “Estimate Contracts” are between You and a Pro, where You book an appointment with a Pro to enable them to view and estimate the works, after which We will send You any Estimate provided by the Pro."}),(0,r.jsx)("p",{children:"2.8. A binding contract between you and a Pro is formed when a Pro accepts your Request (unless you have previously retracted it in advance of such acceptance, by means of Homyze)."}),(0,r.jsx)("h4",{children:"3. REFERRAL FEE CHARGED TO PROS"}),(0,r.jsx)("p",{children:"3.1. We do not make any charge to You for use of Homyze. We charge Pros a percentage of the amounts You pay them in respect of work done on any Project by means of Homyze."}),(0,r.jsx)("h4",{children:"4. DISCLAIMERS IN RELATION TO THE SERVICE"}),(0,r.jsx)("p",{children:"4.1. We make no warranty that Homyze will be uninterrupted or error free, or that any defects will be corrected."}),(0,r.jsx)("p",{children:"4.2. Whilst We take steps to prevent misuse of Our systems, We cannot warrant that Homyze will be free of viruses or other malicious code and accept no liability for loss or damage caused from the transmission of such code. We recommend that You always use up-to-date firewalls and anti-malware software to protect Your equipment and data."}),(0,r.jsx)("h4",{children:"5. IMPORTANT - YOU AND THE PRO"}),(0,r.jsx)("p",{children:"5.1. We do what We reasonably can to ensure that the Pros are qualified and of a high quality. We check that Pros have experience in the general field of expertise relevant to Your Project (e.g. gardening, plumbing, locksmithing) and employ a strict vetting service to verify that Pros meet Our insurance and trade qualification requirements. We do not endorse or recommend any particular Pro nor do We make any kind of guarantee as to the ability, competence, or quality of the Pros who may be listed on the Service. We merely make Homyze available to enable You to identify and determine the suitability of Pros for Yourself. We do not warrant the accuracy, quality or completeness of any information or assistance obtained from Pros. We do not direct, have any control over, or make any assurance or representation about any Pro. Pros do not work for Us – they are not Our employees, workers or subcontractors."}),(0,r.jsx)("p",{children:"5.2. Once We introduce You to a Pro, and You confirm Your booking of the Pro’s services either by making a booking or accepting an estimate, you will engage the Pro directly, without any further Homyze involvement in the process save for the processing of payment, provision of a receipt for the services performed and potentially a request for feedback with regard to the services performed or information about You. We will not be a party to any contract made between You and any Pro and therefore We shall not be liable for any loss or damage which results from any dealings between You and any Pro or any failure of the Pro to provide the work on the Project satisfactorily."}),(0,r.jsx)("p",{children:"5.3. The Contract is formed between You and the Pro by the Pro accepting Your Request."}),(0,r.jsx)("p",{children:"5.4. You should in all cases make Your own enquiries as to the suitability of any Pro for Your particular Project. If You have any doubts or questions about a particular Pro, please ask Us and we’ll share selected information We have on the Pro. You should not engage any Pro without having conducted such checks to Your full satisfaction. While Our hope is that You will be happy with every Pro You find through Homyze, You should not engage any Pro if You have any doubts or concerns about them. Suitability of the Pro is vetted through the Homyze platform as specified in section 5.1."}),(0,r.jsx)("p",{children:"5.5. We may include on the Homyze website, any pages we operate on third-party social media applications and any other Homyze branded context information sourced from Pros, including general news and information and profiles of individual Pros. We do not write or control that information, and have no responsibility to You or any person for it. We ourselves may also provide You with general guidance as to questions You submit through Homyze. Any information on Homyze is for general guidance only and is not intended to be specific expert advice tailored to Your particular circumstances. You should take all due care in relying on such information, as this is done at Your own risk."}),(0,r.jsx)("p",{children:"5.6. In the unlikely event that You have a dispute with a Pro, You must address such dispute directly to the Pro concerned, or any trade association of which such Pro is a member. However, You agree to notify the details of the dispute to Us as soon as reasonably practicable. We cannot be involved in Your disputes with Pros. By using Homyze You release Us from any and all claims, demands and damages of every kind arising out of or in any way connected with any such disputes You have with one or more Pros. We do appreciate feedback from You and other work requesters, and may attempt to ensure that You are satisfied with regard to the services performed."}),(0,r.jsx)("p",{children:"5.7. Because We are not involved in transactions between You and Pros, if a dispute arises between You and a Pro, You release Us (and Our agents and employees) from any claims or damages arising out of or in any way connected with such disputes."}),(0,r.jsx)("p",{children:"5.8. Whilst you are a registered user of Homyze and for a period of 6 months thereafter, You agree not to privately accept or solicit quotes for jobs from Pros whose details have been provided to You by means of the Service. We reserve the right to terminate Your access to the Service in the event that You enter into, or attempt to enter into any arrangement contrary to this clause 5.8."}),(0,r.jsx)("p",{children:"5.9. Payment for all work carried out by Pros must be made by means of Homyze, and not in cash or by any other means."}),(0,r.jsx)("p",{children:"5.10. You agree to treat the Pro professionally, courteously and lawfully and to provide a safe and appropriate working environment for them. You also agree to provide them with all information and co-operation reasonably required by them to enable them to fulfil the Contract."}),(0,r.jsx)("p",{children:"5.11. You will pay all sums outstanding under Estimated Contracts within 5 days of the completion of the works agreed under the Estimated Contract."}),(0,r.jsxs)("p",{children:["5.12. There may be amounts that You are required to pay in the fullfillment of Your Requests in addition to the agreed labour rate. Information relating to charges can be found on our website at ",(0,r.jsx)("a",{href:"https://www.homyze.com/pricing",children:"www.homyze.com/pricing"})," and/or elsewhere on our website. If you have any questions about the charges we suggest you ask these before submitting a Request."]}),(0,r.jsx)("h4",{children:"6. YOUR USE OF Homyze"}),(0,r.jsx)("p",{children:"6.1. You are responsible for ensuring that You are legally entitled to submit to Homyze any information which You include in a Request. You may only use Homyze for Requests for genuine Projects where You have authority to engage a Pro and Your intention is to do so subject to agreeing suitable terms. You may not make Requests for any Project which is illegal or unlawful."}),(0,r.jsxs)("p",{children:["6.2. You agree to pay the Pro for all work completed in accordance with the Contract, no later than on completion of the work and/or Our request for payment. All payments to Pros must be made by means of the Service. We may use a payment service provider (Stripe) to facilitate payment card processing. We require that the payment services provider complies with applicable financial services regulations, but will not be responsible for any acts or omissions of the payment service provider. Your relationship with Stripe is separate from Your relationship with us and is governed by Stripe’s terms of service. You must sign up for an account with Stripe and agree to abide by Stripe’s Terms of Service located at"," ",(0,r.jsx)("a",{href:"https://stripe.com/terms",children:"https://stripe.com/terms"}),". Please review those terms carefully and make sure You understand and agree to them."," "]}),(0,r.jsxs)("p",{children:["6.3 In the event that payment is not made by yourself within the timeframe specified above, we reserve the right to pass details of the outstanding amounts to third parties who may seek repayment on our behalf. Any request for payment made by these third parties is separate to your agreement with the Service and these third parties may impose fees in relation to the collection of any outstanding amounts."," "]}),(0,r.jsx)("p",{children:"6.4. You agree not to use Homyze in any unlawful manner and in particular shall not:"}),(0,r.jsx)("p",{children:"a. include in any Request any information that infringes any patent, trademark, copyright, trade secret or other intellectual property right or proprietary right of any person;"}),(0,r.jsx)("p",{children:"b. submit to Homyze any corrupted files, files that contain viruses, or any other item that may damage the operation of a computer or other electronic device;"}),(0,r.jsx)("p",{children:"c. impersonate another person or entity;"}),(0,r.jsx)("p",{children:"d. falsify or delete any author attributions, legal or other proper notices or proprietary designations or labels on any material contained in a Request;"}),(0,r.jsx)("p",{children:"e. copy the Service or any part of it;"}),(0,r.jsx)("p",{children:"f. access any part of the Service by any means other than the mobile app or the site provided by Us;"}),(0,r.jsx)("p",{children:"g. cause Homyze to be interrupted, damaged, rendered less efficient or such that the effectiveness or functionality of Homyze is in any way impaired; or"}),(0,r.jsx)("p",{children:"h. restrict or inhibit any other user from using and benefitting from Homyze."}),(0,r.jsx)("p",{children:"6.5. You must not include in any Request any information which could personally identify any other person or house or other property, unless You are entitled to do so."}),(0,r.jsx)("p",{children:"6.6. You agree not to scrape, spider, resell, copy, reproduce, modify, create derivative works from, distribute or publicly display any content from Homyze without Our prior written permission."}),(0,r.jsx)("p",{children:"6.7. In respect of Estimate Contracts, the Pro may propose terms for the Contract; You are not obliged to accept them, but acknowledge that if You do not, the Pro may not agree to work on the Project. If You do agree to them, You must abide by them."}),(0,r.jsx)("p",{children:"6.8. If you provide any comments or feedback to us in relation to the Service, any Pro or any Work done, we may publish it on our website or any social media account."}),(0,r.jsx)("h4",{children:"7. CANCELLING CONTRACTS"}),(0,r.jsx)("p",{children:"7.1. If You are a consumer, nothing in this clause 7 affects any statutory right You have as a consumer."}),(0,r.jsx)("p",{children:"7.2. You are free to retract any Request at any time until it is accepted."}),(0,r.jsx)("p",{children:"7.3. You are free to cancel an appointment for an Estimate at any time."}),(0,r.jsx)("p",{children:"7.4. Where a Now Contract is cancelled by you within 5 minutes from you being notified that the Pro has accepted the Contract, you may cancel and receive a full refund of the agreed charges."}),(0,r.jsx)("p",{children:"7.5. Where a Now Contract is cancelled by you after 5 minutes from you being notified that the Pro has accepted the Contract, Homyze will retain from Your refund the sum of a minimum one hour’s charges agreed with the Pro as a sum representing the work done by the Pro in anticipation of attending Your premises."}),(0,r.jsx)("p",{children:"7.6. Where a Scheduled Contract is cancelled by You in excess of 24 hours before the scheduled time for the Work, You may cancel and receive a full refund of the agreed charges."}),(0,r.jsx)("p",{children:"7.7. Where a Scheduled Contract is cancelled by You less than 24 hours but more than 4 hours before the scheduled time for the Work, We will retain from Your refund the sum of \xa330+VAT (\xa336) as a sum representing the work done by the Pro in anticipation of attending Your premises or as remuneration for time spent in undertaking travel, be it wholly or partially, to Your premises or in compensation for not being able to take on other work at or around the Scheduled time. For cancellations made less than 24 hours but more than 4 hours' before the Scheduled time, where the Scheduled Contract was due to take place outside of normal operating hours - which for the avoidance of doubt are 08:00 - 19:00 from Monday to Friday (excluding Bank Holidays) - the appropriate cancellation charge will be \xa345+VAT (\xa354)."}),(0,r.jsx)("p",{children:"7.8 Where a Scheduled Contract is cancelled by You less than 4 hours before the scheduled time for the Work, We will retain from Your refund the sum of a minimum one hour’s charges agreed with the Pro as a sum representing the work done by the Pro in anticipation of attending Your premises or as remuneration for time spent in undertaking travel, be it wholly or partially, to Your premises or in compensation for not being able to take on other work at or around the Scheduled time."}),(0,r.jsx)("p",{children:"7.9. If a Pro arrives at the job location for an On-Demand Contract and is unable to contact You or gain access to the job location they will message and attempt to contact You for 15 mins. We will retain the minimum fee of one hour of the charges agreed with the Pro and the Contract will be deemed to be terminated."}),(0,r.jsx)("h4",{children:"8. USE OF REQUESTS"}),(0,r.jsx)("p",{children:"8.1. You are solely responsible for the content, accuracy, and completeness of each Request You submit to Homyze, and agree that it shall only contain information which is true, accurate and current."}),(0,r.jsx)("p",{children:"8.2. You acknowledge that We may edit, modify or remove any parts of a Request which We consider is in breach of any of the provisions of the Terms."}),(0,r.jsx)("p",{children:"8.3. By providing a Request You grant to Us a royalty-free, perpetual, irrevocable and non-exclusive licence to use, copy, reproduce, modify, publish, edit, translate, distribute and display the Request alone or as part of other works in any form, media, or technology. Do not include in any Request any information that You would not want Us to use in this way, or that We will not be entitled to use in this way."}),(0,r.jsx)("p",{children:"8.4. You consent to information about the device You use to access Homyze being collected and processed for fraud prevention purposes and You acknowledge that We may use third parties (and information they provide) to help Us prevent fraud or unauthorised access to Our Service."}),(0,r.jsx)("h4",{children:"9. REPORTING MISCONDUCT"}),(0,r.jsxs)("p",{children:["9.1. If You feel that a Pro has acted in an inappropriate way towards You, including in a manner You feel to be offensive, violent or sexually inappropriate You should immediately make a report to the appropriate authorities and then to Us at"," ",(0,r.jsx)("a",{href:"mailto:hello@homyze.com",children:"hello@homyze.com"})," quoting the police report number and location. Your report may cause Us to investigate such behaviour but We are not obligated to take action beyond that which is required by law, and We will not be obliged to incur any additional liability or expense in doing so."]}),(0,r.jsx)("h4",{children:"10. INTELLECTUAL PROPERTY RIGHTS"}),(0,r.jsx)("p",{children:"10.1. You acknowledge that all copyright and other intellectual property rights in Homyze (the “Intellectual Property“), including the manner in which Homyze is presented or appears and all information and documentation relating to it is Our property (or that of Our licensors). Nothing in the Terms shall be taken to transfer any of the Intellectual Property to You."}),(0,r.jsx)("p",{children:"10.2. Solely for the purposes of receiving Homyze for the period during which Homyze is provided to You, We grant to You a non-exclusive, non-transferable licence to use the Intellectual Property."}),(0,r.jsx)("h4",{children:"11. LINKS"}),(0,r.jsx)("p",{children:"11.1. It is not possible for Us to review all websites which are linked to from Homyze (or link to Homyze), and You should therefore take care when following any link. We cannot accept liability for any loss or damage that may be suffered as a result of following any links."}),(0,r.jsx)("h4",{children:"12. OUR RIGHTS"}),(0,r.jsx)("p",{children:"12.1. We reserve the right at all times to edit, refuse to post, or to remove from Homyze any information or materials for any reason, and to disclose any information We think appropriate to satisfy any obligation We may have under applicable laws, regulatory requirements, legal processes, or to satisfy any request of the police, government or any regulatory body or trade association."}),(0,r.jsx)("p",{children:"12.2. We reserve the right to terminate the provision of Homyze to You and restrict Your access to Homyze at any time without notice for any reason whatsoever, including if We suspect You to be in breach of any of the Terms."}),(0,r.jsx)("p",{children:"12.3. We may vary the terms of the Terms from time to time and shall post any alterations on the Service. If You do not agree to the changes made to the terms of the Terms then You have the right to stop using Service, and should do so immediately. Your continued use of Homyze after the date the changes have been posted will constitute acceptance of the amended Terms."}),(0,r.jsx)("h4",{children:"13. IF YOU ARE A CONSUMER - OUR RESPONSIBILITY FOR LOSS OR DAMAGE SUFFERED BY YOU"}),(0,r.jsx)("p",{children:"13.1. As a platform provider and intermediary between you and Pros, We have no responsibility or liability for any work or materials provided to You by any Pro. We cannot and do not make any warranty or guarantee that work or materials under any Contract will be of satisfactory quality, fit for any particular purpose or in compliance with any law, regulation, or code of practice."}),(0,r.jsx)("p",{children:"13.2. We are responsible to You for foreseeable loss and damage caused by us. If We fail to comply with these terms, We are responsible for loss or damage You suffer that is a foreseeable result of Our breaking these Terms or Our failing to use reasonable care and skill, but We are not responsible for any loss or damage that is not foreseeable. Loss or damage is foreseeable if either it is obvious that it will happen or if, at the time the contract was made, both We and You knew it might happen, for example, if You discussed it with Us during the sales process."}),(0,r.jsx)("p",{children:"13.3. If Our app or website damages a device or digital content belonging to You and this is caused by Our failure to use reasonable care and skill We will either repair the damage or pay You compensation. However, We will not be liable for damage which You could have avoided by following Our advice to apply an update offered to You free of charge or for damage which was caused by You failing to correctly follow installation instructions or to have in place the minimum system requirements advised by us."}),(0,r.jsx)("p",{children:"13.4. We are not liable for business losses. If You use the products for any commercial, business or re-sale purpose We will have no liability to You for any loss of profit, loss of business, business interruption, or loss of business opportunity."}),(0,r.jsx)("p",{children:"13.5. Nothing in these terms affects your statutory rights."}),(0,r.jsx)("h4",{children:"14. IF YOU ARE A BUSINESS - OUR RESPONSIBILITY FOR LOSS OR DAMAGE SUFFERED BY YOU."}),(0,r.jsx)("p",{children:"14.1. Nothing in these Terms shall limit or exclude Our liability for:"}),(0,r.jsx)("p",{children:"14.1.1. death or personal injury caused by Our negligence, or the negligence of its employees, agents or subcontractors;"}),(0,r.jsx)("p",{children:"14.1.2. fraud or fraudulent misrepresentation; or"}),(0,r.jsx)("p",{children:"14.1.3. breach of the terms implied by section 2 of the Supply of Goods and Services Act 1982 (title and quiet possession)."}),(0,r.jsx)("p",{children:"14.2. Subject to clause 14.1:"}),(0,r.jsx)("p",{children:"14.2.1. We shall under no circumstances whatever be liable to You, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, for any loss of:"}),(0,r.jsx)("p",{children:"14.2.1.1. profit;"}),(0,r.jsx)("p",{children:"14.2.1.2. anticipated savings"}),(0,r.jsx)("p",{children:"14.2.1.3. goodwill,"}),(0,r.jsx)("p",{children:"or any indirect or consequential loss arising under or in connection with the Service."}),(0,r.jsx)("p",{children:"14.3. Subject to clause 14.1, Our total liability to You in respect of all other losses arising under or in connection with the Contract, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, shall in no circumstances exceed \xa3100."}),(0,r.jsx)("h4",{children:"15. OTHER IMPORTANT TERMS"}),(0,r.jsx)("p",{children:"15.1. We may transfer this agreement to someone else. We may transfer Our rights and obligations under these terms to another organisation."}),(0,r.jsx)("p",{children:"15.2. You need Our consent to transfer Your rights to someone else (except that You can always transfer Our guarantee). You may only transfer Your rights or Your obligations under these terms to another person if We agree to this in writing."}),(0,r.jsx)("p",{children:"15.3. Nobody else has any rights under this contract (except someone You pass Your guarantee on to). This contract is between You and us. No other person shall have any rights to enforce any of its terms."}),(0,r.jsx)("p",{children:"15.4. If a court finds part of this contract illegal, the rest will continue in force. Each of the paragraphs of these terms operates separately. If any court or relevant authority decides that any of them are unlawful, the remaining paragraphs will remain in full force and effect."}),(0,r.jsx)("p",{children:"15.5. Even if We delay in enforcing this contract, We can still enforce it later. If We do not insist immediately that You do anything You are required to do under these terms, or if We delay in taking steps against You in respect of Your breaking this contract, that will not mean that You do not have to do those things and it will not prevent Us taking steps against You at a later date."}),(0,r.jsx)("p",{children:"15.6. Which laws apply to this contract and where You may bring legal proceedings. These terms are governed by English law and You can bring legal proceedings in respect of the Service in the English courts. If You live in Scotland You can bring legal proceedings in respect of the Service in either the Scottish or the English courts. If You live in Northern Ireland You can bring legal proceedings in respect of the Service in either the Northern Irish or the English courts."}),(0,r.jsxs)("p",{children:["15.7. In the event of any comments or questions regarding the Terms (including the Privacy Policy) then please contact Us at ",(0,r.jsx)("a",{href:"mailto:hello@homyze.com",children:"hello@homyze.com"}),"."]}),(0,r.jsx)("p",{children:"15.8. Our registered company number is 09671219 and Our registered office is 309 Westbourne Studios 242 Acklam Road, London, W10 5JJ. Our VAT number is 219072616."}),(0,r.jsx)("h4",{children:"16. MANDATORY APPLE TERMS"}),(0,r.jsx)("p",{children:"16.1. Apple Mandatory Terms. If You are downloading the App from the Apple iTunes App Store, the following terms also apply to You (referred to ‘End-user’ in this clause 16):"}),(0,r.jsx)("p",{children:"16.2. Acknowledgement: Both of Us acknowledge this constitutes an agreement between You and Us only, and not with Apple, and we, not Apple, are solely responsible for the App and the content thereof."}),(0,r.jsx)("p",{children:"16.3. Scope of Licence: The licence granted to End-user for the App is limited to a non- transferable license to use the App on an iPhone, iPad or iPod touch that End-user own or control and as permitted by the Usage Rules set forth in the App Store Terms and Conditions (the “Usage Rules”)."}),(0,r.jsx)("p",{children:"16.4. Maintenance and Support: We, not Apple, are solely responsible for providing any maintenance and support services with respect to the App, as specified in this EULA. We and End-user both acknowledge that Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the App."}),(0,r.jsx)("p",{children:"16.5. Warranty: We are solely responsible for any product warranties, whether express or implied by law, to the extent not effectively disclaimed in this EULA. In the event of any failure of the App to conform to any applicable warranty, End-user may notify Apple, and Apple will refund the purchase price for the App to End-user. To the maximum extent permitted by law, Apple will have no other warranty obligation whatsoever with respect to the App, and any other claims, losses, liabilities, damages, costs or expenses attributable to any failure to conform to any warranty will be Our sole responsibility."}),(0,r.jsx)("p",{children:"16.6. Product Claims: We and End-user acknowledge that We, not Apple, are responsible for addressing any claims by End-user or any third-party relating to the App or End-user’s use or possession of the App, including, but not limited to: (i) product liability claims; (ii) any claim that the App fail to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection or similar legislation."}),(0,r.jsx)("p",{children:"16.7. Intellectual Property Rights: You and We acknowledge that, in the event of any third-party claim that the App or End-user’s possession and use of the App infringes that third-party’s intellectual property rights, We, not Apple, will be solely responsible for the investigation, defence, settlement and discharge of any such intellectual property infringement claim."}),(0,r.jsx)("p",{children:"16.8. Legal Compliance and Export: You represent and warrant that (i) End-user are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a “terrorist supporting” country; and (ii) End-user are not listed on any U.S. Government list of prohibited or restricted parties."}),(0,r.jsx)("p",{children:"16.9. Third Party Beneficiary: We and End-user acknowledge and agree that Apple, and Apple’s subsidiaries, are third-party beneficiaries of this EULA, and that, upon acceptance of the terms and conditions of this EULA, Apple will have the right (and will be deemed to have accepted the right) to enforce this EULA against End-user as a third-party beneficiary thereof."})]})};t.default=a}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=71578)}),_N_E=e.O()}]);