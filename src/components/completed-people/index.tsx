import { Button, Layout, Result, Image } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { AllowedFormats, API_LINKS } from './constants';
import * as STRINGS from './strings'
import {
    LoadingOutlined,
} from '@ant-design/icons';

type Props = {
    isMan: boolean
}

const CompletedPeople: React.FC<Props> = ({ isMan }) => {
    const link = API_LINKS.PERSON;
    const [image, setImage] = React.useState<string>('');
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        const fetchData = async (link: string) => {
            let response: any; //just ignoring ts warnings
            do {
                const data = await fetch(link);
                response = await data.json();
                response = response.results[0];
            } while (!AllowedFormats.some(format => (response.picture.large || response.picture.large).endsWith(format)) || (isMan && response.gender !== 'male') || (!isMan && response.gender !== 'female'))
            setLoading(false);
            setImage(response.picture.large);
        };

        fetchData(link);
        return () => {
            setImage('');
        }
    }, []);
    return (<Layout style={{ height: "100vh" }}>
        <Content>
            <Result
                icon={loading ? <LoadingOutlined /> : <Image width={500} src={image} />}
                title={STRINGS.CONGRATULATIONS}
                extra={<Link to="/">
                    <Button> {STRINGS.HOME}</Button>
                </Link>
                }
            />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Львівська Політехніка @2021 Створено студентами ПЗ</Footer>
    </Layout>
    );
};

export default CompletedPeople;
