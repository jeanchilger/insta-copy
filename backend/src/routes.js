const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);

routes.post('/posts/:id/like', LikeController.store);

/*
// method(path, middleware)
routes.post('/posts', (req, res) => {
	// req.query access variables in URL
	return res.send(`Hell00o ${ req.query.name }`);
});*/

module.exports = routes;
