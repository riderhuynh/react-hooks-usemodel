import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import _ from 'lodash';
import { sprintf } from 'sprintf-js';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
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

function isNativeReflectConstruct() {
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

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var ReactUseModelContext = createContext(null);

var useData = (function (subscribed) {
  var _useContext = useContext(ReactUseModelContext),
      dataSetter = _useContext.dataSetter,
      data = _useContext.data,
      setData = _useContext.setData;

  var change = false;

  var subscribedData = _.mapValues(subscribed, function (v, k) {
    if (data[k] !== undefined || data[k] === v) return data[k];
    change = true;
    return v;
  });

  if (change) {
    setData(_objectSpread2({}, data, {}, subscribedData));
  }

  return [subscribedData, dataSetter];
});

var subscribe = (function (subscribed) {
  return function (WrappedComponent) {
    return function (props) {
      var _useData = useData(subscribed),
          _useData2 = _slicedToArray(_useData, 2),
          data = _useData2[0],
          dataSetter = _useData2[1];

      return useMemo(function () {
        return React.createElement(WrappedComponent, _extends({
          data: data,
          dataSetter: dataSetter
        }, props));
      }, [data]);
    };
  };
});

var getFilterFunction = function getFilterFunction(filter) {
  return typeof filter === 'function' ? filter : function (item) {
    return Object.keys(filter).every(function (k) {
      return item[k] !== undefined && filter[k] === item[k];
    });
  };
};

var DataProvider = (function (_ref) {
  var data = _ref.data,
      setData = _ref.setData,
      children = _ref.children;

  var _useState = useState(data),
      _useState2 = _slicedToArray(_useState, 2),
      forceUpdate = _useState2[1];

  var put = function put(name, value) {
    forceUpdate(_objectSpread2({}, data, _defineProperty({}, name, value)));
  };

  var dataSetter = {
    put: put,
    add: function add(name, value) {
      var d = data[name];

      if (!Array.isArray(d)) {
        put(name, value);
      } else {
        d.push(value);
        put(name, d);
      }
    },
    remove: function remove(name, filter) {
      var forced = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (!filter && !forced) {
        throw new Error('Filter is required for remove data. Unless you pass force = true');
      }

      var d = data[name];

      if (!Array.isArray(d) || forced) {
        delete d[name];
        put(name, d);
      } else {
        var filterFn = getFilterFunction(filter);
        d = d.filter(filterFn);
        put(name, d);
      }
    },
    update: function update(name, filter, value) {
      if (!filter) throw new Error('Filter is required for update data');
      var d = data[name];

      if (!Array.isArray(d) || _typeof(value) !== 'object') {
        put(name, value);
      } else {
        var filterFn = getFilterFunction(filter);
        d = d.filter(filterFn);
        d.map(function (item) {
          return _objectSpread2({}, item, {}, value);
        });
        put(name, d);
      }
    }
  };
  return React.createElement(ReactUseModelContext.Provider, {
    value: {
      data: data,
      dataSetter: dataSetter,
      setData: setData
    }
  }, children);
});

var withData = (function (initialData) {
  return function (App) {
    return function (props) {
      var _useState = useState(initialData || {}),
          _useState2 = _slicedToArray(_useState, 2),
          data = _useState2[0],
          setData = _useState2[1];

      return React.createElement(DataProvider, {
        data: data,
        setData: setData
      }, React.createElement(App, props));
    };
  };
});

var hasOwnProperty = function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this._events = {};
  }

  _createClass(EventEmitter, [{
    key: "initEvents",
    value: function initEvents(events) {
      var _this = this;

      events.forEach(function (e) {
        _this._events[e] = [];
      });
    }
  }, {
    key: "on",
    value: function on(event, handler) {
      if (!hasOwnProperty(this._events, event)) throw new Error('Event is not implemented');

      this._events[event].push(handler);
    }
  }, {
    key: "off",
    value: function off(event, handler) {
      if (!hasOwnProperty(this._events, event)) throw new Error('Event is not implemented');
      this._events[event] = this._events[event].filter(function (h) {
        return h !== handler;
      });
    }
  }, {
    key: "trigger",
    value: function trigger(event) {
      var _this2 = this;

      for (var _len = arguments.length, payload = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        payload[_key - 1] = arguments[_key];
      }

      if (!hasOwnProperty(this._events, event)) throw new Error('Event is not implemented');

      this._events[event].forEach(function (handler) {
        if (typeof handler === 'function') handler.call.apply(handler, [_this2].concat(payload));
      });
    }
  }]);

  return EventEmitter;
}();

var ValidationError =
/*#__PURE__*/
function (_Error) {
  _inherits(ValidationError, _Error);

  function ValidationError(message, field, validator) {
    var _this;

    _classCallCheck(this, ValidationError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ValidationError).call(this, message));
    _this.name = 'ValidationError';
    _this.field = field;
    _this.validator = validator;
    return _this;
  }

  return ValidationError;
}(_wrapNativeSuper(Error));

/* Model's field's validation utilities */

function createValidator(_ref) {
  var _this = this;

  var test = _ref.test,
      errorMessage = _ref.errorMessage;
  return function (value) {
    if (!test(value, _this._model)) throw new ValidationError(sprintf(errorMessage, _objectSpread2({}, _this)), _this, test);
    return true;
  };
}

function combineValidators(validators, value) {
  var _this2 = this;

  var mappedValidators = validators.map(function (validator) {
    return createValidator.call(_this2, validator);
  });

  try {
    mappedValidators.forEach(function (v) {
      return v.call(_this2, value);
    });
    return true;
  } catch (e) {
    return e;
  }
}

/**
 * Model's field
 * @property {function[]} _validators List of validation functions
 * @property {ValidationError} error Error throw after recent failed validation. Null if no error
 * @property {bool} validated Whether the field is validated or not, result can be error or success
 * @property {string} name Field name
 * @property {mixed} value Field value, depends on implementation of field input component
 */

var Field =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Field, _EventEmitter);

  _createClass(Field, [{
    key: "value",
    get: function get() {
      return this._value || '';
    },
    set: function set(value) {
      this.setValue(value);
    }
  }, {
    key: "isValid",
    get: function get() {
      return !this.error;
    }
  }]);

  function Field(model, _ref) {
    var _this;

    var validators = _ref.validators,
        sideEffects = _ref.sideEffects,
        fieldProps = _objectWithoutProperties(_ref, ["validators", "sideEffects"]);

    _classCallCheck(this, Field);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Field).call(this));

    _this.initEvents(['validated', 'change']);

    _this.validated = !validators;
    Object.assign(_assertThisInitialized(_this), fieldProps);
    _this._validators = validators;
    _this._sideEffects = sideEffects;
    _this._model = model;
    return _this;
  }
  /**
   * Set validation status and return validated result
   * @param {*} value
   */


  _createClass(Field, [{
    key: "validate",
    value: function validate(value) {
      var validated = combineValidators.call(this, this._validators, value !== undefined ? value : this.value);
      this.validated = true;

      if (validated === true) {
        this.error = null;
      } else {
        this.error = validated;
      }

      this.trigger('validated', this.error);
      return !this.error;
    }
    /**
     * Set value without validating
     * @param {*} value
     */

  }, {
    key: "initValue",
    value: function initValue(value) {
      this.error = null;
      this.validated = !this._validators;
      this._value = value;
    }
  }, {
    key: "clearValue",
    value: function clearValue() {
      this.initValue();
    }
  }, {
    key: "extractFromEvent",
    value: function extractFromEvent(e) {
      var value = e.target.value;
      this.setValue(value);
    }
    /**
     * Set value after validate, trigger onChange event after field set
     * @param {*} value
     */

  }, {
    key: "setValue",
    value: function setValue(value) {
      var conflictCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      if (conflictCheck.includes(this.name)) return;
      if (this.value === value) return;
      this.initValue(value);
      this.validate(value);
      conflictCheck.push(this.name);

      if (typeof this._sideEffects === 'function') {
        this._sideEffects(this._model, this, conflictCheck);
      }

      this.trigger('change', this);
    }
  }]);

  return Field;
}(EventEmitter);

function createField(model, modelField) {
  if (!modelField.name) throw new Error('Models name is required');
  var type = modelField.type;
  var XField = type instanceof Field ? type : Field;
  return new XField(model, modelField);
}

function defineFieldsAsProperties() {
  Object.defineProperties(this, _.mapValues(this._fields, function (field) {
    return {
      enumerable: true,
      configurable: true,
      get: function get() {
        return field;
      }
    };
  }));
}

function initFields(defaultData) {
  var _this = this;

  this._fields = _.mapValues(this._model, function (modelField, name) {
    var value = _.get(defaultData, name, undefined);

    var field = createField(_this, _objectSpread2({}, modelField, {
      name: name
    }));
    field.on('change', function (f) {
      _this.trigger('change', _this, f);
    });
    if (value === undefined) return field;
    field.initValue(value);
    return field;
  });
  defineFieldsAsProperties.call(this);
}

var Model =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Model, _EventEmitter);

  _createClass(Model, [{
    key: "data",
    get: function get() {
      return _.mapValues(this._fields, function (f) {
        return f.value;
      });
    },
    set: function set(value) {
      this.setData(value);
    }
  }, {
    key: "isValid",
    get: function get() {
      var _this2 = this;

      return Object.keys(this._fields).every(function (name) {
        return _this2._fields[name].validated && _this2._fields[name].isValid;
      });
    }
  }, {
    key: "fields",
    get: function get() {
      return this._fields;
    }
  }, {
    key: "errors",
    get: function get() {
      var _this3 = this;

      if (!Object.keys(this._fields).every(function (name) {
        return _this3._fields[name].validated;
      })) {
        this.validate();
      }

      var errors = _.mapValues(_.pickBy(this._fields, function (field) {
        return !!field.error;
      }), function (field) {
        return field.error;
      });

      return Object.keys(errors).length ? errors : null;
    }
  }]);

  function Model(model, defaultData) {
    var _this;

    _classCallCheck(this, Model);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Model).call(this));

    _this.initEvents(['change']);

    _this._model = model(_assertThisInitialized(_this));
    initFields.call(_assertThisInitialized(_this), defaultData);
    if (!_this._fields) throw new Error('Model is empty');
    return _this;
  }

  _createClass(Model, [{
    key: "extractFromEvent",
    value: function extractFromEvent(e) {
      var name = e.target.name;
      if (!this._fields[name]) return;

      this._fields[name].extractFromEvent(e);
    }
  }, {
    key: "setData",
    value: function setData(data) {
      var _this4 = this;

      if (!data || _typeof(data) !== 'object') return;
      var changed = false;
      Object.keys(data).forEach(function (name) {
        var value = data[name];
        var field = _this4._fields[name];
        if (value === undefined || !field || field.value === value) return;

        _this4._fields[name].setValue(value);

        changed = true;
      });
      if (changed) this.trigger('change', this);
    }
  }, {
    key: "clearData",
    value: function clearData() {
      var _this5 = this;

      var changed = false;
      Object.keys(this._fields).forEach(function (name) {
        var field = _this5._fields[name];

        if (field.value !== undefined) {
          _this5._fields[name].clearValue();

          changed = true;
        }
      });
      if (changed) this.trigger('change', this);
    }
  }, {
    key: "validate",
    value: function validate() {
      _.mapValues(this._fields, function (f) {
        return f.validate();
      });

      this.trigger('change', this);
      return this.isValid;
    }
  }]);

  return Model;
}(EventEmitter);

var useModel = (function (model, defaultData) {
  var _model = new Model(model, defaultData);

  var _useState = useState(_model),
      _useState2 = _slicedToArray(_useState, 2),
      formState = _useState2[0],
      setFormState = _useState2[1];

  var deps = _.values(formState.data);

  useEffect(function () {
    var change = function change(newModel) {
      var newFormState = Object.assign(Object.create(Object.getPrototypeOf(newModel)), newModel);
      setFormState(newFormState);
    };

    formState.on('change', change);
    return function () {
      formState.off('change', change);
    };
  }, deps);
  return formState;
});

export { useData, subscribe, useModel, Field, withData };
//# sourceMappingURL=main.js.map
), newModel);
      setFormState(newFormState);
    };

    formState.on('change', change);
    return function () {
      formState.off('change', change);
    };
  }, deps);
  return formState;
});

exports.useData = useData;
exports.subscribe = subscribe;
exports.useModel = useModel;
exports.Field = Field;
exports.withData = withData;
//# sourceMappingURL=main.js.map
