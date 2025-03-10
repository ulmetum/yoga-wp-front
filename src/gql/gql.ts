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
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query getAllArticles {\n    posts(first: 5) {\n      edges {\n        node {\n          title\n          slug\n          content\n        }\n      }\n    }\n  }\n": typeof types.GetAllArticlesDocument,
    "\n  query getArticlesByPage($first: Int!, $after: String) {\n    posts(\n      first: $first\n      after: $after\n      where: { orderby: { field: DATE, order: DESC } }\n    ) {\n      edges {\n        node {\n          id\n          title\n          slug\n          date\n          headings {\n            subtitle\n          }\n          featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n": typeof types.GetArticlesByPageDocument,
    "\n  query getSearchResult($first: Int!, $after: String, $query: String) {\n    posts(\n      first: $first\n      after: $after\n      where: { search: $query, orderby: { field: DATE, order: DESC } }\n    ) {\n      edges {\n        node {\n          id\n          title\n          slug\n          excerpt\n          date\n          headings {\n            subtitle\n          }\n          featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n": typeof types.GetSearchResultDocument,
    "\n  query getMainMenu {\n    menuItems(where: { location: MENU_1 }) {\n      edges {\n        node {\n          id\n          path\n          url\n          label\n        }\n      }\n    }\n  }\n": typeof types.GetMainMenuDocument,
};
const documents: Documents = {
    "\n  query getAllArticles {\n    posts(first: 5) {\n      edges {\n        node {\n          title\n          slug\n          content\n        }\n      }\n    }\n  }\n": types.GetAllArticlesDocument,
    "\n  query getArticlesByPage($first: Int!, $after: String) {\n    posts(\n      first: $first\n      after: $after\n      where: { orderby: { field: DATE, order: DESC } }\n    ) {\n      edges {\n        node {\n          id\n          title\n          slug\n          date\n          headings {\n            subtitle\n          }\n          featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n": types.GetArticlesByPageDocument,
    "\n  query getSearchResult($first: Int!, $after: String, $query: String) {\n    posts(\n      first: $first\n      after: $after\n      where: { search: $query, orderby: { field: DATE, order: DESC } }\n    ) {\n      edges {\n        node {\n          id\n          title\n          slug\n          excerpt\n          date\n          headings {\n            subtitle\n          }\n          featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n": types.GetSearchResultDocument,
    "\n  query getMainMenu {\n    menuItems(where: { location: MENU_1 }) {\n      edges {\n        node {\n          id\n          path\n          url\n          label\n        }\n      }\n    }\n  }\n": types.GetMainMenuDocument,
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
export function graphql(source: "\n  query getAllArticles {\n    posts(first: 5) {\n      edges {\n        node {\n          title\n          slug\n          content\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAllArticles {\n    posts(first: 5) {\n      edges {\n        node {\n          title\n          slug\n          content\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getArticlesByPage($first: Int!, $after: String) {\n    posts(\n      first: $first\n      after: $after\n      where: { orderby: { field: DATE, order: DESC } }\n    ) {\n      edges {\n        node {\n          id\n          title\n          slug\n          date\n          headings {\n            subtitle\n          }\n          featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n"): (typeof documents)["\n  query getArticlesByPage($first: Int!, $after: String) {\n    posts(\n      first: $first\n      after: $after\n      where: { orderby: { field: DATE, order: DESC } }\n    ) {\n      edges {\n        node {\n          id\n          title\n          slug\n          date\n          headings {\n            subtitle\n          }\n          featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getSearchResult($first: Int!, $after: String, $query: String) {\n    posts(\n      first: $first\n      after: $after\n      where: { search: $query, orderby: { field: DATE, order: DESC } }\n    ) {\n      edges {\n        node {\n          id\n          title\n          slug\n          excerpt\n          date\n          headings {\n            subtitle\n          }\n          featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n"): (typeof documents)["\n  query getSearchResult($first: Int!, $after: String, $query: String) {\n    posts(\n      first: $first\n      after: $after\n      where: { search: $query, orderby: { field: DATE, order: DESC } }\n    ) {\n      edges {\n        node {\n          id\n          title\n          slug\n          excerpt\n          date\n          headings {\n            subtitle\n          }\n          featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getMainMenu {\n    menuItems(where: { location: MENU_1 }) {\n      edges {\n        node {\n          id\n          path\n          url\n          label\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getMainMenu {\n    menuItems(where: { location: MENU_1 }) {\n      edges {\n        node {\n          id\n          path\n          url\n          label\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;