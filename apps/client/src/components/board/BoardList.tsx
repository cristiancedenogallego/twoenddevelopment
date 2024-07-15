import {QueryBoardArgs, Query} from '@simultaneous/graphql';
import {gql, useQuery, useSuspenseQuery} from "@apollo/client"
import {FC} from 'react';
import {BoardItem} from './BoardItem';
import {Alert, Empty, Flex} from 'antd';

export const GET_BOARDS = gql`
	query GetBoards {
		boards {
			id
			title
			createdAt
		}
	}
`

export const BoardList: FC = () => {
	const {data, error} = useQuery<Pick<Query, 'boards'>, QueryBoardArgs>(GET_BOARDS);
	const isEmpty = !data?.boards.length && !error;

	return <Flex>
		{isEmpty && <Flex flex={1} justify='center'><Empty /></Flex>}
		{error && <Alert message="Error getting boards message" type='error' description="Error getting boards message description"  />}

		<Flex gap={'10px'}>
			{data?.boards.map(board => <BoardItem key={board.id} board={board} />)}
		</Flex>
	</Flex>
}