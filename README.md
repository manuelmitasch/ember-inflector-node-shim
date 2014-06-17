ember-inflector-node-shim
=========================
Shim project to enable the use of ember inflector with node. 
Original code from Stefan Penner at: https://github.com/stefanpenner/ember-inflector

Install
-------
```
npm install git://github.com/manuelmitasch/ember-inflector-node-shim --save
```

Use
---
```
var Inflector = require("ember-inflector-node-shim");

var quizzes = Inflector.pluralize("quiz"); // quizzes
var quiz = Inflector.singularize("quizzes"); // quiz
```

