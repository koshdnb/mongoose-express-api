var Action, Create, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Action = require("../action");

Create = (function(_super) {
  __extends(Create, _super);

  function Create() {
    _ref = Create.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Create.prototype.create = function(model, responder) {};

  return Create;

})(Action);

module.exports = Create;
