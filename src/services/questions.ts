export type Answer = {
    text: string,
    value: number,
};

export type Question = {
    text: string,
    answers: Answer[]
}

export const QUESTIONS: Question[] = [
    {text: 'text', answers: [
        {text: 'ans', value: -1},
        {text: 'ans', value: 0},
        {text: 'ans', value: 1},
    ]},
    {text: 'text2', answers: [
        {text: 'ans', value: -1},
        {text: 'ans', value: 0},
        {text: 'ans', value: 1},
    ]},
    {text: 'text3', answers: [
        {text: 'ans', value: -1},
        {text: 'ans', value: 0},
        {text: 'ans', value: 1},
    ]},
    {text: 'text4', answers: [
        {text: 'ans', value: -1},
        {text: 'ans', value: 0},
        {text: 'ans', value: 1},
    ]},
    {text: 'text5', answers: [
        {text: 'ans', value: -1},
        {text: 'ans', value: 0},
        {text: 'ans', value: 1},
    ]},
    {text: 'text6', answers: [
        {text: 'ans', value: -1},
        {text: 'ans', value: 0},
        {text: 'ans', value: 1},
    ]},
];

export const isEqual = (q1: Question, q2: Question) => q1.text === q2.text;
