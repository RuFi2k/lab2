export type Answer = {
    text: string,
    value: number,
};

export type Question = {
    text: string,
    answers: Answer[]
}

export const QUESTIONS: Question[] = [
    {text: 'How often do you like to go for a walk?', answers: [
        {text: 'Rarely', value: -1},
        {text: 'Sometimes', value: 0},
        {text: 'Often', value: 1},
    ]},
    {text: 'Do you like active recreation?', answers: [
        {text: 'No', value: -1},
        {text: 'Not Sure', value: 0},
        {text: 'Yes', value: 1},
    ]},
    {text: 'Are you lazy person?', answers: [
        {text: 'Yes', value: -1},
        {text: 'Maybe', value: 0},
        {text: 'No', value: 1},
    ]},
    {text: 'How often do you leave from home for a long time?', answers: [
        {text: 'Almost newer', value: -1},
        {text: 'Sometimes', value: 0},
        {text: 'Regularly', value: 1},
    ]},
    {text: 'Are you patient to noise', answers: [
        {text: 'No', value: -1},
        {text: 'Not sure', value: 0},
        {text: 'Yes', value: 1},
    ]},
];

export const isEqual = (q1: Question, q2: Question) => q1.text === q2.text;
