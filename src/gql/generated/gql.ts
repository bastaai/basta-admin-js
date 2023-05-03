/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query GetSale($accountId: String!, $id: ID!, $take: Int, $cursor: String, $direction: PaginationDirection) {\n  sale(accountId: $accountId, id: $id) {\n    id\n    accountId\n    title\n    description\n    currency\n    status\n    closingMethod\n    items {\n      edges {\n        cursor\n        node {\n          id\n          title\n          totalBids\n          description\n          currentBid\n          leaderId\n          saleId\n          reserve\n          startingBid\n          lowEstimate\n          highEstimate\n          itemNumber\n          bids {\n            bidId\n            amount\n            userId\n            date\n            bidStatus\n            maxAmount\n            bidSequenceNumber\n          }\n          dates {\n            closingStart\n            closingEnd\n          }\n          allowedBidTypes\n        }\n      }\n      pageInfo {\n        startCursor\n        endCursor\n        hasNextPage\n      }\n    }\n    incrementTable {\n      rules {\n        highRange\n        lowRange\n        step\n      }\n    }\n    dates {\n      closingDate\n      openDate\n    }\n    closingTimeCountdown\n    participants(take: $take, cursor: $cursor, direction: $direction) {\n      edges {\n        cursor\n        node {\n          userId\n        }\n      }\n      totalCount\n      pageInfo {\n        startCursor\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}": types.GetSaleDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetSale($accountId: String!, $id: ID!, $take: Int, $cursor: String, $direction: PaginationDirection) {\n  sale(accountId: $accountId, id: $id) {\n    id\n    accountId\n    title\n    description\n    currency\n    status\n    closingMethod\n    items {\n      edges {\n        cursor\n        node {\n          id\n          title\n          totalBids\n          description\n          currentBid\n          leaderId\n          saleId\n          reserve\n          startingBid\n          lowEstimate\n          highEstimate\n          itemNumber\n          bids {\n            bidId\n            amount\n            userId\n            date\n            bidStatus\n            maxAmount\n            bidSequenceNumber\n          }\n          dates {\n            closingStart\n            closingEnd\n          }\n          allowedBidTypes\n        }\n      }\n      pageInfo {\n        startCursor\n        endCursor\n        hasNextPage\n      }\n    }\n    incrementTable {\n      rules {\n        highRange\n        lowRange\n        step\n      }\n    }\n    dates {\n      closingDate\n      openDate\n    }\n    closingTimeCountdown\n    participants(take: $take, cursor: $cursor, direction: $direction) {\n      edges {\n        cursor\n        node {\n          userId\n        }\n      }\n      totalCount\n      pageInfo {\n        startCursor\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}"): (typeof documents)["query GetSale($accountId: String!, $id: ID!, $take: Int, $cursor: String, $direction: PaginationDirection) {\n  sale(accountId: $accountId, id: $id) {\n    id\n    accountId\n    title\n    description\n    currency\n    status\n    closingMethod\n    items {\n      edges {\n        cursor\n        node {\n          id\n          title\n          totalBids\n          description\n          currentBid\n          leaderId\n          saleId\n          reserve\n          startingBid\n          lowEstimate\n          highEstimate\n          itemNumber\n          bids {\n            bidId\n            amount\n            userId\n            date\n            bidStatus\n            maxAmount\n            bidSequenceNumber\n          }\n          dates {\n            closingStart\n            closingEnd\n          }\n          allowedBidTypes\n        }\n      }\n      pageInfo {\n        startCursor\n        endCursor\n        hasNextPage\n      }\n    }\n    incrementTable {\n      rules {\n        highRange\n        lowRange\n        step\n      }\n    }\n    dates {\n      closingDate\n      openDate\n    }\n    closingTimeCountdown\n    participants(take: $take, cursor: $cursor, direction: $direction) {\n      edges {\n        cursor\n        node {\n          userId\n        }\n      }\n      totalCount\n      pageInfo {\n        startCursor\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;