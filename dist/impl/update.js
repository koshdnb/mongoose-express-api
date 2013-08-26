var Action, Update, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Action = require("../action");

Update = (function(_super) {
  __extends(Update, _super);

  function Update() {
    _ref = Update.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Update.prototype.create = function(model, responder) {};

  return Update;

})(Action);

module.exports = Update;
