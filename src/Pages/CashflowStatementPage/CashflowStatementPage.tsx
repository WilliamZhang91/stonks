import { useEffect, useState } from "react";
import { CompanyCashFlow } from "../../interfaces/CompanyCashFlow";
import { getCashFlow } from "../../functions/api/api";
import Spinner from "../../Components/Spinner/Spinner";
import Table from "../../Components/Table/Table";
import { dummyCashflowStatement } from "../../dummy-data/dummyCashflowStatement";
import "./CashflowStatement.css";

interface Props {
    ticker: string;
    state: number;
    tabNumber: number;
    error: string;
    setError: (error: string) => void;
    isProduction: string | undefined;
}

const config = [
    {
        label: "Date",
        render: (company: CompanyCashFlow) => company.date,
    },
    {
        label: "Operating Cashflow",
        render: (company: CompanyCashFlow) => company.operatingCashFlow
    },
    {
        label: "Investment Cashflow",
        render: (company: CompanyCashFlow) => company.netCashUsedForInvestingActivites,
    },
    {
        label: "Financing Cashflow",
        render: (company: CompanyCashFlow) => company.netCashUsedProvidedByFinancingActivities,
    },
    {
        label: "Cash At End of Period",
        render: (company: CompanyCashFlow) => company.cashAtEndOfPeriod,
    },
    {
        label: "Capital Expenditure",
        render: (company: CompanyCashFlow) => company.capitalExpenditure,
    },
    {
        label: "Common Stock Issued",
        render: (company: CompanyCashFlow) => company.commonStockIssued,
    },
    {
        label: "Free Cash Flow",
        render: (company: CompanyCashFlow) => company.freeCashFlow,
    },
    {
        label: "Inventory",
        render: (company: CompanyCashFlow) => company.inventory,
    },
    {
        label: "Accounts Recievable",
        render: (company: CompanyCashFlow) => company.accountsReceivables,
    },
    {
        label: "Accounts Payable",
        render: (company: CompanyCashFlow) => company.accountsPayables,
    },
    {
        label: "Net Change In Cash",
        render: (company: CompanyCashFlow) => company.netChangeInCash,
    },
    {
        label: "Depreciation And Amortization",
        render: (company: CompanyCashFlow) => company.depreciationAndAmortization
    }
];

const CashflowStatementPage: React.FC<Props> = ({
    ticker,
    state,
    tabNumber,
    error,
    setError,
    isProduction
}): JSX.Element => {

    const [cashflowStatementData, setCashflowStatementData] = useState<CompanyCashFlow[]>([]);

    useEffect(() => {
        const fetchCashflowStatement = async (): Promise<void> => {
            try {
                const result = await getCashFlow(ticker);
                if (result && result.data.length > 0) {
                    setCashflowStatementData(result.data);
                    console.log(result);
                } else {
                    if (result) setError("No results found " + result?.statusText);
                }
            } catch (err: any) {
                console.error("Error fetching cashflow statement: ", err);
                setError("Error fetching results");
            }
        }
        
        isProduction === "false" ? setCashflowStatementData(dummyCashflowStatement): fetchCashflowStatement();

    }, [ticker])

    return <section className={`cashflow-statement-page ${state === tabNumber ? 'background-color' : ''}`}>
        {cashflowStatementData.length === 0 ? (
            <Spinner />
        ) : (
            <Table config={config} data={cashflowStatementData} />
        )}
        {error && <div className="error">{error}</div>}
    </section>
}

export default CashflowStatementPage;