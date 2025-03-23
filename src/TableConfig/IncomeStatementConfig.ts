import { CompanyIncomeStatement } from "../interfaces/CompanyIncomeStatement";

export const incomeStatementHightlightsConfig = [
    {
        label: "Date",
        render: (company: CompanyIncomeStatement) => company.date,
    },
    {
        label: "Revenue",
        render: (company: CompanyIncomeStatement) => company.revenue,
    },
    {
        label: "Cost Of Revenue",
        render: (company: CompanyIncomeStatement) => company.costOfRevenue,
    },
    {
        label: "Depreciation",
        render: (company: CompanyIncomeStatement) =>
            company.depreciationAndAmortization,
    },
    {
        label: "Operating Income",
        render: (company: CompanyIncomeStatement) => company.operatingIncome,
    },
    {
        label: "Income Before Taxes",
        render: (company: CompanyIncomeStatement) => company.incomeBeforeTax,
    },
    {
        label: "Net Income",
        render: (company: CompanyIncomeStatement) => company.netIncome,
    },
    {
        label: "Net Income Ratio",
        render: (company: CompanyIncomeStatement) => company.netIncomeRatio,
    },
    {
        label: "Earnings Per Share",
        render: (company: CompanyIncomeStatement) => company.eps,
    },
    {
        label: "Earnings Per Diluted",
        render: (company: CompanyIncomeStatement) => company.epsdiluted,
    },
    {
        label: "Gross Profit Ratio",
        render: (company: CompanyIncomeStatement) => company.grossProfitRatio,
    },
    {
        label: "Opearting Income Ratio",
        render: (company: CompanyIncomeStatement) => company.operatingIncomeRatio,
    },
    {
        label: "Income Before Taxes Ratio",
        render: (company: CompanyIncomeStatement) => company.incomeBeforeTaxRatio,
    },
];

export const incomeStatementConfig = [
    {
        label: "Date",
        render: (company: CompanyIncomeStatement) => company.date,
    },
    {
        label: "Revenue",
        render: (company: CompanyIncomeStatement) => company.revenue,
    },
    {
        label: "(Cost of Revenue)",
        render: (company: CompanyIncomeStatement) => company.costOfRevenue,
    },
    {
        label: "Selling Expenses",
        render: (company: CompanyIncomeStatement) => company.sellingGeneralAndAdministrativeExpenses,
    },
    {
        label: "Research and Development",
        render: (company: CompanyIncomeStatement) => company.researchAndDevelopmentExpenses,
    },
    {
        label: "Selling and Marketing Expenses",
        render: (company: CompanyIncomeStatement) => company.sellingAndMarketingExpenses,
    },
    {
        label: "General and Administrative Expenses",
        render: (company: CompanyIncomeStatement) => company.generalAndAdministrativeExpenses,
    },
    {
        label: "Operating Expenses",
        render: (company: CompanyIncomeStatement) => company.operatingExpenses,
    },
    {
        label: "Operating Income/EBIT",
        render: (company: CompanyIncomeStatement) => company.operatingIncome,
    },
    {
        label: "Interest Income",
        render: (company: CompanyIncomeStatement) => company.interestIncome,
    },
    {
        label: "Interest Expense",
        render: (company: CompanyIncomeStatement) => company.interestExpense,
    },
    {
        label: "Non-Operating Income (Expense)",
        render: (company: CompanyIncomeStatement) => company.totalOtherIncomeExpensesNet,
    },
    {
        label: "Income Tax Expense",
        render: (company: CompanyIncomeStatement) => company.incomeTaxExpense,
    },
    {
        label: "Net Income",
        render: (company: CompanyIncomeStatement) => company.netIncome,
    }
];