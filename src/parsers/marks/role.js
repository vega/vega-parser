import {GroupMark} from './marktypes';
import {FrameRole, ScopeRole, MarkRole} from './roles';
import {extend} from 'vega-util';

export default function(spec) {
  var role = spec.role || '';
  return (!role.indexOf('axis') || !role.indexOf('legend'))
    ? role
    : spec.type === GroupMark ? ScopeRole : (role || MarkRole);
}

export function getConfig(config, type, role) {
  return role === FrameRole ? config.group
    : (role === MarkRole || config[type = role]) ? extend({}, config.mark, config[type])
    : {};
}