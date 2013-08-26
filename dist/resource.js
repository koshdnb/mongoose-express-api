var Resource, ResourceInflector;

ResourceInflector = require("./resource_inflector");

Resource = (function() {
  function Resource(model, options) {
    this.model = model;
    this.options = options;
    this.actions = this.options.actions;
    this.inflector = new ResourceInflector(this);
  }

  Resource.prototype.getName = function() {
    return this.model.modelName;
  };

  Resource.prototype.getInflector = function() {
    return this.inflector;
  };

  return Resource;

})();

module.exports = Resource;
