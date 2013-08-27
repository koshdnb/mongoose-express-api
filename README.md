# Mongoose Express Api

## Flexible automatic API generation for Moongose and Express

## Installation

```
npm install mongoose-express-api
```

or specify it as a dependency in `package.json`

```
"dependencies": {
  "mongoose-express-api": "*"
}
```

and then run `npm install` in your project root.

## Examples

### Basic usage

``` js
MongooseExpressApi = require("mongoose-express-api");

api = new MongooseExpressApi();
api.resources(mongoose.models);

api.mount(app, "/api");
```

### Filtering models

``` js
api.resources(mongoose.models, { skip: ["Admin"] })
```
  
### Specifying allowed actions

``` js
api.resources(mongoose.models, {actions: ["read", "list"]})
```

### Adding a single model

``` js
api.resource(myModel)
```

### Adding a single model filtering actions

``` js
api.resource(myModel, {actions: ["read", "list"]})
```

### Extending implementation

``` js
impl = api.getImplementation();
impl.setResponder( myResponder );
impl.addAction( "search", searchAction );
```

### Replacing Implementation

``` js
impl = api.setImplementation( myImpl );
```
 
### Securing api and using middlewares

``` js
impl.use(myMiddleware);

impl.use(authMiddleware, {if: function(action){
  return action.method != "get";
}});
```
