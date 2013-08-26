var ResourceInflector, inflection;

inflection = require("inflection");

ResourceInflector = (function() {
  function ResourceInflector(resource) {
    this.resource = resource;
  }

  ResourceInflector.prototype.singularize = function() {
    return inflection.singularize(this.resource.getName());
  };

  ResourceInflector.prototype.pluralize = function() {
    return inflection.pluralize(this.resource.getName());
  };

  ResourceInflector.prototype.classify = function() {
    return inflection.classify(this.resource.getName());
  };

  ResourceInflector.prototype.parameterize = function() {
    return inflection.dasherize(inflection.tableize(this.resource.getName()));
  };

  ResourceInflector.prototype.dasherize = function() {
    return inflection.dasherize(this.resource.getName());
  };

  ResourceInflector.prototype.underscore = function() {
    return inflection.underscore(this.resource.getName());
  };

  ResourceInflector.prototype.tableize = function() {
    return inflection.tableize(this.resource.getName());
  };

  return ResourceInflector;

})();

module.exports = ResourceInflector;
