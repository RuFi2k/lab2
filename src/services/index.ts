import { isEqual, PEOPLE_QUESTIONS, Question, QUESTIONS } from "./questions";

export const GetQuestion = (excludeList: Question[]) => {
    const list = QUESTIONS
        .filter(question => !excludeList
            .some((exclude => isEqual(question, exclude)))
        );
    return list[Math.floor(Math.random() * list.length)];
};

export const GetPeopleQuestion = (excludeList: Question[]) => {
    const list = PEOPLE_QUESTIONS
        .filter(question => !excludeList
            .some((exclude => isEqual(question, exclude)))
        );
    return list[Math.floor(Math.random() * list.length)];
};
