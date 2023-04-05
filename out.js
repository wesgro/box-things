var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/@vanilla-extract/sprinkles/dist/createSprinkles-e5dcc3fa.cjs.prod.js
var require_createSprinkles_e5dcc3fa_cjs_prod = __commonJS({
  "node_modules/@vanilla-extract/sprinkles/dist/createSprinkles-e5dcc3fa.cjs.prod.js"(exports) {
    "use strict";
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null)
        return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object")
          return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
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
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    var createSprinkles = (composeStyles) => function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var sprinklesStyles = Object.assign({}, ...args.map((a) => a.styles));
      var sprinklesKeys = Object.keys(sprinklesStyles);
      var shorthandNames = sprinklesKeys.filter((property) => "mappings" in sprinklesStyles[property]);
      var sprinklesFn = (props) => {
        var classNames = [];
        var shorthands = {};
        var nonShorthands = _objectSpread2({}, props);
        var hasShorthands = false;
        for (var shorthand of shorthandNames) {
          var value = props[shorthand];
          if (value != null) {
            var sprinkle = sprinklesStyles[shorthand];
            hasShorthands = true;
            for (var propMapping of sprinkle.mappings) {
              shorthands[propMapping] = value;
              if (nonShorthands[propMapping] == null) {
                delete nonShorthands[propMapping];
              }
            }
          }
        }
        var finalProps = hasShorthands ? _objectSpread2(_objectSpread2({}, shorthands), nonShorthands) : props;
        var _loop = function _loop2() {
          var propValue = finalProps[prop];
          var sprinkle2 = sprinklesStyles[prop];
          try {
            if (sprinkle2.mappings) {
              return "continue";
            }
            if (typeof propValue === "string" || typeof propValue === "number") {
              if (false)
                ;
              classNames.push(sprinkle2.values[propValue].defaultClass);
            } else if (Array.isArray(propValue)) {
              for (var responsiveIndex = 0; responsiveIndex < propValue.length; responsiveIndex++) {
                var responsiveValue = propValue[responsiveIndex];
                if (responsiveValue != null) {
                  var conditionName = sprinkle2.responsiveArray[responsiveIndex];
                  if (false)
                    ;
                  classNames.push(sprinkle2.values[responsiveValue].conditions[conditionName]);
                }
              }
            } else {
              for (var _conditionName in propValue) {
                var _value = propValue[_conditionName];
                if (_value != null) {
                  if (false)
                    ;
                  classNames.push(sprinkle2.values[_value].conditions[_conditionName]);
                }
              }
            }
          } catch (e) {
            throw e;
          }
        };
        for (var prop in finalProps) {
          var _ret = _loop();
          if (_ret === "continue")
            continue;
        }
        return composeStyles(classNames.join(" "));
      };
      return Object.assign(sprinklesFn, {
        properties: new Set(sprinklesKeys)
      });
    };
    exports.createSprinkles = createSprinkles;
  }
});

// node_modules/@vanilla-extract/sprinkles/createRuntimeSprinkles/dist/vanilla-extract-sprinkles-createRuntimeSprinkles.cjs.prod.js
var require_vanilla_extract_sprinkles_createRuntimeSprinkles_cjs_prod = __commonJS({
  "node_modules/@vanilla-extract/sprinkles/createRuntimeSprinkles/dist/vanilla-extract-sprinkles-createRuntimeSprinkles.cjs.prod.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var createSprinkles$1 = require_createSprinkles_e5dcc3fa_cjs_prod();
    var composeStyles = (classList) => classList;
    var createSprinkles = function createSprinkles2() {
      return createSprinkles$1.createSprinkles(composeStyles)(...arguments);
    };
    var createAtomsFn = createSprinkles;
    exports.createAtomsFn = createAtomsFn;
    exports.createSprinkles = createSprinkles;
  }
});

// node_modules/@vanilla-extract/sprinkles/dist/createSprinkles-66f18835.cjs.dev.js
var require_createSprinkles_66f18835_cjs_dev = __commonJS({
  "node_modules/@vanilla-extract/sprinkles/dist/createSprinkles-66f18835.cjs.dev.js"(exports) {
    "use strict";
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null)
        return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object")
          return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
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
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    var createSprinkles = (composeStyles) => function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var sprinklesStyles = Object.assign({}, ...args.map((a) => a.styles));
      var sprinklesKeys = Object.keys(sprinklesStyles);
      var shorthandNames = sprinklesKeys.filter((property) => "mappings" in sprinklesStyles[property]);
      var sprinklesFn = (props) => {
        var classNames = [];
        var shorthands = {};
        var nonShorthands = _objectSpread2({}, props);
        var hasShorthands = false;
        for (var shorthand of shorthandNames) {
          var value = props[shorthand];
          if (value != null) {
            var sprinkle = sprinklesStyles[shorthand];
            hasShorthands = true;
            for (var propMapping of sprinkle.mappings) {
              shorthands[propMapping] = value;
              if (nonShorthands[propMapping] == null) {
                delete nonShorthands[propMapping];
              }
            }
          }
        }
        var finalProps = hasShorthands ? _objectSpread2(_objectSpread2({}, shorthands), nonShorthands) : props;
        var _loop = function _loop2() {
          var propValue = finalProps[prop];
          var sprinkle2 = sprinklesStyles[prop];
          try {
            if (sprinkle2.mappings) {
              return "continue";
            }
            if (typeof propValue === "string" || typeof propValue === "number") {
              if (process.env.NODE_ENV !== "production") {
                if (!sprinkle2.values[propValue].defaultClass) {
                  throw new Error();
                }
              }
              classNames.push(sprinkle2.values[propValue].defaultClass);
            } else if (Array.isArray(propValue)) {
              for (var responsiveIndex = 0; responsiveIndex < propValue.length; responsiveIndex++) {
                var responsiveValue = propValue[responsiveIndex];
                if (responsiveValue != null) {
                  var conditionName = sprinkle2.responsiveArray[responsiveIndex];
                  if (process.env.NODE_ENV !== "production") {
                    if (!sprinkle2.values[responsiveValue].conditions[conditionName]) {
                      throw new Error();
                    }
                  }
                  classNames.push(sprinkle2.values[responsiveValue].conditions[conditionName]);
                }
              }
            } else {
              for (var _conditionName in propValue) {
                var _value = propValue[_conditionName];
                if (_value != null) {
                  if (process.env.NODE_ENV !== "production") {
                    if (!sprinkle2.values[_value].conditions[_conditionName]) {
                      throw new Error();
                    }
                  }
                  classNames.push(sprinkle2.values[_value].conditions[_conditionName]);
                }
              }
            }
          } catch (e) {
            if (process.env.NODE_ENV !== "production") {
              class SprinklesError extends Error {
                constructor(message) {
                  super(message);
                  this.name = "SprinklesError";
                }
              }
              var format = (v) => typeof v === "string" ? '"'.concat(v, '"') : v;
              var invalidPropValue = (prop2, value2, possibleValues) => {
                throw new SprinklesError('"'.concat(prop2, '" has no value ').concat(format(value2), ". Possible values are ").concat(Object.keys(possibleValues).map(format).join(", ")));
              };
              if (!sprinkle2) {
                throw new SprinklesError('"'.concat(prop, '" is not a valid sprinkle'));
              }
              if (typeof propValue === "string" || typeof propValue === "number") {
                if (!(propValue in sprinkle2.values)) {
                  invalidPropValue(prop, propValue, sprinkle2.values);
                }
                if (!sprinkle2.values[propValue].defaultClass) {
                  throw new SprinklesError('"'.concat(prop, '" has no default condition. You must specify which conditions to target explicitly. Possible options are ').concat(Object.keys(sprinkle2.values[propValue].conditions).map(format).join(", ")));
                }
              }
              if (typeof propValue === "object") {
                if (!("conditions" in sprinkle2.values[Object.keys(sprinkle2.values)[0]])) {
                  throw new SprinklesError('"'.concat(prop, '" is not a conditional property'));
                }
                if (Array.isArray(propValue)) {
                  if (!("responsiveArray" in sprinkle2)) {
                    throw new SprinklesError('"'.concat(prop, '" does not support responsive arrays'));
                  }
                  var breakpointCount = sprinkle2.responsiveArray.length;
                  if (breakpointCount < propValue.length) {
                    throw new SprinklesError('"'.concat(prop, '" only supports up to ').concat(breakpointCount, " breakpoints. You passed ").concat(propValue.length));
                  }
                  for (var _responsiveValue of propValue) {
                    if (!sprinkle2.values[_responsiveValue]) {
                      invalidPropValue(prop, _responsiveValue, sprinkle2.values);
                    }
                  }
                } else {
                  for (var _conditionName2 in propValue) {
                    var _value2 = propValue[_conditionName2];
                    if (_value2 != null) {
                      if (!sprinkle2.values[_value2]) {
                        invalidPropValue(prop, _value2, sprinkle2.values);
                      }
                      if (!sprinkle2.values[_value2].conditions[_conditionName2]) {
                        throw new SprinklesError('"'.concat(prop, '" has no condition named ').concat(format(_conditionName2), ". Possible values are ").concat(Object.keys(sprinkle2.values[_value2].conditions).map(format).join(", ")));
                      }
                    }
                  }
                }
              }
            }
            throw e;
          }
        };
        for (var prop in finalProps) {
          var _ret = _loop();
          if (_ret === "continue")
            continue;
        }
        return composeStyles(classNames.join(" "));
      };
      return Object.assign(sprinklesFn, {
        properties: new Set(sprinklesKeys)
      });
    };
    exports.createSprinkles = createSprinkles;
  }
});

// node_modules/@vanilla-extract/sprinkles/createRuntimeSprinkles/dist/vanilla-extract-sprinkles-createRuntimeSprinkles.cjs.dev.js
var require_vanilla_extract_sprinkles_createRuntimeSprinkles_cjs_dev = __commonJS({
  "node_modules/@vanilla-extract/sprinkles/createRuntimeSprinkles/dist/vanilla-extract-sprinkles-createRuntimeSprinkles.cjs.dev.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var createSprinkles$1 = require_createSprinkles_66f18835_cjs_dev();
    var composeStyles = (classList) => classList;
    var createSprinkles = function createSprinkles2() {
      return createSprinkles$1.createSprinkles(composeStyles)(...arguments);
    };
    var createAtomsFn = createSprinkles;
    exports.createAtomsFn = createAtomsFn;
    exports.createSprinkles = createSprinkles;
  }
});

// node_modules/@vanilla-extract/sprinkles/createRuntimeSprinkles/dist/vanilla-extract-sprinkles-createRuntimeSprinkles.cjs.js
var require_vanilla_extract_sprinkles_createRuntimeSprinkles_cjs = __commonJS({
  "node_modules/@vanilla-extract/sprinkles/createRuntimeSprinkles/dist/vanilla-extract-sprinkles-createRuntimeSprinkles.cjs.js"(exports, module) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module.exports = require_vanilla_extract_sprinkles_createRuntimeSprinkles_cjs_prod();
    } else {
      module.exports = require_vanilla_extract_sprinkles_createRuntimeSprinkles_cjs_dev();
    }
  }
});

// src/main.tsx
import * as ReactDOMClient from "react-dom/client";

// src/atoms.css.ts
var import_createRuntimeSprinkles = __toESM(require_vanilla_extract_sprinkles_createRuntimeSprinkles_cjs());
var atoms = (0, import_createRuntimeSprinkles.createSprinkles)({ conditions: { defaultCondition: "mobile", conditionNames: ["mobile", "tablet", "desktop"], responsiveArray: void 0 }, styles: { padding: { mappings: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"] }, paddingX: { mappings: ["paddingLeft", "paddingRight"] }, paddingY: { mappings: ["paddingTop", "paddingBottom"] }, placeItems: { mappings: ["justifyContent", "alignItems"] }, display: { values: { none: { conditions: { mobile: "atoms_display_none_mobile__1v9t6x30", tablet: "atoms_display_none_tablet__1v9t6x31", desktop: "atoms_display_none_desktop__1v9t6x32" }, defaultClass: "atoms_display_none_mobile__1v9t6x30" }, flex: { conditions: { mobile: "atoms_display_flex_mobile__1v9t6x33", tablet: "atoms_display_flex_tablet__1v9t6x34", desktop: "atoms_display_flex_desktop__1v9t6x35" }, defaultClass: "atoms_display_flex_mobile__1v9t6x33" }, block: { conditions: { mobile: "atoms_display_block_mobile__1v9t6x36", tablet: "atoms_display_block_tablet__1v9t6x37", desktop: "atoms_display_block_desktop__1v9t6x38" }, defaultClass: "atoms_display_block_mobile__1v9t6x36" }, inline: { conditions: { mobile: "atoms_display_inline_mobile__1v9t6x39", tablet: "atoms_display_inline_tablet__1v9t6x3a", desktop: "atoms_display_inline_desktop__1v9t6x3b" }, defaultClass: "atoms_display_inline_mobile__1v9t6x39" } } }, flexDirection: { values: { row: { conditions: { mobile: "atoms_flexDirection_row_mobile__1v9t6x3c", tablet: "atoms_flexDirection_row_tablet__1v9t6x3d", desktop: "atoms_flexDirection_row_desktop__1v9t6x3e" }, defaultClass: "atoms_flexDirection_row_mobile__1v9t6x3c" }, column: { conditions: { mobile: "atoms_flexDirection_column_mobile__1v9t6x3f", tablet: "atoms_flexDirection_column_tablet__1v9t6x3g", desktop: "atoms_flexDirection_column_desktop__1v9t6x3h" }, defaultClass: "atoms_flexDirection_column_mobile__1v9t6x3f" } } }, justifyContent: { values: { stretch: { conditions: { mobile: "atoms_justifyContent_stretch_mobile__1v9t6x3i", tablet: "atoms_justifyContent_stretch_tablet__1v9t6x3j", desktop: "atoms_justifyContent_stretch_desktop__1v9t6x3k" }, defaultClass: "atoms_justifyContent_stretch_mobile__1v9t6x3i" }, "flex-start": { conditions: { mobile: "atoms_justifyContent_flex-start_mobile__1v9t6x3l", tablet: "atoms_justifyContent_flex-start_tablet__1v9t6x3m", desktop: "atoms_justifyContent_flex-start_desktop__1v9t6x3n" }, defaultClass: "atoms_justifyContent_flex-start_mobile__1v9t6x3l" }, center: { conditions: { mobile: "atoms_justifyContent_center_mobile__1v9t6x3o", tablet: "atoms_justifyContent_center_tablet__1v9t6x3p", desktop: "atoms_justifyContent_center_desktop__1v9t6x3q" }, defaultClass: "atoms_justifyContent_center_mobile__1v9t6x3o" }, "flex-end": { conditions: { mobile: "atoms_justifyContent_flex-end_mobile__1v9t6x3r", tablet: "atoms_justifyContent_flex-end_tablet__1v9t6x3s", desktop: "atoms_justifyContent_flex-end_desktop__1v9t6x3t" }, defaultClass: "atoms_justifyContent_flex-end_mobile__1v9t6x3r" }, "space-around": { conditions: { mobile: "atoms_justifyContent_space-around_mobile__1v9t6x3u", tablet: "atoms_justifyContent_space-around_tablet__1v9t6x3v", desktop: "atoms_justifyContent_space-around_desktop__1v9t6x3w" }, defaultClass: "atoms_justifyContent_space-around_mobile__1v9t6x3u" }, "space-between": { conditions: { mobile: "atoms_justifyContent_space-between_mobile__1v9t6x3x", tablet: "atoms_justifyContent_space-between_tablet__1v9t6x3y", desktop: "atoms_justifyContent_space-between_desktop__1v9t6x3z" }, defaultClass: "atoms_justifyContent_space-between_mobile__1v9t6x3x" } } }, alignItems: { values: { stretch: { conditions: { mobile: "atoms_alignItems_stretch_mobile__1v9t6x310", tablet: "atoms_alignItems_stretch_tablet__1v9t6x311", desktop: "atoms_alignItems_stretch_desktop__1v9t6x312" }, defaultClass: "atoms_alignItems_stretch_mobile__1v9t6x310" }, "flex-start": { conditions: { mobile: "atoms_alignItems_flex-start_mobile__1v9t6x313", tablet: "atoms_alignItems_flex-start_tablet__1v9t6x314", desktop: "atoms_alignItems_flex-start_desktop__1v9t6x315" }, defaultClass: "atoms_alignItems_flex-start_mobile__1v9t6x313" }, center: { conditions: { mobile: "atoms_alignItems_center_mobile__1v9t6x316", tablet: "atoms_alignItems_center_tablet__1v9t6x317", desktop: "atoms_alignItems_center_desktop__1v9t6x318" }, defaultClass: "atoms_alignItems_center_mobile__1v9t6x316" }, "flex-end": { conditions: { mobile: "atoms_alignItems_flex-end_mobile__1v9t6x319", tablet: "atoms_alignItems_flex-end_tablet__1v9t6x31a", desktop: "atoms_alignItems_flex-end_desktop__1v9t6x31b" }, defaultClass: "atoms_alignItems_flex-end_mobile__1v9t6x319" } } }, paddingTop: { values: { none: { conditions: { mobile: "atoms_paddingTop_none_mobile__1v9t6x31c", tablet: "atoms_paddingTop_none_tablet__1v9t6x31d", desktop: "atoms_paddingTop_none_desktop__1v9t6x31e" }, defaultClass: "atoms_paddingTop_none_mobile__1v9t6x31c" }, small: { conditions: { mobile: "atoms_paddingTop_small_mobile__1v9t6x31f", tablet: "atoms_paddingTop_small_tablet__1v9t6x31g", desktop: "atoms_paddingTop_small_desktop__1v9t6x31h" }, defaultClass: "atoms_paddingTop_small_mobile__1v9t6x31f" }, medium: { conditions: { mobile: "atoms_paddingTop_medium_mobile__1v9t6x31i", tablet: "atoms_paddingTop_medium_tablet__1v9t6x31j", desktop: "atoms_paddingTop_medium_desktop__1v9t6x31k" }, defaultClass: "atoms_paddingTop_medium_mobile__1v9t6x31i" }, large: { conditions: { mobile: "atoms_paddingTop_large_mobile__1v9t6x31l", tablet: "atoms_paddingTop_large_tablet__1v9t6x31m", desktop: "atoms_paddingTop_large_desktop__1v9t6x31n" }, defaultClass: "atoms_paddingTop_large_mobile__1v9t6x31l" } } }, paddingBottom: { values: { none: { conditions: { mobile: "atoms_paddingBottom_none_mobile__1v9t6x31o", tablet: "atoms_paddingBottom_none_tablet__1v9t6x31p", desktop: "atoms_paddingBottom_none_desktop__1v9t6x31q" }, defaultClass: "atoms_paddingBottom_none_mobile__1v9t6x31o" }, small: { conditions: { mobile: "atoms_paddingBottom_small_mobile__1v9t6x31r", tablet: "atoms_paddingBottom_small_tablet__1v9t6x31s", desktop: "atoms_paddingBottom_small_desktop__1v9t6x31t" }, defaultClass: "atoms_paddingBottom_small_mobile__1v9t6x31r" }, medium: { conditions: { mobile: "atoms_paddingBottom_medium_mobile__1v9t6x31u", tablet: "atoms_paddingBottom_medium_tablet__1v9t6x31v", desktop: "atoms_paddingBottom_medium_desktop__1v9t6x31w" }, defaultClass: "atoms_paddingBottom_medium_mobile__1v9t6x31u" }, large: { conditions: { mobile: "atoms_paddingBottom_large_mobile__1v9t6x31x", tablet: "atoms_paddingBottom_large_tablet__1v9t6x31y", desktop: "atoms_paddingBottom_large_desktop__1v9t6x31z" }, defaultClass: "atoms_paddingBottom_large_mobile__1v9t6x31x" } } }, paddingLeft: { values: { none: { conditions: { mobile: "atoms_paddingLeft_none_mobile__1v9t6x320", tablet: "atoms_paddingLeft_none_tablet__1v9t6x321", desktop: "atoms_paddingLeft_none_desktop__1v9t6x322" }, defaultClass: "atoms_paddingLeft_none_mobile__1v9t6x320" }, small: { conditions: { mobile: "atoms_paddingLeft_small_mobile__1v9t6x323", tablet: "atoms_paddingLeft_small_tablet__1v9t6x324", desktop: "atoms_paddingLeft_small_desktop__1v9t6x325" }, defaultClass: "atoms_paddingLeft_small_mobile__1v9t6x323" }, medium: { conditions: { mobile: "atoms_paddingLeft_medium_mobile__1v9t6x326", tablet: "atoms_paddingLeft_medium_tablet__1v9t6x327", desktop: "atoms_paddingLeft_medium_desktop__1v9t6x328" }, defaultClass: "atoms_paddingLeft_medium_mobile__1v9t6x326" }, large: { conditions: { mobile: "atoms_paddingLeft_large_mobile__1v9t6x329", tablet: "atoms_paddingLeft_large_tablet__1v9t6x32a", desktop: "atoms_paddingLeft_large_desktop__1v9t6x32b" }, defaultClass: "atoms_paddingLeft_large_mobile__1v9t6x329" } } }, paddingRight: { values: { none: { conditions: { mobile: "atoms_paddingRight_none_mobile__1v9t6x32c", tablet: "atoms_paddingRight_none_tablet__1v9t6x32d", desktop: "atoms_paddingRight_none_desktop__1v9t6x32e" }, defaultClass: "atoms_paddingRight_none_mobile__1v9t6x32c" }, small: { conditions: { mobile: "atoms_paddingRight_small_mobile__1v9t6x32f", tablet: "atoms_paddingRight_small_tablet__1v9t6x32g", desktop: "atoms_paddingRight_small_desktop__1v9t6x32h" }, defaultClass: "atoms_paddingRight_small_mobile__1v9t6x32f" }, medium: { conditions: { mobile: "atoms_paddingRight_medium_mobile__1v9t6x32i", tablet: "atoms_paddingRight_medium_tablet__1v9t6x32j", desktop: "atoms_paddingRight_medium_desktop__1v9t6x32k" }, defaultClass: "atoms_paddingRight_medium_mobile__1v9t6x32i" }, large: { conditions: { mobile: "atoms_paddingRight_large_mobile__1v9t6x32l", tablet: "atoms_paddingRight_large_tablet__1v9t6x32m", desktop: "atoms_paddingRight_large_desktop__1v9t6x32n" }, defaultClass: "atoms_paddingRight_large_mobile__1v9t6x32l" } } } } }, { conditions: { defaultCondition: false, conditionNames: ["lightMode", "darkMode"], responsiveArray: void 0 }, styles: { color: { values: { blue50: { conditions: { lightMode: "atoms_color_blue50_lightMode__1v9t6x32o", darkMode: "atoms_color_blue50_darkMode__1v9t6x32p" } }, blue100: { conditions: { lightMode: "atoms_color_blue100_lightMode__1v9t6x32q", darkMode: "atoms_color_blue100_darkMode__1v9t6x32r" } }, blue200: { conditions: { lightMode: "atoms_color_blue200_lightMode__1v9t6x32s", darkMode: "atoms_color_blue200_darkMode__1v9t6x32t" } } } }, background: { values: { blue50: { conditions: { lightMode: "atoms_background_blue50_lightMode__1v9t6x32u", darkMode: "atoms_background_blue50_darkMode__1v9t6x32v" } }, blue100: { conditions: { lightMode: "atoms_background_blue100_lightMode__1v9t6x32w", darkMode: "atoms_background_blue100_darkMode__1v9t6x32x" } }, blue200: { conditions: { lightMode: "atoms_background_blue200_lightMode__1v9t6x32y", darkMode: "atoms_background_blue200_darkMode__1v9t6x32z" } } } } } });

// src/Box.tsx
import { jsx } from "react/jsx-runtime";
var container = atoms({
  display: "flex",
  paddingX: "small",
  flexDirection: {
    mobile: "column",
    desktop: "row"
  },
  background: {
    lightMode: "blue50",
    darkMode: "blue100"
  }
});
var Box = ({
  as,
  children,
  ...props
}) => {
  const className = atoms(props);
  const Component = as || "div";
  return /* @__PURE__ */ jsx(Component, { className, children });
};

// src/App.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var App = () => {
  return /* @__PURE__ */ jsx2(Box, { display: "flex", color: "$core10", padding: { "small": "$1000" }, children: "Hello" });
};

// src/main.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var container2 = document.getElementById("app");
var root = ReactDOMClient.hydrateRoot(container2, /* @__PURE__ */ jsx3(App, {}));
