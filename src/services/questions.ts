export type Answer = {
    text: string,
    value: number,
};

export type Question = {
    text: string,
    answers: Answer[]
}

export const QUESTIONS: Question[] = [
    {
        text: 'Як часто ви любите гуляти?', answers: [
            { text: 'Рідко', value: -1 },
            { text: 'Іноді', value: 0 },
            { text: 'Часто', value: 1 },
        ]
    },
    {
        text: 'Ви любите активний відпочинок?', answers: [
            { text: 'Ні', value: -1 },
            { text: 'Не впевнений', value: 0 },
            { text: 'Так', value: 1 },
        ]
    },
    {
        text: 'Are you lazy person?', answers: [
            { text: 'Так', value: -1 },
            { text: 'Можливо', value: 0 },
            { text: 'Ні', value: 1 },
        ]
    },
    {
        text: 'Як часто ви виходите з дому на тривалий час?', answers: [
            { text: 'Майже ніколи', value: -1 },
            { text: 'Іноді', value: 0 },
            { text: 'Регулярно', value: 1 },
        ]
    },
    {
        text: 'Ви терплячі до шуму?', answers: [
            { text: 'Ні', value: -1 },
            { text: 'Не впевнений', value: 0 },
            { text: 'Так', value: 1 },
        ]
    },
];

export const isEqual = (q1: Question, q2: Question) => q1.text === q2.text;
