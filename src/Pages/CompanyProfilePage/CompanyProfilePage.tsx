import { useEffect, useState } from "react";
import { CompanyProfile } from "../../interfaces/CompanyProfile";
import { getCompanyProfile } from "../../functions/api/api";
import Spinner from "../../Components/Spinner/Spinner";
import "./CompanyProfilePage.css";
import Card from "../../Components/Cards/SingleCard/Card";
import GroupCard from "../../Components/Cards/GroupCard/GroupCard";
import { CompanyKeyMetrics } from "../../interfaces/CompanyKeyMetrics";
import { CompanyKeyMetricsHistorical } from "../../interfaces/CompanyKeyMetricsHistorical";
import { currencyFormatter } from "../../functions/currencyFormatter";


interface Props {
    ticker: string;
    state: number;
    tabNumber?: number;
    error: string;
    setError: (error: string) => void;
    isProduction: string | undefined;
}

const dummyData = {
    "data": [
        {
            "symbol": "TSLA",
            "price": 214.14,
            "beta": 2.313,
            "volAvg": 95143369,
            "mktCap": 684100209600,
            "lastDiv": 0,
            "range": "138.8-278.98",
            "changes": 12.76,
            "companyName": "Tesla, Inc.",
            "currency": "USD",
            "cik": "0001318605",
            "isin": "US88160R1014",
            "cusip": "88160R101",
            "exchange": "NASDAQ Global Select",
            "exchangeShortName": "NASDAQ",
            "industry": "Auto - Manufacturers",
            "website": "https://www.tesla.com",
            "description": "Tesla, Inc. designs, develops, manufactures, leases, and sells electric vehicles, and energy generation and storage systems in the United States, China, and internationally. It operates in two segments, Automotive, and Energy Generation and Storage. The Automotive segment offers electric vehicles, as well as sells automotive regulatory credits; and non-warranty after-sales vehicle, used vehicles, retail merchandise, and vehicle insurance services. This segment also provides sedans and sport utility vehicles through direct and used vehicle sales, a network of Tesla Superchargers, and in-app upgrades; purchase financing and leasing services; services for electric vehicles through its company-owned service locations and Tesla mobile service technicians; and vehicle limited warranties and extended service plans. The Energy Generation and Storage segment engages in the design, manufacture, installation, sale, and leasing of solar energy generation and energy storage products, and related services to residential, commercial, and industrial customers and utilities through its website, stores, and galleries, as well as through a network of channel partners; and provision of service and repairs to its energy product customers, including under warranty, as well as various financing options to its solar customers. The company was formerly known as Tesla Motors, Inc. and changed its name to Tesla, Inc. in February 2017. Tesla, Inc. was incorporated in 2003 and is headquartered in Austin, Texas.",
            "ceo": "Mr. Elon R. Musk",
            "sector": "Consumer Cyclical",
            "counter": "string",
            "country": "US",
            "fullTimeEmployees": "140473",
            "phone": "512 516 8177",
            "address": "1 Tesla Road",
            "city": "Austin",
            "state": "TX",
            "zip": "78725",
            "dcfDiff": 142.884,
            "dcf": 71.25599695627271,
            "image": "https://financialmodelingprep.com/image-stock/TSLA.png",
            "ipoDate": "2010-06-29",
            "defaultImage": false,
            "isEtf": false,
            "isActivelyTrading": true,
            "isAdr": false,
            "isFund": false
        }
    ],
    "status": 200,
    "statusText": "",
    "headers": {
        "content-type": "application/json; charset=utf-8"
    },
    "config": {
        "transitional": {
            "silentJSONParsing": true,
            "forcedJSONParsing": true,
            "clarifyTimeoutError": false
        },
        "adapter": [
            "xhr",
            "http",
            "fetch"
        ],
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1,
        "env": {},
        "headers": {
            "Accept": "application/json, text/plain, */*"
        },
        "method": "get",
        "url": "https://financialmodelingprep.com/api/v3/profile/TSLA?apikey=uNHwNLfz5js6P4pns0jZDNZJ8KxGmItY"
    },
    "request": {}
}

const CompanyProfilePage: React.FC<Props> = ({
    ticker,
    state,
    tabNumber,
    error,
    setError,
    isProduction,
}): JSX.Element => {

    const [companyProfileData, setCompanyProfileData] = useState<CompanyProfile[]>([]);
    const [companyKeyMetricsData, setCompanyKeyMetricsData] = useState<CompanyKeyMetrics[]>([]);
    const [historicalCompanyKeyMetricsData, setHistoricalCompanyKeyMetricsData] = useState<CompanyKeyMetricsHistorical[]>([]);

    useEffect(() => {
        const fetchCompanyProfile = async (): Promise<void> => {
            try {
                if (ticker) {
                    const result = await getCompanyProfile(ticker);

                    if (result && result.data.length > 0) {
                        setCompanyProfileData(result.data);
                        console.log(result);
                    } else {
                        if (result) setError("No results found " + result?.statusText)
                    }

                } else {
                    setError("No ticker specified");
                }
            } catch (err: any) {
                console.error("Error fetching company profile: ", err);
                setError("Error fetching results");
            }
        }

        isProduction === "false" ? setCompanyProfileData(dummyData.data) : fetchCompanyProfile();

    }, [ticker]);



    return <section className={`company-profile-page ${state === tabNumber ? 'background-color' : ''}`}>
        {companyProfileData.length === 0 ? (
            <Spinner />
        ) : (
            companyProfileData.map((d, i) => {
                const price = d.price.toFixed(2);
                const dcf = d.dcf.toFixed(2);
                const marketCap = currencyFormatter(d.mktCap);

                return (
                    <div key={i}>
                        <div style={{ width: "100%" }}>
                            <img src={d.image} alt={d.companyName} style={{ width: "80px" }} />
                        </div>
                        <div className="company-profile-page-cards">
                            <Card title={"COMPANY"}>{d.companyName}</Card>
                            <Card title={"PRICE"}>{"$" + price}</Card>
                            <Card title={"DISCOUNTED CASH FLOW"}>{"$" + dcf}</Card>
                            <Card title={"MARKET CAP"}>{marketCap}</Card>
                        </div>
                        <div className="company-description">
                            <Card title={"DESCRIPTION"}>
                                {d.description || "No description available"}
                            </Card>
                        </div>
                    </div>
                );
            })
        )}
        <GroupCard
            ticker={ticker}
            companyKeyMetricsData={companyKeyMetricsData}
            setCompanyKeyMetricsData={setCompanyKeyMetricsData}
            historicalCompanyKeyMetricsData={historicalCompanyKeyMetricsData}
            setHistoricalCompanyKeyMetricsData={setHistoricalCompanyKeyMetricsData}
            isProduction={isProduction}
        />
        {error && <div className="error">{error}</div>}
    </section>
}

export default CompanyProfilePage;