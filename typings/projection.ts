import {SignalRef} from './signal';

type NumberSignalArray = (number | SignalRef)[];

export type Projection = {
  name: string,
  type: string | SignalRef,
  clipAngle?: number | SignalRef,
  clipExtent?: SignalRef | NumberSignalArray,
  scale?: number | SignalRef,
  translate?: SignalRef | NumberSignalArray,
  center?: SignalRef | NumberSignalArray,
  rotate?: SignalRef | NumberSignalArray,
  parallels?: SignalRef | NumberSignalArray,
  precision?: number | SignalRef,
  pointRadius?: number | SignalRef,
  fit?: any | any[],
  extent?: SignalRef | (SignalRef | NumberSignalArray)[],
  size?: SignalRef | NumberSignalArray
};
