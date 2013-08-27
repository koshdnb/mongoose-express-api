var Action,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Action = (function() {
  function Action(resource, responder) {
    this.resource = resource;
    this.responder = responder;
    this.invoke = __bind(this.invoke, this);
    this.method = "get";
    this.route = null;
    this.name = null;
  }

  Action.prototype.getName = function() {
    return this.name;
  };

  Action.prototype.getResource = function() {
    return this.resource;
  };

  Action.prototype.getMethod = function() {
    return this.method;
  };

  Action.prototype.getRoute = function() {
    return this.route || "";
  };

  Action.prototype.invoke = function(req, res) {};

  return Action;

})();

module.exports = Action;
