import { CompanyIncomeStatement } from "../../interfaces/CompanyIncomeStatement";
import "./Table.css";
import "../Cards/SingleCard/Card.css";
import { currencyFormatter } from "../../functions/currencyFormatter";


interface Props {
    data: any;
    config: any;
}

const FinancialsTable: React.FC<Props> = ({ data, config }): JSX.Element => {

    const renderedColumns = config.map((val: any, index: number) => (
        <tr key={index} className="table-header">
            <td className="table-cell font-bold">{val.label}</td>
            {data.map((company: any, companyIndex: number) => (
                <td key={companyIndex} className="table-cell">
                    {
                        index === 0 ?
                            new Intl.DateTimeFormat('en-GB').format(new Date(val.render(company)))
                            :
                            currencyFormatter(val.render(company))
                    }
                </td>
            ))}
        </tr>
    ));

    return <div className="table background-color">
        <div className="table">
            <table>
                <tbody>
                    {renderedColumns}
                </tbody>
            </table>
        </div>
    </div>
}

export default FinancialsTable; 