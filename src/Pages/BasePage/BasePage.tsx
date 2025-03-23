import { useParams } from "react-router-dom";
import "./BasePage.css";
import Tab from "../../Components/Tab/Tab";
import { useState } from "react";
import CompanyProfilePage from "../CompanyProfilePage/CompanyProfilePage";
import IncomeStatementPage from "../IncomeStatementPage/IncomeStatementPage";
import BalanceSheetPage from "../BalanceSheetPage/BalanceSheetPage";
import CashflowStatementPage from "../CashflowStatementPage/CashflowStatementPage";

interface Tabs {
    tabNumber: number;
    title: string;
    component: JSX.Element;
};

const BasePage: React.FC = (): JSX.Element => {

    let { ticker } = useParams();
    const companyProfile: string = "COMPANY PROFILE";
    const incomeStatement: string = "INCOME STATEMENT";
    const balanceSheet: string = "BALANCE SHEET";
    const cashflowStatement: string = "CASHFLOW STATEMENT";
    const financials: string = "FINANCIAL STATEMENTS";

    const [selectedTab, setSelectedTab] = useState<number>(0);
    const [error, setError] = useState<string>("");
    const isProduction = process.env.REACT_APP_ISPRODUCTION;

    let tabs = [
        {
            title: companyProfile,
            tabNumber: 0,
            component:
                <CompanyProfilePage
                    ticker={ticker!}
                    state={selectedTab}
                    tabNumber={0}
                    error={error}
                    setError={setError}
                    isProduction={isProduction}
                />
        },
        {
            title: incomeStatement,
            tabNumber: 1,
            component:
                <IncomeStatementPage
                    ticker={ticker!}
                    state={selectedTab}
                    tabNumber={1}
                    error={error}
                    setError={setError}
                    isProduction={isProduction}
                />
        },
        {
            title: balanceSheet,
            tabNumber: 2,
            component:
                <BalanceSheetPage
                    ticker={ticker!}
                    state={selectedTab}
                    tabNumber={2}
                    error={error}
                    setError={setError}
                    isProduction={isProduction}
                />
        },
        {
            title: cashflowStatement,
            tabNumber: 3,
            component:
                <CashflowStatementPage
                    ticker={ticker!}
                    state={selectedTab}
                    tabNumber={3}
                    error={error}
                    setError={setError}
                    isProduction={isProduction}
                />
        },
    ];

    const renderPage = (): JSX.Element => {
        const selectedPage = tabs.find(tab => tab.tabNumber === selectedTab)?.component
        return <div>{selectedPage}</div>
    }


    return <div className="base-page">
        <div className="base-page-tabs">
            {tabs.map((t, i) => (
                <Tab
                    key={i}
                    title={t.title}
                    state={selectedTab}
                    setState={setSelectedTab}
                    tabNumber={t.tabNumber}
                />
            ))}
        </div>
        {renderPage()}
    </div>
}

export default BasePage;