import React from "react";
import { ToastContainer } from "react-toastify";
import { MockedProvider } from "@apollo/client/testing";
import type { Preview } from "@storybook/react";
import { withRouter } from 'storybook-addon-remix-react-router';
import 'react-toastify/dist/ReactToastify.css';

const preview: Preview = {
  decorators: [withRouter, (Story) => (
    <div style={{minHeight: '100vh'}}>
    <Story />
    <ToastContainer></ToastContainer>
    </div>
  ),],
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
