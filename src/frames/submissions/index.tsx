import { Button, Card, Col, Image, Row } from 'antd';
import Layout, { Content, Footer } from 'antd/lib/layout/layout';
import React from 'react';
import { Link } from 'react-router-dom';
import * as STRINGS from './strings';

const Submissions: React.FC = () => {
    const [items, setItems] = React.useState<string[]>([]);
    React.useEffect(() => {
        const submissions: string[] = JSON.parse(localStorage.getItem('submissions') || '[]');
        setItems(submissions);
    }, []);

    return (<Layout style={{ height: "100vh" }}>
        <Content>
            <Card title={STRINGS.HEADING} style={{ maxWidth: 1000, margin: "50px auto 0" }}>
                <Row style={{ marginBottom: 16 }} justify="center">
                    <Link to="/">
                        <Button>
                            {STRINGS.HOME}
                        </Button>
                    </Link>
                </Row>
                <Row align="middle" gutter={[16, 16]} justify="center">
                    {items.map(item => (
                        <Col>
                            <Image width={400} src={item} />
                        </Col>
                    ))}
                </Row>
            </Card>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Львівська Політехніка @2021 Створено студентами ПЗ</Footer>
    </Layout>
    );
};

export default Submissions;
