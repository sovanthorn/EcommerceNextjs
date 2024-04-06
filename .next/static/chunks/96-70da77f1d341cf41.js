"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[96],{9096:function(e,a,t){t.d(a,{zx:function(){return u.z},Zb:function(){return x},wp:function(){return G.Navbar},YE:function(){return D.Sidebar}}),t(9074),t(4391),t(8829),t(7928);var s,l=t(7437),i=t(9908),r=t(1367),o=t(7997),n=t(1671);let d=({children:e,className:a,theme:t={},...s})=>{let i=(0,o.E)((0,n.gh)().avatar.group,t);return(0,l.jsx)("div",{"data-testid":"avatar-group-element",className:(0,r.m6)(i.base,a),...s,children:e})};d.displayName="Avatar.Group";let c=({className:e,href:a,theme:t={},total:s,...i})=>{let d=(0,o.E)((0,n.gh)().avatar.groupCounter,t);return(0,l.jsxs)("a",{href:a,className:(0,r.m6)(d.base,e),...i,children:["+",s]})};c.displayName="Avatar.GroupCounter";let m=({alt:e="",bordered:a=!1,children:t,className:s,color:i="light",img:d,placeholderInitials:c="",rounded:m=!1,size:h="md",stacked:f=!1,status:b,statusPosition:g="top-left",theme:p={},...u})=>{let x=(0,o.E)((0,n.gh)().avatar,p),N=(0,r.m6)(x.root.img.base,a&&x.root.bordered,a&&x.root.color[i],m&&x.root.rounded,f&&x.root.stacked,x.root.img.on,x.root.size[h]),j={className:(0,r.m6)(N,x.root.img.on),"data-testid":"flowbite-avatar-img"};return(0,l.jsxs)("div",{className:(0,r.m6)(x.root.base,s),"data-testid":"flowbite-avatar",...u,children:[(0,l.jsxs)("div",{className:"relative",children:[d?"string"==typeof d?(0,l.jsx)("img",{alt:e,src:d,...j}):d({alt:e,...j}):c?(0,l.jsx)("div",{className:(0,r.m6)(x.root.img.off,x.root.initials.base,f&&x.root.stacked,a&&x.root.bordered,a&&x.root.color[i],x.root.size[h],m&&x.root.rounded),"data-testid":"flowbite-avatar-initials-placeholder",children:(0,l.jsx)("span",{className:(0,r.m6)(x.root.initials.text),"data-testid":"flowbite-avatar-initials-placeholder-text",children:c})}):(0,l.jsx)("div",{className:(0,r.m6)(N,x.root.img.off),"data-testid":"flowbite-avatar-img",children:(0,l.jsx)("svg",{className:x.root.img.placeholder,fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})})}),b&&(0,l.jsx)("span",{"data-testid":"flowbite-avatar-status",className:(0,r.m6)(x.root.status.base,x.root.status[b],x.root.statusPosition[g])})]}),t&&(0,l.jsx)("div",{children:t})]})};m.displayName="Avatar",Object.assign(m,{Group:d,Counter:c}),t(2319);var h=t(841);let f=({children:e,...a})=>(0,l.jsx)("div",{"data-testid":"flowbite-banner",role:"banner",tabIndex:-1,...a,children:e});f.displayName="Banner",Object.assign(f,{CollapseButton:h.BannerCollapseButton});var b=t(2265);let g=(0,b.forwardRef)(({children:e,className:a,href:t,icon:s,theme:d={},...c},m)=>{let h=void 0!==t,f=(0,o.E)((0,n.gh)().breadcrumb.item,d);return(0,l.jsxs)("li",{className:(0,r.m6)(f.base,a),...c,children:[(0,l.jsx)(i.yoF,{"aria-hidden":!0,className:f.chevron,"data-testid":"flowbite-breadcrumb-separator"}),(0,l.jsxs)(h?"a":"span",{ref:m,className:f.href[h?"on":"off"],"data-testid":"flowbite-breadcrumb-item",href:t,children:[s&&(0,l.jsx)(s,{"aria-hidden":!0,className:f.icon}),e]})]})});g.displayName="Breadcrumb.Item";let p=({children:e,className:a,theme:t={},...s})=>{let i=(0,o.E)((0,n.gh)().breadcrumb.root,t);return(0,l.jsx)("nav",{"aria-label":"Breadcrumb",className:(0,r.m6)(i.base,a),...s,children:(0,l.jsx)("ol",{className:i.list,children:e})})};p.displayName="Breadcrumb",Object.assign(p,{Item:g});var u=t(6387);let x=e=>{let{children:a,className:t,horizontal:s,href:i,theme:d={}}=e,c=void 0===i?"div":"a",m=j(e),h=(0,o.E)((0,n.gh)().card,d);return(0,l.jsxs)(c,{"data-testid":"flowbite-card",href:i,className:(0,r.m6)(h.root.base,h.root.horizontal[s?"on":"off"],i&&h.root.href,t),...m,children:[(0,l.jsx)(N,{...e}),(0,l.jsx)("div",{className:h.root.children,children:a})]})},N=({theme:e={},...a})=>{let t=(0,o.E)((0,n.gh)().card,e);return a.renderImage?a.renderImage(t,a.horizontal??!1):a.imgSrc?(0,l.jsx)("img",{"data-testid":"flowbite-card-image",alt:a.imgAlt??"",src:a.imgSrc,className:(0,r.m6)(t.img.base,t.img.horizontal[a.horizontal?"on":"off"])}):null},j=(s=["renderImage","imgSrc","imgAlt","children","className","horizontal","href","theme"],e=>{let a={};for(let t in e)s.includes(t)||(a[t]=e[t]);return a});t(294),(0,b.forwardRef)(({className:e,color:a="default",theme:t={},...s},i)=>{let d=(0,o.E)((0,n.gh)().checkbox,t);return(0,l.jsx)("input",{ref:i,type:"checkbox",className:(0,r.m6)(d.root.base,d.root.color[a],e),...s})}).displayName="Checkbox",t(9876),t(7999),t(6827),t(41),t(6888),t(6398),t(5955);var v=t(1641);(0,b.forwardRef)(({className:e,color:a="gray",helperText:t,sizing:s="md",theme:i={},...d},c)=>{let m=(0,o.E)((0,n.gh)().fileInput,i);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:(0,r.m6)(m.root.base,e),children:(0,l.jsx)("div",{className:m.field.base,children:(0,l.jsx)("input",{className:(0,r.m6)(m.field.input.base,m.field.input.colors[a],m.field.input.sizes[s]),...d,type:"file",ref:c})})}),t&&(0,l.jsx)(v.p,{color:a,children:t})]})}).displayName="FileInput",(0,b.forwardRef)(({label:e,helperText:a,color:t="default",sizing:s="md",variant:i,disabled:d=!1,theme:c={},className:m,...h},f)=>{let g=(0,b.useId)(),p=(0,o.E)((0,n.gh)().floatingLabel,c);return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:(0,r.m6)("relative","standard"===i?"z-0":""),children:[(0,l.jsx)("input",{type:"text",id:h.id?h.id:"floatingLabel"+g,"aria-describedby":"outlined_success_help",className:(0,r.m6)(p.input[t][i][s],m),placeholder:" ","data-testid":"floating-label",disabled:d,...h,ref:f}),(0,l.jsx)("label",{htmlFor:h.id?h.id:"floatingLabel"+g,className:(0,r.m6)(p.label[t][i][s],m),children:e})]}),(0,l.jsx)("p",{id:"outlined_helper_text"+g,className:(0,r.m6)(p.helperText[t],m),children:a})]})}).displayName="FloatingLabel",t(3483),t(1901);let w=({alt:e,className:a,children:t,href:s,name:i,src:d,theme:c={},...m})=>{let h=(0,o.E)((0,n.gh)().footer.brand,c);return(0,l.jsx)("div",{children:s?(0,l.jsxs)("a",{"data-testid":"flowbite-footer-brand",href:s,className:(0,r.m6)(h.base,a),...m,children:[(0,l.jsx)("img",{alt:e,src:d,className:h.img}),(0,l.jsx)("span",{"data-testid":"flowbite-footer-brand-span",className:h.span,children:i}),t]}):(0,l.jsx)("img",{alt:e,"data-testid":"flowbite-footer-brand",src:d,className:(0,r.m6)(h.img,a),...m})})},y=({by:e,className:a,href:t,theme:s={},year:i,...d})=>{let c=(0,o.E)((0,n.gh)().footer.copyright,s);return(0,l.jsxs)("div",{"data-testid":"flowbite-footer-copyright",className:(0,r.m6)(c.base,a),...d,children:["\xa9 ",i,t?(0,l.jsx)("a",{href:t,className:c.href,children:e}):(0,l.jsx)("span",{"data-testid":"flowbite-footer-copyright-span",className:c.span,children:e})]})},k=({className:e,theme:a={},...t})=>{let s=(0,o.E)((0,n.gh)().footer.divider,a);return(0,l.jsx)("hr",{"data-testid":"footer-divider",className:(0,r.m6)(s.base,e),...t})},E=({ariaLabel:e,className:a,href:t,icon:s,theme:i={},...d})=>{let c=(0,o.E)((0,n.gh)().footer.icon,i);return(0,l.jsx)("div",{children:t?(0,l.jsx)("a",{"aria-label":e,"data-testid":"flowbite-footer-icon",href:t,className:(0,r.m6)(c.base,a),...d,children:(0,l.jsx)(s,{className:c.size})}):(0,l.jsx)(s,{"data-testid":"flowbite-footer-icon",className:c.size,...d})})},I=({as:e="a",children:a,className:t,href:s,theme:i={},...d})=>{let c=(0,o.E)((0,n.gh)().footer.groupLink.link,i);return(0,l.jsx)("li",{className:(0,r.m6)(c.base,t),children:(0,l.jsx)(e,{href:s,className:c.href,...d,children:a})})},z=({children:e,className:a,col:t=!1,theme:s={},...i})=>{let d=(0,o.E)((0,n.gh)().footer.groupLink,s);return(0,l.jsx)("ul",{"data-testid":"footer-groupLink",className:(0,r.m6)(d.base,t&&d.col,a),...i,children:e})},C=({as:e="h2",className:a,theme:t={},title:s,...i})=>{let d=(0,o.E)((0,n.gh)().footer.title,t);return(0,l.jsx)(e,{"data-testid":"flowbite-footer-title",className:(0,r.m6)(d.base,a),...i,children:s})},F=({bgDark:e=!1,children:a,className:t,container:s=!1,theme:i={},...d})=>{let c=(0,o.E)((0,n.gh)().footer,i);return(0,l.jsx)("footer",{"data-testid":"flowbite-footer",className:(0,r.m6)(c.root.base,e&&c.root.bgDark,s&&c.root.container,t),...d,children:a})};F.displayName="Footer",y.displayName="Footer.Copyright",I.displayName="Footer.Link",w.displayName="Footer.Brand",z.displayName="Footer.LinkGroup",E.displayName="Footer.Icon",C.displayName="Footer.Title",k.displayName="Footer.Divider",Object.assign(F,{Copyright:y,Link:I,LinkGroup:z,Brand:w,Icon:E,Title:C,Divider:k});let L=({children:e,className:a,icon:t,theme:s={},...i})=>{let d=(0,o.E)((0,n.gh)().list.item,s);return(0,l.jsxs)("li",{className:(0,r.m6)(d.withIcon[t?"on":"off"],a),...i,children:[t&&(0,l.jsx)(t,{className:(0,r.m6)(d.icon)}),e]})},R=({children:e,className:a,unstyled:t,nested:s,ordered:i,horizontal:d,theme:c={},...m})=>{let h=(0,o.E)((0,n.gh)().list,c);return(0,l.jsx)(i?"ol":"ul",{className:(0,r.m6)(h.root.base,h.root.ordered[i?"on":"off"],t&&h.root.unstyled,s&&h.root.nested,d&&h.root.horizontal,a),...m,children:e})};R.displayName="List",L.displayName="List.Item",Object.assign(R,{Item:L});let B=({active:e,children:a,className:t,href:s,icon:i,onClick:d,theme:c={},disabled:m,...h})=>{let f=(0,o.E)((0,n.gh)().listGroup.item,c),b=void 0!==s;return(0,l.jsx)("li",{className:(0,r.m6)(f.base,t),children:(0,l.jsxs)(b?"a":"button",{href:s,onClick:d,type:b?void 0:"button",disabled:m,className:(0,r.m6)(f.link.active[e?"on":"off"],f.link.disabled[m?"on":"off"],f.link.base,f.link.href[b?"on":"off"]),...h,children:[i&&(0,l.jsx)(i,{"aria-hidden":!0,"data-testid":"flowbite-list-group-item-icon",className:f.link.icon}),a]})})},S=({children:e,className:a,theme:t={},...s})=>{let i=(0,o.E)((0,n.gh)().listGroup,t);return(0,l.jsx)("ul",{className:(0,r.m6)(i.root.base,a),...s,children:e})};S.displayName="ListGroup",B.displayName="ListGroup.Item",Object.assign(S,{Item:B}),t(2363),t(7155),t(8266),t(2897);var G=t(565);t(812),t(1885),t(8386),t(6770);let O=(e,a)=>e>=a?[]:[...Array(a-e+1).keys()].map(a=>a+e),_=({active:e,children:a,className:t,onClick:s,theme:i={},...d})=>{let c=(0,o.E)((0,n.gh)().pagination,i);return(0,l.jsx)("button",{type:"button",className:(0,r.m6)(e&&c.pages.selector.active,t),onClick:s,...d,children:a})};_.displayName="Pagination.Button";let A=({children:e,className:a,onClick:t,theme:s={},disabled:i=!1,...d})=>{let c=(0,o.E)((0,n.gh)().pagination,s);return(0,l.jsx)("button",{type:"button",className:(0,r.m6)(i&&c.pages.selector.disabled,a),disabled:i,onClick:t,...d,children:e})};A.displayName="Pagination.Navigation";let M=({className:e,currentPage:a,layout:t="pagination",nextLabel:s="Next",onPageChange:d,previousLabel:c="Previous",renderPaginationButton:m=e=>(0,l.jsx)(_,{...e}),showIcons:h=!1,theme:f={},totalPages:b,...g})=>{let p=(0,o.E)((0,n.gh)().pagination,f),u=Math.min(Math.max("pagination"===t?a+2:a+4,5),b),x=Math.max(1,u-4);return(0,l.jsxs)("nav",{className:(0,r.m6)(p.base,e),...g,children:["table"===t&&(0,l.jsxs)("div",{className:p.layout.table.base,children:["Showing ",(0,l.jsx)("span",{className:p.layout.table.span,children:x})," to\xa0",(0,l.jsx)("span",{className:p.layout.table.span,children:u})," of\xa0",(0,l.jsx)("span",{className:p.layout.table.span,children:b})," Entries"]}),(0,l.jsxs)("ul",{className:p.pages.base,children:[(0,l.jsx)("li",{children:(0,l.jsxs)(A,{className:(0,r.m6)(p.pages.previous.base,h&&p.pages.showIcon),onClick:()=>{d(Math.max(a-1,1))},disabled:1===a,children:[h&&(0,l.jsx)(i.DEl,{"aria-hidden":!0,className:p.pages.previous.icon}),c]})}),"pagination"===t&&O(x,u).map(e=>(0,l.jsx)("li",{"aria-current":e===a?"page":void 0,children:m({className:(0,r.m6)(p.pages.selector.base,a===e&&p.pages.selector.active),active:e===a,onClick:()=>d(e),children:e})},e)),(0,l.jsx)("li",{children:(0,l.jsxs)(A,{className:(0,r.m6)(p.pages.next.base,h&&p.pages.showIcon),onClick:()=>{d(Math.min(a+1,b))},disabled:a===b,children:[s,h&&(0,l.jsx)(i.MOd,{"aria-hidden":!0,className:p.pages.next.icon})]})})]})]})};M.displayName="Pagination",Object.assign(M,{Button:_}),t(2438),(0,b.forwardRef)(({className:e,theme:a={},...t},s)=>{let i=(0,o.E)((0,n.gh)().radio,a);return(0,l.jsx)("input",{ref:s,type:"radio",className:(0,r.m6)(i.root.base,e),...t})}).displayName="Radio",(0,b.forwardRef)(({className:e,sizing:a="md",theme:t={},...s},i)=>{let d=(0,o.E)((0,n.gh)().rangeSlider,t);return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{"data-testid":"flowbite-range-slider",className:(0,r.m6)(d.root.base,e),children:(0,l.jsx)("div",{className:d.field.base,children:(0,l.jsx)("input",{ref:i,type:"range",className:(0,r.m6)(d.field.input.base,d.field.input.sizes[a]),...s})})})})}).displayName="RangeSlider",t(5334),t(5756),t(3667),(0,b.forwardRef)(({addon:e,children:a,className:t,color:s="gray",helperText:i,icon:d,shadow:c,sizing:m="md",theme:h={},...f},b)=>{let g=(0,o.E)((0,n.gh)().select,h);return(0,l.jsxs)("div",{className:(0,r.m6)(g.base,t),children:[e&&(0,l.jsx)("span",{className:g.addon,children:e}),(0,l.jsxs)("div",{className:g.field.base,children:[d&&(0,l.jsx)("div",{className:g.field.icon.base,children:(0,l.jsx)(d,{className:g.field.icon.svg})}),(0,l.jsx)("select",{className:(0,r.m6)(g.field.select.base,g.field.select.colors[s],g.field.select.sizes[m],g.field.select.withIcon[d?"on":"off"],g.field.select.withAddon[e?"on":"off"],g.field.select.withShadow[c?"on":"off"]),...f,ref:b,children:a}),i&&(0,l.jsx)(v.p,{color:s,children:i})]})]})}).displayName="Select";var D=t(8082);t(9022),t(7213),t(2228),t(3051),t(3740),t(258),t(2230),t(6570),t(5785),t(6210),t(3856),t(9839),t(6885),t(3),t(684),t(459),(0,b.forwardRef)(({className:e,color:a="gray",helperText:t,shadow:s,theme:i={},...d},c)=>{let m=(0,o.E)((0,n.gh)().textarea,i);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("textarea",{ref:c,className:(0,r.m6)(m.base,m.colors[a],m.withShadow[s?"on":"off"],e),...d}),t&&(0,l.jsx)(v.p,{color:a,children:t})]})}).displayName="Textarea",t(4541),t(4685),t(8387),t(1060),t(2361),t(3441),t(1842),t(3163),t(3962),(0,b.forwardRef)(({checked:e,className:a,color:t="blue",sizing:s="md",disabled:i,label:d,name:c,onChange:m,theme:h={},...f},g)=>{let p=(0,b.useId)(),u=(0,o.E)((0,n.gh)().toggleSwitch,h),x=()=>m(!e);return(0,l.jsxs)(l.Fragment,{children:[c&&e?(0,l.jsx)("input",{ref:g,checked:e,hidden:!0,name:c,readOnly:!0,type:"checkbox",className:"sr-only"}):null,(0,l.jsxs)("button",{"aria-checked":e,"aria-labelledby":`${p}-flowbite-toggleswitch-label`,disabled:i,id:`${p}-flowbite-toggleswitch`,onClick:()=>{x()},onKeyDown:e=>{"Enter"==e.code&&e.preventDefault()},role:"switch",tabIndex:0,type:"button",className:(0,r.m6)(u.root.base,u.root.active[i?"off":"on"],a),...f,children:[(0,l.jsx)("div",{"data-testid":"flowbite-toggleswitch-toggle",className:(0,r.m6)(u.toggle.base,u.toggle.checked[e?"on":"off"],e&&u.toggle.checked.color[t],u.toggle.sizes[s])}),d?.length?(0,l.jsx)("span",{"data-testid":"flowbite-toggleswitch-label",id:`${p}-flowbite-toggleswitch-label`,className:u.root.label,children:d}):null]})]})}).displayName="ToggleSwitch",t(8541),t(7398),t(3480)}}]);