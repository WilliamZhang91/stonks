import { CompanyKeyMetrics } from "../interfaces/CompanyKeyMetrics";
import { CompanyKeyMetricsHistorical } from "../interfaces/CompanyKeyMetricsHistorical";

export const dummyKeyMetrics = [
    {
        "revenuePerShareTTM": 29.870886869319964,
        "netIncomePerShareTTM": 3.8827953619555,
        "operatingCashFlowPerShareTTM": 3.61391413350047,
        "freeCashFlowPerShareTTM": 0.5380758382952052,
        "cashPerShareTTM": 9.74428078972109,
        "bookValuePerShareTTM": 20.829833907865872,
        "tangibleBookValuePerShareTTM": 20.949545596991538,
        "shareholdersEquityPerShareTTM": 20.829833907865872,
        "interestDebtPerShareTTM": 2.644625509244751,
        "marketCapTTM": 690425596800,
        "enterpriseValueTTM": 687931596800,
        "peRatioTTM": 55.66092978208232,
        "priceToSalesRatioTTM": 7.243391560880421,
        "pocfratioTTM": 59.80219562955255,
        "pfcfRatioTTM": 402.1115881188119,
        "pbRatioTTM": 10.37550279833905,
        "ptbRatioTTM": 10.37550279833905,
        "evToSalesTTM": 7.217226513355294,
        "enterpriseValueOverEBITDATTM": 54.065670921094,
        "evToOperatingCashFlowTTM": 59.65414471037114,
        "evToFreeCashFlowTTM": 400.6590546301689,
        "earningsYieldTTM": 0.01796592338495049,
        "freeCashFlowYieldTTM": 0.002486871877227597,
        "debtToEquityTTM": 0.12562436059457183,
        "debtToAssetsTTM": 0.0740038287010777,
        "netDebtToEBITDATTM": -0.19600754479723356,
        "currentRatioTTM": 1.9105268852104296,
        "interestCoverageTTM": 81.19101123595506,
        "incomeQualityTTM": 0.9277554304102976,
        "dividendYieldTTM": 0,
        "dividendYieldPercentageTTM": 0,
        "payoutRatioTTM": 0,
        "salesGeneralAndAdministrativeToRevenueTTM": 0,
        "researchAndDevelopementToRevenueTTM": 0.04700056652468579,
        "intangiblesToTotalAssetsTTM": 0.003660309132161089,
        "capexToOperatingCashFlowTTM": 0.8511099549080818,
        "capexToRevenueTTM": 0.10297110724102478,
        "capexToDepreciationTTM": 1.96653977158886,
        "stockBasedCompensationToRevenueTTM": 0.020059170356071257,
        "grahamNumberTTM": 42.65858185611323,
        "roicTTM": 0.15676174252332958,
        "returnOnTangibleAssetsTTM": 0.11021268646759,
        "grahamNetNetTTM": -1.4336414916953932,
        "workingCapitalTTM": 25248000000,
        "tangibleAssetValueTTM": 66850000000,
        "netCurrentAssetValueTTM": 7408000000,
        "investedCapitalTTM": 73769000000,
        "averageReceivablesTTM": 3812000000,
        "averagePayablesTTM": 13890500000,
        "averageInventoryTTM": 15114000000,
        "daysSalesOutstandingTTM": 14.310046371094652,
        "daysPayablesOutstandingTTM": 60.76197276482889,
        "daysOfInventoryOnHandTTM": 66.0628219513439,
        "receivablesTurnoverTTM": 25.506556061011505,
        "payablesTurnoverTTM": 6.007046568627451,
        "inventoryTurnoverTTM": 5.525044029587883,
        "roeTTM": 0.20069164918646182,
        "capexPerShareTTM": 3.0758382952052647,
        "dividendPerShareTTM": 0,
        "debtToMarketCapTTM": 0.012093989618433568
    }
];

export const dummyHistoricalKeyMetrics: CompanyKeyMetricsHistorical[] = [
    {
        "symbol": "TSLA",
        "date": "2023-12-31",
        "calendarYear": "2023",
        "period": "FY",
        "revenuePerShare": 30.489287964713295,
        "netIncomePerShare": 4.7255828607435415,
        "operatingCashFlowPerShare": 4.17643352236925,
        "freeCashFlowPerShare": 1.372715816005041,
        "cashPerShare": 9.166351606805293,
        "bookValuePerShare": 20.0406427221172,
        "tangibleBookValuePerShare": 19.8468809073724,
        "shareholdersEquityPerShare": 19.733459357277884,
        "interestDebtPerShare": 1.5163831127914305,
        "marketCap": 788675520000,
        "enterpriseValue": 781850520000,
        "peRatio": 52.58187345823055,
        "priceToSalesRatio": 8.14974755355316,
        "pocfratio": 59.49573928786964,
        "pfcfRatio": 181.0134312600413,
        "pbRatio": 12.591811476195037,
        "ptbRatio": 12.591811476195037,
        "evToSales": 8.079221683734099,
        "enterpriseValueOverEBITDA": 52.842019464720195,
        "evToOperatingCashFlow": 58.980878092939044,
        "evToFreeCashFlow": 179.4469864585724,
        "earningsYield": 0.019017960643687788,
        "freeCashFlowYield": 0.0055244519317652965,
        "debtToEquity": 0.0743525880512182,
        "debtToAssets": 0.04367930368230505,
        "netDebtToEBITDA": -0.46127331711273317,
        "currentRatio": 1.7258939752330598,
        "interestCoverage": 56.993589743589745,
        "incomeQuality": 0.8852677975156938,
        "dividendYield": 0,
        "payoutRatio": 0,
        "salesGeneralAndAdministrativeToRevenue": 0,
        "researchAndDdevelopementToRevenue": 0.04101350583323861,
        "intangiblesToTotalAssets": 0.005768256767150012,
        "capexToOperatingCashFlow": 0.6713186481593241,
        "capexToRevenue": 0.0919574674754322,
        "capexToDepreciation": 1.9067923719734305,
        "stockBasedCompensationToRevenue": 0.018724230932181497,
        "grahamNumber": 45.80580956323621,
        "roic": 0.19838354092674731,
        "returnOnTangibleAssets": 0.1414959953963567,
        "grahamNetNet": -1.4086326402016383,
        "workingCapital": 20868000000,
        "tangibleAssetValue": 62994000000,
        "netCurrentAssetValue": 6607000000,
        "investedCapital": 66606000000,
        "averageReceivables": 3230000000,
        "averagePayables": 14843000000,
        "averageInventory": 13232500000,
        "daysSalesOutstanding": 13.23116985109483,
        "daysPayablesOutstanding": 66.57963925018645,
        "daysOfInventoryOnHand": 62.865647870767134,
        "receivablesTurnover": 27.5863740022805,
        "payablesTurnover": 5.482156468713187,
        "inventoryTurnover": 5.806032584764421,
        "roe": 0.23947057508701344,
        "capexPerShare": 2.803717706364209
    },
    {
        "symbol": "TSLA",
        "date": "2022-12-31",
        "calendarYear": "2022",
        "period": "FY",
        "revenuePerShare": 26.026198083067094,
        "netIncomePerShare": 4.020127795527157,
        "operatingCashFlowPerShare": 4.704153354632588,
        "freeCashFlowPerShare": 2.412779552715655,
        "cashPerShare": 7.087859424920127,
        "bookValuePerShare": 14.663897763578275,
        "tangibleBookValuePerShare": 14.47444089456869,
        "shareholdersEquityPerShare": 14.282428115015975,
        "interestDebtPerShare": 0.7143769968051118,
        "marketCap": 385553400000,
        "enterpriseValue": 375048400000,
        "peRatio": 30.640816975284114,
        "priceToSalesRatio": 4.73292332621345,
        "pocfratio": 26.185370823145885,
        "pfcfRatio": 51.05315148305085,
        "pbRatio": 8.624583929849678,
        "ptbRatio": 8.624583929849678,
        "evToSales": 4.603967494046304,
        "enterpriseValueOverEBITDA": 21.550790093662012,
        "evToOperatingCashFlow": 25.47190980711763,
        "evToFreeCashFlow": 49.662129237288134,
        "earningsYield": 0.03263620551653804,
        "freeCashFlowYield": 0.019587429393697474,
        "debtToEquity": 0.045745347172512524,
        "debtToAssets": 0.024836648934878185,
        "netDebtToEBITDA": -0.6036315577773947,
        "currentRatio": 1.53195552061103,
        "interestCoverage": 71.49738219895288,
        "incomeQuality": 1.172666454284804,
        "dividendYield": 0,
        "payoutRatio": 0,
        "salesGeneralAndAdministrativeToRevenue": 0,
        "researchAndDdevelopementToRevenue": 0.03774766148633719,
        "intangiblesToTotalAssets": 0.007202020938084481,
        "capexToOperatingCashFlow": 0.48709589785384405,
        "capexToRevenue": 0.0880410498146375,
        "capexToDepreciation": 2.0242732147897264,
        "stockBasedCompensationToRevenue": 0.019150033144288134,
        "grahamNumber": 35.94282530196911,
        "roic": 0.2680099753592866,
        "returnOnTangibleAssets": 0.15392990396966175,
        "grahamNetNet": -1.7960063897763578,
        "workingCapital": 14208000000,
        "tangibleAssetValue": 45305000000,
        "netCurrentAssetValue": 4477000000,
        "investedCapital": 51436000000,
        "averageReceivables": 2432500000,
        "averagePayables": 12640000000,
        "averageInventory": 9298000000,
        "daysSalesOutstanding": 13.226780584812552,
        "daysPayablesOutstanding": 91.8687818640796,
        "daysOfInventoryOnHand": 77.31912752231517,
        "receivablesTurnover": 27.59552845528455,
        "payablesTurnover": 3.9730580137659786,
        "inventoryTurnover": 4.720694758158735,
        "roe": 0.28147369362920543,
        "capexPerShare": 2.291373801916933
    },
    {
        "symbol": "TSLA",
        "date": "2021-12-31",
        "calendarYear": "2021",
        "period": "FY",
        "revenuePerShare": 18.189591078066915,
        "netIncomePerShare": 1.866846907739101,
        "operatingCashFlowPerShare": 3.8854342683338965,
        "freeCashFlowPerShare": 1.1770868536667793,
        "cashPerShare": 5.98411625549172,
        "bookValuePerShare": 10.673538357553227,
        "tangibleBookValuePerShare": 10.093274754984792,
        "shareholdersEquityPerShare": 10.202433254477864,
        "interestDebtPerShare": 1.9307198377830348,
        "marketCap": 1042337340000,
        "enterpriseValue": 1033634340000,
        "peRatio": 188.69249456915279,
        "priceToSalesRatio": 19.366020846106682,
        "pocfratio": 90.66168043837523,
        "pfcfRatio": 299.2642377260982,
        "pbRatio": 34.52705753751366,
        "ptbRatio": 34.52705753751366,
        "evToSales": 19.204324173680398,
        "enterpriseValueOverEBITDA": 107.39058077922078,
        "evToOperatingCashFlow": 89.90470035661477,
        "evToFreeCashFlow": 296.7655297157623,
        "earningsYield": 0.005299627853685065,
        "freeCashFlowYield": 0.003341528568860442,
        "debtToEquity": 0.17695186988638245,
        "debtToAssets": 0.08597962369831486,
        "netDebtToEBITDA": -0.9042077922077922,
        "currentRatio": 1.3752854605430094,
        "interestCoverage": 17.5822102425876,
        "incomeQuality": 2.083167240442109,
        "dividendYield": 0,
        "payoutRatio": 0,
        "salesGeneralAndAdministrativeToRevenue": 0,
        "researchAndDdevelopementToRevenue": 0.04817643015067908,
        "intangiblesToTotalAssets": 0.027635157972670646,
        "capexToOperatingCashFlow": 0.6970514047142733,
        "capexToRevenue": 0.14889545361648365,
        "capexToDepreciation": 2.753005839917554,
        "stockBasedCompensationToRevenue": 0.03940694498634413,
        "grahamNumber": 20.701293966370145,
        "roic": 0.16335492838003898,
        "returnOnTangibleAssets": 0.09143575992319661,
        "grahamNetNet": -2.8819702602230484,
        "workingCapital": 7395000000,
        "tangibleAssetValue": 29866000000,
        "netCurrentAssetValue": -3448000000,
        "investedCapital": 40284000000,
        "averageReceivables": 1899500000,
        "averagePayables": 8038000000,
        "averageInventory": 4929000000,
        "daysSalesOutstanding": 12.972985526633597,
        "daysPayablesOutstanding": 90.98453390357311,
        "daysOfInventoryOnHand": 52.249173235199045,
        "receivablesTurnover": 28.135389440669105,
        "payablesTurnover": 4.011670822942643,
        "inventoryTurnover": 6.985756470383881,
        "roe": 0.18298055583159428,
        "capexPerShare": 2.7083474146671174
    },
    {
        "symbol": "TSLA",
        "date": "2020-12-31",
        "calendarYear": "2020",
        "period": "FY",
        "revenuePerShare": 10.95,
        "netIncomePerShare": 0.2503472222222222,
        "operatingCashFlowPerShare": 2.0635416666666666,
        "freeCashFlowPerShare": 0.9378472222222223,
        "cashPerShare": 6.730555555555555,
        "bookValuePerShare": 8.221875,
        "tangibleBookValuePerShare": 8.041319444444444,
        "shareholdersEquityPerShare": 7.717013888888889,
        "interestDebtPerShare": 3.826041666666667,
        "marketCap": 677433600000,
        "enterpriseValue": 671328600000,
        "peRatio": 939.5750346740638,
        "priceToSalesRatio": 21.481278538812784,
        "pocfratio": 113.98849066128219,
        "pfcfRatio": 250.80844131803036,
        "pbRatio": 30.480701912260965,
        "ptbRatio": 30.480701912260965,
        "evToSales": 21.2876902587519,
        "enterpriseValueOverEBITDA": 157.1094313128949,
        "evToOperatingCashFlow": 112.96123170116103,
        "evToFreeCashFlow": 248.54816734542763,
        "earningsYield": 0.0010643109523944486,
        "freeCashFlowYield": 0.00398710663303385,
        "debtToEquity": 0.46213723284589425,
        "debtToAssets": 0.19695865613254582,
        "netDebtToEBITDA": -1.4287385911537562,
        "currentRatio": 1.8751403705783267,
        "interestCoverage": 2.665775401069519,
        "incomeQuality": 8.61304347826087,
        "dividendYield": 0,
        "payoutRatio": 0,
        "salesGeneralAndAdministrativeToRevenue": 0,
        "researchAndDdevelopementToRevenue": 0.047279299847793,
        "intangiblesToTotalAssets": 0.009971619237554652,
        "capexToOperatingCashFlow": 0.5455157327948847,
        "capexToRevenue": 0.10280314561136479,
        "capexToDepreciation": 1.396210163652024,
        "stockBasedCompensationToRevenue": 0.05498477929984779,
        "grahamNumber": 6.593063953580835,
        "roic": 0.045834943983506946,
        "returnOnTangibleAssets": 0.013965290152630356,
        "grahamNetNet": -1.9513888888888888,
        "workingCapital": 12469000000,
        "tangibleAssetValue": 23159000000,
        "netCurrentAssetValue": -1752000000,
        "investedCapital": 36367000000,
        "averageReceivables": 1605000000,
        "averagePayables": 4911000000,
        "averageInventory": 3826500000,
        "daysSalesOutstanding": 21.828703703703702,
        "daysPayablesOutstanding": 88.67802939050831,
        "daysOfInventoryOnHand": 60.100578173934,
        "receivablesTurnover": 16.721102863202546,
        "payablesTurnover": 4.116013882002974,
        "inventoryTurnover": 6.073152889539137,
        "roe": 0.03244094488188976,
        "capexPerShare": 1.1256944444444446
    },
    {
        "symbol": "TSLA",
        "date": "2019-12-31",
        "calendarYear": "2019",
        "period": "FY",
        "revenuePerShare": 9.257250470809792,
        "netIncomePerShare": -0.32467043314500943,
        "operatingCashFlowPerShare": 0.9058380414312618,
        "freeCashFlowPerShare": 0.36459510357815444,
        "cashPerShare": 2.360828625235405,
        "bookValuePerShare": 3.054613935969868,
        "tangibleBookValuePerShare": 2.8523540489642185,
        "shareholdersEquityPerShare": 2.4926553672316385,
        "interestDebtPerShare": 4.7028248587570625,
        "marketCap": 74047950000,
        "enterpriseValue": 82382950000,
        "peRatio": -85.90249419953597,
        "priceToSalesRatio": 3.0127736186833753,
        "pocfratio": 30.7891683991684,
        "pfcfRatio": 76.49581611570248,
        "pbRatio": 11.188871260199456,
        "ptbRatio": 11.188871260199456,
        "evToSales": 3.3518980388965742,
        "enterpriseValueOverEBITDA": 37.9295349907919,
        "evToOperatingCashFlow": 34.254864864864864,
        "evToFreeCashFlow": 85.10635330578512,
        "earningsYield": -0.011641105526891697,
        "freeCashFlowYield": 0.013072610382866778,
        "debtToEquity": 1.7831671199758234,
        "debtToAssets": 0.34396222565507595,
        "netDebtToEBITDA": 3.8374769797421733,
        "currentRatio": 1.1346207931002157,
        "interestCoverage": -0.10072992700729927,
        "incomeQuality": 0,
        "dividendYield": 0,
        "payoutRatio": 0,
        "salesGeneralAndAdministrativeToRevenue": 0,
        "researchAndDdevelopementToRevenue": 0.05464236308894133,
        "intangiblesToTotalAssets": 0.01565186977178,
        "capexToOperatingCashFlow": 0.5954261954261955,
        "capexToRevenue": 0.058263487671901704,
        "capexToDepreciation": 0.6845124282982792,
        "stockBasedCompensationToRevenue": 0.03653674017413947,
        "grahamNumber": 4.267207365433205,
        "roic": -0.004365792596481158,
        "returnOnTangibleAssets": -0.025524102807059103,
        "grahamNetNet": -6.464030131826742,
        "workingCapital": 1436000000,
        "tangibleAssetValue": 7573000000,
        "netCurrentAssetValue": -14096000000,
        "investedCapital": 22169000000,
        "averageReceivables": 1136500000,
        "averagePayables": 3588000000,
        "averageInventory": 3332500000,
        "daysSalesOutstanding": 19.662299617544146,
        "daysPayablesOutstanding": 67.11273099614803,
        "daysOfInventoryOnHand": 63.21517382612512,
        "receivablesTurnover": 18.563444108761328,
        "payablesTurnover": 5.438610448156988,
        "inventoryTurnover": 5.77393018018018,
        "roe": -0.13025083106678756,
        "capexPerShare": 0.5393596986817326
    }
]
