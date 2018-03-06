import {error, isArray, isObject, stringValue} from 'vega-util';

export default function(proj, scope) {
  var params = {};

  for (var name in proj) {
    if (name === 'name') continue;
    params[name] = parseParameter(proj[name], scope);
  }

  scope.addProjection(proj.name, params);
}

function parseParameter(_, scope) {
  if(isArray(_)) {
    _.map(function(_) { return parseParameter(_, scope); });
  } else if(isObject(_) || isNumber(_) || isString(_)) {
    return _;
  } else if(_.signal) {
    return scope.signalRef(_.signal);
  } else {
    error('Unsupported parameter object: ' + stringValue(_))
  }
}
