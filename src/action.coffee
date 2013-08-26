class Action
  constructor: (@resource, @responder) ->
    @method = "get"
    @route = null

  getMethod: ->
    @method

  getRoute: ->
    @route or ""

  invoke: (req, res) =>

module.exports = Action