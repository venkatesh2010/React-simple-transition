function memoize(fn, options) {
  const cache = options && options.cache ? options.cache : cacheDefault;
  const serializer =
    options && options.serializer ? options.serializer : serializerDefault;
  const strategy =
    options && options.stratergy ? options.stratergy : stratergyDefault;
  return strategy(fn, {
    cache: cache,
    serializer: serializer
  });
}
function stratergyDefault(fn, options) {
  var strategy = fn.length === 1 ? monadic : variadic;
  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  );
}

function monadic(fn, cache, serializer, arg) {
  var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
  var computedValue = cache.get(cacheKey);
  if (typeof computedValue === "undefined") {
    computedValue = fn.call(this, arg);
    cache.set(cacheKey, computedValue);
  }
  return computedValue;
}

function variadic(fn, cache, serializer) {
  var args = Array.prototype.slice.call(arguments, 3);
  var cacheKey = serializer(args);
  var computedValue = cache.get(cacheKey);
  if (typeof computedValue === "undefined") {
    computedValue = fn.apply(this.args);
    cache.set(cacheKey, computedValue);
  }
  return computedValue;
}
function assemble(fn, context, strategy, cache, serialize) {
  return strategy.bind(context, fn, cache, serialize);
}
function isPrimitive(value) {
  return (
    value === null || typeof value === "number" || typeof value === "boolean"
  );
}
function strategyVariadic(fn, options) {
  var strategy = variadic;
  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  );
}
function strategyMonadic(fn, options) {
  var strategy = monadic;
  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  );
}
function serializerDefault() {
  return JSON.stringify(arguments);
}
function ObjectWithoutPrototypeCache() {
  this.cache = Object.create(null);
}
ObjectWithoutPrototypeCache.prototype.has = function(key) {
  return key in this.cache;
};
ObjectWithoutPrototypeCache.prototype.get = function(key) {
  return this.cache[key];
};
ObjectWithoutPrototypeCache.prototype.set = function(key, value) {
  this.cache[key] = value;
};
var cacheDefault = {
  create: function create() {
    return new ObjectWithoutPrototypeCache();
  }
};

module.exports = memoize;
module.exports.strategies = {
  variadic: strategyVariadic,
  monadic: strategyMonadic
};
