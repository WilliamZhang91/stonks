export const getDescription = (
    descriptionMap: Map<string, (metricValue: string, metricName: string) => string>,
    key: string,
    value: string,
    ticker: string,
    metric: string
) => {
    const defaultMessage: string = "Description not available";
    return descriptionMap.get(key)?.(value, metric) ?? "Description not available";
}

export const getPerShareRatioDescription = (metricName: string) => {

    const revenuePerShareDescription: string = "";
    const netIncomePerShareDescription: string = `What counts as a good NIPS will depend on factors such as the recent performance of the company, 
    the performance of its competitors, and the expectations of analysts. For example, a company with a constant increase in its EPS figure is usually regarded 
    to be a reliable option for investment. Furthermore, investors should use the EPS figure in conjunction with other ratios to estimate the future 
    stock value of a company.`;
    const operatingCashFlowPerShareDescription: string = `Operating cash flow (OCF) is cash generated by a company's normal business operations.
    It helps determine if a company is generating sufficient positive cash flow to maintain and grow its operations, without external financing.
    Analysts often consider cash flow per share a better measure of a company’s financial strength than earnings per share. 
    Profit doesn’t tell us how much money the company has free to distribute to shareholders. In other words, some of the profit could be 
    allocated to other areas of the business that might not necessarily benefit shareholders. You don’t need to look for specific targets regarding 
    cash flow per share. $10 cash flow per share is better than $1, but both numbers are positive. So, you should focus on whether the cash flow per share is negative or positive. 
    Then, if the figure is positive, the higher the number, the better.  `;
    const freeCashFlowPerShareDescription: string = `Free cash flow (FCF) or free cash flow to firm (FCFF) is the amount by which a business's operating cash flow exceeds its working 
    capital needs and expenditures on fixed assets (known as capital expenditures). It is that portion of cash flow that can be extracted from a company and distributed to creditors 
    and securities holders without causing issues in its operations. As such, it is an indicator of a company's financial flexibility and is of interest to holders of the company's equity, 
    debt, preferred stock and convertible securities, as well as potential lenders and investors. <br><br>
    FCFPS is the financial ratio that measures the amount of free cash flow (FCF) attributable to each share of common stock. This ratio indicates the financial flexibility of a company 
    and its ability to pay dividends, repurchase shares, and facilitate the growth of the company. <br>
    <ul>
    <li>What is a good Free Cash Flow Per Share ratio? There is no one-size-fits-all answer to this because a "good" FCFPS can vary widely between industries, company sizes, and growth stages. 
    However, a higher FCFPS is generally more attractive to investors as it indicates a company has more cash available for shareholders.</li> 
    <li>What does it mean if the FCFPS ratio is negative? A negative FCFPS ratio suggests that the company is spending more cash than it's generating, 
    which could be a cause for concern. This could be a result of high capital expenditure or poor cash management.</li>
    </ul>`;

    const revenuePerShare = "REVENUE PER SHARE";
    const netIncomePerShare = "NET INCOME PER SHARE";
    const operatingCashFlowPerShare = "OPERATING CASH FLOW PER SHARE";
    const freeCashFlowPerShare = "FREE CASH FLOW PER SHARE";

    switch (metricName) {
        case revenuePerShare:
            return revenuePerShareDescription;
        case netIncomePerShare:
            return netIncomePerShareDescription;
        case operatingCashFlowPerShare:
            return operatingCashFlowPerShareDescription;
        case freeCashFlowPerShare:
            return freeCashFlowPerShareDescription;
        default:
            return "";
    }
}

export const getYieldDescription = (metricName: string) => {
    const freeCashFlowYield: string = `Free cash flow yield is a solvency ratio that compares the free cash flow per share. 
    The ratio is calculated by taking the free cash flwo per share divided by the current share price. Generally, the lower the ratio,
    the less attractive a company is as an investment as it means investors are putting money into the company but not receiving a good
    return in exchange. Inversely, a high free cash flow yield means a company is generating enough cash to easily satisfy its debt and
    other obligations
    
    Before tapping into any outside financing, a company first uses its operating cash flow to meet capital expenditure requirements. 
    Anything left is referred to as free cash flow and becomes available to equity holders.
    `;
    
}