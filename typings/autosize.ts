export type AutoSizeType = 'pad' | 'fit' | 'none';

export type AutoSize = AutoSizeType | {
  type: AutoSizeType,
  resize?: boolean
};
