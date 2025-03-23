import { numberFormatter } from "../../functions/numberFormatter";

describe("numberFormatter", () => {
    test("Should format number in millions correctly", () => {
        const result = numberFormatter(50000000);
        expect(result).toBe("50 M");
    });

    test("should format number in billions correctly", () => {
        const result = numberFormatter(5000000000);
        expect(result).toBe("5.00 B");
    });

    test("should format number correctly if less than one million", () => {
        const result = numberFormatter(100000);
        expect(result).toBe("100,000");
    });
});