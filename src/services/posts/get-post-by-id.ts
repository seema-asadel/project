import mongoose from 'mongoose';
import { IPost } from '@modules/posts/model';
import postModel from '@modules/posts/schema';


/**
 * Get post by id
 * @param id
 */

export const getPostById = async (id: string): Promise<IPost | null> => {
    const condition = {
        _id: mongoose.Types.ObjectId(id),
    };
    const selection = {
        _id: 1,
        title: 1,
        content: 1,
        user: 1,
        likes: 1,
        createdAt: 1,
        updatedAt: 1,
    };
    const post = await postModel.findOne(condition, selection);
    return post;
};
