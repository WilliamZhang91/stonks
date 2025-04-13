import FinancialsTable from "../../../Components/Table/FinancialsTable";
import { currencyFormatter } from "../../../functions/currencyFormatter";
import { CompanyIncomeStatement } from "../../../interfaces/CompanyIncomeStatement";
import { screen, render } from "@testing-library/react";

describe("Financials table", () => {

    const dummyConfig = [
        {
            label: "Date",
            render: (company: CompanyIncomeStatement) => company.date,
        },
        {
            label: "Revenue",
            render: (company: CompanyIncomeStatement) => company.revenue,
        },
    ];

    const dummyData = [
        {
            date: "2023-12-31",
            revenue: 96773000000
        },
        {
            date: "2022-12-31",
            revenue: 86773000000
        }
    ];

    const { container, getByText, getAllByText } = render(<FinancialsTable data={dummyData} config={dummyConfig} />);

    test("renders rows with correct labels and formatted data", () => {
        console.log(screen)
        const dateHeading = getAllByText("Date");
        console.log(dateHeading.length)
        const revenueHeading = getAllByText("Revenue");
        const date1 = getByText("31/12/2023");
        const date2 = getByText("31/12/2022");
        const revenue1 = getByText(currencyFormatter(96773000000))
        const revenue2 = getByText(currencyFormatter(86773000000))

        expect(dateHeading).toHaveLength(1);
        expect(revenueHeading).toHaveLength(1);
        expect(date1).toBeInTheDocument();
        expect(date2).toBeInTheDocument();
        expect(revenue1).toBeInTheDocument();
        expect(revenue2).toBeInTheDocument();
    });
});