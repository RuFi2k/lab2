import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { AllowedFormats, API_LINKS } from './constants';
import * as STRINGS from './strings'

type Props = {
    isCat: boolean
}

const Completed: React.FC<Props> = ({ isCat }) => {
    const link = isCat ? API_LINKS.CAT : API_LINKS.DOG;
    const [image, setImage] = React.useState<string>('');
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        const fetchData = async (link: string) => {
            let response = { url: '', file: '' }; //just ignoring ts warnings
            do {
                const data = await fetch(link);
                response = await data.json();
            } while(!AllowedFormats.some(format => (response.url || response.file).endsWith(format)))
            const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
            localStorage.setItem('submissions', JSON.stringify([...submissions, response.url || response.file]));
            setLoading(false);
            setImage(response.url || response.file);
        };

        fetchData(link);
        return () => {
            setImage('');
        }
    }, []);
    return <div className="quiz">
        <h2>{STRINGS.CONGRATULATIONS}</h2>
        <Link to="/" className="mainButton" style={{ marginBottom: "10px" }}>{STRINGS.HOME}</Link>
        {loading ? <span>{STRINGS.LOADING}</span> : <img className="image" src={image} />}
    </div>;
};

export default Completed;
