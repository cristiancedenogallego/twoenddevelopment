import {Suspense} from "react";
import {BoardList} from "../components/board/BoardList";
import {Container} from "../components/ui/ContainerStl";
import {Typography} from "antd";

const {Title} = Typography
export const Root = () => {
	return (
		<Container>
			<Title>My boards</Title>
			<Suspense >
				<BoardList />
			</Suspense>
		</Container>
	);
}