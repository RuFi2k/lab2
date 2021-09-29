import { Link } from "react-router-dom";

const Home: React.FC = () => {
    return <div className="home">
        <Link to="/quiz" className="mainButton">Start Quiz</Link>
        <Link to="/answers" className="mainButton">My Submissions</Link>
    </div>;
};

export default Home;
