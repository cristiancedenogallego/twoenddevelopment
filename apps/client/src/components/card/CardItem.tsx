
import {Card} from "antd";
import {CardTextArea} from "../ui/ListStl";
import {ListCard} from "@simultaneous/graphql";
import {from, useMutation} from "@apollo/client";
import {GET_LISTS, UPDATE_CARD} from "../../queries/boards";
import {useDrag} from "react-dnd";
import {ItemTypes} from "../../const/ItemTypes";
import {useRef} from "react";

export const CardItem = ({card}: {card: ListCard}) => {
	const cardRef = useRef<HTMLDivElement>(null)
	const [{ isDragging }, drag] = useDrag(() => ({
		type: ItemTypes.CARD,
		item: {
			cardId: card.id,
			fromListId: card.listId
		},
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		})
	}))
	const changeCardColor = (color: string) => {
		if (cardRef.current) {
			cardRef.current.style.backgroundColor = color

			setTimeout(() => {
				if (cardRef.current) {
					cardRef.current.style.backgroundColor = 'white'
				}
			}, 1000)
		}
	}

	const [updateCard] = useMutation(UPDATE_CARD, {
		refetchQueries: [GET_LISTS],
		onCompleted: () => {
			changeCardColor('lightgreen')
		},
		onError: (e) => {
			console.error(e.message)
			changeCardColor('red')
		}
	})
	
	return <div ref={drag}>
		<Card key={card.id} ref={cardRef}>
		<CardTextArea
			style={{
				opacity: isDragging ? 0.2 : 1
			}}
			defaultValue={card.title}
			onBlur={(e) => {
				updateCard({
					variables: {
						id: card.id,
						title: e.target.value,
						description: card.description
					}
				})
			}}
		></CardTextArea>
	</Card>
	</div>
}