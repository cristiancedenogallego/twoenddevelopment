import {Alert, Empty, Flex, Typography} from "antd";
import {Container} from "../components/ui/ContainerStl";
import {useParams} from "react-router-dom";
import {Query, QueryListArgs} from "../../../../packages/graphql/generated/graphql";
import {GET_LISTS} from "../queries/boards";
import {useQuery} from "@apollo/client";
import {ListRow} from "../components/lists/ListRow";

const {
	Title
} = Typography;

export const BoardDetail = () => {
	const {boardId} = useParams<{ boardId: string }>();
	const {data, error} = useQuery<Pick<Query, 'lists'>, QueryListArgs>(GET_LISTS, {
		boardId
	});

	return (
		<Container>
			<Title>Board Detail</Title>
			{error && <Alert message="Error getting lists" type="error"></Alert>}
			<Flex gap={20}>
				{data?.lists.map(list => <ListRow key={list.id} list={list} />)}
			</Flex>
			{data?.lists.length === 0 && <Empty></Empty>}
		</Container>
	);
}