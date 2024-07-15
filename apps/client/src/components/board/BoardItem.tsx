import {FC} from "react";
import {Board} from "@simultaneous/graphql";
import {Card, Flex, Typography} from "antd";
import {Link} from "react-router-dom";

interface BoardItemProps {
	board: Board
}

const {Text, Title} = Typography;

export const BoardItem: FC<BoardItemProps> = ({board}) => {
	return <Link to={`/board/${board.id}`}>
	<Card key={board.id}>
		<Flex vertical>
			<Title level={3}>{board.title}</Title> 
			<Text>Created at: {board.createdAt}</Text> 
		</Flex>
	</Card>
	</Link>
}