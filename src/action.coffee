class Action
  constructor: (@resource, @responder) ->
    @method = "get"
    @route = null
    @name = null

  getName: ->
    @name

  getResource: ->
    @resource

  getMethod: ->
    @method

  getRoute: ->
    @route or ""

  invoke: (req, res) =>

module.exports = Action