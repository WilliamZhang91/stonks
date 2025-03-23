import { AxiosRequestHeaders, AxiosResponse } from "axios";
import { dummyKeyMetrics, dummyHistoricalKeyMetrics } from "../../../../dummy-data/dummyHistoricalKeyMetrics";
import { getKeyMetrics, getKeyMetricsHistorical } from "../../../../functions/api/api";
import { MemoryRouter, Router } from "react-router-dom";
import { fireEvent, render, screen } from '@testing-library/react';
import GroupCard from "../../../../Components/Cards/GroupCard/GroupCard";
import { CompanyKeyMetrics } from "../../../../interfaces/CompanyKeyMetrics";
import { CompanyKeyMetricsHistorical } from "../../../../interfaces/CompanyKeyMetricsHistorical";

jest.mock('../../../../functions/api/api', () => ({
    getKeyMetrics: jest.fn() as jest.MockedFunction<typeof getKeyMetrics>,
    getKeyMetricsHistorical: jest.fn() as jest.MockedFunction<typeof getKeyMetricsHistorical>,
}));

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

interface Props {
    ticker: string;
    companyKeyMetricsData: CompanyKeyMetrics[];
    setCompanyKeyMetricsData: (keyMetricsData: CompanyKeyMetrics[]) => void;
    historicalCompanyKeyMetricsData: CompanyKeyMetricsHistorical[];
    setHistoricalCompanyKeyMetricsData: (keyMetricsData: CompanyKeyMetricsHistorical[]) => void;
    isProduction: string | undefined;
}

describe("GroupCard Component", () => {
    const setCompanyKeyMetricsData = jest.fn();
    const setHistoricalCompanyKeyMetricsData = jest.fn();
    const navigate = jest.fn();

    const companyKeyMetricsMockResponse: AxiosResponse = {
        data: dummyKeyMetrics,
        status: 200,
        statusText: "OK",
        headers: {},
        config: {
            headers: { "Content-Type": "application/json" } as AxiosRequestHeaders,
            timeout: 1000,
        },
    };

    const companyKeyMetricsHistoricMockResponse: AxiosResponse = {
        data: dummyHistoricalKeyMetrics,
        status: 200,
        statusText: "OK",
        headers: {},
        config: {
            headers: { "Content-Type": "application/json" } as AxiosRequestHeaders,
            timeout: 1000,
        },
    };

    beforeEach(() => {
        (getKeyMetrics as jest.MockedFunction<typeof getKeyMetrics>)
            .mockResolvedValueOnce(companyKeyMetricsMockResponse) 
            .mockResolvedValueOnce(companyKeyMetricsHistoricMockResponse);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    const renderGroupCard = (
        props: Partial<Props> = {}
    ) => {
        return render(
            <MemoryRouter>
                <GroupCard
                    ticker="TSLA"
                    companyKeyMetricsData={[]}
                    historicalCompanyKeyMetricsData={[]}
                    isProduction="true"
                    setCompanyKeyMetricsData={setCompanyKeyMetricsData}
                    setHistoricalCompanyKeyMetricsData={setHistoricalCompanyKeyMetricsData}
                    {...props}
                />
            </MemoryRouter>
        );
    };

    test("Expect No data available to be in document", () => {
        const { getByText } = renderGroupCard();
        const noDataAvailable = getByText(/^No data available/i);
        expect(noDataAvailable).toBeInTheDocument();
    });

    test("Expect REVENUE PER SHARE to be in document", () => {
        const { getByText } = renderGroupCard({
            companyKeyMetricsData: companyKeyMetricsMockResponse.data,
            historicalCompanyKeyMetricsData: companyKeyMetricsHistoricMockResponse.data,
            isProduction: "false"
        });

        const revenuePerShareTTM = getByText(/^REVENUE PER SHARE/i);
        expect(revenuePerShareTTM).toBeInTheDocument();
    });

    test("Expands and closes accordion items on click", () => {
        jest.spyOn(Storage.prototype, "setItem"); 
        jest.spyOn(Storage.prototype, "removeItem");

        const { getByText } = renderGroupCard({
            companyKeyMetricsData: companyKeyMetricsMockResponse.data,
            historicalCompanyKeyMetricsData: companyKeyMetricsHistoricMockResponse.data,
            isProduction: "false"
        });
        const accordionItem = getByText(/profitability/i);
        const panelId = "panel1";

        fireEvent.click(accordionItem);
        expect(localStorage.setItem).toHaveBeenCalledWith("expanded panel", panelId);
        fireEvent.click(accordionItem);
        expect(localStorage.removeItem).toHaveBeenCalledWith("expanded panel");
    });
});