var CRUDLActions, Create, Delete, List, Read, Update;

Create = require("./create");

Read = require("./read");

Update = require("./update");

Delete = require("./delete");

List = require("./list");

CRUDLActions = (function() {
  function CRUDLActions() {
    this.create = new Create();
    this.read = new Read();
    this.update = new Update();
    this["delete"] = new Delete();
    this.list = new List();
  }

  return CRUDLActions;

})();

module.exports = CRUDLActions;
