import "./Tab.css";

interface Props {
    title: string;
    tabNumber: number;
    state: number;
    setState: (tabNumber: number) => void;
}

const Tab: React.FC<Props> = ({
    title,
    tabNumber,
    setState,
    state
}): JSX.Element => {

    const handleSelectedTab = () => {
        setState(tabNumber);
    }

    return <div className="tab">
        <button
            onClick={handleSelectedTab}
            className={`${tabNumber === state ? 'selected-tab' : ''}`}>
            {title}
        </button>
    </div>
};

export default Tab;