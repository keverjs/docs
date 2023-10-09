const api = [
  {
    text: 'Introduction',
    collapsed: false,
    items: [
      { text: 'What is Keverjs?', link: '/guide/introduction/way' },
      { text: 'Getting Started', link: '/guide/introduction/getting-started' },
    ]
  },
  {
    text: 'Usage',
    collapsed: false,
    items: [
      { text: 'Create web server', link: '/guide/use/first' },
      { text: 'CreateApp', link: '/guide/use/createApp' },
      { text: 'Controllers', link: '/guide/use/controller' },
      { text: 'Dependency injection', link: '/guide/use/service' },
      { text: 'Middlewares', link: '/guide/use/middleware' },
      { text: 'Runtime enhancement', link: '/guide/use/enhance' },
    ]
  }
]

const guide = [
  {
    text: 'Introduction',
    collapsed: false,
    items: [
      { text: 'What is Keverjs?', link: '/guide/introduction/way' },
      { text: 'Getting Started', link: '/guide/introduction/getting-started' },
    ]
  },
  {
    text: 'Usage',
    collapsed: false,
    items: [
      { text: 'Create web server', link: '/guide/use/first' },
      { text: 'CreateApp', link: '/guide/use/createApp' },
      { text: 'Controllers', link: '/guide/use/controller' },
      { text: 'Dependency injection', link: '/guide/use/service' },
      { text: 'Middlewares', link: '/guide/use/middleware' },
      { text: 'Runtime enhancement', link: '/guide/use/enhance' },
    ]
  }
]


export default {
  '/guide/': guide,
  '/api/': api
}
