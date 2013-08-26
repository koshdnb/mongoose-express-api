var Action, Read,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Action = require("../action");

Read = (function(_super) {
  __extends(Read, _super);

  function Read(resource, responder) {
    this.resource = resource;
    this.responder = responder;
    this.invoke = __bind(this.invoke, this);
    this.route = "/:id";
    Read.__super__.constructor.apply(this, arguments);
  }

  Read.prototype.invoke = function(req, res) {
    var object;
    object = this.resource.model.findById(req.params.id, function() {
      return this.responder.success(req, res, object);
    });
    return instance;
  };

  return Read;

})(Action);

module.exports = Read;
