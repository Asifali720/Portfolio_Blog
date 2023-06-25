export default {
    name: 'blog',
    type: 'document',
      title: 'Blog',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'content',
        type: 'string',
        title: 'Content'
      },
      {
        title: 'Image',
        name: 'poster',
        type: 'image',
    } 
    ]
  }