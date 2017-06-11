import {NumericValueRef, TextEncodeEntry} from './encode';
import {SignalRef} from './signal';

export type TitleOrient = 'none' | 'left' | 'right' | 'top' | 'bottom';
export type TitleAnchor = 'start' | 'middle' | 'end';

export type Title = string | {
  text: string | SignalRef,
  name?: string,
  orient?: TitleOrient,
  anchor?: TitleAnchor,
  zindex?: number,
  interactive?: boolean,
  offset?: number | NumericValueRef,
  encode?: {
    enter?: TextEncodeEntry,
    update?: TextEncodeEntry,
    exit?: TextEncodeEntry
  }
};
