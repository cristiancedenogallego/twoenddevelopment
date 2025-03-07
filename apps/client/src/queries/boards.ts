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
		lists(boardId: $boardId) {
			id
			title
			cards {
				id
				title
				description
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

export const UPDATE_CARD = gql`
	mutation UpdateCard($id: ID!, $title: String!, $description: String) {
		updateCard(id: $id, title: $title, description: $description) {
			id
			title
		}
	}
`

export const MOVE_CARD = gql`
	mutation MoveCard($id: ID!, $listId: ID!) {
		moveCard(id: $id, listId: $listId) {
			id
		}
	}
`