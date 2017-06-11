import * as Encode from './encode';
import {MarkType} from './marktype';
import {SortOrder} from './scale';
import {Scope} from './scope';
import {SignalRef} from './signal';


export type Facet = {
  name: string, data: string, field: string
} | {
  name: string, data: string,
  groupby: string | string[],
  aggregate?: {cross?: boolean, fields: string[], ops: string[], as: string[]}
};

export type From = {data?: string};
export type FromFacet = From | (From & {facet: Facet});

export type Compare = {
  field: string | SignalRef,
  order?: SortOrder
} | {
  field: string[] | SignalRef[],
  order?: SortOrder[]
};

export interface BaseMark {
  role?: string;
  name?: string;
  key?: string;
  clip?: boolean;
  sort?: Compare;
  interactive?: boolean;
  from?: From;
  // transform?:
  // on?:
}

export interface ArcMark extends BaseMark {
  type: 'arc';
  encode: {
    enter?: Encode.ArcEncodeEntry,
    update?: Encode.ArcEncodeEntry,
    exit?: Encode.ArcEncodeEntry,
    [p: string]: Encode.ArcEncodeEntry
  };
}

export interface AreaMark extends BaseMark {
  type: 'area';
  encode: {
    enter?: Encode.AreaEncodeEntry,
    update?: Encode.AreaEncodeEntry,
    exit?: Encode.AreaEncodeEntry,
    [p: string]: Encode.AreaEncodeEntry
  };
}

export interface ImageMark extends BaseMark {
  type: 'image';
  encode: {
    enter?: Encode.ImageEncodeEntry;
    update?: Encode.ImageEncodeEntry;
    exit?: Encode.ImageEncodeEntry;
    [p: string]: Encode.ImageEncodeEntry;
  };
}

export interface GroupMark extends BaseMark, Scope {
  type: 'group';
  from: FromFacet;
  encode: {
    enter?: Encode.GroupEncodeEntry,
    update?: Encode.GroupEncodeEntry,
    exit?: Encode.GroupEncodeEntry,
    [p: string]: Encode.GroupEncodeEntry
  };
}

export interface LineMark extends BaseMark {
  type: 'line';
  encode: {
    enter?: Encode.LineEncodeEntry,
    update?: Encode.LineEncodeEntry,
    exit?: Encode.LineEncodeEntry,
    [p: string]: Encode.LineEncodeEntry
  };
}

export interface PathMark extends BaseMark {
  type: 'path';
  encode: {
    enter?: Encode.PathEncodeEntry,
    update?: Encode.PathEncodeEntry,
    exit?: Encode.PathEncodeEntry,
    [p: string]: Encode.PathEncodeEntry
  };
}

export interface RectMark extends BaseMark {
  type: 'rect';
  encode: {
    enter?: Encode.RectEncodeEntry,
    update?: Encode.RectEncodeEntry,
    exit?: Encode.RectEncodeEntry,
    [p: string]: Encode.RectEncodeEntry
  };
}

export interface RuleMark extends BaseMark {
  type: 'rule';
  encode: {
    enter?: Encode.EncodeEntry,
    update?: Encode.EncodeEntry,
    exit?: Encode.EncodeEntry,
    [p: string]: Encode.EncodeEntry
  };
}

export interface ShapeMark extends BaseMark {
  type: 'shape';
  encode: {
    enter?: Encode.ShapeEncodeEntry,
    update?: Encode.ShapeEncodeEntry,
    exit?: Encode.ShapeEncodeEntry,
    [p: string]: Encode.ShapeEncodeEntry
  };
}

export interface SymbolMark extends BaseMark {
  type: 'symbol';
  encode: {
    enter?: Encode.SymbolEncodeEntry,
    update?: Encode.SymbolEncodeEntry,
    exit?: Encode.SymbolEncodeEntry,
    [p: string]: Encode.SymbolEncodeEntry
  };
}

export interface TextMark extends BaseMark {
  type: 'text';
  encode: {
    enter?: Encode.TextEncodeEntry,
    update?: Encode.TextEncodeEntry,
    exit?: Encode.TextEncodeEntry,
    [p: string]: Encode.SymbolEncodeEntry
  };
}

export interface TrailMark extends BaseMark {
  type: 'trail';
  encode: {
    enter?: Encode.TrailEncodeEntry,
    update?: Encode.TrailEncodeEntry,
    exit?: Encode.TrailEncodeEntry,
    [p: string]: Encode.TrailEncodeEntry
  };
}

export type Mark = ArcMark | AreaMark | ImageMark | GroupMark | LineMark |
  PathMark | RectMark | RuleMark | ShapeMark | SymbolMark | TextMark | TrailMark;
