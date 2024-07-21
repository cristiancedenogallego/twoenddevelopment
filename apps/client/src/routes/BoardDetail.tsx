import {Alert, Empty, Flex, Spin, Typography} from "antd";
import {Container} from "../components/ui/ContainerStl";
import {useParams} from "react-router-dom";
import {Query, QueryListArgs} from "../../../../packages/graphql/generated/graphql";
import {GET_LISTS} from "../queries/boards";
import {useQuery} from "@apollo/client";
import {ListRow} from "../components/list/ListRow";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

const {
	Title,
	Text
} = Typography;

export const BoardDetail = () => {
	const {boardId} = useParams<{ boardId: string }>();
	const {data, error, loading} = useQuery<Pick<Query, 'lists'>, QueryListArgs>(GET_LISTS, {
		boardId
	});

	return (
		<DndProvider backend={HTML5Backend}>
			<Container>
				<Title>Board Detail</Title>
				{error && <Alert message="Error getting lists" type="error"></Alert>}
				<Flex gap={20}>
					{data?.lists.map(list => <ListRow key={list.id} list={list} />)}
				</Flex>
				{data?.lists.length === 0 && !loading && <Empty />}
				{loading && <Flex style={{alignSelf: 'center'}} align="center"><Text><Spin></Spin> Loading...</Text></Flex>}
			</Container>
		</DndProvider>
	);
}