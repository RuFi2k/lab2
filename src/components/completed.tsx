import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    isCat: boolean
}

const Completed: React.FC<Props> = ({ isCat }) => {
    const link = isCat ? 'https://aws.random.cat/meow' : 'https://random.dog/woof.json';
    const [image, setImage] = React.useState<string>('');
    React.useEffect(() => {
        fetch(link)
            .then(data => data.json())
            .then((resp) => {
                const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
                localStorage.setItem('submissions', JSON.stringify([...submissions, resp.url || resp.file]));
                setImage(resp.url || resp.file);
            });
        return () => {
            setImage('');
        }
    }, []);
    return <>
        <h2>Congratulations on your submission!!!</h2>
        {image && <img src={image} />}
        <Link to="/">Go home</Link>
    </>;
};

export default Completed;
