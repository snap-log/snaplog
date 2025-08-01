import { newShutterSpeed, ShutterSpeed } from "@/lib/model/shutterSpeed";

describe("shutter speed", () => {
  it("parses reciprocals correctly", () => {
    const expected: ShutterSpeed = { label: "1/4000", duration: 1 / 4000 };

    const got = newShutterSpeed(4000, true);

    expect(got).toEqual(expected);
  });
});
