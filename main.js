var Inflector = require('./inflector');
var rules = require('./inflections');
var inflector = new Inflector(rules);

var pluralize = function(word) {
  return inflector.pluralize(word);
};

var singularize = function(word) {
  return inflector.singularize(word);
};

module.exports = {
  pluralize: pluralize,
  singularize: singularize
};
