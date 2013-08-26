Action = require "../../action"

class List extends Action

  constructor: (@resource, @responder) ->
    @route = "/"
    super

  invoke: (req, res) =>
    @resource.model.apiQuery(req.query).exec (err, objects) ->
      if err
        @responder.fail(req, res, {errors: err})
      else
        data = {}
        data[@resource.inflector.collection()] = objects
        @responder.success(req, res, data)

module.exports = List