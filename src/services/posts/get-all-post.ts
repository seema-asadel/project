import mongoose from 'mongoose';
import { IPost } from '@modules/posts/model';
import postModel from '@modules/posts/schema';


/**
 * Get post by id
 * @param id
 */

export const getAllPost = async (): Promise<IPost[]> => {
    const selection = {
        _id: 1,
        title: 1,
        content: 1,
        user: 1,
        likes: 1,
        createdAt: 1,
        updatedAt: 1,
    };
    const posts = await postModel.find({}, selection);
    return posts;
};