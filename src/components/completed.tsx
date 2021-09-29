import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    isCat: boolean
}

const Completed: React.FC<Props> = ({ isCat }) => {
    const link = isCat ? 'https://aws.random.cat/meow' : 'https://random.dog/woof.json';
    const [image, setImage] = React.useState<string>('');
    const [loading, setLoading] = React.useState<boolean>(true);
    React.useEffect(() => {
        fetch(link)
            .then(data => data.json())
            .then((resp) => {
                const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
                localStorage.setItem('submissions', JSON.stringify([...submissions, resp.url || resp.file]));
                setLoading(false);
                setImage(resp.url || resp.file);
            });
        return () => {
            setImage('');
        }
    }, []);
    return <div className="quiz">
        <h2>Congratulations on your submission!!!</h2>
        <Link to="/" className="mainButton" style={{ marginBottom: "10px" }}>Go home</Link>
        {loading ? <span>Loading...</span> : <img className="image" src={image} />}
    </div>;
};

export default Completed;
