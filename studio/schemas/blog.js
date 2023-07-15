export default {
    name: 'blog',
    type: 'document',
      title: 'Blog',
    fields: [
      {
        name: 'heading',
        type: 'string',
        title: 'Heading'
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      },
      {
        title: 'Publish At',
        name: 'publishAt',
        type: 'date'
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {
            type: 'block'
          },
          // {
          //   type: 'image',
          //   fields: [
          //     {
          //       type: 'text',
          //       name: 'alt',
          //       title: 'Alternative text',
          //       description: `Some of your visitors cannot see images, 
          //         be they blind, color-blind, low-sighted; 
          //         alternative text is of great help for those 
          //         people that can rely on it to have a good idea of 
          //         what\'s on your page.`,
          //       options: {
          //         isHighlighted: true
          //       }
          //     }
          //   ]
          // }
        ]
      },
      {
        title: 'Author',
        name: 'author',
        type: 'array',
        of: [{type: 'author'}]
    }, 
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        }
      ]
    }
    ]
  }