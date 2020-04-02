export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e85f3828c44d60264f4fd48',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-42bx1nq7',
                  apiId: '0620d75b-8be4-4f9f-a4a1-a70f0e41dd3c'
                },
                {
                  buildHookId: '5e85f382b869c801ce9fc057',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-5is6gdmo',
                  apiId: '4794e7e3-315a-4d10-af6e-2f1da48c2a3e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/arilishu/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-5is6gdmo.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
