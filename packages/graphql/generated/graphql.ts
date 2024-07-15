export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Board = {
  __typename?: 'Board';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lists: Array<List>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type Card = {
  __typename?: 'Card';
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  list: List;
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type List = {
  __typename?: 'List';
  board: Board;
  cards: Array<Card>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBoard: Board;
  createCard: Card;
  createList: List;
  deleteBoard: Board;
  deleteCard: Card;
  deleteList: List;
  moveCard: Card;
  updateBoard: Board;
  updateCard: Card;
  updateList: List;
};


export type MutationCreateBoardArgs = {
  title: Scalars['String']['input'];
};


export type MutationCreateCardArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  listId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateListArgs = {
  boardId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};


export type MutationDeleteBoardArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCardArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteListArgs = {
  id: Scalars['ID']['input'];
};


export type MutationMoveCardArgs = {
  id: Scalars['ID']['input'];
  listId: Scalars['ID']['input'];
};


export type MutationUpdateBoardArgs = {
  id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};


export type MutationUpdateCardArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};


export type MutationUpdateListArgs = {
  id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  board?: Maybe<Board>;
  boards: Array<Board>;
  card?: Maybe<Card>;
  cards: Array<Card>;
  list?: Maybe<List>;
  lists: Array<List>;
};


export type QueryBoardArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCardArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCardsArgs = {
  listId: Scalars['ID']['input'];
};


export type QueryListArgs = {
  id: Scalars['ID']['input'];
};


export type QueryListsArgs = {
  boardId: Scalars['ID']['input'];
};
