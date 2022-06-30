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
                  buildHookId: '62bdbc75a7e309285bf01d2f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-dm15us5i',
                  apiId: '4b0bb8e3-a1de-4c3c-b96a-b334b1600016'
                },
                {
                  buildHookId: '62bdbc75ea054f28772c18eb',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-s7wgogjc',
                  apiId: '97ca7ba6-9b1e-47cd-af69-e3f2042d3639'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KKrisztian123/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-s7wgogjc.netlify.app',
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
