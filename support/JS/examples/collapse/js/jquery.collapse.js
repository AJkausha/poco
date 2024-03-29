/*
 * Storage for jQuery Collapse
 * --
 * source: http://github.com/danielstocks/jQuery-Collapse/
 * site: http://webcloud.se/jQuery-Collapse
 *
 * @author Daniel Stocks (http://webcloud.se)
 * Copyright 2013, Daniel Stocks
 * Released under the MIT, BSD, and GPL Licenses.
 */
!function(t){function a(a){var i;try{i=window.localStorage||t.fn.collapse.cookieStorage}catch(r){i=!1}return i?new e(a,i):!1}function e(t,a){this.id=t,this.db=a,this.data=[]}var i="jQuery-Collapse";e.prototype={write:function(a,e){var r=this;r.data[a]=e?1:0,t.each(r.data,function(t){"undefined"==typeof r.data[t]&&(r.data[t]=0)});var n=this._getDataObject();n[this.id]=this.data,this.db.setItem(i,JSON.stringify(n))},read:function(){var t=this._getDataObject();return t[this.id]||[]},_getDataObject:function(){var t=this.db.getItem(i);return t?JSON.parse(t):{}}},jQueryCollapseStorage=a}(jQuery);



/*
 * Collapse plugin for jQuery
 * --
 * source: http://github.com/danielstocks/jQuery-Collapse/
 * site: http://webcloud.se/jQuery-Collapse
 *
 * @author Daniel Stocks (http://webcloud.se)
 * Copyright 2013, Daniel Stocks
 * Released under the MIT, BSD, and GPL Licenses.
 */
!function(e,t){function n(t,n){n=n||{};var i=this,o=n.query||"> :even";e.extend(i,{$el:t,options:n,sections:[],isAccordion:n.accordion||!1,db:n.persist?jQueryCollapseStorage(t.get(0).id):!1}),i.states=i.db?i.db.read():[],i.$el.find(o).each(function(){new jQueryCollapseSection(e(this),i)}),function(t){i.$el.on("click","[data-collapse-summary] "+(t.options.clickQuery||""),e.proxy(i.handleClick,t)),i.$el.bind("toggle close open",e.proxy(i.handleEvent,t))}(i)}function i(t,n){n.options.clickQuery||t.wrapInner('<a href="#"/>'),e.extend(this,{isOpen:!1,$summary:t.attr("data-collapse-summary",""),$details:t.next(),options:n.options,parent:n}),n.sections.push(this);var i=n.states[this._index()];0===i?this.close(!0):this.$summary.is(".open")||1===i?this.open(!0):this.close(!0)}n.prototype={handleClick:function(t,n){t.preventDefault(),n=n||"toggle";for(var i=this.sections,o=i.length;o--;)if(e.contains(i[o].$summary[0],t.target)){i[o][n]();break}},handleEvent:function(e){return e.target==this.$el.get(0)?this[e.type]():void this.handleClick(e,e.type)},open:function(e){this._change("open",e)},close:function(e){this._change("close",e)},toggle:function(e){this._change("toggle",e)},_change:function(t,n){return isFinite(n)?this.sections[n][t]():void e.each(this.sections,function(e,n){n[t]()})}},i.prototype={toggle:function(){this.isOpen?this.close():this.open()},close:function(e){this._changeState("close",e)},open:function(t){var n=this;n.options.accordion&&!t&&e.each(n.parent.sections,function(e,t){t.close()}),n._changeState("open",t)},_index:function(){return e.inArray(this,this.parent.sections)},_changeState:function(t,n){var i=this;i.isOpen="open"==t,e.isFunction(i.options[t])&&!n?i.options[t].apply(i.$details):i.$details[i.isOpen?"show":"hide"](),i.$summary.toggleClass("open","close"!==t),i.$details.attr("aria-hidden","close"===t),i.$summary.attr("aria-expanded","open"===t),i.$summary.trigger("open"===t?"opened":"closed",i),i.parent.db&&i.parent.db.write(i._index(),i.isOpen)}},e.fn.extend({collapse:function(t,i){var o=i?e("body").find("[data-collapse]"):e(this);return o.each(function(){var o=i?{}:t,s=e(this).attr("data-collapse")||"";e.each(s.split(" "),function(e,t){t&&(o[t]=!0)}),new n(e(this),o)})}}),t.jQueryCollapse=n,t.jQueryCollapseSection=i,e(function(){e.fn.collapse(!1,!0)})}(window.jQuery,window);