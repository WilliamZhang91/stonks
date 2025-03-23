import { ReactNode } from "react";
import "./Card.css";

interface Props {
    children: ReactNode;
    title: string;
}

const Card: React.FC<Props> = ({ children, title }): JSX.Element => {
    return <div className="card">
        <h6>{title}</h6>
        <h3>
            {children}
        </h3>
    </div>
}

export default Card;