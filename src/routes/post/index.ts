import { Router } from 'express';
import { postController } from '@controllers/index';
import { validateUserAccessToken } from '@middleware/index';

const postRouter = Router();

postRouter.post('/createpost', validateUserAccessToken, postController.createPost);
postRouter.get('/getpostbyid/:id', validateUserAccessToken, postController.getPostById);
postRouter.get('/getallpost', validateUserAccessToken, postController.getAllPost);
postRouter.delete('/deletepostbyid/:id', validateUserAccessToken, postController.deletePostById);
postRouter.put('/updatepostbyid/:id', validateUserAccessToken, postController.updatePostById);

export { postRouter };

