import {default as getRole, getConfig} from './role';

export default function(spec, scope) {
  var role = spec.role || getRole(spec),
      config = getConfig(scope.config, spec.type, role);

  return {
    clip:        spec.clip != null ? spec.clip : (config.clip || false),
    interactive: spec.interactive === false ? false : true,
    marktype:    spec.type,
    name:        spec.name || undefined,
    role:        role,
    zindex:      +spec.zindex || undefined
  };
}
