import {useMutation} from "@apollo/client";
import {CREATE_CARD, GET_LISTS} from "../../queries/boards";
import {Button} from "antd";

interface AddNewCardButtonProps {
	listId: string;
}

export const AddNewCardButton = ({listId}: AddNewCardButtonProps) => {
	const [addCard] = useMutation(CREATE_CARD, {
		refetchQueries: [GET_LISTS]
	});
	return <Button onClick={async () => {
		try {
			await addCard({
				variables: {
					title: '',
					description: '',
					listId: listId
				}
			})
			toast.success('Card added');
		} catch (e) {
			toast.error('Error adding card');
			console.error(e.message);
		}
	}}>New item</Button>;
}