if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope',
    postDiscription:"Discription1",
    postContent: 'Post content one'
  });

  Posts.insert({
    title: 'Meteor',
    postDiscription:"Discription2",
    postContent: 'Post content two'
  });

  Posts.insert({
    title: 'The Meteor Book',
    postDiscription:"Discription3",
    postContent: 'Post content three'
  });
}
