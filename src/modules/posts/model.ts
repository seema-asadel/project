import { Document, Types } from 'mongoose';

export interface IPost extends Document {
    user: string;
    title: string;
    content: string;
    likes: number;
}

export interface ICreatePostRequest {
    user: string;
    title: string;
    content: string;
}

export interface IUpdatePostRequest {
    title?: string;
    content?: string;
}

export interface IPostResponse {
    id: string;
    title: string;
    content: string;
    likes: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface IPostRequestObject {
    user: string;
    title: string;
    content: string;
    _id: Types.ObjectId;
}