!function(t){var e=Array.prototype.slice,i=Array.prototype.splice,n={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:"",widthFromWrapper:!0,responsiveWidth:!1},r=t(window),o=t(document),s=[],a=r.height(),c=function(){for(var e=r.scrollTop(),i=o.height(),n=i-a,c=e>n?n-e:0,l=0;l<s.length;l++){var p=s[l],d=p.stickyWrapper.offset().top,u=d-p.topSpacing-c;if(p.stickyWrapper.css("height",p.stickyElement.outerHeight()),u>=e)null!==p.currentTop&&(p.stickyElement.css({width:"",position:"",top:""}),p.stickyElement.parent().removeClass(p.className),p.stickyElement.trigger("sticky-end",[p]),p.currentTop=null);else{var h=i-p.stickyElement.outerHeight()-p.topSpacing-p.bottomSpacing-e-c;if(0>h?h+=p.topSpacing:h=p.topSpacing,p.currentTop!=h){var m;p.getWidthFrom?m=t(p.getWidthFrom).width()||null:p.widthFromWrapper&&(m=p.stickyWrapper.width()),null==m&&(m=p.stickyElement.width()),p.stickyElement.css("width",m).css("position","fixed").css("top",h),p.stickyElement.parent().addClass(p.className),null===p.currentTop?p.stickyElement.trigger("sticky-start",[p]):p.stickyElement.trigger("sticky-update",[p]),p.currentTop===p.topSpacing&&p.currentTop>h||null===p.currentTop&&h<p.topSpacing?p.stickyElement.trigger("sticky-bottom-reached",[p]):null!==p.currentTop&&h===p.topSpacing&&p.currentTop<h&&p.stickyElement.trigger("sticky-bottom-unreached",[p]),p.currentTop=h}}}},l=function(){a=r.height();for(var e=0;e<s.length;e++){var i=s[e],n=null;i.getWidthFrom?i.responsiveWidth===!0&&(n=t(i.getWidthFrom).width()):i.widthFromWrapper&&(n=i.stickyWrapper.width()),null!=n&&i.stickyElement.css("width",n)}},p={init:function(e){var i=t.extend({},n,e);return this.each(function(){var e=t(this),r=e.attr("id"),o=e.outerHeight(),a=r?r+"-"+n.wrapperClassName:n.wrapperClassName,c=t("<div></div>").attr("id",a).addClass(i.wrapperClassName);e.wrapAll(c);var l=e.parent();i.center&&l.css({width:e.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"==e.css("float")&&e.css({"float":"none"}).parent().css({"float":"right"}),l.css("height",o),i.stickyElement=e,i.stickyWrapper=l,i.currentTop=null,s.push(i)})},update:c,unstick:function(e){return this.each(function(){for(var e=this,n=t(e),r=-1,o=s.length;o-->0;)s[o].stickyElement.get(0)===e&&(i.call(s,o,1),r=o);-1!=r&&(n.unwrap(),n.css({width:"",position:"",top:"","float":""}))})}};window.addEventListener?(window.addEventListener("scroll",c,!1),window.addEventListener("resize",l,!1)):window.attachEvent&&(window.attachEvent("onscroll",c),window.attachEvent("onresize",l)),t.fn.sticky=function(i){return p[i]?p[i].apply(this,e.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.sticky"):p.init.apply(this,arguments)},t.fn.unstick=function(i){return p[i]?p[i].apply(this,e.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.sticky"):p.unstick.apply(this,arguments)},t(function(){setTimeout(c,0)})}(jQuery),$(document).ready(function(){$(".animsition").animsition({inClass:"zoom-in",outClass:"fade-out",inDuration:600,outDuration:800,linkElement:".animsition-link",loading:!0,loadingParentElement:"body",loadingClass:"animsition-loading",overlay:!1,overlayClass:"animsition-overlay-slide",overlayParentElement:"body"})});