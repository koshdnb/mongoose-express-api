Responder = require "../responder"

# http://labs.omniti.com/labs/jsend
class JsendResponder extends Responder

  fail: (req, res, errors) ->
    res.send
      status: "fail"
      data: errors

  success: (req, res, data) ->
    res.send
      status: "success"
      data: data

  error:   (req, res, error) ->
    res.send
      status: "error"
      error: error

module.exports = JsendResponder