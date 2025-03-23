export interface CompanyKeyMetrics {
  revenuePerShareTTM: number;
  netIncomePerShareTTM: number;
  operatingCashFlowPerShareTTM: number;
  freeCashFlowPerShareTTM: number;
  cashPerShareTTM: number;
  bookValuePerShareTTM: number;
  tangibleBookValuePerShareTTM: number;
  shareholdersEquityPerShareTTM: number;
  interestDebtPerShareTTM: number;
  marketCapTTM: number;
  enterpriseValueTTM: number;
  peRatioTTM: number;
  priceToSalesRatioTTM: number;
  pocfratioTTM: number;
  pfcfRatioTTM: number;
  pbRatioTTM: number;
  ptbRatioTTM: number;
  evToSalesTTM: number;
  enterpriseValueOverEBITDATTM: number;
  evToOperatingCashFlowTTM: number;
  evToFreeCashFlowTTM: number;
  earningsYieldTTM: number;
  freeCashFlowYieldTTM: number;
  debtToEquityTTM: number;
  debtToAssetsTTM: number;
  netDebtToEBITDATTM: number;
  currentRatioTTM: number;
  interestCoverageTTM: number;
  incomeQualityTTM: number;
  dividendYieldTTM: number;
  dividendYieldPercentageTTM: number;
  payoutRatioTTM: number;
  salesGeneralAndAdministrativeToRevenueTTM: number;
  researchAndDevelopementToRevenueTTM: number;
  intangiblesToTotalAssetsTTM: number;
  capexToOperatingCashFlowTTM: number;
  capexToRevenueTTM: number;
  capexToDepreciationTTM: number;
  stockBasedCompensationToRevenueTTM: number;
  grahamNumberTTM: number;
  roicTTM: number;
  returnOnTangibleAssetsTTM: number;
  grahamNetNetTTM: number;
  workingCapitalTTM: number;
  tangibleAssetValueTTM: number;
  netCurrentAssetValueTTM: number;
  investedCapitalTTM: number;
  averageReceivablesTTM: number;
  averagePayablesTTM: number;
  averageInventoryTTM: number;
  daysSalesOutstandingTTM: number;
  daysPayablesOutstandingTTM: number;
  daysOfInventoryOnHandTTM: number;
  receivablesTurnoverTTM: number;
  payablesTurnoverTTM: number;
  inventoryTurnoverTTM: number;
  roeTTM: number;
  capexPerShareTTM: number;
  dividendPerShareTTM: number;
  debtToMarketCapTTM: number;
}

export const companyKeyMetricCategories: Record<string, (keyof CompanyKeyMetrics)[]> = {
  profitability: [
    "revenuePerShareTTM",
    "netIncomePerShareTTM",
    "operatingCashFlowPerShareTTM",
    "freeCashFlowPerShareTTM",
    "earningsYieldTTM",
    "freeCashFlowYieldTTM",
    "returnOnTangibleAssetsTTM",
    "roeTTM",
  ],
  valuation: [
    "peRatioTTM",
    "priceToSalesRatioTTM",
    "pocfratioTTM",
    "pfcfRatioTTM",
    "pbRatioTTM",
    "ptbRatioTTM",
    "evToSalesTTM",
    "enterpriseValueOverEBITDATTM",
    "evToOperatingCashFlowTTM",
    "evToFreeCashFlowTTM",
    "marketCapTTM",
    "enterpriseValueTTM",
    "dividendYieldTTM",
    "dividendYieldPercentageTTM",
    "payoutRatioTTM",
  ],
  efficiency: [
    "receivablesTurnoverTTM",
    "payablesTurnoverTTM",
    "inventoryTurnoverTTM",
    "daysSalesOutstandingTTM",
    "daysPayablesOutstandingTTM",
    "daysOfInventoryOnHandTTM",
    "averageReceivablesTTM",
    "averagePayablesTTM",
    "averageInventoryTTM",
  ],
  leverage: [
    "debtToEquityTTM",
    "debtToAssetsTTM",
    "netDebtToEBITDATTM",
    "currentRatioTTM",
    "debtToMarketCapTTM",
    "interestCoverageTTM",
  ],
  incomeQuality: [
    "incomeQualityTTM",
  ],
  capitalInvestment: [
    "capexToOperatingCashFlowTTM",
    "capexToRevenueTTM",
    "capexToDepreciationTTM",
    "capexPerShareTTM",
    "capexToRevenueTTM",
    "stockBasedCompensationToRevenueTTM",
  ],
  tangibleAssets: [
    "bookValuePerShareTTM",
    "tangibleBookValuePerShareTTM",
    "shareholdersEquityPerShareTTM",
    "intangiblesToTotalAssetsTTM",
    "tangibleAssetValueTTM",
  ],
}; 