'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var MC = require('@kissmybutton/motorcortex');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var MC__default = /*#__PURE__*/_interopDefaultLegacy(MC);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}

function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$1(o);
}

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$1(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn$1(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized$1(self);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf$1(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf$1(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn$1(this, result);
  };
}
/*
 * anime.js v3.1.0
 * (c) 2019 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */
// Defaults


var defaultInstanceSettings = {};
var defaultTweenSettings = {
  duration: 1000,
  round: 0
};
var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective']; // Caching

var cache = {
  CSS: {}
}; // Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

var is = {
  arr: function (a) {
    return Array.isArray(a);
  },
  obj: function (a) {
    return stringContains(Object.prototype.toString.call(a), 'Object');
  },
  pth: function (a) {
    return is.obj(a) && a.hasOwnProperty('totalLength');
  },
  svg: function (a) {
    return a instanceof SVGElement;
  },
  inp: function (a) {
    return a instanceof HTMLInputElement;
  },
  dom: function (a) {
    return a.nodeType || is.svg(a);
  },
  str: function (a) {
    return typeof a === 'string';
  },
  fnc: function (a) {
    return typeof a === 'function';
  },
  und: function (a) {
    return typeof a === 'undefined';
  },
  hex: function (a) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
  },
  rgb: function (a) {
    return /^rgb/.test(a);
  },
  hsl: function (a) {
    return /^hsl/.test(a);
  },
  col: function (a) {
    return is.hex(a) || is.rgb(a) || is.hsl(a);
  },
  key: function (a) {
    return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes';
  }
};

var penner = function () {
  // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)
  var eases = {
    linear: function () {
      return function (t) {
        return t;
      };
    }
  };
  return eases;
}(); // Strings


function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch (e) {
    return;
  }
} // Arrays


function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];

  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];

      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }

  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) {
    return a.concat(is.arr(b) ? flattenArray(b) : b);
  }, []);
}

function toArray(o) {
  if (is.arr(o)) {
    return o;
  }

  if (is.str(o)) {
    o = selectString(o) || o;
  }

  if (o instanceof NodeList || o instanceof HTMLCollection) {
    return [].slice.call(o);
  }

  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) {
    return a === val;
  });
} // Objects


function cloneObject(o) {
  var clone = {};

  for (var p in o) {
    clone[p] = o[p];
  }

  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o1) {
    o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
  }

  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o2) {
    o[p] = is.und(o1[p]) ? o2[p] : o1[p];
  }

  return o;
} // Colors


function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return "rgba(" + r + "," + g + "," + b + ",1)";
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;

  function hue2rgb(p, q, t) {
    if (t < 0) {
      t += 1;
    }

    if (t > 1) {
      t -= 1;
    }

    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }

    if (t < 1 / 2) {
      return q;
    }

    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }

    return p;
  }

  var r, g, b;

  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
}

function colorToRgb(val) {
  if (is.rgb(val)) {
    return rgbToRgba(val);
  }

  if (is.hex(val)) {
    return hexToRgba(val);
  }

  if (is.hsl(val)) {
    return hslToRgba(val);
  }
} // Units


function getUnit(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);

  if (split) {
    return split[1];
  }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') {
    return 'px';
  }

  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) {
    return 'deg';
  }
} // Values


function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) {
    return val;
  }

  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);

  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) {
    return value;
  }

  var cached = cache.CSS[value + unit];

  if (!is.und(cached)) {
    return cached;
  }

  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (getAttribute(el, prop) || is.svg(el) && el[prop])) {
    return 'attribute';
  }

  if (is.dom(el) && arrayContains(validTransforms, prop)) {
    return 'transform';
  }

  if (is.dom(el) && prop !== 'transform' && getCSSValue(el, prop)) {
    return 'css';
  }

  if (el[prop] != null) {
    return 'object';
  }
}

function getElementTransforms(el) {
  if (!is.dom(el)) {
    return;
  }

  var str = el.style.transform || '';
  var reg = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m;

  while (m = reg.exec(str)) {
    transforms.set(m[1], m[2]);
  }

  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;

  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }

  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform':
      return getTransformValue(target, propName, animatable, unit);

    case 'css':
      return getCSSValue(target, propName, unit);

    case 'attribute':
      return getAttribute(target, propName);

    default:
      return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);

  if (!operator) {
    return to;
  }

  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));

  switch (operator[0][0]) {
    case '+':
      return x + y + u;

    case '-':
      return x - y + u;

    case '*':
      return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) {
    return colorToRgb(val);
  }

  if (/\s/g.test(val)) {
    return val;
  }

  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;

  if (unit) {
    return unitLess + unit;
  }

  return unitLess;
} // Decompose value


function decomposeValue(val, unit) {
  // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
  // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation

  var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: is.str(val) || unit ? value.split(rgx) : []
  };
} // Animatables


function parseTargets(targets) {
  var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
  return filterArray(targetsArray, function (item, pos, self) {
    return self.indexOf(item) === pos;
  });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {
      target: t,
      id: i,
      total: parsed.length,
      transforms: {
        list: getElementTransforms(t)
      }
    };
  });
} // Properties


function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings);

  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = l === 2 && !is.obj(prop[0]);

    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) {
        settings.duration = tweenSettings.duration / l;
      }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {
        value: prop
      };
    }
  }

  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = is.obj(v) && !is.pth(v) ? v : {
      value: v
    };
    return obj;
  }).map(function (k) {
    return mergeObjects(k, settings);
  });
}

function getProperties(tweenSettings, params) {
  var properties = [];

  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }

  return properties;
} // Tweens


function normalizeTweenValues(tween, animatable) {
  var t = {};

  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);

    if (is.arr(value)) {
      value = value.map(function (v) {
        return getFunctionValue(v, animatable);
      });

      if (value.length === 1) {
        value = value[0];
      }
    }

    t[p] = value;
  }

  t.duration = parseFloat(t.duration);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;

    if (is.und(to)) {
      to = previousValue;
    }

    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.duration;
    tween.isPath = false;
    tween.isColor = is.col(tween.from.original);

    if (tween.isColor) {
      tween.round = 1;
    }

    previousTween = tween;
    return tween;
  });
} // Tween progress


var setProgressValue = {
  css: function (t, p, v) {
    return t.style[p] = v;
  },
  attribute: function (t, p, v) {
    return t.setAttribute(p, v);
  },
  object: function (t, p, v) {
    return t[p] = v;
  },
  transform: function (t, p, v, transforms, manual) {
    transforms.list.set(p, v);

    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) {
        str += prop + "(" + value + ") ";
      });
      t.style.transform = str;
    }
  }
}; // Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
} // Animations


function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);

  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end
    };
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) {
    return !is.und(a);
  });
} // Create Instance


function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;
  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) {
    return anim.duration;
  })) : tweenSettings.duration;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration
  });
} // Public Instance


function anime(params) {
  if (params === void 0) params = {};
  var children,
      childrenLength = 0;
  var resolve = null;

  function makePromise(instance) {
    var promise = window.Promise && new Promise(function (_resolve) {
      return resolve = _resolve;
    });
    instance.finished = promise;
    return promise;
  }

  var instance = createNewInstance(params);
  var promise = makePromise(instance);

  function seekChild(time, child) {
    if (child) {
      child.seek(time);
    }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) {
        seekChild(time, children[i]);
      }
    } else {
      for (var i$1 = childrenLength; i$1--;) {
        seekChild(time, children[i$1]);
      }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;

    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength]; // Only check for keyframes if there is more than one tween

      if (tweenLength) {
        tween = filterArray(tweens, function (t) {
          return insTime < t.end;
        })[0] || tween;
      }

      var elapsed = minMax(insTime - tween.start, 0, tween.duration) / tween.duration;
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = void 0;

      for (var n = 0; n < toNumbersLength; n++) {
        var value = void 0;
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;
        value = fromNumber + elapsed * (toNumber - fromNumber);

        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }

        numbers.push(value);
      } // Manual Array.reduce for better performances


      var stringsLength = strings.length;

      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];

        for (var s = 0; s < stringsLength; s++) {
          var a = strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];

          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }

      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insTime = engineTime;
    instance.progress = minMax(insTime / insDuration * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;

    if (children) {
      syncInstanceChildren(insTime);
    }

    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
    }

    setAnimationsProgress(insTime);
    instance.currentTime = minMax(insTime, 0, insDuration);

    if (engineTime >= insDuration) {
      instance.paused = true;

      if (!instance.completed) {
        instance.completed = true;

        if (!instance.passThrough && 'Promise' in window) {
          resolve();
          promise = makePromise(instance);
        }
      }
    }
  }

  instance.reset = function () {
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.completed = false;
    instance.reversePlayback = false;
    children = instance.children;
    childrenLength = children.length;

    for (var i = childrenLength; i--;) {
      instance.children[i].reset();
    }
  }; // Set Value helper


  instance.set = function (targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.seek = function (time) {
    setInstanceProgress(time);
  };

  instance.reset();
  return instance;
}

anime.version = '3.1.0';
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.penner = penner;
var transform = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skewX", "skewY", "perspective"];
var compositeAttributes = {
  transform: transform
};

function getMatrix2D(win, element) {
  var transform = win.getComputedStyle(element).transform;

  if (transform === "" || transform === "none") {
    return {};
  }

  var values = transform.split("(")[1].split(")")[0].split(",");

  var qrDecompone = function qrDecompone(a) {
    var angle = Math.atan2(a[1], a[0]),
        denom = Math.pow(a[0], 2) + Math.pow(a[1], 2),
        denom2 = Math.pow(a[2], 2) + Math.pow(a[3], 2),
        scaleX = Math.sqrt(denom),
        scaleY = (a[0] * a[3] - a[2] * a[1]) / scaleX,
        skewX = Math.atan2(a[0] * a[2] + a[1] * a[3], denom),
        skewY = Math.atan2(a[1] * a[3] + a[0] * a[2], denom2);
    return {
      rotate: angle / (Math.PI / 180) + "deg",
      // this is rotation angle in degrees
      scaleX: scaleX,
      // scaleX factor
      scaleY: scaleY,
      // scaleY factor
      skewX: (denom === 1 ? skewX / (Math.PI / 180) : 0) + "deg",
      // skewX angle degrees
      skewY: (denom2 === 1 ? skewY / (Math.PI / 180) : 0) + "deg",
      // skewY angle degrees
      translateX: a[4] + "px",
      // translation point  x
      translateY: a[5] + "px" // translation point  y

    };
  };

  return qrDecompone(values);
}

var Anime =
/*#__PURE__*/
function (_MC$API$MonoIncident) {
  _inherits$1(Anime, _MC$API$MonoIncident);

  var _super = _createSuper(Anime);

  function Anime() {
    _classCallCheck$1(this, Anime);

    return _super.apply(this, arguments);
  }

  _createClass$1(Anime, [{
    key: "onGetContext",
    value: function onGetContext() {
      var options = {};
      var initialize = {};

      if (Object.prototype.hasOwnProperty.call(compositeAttributes, this.attributeKey)) {
        var compoAttribute = compositeAttributes[this.attributeKey];

        for (var i = 0; i < compoAttribute.length; i++) {
          if (!Object.prototype.hasOwnProperty.call(this.targetValue, compoAttribute[i])) {
            continue;
          }

          options[compoAttribute[i]] = [this.getInitialValue()[compoAttribute[i]], this.targetValue[compoAttribute[i]]];
          initialize[compoAttribute[i]] = [this.getScratchValue(), this.targetValue[compoAttribute[i]]];
        }
      } else {
        options[this.attributeKey] = [this.getInitialValue(), this.targetValue];
        initialize[this.targetValue] = [this.getScratchValue(), this.targetValue];
      }

      this.target = anime(_objectSpread2$1({
        autoplay: false,
        duration: this.props.duration,
        easing: "linear",
        targets: this.element
      }, (this.attrs || {}).attrs || {}, {}, options)); // handle first render initial values
    }
  }, {
    key: "getScratchValue",
    value: function getScratchValue() {
      if (this.attributeKey === "transform") {
        var obj = {};
        var transform = compositeAttributes[this.attributeKey];
        var currentTransform = getMatrix2D(this.context.window, this.element);

        for (var i = 0; i < transform.length; i++) {
          if (Object.prototype.hasOwnProperty.call(currentTransform, transform[i])) {
            obj[transform[i]] = currentTransform[transform[i]];
          } else {
            obj[transform[i]] = anime.get(this.element, transform[i]);
          }
        }

        return obj;
      }

      return anime.get(this.element, this.attributeKey);
    }
    /**
     * @param {number} f
     */

  }, {
    key: "onProgress",
    value: function onProgress(f) {
      return this.target.seek(this.target.duration * f);
    }
  }]);

  return Anime;
}(MC__default['default'].API.MonoIncident);

var nu = ["cm", "mm", "in", "px", "pt", "pc", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "%"];
var ru = ["deg", "rad", "grad", "turn"];
var _MEASUREMENT = "measurement";
var _COLOR = "color";
var animatedAttrs = {
  type: "object",
  // strict : true,
  props: {
    background: {
      optional: true,
      type: _COLOR
    },
    backgroundColor: {
      optional: true,
      type: _COLOR
    },
    backgroundPosition: {
      optional: true,
      type: "string"
    },
    backgroundSize: {
      optional: true,
      type: "string"
    },
    border: {
      optional: true,
      type: "string"
    },
    borderBottom: {
      optional: true,
      type: "string"
    },
    borderBottomColor: {
      optional: true,
      type: _COLOR
    },
    borderBottomLeftRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderBottomRightRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderBottomWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderColor: {
      optional: true,
      type: _COLOR
    },
    borderEndEndRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderEndStartRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderImageOutset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    borderImageSlice: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    borderImageWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    borderLeft: {
      optional: true,
      type: "string"
    },
    borderLeftColor: {
      optional: true,
      type: _COLOR
    },
    borderLeftWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderRight: {
      optional: true,
      type: "string"
    },
    borderRightColor: {
      optional: true,
      type: _COLOR
    },
    borderRightWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderStartEndRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderStartStartRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderTop: {
      optional: true,
      type: "string"
    },
    borderTopColor: {
      optional: true,
      type: _COLOR
    },
    borderTopLeftRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderTopRightRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderTopWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    bottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    boxShadow: {
      optional: true,
      type: "string"
    },
    caretColor: {
      optional: true,
      type: _COLOR
    },
    color: {
      optional: true,
      type: _COLOR
    },
    columnCount: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    columnGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    columnRule: {
      optional: true,
      type: "string"
    },
    columnRuleColor: {
      optional: true,
      type: _COLOR
    },
    columnRuleWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    columns: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    columnWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    flex: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    flexBasis: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    flexGrow: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    flexShrink: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    font: {
      optional: true,
      type: "string"
    },
    fontSize: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    fontSizeAdjust: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    fontStretch: {
      optional: true,
      type: _MEASUREMENT,
      units: ["%"]
    },
    fontWeight: {
      optional: true,
      type: "string"
    },
    gap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    gridColumnGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    gridGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    gridRowGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    gridTemplateColumns: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    gridTemplateRows: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    height: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    inset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    insetBlock: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    insetBlockEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    insetBlockStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    insetInline: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    insetInlineEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    insetInlineStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    left: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    letterSpacing: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    lineClamp: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    lineHeight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    margin: {
      optional: true,
      type: "string"
    },
    marginBottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    marginLeft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    marginRight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    marginTop: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    maskBorder: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    maskPosition: {
      optional: true,
      type: "string"
    },
    maskSize: {
      optional: true,
      type: "string"
    },
    maxHeight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    maxWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    objectPosition: {
      optional: true,
      type: "string"
    },
    offset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    offsetAnchor: {
      optional: true,
      type: "string"
    },
    offsetDistance: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    offsetPath: {
      optional: true,
      type: "string"
    },
    offsetPosition: {
      optional: true,
      type: "string"
    },
    offsetRotate: {
      optional: true,
      type: _MEASUREMENT,
      units: ru
    },
    opacity: {
      optional: true,
      type: "number",
      min: 0,
      max: 1
    },
    order: {
      optional: true,
      type: "number",
      integer: true
    },
    outline: {
      optional: true,
      type: "string"
    },
    outlineColor: {
      optional: true,
      type: _COLOR
    },
    outlineOffset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineRadiusBottomleft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineRadiusBottomright: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineRadiusTopleft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineRadiusTopright: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    padding: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    paddingBottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    paddingLeft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    paddingRight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    paddingTop: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    perspective: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    perspectiveOrigin: {
      optional: true,
      type: "string"
    },
    right: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    rotate: {
      optional: true,
      type: _MEASUREMENT,
      units: ru
    },
    rowGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scale: {
      optional: true,
      type: "number",
      min: 0
    },
    scrollbarColor: {
      optional: true,
      type: _COLOR
    },
    scrollMargin: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginBlock: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginBlockEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginBlockStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginBottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginInline: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginInlineEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginInlineStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginLeft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginRight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginTop: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPadding: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingBlock: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingBlockEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingBlockStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingBottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingInline: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingInlineEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingInlineStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingLeft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingRight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingTop: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollSnapCoordinate: {
      optional: true,
      type: "string"
    },
    scrollSnapDestination: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    shapeImageThreshold: {
      optional: true,
      type: "string"
    },
    shapeMargin: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    shapeOutside: {
      optional: true,
      type: "string"
    },
    tabSize: {
      optional: true,
      type: "string"
    },
    textDecoration: {
      optional: true,
      type: "string"
    },
    textDecorationColor: {
      optional: true,
      type: _COLOR
    },
    textDecorationThickness: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    textEmphasis: {
      optional: true,
      type: "string"
    },
    textEmphasisColor: {
      optional: true,
      type: _COLOR
    },
    textFillColor: {
      optional: true,
      type: _COLOR
    },
    textIndent: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    textShadow: {
      optional: true,
      type: "string"
    },
    textStroke: {
      optional: true,
      type: "string"
    },
    textStrokeColor: {
      optional: true,
      type: _COLOR
    },
    textUnderlineOffset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    top: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    transform: {
      optional: true,
      type: "object",
      props: {
        translateX: {
          type: _MEASUREMENT,
          units: nu,
          optional: true
        },
        translateY: {
          type: _MEASUREMENT,
          units: nu,
          optional: true
        },
        translateZ: {
          type: _MEASUREMENT,
          units: nu,
          optional: true
        },
        rotate: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        rotateX: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        rotateY: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        rotateZ: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        scale: {
          type: "number",
          min: 0,
          optional: true
        },
        scaleX: {
          type: "number",
          min: 0,
          optional: true
        },
        scaleY: {
          type: "number",
          min: 0,
          optional: true
        },
        scaleZ: {
          type: "number",
          min: 0,
          optional: true
        },
        skewX: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        skewY: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        perspective: {
          type: _MEASUREMENT,
          units: nu,
          optional: true
        }
      }
    },
    transformOrigin: {
      optional: true,
      type: "string"
    },
    verticalAlign: {
      optional: true,
      type: "string"
    },
    visibility: {
      optional: true,
      type: "string"
    },
    width: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    wordSpacing: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    zIndex: {
      optional: true,
      type: "number",
      integer: true
    },
    zoom: {
      optional: true,
      type: _MEASUREMENT,
      units: ["%"],
      min: 0
    }
  },
  transformOrigin: {
    type: "string"
  },
  verticalAlign: {
    type: "string"
  },
  visibility: {
    type: "string"
  },
  width: {
    type: _MEASUREMENT,
    units: nu
  },
  wordSpacing: {
    type: _MEASUREMENT,
    units: nu
  },
  zIndex: {
    type: "number",
    integer: true
  },
  zoom: {
    type: _MEASUREMENT,
    units: ["%"],
    min: 0
  }
};
var index = {
  npm_name: "@kissmybutton/motorcortex-anime",
  incidents: [{
    exportable: Anime,
    name: "Anime",
    attributesValidationRules: {
      animatedAttrs: animatedAttrs
    }
  }],
  compositeAttributes: compositeAttributes
};

var Anime$1 = MC__default['default'].loadPlugin(index);

var BgOpener =
/*#__PURE__*/
function (_MotorCortex$API$Clip) {
  _inherits(BgOpener, _MotorCortex$API$Clip);

  function BgOpener() {
    _classCallCheck(this, BgOpener);

    return _possibleConstructorReturn(this, _getPrototypeOf(BgOpener).apply(this, arguments));
  }

  _createClass(BgOpener, [{
    key: "buildTree",
    value: function buildTree() {
      var bgPosition = new Anime$1.Anime({
        animatedAttrs: {
          top: "".concat(0, "px")
        },
        initialValues: {
          top: "-".concat(this.attrs.height / 2, "px")
        }
      }, {
        duration: 1000 * this.attrs.timing,
        selector: ".bg-0",
        easing: this.attrs.easing
      });
      this.addIncident(bgPosition, 0);
      var bgPositionOne = new Anime$1.Anime({
        animatedAttrs: {
          top: "-".concat(this.attrs.height / 2, "px")
        },
        initialValues: {
          top: "-".concat(this.attrs.height / 2, "px")
        }
      }, {
        duration: 1000 * this.attrs.timing,
        selector: ".bg-1",
        easing: this.attrs.easing
      });
      this.addIncident(bgPositionOne, 0);
      var wrapperHeight = new Anime$1.Anime({
        animatedAttrs: {
          height: "".concat(this.attrs.height / 2, "px"),
          top: "".concat(0, "px")
        },
        initialValues: {
          height: "".concat(0, "px"),
          top: "".concat(this.attrs.height / 2, "px")
        }
      }, {
        duration: 1000 * this.attrs.timing,
        selector: ".bg-wrapper",
        easing: this.attrs.easing
      });
      this.addIncident(wrapperHeight, 0);
      var wrapperHeightOut = new Anime$1.Anime({
        animatedAttrs: {
          // height: `${this.attrs.height/2}px`,
          top: "-".concat(this.attrs.height / 2, "px")
        },
        initialValues: {
          // height: `${0}px`,
          top: "".concat(0, "px")
        }
      }, {
        duration: 1000 * this.attrs.timing,
        selector: ".bg-wrapper-0",
        easing: this.attrs.easing
      });
      this.addIncident(wrapperHeightOut, this.attrs.exitStart);
      var wrapperHeightOutOne = new Anime$1.Anime({
        animatedAttrs: {
          // height: `${this.attrs.height/2}px`,
          top: "".concat(this.attrs.height / 2, "px")
        },
        initialValues: {
          // height: `${0}px`,
          top: "".concat(0, "px")
        }
      }, {
        duration: 1000 * this.attrs.timing,
        selector: ".bg-wrapper-1",
        easing: this.attrs.easing
      });
      this.addIncident(wrapperHeightOutOne, this.attrs.exitStart);
      var bgPositionOut = new Anime$1.Anime({
        animatedAttrs: {
          top: "".concat(this.attrs.height / 2, "px")
        } // initialValues: {
        //   top: `-${this.attrs.height/2}px`
        // }

      }, {
        duration: 1000 * this.attrs.timing,
        selector: ".bg-0",
        easing: this.attrs.easing
      });
      this.addIncident(bgPositionOut, this.attrs.exitStart);
      var bgPositionOneOut = new Anime$1.Anime({
        animatedAttrs: {
          top: "-".concat(this.attrs.height, "px")
        },
        initialValues: {
          top: "-".concat(this.attrs.height / 2, "px")
        }
      }, {
        duration: 1000 * this.attrs.timing,
        selector: ".bg-1",
        easing: this.attrs.easing
      });
      this.addIncident(bgPositionOneOut, this.attrs.exitStart);
    }
  }, {
    key: "font",
    get: function get() {
      return [{
        type: "google-font",
        src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"
      }];
    }
  }, {
    key: "html",
    get: function get() {
      return "\n    <div class=\"wrapper\">\n      <div class=\"bg-wrapper bg-wrapper-0\">\n        <div class=\"bg bg-0\"></div>\n      </div>\n      <div class=\"bg-wrapper bg-wrapper-1\">\n        <div class=\"bg bg-1\"></div>\n      </div>\n\n\t  </div>\n    ";
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .wrapper{\n      width: ".concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      display:flex;\n      font-family: 'Poppins', sans-serif;\n      flex-direction: column;\n    }\n    .bg-wrapper{\n      width: ").concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      display:flex;\n      font-family: 'Poppins', sans-serif;\n      position: relative;\n      overflow: hidden;\n    }\n    .bg{\n      width: ").concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      background:url(").concat(this.attrs.bgUrl, ") no-repeat;\n      background-size: contain;\n      position: relative;\n    }\n      \n  ");
    }
  }]);

  return BgOpener;
}(MC__default['default'].API.Clip);

var BgOpener_1 = BgOpener;

var Anime$2 = MC__default['default'].loadPlugin(index);

var TwoSidesReveal =
/*#__PURE__*/
function (_MotorCortex$API$Clip) {
  _inherits(TwoSidesReveal, _MotorCortex$API$Clip);

  function TwoSidesReveal() {
    _classCallCheck(this, TwoSidesReveal);

    return _possibleConstructorReturn(this, _getPrototypeOf(TwoSidesReveal).apply(this, arguments));
  }

  _createClass(TwoSidesReveal, [{
    key: "buildTree",
    value: function buildTree() {
      var bgPositionLeft = new Anime$2.Anime({
        animatedAttrs: {
          left: "".concat(this.attrs.width / 2, "px")
        },
        initialValues: {
          left: "".concat(this.attrs.width, "px")
        }
      }, {
        duration: 1000 * this.attrs.timing,
        selector: ".bg-0",
        easing: this.attrs.easing
      });
      this.addIncident(bgPositionLeft, 0);
      var bgPositionRigth = new Anime$2.Anime({
        animatedAttrs: {
          right: "".concat(this.attrs.width / 2, "px")
        },
        initialValues: {
          right: "".concat(this.attrs.width, "px")
        }
      }, {
        duration: 1000 * this.attrs.timing,
        selector: ".bg-1",
        easing: this.attrs.easing
      });
      this.addIncident(bgPositionRigth, 0);
    }
  }, {
    key: "font",
    get: function get() {
      return [{
        type: "google-font",
        src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"
      }];
    }
  }, {
    key: "html",
    get: function get() {
      return "\n    <div class=\"wrapper\">\n      <div class=\"bg-wrapper bg-wrapper-0\">\n        <div class=\"bg bg-0\"></div>\n      </div>\n      <div class=\"bg-wrapper bg-wrapper-1\">\n        <div class=\"bg bg-1\"></div>\n      </div>\n\n\t  </div>\n    ";
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .wrapper{\n      width: ".concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      display:flex;\n      font-family: 'Poppins', sans-serif;\n      overflow: hidden;\n    }\n    .bg-wrapper{\n      width: ").concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      display:flex;\n      font-family: 'Poppins', sans-serif;\n      position: absolute;\n      overflow: hidden;\n    }\n    .bg-wrapper-0{\n      right: ").concat(this.attrs.width / 2, "px;\n    }\n    .bg-wrapper-1{\n      left: ").concat(this.attrs.width / 2, "px;\n    }\n    .bg{\n      width: ").concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      background:url(").concat(this.attrs.bgUrl, ") no-repeat;\n      background-size: contain;\n      position: relative;\n    }\n      \n  ");
    }
  }]);

  return TwoSidesReveal;
}(MC__default['default'].API.Clip);

var TwoSidesReveal_1 = TwoSidesReveal;

var Anime$3 = MC__default['default'].loadPlugin(index);

var ColumnReveal =
/*#__PURE__*/
function (_MotorCortex$API$Clip) {
  _inherits(ColumnReveal, _MotorCortex$API$Clip);

  function ColumnReveal() {
    _classCallCheck(this, ColumnReveal);

    return _possibleConstructorReturn(this, _getPrototypeOf(ColumnReveal).apply(this, arguments));
  }

  _createClass(ColumnReveal, [{
    key: "buildTree",
    value: function buildTree() {
      var bgPositionOneIn = new Anime$3.Anime({
        animatedAttrs: {
          top: "".concat(0, "px")
        }
      }, {
        duration: 1000 * this.attrs.timing,
        selector: ".bg-wrapper",
        easing: this.attrs.easing,
        delay: "@expression(randomInt(0,".concat(Math.floor(500 * this.attrs.timing), "))")
      });
      this.addIncident(bgPositionOneIn, 0);

      if (this.attrs.bgOut === true) {
        var bgPositionOneOut = new Anime$3.Anime({
          animatedAttrs: {
            top: "".concat(this.attrs.height, "px")
          }
        }, {
          duration: 1000 * this.attrs.timing,
          selector: ".bg-wrapper",
          easing: this.attrs.easing,
          delay: "@expression(randomInt(0,".concat(Math.floor(500 * this.attrs.timing), "))")
        });
        this.addIncident(bgPositionOneOut, this.attrs.exitStart);
      }
    }
  }, {
    key: "font",
    get: function get() {
      return [{
        type: "google-font",
        src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"
      }];
    }
  }, {
    key: "html",
    get: function get() {
      return "\n    <div class=\"wrapper\">\n      <div class=\"bg-wrapper\">\n        <div class=\"bg bg-0\"></div>\n      </div>\n      <div class=\"bg-wrapper\">\n        <div class=\"bg bg-1\"></div>\n      </div>\n      <div class=\"bg-wrapper\">\n        <div class=\"bg bg-2\"></div>\n      </div>\n      <div class=\"bg-wrapper\">\n        <div class=\"bg bg-3\"></div>\n      </div>\n\t  </div>\n    ";
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .wrapper{\n      width: ".concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      display:flex;\n      font-family: 'Poppins', sans-serif;\n      \n    }\n    .bg-wrapper{\n      width: ").concat(this.attrs.width / 4, "px;\n      height: ").concat(this.attrs.height, "px;\n      display:flex;\n      font-family: 'Poppins', sans-serif;\n      position: relative;\n      overflow: hidden;\n      top: -").concat(this.attrs.height, "px;\n    }\n    .bg{\n      width: ").concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      background:url(").concat(this.attrs.bgUrl, ") no-repeat;\n      background-size: cover;\n      position: absolute;\n    }\n    .bg-0{\n      left:0\n    }\n    .bg-1{\n      left:-").concat(this.attrs.width - this.attrs.width / 4 * 3, "px;\n    }\n    .bg-2{\n      left:-").concat(this.attrs.width - this.attrs.width / 4 * 2, "px;\n    }\n    .bg-3{\n      left:-").concat(this.attrs.width - this.attrs.width / 4, "px;\n    }\n      \n  ");
    }
  }]);

  return ColumnReveal;
}(MC__default['default'].API.Clip);

var ColumnReveal_1 = ColumnReveal;

var Anime$4 = MC__default['default'].loadPlugin(index);

var RowReveal =
/*#__PURE__*/
function (_MotorCortex$API$Clip) {
  _inherits(RowReveal, _MotorCortex$API$Clip);

  function RowReveal() {
    _classCallCheck(this, RowReveal);

    return _possibleConstructorReturn(this, _getPrototypeOf(RowReveal).apply(this, arguments));
  }

  _createClass(RowReveal, [{
    key: "buildTree",
    value: function buildTree() {
      var bgPositionOneIn = new Anime$4.Anime({
        animatedAttrs: {
          left: "0px"
        }
      }, {
        duration: 1000 * this.attrs.timing,
        selector: ".bg-wrapper",
        easing: this.attrs.easing,
        delay: "@stagger(0, ".concat(Math.floor(500 * this.attrs.timing), ",0)")
      });
      this.addIncident(bgPositionOneIn, 0);

      if (this.attrs.bgOut === true) {
        var bgPositionOneOut = new Anime$4.Anime({
          animatedAttrs: {
            left: "-".concat(this.attrs.width, "px")
          }
        }, {
          duration: 1000 * this.attrs.timing,
          selector: ".bg-wrapper",
          easing: this.attrs.easing,
          delay: "@stagger(0, ".concat(Math.floor(500 * this.attrs.timing), ",0)")
        });
        this.addIncident(bgPositionOneOut, this.attrs.exitStart);
      }
    }
  }, {
    key: "font",
    get: function get() {
      return [{
        type: "google-font",
        src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"
      }];
    }
  }, {
    key: "html",
    get: function get() {
      return "\n    <div class=\"wrapper\">\n      <div class=\"bg-wrapper\">\n        <div class=\"bg bg-0\"></div>\n      </div>\n      <div class=\"bg-wrapper\">\n        <div class=\"bg bg-1\"></div>\n      </div>\n      <div class=\"bg-wrapper\">\n        <div class=\"bg bg-2\"></div>\n      </div>\n      <div class=\"bg-wrapper\">\n        <div class=\"bg bg-3\"></div>\n      </div>\n\t  </div>\n    ";
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .wrapper{\n      width: ".concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      display:flex;\n      font-family: 'Poppins', sans-serif;\n      flex-direction: column;\n    }\n    .bg-wrapper{\n      width: ").concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height / 4, "px;\n      display:flex;\n      font-family: 'Poppins', sans-serif;\n      position: relative;\n      overflow: hidden;\n      left:").concat(this.attrs.width, "px;\n    }\n    .bg{\n      width: ").concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      background:url(").concat(this.attrs.bgUrl, ") no-repeat;\n      background-size: cover;\n      position: relative;\n    }\n    .bg-0{\n      top:0\n    }\n    .bg-1{\n      top:-").concat(this.attrs.height - this.attrs.height / 4 * 3, "px;\n    }\n    .bg-2{\n      top:-").concat(this.attrs.height - this.attrs.height / 4 * 2, "px;\n    }\n    .bg-3{\n      top:-").concat(this.attrs.height - this.attrs.height / 4, "px;\n    }\n      \n  ");
    }
  }]);

  return RowReveal;
}(MC__default['default'].API.Clip);

var RowReveal_1 = RowReveal;

var Anime$5 = MC__default['default'].loadPlugin(index);

var Grid =
/*#__PURE__*/
function (_MotorCortex$API$Clip) {
  _inherits(Grid, _MotorCortex$API$Clip);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, _getPrototypeOf(Grid).apply(this, arguments));
  }

  _createClass(Grid, [{
    key: "buildTree",
    value: function buildTree() {
      var gridOpacity = new Anime$5.Anime({
        animatedAttrs: {
          opacity: 0
        },
        initialValues: {
          opacity: 0.7
        }
      }, {
        duration: 1000 * this.attrs.timing,
        selector: ".grid",
        delay: "@expression(randomInt(0,".concat(Math.floor(1000 * this.attrs.timing), "))")
      });
      this.addIncident(gridOpacity, 0);
    }
  }, {
    key: "font",
    get: function get() {
      return [{
        type: "google-font",
        src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"
      }];
    }
  }, {
    key: "html",
    get: function get() {
      var gridList = [];
      var items = this.attrs.columns * this.attrs.rows;

      for (var i = 0; i < items; i++) {
        gridList.push(" <div  class=\"grid grid-".concat(i, "\"> </div> "));
      }

      return "\n    <div class=\"wrapper\">\n      ".concat(gridList.join(""), "\n\t  </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .wrapper{\n      width: ".concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      font-family: 'Poppins', sans-serif;\n      display: grid;\n      grid-template-columns: repeat(").concat(this.attrs.columns, ", 1fr);\n      justify-items: center;\n    }\n    .grid{\n      background: ").concat(this.attrs.color, ";\n      width: ").concat(this.attrs.width / this.attrs.columns, "px;\n      height: ").concat(this.attrs.height / this.attrs.rows, "px;\n    }\n      \n  ");
    }
  }]);

  return Grid;
}(MC__default['default'].API.Clip);

var Grid_1 = Grid;

var Anime$6 = MC__default['default'].loadPlugin(index);

var ThreeSidesReveal =
/*#__PURE__*/
function (_MotorCortex$API$Clip) {
  _inherits(ThreeSidesReveal, _MotorCortex$API$Clip);

  function ThreeSidesReveal() {
    _classCallCheck(this, ThreeSidesReveal);

    return _possibleConstructorReturn(this, _getPrototypeOf(ThreeSidesReveal).apply(this, arguments));
  }

  _createClass(ThreeSidesReveal, [{
    key: "buildTree",
    value: function buildTree() {
      var bgWrapperBgColor = new Anime$6.Anime({
        animatedAttrs: {
          opacity: 0
        },
        initialValues: {
          opacity: 1
        }
      }, {
        duration: 1000 * this.attrs.timing,
        selector: ".bg-in",
        easing: "easeOutQuart",
        delay: "@stagger(200, ".concat(Math.floor(500 * this.attrs.timing), ",0)")
      });
      this.addIncident(bgWrapperBgColor, 0);
      var bgWrapperOpacity = new Anime$6.Anime({
        animatedAttrs: {
          opacity: 1
        },
        initialValues: {
          opacity: 0
        }
      }, {
        duration: 1000 * this.attrs.timing,
        selector: ".bg-wrapper-in",
        easing: "easeOutQuart",
        delay: "@stagger(0, ".concat(Math.floor(500 * this.attrs.timing), ",0)")
      });
      this.addIncident(bgWrapperOpacity, 100);
      var bgOne = new Anime$6.Anime({
        animatedAttrs: {
          left: "0px"
        },
        initialValues: {
          left: "-".concat(this.attrs.width / 2, "px")
        }
      }, {
        duration: 1400 * this.attrs.timing,
        selector: ".bg-0",
        easing: "easeOutQuart"
      });
      this.addIncident(bgOne, 0);
      var bgTwo = new Anime$6.Anime({
        animatedAttrs: {
          top: "0px"
        },
        initialValues: {
          top: "-".concat(this.attrs.height * 0.65, "px")
        }
      }, {
        duration: 1000 * this.attrs.timing,
        selector: ".bg-1",
        easing: "easeOutQuart"
      });
      this.addIncident(bgTwo, 400);
      var bgThree = new Anime$6.Anime({
        animatedAttrs: {
          left: "0px"
        },
        initialValues: {
          left: "-".concat(this.attrs.width / 2, "px")
        }
      }, {
        duration: 1500 * this.attrs.timing,
        selector: ".bg-2",
        easing: "easeOutQuart"
      });
      this.addIncident(bgThree, 400);
      var bgScale = new Anime$6.Anime({
        animatedAttrs: {
          transform: {
            scale: 1
          }
        },
        initialValues: {
          transform: {
            scale: 1.2
          }
        }
      }, {
        duration: 3600 * this.attrs.timing,
        selector: ".bg"
      });
      this.addIncident(bgScale, 1000);

      if (this.attrs.grid === true) {
        var Grid = new Grid_1({
          width: this.attrs.width,
          height: this.attrs.height,
          color: this.attrs.gridColor,
          columns: this.attrs.columns,
          rows: this.attrs.rows,
          timing: this.attrs.gridTiming
        }, {
          selector: ".bg"
        });
        this.addIncident(Grid, 0);
      }
    }
  }, {
    key: "font",
    get: function get() {
      return [{
        type: "google-font",
        src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"
      }];
    }
  }, {
    key: "html",
    get: function get() {
      return "\n    <div class=\"wrapper\">\n      <div class=\"bg-wrapper bg-wrapper-0\">\n        <div class=\" bg-wrapper-in\">\n          <div class=\"bg bg-0\"><div class=\"bg-in\"></div></div>\n        </div>\n        <div class=\" bg-wrapper-in\">\n          <div class=\"bg bg-1\"><div class=\"bg-in\"></div></div>\n        </div>\n      </div>\n      <div class=\"bg-wrapper  bg-wrapper-1\">\n        <div class=\"bg-wrapper-full-width bg-wrapper-in \">\n          <div class=\"bg bg-2\"><div class=\"bg-in\"></div></div>.\n        </div>\n      </div>\n\t  </div>\n    ";
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .wrapper{\n      width: ".concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      display:flex;\n      font-family: 'Poppins', sans-serif;\n      flex-direction: column;\n    }\n    .bg-wrapper{\n      width: ").concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      display:flex;\n      font-family: 'Poppins', sans-serif;\n      position: relative;\n      overflow: hidden;\n    }\n\n    .bg-wrapper-0{\n      height: ").concat(this.attrs.height * 0.65, "px;\n    }\n    .bg-wrapper-1{\n      height: ").concat(this.attrs.height * 0.35, "px;\n    }\n    .bg-wrapper-in{\n      width: ").concat(this.attrs.width / 2, "px;\n      height: ").concat(this.attrs.height * 0.65, "px;\n      display:flex;\n      font-family: 'Poppins', sans-serif;\n      position: relative;\n      overflow: hidden;\n    }\n    .bg-wrapper-full-width{\n      width: ").concat(this.attrs.width, "px;\n    }\n    .bg{\n      width: ").concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      background:url(").concat(this.attrs.bgUrl, ") no-repeat;\n      background-size: cover;\n      position: absolute;\n    }\n    .bg-0{\n      left:0\n    }\n    .bg-1{\n      left:-").concat(this.attrs.width / 2, "px;\n    }\n    .bg-2{\n      top:-").concat(this.attrs.height * 0.65, "px;\n    }\n    .bg-in{\n      background:").concat(this.attrs.overlayColor, ";\n      width: ").concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n    }\n  \n  ");
    }
  }]);

  return ThreeSidesReveal;
}(MC__default['default'].API.Clip);

var ThreeSidesReveal_1 = ThreeSidesReveal;

var BgOpenerValidation = {
  width: {
    optional: false,
    type: "number"
  },
  height: {
    optional: false,
    type: "number"
  },
  bgUrl: {
    optional: false,
    type: "string"
  },
  timing: {
    optional: false,
    type: "number"
  },
  easing: {
    optional: false,
    type: "string"
  },
  exitStart: {
    optional: false,
    type: "number"
  }
};
var TwoSidesRevealValidation = {
  width: {
    optional: false,
    type: "number"
  },
  height: {
    optional: false,
    type: "number"
  },
  bgUrl: {
    optional: false,
    type: "string"
  },
  timing: {
    optional: false,
    type: "number"
  },
  easing: {
    optional: false,
    type: "string"
  }
};
var RowRevealValidation = {
  width: {
    optional: false,
    type: "number"
  },
  height: {
    optional: false,
    type: "number"
  },
  bgUrl: {
    optional: false,
    type: "string"
  },
  timing: {
    optional: false,
    type: "number"
  },
  easing: {
    optional: false,
    type: "string"
  },
  exitStart: {
    optional: false,
    type: "number"
  },
  bgOut: {
    optional: false,
    type: "boolean"
  }
};
var ColumnRevealValidation = {
  width: {
    optional: false,
    type: "number"
  },
  height: {
    optional: false,
    type: "number"
  },
  bgUrl: {
    optional: false,
    type: "string"
  },
  timing: {
    optional: false,
    type: "number"
  },
  easing: {
    optional: false,
    type: "string"
  },
  exitStart: {
    optional: false,
    type: "number"
  },
  bgOut: {
    optional: false,
    type: "boolean"
  }
};
var GridValidation = {
  width: {
    optional: false,
    type: "number"
  },
  height: {
    optional: false,
    type: "number"
  },
  color: {
    optional: false,
    type: "color"
  },
  columns: {
    optional: false,
    type: "number"
  },
  rows: {
    optional: false,
    type: "number"
  },
  timing: {
    optional: false,
    type: "number"
  }
};
var ThreeSidesRevealValidation = {
  width: {
    optional: false,
    type: "number"
  },
  height: {
    optional: false,
    type: "number"
  },
  bgUrl: {
    optional: false,
    type: "string"
  },
  timing: {
    optional: false,
    type: "number"
  },
  overlayColor: {
    optional: false,
    type: "color"
  },
  grid: {
    optional: false,
    type: "boolean"
  },
  gridTiming: {
    optional: false,
    type: "number"
  },
  gridColor: {
    optional: false,
    type: "color"
  },
  columns: {
    optional: false,
    type: "number"
  },
  rows: {
    optional: false,
    type: "number"
  }
};
var validation = {
  BgOpenerValidation: BgOpenerValidation,
  TwoSidesRevealValidation: TwoSidesRevealValidation,
  RowRevealValidation: RowRevealValidation,
  ColumnRevealValidation: ColumnRevealValidation,
  GridValidation: GridValidation,
  ThreeSidesRevealValidation: ThreeSidesRevealValidation
};

var BgOpenerValidation$1 = validation.BgOpenerValidation,
    TwoSidesRevealValidation$1 = validation.TwoSidesRevealValidation,
    RowRevealValidation$1 = validation.RowRevealValidation,
    ColumnRevealValidation$1 = validation.ColumnRevealValidation,
    GridValidation$1 = validation.GridValidation,
    ThreeSidesRevealValidation$1 = validation.ThreeSidesRevealValidation;
var src = {
  npm_name: "@kissmybutton/motorcortex-backgrounds",
  incidents: [{
    exportable: BgOpener_1,
    name: "BgOpener",
    attributesValidationRules: _objectSpread2({}, BgOpenerValidation$1)
  }, {
    exportable: TwoSidesReveal_1,
    name: "TwoSidesReveal",
    attributesValidationRules: _objectSpread2({}, TwoSidesRevealValidation$1)
  }, {
    exportable: ColumnReveal_1,
    name: "ColumnReveal",
    attributesValidationRules: _objectSpread2({}, ColumnRevealValidation$1)
  }, {
    exportable: RowReveal_1,
    name: "RowReveal",
    attributesValidationRules: _objectSpread2({}, RowRevealValidation$1)
  }, {
    exportable: ThreeSidesReveal_1,
    name: "ThreeSidesReveal",
    attributesValidationRules: _objectSpread2({}, ThreeSidesRevealValidation$1)
  }, {
    exportable: Grid_1,
    name: "Grid",
    attributesValidationRules: _objectSpread2({}, GridValidation$1)
  }]
};
var src_1 = src.npm_name;
var src_2 = src.incidents;

exports.default = src;
exports.incidents = src_2;
exports.npm_name = src_1;
