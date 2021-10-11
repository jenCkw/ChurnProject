import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Data_Churn = {
  __typename?: 'Data_Churn';
  Contract: Scalars['String'];
  Dependents: Scalars['String'];
  DeviceProtection: Scalars['String'];
  InternetService: Scalars['String'];
  MonthlyCharges: Scalars['Float'];
  OnlineBackup: Scalars['String'];
  OnlineSecurity: Scalars['String'];
  PaperlessBilling: Scalars['String'];
  PaymentMethod: Scalars['String'];
  PhoneService: Scalars['String'];
  StreamMovies: Scalars['String'];
  StreamingTv: Scalars['String'];
  TechSupport: Scalars['String'];
  TotalCharges: Scalars['Float'];
  churn: Scalars['String'];
  customerID: Scalars['String'];
  gender: Scalars['String'];
  partner: Scalars['String'];
  seniorCitizen: Scalars['Float'];
  tenure: Scalars['Float'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteUser: Scalars['Boolean'];
  insertUser: Scalars['Boolean'];
  login: LoginResponse;
  revokeRefreshToken: Scalars['Boolean'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Float'];
};


export type MutationInsertUserArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRevokeRefreshTokenArgs = {
  userId: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  churn: Array<Data_Churn>;
  hello: Scalars['String'];
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
};

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = { __typename?: 'Query', hello: string };


export const HelloDocument = gql`
    query Hello {
  hello
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
      }
export function useHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<HelloQuery, HelloQueryVariables>;