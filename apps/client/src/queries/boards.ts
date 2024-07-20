import {gql} from "@apollo/client";

export const GET_BOARDS = gql`
	query GetBoards {
		boards {
			id
			title
			createdAt
		}
	}
`

export const GET_LISTS = gql`
	query GetLists($boardId: ID!) {
		board(id: $boardId) {
			lists {
				id
				title
			}
		}
	}
`

export const CREATE_CARD = gql`
	mutation CreateCard($title: String!, $description: String, $listId: ID!) {
		createCard(title: $title, description: $description, listId: $listId) {
			id
			title
		}
	}
`