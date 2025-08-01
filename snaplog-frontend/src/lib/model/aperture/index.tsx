export interface Aperture {
  label: string;
  fNumber: number;
}

function label(fNumber: number) {
  return `f/${fNumber}`;
}

export const newAperture = (fNumber: number): Aperture => {
  return {
    fNumber,
    label: label(fNumber),
  };
};

const F1_8: Aperture = newAperture(1.8);
const F2_8: Aperture = newAperture(2.8);
const F4: Aperture = newAperture(4);
const F5_6: Aperture = newAperture(5.6);
const F8: Aperture = newAperture(8);
const F11: Aperture = newAperture(11);
const F16: Aperture = newAperture(16);
const F22: Aperture = newAperture(22);

export const list: Aperture[] = [F1_8, F2_8, F4, F5_6, F8, F11, F16, F22];
