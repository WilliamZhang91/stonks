import axios, { AxiosResponse } from "axios";
import { CompanySearch } from "../../interfaces/CompanySearch";
import { CompanyProfile } from "../../interfaces/CompanyProfile";
import { CompanyKeyMetrics } from "../../interfaces/CompanyKeyMetrics";
import { CompanyIncomeStatement } from "../../interfaces/CompanyIncomeStatement";
import { CompanyCashFlow } from "../../interfaces/CompanyCashFlow";
import { CompanyCompData } from "../../interfaces/CompanyCompData";
import { CompanyTenK } from "../../interfaces/CompanyTenK";
import { CompanyHistoricalDividend } from "../../interfaces/CompanyHistoricalDividends";
import { CompanyBalanceSheet } from "../../interfaces/CompanyBalanceSheet";
import { CompanyKeyMetricsHistorical } from "../../interfaces/CompanyKeyMetricsHistorical";

interface SearchResponse {
    data: CompanySearch[];
}

const apiKey = process.env.REACT_APP_API_KEY;

export const companySearch = async (query: string) => {
    try {
        const url = `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${apiKey}`
        const response = await axios.get<SearchResponse>(url);
        return response;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            console.error(err.message);
            return err.message;
        } else {
            console.log("Cannot get company data: " + err);
            return "An error has occurred: " + err;
        }
    }
};

export const getCompanyProfile = async (query: string) => {
    try {
        const uri = `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.REACT_APP_API_KEY}`
        const data = await axios.get<CompanyProfile[]>(uri);
        console.log(data)
        return data;
    } catch (err: any) {
        console.log("Cannot get company profile data")
    }
};

export const getKeyMetrics = async (query: string): Promise<AxiosResponse<CompanyKeyMetrics[]>> => {
    try {
        const uri = `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?limit=40&apikey=${process.env.REACT_APP_API_KEY}`
        const data = await axios.get<CompanyKeyMetrics[]>(uri);
        console.log(data)
        return data;
    } catch (err: any) {
        console.log("Cannot get company profile data");
        throw new Error();
    }
};

export const getKeyMetricsHistorical = async (query: string) => {
    try {
        const uri = `https://financialmodelingprep.com/api/v3/key-metrics/${query}?limit=40&apikey=${process.env.REACT_APP_API_KEY}`
        const data = await axios.get<CompanyKeyMetricsHistorical[]>(uri);
        return data;
    } catch (err: any) {
        console.log("Cannot get company profile data")
    }
}

export const getIncomeStatement = async (query: string) => {
    try {
        const uri = `https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=50&apikey=${process.env.REACT_APP_API_KEY}`
        const data = await axios.get<CompanyIncomeStatement[]>(uri);
        console.log(data)
        return data;
    } catch (err: any) {
        console.log("Cannot get company profile data")
    }
};

export const getBalanceSheet = async (query: string) => {
    try {
        const data = await axios.get<CompanyBalanceSheet[]>(
            `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=20&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    } catch (error: any) {
        console.log("error message: ", error.message);
    }
};

export const getCashFlow = async (query: string) => {
    try {
        const data = await axios.get<CompanyCashFlow[]>(
            `https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?limit=100&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    } catch (error: any) {
        console.log("error message: ", error.message);
    }
};

export const getCompData = async (query: string) => {
    try {
        const data = await axios.get<CompanyCompData[]>(
            `https://financialmodelingprep.com/api/v4/stock_peers?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    } catch (error: any) {
        console.log("error message: ", error.message);
    }
};

export const getTenK = async (query: string) => {
    try {
        const data = await axios.get<CompanyTenK[]>(
            `https://financialmodelingprep.com/api/v3/sec_filings/${query}?type=10-K&page=0&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    } catch (error: any) {
        console.log("error message: ", error.message);
    }
};

export const getHistoricalDividend = async (query: string) => {
    try {
        const data = await axios.get<CompanyHistoricalDividend>(
            `https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/${query}?apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    } catch (error: any) {
        console.log("error message: ", error.message);
    }
};