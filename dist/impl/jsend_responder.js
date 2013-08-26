var JsendResponder, Responder, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Responder = require("../responder");

JsendResponder = (function(_super) {
  __extends(JsendResponder, _super);

  function JsendResponder() {
    _ref = JsendResponder.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  JsendResponder.prototype.invalid = function(req, res, data, errors) {};

  JsendResponder.prototype.success = function(req, res, data, errors) {};

  JsendResponder.prototype.error = function(req, res, data, errors) {};

  return JsendResponder;

})(Responder);

module.exports = JsendResponder;
