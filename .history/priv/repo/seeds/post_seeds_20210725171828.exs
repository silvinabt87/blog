alias Blog.Repo
alias Blog.Blogging.Post

Repo.insert! %Post{
  title: 'My First Post',
  description: 'This is my first post for this blog.'
}

Repo.insert! %Post{
  title: 'My Second Post',
  description: 'I have more things to say!'
}

Repo.insert! %Post{
  title: 'My Third Post',
  description: 'I'm running out of ideas.'
}
