import { CompanyKeyMetrics } from "../interfaces/CompanyKeyMetrics";

export const reorganiseData = (
    data: CompanyKeyMetrics[],
    categories: Record<string, (keyof CompanyKeyMetrics)[]>
) => {
    const categoryArray: Record<string, Record<string, number>> = {};
    
    for (const category in categories) {
        categoryArray[category] = {};
    }
    
    data.forEach((item) => {
        for (const category in categories) {
            categories[category].forEach((metric) => {
                if (metric in item && typeof item[metric] === "number") {
                    categoryArray[category][metric] = item[metric] as number;
                }
            });
        }
    });

    return categoryArray;
};