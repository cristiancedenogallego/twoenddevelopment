import {Board, Card, List} from '@simultaneous/graphql';
import {GET_LISTS, GET_BOARDS, CREATE_CARD, UPDATE_CARD, MOVE_CARD} from '../../queries/boards';
import _ from 'lodash';
import {MockedResponse} from '@apollo/react-testing';
import {makeUniqueId} from '@apollo/client/utilities';

const listMocks = ['Todo', 'Done'].map((title, iteration): List => ({
  title,
  id: iteration,
  cards: []
}))

export const mockSuccessGetBoards = (boards: Board[] = []): MockedResponse => ({
  request: {
    query: GET_BOARDS,
  },
  maxUsageCount: Number.POSITIVE_INFINITY,
  result: {
    data: {
      boards,
    },
  }
})

export const mockSuccessGetLists = (mockConfig: Pick<MockedResponse, 'delay'>): MockedResponse => {
  return ({
    ...mockConfig,
    request: {
      query: GET_LISTS,
    },
    newData: () => ({
      data: { 
        lists: listMocks,
      }
    }),
})}

export const mockEmptySuccessGetLists = (mockConfig: Pick<MockedResponse, 'delay'>): MockedResponse => {
  return ({
    ...mockConfig,
    request: {
      query: GET_LISTS,
    },
    newData: () => ({
      data: { 
        lists: [],
      }
    }),
})}

export const mockCreateCard:  MockedResponse = {
    request: {
      query: CREATE_CARD,
    },
    maxUsageCount: Number.POSITIVE_INFINITY,
    variableMatcher: () => true,
    result: (variables) => {
      const listIndex = listMocks.findIndex((list) => list.id === variables.listId)
      const addedCard: Card = {
        title: variables.title,
        description: variables.description,
        listId: variables.listId,
        id: makeUniqueId('card'),
        list: listMocks[listIndex]
      }

      listMocks[listIndex].cards = [...listMocks[listIndex].cards, addedCard]

      return {
        data: {
          createCard: addedCard,
        }
      }
    }
  }

  export const mockUpdateCard = (mockedResponse: Pick<MockedResponse, 'error' | 'delay'>): MockedResponse => ({
    ...mockedResponse,
    request: {
      query: UPDATE_CARD,
    },
    maxUsageCount: Number.POSITIVE_INFINITY,
    variableMatcher: () => true,
    result: (variables) => {
      const card = _.flatMap(listMocks, (list) => list.cards).find((card) => card.id === variables.id)
      const updatedCard = {
        ...card,
        title: variables.title,
        description: variables.description,
      }

      const listIndex = listMocks.findIndex((list) => list.id === card.listId)
      const cardIndex = listMocks[listIndex].cards.findIndex((card) => card.id === variables.id)
      listMocks[listIndex].cards[cardIndex] = updatedCard

      return {
        data: {
          updateCard: updatedCard,
        }
      }
    }
  })

  export const mockMoveCard = (mockedResponse: Pick<MockedResponse, 'error' | 'delay'>): MockedResponse => ({
    ...mockedResponse,
    request: {
      query: MOVE_CARD,
    },
    maxUsageCount: Number.POSITIVE_INFINITY,
    variableMatcher: () => true,
    result: ({id, listId}) => {
      const card = _.flatMap(listMocks, (list) => list.cards).find((card) => card.id === id)!

      listMocks[card.listId].cards = listMocks[card.listId].cards.filter((card) => card.id !== id)
      card.listId = listId
      listMocks[listId].cards = [...listMocks[listId].cards, card]

      return {
        data: {
          moveCard: card,
        }
      }
    }
  })

