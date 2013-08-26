var Api, DefaultImplementation, Resource,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

Resource = require("./resource");

DefaultImplementation = require("./impl/default_implementation");

Api = (function() {
  function Api() {
    this._resources = {};
    this._impl = new DefaultImplementation();
  }

  Api.prototype.resource = function(model, options) {
    return this._resources[model.modelName] = new Resource(model, options);
  };

  Api.prototype.resources = function(models, options) {
    var actions, definition, name, skip, _results;
    if (options == null) {
      options = {};
    }
    skip = options.skip || [];
    actions = options.actions;
    _results = [];
    for (name in models) {
      definition = models[name];
      if (__indexOf.call(skip, name) < 0) {
        _results.push(this.resource(definition, {
          actions: actions
        }));
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  Api.prototype.mount = function(app, mountPoint) {
    var name, resource, _ref, _results;
    if (mountPoint == null) {
      mountPoint = "/";
    }
    _ref = this._resources;
    _results = [];
    for (name in _ref) {
      resource = _ref[name];
      _results.push(this._impl.mount(resource, app, mountPoint));
    }
    return _results;
  };

  Api.prototype.getImplementation = function() {
    return this._impl;
  };

  Api.prototype.setImplementation = function(impl) {
    return this._impl = impl;
  };

  return Api;

})();

module.exports = Api;
