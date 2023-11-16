import mongoose, { Document } from "mongoose";
import { Readable } from "stream";

export type Model = typeof mongoose.Model
export type Query = typeof mongoose.Query
export type ResultDoc = typeof mongoose.Document

export type RequestPayload = string | object | Buffer | Readable | any
export type ResponsePayload = { data: object | string | number, status?: string, success?: boolean, code?: number }

export type TUser = {
    email: string,
    password: string
}

export interface IUser extends TUser, Document {}

export type AuthStatus = "SUCCESS" | "NOT_EXIST" | "INVALID_CREDENTIAL" | "ALREADY_EXSIST"