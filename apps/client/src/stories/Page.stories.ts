import type { Meta, StoryObj } from '@storybook/react';
import {Root} from '../routes/Root';
import {mockCreateCard, mockSuccessGetBoards} from '../test/mocks/boards';
import {GraphQLError} from 'graphql';
import {GET_BOARDS} from '../queries/boards';

const meta: Meta<typeof Root> = {
  title: 'Example/BoardList',
  component: Root,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithResults: Story = {
  parameters: {
    apolloClient: {
      mocks: [mockSuccessGetBoards([
        {id: '1', title: 'Board 1', createdAt: '2021-01-01', lists: [], updatedAt: '2021-01-01'},
        {id: '2', title: 'Board 2', createdAt: '2021-01-02', lists: [], updatedAt: '2021-01-01'},
      ]),
      mockCreateCard]
    }
  }
};

export const Empty: Story = {
  parameters: {
    apolloClient: {
      mocks: [mockSuccessGetBoards([])]
    }
  }
};

export const Error: Story = {
  parameters: {
    apolloClient: {
      mocks: [{
        request: {
          query: GET_BOARDS,
        },
        result: {
          errors: [new GraphQLError('Error getting boards message')],
        }
      }]
    }
  }
};