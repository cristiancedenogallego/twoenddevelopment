import {Suspense} from "react";
import {BoardList} from "../components/board/BoardList";
import styled from "styled-components";

const Container = styled.div`
	background: #ccc;
	padding: 1rem;
	width: 100%;
	height: 100%;
`;

export const Root = () => {
	return (
		<Container>
			<h1>My boards</h1>
			<Suspense >
				<BoardList />
			</Suspense>
		</Container>
	);
}