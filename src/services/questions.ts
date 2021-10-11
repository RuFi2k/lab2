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
        text: 'Чи полюбляєте ви гуляти?', answers: [
            { text: 'Рідко', value: -1 },
            { text: 'Іноді', value: 0 },
            { text: 'Часто', value: 1 },
        ]
    },
    {
        text: 'Захоплюєтесь спортом?', answers: [
            { text: 'Так, активно займаюся певним видом', value: -1 },
            { text: 'Люблю спостерігати', value: 0 },
            { text: 'Ні', value: 1 },
        ]
    },
    {
        text: 'Чи любите ви читати?', answers: [
            { text: 'Ні', value: -1 },
            { text: 'Рідко', value: 0 },
            { text: 'Обожнюю', value: 1 },
        ]
    },
    {
        text: 'Чи подобається вам готувати', answers: [
            { text: 'Ні', value: -1 },
            { text: 'Іноді, коли є вільний час', value: 0 },
            { text: 'Так', value: 1 },
        ]
    },
    {
        text: 'Чи готові ви завести домашню тварину?', answers: [
            { text: 'Ні', value: -1 },
            { text: 'Не впевнений', value: 0 },
            { text: 'Так, з радістю', value: 1 },
        ]
    },
    {
        text: 'Ви "Сова" чи "Жайворонок"?', answers: [
            { text: 'Сова', value: -1 },
            { text: 'Не впевнений', value: 0 },
            { text: 'Жайворонок', value: 1 },
        ]
    },
    {
        text: 'Чай чи кава?', answers: [
            { text: 'Чай', value: -1 },
            { text: 'Склянка води', value: 0 },
            { text: 'Кава', value: 1 },
        ]
    },
    {
        text: 'Активно відпочити в горах чи ліниво полежати на пляжі?', answers: [
            { text: 'Активний відпочинок', value: -1 },
            { text: 'Полюбляю обидва варіанти', value: 0 },
            { text: 'Ледачий відпочинок', value: 1 },
        ]
    },
    {
        text: 'Як часто ви дивитися фільми чи серіали?', answers: [
            { text: 'Майже дивлюся', value: -1 },
            { text: 'Годинку-дві на вихідних', value: 0 },
            { text: 'Дуже часто', value: 1 },
        ]
    },
    {
        text: 'Фільм чи книга?', answers: [
            { text: 'Фільм', value: -1 },
            { text: 'Не впевнений', value: 0 },
            { text: 'Книга', value: 1 },
        ]
    },
    {
        text: 'Коти чи Собаки?', answers: [
            { text: 'Коти', value: -1 },
            { text: 'Не можу визначитися', value: 0 },
            { text: 'Собаки', value: 1 },
        ]
    },
    {
        text: 'Яка музика вам більше по душі?', answers: [
            { text: 'Рок, хіп-хоп', value: -1 },
            { text: 'Поп, інді, танцювальна', value: 0 },
            { text: 'Джаз, інструментальна', value: 1 },
        ]
    },
    {
        text: 'Яка кухня більше до вподоби?', answers: [
            { text: 'Класична Європейська', value: -1 },
            { text: 'Середземноморська', value: 0 },
            { text: 'Східна кухня', value: 1 },
        ]
    },
];

export const isEqual = (q1: Question, q2: Question) => q1.text === q2.text;
