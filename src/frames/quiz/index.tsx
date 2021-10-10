import { Button, Card, Layout, List, Radio } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import React from "react";
import Completed from "../../components/completed";
import { GetQuestion } from "../../services";
import { Answer, Question } from "../../services/questions";
import QuestionRow from "./components/Question";
import * as STRINGS from './strings';

const Quiz: React.FC = () => {
    const [questions, setQuestions] = React.useState<Question[]>([]);
    const [score, setScore] = React.useState<{ [t: string]: number }>({});
    const [completed, setCompleted] = React.useState<boolean>(false);
    const [questionStatuses, setStatuses] = React.useState<{ [t: string]: boolean }>({});
    const [disabled, setDisabled] = React.useState<boolean>(true);
    React.useEffect(() => {
        for (let i = 0; i < 5; ++i) {
            let generated: any;
            setQuestions(prev => {
                generated = GetQuestion(prev);
                return [...prev, generated];
            });
            setStatuses(prev => ({
                ...prev,
                [generated.text]: false,
            }));
        }
    }, []);

    React.useEffect(() => {
        setDisabled(Object.keys(questionStatuses).some(key => !questionStatuses[key]));
    }, [questionStatuses]);

    const toggleAnswer = (question: Question, answer: Answer) => {
        setStatuses(prev => ({
            ...prev,
            [question.text]: true,
        }));
        setScore(prev => ({ ...prev, [question.text]: answer.value }));
    };

    const submit = () => {
        setCompleted(true);
    }

    if (completed) {
        return <Completed isCat={Object.keys(score).reduce((a, b) => a + score[b], 0) < 0} />
    }

    return (<Layout style={{ height: "100vh" }}>
        <Content>
            <Card title={STRINGS.HEADING} style={{ maxWidth: 1000, margin: "50px auto 0" }}>
                <List
                    itemLayout="vertical"
                    dataSource={questions}
                    style={{ marginBottom: 16 }}
                    renderItem={question => (
                        <List.Item>
                            <List.Item.Meta title={question.text} style={{ margin: 0 }} />
                            <Radio.Group
                                options={question.answers.map(answer => ({ label: answer.text, value: answer.value }))}
                                onChange={e => toggleAnswer(question, e.target.value)}
                                optionType='button'
                                buttonStyle='solid'
                            />
                        </List.Item>
                    )}
                >
                </List>
                {/* {questions.map((question, id) => (
            <QuestionRow
                key={id}
                question={question}
                score={score[question.text]}
                onClick={(question, answer) => toggleAnswer(question, answer)}
            />
        ))} */}
                <Button onClick={submit} disabled={disabled}>{STRINGS.COMPLETE}</Button>
            </Card>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Львівська Політехніка @2021 Створено студентами ПЗ</Footer>
    </Layout>
    );
};

export default Quiz;
