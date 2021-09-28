import { Link } from "react-router-dom";

const Home: React.FC = () => {
    return <>
        <Link to="/quiz">Start Quiz</Link>
        <Link to="/answers">My Submissions</Link>
    </>;
};

export default Home;
