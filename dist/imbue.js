function POST(url,data,success){var params="string"==typeof data?data:Object.keys(data).map((function(k){return encodeURIComponent(k)+"="+encodeURIComponent(data[k])})).join("&"),xhr=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");return xhr.open("POST",url),xhr.onreadystatechange=function(){xhr.readyState>3&&200==xhr.status&&success(xhr.responseText)},xhr.setRequestHeader("X-Requested-With","XMLHttpRequest"),xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),xhr.send(params),xhr}function GET(url,success){var xhr=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");return xhr.open("GET",url),xhr.onreadystatechange=function(){xhr.readyState>3&&200==xhr.status&&success(xhr.responseText)},xhr.setRequestHeader("X-Requested-With","XMLHttpRequest"),xhr.send(),xhr}HTMLDocument.prototype.getElements=function(selector,context){return(context||document).querySelectorAll(selector)},HTMLDocument.prototype.getElement=function(selector,context){return(context||document).querySelector(selector)},HTMLDocument.prototype.whenReady=function(callback){"loading"!=document.readyState?callback():document.addEventListener?document.addEventListener("DOMContentLoaded",callback):document.attachEvent("onreadystatechange",(function(){"complete"==document.readyState&&callback()}))},HTMLElement.prototype.removeClass=function(className){this.classList.remove(className)},HTMLElement.prototype.addClass=function(className){this.classList.add(className)},HTMLElement.prototype.setClassList=function(classList){this.classList=classList},HTMLElement.prototype.toggleClass=function(className){this.classList.toggle(className)},HTMLElement.prototype.hasClass=function(className){return this.classList.contains(className)},HTMLElement.prototype.getStyles=function(){return this.classList.getAttribute("style")},HTMLElement.prototype.setStyles=function(styles){for(var prop in styles)this.style[prop]=styles[prop]},HTMLElement.prototype.removeStyle=function(style){this.style[style]=null},HTMLElement.prototype.removeStyles=function(styles){for(var i=0;i<styles.length;i++)this.style[styles[i]]=null},HTMLElement.prototype.removeAllStyles=function(){this.classList.setAttribute("style",null)},HTMLElement.prototype.getParent=function(){return this.parentNode},HTMLElement.prototype.getSiblings=function(){var el=this.parentNode.firstChild;do{isiblings.push(el)}while(el=el.nextSibling);return[]},HTMLElement.prototype.getChildren=function(){return this.childNodes},HTMLSelectElement.prototype.getSelectedNode=function(){return this.options[this.selectedIndex]},HTMLElement.prototype.getData=function(key){if(key)return this.getAttribute(`data-${key}`)},HTMLElement.prototype.removeData=function(key){key&&this.removeAttribute(`data-${key}`)},HTMLElement.prototype.setData=function(key,value){key&&this.setAttribute(`data-${key}`,value)},HTMLElement.prototype.hideElement=function(){this.style.display="none"},HTMLElement.prototype.showElement=function(){this.style.display=""},NodeList.prototype.setClass=function(classList){for(var i=0;i<this.length;i++)this[i].classList=classList},NodeList.prototype.removeClass=function(className){for(var i=0;i<this.length;i++)this[i].classList.remove(className)},NodeList.prototype.addClass=function(className){for(var i=0;i<this.length;i++)this[i].classList.add(className)},NodeList.prototype.toggleClass=function(className){for(var i=0;i<this.length;i++)this[i].classList.toggle(className)},NodeList.prototype.getStyles=function(){for(var styles=[],i=0;i<this.length;i++)styles.push(this[i].classList.getAttribute("style"));return styles},NodeList.prototype.setStyles=function(styles){for(var i=0;i<this.length;i++)for(prop in styles)this[i].style[prop]=styles[prop]},NodeList.prototype.removeAllStyles=function(){for(var i=0;i<this.length;i++)this[i].classList.setAttribute("style",null)},NodeList.prototype.removeStyles=function(){for(var i=0;i<this.length;i++)this[i].style[prop]=null},Array.prototype.distinct=function(){return Array.from(new Set(this))},Array.prototype.distinctBy=function(prop){return[...new Map(this.map(item=>[item[prop],item])).values()]};