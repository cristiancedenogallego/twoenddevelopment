import type { Meta, StoryObj } from '@storybook/react';
import {mockCreateCard, mockEmptySuccessGetLists, mockMoveCard, mockSuccessGetLists, mockUpdateCard} from '../test/mocks/boards';
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
  name: 'Happy Path',
  parameters: {
    apolloClient: {
      mocks: [mockSuccessGetLists(), mockCreateCard, mockUpdateCard(), mockMoveCard()]
    }
  }
};

export const Empty: Story = {
  name: 'Empty View',
  parameters: {
    apolloClient: {
      mocks: [mockEmptySuccessGetLists()]
    }
  }
};

export const Loading: Story = {
  name: 'Loading View',
  parameters: {
    apolloClient: {
      mocks: [mockEmptySuccessGetLists({
        delay: 1e20,
      })]
    }
  }
};

export const MoveCardError: Story = {
  name: 'Error moving card',
  parameters: {
    apolloClient: {
      mocks: [mockSuccessGetLists(), mockCreateCard, mockUpdateCard(), mockMoveCard({
        error: new GraphQLError('Error moving card message')
      })]
    }
  }
};

export const ErrorChangeText: Story = {
  name: 'Error changing card text',
  parameters: {
    apolloClient: {
      mocks: [mockSuccessGetLists(), mockCreateCard, mockUpdateCard({
        error: new GraphQLError('Error updating card message')
      })]
    }
  }
};

export const Error: Story = {
  name: 'Error getting boards',
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

