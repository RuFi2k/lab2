import { Link } from "react-router-dom";
import * as STRINGS from './strings';

const Home: React.FC = () => {
    return <div className="home">
        <Link to="/quiz" className="mainButton">{STRINGS.START}</Link>
        <Link to="/answers" className="mainButton">{STRINGS.SUBMISSIONS}</Link>
    </div>;
};

export default Home;
