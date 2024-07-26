import mongoose from 'mongoose';
import { IPost } from '@modules/posts/model';
import postModel from '@modules/posts/schema';


/**
 * Get post by id
 * @param id
 */

export const deletePostById = async (id: string): Promise<IPost | null> => {
    const condition = {
        _id: mongoose.Types.ObjectId(id),
    };
    const post = await postModel.findOneAndDelete(condition);
    return post;
};