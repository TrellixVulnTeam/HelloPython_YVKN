(function(){var k=function(l){return String(l).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")};var b=function(m){if(m===null||m===undefined){return[]}if("[object Array]"==Object.prototype.toString.call(m)){return m}if(typeof m.length!=="number"||typeof m==="string"||"[object Function]"==Object.prototype.toString.call(m)){return[m]}if(m.item){var n=m.length,o=new Array(n);while(n--){o[n]=m[n]}return o}return[].slice.call(m)};var d=function(m,n){var l=m.length;while(l--){if(l in m&&m[l]===n){m.splice(l,1)}}return m};var a=(function(){var r=navigator;if(r.plugins&&r.mimeTypes.length){var m=r.plugins["Shockwave Flash"];if(m&&m.description){return m.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")+".0"}}else{if(window.ActiveXObject&&!window.opera){for(var o=12;o>=2;o--){try{var q=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+o);if(q){var l=q.GetVariable("$version");return l.replace(/WIN/g,"").replace(/,/g,".")}}catch(p){}}}}})();var f=function(t){t=t||{};var l={},o,m,p,v;for(o in t){l[o]=t[o]}t=l;t.width=1;t.height=1;t.allowScriptAccess="always";var r=t.vars,q=["classid","codebase","id","width","height"];t.classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000";t.codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0";t.movie=t.url||"";delete t.vars;delete t.url;if(typeof r=="string"){t.flashvars=r}else{var u=[];for(o in r){u.push(o+"="+encodeURIComponent(r[o]))}t.flashvars=u.join("&")}var s=["<object "];for(o=0,p=q.length;o<p;o++){v=q[o];s.push(" ",v,'="',k(t[v]),'"')}s.push(">");var n={movie:1,allowscriptaccess:1,flashvars:1};for(m in t){v=t[m];m=m.toLowerCase();if(n[m]&&(v||v===false||v===0)){s.push('<param name="'+m+'" value="'+k(v)+'" />')}}t.src=t.movie;t.name=t.id;delete t.id;delete t.movie;delete t.classid;delete t.codebase;t.type="application/x-shockwave-flash";t.pluginspage="http://www.macromedia.com/go/getflashplayer";s.push("<embed");for(m in t){v=t[m];if(v||v===false||v===0){s.push(" ",m,'="',k(v),'"')}}s.push("></embed></object>");return s.join("")};var i=function(n){var l=document[n],m;var o=/msie (\d+\.\d+)/i.test(navigator.userAgent)?(document.documentMode||+RegExp["\x241"]):undefined;return o==9?l&&l.length?(m=d(b(l),function(p){return p.tagName.toLowerCase()!="embed"})).length==1?m[0]:m:l:l||window[n]};var j=function(l,n){var m=new Date();m.setTime(m.getTime()+1000*60*60*24*365);document.cookie=l+"="+n+"; path=/; domain=."+location.hostname.split(".").slice(-2).join(".")+"; expires="+m.toGMTString()};var e=function(l){var m=new RegExp("(^| )"+l+"=([^;]*)(;|\x24)"),n=m.exec(document.cookie);if(n){return n[2]||null}return null};var g=function(){var q=false,p=[],o;if(document.addEventListener){o=function(){document.removeEventListener("DOMContentLoaded",o,false);n()}}else{if(document.attachEvent){o=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",o);n()}}}}function n(){if(!n.isReady){n.isReady=true;for(var s=0,r=p.length;s<r;s++){p[s]()}}}function m(){try{document.documentElement.doScroll("left")}catch(r){setTimeout(m,1);return}n()}function l(){if(q){return}q=true;if(document.readyState==="complete"){n.isReady=true}else{if(document.addEventListener){document.addEventListener("DOMContentLoaded",o,false);window.addEventListener("load",n,false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",o);window.attachEvent("onload",n);var r=false;try{r=window.frameElement==null}catch(s){}if(document.documentElement.doScroll&&r){m()}}}}}l();return function(r){n.isReady?r():p.push(r)}}();g.isReady=false;var c=function(){return(location.hostname.indexOf("sogou.com")!=-1)||(location.hostname.indexOf("sohu.com")!=-1)}();var h=function(){var m=false;var l;var x;var v;var y="_temp_fake_";var o="sogou_fid_temp_func_"+(+new Date());var s="sogou_fid_target";var p="FYID";var r;var q=function(A){if(window.sogou_fid_debug){var z=window.sogou_fid_log||(window.console&&console.log);z&&z(A)}};var t=function(G,B){var z=navigator.userAgent;var E,F;var C=[["se",/se 2.x/i,null,"\x241"],["ie",/msie (\d+\.\d+)/i,null,document.documentMode,"\x241"],["ff",/firefox\/(\d+\.\d+)/i,null,"\x241"],["ch",/chrome\/(\d+\.\d+)/i,null,"\x241"],["sf",/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i,/chrome/i,"\x241","\x242"],["op",/opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i,null,"\x246","\x242"]];for(var D=0,A=C.length;D<A;D++){var H=C[D];if(H[1].test(z)&&(!H[2]||!H[2].test(z))){E=H[0];F=(typeof H[3]=="string"?+RegExp[H[3]]:H[3])||(H[4]&&+RegExp[H[4]]);if(H[0]=="se"){F=document.attachEvent?0:1}break}}new Image().src="http://pb.sogou.com/pv.gif?uigs_productid=ufo&ufoid=wan&rdk="+(+new Date())+"&img=pv.gif&b="+E+"&v="+F+"&refer="+encodeURIComponent(document.referrer||"")+"&page="+encodeURIComponent(document.title||"")+"&pageUrl="+encodeURIComponent(location.href||"")+"&productid=wan&ptype=fid&pcode=fid_get&module="+G+"&tag="+(B||"")+"&yyid="+(e("YYID")||"")+"&suv="+(e("SUV")||"")+"&suid="+(e("SUID")||"")};if(!a){}function n(z){m=true;if(l){q("Has fid to set before flash load. Ready to set fid to "+l);u(l);v=l}else{v=decodeURIComponent(z);if(!v||v==="undefined"||v==y){q("Didn't get fid in flash.END");v=""}t("flash",v);if(v){q("Reset fid to make cookie available "+v);u(v)}else{q("Set fake fid to avoid bugs "+y);u(y,true)}}r&&q("Has getting method wait. Get callback execute by value "+v);r&&r(v);r=null;x.parentNode.removeChild(x);window[o]=null;delete window[o]}function u(A,z){if(!A){return}setTimeout(function(){try{var B=i(s);q("Set flash fid by "+A);B.setCookies(encodeURIComponent(A))}catch(C){}if(!z){q("Set cookie fid by "+A);j(p,encodeURIComponent(A))}(A==y)?(v=""):(v=A)},100)}function w(){q("Init Flash");x=document.createElement("div");window[o]=n;x.style.cssText="position:absolute;top:-1000px;left:-1000px;";var z=document.body;z.appendChild(x);x.innerHTML=f({id:s,url:"http://img.wan.sogou.com/cdn/ufo/fid/sogoufid_v3.swf",vars:"funcname="+o})}return{set:function(z){if(!c){return}if(!m){q("No flash inited. Create flash now.");l=z;g(w)}else{q("Flash inited. Set fid directly");u(z)}},get:function(z){if(!c){return}if(typeof v!="undefined"){q("Has fid locally.Directly returned by value "+v);z&&z(v)}else{if(e(p)){v=decodeURIComponent(e(p));q("Has fid in cookie.Directly returned by value "+v);z&&z(v);t("cookie",v)}else{if(!m){q("No fid in cookie and flash not inited. Waiting...");r=z;g(w)}}}}}}();if(window.sogou_fid_vars){h.set(window.sogou_fid_vars)}window.Sogou_FID=h})();