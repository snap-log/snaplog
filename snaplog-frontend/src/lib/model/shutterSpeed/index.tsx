export interface ShutterSpeed {
  label: string;
  duration: number;
  key: string;
}

export const newShutterSpeed = (
  numeric: number,
  inverse: boolean = false
): ShutterSpeed => {
  return {
    label: inverse ? `1/${numeric}` : numeric.toString(),
    duration: inverse ? 1 / numeric : numeric,
    key: `${inverse ? "1_" : ""}${numeric}`,
  };
};

export const list: ShutterSpeed[] = [
  newShutterSpeed(1),
  newShutterSpeed(2, true),
  newShutterSpeed(4, true),
  newShutterSpeed(8, true),
  newShutterSpeed(15, true),
  newShutterSpeed(30, true),
  newShutterSpeed(60, true),
  newShutterSpeed(125, true),
  newShutterSpeed(250, true),
  newShutterSpeed(500, true),
  newShutterSpeed(1000, true),
  newShutterSpeed(2000, true),
  newShutterSpeed(4000, true),
];
