(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[8610],{895:function(e,t,a){"use strict";a.d(t,{dK:function(){return n},_k:function(){return s},vc:function(){return c},rx:function(){return o},qo:function(){return m},Hk:function(){return i},Iz:function(){return u}});var r=a(1336),l=a.n(r);a(892)(l()),a(4212).w(l()),a(4182)(l());var n=["en","zh"],s=!1,c=null,o="aac23c8d",m=8,i=50,u={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},3146:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var r=a(7294),l=a(6010),n=a(3905),s=a(4973),c=a(6742),o=a(3541),m=a(1217),i="blogPostTitle_GeHD",u="blogPostDate_fNvV",d=a(6700);var g=function(e){var t,a,g=(t=(0,d.c2)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),h=e.children,p=e.frontMatter,f=e.metadata,E=e.truncated,_=e.isBlogPostPage,v=void 0!==_&&_,b=f.date,N=f.formattedDate,k=f.permalink,w=f.tags,Z=f.readingTime,T=p.author,P=p.title,M=p.image,y=p.keywords,I=p.author_url||p.authorURL,L=p.author_title||p.authorTitle,x=p.author_image_url||p.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(m.Z,{keywords:y,image:M}),r.createElement("article",{className:v?void 0:"margin-bottom--xl"},(a=v?"h1":"h2",r.createElement("header",null,r.createElement(a,{className:(0,l.Z)("margin-bottom--sm",i)},v?P:r.createElement(c.Z,{to:k},P)),r.createElement("div",{className:"margin-vert--md"},r.createElement("time",{dateTime:b,className:u},N,Z&&r.createElement(r.Fragment,null," \xb7 ",g(Z)))),r.createElement("div",{className:"avatar margin-vert--md"},x&&r.createElement(c.Z,{className:"avatar__photo-link avatar__photo",href:I},r.createElement("img",{src:x,alt:T})),r.createElement("div",{className:"avatar__intro"},T&&r.createElement(r.Fragment,null,r.createElement("h4",{className:"avatar__name"},r.createElement(c.Z,{href:I},T)),r.createElement("small",{className:"avatar__subtitle"},L)))))),r.createElement("div",{className:"markdown"},r.createElement(n.Zo,{components:o.Z},h)),(w.length>0||E)&&r.createElement("footer",{className:"row margin-vert--lg"},w.length>0&&r.createElement("div",{className:"col"},r.createElement("strong",null,r.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),w.map((function(e){var t=e.label,a=e.permalink;return r.createElement(c.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),E&&r.createElement("div",{className:"col text--right"},r.createElement(c.Z,{to:f.permalink,"aria-label":"Read more about "+P},r.createElement("strong",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},5601:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var r=a(7294),l=a(6010),n=a(6742),s="sidebar_2ahu",c="sidebarItemTitle_2hhb",o="sidebarItemList_2xAf",m="sidebarItem_2UVv",i="sidebarItemLink_1RT6",u="sidebarItemLinkActive_12pM";function d(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("div",{className:(0,l.Z)(s,"thin-scrollbar")},r.createElement("h3",{className:c},t.title),r.createElement("ul",{className:o},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:m},r.createElement(n.Z,{isNavLink:!0,to:e.permalink,className:i,activeClassName:u},e.title))}))))}},9404:function(e,t,a){"use strict";a.r(t);var r=a(7294),l=a(6591),n=a(3146),s=a(6742),c=a(5601),o=a(4973),m=a(6700);function i(e){var t,a=e.tagName,l=e.count,n=(t=(0,m.c2)().selectMessage,function(e){return t(e,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return r.createElement(o.Z,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:n(l),tagName:a}},'{nPosts} tagged with "{tagName}"')}t.default=function(e){var t=e.metadata,a=e.items,u=e.sidebar,d=t.allTagsPath,g=t.name,h=t.count;return r.createElement(l.Z,{title:'Posts tagged "'+g+'"',description:'Blog | Tagged "'+g+'"',wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--3"},r.createElement(c.Z,{sidebar:u})),r.createElement("main",{className:"col col--7"},r.createElement("h1",null,r.createElement(i,{count:h,tagName:g})),r.createElement(s.Z,{href:d},r.createElement(o.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),r.createElement("div",{className:"margin-vert--xl"},a.map((function(e){var t=e.content;return r.createElement(n.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))))))}}}]);