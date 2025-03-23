import "./Table.css";
import { formatValue } from "../../functions/formatValue";
import Trends from "./Trends";

interface Props {
    config: any;
    data: any;
}

const Table: React.FC<Props> = ({ config, data }): JSX.Element => {

    const formattedData: any = data.map((d: any) => {
        const formattedCompany: any = {};
        for (const key in d) {
            formattedCompany[key] = formatValue(key, d[key]);
        }
        return formattedCompany;
    });

    const renderedRows = formattedData.map((company: any, index: number) => {
        return <tr key={index}>
            {config.map((val: any) => {
                return <>
                    <td className="table-cell">{val.render(company)}</td>
                </>
            })}
        </tr>
    });

    const renderedHeaders = config.map((config: any, index: number) => {
        return <th key={index} className="table-header">
            {config.label}
        </th>
    });

    const trendRow = (
        <tr key="trend-row">
            {config.map((val: any, index: number) => {
                if (index === 0) {
                    return (
                        <td key={index} className="table-cell">
                            Percentage change Trend
                        </td>
                    );
                }

                return (
                    <td key={index} className="wrapper">
                        {Trends(data, val.label, config)}
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