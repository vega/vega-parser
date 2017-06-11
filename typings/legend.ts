import {EncodeEntry, NumericValueRef} from './encode';
import {SignalRef} from './signal';

export interface GuideEncodeEntry {
  name?: string;
  interactive?: boolean;
  enter?: EncodeEntry;
  update?: EncodeEntry;
  exit?: EncodeEntry;
}

export type LegendType = 'gradient' | 'symbol';
export type LegendOrient = 'none' | 'left' | 'right' | 'top-left' | 'top-right' |
  'bottom-left' | 'bottom-right';

export interface BaseLegend {
  name?: string;
  type?: LegendType;
  orient?: LegendOrient;
  title?: string | SignalRef;
  zindex?: number;
  interactive?: boolean;
  offset?: number | NumericValueRef;
  padding?: number | NumericValueRef;
  titlePadding?: number | NumericValueRef;
  entryPadding?: number | NumericValueRef;
  tickCount?: number | SignalRef;
  format?: string | SignalRef;
  values?: any[] | SignalRef;
  encode?: {
    title?: GuideEncodeEntry,
    labels?: GuideEncodeEntry,
    legend?: GuideEncodeEntry,
    symbols?: GuideEncodeEntry,
    gradient?: GuideEncodeEntry
  };
}

export interface SizeLegend extends BaseLegend {
  size: string;
}

export interface ShapeLegend extends BaseLegend {
  shape: string;
}

export interface FillLegend extends BaseLegend {
  fill: string;
}

export interface StrokeLegend extends BaseLegend {
  stroke: string;
}

export interface OpacityLegend extends BaseLegend {
  opacity: string;
}

export interface StrokeDashLegend extends BaseLegend {
  strokeDash: string;
}

export type Legend = SizeLegend | ShapeLegend | FillLegend |
  StrokeDashLegend | OpacityLegend;
