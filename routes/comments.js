module.exports = {
  getComments(req, res) {
  	console.log("get comments");
  	res.status(200).send(req.store.posts[req.params.postId].comments);
  }, 
  addComment(req, res) {
    if (req.body.text)
    {
    	req.store.posts[req.params.postId].comments.push({"text": req.body.text});
    	res.status(200).send(req.store.posts[req.params.postId].comments);
    } else {
    	res.status(400).send("Please make sure your request body has the form \'{\"text\": \"comment\"}\'");
    }
  },
  updateComment(req, res) {
  	if (req.body.text)
    {
    	req.store.posts[req.params.postId].comments[req.params.commentId] = {text: req.body.text};
    	res.status(200).send(req.store.posts[req.params.postId].comments);
    } else {
    	res.status(400).send("Please make sure your request body has the form \'{\"text\": \"comment\"}\'");
    }
  },
  removeComment(req, res) {
    if (req.store.posts[req.params.postId].comments[req.params.commentId])
    {
    	req.store.posts[req.params.postId].comments.splice(req.params.commentId, 1);
    	res.status(200).send(req.store.posts[req.params.postId].comments);
    } else {
    	res.status(400).send("No commentId " + req.params.commentId + " to remove");
    }
  }  
}