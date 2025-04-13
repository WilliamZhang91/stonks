import "./Table.css";
import { formatValue } from "../../functions/formatValue";
import Trends from "./Trends";

interface Props {
    config: any;
    data: any;
}

const Table: React.FC<Props> = ({ config, data }): JSX.Element => {

    //loops through financial statement data and formats date and monetary values
    const formattedData: any = data.map((d: any) => {
        const formattedCompany: any = {};
        for (const key in d) {
            formattedCompany[key] = formatValue(key, d[key]);
        }
        return formattedCompany;
    });

    const renderedRows = formattedData.map((company: any, index: number) => {
        return <tr key={index}>
            {config.map((c: any) => {
                return <>
                    <td className="table-cell">{c.render(company)}</td>
                </>
            })}
        </tr>
    });

    const renderedHeaders = config.map((c: any, index: number) => {
        return <th key={index} className="table-header">
            {c.label}
        </th>
    });

    //Config is incomeStatementHighlightsConfig
    const trendRow = (
        <tr key="trend-row">
            {config.map((c: any, index: number) => {
                if (index === 0) {
                    return (
                        <td key={index} className="table-cell">
                            Percentage change Trend
                        </td>
                    );
                }

                return (
                    <td key={index} className="wrapper">
                        {Trends(data, c.label, config)}
                    </td>
                );
            })}
        </tr>
    );

    return (
        <>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            {renderedHeaders}
                        </tr>
                    </thead>
                    <tbody>
                        {renderedRows}
                        {trendRow}
                    </tbody>
                </table>
            </div>

        </>
    );
}

export default Table;