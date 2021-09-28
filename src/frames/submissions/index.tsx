import React from 'react';
import { Link } from 'react-router-dom';

const Submissions: React.FC = () => {
    const [items, setItems] = React.useState<string[]>([]);
    React.useEffect(() => {
        const submissions: string[] = JSON.parse(localStorage.getItem('submissions') || '[]');
        setItems(submissions);
    }, []);
    return <>
        <h2>Your fancy pets!!!</h2>
        <div>
            <Link to="/">Go home</Link>
        </div>
        {items.map(item => (
            <img src={item} />
        ))}
    </>;
};

export default Submissions;
