import {logger} from "./logger.js";

export const readForm = (title, desc, date, compleated) => {
    const todoObject = {title, desc, date, compleated};
    logger(JSON.stringify(todoObject));
    return JSON.stringify(todoObject);
}