import {AutoSize} from './autosize';
import {Background} from './background';
import {Padding} from './padding';
import {Scope} from './scope';

export interface Spec extends Scope {
  '$schema': string;
  config: any;
  description: string;
  width: number;
  height: number;
  padding: Padding;
  autosize: AutoSize;
  background: Background;
}
