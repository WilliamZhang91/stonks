import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { metricDescriptions } from "../../descriptions/metricDescriptions";
import { getDescription } from "../../functions/getDescription";
import { Chart } from "react-google-charts";

interface historicMetrics {
    year: string,
    metric: number,
}

const MetricsPage: React.FC = (): JSX.Element => {
    const { ticker } = useParams();
    const { state } = useLocation();
    const metric = state?.metric; // metric name as returned by Api
    const metricName = state?.metricName // formatted metric name
    const metricValue = state?.metricValue;
    const historicMetrics = state?.array;

    if (!ticker) {
        return <div>No Description available</div>
    }

    const description: string = getDescription(metricDescriptions, metric, metricValue, ticker, metricName);
    const options = {
        title: `${metricName ? metricName : ""}`,
    }

    return <div className="base-page">
        <div className="company-profile-page background-color">
            <h2 className="card" style={{ padding: "20px" }}>{metricName} ({ticker})</h2>
            <div className="group-card">
                <p dangerouslySetInnerHTML={{ __html: description }} />
                <div style={{marginTop: "0px"}}>
                    {
                        historicMetrics ?
                        <Chart
                            chartType="LineChart"
                            width="100%"
                            height="600px"
                            data={historicMetrics}
                            options={options}
                            legendToggle
                        /> 
                        :
                        <div>No data available</div>
                    }
                </div>
            </div>
        </div>
    </div>
}

export default MetricsPage;
