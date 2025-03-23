import { useEffect, useState } from "react";
import { companyKeyMetricCategories, CompanyKeyMetrics } from "../../../interfaces/CompanyKeyMetrics";
import { getKeyMetrics, getKeyMetricsHistorical } from "../../../functions/api/api";
import "./GroupCard.css";
import { reorganiseData } from "../../../functions/reorganiseData";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
    accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { formatText } from "../../../functions/formatText";
import { useNavigate, useParams } from "react-router";
import { dummyHistoricalKeyMetrics, dummyKeyMetrics } from "../../../dummy-data/dummyHistoricalKeyMetrics";
import { CompanyKeyMetricsHistorical } from "../../../interfaces/CompanyKeyMetricsHistorical";

interface Props {
    ticker: string;
    companyKeyMetricsData: CompanyKeyMetrics[];
    setCompanyKeyMetricsData: (keyMetricsData: CompanyKeyMetrics[]) => void;
    historicalCompanyKeyMetricsData: CompanyKeyMetricsHistorical[];
    setHistoricalCompanyKeyMetricsData: (keyMetricsData: CompanyKeyMetricsHistorical[]) => void;
    isProduction: string | undefined;
}

//Will need to replace dummy data with live data
let data: Record<string, Record<string, number>> = {}

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: 'rgba(226, 226, 226, 0.03)',
    flexDirection: 'row-reverse',
    [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
        transform: 'rotate(90deg)',
    },
    [`& .${accordionSummaryClasses.content}`]: {
        marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles('dark', {
        backgroundColor: 'rgba(255, 255, 255, .05)',
        border: "2px solid black"
    }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const GroupCard: React.FC<Props> = ({
    ticker,
    companyKeyMetricsData,
    setCompanyKeyMetricsData,
    historicalCompanyKeyMetricsData,
    setHistoricalCompanyKeyMetricsData,
    isProduction,
}): JSX.Element => {

    const expandedPanel = "expanded panel";
    const [data, setData] = useState<Record<string, Record<string, number>>>({});
    const [error, setError] = useState<string>("");
    const [expanded, setExpanded] = useState<string | null>(localStorage.getItem(expandedPanel));
    const navigate = useNavigate();

    const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        if (newExpanded) {
            localStorage.setItem(expandedPanel, panel);
            setExpanded(panel);
        } else {
            localStorage.removeItem(expandedPanel);
            setExpanded(null);
        }
    }

    
    const handleNavigation = (metric: string, metricName: string, metricValue: string) => {
        const key = metric.slice(0, -3);
        const legend: (string | number)[][] = [
            ["Year", metricName],
        ];

        historicalCompanyKeyMetricsData.forEach(h => {
            const value = h[key as keyof CompanyKeyMetricsHistorical] as number;
            array.unshift([
                h.calendarYear,
                +value.toFixed(3),
            ]);
        });

        const historicMetricArrayForGraphing = array.unshift(...legend)
        navigate(`/Company/${ticker}/${metric}`, {
            state: {
                metric,
                metricName,
                metricValue,
                array
            }
        });
    }

    let array: (string | number)[][] = [];

    useEffect(() => {
        const fetchKeyMetrics = async (): Promise<void> => {
            try {
                if (ticker) {
                    const result = await getKeyMetrics(ticker);

                    if (result && result.data.length > 0) {
                        setCompanyKeyMetricsData(result.data);
                    } else {
                        if (result) setError("No results found " + result?.statusText);
                    }

                }
            } catch (err: any) {
                console.error("Error fetching company metrics: ", err);
            }
        }

        const fetchHistoricalKeyMetrics = async (): Promise<void> => {
            try {
                if (ticker) {
                    const result = await getKeyMetricsHistorical(ticker);
                    if (result && result.data.length > 0) {
                        setHistoricalCompanyKeyMetricsData(result.data);
                    } else {
                        if (result) setError("No results found " + result?.statusText);
                    }
                }
            } catch (err: any) {
                console.error("Error fetching company metrics: ", err);
            }
        }

        if (isProduction === "false") {
            setCompanyKeyMetricsData(dummyKeyMetrics); 
            setHistoricalCompanyKeyMetricsData(dummyHistoricalKeyMetrics);
        } else {
            fetchKeyMetrics(); 
            fetchHistoricalKeyMetrics();
        }

    }, []);

    useEffect(() => {
        setData(reorganiseData(companyKeyMetricsData, companyKeyMetricCategories));
    }, [companyKeyMetricsData]);

    return <div className="group-card">
        {
            companyKeyMetricsData.length > 0 ? Object.entries(data).map((c, i) => {
                const metrics = Object.entries(c[1]);
                const panelId = `panel${i + 1}`;
                return (
                    <Accordion
                        className="accordion"
                        key={i}
                        expanded={expanded === panelId}
                        onChange={handleChange(panelId)}
                    >
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography component="span">{formatText(c[0])}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {metrics.map((m, i) => {
                                    const metric = m[0],
                                        metricName = formatText(m[0]).toUpperCase(),
                                        metricValue = m[1].toFixed(2);

                                    return <div
                                        className="card"
                                        style={{
                                            marginRight: "10px",
                                            border: "1px solid rgb(173, 173, 173)"
                                        }}
                                        key={i}
                                        onClick={() => handleNavigation(metric, metricName, metricValue)}
                                    >
                                        {metricName + ": " + metricValue}
                                    </div>
                                })}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            }) : <div className="card">No data available</div>
        }
        {error && <div className="error">{error}</div>}
    </div>
}

export default GroupCard;