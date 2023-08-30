import Joi from 'joi';

export const signupSchema = Joi.object({
    username: Joi.string().required(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().alphanum().min(8).max(12).required(),
})

export const signinSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().alphanum().min(8).max(12).required(),
})

export const cardSchema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
    qty: Joi.number().min(1).required(),
    price: Joi.number().required(),
    image: Joi.string().required(),
})