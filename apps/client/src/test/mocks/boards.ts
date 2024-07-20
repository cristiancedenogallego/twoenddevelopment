import {Board} from '@simultaneous/graphql';
import {GET_LISTS, GET_BOARDS, CREATE_CARD} from '../../queries/boards';
import _ from 'lodash';
import {MockedResponse} from '@apollo/react-testing';

export const mockSuccessGetBoards = (boards: Board[]) => ({
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

export const mockSuccessGetLists = (listsAmount: number[]) => {
  const lists = listsAmount.map((list, iteration) => ({
    title: `List ${iteration}`,
    id: iteration,
    cards: _.times(list).map((cardNumber) => ({
      id: `${cardNumber}_${iteration}`,
      title: `Tarea ${cardNumber}_${iteration}`,
      description: 'Card 1 description'
    }))
  }));

  return ({
    request: {
      query: GET_LISTS,
    },
    result: {
      data: { 
        lists: lists ?? [],
      },
    }
})}

export const mockCreateCard:  MockedResponse = {
    request: {
      query: CREATE_CARD,
    },
    maxUsageCount: Number.POSITIVE_INFINITY,
    variableMatcher: () => true,
    result: (variables) => {
      return {
        data: {
          addCard: {
            title: variables.title,
            description: variables.description,
            listId: variables.listId
          }
        }
      }
    }
  }

