import type { Meta, StoryObj } from '@storybook/react';
import {mockCreateCard, mockSuccessGetLists} from '../test/mocks/boards';
import {GraphQLError} from 'graphql';
import {BoardDetail} from '../routes/BoardDetail';
import {GET_LISTS} from '../queries/boards';

const meta: Meta<typeof BoardDetail> = {
  title: 'BoardDetail',
  component: BoardDetail,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCase: Story = {
  parameters: {
    apolloClient: {
      mocks: [mockSuccessGetLists([2, 1]), mockCreateCard, mockSuccessGetLists([3, 1])]
    }
  }
};

export const Empty: Story = {
  parameters: {
    apolloClient: {
      mocks: [mockSuccessGetLists([])]
    }
  }
};

export const Error: Story = {
  parameters: {
    apolloClient: {
      mocks: [{
        request: {
          query: GET_LISTS,
        },
        result: {
          errors: [new GraphQLError('Error getting boards message')],
        }
      }]
    }
  }
};