import {useMutation} from "@apollo/client";
import {Button, Card, Flex, Typography} from "antd";
import styled from "styled-components";
import {CREATE_CARD} from "../../queries/boards";
import {toast} from "react-toastify";
import {useState} from "react";

const ListHeader = styled(Flex)`
	justify-content: space-between;
	align-items: center;
	text-align: center;
	width: 100%;
	line-height: 3rem;
	flex-direction: column;
`;

const ListRowContainer = styled(Flex)`
	background: #96cbfe;
`;

const CardContainer = styled(Flex)`
	padding: 0 0.5rem;
`;

const ListFooter = styled(Flex)`
	padding: 0 0.5rem;
	align-items: center;
	justify-content: center;
	margin-bottom: 1rem;
`;

const CardTextArea = styled.textarea`
	flex: 1;
	border: none;
	resize: none;

	&:focus {
		outline: none;
		border: none;
	}
`;

const {Text} = Typography;

export const ListRow = ({list}: {list: List}) => {
	const [cards, setCards] = useState(list.cards)
	const [addCard] = useMutation(CREATE_CARD);
	return (
		<ListRowContainer width="10rem" vertical gap={10}>
			<ListHeader><Text strong level={5}>{list.title}</Text></ListHeader>
			<CardContainer vertical gap={10}>
				{cards.map(card => <Card key={card.id}><CardTextArea value={card.title}></CardTextArea></Card>)}
			</CardContainer>
			<ListFooter>
				<Button onClick={async () => {
					try {
						const {data} = await addCard({
							variables: {
								title: `Tarea_${cards.length}_${list.id}`,
								description: '',
								listId: list.id
							}
						})
						setCards([...cards, data.addCard])
						toast.success('Card added');
					} catch (e) {
						toast.error('Error adding card');
						console.error(e.message);
					}
				}}>New item</Button>
			</ListFooter>
		</ListRowContainer>
	);
}