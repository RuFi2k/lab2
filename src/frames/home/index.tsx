import { Button, Col, Layout, Row } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";
import * as STRINGS from './strings';

const Home: React.FC = () => {
    return (<Layout style={{ height: "100vh" }}>
        <Content>
            <Row justify="center" gutter={16} align="middle" style={{ height: "100%", width: "100%" }}>
                <Col>
                    <Link to="/quiz">
                        <Button>
                            {STRINGS.START}
                        </Button>
                    </Link>
                </Col>
                <Col>
                    <Link to="/quiz/people">
                        <Button>
                            {STRINGS.START_PEOPLE}
                        </Button>
                    </Link>
                </Col>
                <Col>
                    <Link to="/answers">
                        <Button>
                            {STRINGS.SUBMISSIONS}
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Львівська Політехніка @2021 Створено студентами ПЗ</Footer>
    </Layout>
    );
};

export default Home;
