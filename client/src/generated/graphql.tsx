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

export type Customer = {
  __typename?: 'Customer';
  address: Scalars['String'];
  firstname: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['String'];
  lastname: Scalars['String'];
  phone: Scalars['String'];
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
  id: Scalars['Float'];
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
  insertCustomer: Scalars['Boolean'];
  insertUser: Scalars['Boolean'];
  login: LoginResponse;
  revokeRefreshToken: Scalars['Boolean'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Float'];
};


export type MutationInsertCustomerArgs = {
  address: Scalars['String'];
  firstname: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['String'];
  lastname: Scalars['String'];
  phone: Scalars['String'];
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
  churn_yes: Array<Data_Churn>;
  customers: Array<Customer>;
  hello: Scalars['String'];
  users: Array<User>;
};


export type QueryChurn_YesArgs = {
  churn: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
};

export type ChurnQueryVariables = Exact<{ [key: string]: never; }>;


export type ChurnQuery = { __typename?: 'Query', churn: Array<{ __typename?: 'Data_Churn', id: number, customerID: string, gender: string, partner: string, seniorCitizen: number, tenure: number, Dependents: string, PhoneService: string, Contract: string, PaperlessBilling: string, PaymentMethod: string, MonthlyCharges: number, TotalCharges: number, churn: string }> };

export type Churn_YesQueryVariables = Exact<{
  churn: Scalars['String'];
}>;


export type Churn_YesQuery = { __typename?: 'Query', churn_yes: Array<{ __typename?: 'Data_Churn', id: number, customerID: string, gender: string, partner: string, seniorCitizen: number, tenure: number, Dependents: string, PhoneService: string, Contract: string, PaperlessBilling: string, PaymentMethod: string, MonthlyCharges: number, TotalCharges: number, churn: string }> };

export type CustomerQueryVariables = Exact<{ [key: string]: never; }>;


export type CustomerQuery = { __typename?: 'Query', customers: Array<{ __typename?: 'Customer', id: string, firstname: string, lastname: string, gender: string, address: string, phone: string }> };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: boolean };

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = { __typename?: 'Query', hello: string };

export type InsertUserMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type InsertUserMutation = { __typename?: 'Mutation', insertUser: boolean };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', accessToken: string } };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: number, name: string, email: string }> };


export const ChurnDocument = gql`
    query Churn {
  churn {
    id
    customerID
    gender
    partner
    seniorCitizen
    tenure
    Dependents
    PhoneService
    Contract
    PaperlessBilling
    PaymentMethod
    MonthlyCharges
    TotalCharges
    churn
  }
}
    `;

/**
 * __useChurnQuery__
 *
 * To run a query within a React component, call `useChurnQuery` and pass it any options that fit your needs.
 * When your component renders, `useChurnQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChurnQuery({
 *   variables: {
 *   },
 * });
 */
export function useChurnQuery(baseOptions?: Apollo.QueryHookOptions<ChurnQuery, ChurnQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChurnQuery, ChurnQueryVariables>(ChurnDocument, options);
      }
export function useChurnLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChurnQuery, ChurnQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChurnQuery, ChurnQueryVariables>(ChurnDocument, options);
        }
export type ChurnQueryHookResult = ReturnType<typeof useChurnQuery>;
export type ChurnLazyQueryHookResult = ReturnType<typeof useChurnLazyQuery>;
export type ChurnQueryResult = Apollo.QueryResult<ChurnQuery, ChurnQueryVariables>;
export const Churn_YesDocument = gql`
    query Churn_yes($churn: String!) {
  churn_yes(churn: $churn) {
    id
    customerID
    gender
    partner
    seniorCitizen
    tenure
    Dependents
    PhoneService
    Contract
    PaperlessBilling
    PaymentMethod
    MonthlyCharges
    TotalCharges
    churn
  }
}
    `;

/**
 * __useChurn_YesQuery__
 *
 * To run a query within a React component, call `useChurn_YesQuery` and pass it any options that fit your needs.
 * When your component renders, `useChurn_YesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChurn_YesQuery({
 *   variables: {
 *      churn: // value for 'churn'
 *   },
 * });
 */
export function useChurn_YesQuery(baseOptions: Apollo.QueryHookOptions<Churn_YesQuery, Churn_YesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Churn_YesQuery, Churn_YesQueryVariables>(Churn_YesDocument, options);
      }
export function useChurn_YesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Churn_YesQuery, Churn_YesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Churn_YesQuery, Churn_YesQueryVariables>(Churn_YesDocument, options);
        }
export type Churn_YesQueryHookResult = ReturnType<typeof useChurn_YesQuery>;
export type Churn_YesLazyQueryHookResult = ReturnType<typeof useChurn_YesLazyQuery>;
export type Churn_YesQueryResult = Apollo.QueryResult<Churn_YesQuery, Churn_YesQueryVariables>;
export const CustomerDocument = gql`
    query Customer {
  customers {
    id
    firstname
    lastname
    gender
    address
    phone
  }
}
    `;

/**
 * __useCustomerQuery__
 *
 * To run a query within a React component, call `useCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomerQuery({
 *   variables: {
 *   },
 * });
 */
export function useCustomerQuery(baseOptions?: Apollo.QueryHookOptions<CustomerQuery, CustomerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CustomerQuery, CustomerQueryVariables>(CustomerDocument, options);
      }
export function useCustomerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CustomerQuery, CustomerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CustomerQuery, CustomerQueryVariables>(CustomerDocument, options);
        }
export type CustomerQueryHookResult = ReturnType<typeof useCustomerQuery>;
export type CustomerLazyQueryHookResult = ReturnType<typeof useCustomerLazyQuery>;
export type CustomerQueryResult = Apollo.QueryResult<CustomerQuery, CustomerQueryVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: Float!) {
  deleteUser(id: $id)
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
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
export const InsertUserDocument = gql`
    mutation InsertUser($name: String!, $email: String!, $password: String!) {
  insertUser(name: $name, email: $email, password: $password)
}
    `;
export type InsertUserMutationFn = Apollo.MutationFunction<InsertUserMutation, InsertUserMutationVariables>;

/**
 * __useInsertUserMutation__
 *
 * To run a mutation, you first call `useInsertUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserMutation, { data, loading, error }] = useInsertUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useInsertUserMutation(baseOptions?: Apollo.MutationHookOptions<InsertUserMutation, InsertUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertUserMutation, InsertUserMutationVariables>(InsertUserDocument, options);
      }
export type InsertUserMutationHookResult = ReturnType<typeof useInsertUserMutation>;
export type InsertUserMutationResult = Apollo.MutationResult<InsertUserMutation>;
export type InsertUserMutationOptions = Apollo.BaseMutationOptions<InsertUserMutation, InsertUserMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    accessToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    id
    name
    email
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;