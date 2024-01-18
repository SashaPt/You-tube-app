"use strict";(self.webpackChunkYouTube_app=self.webpackChunkYouTube_app||[]).push([[750],{750:(F,d,s)=>{s.r(d),s.d(d,{YoutubeModule:()=>D});var c=s(6814),a=s(95),p=s(9310),t=s(6689),g=s(9862),C=s(7398),x=s(4664);let h=(()=>{class n{constructor(e){this.http=e}searchItems(e,i=8){const o=(new g.LE).set("type","video").set("part","snippet").set("maxResults",i).set("q",e);return this.http.get("BASE_URL/search?",{params:o}).pipe((0,C.U)(r=>r.items.map(I=>I.id.videoId).join(",")),(0,x.w)(r=>this.getItem(r)))}getItem(e){const i=(new g.LE).set("id",e).set("part","snippet,statistics");return this.http.get("BASE_URL/videos?",{params:i})}static#t=this.\u0275fac=function(i){return new(i||n)(t.LFG(g.eN))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var m=s(2490);let _=(()=>{class n{constructor(e){this.el=e}calcDiff(e){return Math.floor(((new Date).getTime()-e.getTime())/1e3/60/60/24)}set appSetColor(e){const i=this.calcDiff(e);this.el.nativeElement.style.backgroundColor=i<7?"#2f80ed":i>=7&&i<31?"#27ae60":i>=31&&i<182?"#f2c94c":"#eb5757"}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(t.SBq))};static#e=this.\u0275dir=t.lG2({type:n,selectors:[["","appSetColor",""]],inputs:{appSetColor:"appSetColor"}})}return n})();function b(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"div",1)(1,"app-button",2),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.location.back())}),t._UZ(2,"img",3),t.qZA(),t.TgZ(3,"div",4)(4,"div",5),t._UZ(5,"img",6),t.qZA(),t.TgZ(6,"div",7)(7,"div",8)(8,"h1",9),t._uU(9),t.qZA(),t.TgZ(10,"p",10),t._uU(11),t.ALo(12,"date"),t.qZA()(),t.TgZ(13,"div",11)(14,"p",12),t._uU(15,"Description:"),t.qZA(),t.TgZ(16,"p",13),t._uU(17),t.qZA()(),t.TgZ(18,"div",14)(19,"div",15),t._UZ(20,"img",16),t.TgZ(21,"span",17),t._uU(22),t.qZA()(),t.TgZ(23,"div",15),t._UZ(24,"img",18),t.TgZ(25,"span",17),t._uU(26),t.qZA()(),t.TgZ(27,"div",15),t._UZ(28,"img",19),t.TgZ(29,"span",17),t._uU(30),t.qZA()(),t.TgZ(31,"div",15),t._UZ(32,"img",20),t.TgZ(33,"span",17),t._uU(34),t.qZA()()(),t._UZ(35,"div",21),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("type","button")("disabled",!1)("appSetColor",e.date),t.xp6(4),t.Q6J("src",e.item.snippet.thumbnails.high.url,t.LSH),t.xp6(4),t.Oqu(e.item.snippet.title),t.xp6(2),t.hij(" ",t.xi3(12,12,e.item.snippet.publishedAt,"fullDate")," "),t.xp6(6),t.hij(" ",e.item.snippet.description," "),t.xp6(5),t.Oqu(e.item.statistics.viewCount),t.xp6(4),t.Oqu(e.item.statistics.likeCount),t.xp6(4),t.Oqu(e.item.statistics.dislikeCount),t.xp6(4),t.Oqu(e.item.statistics.commentCount),t.xp6(1),t.Q6J("appSetColor",e.date)}}let y=(()=>{class n{constructor(e,i,o){this.youtubeService=e,this.route=i,this.loc=o}ngOnInit(){this.location=this.loc;const e=this.route.snapshot.params.id;e&&this.youtubeService.getItem(e).subscribe(i=>this.item=i.items[0]),this.date=new Date(this.item?.snippet.publishedAt)}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(h),t.Y36(p.gz),t.Y36(c.Ye))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-card"]],decls:1,vars:1,consts:[["class","card_container",4,"ngIf"],[1,"card_container"],[3,"type","disabled","appSetColor","click"],["src","assets/img/back.png","alt","arrow back"],[1,"card_content"],[1,"card_video"],["alt","thumbnails",3,"src"],[1,"card_details"],[1,"card_top"],[1,"card_title"],[1,"card_date"],[1,"card_description"],[1,"card_description_subtitle"],[1,"card_description_text"],[1,"card_statistics"],[1,"card_info"],["src","assets/img/viewed.svg","alt","viewed",1,"icon"],[1,"count"],["src","assets/img/liked.svg","alt","liked",1,"icon"],["src","assets/img/dislike.svg","alt","disliked",1,"icon"],["src","assets/img/commented.svg","alt","commented",1,"icon"],[1,"card_bottom",3,"appSetColor"]],template:function(i,o){1&i&&t.YNc(0,b,36,15,"div",0),2&i&&t.Q6J("ngIf",o.item)},dependencies:[c.O5,m.r,_,c.uU],styles:[".card_container[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:center;margin:44px auto 0}.card_container[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:4px 0 0 4px}.card_container[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:13px;height:auto}.card_container[_ngcontent-%COMP%]   .card_content[_ngcontent-%COMP%]{display:flex;align-items:stretch}.card_container[_ngcontent-%COMP%]   .card_video[_ngcontent-%COMP%]{width:729px;min-height:461px;border-radius:0 0 0 5px;box-shadow:5px 10px 20px #33333340}.card_container[_ngcontent-%COMP%]   .card_details[_ngcontent-%COMP%]{width:436px;padding:35px 36px 29px 34px;border-radius:0 5px 5px 0;background:#e5e5e5;box-shadow:5px 5px 20px #33333340;display:flex;flex-direction:column;position:relative;overflow:hidden}.card_container[_ngcontent-%COMP%]   .card_top[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;width:100%;gap:15px}.card_container[_ngcontent-%COMP%]   .card_title[_ngcontent-%COMP%]{color:#000;font-family:Roboto;font-size:24px;font-style:normal;font-weight:700;line-height:normal}.card_container[_ngcontent-%COMP%]   .card_date[_ngcontent-%COMP%]{color:#828282;text-align:right;font-family:Roboto;font-size:10px;font-style:normal;font-weight:400;line-height:normal;margin-top:13px;flex-shrink:0}.card_container[_ngcontent-%COMP%]   .card_description[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;width:100%;margin-top:30px;height:100%;flex-shrink:1}.card_container[_ngcontent-%COMP%]   .card_description_subtitle[_ngcontent-%COMP%]{color:#000;font-family:Roboto;font-size:14px;font-style:normal;font-weight:400;line-height:normal}.card_container[_ngcontent-%COMP%]   .card_description_text[_ngcontent-%COMP%]{color:#828282;font-family:Roboto;font-size:12px;font-style:normal;font-weight:400;line-height:normal}.card_container[_ngcontent-%COMP%]   .card_statistics[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:17px}.card_container[_ngcontent-%COMP%]   .card_info[_ngcontent-%COMP%]{display:flex;gap:3px;align-items:center;margin-top:25px}.card_container[_ngcontent-%COMP%]   .card_info[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:13px;width:auto}.card_container[_ngcontent-%COMP%]   .card_info[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]{color:#000;font-family:Roboto;font-size:10px;font-style:normal;font-weight:400;line-height:normal}.card_container[_ngcontent-%COMP%]   .card_bottom[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;width:100%;height:5px}.card_container[_ngcontent-%COMP%]   .card_indicator[_ngcontent-%COMP%]{width:100%;height:100%;background-color:#00f}"]})}return n})();var u=s(9915),v=s(9597);const O=function(n){return["/youtube",n]};let M=(()=>{class n{ngOnInit(){this.date=new Date(this.item.snippet.publishedAt)}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-search-item"]],inputs:{item:"item"},decls:26,vars:12,consts:[[1,"search_item"],[1,"search_item_img"],["alt","thumbnails",3,"src"],[1,"search_item_statistics"],[1,"search_item_info"],["src","assets/img/viewed.svg","alt","viewed",1,"icon"],[1,"count"],["src","assets/img/liked.svg","alt","liked",1,"icon"],["src","assets/img/dislike.svg","alt","disliked",1,"icon"],["src","assets/img/commented.svg","alt","commented",1,"icon"],[1,"search_item_title"],[3,"type","disabled","routerLink"],[1,"search_item_bottom",3,"appSetColor"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3)(4,"div",4),t._UZ(5,"img",5),t.TgZ(6,"span",6),t._uU(7),t.qZA()(),t.TgZ(8,"div",4),t._UZ(9,"img",7),t.TgZ(10,"span",6),t._uU(11),t.qZA()(),t.TgZ(12,"div",4),t._UZ(13,"img",8),t.TgZ(14,"span",6),t._uU(15),t.qZA()(),t.TgZ(16,"div",4),t._UZ(17,"img",9),t.TgZ(18,"span",6),t._uU(19),t.qZA()()(),t.TgZ(20,"p",10),t._uU(21),t.qZA(),t.TgZ(22,"app-button",11)(23,"span"),t._uU(24,"more..."),t.qZA()(),t._UZ(25,"div",12),t.qZA()),2&i&&(t.xp6(2),t.Q6J("src",o.item.snippet.thumbnails.high.url,t.LSH),t.xp6(5),t.Oqu(o.item.statistics.viewCount),t.xp6(4),t.Oqu(o.item.statistics.likeCount),t.xp6(4),t.Oqu(o.item.statistics.dislikeCount),t.xp6(4),t.Oqu(o.item.statistics.commentCount),t.xp6(2),t.Oqu(o.item.snippet.title),t.xp6(1),t.Q6J("type","button")("disabled",!1)("routerLink",t.VKq(10,O,o.item.id)),t.xp6(3),t.Q6J("appSetColor",o.date))},dependencies:[p.rH,m.r,_],styles:[".search_item[_ngcontent-%COMP%]{border-radius:5px;background:#e5e5e5;box-shadow:2px 2px 4px #00000040;padding:20px 20px 0;height:100%;overflow:hidden;position:relative}.search_item[_ngcontent-%COMP%]   .search_item_img[_ngcontent-%COMP%]{height:123px}.search_item[_ngcontent-%COMP%]   .search_item_statistics[_ngcontent-%COMP%]{margin-top:21px;display:flex;justify-content:center;gap:17px}.search_item[_ngcontent-%COMP%]   .search_item_info[_ngcontent-%COMP%]{display:flex;align-items:center;gap:3px}.search_item[_ngcontent-%COMP%]   .search_item_info[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:13px;width:auto}.search_item[_ngcontent-%COMP%]   .search_item_info[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]{color:#000;font-family:Roboto;font-size:10px;font-style:normal;font-weight:400;line-height:normal}.search_item[_ngcontent-%COMP%]   .search_item_title[_ngcontent-%COMP%]{margin-top:21px;color:#4f4f4f;text-align:center;font-family:Roboto;font-size:20px;font-style:normal;font-weight:700;line-height:23px;height:46px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;display:-moz-box;-ms-line-clamp:2;-webkit-line-clamp:2;line-clamp:2;word-wrap:nowrap;-webkit-box-orient:vertical;box-orient:vertical}.search_item[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]{width:120px;height:32px;display:block;margin:59px auto 15px;border-radius:5px}.search_item[_ngcontent-%COMP%]   .search_item_bottom[_ngcontent-%COMP%]{width:100%;height:5px;position:absolute;left:0;bottom:0}.search_item[_ngcontent-%COMP%]   .search_item_indicator[_ngcontent-%COMP%]{width:100%;height:100%}.search_item[_ngcontent-%COMP%]   .search_item_indicator.oldest[_ngcontent-%COMP%]{background:#eb5757}.search_item[_ngcontent-%COMP%]   .search_item_indicator.older[_ngcontent-%COMP%]{background:#f2c94c}.search_item[_ngcontent-%COMP%]   .search_item_indicator.newer[_ngcontent-%COMP%]{background:#27ae60}.search_item[_ngcontent-%COMP%]   .search_item_indicator.newest[_ngcontent-%COMP%]{background:#2f80ed}"]})}return n})(),P=(()=>{class n{constructor(e){this.settingsService=e,this.filterString=this.settingsService.filterString}onClickSortByDate(){this.settingsService.toggleSortByDate()}onClickSortByView(){this.settingsService.toggleSortByView()}onClickFilter(){this.settingsService.filterByString(this.filterString)}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(u.g))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-sorting"]],decls:15,vars:1,consts:[[1,"sorting_block"],[1,"sorting_container"],[1,"sorting_name"],[1,"sorting_items"],[1,"sorting_item"],[3,"click"],["type","text","id","sorting_input",3,"ngModel","ngModelChange"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"p",2),t._uU(3,"Sorting by:"),t.qZA(),t.TgZ(4,"div",3)(5,"p",4)(6,"button",5),t.NdJ("click",function(){return o.onClickSortByDate()}),t._uU(7,"date"),t.qZA()(),t.TgZ(8,"p",4)(9,"button",5),t.NdJ("click",function(){return o.onClickSortByView()}),t._uU(10,"count of views"),t.qZA()(),t.TgZ(11,"p",4)(12,"button",5),t.NdJ("click",function(){return o.onClickFilter()}),t._uU(13,"by word or sentance"),t.qZA(),t.TgZ(14,"input",6),t.NdJ("ngModelChange",function(f){return o.filterString=f}),t.qZA()()()()()),2&i&&(t.xp6(14),t.Q6J("ngModel",o.filterString))},dependencies:[a.Fj,a.JJ,a.On],styles:[".sorting_block[_ngcontent-%COMP%]{width:100%;height:50px;background:#e5e5e5}.sorting_block[_ngcontent-%COMP%]   .sorting_container[_ngcontent-%COMP%]{width:100%;height:100%;max-width:1128px;margin:0 auto;padding-left:276px;display:flex;align-items:center;gap:11px}.sorting_block[_ngcontent-%COMP%]   .sorting_name[_ngcontent-%COMP%]{color:#929292;font-family:Roboto;font-size:12px;font-style:normal;font-weight:400;line-height:normal}.sorting_block[_ngcontent-%COMP%]   .sorting_items[_ngcontent-%COMP%]{display:flex;align-items:center;gap:21px}.sorting_block[_ngcontent-%COMP%]   .sorting_item[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center}.sorting_block[_ngcontent-%COMP%]   .sorting_item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#2f80ed;font-family:Roboto;font-size:12px;font-style:normal;font-weight:400;line-height:normal;cursor:pointer;text-decoration-line:underline}.sorting_block[_ngcontent-%COMP%]   #sorting_input[_ngcontent-%COMP%]{width:149px;height:13px;background:#fff;color:#4f4f4f;padding:0 3px;font-family:Roboto;font-size:12px;font-style:normal;font-weight:400;line-height:normal}.sorting_block[_ngcontent-%COMP%]   #sorting_input[_ngcontent-%COMP%]::placeholder{color:#929292}"]})}return n})(),S=(()=>{class n{transform(e,i){return i?.trim()?e.sort((o,r)=>"asc"===i?parseInt(o.statistics?.viewCount,10)-parseInt(r.statistics?.viewCount,10):"desc"===i?parseInt(r.statistics?.viewCount,10)-parseInt(o.statistics?.viewCount,10):0):e}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275pipe=t.Yjl({name:"sortBy",type:n,pure:!0})}return n})(),w=(()=>{class n{transform(e,i){return i?.trim()?e.sort((o,r)=>"asc"===i?new Date(o.snippet.publishedAt).getTime()-new Date(r.snippet.publishedAt).getTime():"desc"===i?new Date(r.snippet.publishedAt).getTime()-new Date(o.snippet.publishedAt).getTime():0):e}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275pipe=t.Yjl({name:"orderBy",type:n,pure:!0})}return n})(),Z=(()=>{class n{transform(e,i){return i?.trim()?e.filter(o=>o.snippet.title.toLowerCase().includes(i.toLowerCase())):e}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275pipe=t.Yjl({name:"filter",type:n,pure:!0})}return n})();function k(n,l){1&n&&t._UZ(0,"app-sorting")}function T(n,l){1&n&&t._UZ(0,"app-search-item",4),2&n&&t.Q6J("item",l.$implicit)}function A(n,l){if(1&n&&(t.TgZ(0,"div",2),t.YNc(1,T,1,1,"app-search-item",3),t.ALo(2,"sortBy"),t.ALo(3,"orderBy"),t.ALo(4,"filter"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.xi3(3,4,t.xi3(4,7,e.results,e.filterString),e.sortByDate),e.sortByView))}}let U=(()=>{class n{constructor(e,i,o){this.youtubeService=e,this.settingsService=i,this.searchService=o,this.results=[],this.searchValue=this.searchService.searchValue,this.openSorting=this.settingsService.getSettings(),this.sortByDate=this.settingsService.getSortByDate(),this.sortByView=this.settingsService.getSortByView(),this.filterString=this.settingsService.getFilterString()}ngOnInit(){this.searchValue&&this.youtubeService.searchItems(this.searchService.searchValue).subscribe(e=>{this.results=e.items}),this.searchSubscription=this.searchService.onSubscribe().subscribe(()=>{this.youtubeService.searchItems(this.searchService.searchValue).subscribe(e=>{this.results=e.items})})}ngOnDestroy(){this.searchSubscription?.unsubscribe()}ngDoCheck(){this.openSorting=this.settingsService.getSettings(),this.sortByDate=this.settingsService.getSortByDate(),this.sortByView=this.settingsService.getSortByView(),this.filterString=this.settingsService.getFilterString()}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(h),t.Y36(u.g),t.Y36(v.o))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-search-results"]],decls:2,vars:2,consts:[[4,"ngIf"],["class","search_results",4,"ngIf"],[1,"search_results"],[3,"item",4,"ngFor","ngForOf"],[3,"item"]],template:function(i,o){1&i&&(t.YNc(0,k,1,0,"app-sorting",0),t.YNc(1,A,5,10,"div",1)),2&i&&(t.Q6J("ngIf",o.openSorting&&o.results),t.xp6(1),t.Q6J("ngIf",o.results))},dependencies:[c.sg,c.O5,M,P,S,w,Z],styles:[".search_results[_ngcontent-%COMP%]{width:1200px;padding:31px 28px 29px 31px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);column-gap:28px;row-gap:29px}"]})}return n})();var B=s(6208);const q=[{path:"",component:U},{path:":id",component:y}];let D=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[c.ez,a.u5,p.Bz.forChild(q),B.m,p.Bz]})}return n})()}}]);