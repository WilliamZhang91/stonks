import { render } from "@testing-library/react";
import Tab from "../../../Components/Tab/Tab";

describe("Tab component", () => {

    const setState = jest.fn();

    const { getByText } = render(
        <Tab
            title="Company profile"
            tabNumber={1}
            state={1}
            setState={setState}
        />
    );

    const companyProfileTab = getByText(/company profile/i);

    test("Tab component should render correctly", () => {
        expect(companyProfileTab).toBeInTheDocument();
    });

    test("Applies the selected-tab class if tabNumber is the same as state", () => {
        expect(companyProfileTab).toHaveClass("selected-tab");
    });

    test("Does not apply the selected-tab class if tabNumber is not the same as state", () => {
        const { getByText } = render(
            <Tab
                title="Income statement"
                tabNumber={1}
                state={2}
                setState={setState}
            />
        );
        const incometStatementTab = getByText(/income statement/i);
        expect(incometStatementTab).not.toHaveClass("selected-tab");
    });
});