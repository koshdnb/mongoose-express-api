var Action, Delete, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Action = require("../action");

Delete = (function(_super) {
  __extends(Delete, _super);

  function Delete() {
    _ref = Delete.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Delete.prototype.create = function(model, responder) {};

  return Delete;

})(Action);

module.exports = Delete;
