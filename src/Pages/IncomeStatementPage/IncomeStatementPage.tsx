import { useEffect, useState } from "react";
import { CompanyIncomeStatement } from "../../interfaces/CompanyIncomeStatement";
import "./IncomeStatement.css";
import { getIncomeStatement } from "../../functions/api/api";
import { dummyIncomeStatementData } from "../../dummy-data/dummyIncomeStatementData";
import Spinner from "../../Components/Spinner/Spinner";
import Table from "../../Components/Table/Table";
import FinancialsTable from "../../Components/Table/FinancialsTable";
import { incomeStatementHighlightsConfig } from "../../TableConfig/IncomeStatementConfig";
import { incomeStatementConfig } from "../../TableConfig/IncomeStatementConfig";

interface Props {
    ticker: string;
    state: number;
    tabNumber: number;
    error: string;
    setError: (error: string) => void;
    isProduction: string | undefined;
}

const IncomeStatementPage: React.FC<Props> = ({
    ticker,
    state,
    tabNumber,
    error,
    setError,
    isProduction
}): JSX.Element => {

    const [incomeStatementData, setIncomeStatementData] = useState<CompanyIncomeStatement[]>([]);

    useEffect(() => {
        const fetchIncomeStatement = async (): Promise<void> => {
            try {
                const result = await getIncomeStatement(ticker);
                if (result && result.data.length > 0) {
                    setIncomeStatementData(result.data);
                    console.log(result);
                } else {
                    if (result) setError("No results found " + result?.statusText);
                }
            } catch (err: any) {
                console.error("Error fetching company profile: ", err);
                setError("Error fetching results");
            }
        }

        isProduction === "false" ? setIncomeStatementData(dummyIncomeStatementData) : fetchIncomeStatement();
        
    }, [ticker]);

    return <section className={`income-statement-page ${state === tabNumber ? 'background-color' : ''}`} style={{ marginBottom: "100px" }}>
        {incomeStatementData.length === 0 ? (
            <Spinner />
        ) : (
            <>
                <Table config={incomeStatementHighlightsConfig} data={incomeStatementData} />
                <FinancialsTable config={incomeStatementConfig} data={incomeStatementData} />
            </>
        )}
        {error && <div className="error">{error}</div>}
    </section>
}

export default IncomeStatementPage;