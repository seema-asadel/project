import mongoose, { Schema } from 'mongoose';
import { IPost } from './model';

const PostSchema = new Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        likes: { type: Number, default: 0 },
        user: { type: String, required: true }
    },
    {
        timestamps: true,
    },
);

export default mongoose.model<IPost>('postModel', PostSchema, 'posts');
