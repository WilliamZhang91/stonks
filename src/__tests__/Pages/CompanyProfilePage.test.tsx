jest.mock("../../functions/api/api", () => ({
    getCompanyProfile: jest.fn(), // this creates a jest.fn() for getCompanyProfile
}));

import { MemoryRouter } from "react-router";
import CompanyProfilePage from "../../Pages/CompanyProfilePage/CompanyProfilePage";
import { render, waitFor } from "@testing-library/react";
import { getCompanyProfile } from "../../functions/api/api";

interface Props {
    ticker: string;
    state: number;
    tabNumber: number;
    error: string;
    setError: () => void;
    isProduction: string;
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

describe("CompanyProfilePage page", () => {

    const setError = jest.fn();

    const renderCompanyProfilePage = (props: Partial<Props> = {}) => render(
        <MemoryRouter>
            <CompanyProfilePage
                ticker="TSLA"
                state={1}
                tabNumber={1}
                error=""
                setError={setError}
                isProduction="true"
            />
        </MemoryRouter>
    );

    test("Shows Spinner component if companyProfileData is empty and isProduction is true", async () => {
        const mockApiResponse = {
            data: [],
            status: 200,
            statusText: "No results found",
        };

        (getCompanyProfile as jest.Mock).mockResolvedValue(mockApiResponse);

        const { getByTestId } = renderCompanyProfilePage({
            isProduction: "true",
        });

        const spinner = getByTestId("spinner");
        expect(spinner).toBeInTheDocument();
    });

    test("Spinner is removed when data is resolved", async () => {
        const mockApiResponse = {
            data: dummyData.data,
            status: 200,
            statusText: "",
        };

        (getCompanyProfile as jest.Mock).mockResolvedValue(mockApiResponse);

        const { getByTestId } = renderCompanyProfilePage({
            isProduction: "true",
        });

        const spinner = getByTestId("spinner");
        expect(spinner).toBeInTheDocument();

        // Wait for API response and check the spinner removal (optional)
        await waitFor(() => {
            expect(spinner).not.toBeInTheDocument(); // Ensure spinner disappears when API finishes
        });
    });
});