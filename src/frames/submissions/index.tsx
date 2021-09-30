import React from 'react';
import { Link } from 'react-router-dom';
import * as STRINGS from './strings';

const Submissions: React.FC = () => {
    const [items, setItems] = React.useState<string[]>([]);
    React.useEffect(() => {
        const submissions: string[] = JSON.parse(localStorage.getItem('submissions') || '[]');
        setItems(submissions);
    }, []);
    return <div className="quiz">
        <h2>{STRINGS.HEADING}</h2>
        <div style={{ paddingBottom: "30px" }}>
            <Link to="/" className="mainButton">{STRINGS.HOME}</Link>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
            {items.map(item => (
                <img src={item} className="image" />
            ))}
        </div>
    </div>;
};

export default Submissions;
