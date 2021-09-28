import { isEqual, Question, QUESTIONS } from "./questions";

export const GetQuestion = (excludeList: Question[]) => {
    const list = QUESTIONS
    .filter(question => !excludeList
        .some((exclude => isEqual(question, exclude)))
    );
    return list[Math.floor(Math.random() * list.length)];
};
