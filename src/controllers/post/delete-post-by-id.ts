import { Request, Response } from 'express';
import { controller } from '@config/controller/controller';
import { IPostRequestObject } from '@modules/posts/model';
import { postService } from '@services/index';

/**
 * This function is used to delete post by id
 * @param req - The request object
 * @param res - The response object
 */

export const deletePostById = controller(async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const post = await postService.deletePostById(id);
    res.status(200).send({
        message: 'Post deleted successfully',
        post: post
    });
});