import mongoose from 'mongoose';
import { IUpdatePostRequest } from '@modules/posts/model';
import postModel from '@modules/posts/schema';


/**
 * Get post by id
 * @param id
 */

export const updatePostById = async (id: string, postDetails: IUpdatePostRequest): Promise<IUpdatePostRequest | null> => {
    const condition = {
        _id: mongoose.Types.ObjectId(id),
    };
    const post = await postModel.findOneAndUpdate(condition, postDetails, { new: true });
    return post;
};