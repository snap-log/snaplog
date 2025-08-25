import { newShutterSpeed, ShutterSpeed } from "@/lib/model/shutterSpeed";

describe("shutter speed", () => {
  it("parses reciprocals correctly", () => {
    const expected: ShutterSpeed = {
      label: "1/4000",
      duration: 1 / 4000,
      key: "1_4000",
    };

    const got = newShutterSpeed(4000, true);

    expect(got).toEqual(expected);
  });

  it("parses non-reciprocals correctly", () => {
    const expected: ShutterSpeed = {
      label: "2",
      duration: 2,
      key: "2",
    };

    const got = newShutterSpeed(2);

    expect(got).toEqual(expected);
  });
});
