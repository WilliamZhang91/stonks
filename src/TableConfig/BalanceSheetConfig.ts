import { CompanyBalanceSheet } from "../interfaces/CompanyBalanceSheet";

export const balanceSheetHighlightsConfig = [
    {
        label: "date",
        render: (company: CompanyBalanceSheet) => company.date
    },
    {
        label: "Total Assets",
        render: (company: CompanyBalanceSheet) => company.totalAssets,
    },
    {
        label: "Current Assets",
        render: (company: CompanyBalanceSheet) => company.totalCurrentAssets,
    },
    {
        label: "Total Cash",
        render: (company: CompanyBalanceSheet) => company.cashAndCashEquivalents,
    },
    {
        label: "Property & equipment",
        render: (company: CompanyBalanceSheet) => company.propertyPlantEquipmentNet,
    },
    {
        label: "Intangible Assets",
        render: (company: CompanyBalanceSheet) => company.intangibleAssets,
    },
    {
        label: "Long Term Debt",
        render: (company: CompanyBalanceSheet) => company.longTermDebt,
    },
    {
        label: "Total Debt",
        render: (company: CompanyBalanceSheet) => company.otherCurrentLiabilities,
    },
    {
        label: "Total Liabilites",
        render: (company: CompanyBalanceSheet) => company.totalLiabilities,
    },
    {
        label: "Current Liabilities",
        render: (company: CompanyBalanceSheet) => company.totalCurrentLiabilities,
    },
    {
        label: "Long-Term Income Taxes",
        render: (company: CompanyBalanceSheet) => company.otherLiabilities,
    },
    {
        label: "Stakeholder's Equity",
        render: (company: CompanyBalanceSheet) => company.totalStockholdersEquity,
    },
    {
        label: "Retained Earnings",
        render: (company: CompanyBalanceSheet) => company.retainedEarnings,
    },
];

export const balanceSheetConfig = [
    {
        label: "Date",
        render: (company: CompanyBalanceSheet) => company.date,
    },
    {
        label: "Short Term Investments",
        render: (company: CompanyBalanceSheet) => company.shortTermDebt,
    },
    {
        label: "Account Receivables",
        render: (company: CompanyBalanceSheet) => company.netReceivables,
    },
    {
        label: "Inventory",
        render: (company: CompanyBalanceSheet) => company.inventory,
    },
    {
        label: "Other Current Assets",
        render: (company: CompanyBalanceSheet) => company.otherCurrentAssets,
    },
    {
        label: "Total Current Assets",
        render: (company: CompanyBalanceSheet) => company.totalCurrentAssets,
    },
    {
        label: "Property, Plant and Equipment",
        render: (company: CompanyBalanceSheet) => company.propertyPlantEquipmentNet,
    },
    {
        label: "Goodwill",
        render: (company: CompanyBalanceSheet) => company.goodwill,
    },
    {
        label: "Intangible Assets",
        render: (company: CompanyBalanceSheet) => company.intangibleAssets,
    },
    {
        label: "Long Term Investments",
        render: (company: CompanyBalanceSheet) => company.longTermInvestments,
    },
    {
        label: "Tax Assets",
        render: (company: CompanyBalanceSheet) => company.taxAssets,
    },
    {
        label: "Other Non-Current Assets",
        render: (company: CompanyBalanceSheet) => company.otherNonCurrentAssets,
    },
    {
        label: "Total Non-Current Assets",
        render: (company: CompanyBalanceSheet) => company.totalNonCurrentAssets,
    },
    {
        label: "Total Assets",
        render: (company: CompanyBalanceSheet) => company.totalAssets,
    },
    {
        label: "Accounts Payable",
        render: (company: CompanyBalanceSheet) => company.accountPayables,
    },
    {
        label: "Other Current Liabilities",
        render: (company: CompanyBalanceSheet) => company.otherCurrentLiabilities,
    },
    {
        label: "Deferred Revenue",
        render: (company: CompanyBalanceSheet) => company.deferredRevenue,
    },
    {
        label: "Short-term Debt",
        render: (company: CompanyBalanceSheet) => company.shortTermDebt,
    },
    {
        label: "Total Current Liabilities",
        render: (company: CompanyBalanceSheet) => company.totalCurrentLiabilities,
    },
    {
        label: "Long-term Debt",
        render: (company: CompanyBalanceSheet) => company.longTermDebt,
    },
    {
        label: "Deferred Revenue",
        render: (company: CompanyBalanceSheet) => company.deferredRevenue,
    },
    {
        label: "Deferred Tax Liabilities Non Current",
        render: (company: CompanyBalanceSheet) => company.deferredTaxLiabilitiesNonCurrent,
    },
    {
        label: "Other Non-Current Liabilities",
        render: (company: CompanyBalanceSheet) => company.otherNonCurrentLiabilities,
    },
    {
        label: "Total Liabilities",
        render: (company: CompanyBalanceSheet) => company.totalLiabilities,
    },
    {
        label: "Common Stock",
        render: (company: CompanyBalanceSheet) => company.commonStock,
    },
    {
        label: "Retained Earnings",
        render: (company: CompanyBalanceSheet) => company.retainedEarnings,
    },
    {
        label: "Accumulated Other Comprehensive Income Loss",
        render: (company: CompanyBalanceSheet) => company.accumulatedOtherComprehensiveIncomeLoss,
    },
    {
        label: "Other Total Stockholders Equity",
        render: (company: CompanyBalanceSheet) => company.accumulatedOtherComprehensiveIncomeLoss,
    },
    {
        label: "minority Interest",
        render: (company: CompanyBalanceSheet) => company.minorityInterest,
    },
    {
        label: "Total Equity",
        render: (company: CompanyBalanceSheet) => company.totalEquity,
    },
    {
        label: "Total Liabilities and Equity",
        render: (company: CompanyBalanceSheet) => company.totalLiabilitiesAndTotalEquity,
    },
]