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
            } while (!AllowedFormats.some(format => (response.url || response.file).endsWith(format)))
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

export default Completed;
