import {SignalRef} from './signal';

export type RangeEnum = 'width' | 'height' | 'symbol' | 'category' | 'ordinal' |
  'ramp' | 'diverging' | 'heatmap';

export type RangeRaw = (null | boolean | string | number | SignalRef)[];

export type RangeScheme = RangeEnum | RangeRaw | {
  scheme: string | SignalRef,
  count?: number | SignalRef,
  extent?: (number | SignalRef)[] | SignalRef
};

export type RangeBand = RangeEnum | RangeRaw | {step: number | SignalRef};

export type SortOrder = 'ascending' | 'descending' | SignalRef;
export type SingleSort = {
  sort?: boolean | {
    field?: ScaleField, op?: ScaleField, order?: SortOrder
  }
};
export type MultiSort = {sort?: boolean | {op?: 'count', order?: SortOrder}};

export type ScaleField = string | SignalRef;

export type ScaleInterpolate = string | SignalRef |
  {type: string | SignalRef, gamma?: string | SignalRef};

export type DataRef = {data: string, field: ScaleField};

export type ScaleData = (DataRef & SingleSort) |
  (MultiSort & (
    {data: string, fields: ScaleField[]} |
    {fields: ((string | number | boolean)[] | DataRef | SignalRef)[]}
  ));

export type QuantScaleType = 'linear' | 'pow' | 'sqrt' | 'log' | 'time' |
  'utc' | 'sequential';
export type DiscreteScaleType = 'ordinal' | 'band' | 'point';
export type DiscretizingScaleType = 'quantile' | 'quantize' | 'threshold' |
  'bin-linear' | 'bin-ordinal';

export type ScaleType = QuantScaleType | DiscreteScaleType | DiscretizingScaleType;

export type BaseScale = {
  name: string,
  type: ScaleType,
  domain?: (null | string | number | boolean | SignalRef)[] |  ScaleData | SignalRef,
  domainMin?: number | SignalRef,
  domainMax?: number | SignalRef,
  domainMid?: number | SignalRef,
  domainRaw?: null | any[] | SignalRef,
  reverse?: boolean | SignalRef,
  round?: boolean | SignalRef
};

export type OrdinalScale = BaseScale & {
  type: 'ordinal',
  range?: RangeScheme | ScaleData
};

export type BandScale = BaseScale & {
  type: 'band',
  range?: RangeBand,
  padding?: number | SignalRef,
  paddingInner?: number | SignalRef,
  paddingOuter?: number | SignalRef,
  align?: number | SignalRef
};

export type PointScale = BaseScale & {
  type: 'point',
  range?: RangeBand,
  padding?: number | SignalRef,
  paddingOuter?: number | SignalRef,
  align?: number | SignalRef
};

export type SequentialScale = BaseScale & {
  type: 'sequential',
  range: RangeScheme,
  clamp?: boolean | SignalRef
};

export type Nice = 'second' | 'minute' | 'hour' | 'day' | 'week' |
  'month' | 'year';
export type TimeScale = BaseScale & {
  type: 'time' | 'utc',
  range?: RangeScheme,
  clamp?: boolean | SignalRef,
  nice?: boolean | Nice | SignalRef
};

export type IdentityScale = BaseScale & {
  type: 'identity',
  nice?: Nice
};

export type DiscretizingScale = BaseScale & {
  type: DiscreteScaleType,
  range?: RangeScheme,
  nice?: boolean | Nice | SignalRef,
  zero?: boolean | SignalRef
};

export type LinearScale = BaseScale & {
  type: 'linear',
  range?: RangeScheme,
  interpolate?: ScaleInterpolate,
  clamp?: boolean | SignalRef,
  nice?: boolean | number | SignalRef,
  zero?: boolean | SignalRef
};

export type LogScale = BaseScale & {
  type: 'log',
  range?: RangeScheme,
  interpolate?: ScaleInterpolate,
  base?: number | SignalRef,
  clamp?: boolean | SignalRef,
  nice?: boolean | number | SignalRef
};

export type PowScale = BaseScale & {
  type: 'pow',
  range?: RangeScheme,
  interpolate?: ScaleInterpolate,
  clamp?: boolean | SignalRef,
  nice?: boolean | number | SignalRef,
  zero?: boolean | SignalRef
};

export type BinLinearScale = BaseScale & {
  type: 'bin-linear',
  range?: RangeScheme,
  interpolate?: ScaleInterpolate
};

export type Scale = OrdinalScale | BandScale | PointScale | SequentialScale |
  TimeScale | IdentityScale | DiscretizingScale | LinearScale | LogScale |
  PowScale | BinLinearScale;
