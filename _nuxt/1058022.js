(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(t,e,n){"use strict";var o={name:"Header",components:{Logo:n(140).a},data:function(){return{isActive:!1,menus:[]}},mounted:function(){this.getMenu()},methods:{toggleClass:function(t){this.isActive=!this.isActive},getMenu:function(){this.menus=[{title:"Home",url:"/"},{title:"About",url:"/about"}]}}},r=n(52),l=n(89),d=n.n(l),c=n(327),m=n(328),x=n(223),h=n(329),v=n(325),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{staticClass:"app-header position-relative bg-dark header2",attrs:{app:"",flat:""}},[n("v-container",{staticClass:"py-0 fill-height"},[n("Logo"),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"d-block d-md-none",attrs:{color:"white",text:""},on:{click:function(e){return t.toggleClass()}}},[n("v-app-bar-nav-icon",{staticClass:"white--text"})],1),t._v(" "),n("div",{staticClass:"navigation",class:[t.isActive?"d-block":""],on:{click:function(e){t.isActive=!t.isActive}}},[n("ul",{staticClass:"navbar-nav"},t._l(t.menus,(function(menu,i){return n("li",{key:i,staticClass:"nav-item",attrs:{text:""}},[n("NuxtLink",{staticClass:"nav-link",attrs:{to:menu.url}},[t._v("\n                "+t._s(menu.title)+"\n              ")])],1)})),0)])],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VAppBar:c.a,VAppBarNavIcon:m.a,VBtn:x.a,VContainer:h.a,VSpacer:v.a})},140:function(t,e,n){"use strict";var o={name:"Logo",data:function(){return{}}},r=n(52),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo",attrs:{width:"1020px"}},[e("NLink",{attrs:{to:"/"}},[e("ul",{staticClass:"navbar-nav"},[e("li",[e("img",{staticClass:"mr-5",attrs:{width:"60px",src:n(272),alt:"CannaSociety Logo"}})])])])],1)}),[],!1,null,null,null);e.a=component.exports},204:function(t,e,n){var content=n(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("dc093880",content,!0,{sourceMap:!1})},216:function(t,e,n){var content=n(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("56b15182",content,!0,{sourceMap:!1})},224:function(t,e,n){"use strict";var o=n(17),r=(n(82),{components:{Header:n(139).a},mounted:function(){},methods:{getMenu:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("getMenu");case 1:case"end":return t.stop()}}),t)})))()}}}),l=(n(315),n(52)),d=n(89),c=n.n(d),m=n(324),x=n(326),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("Header"),t._v(" "),n("v-main",[n("nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:m.a,VMain:x.a})},228:function(t,e,n){n(229),t.exports=n(230)},264:function(t,e,n){"use strict";n(204)},265:function(t,e,n){var o=n(26)(!1);o.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=o},270:function(t,e,n){var content=n(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("4cb2c460",content,!0,{sourceMap:!1})},271:function(t,e,n){var o=n(26)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap);"]),o.push([t.i,"@import url(https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css);"]),o.push([t.i,'.v-application .v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 12px 0 rgba(104,113,134,.2)}.v-sheet.v-card.border-success-all{border:1px solid #2cdd9b!important}.card-shadow{box-shadow:0 0 30px rgba(115,128,157,.1)!important}.theme--light.v-application,.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text,.theme--light.v-sheet{color:#8d97ad!important}h1,h2,h3,h4,h5,h6{color:#3e4555}.border-right{border-right:1px solid #e5e7ec}.border-left{border-left:1px solid #e5e7ec}.border-top{border-top:1px solid #e5e7ec}.border-top-0{border-top:0}.border-bottom{border-bottom:1px solid #e5e7ec}.border-all,.theme--light.border-all{border:1px solid #e5e7ec!important}.mw-unset{min-width:unset!important}.w-100{width:100%}.no-cursor{cursor:auto}.no-effect-button:hover{color:#0164d3}.no-effect-button:hover:before{background-color:transparent}.img-fluid{max-width:100%;height:auto}.form-control{border:1px solid #e5e7ec;padding:10px;border-radius:8px;max-width:40px;height:40px}.form-control:focus{outline:none}@media(max-width:767px){.pt-sm-0,.py-sm-0{padding-top:0!important}.py-sm-0{padding-bottom:0!important}.v-application .text-h2{font-size:25px!important}.px-xs-0{padding-left:0!important;padding-right:0!important}.custom-label .v-input__slot{align-items:flex-start}.custom-label .v-label{min-height:58px;white-space:pre-line!important}.inner-top-spacer{padding-top:30px}}.v-main{padding:0!important}.font-18{font-size:18px}.font-14{font-size:14px}.font-12{font-size:12px}.font-13{font-size:13px}.dark-link{text-decoration:none;color:#3e4555!important}.dark-link:hover{color:#316ce8!important}.footer-bottom-bar{padding-top:10px;margin-top:20px}.mini-spacer{padding:75px 0}@media(max-width:767px){.mini-spacer{padding:45px 0}}.v-pagination{justify-content:flex-start}.position-relative{position:relative!important}.app-header.v-sheet.bg-dark,.bg-dark{background-color:#263238!important}.bg-extra-light{background-color:#f4f8fa}.bg-light-info{background-color:#cfecfe}.grey--text{color:#8d97ad!important}.op-8{opacity:.8}.text-themecolor{color:#607df9!important}.bg-info-grediant{background:#316ce8;background:linear-gradient(90deg,#316ce8,#607df9)}.bg-danger-grediant{background:#ff4d7e;background:linear-gradient(90deg,#ff4d7e,#ff6a5b)}.v-btn--contained{box-shadow:none}.theme--light.v-btn--active:before{opacity:0}.custom-lg-btn.v-btn:not(.v-btn--round).v-size--x-large{padding:0;min-width:95px}.custom-lg-btn.v-btn--fab.v-size--x-large{width:95px;height:95px}.btn-custom-nm{padding:0 25px!important}.btn-custom-md{padding:15px 35px!important}.btn-custom-lg{padding:15px 45px!important}.btn-danger-gradient{background:#ff4d7e;background:linear-gradient(90deg,#ff4d7e,#ff6a5b);border:0}.btn-danger-gradient:hover{background:#ff6a5b;background:linear-gradient(90deg,#ff6a5b,#ff4d7e)}.btn-danger-gradient.active,.btn-danger-gradient:active,.btn-danger-gradient:focus{box-shadow:0;opacity:1}.v-badge__badge .v-icon{font-size:12px!important}.btn-arrow,.btn-arrow span{position:relative}.btn-arrow span{display:inline-block;transition:all .3s ease-out;will-change:transform}.btn-arrow:focus span,.btn-arrow:hover span{transform:translate3d(-.5rem,0,0)}.btn-arrow i{position:absolute;width:1.1em;right:0;opacity:0;top:50%;transform:translateY(-50%);transition:all .3s ease-out;will-change:right,opacity}.btn-arrow:focus i,.btn-arrow:hover i{opacity:1;right:-2rem}.theme--light.v-input input,.theme--light.v-input textarea,.theme--light.v-select .v-select__selection--comma{color:#8d97ad;font-size:16px}.app-header.v-sheet{background-color:transparent!important}.app-header.v-sheet,.app-header.v-sheet .v-toolbar__content{height:85px!important}.app-header .navbar-nav{align-items:center}.common-links{padding:0;margin:0}.common-links,.common-links li{list-style:none}.common-links li a{transition:.1s ease-in}.common-links li:hover a{padding-left:5px}.common-links.three-part li{width:33%;display:inline-block}@media(max-width:767px){.app-header .navigation{display:none}.app-header .navbar-nav{position:absolute;left:0;top:80px;width:100%;background-color:#607df9;flex-direction:column!important;box-shadow:0 15px 30px rgba(0,0,0,.12)}.app-header .navbar-nav .nav-item{text-align:center}.app-header .navbar-nav .nav-item .nav-link{line-height:55px!important}.common-links.three-part li{width:50%}.common-links.three-part li a{font-size:13px}.px-sm-0{padding-left:0;padding-right:0}.mob-imagesetter{background-size:unset;background-position:unset!important;margin-top:29px}.banner-title{margin-top:-30px}}@media(max-width:991px){.mob-header-fixed{position:fixed}}.theme--light.v-footer{background:#fff}.social-icons a{width:34px;height:34px;line-height:34px;text-align:center;display:inline-block;border-radius:100%;margin:0 5px;transition:.2s ease-in;color:#263238;background:#f4f8fa}.social-icons a:hover{transform:translate3d(0,-5px,0);background:#0164d3;color:#fff}.footer{padding:45px 0}.v-application .navbar-nav{display:flex;flex-direction:row;padding-left:0;margin-bottom:0;list-style:none}.v-application .navbar-nav .nav-item{transition:.2s ease-in;position:relative}.v-application .navbar-nav .nav-item .nav-link{text-decoration:none;line-height:75px;padding:15px;font-size:17px;color:#fff;font-family:"DM Sans",sans-serif;opacity:.5;font-size:16px}.v-application .navbar-nav .nav-item.active>.nav-link,.v-application .navbar-nav .nav-item:hover>.nav-link,.v-application .navbar-nav .nav-item>.nav-link.nuxt-link-exact-active{opacity:1}.app-header .v-toolbar__content{padding:0 16px}.v-application .link{text-decoration:none;color:#8d97ad}.v-application .link:hover{color:#316ce8}.mob-navigation{height:calc(100vh - 100px);overflow:auto}.v-application--is-ltr .v-list-group--no-action>.v-list-group__items>.v-list-item.mobile-nav-sub{padding-left:30px}.btn-download{margin:10px 0 10px 10px;background-color:#f4f8fa!important;border-color:#f4f8fa!important}.btn-download.v-btn--active:before{opacity:0}.v-card.card-hover{transition:.2s ease-in}.v-card.card-hover:hover{transform:scale(1.1)}.v-card.card-hover2{transition:all .2s cubic-bezier(.645,.045,.355,1)}.v-card.card-hover2:hover{transform:translateY(-5px);box-shadow:0 2px 30px rgba(0,0,0,.1)}.btn-hover{transition:all .2s cubic-bezier(.645,.045,.355,1)}.btn-hover:hover{transform:translateY(-2px);box-shadow:0 2px 30px rgba(0,0,0,.1)}.banner-title{font-size:42px;line-height:54px;margin:20px 0 15px}.banner-subtitle{font-size:21px}.banner-wrapper{background:#607df9;padding:20px 0;min-height:600px;display:flex;align-items:center}@media(max-width:767px){.banner-title{font-size:29px;line-height:40px}.banner-wrapper{padding:90px 0 20px}}@media(min-width:1200px){.banner-subtitle{margin-right:150px}}.banner1-component{padding:60px 0;background-color:#fdbfa8}.banner1-component .banner1-title{font-size:48px;line-height:50px;margin:20px 0 15px}@media(max-width:991px){.banner1-component .banner1-title{font-size:35px}}.banner2-component{padding:145px 0}.banner2-component .banner2-title{line-height:50px;font-size:36px;margin:20px 0 15px}@media(max-width:991px){.banner2-component{padding:45px 0}.banner2-component .banner2-title{font-size:32px}}.formbanner1-component{max-height:700px;background-color:#e9f3f8}.formbanner1-component .formbanner1-title{font-size:48px;line-height:1;letter-spacing:-1px;margin:20px 0 15px}.stylish-input-group{display:flex;align-items:center}.stylish-input-group .v-text-field__details{display:none}.stylish-input-group .v-input__slot{margin-bottom:0;border-radius:36px 0 0 36px!important;text-indent:35px;font-weight:300;text-overflow:ellipsis;min-height:72px;padding-left:32px!important}.stylish-input-group .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)>.v-input__control>.v-input__slot{box-shadow:-5px 0 30px 0 rgba(0,0,0,.05)}.stylish-input-group .v-btn{border-radius:0 36px 36px 0;height:72px!important;padding:0 30px!important}@media(max-width:991px){.formbanner1-component .formbanner1-title{font-size:39px;line-height:42px}}@media(max-width:767px){.stylish-input-group .v-input__slot{min-height:60px;padding-left:20px!important}.stylish-input-group .v-btn{height:60px!important}}.coming-wrapper{min-height:400px;overflow:auto;background-size:cover;background-position:top 20% center;display:flex;align-items:center}.coming-title{font-size:30px;margin:20px 0 15px}.ui-title{font-size:36px;margin:20px 0 15px}@media(max-width:767px){.ui-title{font-size:29px}}.btn-groups .v-btn{margin-right:5px;margin-bottom:5px}.navbar-light .navbar-nav .nav-item .nav-link{color:#8d97ad;opacity:1}.navbar-light .navbar-nav .nav-item .nav-link.nuxt-link-exact-active,.navbar-light .navbar-nav .nav-item:hover .nav-link{color:#316ce8}@media(max-width:767px){.header1 .navigation,.header2 .navigation{display:none}.header1 .navbar-nav,.header2 .navbar-nav{position:absolute;left:0;top:80px;width:100%;flex-direction:column}.header1 .navbar-nav .nav-item .nav-link,.header2 .navbar-nav .nav-item .nav-link{line-height:55px!important}.header1{z-index:9!important}.header1 .v-toolbar__content{z-index:1}.header1 .navbar-nav{background-color:#f4f8fa}.header2 .navbar-nav{background-color:#263238}}.feature1-component .icon-round{font-size:45px;width:80px;color:#607df9;line-height:80px;text-align:center;display:inline-block;margin:20px 0 30px;border-radius:100%}.linking i{margin-left:10px;transition:.2s ease-in;font-size:16px}.linking:hover i{margin-left:15px}.section-title{font-size:30px;margin:20px 0 15px;line-height:36px}@media(max-width:767px){.section-title{font-size:23px}}.feature2-action-btn{border-radius:0 .25rem .25rem 0;height:100%!important}@media(max-width:767px){.feature2-action-btn{border-radius:0 0 .25rem .25rem;height:50px!important}}.feature2-spacer{margin-top:60px!important}.feature3-component{position:relative}.feature3-card{position:absolute;top:17%;right:0}.feature3-card .feature3-title{font-size:24px;line-height:30px;margin:20px 0 15px}@media(min-width:768px)and (max-width:991px){.feature3-card{left:0;right:0;margin:0 auto;top:50%}}@media(max-width:767px){.feature3-card{position:relative}}.portfolio-card .portfolio-img{overflow:hidden;max-height:255px}.portfolio-card .portfolio-img img{transition:.1s ease-in;cursor:pointer}.portfolio-card .portfolio-img:hover img{transform:scale(1.1)}.pricing-card .price-text{font-size:48px;line-height:72px;color:#263238}.pricing-card sup{top:-20px;font-size:16px}.pricing-card .v-btn{border-radius:.25rem}.team-card .team-title{margin:30px 0 0}.team-card .team-subtitle{margin:0 0 20px;font-size:13px}.team-card .social-overlay{position:relative}.team-card .social-overlay .img-overlay{background:rgba(26,139,243,.87);display:none;position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem;border-radius:calc(.25rem - 1px)}.team-card .social-overlay .img-overlay ul{position:relative;top:50%;display:flex;justify-content:center;list-style:none;padding-left:0}.team-card .social-overlay .img-overlay ul li a{color:#fff;transition:.2s ease-in;padding:0 10px;display:block}.team-card .social-overlay .img-overlay ul li a:hover{transform:translate3d(0,-5px,0)}.team-card .social-overlay:hover .img-overlay{display:block}.testimonial-card .v-card__text{padding:40px 35px!important}.testimonial-card p{color:#263238;line-height:26px}.testimonial-card .testimonial-img{width:60px;height:60px}.blog-card{transition:.2s ease-in}.blog-card:hover{transform:translateY(-10px)}.blog-card .date-badge{padding:10px;display:inline-block;position:absolute;right:10px;top:10px;color:#fff;border-radius:8px;text-align:center}.blog-card .date-badge span{display:block;font-size:30px;line-height:30px}.blog-card .blog-title{color:#263238!important;line-height:22px}.blog-card .blog-title:hover{color:#607df9!important}.c2a1-spacer{padding:25px 0}.c2a-title{font-size:26px}.c2a2-title{margin:20px 0 15px;line-height:36px;font-size:30px}.contact-detail-card{padding:40px}.contact-detail-card .detail-title{line-height:36px;font-size:30px;margin-bottom:10px}.contact-title{margin:20px 0 15px;line-height:26px;font-size:21px}',""]),t.exports=o},272:function(t,e,n){t.exports=n.p+"img/soc-logo.d0082d5.png"},315:function(t,e,n){"use strict";n(216)},316:function(t,e,n){var o=n(26)(!1);o.push([t.i,".container{max-width:1170px}",""]),t.exports=o},72:function(t,e,n){"use strict";var o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(264),n(52)),l=n(89),d=n.n(l),c=n(324),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports;d()(component,{VApp:c.a})}},[[228,7,1,8]]]);