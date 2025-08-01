export interface ShutterSpeed {
  label: string;
  duration: number;
}

export const newShutterSpeed = (
  numeric: number,
  inverse: boolean = false
): ShutterSpeed => {
  return {
    label: inverse ? `1/${numeric}` : numeric.toString(),
    duration: inverse ? 1 / numeric : numeric,
  };
};
