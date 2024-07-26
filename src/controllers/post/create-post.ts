import { Request, Response } from 'express';
import { controller } from '@config/controller/controller';
import { ICreatePostRequest } from '@modules/posts/model';
import { postService } from '@services/index';

/**
 * This function is used to create a new post
 * @param req
 * @param res
 */
export const createPost = controller(async (req: Request, res: Response): Promise<void> => {
    const { body }: { body: ICreatePostRequest } = req;
    const post = await postService.savePost(body);
    res.status(200).send(post);
});