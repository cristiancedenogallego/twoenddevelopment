import {Board} from '@simultaneous/graphql';
import {GET_BOARDS} from '../../components/board/BoardList';

export const mockSuccessGetBoards = (boards: Board[]) => ({
  request: {
    query: GET_BOARDS,
  },
  result: {
    data: {
      boards,
    },
  }
})
