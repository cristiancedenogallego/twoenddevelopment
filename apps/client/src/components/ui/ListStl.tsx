import {Flex} from "antd";
import styled from "styled-components";

export const ListHeader = styled(Flex)`
	justify-content: space-between;
	align-items: center;
	text-align: center;
	width: 100%;
	line-height: 3rem;
	flex-direction: column;
`;

export const ListRowContainer = styled(Flex)`
	background: #96cbfe;
	width: 20rem;
`;

export const CardContainer = styled(Flex)`
	padding: 0 0.5rem;
`;

export const ListFooter = styled(Flex)`
	padding: 0 0.5rem;
	align-items: center;
	justify-content: center;
	margin-bottom: 1rem;
`;

export const CardTextArea = styled.textarea`
	flex: 1;
	border: none;
	resize: none;
	background: transparent;

	&:focus {
		outline: none;
		border: none;
	}
`;