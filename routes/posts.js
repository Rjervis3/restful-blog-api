module.exports = {
  getPosts(req, res) {
  	res.status(200).send(req.store.posts);
  },
  addPost(req, res) {
  	if (JSON.stringify(req.body) != '{}') {
  	let newPost = {
		  name: req.body.name, 
		  url: req.body.url,
		  text: req.body.text, 
		  comments: 	[]	
  	 }
  	res.status(201).send({id: req.store.posts.length});
  	req.store.posts.push(newPost);
  } else res.status(200).send();
  },
  updatePost(req, res) {
	req.store.posts[req.params.postId].name = req.body.name; 
	req.store.posts[req.params.postId].url= req.body.url;
	req.store.posts[req.params.postId].text= req.body.text;

  	res.status(200).send(req.store.posts[req.params.postId]);
  },
  removePost(req, res) {
  	req.store.posts.splice(req.params.postId, 1);
  	res.status(204).send();	
  }
}