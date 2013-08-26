ResourceInflector = require "./resource_inflector"

class Resource
  constructor: (@model, @options) ->
    @actions    = @options.actions
    @inflector = new ResourceInflector(@)

  getName: ->
    @model.modelName

  getInflector: ->
    @inflector

module.exports = Resource