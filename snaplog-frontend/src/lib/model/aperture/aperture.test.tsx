import { newAperture } from "@/lib/model/aperture";

describe("aperture", () => {
  it("should generate correct label with decimal point", () => {
    const got = newAperture(1.8);

    expect(got.label).toEqual("f/1.8");
    expect(got.key).toEqual("1.8");
  });

  it("should generate correct label without decimal point", () => {
    const got = newAperture(22);

    expect(got.label).toEqual("f/22");
    expect(got.key).toEqual("22");
  });
});
