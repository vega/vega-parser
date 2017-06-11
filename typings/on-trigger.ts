import {Expr} from './expr';

export type OnTrigger = {
  trigger: Expr,
  insert?: Expr,
  remove?: boolean | Expr,
  toggle?: Expr,
  modify?: Expr,
  values?: Expr
};

export type OnMarkTrigger = {
  trigger: Expr,
  modify?: Expr,
  values?: Expr
};
