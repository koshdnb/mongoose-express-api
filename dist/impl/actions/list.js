var Action, List,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Action = require("../../action");

List = (function(_super) {
  __extends(List, _super);

  function List(resource, responder) {
    this.resource = resource;
    this.responder = responder;
    this.invoke = __bind(this.invoke, this);
    List.__super__.constructor.apply(this, arguments);
    this.name = "list";
  }

  List.prototype.invoke = function(req, res) {
    var _this = this;
    return this.resource.model.apiQuery(req.query).exec(function(err, objects) {
      var data;
      if (err) {
        return _this.responder.fail(req, res, {
          errors: err
        });
      } else {
        data = {};
        data[_this.resource.inflector.collection()] = objects;
        return _this.responder.success(req, res, data);
      }
    });
  };

  return List;

})(Action);

module.exports = List;
