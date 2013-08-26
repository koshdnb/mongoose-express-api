Resource = require("./resource")
DefaultImplementation = require("./impl/default_implementation")

class Api
  constructor: () ->
    @_resources = {}
    @_impl = new DefaultImplementation()

  resource: (model, options) ->
    @_resources[model.modelName] = new Resource(model, options)

  resources: (models, options = {}) ->
    skip = options.skip or []
    actions = options.actions

    for name, definition of models
      unless name in skip
        @resource(definition, {actions: actions})
  
  mount: (app, mountPoint = "/") ->
    for name, resource of @_resources
       @_impl.mount(resource, app, mountPoint)

  getImplementation: () ->
    @_impl
  
  setImplementation: (impl) ->
    @_impl = impl

module.exports = Api
      