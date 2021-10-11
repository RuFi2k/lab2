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
        text: 'Ви лінива людина?', answers: [
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
    {
        text: 'Чи є у вас діти у домі?', answers: [
            { text: 'Ні', value: -1 },
            { text: 'Не впевнений', value: 0 },
            { text: 'Так', value: 1 },
        ]
    },
    {
        text: 'У вас вже є домашні улюбленці?', answers: [
            { text: 'Ні', value: -1 },
            { text: 'Так, ще один улюбленець', value: 0 },
            { text: 'Так, ще кілька тваринок', value: 1 },
        ]
    },
    {
        text: 'Ви алергік?', answers: [
            { text: 'Ні', value: -1 },
            { text: 'Не впевнений', value: 0 },
            { text: 'Так', value: 1 },
        ]
    },
    {
        text: 'Чи дратує вас шерсть на меблях?', answers: [
            { text: 'Ні', value: -1 },
            { text: 'Готовий регулярно її прибирати', value: 0 },
            { text: 'Так', value: 1 },
        ]
    },
    {
        text: 'Наскільки велике ваше житло?', answers: [
            { text: 'Одна або дві кімнати', value: -1 },
            { text: 'Велика квартира', value: 0 },
            { text: 'Приватний будинок', value: 1 },
        ]
    }
];

export const PEOPLE_QUESTIONS: Question[] = [
    {
        text: 'Question 1?', answers: [
            { text: 'Рідко', value: -1 },
            { text: 'Іноді', value: 0 },
            { text: 'Часто', value: 1 },
        ]
    },
    {
        text: 'Question 2?', answers: [
            { text: 'Ні', value: -1 },
            { text: 'Не впевнений', value: 0 },
            { text: 'Так', value: 1 },
        ]
    },
    {
        text: 'Question 3?', answers: [
            { text: 'Так', value: -1 },
            { text: 'Можливо', value: 0 },
            { text: 'Ні', value: 1 },
        ]
    },
    {
        text: 'Question 4?', answers: [
            { text: 'Майже ніколи', value: -1 },
            { text: 'Іноді', value: 0 },
            { text: 'Регулярно', value: 1 },
        ]
    },
    {
        text: 'Question 5?', answers: [
            { text: 'Ні', value: -1 },
            { text: 'Не впевнений', value: 0 },
            { text: 'Так', value: 1 },
        ]
    },
];

export const isEqual = (q1: Question, q2: Question) => q1.text === q2.text;
