import {field} from 'vega-util';

var INDEPENDENT = 'independent',
    INTERSECT = 'intersect',
    UNION_OTHERS = 'union_others',
    INTERSECT_OTHERS = 'intersect_others';

function testPoint(datum, entry) {
  var fields = entry.fields,
      values = entry.values,
      n = fields.length,
      i = 0;

  for (; i<n; ++i) if (field(fields[i])(datum) !== values[i]) return false;
  return true;
}

function inrange(value, range) {
  var r0 = range[0], r1 = range[range.length-1], t;
  if (r0 > r1) t = r0, r0 = r1, r1 = t;
  return r0 <= value && value <= r1;
}

function testInterval(datum, entry) {
  var intervals = entry.intervals,
      n = intervals.length,
      i = 0;

  for (; i<n; ++i) {
    if (!inrange(field(intervals[i].field)(datum), intervals[i].extent)) return false;
  }
  return true;
}

function vlSelection(name, unit, datum, resolve, test) {
  var data = this.context.data[name],
      entries = data ? data.values.value : [],
      independent = resolve === INDEPENDENT,
      intersect = resolve === INTERSECT || resolve === INTERSECT_OTHERS || independent,
      others = resolve === INTERSECT_OTHERS || resolve === UNION_OTHERS,
      entry, b, i, n;

  for (i=0, n=entries.length; i<n; ++i) {
    entry = entries[i];

    // is the selection entry from the current unit?
    b = unit === entry.unit;

    // perform test if source unit is a valid selection source
    if (!(others && b || independent && !b)) {
      b = test(datum, entry);

      // if we find a match and we don't require intersection return true
      // if we find a miss and we do require intersection return false
      if (intersect ^ b) return b;
    }
  }

  // if intersecting and we made it here, then we saw no misses
  // if not intersecting, then we saw no matches
  return intersect;
}

// Assumes point selection tuples are of the form:
// {unit: string, fields: array<string>, values: array<*>, }
export function vlPoint(name, unit, datum, resolve) {
  return vlSelection.call(this, name, unit, datum, resolve, testPoint);
}

// Assumes interval selection typles are of the form:
// {unit: string, intervals: array<{field:string, extent:array<number>}>}
export function vlInterval(name, unit, datum, resolve) {
  return vlSelection.call(this, name, unit, datum, resolve, testInterval);
}