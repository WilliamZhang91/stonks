import { Dividend } from "./Dividend";

export interface CompanyHistoricalDividend {
    symbol: string;
    historical: Dividend[];
}