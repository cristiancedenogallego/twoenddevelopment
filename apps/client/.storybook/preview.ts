import { MockedProvider } from "@apollo/client/testing";
import type { Preview } from "@storybook/react";
import { withRouter } from 'storybook-addon-remix-react-router';


const preview: Preview = {
  decorators: [withRouter],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    apolloClient: {
      MockedProvider,
    },
  },
};

export default preview;
