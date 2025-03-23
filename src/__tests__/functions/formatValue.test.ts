import { formatValue } from "../../functions/formatValue";
import { numberFormatter } from "../../functions/numberFormatter";

jest.mock("../../functions/numberFormatter", () => ({
    numberFormatter: jest.fn()
}));

describe("formatValue function", () => {
    test("Should return formatted date value if object key is 'date'", () => {
        const result = formatValue("date", "2024-12-31");
        expect(result).toBe("31/12/2024");
    });

    test("Should format numeric values correctly using numberFormatter (billions)", () => {
        (numberFormatter as jest.Mock).mockReturnValue("3.95B");
        const result = formatValue("test", 3946000000);
        expect(result).toBe("$3.95B");
    });

    test("Should format numeric values correctly using numberFormatter (millions)", () => {
        (numberFormatter as jest.Mock).mockReturnValue("4M");
        const result = formatValue("test", 3946000);
        expect(result).toBe("$4M");
    });

    test("Should format numeric values correctly using numberFormatter, (thousands)", () => {
        (numberFormatter as jest.Mock).mockReturnValue("300,000");
        const result = formatValue("test", 300000);
        expect(result).toBe("$300,000");
    });

    test("Should return the input value as is if input is not number or date", () => {
        const result = formatValue("test", "test");
        expect(result).toBe("test");
    });
});