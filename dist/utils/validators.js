var required = function required() {
  return function (v) {
    return !!v;
  };
};

var email = function email() {
  return function (v) {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
  };
};

var minlen = function minlen(compareTo) {
  return function (v) {
    return v && v.length >= compareTo;
  };
};

var equal = function equal(compareTo) {
  return function (v) {
    return v && v === compareTo;
  };
};
var validators = {
  required: required,
  email: email,
  minlen: minlen,
  equal: equal
};

export default validators;
export { required, email, minlen, equal };
//# sourceMappingURL=validators.js.map
