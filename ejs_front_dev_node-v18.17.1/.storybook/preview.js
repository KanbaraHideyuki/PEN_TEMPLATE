import '../public_html/assets/css/style.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { 
    source: {
      state: 'open',
    }
  },
  viewMode: 'docs',
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}
