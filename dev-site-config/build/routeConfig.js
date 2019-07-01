 import placeholderSrc from '/Users/skalyanmoguloju/WebstormProjects/retro-board/node_modules/terra-dev-site/terra.png';
 import Component2 from '/Users/skalyanmoguloju/WebstormProjects/retro-board/README.md';
 import Component3 from 'terra-doc-template';
 import ContentWrapper from 'terra-dev-site/lib/app/components/ContentWrapper';
 import TerraDevSitePlaceholder from 'terra-dev-site/lib/app/common/Placeholder';
 import Component6 from '../../src/terra-dev-site/test/FunRetro.test';
 import { Redirect } from 'react-router-dom';

 export default {
   'menu': {},
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
      '/tests/retro-board/fun-retro': {
         'path': '/tests/retro-board/fun-retro',
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
      '/tests': {
         'path': '/tests',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Redirect,
                  'props': { 'to': '/tests/retro-board/fun-retro' }
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
