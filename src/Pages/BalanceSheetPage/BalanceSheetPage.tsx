import { useEffect, useState } from "react";
import "./BalanceSheet.css";
import { CompanyBalanceSheet } from "../../interfaces/CompanyBalanceSheet";
import { getBalanceSheet } from "../../functions/api/api";
import Spinner from "../../Components/Spinner/Spinner";
import Table from "../../Components/Table/Table";
import { dummyBalanceSheetData } from "../../dummy-data/dummyBalanceSheet";
import { balanceSheetConfig, balanceSheetHighlightsConfig } from "../../TableConfig/BalanceSheetConfig";
import FinancialsTable from "../../Components/Table/FinancialsTable";

interface Props {
    ticker: string;
    state: number;
    tabNumber: number;
    error: string;
    setError: (error: string) => void;
    isProduction: string | undefined;
}

const BalanceSheetPage: React.FC<Props> = ({
    ticker,
    state,
    tabNumber,
    error,
    setError,
    isProduction
}): JSX.Element => {

    const [balanceSheetData, setBalanceSheetData] = useState<CompanyBalanceSheet[]>([]);

    useEffect(() => {
        const fetchBalanceSheet = async (): Promise<void> => {
            try {
                const result = await getBalanceSheet(ticker);
                if (result && result.data.length > 0) {
                    setBalanceSheetData(result.data);
                } else {
                    if (result) setError("No results found " + result?.statusText);
                }
            } catch (error: any) {
                console.log("error message: ", error.message);
                setError("Error fetching result");
            }
        }

        isProduction ? setBalanceSheetData(dummyBalanceSheetData) : fetchBalanceSheet();
        
    }, [ticker]);

    return <section className={`balance-sheet-page ${state === tabNumber ? 'background-color' : ''}`}>
        {balanceSheetData.length === 0 ? (
            <Spinner />
        ) : (
            <>
                <Table config={balanceSheetHighlightsConfig} data={balanceSheetData} />
                <FinancialsTable config={balanceSheetConfig} data={balanceSheetData}/>
            </>
        )}

        {error && <div className="error">{error}</div>}
    </section>
}

export default BalanceSheetPage;