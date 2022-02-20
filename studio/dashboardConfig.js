export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '6212315a16fb8c6b9fac340f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-gfw7x1f6',
                  apiId: 'd51e197e-6147-42de-96cb-05337083e32a'
                },
                {
                  buildHookId: '6212315afbd1b8c00ae91711',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ziaquafp',
                  apiId: 'd55dd46d-fcff-4ff8-a69d-5846451b88da'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/grimnebluna/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ziaquafp.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
