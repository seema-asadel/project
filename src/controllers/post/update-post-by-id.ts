import { Request, Response } from 'express';
import { controller } from '@config/controller/controller';
import { IPostRequestObject } from '@modules/posts/model';
import { postService } from '@services/index';


/**
 * This function is used to update post by id
 * @param req - The request object
 * @param res - The response object
 */

export const updatePostById = controller(async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const post = req.body as IPostRequestObject;
    const updatedPost = await postService.updatePostById(id, post);
    res.status(200).send({
        message: 'Post updated successfully',
        post: updatedPost
    });
});