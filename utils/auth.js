import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";

export const disguisePassword = (password) => {
  return bcrypt.hash(password, 5);
};

export const comparePasswords = (password, hash) => {
  return bcrypt.compare(password, hash);
};

export const create JWT = (id) => {
    const token = jwt.sign({id: id}, process.env.JWT_SECRET);
    return token
}