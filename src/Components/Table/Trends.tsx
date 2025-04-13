const ratioLabels = [
    "Net Income Ratio",
    "Earnings Per Share",
    "Earnings Per Diluted",
    "Gross Profit Ratio",
    "Opearting Income Ratio",
    "Income Before Taxes Ratio"
];

// const incomeStatementHighlightsConfig = [
//     {
//         label: "Date",
//         render: (company: CompanyIncomeStatement) => company.date,
//     },
//     {
//         label: "Revenue",
//         render: (company: CompanyIncomeStatement) => company.revenue,
//     },
//     {
//         label: "Cost Of Revenue",
//         render: (company: CompanyIncomeStatement) => company.costOfRevenue,
//     },
//     {
//         label: "Depreciation",
//         render: (company: CompanyIncomeStatement) =>
//             company.depreciationAndAmortization,
//     },
//     {
//         label: "Operating Income",
//         render: (company: CompanyIncomeStatement) => company.operatingIncome,
//     },
//     {
//         label: "Income Before Taxes",
//         render: (company: CompanyIncomeStatement) => company.incomeBeforeTax,
//     },
//     {
//         label: "Net Income",
//         render: (company: CompanyIncomeStatement) => company.netIncome,
//     },
//     {
//         label: "Net Income Ratio",
//         render: (company: CompanyIncomeStatement) => company.netIncomeRatio,
//     },
//     {
//         label: "Earnings Per Share",
//         render: (company: CompanyIncomeStatement) => company.eps,
//     },
//     {
//         label: "Earnings Per Diluted",
//         render: (company: CompanyIncomeStatement) => company.epsdiluted,
//     },
//     {
//         label: "Gross Profit Ratio",
//         render: (company: CompanyIncomeStatement) => company.grossProfitRatio,
//     },
//     {
//         label: "Opearting Income Ratio",
//         render: (company: CompanyIncomeStatement) => company.operatingIncomeRatio,
//     },
//     {
//         label: "Income Before Taxes Ratio",
//         render: (company: CompanyIncomeStatement) => company.incomeBeforeTaxRatio,
//     },
// ];

const Trends = (data: any, label: string, config: any) => {
    //Reverse api data
    const reversedData = [...data].reverse();

    return reversedData.map((d: any, i: number) => {
        // Retrieve the previous value if available
        const previousValue = i > 0 ? config.find((c: any) => c.label === label)?.render(reversedData[i - 1]) : null;

        return (
            <div key={i}>
                {config.map((val: any) => {
                    if (val.label !== "Date" && val.label === label) {
                        const currentValue = val.render(d);
                        const percentageChange =
                            previousValue !== null && previousValue !== 0
                                ? ((currentValue - previousValue) / Math.abs(previousValue)) * 100
                                : 0;
                        const isNegative = percentageChange && +percentageChange < 0;

                        const barHeight = percentageChange && +percentageChange.toFixed(2) > 100 ?
                            (+percentageChange.toFixed(2) / 20).toFixed(2)
                            :
                            percentageChange;

                        const barHeightRatio = percentageChange && +percentageChange < 0 ?
                            (Math.abs((+percentageChange * 1))).toFixed(2)
                            :
                            percentageChange;

                        const barHeightLog10 = (Math.log10(Math.abs(+barHeight))) * 15;
                        const barHeightRatioLog10 = (Math.log10(Math.abs(+barHeightRatio))) * 15;

                        const renderPercentageChange = () =>
                            <div key={val.label}>
                                {previousValue !== null && (
                                    <div
                                        style={{
                                            height: isNegative ? `${Math.abs(+barHeightLog10)}px` : `${barHeightLog10}px`,
                                            // height: `${barHeight}px`,
                                            width: "10px",
                                            background: isNegative ? "red" : "blue",
                                            // transform: isNegative ? "rotate(180deg)  translateY(-100%)" : "",
                                        }}>
                                    </div>
                                )}
                            </div>;

                        const renderRatios = () =>
                            <div key={val.label}>
                                {previousValue !== null && (
                                    <div
                                        style={{
                                            height: isNegative ? `${Math.abs(+barHeightRatioLog10)}px` : `${barHeightRatioLog10}px`,
                                            width: "10px",
                                            background: isNegative ? "red" : "blue",
                                        }}></div>
                                )}
                            </div>;

                        return ratioLabels.includes(val.label) ? renderRatios() : renderPercentageChange()
                    }
                    return null;
                })}
            </div>
        );
    });
};

export default Trends;