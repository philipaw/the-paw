/* tslint:disable */
import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Action = Nameable & Identifiable & {
   __typename?: 'Action';
  id: Scalars['ID'];
  name: Scalars['String'];
  target: Mutable;
  success: Mutable;
  fail: Mutable;
};

export type Addressable = {
  line1: Scalars['String'];
  line2?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  state: Scalars['String'];
  zipcode: Scalars['String'];
  country: Scalars['String'];
};

export type Attribute = Identifiable & {
   __typename?: 'Attribute';
  id: Scalars['ID'];
  thing?: Maybe<Thing>;
  key: Scalars['String'];
  value?: Maybe<Mutable>;
};

export type Group = Nameable & Identifiable & {
   __typename?: 'Group';
  id: Scalars['ID'];
  name: Scalars['String'];
  members?: Maybe<Array<Maybe<Member>>>;
};

export type Identifiable = {
  id: Scalars['ID'];
};

export type Immutable = Location;

export type Location = Addressable & Nameable & Identifiable & {
   __typename?: 'Location';
  id: Scalars['ID'];
  name: Scalars['String'];
  group: Group;
  line1: Scalars['String'];
  line2?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  state: Scalars['String'];
  zipcode: Scalars['String'];
  country: Scalars['String'];
};

export type Member = Identifiable & {
   __typename?: 'Member';
  id: Scalars['ID'];
  group: Group;
  role: Role;
  user: User;
};

export type Mutable = Attribute | Thing | Group | Member | Role | User;

export type Mutation = {
   __typename?: 'Mutation';
  createTimeRecord?: Maybe<TimeRecord>;
};

export type Nameable = {
  name: Scalars['String'];
};

export type Query = {
   __typename?: 'Query';
  users?: Maybe<Array<Maybe<User>>>;
  groups?: Maybe<Array<Maybe<Group>>>;
  things?: Maybe<Array<Maybe<Thing>>>;
  immutables?: Maybe<Array<Maybe<Immutable>>>;
  allTimeRecords?: Maybe<Array<Maybe<TimeRecord>>>;
};

export type Role = Nameable & Identifiable & {
   __typename?: 'Role';
  id: Scalars['ID'];
  name: Scalars['String'];
  actions?: Maybe<Array<Maybe<Action>>>;
  blacklist?: Maybe<Array<Maybe<Action>>>;
  whitelist?: Maybe<Array<Maybe<Action>>>;
};

export type Thing = Nameable & Identifiable & {
   __typename?: 'Thing';
  id: Scalars['ID'];
  name: Scalars['String'];
  accountValue: Scalars['Float'];
  meta?: Maybe<Array<Maybe<Attribute>>>;
};

export type TimeRecord = Identifiable & {
   __typename?: 'TimeRecord';
  id: Scalars['ID'];
  activity: Scalars['String'];
  time: Scalars['Float'];
  date: Scalars['Int'];
};

export type User = Nameable & Identifiable & {
   __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  User: ResolverTypeWrapper<User>,
  Nameable: ResolversTypes['User'] | ResolversTypes['Group'] | ResolversTypes['Role'] | ResolversTypes['Action'] | ResolversTypes['Thing'] | ResolversTypes['Location'],
  String: ResolverTypeWrapper<Scalars['String']>,
  Identifiable: ResolversTypes['User'] | ResolversTypes['Group'] | ResolversTypes['Member'] | ResolversTypes['Role'] | ResolversTypes['Action'] | ResolversTypes['Attribute'] | ResolversTypes['Thing'] | ResolversTypes['Location'] | ResolversTypes['TimeRecord'],
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Group: ResolverTypeWrapper<Group>,
  Member: ResolverTypeWrapper<Member>,
  Role: ResolverTypeWrapper<Role>,
  Action: ResolverTypeWrapper<Omit<Action, 'target' | 'success' | 'fail'> & { target: ResolversTypes['Mutable'], success: ResolversTypes['Mutable'], fail: ResolversTypes['Mutable'] }>,
  Mutable: ResolversTypes['Attribute'] | ResolversTypes['Thing'] | ResolversTypes['Group'] | ResolversTypes['Member'] | ResolversTypes['Role'] | ResolversTypes['User'],
  Attribute: ResolverTypeWrapper<Omit<Attribute, 'value'> & { value?: Maybe<ResolversTypes['Mutable']> }>,
  Thing: ResolverTypeWrapper<Thing>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  Immutable: ResolversTypes['Location'],
  Location: ResolverTypeWrapper<Location>,
  Addressable: ResolversTypes['Location'],
  TimeRecord: ResolverTypeWrapper<TimeRecord>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Mutation: ResolverTypeWrapper<{}>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  User: User,
  Nameable: ResolversParentTypes['User'] | ResolversParentTypes['Group'] | ResolversParentTypes['Role'] | ResolversParentTypes['Action'] | ResolversParentTypes['Thing'] | ResolversParentTypes['Location'],
  String: Scalars['String'],
  Identifiable: ResolversParentTypes['User'] | ResolversParentTypes['Group'] | ResolversParentTypes['Member'] | ResolversParentTypes['Role'] | ResolversParentTypes['Action'] | ResolversParentTypes['Attribute'] | ResolversParentTypes['Thing'] | ResolversParentTypes['Location'] | ResolversParentTypes['TimeRecord'],
  ID: Scalars['ID'],
  Group: Group,
  Member: Member,
  Role: Role,
  Action: Omit<Action, 'target' | 'success' | 'fail'> & { target: ResolversParentTypes['Mutable'], success: ResolversParentTypes['Mutable'], fail: ResolversParentTypes['Mutable'] },
  Mutable: ResolversParentTypes['Attribute'] | ResolversParentTypes['Thing'] | ResolversParentTypes['Group'] | ResolversParentTypes['Member'] | ResolversParentTypes['Role'] | ResolversParentTypes['User'],
  Attribute: Omit<Attribute, 'value'> & { value?: Maybe<ResolversParentTypes['Mutable']> },
  Thing: Thing,
  Float: Scalars['Float'],
  Immutable: ResolversParentTypes['Location'],
  Location: Location,
  Addressable: ResolversParentTypes['Location'],
  TimeRecord: TimeRecord,
  Int: Scalars['Int'],
  Mutation: {},
  Boolean: Scalars['Boolean'],
};

export type ActionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Action'] = ResolversParentTypes['Action']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  target?: Resolver<ResolversTypes['Mutable'], ParentType, ContextType>,
  success?: Resolver<ResolversTypes['Mutable'], ParentType, ContextType>,
  fail?: Resolver<ResolversTypes['Mutable'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type AddressableResolvers<ContextType = any, ParentType extends ResolversParentTypes['Addressable'] = ResolversParentTypes['Addressable']> = {
  __resolveType: TypeResolveFn<'Location', ParentType, ContextType>,
  line1?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  line2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  zipcode?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type AttributeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Attribute'] = ResolversParentTypes['Attribute']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  thing?: Resolver<Maybe<ResolversTypes['Thing']>, ParentType, ContextType>,
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  value?: Resolver<Maybe<ResolversTypes['Mutable']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type GroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['Group'] = ResolversParentTypes['Group']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  members?: Resolver<Maybe<Array<Maybe<ResolversTypes['Member']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type IdentifiableResolvers<ContextType = any, ParentType extends ResolversParentTypes['Identifiable'] = ResolversParentTypes['Identifiable']> = {
  __resolveType: TypeResolveFn<'User' | 'Group' | 'Member' | 'Role' | 'Action' | 'Attribute' | 'Thing' | 'Location' | 'TimeRecord', ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
};

export type ImmutableResolvers<ContextType = any, ParentType extends ResolversParentTypes['Immutable'] = ResolversParentTypes['Immutable']> = {
  __resolveType: TypeResolveFn<'Location', ParentType, ContextType>
};

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  group?: Resolver<ResolversTypes['Group'], ParentType, ContextType>,
  line1?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  line2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  zipcode?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['Member'] = ResolversParentTypes['Member']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  group?: Resolver<ResolversTypes['Group'], ParentType, ContextType>,
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>,
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MutableResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutable'] = ResolversParentTypes['Mutable']> = {
  __resolveType: TypeResolveFn<'Attribute' | 'Thing' | 'Group' | 'Member' | 'Role' | 'User', ParentType, ContextType>
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createTimeRecord?: Resolver<Maybe<ResolversTypes['TimeRecord']>, ParentType, ContextType>,
};

export type NameableResolvers<ContextType = any, ParentType extends ResolversParentTypes['Nameable'] = ResolversParentTypes['Nameable']> = {
  __resolveType: TypeResolveFn<'User' | 'Group' | 'Role' | 'Action' | 'Thing' | 'Location', ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>,
  groups?: Resolver<Maybe<Array<Maybe<ResolversTypes['Group']>>>, ParentType, ContextType>,
  things?: Resolver<Maybe<Array<Maybe<ResolversTypes['Thing']>>>, ParentType, ContextType>,
  immutables?: Resolver<Maybe<Array<Maybe<ResolversTypes['Immutable']>>>, ParentType, ContextType>,
  allTimeRecords?: Resolver<Maybe<Array<Maybe<ResolversTypes['TimeRecord']>>>, ParentType, ContextType>,
};

export type RoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Role'] = ResolversParentTypes['Role']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  actions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Action']>>>, ParentType, ContextType>,
  blacklist?: Resolver<Maybe<Array<Maybe<ResolversTypes['Action']>>>, ParentType, ContextType>,
  whitelist?: Resolver<Maybe<Array<Maybe<ResolversTypes['Action']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ThingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Thing'] = ResolversParentTypes['Thing']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  accountValue?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  meta?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attribute']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type TimeRecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['TimeRecord'] = ResolversParentTypes['TimeRecord']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  activity?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  time?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = any> = {
  Action?: ActionResolvers<ContextType>,
  Addressable?: AddressableResolvers,
  Attribute?: AttributeResolvers<ContextType>,
  Group?: GroupResolvers<ContextType>,
  Identifiable?: IdentifiableResolvers,
  Immutable?: ImmutableResolvers,
  Location?: LocationResolvers<ContextType>,
  Member?: MemberResolvers<ContextType>,
  Mutable?: MutableResolvers,
  Mutation?: MutationResolvers<ContextType>,
  Nameable?: NameableResolvers,
  Query?: QueryResolvers<ContextType>,
  Role?: RoleResolvers<ContextType>,
  Thing?: ThingResolvers<ContextType>,
  TimeRecord?: TimeRecordResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
