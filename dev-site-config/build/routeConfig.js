 import placeholderSrc from '/Users/skalyanmoguloju/WebstormProjects/retro-board/node_modules/terra-dev-site/terra.png';
 import Component2 from '/Users/skalyanmoguloju/WebstormProjects/retro-board/README.md';
 import Component3 from 'terra-doc-template';
 import ContentWrapper from 'terra-dev-site/lib/app/components/ContentWrapper';
 import TerraDevSitePlaceholder from 'terra-dev-site/lib/app/common/Placeholder';
 import Component6 from '../../src/terra-dev-site/tests/Card.test';
 import Component7 from '../../src/terra-dev-site/tests/FunRetro.test';
 import RoutingMenu from 'terra-application-layout/lib/menu/RoutingMenu';
 import { Redirect } from 'react-router-dom';

 export default {
   'menu': {
      '/tests/retro-board/tests': {
         'path': '/tests/retro-board/tests',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'Tests',
                  'menuItems': [
                     {
                        'text': 'Card',
                        'path': '/tests/retro-board/tests/card'
                     },
                     {
                        'text': 'Fun Retro',
                        'path': '/tests/retro-board/tests/fun-retro'
                     }
                  ]
               }
            }
         }
      },
      '/tests': {
         'path': '/tests',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'Tests',
                  'menuItems': [{
                        'text': 'Tests',
                        'path': '/tests/retro-board/tests',
                        'hasSubMenu': true
                     }]
               }
            }
         }
      }
   },
   'content': {
      '/home': {
         'path': '/home',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component3,
                  'props': { 'readme': Component2 }
               }
            }
         }
      },
      '/components': {
         'path': '/components',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/tests/retro-board/tests/card': {
         'path': '/tests/retro-board/tests/card',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component6,
                  'props': void 0
               }
            }
         }
      },
      '/tests/retro-board/tests/fun-retro': {
         'path': '/tests/retro-board/tests/fun-retro',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component7,
                  'props': void 0
               }
            }
         }
      },
      '/tests/retro-board/tests': {
         'path': '/tests/retro-board/tests',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Redirect,
                  'props': { 'to': '/tests/retro-board/tests/card' }
               }
            },
            'tiny': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/tests': {
         'path': '/tests',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/evidence': {
         'path': '/evidence',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      }
   }
};
