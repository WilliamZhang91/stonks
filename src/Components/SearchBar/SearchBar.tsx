import { Link } from "react-router-dom";
import { companySearch } from "../../functions/api/api";
import { CompanySearch } from "../../interfaces/CompanySearch";
import "./SearchBar.css";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<Props> = ({ searchValue, setSearchValue }): JSX.Element => {

    const [searchResults, setSearchResults] = useState<CompanySearch[]>([]);
    const [error, setError] = useState<string>("");
    const [showResults, setShowResults] = useState<boolean>(false);
    const searchRef = useRef<HTMLDivElement | null>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    const search = async (e: SyntheticEvent): Promise<void> => {
        e.preventDefault();
        setError("");
        setSearchResults([]);
        if (searchValue === "") {
            setError("Enter a valid ticker");

        } else {
            const result = await companySearch(searchValue);
            if (typeof result === "string") {
                setError(result);
            } else if (Array.isArray(result.data)) {
                if (result.data.length === 0) {
                    setError("No results found");
                } else {
                    setSearchResults(result.data);
                }
            }
        }
        setShowResults(true);
    }

    const handleSearchClick = () => {
        setShowResults(false);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (event.button === 2 || event.button === 1) {
                return;
            }

            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowResults(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return <>
        <div className="search" ref={searchRef}>
            <div className="search-bar">
                <div className="search-bar-icon" onClick={search} data-testid="search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <form onSubmit={search}>
                    <input
                        placeholder="Search ticker..."
                        value={searchValue}
                        onChange={changeHandler}
                    />
                </form>
            </div>
            {
                showResults === true && <div className="search-results">
                    {
                        searchResults.map((r, i) => {
                            return <Link
                                to={`/Company/${r.symbol}`}
                                className="no-text-decoration"
                                key={i}
                                onClick={handleSearchClick}
                            >
                                <div className="search-results-container">
                                    <div>
                                        <h3 style={{ marginRight: "20px" }}>{r.symbol}</h3>
                                        <h3 style={{ color: "gray" }}>{r.name}</h3>
                                    </div>
                                    <div>
                                        <h3>{r.exchangeShortName}</h3>
                                    </div>
                                </div>
                            </Link>
                        })
                    }
                    {error !== "" && <div className="search-results-container">{error}</div>}
                </div>
            }
        </div>
    </>
};

export default SearchBar;