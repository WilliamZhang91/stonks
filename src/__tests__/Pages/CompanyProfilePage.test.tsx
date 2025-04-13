import { MemoryRouter } from "react-router";
import CompanyProfilePage from "../../Pages/CompanyProfilePage/CompanyProfilePage";
import { render } from "@testing-library/react";

describe("CompanyProfilePage page", () => {

    const setError = jest.fn();

    render(
        <MemoryRouter>
            <CompanyProfilePage 
                ticker="TSLA"
                state={1}
                tabNumber={1}
                error=""
                setError={setError}
                isProduction="true"
            />
        </MemoryRouter>
    )

    test("Shows Spinner component if companyProfileData is empty", () => {
        
    });
});