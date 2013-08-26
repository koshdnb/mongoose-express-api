var Implementation, Path,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

Path = require("path");

Implementation = (function() {
  function Implementation() {
    this.actions = {};
    this.responder = null;
    this.middlewares = [];
    this.mapper = null;
  }

  Implementation.prototype.getActions = function() {
    return this.actions;
  };

  Implementation.prototype.putAction = function(name, action) {
    return this.actions[name] = action;
  };

  Implementation.prototype.removeAction = function(name) {
    var deleted;
    deleted = this.actions[name];
    delete this.actions[name];
    return deleted;
  };

  Implementation.prototype.setResponder = function(responder) {
    return this.responder = responder;
  };

  Implementation.prototype.getResponder = function(responder) {
    return this.responder;
  };

  Implementation.prototype.use = function(middlewares, condition) {};

  Implementation.prototype.mount = function(resource, app, mountPoint) {
    var ActionClass, action, args, middlewares, name, route, _ref, _results;
    if (mountPoint == null) {
      mountPoint = "/";
    }
    _ref = this.actions;
    _results = [];
    for (name in _ref) {
      ActionClass = _ref[name];
      if (!resource.actions || __indexOf.call(resource.actions, name) >= 0) {
        action = new ActionClass(resource, this.responder);
        middlewares = [];
        route = Path.join(mountPoint, resource.inflector.parameterize(), action.getRoute());
        args = [route].concat(middlewares).push(action.invoke);
        _results.push(app[action.getMethod()].apply(app, args));
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  return Implementation;

})();

module.exports = Implementation;
