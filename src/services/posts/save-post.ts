import userModel from '@modules/posts/schema';
import { ICreatePostRequest, IPost } from '@modules/posts/model';

/**
 * Save new post into db
 * @param postDetails
 */
export const savePost = async (postDetails: ICreatePostRequest): Promise<IPost> => {
    const newPost: IPost = new userModel({
        user: postDetails.user,
        title: postDetails.title,
        content: postDetails.content,
    });

    await newPost.save();
    return newPost;
};