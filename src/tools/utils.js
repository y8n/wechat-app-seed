function isString(val) {
  return 'string' === typeof val;
}
function isFn(val) {
  return typeof val === 'function';
}
function isUndefined(val) {
  return typeof val === 'undefined';
}
function isDefined(val) {
  return !isUndefined(val);
}
export default {
  isString,
  isFn,
  isUndefined,
  isDefined
};
