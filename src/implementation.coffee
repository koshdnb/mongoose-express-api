Path = require("path")
_ = require("lodash")

class Implementation
  constructor: ->
    @actions = {}
    @responder = null
    @_use = []
    @mapper = null

  getActions: ->
    @actions

  putAction: (name, action) ->
    @actions[name] = action

  removeAction: (name) ->
    deleted = @actions[name]
    delete @actions[name]
    deleted

  setResponder: (responder) ->
    @responder = responder

  getResponder: (responder) ->
    @responder

  use: (middlewares, condition) ->
    @_use.push
      middlewares: middlewares
      condition: condition

  middlewaresFor = (actionName, resourceName) ->
    middlewares = []
    for use in @_use
      if typeof use.condition isnt function or use.condition(actionName, resourceName)
        middlewares = _.union(middlewares, use.middlewares) 

    middlewares

  mount: (resource, app, mountPoint =  "/") ->
    for name, ActionClass of @actions
      if not resource.actions or name in resource.actions
        action = new ActionClass(resource, @responder)
        middlewares = middlewaresFor(name, resource.getName())
        route = Path.join(mountPoint, resource.inflector.parameterize(), action.getRoute())

        # eg. app.get("/resource/:id", m1, m2, m3 .., invoke)
        args = [route].concat(middlewares).push(action.invoke)
        app[action.getMethod()].apply(app, args)

module.exports = Implementation