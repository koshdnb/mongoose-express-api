CRUDLActions  = require "./crudl_actions"
JsendResponder = require "./jsend_responder"
Implementation = require "../implementation"

class DefaultImplementation extends Implementation
  constructor: -> 
    @actions = new CRUDLActions()
    @responder = new JsendResponder()

module.exports = DefaultImplementation
