import Immutable from "immutable/dist/immutable";

const isArrayObject = Array.isArray;

const isPlainObject = function(v) {
    return (v && (v.constructor === Object || v.constructor === undefined));
};

const isImmutable = Immutable.Iterable.isIterable;

const isImmutableMap = Immutable.Map.isMap;

const isImmutableList = Immutable.List.isList;

const ImmutableMap = Immutable.Map;

const ImmutableList = Immutable.List;

// A consistent shared value representing "not set" which equals nothing other
// than itself, and nothing that could be provided externally.
const NOT_SET_VALUE = {};


export {
    ImmutableMap,
    ImmutableList,
    isArrayObject,
    isPlainObject,
    isImmutable,
    isImmutableMap,
    isImmutableList,
    NOT_SET_VALUE,
};
