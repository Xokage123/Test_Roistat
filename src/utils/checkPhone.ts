export const checkPhone = (value: string): boolean => {
  return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(value);
};
