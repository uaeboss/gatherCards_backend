import Joi from 'joi';

export const signupSchema = Joi.object({
    username: Joi.string().required(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().alphanum().min(8).max(12).required(),
})

export const signinSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().alphanum().min(8).max(12).required(),
})

export const cardSchema = Joi.object({
    cardname: Joi.string().required(),
})