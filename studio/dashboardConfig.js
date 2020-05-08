export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5eb5c9267276d26d5869ec7d',
                  title: 'Sanity Studio',
                  name: 'gilby-kitchen-sink-studio',
                  apiId: '235d98d6-4939-4d74-a9d8-9c047c367212'
                },
                {
                  buildHookId: '5eb5c92631703e4f4df0fa6f',
                  title: 'Blog Website',
                  name: 'gilby-kitchen-sink',
                  apiId: '79d8184e-03fa-4061-a377-807b5efa08f2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gilbster/gilby-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://gilby-kitchen-sink.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
