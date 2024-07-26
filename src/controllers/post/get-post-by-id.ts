import { Request, Response } from 'express';
import { controller } from '@config/controller/controller';
import { IPostRequestObject } from '@modules/posts/model';
import { postService } from '@services/index';

/**
 * This function is used to get all posts
 * @param req - The request object
 * @param res - The response object
 */

export const getPostById = controller(async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const post = await postService.getPostById(id);
    res.status(200).send(post);
});
