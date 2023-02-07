import express from 'express';

import { getPosts, getPost, getPostsBySearch, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;
