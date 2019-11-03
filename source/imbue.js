// Begin HTMLDocument Functions
HTMLDocument.prototype.getElements = function(selector, context) {
  return (context || document).querySelectorAll(selector);
};

HTMLDocument.prototype.getElement = function(selector, context) {
  return (context || document).querySelector(selector);
};

HTMLDocument.prototype.whenReady = function(callback) {
  // in case the document is already rendered
  if (document.readyState != "loading") callback();
  // modern browsers
  else if (document.addEventListener)
    document.addEventListener("DOMContentLoaded", callback);
  // IE <= 8
  else
    document.attachEvent("onreadystatechange", function() {
      if (document.readyState == "complete") callback();
    });
};
// End HTMLDocument Functions

// End HTMLElement Functions

HTMLElement.prototype.onClick = function(callback) {
  if (this._onClickFunction)
    this.removeEventListener("click", this._onClickFunction);
  this.prototype._onClickFunction = callback;
  this.addEventListener("click", callback);
};

HTMLElement.prototype.onHover = function(callback) {
  if (this._onHoverFunction)
    this.removeEventListener("mouseover", this._onClickFunction);
  this.prototype._onHoverFunction = callback;
  this.addEventListener("mouseover", callback);
};

HTMLElement.prototype.onEvent = function(event, callback) {
  if (this[`_${event}`])
    this.removeEventListener(event, this[`_${event}`]);
  this.prototype[`_${event}`] = callback;
  this.addEventListener(event, callback);
};

HTMLElement.prototype.whenVisible = function(callback) {
  var element = this;
  if (window.IntersectionObserver) {
    var observer = new IntersectionObserver(
      function(entries) {
        if (entries[0].intersectionRatio) {
          callback();
        }
      },
      {
        root: document.body
      }
    );
    observer.observe(element);
  }
};

HTMLElement.prototype.whenHidden = function(callback) {
  var element = this;
  if (window.IntersectionObserver) {
    var observer = new IntersectionObserver(
      function(entries) {
        if (!entries[0].intersectionRatio) {
          callback();
        }
      },
      {
        root: document.body
      }
    );
    observer.observe(element);
  }
};

HTMLElement.prototype.removeClass = function(className) {
  this.classList.remove(className);
};

HTMLElement.prototype.addClass = function(className) {
  this.classList.add(className);
};

HTMLElement.prototype.setClassList = function(classList) {
  this.classList = classList;
};

HTMLElement.prototype.toggleClass = function(className) {
  this.classList.toggle(className);
};

HTMLElement.prototype.hasClass = function(className) {
  return this.classList.contains(className);
};

HTMLElement.prototype.getStyles = function() {
  return this.classList.getAttribute("style");
};

HTMLElement.prototype.setStyles = function(styles) {
  for (var prop in styles) {
    this.style[prop] = styles[prop];
  }
};

HTMLElement.prototype.removeStyle = function(style) {
  this.style[style] = null;
};

HTMLElement.prototype.removeStyles = function(styles) {
  for (var i = 0; i < styles.length; i++) {
    this.style[styles[i]] = null;
  }
};

HTMLElement.prototype.removeAllStyles = function() {
  this.classList.setAttribute("style", null);
};

HTMLElement.prototype.getParent = function() {
  return this.parentNode;
};

HTMLElement.prototype.getSiblings = function() {
  var siblings = [];
  var el = this.parentNode.firstChild;
  do {
    isiblings.push(el);
  } while ((el = el.nextSibling));
  return siblings;
};

HTMLElement.prototype.getChildren = function() {
  return this.childNodes;
};

HTMLSelectElement.prototype.getSelectedNode = function() {
  return this.options[this.selectedIndex];
};

HTMLElement.prototype.getData = function(key) {
  if (!key) return undefined;
  return this.getAttribute(`data-${key}`);
};

HTMLElement.prototype.removeData = function(key) {
  if (!key) return undefined;
  this.removeAttribute(`data-${key}`);
};

HTMLElement.prototype.setData = function(key, value) {
  if (!key) return undefined;
  this.setAttribute(`data-${key}`, value);
};

HTMLElement.prototype.hideElement = function() {
  this.style.display = "none";
};

HTMLElement.prototype.showElement = function() {
  this.style.display = "";
};

HTMLElement.prototype.getWidth = function() {
  return parseFloat(getComputedStyle(this, null).width.replace("px", ""));
};

// End HTMLElement Functions

// Begin NodeList Functions

NodeList.prototype.setClasses = function(classList) {
  for (var i = 0; i < this.length; i++) {
    this[i].classList = classList;
  }
};

NodeList.prototype.removeClasses = function(className) {
  for (var i = 0; i < this.length; i++) {
    this[i].classList.remove(className);
  }
};

NodeList.prototype.addClasses = function(className) {
  for (var i = 0; i < this.length; i++) {
    this[i].classList.add(className);
  }
};

NodeList.prototype.toggleClasses = function(className) {
  for (var i = 0; i < this.length; i++) {
    this[i].classList.toggle(className);
  }
};

NodeList.prototype.getStyles = function() {
  var styles = [];
  for (var i = 0; i < this.length; i++) {
    styles.push(this[i].getAttribute("style"));
  }
  return styles;
};

NodeList.prototype.setStyles = function(styles) {
  for (var i = 0; i < this.length; i++) {
    for (prop in styles) {
      this[i].style[prop] = styles[prop];
    }
  }
};

NodeList.prototype.removeAllStyles = function() {
  for (var i = 0; i < this.length; i++) {
    this[i].setAttribute("style", null);
  }
};

NodeList.prototype.removeAllClasses = function() {
  for (var i = 0; i < this.length; i++) {
    this[i].classList = null;
  }
};

NodeList.prototype.removeStyles = function(style) {
  for (var i = 0; i < this.length; i++) {
    this[i].style[style] = null;
  }
};

// End NodeList Functions

//Begin Array Functions

Array.prototype.distinct = function() {
  return Array.from(new Set(this));
};

Array.prototype.distinctBy = function(prop) {
  return [...new Map(this.map(item => [item[prop], item])).values()];
};
//End Array Functions

// Begin AJAX Functions
function JSON_GET(url, success, error) {
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      // Success!
      var data = JSON.parse(this.response);
      success(data);
    } else {
      error(thiis.response);
    }
  };
  request.onerror = error;
  request.send();
}

/* 
options: 
{
  type,
  url, 
  success,
  error,
  contentType,
  dataType,
  data
}
 */
function AJAX(options) {
  var _defaultOptions = {
    type: "GET",
    url: null,
    success: null,
    error: null,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    data: null
  };
  // Set default values if left unset (JSON mostly)
  for (var key in Object.keys(options)) {
    if (options[key]) continue;
    options[key] = _defaultOptions[key];
  }
  var request = new XMLHttpRequest();
  request.open(options.type, options.url, true);
  request.setRequestHeader("Content-Type", options.contentType);
  request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      success(this.response);
    } else {
      error(this.response);
    }
  };
  request.onerror = error();
  request.send(options.data);
}
// End AJAX Functions
