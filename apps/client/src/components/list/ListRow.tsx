import {useMutation} from "@apollo/client";
import {Typography} from "antd";
import {GET_LISTS, MOVE_CARD} from "../../queries/boards";
import {CardContainer, ListFooter, ListHeader, ListRowContainer} from "../ui/ListStl";
import {CardItem} from "../card/CardItem";
import {useDrop} from "react-dnd";
import {ItemTypes} from "../../const/ItemTypes";
import {toast} from "react-toastify";
import {AddNewCardButton} from "./AddNewCardButton";

const {Text} = Typography;

export const ListRow = ({list}: {list: List}) => {
	const [moveCard] = useMutation(MOVE_CARD, {
		refetchQueries: [GET_LISTS],
		onError: () => {
			toast.error('Error moving card');
		}
	});
	const [, drop] = useDrop(() => ({
		accept: ItemTypes.CARD,
    drop: (item) => {
			console.log({item, list})
			moveCard({
				variables: {
					id: item.cardId,
					listId: list.id,
				}
			})
		},
  }))
	const {cards} = list
	
	return (
		<ListRowContainer vertical gap={10} ref={drop}>
			<ListHeader><Text strong level={5}>{list.title}</Text></ListHeader>
			<CardContainer vertical gap={10}>
				{cards.map(card => <CardItem key={card.id} card={card}></CardItem>)}
			</CardContainer>
			<ListFooter>
				<AddNewCardButton listId={list.id} />
			</ListFooter>
		</ListRowContainer>
	);
}