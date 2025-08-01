import { newAperture } from "@/lib/model/aperture";

describe("aperture", () => {
  it("should generate correct label", () => {
    const got = newAperture(1.8);

    expect(got.label).toEqual("f/1.8");
  });
});
