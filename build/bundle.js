(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@bhmb/bot')) :
  typeof define === 'function' && define.amd ? define(['@bhmb/bot'], factory) :
  (global = global || self, factory(global['@bhmb/bot']));
}(this, function (bot) { 'use strict';

  var css = "@charset \"UTF-8\";\r\n#quests {\r\n  display: flex;\r\n}\r\n#quests .left, #quests .right {\r\n  padding: 5px;\r\n  width: 40%;\r\n  height: calc(100vh - 62px);\r\n  overflow: auto;\r\n}\r\n#quests .left {\r\n  width: 40%;\r\n}\r\n#quests .left .button {\r\n  width: 100%;\r\n}\r\n#quests .right {\r\n  width: 60%;\r\n}\r\n\r\n.quest-list, .quest-item {\r\n  list-style: none;\r\n}\r\n\r\n.quest-list {\r\n  padding: 0;\r\n}\r\n\r\n.quest-list:empty {\r\n  background: #c4c4ff;\r\n  padding: 0.4em;\r\n}\r\n\r\n.quest-item {\r\n  margin: 0 0 5px 5px;\r\n}\r\n.quest-item.selected > .quest-text {\r\n  font-weight: bold;\r\n}\r\n.quest-item.selected > .quest-text::before {\r\n  content: \"▶\t \";\r\n}\r\n\r\n.quest-text {\r\n  display: inline-block;\r\n  padding: 0.2em;\r\n  user-select: none;\r\n}\r\n\r\n.quest-item {\r\n  border-left: 2px solid #0000c4;\r\n}\r\n.quest-item .quest-item {\r\n  border-color: #c40000;\r\n}\r\n.quest-item .quest-item .quest-item {\r\n  border-color: #0000c4;\r\n}\r\n.quest-item .quest-item .quest-item .quest-item {\r\n  border-color: #c40000;\r\n}\r\n.quest-item .quest-item .quest-item .quest-item .quest-item {\r\n  border-color: #0000c4;\r\n}\r\n.quest-item .quest-item .quest-item .quest-item .quest-item .quest-item {\r\n  border-color: #c40000;\r\n}\r\n.quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item {\r\n  border-color: #0000c4;\r\n}\r\n.quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item {\r\n  border-color: #c40000;\r\n}\r\n.quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item {\r\n  border-color: #0000c4;\r\n}\r\n.quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item {\r\n  border-color: #c40000;\r\n}\r\n.quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item {\r\n  border-color: #0000c4;\r\n}\r\n.quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item {\r\n  border-color: #c40000;\r\n}\r\n.quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item {\r\n  border-color: #0000c4;\r\n}\r\n.quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item {\r\n  border-color: #c40000;\r\n}\r\n.quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item {\r\n  border-color: #0000c4;\r\n}\r\n.quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item {\r\n  border-color: #c40000;\r\n}\r\n.quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item {\r\n  border-color: #0000c4;\r\n}\r\n.quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item {\r\n  border-color: #c40000;\r\n}\r\n.quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item {\r\n  border-color: #0000c4;\r\n}\r\n.quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item {\r\n  border-color: #c40000;\r\n}\r\n.quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item {\r\n  border-color: #0000c4;\r\n}\r\n.quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item {\r\n  border-color: #c40000;\r\n}\r\n.quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item {\r\n  border-color: #0000c4;\r\n}\r\n.quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item {\r\n  border-color: #c40000;\r\n}\r\n.quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item {\r\n  border-color: #0000c4;\r\n}\r\n.quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item {\r\n  border-color: #c40000;\r\n}\r\n.quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item {\r\n  border-color: #0000c4;\r\n}\r\n.quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item {\r\n  border-color: #c40000;\r\n}\r\n.quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item {\r\n  border-color: #0000c4;\r\n}\r\n.quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item {\r\n  border-color: #c40000;\r\n}\r\n.quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item .quest-item {\r\n  border-color: #0000c4;\r\n}\r\n\r\n#quests_levels .is-add-button {\r\n  position: fixed;\r\n  left: 1em;\r\n  z-index: 10;\r\n}\r\n#quests_levels .drag::after {\r\n  content: \" ≡\";\r\n}\r\n";

  var html = "<div id=\"quests\">\r\n  <div class=\"left\">\r\n    <button class=\"button is-small is-primary\">New Quest</button>\r\n\r\n    <ol class=\"quest-list\"></ol>\r\n  </div>\r\n\r\n  <div class=\"right\">\r\n    <div class=\"field\">\r\n      <label class=\"label\">Name</label>\r\n      <div class=\"control\">\r\n        <input class=\"input\" data-for=\"name\">\r\n      </div>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label class=\"label\">Description</label>\r\n      <div class=\"control\">\r\n        <textarea class=\"textarea\" data-for=\"description\"></textarea>\r\n      </div>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label class=\"label\">XP</label>\r\n      <div class=\"control\">\r\n        <input class=\"input\" type=\"number\" min=\"0\" data-for=\"xp\">\r\n      </div>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label class=\"label\">Completion code</label>\r\n      <div class=\"control\">\r\n        <input class=\"input\" data-for=\"code\">\r\n      </div>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label class=\"label\">Completion message</label>\r\n      <div class=\"control\">\r\n        <textarea class=\"textarea\" data-for=\"complete\"></textarea>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"field\">\r\n      <div class=\"control\">\r\n        <button class=\"button is-danger\">Delete</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var atoa = function atoa (a, n) { return Array.prototype.slice.call(a, n); };

  var si = typeof setImmediate === 'function', tick;
  if (si) {
    tick = function (fn) { setImmediate(fn); };
  } else if (typeof process !== 'undefined' && process.nextTick) {
    tick = process.nextTick;
  } else {
    tick = function (fn) { setTimeout(fn, 0); };
  }

  var ticky = tick;

  var debounce = function debounce (fn, args, ctx) {
    if (!fn) { return; }
    ticky(function run () {
      fn.apply(ctx || null, args || []);
    });
  };

  var emitter = function emitter (thing, options) {
    var opts = options || {};
    var evt = {};
    if (thing === undefined) { thing = {}; }
    thing.on = function (type, fn) {
      if (!evt[type]) {
        evt[type] = [fn];
      } else {
        evt[type].push(fn);
      }
      return thing;
    };
    thing.once = function (type, fn) {
      fn._once = true; // thing.off(fn) still works!
      thing.on(type, fn);
      return thing;
    };
    thing.off = function (type, fn) {
      var c = arguments.length;
      if (c === 1) {
        delete evt[type];
      } else if (c === 0) {
        evt = {};
      } else {
        var et = evt[type];
        if (!et) { return thing; }
        et.splice(et.indexOf(fn), 1);
      }
      return thing;
    };
    thing.emit = function () {
      var args = atoa(arguments);
      return thing.emitterSnapshot(args.shift()).apply(this, args);
    };
    thing.emitterSnapshot = function (type) {
      var et = (evt[type] || []).slice(0);
      return function () {
        var args = atoa(arguments);
        var ctx = this || thing;
        if (type === 'error' && opts.throws !== false && !et.length) { throw args.length === 1 ? args[0] : args; }
        et.forEach(function emitter (listen) {
          if (opts.async) { debounce(listen, args, ctx); } else { listen.apply(ctx, args); }
          if (listen._once) { thing.off(type, listen); }
        });
        return thing;
      };
    };
    return thing;
  };

  var NativeCustomEvent = commonjsGlobal.CustomEvent;

  function useNative () {
    try {
      var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
      return  'cat' === p.type && 'bar' === p.detail.foo;
    } catch (e) {
    }
    return false;
  }

  /**
   * Cross-browser `CustomEvent` constructor.
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
   *
   * @public
   */

  var C__Users_Gerrit_Documents_GitHub_BHMBQuests_node_modules_customEvent = useNative() ? NativeCustomEvent :

  // IE >= 9
  'function' === typeof document.createEvent ? function CustomEvent (type, params) {
    var e = document.createEvent('CustomEvent');
    if (params) {
      e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
    } else {
      e.initCustomEvent(type, false, false, void 0);
    }
    return e;
  } :

  // IE <= 8
  function CustomEvent (type, params) {
    var e = document.createEventObject();
    e.type = type;
    if (params) {
      e.bubbles = Boolean(params.bubbles);
      e.cancelable = Boolean(params.cancelable);
      e.detail = params.detail;
    } else {
      e.bubbles = false;
      e.cancelable = false;
      e.detail = void 0;
    }
    return e;
  };

  var eventmap = [];
  var eventname = '';
  var ron = /^on/;

  for (eventname in commonjsGlobal) {
    if (ron.test(eventname)) {
      eventmap.push(eventname.slice(2));
    }
  }

  var eventmap_1 = eventmap;

  var doc = commonjsGlobal.document;
  var addEvent = addEventEasy;
  var removeEvent = removeEventEasy;
  var hardCache = [];

  if (!commonjsGlobal.addEventListener) {
    addEvent = addEventHard;
    removeEvent = removeEventHard;
  }

  var crossvent = {
    add: addEvent,
    remove: removeEvent,
    fabricate: fabricateEvent
  };

  function addEventEasy (el, type, fn, capturing) {
    return el.addEventListener(type, fn, capturing);
  }

  function addEventHard (el, type, fn) {
    return el.attachEvent('on' + type, wrap(el, type, fn));
  }

  function removeEventEasy (el, type, fn, capturing) {
    return el.removeEventListener(type, fn, capturing);
  }

  function removeEventHard (el, type, fn) {
    var listener = unwrap(el, type, fn);
    if (listener) {
      return el.detachEvent('on' + type, listener);
    }
  }

  function fabricateEvent (el, type, model) {
    var e = eventmap_1.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
    if (el.dispatchEvent) {
      el.dispatchEvent(e);
    } else {
      el.fireEvent('on' + type, e);
    }
    function makeClassicEvent () {
      var e;
      if (doc.createEvent) {
        e = doc.createEvent('Event');
        e.initEvent(type, true, true);
      } else if (doc.createEventObject) {
        e = doc.createEventObject();
      }
      return e;
    }
    function makeCustomEvent () {
      return new C__Users_Gerrit_Documents_GitHub_BHMBQuests_node_modules_customEvent(type, { detail: model });
    }
  }

  function wrapperFactory (el, type, fn) {
    return function wrapper (originalEvent) {
      var e = originalEvent || commonjsGlobal.event;
      e.target = e.target || e.srcElement;
      e.preventDefault = e.preventDefault || function preventDefault () { e.returnValue = false; };
      e.stopPropagation = e.stopPropagation || function stopPropagation () { e.cancelBubble = true; };
      e.which = e.which || e.keyCode;
      fn.call(el, e);
    };
  }

  function wrap (el, type, fn) {
    var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
    hardCache.push({
      wrapper: wrapper,
      element: el,
      type: type,
      fn: fn
    });
    return wrapper;
  }

  function unwrap (el, type, fn) {
    var i = find(el, type, fn);
    if (i) {
      var wrapper = hardCache[i].wrapper;
      hardCache.splice(i, 1); // free up a tad of memory
      return wrapper;
    }
  }

  function find (el, type, fn) {
    var i, item;
    for (i = 0; i < hardCache.length; i++) {
      item = hardCache[i];
      if (item.element === el && item.type === type && item.fn === fn) {
        return i;
      }
    }
  }

  var cache = {};
  var start = '(?:^|\\s)';
  var end = '(?:\\s|$)';

  function lookupClass (className) {
    var cached = cache[className];
    if (cached) {
      cached.lastIndex = 0;
    } else {
      cache[className] = cached = new RegExp(start + className + end, 'g');
    }
    return cached;
  }

  function addClass (el, className) {
    var current = el.className;
    if (!current.length) {
      el.className = className;
    } else if (!lookupClass(className).test(current)) {
      el.className += ' ' + className;
    }
  }

  function rmClass (el, className) {
    el.className = el.className.replace(lookupClass(className), ' ').trim();
  }

  var classes = {
    add: addClass,
    rm: rmClass
  };

  var doc$1 = document;
  var documentElement = doc$1.documentElement;

  function dragula (initialContainers, options) {
    var len = arguments.length;
    if (len === 1 && Array.isArray(initialContainers) === false) {
      options = initialContainers;
      initialContainers = [];
    }
    var _mirror; // mirror image
    var _source; // source container
    var _item; // item being dragged
    var _offsetX; // reference x
    var _offsetY; // reference y
    var _moveX; // reference move x
    var _moveY; // reference move y
    var _initialSibling; // reference sibling when grabbed
    var _currentSibling; // reference sibling now
    var _copy; // item used for copying
    var _renderTimer; // timer for setTimeout renderMirrorImage
    var _lastDropTarget = null; // last container item was over
    var _grabbed; // holds mousedown context until first mousemove

    var o = options || {};
    if (o.moves === void 0) { o.moves = always; }
    if (o.accepts === void 0) { o.accepts = always; }
    if (o.invalid === void 0) { o.invalid = invalidTarget; }
    if (o.containers === void 0) { o.containers = initialContainers || []; }
    if (o.isContainer === void 0) { o.isContainer = never; }
    if (o.copy === void 0) { o.copy = false; }
    if (o.copySortSource === void 0) { o.copySortSource = false; }
    if (o.revertOnSpill === void 0) { o.revertOnSpill = false; }
    if (o.removeOnSpill === void 0) { o.removeOnSpill = false; }
    if (o.direction === void 0) { o.direction = 'vertical'; }
    if (o.ignoreInputTextSelection === void 0) { o.ignoreInputTextSelection = true; }
    if (o.mirrorContainer === void 0) { o.mirrorContainer = doc$1.body; }

    var drake = emitter({
      containers: o.containers,
      start: manualStart,
      end: end,
      cancel: cancel,
      remove: remove,
      destroy: destroy,
      canMove: canMove,
      dragging: false
    });

    if (o.removeOnSpill === true) {
      drake.on('over', spillOver).on('out', spillOut);
    }

    events();

    return drake;

    function isContainer (el) {
      return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
    }

    function events (remove) {
      var op = remove ? 'remove' : 'add';
      touchy(documentElement, op, 'mousedown', grab);
      touchy(documentElement, op, 'mouseup', release);
    }

    function eventualMovements (remove) {
      var op = remove ? 'remove' : 'add';
      touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
    }

    function movements (remove) {
      var op = remove ? 'remove' : 'add';
      crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8
      crossvent[op](documentElement, 'click', preventGrabbed);
    }

    function destroy () {
      events(true);
      release({});
    }

    function preventGrabbed (e) {
      if (_grabbed) {
        e.preventDefault();
      }
    }

    function grab (e) {
      _moveX = e.clientX;
      _moveY = e.clientY;

      var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;
      if (ignore) {
        return; // we only care about honest-to-god left clicks and touch events
      }
      var item = e.target;
      var context = canStart(item);
      if (!context) {
        return;
      }
      _grabbed = context;
      eventualMovements();
      if (e.type === 'mousedown') {
        if (isInput(item)) { // see also: https://github.com/bevacqua/dragula/issues/208
          item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
        } else {
          e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
        }
      }
    }

    function startBecauseMouseMoved (e) {
      if (!_grabbed) {
        return;
      }
      if (whichMouseButton(e) === 0) {
        release({});
        return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
      }
      // truthy check fixes #239, equality fixes #207
      if (e.clientX !== void 0 && e.clientX === _moveX && e.clientY !== void 0 && e.clientY === _moveY) {
        return;
      }
      if (o.ignoreInputTextSelection) {
        var clientX = getCoord('clientX', e);
        var clientY = getCoord('clientY', e);
        var elementBehindCursor = doc$1.elementFromPoint(clientX, clientY);
        if (isInput(elementBehindCursor)) {
          return;
        }
      }

      var grabbed = _grabbed; // call to end() unsets _grabbed
      eventualMovements(true);
      movements();
      end();
      start(grabbed);

      var offset = getOffset(_item);
      _offsetX = getCoord('pageX', e) - offset.left;
      _offsetY = getCoord('pageY', e) - offset.top;

      classes.add(_copy || _item, 'gu-transit');
      renderMirrorImage();
      drag(e);
    }

    function canStart (item) {
      if (drake.dragging && _mirror) {
        return;
      }
      if (isContainer(item)) {
        return; // don't drag container itself
      }
      var handle = item;
      while (getParent(item) && isContainer(getParent(item)) === false) {
        if (o.invalid(item, handle)) {
          return;
        }
        item = getParent(item); // drag target should be a top element
        if (!item) {
          return;
        }
      }
      var source = getParent(item);
      if (!source) {
        return;
      }
      if (o.invalid(item, handle)) {
        return;
      }

      var movable = o.moves(item, source, handle, nextEl(item));
      if (!movable) {
        return;
      }

      return {
        item: item,
        source: source
      };
    }

    function canMove (item) {
      return !!canStart(item);
    }

    function manualStart (item) {
      var context = canStart(item);
      if (context) {
        start(context);
      }
    }

    function start (context) {
      if (isCopy(context.item, context.source)) {
        _copy = context.item.cloneNode(true);
        drake.emit('cloned', _copy, context.item, 'copy');
      }

      _source = context.source;
      _item = context.item;
      _initialSibling = _currentSibling = nextEl(context.item);

      drake.dragging = true;
      drake.emit('drag', _item, _source);
    }

    function invalidTarget () {
      return false;
    }

    function end () {
      if (!drake.dragging) {
        return;
      }
      var item = _copy || _item;
      drop(item, getParent(item));
    }

    function ungrab () {
      _grabbed = false;
      eventualMovements(true);
      movements(true);
    }

    function release (e) {
      ungrab();

      if (!drake.dragging) {
        return;
      }
      var item = _copy || _item;
      var clientX = getCoord('clientX', e);
      var clientY = getCoord('clientY', e);
      var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
      var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
      if (dropTarget && ((_copy && o.copySortSource) || (!_copy || dropTarget !== _source))) {
        drop(item, dropTarget);
      } else if (o.removeOnSpill) {
        remove();
      } else {
        cancel();
      }
    }

    function drop (item, target) {
      var parent = getParent(item);
      if (_copy && o.copySortSource && target === _source) {
        parent.removeChild(_item);
      }
      if (isInitialPlacement(target)) {
        drake.emit('cancel', item, _source, _source);
      } else {
        drake.emit('drop', item, target, _source, _currentSibling);
      }
      cleanup();
    }

    function remove () {
      if (!drake.dragging) {
        return;
      }
      var item = _copy || _item;
      var parent = getParent(item);
      if (parent) {
        parent.removeChild(item);
      }
      drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
      cleanup();
    }

    function cancel (revert) {
      if (!drake.dragging) {
        return;
      }
      var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
      var item = _copy || _item;
      var parent = getParent(item);
      var initial = isInitialPlacement(parent);
      if (initial === false && reverts) {
        if (_copy) {
          if (parent) {
            parent.removeChild(_copy);
          }
        } else {
          _source.insertBefore(item, _initialSibling);
        }
      }
      if (initial || reverts) {
        drake.emit('cancel', item, _source, _source);
      } else {
        drake.emit('drop', item, parent, _source, _currentSibling);
      }
      cleanup();
    }

    function cleanup () {
      var item = _copy || _item;
      ungrab();
      removeMirrorImage();
      if (item) {
        classes.rm(item, 'gu-transit');
      }
      if (_renderTimer) {
        clearTimeout(_renderTimer);
      }
      drake.dragging = false;
      if (_lastDropTarget) {
        drake.emit('out', item, _lastDropTarget, _source);
      }
      drake.emit('dragend', item);
      _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
    }

    function isInitialPlacement (target, s) {
      var sibling;
      if (s !== void 0) {
        sibling = s;
      } else if (_mirror) {
        sibling = _currentSibling;
      } else {
        sibling = nextEl(_copy || _item);
      }
      return target === _source && sibling === _initialSibling;
    }

    function findDropTarget (elementBehindCursor, clientX, clientY) {
      var target = elementBehindCursor;
      while (target && !accepted()) {
        target = getParent(target);
      }
      return target;

      function accepted () {
        var droppable = isContainer(target);
        if (droppable === false) {
          return false;
        }

        var immediate = getImmediateChild(target, elementBehindCursor);
        var reference = getReference(target, immediate, clientX, clientY);
        var initial = isInitialPlacement(target, reference);
        if (initial) {
          return true; // should always be able to drop it right back where it was
        }
        return o.accepts(_item, target, _source, reference);
      }
    }

    function drag (e) {
      if (!_mirror) {
        return;
      }
      e.preventDefault();

      var clientX = getCoord('clientX', e);
      var clientY = getCoord('clientY', e);
      var x = clientX - _offsetX;
      var y = clientY - _offsetY;

      _mirror.style.left = x + 'px';
      _mirror.style.top = y + 'px';

      var item = _copy || _item;
      var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
      var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
      var changed = dropTarget !== null && dropTarget !== _lastDropTarget;
      if (changed || dropTarget === null) {
        out();
        _lastDropTarget = dropTarget;
        over();
      }
      var parent = getParent(item);
      if (dropTarget === _source && _copy && !o.copySortSource) {
        if (parent) {
          parent.removeChild(item);
        }
        return;
      }
      var reference;
      var immediate = getImmediateChild(dropTarget, elementBehindCursor);
      if (immediate !== null) {
        reference = getReference(dropTarget, immediate, clientX, clientY);
      } else if (o.revertOnSpill === true && !_copy) {
        reference = _initialSibling;
        dropTarget = _source;
      } else {
        if (_copy && parent) {
          parent.removeChild(item);
        }
        return;
      }
      if (
        (reference === null && changed) ||
        reference !== item &&
        reference !== nextEl(item)
      ) {
        _currentSibling = reference;
        dropTarget.insertBefore(item, reference);
        drake.emit('shadow', item, dropTarget, _source);
      }
      function moved (type) { drake.emit(type, item, _lastDropTarget, _source); }
      function over () { if (changed) { moved('over'); } }
      function out () { if (_lastDropTarget) { moved('out'); } }
    }

    function spillOver (el) {
      classes.rm(el, 'gu-hide');
    }

    function spillOut (el) {
      if (drake.dragging) { classes.add(el, 'gu-hide'); }
    }

    function renderMirrorImage () {
      if (_mirror) {
        return;
      }
      var rect = _item.getBoundingClientRect();
      _mirror = _item.cloneNode(true);
      _mirror.style.width = getRectWidth(rect) + 'px';
      _mirror.style.height = getRectHeight(rect) + 'px';
      classes.rm(_mirror, 'gu-transit');
      classes.add(_mirror, 'gu-mirror');
      o.mirrorContainer.appendChild(_mirror);
      touchy(documentElement, 'add', 'mousemove', drag);
      classes.add(o.mirrorContainer, 'gu-unselectable');
      drake.emit('cloned', _mirror, _item, 'mirror');
    }

    function removeMirrorImage () {
      if (_mirror) {
        classes.rm(o.mirrorContainer, 'gu-unselectable');
        touchy(documentElement, 'remove', 'mousemove', drag);
        getParent(_mirror).removeChild(_mirror);
        _mirror = null;
      }
    }

    function getImmediateChild (dropTarget, target) {
      var immediate = target;
      while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
        immediate = getParent(immediate);
      }
      if (immediate === documentElement) {
        return null;
      }
      return immediate;
    }

    function getReference (dropTarget, target, x, y) {
      var horizontal = o.direction === 'horizontal';
      var reference = target !== dropTarget ? inside() : outside();
      return reference;

      function outside () { // slower, but able to figure out any position
        var len = dropTarget.children.length;
        var i;
        var el;
        var rect;
        for (i = 0; i < len; i++) {
          el = dropTarget.children[i];
          rect = el.getBoundingClientRect();
          if (horizontal && (rect.left + rect.width / 2) > x) { return el; }
          if (!horizontal && (rect.top + rect.height / 2) > y) { return el; }
        }
        return null;
      }

      function inside () { // faster, but only available if dropped inside a child element
        var rect = target.getBoundingClientRect();
        if (horizontal) {
          return resolve(x > rect.left + getRectWidth(rect) / 2);
        }
        return resolve(y > rect.top + getRectHeight(rect) / 2);
      }

      function resolve (after) {
        return after ? nextEl(target) : target;
      }
    }

    function isCopy (item, container) {
      return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
    }
  }

  function touchy (el, op, type, fn) {
    var touch = {
      mouseup: 'touchend',
      mousedown: 'touchstart',
      mousemove: 'touchmove'
    };
    var pointers = {
      mouseup: 'pointerup',
      mousedown: 'pointerdown',
      mousemove: 'pointermove'
    };
    var microsoft = {
      mouseup: 'MSPointerUp',
      mousedown: 'MSPointerDown',
      mousemove: 'MSPointerMove'
    };
    if (commonjsGlobal.navigator.pointerEnabled) {
      crossvent[op](el, pointers[type], fn);
    } else if (commonjsGlobal.navigator.msPointerEnabled) {
      crossvent[op](el, microsoft[type], fn);
    } else {
      crossvent[op](el, touch[type], fn);
      crossvent[op](el, type, fn);
    }
  }

  function whichMouseButton (e) {
    if (e.touches !== void 0) { return e.touches.length; }
    if (e.which !== void 0 && e.which !== 0) { return e.which; } // see https://github.com/bevacqua/dragula/issues/261
    if (e.buttons !== void 0) { return e.buttons; }
    var button = e.button;
    if (button !== void 0) { // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
      return button & 1 ? 1 : button & 2 ? 3 : (button & 4 ? 2 : 0);
    }
  }

  function getOffset (el) {
    var rect = el.getBoundingClientRect();
    return {
      left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
      top: rect.top + getScroll('scrollTop', 'pageYOffset')
    };
  }

  function getScroll (scrollProp, offsetProp) {
    if (typeof commonjsGlobal[offsetProp] !== 'undefined') {
      return commonjsGlobal[offsetProp];
    }
    if (documentElement.clientHeight) {
      return documentElement[scrollProp];
    }
    return doc$1.body[scrollProp];
  }

  function getElementBehindPoint (point, x, y) {
    var p = point || {};
    var state = p.className;
    var el;
    p.className += ' gu-hide';
    el = doc$1.elementFromPoint(x, y);
    p.className = state;
    return el;
  }

  function never () { return false; }
  function always () { return true; }
  function getRectWidth (rect) { return rect.width || (rect.right - rect.left); }
  function getRectHeight (rect) { return rect.height || (rect.bottom - rect.top); }
  function getParent (el) { return el.parentNode === doc$1 ? null : el.parentNode; }
  function isInput (el) { return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el); }
  function isEditable (el) {
    if (!el) { return false; } // no parents were editable
    if (el.contentEditable === 'false') { return false; } // stop the lookup
    if (el.contentEditable === 'true') { return true; } // found a contentEditable element in the chain
    return isEditable(getParent(el)); // contentEditable is set to 'inherit'
  }

  function nextEl (el) {
    return el.nextElementSibling || manually();
    function manually () {
      var sibling = el;
      do {
        sibling = sibling.nextSibling;
      } while (sibling && sibling.nodeType !== 1);
      return sibling;
    }
  }

  function getEventHost (e) {
    // on touchend event, we have to use `e.changedTouches`
    // see http://stackoverflow.com/questions/7192563/touchend-event-properties
    // see https://github.com/bevacqua/dragula/issues/34
    if (e.targetTouches && e.targetTouches.length) {
      return e.targetTouches[0];
    }
    if (e.changedTouches && e.changedTouches.length) {
      return e.changedTouches[0];
    }
    return e;
  }

  function getCoord (coord, e) {
    var host = getEventHost(e);
    var missMap = {
      pageX: 'clientX', // IE8
      pageY: 'clientY' // IE8
    };
    if (coord in missMap && !(coord in host) && missMap[coord] in host) {
      coord = missMap[coord];
    }
    return host[coord];
  }

  var dragula_1 = dragula;

  const defaultQuests = [];
  const defaultQuestOrder = defaultQuests.map(q => ({ id: q.id, children: [] }));
  function createEl(parent, name, ...classes) {
      const el = document.createElement(name);
      el.classList.add(...classes);
      return parent.appendChild(el);
  }
  function getDescendentIds(quest) {
      return quest.children.reduce(function getIds(carry, child) {
          return carry.concat([child.id], child.children.reduce(getIds, []));
      }, []);
  }
  function getQuests(ex) {
      return ex.storage.get('quests', defaultQuests);
  }
  function getList(ex) {
      return ex.storage.get('order', defaultQuestOrder);
  }
  class QuestsTab {
      constructor(ex, ui, container) {
          this.selectedIdPath = [];
          this.getQuests = () => getQuests(this.ex);
          this.setQuests = (quests) => this.ex.storage.set('quests', quests);
          this.getList = () => getList(this.ex);
          this.setList = (list) => this.ex.storage.set('order', list);
          this.getNewId = () => {
              const id = this.ex.storage.get('quest_id', 1);
              this.ex.storage.set('quest_id', id + 1);
              return id + 1;
          };
          this.getQuestById = (id) => this.getQuests().find(q => q.id === id);
          this.deleteActiveQuest = () => {
              if (this.selectedIdPath.length) {
                  const list = this.getList();
                  let delList = list;
                  const path = [...this.selectedIdPath];
                  while (path.length > 1) {
                      delList = delList.find(q => q.id === path[0]).children;
                      path.shift();
                  }
                  const index = delList.findIndex(q => q.id === path[0]);
                  const deleteIds = [path[0], ...getDescendentIds(delList[index])];
                  this.ex.storage.set('quests', this.getQuests().filter(q => !deleteIds.includes(q.id)));
                  delList.splice(index, 1);
                  this.ex.storage.set('order', list);
                  this.rebuildList();
                  this.selectionChanged();
              }
          };
          this.ex = ex;
          this.ui = ui;
          this.container = container;
          container.innerHTML = html;
          this.rebuildList();
          this.container.addEventListener('input', () => {
              this.save();
          });
          this.container.querySelector('.right .button').addEventListener('click', () => {
              if (!this.selectedIdPath.length) {
                  return; // Nothing to delete.
              }
              this.ui.alert('Really delete this quest?<br>If you delete this quest, all child quests will also be deleted.', ['Delete', 'Cancel'], choice => {
                  if (choice === 'Delete') {
                      this.deleteActiveQuest();
                  }
              });
          });
          this.container.querySelector('.left .button').addEventListener('click', () => {
              const id = this.getNewId();
              const code = Math.random().toString(16).slice(2, 8);
              this.setList(this.getList().concat([{ id, children: [] }]));
              this.setQuests(this.getQuests().concat([{ id, name: 'Quest', description: '', code, xp: 1, completeMessage: '' }]));
              this.rebuildList();
          });
      }
      rebuildList() {
          const quests = this.getQuests();
          const list = this.getList();
          const root = this.container.querySelector('ol');
          if (this.drake)
              this.drake.destroy();
          root.innerHTML = '';
          const addHtml = (container, root) => {
              for (const item of root) {
                  const el = createEl(container, 'li', 'quest-item');
                  if (item.id === this.selectedIdPath[this.selectedIdPath.length - 1]) {
                      el.classList.add('selected');
                  }
                  el.dataset.id = item.id.toString();
                  const textEl = createEl(el, 'span', 'quest-text');
                  textEl.textContent = quests.find(q => q.id === item.id).name;
                  const ol = createEl(el, 'ol', 'quest-list');
                  addHtml(ol, item.children);
              }
          };
          addHtml(root, list);
          this.drake = dragula_1([root, ...root.querySelectorAll('.quest-list')], { revertOnSpill: true });
          this.drake.on('drop', () => this.saveOrder());
          root.addEventListener('click', event => {
              let target = event.target;
              while (!target.classList.contains('quest-item') && target !== root) {
                  target = target.parentElement;
              }
              if (target.classList.contains('quest-item')) {
                  root.querySelectorAll('.quest-item.selected').forEach(el => el.classList.remove('selected'));
                  target.classList.add('selected');
                  const path = [];
                  while (target !== root) {
                      if (target.classList.contains('quest-item')) {
                          path.unshift(+target.dataset.id);
                      }
                      target = target.parentElement;
                  }
                  this.selectedIdPath = path;
                  this.selectionChanged();
              }
          });
      }
      selectionChanged() {
          const getInput = (s) => this.container.querySelector(s);
          const quest = this.getQuestById(this.selectedIdPath[this.selectedIdPath.length - 1]);
          getInput('[data-for=name]').value = quest ? quest.name : '';
          getInput('[data-for=description]').value = quest ? quest.description : '';
          getInput('[data-for=code]').value = quest ? quest.code : '';
          getInput('[data-for=xp]').value = quest ? quest.xp.toString() : '';
          getInput('[data-for=complete]').value = quest ? quest.completeMessage : '';
      }
      save() {
          const getValue = (sel) => this.container.querySelector(sel).value;
          const index = this.getQuests().findIndex(q => q.id === this.selectedIdPath[this.selectedIdPath.length - 1]);
          if (index !== -1) {
              const quests = this.getQuests();
              const quest = quests[index];
              const name = getValue('[data-for=name]');
              quest.code = getValue('[data-for=code]');
              quest.description = getValue('[data-for=description]');
              quest.xp = +getValue('[data-for=xp]');
              quest.completeMessage = getValue('[data-for=complete]');
              if (name !== quest.name) {
                  quest.name = name;
                  this.ex.storage.set('quests', quests);
                  this.rebuildList();
              }
              else {
                  this.ex.storage.set('quests', quests);
              }
          }
      }
      saveOrder() {
          function buildOrder(root, order) {
              order.push(...Array.from(root.children).map(child => {
                  const item = { id: +child.dataset.id, children: [] };
                  buildOrder(child.querySelector('ol'), item.children);
                  return item;
              }));
              return order;
          }
          const order = buildOrder(this.container.querySelector('ol'), []);
          this.ex.storage.set('order', order);
      }
  }

  var html$1 = "<div id=\"quests_info\" class=\"container\">\r\n  <h3 class=\"title\">Quests</h3>\r\n  <p>Use quests to reward players for completing tasks on your server automatically.</p>\r\n\r\n  <article class=\"message is-warning\">\r\n    <div class=\"message-header\">\r\n      <p>Setup notes</p>\r\n    </div>\r\n    <div class=\"message-body\">\r\n      <ul>\r\n        <li>You can change quest codes without letting users complete the quest again.</li>\r\n        <li>If you re-order quests, users that have already completed a quest that they now cannot access will still have completed the quest.</li>\r\n        <li>You can technically have multiple quests with the same completion code, but this will be confusing to both you and your users and is not recommended.</li>\r\n      </ul>\r\n    </div>\r\n  </article>\r\n\r\n  <h3 class=\"title\">Levels</h3>\r\n  <p>When users gain enough XP to get a level, the level up message will be sent. If you change how much XP users need to achieve a level, players levels will change to reflect the new requirement. Each level's XP field is how much XP is required to level up from the previous level.</p>\r\n\r\n  <h3 class=\"title\">Commands</h3>\r\n\r\n  <ul>\r\n    <li>/QUESTS - List up to 5 incomplete quests</li>\r\n    <li>/QUEST &lt;title&gt; - Get details about a quest. If no title is provided, this will act like /QUESTS</li>\r\n    <li>/CODE &lt;code&gt; - Claim XP for completing a quest</li>\r\n    <li>/LEVEL - Check your current level</li>\r\n    <li>/LEVELTOP - List the top 10 players with the most XP</li>\r\n    <li>/XP &lt;name&gt; &lt;amount&gt; (Quest Master only) - Add or remove XP from a player</li>\r\n    <li>/LEVEL &lt;name&gt; (Quest Master only) - Check the current level of a player</li>\r\n  </ul>\r\n</div>\r\n";

  class InfoTab {
      constructor(container) {
          container.innerHTML = html$1;
      }
  }

  var html$2 = "<div class=\"container\">\r\n  <h3 class=\"title\">User Management</h3>\r\n  <p>Use this tab to set up players as Quest Masters and quickly look at individual players.</p>\r\n  <br>\r\n  <div class=\"field has-addons\">\r\n    <div class=\"control\">\r\n      <input class=\"input\" placeholder=\"Filter\">\r\n    </div>\r\n    <div class=\"control\">\r\n      <a class=\"button is-primary\">Refresh List</a>\r\n    </div>\r\n  </div>\r\n  <ol></ol>\r\n</div>\r\n";

  const USERS_SAVE_KEY = 'users';
  const INVALID_NAME = 'QUESTS_INVALID_NAME';
  const INVALID_USER = { xp: -Infinity, completed: [], questmaster: false };
  const getUsers = (ex) => {
      const users = ex.storage.get(USERS_SAVE_KEY, {});
      users[INVALID_NAME] = INVALID_USER; // Don't do this in the default as JSON.parse doesn't handle -Infinity
      return users;
  };
  const setUsers = (ex, users) => {
      users[INVALID_NAME] = Object.assign({}, INVALID_USER, { completed: [] });
      ex.storage.set(USERS_SAVE_KEY, users);
  };
  const getUser = (ex, name) => getUsers(ex)[name] || getUser(ex, INVALID_NAME);
  class UsersTab {
      constructor(container, ex) {
          this.container = container;
          this.ex = ex;
          container.innerHTML = html$2;
          this.resultsEl = container.querySelector('ol');
          const input = container.querySelector('input');
          input.addEventListener('input', () => this.filter(input.value));
          container.querySelector('.button').addEventListener('click', () => {
              this.rebuildList();
              this.filter(input.value);
          });
          this.rebuildList();
          container.addEventListener('change', event => {
              const target = event.target;
              if (target.type === 'checkbox') {
                  const name = target.parentElement.parentElement.querySelector('span').textContent;
                  const users = getUsers(this.ex);
                  users[name].questmaster = target.checked;
                  setUsers(this.ex, users);
              }
          });
      }
      filter(search) {
          search = search.toLocaleUpperCase();
          this.resultsEl.querySelectorAll('li').forEach(el => {
              const name = el.querySelector('span').textContent;
              el.style.display = name.includes(search) ? '' : 'none';
          });
      }
      rebuildList() {
          this.resultsEl.innerHTML = '';
          const users = getUsers(this.ex);
          Object.keys(users)
              .filter(name => name !== INVALID_NAME)
              .sort((a, b) => users[b].xp - users[a].xp)
              .forEach(name => {
              const li = this.resultsEl.appendChild(document.createElement('li'));
              const span = li.appendChild(document.createElement('span'));
              span.textContent = name;
              li.appendChild(document.createTextNode(` (xp: ${users[name].xp})`));
              const label = li.appendChild(document.createElement('label'));
              label.appendChild(document.createTextNode(' Quest Master: '));
              const checkbox = label.appendChild(document.createElement('input'));
              checkbox.type = 'checkbox';
              checkbox.checked = users[name].questmaster;
          });
      }
  }

  var html$3 = "<div class=\"container\">\r\n  <h3 class=\"title\">Log</h3>\r\n  <p>Use this tab to audit XP gains to catch cheaters.</p>\r\n  <br>\r\n  <div class=\"field has-addons\">\r\n    <div class=\"control\">\r\n      <input class=\"input\" placeholder=\"Filter by name\">\r\n    </div>\r\n    <div class=\"control\">\r\n      <a class=\"button is-primary\">Refresh List</a>\r\n    </div>\r\n    <div class=\"control\">\r\n      <a class=\"button is-danger\">Clear log</a>\r\n    </div>\r\n  </div>\r\n  <ol></ol>\r\n</div>\r\n";

  const KEY = 'log';
  function addLogEntry(ex, entry) {
      const logs = ex.storage.get(KEY, []).concat(Object.assign({ timestamp: Date.now() }, entry));
      ex.storage.set(KEY, logs);
  }
  class LogTab {
      constructor(container, ex) {
          this.getLogs = () => this.ex.storage.get(KEY, []);
          this.container = container;
          this.ex = ex;
          container.innerHTML = html$3;
          this.logContainer = container.querySelector('ol');
          const input = container.querySelector('input');
          input.addEventListener('input', () => this.filter(input.value));
          container.querySelector('.is-primary').addEventListener('click', () => {
              this.refreshList();
              this.filter(input.value);
          });
          container.querySelector('.is-danger').addEventListener('click', () => {
              this.ex.storage.set(KEY, []);
              addLogEntry(this.ex, { message: 'Cleared logs', user: 'SERVER' });
              this.refreshList();
          });
      }
      filter(search) {
          search = search.toLocaleUpperCase();
          this.logContainer.querySelectorAll('li').forEach(el => {
              const name = el.dataset.name;
              el.style.display = name.includes(search) ? '' : 'none';
          });
      }
      refreshList() {
          this.logContainer.innerHTML = '';
          this.getLogs().forEach(log => {
              const li = this.logContainer.appendChild(document.createElement('li'));
              li.dataset.name = log.user;
              const date = new Date(log.timestamp);
              li.textContent = `${date.toLocaleDateString()} ${date.toLocaleTimeString()} ${log.user} - ${log.message}`;
          });
      }
  }

  var html$4 = "<template>\r\n  <div class=\"box\">\r\n    <div class=\"columns\">\r\n      <div class=\"column is-narrow is-hidden-touch\">\r\n        <span class=\"drag\"></span>\r\n      </div>\r\n      <div class=\"column is-narrow\">\r\n        <p class=\"has-text-weight-bold\">Title</p>\r\n      </div>\r\n      <div class=\"column\">\r\n        <input class=\"input is-small is-fluid\" data-target=\"title\">\r\n      </div>\r\n      <div class=\"column is-narrow\">\r\n        <p class=\"has-text-weight-bold\">XP</p>\r\n      </div>\r\n      <div class=\"column\">\r\n        <input type=\"number\" class=\"input is-small is-fluid\" data-target=\"xp\">\r\n      </div>\r\n      <div class=\"column is-narrow\">\r\n        <p class=\"has-text-weight-bold\">Level up message</p>\r\n      </div>\r\n      <div class=\"column\">\r\n        <textarea class=\"textarea is-small is-fluid\" data-target=\"message\"></textarea>\r\n      </div>\r\n      <div class=\"column is-narrow\">\r\n        <button class=\"button is-small is-danger is-outlined\" data-do=\"delete\">Delete</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<div class=\"container\" id=\"quests_levels\">\r\n  <section class=\"section is-small\">\r\n    <button class=\"button is-primary is-add-button\" title=\"Add level\">+</button>\r\n  </section>\r\n  <div class=\"list\"></div>\r\n</div>\r\n";

  const SAVE_KEY = 'levels';
  const getLevels = (ex) => ex.storage.get(SAVE_KEY, []);
  function levelsTab(ex, ui, container) {
      container.innerHTML = html$4;
      const template = container.querySelector('template');
      const list = container.querySelector('.list');
      dragula_1([list]);
      function rebuildLevelList() {
          const levels = Array.from(list.children)
              .map(el => ({
              xp: +el.querySelector('[data-target=xp]').value,
              title: el.querySelector('[data-target=title]').value,
              onLevelUp: el.querySelector('[data-target=message]').value
          }));
          ex.storage.set(SAVE_KEY, levels);
      }
      ex.storage.get(SAVE_KEY, []).forEach(addLevelToPage);
      function addLevelToPage({ xp, title, onLevelUp }) {
          ui.buildTemplate(template, list, [
              { selector: '[data-target=title]', value: title },
              { selector: '[data-target=xp]', value: xp },
              { selector: '[data-target=message]', value: onLevelUp }
          ]);
      }
      container.querySelector('.is-add-button').addEventListener('click', () => {
          addLevelToPage({
              xp: 100,
              title: 'Super cool title',
              onLevelUp: ' {{Name}} leveled up!'
          });
          rebuildLevelList();
      });
      container.addEventListener('click', ({ target }) => {
          if (!(target instanceof HTMLButtonElement) || target.dataset.do !== 'delete') {
              return;
          }
          const messageEl = target.parentElement.parentElement.parentElement;
          messageEl.remove();
          rebuildLevelList();
      });
      container.addEventListener('change', rebuildLevelList);
  }

  const match = (r, s) => (s.match(r) || []).slice(1);
  function getAvailableQuests(ex, completed) {
      const list = getList(ex);
      const available = [];
      while (list.length) {
          const quest = list.shift();
          if (completed.includes(quest.id)) {
              list.unshift(...quest.children);
          }
          else {
              available.push(quest);
          }
      }
      return available;
  }
  function checkLevelUp(ex, userXP, xpGain, name) {
      const levels = getLevels(ex);
      while (levels.length && levels[0].xp <= userXP) {
          userXP -= levels[0].xp;
          levels.shift();
      }
      while (levels.length && levels[0].xp < userXP + xpGain) {
          xpGain -= levels[0].xp - userXP;
          userXP = 0;
          if (levels[0].onLevelUp) {
              ex.bot.send(levels[0].onLevelUp, { name });
              levels.shift();
          }
      }
  }
  function displayQuests(ex, name) {
      const user = getUser(ex, name);
      const quests = getQuests(ex);
      const available = getAvailableQuests(ex, user.completed);
      if (available.length === 0) {
          ex.bot.send('No available quests.');
          return;
      }
      const message = ['Available quests:'];
      for (let i = 0; i < Math.min(5, available.length); i++) {
          const quest = quests.find(q => q.id === available[i].id);
          message.push(`${quest.name} (${quest.xp} xp)`);
      }
      ex.bot.send(message.join('\n'));
  }
  function addCommands(ex, world) {
      world.addCommand('xp', (player, args) => {
          const users = getUsers(ex);
          const sender = getUser(ex, player.name);
          if (!player.isOwner && !sender.questmaster)
              return;
          const [name = '', amount = '0'] = match(/^(.*?) ([+-]?\d+)$/, args);
          const normalizedName = name.toLocaleUpperCase();
          const numericAmount = parseInt(amount, 10);
          // Player hasn't completed any quests
          if (!users[normalizedName]) {
              return ex.bot.send(`Cannot modify xp of <${normalizedName}>, no quests have been completed.`);
          }
          const oldXP = users[normalizedName].xp;
          if (numericAmount < 0) {
              // xp cannot be negative
              users[normalizedName].xp = Math.min(0, oldXP - numericAmount);
          }
          else {
              checkLevelUp(ex, oldXP, numericAmount, normalizedName);
              const willOverflow = Number.MAX_SAFE_INTEGER - numericAmount < oldXP;
              users[normalizedName].xp = willOverflow ? Number.MAX_SAFE_INTEGER : oldXP + numericAmount;
          }
          setUsers(ex, users);
          ex.bot.send(`Updated ${normalizedName}'s xp to ${users[normalizedName].xp}`);
          addLogEntry(ex, {
              message: `Updated ${normalizedName}'s xp to ${users[normalizedName].xp} (was ${oldXP})`,
              user: player.name
          });
      });
      world.addCommand('quests', ({ name }) => displayQuests(ex, name));
      world.addCommand('quest', ({ name }, questName) => {
          if (!questName) {
              return displayQuests(ex, name);
          }
          const quest = getQuests(ex).find(q => q.name.toLocaleUpperCase() === questName.toLocaleUpperCase());
          if (!quest) {
              ex.bot.send(`That quest doesn't exist.`);
              return;
          }
          const { completed } = getUser(ex, name);
          if (completed.includes(quest.id)) {
              ex.bot.send(`You have already completed that quest.`);
              return;
          }
          const available = getAvailableQuests(ex, completed);
          if (available.some(({ id }) => id === quest.id)) {
              ex.bot.send(quest.description);
          }
          else {
              ex.bot.send(`You haven't unlocked that quest yet.`);
          }
      });
      world.addCommand('code', ({ name }, code) => {
          const users = getUsers(ex);
          if (!users[name]) {
              users[name] = {
                  completed: [],
                  xp: 0,
                  questmaster: false
              };
          }
          const quest = getQuests(ex).find(q => q.code.toLocaleUpperCase() === code.toLocaleUpperCase());
          if (!quest) {
              ex.bot.send(`No quest with that code exists.`);
              return;
          }
          if (users[name].completed.includes(quest.id)) {
              ex.bot.send(`You've already completed that quest.`);
              return;
          }
          const available = getAvailableQuests(ex, users[name].completed);
          if (!available.some(q => q.id === quest.id)) {
              ex.bot.send(`You can't complete that quest... yet`);
              return;
          }
          checkLevelUp(ex, users[name].xp, quest.xp, name);
          const willOverflow = Number.MAX_SAFE_INTEGER - quest.xp < users[name].xp;
          users[name].xp = willOverflow ? Number.MAX_SAFE_INTEGER : users[name].xp + quest.xp;
          users[name].completed.push(quest.id);
          setUsers(ex, users);
          const message = quest.completeMessage || `Quest complete! Gained {{xp}} xp.`;
          ex.bot.send(message, {
              xp: quest.xp.toString(),
              title: quest.name,
              description: quest.description,
              name
          });
          addLogEntry(ex, { message: `Completed the ${quest.name} quest`, user: name });
      });
      world.addCommand('level', ({ name, isOwner }, target) => {
          const levels = getLevels(ex);
          let user = getUser(ex, name);
          if ((isOwner || user.questmaster) && target) {
              user = Object.assign({}, getUser(ex, target.toLocaleUpperCase()));
              user.xp = Math.max(user.xp, 0); // In case the user doesn't exist
              name = target.toLocaleUpperCase();
          }
          let xp = user.xp;
          let currentLevel = levels[0];
          while (levels.length && levels[0].xp <= xp) {
              xp -= levels[0].xp;
              currentLevel = levels.shift();
          }
          if (currentLevel) {
              ex.bot.send(` {{Name}}'s level: {{title}}\nxp: {{xp}}`, {
                  name,
                  title: currentLevel.title,
                  xp: Math.max(user.xp, 0).toString()
              });
          }
      });
      world.addCommand('leveltop', () => {
          const users = getUsers(ex);
          const top = Object.keys(users)
              .sort((a, b) => users[b].xp - users[a].xp)
              .slice(0, 10) // Todo: #1
              .filter(name => name !== INVALID_NAME);
          const lines = ['Top Players:'];
          for (const name of top) {
              lines.push(`${name} - ${users[name].xp} xp`);
          }
          ex.bot.send(lines.join('\n'));
      });
  }
  function removeCommands(world) {
      const commands = [
          'xp',
          'quests',
          'quest',
          'code',
          'leveltop'
      ];
      for (const command of commands) {
          world.removeCommand(command);
      }
  }

  document.head.appendChild(document.createElement('style')).textContent = css;
  const TAB_GROUP = 'quests';
  bot.MessageBot.registerExtension('bibliofile/quests', (ex, world) => {
      addCommands(ex, world);
      ex.remove = () => removeCommands(world);
      const ui = ex.bot.getExports('ui');
      if (!ui)
          return;
      ui.addTabGroup('Quests', TAB_GROUP);
      const infoTab = new InfoTab(ui.addTab('Info', TAB_GROUP));
      const questsTab = new QuestsTab(ex, ui, ui.addTab('Quests', TAB_GROUP));
      levelsTab(ex, ui, ui.addTab('Levels', TAB_GROUP));
      const usersTab = new UsersTab(ui.addTab('Users', TAB_GROUP), ex);
      const logTab = new LogTab(ui.addTab('Log', TAB_GROUP), ex);
      ex.remove = () => {
          ui.removeTabGroup(TAB_GROUP);
          removeCommands(world);
      };
  });

}));
//# sourceMappingURL=bundle.js.map
