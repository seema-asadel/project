import { Request, Response } from 'express';
import { controller } from '@config/controller/controller';
import { IPostRequestObject } from '@modules/posts/model';
import { postService } from '@services/index';

/**
 * This function is used to get all posts
 * @param req - The request object
 * @param res - The response object
 */
export const getAllPost = controller(async (req: Request, res: Response): Promise<void> => {
    const posts = await postService.getAllPost();
    res.status(200).send(posts);
});