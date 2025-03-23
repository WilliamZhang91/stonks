import { cleanup, getByPlaceholderText, render, screen } from '@testing-library/react';
import { MemoryRouter, Router } from "react-router-dom";
import SearchBar from "../../../Components/SearchBar/SearchBar";
import userEvent from '@testing-library/user-event';
import { act } from 'react';
import { companySearch } from '../../../functions/api/api';

afterEach(() => cleanup());

jest.mock("../../../functions/api/api", () => ({
    companySearch: jest.fn()
}));

describe("SearchBar Component", () => {
    const searchBehaviourTest = async (searchValue: string, expectedText: string, mockResponse: any) => {
        const setSearchValue = jest.fn();
        (companySearch as jest.Mock).mockResolvedValue({ data: [] });

        const { getByTestId, findByText } = render(<MemoryRouter>
            <SearchBar
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
        </MemoryRouter>);

        const searchIcon = getByTestId("search");
        await act(async () => userEvent.click(searchIcon));

        const resultText = await findByText(expectedText);
        expect(resultText).toBeInTheDocument();
    }

    test("Should display 'Enter a valid ticker' if search value is empty", async () => {
        const searchValue = "";
        const enterValidTickerText = "Enter a valid ticker";
        await searchBehaviourTest(searchValue, enterValidTickerText, {});
    });

    test("Should display 'No results found' if non-existent ticker", async () => {
        const searchValue = "This is a test search";
        const noResultsFoundText = "No results found";
        await searchBehaviourTest(searchValue, noResultsFoundText, { data: [] });
    });
});