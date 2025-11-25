import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  bigint: { input: any; output: any };
  citext: { input: any; output: any };
  date: { input: any; output: any };
  float8: { input: any; output: any };
  json: { input: any; output: any };
  jsonb: { input: any; output: any };
  numeric: { input: any; output: any };
  smallint: { input: any; output: any };
  timestamp: { input: any; output: any };
  timestamptz: { input: any; output: any };
}

export interface AuthorIdType {
  __typename?: 'AuthorIdType';
  author?: Maybe<Authors>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['Int']['output']>;
}

export interface AuthorInputType {
  alias_id?: InputMaybe<Scalars['Int']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  born_date?: InputMaybe<Scalars['date']['input']>;
  born_year?: InputMaybe<Scalars['Int']['input']>;
  death_date?: InputMaybe<Scalars['date']['input']>;
  death_year?: InputMaybe<Scalars['Int']['input']>;
  gender_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image_id?: InputMaybe<Scalars['Int']['input']>;
  is_bipoc?: InputMaybe<Scalars['Boolean']['input']>;
  is_lgbtq?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_personal?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
}

export interface BasicTag {
  category: Scalars['String']['input'];
  spoiler: Scalars['Boolean']['input'];
  tag: Scalars['String']['input'];
}

export interface BasicTagType {
  __typename?: 'BasicTagType';
  category: Scalars['String']['output'];
  categorySlug: Scalars['String']['output'];
  count?: Maybe<Scalars['Int']['output']>;
  spoiler: Scalars['Boolean']['output'];
  tag: Scalars['String']['output'];
  tagSlug: Scalars['String']['output'];
}

export interface BookDtoInput {
  asin?: InputMaybe<Scalars['String']['input']>;
  audio_seconds?: InputMaybe<Scalars['Int']['input']>;
  contributions?: InputMaybe<Array<InputMaybe<ContributionInputType>>>;
  country_id?: InputMaybe<Scalars['Int']['input']>;
  edition_format?: InputMaybe<Scalars['String']['input']>;
  edition_information?: InputMaybe<Scalars['String']['input']>;
  image_id?: InputMaybe<Scalars['Int']['input']>;
  isbn_10?: InputMaybe<Scalars['String']['input']>;
  isbn_13?: InputMaybe<Scalars['String']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  page_count?: InputMaybe<Scalars['Int']['input']>;
  publisher_id?: InputMaybe<Scalars['Int']['input']>;
  reading_format_id?: InputMaybe<Scalars['Int']['input']>;
  release_date?: InputMaybe<Scalars['date']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
}

export interface BookDtoType {
  book_category_id?: InputMaybe<Scalars['Int']['input']>;
  characters?: InputMaybe<Array<InputMaybe<CharacterDtoInput>>>;
  collection_book_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  compilation?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  librarian_tags?: InputMaybe<Array<InputMaybe<TagsDtoInput>>>;
  literary_type_id?: InputMaybe<Scalars['Int']['input']>;
  series?: InputMaybe<Array<InputMaybe<BookSeriesDtoInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
}

export interface BookIdType {
  __typename?: 'BookIdType';
  book?: Maybe<Books>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['Int']['output']>;
}

export interface BookInput {
  book_status_id?: InputMaybe<Scalars['Int']['input']>;
  canonical_id?: InputMaybe<Scalars['Int']['input']>;
  default_audio_edition_id?: InputMaybe<Scalars['Int']['input']>;
  default_cover_edition_id?: InputMaybe<Scalars['Int']['input']>;
  default_ebook_edition_id?: InputMaybe<Scalars['Int']['input']>;
  default_physical_edition_id?: InputMaybe<Scalars['Int']['input']>;
  dto?: InputMaybe<BookDtoType>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  user_added?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface BookMappingIdType {
  __typename?: 'BookMappingIdType';
  book_mapping?: Maybe<Book_Mappings>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['Int']['output']>;
}

export interface BookMappingInput {
  edition_id: Scalars['Int']['input'];
  external_id: Scalars['String']['input'];
  platform_id: Scalars['Int']['input'];
}

export interface BookSeriesDtoInput {
  collection_book_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  compilation?: InputMaybe<Scalars['Boolean']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['numeric']['input']>;
  series_id: Scalars['Int']['input'];
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface Boolean_Comparison_Exp {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
}

export interface CharacterDtoInput {
  character_id: Scalars['Int']['input'];
  position: Scalars['Int']['input'];
  spoiler: Scalars['Boolean']['input'];
}

export interface CharacterIdType {
  __typename?: 'CharacterIdType';
  character?: Maybe<Characters>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['Int']['output']>;
}

export interface CharacterInput {
  biography?: InputMaybe<Scalars['String']['input']>;
  gender_id?: InputMaybe<Scalars['Int']['input']>;
  has_disability?: InputMaybe<Scalars['Boolean']['input']>;
  image_id?: InputMaybe<Scalars['Int']['input']>;
  is_lgbtq?: InputMaybe<Scalars['Boolean']['input']>;
  is_poc?: InputMaybe<Scalars['Boolean']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
}

export interface CollectionImportIdType {
  __typename?: 'CollectionImportIdType';
  collection_import?: Maybe<Collection_Imports>;
  id?: Maybe<Scalars['Int']['output']>;
}

export interface CollectionImportInput {
  contents_key: Scalars['String']['input'];
  override_date_read: Scalars['Boolean']['input'];
  override_ratings: Scalars['Boolean']['input'];
  override_shelves: Scalars['Boolean']['input'];
  platform_id: Scalars['Int']['input'];
  tag_resolution: Scalars['Int']['input'];
  user_id: Scalars['Int']['input'];
}

export interface CollectionImportResultIdType {
  __typename?: 'CollectionImportResultIdType';
  collection_import_result?: Maybe<Collection_Import_Results>;
  id?: Maybe<Scalars['Int']['output']>;
}

export interface ContributionInputType {
  author_id: Scalars['Int']['input'];
  contribution?: InputMaybe<Scalars['String']['input']>;
}

export interface CreateBookFromPlatformInput {
  book_id?: InputMaybe<Scalars['Int']['input']>;
  external_id: Scalars['String']['input'];
  platform_id: Scalars['Int']['input'];
}

export interface CreatePromptInput {
  description: Scalars['String']['input'];
  privacy_setting_id: Scalars['Int']['input'];
  question: Scalars['String']['input'];
}

export interface DatesReadInput {
  action?: InputMaybe<Scalars['String']['input']>;
  edition_id?: InputMaybe<Scalars['Int']['input']>;
  finished_at?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  progress_pages?: InputMaybe<Scalars['Int']['input']>;
  progress_seconds?: InputMaybe<Scalars['Int']['input']>;
  reading_format_id?: InputMaybe<Scalars['Int']['input']>;
  started_at?: InputMaybe<Scalars['date']['input']>;
}

export interface DeleteFollowedPromptType {
  __typename?: 'DeleteFollowedPromptType';
  success: Scalars['Boolean']['output'];
}

export interface DeleteListType {
  __typename?: 'DeleteListType';
  success: Scalars['Boolean']['output'];
}

export interface DeleteReadingJournalOutput {
  __typename?: 'DeleteReadingJournalOutput';
  id: Scalars['Int']['output'];
}

export interface DeleteReadingJournalsOutput {
  __typename?: 'DeleteReadingJournalsOutput';
  ids?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
}

export interface DtoTag {
  spoiler: Scalars['Boolean']['input'];
  tag: Scalars['String']['input'];
  tagSlug: Scalars['String']['input'];
}

export interface EditionIdType {
  __typename?: 'EditionIdType';
  edition?: Maybe<Editions>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['Int']['output']>;
}

export interface EditionInput {
  book_id?: InputMaybe<Scalars['Int']['input']>;
  dto?: InputMaybe<BookDtoInput>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface FollowedListType {
  __typename?: 'FollowedListType';
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  followed_list?: Maybe<Followed_Lists>;
  id?: Maybe<Scalars['Int']['output']>;
}

export interface FollowedPromptType {
  __typename?: 'FollowedPromptType';
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  followed_prompt?: Maybe<Followed_Prompts>;
  id?: Maybe<Scalars['Int']['output']>;
}

export interface FollowedUserType {
  __typename?: 'FollowedUserType';
  error?: Maybe<Scalars['String']['output']>;
  followed_user?: Maybe<Users>;
  followed_user_id?: Maybe<Scalars['Int']['output']>;
  followed_users?: Maybe<Followed_Users>;
  id?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['Int']['output']>;
}

export interface GoalConditionInput {
  authorBipoc?: InputMaybe<Scalars['Int']['input']>;
  authorGenderIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  authorLgbtqia?: InputMaybe<Scalars['Int']['input']>;
  bookCategoryIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  readingFormatId?: InputMaybe<Scalars['Int']['input']>;
}

export interface GoalIdType {
  __typename?: 'GoalIdType';
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  goal?: Maybe<Goals>;
  id?: Maybe<Scalars['Int']['output']>;
}

export interface GoalInput {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  conditions: GoalConditionInput;
  description: Scalars['String']['input'];
  end_date: Scalars['date']['input'];
  goal: Scalars['Int']['input'];
  metric: Scalars['String']['input'];
  privacy_setting_id?: InputMaybe<Scalars['Int']['input']>;
  start_date: Scalars['date']['input'];
}

export interface ImageIdType {
  __typename?: 'ImageIdType';
  id: Scalars['Int']['output'];
  image?: Maybe<Images>;
}

export interface ImageInput {
  imageable_id: Scalars['Int']['input'];
  imageable_type: Scalars['String']['input'];
  url: Scalars['String']['input'];
}

export interface InsertBlockOutput {
  __typename?: 'InsertBlockOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  user_block?: Maybe<User_Blocks>;
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_Comparison_Exp {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
}

export interface LikeDeleteType {
  __typename?: 'LikeDeleteType';
  likes_count: Scalars['Int']['output'];
}

export interface LikeType {
  __typename?: 'LikeType';
  id: Scalars['Int']['output'];
  like?: Maybe<Likes>;
  likes_count: Scalars['Int']['output'];
}

export interface ListBookDeleteType {
  __typename?: 'ListBookDeleteType';
  id?: Maybe<Scalars['Int']['output']>;
  list?: Maybe<Lists>;
  list_id?: Maybe<Scalars['Int']['output']>;
}

export interface ListBookIdType {
  __typename?: 'ListBookIdType';
  id?: Maybe<Scalars['Int']['output']>;
  list_book?: Maybe<List_Books>;
}

export interface ListBookInput {
  book_id: Scalars['Int']['input'];
  edition_id?: InputMaybe<Scalars['Int']['input']>;
  list_id: Scalars['Int']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
}

export interface ListDeleteType {
  __typename?: 'ListDeleteType';
  success: Scalars['Boolean']['output'];
}

export interface ListIdType {
  __typename?: 'ListIdType';
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['Int']['output']>;
  list?: Maybe<Lists>;
}

export interface ListInput {
  default_view?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  featured_profile?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  privacy_setting_id?: InputMaybe<Scalars['Int']['input']>;
  ranked?: InputMaybe<Scalars['Boolean']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
}

export interface NewBookIdType {
  __typename?: 'NewBookIdType';
  book?: Maybe<Books>;
  edition?: Maybe<Editions>;
  edition_id?: Maybe<Scalars['Int']['output']>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['Int']['output']>;
}

export interface NewsletterStatusType {
  __typename?: 'NewsletterStatusType';
  subscribed: Scalars['Boolean']['output'];
}

export interface OptionalEditionIdType {
  __typename?: 'OptionalEditionIdType';
  edition?: Maybe<Editions>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['Int']['output']>;
}

export interface PromptAnswerCreateInput {
  book_id: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  prompt_id: Scalars['Int']['input'];
}

export interface PromptAnswerIdType {
  __typename?: 'PromptAnswerIdType';
  book_id: Scalars['Int']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  prompt_answer?: Maybe<Prompt_Answers>;
  prompt_book?: Maybe<Prompt_Books_Summary>;
  prompt_id: Scalars['Int']['output'];
  user_id: Scalars['Int']['output'];
}

export interface PromptIdType {
  __typename?: 'PromptIdType';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  prompt?: Maybe<Prompts>;
}

export interface PublisherIdType {
  __typename?: 'PublisherIdType';
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['Int']['output']>;
  publisher?: Maybe<Publishers>;
}

export interface PublisherInputType {
  canonical_id?: InputMaybe<Scalars['Int']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
}

export interface ReadingJournalCreateType {
  action_at?: InputMaybe<Scalars['date']['input']>;
  book_id: Scalars['Int']['input'];
  edition_id?: InputMaybe<Scalars['Int']['input']>;
  entry?: InputMaybe<Scalars['String']['input']>;
  event: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  privacy_setting_id: Scalars['Int']['input'];
  tags: Array<InputMaybe<BasicTag>>;
}

export interface ReadingJournalOutput {
  __typename?: 'ReadingJournalOutput';
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['Int']['output']>;
  reading_journal?: Maybe<Reading_Journals>;
}

export interface ReadingJournalUpdateType {
  action_at?: InputMaybe<Scalars['date']['input']>;
  edition_id?: InputMaybe<Scalars['Int']['input']>;
  entry?: InputMaybe<Scalars['String']['input']>;
  event?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  privacy_setting_id?: InputMaybe<Scalars['Int']['input']>;
  tags?: InputMaybe<Array<InputMaybe<BasicTag>>>;
}

export interface ReferralType {
  __typename?: 'ReferralType';
  book?: Maybe<Books>;
  book_id: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
}

export interface ReportInput {
  details: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  reportable_id: Scalars['Int']['input'];
  reportable_type: Scalars['String']['input'];
  service_name?: InputMaybe<Scalars['String']['input']>;
}

export interface ReportOutput {
  __typename?: 'ReportOutput';
  complete?: Maybe<Scalars['Boolean']['output']>;
  created?: Maybe<Scalars['Boolean']['output']>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
}

export interface SearchOutput {
  __typename?: 'SearchOutput';
  error?: Maybe<Scalars['String']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  page?: Maybe<Scalars['Int']['output']>;
  per_page?: Maybe<Scalars['Int']['output']>;
  query?: Maybe<Scalars['String']['output']>;
  query_type?: Maybe<Scalars['String']['output']>;
  results?: Maybe<Scalars['jsonb']['output']>;
}

export interface SeriesIdType {
  __typename?: 'SeriesIdType';
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['Int']['output']>;
  series?: Maybe<Series>;
}

export interface SeriesInput {
  name: Scalars['String']['input'];
}

export interface SeriesInputType {
  author_id?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_completed?: InputMaybe<Scalars['Boolean']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_Comparison_Exp {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
}

export interface SubscriptionsType {
  __typename?: 'SubscriptionsType';
  billing_portal_url?: Maybe<Scalars['String']['output']>;
  membership?: Maybe<Scalars['String']['output']>;
  membership_ends_at?: Maybe<Scalars['timestamp']['output']>;
  monthly_session_id?: Maybe<Scalars['String']['output']>;
  monthly_session_url?: Maybe<Scalars['String']['output']>;
  payment_system?: Maybe<Scalars['String']['output']>;
  yearly_session_id?: Maybe<Scalars['String']['output']>;
  yearly_session_url?: Maybe<Scalars['String']['output']>;
}

export interface SuccessType {
  __typename?: 'SuccessType';
  success: Scalars['Boolean']['output'];
}

export interface TagsDtoInput {
  ContentWarning?: InputMaybe<Array<InputMaybe<DtoTag>>>;
  Genre?: InputMaybe<Array<InputMaybe<DtoTag>>>;
  Mood?: InputMaybe<Array<InputMaybe<DtoTag>>>;
}

export interface TagsType {
  __typename?: 'TagsType';
  tags: Array<Maybe<BasicTagType>>;
}

export interface TrendingBookType {
  __typename?: 'TrendingBookType';
  error?: Maybe<Scalars['String']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
}

export interface UpdatePromptInput {
  description: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  privacy_setting_id: Scalars['Int']['input'];
  question: Scalars['String']['input'];
}

export interface UserBookCreateInput {
  book_id: Scalars['Int']['input'];
  date_added?: InputMaybe<Scalars['date']['input']>;
  edition_id?: InputMaybe<Scalars['Int']['input']>;
  first_started_reading_date?: InputMaybe<Scalars['date']['input']>;
  last_read_date?: InputMaybe<Scalars['date']['input']>;
  media_url?: InputMaybe<Scalars['String']['input']>;
  privacy_setting_id?: InputMaybe<Scalars['Int']['input']>;
  private_notes?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['numeric']['input']>;
  read_count?: InputMaybe<Scalars['Int']['input']>;
  reading_format_id?: InputMaybe<Scalars['Int']['input']>;
  recommended_by?: InputMaybe<Scalars['String']['input']>;
  recommended_for?: InputMaybe<Scalars['String']['input']>;
  referrer_user_id?: InputMaybe<Scalars['Int']['input']>;
  review_has_spoilers?: InputMaybe<Scalars['Boolean']['input']>;
  review_slate?: InputMaybe<Scalars['jsonb']['input']>;
  reviewed_at?: InputMaybe<Scalars['date']['input']>;
  sponsored_review?: InputMaybe<Scalars['Boolean']['input']>;
  status_id?: InputMaybe<Scalars['Int']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  user_date?: InputMaybe<Scalars['date']['input']>;
}

export interface UserBookDeleteType {
  __typename?: 'UserBookDeleteType';
  book_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  user_book?: Maybe<User_Books>;
  user_id?: Maybe<Scalars['Int']['output']>;
}

export interface UserBookIdType {
  __typename?: 'UserBookIdType';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  user_book?: Maybe<User_Books>;
}

export interface UserBookReadIdType {
  __typename?: 'UserBookReadIdType';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  user_book_read?: Maybe<User_Book_Reads>;
}

export interface UserBookUpdateInput {
  date_added?: InputMaybe<Scalars['date']['input']>;
  edition_id?: InputMaybe<Scalars['Int']['input']>;
  first_started_reading_date?: InputMaybe<Scalars['date']['input']>;
  last_read_date?: InputMaybe<Scalars['date']['input']>;
  media_url?: InputMaybe<Scalars['String']['input']>;
  privacy_setting_id?: InputMaybe<Scalars['Int']['input']>;
  private_notes?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['numeric']['input']>;
  read_count?: InputMaybe<Scalars['Int']['input']>;
  reading_format_id?: InputMaybe<Scalars['Int']['input']>;
  recommended_by?: InputMaybe<Scalars['String']['input']>;
  recommended_for?: InputMaybe<Scalars['String']['input']>;
  referrer_user_id?: InputMaybe<Scalars['Int']['input']>;
  review_has_spoilers?: InputMaybe<Scalars['Boolean']['input']>;
  review_slate?: InputMaybe<Scalars['jsonb']['input']>;
  reviewed_at?: InputMaybe<Scalars['date']['input']>;
  sponsored_review?: InputMaybe<Scalars['Boolean']['input']>;
  status_id?: InputMaybe<Scalars['Int']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  user_date?: InputMaybe<Scalars['date']['input']>;
}

export interface UserBooksReadUpsertType {
  __typename?: 'UserBooksReadUpsertType';
  error?: Maybe<Scalars['String']['output']>;
  user_book?: Maybe<User_Books>;
  user_book_id?: Maybe<Scalars['Int']['output']>;
}

export interface UserIdType {
  __typename?: 'UserIdType';
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<Users>;
}

export interface UserJoinInput {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  referrer_id?: InputMaybe<Scalars['Int']['input']>;
  referrer_url?: InputMaybe<Scalars['String']['input']>;
}

export interface UserLoginInput {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}

export interface ValidateReceiptType {
  __typename?: 'ValidateReceiptType';
  result: Scalars['jsonb']['output'];
  supporter?: Maybe<Scalars['Boolean']['output']>;
}

/** columns and relationships of "activities" */
export interface Activities {
  __typename?: 'activities';
  /** An object relationship */
  book?: Maybe<Books>;
  book_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  data: Scalars['jsonb']['output'];
  event: Scalars['String']['output'];
  /** An array relationship */
  followers: Array<Followed_Users>;
  id: Scalars['Int']['output'];
  /** An array relationship */
  likes: Array<Likes>;
  likes_count: Scalars['Int']['output'];
  object_type: Scalars['String']['output'];
  original_book_id?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  privacy_setting: Privacy_Settings;
  privacy_setting_id: Scalars['Int']['output'];
  uid: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int']['output'];
}

/** columns and relationships of "activities" */
export interface ActivitiesDataArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "activities" */
export interface ActivitiesFollowersArgs {
  distinct_on?: InputMaybe<Array<Followed_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Followed_Users_Order_By>>;
  where?: InputMaybe<Followed_Users_Bool_Exp>;
}

/** columns and relationships of "activities" */
export interface ActivitiesLikesArgs {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
}

/** order by aggregate values of table "activities" */
export interface Activities_Aggregate_Order_By {
  avg?: InputMaybe<Activities_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Activities_Max_Order_By>;
  min?: InputMaybe<Activities_Min_Order_By>;
  stddev?: InputMaybe<Activities_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Activities_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Activities_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Activities_Sum_Order_By>;
  var_pop?: InputMaybe<Activities_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Activities_Var_Samp_Order_By>;
  variance?: InputMaybe<Activities_Variance_Order_By>;
}

/** order by avg() on columns of table "activities" */
export interface Activities_Avg_Order_By {
  book_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "activities". All fields are combined with a logical 'AND'. */
export interface Activities_Bool_Exp {
  _and?: InputMaybe<Array<Activities_Bool_Exp>>;
  _not?: InputMaybe<Activities_Bool_Exp>;
  _or?: InputMaybe<Array<Activities_Bool_Exp>>;
  book?: InputMaybe<Books_Bool_Exp>;
  book_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  event?: InputMaybe<String_Comparison_Exp>;
  followers?: InputMaybe<Followed_Users_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  likes?: InputMaybe<Likes_Bool_Exp>;
  likes_count?: InputMaybe<Int_Comparison_Exp>;
  object_type?: InputMaybe<String_Comparison_Exp>;
  original_book_id?: InputMaybe<Int_Comparison_Exp>;
  privacy_setting?: InputMaybe<Privacy_Settings_Bool_Exp>;
  privacy_setting_id?: InputMaybe<Int_Comparison_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
}

/** order by max() on columns of table "activities" */
export interface Activities_Max_Order_By {
  book_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  event?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  object_type?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by min() on columns of table "activities" */
export interface Activities_Min_Order_By {
  book_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  event?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  object_type?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** response of any mutation on the table "activities" */
export interface Activities_Mutation_Response {
  __typename?: 'activities_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Activities>;
}

/** Ordering options when selecting data from "activities". */
export interface Activities_Order_By {
  book?: InputMaybe<Books_Order_By>;
  book_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  event?: InputMaybe<Order_By>;
  followers_aggregate?: InputMaybe<Followed_Users_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  likes_aggregate?: InputMaybe<Likes_Aggregate_Order_By>;
  likes_count?: InputMaybe<Order_By>;
  object_type?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  privacy_setting?: InputMaybe<Privacy_Settings_Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** select columns of table "activities" */
export enum Activities_Select_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Event = 'event',
  /** column name */
  Id = 'id',
  /** column name */
  LikesCount = 'likes_count',
  /** column name */
  ObjectType = 'object_type',
  /** column name */
  OriginalBookId = 'original_book_id',
  /** column name */
  PrivacySettingId = 'privacy_setting_id',
  /** column name */
  Uid = 'uid',
  /** column name */
  UserId = 'user_id',
}

/** order by stddev() on columns of table "activities" */
export interface Activities_Stddev_Order_By {
  book_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by stddev_pop() on columns of table "activities" */
export interface Activities_Stddev_Pop_Order_By {
  book_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by stddev_samp() on columns of table "activities" */
export interface Activities_Stddev_Samp_Order_By {
  book_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "activities" */
export interface Activities_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Activities_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Activities_Stream_Cursor_Value_Input {
  book_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  event?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  likes_count?: InputMaybe<Scalars['Int']['input']>;
  object_type?: InputMaybe<Scalars['String']['input']>;
  original_book_id?: InputMaybe<Scalars['Int']['input']>;
  privacy_setting_id?: InputMaybe<Scalars['Int']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
}

/** order by sum() on columns of table "activities" */
export interface Activities_Sum_Order_By {
  book_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by var_pop() on columns of table "activities" */
export interface Activities_Var_Pop_Order_By {
  book_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by var_samp() on columns of table "activities" */
export interface Activities_Var_Samp_Order_By {
  book_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by variance() on columns of table "activities" */
export interface Activities_Variance_Order_By {
  book_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

export interface Activity_Feed_Args {
  feed_limit?: InputMaybe<Scalars['Int']['input']>;
  feed_offset?: InputMaybe<Scalars['Int']['input']>;
}

export interface Activity_Foryou_Feed_Args {
  feed_limit?: InputMaybe<Scalars['Int']['input']>;
  feed_offset?: InputMaybe<Scalars['Int']['input']>;
}

/** columns and relationships of "authors" */
export interface Authors {
  __typename?: 'authors';
  /** An array relationship */
  alias: Array<Authors>;
  alias_id?: Maybe<Scalars['Int']['output']>;
  alternate_names: Scalars['jsonb']['output'];
  bio?: Maybe<Scalars['String']['output']>;
  books_count: Scalars['Int']['output'];
  born_date?: Maybe<Scalars['date']['output']>;
  born_year?: Maybe<Scalars['Int']['output']>;
  cached_image: Scalars['jsonb']['output'];
  /** An object relationship */
  canonical?: Maybe<Authors>;
  canonical_id?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  contributions: Array<Contributions>;
  /** An aggregate relationship */
  contributions_aggregate: Contributions_Aggregate;
  /** An object relationship */
  creator?: Maybe<Users>;
  death_date?: Maybe<Scalars['date']['output']>;
  death_year?: Maybe<Scalars['Int']['output']>;
  gender_id?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  identifiers: Scalars['jsonb']['output'];
  /** An object relationship */
  image?: Maybe<Images>;
  image_id?: Maybe<Scalars['Int']['output']>;
  is_bipoc?: Maybe<Scalars['Boolean']['output']>;
  is_lgbtq?: Maybe<Scalars['Boolean']['output']>;
  links: Scalars['jsonb']['output'];
  location?: Maybe<Scalars['String']['output']>;
  locked: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  name_personal?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  state: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
  users_count: Scalars['Int']['output'];
}

/** columns and relationships of "authors" */
export interface AuthorsAliasArgs {
  distinct_on?: InputMaybe<Array<Authors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Authors_Order_By>>;
  where?: InputMaybe<Authors_Bool_Exp>;
}

/** columns and relationships of "authors" */
export interface AuthorsAlternate_NamesArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "authors" */
export interface AuthorsCached_ImageArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "authors" */
export interface AuthorsContributionsArgs {
  distinct_on?: InputMaybe<Array<Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contributions_Order_By>>;
  where?: InputMaybe<Contributions_Bool_Exp>;
}

/** columns and relationships of "authors" */
export interface AuthorsContributions_AggregateArgs {
  distinct_on?: InputMaybe<Array<Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contributions_Order_By>>;
  where?: InputMaybe<Contributions_Bool_Exp>;
}

/** columns and relationships of "authors" */
export interface AuthorsIdentifiersArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "authors" */
export interface AuthorsLinksArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** order by aggregate values of table "authors" */
export interface Authors_Aggregate_Order_By {
  avg?: InputMaybe<Authors_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Authors_Max_Order_By>;
  min?: InputMaybe<Authors_Min_Order_By>;
  stddev?: InputMaybe<Authors_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Authors_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Authors_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Authors_Sum_Order_By>;
  var_pop?: InputMaybe<Authors_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Authors_Var_Samp_Order_By>;
  variance?: InputMaybe<Authors_Variance_Order_By>;
}

/** order by avg() on columns of table "authors" */
export interface Authors_Avg_Order_By {
  alias_id?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  born_year?: InputMaybe<Order_By>;
  canonical_id?: InputMaybe<Order_By>;
  death_year?: InputMaybe<Order_By>;
  gender_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "authors". All fields are combined with a logical 'AND'. */
export interface Authors_Bool_Exp {
  _and?: InputMaybe<Array<Authors_Bool_Exp>>;
  _not?: InputMaybe<Authors_Bool_Exp>;
  _or?: InputMaybe<Array<Authors_Bool_Exp>>;
  alias?: InputMaybe<Authors_Bool_Exp>;
  alias_id?: InputMaybe<Int_Comparison_Exp>;
  alternate_names?: InputMaybe<Jsonb_Comparison_Exp>;
  bio?: InputMaybe<String_Comparison_Exp>;
  books_count?: InputMaybe<Int_Comparison_Exp>;
  born_date?: InputMaybe<Date_Comparison_Exp>;
  born_year?: InputMaybe<Int_Comparison_Exp>;
  cached_image?: InputMaybe<Jsonb_Comparison_Exp>;
  canonical?: InputMaybe<Authors_Bool_Exp>;
  canonical_id?: InputMaybe<Int_Comparison_Exp>;
  contributions?: InputMaybe<Contributions_Bool_Exp>;
  contributions_aggregate?: InputMaybe<Contributions_Aggregate_Bool_Exp>;
  creator?: InputMaybe<Users_Bool_Exp>;
  death_date?: InputMaybe<Date_Comparison_Exp>;
  death_year?: InputMaybe<Int_Comparison_Exp>;
  gender_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  identifiers?: InputMaybe<Jsonb_Comparison_Exp>;
  image?: InputMaybe<Images_Bool_Exp>;
  image_id?: InputMaybe<Int_Comparison_Exp>;
  is_bipoc?: InputMaybe<Boolean_Comparison_Exp>;
  is_lgbtq?: InputMaybe<Boolean_Comparison_Exp>;
  links?: InputMaybe<Jsonb_Comparison_Exp>;
  location?: InputMaybe<String_Comparison_Exp>;
  locked?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  name_personal?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
  users_count?: InputMaybe<Int_Comparison_Exp>;
}

/** order by max() on columns of table "authors" */
export interface Authors_Max_Order_By {
  alias_id?: InputMaybe<Order_By>;
  bio?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  born_date?: InputMaybe<Order_By>;
  born_year?: InputMaybe<Order_By>;
  canonical_id?: InputMaybe<Order_By>;
  death_date?: InputMaybe<Order_By>;
  death_year?: InputMaybe<Order_By>;
  gender_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  name_personal?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
}

/** order by min() on columns of table "authors" */
export interface Authors_Min_Order_By {
  alias_id?: InputMaybe<Order_By>;
  bio?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  born_date?: InputMaybe<Order_By>;
  born_year?: InputMaybe<Order_By>;
  canonical_id?: InputMaybe<Order_By>;
  death_date?: InputMaybe<Order_By>;
  death_year?: InputMaybe<Order_By>;
  gender_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  name_personal?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
}

/** Ordering options when selecting data from "authors". */
export interface Authors_Order_By {
  alias_aggregate?: InputMaybe<Authors_Aggregate_Order_By>;
  alias_id?: InputMaybe<Order_By>;
  alternate_names?: InputMaybe<Order_By>;
  bio?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  born_date?: InputMaybe<Order_By>;
  born_year?: InputMaybe<Order_By>;
  cached_image?: InputMaybe<Order_By>;
  canonical?: InputMaybe<Authors_Order_By>;
  canonical_id?: InputMaybe<Order_By>;
  contributions_aggregate?: InputMaybe<Contributions_Aggregate_Order_By>;
  creator?: InputMaybe<Users_Order_By>;
  death_date?: InputMaybe<Order_By>;
  death_year?: InputMaybe<Order_By>;
  gender_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  identifiers?: InputMaybe<Order_By>;
  image?: InputMaybe<Images_Order_By>;
  image_id?: InputMaybe<Order_By>;
  is_bipoc?: InputMaybe<Order_By>;
  is_lgbtq?: InputMaybe<Order_By>;
  links?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  locked?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  name_personal?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
}

/** select columns of table "authors" */
export enum Authors_Select_Column {
  /** column name */
  AliasId = 'alias_id',
  /** column name */
  AlternateNames = 'alternate_names',
  /** column name */
  Bio = 'bio',
  /** column name */
  BooksCount = 'books_count',
  /** column name */
  BornDate = 'born_date',
  /** column name */
  BornYear = 'born_year',
  /** column name */
  CachedImage = 'cached_image',
  /** column name */
  CanonicalId = 'canonical_id',
  /** column name */
  DeathDate = 'death_date',
  /** column name */
  DeathYear = 'death_year',
  /** column name */
  GenderId = 'gender_id',
  /** column name */
  Id = 'id',
  /** column name */
  Identifiers = 'identifiers',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  IsBipoc = 'is_bipoc',
  /** column name */
  IsLgbtq = 'is_lgbtq',
  /** column name */
  Links = 'links',
  /** column name */
  Location = 'location',
  /** column name */
  Locked = 'locked',
  /** column name */
  Name = 'name',
  /** column name */
  NamePersonal = 'name_personal',
  /** column name */
  Slug = 'slug',
  /** column name */
  State = 'state',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id',
  /** column name */
  UsersCount = 'users_count',
}

/** order by stddev() on columns of table "authors" */
export interface Authors_Stddev_Order_By {
  alias_id?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  born_year?: InputMaybe<Order_By>;
  canonical_id?: InputMaybe<Order_By>;
  death_year?: InputMaybe<Order_By>;
  gender_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
}

/** order by stddev_pop() on columns of table "authors" */
export interface Authors_Stddev_Pop_Order_By {
  alias_id?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  born_year?: InputMaybe<Order_By>;
  canonical_id?: InputMaybe<Order_By>;
  death_year?: InputMaybe<Order_By>;
  gender_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
}

/** order by stddev_samp() on columns of table "authors" */
export interface Authors_Stddev_Samp_Order_By {
  alias_id?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  born_year?: InputMaybe<Order_By>;
  canonical_id?: InputMaybe<Order_By>;
  death_year?: InputMaybe<Order_By>;
  gender_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "authors" */
export interface Authors_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Authors_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Authors_Stream_Cursor_Value_Input {
  alias_id?: InputMaybe<Scalars['Int']['input']>;
  alternate_names?: InputMaybe<Scalars['jsonb']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  books_count?: InputMaybe<Scalars['Int']['input']>;
  born_date?: InputMaybe<Scalars['date']['input']>;
  born_year?: InputMaybe<Scalars['Int']['input']>;
  cached_image?: InputMaybe<Scalars['jsonb']['input']>;
  canonical_id?: InputMaybe<Scalars['Int']['input']>;
  death_date?: InputMaybe<Scalars['date']['input']>;
  death_year?: InputMaybe<Scalars['Int']['input']>;
  gender_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  identifiers?: InputMaybe<Scalars['jsonb']['input']>;
  image_id?: InputMaybe<Scalars['Int']['input']>;
  is_bipoc?: InputMaybe<Scalars['Boolean']['input']>;
  is_lgbtq?: InputMaybe<Scalars['Boolean']['input']>;
  links?: InputMaybe<Scalars['jsonb']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_personal?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
  users_count?: InputMaybe<Scalars['Int']['input']>;
}

/** order by sum() on columns of table "authors" */
export interface Authors_Sum_Order_By {
  alias_id?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  born_year?: InputMaybe<Order_By>;
  canonical_id?: InputMaybe<Order_By>;
  death_year?: InputMaybe<Order_By>;
  gender_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
}

/** order by var_pop() on columns of table "authors" */
export interface Authors_Var_Pop_Order_By {
  alias_id?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  born_year?: InputMaybe<Order_By>;
  canonical_id?: InputMaybe<Order_By>;
  death_year?: InputMaybe<Order_By>;
  gender_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
}

/** order by var_samp() on columns of table "authors" */
export interface Authors_Var_Samp_Order_By {
  alias_id?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  born_year?: InputMaybe<Order_By>;
  canonical_id?: InputMaybe<Order_By>;
  death_year?: InputMaybe<Order_By>;
  gender_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
}

/** order by variance() on columns of table "authors" */
export interface Authors_Variance_Order_By {
  alias_id?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  born_year?: InputMaybe<Order_By>;
  canonical_id?: InputMaybe<Order_By>;
  death_year?: InputMaybe<Order_By>;
  gender_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
}

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export interface Bigint_Comparison_Exp {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
}

/** columns and relationships of "book_categories" */
export interface Book_Categories {
  __typename?: 'book_categories';
  id: Scalars['bigint']['output'];
  name: Scalars['String']['output'];
}

/** Boolean expression to filter rows from the table "book_categories". All fields are combined with a logical 'AND'. */
export interface Book_Categories_Bool_Exp {
  _and?: InputMaybe<Array<Book_Categories_Bool_Exp>>;
  _not?: InputMaybe<Book_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Book_Categories_Bool_Exp>>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
}

/** Ordering options when selecting data from "book_categories". */
export interface Book_Categories_Order_By {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
}

/** select columns of table "book_categories" */
export enum Book_Categories_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** Streaming cursor of the table "book_categories" */
export interface Book_Categories_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Book_Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Book_Categories_Stream_Cursor_Value_Input {
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "book_characters" */
export interface Book_Characters {
  __typename?: 'book_characters';
  /** An object relationship */
  book?: Maybe<Books>;
  book_id: Scalars['bigint']['output'];
  /** An object relationship */
  character?: Maybe<Characters>;
  character_id: Scalars['bigint']['output'];
  id: Scalars['bigint']['output'];
  only_mentioned: Scalars['Boolean']['output'];
  position: Scalars['Int']['output'];
  spoiler: Scalars['Boolean']['output'];
}

/** order by aggregate values of table "book_characters" */
export interface Book_Characters_Aggregate_Order_By {
  avg?: InputMaybe<Book_Characters_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Book_Characters_Max_Order_By>;
  min?: InputMaybe<Book_Characters_Min_Order_By>;
  stddev?: InputMaybe<Book_Characters_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Book_Characters_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Book_Characters_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Book_Characters_Sum_Order_By>;
  var_pop?: InputMaybe<Book_Characters_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Book_Characters_Var_Samp_Order_By>;
  variance?: InputMaybe<Book_Characters_Variance_Order_By>;
}

/** order by avg() on columns of table "book_characters" */
export interface Book_Characters_Avg_Order_By {
  book_id?: InputMaybe<Order_By>;
  character_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "book_characters". All fields are combined with a logical 'AND'. */
export interface Book_Characters_Bool_Exp {
  _and?: InputMaybe<Array<Book_Characters_Bool_Exp>>;
  _not?: InputMaybe<Book_Characters_Bool_Exp>;
  _or?: InputMaybe<Array<Book_Characters_Bool_Exp>>;
  book?: InputMaybe<Books_Bool_Exp>;
  book_id?: InputMaybe<Bigint_Comparison_Exp>;
  character?: InputMaybe<Characters_Bool_Exp>;
  character_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  only_mentioned?: InputMaybe<Boolean_Comparison_Exp>;
  position?: InputMaybe<Int_Comparison_Exp>;
  spoiler?: InputMaybe<Boolean_Comparison_Exp>;
}

/** order by max() on columns of table "book_characters" */
export interface Book_Characters_Max_Order_By {
  book_id?: InputMaybe<Order_By>;
  character_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
}

/** order by min() on columns of table "book_characters" */
export interface Book_Characters_Min_Order_By {
  book_id?: InputMaybe<Order_By>;
  character_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
}

/** Ordering options when selecting data from "book_characters". */
export interface Book_Characters_Order_By {
  book?: InputMaybe<Books_Order_By>;
  book_id?: InputMaybe<Order_By>;
  character?: InputMaybe<Characters_Order_By>;
  character_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  only_mentioned?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  spoiler?: InputMaybe<Order_By>;
}

/** select columns of table "book_characters" */
export enum Book_Characters_Select_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  CharacterId = 'character_id',
  /** column name */
  Id = 'id',
  /** column name */
  OnlyMentioned = 'only_mentioned',
  /** column name */
  Position = 'position',
  /** column name */
  Spoiler = 'spoiler',
}

/** order by stddev() on columns of table "book_characters" */
export interface Book_Characters_Stddev_Order_By {
  book_id?: InputMaybe<Order_By>;
  character_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
}

/** order by stddev_pop() on columns of table "book_characters" */
export interface Book_Characters_Stddev_Pop_Order_By {
  book_id?: InputMaybe<Order_By>;
  character_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
}

/** order by stddev_samp() on columns of table "book_characters" */
export interface Book_Characters_Stddev_Samp_Order_By {
  book_id?: InputMaybe<Order_By>;
  character_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "book_characters" */
export interface Book_Characters_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Book_Characters_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Book_Characters_Stream_Cursor_Value_Input {
  book_id?: InputMaybe<Scalars['bigint']['input']>;
  character_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  only_mentioned?: InputMaybe<Scalars['Boolean']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  spoiler?: InputMaybe<Scalars['Boolean']['input']>;
}

/** order by sum() on columns of table "book_characters" */
export interface Book_Characters_Sum_Order_By {
  book_id?: InputMaybe<Order_By>;
  character_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
}

/** order by var_pop() on columns of table "book_characters" */
export interface Book_Characters_Var_Pop_Order_By {
  book_id?: InputMaybe<Order_By>;
  character_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
}

/** order by var_samp() on columns of table "book_characters" */
export interface Book_Characters_Var_Samp_Order_By {
  book_id?: InputMaybe<Order_By>;
  character_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
}

/** order by variance() on columns of table "book_characters" */
export interface Book_Characters_Variance_Order_By {
  book_id?: InputMaybe<Order_By>;
  character_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
}

/** columns and relationships of "book_collections" */
export interface Book_Collections {
  __typename?: 'book_collections';
  book_id: Scalars['Int']['output'];
  child_book_id: Scalars['Int']['output'];
  id: Scalars['bigint']['output'];
  position: Scalars['Int']['output'];
}

/** Boolean expression to filter rows from the table "book_collections". All fields are combined with a logical 'AND'. */
export interface Book_Collections_Bool_Exp {
  _and?: InputMaybe<Array<Book_Collections_Bool_Exp>>;
  _not?: InputMaybe<Book_Collections_Bool_Exp>;
  _or?: InputMaybe<Array<Book_Collections_Bool_Exp>>;
  book_id?: InputMaybe<Int_Comparison_Exp>;
  child_book_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  position?: InputMaybe<Int_Comparison_Exp>;
}

/** Ordering options when selecting data from "book_collections". */
export interface Book_Collections_Order_By {
  book_id?: InputMaybe<Order_By>;
  child_book_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
}

/** select columns of table "book_collections" */
export enum Book_Collections_Select_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  ChildBookId = 'child_book_id',
  /** column name */
  Id = 'id',
  /** column name */
  Position = 'position',
}

/** Streaming cursor of the table "book_collections" */
export interface Book_Collections_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Book_Collections_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Book_Collections_Stream_Cursor_Value_Input {
  book_id?: InputMaybe<Scalars['Int']['input']>;
  child_book_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
}

/** columns and relationships of "book_mappings" */
export interface Book_Mappings {
  __typename?: 'book_mappings';
  attempts?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  book: Books;
  book_id: Scalars['Int']['output'];
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  edition?: Maybe<Editions>;
  edition_id?: Maybe<Scalars['Int']['output']>;
  external_data_id?: Maybe<Scalars['Int']['output']>;
  external_id: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  loaded?: Maybe<Scalars['Boolean']['output']>;
  loaded_at?: Maybe<Scalars['timestamp']['output']>;
  normalized_at?: Maybe<Scalars['timestamp']['output']>;
  original_book_id?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  platform: Platforms;
  platform_id: Scalars['Int']['output'];
  state: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  verified?: Maybe<Scalars['Boolean']['output']>;
  verified_at?: Maybe<Scalars['timestamp']['output']>;
}

/** order by aggregate values of table "book_mappings" */
export interface Book_Mappings_Aggregate_Order_By {
  avg?: InputMaybe<Book_Mappings_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Book_Mappings_Max_Order_By>;
  min?: InputMaybe<Book_Mappings_Min_Order_By>;
  stddev?: InputMaybe<Book_Mappings_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Book_Mappings_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Book_Mappings_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Book_Mappings_Sum_Order_By>;
  var_pop?: InputMaybe<Book_Mappings_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Book_Mappings_Var_Samp_Order_By>;
  variance?: InputMaybe<Book_Mappings_Variance_Order_By>;
}

/** order by avg() on columns of table "book_mappings" */
export interface Book_Mappings_Avg_Order_By {
  attempts?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  external_data_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "book_mappings". All fields are combined with a logical 'AND'. */
export interface Book_Mappings_Bool_Exp {
  _and?: InputMaybe<Array<Book_Mappings_Bool_Exp>>;
  _not?: InputMaybe<Book_Mappings_Bool_Exp>;
  _or?: InputMaybe<Array<Book_Mappings_Bool_Exp>>;
  attempts?: InputMaybe<Int_Comparison_Exp>;
  book?: InputMaybe<Books_Bool_Exp>;
  book_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  edition?: InputMaybe<Editions_Bool_Exp>;
  edition_id?: InputMaybe<Int_Comparison_Exp>;
  external_data_id?: InputMaybe<Int_Comparison_Exp>;
  external_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  loaded?: InputMaybe<Boolean_Comparison_Exp>;
  loaded_at?: InputMaybe<Timestamp_Comparison_Exp>;
  normalized_at?: InputMaybe<Timestamp_Comparison_Exp>;
  original_book_id?: InputMaybe<Int_Comparison_Exp>;
  platform?: InputMaybe<Platforms_Bool_Exp>;
  platform_id?: InputMaybe<Int_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  verified?: InputMaybe<Boolean_Comparison_Exp>;
  verified_at?: InputMaybe<Timestamp_Comparison_Exp>;
}

/** order by max() on columns of table "book_mappings" */
export interface Book_Mappings_Max_Order_By {
  attempts?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  external_data_id?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  loaded_at?: InputMaybe<Order_By>;
  normalized_at?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  verified_at?: InputMaybe<Order_By>;
}

/** order by min() on columns of table "book_mappings" */
export interface Book_Mappings_Min_Order_By {
  attempts?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  external_data_id?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  loaded_at?: InputMaybe<Order_By>;
  normalized_at?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  verified_at?: InputMaybe<Order_By>;
}

/** Ordering options when selecting data from "book_mappings". */
export interface Book_Mappings_Order_By {
  attempts?: InputMaybe<Order_By>;
  book?: InputMaybe<Books_Order_By>;
  book_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  edition?: InputMaybe<Editions_Order_By>;
  edition_id?: InputMaybe<Order_By>;
  external_data_id?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  loaded?: InputMaybe<Order_By>;
  loaded_at?: InputMaybe<Order_By>;
  normalized_at?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  platform?: InputMaybe<Platforms_Order_By>;
  platform_id?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  verified?: InputMaybe<Order_By>;
  verified_at?: InputMaybe<Order_By>;
}

/** select columns of table "book_mappings" */
export enum Book_Mappings_Select_Column {
  /** column name */
  Attempts = 'attempts',
  /** column name */
  BookId = 'book_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EditionId = 'edition_id',
  /** column name */
  ExternalDataId = 'external_data_id',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  Id = 'id',
  /** column name */
  Loaded = 'loaded',
  /** column name */
  LoadedAt = 'loaded_at',
  /** column name */
  NormalizedAt = 'normalized_at',
  /** column name */
  OriginalBookId = 'original_book_id',
  /** column name */
  PlatformId = 'platform_id',
  /** column name */
  State = 'state',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Verified = 'verified',
  /** column name */
  VerifiedAt = 'verified_at',
}

/** order by stddev() on columns of table "book_mappings" */
export interface Book_Mappings_Stddev_Order_By {
  attempts?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  external_data_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
}

/** order by stddev_pop() on columns of table "book_mappings" */
export interface Book_Mappings_Stddev_Pop_Order_By {
  attempts?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  external_data_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
}

/** order by stddev_samp() on columns of table "book_mappings" */
export interface Book_Mappings_Stddev_Samp_Order_By {
  attempts?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  external_data_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "book_mappings" */
export interface Book_Mappings_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Book_Mappings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Book_Mappings_Stream_Cursor_Value_Input {
  attempts?: InputMaybe<Scalars['Int']['input']>;
  book_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  edition_id?: InputMaybe<Scalars['Int']['input']>;
  external_data_id?: InputMaybe<Scalars['Int']['input']>;
  external_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  loaded?: InputMaybe<Scalars['Boolean']['input']>;
  loaded_at?: InputMaybe<Scalars['timestamp']['input']>;
  normalized_at?: InputMaybe<Scalars['timestamp']['input']>;
  original_book_id?: InputMaybe<Scalars['Int']['input']>;
  platform_id?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
  verified_at?: InputMaybe<Scalars['timestamp']['input']>;
}

/** order by sum() on columns of table "book_mappings" */
export interface Book_Mappings_Sum_Order_By {
  attempts?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  external_data_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
}

/** order by var_pop() on columns of table "book_mappings" */
export interface Book_Mappings_Var_Pop_Order_By {
  attempts?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  external_data_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
}

/** order by var_samp() on columns of table "book_mappings" */
export interface Book_Mappings_Var_Samp_Order_By {
  attempts?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  external_data_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
}

/** order by variance() on columns of table "book_mappings" */
export interface Book_Mappings_Variance_Order_By {
  attempts?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  external_data_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
}

/** columns and relationships of "book_series" */
export interface Book_Series {
  __typename?: 'book_series';
  /** An object relationship */
  book?: Maybe<Books>;
  book_id: Scalars['Int']['output'];
  created_at: Scalars['timestamp']['output'];
  details?: Maybe<Scalars['String']['output']>;
  featured: Scalars['Boolean']['output'];
  id: Scalars['bigint']['output'];
  position?: Maybe<Scalars['float8']['output']>;
  /** An object relationship */
  series?: Maybe<Series>;
  series_id: Scalars['Int']['output'];
  updated_at: Scalars['timestamp']['output'];
}

/** aggregated selection of "book_series" */
export interface Book_Series_Aggregate {
  __typename?: 'book_series_aggregate';
  aggregate?: Maybe<Book_Series_Aggregate_Fields>;
  nodes: Array<Book_Series>;
}

export interface Book_Series_Aggregate_Bool_Exp {
  avg?: InputMaybe<Book_Series_Aggregate_Bool_Exp_Avg>;
  bool_and?: InputMaybe<Book_Series_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Book_Series_Aggregate_Bool_Exp_Bool_Or>;
  corr?: InputMaybe<Book_Series_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Book_Series_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Book_Series_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Book_Series_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Book_Series_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Book_Series_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Book_Series_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Book_Series_Aggregate_Bool_Exp_Var_Samp>;
}

export interface Book_Series_Aggregate_Bool_Exp_Avg {
  arguments: Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Book_Series_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
}

export interface Book_Series_Aggregate_Bool_Exp_Bool_And {
  arguments: Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Book_Series_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
}

export interface Book_Series_Aggregate_Bool_Exp_Bool_Or {
  arguments: Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Book_Series_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
}

export interface Book_Series_Aggregate_Bool_Exp_Corr {
  arguments: Book_Series_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Book_Series_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
}

export interface Book_Series_Aggregate_Bool_Exp_Corr_Arguments {
  X: Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Corr_Arguments_Columns;
}

export interface Book_Series_Aggregate_Bool_Exp_Count {
  arguments?: InputMaybe<Array<Book_Series_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Book_Series_Bool_Exp>;
  predicate: Int_Comparison_Exp;
}

export interface Book_Series_Aggregate_Bool_Exp_Covar_Samp {
  arguments: Book_Series_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Book_Series_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
}

export interface Book_Series_Aggregate_Bool_Exp_Covar_Samp_Arguments {
  X: Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
}

export interface Book_Series_Aggregate_Bool_Exp_Max {
  arguments: Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Book_Series_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
}

export interface Book_Series_Aggregate_Bool_Exp_Min {
  arguments: Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Book_Series_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
}

export interface Book_Series_Aggregate_Bool_Exp_Stddev_Samp {
  arguments: Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Book_Series_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
}

export interface Book_Series_Aggregate_Bool_Exp_Sum {
  arguments: Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Book_Series_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
}

export interface Book_Series_Aggregate_Bool_Exp_Var_Samp {
  arguments: Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Book_Series_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
}

/** aggregate fields of "book_series" */
export interface Book_Series_Aggregate_Fields {
  __typename?: 'book_series_aggregate_fields';
  avg?: Maybe<Book_Series_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Book_Series_Max_Fields>;
  min?: Maybe<Book_Series_Min_Fields>;
  stddev?: Maybe<Book_Series_Stddev_Fields>;
  stddev_pop?: Maybe<Book_Series_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Book_Series_Stddev_Samp_Fields>;
  sum?: Maybe<Book_Series_Sum_Fields>;
  var_pop?: Maybe<Book_Series_Var_Pop_Fields>;
  var_samp?: Maybe<Book_Series_Var_Samp_Fields>;
  variance?: Maybe<Book_Series_Variance_Fields>;
}

/** aggregate fields of "book_series" */
export interface Book_Series_Aggregate_FieldsCountArgs {
  columns?: InputMaybe<Array<Book_Series_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
}

/** order by aggregate values of table "book_series" */
export interface Book_Series_Aggregate_Order_By {
  avg?: InputMaybe<Book_Series_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Book_Series_Max_Order_By>;
  min?: InputMaybe<Book_Series_Min_Order_By>;
  stddev?: InputMaybe<Book_Series_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Book_Series_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Book_Series_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Book_Series_Sum_Order_By>;
  var_pop?: InputMaybe<Book_Series_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Book_Series_Var_Samp_Order_By>;
  variance?: InputMaybe<Book_Series_Variance_Order_By>;
}

/** aggregate avg on columns */
export interface Book_Series_Avg_Fields {
  __typename?: 'book_series_avg_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
  series_id?: Maybe<Scalars['Float']['output']>;
}

/** order by avg() on columns of table "book_series" */
export interface Book_Series_Avg_Order_By {
  book_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  series_id?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "book_series". All fields are combined with a logical 'AND'. */
export interface Book_Series_Bool_Exp {
  _and?: InputMaybe<Array<Book_Series_Bool_Exp>>;
  _not?: InputMaybe<Book_Series_Bool_Exp>;
  _or?: InputMaybe<Array<Book_Series_Bool_Exp>>;
  book?: InputMaybe<Books_Bool_Exp>;
  book_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  details?: InputMaybe<String_Comparison_Exp>;
  featured?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  position?: InputMaybe<Float8_Comparison_Exp>;
  series?: InputMaybe<Series_Bool_Exp>;
  series_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
}

/** aggregate max on columns */
export interface Book_Series_Max_Fields {
  __typename?: 'book_series_max_fields';
  book_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  position?: Maybe<Scalars['float8']['output']>;
  series_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
}

/** order by max() on columns of table "book_series" */
export interface Book_Series_Max_Order_By {
  book_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  series_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
}

/** aggregate min on columns */
export interface Book_Series_Min_Fields {
  __typename?: 'book_series_min_fields';
  book_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  position?: Maybe<Scalars['float8']['output']>;
  series_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
}

/** order by min() on columns of table "book_series" */
export interface Book_Series_Min_Order_By {
  book_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  series_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
}

/** Ordering options when selecting data from "book_series". */
export interface Book_Series_Order_By {
  book?: InputMaybe<Books_Order_By>;
  book_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  featured?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  series?: InputMaybe<Series_Order_By>;
  series_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
}

/** select columns of table "book_series" */
export enum Book_Series_Select_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Details = 'details',
  /** column name */
  Featured = 'featured',
  /** column name */
  Id = 'id',
  /** column name */
  Position = 'position',
  /** column name */
  SeriesId = 'series_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** select "book_series_aggregate_bool_exp_avg_arguments_columns" columns of table "book_series" */
export enum Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  Position = 'position',
}

/** select "book_series_aggregate_bool_exp_bool_and_arguments_columns" columns of table "book_series" */
export enum Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Featured = 'featured',
}

/** select "book_series_aggregate_bool_exp_bool_or_arguments_columns" columns of table "book_series" */
export enum Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Featured = 'featured',
}

/** select "book_series_aggregate_bool_exp_corr_arguments_columns" columns of table "book_series" */
export enum Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  Position = 'position',
}

/** select "book_series_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "book_series" */
export enum Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  Position = 'position',
}

/** select "book_series_aggregate_bool_exp_max_arguments_columns" columns of table "book_series" */
export enum Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  Position = 'position',
}

/** select "book_series_aggregate_bool_exp_min_arguments_columns" columns of table "book_series" */
export enum Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  Position = 'position',
}

/** select "book_series_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "book_series" */
export enum Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  Position = 'position',
}

/** select "book_series_aggregate_bool_exp_sum_arguments_columns" columns of table "book_series" */
export enum Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  Position = 'position',
}

/** select "book_series_aggregate_bool_exp_var_samp_arguments_columns" columns of table "book_series" */
export enum Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  Position = 'position',
}

/** aggregate stddev on columns */
export interface Book_Series_Stddev_Fields {
  __typename?: 'book_series_stddev_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
  series_id?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev() on columns of table "book_series" */
export interface Book_Series_Stddev_Order_By {
  book_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  series_id?: InputMaybe<Order_By>;
}

/** aggregate stddev_pop on columns */
export interface Book_Series_Stddev_Pop_Fields {
  __typename?: 'book_series_stddev_pop_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
  series_id?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev_pop() on columns of table "book_series" */
export interface Book_Series_Stddev_Pop_Order_By {
  book_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  series_id?: InputMaybe<Order_By>;
}

/** aggregate stddev_samp on columns */
export interface Book_Series_Stddev_Samp_Fields {
  __typename?: 'book_series_stddev_samp_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
  series_id?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev_samp() on columns of table "book_series" */
export interface Book_Series_Stddev_Samp_Order_By {
  book_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  series_id?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "book_series" */
export interface Book_Series_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Book_Series_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Book_Series_Stream_Cursor_Value_Input {
  book_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  position?: InputMaybe<Scalars['float8']['input']>;
  series_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
}

/** aggregate sum on columns */
export interface Book_Series_Sum_Fields {
  __typename?: 'book_series_sum_fields';
  book_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  position?: Maybe<Scalars['float8']['output']>;
  series_id?: Maybe<Scalars['Int']['output']>;
}

/** order by sum() on columns of table "book_series" */
export interface Book_Series_Sum_Order_By {
  book_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  series_id?: InputMaybe<Order_By>;
}

/** aggregate var_pop on columns */
export interface Book_Series_Var_Pop_Fields {
  __typename?: 'book_series_var_pop_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
  series_id?: Maybe<Scalars['Float']['output']>;
}

/** order by var_pop() on columns of table "book_series" */
export interface Book_Series_Var_Pop_Order_By {
  book_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  series_id?: InputMaybe<Order_By>;
}

/** aggregate var_samp on columns */
export interface Book_Series_Var_Samp_Fields {
  __typename?: 'book_series_var_samp_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
  series_id?: Maybe<Scalars['Float']['output']>;
}

/** order by var_samp() on columns of table "book_series" */
export interface Book_Series_Var_Samp_Order_By {
  book_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  series_id?: InputMaybe<Order_By>;
}

/** aggregate variance on columns */
export interface Book_Series_Variance_Fields {
  __typename?: 'book_series_variance_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
  series_id?: Maybe<Scalars['Float']['output']>;
}

/** order by variance() on columns of table "book_series" */
export interface Book_Series_Variance_Order_By {
  book_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  series_id?: InputMaybe<Order_By>;
}

/** columns and relationships of "book_statuses" */
export interface Book_Statuses {
  __typename?: 'book_statuses';
  /** An array relationship */
  books: Array<Books>;
  /** An aggregate relationship */
  books_aggregate: Books_Aggregate;
  id: Scalars['smallint']['output'];
  name: Scalars['String']['output'];
}

/** columns and relationships of "book_statuses" */
export interface Book_StatusesBooksArgs {
  distinct_on?: InputMaybe<Array<Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Books_Order_By>>;
  where?: InputMaybe<Books_Bool_Exp>;
}

/** columns and relationships of "book_statuses" */
export interface Book_StatusesBooks_AggregateArgs {
  distinct_on?: InputMaybe<Array<Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Books_Order_By>>;
  where?: InputMaybe<Books_Bool_Exp>;
}

/** Boolean expression to filter rows from the table "book_statuses". All fields are combined with a logical 'AND'. */
export interface Book_Statuses_Bool_Exp {
  _and?: InputMaybe<Array<Book_Statuses_Bool_Exp>>;
  _not?: InputMaybe<Book_Statuses_Bool_Exp>;
  _or?: InputMaybe<Array<Book_Statuses_Bool_Exp>>;
  books?: InputMaybe<Books_Bool_Exp>;
  books_aggregate?: InputMaybe<Books_Aggregate_Bool_Exp>;
  id?: InputMaybe<Smallint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
}

/** Ordering options when selecting data from "book_statuses". */
export interface Book_Statuses_Order_By {
  books_aggregate?: InputMaybe<Books_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
}

/** select columns of table "book_statuses" */
export enum Book_Statuses_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** Streaming cursor of the table "book_statuses" */
export interface Book_Statuses_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Book_Statuses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Book_Statuses_Stream_Cursor_Value_Input {
  id?: InputMaybe<Scalars['smallint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "bookles" */
export interface Bookles {
  __typename?: 'bookles';
  /** An object relationship */
  book?: Maybe<Books>;
  book_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  id: Scalars['bigint']['output'];
}

/** Boolean expression to filter rows from the table "bookles". All fields are combined with a logical 'AND'. */
export interface Bookles_Bool_Exp {
  _and?: InputMaybe<Array<Bookles_Bool_Exp>>;
  _not?: InputMaybe<Bookles_Bool_Exp>;
  _or?: InputMaybe<Array<Bookles_Bool_Exp>>;
  book?: InputMaybe<Books_Bool_Exp>;
  book_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
}

/** Ordering options when selecting data from "bookles". */
export interface Bookles_Order_By {
  book?: InputMaybe<Books_Order_By>;
  book_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
}

/** select columns of table "bookles" */
export enum Bookles_Select_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
}

/** Streaming cursor of the table "bookles" */
export interface Bookles_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Bookles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Bookles_Stream_Cursor_Value_Input {
  book_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
}

/** columns and relationships of "books" */
export interface Books {
  __typename?: 'books';
  activities_count: Scalars['Int']['output'];
  alternative_titles: Scalars['json']['output'];
  audio_seconds?: Maybe<Scalars['Int']['output']>;
  book_category_id: Scalars['Int']['output'];
  /** An array relationship */
  book_characters: Array<Book_Characters>;
  /** An array relationship */
  book_mappings: Array<Book_Mappings>;
  /** An array relationship */
  book_series: Array<Book_Series>;
  /** An aggregate relationship */
  book_series_aggregate: Book_Series_Aggregate;
  /** An object relationship */
  book_status: Book_Statuses;
  book_status_id: Scalars['smallint']['output'];
  cached_contributors: Scalars['json']['output'];
  cached_featured_series?: Maybe<Scalars['jsonb']['output']>;
  cached_header_image: Scalars['jsonb']['output'];
  cached_image: Scalars['jsonb']['output'];
  cached_tags: Scalars['json']['output'];
  /** An object relationship */
  canonical?: Maybe<Books>;
  canonical_id?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  collection_import_results: Array<Collection_Import_Results>;
  compilation: Scalars['Boolean']['output'];
  /** An array relationship */
  contributions: Array<Contributions>;
  /** An aggregate relationship */
  contributions_aggregate: Contributions_Aggregate;
  created_at: Scalars['timestamp']['output'];
  created_by_user_id?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  default_audio_edition?: Maybe<Editions>;
  default_audio_edition_id?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  default_cover_edition?: Maybe<Editions>;
  default_cover_edition_id?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  default_ebook_edition?: Maybe<Editions>;
  default_ebook_edition_id?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  default_physical_edition?: Maybe<Editions>;
  default_physical_edition_id?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  editions: Array<Editions>;
  editions_count: Scalars['Int']['output'];
  /** An object relationship */
  featured_book_series?: Maybe<Book_Series>;
  featured_book_series_id?: Maybe<Scalars['Int']['output']>;
  header_image_id?: Maybe<Scalars['Int']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  /** An object relationship */
  image?: Maybe<Images>;
  image_id?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  images: Array<Images>;
  import_platform_id: Scalars['Int']['output'];
  journals_count: Scalars['Int']['output'];
  links: Scalars['jsonb']['output'];
  /** An array relationship */
  list_books: Array<List_Books>;
  /** An aggregate relationship */
  list_books_aggregate: List_Books_Aggregate;
  lists_count?: Maybe<Scalars['Int']['output']>;
  literary_type_id?: Maybe<Scalars['Int']['output']>;
  locked: Scalars['Boolean']['output'];
  pages?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  prompt_answers: Array<Prompt_Answers>;
  /** An aggregate relationship */
  prompt_answers_aggregate: Prompt_Answers_Aggregate;
  /** An array relationship */
  prompt_summaries: Array<Prompt_Books_Summary>;
  prompts_count: Scalars['Int']['output'];
  rating?: Maybe<Scalars['numeric']['output']>;
  ratings_count: Scalars['Int']['output'];
  ratings_distribution: Scalars['jsonb']['output'];
  /** An array relationship */
  recommendations: Array<Recommendations>;
  release_date?: Maybe<Scalars['date']['output']>;
  release_year?: Maybe<Scalars['Int']['output']>;
  reviews_count: Scalars['Int']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  taggable_counts: Array<Taggable_Counts>;
  /** An array relationship */
  taggings: Array<Taggings>;
  /** An aggregate relationship */
  taggings_aggregate: Taggings_Aggregate;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_added: Scalars['Boolean']['output'];
  /** An array relationship */
  user_books: Array<User_Books>;
  /** An aggregate relationship */
  user_books_aggregate: User_Books_Aggregate;
  users_count: Scalars['Int']['output'];
  users_read_count: Scalars['Int']['output'];
}

/** columns and relationships of "books" */
export interface BooksAlternative_TitlesArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "books" */
export interface BooksBook_CharactersArgs {
  distinct_on?: InputMaybe<Array<Book_Characters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Characters_Order_By>>;
  where?: InputMaybe<Book_Characters_Bool_Exp>;
}

/** columns and relationships of "books" */
export interface BooksBook_MappingsArgs {
  distinct_on?: InputMaybe<Array<Book_Mappings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Mappings_Order_By>>;
  where?: InputMaybe<Book_Mappings_Bool_Exp>;
}

/** columns and relationships of "books" */
export interface BooksBook_SeriesArgs {
  distinct_on?: InputMaybe<Array<Book_Series_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Series_Order_By>>;
  where?: InputMaybe<Book_Series_Bool_Exp>;
}

/** columns and relationships of "books" */
export interface BooksBook_Series_AggregateArgs {
  distinct_on?: InputMaybe<Array<Book_Series_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Series_Order_By>>;
  where?: InputMaybe<Book_Series_Bool_Exp>;
}

/** columns and relationships of "books" */
export interface BooksCached_ContributorsArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "books" */
export interface BooksCached_Featured_SeriesArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "books" */
export interface BooksCached_Header_ImageArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "books" */
export interface BooksCached_ImageArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "books" */
export interface BooksCached_TagsArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "books" */
export interface BooksCollection_Import_ResultsArgs {
  distinct_on?: InputMaybe<Array<Collection_Import_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Collection_Import_Results_Order_By>>;
  where?: InputMaybe<Collection_Import_Results_Bool_Exp>;
}

/** columns and relationships of "books" */
export interface BooksContributionsArgs {
  distinct_on?: InputMaybe<Array<Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contributions_Order_By>>;
  where?: InputMaybe<Contributions_Bool_Exp>;
}

/** columns and relationships of "books" */
export interface BooksContributions_AggregateArgs {
  distinct_on?: InputMaybe<Array<Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contributions_Order_By>>;
  where?: InputMaybe<Contributions_Bool_Exp>;
}

/** columns and relationships of "books" */
export interface BooksEditionsArgs {
  distinct_on?: InputMaybe<Array<Editions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Editions_Order_By>>;
  where?: InputMaybe<Editions_Bool_Exp>;
}

/** columns and relationships of "books" */
export interface BooksImagesArgs {
  distinct_on?: InputMaybe<Array<Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Images_Order_By>>;
  where?: InputMaybe<Images_Bool_Exp>;
}

/** columns and relationships of "books" */
export interface BooksLinksArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "books" */
export interface BooksList_BooksArgs {
  distinct_on?: InputMaybe<Array<List_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<List_Books_Order_By>>;
  where?: InputMaybe<List_Books_Bool_Exp>;
}

/** columns and relationships of "books" */
export interface BooksList_Books_AggregateArgs {
  distinct_on?: InputMaybe<Array<List_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<List_Books_Order_By>>;
  where?: InputMaybe<List_Books_Bool_Exp>;
}

/** columns and relationships of "books" */
export interface BooksPrompt_AnswersArgs {
  distinct_on?: InputMaybe<Array<Prompt_Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prompt_Answers_Order_By>>;
  where?: InputMaybe<Prompt_Answers_Bool_Exp>;
}

/** columns and relationships of "books" */
export interface BooksPrompt_Answers_AggregateArgs {
  distinct_on?: InputMaybe<Array<Prompt_Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prompt_Answers_Order_By>>;
  where?: InputMaybe<Prompt_Answers_Bool_Exp>;
}

/** columns and relationships of "books" */
export interface BooksPrompt_SummariesArgs {
  distinct_on?: InputMaybe<Array<Prompt_Books_Summary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prompt_Books_Summary_Order_By>>;
  where?: InputMaybe<Prompt_Books_Summary_Bool_Exp>;
}

/** columns and relationships of "books" */
export interface BooksRatings_DistributionArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "books" */
export interface BooksRecommendationsArgs {
  distinct_on?: InputMaybe<Array<Recommendations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recommendations_Order_By>>;
  where?: InputMaybe<Recommendations_Bool_Exp>;
}

/** columns and relationships of "books" */
export interface BooksTaggable_CountsArgs {
  distinct_on?: InputMaybe<Array<Taggable_Counts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Taggable_Counts_Order_By>>;
  where?: InputMaybe<Taggable_Counts_Bool_Exp>;
}

/** columns and relationships of "books" */
export interface BooksTaggingsArgs {
  distinct_on?: InputMaybe<Array<Taggings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Taggings_Order_By>>;
  where?: InputMaybe<Taggings_Bool_Exp>;
}

/** columns and relationships of "books" */
export interface BooksTaggings_AggregateArgs {
  distinct_on?: InputMaybe<Array<Taggings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Taggings_Order_By>>;
  where?: InputMaybe<Taggings_Bool_Exp>;
}

/** columns and relationships of "books" */
export interface BooksUser_BooksArgs {
  distinct_on?: InputMaybe<Array<User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Books_Order_By>>;
  where?: InputMaybe<User_Books_Bool_Exp>;
}

/** columns and relationships of "books" */
export interface BooksUser_Books_AggregateArgs {
  distinct_on?: InputMaybe<Array<User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Books_Order_By>>;
  where?: InputMaybe<User_Books_Bool_Exp>;
}

/** aggregated selection of "books" */
export interface Books_Aggregate {
  __typename?: 'books_aggregate';
  aggregate?: Maybe<Books_Aggregate_Fields>;
  nodes: Array<Books>;
}

export interface Books_Aggregate_Bool_Exp {
  bool_and?: InputMaybe<Books_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Books_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Books_Aggregate_Bool_Exp_Count>;
}

export interface Books_Aggregate_Bool_Exp_Bool_And {
  arguments: Books_Select_Column_Books_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Books_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
}

export interface Books_Aggregate_Bool_Exp_Bool_Or {
  arguments: Books_Select_Column_Books_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Books_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
}

export interface Books_Aggregate_Bool_Exp_Count {
  arguments?: InputMaybe<Array<Books_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Books_Bool_Exp>;
  predicate: Int_Comparison_Exp;
}

/** aggregate fields of "books" */
export interface Books_Aggregate_Fields {
  __typename?: 'books_aggregate_fields';
  avg?: Maybe<Books_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Books_Max_Fields>;
  min?: Maybe<Books_Min_Fields>;
  stddev?: Maybe<Books_Stddev_Fields>;
  stddev_pop?: Maybe<Books_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Books_Stddev_Samp_Fields>;
  sum?: Maybe<Books_Sum_Fields>;
  var_pop?: Maybe<Books_Var_Pop_Fields>;
  var_samp?: Maybe<Books_Var_Samp_Fields>;
  variance?: Maybe<Books_Variance_Fields>;
}

/** aggregate fields of "books" */
export interface Books_Aggregate_FieldsCountArgs {
  columns?: InputMaybe<Array<Books_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
}

/** order by aggregate values of table "books" */
export interface Books_Aggregate_Order_By {
  avg?: InputMaybe<Books_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Books_Max_Order_By>;
  min?: InputMaybe<Books_Min_Order_By>;
  stddev?: InputMaybe<Books_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Books_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Books_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Books_Sum_Order_By>;
  var_pop?: InputMaybe<Books_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Books_Var_Samp_Order_By>;
  variance?: InputMaybe<Books_Variance_Order_By>;
}

/** aggregate avg on columns */
export interface Books_Avg_Fields {
  __typename?: 'books_avg_fields';
  activities_count?: Maybe<Scalars['Float']['output']>;
  audio_seconds?: Maybe<Scalars['Float']['output']>;
  book_category_id?: Maybe<Scalars['Float']['output']>;
  book_status_id?: Maybe<Scalars['Float']['output']>;
  canonical_id?: Maybe<Scalars['Float']['output']>;
  created_by_user_id?: Maybe<Scalars['Float']['output']>;
  default_audio_edition_id?: Maybe<Scalars['Float']['output']>;
  default_cover_edition_id?: Maybe<Scalars['Float']['output']>;
  default_ebook_edition_id?: Maybe<Scalars['Float']['output']>;
  default_physical_edition_id?: Maybe<Scalars['Float']['output']>;
  editions_count?: Maybe<Scalars['Float']['output']>;
  featured_book_series_id?: Maybe<Scalars['Float']['output']>;
  header_image_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  image_id?: Maybe<Scalars['Float']['output']>;
  import_platform_id?: Maybe<Scalars['Float']['output']>;
  journals_count?: Maybe<Scalars['Float']['output']>;
  lists_count?: Maybe<Scalars['Float']['output']>;
  literary_type_id?: Maybe<Scalars['Float']['output']>;
  pages?: Maybe<Scalars['Float']['output']>;
  prompts_count?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  ratings_count?: Maybe<Scalars['Float']['output']>;
  release_year?: Maybe<Scalars['Float']['output']>;
  reviews_count?: Maybe<Scalars['Float']['output']>;
  users_count?: Maybe<Scalars['Float']['output']>;
  users_read_count?: Maybe<Scalars['Float']['output']>;
}

/** order by avg() on columns of table "books" */
export interface Books_Avg_Order_By {
  activities_count?: InputMaybe<Order_By>;
  audio_seconds?: InputMaybe<Order_By>;
  book_category_id?: InputMaybe<Order_By>;
  book_status_id?: InputMaybe<Order_By>;
  canonical_id?: InputMaybe<Order_By>;
  created_by_user_id?: InputMaybe<Order_By>;
  default_audio_edition_id?: InputMaybe<Order_By>;
  default_cover_edition_id?: InputMaybe<Order_By>;
  default_ebook_edition_id?: InputMaybe<Order_By>;
  default_physical_edition_id?: InputMaybe<Order_By>;
  editions_count?: InputMaybe<Order_By>;
  featured_book_series_id?: InputMaybe<Order_By>;
  header_image_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  import_platform_id?: InputMaybe<Order_By>;
  journals_count?: InputMaybe<Order_By>;
  lists_count?: InputMaybe<Order_By>;
  literary_type_id?: InputMaybe<Order_By>;
  pages?: InputMaybe<Order_By>;
  prompts_count?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  ratings_count?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
  reviews_count?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
  users_read_count?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "books". All fields are combined with a logical 'AND'. */
export interface Books_Bool_Exp {
  _and?: InputMaybe<Array<Books_Bool_Exp>>;
  _not?: InputMaybe<Books_Bool_Exp>;
  _or?: InputMaybe<Array<Books_Bool_Exp>>;
  activities_count?: InputMaybe<Int_Comparison_Exp>;
  alternative_titles?: InputMaybe<Json_Comparison_Exp>;
  audio_seconds?: InputMaybe<Int_Comparison_Exp>;
  book_category_id?: InputMaybe<Int_Comparison_Exp>;
  book_characters?: InputMaybe<Book_Characters_Bool_Exp>;
  book_mappings?: InputMaybe<Book_Mappings_Bool_Exp>;
  book_series?: InputMaybe<Book_Series_Bool_Exp>;
  book_series_aggregate?: InputMaybe<Book_Series_Aggregate_Bool_Exp>;
  book_status?: InputMaybe<Book_Statuses_Bool_Exp>;
  book_status_id?: InputMaybe<Smallint_Comparison_Exp>;
  cached_contributors?: InputMaybe<Json_Comparison_Exp>;
  cached_featured_series?: InputMaybe<Jsonb_Comparison_Exp>;
  cached_header_image?: InputMaybe<Jsonb_Comparison_Exp>;
  cached_image?: InputMaybe<Jsonb_Comparison_Exp>;
  cached_tags?: InputMaybe<Json_Comparison_Exp>;
  canonical?: InputMaybe<Books_Bool_Exp>;
  canonical_id?: InputMaybe<Int_Comparison_Exp>;
  collection_import_results?: InputMaybe<Collection_Import_Results_Bool_Exp>;
  compilation?: InputMaybe<Boolean_Comparison_Exp>;
  contributions?: InputMaybe<Contributions_Bool_Exp>;
  contributions_aggregate?: InputMaybe<Contributions_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  created_by_user_id?: InputMaybe<Int_Comparison_Exp>;
  default_audio_edition?: InputMaybe<Editions_Bool_Exp>;
  default_audio_edition_id?: InputMaybe<Int_Comparison_Exp>;
  default_cover_edition?: InputMaybe<Editions_Bool_Exp>;
  default_cover_edition_id?: InputMaybe<Int_Comparison_Exp>;
  default_ebook_edition?: InputMaybe<Editions_Bool_Exp>;
  default_ebook_edition_id?: InputMaybe<Int_Comparison_Exp>;
  default_physical_edition?: InputMaybe<Editions_Bool_Exp>;
  default_physical_edition_id?: InputMaybe<Int_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  editions?: InputMaybe<Editions_Bool_Exp>;
  editions_count?: InputMaybe<Int_Comparison_Exp>;
  featured_book_series?: InputMaybe<Book_Series_Bool_Exp>;
  featured_book_series_id?: InputMaybe<Int_Comparison_Exp>;
  header_image_id?: InputMaybe<Int_Comparison_Exp>;
  headline?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<Images_Bool_Exp>;
  image_id?: InputMaybe<Int_Comparison_Exp>;
  images?: InputMaybe<Images_Bool_Exp>;
  import_platform_id?: InputMaybe<Int_Comparison_Exp>;
  journals_count?: InputMaybe<Int_Comparison_Exp>;
  links?: InputMaybe<Jsonb_Comparison_Exp>;
  list_books?: InputMaybe<List_Books_Bool_Exp>;
  list_books_aggregate?: InputMaybe<List_Books_Aggregate_Bool_Exp>;
  lists_count?: InputMaybe<Int_Comparison_Exp>;
  literary_type_id?: InputMaybe<Int_Comparison_Exp>;
  locked?: InputMaybe<Boolean_Comparison_Exp>;
  pages?: InputMaybe<Int_Comparison_Exp>;
  prompt_answers?: InputMaybe<Prompt_Answers_Bool_Exp>;
  prompt_answers_aggregate?: InputMaybe<Prompt_Answers_Aggregate_Bool_Exp>;
  prompt_summaries?: InputMaybe<Prompt_Books_Summary_Bool_Exp>;
  prompts_count?: InputMaybe<Int_Comparison_Exp>;
  rating?: InputMaybe<Numeric_Comparison_Exp>;
  ratings_count?: InputMaybe<Int_Comparison_Exp>;
  ratings_distribution?: InputMaybe<Jsonb_Comparison_Exp>;
  recommendations?: InputMaybe<Recommendations_Bool_Exp>;
  release_date?: InputMaybe<Date_Comparison_Exp>;
  release_year?: InputMaybe<Int_Comparison_Exp>;
  reviews_count?: InputMaybe<Int_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  subtitle?: InputMaybe<String_Comparison_Exp>;
  taggable_counts?: InputMaybe<Taggable_Counts_Bool_Exp>;
  taggings?: InputMaybe<Taggings_Bool_Exp>;
  taggings_aggregate?: InputMaybe<Taggings_Aggregate_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_added?: InputMaybe<Boolean_Comparison_Exp>;
  user_books?: InputMaybe<User_Books_Bool_Exp>;
  user_books_aggregate?: InputMaybe<User_Books_Aggregate_Bool_Exp>;
  users_count?: InputMaybe<Int_Comparison_Exp>;
  users_read_count?: InputMaybe<Int_Comparison_Exp>;
}

/** aggregate max on columns */
export interface Books_Max_Fields {
  __typename?: 'books_max_fields';
  activities_count?: Maybe<Scalars['Int']['output']>;
  audio_seconds?: Maybe<Scalars['Int']['output']>;
  book_category_id?: Maybe<Scalars['Int']['output']>;
  book_status_id?: Maybe<Scalars['smallint']['output']>;
  canonical_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  created_by_user_id?: Maybe<Scalars['Int']['output']>;
  default_audio_edition_id?: Maybe<Scalars['Int']['output']>;
  default_cover_edition_id?: Maybe<Scalars['Int']['output']>;
  default_ebook_edition_id?: Maybe<Scalars['Int']['output']>;
  default_physical_edition_id?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  editions_count?: Maybe<Scalars['Int']['output']>;
  featured_book_series_id?: Maybe<Scalars['Int']['output']>;
  header_image_id?: Maybe<Scalars['Int']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image_id?: Maybe<Scalars['Int']['output']>;
  import_platform_id?: Maybe<Scalars['Int']['output']>;
  journals_count?: Maybe<Scalars['Int']['output']>;
  lists_count?: Maybe<Scalars['Int']['output']>;
  literary_type_id?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  prompts_count?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['numeric']['output']>;
  ratings_count?: Maybe<Scalars['Int']['output']>;
  release_date?: Maybe<Scalars['date']['output']>;
  release_year?: Maybe<Scalars['Int']['output']>;
  reviews_count?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  users_count?: Maybe<Scalars['Int']['output']>;
  users_read_count?: Maybe<Scalars['Int']['output']>;
}

/** order by max() on columns of table "books" */
export interface Books_Max_Order_By {
  activities_count?: InputMaybe<Order_By>;
  audio_seconds?: InputMaybe<Order_By>;
  book_category_id?: InputMaybe<Order_By>;
  book_status_id?: InputMaybe<Order_By>;
  canonical_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by_user_id?: InputMaybe<Order_By>;
  default_audio_edition_id?: InputMaybe<Order_By>;
  default_cover_edition_id?: InputMaybe<Order_By>;
  default_ebook_edition_id?: InputMaybe<Order_By>;
  default_physical_edition_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  editions_count?: InputMaybe<Order_By>;
  featured_book_series_id?: InputMaybe<Order_By>;
  header_image_id?: InputMaybe<Order_By>;
  headline?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  import_platform_id?: InputMaybe<Order_By>;
  journals_count?: InputMaybe<Order_By>;
  lists_count?: InputMaybe<Order_By>;
  literary_type_id?: InputMaybe<Order_By>;
  pages?: InputMaybe<Order_By>;
  prompts_count?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  ratings_count?: InputMaybe<Order_By>;
  release_date?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
  reviews_count?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  subtitle?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
  users_read_count?: InputMaybe<Order_By>;
}

/** aggregate min on columns */
export interface Books_Min_Fields {
  __typename?: 'books_min_fields';
  activities_count?: Maybe<Scalars['Int']['output']>;
  audio_seconds?: Maybe<Scalars['Int']['output']>;
  book_category_id?: Maybe<Scalars['Int']['output']>;
  book_status_id?: Maybe<Scalars['smallint']['output']>;
  canonical_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  created_by_user_id?: Maybe<Scalars['Int']['output']>;
  default_audio_edition_id?: Maybe<Scalars['Int']['output']>;
  default_cover_edition_id?: Maybe<Scalars['Int']['output']>;
  default_ebook_edition_id?: Maybe<Scalars['Int']['output']>;
  default_physical_edition_id?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  editions_count?: Maybe<Scalars['Int']['output']>;
  featured_book_series_id?: Maybe<Scalars['Int']['output']>;
  header_image_id?: Maybe<Scalars['Int']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image_id?: Maybe<Scalars['Int']['output']>;
  import_platform_id?: Maybe<Scalars['Int']['output']>;
  journals_count?: Maybe<Scalars['Int']['output']>;
  lists_count?: Maybe<Scalars['Int']['output']>;
  literary_type_id?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  prompts_count?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['numeric']['output']>;
  ratings_count?: Maybe<Scalars['Int']['output']>;
  release_date?: Maybe<Scalars['date']['output']>;
  release_year?: Maybe<Scalars['Int']['output']>;
  reviews_count?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  users_count?: Maybe<Scalars['Int']['output']>;
  users_read_count?: Maybe<Scalars['Int']['output']>;
}

/** order by min() on columns of table "books" */
export interface Books_Min_Order_By {
  activities_count?: InputMaybe<Order_By>;
  audio_seconds?: InputMaybe<Order_By>;
  book_category_id?: InputMaybe<Order_By>;
  book_status_id?: InputMaybe<Order_By>;
  canonical_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by_user_id?: InputMaybe<Order_By>;
  default_audio_edition_id?: InputMaybe<Order_By>;
  default_cover_edition_id?: InputMaybe<Order_By>;
  default_ebook_edition_id?: InputMaybe<Order_By>;
  default_physical_edition_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  editions_count?: InputMaybe<Order_By>;
  featured_book_series_id?: InputMaybe<Order_By>;
  header_image_id?: InputMaybe<Order_By>;
  headline?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  import_platform_id?: InputMaybe<Order_By>;
  journals_count?: InputMaybe<Order_By>;
  lists_count?: InputMaybe<Order_By>;
  literary_type_id?: InputMaybe<Order_By>;
  pages?: InputMaybe<Order_By>;
  prompts_count?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  ratings_count?: InputMaybe<Order_By>;
  release_date?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
  reviews_count?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  subtitle?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
  users_read_count?: InputMaybe<Order_By>;
}

/** Ordering options when selecting data from "books". */
export interface Books_Order_By {
  activities_count?: InputMaybe<Order_By>;
  alternative_titles?: InputMaybe<Order_By>;
  audio_seconds?: InputMaybe<Order_By>;
  book_category_id?: InputMaybe<Order_By>;
  book_characters_aggregate?: InputMaybe<Book_Characters_Aggregate_Order_By>;
  book_mappings_aggregate?: InputMaybe<Book_Mappings_Aggregate_Order_By>;
  book_series_aggregate?: InputMaybe<Book_Series_Aggregate_Order_By>;
  book_status?: InputMaybe<Book_Statuses_Order_By>;
  book_status_id?: InputMaybe<Order_By>;
  cached_contributors?: InputMaybe<Order_By>;
  cached_featured_series?: InputMaybe<Order_By>;
  cached_header_image?: InputMaybe<Order_By>;
  cached_image?: InputMaybe<Order_By>;
  cached_tags?: InputMaybe<Order_By>;
  canonical?: InputMaybe<Books_Order_By>;
  canonical_id?: InputMaybe<Order_By>;
  collection_import_results_aggregate?: InputMaybe<Collection_Import_Results_Aggregate_Order_By>;
  compilation?: InputMaybe<Order_By>;
  contributions_aggregate?: InputMaybe<Contributions_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by_user_id?: InputMaybe<Order_By>;
  default_audio_edition?: InputMaybe<Editions_Order_By>;
  default_audio_edition_id?: InputMaybe<Order_By>;
  default_cover_edition?: InputMaybe<Editions_Order_By>;
  default_cover_edition_id?: InputMaybe<Order_By>;
  default_ebook_edition?: InputMaybe<Editions_Order_By>;
  default_ebook_edition_id?: InputMaybe<Order_By>;
  default_physical_edition?: InputMaybe<Editions_Order_By>;
  default_physical_edition_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  editions_aggregate?: InputMaybe<Editions_Aggregate_Order_By>;
  editions_count?: InputMaybe<Order_By>;
  featured_book_series?: InputMaybe<Book_Series_Order_By>;
  featured_book_series_id?: InputMaybe<Order_By>;
  header_image_id?: InputMaybe<Order_By>;
  headline?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Images_Order_By>;
  image_id?: InputMaybe<Order_By>;
  images_aggregate?: InputMaybe<Images_Aggregate_Order_By>;
  import_platform_id?: InputMaybe<Order_By>;
  journals_count?: InputMaybe<Order_By>;
  links?: InputMaybe<Order_By>;
  list_books_aggregate?: InputMaybe<List_Books_Aggregate_Order_By>;
  lists_count?: InputMaybe<Order_By>;
  literary_type_id?: InputMaybe<Order_By>;
  locked?: InputMaybe<Order_By>;
  pages?: InputMaybe<Order_By>;
  prompt_answers_aggregate?: InputMaybe<Prompt_Answers_Aggregate_Order_By>;
  prompt_summaries_aggregate?: InputMaybe<Prompt_Books_Summary_Aggregate_Order_By>;
  prompts_count?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  ratings_count?: InputMaybe<Order_By>;
  ratings_distribution?: InputMaybe<Order_By>;
  recommendations_aggregate?: InputMaybe<Recommendations_Aggregate_Order_By>;
  release_date?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
  reviews_count?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  subtitle?: InputMaybe<Order_By>;
  taggable_counts_aggregate?: InputMaybe<Taggable_Counts_Aggregate_Order_By>;
  taggings_aggregate?: InputMaybe<Taggings_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_added?: InputMaybe<Order_By>;
  user_books_aggregate?: InputMaybe<User_Books_Aggregate_Order_By>;
  users_count?: InputMaybe<Order_By>;
  users_read_count?: InputMaybe<Order_By>;
}

/** select columns of table "books" */
export enum Books_Select_Column {
  /** column name */
  ActivitiesCount = 'activities_count',
  /** column name */
  AlternativeTitles = 'alternative_titles',
  /** column name */
  AudioSeconds = 'audio_seconds',
  /** column name */
  BookCategoryId = 'book_category_id',
  /** column name */
  BookStatusId = 'book_status_id',
  /** column name */
  CachedContributors = 'cached_contributors',
  /** column name */
  CachedFeaturedSeries = 'cached_featured_series',
  /** column name */
  CachedHeaderImage = 'cached_header_image',
  /** column name */
  CachedImage = 'cached_image',
  /** column name */
  CachedTags = 'cached_tags',
  /** column name */
  CanonicalId = 'canonical_id',
  /** column name */
  Compilation = 'compilation',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  DefaultAudioEditionId = 'default_audio_edition_id',
  /** column name */
  DefaultCoverEditionId = 'default_cover_edition_id',
  /** column name */
  DefaultEbookEditionId = 'default_ebook_edition_id',
  /** column name */
  DefaultPhysicalEditionId = 'default_physical_edition_id',
  /** column name */
  Description = 'description',
  /** column name */
  EditionsCount = 'editions_count',
  /** column name */
  FeaturedBookSeriesId = 'featured_book_series_id',
  /** column name */
  HeaderImageId = 'header_image_id',
  /** column name */
  Headline = 'headline',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  ImportPlatformId = 'import_platform_id',
  /** column name */
  JournalsCount = 'journals_count',
  /** column name */
  Links = 'links',
  /** column name */
  ListsCount = 'lists_count',
  /** column name */
  LiteraryTypeId = 'literary_type_id',
  /** column name */
  Locked = 'locked',
  /** column name */
  Pages = 'pages',
  /** column name */
  PromptsCount = 'prompts_count',
  /** column name */
  Rating = 'rating',
  /** column name */
  RatingsCount = 'ratings_count',
  /** column name */
  RatingsDistribution = 'ratings_distribution',
  /** column name */
  ReleaseDate = 'release_date',
  /** column name */
  ReleaseYear = 'release_year',
  /** column name */
  ReviewsCount = 'reviews_count',
  /** column name */
  Slug = 'slug',
  /** column name */
  State = 'state',
  /** column name */
  Subtitle = 'subtitle',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserAdded = 'user_added',
  /** column name */
  UsersCount = 'users_count',
  /** column name */
  UsersReadCount = 'users_read_count',
}

/** select "books_aggregate_bool_exp_bool_and_arguments_columns" columns of table "books" */
export enum Books_Select_Column_Books_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Compilation = 'compilation',
  /** column name */
  Locked = 'locked',
  /** column name */
  UserAdded = 'user_added',
}

/** select "books_aggregate_bool_exp_bool_or_arguments_columns" columns of table "books" */
export enum Books_Select_Column_Books_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Compilation = 'compilation',
  /** column name */
  Locked = 'locked',
  /** column name */
  UserAdded = 'user_added',
}

/** aggregate stddev on columns */
export interface Books_Stddev_Fields {
  __typename?: 'books_stddev_fields';
  activities_count?: Maybe<Scalars['Float']['output']>;
  audio_seconds?: Maybe<Scalars['Float']['output']>;
  book_category_id?: Maybe<Scalars['Float']['output']>;
  book_status_id?: Maybe<Scalars['Float']['output']>;
  canonical_id?: Maybe<Scalars['Float']['output']>;
  created_by_user_id?: Maybe<Scalars['Float']['output']>;
  default_audio_edition_id?: Maybe<Scalars['Float']['output']>;
  default_cover_edition_id?: Maybe<Scalars['Float']['output']>;
  default_ebook_edition_id?: Maybe<Scalars['Float']['output']>;
  default_physical_edition_id?: Maybe<Scalars['Float']['output']>;
  editions_count?: Maybe<Scalars['Float']['output']>;
  featured_book_series_id?: Maybe<Scalars['Float']['output']>;
  header_image_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  image_id?: Maybe<Scalars['Float']['output']>;
  import_platform_id?: Maybe<Scalars['Float']['output']>;
  journals_count?: Maybe<Scalars['Float']['output']>;
  lists_count?: Maybe<Scalars['Float']['output']>;
  literary_type_id?: Maybe<Scalars['Float']['output']>;
  pages?: Maybe<Scalars['Float']['output']>;
  prompts_count?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  ratings_count?: Maybe<Scalars['Float']['output']>;
  release_year?: Maybe<Scalars['Float']['output']>;
  reviews_count?: Maybe<Scalars['Float']['output']>;
  users_count?: Maybe<Scalars['Float']['output']>;
  users_read_count?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev() on columns of table "books" */
export interface Books_Stddev_Order_By {
  activities_count?: InputMaybe<Order_By>;
  audio_seconds?: InputMaybe<Order_By>;
  book_category_id?: InputMaybe<Order_By>;
  book_status_id?: InputMaybe<Order_By>;
  canonical_id?: InputMaybe<Order_By>;
  created_by_user_id?: InputMaybe<Order_By>;
  default_audio_edition_id?: InputMaybe<Order_By>;
  default_cover_edition_id?: InputMaybe<Order_By>;
  default_ebook_edition_id?: InputMaybe<Order_By>;
  default_physical_edition_id?: InputMaybe<Order_By>;
  editions_count?: InputMaybe<Order_By>;
  featured_book_series_id?: InputMaybe<Order_By>;
  header_image_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  import_platform_id?: InputMaybe<Order_By>;
  journals_count?: InputMaybe<Order_By>;
  lists_count?: InputMaybe<Order_By>;
  literary_type_id?: InputMaybe<Order_By>;
  pages?: InputMaybe<Order_By>;
  prompts_count?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  ratings_count?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
  reviews_count?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
  users_read_count?: InputMaybe<Order_By>;
}

/** aggregate stddev_pop on columns */
export interface Books_Stddev_Pop_Fields {
  __typename?: 'books_stddev_pop_fields';
  activities_count?: Maybe<Scalars['Float']['output']>;
  audio_seconds?: Maybe<Scalars['Float']['output']>;
  book_category_id?: Maybe<Scalars['Float']['output']>;
  book_status_id?: Maybe<Scalars['Float']['output']>;
  canonical_id?: Maybe<Scalars['Float']['output']>;
  created_by_user_id?: Maybe<Scalars['Float']['output']>;
  default_audio_edition_id?: Maybe<Scalars['Float']['output']>;
  default_cover_edition_id?: Maybe<Scalars['Float']['output']>;
  default_ebook_edition_id?: Maybe<Scalars['Float']['output']>;
  default_physical_edition_id?: Maybe<Scalars['Float']['output']>;
  editions_count?: Maybe<Scalars['Float']['output']>;
  featured_book_series_id?: Maybe<Scalars['Float']['output']>;
  header_image_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  image_id?: Maybe<Scalars['Float']['output']>;
  import_platform_id?: Maybe<Scalars['Float']['output']>;
  journals_count?: Maybe<Scalars['Float']['output']>;
  lists_count?: Maybe<Scalars['Float']['output']>;
  literary_type_id?: Maybe<Scalars['Float']['output']>;
  pages?: Maybe<Scalars['Float']['output']>;
  prompts_count?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  ratings_count?: Maybe<Scalars['Float']['output']>;
  release_year?: Maybe<Scalars['Float']['output']>;
  reviews_count?: Maybe<Scalars['Float']['output']>;
  users_count?: Maybe<Scalars['Float']['output']>;
  users_read_count?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev_pop() on columns of table "books" */
export interface Books_Stddev_Pop_Order_By {
  activities_count?: InputMaybe<Order_By>;
  audio_seconds?: InputMaybe<Order_By>;
  book_category_id?: InputMaybe<Order_By>;
  book_status_id?: InputMaybe<Order_By>;
  canonical_id?: InputMaybe<Order_By>;
  created_by_user_id?: InputMaybe<Order_By>;
  default_audio_edition_id?: InputMaybe<Order_By>;
  default_cover_edition_id?: InputMaybe<Order_By>;
  default_ebook_edition_id?: InputMaybe<Order_By>;
  default_physical_edition_id?: InputMaybe<Order_By>;
  editions_count?: InputMaybe<Order_By>;
  featured_book_series_id?: InputMaybe<Order_By>;
  header_image_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  import_platform_id?: InputMaybe<Order_By>;
  journals_count?: InputMaybe<Order_By>;
  lists_count?: InputMaybe<Order_By>;
  literary_type_id?: InputMaybe<Order_By>;
  pages?: InputMaybe<Order_By>;
  prompts_count?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  ratings_count?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
  reviews_count?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
  users_read_count?: InputMaybe<Order_By>;
}

/** aggregate stddev_samp on columns */
export interface Books_Stddev_Samp_Fields {
  __typename?: 'books_stddev_samp_fields';
  activities_count?: Maybe<Scalars['Float']['output']>;
  audio_seconds?: Maybe<Scalars['Float']['output']>;
  book_category_id?: Maybe<Scalars['Float']['output']>;
  book_status_id?: Maybe<Scalars['Float']['output']>;
  canonical_id?: Maybe<Scalars['Float']['output']>;
  created_by_user_id?: Maybe<Scalars['Float']['output']>;
  default_audio_edition_id?: Maybe<Scalars['Float']['output']>;
  default_cover_edition_id?: Maybe<Scalars['Float']['output']>;
  default_ebook_edition_id?: Maybe<Scalars['Float']['output']>;
  default_physical_edition_id?: Maybe<Scalars['Float']['output']>;
  editions_count?: Maybe<Scalars['Float']['output']>;
  featured_book_series_id?: Maybe<Scalars['Float']['output']>;
  header_image_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  image_id?: Maybe<Scalars['Float']['output']>;
  import_platform_id?: Maybe<Scalars['Float']['output']>;
  journals_count?: Maybe<Scalars['Float']['output']>;
  lists_count?: Maybe<Scalars['Float']['output']>;
  literary_type_id?: Maybe<Scalars['Float']['output']>;
  pages?: Maybe<Scalars['Float']['output']>;
  prompts_count?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  ratings_count?: Maybe<Scalars['Float']['output']>;
  release_year?: Maybe<Scalars['Float']['output']>;
  reviews_count?: Maybe<Scalars['Float']['output']>;
  users_count?: Maybe<Scalars['Float']['output']>;
  users_read_count?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev_samp() on columns of table "books" */
export interface Books_Stddev_Samp_Order_By {
  activities_count?: InputMaybe<Order_By>;
  audio_seconds?: InputMaybe<Order_By>;
  book_category_id?: InputMaybe<Order_By>;
  book_status_id?: InputMaybe<Order_By>;
  canonical_id?: InputMaybe<Order_By>;
  created_by_user_id?: InputMaybe<Order_By>;
  default_audio_edition_id?: InputMaybe<Order_By>;
  default_cover_edition_id?: InputMaybe<Order_By>;
  default_ebook_edition_id?: InputMaybe<Order_By>;
  default_physical_edition_id?: InputMaybe<Order_By>;
  editions_count?: InputMaybe<Order_By>;
  featured_book_series_id?: InputMaybe<Order_By>;
  header_image_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  import_platform_id?: InputMaybe<Order_By>;
  journals_count?: InputMaybe<Order_By>;
  lists_count?: InputMaybe<Order_By>;
  literary_type_id?: InputMaybe<Order_By>;
  pages?: InputMaybe<Order_By>;
  prompts_count?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  ratings_count?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
  reviews_count?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
  users_read_count?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "books" */
export interface Books_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Books_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Books_Stream_Cursor_Value_Input {
  activities_count?: InputMaybe<Scalars['Int']['input']>;
  alternative_titles?: InputMaybe<Scalars['json']['input']>;
  audio_seconds?: InputMaybe<Scalars['Int']['input']>;
  book_category_id?: InputMaybe<Scalars['Int']['input']>;
  book_status_id?: InputMaybe<Scalars['smallint']['input']>;
  cached_contributors?: InputMaybe<Scalars['json']['input']>;
  cached_featured_series?: InputMaybe<Scalars['jsonb']['input']>;
  cached_header_image?: InputMaybe<Scalars['jsonb']['input']>;
  cached_image?: InputMaybe<Scalars['jsonb']['input']>;
  cached_tags?: InputMaybe<Scalars['json']['input']>;
  canonical_id?: InputMaybe<Scalars['Int']['input']>;
  compilation?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  created_by_user_id?: InputMaybe<Scalars['Int']['input']>;
  default_audio_edition_id?: InputMaybe<Scalars['Int']['input']>;
  default_cover_edition_id?: InputMaybe<Scalars['Int']['input']>;
  default_ebook_edition_id?: InputMaybe<Scalars['Int']['input']>;
  default_physical_edition_id?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  editions_count?: InputMaybe<Scalars['Int']['input']>;
  featured_book_series_id?: InputMaybe<Scalars['Int']['input']>;
  header_image_id?: InputMaybe<Scalars['Int']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image_id?: InputMaybe<Scalars['Int']['input']>;
  import_platform_id?: InputMaybe<Scalars['Int']['input']>;
  journals_count?: InputMaybe<Scalars['Int']['input']>;
  links?: InputMaybe<Scalars['jsonb']['input']>;
  lists_count?: InputMaybe<Scalars['Int']['input']>;
  literary_type_id?: InputMaybe<Scalars['Int']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  pages?: InputMaybe<Scalars['Int']['input']>;
  prompts_count?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['numeric']['input']>;
  ratings_count?: InputMaybe<Scalars['Int']['input']>;
  ratings_distribution?: InputMaybe<Scalars['jsonb']['input']>;
  release_date?: InputMaybe<Scalars['date']['input']>;
  release_year?: InputMaybe<Scalars['Int']['input']>;
  reviews_count?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_added?: InputMaybe<Scalars['Boolean']['input']>;
  users_count?: InputMaybe<Scalars['Int']['input']>;
  users_read_count?: InputMaybe<Scalars['Int']['input']>;
}

/** aggregate sum on columns */
export interface Books_Sum_Fields {
  __typename?: 'books_sum_fields';
  activities_count?: Maybe<Scalars['Int']['output']>;
  audio_seconds?: Maybe<Scalars['Int']['output']>;
  book_category_id?: Maybe<Scalars['Int']['output']>;
  book_status_id?: Maybe<Scalars['smallint']['output']>;
  canonical_id?: Maybe<Scalars['Int']['output']>;
  created_by_user_id?: Maybe<Scalars['Int']['output']>;
  default_audio_edition_id?: Maybe<Scalars['Int']['output']>;
  default_cover_edition_id?: Maybe<Scalars['Int']['output']>;
  default_ebook_edition_id?: Maybe<Scalars['Int']['output']>;
  default_physical_edition_id?: Maybe<Scalars['Int']['output']>;
  editions_count?: Maybe<Scalars['Int']['output']>;
  featured_book_series_id?: Maybe<Scalars['Int']['output']>;
  header_image_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image_id?: Maybe<Scalars['Int']['output']>;
  import_platform_id?: Maybe<Scalars['Int']['output']>;
  journals_count?: Maybe<Scalars['Int']['output']>;
  lists_count?: Maybe<Scalars['Int']['output']>;
  literary_type_id?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  prompts_count?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['numeric']['output']>;
  ratings_count?: Maybe<Scalars['Int']['output']>;
  release_year?: Maybe<Scalars['Int']['output']>;
  reviews_count?: Maybe<Scalars['Int']['output']>;
  users_count?: Maybe<Scalars['Int']['output']>;
  users_read_count?: Maybe<Scalars['Int']['output']>;
}

/** order by sum() on columns of table "books" */
export interface Books_Sum_Order_By {
  activities_count?: InputMaybe<Order_By>;
  audio_seconds?: InputMaybe<Order_By>;
  book_category_id?: InputMaybe<Order_By>;
  book_status_id?: InputMaybe<Order_By>;
  canonical_id?: InputMaybe<Order_By>;
  created_by_user_id?: InputMaybe<Order_By>;
  default_audio_edition_id?: InputMaybe<Order_By>;
  default_cover_edition_id?: InputMaybe<Order_By>;
  default_ebook_edition_id?: InputMaybe<Order_By>;
  default_physical_edition_id?: InputMaybe<Order_By>;
  editions_count?: InputMaybe<Order_By>;
  featured_book_series_id?: InputMaybe<Order_By>;
  header_image_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  import_platform_id?: InputMaybe<Order_By>;
  journals_count?: InputMaybe<Order_By>;
  lists_count?: InputMaybe<Order_By>;
  literary_type_id?: InputMaybe<Order_By>;
  pages?: InputMaybe<Order_By>;
  prompts_count?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  ratings_count?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
  reviews_count?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
  users_read_count?: InputMaybe<Order_By>;
}

/** aggregate var_pop on columns */
export interface Books_Var_Pop_Fields {
  __typename?: 'books_var_pop_fields';
  activities_count?: Maybe<Scalars['Float']['output']>;
  audio_seconds?: Maybe<Scalars['Float']['output']>;
  book_category_id?: Maybe<Scalars['Float']['output']>;
  book_status_id?: Maybe<Scalars['Float']['output']>;
  canonical_id?: Maybe<Scalars['Float']['output']>;
  created_by_user_id?: Maybe<Scalars['Float']['output']>;
  default_audio_edition_id?: Maybe<Scalars['Float']['output']>;
  default_cover_edition_id?: Maybe<Scalars['Float']['output']>;
  default_ebook_edition_id?: Maybe<Scalars['Float']['output']>;
  default_physical_edition_id?: Maybe<Scalars['Float']['output']>;
  editions_count?: Maybe<Scalars['Float']['output']>;
  featured_book_series_id?: Maybe<Scalars['Float']['output']>;
  header_image_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  image_id?: Maybe<Scalars['Float']['output']>;
  import_platform_id?: Maybe<Scalars['Float']['output']>;
  journals_count?: Maybe<Scalars['Float']['output']>;
  lists_count?: Maybe<Scalars['Float']['output']>;
  literary_type_id?: Maybe<Scalars['Float']['output']>;
  pages?: Maybe<Scalars['Float']['output']>;
  prompts_count?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  ratings_count?: Maybe<Scalars['Float']['output']>;
  release_year?: Maybe<Scalars['Float']['output']>;
  reviews_count?: Maybe<Scalars['Float']['output']>;
  users_count?: Maybe<Scalars['Float']['output']>;
  users_read_count?: Maybe<Scalars['Float']['output']>;
}

/** order by var_pop() on columns of table "books" */
export interface Books_Var_Pop_Order_By {
  activities_count?: InputMaybe<Order_By>;
  audio_seconds?: InputMaybe<Order_By>;
  book_category_id?: InputMaybe<Order_By>;
  book_status_id?: InputMaybe<Order_By>;
  canonical_id?: InputMaybe<Order_By>;
  created_by_user_id?: InputMaybe<Order_By>;
  default_audio_edition_id?: InputMaybe<Order_By>;
  default_cover_edition_id?: InputMaybe<Order_By>;
  default_ebook_edition_id?: InputMaybe<Order_By>;
  default_physical_edition_id?: InputMaybe<Order_By>;
  editions_count?: InputMaybe<Order_By>;
  featured_book_series_id?: InputMaybe<Order_By>;
  header_image_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  import_platform_id?: InputMaybe<Order_By>;
  journals_count?: InputMaybe<Order_By>;
  lists_count?: InputMaybe<Order_By>;
  literary_type_id?: InputMaybe<Order_By>;
  pages?: InputMaybe<Order_By>;
  prompts_count?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  ratings_count?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
  reviews_count?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
  users_read_count?: InputMaybe<Order_By>;
}

/** aggregate var_samp on columns */
export interface Books_Var_Samp_Fields {
  __typename?: 'books_var_samp_fields';
  activities_count?: Maybe<Scalars['Float']['output']>;
  audio_seconds?: Maybe<Scalars['Float']['output']>;
  book_category_id?: Maybe<Scalars['Float']['output']>;
  book_status_id?: Maybe<Scalars['Float']['output']>;
  canonical_id?: Maybe<Scalars['Float']['output']>;
  created_by_user_id?: Maybe<Scalars['Float']['output']>;
  default_audio_edition_id?: Maybe<Scalars['Float']['output']>;
  default_cover_edition_id?: Maybe<Scalars['Float']['output']>;
  default_ebook_edition_id?: Maybe<Scalars['Float']['output']>;
  default_physical_edition_id?: Maybe<Scalars['Float']['output']>;
  editions_count?: Maybe<Scalars['Float']['output']>;
  featured_book_series_id?: Maybe<Scalars['Float']['output']>;
  header_image_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  image_id?: Maybe<Scalars['Float']['output']>;
  import_platform_id?: Maybe<Scalars['Float']['output']>;
  journals_count?: Maybe<Scalars['Float']['output']>;
  lists_count?: Maybe<Scalars['Float']['output']>;
  literary_type_id?: Maybe<Scalars['Float']['output']>;
  pages?: Maybe<Scalars['Float']['output']>;
  prompts_count?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  ratings_count?: Maybe<Scalars['Float']['output']>;
  release_year?: Maybe<Scalars['Float']['output']>;
  reviews_count?: Maybe<Scalars['Float']['output']>;
  users_count?: Maybe<Scalars['Float']['output']>;
  users_read_count?: Maybe<Scalars['Float']['output']>;
}

/** order by var_samp() on columns of table "books" */
export interface Books_Var_Samp_Order_By {
  activities_count?: InputMaybe<Order_By>;
  audio_seconds?: InputMaybe<Order_By>;
  book_category_id?: InputMaybe<Order_By>;
  book_status_id?: InputMaybe<Order_By>;
  canonical_id?: InputMaybe<Order_By>;
  created_by_user_id?: InputMaybe<Order_By>;
  default_audio_edition_id?: InputMaybe<Order_By>;
  default_cover_edition_id?: InputMaybe<Order_By>;
  default_ebook_edition_id?: InputMaybe<Order_By>;
  default_physical_edition_id?: InputMaybe<Order_By>;
  editions_count?: InputMaybe<Order_By>;
  featured_book_series_id?: InputMaybe<Order_By>;
  header_image_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  import_platform_id?: InputMaybe<Order_By>;
  journals_count?: InputMaybe<Order_By>;
  lists_count?: InputMaybe<Order_By>;
  literary_type_id?: InputMaybe<Order_By>;
  pages?: InputMaybe<Order_By>;
  prompts_count?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  ratings_count?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
  reviews_count?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
  users_read_count?: InputMaybe<Order_By>;
}

/** aggregate variance on columns */
export interface Books_Variance_Fields {
  __typename?: 'books_variance_fields';
  activities_count?: Maybe<Scalars['Float']['output']>;
  audio_seconds?: Maybe<Scalars['Float']['output']>;
  book_category_id?: Maybe<Scalars['Float']['output']>;
  book_status_id?: Maybe<Scalars['Float']['output']>;
  canonical_id?: Maybe<Scalars['Float']['output']>;
  created_by_user_id?: Maybe<Scalars['Float']['output']>;
  default_audio_edition_id?: Maybe<Scalars['Float']['output']>;
  default_cover_edition_id?: Maybe<Scalars['Float']['output']>;
  default_ebook_edition_id?: Maybe<Scalars['Float']['output']>;
  default_physical_edition_id?: Maybe<Scalars['Float']['output']>;
  editions_count?: Maybe<Scalars['Float']['output']>;
  featured_book_series_id?: Maybe<Scalars['Float']['output']>;
  header_image_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  image_id?: Maybe<Scalars['Float']['output']>;
  import_platform_id?: Maybe<Scalars['Float']['output']>;
  journals_count?: Maybe<Scalars['Float']['output']>;
  lists_count?: Maybe<Scalars['Float']['output']>;
  literary_type_id?: Maybe<Scalars['Float']['output']>;
  pages?: Maybe<Scalars['Float']['output']>;
  prompts_count?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  ratings_count?: Maybe<Scalars['Float']['output']>;
  release_year?: Maybe<Scalars['Float']['output']>;
  reviews_count?: Maybe<Scalars['Float']['output']>;
  users_count?: Maybe<Scalars['Float']['output']>;
  users_read_count?: Maybe<Scalars['Float']['output']>;
}

/** order by variance() on columns of table "books" */
export interface Books_Variance_Order_By {
  activities_count?: InputMaybe<Order_By>;
  audio_seconds?: InputMaybe<Order_By>;
  book_category_id?: InputMaybe<Order_By>;
  book_status_id?: InputMaybe<Order_By>;
  canonical_id?: InputMaybe<Order_By>;
  created_by_user_id?: InputMaybe<Order_By>;
  default_audio_edition_id?: InputMaybe<Order_By>;
  default_cover_edition_id?: InputMaybe<Order_By>;
  default_ebook_edition_id?: InputMaybe<Order_By>;
  default_physical_edition_id?: InputMaybe<Order_By>;
  editions_count?: InputMaybe<Order_By>;
  featured_book_series_id?: InputMaybe<Order_By>;
  header_image_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  import_platform_id?: InputMaybe<Order_By>;
  journals_count?: InputMaybe<Order_By>;
  lists_count?: InputMaybe<Order_By>;
  literary_type_id?: InputMaybe<Order_By>;
  pages?: InputMaybe<Order_By>;
  prompts_count?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  ratings_count?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
  reviews_count?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
  users_read_count?: InputMaybe<Order_By>;
}

/** columns and relationships of "characters" */
export interface Characters {
  __typename?: 'characters';
  biography?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  book_characters: Array<Book_Characters>;
  books_count: Scalars['Int']['output'];
  cached_tags: Scalars['json']['output'];
  /** An object relationship */
  canonical?: Maybe<Characters>;
  canonical_books_count: Scalars['Int']['output'];
  canonical_id?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  contributions: Array<Contributions>;
  /** An aggregate relationship */
  contributions_aggregate: Contributions_Aggregate;
  created_at: Scalars['timestamp']['output'];
  gender_id?: Maybe<Scalars['bigint']['output']>;
  has_disability?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['bigint']['output'];
  image_id?: Maybe<Scalars['Int']['output']>;
  is_lgbtq?: Maybe<Scalars['Boolean']['output']>;
  is_poc?: Maybe<Scalars['Boolean']['output']>;
  locked?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  object_type: Scalars['String']['output'];
  openlibrary_url?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  state: Scalars['String']['output'];
  updated_at: Scalars['timestamp']['output'];
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** columns and relationships of "characters" */
export interface CharactersBook_CharactersArgs {
  distinct_on?: InputMaybe<Array<Book_Characters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Characters_Order_By>>;
  where?: InputMaybe<Book_Characters_Bool_Exp>;
}

/** columns and relationships of "characters" */
export interface CharactersCached_TagsArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "characters" */
export interface CharactersContributionsArgs {
  distinct_on?: InputMaybe<Array<Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contributions_Order_By>>;
  where?: InputMaybe<Contributions_Bool_Exp>;
}

/** columns and relationships of "characters" */
export interface CharactersContributions_AggregateArgs {
  distinct_on?: InputMaybe<Array<Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contributions_Order_By>>;
  where?: InputMaybe<Contributions_Bool_Exp>;
}

/** Boolean expression to filter rows from the table "characters". All fields are combined with a logical 'AND'. */
export interface Characters_Bool_Exp {
  _and?: InputMaybe<Array<Characters_Bool_Exp>>;
  _not?: InputMaybe<Characters_Bool_Exp>;
  _or?: InputMaybe<Array<Characters_Bool_Exp>>;
  biography?: InputMaybe<String_Comparison_Exp>;
  book_characters?: InputMaybe<Book_Characters_Bool_Exp>;
  books_count?: InputMaybe<Int_Comparison_Exp>;
  cached_tags?: InputMaybe<Json_Comparison_Exp>;
  canonical?: InputMaybe<Characters_Bool_Exp>;
  canonical_books_count?: InputMaybe<Int_Comparison_Exp>;
  canonical_id?: InputMaybe<Int_Comparison_Exp>;
  contributions?: InputMaybe<Contributions_Bool_Exp>;
  contributions_aggregate?: InputMaybe<Contributions_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  gender_id?: InputMaybe<Bigint_Comparison_Exp>;
  has_disability?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  image_id?: InputMaybe<Int_Comparison_Exp>;
  is_lgbtq?: InputMaybe<Boolean_Comparison_Exp>;
  is_poc?: InputMaybe<Boolean_Comparison_Exp>;
  locked?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  object_type?: InputMaybe<String_Comparison_Exp>;
  openlibrary_url?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
}

/** Ordering options when selecting data from "characters". */
export interface Characters_Order_By {
  biography?: InputMaybe<Order_By>;
  book_characters_aggregate?: InputMaybe<Book_Characters_Aggregate_Order_By>;
  books_count?: InputMaybe<Order_By>;
  cached_tags?: InputMaybe<Order_By>;
  canonical?: InputMaybe<Characters_Order_By>;
  canonical_books_count?: InputMaybe<Order_By>;
  canonical_id?: InputMaybe<Order_By>;
  contributions_aggregate?: InputMaybe<Contributions_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  gender_id?: InputMaybe<Order_By>;
  has_disability?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  is_lgbtq?: InputMaybe<Order_By>;
  is_poc?: InputMaybe<Order_By>;
  locked?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  object_type?: InputMaybe<Order_By>;
  openlibrary_url?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** select columns of table "characters" */
export enum Characters_Select_Column {
  /** column name */
  Biography = 'biography',
  /** column name */
  BooksCount = 'books_count',
  /** column name */
  CachedTags = 'cached_tags',
  /** column name */
  CanonicalBooksCount = 'canonical_books_count',
  /** column name */
  CanonicalId = 'canonical_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GenderId = 'gender_id',
  /** column name */
  HasDisability = 'has_disability',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  IsLgbtq = 'is_lgbtq',
  /** column name */
  IsPoc = 'is_poc',
  /** column name */
  Locked = 'locked',
  /** column name */
  Name = 'name',
  /** column name */
  ObjectType = 'object_type',
  /** column name */
  OpenlibraryUrl = 'openlibrary_url',
  /** column name */
  Slug = 'slug',
  /** column name */
  State = 'state',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** Streaming cursor of the table "characters" */
export interface Characters_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Characters_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Characters_Stream_Cursor_Value_Input {
  biography?: InputMaybe<Scalars['String']['input']>;
  books_count?: InputMaybe<Scalars['Int']['input']>;
  cached_tags?: InputMaybe<Scalars['json']['input']>;
  canonical_books_count?: InputMaybe<Scalars['Int']['input']>;
  canonical_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  gender_id?: InputMaybe<Scalars['bigint']['input']>;
  has_disability?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  image_id?: InputMaybe<Scalars['Int']['input']>;
  is_lgbtq?: InputMaybe<Scalars['Boolean']['input']>;
  is_poc?: InputMaybe<Scalars['Boolean']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  object_type?: InputMaybe<Scalars['String']['input']>;
  openlibrary_url?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
}

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export interface Citext_Comparison_Exp {
  _eq?: InputMaybe<Scalars['citext']['input']>;
  _gt?: InputMaybe<Scalars['citext']['input']>;
  _gte?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']['input']>;
  _in?: InputMaybe<Array<Scalars['citext']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']['input']>;
  _lt?: InputMaybe<Scalars['citext']['input']>;
  _lte?: InputMaybe<Scalars['citext']['input']>;
  _neq?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']['input']>;
  _nin?: InputMaybe<Array<Scalars['citext']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']['input']>;
}

/** columns and relationships of "collection_import_results" */
export interface Collection_Import_Results {
  __typename?: 'collection_import_results';
  author?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  book?: Maybe<Books>;
  book_found_method?: Maybe<Scalars['String']['output']>;
  book_id?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  collection_import: Collection_Imports;
  collection_import_id: Scalars['Int']['output'];
  contents: Scalars['jsonb']['output'];
  external_id: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  report?: Maybe<Scalars['Int']['output']>;
  state: Scalars['String']['output'];
  title: Scalars['String']['output'];
}

/** columns and relationships of "collection_import_results" */
export interface Collection_Import_ResultsContentsArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** order by aggregate values of table "collection_import_results" */
export interface Collection_Import_Results_Aggregate_Order_By {
  avg?: InputMaybe<Collection_Import_Results_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Collection_Import_Results_Max_Order_By>;
  min?: InputMaybe<Collection_Import_Results_Min_Order_By>;
  stddev?: InputMaybe<Collection_Import_Results_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Collection_Import_Results_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Collection_Import_Results_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Collection_Import_Results_Sum_Order_By>;
  var_pop?: InputMaybe<Collection_Import_Results_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Collection_Import_Results_Var_Samp_Order_By>;
  variance?: InputMaybe<Collection_Import_Results_Variance_Order_By>;
}

/** order by avg() on columns of table "collection_import_results" */
export interface Collection_Import_Results_Avg_Order_By {
  book_id?: InputMaybe<Order_By>;
  collection_import_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  report?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "collection_import_results". All fields are combined with a logical 'AND'. */
export interface Collection_Import_Results_Bool_Exp {
  _and?: InputMaybe<Array<Collection_Import_Results_Bool_Exp>>;
  _not?: InputMaybe<Collection_Import_Results_Bool_Exp>;
  _or?: InputMaybe<Array<Collection_Import_Results_Bool_Exp>>;
  author?: InputMaybe<String_Comparison_Exp>;
  book?: InputMaybe<Books_Bool_Exp>;
  book_found_method?: InputMaybe<String_Comparison_Exp>;
  book_id?: InputMaybe<Int_Comparison_Exp>;
  collection_import?: InputMaybe<Collection_Imports_Bool_Exp>;
  collection_import_id?: InputMaybe<Int_Comparison_Exp>;
  contents?: InputMaybe<Jsonb_Comparison_Exp>;
  external_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  report?: InputMaybe<Int_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
}

/** input type for incrementing numeric columns in table "collection_import_results" */
export interface Collection_Import_Results_Inc_Input {
  report?: InputMaybe<Scalars['Int']['input']>;
}

/** order by max() on columns of table "collection_import_results" */
export interface Collection_Import_Results_Max_Order_By {
  author?: InputMaybe<Order_By>;
  book_found_method?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  collection_import_id?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  report?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
}

/** order by min() on columns of table "collection_import_results" */
export interface Collection_Import_Results_Min_Order_By {
  author?: InputMaybe<Order_By>;
  book_found_method?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  collection_import_id?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  report?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
}

/** response of any mutation on the table "collection_import_results" */
export interface Collection_Import_Results_Mutation_Response {
  __typename?: 'collection_import_results_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Collection_Import_Results>;
}

/** Ordering options when selecting data from "collection_import_results". */
export interface Collection_Import_Results_Order_By {
  author?: InputMaybe<Order_By>;
  book?: InputMaybe<Books_Order_By>;
  book_found_method?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  collection_import?: InputMaybe<Collection_Imports_Order_By>;
  collection_import_id?: InputMaybe<Order_By>;
  contents?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  report?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
}

/** primary key columns input for table: collection_import_results */
export interface Collection_Import_Results_Pk_Columns_Input {
  id: Scalars['Int']['input'];
}

/** select columns of table "collection_import_results" */
export enum Collection_Import_Results_Select_Column {
  /** column name */
  Author = 'author',
  /** column name */
  BookFoundMethod = 'book_found_method',
  /** column name */
  BookId = 'book_id',
  /** column name */
  CollectionImportId = 'collection_import_id',
  /** column name */
  Contents = 'contents',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  Id = 'id',
  /** column name */
  Report = 'report',
  /** column name */
  State = 'state',
  /** column name */
  Title = 'title',
}

/** input type for updating data in table "collection_import_results" */
export interface Collection_Import_Results_Set_Input {
  report?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
}

/** order by stddev() on columns of table "collection_import_results" */
export interface Collection_Import_Results_Stddev_Order_By {
  book_id?: InputMaybe<Order_By>;
  collection_import_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  report?: InputMaybe<Order_By>;
}

/** order by stddev_pop() on columns of table "collection_import_results" */
export interface Collection_Import_Results_Stddev_Pop_Order_By {
  book_id?: InputMaybe<Order_By>;
  collection_import_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  report?: InputMaybe<Order_By>;
}

/** order by stddev_samp() on columns of table "collection_import_results" */
export interface Collection_Import_Results_Stddev_Samp_Order_By {
  book_id?: InputMaybe<Order_By>;
  collection_import_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  report?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "collection_import_results" */
export interface Collection_Import_Results_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Collection_Import_Results_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Collection_Import_Results_Stream_Cursor_Value_Input {
  author?: InputMaybe<Scalars['String']['input']>;
  book_found_method?: InputMaybe<Scalars['String']['input']>;
  book_id?: InputMaybe<Scalars['Int']['input']>;
  collection_import_id?: InputMaybe<Scalars['Int']['input']>;
  contents?: InputMaybe<Scalars['jsonb']['input']>;
  external_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  report?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
}

/** order by sum() on columns of table "collection_import_results" */
export interface Collection_Import_Results_Sum_Order_By {
  book_id?: InputMaybe<Order_By>;
  collection_import_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  report?: InputMaybe<Order_By>;
}

export interface Collection_Import_Results_Updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Collection_Import_Results_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Collection_Import_Results_Set_Input>;
  /** filter the rows which have to be updated */
  where: Collection_Import_Results_Bool_Exp;
}

/** order by var_pop() on columns of table "collection_import_results" */
export interface Collection_Import_Results_Var_Pop_Order_By {
  book_id?: InputMaybe<Order_By>;
  collection_import_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  report?: InputMaybe<Order_By>;
}

/** order by var_samp() on columns of table "collection_import_results" */
export interface Collection_Import_Results_Var_Samp_Order_By {
  book_id?: InputMaybe<Order_By>;
  collection_import_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  report?: InputMaybe<Order_By>;
}

/** order by variance() on columns of table "collection_import_results" */
export interface Collection_Import_Results_Variance_Order_By {
  book_id?: InputMaybe<Order_By>;
  collection_import_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  report?: InputMaybe<Order_By>;
}

/** columns and relationships of "collection_imports" */
export interface Collection_Imports {
  __typename?: 'collection_imports';
  /** An array relationship */
  collection_import_results: Array<Collection_Import_Results>;
  completed_at?: Maybe<Scalars['timestamptz']['output']>;
  contents_key?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  current_book?: Maybe<Scalars['String']['output']>;
  error_message?: Maybe<Scalars['String']['output']>;
  failure_count: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  override_date_read?: Maybe<Scalars['Boolean']['output']>;
  override_ratings: Scalars['Boolean']['output'];
  override_shelves: Scalars['Boolean']['output'];
  platform_id?: Maybe<Scalars['Int']['output']>;
  processed_count: Scalars['Int']['output'];
  reimport_count: Scalars['Int']['output'];
  started_at?: Maybe<Scalars['timestamptz']['output']>;
  state: Scalars['String']['output'];
  success_count: Scalars['Int']['output'];
  tag_resolution: Scalars['Int']['output'];
  total_count: Scalars['Int']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int']['output'];
}

/** columns and relationships of "collection_imports" */
export interface Collection_ImportsCollection_Import_ResultsArgs {
  distinct_on?: InputMaybe<Array<Collection_Import_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Collection_Import_Results_Order_By>>;
  where?: InputMaybe<Collection_Import_Results_Bool_Exp>;
}

/** order by aggregate values of table "collection_imports" */
export interface Collection_Imports_Aggregate_Order_By {
  avg?: InputMaybe<Collection_Imports_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Collection_Imports_Max_Order_By>;
  min?: InputMaybe<Collection_Imports_Min_Order_By>;
  stddev?: InputMaybe<Collection_Imports_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Collection_Imports_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Collection_Imports_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Collection_Imports_Sum_Order_By>;
  var_pop?: InputMaybe<Collection_Imports_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Collection_Imports_Var_Samp_Order_By>;
  variance?: InputMaybe<Collection_Imports_Variance_Order_By>;
}

/** order by avg() on columns of table "collection_imports" */
export interface Collection_Imports_Avg_Order_By {
  failure_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  processed_count?: InputMaybe<Order_By>;
  reimport_count?: InputMaybe<Order_By>;
  success_count?: InputMaybe<Order_By>;
  tag_resolution?: InputMaybe<Order_By>;
  total_count?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "collection_imports". All fields are combined with a logical 'AND'. */
export interface Collection_Imports_Bool_Exp {
  _and?: InputMaybe<Array<Collection_Imports_Bool_Exp>>;
  _not?: InputMaybe<Collection_Imports_Bool_Exp>;
  _or?: InputMaybe<Array<Collection_Imports_Bool_Exp>>;
  collection_import_results?: InputMaybe<Collection_Import_Results_Bool_Exp>;
  completed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  contents_key?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  current_book?: InputMaybe<String_Comparison_Exp>;
  error_message?: InputMaybe<String_Comparison_Exp>;
  failure_count?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  override_date_read?: InputMaybe<Boolean_Comparison_Exp>;
  override_ratings?: InputMaybe<Boolean_Comparison_Exp>;
  override_shelves?: InputMaybe<Boolean_Comparison_Exp>;
  platform_id?: InputMaybe<Int_Comparison_Exp>;
  processed_count?: InputMaybe<Int_Comparison_Exp>;
  reimport_count?: InputMaybe<Int_Comparison_Exp>;
  started_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  success_count?: InputMaybe<Int_Comparison_Exp>;
  tag_resolution?: InputMaybe<Int_Comparison_Exp>;
  total_count?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
}

/** order by max() on columns of table "collection_imports" */
export interface Collection_Imports_Max_Order_By {
  completed_at?: InputMaybe<Order_By>;
  contents_key?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_book?: InputMaybe<Order_By>;
  error_message?: InputMaybe<Order_By>;
  failure_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  processed_count?: InputMaybe<Order_By>;
  reimport_count?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  success_count?: InputMaybe<Order_By>;
  tag_resolution?: InputMaybe<Order_By>;
  total_count?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by min() on columns of table "collection_imports" */
export interface Collection_Imports_Min_Order_By {
  completed_at?: InputMaybe<Order_By>;
  contents_key?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_book?: InputMaybe<Order_By>;
  error_message?: InputMaybe<Order_By>;
  failure_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  processed_count?: InputMaybe<Order_By>;
  reimport_count?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  success_count?: InputMaybe<Order_By>;
  tag_resolution?: InputMaybe<Order_By>;
  total_count?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Ordering options when selecting data from "collection_imports". */
export interface Collection_Imports_Order_By {
  collection_import_results_aggregate?: InputMaybe<Collection_Import_Results_Aggregate_Order_By>;
  completed_at?: InputMaybe<Order_By>;
  contents_key?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_book?: InputMaybe<Order_By>;
  error_message?: InputMaybe<Order_By>;
  failure_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  override_date_read?: InputMaybe<Order_By>;
  override_ratings?: InputMaybe<Order_By>;
  override_shelves?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  processed_count?: InputMaybe<Order_By>;
  reimport_count?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  success_count?: InputMaybe<Order_By>;
  tag_resolution?: InputMaybe<Order_By>;
  total_count?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** select columns of table "collection_imports" */
export enum Collection_Imports_Select_Column {
  /** column name */
  CompletedAt = 'completed_at',
  /** column name */
  ContentsKey = 'contents_key',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrentBook = 'current_book',
  /** column name */
  ErrorMessage = 'error_message',
  /** column name */
  FailureCount = 'failure_count',
  /** column name */
  Id = 'id',
  /** column name */
  OverrideDateRead = 'override_date_read',
  /** column name */
  OverrideRatings = 'override_ratings',
  /** column name */
  OverrideShelves = 'override_shelves',
  /** column name */
  PlatformId = 'platform_id',
  /** column name */
  ProcessedCount = 'processed_count',
  /** column name */
  ReimportCount = 'reimport_count',
  /** column name */
  StartedAt = 'started_at',
  /** column name */
  State = 'state',
  /** column name */
  SuccessCount = 'success_count',
  /** column name */
  TagResolution = 'tag_resolution',
  /** column name */
  TotalCount = 'total_count',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** order by stddev() on columns of table "collection_imports" */
export interface Collection_Imports_Stddev_Order_By {
  failure_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  processed_count?: InputMaybe<Order_By>;
  reimport_count?: InputMaybe<Order_By>;
  success_count?: InputMaybe<Order_By>;
  tag_resolution?: InputMaybe<Order_By>;
  total_count?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by stddev_pop() on columns of table "collection_imports" */
export interface Collection_Imports_Stddev_Pop_Order_By {
  failure_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  processed_count?: InputMaybe<Order_By>;
  reimport_count?: InputMaybe<Order_By>;
  success_count?: InputMaybe<Order_By>;
  tag_resolution?: InputMaybe<Order_By>;
  total_count?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by stddev_samp() on columns of table "collection_imports" */
export interface Collection_Imports_Stddev_Samp_Order_By {
  failure_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  processed_count?: InputMaybe<Order_By>;
  reimport_count?: InputMaybe<Order_By>;
  success_count?: InputMaybe<Order_By>;
  tag_resolution?: InputMaybe<Order_By>;
  total_count?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "collection_imports" */
export interface Collection_Imports_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Collection_Imports_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Collection_Imports_Stream_Cursor_Value_Input {
  completed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  contents_key?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  current_book?: InputMaybe<Scalars['String']['input']>;
  error_message?: InputMaybe<Scalars['String']['input']>;
  failure_count?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  override_date_read?: InputMaybe<Scalars['Boolean']['input']>;
  override_ratings?: InputMaybe<Scalars['Boolean']['input']>;
  override_shelves?: InputMaybe<Scalars['Boolean']['input']>;
  platform_id?: InputMaybe<Scalars['Int']['input']>;
  processed_count?: InputMaybe<Scalars['Int']['input']>;
  reimport_count?: InputMaybe<Scalars['Int']['input']>;
  started_at?: InputMaybe<Scalars['timestamptz']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  success_count?: InputMaybe<Scalars['Int']['input']>;
  tag_resolution?: InputMaybe<Scalars['Int']['input']>;
  total_count?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
}

/** order by sum() on columns of table "collection_imports" */
export interface Collection_Imports_Sum_Order_By {
  failure_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  processed_count?: InputMaybe<Order_By>;
  reimport_count?: InputMaybe<Order_By>;
  success_count?: InputMaybe<Order_By>;
  tag_resolution?: InputMaybe<Order_By>;
  total_count?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by var_pop() on columns of table "collection_imports" */
export interface Collection_Imports_Var_Pop_Order_By {
  failure_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  processed_count?: InputMaybe<Order_By>;
  reimport_count?: InputMaybe<Order_By>;
  success_count?: InputMaybe<Order_By>;
  tag_resolution?: InputMaybe<Order_By>;
  total_count?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by var_samp() on columns of table "collection_imports" */
export interface Collection_Imports_Var_Samp_Order_By {
  failure_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  processed_count?: InputMaybe<Order_By>;
  reimport_count?: InputMaybe<Order_By>;
  success_count?: InputMaybe<Order_By>;
  tag_resolution?: InputMaybe<Order_By>;
  total_count?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by variance() on columns of table "collection_imports" */
export interface Collection_Imports_Variance_Order_By {
  failure_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  processed_count?: InputMaybe<Order_By>;
  reimport_count?: InputMaybe<Order_By>;
  success_count?: InputMaybe<Order_By>;
  tag_resolution?: InputMaybe<Order_By>;
  total_count?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** columns and relationships of "contributions" */
export interface Contributions {
  __typename?: 'contributions';
  /** An object relationship */
  author?: Maybe<Authors>;
  author_id: Scalars['Int']['output'];
  /** An object relationship */
  book?: Maybe<Books>;
  contributable_id: Scalars['Int']['output'];
  contributable_type: Scalars['String']['output'];
  contribution?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamp']['output'];
  id: Scalars['bigint']['output'];
  updated_at: Scalars['timestamp']['output'];
}

/** aggregated selection of "contributions" */
export interface Contributions_Aggregate {
  __typename?: 'contributions_aggregate';
  aggregate?: Maybe<Contributions_Aggregate_Fields>;
  nodes: Array<Contributions>;
}

export interface Contributions_Aggregate_Bool_Exp {
  count?: InputMaybe<Contributions_Aggregate_Bool_Exp_Count>;
}

export interface Contributions_Aggregate_Bool_Exp_Count {
  arguments?: InputMaybe<Array<Contributions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Contributions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
}

/** aggregate fields of "contributions" */
export interface Contributions_Aggregate_Fields {
  __typename?: 'contributions_aggregate_fields';
  avg?: Maybe<Contributions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Contributions_Max_Fields>;
  min?: Maybe<Contributions_Min_Fields>;
  stddev?: Maybe<Contributions_Stddev_Fields>;
  stddev_pop?: Maybe<Contributions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contributions_Stddev_Samp_Fields>;
  sum?: Maybe<Contributions_Sum_Fields>;
  var_pop?: Maybe<Contributions_Var_Pop_Fields>;
  var_samp?: Maybe<Contributions_Var_Samp_Fields>;
  variance?: Maybe<Contributions_Variance_Fields>;
}

/** aggregate fields of "contributions" */
export interface Contributions_Aggregate_FieldsCountArgs {
  columns?: InputMaybe<Array<Contributions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
}

/** order by aggregate values of table "contributions" */
export interface Contributions_Aggregate_Order_By {
  avg?: InputMaybe<Contributions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Contributions_Max_Order_By>;
  min?: InputMaybe<Contributions_Min_Order_By>;
  stddev?: InputMaybe<Contributions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Contributions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Contributions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Contributions_Sum_Order_By>;
  var_pop?: InputMaybe<Contributions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Contributions_Var_Samp_Order_By>;
  variance?: InputMaybe<Contributions_Variance_Order_By>;
}

/** aggregate avg on columns */
export interface Contributions_Avg_Fields {
  __typename?: 'contributions_avg_fields';
  author_id?: Maybe<Scalars['Float']['output']>;
  contributable_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
}

/** order by avg() on columns of table "contributions" */
export interface Contributions_Avg_Order_By {
  author_id?: InputMaybe<Order_By>;
  contributable_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "contributions". All fields are combined with a logical 'AND'. */
export interface Contributions_Bool_Exp {
  _and?: InputMaybe<Array<Contributions_Bool_Exp>>;
  _not?: InputMaybe<Contributions_Bool_Exp>;
  _or?: InputMaybe<Array<Contributions_Bool_Exp>>;
  author?: InputMaybe<Authors_Bool_Exp>;
  author_id?: InputMaybe<Int_Comparison_Exp>;
  book?: InputMaybe<Books_Bool_Exp>;
  contributable_id?: InputMaybe<Int_Comparison_Exp>;
  contributable_type?: InputMaybe<String_Comparison_Exp>;
  contribution?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
}

/** aggregate max on columns */
export interface Contributions_Max_Fields {
  __typename?: 'contributions_max_fields';
  author_id?: Maybe<Scalars['Int']['output']>;
  contributable_id?: Maybe<Scalars['Int']['output']>;
  contributable_type?: Maybe<Scalars['String']['output']>;
  contribution?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
}

/** order by max() on columns of table "contributions" */
export interface Contributions_Max_Order_By {
  author_id?: InputMaybe<Order_By>;
  contributable_id?: InputMaybe<Order_By>;
  contributable_type?: InputMaybe<Order_By>;
  contribution?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
}

/** aggregate min on columns */
export interface Contributions_Min_Fields {
  __typename?: 'contributions_min_fields';
  author_id?: Maybe<Scalars['Int']['output']>;
  contributable_id?: Maybe<Scalars['Int']['output']>;
  contributable_type?: Maybe<Scalars['String']['output']>;
  contribution?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
}

/** order by min() on columns of table "contributions" */
export interface Contributions_Min_Order_By {
  author_id?: InputMaybe<Order_By>;
  contributable_id?: InputMaybe<Order_By>;
  contributable_type?: InputMaybe<Order_By>;
  contribution?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
}

/** Ordering options when selecting data from "contributions". */
export interface Contributions_Order_By {
  author?: InputMaybe<Authors_Order_By>;
  author_id?: InputMaybe<Order_By>;
  book?: InputMaybe<Books_Order_By>;
  contributable_id?: InputMaybe<Order_By>;
  contributable_type?: InputMaybe<Order_By>;
  contribution?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
}

/** select columns of table "contributions" */
export enum Contributions_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  ContributableId = 'contributable_id',
  /** column name */
  ContributableType = 'contributable_type',
  /** column name */
  Contribution = 'contribution',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate stddev on columns */
export interface Contributions_Stddev_Fields {
  __typename?: 'contributions_stddev_fields';
  author_id?: Maybe<Scalars['Float']['output']>;
  contributable_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev() on columns of table "contributions" */
export interface Contributions_Stddev_Order_By {
  author_id?: InputMaybe<Order_By>;
  contributable_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
}

/** aggregate stddev_pop on columns */
export interface Contributions_Stddev_Pop_Fields {
  __typename?: 'contributions_stddev_pop_fields';
  author_id?: Maybe<Scalars['Float']['output']>;
  contributable_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev_pop() on columns of table "contributions" */
export interface Contributions_Stddev_Pop_Order_By {
  author_id?: InputMaybe<Order_By>;
  contributable_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
}

/** aggregate stddev_samp on columns */
export interface Contributions_Stddev_Samp_Fields {
  __typename?: 'contributions_stddev_samp_fields';
  author_id?: Maybe<Scalars['Float']['output']>;
  contributable_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev_samp() on columns of table "contributions" */
export interface Contributions_Stddev_Samp_Order_By {
  author_id?: InputMaybe<Order_By>;
  contributable_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "contributions" */
export interface Contributions_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Contributions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Contributions_Stream_Cursor_Value_Input {
  author_id?: InputMaybe<Scalars['Int']['input']>;
  contributable_id?: InputMaybe<Scalars['Int']['input']>;
  contributable_type?: InputMaybe<Scalars['String']['input']>;
  contribution?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
}

/** aggregate sum on columns */
export interface Contributions_Sum_Fields {
  __typename?: 'contributions_sum_fields';
  author_id?: Maybe<Scalars['Int']['output']>;
  contributable_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
}

/** order by sum() on columns of table "contributions" */
export interface Contributions_Sum_Order_By {
  author_id?: InputMaybe<Order_By>;
  contributable_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
}

/** aggregate var_pop on columns */
export interface Contributions_Var_Pop_Fields {
  __typename?: 'contributions_var_pop_fields';
  author_id?: Maybe<Scalars['Float']['output']>;
  contributable_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
}

/** order by var_pop() on columns of table "contributions" */
export interface Contributions_Var_Pop_Order_By {
  author_id?: InputMaybe<Order_By>;
  contributable_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
}

/** aggregate var_samp on columns */
export interface Contributions_Var_Samp_Fields {
  __typename?: 'contributions_var_samp_fields';
  author_id?: Maybe<Scalars['Float']['output']>;
  contributable_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
}

/** order by var_samp() on columns of table "contributions" */
export interface Contributions_Var_Samp_Order_By {
  author_id?: InputMaybe<Order_By>;
  contributable_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
}

/** aggregate variance on columns */
export interface Contributions_Variance_Fields {
  __typename?: 'contributions_variance_fields';
  author_id?: Maybe<Scalars['Float']['output']>;
  contributable_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
}

/** order by variance() on columns of table "contributions" */
export interface Contributions_Variance_Order_By {
  author_id?: InputMaybe<Order_By>;
  contributable_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
}

/** columns and relationships of "countries" */
export interface Countries {
  __typename?: 'countries';
  code2?: Maybe<Scalars['String']['output']>;
  code3?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamp']['output'];
  /** An array relationship */
  editions: Array<Editions>;
  id: Scalars['bigint']['output'];
  intermediate_region?: Maybe<Scalars['String']['output']>;
  intermediate_region_code?: Maybe<Scalars['String']['output']>;
  iso_3166?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone_code?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  region_code?: Maybe<Scalars['String']['output']>;
  sub_region?: Maybe<Scalars['String']['output']>;
  sub_region_code?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamp']['output'];
}

/** columns and relationships of "countries" */
export interface CountriesEditionsArgs {
  distinct_on?: InputMaybe<Array<Editions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Editions_Order_By>>;
  where?: InputMaybe<Editions_Bool_Exp>;
}

/** Boolean expression to filter rows from the table "countries". All fields are combined with a logical 'AND'. */
export interface Countries_Bool_Exp {
  _and?: InputMaybe<Array<Countries_Bool_Exp>>;
  _not?: InputMaybe<Countries_Bool_Exp>;
  _or?: InputMaybe<Array<Countries_Bool_Exp>>;
  code2?: InputMaybe<String_Comparison_Exp>;
  code3?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  editions?: InputMaybe<Editions_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  intermediate_region?: InputMaybe<String_Comparison_Exp>;
  intermediate_region_code?: InputMaybe<String_Comparison_Exp>;
  iso_3166?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  phone_code?: InputMaybe<String_Comparison_Exp>;
  region?: InputMaybe<String_Comparison_Exp>;
  region_code?: InputMaybe<String_Comparison_Exp>;
  sub_region?: InputMaybe<String_Comparison_Exp>;
  sub_region_code?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
}

/** Ordering options when selecting data from "countries". */
export interface Countries_Order_By {
  code2?: InputMaybe<Order_By>;
  code3?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  editions_aggregate?: InputMaybe<Editions_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  intermediate_region?: InputMaybe<Order_By>;
  intermediate_region_code?: InputMaybe<Order_By>;
  iso_3166?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phone_code?: InputMaybe<Order_By>;
  region?: InputMaybe<Order_By>;
  region_code?: InputMaybe<Order_By>;
  sub_region?: InputMaybe<Order_By>;
  sub_region_code?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
}

/** select columns of table "countries" */
export enum Countries_Select_Column {
  /** column name */
  Code2 = 'code2',
  /** column name */
  Code3 = 'code3',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IntermediateRegion = 'intermediate_region',
  /** column name */
  IntermediateRegionCode = 'intermediate_region_code',
  /** column name */
  Iso_3166 = 'iso_3166',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneCode = 'phone_code',
  /** column name */
  Region = 'region',
  /** column name */
  RegionCode = 'region_code',
  /** column name */
  SubRegion = 'sub_region',
  /** column name */
  SubRegionCode = 'sub_region_code',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** Streaming cursor of the table "countries" */
export interface Countries_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Countries_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Countries_Stream_Cursor_Value_Input {
  code2?: InputMaybe<Scalars['String']['input']>;
  code3?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  intermediate_region?: InputMaybe<Scalars['String']['input']>;
  intermediate_region_code?: InputMaybe<Scalars['String']['input']>;
  iso_3166?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone_code?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  region_code?: InputMaybe<Scalars['String']['input']>;
  sub_region?: InputMaybe<Scalars['String']['input']>;
  sub_region_code?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
}

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export interface Date_Comparison_Exp {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
}

/** columns and relationships of "editions" */
export interface Editions {
  __typename?: 'editions';
  alternative_titles: Scalars['json']['output'];
  asin?: Maybe<Scalars['String']['output']>;
  audio_seconds?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  book: Books;
  book_id: Scalars['Int']['output'];
  /** An array relationship */
  book_mappings: Array<Book_Mappings>;
  cached_contributors: Scalars['json']['output'];
  cached_image: Scalars['jsonb']['output'];
  cached_tags: Scalars['json']['output'];
  compilation: Scalars['Boolean']['output'];
  /** An array relationship */
  contributions: Array<Contributions>;
  /** An aggregate relationship */
  contributions_aggregate: Contributions_Aggregate;
  /** An object relationship */
  country?: Maybe<Countries>;
  country_id?: Maybe<Scalars['Int']['output']>;
  created_at: Scalars['timestamp']['output'];
  created_by_user_id?: Maybe<Scalars['Int']['output']>;
  edition_format?: Maybe<Scalars['String']['output']>;
  edition_information?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  /** An object relationship */
  image?: Maybe<Images>;
  image_id?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  images: Array<Images>;
  isbn_10?: Maybe<Scalars['String']['output']>;
  isbn_13?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  language?: Maybe<Languages>;
  language_id?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  list_books: Array<List_Books>;
  /** An aggregate relationship */
  list_books_aggregate: List_Books_Aggregate;
  lists_count: Scalars['Int']['output'];
  locked: Scalars['Boolean']['output'];
  normalized_at?: Maybe<Scalars['timestamp']['output']>;
  object_type: Scalars['String']['output'];
  original_book_id?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  physical_format?: Maybe<Scalars['String']['output']>;
  physical_information?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  publisher?: Maybe<Publishers>;
  publisher_id?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['numeric']['output']>;
  /** An object relationship */
  reading_format?: Maybe<Reading_Formats>;
  reading_format_id: Scalars['Int']['output'];
  release_date?: Maybe<Scalars['date']['output']>;
  release_year?: Maybe<Scalars['Int']['output']>;
  score: Scalars['Int']['output'];
  source?: Maybe<Scalars['String']['output']>;
  state: Scalars['String']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamp']['output'];
  user_added: Scalars['Boolean']['output'];
  users_count: Scalars['Int']['output'];
  users_read_count: Scalars['Int']['output'];
}

/** columns and relationships of "editions" */
export interface EditionsAlternative_TitlesArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "editions" */
export interface EditionsBook_MappingsArgs {
  distinct_on?: InputMaybe<Array<Book_Mappings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Mappings_Order_By>>;
  where?: InputMaybe<Book_Mappings_Bool_Exp>;
}

/** columns and relationships of "editions" */
export interface EditionsCached_ContributorsArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "editions" */
export interface EditionsCached_ImageArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "editions" */
export interface EditionsCached_TagsArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "editions" */
export interface EditionsContributionsArgs {
  distinct_on?: InputMaybe<Array<Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contributions_Order_By>>;
  where?: InputMaybe<Contributions_Bool_Exp>;
}

/** columns and relationships of "editions" */
export interface EditionsContributions_AggregateArgs {
  distinct_on?: InputMaybe<Array<Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contributions_Order_By>>;
  where?: InputMaybe<Contributions_Bool_Exp>;
}

/** columns and relationships of "editions" */
export interface EditionsImagesArgs {
  distinct_on?: InputMaybe<Array<Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Images_Order_By>>;
  where?: InputMaybe<Images_Bool_Exp>;
}

/** columns and relationships of "editions" */
export interface EditionsList_BooksArgs {
  distinct_on?: InputMaybe<Array<List_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<List_Books_Order_By>>;
  where?: InputMaybe<List_Books_Bool_Exp>;
}

/** columns and relationships of "editions" */
export interface EditionsList_Books_AggregateArgs {
  distinct_on?: InputMaybe<Array<List_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<List_Books_Order_By>>;
  where?: InputMaybe<List_Books_Bool_Exp>;
}

/** order by aggregate values of table "editions" */
export interface Editions_Aggregate_Order_By {
  avg?: InputMaybe<Editions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Editions_Max_Order_By>;
  min?: InputMaybe<Editions_Min_Order_By>;
  stddev?: InputMaybe<Editions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Editions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Editions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Editions_Sum_Order_By>;
  var_pop?: InputMaybe<Editions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Editions_Var_Samp_Order_By>;
  variance?: InputMaybe<Editions_Variance_Order_By>;
}

/** order by avg() on columns of table "editions" */
export interface Editions_Avg_Order_By {
  audio_seconds?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  country_id?: InputMaybe<Order_By>;
  created_by_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  language_id?: InputMaybe<Order_By>;
  lists_count?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  pages?: InputMaybe<Order_By>;
  publisher_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  reading_format_id?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
  users_read_count?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "editions". All fields are combined with a logical 'AND'. */
export interface Editions_Bool_Exp {
  _and?: InputMaybe<Array<Editions_Bool_Exp>>;
  _not?: InputMaybe<Editions_Bool_Exp>;
  _or?: InputMaybe<Array<Editions_Bool_Exp>>;
  alternative_titles?: InputMaybe<Json_Comparison_Exp>;
  asin?: InputMaybe<String_Comparison_Exp>;
  audio_seconds?: InputMaybe<Int_Comparison_Exp>;
  book?: InputMaybe<Books_Bool_Exp>;
  book_id?: InputMaybe<Int_Comparison_Exp>;
  book_mappings?: InputMaybe<Book_Mappings_Bool_Exp>;
  cached_contributors?: InputMaybe<Json_Comparison_Exp>;
  cached_image?: InputMaybe<Jsonb_Comparison_Exp>;
  cached_tags?: InputMaybe<Json_Comparison_Exp>;
  compilation?: InputMaybe<Boolean_Comparison_Exp>;
  contributions?: InputMaybe<Contributions_Bool_Exp>;
  contributions_aggregate?: InputMaybe<Contributions_Aggregate_Bool_Exp>;
  country?: InputMaybe<Countries_Bool_Exp>;
  country_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  created_by_user_id?: InputMaybe<Int_Comparison_Exp>;
  edition_format?: InputMaybe<String_Comparison_Exp>;
  edition_information?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<Images_Bool_Exp>;
  image_id?: InputMaybe<Int_Comparison_Exp>;
  images?: InputMaybe<Images_Bool_Exp>;
  isbn_10?: InputMaybe<String_Comparison_Exp>;
  isbn_13?: InputMaybe<String_Comparison_Exp>;
  language?: InputMaybe<Languages_Bool_Exp>;
  language_id?: InputMaybe<Int_Comparison_Exp>;
  list_books?: InputMaybe<List_Books_Bool_Exp>;
  list_books_aggregate?: InputMaybe<List_Books_Aggregate_Bool_Exp>;
  lists_count?: InputMaybe<Int_Comparison_Exp>;
  locked?: InputMaybe<Boolean_Comparison_Exp>;
  normalized_at?: InputMaybe<Timestamp_Comparison_Exp>;
  object_type?: InputMaybe<String_Comparison_Exp>;
  original_book_id?: InputMaybe<Int_Comparison_Exp>;
  pages?: InputMaybe<Int_Comparison_Exp>;
  physical_format?: InputMaybe<String_Comparison_Exp>;
  physical_information?: InputMaybe<String_Comparison_Exp>;
  publisher?: InputMaybe<Publishers_Bool_Exp>;
  publisher_id?: InputMaybe<Int_Comparison_Exp>;
  rating?: InputMaybe<Numeric_Comparison_Exp>;
  reading_format?: InputMaybe<Reading_Formats_Bool_Exp>;
  reading_format_id?: InputMaybe<Int_Comparison_Exp>;
  release_date?: InputMaybe<Date_Comparison_Exp>;
  release_year?: InputMaybe<Int_Comparison_Exp>;
  score?: InputMaybe<Int_Comparison_Exp>;
  source?: InputMaybe<String_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  subtitle?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user_added?: InputMaybe<Boolean_Comparison_Exp>;
  users_count?: InputMaybe<Int_Comparison_Exp>;
  users_read_count?: InputMaybe<Int_Comparison_Exp>;
}

/** order by max() on columns of table "editions" */
export interface Editions_Max_Order_By {
  asin?: InputMaybe<Order_By>;
  audio_seconds?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  country_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by_user_id?: InputMaybe<Order_By>;
  edition_format?: InputMaybe<Order_By>;
  edition_information?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  isbn_10?: InputMaybe<Order_By>;
  isbn_13?: InputMaybe<Order_By>;
  language_id?: InputMaybe<Order_By>;
  lists_count?: InputMaybe<Order_By>;
  normalized_at?: InputMaybe<Order_By>;
  object_type?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  pages?: InputMaybe<Order_By>;
  physical_format?: InputMaybe<Order_By>;
  physical_information?: InputMaybe<Order_By>;
  publisher_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  reading_format_id?: InputMaybe<Order_By>;
  release_date?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  subtitle?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
  users_read_count?: InputMaybe<Order_By>;
}

/** order by min() on columns of table "editions" */
export interface Editions_Min_Order_By {
  asin?: InputMaybe<Order_By>;
  audio_seconds?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  country_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by_user_id?: InputMaybe<Order_By>;
  edition_format?: InputMaybe<Order_By>;
  edition_information?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  isbn_10?: InputMaybe<Order_By>;
  isbn_13?: InputMaybe<Order_By>;
  language_id?: InputMaybe<Order_By>;
  lists_count?: InputMaybe<Order_By>;
  normalized_at?: InputMaybe<Order_By>;
  object_type?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  pages?: InputMaybe<Order_By>;
  physical_format?: InputMaybe<Order_By>;
  physical_information?: InputMaybe<Order_By>;
  publisher_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  reading_format_id?: InputMaybe<Order_By>;
  release_date?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  subtitle?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
  users_read_count?: InputMaybe<Order_By>;
}

/** Ordering options when selecting data from "editions". */
export interface Editions_Order_By {
  alternative_titles?: InputMaybe<Order_By>;
  asin?: InputMaybe<Order_By>;
  audio_seconds?: InputMaybe<Order_By>;
  book?: InputMaybe<Books_Order_By>;
  book_id?: InputMaybe<Order_By>;
  book_mappings_aggregate?: InputMaybe<Book_Mappings_Aggregate_Order_By>;
  cached_contributors?: InputMaybe<Order_By>;
  cached_image?: InputMaybe<Order_By>;
  cached_tags?: InputMaybe<Order_By>;
  compilation?: InputMaybe<Order_By>;
  contributions_aggregate?: InputMaybe<Contributions_Aggregate_Order_By>;
  country?: InputMaybe<Countries_Order_By>;
  country_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by_user_id?: InputMaybe<Order_By>;
  edition_format?: InputMaybe<Order_By>;
  edition_information?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Images_Order_By>;
  image_id?: InputMaybe<Order_By>;
  images_aggregate?: InputMaybe<Images_Aggregate_Order_By>;
  isbn_10?: InputMaybe<Order_By>;
  isbn_13?: InputMaybe<Order_By>;
  language?: InputMaybe<Languages_Order_By>;
  language_id?: InputMaybe<Order_By>;
  list_books_aggregate?: InputMaybe<List_Books_Aggregate_Order_By>;
  lists_count?: InputMaybe<Order_By>;
  locked?: InputMaybe<Order_By>;
  normalized_at?: InputMaybe<Order_By>;
  object_type?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  pages?: InputMaybe<Order_By>;
  physical_format?: InputMaybe<Order_By>;
  physical_information?: InputMaybe<Order_By>;
  publisher?: InputMaybe<Publishers_Order_By>;
  publisher_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  reading_format?: InputMaybe<Reading_Formats_Order_By>;
  reading_format_id?: InputMaybe<Order_By>;
  release_date?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  subtitle?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_added?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
  users_read_count?: InputMaybe<Order_By>;
}

/** select columns of table "editions" */
export enum Editions_Select_Column {
  /** column name */
  AlternativeTitles = 'alternative_titles',
  /** column name */
  Asin = 'asin',
  /** column name */
  AudioSeconds = 'audio_seconds',
  /** column name */
  BookId = 'book_id',
  /** column name */
  CachedContributors = 'cached_contributors',
  /** column name */
  CachedImage = 'cached_image',
  /** column name */
  CachedTags = 'cached_tags',
  /** column name */
  Compilation = 'compilation',
  /** column name */
  CountryId = 'country_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedByUserId = 'created_by_user_id',
  /** column name */
  EditionFormat = 'edition_format',
  /** column name */
  EditionInformation = 'edition_information',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  Isbn_10 = 'isbn_10',
  /** column name */
  Isbn_13 = 'isbn_13',
  /** column name */
  LanguageId = 'language_id',
  /** column name */
  ListsCount = 'lists_count',
  /** column name */
  Locked = 'locked',
  /** column name */
  NormalizedAt = 'normalized_at',
  /** column name */
  ObjectType = 'object_type',
  /** column name */
  OriginalBookId = 'original_book_id',
  /** column name */
  Pages = 'pages',
  /** column name */
  PhysicalFormat = 'physical_format',
  /** column name */
  PhysicalInformation = 'physical_information',
  /** column name */
  PublisherId = 'publisher_id',
  /** column name */
  Rating = 'rating',
  /** column name */
  ReadingFormatId = 'reading_format_id',
  /** column name */
  ReleaseDate = 'release_date',
  /** column name */
  ReleaseYear = 'release_year',
  /** column name */
  Score = 'score',
  /** column name */
  Source = 'source',
  /** column name */
  State = 'state',
  /** column name */
  Subtitle = 'subtitle',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserAdded = 'user_added',
  /** column name */
  UsersCount = 'users_count',
  /** column name */
  UsersReadCount = 'users_read_count',
}

/** order by stddev() on columns of table "editions" */
export interface Editions_Stddev_Order_By {
  audio_seconds?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  country_id?: InputMaybe<Order_By>;
  created_by_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  language_id?: InputMaybe<Order_By>;
  lists_count?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  pages?: InputMaybe<Order_By>;
  publisher_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  reading_format_id?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
  users_read_count?: InputMaybe<Order_By>;
}

/** order by stddev_pop() on columns of table "editions" */
export interface Editions_Stddev_Pop_Order_By {
  audio_seconds?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  country_id?: InputMaybe<Order_By>;
  created_by_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  language_id?: InputMaybe<Order_By>;
  lists_count?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  pages?: InputMaybe<Order_By>;
  publisher_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  reading_format_id?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
  users_read_count?: InputMaybe<Order_By>;
}

/** order by stddev_samp() on columns of table "editions" */
export interface Editions_Stddev_Samp_Order_By {
  audio_seconds?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  country_id?: InputMaybe<Order_By>;
  created_by_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  language_id?: InputMaybe<Order_By>;
  lists_count?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  pages?: InputMaybe<Order_By>;
  publisher_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  reading_format_id?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
  users_read_count?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "editions" */
export interface Editions_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Editions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Editions_Stream_Cursor_Value_Input {
  alternative_titles?: InputMaybe<Scalars['json']['input']>;
  asin?: InputMaybe<Scalars['String']['input']>;
  audio_seconds?: InputMaybe<Scalars['Int']['input']>;
  book_id?: InputMaybe<Scalars['Int']['input']>;
  cached_contributors?: InputMaybe<Scalars['json']['input']>;
  cached_image?: InputMaybe<Scalars['jsonb']['input']>;
  cached_tags?: InputMaybe<Scalars['json']['input']>;
  compilation?: InputMaybe<Scalars['Boolean']['input']>;
  country_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  created_by_user_id?: InputMaybe<Scalars['Int']['input']>;
  edition_format?: InputMaybe<Scalars['String']['input']>;
  edition_information?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image_id?: InputMaybe<Scalars['Int']['input']>;
  isbn_10?: InputMaybe<Scalars['String']['input']>;
  isbn_13?: InputMaybe<Scalars['String']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  lists_count?: InputMaybe<Scalars['Int']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  normalized_at?: InputMaybe<Scalars['timestamp']['input']>;
  object_type?: InputMaybe<Scalars['String']['input']>;
  original_book_id?: InputMaybe<Scalars['Int']['input']>;
  pages?: InputMaybe<Scalars['Int']['input']>;
  physical_format?: InputMaybe<Scalars['String']['input']>;
  physical_information?: InputMaybe<Scalars['String']['input']>;
  publisher_id?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['numeric']['input']>;
  reading_format_id?: InputMaybe<Scalars['Int']['input']>;
  release_date?: InputMaybe<Scalars['date']['input']>;
  release_year?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_added?: InputMaybe<Scalars['Boolean']['input']>;
  users_count?: InputMaybe<Scalars['Int']['input']>;
  users_read_count?: InputMaybe<Scalars['Int']['input']>;
}

/** order by sum() on columns of table "editions" */
export interface Editions_Sum_Order_By {
  audio_seconds?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  country_id?: InputMaybe<Order_By>;
  created_by_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  language_id?: InputMaybe<Order_By>;
  lists_count?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  pages?: InputMaybe<Order_By>;
  publisher_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  reading_format_id?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
  users_read_count?: InputMaybe<Order_By>;
}

/** order by var_pop() on columns of table "editions" */
export interface Editions_Var_Pop_Order_By {
  audio_seconds?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  country_id?: InputMaybe<Order_By>;
  created_by_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  language_id?: InputMaybe<Order_By>;
  lists_count?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  pages?: InputMaybe<Order_By>;
  publisher_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  reading_format_id?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
  users_read_count?: InputMaybe<Order_By>;
}

/** order by var_samp() on columns of table "editions" */
export interface Editions_Var_Samp_Order_By {
  audio_seconds?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  country_id?: InputMaybe<Order_By>;
  created_by_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  language_id?: InputMaybe<Order_By>;
  lists_count?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  pages?: InputMaybe<Order_By>;
  publisher_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  reading_format_id?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
  users_read_count?: InputMaybe<Order_By>;
}

/** order by variance() on columns of table "editions" */
export interface Editions_Variance_Order_By {
  audio_seconds?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  country_id?: InputMaybe<Order_By>;
  created_by_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  language_id?: InputMaybe<Order_By>;
  lists_count?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  pages?: InputMaybe<Order_By>;
  publisher_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  reading_format_id?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
  users_read_count?: InputMaybe<Order_By>;
}

/** columns and relationships of "flag_statuses" */
export interface Flag_Statuses {
  __typename?: 'flag_statuses';
  id: Scalars['Int']['output'];
  status: Scalars['String']['output'];
  /** An array relationship */
  user_flags: Array<User_Flags>;
}

/** columns and relationships of "flag_statuses" */
export interface Flag_StatusesUser_FlagsArgs {
  distinct_on?: InputMaybe<Array<User_Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Flags_Order_By>>;
  where?: InputMaybe<User_Flags_Bool_Exp>;
}

/** Boolean expression to filter rows from the table "flag_statuses". All fields are combined with a logical 'AND'. */
export interface Flag_Statuses_Bool_Exp {
  _and?: InputMaybe<Array<Flag_Statuses_Bool_Exp>>;
  _not?: InputMaybe<Flag_Statuses_Bool_Exp>;
  _or?: InputMaybe<Array<Flag_Statuses_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  user_flags?: InputMaybe<User_Flags_Bool_Exp>;
}

/** Ordering options when selecting data from "flag_statuses". */
export interface Flag_Statuses_Order_By {
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  user_flags_aggregate?: InputMaybe<User_Flags_Aggregate_Order_By>;
}

/** select columns of table "flag_statuses" */
export enum Flag_Statuses_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
}

/** Streaming cursor of the table "flag_statuses" */
export interface Flag_Statuses_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Flag_Statuses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Flag_Statuses_Stream_Cursor_Value_Input {
  id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
}

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export interface Float8_Comparison_Exp {
  _eq?: InputMaybe<Scalars['float8']['input']>;
  _gt?: InputMaybe<Scalars['float8']['input']>;
  _gte?: InputMaybe<Scalars['float8']['input']>;
  _in?: InputMaybe<Array<Scalars['float8']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['float8']['input']>;
  _lte?: InputMaybe<Scalars['float8']['input']>;
  _neq?: InputMaybe<Scalars['float8']['input']>;
  _nin?: InputMaybe<Array<Scalars['float8']['input']>>;
}

/** columns and relationships of "followed_lists" */
export interface Followed_Lists {
  __typename?: 'followed_lists';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  /** An object relationship */
  list: Lists;
  list_id: Scalars['Int']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int']['output'];
}

/** order by aggregate values of table "followed_lists" */
export interface Followed_Lists_Aggregate_Order_By {
  avg?: InputMaybe<Followed_Lists_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Followed_Lists_Max_Order_By>;
  min?: InputMaybe<Followed_Lists_Min_Order_By>;
  stddev?: InputMaybe<Followed_Lists_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Followed_Lists_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Followed_Lists_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Followed_Lists_Sum_Order_By>;
  var_pop?: InputMaybe<Followed_Lists_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Followed_Lists_Var_Samp_Order_By>;
  variance?: InputMaybe<Followed_Lists_Variance_Order_By>;
}

/** order by avg() on columns of table "followed_lists" */
export interface Followed_Lists_Avg_Order_By {
  id?: InputMaybe<Order_By>;
  list_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "followed_lists". All fields are combined with a logical 'AND'. */
export interface Followed_Lists_Bool_Exp {
  _and?: InputMaybe<Array<Followed_Lists_Bool_Exp>>;
  _not?: InputMaybe<Followed_Lists_Bool_Exp>;
  _or?: InputMaybe<Array<Followed_Lists_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  list?: InputMaybe<Lists_Bool_Exp>;
  list_id?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
}

/** order by max() on columns of table "followed_lists" */
export interface Followed_Lists_Max_Order_By {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  list_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by min() on columns of table "followed_lists" */
export interface Followed_Lists_Min_Order_By {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  list_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Ordering options when selecting data from "followed_lists". */
export interface Followed_Lists_Order_By {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  list?: InputMaybe<Lists_Order_By>;
  list_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** select columns of table "followed_lists" */
export enum Followed_Lists_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ListId = 'list_id',
  /** column name */
  UserId = 'user_id',
}

/** order by stddev() on columns of table "followed_lists" */
export interface Followed_Lists_Stddev_Order_By {
  id?: InputMaybe<Order_By>;
  list_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by stddev_pop() on columns of table "followed_lists" */
export interface Followed_Lists_Stddev_Pop_Order_By {
  id?: InputMaybe<Order_By>;
  list_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by stddev_samp() on columns of table "followed_lists" */
export interface Followed_Lists_Stddev_Samp_Order_By {
  id?: InputMaybe<Order_By>;
  list_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "followed_lists" */
export interface Followed_Lists_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Followed_Lists_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Followed_Lists_Stream_Cursor_Value_Input {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  list_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
}

/** order by sum() on columns of table "followed_lists" */
export interface Followed_Lists_Sum_Order_By {
  id?: InputMaybe<Order_By>;
  list_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by var_pop() on columns of table "followed_lists" */
export interface Followed_Lists_Var_Pop_Order_By {
  id?: InputMaybe<Order_By>;
  list_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by var_samp() on columns of table "followed_lists" */
export interface Followed_Lists_Var_Samp_Order_By {
  id?: InputMaybe<Order_By>;
  list_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by variance() on columns of table "followed_lists" */
export interface Followed_Lists_Variance_Order_By {
  id?: InputMaybe<Order_By>;
  list_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** columns and relationships of "followed_prompts" */
export interface Followed_Prompts {
  __typename?: 'followed_prompts';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['Int']['output'];
  order: Scalars['Int']['output'];
  /** An object relationship */
  prompt: Prompts;
  prompt_id: Scalars['Int']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int']['output'];
}

/** order by aggregate values of table "followed_prompts" */
export interface Followed_Prompts_Aggregate_Order_By {
  avg?: InputMaybe<Followed_Prompts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Followed_Prompts_Max_Order_By>;
  min?: InputMaybe<Followed_Prompts_Min_Order_By>;
  stddev?: InputMaybe<Followed_Prompts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Followed_Prompts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Followed_Prompts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Followed_Prompts_Sum_Order_By>;
  var_pop?: InputMaybe<Followed_Prompts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Followed_Prompts_Var_Samp_Order_By>;
  variance?: InputMaybe<Followed_Prompts_Variance_Order_By>;
}

/** order by avg() on columns of table "followed_prompts" */
export interface Followed_Prompts_Avg_Order_By {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "followed_prompts". All fields are combined with a logical 'AND'. */
export interface Followed_Prompts_Bool_Exp {
  _and?: InputMaybe<Array<Followed_Prompts_Bool_Exp>>;
  _not?: InputMaybe<Followed_Prompts_Bool_Exp>;
  _or?: InputMaybe<Array<Followed_Prompts_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
  prompt?: InputMaybe<Prompts_Bool_Exp>;
  prompt_id?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
}

/** unique or primary key constraints on table "followed_prompts" */
export enum Followed_Prompts_Constraint {
  /** unique or primary key constraint on columns "id" */
  FollowedPromptsPkey = 'followed_prompts_pkey',
  /** unique or primary key constraint on columns "id" */
  QuestionFeaturesIdKey = 'question_features_id_key',
  /** unique or primary key constraint on columns "user_id", "prompt_id" */
  QuestionFeaturesUserIdQuestionIdKey = 'question_features_userId_questionId_key',
}

/** input type for incrementing numeric columns in table "followed_prompts" */
export interface Followed_Prompts_Inc_Input {
  order?: InputMaybe<Scalars['Int']['input']>;
}

/** input type for inserting data into table "followed_prompts" */
export interface Followed_Prompts_Insert_Input {
  order?: InputMaybe<Scalars['Int']['input']>;
  prompt_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
}

/** order by max() on columns of table "followed_prompts" */
export interface Followed_Prompts_Max_Order_By {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by min() on columns of table "followed_prompts" */
export interface Followed_Prompts_Min_Order_By {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** response of any mutation on the table "followed_prompts" */
export interface Followed_Prompts_Mutation_Response {
  __typename?: 'followed_prompts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Followed_Prompts>;
}

/** on_conflict condition type for table "followed_prompts" */
export interface Followed_Prompts_On_Conflict {
  constraint: Followed_Prompts_Constraint;
  update_columns?: Array<Followed_Prompts_Update_Column>;
  where?: InputMaybe<Followed_Prompts_Bool_Exp>;
}

/** Ordering options when selecting data from "followed_prompts". */
export interface Followed_Prompts_Order_By {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  prompt?: InputMaybe<Prompts_Order_By>;
  prompt_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** primary key columns input for table: followed_prompts */
export interface Followed_Prompts_Pk_Columns_Input {
  id: Scalars['Int']['input'];
}

/** select columns of table "followed_prompts" */
export enum Followed_Prompts_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  PromptId = 'prompt_id',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "followed_prompts" */
export interface Followed_Prompts_Set_Input {
  order?: InputMaybe<Scalars['Int']['input']>;
}

/** order by stddev() on columns of table "followed_prompts" */
export interface Followed_Prompts_Stddev_Order_By {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by stddev_pop() on columns of table "followed_prompts" */
export interface Followed_Prompts_Stddev_Pop_Order_By {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by stddev_samp() on columns of table "followed_prompts" */
export interface Followed_Prompts_Stddev_Samp_Order_By {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "followed_prompts" */
export interface Followed_Prompts_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Followed_Prompts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Followed_Prompts_Stream_Cursor_Value_Input {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  prompt_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
}

/** order by sum() on columns of table "followed_prompts" */
export interface Followed_Prompts_Sum_Order_By {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** update columns of table "followed_prompts" */
export enum Followed_Prompts_Update_Column {
  /** column name */
  Order = 'order',
}

export interface Followed_Prompts_Updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Followed_Prompts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Followed_Prompts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Followed_Prompts_Bool_Exp;
}

/** order by var_pop() on columns of table "followed_prompts" */
export interface Followed_Prompts_Var_Pop_Order_By {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by var_samp() on columns of table "followed_prompts" */
export interface Followed_Prompts_Var_Samp_Order_By {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by variance() on columns of table "followed_prompts" */
export interface Followed_Prompts_Variance_Order_By {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** columns and relationships of "followed_user_books" */
export interface Followed_User_Books {
  __typename?: 'followed_user_books';
  /** An object relationship */
  book?: Maybe<Books>;
  book_id?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  follower_user?: Maybe<Users>;
  follower_user_id?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  user?: Maybe<Users>;
  /** An object relationship */
  user_book?: Maybe<User_Books>;
  user_book_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** aggregated selection of "followed_user_books" */
export interface Followed_User_Books_Aggregate {
  __typename?: 'followed_user_books_aggregate';
  aggregate?: Maybe<Followed_User_Books_Aggregate_Fields>;
  nodes: Array<Followed_User_Books>;
}

/** aggregate fields of "followed_user_books" */
export interface Followed_User_Books_Aggregate_Fields {
  __typename?: 'followed_user_books_aggregate_fields';
  avg?: Maybe<Followed_User_Books_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Followed_User_Books_Max_Fields>;
  min?: Maybe<Followed_User_Books_Min_Fields>;
  stddev?: Maybe<Followed_User_Books_Stddev_Fields>;
  stddev_pop?: Maybe<Followed_User_Books_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Followed_User_Books_Stddev_Samp_Fields>;
  sum?: Maybe<Followed_User_Books_Sum_Fields>;
  var_pop?: Maybe<Followed_User_Books_Var_Pop_Fields>;
  var_samp?: Maybe<Followed_User_Books_Var_Samp_Fields>;
  variance?: Maybe<Followed_User_Books_Variance_Fields>;
}

/** aggregate fields of "followed_user_books" */
export interface Followed_User_Books_Aggregate_FieldsCountArgs {
  columns?: InputMaybe<Array<Followed_User_Books_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
}

/** aggregate avg on columns */
export interface Followed_User_Books_Avg_Fields {
  __typename?: 'followed_user_books_avg_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  follower_user_id?: Maybe<Scalars['Float']['output']>;
  user_book_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** Boolean expression to filter rows from the table "followed_user_books". All fields are combined with a logical 'AND'. */
export interface Followed_User_Books_Bool_Exp {
  _and?: InputMaybe<Array<Followed_User_Books_Bool_Exp>>;
  _not?: InputMaybe<Followed_User_Books_Bool_Exp>;
  _or?: InputMaybe<Array<Followed_User_Books_Bool_Exp>>;
  book?: InputMaybe<Books_Bool_Exp>;
  book_id?: InputMaybe<Int_Comparison_Exp>;
  follower_user?: InputMaybe<Users_Bool_Exp>;
  follower_user_id?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_book?: InputMaybe<User_Books_Bool_Exp>;
  user_book_id?: InputMaybe<Int_Comparison_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
}

/** aggregate max on columns */
export interface Followed_User_Books_Max_Fields {
  __typename?: 'followed_user_books_max_fields';
  book_id?: Maybe<Scalars['Int']['output']>;
  follower_user_id?: Maybe<Scalars['Int']['output']>;
  user_book_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** aggregate min on columns */
export interface Followed_User_Books_Min_Fields {
  __typename?: 'followed_user_books_min_fields';
  book_id?: Maybe<Scalars['Int']['output']>;
  follower_user_id?: Maybe<Scalars['Int']['output']>;
  user_book_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** Ordering options when selecting data from "followed_user_books". */
export interface Followed_User_Books_Order_By {
  book?: InputMaybe<Books_Order_By>;
  book_id?: InputMaybe<Order_By>;
  follower_user?: InputMaybe<Users_Order_By>;
  follower_user_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_book?: InputMaybe<User_Books_Order_By>;
  user_book_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** select columns of table "followed_user_books" */
export enum Followed_User_Books_Select_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  FollowerUserId = 'follower_user_id',
  /** column name */
  UserBookId = 'user_book_id',
  /** column name */
  UserId = 'user_id',
}

/** aggregate stddev on columns */
export interface Followed_User_Books_Stddev_Fields {
  __typename?: 'followed_user_books_stddev_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  follower_user_id?: Maybe<Scalars['Float']['output']>;
  user_book_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** aggregate stddev_pop on columns */
export interface Followed_User_Books_Stddev_Pop_Fields {
  __typename?: 'followed_user_books_stddev_pop_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  follower_user_id?: Maybe<Scalars['Float']['output']>;
  user_book_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** aggregate stddev_samp on columns */
export interface Followed_User_Books_Stddev_Samp_Fields {
  __typename?: 'followed_user_books_stddev_samp_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  follower_user_id?: Maybe<Scalars['Float']['output']>;
  user_book_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** Streaming cursor of the table "followed_user_books" */
export interface Followed_User_Books_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Followed_User_Books_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Followed_User_Books_Stream_Cursor_Value_Input {
  book_id?: InputMaybe<Scalars['Int']['input']>;
  follower_user_id?: InputMaybe<Scalars['Int']['input']>;
  user_book_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
}

/** aggregate sum on columns */
export interface Followed_User_Books_Sum_Fields {
  __typename?: 'followed_user_books_sum_fields';
  book_id?: Maybe<Scalars['Int']['output']>;
  follower_user_id?: Maybe<Scalars['Int']['output']>;
  user_book_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** aggregate var_pop on columns */
export interface Followed_User_Books_Var_Pop_Fields {
  __typename?: 'followed_user_books_var_pop_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  follower_user_id?: Maybe<Scalars['Float']['output']>;
  user_book_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** aggregate var_samp on columns */
export interface Followed_User_Books_Var_Samp_Fields {
  __typename?: 'followed_user_books_var_samp_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  follower_user_id?: Maybe<Scalars['Float']['output']>;
  user_book_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** aggregate variance on columns */
export interface Followed_User_Books_Variance_Fields {
  __typename?: 'followed_user_books_variance_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  follower_user_id?: Maybe<Scalars['Float']['output']>;
  user_book_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** columns and relationships of "followed_users" */
export interface Followed_Users {
  __typename?: 'followed_users';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  followed_user: Users;
  followed_user_id: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int']['output'];
}

/** order by aggregate values of table "followed_users" */
export interface Followed_Users_Aggregate_Order_By {
  avg?: InputMaybe<Followed_Users_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Followed_Users_Max_Order_By>;
  min?: InputMaybe<Followed_Users_Min_Order_By>;
  stddev?: InputMaybe<Followed_Users_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Followed_Users_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Followed_Users_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Followed_Users_Sum_Order_By>;
  var_pop?: InputMaybe<Followed_Users_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Followed_Users_Var_Samp_Order_By>;
  variance?: InputMaybe<Followed_Users_Variance_Order_By>;
}

/** order by avg() on columns of table "followed_users" */
export interface Followed_Users_Avg_Order_By {
  followed_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "followed_users". All fields are combined with a logical 'AND'. */
export interface Followed_Users_Bool_Exp {
  _and?: InputMaybe<Array<Followed_Users_Bool_Exp>>;
  _not?: InputMaybe<Followed_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Followed_Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  followed_user?: InputMaybe<Users_Bool_Exp>;
  followed_user_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
}

/** order by max() on columns of table "followed_users" */
export interface Followed_Users_Max_Order_By {
  created_at?: InputMaybe<Order_By>;
  followed_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by min() on columns of table "followed_users" */
export interface Followed_Users_Min_Order_By {
  created_at?: InputMaybe<Order_By>;
  followed_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** response of any mutation on the table "followed_users" */
export interface Followed_Users_Mutation_Response {
  __typename?: 'followed_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Followed_Users>;
}

/** Ordering options when selecting data from "followed_users". */
export interface Followed_Users_Order_By {
  created_at?: InputMaybe<Order_By>;
  followed_user?: InputMaybe<Users_Order_By>;
  followed_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** select columns of table "followed_users" */
export enum Followed_Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FollowedUserId = 'followed_user_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id',
}

/** order by stddev() on columns of table "followed_users" */
export interface Followed_Users_Stddev_Order_By {
  followed_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by stddev_pop() on columns of table "followed_users" */
export interface Followed_Users_Stddev_Pop_Order_By {
  followed_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by stddev_samp() on columns of table "followed_users" */
export interface Followed_Users_Stddev_Samp_Order_By {
  followed_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "followed_users" */
export interface Followed_Users_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Followed_Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Followed_Users_Stream_Cursor_Value_Input {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  followed_user_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
}

/** order by sum() on columns of table "followed_users" */
export interface Followed_Users_Sum_Order_By {
  followed_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by var_pop() on columns of table "followed_users" */
export interface Followed_Users_Var_Pop_Order_By {
  followed_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by var_samp() on columns of table "followed_users" */
export interface Followed_Users_Var_Samp_Order_By {
  followed_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by variance() on columns of table "followed_users" */
export interface Followed_Users_Variance_Order_By {
  followed_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** columns and relationships of "following_user_books" */
export interface Following_User_Books {
  __typename?: 'following_user_books';
  /** An object relationship */
  book?: Maybe<Books>;
  book_id?: Maybe<Scalars['Int']['output']>;
  followed_user_id?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  following_user?: Maybe<Users>;
  /** An object relationship */
  user?: Maybe<Users>;
  /** An object relationship */
  user_book?: Maybe<User_Books>;
  user_book_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** aggregated selection of "following_user_books" */
export interface Following_User_Books_Aggregate {
  __typename?: 'following_user_books_aggregate';
  aggregate?: Maybe<Following_User_Books_Aggregate_Fields>;
  nodes: Array<Following_User_Books>;
}

/** aggregate fields of "following_user_books" */
export interface Following_User_Books_Aggregate_Fields {
  __typename?: 'following_user_books_aggregate_fields';
  avg?: Maybe<Following_User_Books_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Following_User_Books_Max_Fields>;
  min?: Maybe<Following_User_Books_Min_Fields>;
  stddev?: Maybe<Following_User_Books_Stddev_Fields>;
  stddev_pop?: Maybe<Following_User_Books_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Following_User_Books_Stddev_Samp_Fields>;
  sum?: Maybe<Following_User_Books_Sum_Fields>;
  var_pop?: Maybe<Following_User_Books_Var_Pop_Fields>;
  var_samp?: Maybe<Following_User_Books_Var_Samp_Fields>;
  variance?: Maybe<Following_User_Books_Variance_Fields>;
}

/** aggregate fields of "following_user_books" */
export interface Following_User_Books_Aggregate_FieldsCountArgs {
  columns?: InputMaybe<Array<Following_User_Books_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
}

/** aggregate avg on columns */
export interface Following_User_Books_Avg_Fields {
  __typename?: 'following_user_books_avg_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  followed_user_id?: Maybe<Scalars['Float']['output']>;
  user_book_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** Boolean expression to filter rows from the table "following_user_books". All fields are combined with a logical 'AND'. */
export interface Following_User_Books_Bool_Exp {
  _and?: InputMaybe<Array<Following_User_Books_Bool_Exp>>;
  _not?: InputMaybe<Following_User_Books_Bool_Exp>;
  _or?: InputMaybe<Array<Following_User_Books_Bool_Exp>>;
  book?: InputMaybe<Books_Bool_Exp>;
  book_id?: InputMaybe<Int_Comparison_Exp>;
  followed_user_id?: InputMaybe<Int_Comparison_Exp>;
  following_user?: InputMaybe<Users_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_book?: InputMaybe<User_Books_Bool_Exp>;
  user_book_id?: InputMaybe<Int_Comparison_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
}

/** aggregate max on columns */
export interface Following_User_Books_Max_Fields {
  __typename?: 'following_user_books_max_fields';
  book_id?: Maybe<Scalars['Int']['output']>;
  followed_user_id?: Maybe<Scalars['Int']['output']>;
  user_book_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** aggregate min on columns */
export interface Following_User_Books_Min_Fields {
  __typename?: 'following_user_books_min_fields';
  book_id?: Maybe<Scalars['Int']['output']>;
  followed_user_id?: Maybe<Scalars['Int']['output']>;
  user_book_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** Ordering options when selecting data from "following_user_books". */
export interface Following_User_Books_Order_By {
  book?: InputMaybe<Books_Order_By>;
  book_id?: InputMaybe<Order_By>;
  followed_user_id?: InputMaybe<Order_By>;
  following_user?: InputMaybe<Users_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_book?: InputMaybe<User_Books_Order_By>;
  user_book_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** select columns of table "following_user_books" */
export enum Following_User_Books_Select_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  FollowedUserId = 'followed_user_id',
  /** column name */
  UserBookId = 'user_book_id',
  /** column name */
  UserId = 'user_id',
}

/** aggregate stddev on columns */
export interface Following_User_Books_Stddev_Fields {
  __typename?: 'following_user_books_stddev_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  followed_user_id?: Maybe<Scalars['Float']['output']>;
  user_book_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** aggregate stddev_pop on columns */
export interface Following_User_Books_Stddev_Pop_Fields {
  __typename?: 'following_user_books_stddev_pop_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  followed_user_id?: Maybe<Scalars['Float']['output']>;
  user_book_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** aggregate stddev_samp on columns */
export interface Following_User_Books_Stddev_Samp_Fields {
  __typename?: 'following_user_books_stddev_samp_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  followed_user_id?: Maybe<Scalars['Float']['output']>;
  user_book_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** Streaming cursor of the table "following_user_books" */
export interface Following_User_Books_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Following_User_Books_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Following_User_Books_Stream_Cursor_Value_Input {
  book_id?: InputMaybe<Scalars['Int']['input']>;
  followed_user_id?: InputMaybe<Scalars['Int']['input']>;
  user_book_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
}

/** aggregate sum on columns */
export interface Following_User_Books_Sum_Fields {
  __typename?: 'following_user_books_sum_fields';
  book_id?: Maybe<Scalars['Int']['output']>;
  followed_user_id?: Maybe<Scalars['Int']['output']>;
  user_book_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** aggregate var_pop on columns */
export interface Following_User_Books_Var_Pop_Fields {
  __typename?: 'following_user_books_var_pop_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  followed_user_id?: Maybe<Scalars['Float']['output']>;
  user_book_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** aggregate var_samp on columns */
export interface Following_User_Books_Var_Samp_Fields {
  __typename?: 'following_user_books_var_samp_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  followed_user_id?: Maybe<Scalars['Float']['output']>;
  user_book_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** aggregate variance on columns */
export interface Following_User_Books_Variance_Fields {
  __typename?: 'following_user_books_variance_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  followed_user_id?: Maybe<Scalars['Float']['output']>;
  user_book_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** columns and relationships of "goals" */
export interface Goals {
  __typename?: 'goals';
  archived: Scalars['Boolean']['output'];
  completed_at?: Maybe<Scalars['timestamptz']['output']>;
  conditions: Scalars['jsonb']['output'];
  description?: Maybe<Scalars['String']['output']>;
  end_date: Scalars['date']['output'];
  /** An array relationship */
  followers: Array<Followed_Users>;
  goal: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  metric: Scalars['String']['output'];
  privacy_setting_id?: Maybe<Scalars['Int']['output']>;
  progress: Scalars['numeric']['output'];
  start_date: Scalars['date']['output'];
  state: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int']['output'];
}

/** columns and relationships of "goals" */
export interface GoalsConditionsArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "goals" */
export interface GoalsFollowersArgs {
  distinct_on?: InputMaybe<Array<Followed_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Followed_Users_Order_By>>;
  where?: InputMaybe<Followed_Users_Bool_Exp>;
}

/** order by aggregate values of table "goals" */
export interface Goals_Aggregate_Order_By {
  avg?: InputMaybe<Goals_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Goals_Max_Order_By>;
  min?: InputMaybe<Goals_Min_Order_By>;
  stddev?: InputMaybe<Goals_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Goals_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Goals_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Goals_Sum_Order_By>;
  var_pop?: InputMaybe<Goals_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Goals_Var_Samp_Order_By>;
  variance?: InputMaybe<Goals_Variance_Order_By>;
}

/** order by avg() on columns of table "goals" */
export interface Goals_Avg_Order_By {
  goal?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "goals". All fields are combined with a logical 'AND'. */
export interface Goals_Bool_Exp {
  _and?: InputMaybe<Array<Goals_Bool_Exp>>;
  _not?: InputMaybe<Goals_Bool_Exp>;
  _or?: InputMaybe<Array<Goals_Bool_Exp>>;
  archived?: InputMaybe<Boolean_Comparison_Exp>;
  completed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  conditions?: InputMaybe<Jsonb_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  end_date?: InputMaybe<Date_Comparison_Exp>;
  followers?: InputMaybe<Followed_Users_Bool_Exp>;
  goal?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  metric?: InputMaybe<String_Comparison_Exp>;
  privacy_setting_id?: InputMaybe<Int_Comparison_Exp>;
  progress?: InputMaybe<Numeric_Comparison_Exp>;
  start_date?: InputMaybe<Date_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
}

/** order by max() on columns of table "goals" */
export interface Goals_Max_Order_By {
  completed_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  goal?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metric?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by min() on columns of table "goals" */
export interface Goals_Min_Order_By {
  completed_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  goal?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metric?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** response of any mutation on the table "goals" */
export interface Goals_Mutation_Response {
  __typename?: 'goals_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Goals>;
}

/** Ordering options when selecting data from "goals". */
export interface Goals_Order_By {
  archived?: InputMaybe<Order_By>;
  completed_at?: InputMaybe<Order_By>;
  conditions?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  followers_aggregate?: InputMaybe<Followed_Users_Aggregate_Order_By>;
  goal?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metric?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** select columns of table "goals" */
export enum Goals_Select_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  CompletedAt = 'completed_at',
  /** column name */
  Conditions = 'conditions',
  /** column name */
  Description = 'description',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Goal = 'goal',
  /** column name */
  Id = 'id',
  /** column name */
  Metric = 'metric',
  /** column name */
  PrivacySettingId = 'privacy_setting_id',
  /** column name */
  Progress = 'progress',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  State = 'state',
  /** column name */
  UserId = 'user_id',
}

/** order by stddev() on columns of table "goals" */
export interface Goals_Stddev_Order_By {
  goal?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by stddev_pop() on columns of table "goals" */
export interface Goals_Stddev_Pop_Order_By {
  goal?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by stddev_samp() on columns of table "goals" */
export interface Goals_Stddev_Samp_Order_By {
  goal?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "goals" */
export interface Goals_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Goals_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Goals_Stream_Cursor_Value_Input {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  completed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  conditions?: InputMaybe<Scalars['jsonb']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  end_date?: InputMaybe<Scalars['date']['input']>;
  goal?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  metric?: InputMaybe<Scalars['String']['input']>;
  privacy_setting_id?: InputMaybe<Scalars['Int']['input']>;
  progress?: InputMaybe<Scalars['numeric']['input']>;
  start_date?: InputMaybe<Scalars['date']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
}

/** order by sum() on columns of table "goals" */
export interface Goals_Sum_Order_By {
  goal?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by var_pop() on columns of table "goals" */
export interface Goals_Var_Pop_Order_By {
  goal?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by var_samp() on columns of table "goals" */
export interface Goals_Var_Samp_Order_By {
  goal?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by variance() on columns of table "goals" */
export interface Goals_Variance_Order_By {
  goal?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** columns and relationships of "images" */
export interface Images {
  __typename?: 'images';
  color?: Maybe<Scalars['String']['output']>;
  colors?: Maybe<Scalars['jsonb']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['bigint']['output'];
  imageable_id?: Maybe<Scalars['Int']['output']>;
  imageable_type?: Maybe<Scalars['String']['output']>;
  ratio?: Maybe<Scalars['float8']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
}

/** columns and relationships of "images" */
export interface ImagesColorsArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** order by aggregate values of table "images" */
export interface Images_Aggregate_Order_By {
  avg?: InputMaybe<Images_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Images_Max_Order_By>;
  min?: InputMaybe<Images_Min_Order_By>;
  stddev?: InputMaybe<Images_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Images_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Images_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Images_Sum_Order_By>;
  var_pop?: InputMaybe<Images_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Images_Var_Samp_Order_By>;
  variance?: InputMaybe<Images_Variance_Order_By>;
}

/** order by avg() on columns of table "images" */
export interface Images_Avg_Order_By {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageable_id?: InputMaybe<Order_By>;
  ratio?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "images". All fields are combined with a logical 'AND'. */
export interface Images_Bool_Exp {
  _and?: InputMaybe<Array<Images_Bool_Exp>>;
  _not?: InputMaybe<Images_Bool_Exp>;
  _or?: InputMaybe<Array<Images_Bool_Exp>>;
  color?: InputMaybe<String_Comparison_Exp>;
  colors?: InputMaybe<Jsonb_Comparison_Exp>;
  height?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  imageable_id?: InputMaybe<Int_Comparison_Exp>;
  imageable_type?: InputMaybe<String_Comparison_Exp>;
  ratio?: InputMaybe<Float8_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
  width?: InputMaybe<Int_Comparison_Exp>;
}

/** order by max() on columns of table "images" */
export interface Images_Max_Order_By {
  color?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageable_id?: InputMaybe<Order_By>;
  imageable_type?: InputMaybe<Order_By>;
  ratio?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
}

/** order by min() on columns of table "images" */
export interface Images_Min_Order_By {
  color?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageable_id?: InputMaybe<Order_By>;
  imageable_type?: InputMaybe<Order_By>;
  ratio?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
}

/** Ordering options when selecting data from "images". */
export interface Images_Order_By {
  color?: InputMaybe<Order_By>;
  colors?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageable_id?: InputMaybe<Order_By>;
  imageable_type?: InputMaybe<Order_By>;
  ratio?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
}

/** select columns of table "images" */
export enum Images_Select_Column {
  /** column name */
  Color = 'color',
  /** column name */
  Colors = 'colors',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  ImageableId = 'imageable_id',
  /** column name */
  ImageableType = 'imageable_type',
  /** column name */
  Ratio = 'ratio',
  /** column name */
  Url = 'url',
  /** column name */
  Width = 'width',
}

/** order by stddev() on columns of table "images" */
export interface Images_Stddev_Order_By {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageable_id?: InputMaybe<Order_By>;
  ratio?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
}

/** order by stddev_pop() on columns of table "images" */
export interface Images_Stddev_Pop_Order_By {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageable_id?: InputMaybe<Order_By>;
  ratio?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
}

/** order by stddev_samp() on columns of table "images" */
export interface Images_Stddev_Samp_Order_By {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageable_id?: InputMaybe<Order_By>;
  ratio?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "images" */
export interface Images_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Images_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Images_Stream_Cursor_Value_Input {
  color?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<Scalars['jsonb']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  imageable_id?: InputMaybe<Scalars['Int']['input']>;
  imageable_type?: InputMaybe<Scalars['String']['input']>;
  ratio?: InputMaybe<Scalars['float8']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
}

/** order by sum() on columns of table "images" */
export interface Images_Sum_Order_By {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageable_id?: InputMaybe<Order_By>;
  ratio?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
}

/** order by var_pop() on columns of table "images" */
export interface Images_Var_Pop_Order_By {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageable_id?: InputMaybe<Order_By>;
  ratio?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
}

/** order by var_samp() on columns of table "images" */
export interface Images_Var_Samp_Order_By {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageable_id?: InputMaybe<Order_By>;
  ratio?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
}

/** order by variance() on columns of table "images" */
export interface Images_Variance_Order_By {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageable_id?: InputMaybe<Order_By>;
  ratio?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
}

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export interface Json_Comparison_Exp {
  _eq?: InputMaybe<Scalars['json']['input']>;
  _gt?: InputMaybe<Scalars['json']['input']>;
  _gte?: InputMaybe<Scalars['json']['input']>;
  _in?: InputMaybe<Array<Scalars['json']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['json']['input']>;
  _lte?: InputMaybe<Scalars['json']['input']>;
  _neq?: InputMaybe<Scalars['json']['input']>;
  _nin?: InputMaybe<Array<Scalars['json']['input']>>;
}

export interface Jsonb_Cast_Exp {
  String?: InputMaybe<String_Comparison_Exp>;
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export interface Jsonb_Comparison_Exp {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
}

/** columns and relationships of "languages" */
export interface Languages {
  __typename?: 'languages';
  code2?: Maybe<Scalars['String']['output']>;
  code3?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  language: Scalars['String']['output'];
}

/** Boolean expression to filter rows from the table "languages". All fields are combined with a logical 'AND'. */
export interface Languages_Bool_Exp {
  _and?: InputMaybe<Array<Languages_Bool_Exp>>;
  _not?: InputMaybe<Languages_Bool_Exp>;
  _or?: InputMaybe<Array<Languages_Bool_Exp>>;
  code2?: InputMaybe<String_Comparison_Exp>;
  code3?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  language?: InputMaybe<String_Comparison_Exp>;
}

/** Ordering options when selecting data from "languages". */
export interface Languages_Order_By {
  code2?: InputMaybe<Order_By>;
  code3?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  language?: InputMaybe<Order_By>;
}

/** select columns of table "languages" */
export enum Languages_Select_Column {
  /** column name */
  Code2 = 'code2',
  /** column name */
  Code3 = 'code3',
  /** column name */
  Id = 'id',
  /** column name */
  Language = 'language',
}

/** Streaming cursor of the table "languages" */
export interface Languages_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Languages_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Languages_Stream_Cursor_Value_Input {
  code2?: InputMaybe<Scalars['String']['input']>;
  code3?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "likes" */
export interface Likes {
  __typename?: 'likes';
  /** An object relationship */
  activity?: Maybe<Activities>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  followers: Array<Followed_Users>;
  id: Scalars['Int']['output'];
  likeable_id: Scalars['Int']['output'];
  likeable_type: Scalars['String']['output'];
  /** An object relationship */
  list?: Maybe<Lists>;
  /** An object relationship */
  user: Users;
  /** An object relationship */
  user_book?: Maybe<User_Books>;
  user_id: Scalars['Int']['output'];
}

/** columns and relationships of "likes" */
export interface LikesFollowersArgs {
  distinct_on?: InputMaybe<Array<Followed_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Followed_Users_Order_By>>;
  where?: InputMaybe<Followed_Users_Bool_Exp>;
}

/** order by aggregate values of table "likes" */
export interface Likes_Aggregate_Order_By {
  avg?: InputMaybe<Likes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Likes_Max_Order_By>;
  min?: InputMaybe<Likes_Min_Order_By>;
  stddev?: InputMaybe<Likes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Likes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Likes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Likes_Sum_Order_By>;
  var_pop?: InputMaybe<Likes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Likes_Var_Samp_Order_By>;
  variance?: InputMaybe<Likes_Variance_Order_By>;
}

/** order by avg() on columns of table "likes" */
export interface Likes_Avg_Order_By {
  id?: InputMaybe<Order_By>;
  likeable_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "likes". All fields are combined with a logical 'AND'. */
export interface Likes_Bool_Exp {
  _and?: InputMaybe<Array<Likes_Bool_Exp>>;
  _not?: InputMaybe<Likes_Bool_Exp>;
  _or?: InputMaybe<Array<Likes_Bool_Exp>>;
  activity?: InputMaybe<Activities_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  followers?: InputMaybe<Followed_Users_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  likeable_id?: InputMaybe<Int_Comparison_Exp>;
  likeable_type?: InputMaybe<String_Comparison_Exp>;
  list?: InputMaybe<Lists_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_book?: InputMaybe<User_Books_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
}

/** order by max() on columns of table "likes" */
export interface Likes_Max_Order_By {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likeable_id?: InputMaybe<Order_By>;
  likeable_type?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by min() on columns of table "likes" */
export interface Likes_Min_Order_By {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likeable_id?: InputMaybe<Order_By>;
  likeable_type?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Ordering options when selecting data from "likes". */
export interface Likes_Order_By {
  activity?: InputMaybe<Activities_Order_By>;
  created_at?: InputMaybe<Order_By>;
  followers_aggregate?: InputMaybe<Followed_Users_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  likeable_id?: InputMaybe<Order_By>;
  likeable_type?: InputMaybe<Order_By>;
  list?: InputMaybe<Lists_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_book?: InputMaybe<User_Books_Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** select columns of table "likes" */
export enum Likes_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LikeableId = 'likeable_id',
  /** column name */
  LikeableType = 'likeable_type',
  /** column name */
  UserId = 'user_id',
}

/** order by stddev() on columns of table "likes" */
export interface Likes_Stddev_Order_By {
  id?: InputMaybe<Order_By>;
  likeable_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by stddev_pop() on columns of table "likes" */
export interface Likes_Stddev_Pop_Order_By {
  id?: InputMaybe<Order_By>;
  likeable_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by stddev_samp() on columns of table "likes" */
export interface Likes_Stddev_Samp_Order_By {
  id?: InputMaybe<Order_By>;
  likeable_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "likes" */
export interface Likes_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Likes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Likes_Stream_Cursor_Value_Input {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  likeable_id?: InputMaybe<Scalars['Int']['input']>;
  likeable_type?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
}

/** order by sum() on columns of table "likes" */
export interface Likes_Sum_Order_By {
  id?: InputMaybe<Order_By>;
  likeable_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by var_pop() on columns of table "likes" */
export interface Likes_Var_Pop_Order_By {
  id?: InputMaybe<Order_By>;
  likeable_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by var_samp() on columns of table "likes" */
export interface Likes_Var_Samp_Order_By {
  id?: InputMaybe<Order_By>;
  likeable_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by variance() on columns of table "likes" */
export interface Likes_Variance_Order_By {
  id?: InputMaybe<Order_By>;
  likeable_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** columns and relationships of "list_books" */
export interface List_Books {
  __typename?: 'list_books';
  /** An object relationship */
  book: Books;
  book_id: Scalars['Int']['output'];
  created_at?: Maybe<Scalars['timestamp']['output']>;
  date_added?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  edition?: Maybe<Editions>;
  edition_id?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  imported?: Maybe<Scalars['Boolean']['output']>;
  /** An object relationship */
  list: Lists;
  list_id: Scalars['Int']['output'];
  merged_at?: Maybe<Scalars['timestamp']['output']>;
  original_book_id?: Maybe<Scalars['Int']['output']>;
  original_edition_id?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  user_books: Array<User_Books>;
  /** An aggregate relationship */
  user_books_aggregate: User_Books_Aggregate;
}

/** columns and relationships of "list_books" */
export interface List_BooksUser_BooksArgs {
  distinct_on?: InputMaybe<Array<User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Books_Order_By>>;
  where?: InputMaybe<User_Books_Bool_Exp>;
}

/** columns and relationships of "list_books" */
export interface List_BooksUser_Books_AggregateArgs {
  distinct_on?: InputMaybe<Array<User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Books_Order_By>>;
  where?: InputMaybe<User_Books_Bool_Exp>;
}

/** aggregated selection of "list_books" */
export interface List_Books_Aggregate {
  __typename?: 'list_books_aggregate';
  aggregate?: Maybe<List_Books_Aggregate_Fields>;
  nodes: Array<List_Books>;
}

export interface List_Books_Aggregate_Bool_Exp {
  bool_and?: InputMaybe<List_Books_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<List_Books_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<List_Books_Aggregate_Bool_Exp_Count>;
}

export interface List_Books_Aggregate_Bool_Exp_Bool_And {
  arguments: List_Books_Select_Column_List_Books_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<List_Books_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
}

export interface List_Books_Aggregate_Bool_Exp_Bool_Or {
  arguments: List_Books_Select_Column_List_Books_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<List_Books_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
}

export interface List_Books_Aggregate_Bool_Exp_Count {
  arguments?: InputMaybe<Array<List_Books_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<List_Books_Bool_Exp>;
  predicate: Int_Comparison_Exp;
}

/** aggregate fields of "list_books" */
export interface List_Books_Aggregate_Fields {
  __typename?: 'list_books_aggregate_fields';
  avg?: Maybe<List_Books_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<List_Books_Max_Fields>;
  min?: Maybe<List_Books_Min_Fields>;
  stddev?: Maybe<List_Books_Stddev_Fields>;
  stddev_pop?: Maybe<List_Books_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<List_Books_Stddev_Samp_Fields>;
  sum?: Maybe<List_Books_Sum_Fields>;
  var_pop?: Maybe<List_Books_Var_Pop_Fields>;
  var_samp?: Maybe<List_Books_Var_Samp_Fields>;
  variance?: Maybe<List_Books_Variance_Fields>;
}

/** aggregate fields of "list_books" */
export interface List_Books_Aggregate_FieldsCountArgs {
  columns?: InputMaybe<Array<List_Books_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
}

/** order by aggregate values of table "list_books" */
export interface List_Books_Aggregate_Order_By {
  avg?: InputMaybe<List_Books_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<List_Books_Max_Order_By>;
  min?: InputMaybe<List_Books_Min_Order_By>;
  stddev?: InputMaybe<List_Books_Stddev_Order_By>;
  stddev_pop?: InputMaybe<List_Books_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<List_Books_Stddev_Samp_Order_By>;
  sum?: InputMaybe<List_Books_Sum_Order_By>;
  var_pop?: InputMaybe<List_Books_Var_Pop_Order_By>;
  var_samp?: InputMaybe<List_Books_Var_Samp_Order_By>;
  variance?: InputMaybe<List_Books_Variance_Order_By>;
}

/** aggregate avg on columns */
export interface List_Books_Avg_Fields {
  __typename?: 'list_books_avg_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  edition_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  list_id?: Maybe<Scalars['Float']['output']>;
  original_book_id?: Maybe<Scalars['Float']['output']>;
  original_edition_id?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
}

/** order by avg() on columns of table "list_books" */
export interface List_Books_Avg_Order_By {
  book_id?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  list_id?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  original_edition_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "list_books". All fields are combined with a logical 'AND'. */
export interface List_Books_Bool_Exp {
  _and?: InputMaybe<Array<List_Books_Bool_Exp>>;
  _not?: InputMaybe<List_Books_Bool_Exp>;
  _or?: InputMaybe<Array<List_Books_Bool_Exp>>;
  book?: InputMaybe<Books_Bool_Exp>;
  book_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  date_added?: InputMaybe<Timestamptz_Comparison_Exp>;
  edition?: InputMaybe<Editions_Bool_Exp>;
  edition_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  imported?: InputMaybe<Boolean_Comparison_Exp>;
  list?: InputMaybe<Lists_Bool_Exp>;
  list_id?: InputMaybe<Int_Comparison_Exp>;
  merged_at?: InputMaybe<Timestamp_Comparison_Exp>;
  original_book_id?: InputMaybe<Int_Comparison_Exp>;
  original_edition_id?: InputMaybe<Int_Comparison_Exp>;
  position?: InputMaybe<Int_Comparison_Exp>;
  reason?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_books?: InputMaybe<User_Books_Bool_Exp>;
  user_books_aggregate?: InputMaybe<User_Books_Aggregate_Bool_Exp>;
}

/** input type for incrementing numeric columns in table "list_books" */
export interface List_Books_Inc_Input {
  position?: InputMaybe<Scalars['Int']['input']>;
}

/** aggregate max on columns */
export interface List_Books_Max_Fields {
  __typename?: 'list_books_max_fields';
  book_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  date_added?: Maybe<Scalars['timestamptz']['output']>;
  edition_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  list_id?: Maybe<Scalars['Int']['output']>;
  merged_at?: Maybe<Scalars['timestamp']['output']>;
  original_book_id?: Maybe<Scalars['Int']['output']>;
  original_edition_id?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
}

/** order by max() on columns of table "list_books" */
export interface List_Books_Max_Order_By {
  book_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date_added?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  list_id?: InputMaybe<Order_By>;
  merged_at?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  original_edition_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  reason?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
}

/** aggregate min on columns */
export interface List_Books_Min_Fields {
  __typename?: 'list_books_min_fields';
  book_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  date_added?: Maybe<Scalars['timestamptz']['output']>;
  edition_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  list_id?: Maybe<Scalars['Int']['output']>;
  merged_at?: Maybe<Scalars['timestamp']['output']>;
  original_book_id?: Maybe<Scalars['Int']['output']>;
  original_edition_id?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
}

/** order by min() on columns of table "list_books" */
export interface List_Books_Min_Order_By {
  book_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date_added?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  list_id?: InputMaybe<Order_By>;
  merged_at?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  original_edition_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  reason?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
}

/** response of any mutation on the table "list_books" */
export interface List_Books_Mutation_Response {
  __typename?: 'list_books_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<List_Books>;
}

/** Ordering options when selecting data from "list_books". */
export interface List_Books_Order_By {
  book?: InputMaybe<Books_Order_By>;
  book_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date_added?: InputMaybe<Order_By>;
  edition?: InputMaybe<Editions_Order_By>;
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imported?: InputMaybe<Order_By>;
  list?: InputMaybe<Lists_Order_By>;
  list_id?: InputMaybe<Order_By>;
  merged_at?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  original_edition_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  reason?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_books_aggregate?: InputMaybe<User_Books_Aggregate_Order_By>;
}

/** primary key columns input for table: list_books */
export interface List_Books_Pk_Columns_Input {
  id: Scalars['Int']['input'];
}

/** select columns of table "list_books" */
export enum List_Books_Select_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DateAdded = 'date_added',
  /** column name */
  EditionId = 'edition_id',
  /** column name */
  Id = 'id',
  /** column name */
  Imported = 'imported',
  /** column name */
  ListId = 'list_id',
  /** column name */
  MergedAt = 'merged_at',
  /** column name */
  OriginalBookId = 'original_book_id',
  /** column name */
  OriginalEditionId = 'original_edition_id',
  /** column name */
  Position = 'position',
  /** column name */
  Reason = 'reason',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** select "list_books_aggregate_bool_exp_bool_and_arguments_columns" columns of table "list_books" */
export enum List_Books_Select_Column_List_Books_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Imported = 'imported',
}

/** select "list_books_aggregate_bool_exp_bool_or_arguments_columns" columns of table "list_books" */
export enum List_Books_Select_Column_List_Books_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Imported = 'imported',
}

/** input type for updating data in table "list_books" */
export interface List_Books_Set_Input {
  position?: InputMaybe<Scalars['Int']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
}

/** aggregate stddev on columns */
export interface List_Books_Stddev_Fields {
  __typename?: 'list_books_stddev_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  edition_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  list_id?: Maybe<Scalars['Float']['output']>;
  original_book_id?: Maybe<Scalars['Float']['output']>;
  original_edition_id?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev() on columns of table "list_books" */
export interface List_Books_Stddev_Order_By {
  book_id?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  list_id?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  original_edition_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
}

/** aggregate stddev_pop on columns */
export interface List_Books_Stddev_Pop_Fields {
  __typename?: 'list_books_stddev_pop_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  edition_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  list_id?: Maybe<Scalars['Float']['output']>;
  original_book_id?: Maybe<Scalars['Float']['output']>;
  original_edition_id?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev_pop() on columns of table "list_books" */
export interface List_Books_Stddev_Pop_Order_By {
  book_id?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  list_id?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  original_edition_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
}

/** aggregate stddev_samp on columns */
export interface List_Books_Stddev_Samp_Fields {
  __typename?: 'list_books_stddev_samp_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  edition_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  list_id?: Maybe<Scalars['Float']['output']>;
  original_book_id?: Maybe<Scalars['Float']['output']>;
  original_edition_id?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev_samp() on columns of table "list_books" */
export interface List_Books_Stddev_Samp_Order_By {
  book_id?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  list_id?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  original_edition_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "list_books" */
export interface List_Books_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: List_Books_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface List_Books_Stream_Cursor_Value_Input {
  book_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  date_added?: InputMaybe<Scalars['timestamptz']['input']>;
  edition_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  imported?: InputMaybe<Scalars['Boolean']['input']>;
  list_id?: InputMaybe<Scalars['Int']['input']>;
  merged_at?: InputMaybe<Scalars['timestamp']['input']>;
  original_book_id?: InputMaybe<Scalars['Int']['input']>;
  original_edition_id?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
}

/** aggregate sum on columns */
export interface List_Books_Sum_Fields {
  __typename?: 'list_books_sum_fields';
  book_id?: Maybe<Scalars['Int']['output']>;
  edition_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  list_id?: Maybe<Scalars['Int']['output']>;
  original_book_id?: Maybe<Scalars['Int']['output']>;
  original_edition_id?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
}

/** order by sum() on columns of table "list_books" */
export interface List_Books_Sum_Order_By {
  book_id?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  list_id?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  original_edition_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
}

export interface List_Books_Updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<List_Books_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<List_Books_Set_Input>;
  /** filter the rows which have to be updated */
  where: List_Books_Bool_Exp;
}

/** aggregate var_pop on columns */
export interface List_Books_Var_Pop_Fields {
  __typename?: 'list_books_var_pop_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  edition_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  list_id?: Maybe<Scalars['Float']['output']>;
  original_book_id?: Maybe<Scalars['Float']['output']>;
  original_edition_id?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
}

/** order by var_pop() on columns of table "list_books" */
export interface List_Books_Var_Pop_Order_By {
  book_id?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  list_id?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  original_edition_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
}

/** aggregate var_samp on columns */
export interface List_Books_Var_Samp_Fields {
  __typename?: 'list_books_var_samp_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  edition_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  list_id?: Maybe<Scalars['Float']['output']>;
  original_book_id?: Maybe<Scalars['Float']['output']>;
  original_edition_id?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
}

/** order by var_samp() on columns of table "list_books" */
export interface List_Books_Var_Samp_Order_By {
  book_id?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  list_id?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  original_edition_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
}

/** aggregate variance on columns */
export interface List_Books_Variance_Fields {
  __typename?: 'list_books_variance_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  edition_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  list_id?: Maybe<Scalars['Float']['output']>;
  original_book_id?: Maybe<Scalars['Float']['output']>;
  original_edition_id?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
}

/** order by variance() on columns of table "list_books" */
export interface List_Books_Variance_Order_By {
  book_id?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  list_id?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  original_edition_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
}

/** columns and relationships of "lists" */
export interface Lists {
  __typename?: 'lists';
  books_count: Scalars['Int']['output'];
  created_at?: Maybe<Scalars['timestamp']['output']>;
  default_view: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  featured: Scalars['Boolean']['output'];
  featured_profile: Scalars['Boolean']['output'];
  /** An array relationship */
  followed_lists: Array<Followed_Lists>;
  /** An array relationship */
  followers: Array<Followed_Users>;
  followers_count?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  imported: Scalars['Boolean']['output'];
  /** An array relationship */
  likes: Array<Likes>;
  likes_count: Scalars['Int']['output'];
  /** An array relationship */
  list_books: Array<List_Books>;
  /** An aggregate relationship */
  list_books_aggregate: List_Books_Aggregate;
  name: Scalars['String']['output'];
  object_type: Scalars['String']['output'];
  /** An object relationship */
  privacy_setting: Privacy_Settings;
  privacy_setting_id: Scalars['Int']['output'];
  public: Scalars['Boolean']['output'];
  ranked: Scalars['Boolean']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int']['output'];
}

/** columns and relationships of "lists" */
export interface ListsFollowed_ListsArgs {
  distinct_on?: InputMaybe<Array<Followed_Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Followed_Lists_Order_By>>;
  where?: InputMaybe<Followed_Lists_Bool_Exp>;
}

/** columns and relationships of "lists" */
export interface ListsFollowersArgs {
  distinct_on?: InputMaybe<Array<Followed_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Followed_Users_Order_By>>;
  where?: InputMaybe<Followed_Users_Bool_Exp>;
}

/** columns and relationships of "lists" */
export interface ListsLikesArgs {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
}

/** columns and relationships of "lists" */
export interface ListsList_BooksArgs {
  distinct_on?: InputMaybe<Array<List_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<List_Books_Order_By>>;
  where?: InputMaybe<List_Books_Bool_Exp>;
}

/** columns and relationships of "lists" */
export interface ListsList_Books_AggregateArgs {
  distinct_on?: InputMaybe<Array<List_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<List_Books_Order_By>>;
  where?: InputMaybe<List_Books_Bool_Exp>;
}

/** aggregated selection of "lists" */
export interface Lists_Aggregate {
  __typename?: 'lists_aggregate';
  aggregate?: Maybe<Lists_Aggregate_Fields>;
  nodes: Array<Lists>;
}

export interface Lists_Aggregate_Bool_Exp {
  bool_and?: InputMaybe<Lists_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Lists_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Lists_Aggregate_Bool_Exp_Count>;
}

export interface Lists_Aggregate_Bool_Exp_Bool_And {
  arguments: Lists_Select_Column_Lists_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Lists_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
}

export interface Lists_Aggregate_Bool_Exp_Bool_Or {
  arguments: Lists_Select_Column_Lists_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Lists_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
}

export interface Lists_Aggregate_Bool_Exp_Count {
  arguments?: InputMaybe<Array<Lists_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Lists_Bool_Exp>;
  predicate: Int_Comparison_Exp;
}

/** aggregate fields of "lists" */
export interface Lists_Aggregate_Fields {
  __typename?: 'lists_aggregate_fields';
  avg?: Maybe<Lists_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Lists_Max_Fields>;
  min?: Maybe<Lists_Min_Fields>;
  stddev?: Maybe<Lists_Stddev_Fields>;
  stddev_pop?: Maybe<Lists_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Lists_Stddev_Samp_Fields>;
  sum?: Maybe<Lists_Sum_Fields>;
  var_pop?: Maybe<Lists_Var_Pop_Fields>;
  var_samp?: Maybe<Lists_Var_Samp_Fields>;
  variance?: Maybe<Lists_Variance_Fields>;
}

/** aggregate fields of "lists" */
export interface Lists_Aggregate_FieldsCountArgs {
  columns?: InputMaybe<Array<Lists_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
}

/** order by aggregate values of table "lists" */
export interface Lists_Aggregate_Order_By {
  avg?: InputMaybe<Lists_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Lists_Max_Order_By>;
  min?: InputMaybe<Lists_Min_Order_By>;
  stddev?: InputMaybe<Lists_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Lists_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Lists_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Lists_Sum_Order_By>;
  var_pop?: InputMaybe<Lists_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Lists_Var_Samp_Order_By>;
  variance?: InputMaybe<Lists_Variance_Order_By>;
}

/** aggregate avg on columns */
export interface Lists_Avg_Fields {
  __typename?: 'lists_avg_fields';
  books_count?: Maybe<Scalars['Float']['output']>;
  followers_count?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  likes_count?: Maybe<Scalars['Float']['output']>;
  privacy_setting_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by avg() on columns of table "lists" */
export interface Lists_Avg_Order_By {
  books_count?: InputMaybe<Order_By>;
  followers_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "lists". All fields are combined with a logical 'AND'. */
export interface Lists_Bool_Exp {
  _and?: InputMaybe<Array<Lists_Bool_Exp>>;
  _not?: InputMaybe<Lists_Bool_Exp>;
  _or?: InputMaybe<Array<Lists_Bool_Exp>>;
  books_count?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  default_view?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  featured?: InputMaybe<Boolean_Comparison_Exp>;
  featured_profile?: InputMaybe<Boolean_Comparison_Exp>;
  followed_lists?: InputMaybe<Followed_Lists_Bool_Exp>;
  followers?: InputMaybe<Followed_Users_Bool_Exp>;
  followers_count?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  imported?: InputMaybe<Boolean_Comparison_Exp>;
  likes?: InputMaybe<Likes_Bool_Exp>;
  likes_count?: InputMaybe<Int_Comparison_Exp>;
  list_books?: InputMaybe<List_Books_Bool_Exp>;
  list_books_aggregate?: InputMaybe<List_Books_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  object_type?: InputMaybe<String_Comparison_Exp>;
  privacy_setting?: InputMaybe<Privacy_Settings_Bool_Exp>;
  privacy_setting_id?: InputMaybe<Int_Comparison_Exp>;
  public?: InputMaybe<Boolean_Comparison_Exp>;
  ranked?: InputMaybe<Boolean_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
}

/** aggregate max on columns */
export interface Lists_Max_Fields {
  __typename?: 'lists_max_fields';
  books_count?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  default_view?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  followers_count?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  likes_count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  object_type?: Maybe<Scalars['String']['output']>;
  privacy_setting_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** order by max() on columns of table "lists" */
export interface Lists_Max_Order_By {
  books_count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  default_view?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  followers_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  object_type?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** aggregate min on columns */
export interface Lists_Min_Fields {
  __typename?: 'lists_min_fields';
  books_count?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  default_view?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  followers_count?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  likes_count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  object_type?: Maybe<Scalars['String']['output']>;
  privacy_setting_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** order by min() on columns of table "lists" */
export interface Lists_Min_Order_By {
  books_count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  default_view?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  followers_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  object_type?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Ordering options when selecting data from "lists". */
export interface Lists_Order_By {
  books_count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  default_view?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  featured?: InputMaybe<Order_By>;
  featured_profile?: InputMaybe<Order_By>;
  followed_lists_aggregate?: InputMaybe<Followed_Lists_Aggregate_Order_By>;
  followers_aggregate?: InputMaybe<Followed_Users_Aggregate_Order_By>;
  followers_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imported?: InputMaybe<Order_By>;
  likes_aggregate?: InputMaybe<Likes_Aggregate_Order_By>;
  likes_count?: InputMaybe<Order_By>;
  list_books_aggregate?: InputMaybe<List_Books_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  object_type?: InputMaybe<Order_By>;
  privacy_setting?: InputMaybe<Privacy_Settings_Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  public?: InputMaybe<Order_By>;
  ranked?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** select columns of table "lists" */
export enum Lists_Select_Column {
  /** column name */
  BooksCount = 'books_count',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DefaultView = 'default_view',
  /** column name */
  Description = 'description',
  /** column name */
  Featured = 'featured',
  /** column name */
  FeaturedProfile = 'featured_profile',
  /** column name */
  FollowersCount = 'followers_count',
  /** column name */
  Id = 'id',
  /** column name */
  Imported = 'imported',
  /** column name */
  LikesCount = 'likes_count',
  /** column name */
  Name = 'name',
  /** column name */
  ObjectType = 'object_type',
  /** column name */
  PrivacySettingId = 'privacy_setting_id',
  /** column name */
  Public = 'public',
  /** column name */
  Ranked = 'ranked',
  /** column name */
  Slug = 'slug',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url',
  /** column name */
  UserId = 'user_id',
}

/** select "lists_aggregate_bool_exp_bool_and_arguments_columns" columns of table "lists" */
export enum Lists_Select_Column_Lists_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Featured = 'featured',
  /** column name */
  FeaturedProfile = 'featured_profile',
  /** column name */
  Imported = 'imported',
  /** column name */
  Public = 'public',
  /** column name */
  Ranked = 'ranked',
}

/** select "lists_aggregate_bool_exp_bool_or_arguments_columns" columns of table "lists" */
export enum Lists_Select_Column_Lists_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Featured = 'featured',
  /** column name */
  FeaturedProfile = 'featured_profile',
  /** column name */
  Imported = 'imported',
  /** column name */
  Public = 'public',
  /** column name */
  Ranked = 'ranked',
}

/** aggregate stddev on columns */
export interface Lists_Stddev_Fields {
  __typename?: 'lists_stddev_fields';
  books_count?: Maybe<Scalars['Float']['output']>;
  followers_count?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  likes_count?: Maybe<Scalars['Float']['output']>;
  privacy_setting_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev() on columns of table "lists" */
export interface Lists_Stddev_Order_By {
  books_count?: InputMaybe<Order_By>;
  followers_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** aggregate stddev_pop on columns */
export interface Lists_Stddev_Pop_Fields {
  __typename?: 'lists_stddev_pop_fields';
  books_count?: Maybe<Scalars['Float']['output']>;
  followers_count?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  likes_count?: Maybe<Scalars['Float']['output']>;
  privacy_setting_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev_pop() on columns of table "lists" */
export interface Lists_Stddev_Pop_Order_By {
  books_count?: InputMaybe<Order_By>;
  followers_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** aggregate stddev_samp on columns */
export interface Lists_Stddev_Samp_Fields {
  __typename?: 'lists_stddev_samp_fields';
  books_count?: Maybe<Scalars['Float']['output']>;
  followers_count?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  likes_count?: Maybe<Scalars['Float']['output']>;
  privacy_setting_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev_samp() on columns of table "lists" */
export interface Lists_Stddev_Samp_Order_By {
  books_count?: InputMaybe<Order_By>;
  followers_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "lists" */
export interface Lists_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Lists_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Lists_Stream_Cursor_Value_Input {
  books_count?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  default_view?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  featured_profile?: InputMaybe<Scalars['Boolean']['input']>;
  followers_count?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  imported?: InputMaybe<Scalars['Boolean']['input']>;
  likes_count?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  object_type?: InputMaybe<Scalars['String']['input']>;
  privacy_setting_id?: InputMaybe<Scalars['Int']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  ranked?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
}

/** aggregate sum on columns */
export interface Lists_Sum_Fields {
  __typename?: 'lists_sum_fields';
  books_count?: Maybe<Scalars['Int']['output']>;
  followers_count?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  likes_count?: Maybe<Scalars['Int']['output']>;
  privacy_setting_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** order by sum() on columns of table "lists" */
export interface Lists_Sum_Order_By {
  books_count?: InputMaybe<Order_By>;
  followers_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** aggregate var_pop on columns */
export interface Lists_Var_Pop_Fields {
  __typename?: 'lists_var_pop_fields';
  books_count?: Maybe<Scalars['Float']['output']>;
  followers_count?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  likes_count?: Maybe<Scalars['Float']['output']>;
  privacy_setting_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by var_pop() on columns of table "lists" */
export interface Lists_Var_Pop_Order_By {
  books_count?: InputMaybe<Order_By>;
  followers_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** aggregate var_samp on columns */
export interface Lists_Var_Samp_Fields {
  __typename?: 'lists_var_samp_fields';
  books_count?: Maybe<Scalars['Float']['output']>;
  followers_count?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  likes_count?: Maybe<Scalars['Float']['output']>;
  privacy_setting_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by var_samp() on columns of table "lists" */
export interface Lists_Var_Samp_Order_By {
  books_count?: InputMaybe<Order_By>;
  followers_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** aggregate variance on columns */
export interface Lists_Variance_Fields {
  __typename?: 'lists_variance_fields';
  books_count?: Maybe<Scalars['Float']['output']>;
  followers_count?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  likes_count?: Maybe<Scalars['Float']['output']>;
  privacy_setting_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by variance() on columns of table "lists" */
export interface Lists_Variance_Order_By {
  books_count?: InputMaybe<Order_By>;
  followers_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** mutation root */
export interface Mutation_Root {
  __typename?: 'mutation_root';
  /** book_mapping_normalize */
  book_mapping_normalize?: Maybe<BookMappingIdType>;
  book_normalize?: Maybe<BookIdType>;
  /** collection_import_result_reimport */
  collection_import_result_reimport?: Maybe<CollectionImportResultIdType>;
  /** collection_import_retry */
  collection_import_retry?: Maybe<CollectionImportIdType>;
  /** delete data from the table: "activities" */
  delete_activities?: Maybe<Activities_Mutation_Response>;
  /** delete single row from the table: "activities" */
  delete_activities_by_pk?: Maybe<Activities>;
  /** delete_book_mapping */
  delete_book_mapping?: Maybe<BookMappingIdType>;
  /** delete_followed_list */
  delete_followed_list?: Maybe<DeleteListType>;
  /** delete_followed_prompt */
  delete_followed_prompt?: Maybe<DeleteFollowedPromptType>;
  /** delete data from the table: "followed_prompts" */
  delete_followed_prompts?: Maybe<Followed_Prompts_Mutation_Response>;
  /** delete single row from the table: "followed_prompts" */
  delete_followed_prompts_by_pk?: Maybe<Followed_Prompts>;
  /** delete_followed_user */
  delete_followed_user?: Maybe<FollowedUserType>;
  /** delete data from the table: "followed_users" */
  delete_followed_users?: Maybe<Followed_Users_Mutation_Response>;
  /** delete single row from the table: "followed_users" */
  delete_followed_users_by_pk?: Maybe<Followed_Users>;
  /** delete data from the table: "goals" */
  delete_goals?: Maybe<Goals_Mutation_Response>;
  /** delete single row from the table: "goals" */
  delete_goals_by_pk?: Maybe<Goals>;
  /** delete_like */
  delete_like?: Maybe<LikeDeleteType>;
  /** delete_list */
  delete_list?: Maybe<ListDeleteType>;
  /** delete_list_book */
  delete_list_book?: Maybe<ListBookDeleteType>;
  /** delete_prompt_answer */
  delete_prompt_answer?: Maybe<PromptAnswerIdType>;
  /** delete data from the table: "prompts" */
  delete_prompts?: Maybe<Prompts_Mutation_Response>;
  /** delete single row from the table: "prompts" */
  delete_prompts_by_pk?: Maybe<Prompts>;
  /** delete_reading_journal */
  delete_reading_journal?: Maybe<DeleteReadingJournalOutput>;
  /** delete_reading_journals_for_book */
  delete_reading_journals_for_book?: Maybe<DeleteReadingJournalsOutput>;
  /** delete data from the table: "user_blocks" */
  delete_user_blocks?: Maybe<User_Blocks_Mutation_Response>;
  /** delete single row from the table: "user_blocks" */
  delete_user_blocks_by_pk?: Maybe<User_Blocks>;
  delete_user_book?: Maybe<UserBookDeleteType>;
  /** delete_user_book_read */
  delete_user_book_read?: Maybe<UserBookReadIdType>;
  /** edition_normalize */
  edition_normalize?: Maybe<EditionIdType>;
  /** edition_owned */
  edition_owned?: Maybe<ListBookIdType>;
  /** email_user_delete_confirmation */
  email_user_delete_confirmation?: Maybe<SuccessType>;
  /** insert_author */
  insert_author?: Maybe<AuthorIdType>;
  /** insert_block */
  insert_block?: Maybe<InsertBlockOutput>;
  /** insert_book */
  insert_book?: Maybe<OptionalEditionIdType>;
  /** insert_book_mapping */
  insert_book_mapping?: Maybe<BookMappingIdType>;
  /** insert_character */
  insert_character?: Maybe<CharacterIdType>;
  /** insert_collection_import */
  insert_collection_import?: Maybe<CollectionImportIdType>;
  /** insert_edition */
  insert_edition?: Maybe<EditionIdType>;
  /** insert data into the table: "followed_prompts" */
  insert_followed_prompts?: Maybe<Followed_Prompts_Mutation_Response>;
  /** insert a single row into the table: "followed_prompts" */
  insert_followed_prompts_one?: Maybe<Followed_Prompts>;
  /** insert_followed_user */
  insert_followed_user?: Maybe<FollowedUserType>;
  /** insert_goal */
  insert_goal?: Maybe<GoalIdType>;
  /** insert_image */
  insert_image?: Maybe<ImageIdType>;
  /** insert_list */
  insert_list?: Maybe<ListIdType>;
  /** insert_list_book */
  insert_list_book?: Maybe<ListBookIdType>;
  /** insert data into the table: "notification_settings" */
  insert_notification_settings?: Maybe<Notification_Settings_Mutation_Response>;
  /** insert a single row into the table: "notification_settings" */
  insert_notification_settings_one?: Maybe<Notification_Settings>;
  /** insert_prompt */
  insert_prompt?: Maybe<PromptIdType>;
  /** insert_prompt_answer */
  insert_prompt_answer?: Maybe<PromptAnswerIdType>;
  /** insert_publisher */
  insert_publisher?: Maybe<PublisherIdType>;
  /** insert_reading_journal */
  insert_reading_journal?: Maybe<ReadingJournalOutput>;
  /** insert_report */
  insert_report?: Maybe<ReportOutput>;
  /** insert_series */
  insert_serie?: Maybe<SeriesIdType>;
  /** insert_user */
  insert_user?: Maybe<UserIdType>;
  /** insert data into the table: "user_blocks" */
  insert_user_blocks?: Maybe<User_Blocks_Mutation_Response>;
  /** insert a single row into the table: "user_blocks" */
  insert_user_blocks_one?: Maybe<User_Blocks>;
  /** insert_user_book */
  insert_user_book?: Maybe<UserBookIdType>;
  insert_user_book_read?: Maybe<UserBookReadIdType>;
  /** insert data into the table: "user_flags" */
  insert_user_flags?: Maybe<User_Flags_Mutation_Response>;
  /** insert a single row into the table: "user_flags" */
  insert_user_flags_one?: Maybe<User_Flags>;
  /** validate_receipt */
  receipt_validate?: Maybe<ValidateReceiptType>;
  /** update_author */
  update_author?: Maybe<AuthorIdType>;
  /** update_book */
  update_book?: Maybe<BookIdType>;
  /** update_character */
  update_character?: Maybe<CharacterIdType>;
  /** update data of the table: "collection_import_results" */
  update_collection_import_results?: Maybe<Collection_Import_Results_Mutation_Response>;
  /** update single row of the table: "collection_import_results" */
  update_collection_import_results_by_pk?: Maybe<Collection_Import_Results>;
  /** update multiples rows of table: "collection_import_results" */
  update_collection_import_results_many?: Maybe<Array<Maybe<Collection_Import_Results_Mutation_Response>>>;
  /** update_edition */
  update_edition?: Maybe<EditionIdType>;
  /** update data of the table: "followed_prompts" */
  update_followed_prompts?: Maybe<Followed_Prompts_Mutation_Response>;
  /** update single row of the table: "followed_prompts" */
  update_followed_prompts_by_pk?: Maybe<Followed_Prompts>;
  /** update multiples rows of table: "followed_prompts" */
  update_followed_prompts_many?: Maybe<Array<Maybe<Followed_Prompts_Mutation_Response>>>;
  /** update_goal */
  update_goal?: Maybe<GoalIdType>;
  /** update_goal_progress */
  update_goal_progress?: Maybe<GoalIdType>;
  /** update_list */
  update_list?: Maybe<ListIdType>;
  /** update data of the table: "list_books" */
  update_list_books?: Maybe<List_Books_Mutation_Response>;
  /** update single row of the table: "list_books" */
  update_list_books_by_pk?: Maybe<List_Books>;
  /** update multiples rows of table: "list_books" */
  update_list_books_many?: Maybe<Array<Maybe<List_Books_Mutation_Response>>>;
  /** update_newsletter */
  update_newsletter?: Maybe<NewsletterStatusType>;
  /** update data of the table: "notification_deliveries" */
  update_notification_deliveries?: Maybe<Notification_Deliveries_Mutation_Response>;
  /** update single row of the table: "notification_deliveries" */
  update_notification_deliveries_by_pk?: Maybe<Notification_Deliveries>;
  /** update multiples rows of table: "notification_deliveries" */
  update_notification_deliveries_many?: Maybe<Array<Maybe<Notification_Deliveries_Mutation_Response>>>;
  /** update data of the table: "notification_settings" */
  update_notification_settings?: Maybe<Notification_Settings_Mutation_Response>;
  /** update single row of the table: "notification_settings" */
  update_notification_settings_by_pk?: Maybe<Notification_Settings>;
  /** update multiples rows of table: "notification_settings" */
  update_notification_settings_many?: Maybe<Array<Maybe<Notification_Settings_Mutation_Response>>>;
  /** update_prompt */
  update_prompt?: Maybe<PromptIdType>;
  /** update data of the table: "prompt_answers" */
  update_prompt_answers?: Maybe<Prompt_Answers_Mutation_Response>;
  /** update single row of the table: "prompt_answers" */
  update_prompt_answers_by_pk?: Maybe<Prompt_Answers>;
  /** update multiples rows of table: "prompt_answers" */
  update_prompt_answers_many?: Maybe<Array<Maybe<Prompt_Answers_Mutation_Response>>>;
  /** update_publisher */
  update_publisher?: Maybe<PublisherIdType>;
  /** update_reading_journal */
  update_reading_journal?: Maybe<ReadingJournalOutput>;
  /** update_serie */
  update_serie?: Maybe<SeriesIdType>;
  /** update_user */
  update_user?: Maybe<UserIdType>;
  /** update_user_book */
  update_user_book?: Maybe<UserBookIdType>;
  /** update_user_book_read */
  update_user_book_read?: Maybe<UserBookReadIdType>;
  /** update_user_privacy_setting */
  update_user_privacy_setting?: Maybe<UserIdType>;
  /** upsert_book */
  upsert_book?: Maybe<NewBookIdType>;
  /** upsert_followed_list */
  upsert_followed_list?: Maybe<FollowedListType>;
  /** upsert_followed_prompt */
  upsert_followed_prompt?: Maybe<FollowedPromptType>;
  /** upsert_like */
  upsert_like?: Maybe<LikeType>;
  /** upsert_tags */
  upsert_tags?: Maybe<TagsType>;
  /** upsert_user_book_read */
  upsert_user_book_reads?: Maybe<UserBooksReadUpsertType>;
  /** user_login */
  user_login?: Maybe<UserIdType>;
}

/** mutation root */
export interface Mutation_RootBook_Mapping_NormalizeArgs {
  deep: Scalars['Boolean']['input'];
  id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootBook_NormalizeArgs {
  deep?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootCollection_Import_Result_ReimportArgs {
  id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootCollection_Import_RetryArgs {
  id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootDelete_ActivitiesArgs {
  where: Activities_Bool_Exp;
}

/** mutation root */
export interface Mutation_RootDelete_Activities_By_PkArgs {
  id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootDelete_Book_MappingArgs {
  id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootDelete_Followed_ListArgs {
  list_id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootDelete_Followed_PromptArgs {
  prompt_id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootDelete_Followed_PromptsArgs {
  where: Followed_Prompts_Bool_Exp;
}

/** mutation root */
export interface Mutation_RootDelete_Followed_Prompts_By_PkArgs {
  id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootDelete_Followed_UserArgs {
  user_id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootDelete_Followed_UsersArgs {
  where: Followed_Users_Bool_Exp;
}

/** mutation root */
export interface Mutation_RootDelete_Followed_Users_By_PkArgs {
  id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootDelete_GoalsArgs {
  where: Goals_Bool_Exp;
}

/** mutation root */
export interface Mutation_RootDelete_Goals_By_PkArgs {
  id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootDelete_LikeArgs {
  likeable_id: Scalars['Int']['input'];
  likeable_type: Scalars['String']['input'];
}

/** mutation root */
export interface Mutation_RootDelete_ListArgs {
  id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootDelete_List_BookArgs {
  id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootDelete_Prompt_AnswerArgs {
  id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootDelete_PromptsArgs {
  where: Prompts_Bool_Exp;
}

/** mutation root */
export interface Mutation_RootDelete_Prompts_By_PkArgs {
  id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootDelete_Reading_JournalArgs {
  id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootDelete_Reading_Journals_For_BookArgs {
  book_id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootDelete_User_BlocksArgs {
  where: User_Blocks_Bool_Exp;
}

/** mutation root */
export interface Mutation_RootDelete_User_Blocks_By_PkArgs {
  id: Scalars['bigint']['input'];
}

/** mutation root */
export interface Mutation_RootDelete_User_BookArgs {
  id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootDelete_User_Book_ReadArgs {
  id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootEdition_NormalizeArgs {
  deep: Scalars['Boolean']['input'];
  id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootEdition_OwnedArgs {
  id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootInsert_AuthorArgs {
  object: AuthorInputType;
}

/** mutation root */
export interface Mutation_RootInsert_BlockArgs {
  blocked_user_id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootInsert_BookArgs {
  edition: EditionInput;
}

/** mutation root */
export interface Mutation_RootInsert_Book_MappingArgs {
  object: BookMappingInput;
}

/** mutation root */
export interface Mutation_RootInsert_CharacterArgs {
  character: CharacterInput;
}

/** mutation root */
export interface Mutation_RootInsert_Collection_ImportArgs {
  object: CollectionImportInput;
}

/** mutation root */
export interface Mutation_RootInsert_EditionArgs {
  book_id: Scalars['Int']['input'];
  edition: EditionInput;
}

/** mutation root */
export interface Mutation_RootInsert_Followed_PromptsArgs {
  objects: Array<Followed_Prompts_Insert_Input>;
  on_conflict?: InputMaybe<Followed_Prompts_On_Conflict>;
}

/** mutation root */
export interface Mutation_RootInsert_Followed_Prompts_OneArgs {
  object: Followed_Prompts_Insert_Input;
  on_conflict?: InputMaybe<Followed_Prompts_On_Conflict>;
}

/** mutation root */
export interface Mutation_RootInsert_Followed_UserArgs {
  user_id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootInsert_GoalArgs {
  object: GoalInput;
}

/** mutation root */
export interface Mutation_RootInsert_ImageArgs {
  image: ImageInput;
}

/** mutation root */
export interface Mutation_RootInsert_ListArgs {
  object: ListInput;
}

/** mutation root */
export interface Mutation_RootInsert_List_BookArgs {
  object: ListBookInput;
}

/** mutation root */
export interface Mutation_RootInsert_Notification_SettingsArgs {
  objects: Array<Notification_Settings_Insert_Input>;
  on_conflict?: InputMaybe<Notification_Settings_On_Conflict>;
}

/** mutation root */
export interface Mutation_RootInsert_Notification_Settings_OneArgs {
  object: Notification_Settings_Insert_Input;
  on_conflict?: InputMaybe<Notification_Settings_On_Conflict>;
}

/** mutation root */
export interface Mutation_RootInsert_PromptArgs {
  object: CreatePromptInput;
}

/** mutation root */
export interface Mutation_RootInsert_Prompt_AnswerArgs {
  object: PromptAnswerCreateInput;
}

/** mutation root */
export interface Mutation_RootInsert_PublisherArgs {
  publisher: PublisherInputType;
}

/** mutation root */
export interface Mutation_RootInsert_Reading_JournalArgs {
  object: ReadingJournalCreateType;
}

/** mutation root */
export interface Mutation_RootInsert_ReportArgs {
  report: ReportInput;
}

/** mutation root */
export interface Mutation_RootInsert_SerieArgs {
  object: SeriesInput;
}

/** mutation root */
export interface Mutation_RootInsert_UserArgs {
  user: UserJoinInput;
}

/** mutation root */
export interface Mutation_RootInsert_User_BlocksArgs {
  objects: Array<User_Blocks_Insert_Input>;
  on_conflict?: InputMaybe<User_Blocks_On_Conflict>;
}

/** mutation root */
export interface Mutation_RootInsert_User_Blocks_OneArgs {
  object: User_Blocks_Insert_Input;
  on_conflict?: InputMaybe<User_Blocks_On_Conflict>;
}

/** mutation root */
export interface Mutation_RootInsert_User_BookArgs {
  object: UserBookCreateInput;
}

/** mutation root */
export interface Mutation_RootInsert_User_Book_ReadArgs {
  user_book_id: Scalars['Int']['input'];
  user_book_read: DatesReadInput;
}

/** mutation root */
export interface Mutation_RootInsert_User_FlagsArgs {
  objects: Array<User_Flags_Insert_Input>;
  on_conflict?: InputMaybe<User_Flags_On_Conflict>;
}

/** mutation root */
export interface Mutation_RootInsert_User_Flags_OneArgs {
  object: User_Flags_Insert_Input;
  on_conflict?: InputMaybe<User_Flags_On_Conflict>;
}

/** mutation root */
export interface Mutation_RootReceipt_ValidateArgs {
  payment_system_id: Scalars['Int']['input'];
  receipt: Scalars['String']['input'];
}

/** mutation root */
export interface Mutation_RootUpdate_AuthorArgs {
  author: AuthorInputType;
  id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootUpdate_BookArgs {
  book: BookInput;
  id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootUpdate_CharacterArgs {
  character: CharacterInput;
  id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootUpdate_Collection_Import_ResultsArgs {
  _inc?: InputMaybe<Collection_Import_Results_Inc_Input>;
  _set?: InputMaybe<Collection_Import_Results_Set_Input>;
  where: Collection_Import_Results_Bool_Exp;
}

/** mutation root */
export interface Mutation_RootUpdate_Collection_Import_Results_By_PkArgs {
  _inc?: InputMaybe<Collection_Import_Results_Inc_Input>;
  _set?: InputMaybe<Collection_Import_Results_Set_Input>;
  pk_columns: Collection_Import_Results_Pk_Columns_Input;
}

/** mutation root */
export interface Mutation_RootUpdate_Collection_Import_Results_ManyArgs {
  updates: Array<Collection_Import_Results_Updates>;
}

/** mutation root */
export interface Mutation_RootUpdate_EditionArgs {
  edition: EditionInput;
  id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootUpdate_Followed_PromptsArgs {
  _inc?: InputMaybe<Followed_Prompts_Inc_Input>;
  _set?: InputMaybe<Followed_Prompts_Set_Input>;
  where: Followed_Prompts_Bool_Exp;
}

/** mutation root */
export interface Mutation_RootUpdate_Followed_Prompts_By_PkArgs {
  _inc?: InputMaybe<Followed_Prompts_Inc_Input>;
  _set?: InputMaybe<Followed_Prompts_Set_Input>;
  pk_columns: Followed_Prompts_Pk_Columns_Input;
}

/** mutation root */
export interface Mutation_RootUpdate_Followed_Prompts_ManyArgs {
  updates: Array<Followed_Prompts_Updates>;
}

/** mutation root */
export interface Mutation_RootUpdate_GoalArgs {
  id: Scalars['Int']['input'];
  object: GoalInput;
}

/** mutation root */
export interface Mutation_RootUpdate_Goal_ProgressArgs {
  id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootUpdate_ListArgs {
  id: Scalars['Int']['input'];
  object: ListInput;
}

/** mutation root */
export interface Mutation_RootUpdate_List_BooksArgs {
  _inc?: InputMaybe<List_Books_Inc_Input>;
  _set?: InputMaybe<List_Books_Set_Input>;
  where: List_Books_Bool_Exp;
}

/** mutation root */
export interface Mutation_RootUpdate_List_Books_By_PkArgs {
  _inc?: InputMaybe<List_Books_Inc_Input>;
  _set?: InputMaybe<List_Books_Set_Input>;
  pk_columns: List_Books_Pk_Columns_Input;
}

/** mutation root */
export interface Mutation_RootUpdate_List_Books_ManyArgs {
  updates: Array<List_Books_Updates>;
}

/** mutation root */
export interface Mutation_RootUpdate_NewsletterArgs {
  subscribed: Scalars['Boolean']['input'];
}

/** mutation root */
export interface Mutation_RootUpdate_Notification_DeliveriesArgs {
  _set?: InputMaybe<Notification_Deliveries_Set_Input>;
  where: Notification_Deliveries_Bool_Exp;
}

/** mutation root */
export interface Mutation_RootUpdate_Notification_Deliveries_By_PkArgs {
  _set?: InputMaybe<Notification_Deliveries_Set_Input>;
  pk_columns: Notification_Deliveries_Pk_Columns_Input;
}

/** mutation root */
export interface Mutation_RootUpdate_Notification_Deliveries_ManyArgs {
  updates: Array<Notification_Deliveries_Updates>;
}

/** mutation root */
export interface Mutation_RootUpdate_Notification_SettingsArgs {
  _set?: InputMaybe<Notification_Settings_Set_Input>;
  where: Notification_Settings_Bool_Exp;
}

/** mutation root */
export interface Mutation_RootUpdate_Notification_Settings_By_PkArgs {
  _set?: InputMaybe<Notification_Settings_Set_Input>;
  pk_columns: Notification_Settings_Pk_Columns_Input;
}

/** mutation root */
export interface Mutation_RootUpdate_Notification_Settings_ManyArgs {
  updates: Array<Notification_Settings_Updates>;
}

/** mutation root */
export interface Mutation_RootUpdate_PromptArgs {
  object: UpdatePromptInput;
}

/** mutation root */
export interface Mutation_RootUpdate_Prompt_AnswersArgs {
  _set?: InputMaybe<Prompt_Answers_Set_Input>;
  where: Prompt_Answers_Bool_Exp;
}

/** mutation root */
export interface Mutation_RootUpdate_Prompt_Answers_By_PkArgs {
  _set?: InputMaybe<Prompt_Answers_Set_Input>;
  pk_columns: Prompt_Answers_Pk_Columns_Input;
}

/** mutation root */
export interface Mutation_RootUpdate_Prompt_Answers_ManyArgs {
  updates: Array<Prompt_Answers_Updates>;
}

/** mutation root */
export interface Mutation_RootUpdate_PublisherArgs {
  id: Scalars['Int']['input'];
  publisher: PublisherInputType;
}

/** mutation root */
export interface Mutation_RootUpdate_Reading_JournalArgs {
  id: Scalars['Int']['input'];
  object: ReadingJournalUpdateType;
}

/** mutation root */
export interface Mutation_RootUpdate_SerieArgs {
  id: Scalars['Int']['input'];
  series: SeriesInputType;
}

/** mutation root */
export interface Mutation_RootUpdate_UserArgs {
  user: Update_User_Input;
}

/** mutation root */
export interface Mutation_RootUpdate_User_BookArgs {
  id: Scalars['Int']['input'];
  object: UserBookUpdateInput;
}

/** mutation root */
export interface Mutation_RootUpdate_User_Book_ReadArgs {
  id: Scalars['Int']['input'];
  object: DatesReadInput;
}

/** mutation root */
export interface Mutation_RootUpdate_User_Privacy_SettingArgs {
  privacy_setting_id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootUpsert_BookArgs {
  book: CreateBookFromPlatformInput;
}

/** mutation root */
export interface Mutation_RootUpsert_Followed_ListArgs {
  list_id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootUpsert_Followed_PromptArgs {
  prompt_id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootUpsert_LikeArgs {
  likeable_id: Scalars['Int']['input'];
  likeable_type?: InputMaybe<Scalars['String']['input']>;
}

/** mutation root */
export interface Mutation_RootUpsert_TagsArgs {
  id: Scalars['bigint']['input'];
  tags: Array<InputMaybe<BasicTag>>;
  type: Scalars['String']['input'];
}

/** mutation root */
export interface Mutation_RootUpsert_User_Book_ReadsArgs {
  datesRead: Array<InputMaybe<DatesReadInput>>;
  user_book_id: Scalars['Int']['input'];
}

/** mutation root */
export interface Mutation_RootUser_LoginArgs {
  user: UserLoginInput;
}

/** columns and relationships of "notification_channels" */
export interface Notification_Channels {
  __typename?: 'notification_channels';
  channel: Scalars['String']['output'];
  id: Scalars['bigint']['output'];
}

/** Boolean expression to filter rows from the table "notification_channels". All fields are combined with a logical 'AND'. */
export interface Notification_Channels_Bool_Exp {
  _and?: InputMaybe<Array<Notification_Channels_Bool_Exp>>;
  _not?: InputMaybe<Notification_Channels_Bool_Exp>;
  _or?: InputMaybe<Array<Notification_Channels_Bool_Exp>>;
  channel?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
}

/** Ordering options when selecting data from "notification_channels". */
export interface Notification_Channels_Order_By {
  channel?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
}

/** select columns of table "notification_channels" */
export enum Notification_Channels_Select_Column {
  /** column name */
  Channel = 'channel',
  /** column name */
  Id = 'id',
}

/** Streaming cursor of the table "notification_channels" */
export interface Notification_Channels_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Notification_Channels_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Notification_Channels_Stream_Cursor_Value_Input {
  channel?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
}

/** columns and relationships of "notification_deliveries" */
export interface Notification_Deliveries {
  __typename?: 'notification_deliveries';
  /** An object relationship */
  channel?: Maybe<Notification_Channels>;
  channel_id: Scalars['Int']['output'];
  id: Scalars['bigint']['output'];
  /** An object relationship */
  notification?: Maybe<Notifications>;
  notification_id: Scalars['Int']['output'];
  read: Scalars['Boolean']['output'];
  read_at?: Maybe<Scalars['timestamp']['output']>;
  sent_at?: Maybe<Scalars['timestamp']['output']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id: Scalars['Int']['output'];
}

/** aggregated selection of "notification_deliveries" */
export interface Notification_Deliveries_Aggregate {
  __typename?: 'notification_deliveries_aggregate';
  aggregate?: Maybe<Notification_Deliveries_Aggregate_Fields>;
  nodes: Array<Notification_Deliveries>;
}

export interface Notification_Deliveries_Aggregate_Bool_Exp {
  bool_and?: InputMaybe<Notification_Deliveries_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Notification_Deliveries_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Notification_Deliveries_Aggregate_Bool_Exp_Count>;
}

export interface Notification_Deliveries_Aggregate_Bool_Exp_Bool_And {
  arguments: Notification_Deliveries_Select_Column_Notification_Deliveries_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Notification_Deliveries_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
}

export interface Notification_Deliveries_Aggregate_Bool_Exp_Bool_Or {
  arguments: Notification_Deliveries_Select_Column_Notification_Deliveries_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Notification_Deliveries_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
}

export interface Notification_Deliveries_Aggregate_Bool_Exp_Count {
  arguments?: InputMaybe<Array<Notification_Deliveries_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Notification_Deliveries_Bool_Exp>;
  predicate: Int_Comparison_Exp;
}

/** aggregate fields of "notification_deliveries" */
export interface Notification_Deliveries_Aggregate_Fields {
  __typename?: 'notification_deliveries_aggregate_fields';
  avg?: Maybe<Notification_Deliveries_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Notification_Deliveries_Max_Fields>;
  min?: Maybe<Notification_Deliveries_Min_Fields>;
  stddev?: Maybe<Notification_Deliveries_Stddev_Fields>;
  stddev_pop?: Maybe<Notification_Deliveries_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Notification_Deliveries_Stddev_Samp_Fields>;
  sum?: Maybe<Notification_Deliveries_Sum_Fields>;
  var_pop?: Maybe<Notification_Deliveries_Var_Pop_Fields>;
  var_samp?: Maybe<Notification_Deliveries_Var_Samp_Fields>;
  variance?: Maybe<Notification_Deliveries_Variance_Fields>;
}

/** aggregate fields of "notification_deliveries" */
export interface Notification_Deliveries_Aggregate_FieldsCountArgs {
  columns?: InputMaybe<Array<Notification_Deliveries_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
}

/** order by aggregate values of table "notification_deliveries" */
export interface Notification_Deliveries_Aggregate_Order_By {
  avg?: InputMaybe<Notification_Deliveries_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Notification_Deliveries_Max_Order_By>;
  min?: InputMaybe<Notification_Deliveries_Min_Order_By>;
  stddev?: InputMaybe<Notification_Deliveries_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Notification_Deliveries_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Notification_Deliveries_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Notification_Deliveries_Sum_Order_By>;
  var_pop?: InputMaybe<Notification_Deliveries_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Notification_Deliveries_Var_Samp_Order_By>;
  variance?: InputMaybe<Notification_Deliveries_Variance_Order_By>;
}

/** aggregate avg on columns */
export interface Notification_Deliveries_Avg_Fields {
  __typename?: 'notification_deliveries_avg_fields';
  channel_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  notification_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by avg() on columns of table "notification_deliveries" */
export interface Notification_Deliveries_Avg_Order_By {
  channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notification_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "notification_deliveries". All fields are combined with a logical 'AND'. */
export interface Notification_Deliveries_Bool_Exp {
  _and?: InputMaybe<Array<Notification_Deliveries_Bool_Exp>>;
  _not?: InputMaybe<Notification_Deliveries_Bool_Exp>;
  _or?: InputMaybe<Array<Notification_Deliveries_Bool_Exp>>;
  channel?: InputMaybe<Notification_Channels_Bool_Exp>;
  channel_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  notification?: InputMaybe<Notifications_Bool_Exp>;
  notification_id?: InputMaybe<Int_Comparison_Exp>;
  read?: InputMaybe<Boolean_Comparison_Exp>;
  read_at?: InputMaybe<Timestamp_Comparison_Exp>;
  sent_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
}

/** aggregate max on columns */
export interface Notification_Deliveries_Max_Fields {
  __typename?: 'notification_deliveries_max_fields';
  channel_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  notification_id?: Maybe<Scalars['Int']['output']>;
  read_at?: Maybe<Scalars['timestamp']['output']>;
  sent_at?: Maybe<Scalars['timestamp']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** order by max() on columns of table "notification_deliveries" */
export interface Notification_Deliveries_Max_Order_By {
  channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notification_id?: InputMaybe<Order_By>;
  read_at?: InputMaybe<Order_By>;
  sent_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** aggregate min on columns */
export interface Notification_Deliveries_Min_Fields {
  __typename?: 'notification_deliveries_min_fields';
  channel_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  notification_id?: Maybe<Scalars['Int']['output']>;
  read_at?: Maybe<Scalars['timestamp']['output']>;
  sent_at?: Maybe<Scalars['timestamp']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** order by min() on columns of table "notification_deliveries" */
export interface Notification_Deliveries_Min_Order_By {
  channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notification_id?: InputMaybe<Order_By>;
  read_at?: InputMaybe<Order_By>;
  sent_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** response of any mutation on the table "notification_deliveries" */
export interface Notification_Deliveries_Mutation_Response {
  __typename?: 'notification_deliveries_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Notification_Deliveries>;
}

/** Ordering options when selecting data from "notification_deliveries". */
export interface Notification_Deliveries_Order_By {
  channel?: InputMaybe<Notification_Channels_Order_By>;
  channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notification?: InputMaybe<Notifications_Order_By>;
  notification_id?: InputMaybe<Order_By>;
  read?: InputMaybe<Order_By>;
  read_at?: InputMaybe<Order_By>;
  sent_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** primary key columns input for table: notification_deliveries */
export interface Notification_Deliveries_Pk_Columns_Input {
  id: Scalars['bigint']['input'];
}

/** select columns of table "notification_deliveries" */
export enum Notification_Deliveries_Select_Column {
  /** column name */
  ChannelId = 'channel_id',
  /** column name */
  Id = 'id',
  /** column name */
  NotificationId = 'notification_id',
  /** column name */
  Read = 'read',
  /** column name */
  ReadAt = 'read_at',
  /** column name */
  SentAt = 'sent_at',
  /** column name */
  UserId = 'user_id',
}

/** select "notification_deliveries_aggregate_bool_exp_bool_and_arguments_columns" columns of table "notification_deliveries" */
export enum Notification_Deliveries_Select_Column_Notification_Deliveries_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Read = 'read',
}

/** select "notification_deliveries_aggregate_bool_exp_bool_or_arguments_columns" columns of table "notification_deliveries" */
export enum Notification_Deliveries_Select_Column_Notification_Deliveries_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Read = 'read',
}

/** input type for updating data in table "notification_deliveries" */
export interface Notification_Deliveries_Set_Input {
  read?: InputMaybe<Scalars['Boolean']['input']>;
  read_at?: InputMaybe<Scalars['timestamp']['input']>;
}

/** aggregate stddev on columns */
export interface Notification_Deliveries_Stddev_Fields {
  __typename?: 'notification_deliveries_stddev_fields';
  channel_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  notification_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev() on columns of table "notification_deliveries" */
export interface Notification_Deliveries_Stddev_Order_By {
  channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notification_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** aggregate stddev_pop on columns */
export interface Notification_Deliveries_Stddev_Pop_Fields {
  __typename?: 'notification_deliveries_stddev_pop_fields';
  channel_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  notification_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev_pop() on columns of table "notification_deliveries" */
export interface Notification_Deliveries_Stddev_Pop_Order_By {
  channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notification_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** aggregate stddev_samp on columns */
export interface Notification_Deliveries_Stddev_Samp_Fields {
  __typename?: 'notification_deliveries_stddev_samp_fields';
  channel_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  notification_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev_samp() on columns of table "notification_deliveries" */
export interface Notification_Deliveries_Stddev_Samp_Order_By {
  channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notification_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "notification_deliveries" */
export interface Notification_Deliveries_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Notification_Deliveries_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Notification_Deliveries_Stream_Cursor_Value_Input {
  channel_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  notification_id?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  read_at?: InputMaybe<Scalars['timestamp']['input']>;
  sent_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
}

/** aggregate sum on columns */
export interface Notification_Deliveries_Sum_Fields {
  __typename?: 'notification_deliveries_sum_fields';
  channel_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  notification_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** order by sum() on columns of table "notification_deliveries" */
export interface Notification_Deliveries_Sum_Order_By {
  channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notification_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

export interface Notification_Deliveries_Updates {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Notification_Deliveries_Set_Input>;
  /** filter the rows which have to be updated */
  where: Notification_Deliveries_Bool_Exp;
}

/** aggregate var_pop on columns */
export interface Notification_Deliveries_Var_Pop_Fields {
  __typename?: 'notification_deliveries_var_pop_fields';
  channel_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  notification_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by var_pop() on columns of table "notification_deliveries" */
export interface Notification_Deliveries_Var_Pop_Order_By {
  channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notification_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** aggregate var_samp on columns */
export interface Notification_Deliveries_Var_Samp_Fields {
  __typename?: 'notification_deliveries_var_samp_fields';
  channel_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  notification_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by var_samp() on columns of table "notification_deliveries" */
export interface Notification_Deliveries_Var_Samp_Order_By {
  channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notification_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** aggregate variance on columns */
export interface Notification_Deliveries_Variance_Fields {
  __typename?: 'notification_deliveries_variance_fields';
  channel_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  notification_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by variance() on columns of table "notification_deliveries" */
export interface Notification_Deliveries_Variance_Order_By {
  channel_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notification_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** columns and relationships of "notification_settings" */
export interface Notification_Settings {
  __typename?: 'notification_settings';
  channel_ids: Scalars['json']['output'];
  id: Scalars['bigint']['output'];
  notification_type_id: Scalars['Int']['output'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id: Scalars['Int']['output'];
}

/** columns and relationships of "notification_settings" */
export interface Notification_SettingsChannel_IdsArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** order by aggregate values of table "notification_settings" */
export interface Notification_Settings_Aggregate_Order_By {
  avg?: InputMaybe<Notification_Settings_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Notification_Settings_Max_Order_By>;
  min?: InputMaybe<Notification_Settings_Min_Order_By>;
  stddev?: InputMaybe<Notification_Settings_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Notification_Settings_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Notification_Settings_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Notification_Settings_Sum_Order_By>;
  var_pop?: InputMaybe<Notification_Settings_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Notification_Settings_Var_Samp_Order_By>;
  variance?: InputMaybe<Notification_Settings_Variance_Order_By>;
}

/** order by avg() on columns of table "notification_settings" */
export interface Notification_Settings_Avg_Order_By {
  id?: InputMaybe<Order_By>;
  notification_type_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "notification_settings". All fields are combined with a logical 'AND'. */
export interface Notification_Settings_Bool_Exp {
  _and?: InputMaybe<Array<Notification_Settings_Bool_Exp>>;
  _not?: InputMaybe<Notification_Settings_Bool_Exp>;
  _or?: InputMaybe<Array<Notification_Settings_Bool_Exp>>;
  channel_ids?: InputMaybe<Json_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  notification_type_id?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
}

/** unique or primary key constraints on table "notification_settings" */
export enum Notification_Settings_Constraint {
  /** unique or primary key constraint on columns "id" */
  NotificationSettingsPkey = 'notification_settings_pkey',
}

/** input type for inserting data into table "notification_settings" */
export interface Notification_Settings_Insert_Input {
  channel_ids?: InputMaybe<Scalars['json']['input']>;
  notification_type_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
}

/** order by max() on columns of table "notification_settings" */
export interface Notification_Settings_Max_Order_By {
  id?: InputMaybe<Order_By>;
  notification_type_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by min() on columns of table "notification_settings" */
export interface Notification_Settings_Min_Order_By {
  id?: InputMaybe<Order_By>;
  notification_type_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** response of any mutation on the table "notification_settings" */
export interface Notification_Settings_Mutation_Response {
  __typename?: 'notification_settings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Notification_Settings>;
}

/** on_conflict condition type for table "notification_settings" */
export interface Notification_Settings_On_Conflict {
  constraint: Notification_Settings_Constraint;
  update_columns?: Array<Notification_Settings_Update_Column>;
  where?: InputMaybe<Notification_Settings_Bool_Exp>;
}

/** Ordering options when selecting data from "notification_settings". */
export interface Notification_Settings_Order_By {
  channel_ids?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notification_type_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** primary key columns input for table: notification_settings */
export interface Notification_Settings_Pk_Columns_Input {
  id: Scalars['bigint']['input'];
}

/** select columns of table "notification_settings" */
export enum Notification_Settings_Select_Column {
  /** column name */
  ChannelIds = 'channel_ids',
  /** column name */
  Id = 'id',
  /** column name */
  NotificationTypeId = 'notification_type_id',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "notification_settings" */
export interface Notification_Settings_Set_Input {
  channel_ids?: InputMaybe<Scalars['json']['input']>;
}

/** order by stddev() on columns of table "notification_settings" */
export interface Notification_Settings_Stddev_Order_By {
  id?: InputMaybe<Order_By>;
  notification_type_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by stddev_pop() on columns of table "notification_settings" */
export interface Notification_Settings_Stddev_Pop_Order_By {
  id?: InputMaybe<Order_By>;
  notification_type_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by stddev_samp() on columns of table "notification_settings" */
export interface Notification_Settings_Stddev_Samp_Order_By {
  id?: InputMaybe<Order_By>;
  notification_type_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "notification_settings" */
export interface Notification_Settings_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Notification_Settings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Notification_Settings_Stream_Cursor_Value_Input {
  channel_ids?: InputMaybe<Scalars['json']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  notification_type_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
}

/** order by sum() on columns of table "notification_settings" */
export interface Notification_Settings_Sum_Order_By {
  id?: InputMaybe<Order_By>;
  notification_type_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** update columns of table "notification_settings" */
export enum Notification_Settings_Update_Column {
  /** column name */
  ChannelIds = 'channel_ids',
}

export interface Notification_Settings_Updates {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Notification_Settings_Set_Input>;
  /** filter the rows which have to be updated */
  where: Notification_Settings_Bool_Exp;
}

/** order by var_pop() on columns of table "notification_settings" */
export interface Notification_Settings_Var_Pop_Order_By {
  id?: InputMaybe<Order_By>;
  notification_type_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by var_samp() on columns of table "notification_settings" */
export interface Notification_Settings_Var_Samp_Order_By {
  id?: InputMaybe<Order_By>;
  notification_type_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by variance() on columns of table "notification_settings" */
export interface Notification_Settings_Variance_Order_By {
  id?: InputMaybe<Order_By>;
  notification_type_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** columns and relationships of "notification_types" */
export interface Notification_Types {
  __typename?: 'notification_types';
  active?: Maybe<Scalars['Boolean']['output']>;
  default_channel_ids: Scalars['json']['output'];
  default_priority?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['bigint']['output'];
  name: Scalars['String']['output'];
  /** fetch data from the table: "notification_settings" */
  notification_settings: Array<Notification_Settings>;
  uid: Scalars['String']['output'];
}

/** columns and relationships of "notification_types" */
export interface Notification_TypesDefault_Channel_IdsArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "notification_types" */
export interface Notification_TypesNotification_SettingsArgs {
  distinct_on?: InputMaybe<Array<Notification_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notification_Settings_Order_By>>;
  where?: InputMaybe<Notification_Settings_Bool_Exp>;
}

/** Boolean expression to filter rows from the table "notification_types". All fields are combined with a logical 'AND'. */
export interface Notification_Types_Bool_Exp {
  _and?: InputMaybe<Array<Notification_Types_Bool_Exp>>;
  _not?: InputMaybe<Notification_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Notification_Types_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  default_channel_ids?: InputMaybe<Json_Comparison_Exp>;
  default_priority?: InputMaybe<Int_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  notification_settings?: InputMaybe<Notification_Settings_Bool_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
}

/** Ordering options when selecting data from "notification_types". */
export interface Notification_Types_Order_By {
  active?: InputMaybe<Order_By>;
  default_channel_ids?: InputMaybe<Order_By>;
  default_priority?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  notification_settings_aggregate?: InputMaybe<Notification_Settings_Aggregate_Order_By>;
  uid?: InputMaybe<Order_By>;
}

/** select columns of table "notification_types" */
export enum Notification_Types_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  DefaultChannelIds = 'default_channel_ids',
  /** column name */
  DefaultPriority = 'default_priority',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uid = 'uid',
}

/** Streaming cursor of the table "notification_types" */
export interface Notification_Types_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Notification_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Notification_Types_Stream_Cursor_Value_Input {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  default_channel_ids?: InputMaybe<Scalars['json']['input']>;
  default_priority?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "notifications" */
export interface Notifications {
  __typename?: 'notifications';
  created_at: Scalars['timestamptz']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  link?: Maybe<Scalars['String']['output']>;
  link_text?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  notification_deliveries: Array<Notification_Deliveries>;
  /** An aggregate relationship */
  notification_deliveries_aggregate: Notification_Deliveries_Aggregate;
  notification_type_id: Scalars['Int']['output'];
  /** An object relationship */
  notifierUser?: Maybe<Users>;
  notifier_user_id: Scalars['Int']['output'];
  priority?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  uid: Scalars['String']['output'];
}

/** columns and relationships of "notifications" */
export interface NotificationsNotification_DeliveriesArgs {
  distinct_on?: InputMaybe<Array<Notification_Deliveries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notification_Deliveries_Order_By>>;
  where?: InputMaybe<Notification_Deliveries_Bool_Exp>;
}

/** columns and relationships of "notifications" */
export interface NotificationsNotification_Deliveries_AggregateArgs {
  distinct_on?: InputMaybe<Array<Notification_Deliveries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notification_Deliveries_Order_By>>;
  where?: InputMaybe<Notification_Deliveries_Bool_Exp>;
}

/** Boolean expression to filter rows from the table "notifications". All fields are combined with a logical 'AND'. */
export interface Notifications_Bool_Exp {
  _and?: InputMaybe<Array<Notifications_Bool_Exp>>;
  _not?: InputMaybe<Notifications_Bool_Exp>;
  _or?: InputMaybe<Array<Notifications_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  link?: InputMaybe<String_Comparison_Exp>;
  link_text?: InputMaybe<String_Comparison_Exp>;
  notification_deliveries?: InputMaybe<Notification_Deliveries_Bool_Exp>;
  notification_deliveries_aggregate?: InputMaybe<Notification_Deliveries_Aggregate_Bool_Exp>;
  notification_type_id?: InputMaybe<Int_Comparison_Exp>;
  notifierUser?: InputMaybe<Users_Bool_Exp>;
  notifier_user_id?: InputMaybe<Int_Comparison_Exp>;
  priority?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
}

/** Ordering options when selecting data from "notifications". */
export interface Notifications_Order_By {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  link_text?: InputMaybe<Order_By>;
  notification_deliveries_aggregate?: InputMaybe<Notification_Deliveries_Aggregate_Order_By>;
  notification_type_id?: InputMaybe<Order_By>;
  notifierUser?: InputMaybe<Users_Order_By>;
  notifier_user_id?: InputMaybe<Order_By>;
  priority?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
}

/** select columns of table "notifications" */
export enum Notifications_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Link = 'link',
  /** column name */
  LinkText = 'link_text',
  /** column name */
  NotificationTypeId = 'notification_type_id',
  /** column name */
  NotifierUserId = 'notifier_user_id',
  /** column name */
  Priority = 'priority',
  /** column name */
  Title = 'title',
  /** column name */
  Uid = 'uid',
}

/** Streaming cursor of the table "notifications" */
export interface Notifications_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Notifications_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Notifications_Stream_Cursor_Value_Input {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  link_text?: InputMaybe<Scalars['String']['input']>;
  notification_type_id?: InputMaybe<Scalars['Int']['input']>;
  notifier_user_id?: InputMaybe<Scalars['Int']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export interface Numeric_Comparison_Exp {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "platforms" */
export interface Platforms {
  __typename?: 'platforms';
  /** An array relationship */
  book_mappings: Array<Book_Mappings>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
}

/** columns and relationships of "platforms" */
export interface PlatformsBook_MappingsArgs {
  distinct_on?: InputMaybe<Array<Book_Mappings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Mappings_Order_By>>;
  where?: InputMaybe<Book_Mappings_Bool_Exp>;
}

/** Boolean expression to filter rows from the table "platforms". All fields are combined with a logical 'AND'. */
export interface Platforms_Bool_Exp {
  _and?: InputMaybe<Array<Platforms_Bool_Exp>>;
  _not?: InputMaybe<Platforms_Bool_Exp>;
  _or?: InputMaybe<Array<Platforms_Bool_Exp>>;
  book_mappings?: InputMaybe<Book_Mappings_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
}

/** Ordering options when selecting data from "platforms". */
export interface Platforms_Order_By {
  book_mappings_aggregate?: InputMaybe<Book_Mappings_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
}

/** select columns of table "platforms" */
export enum Platforms_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Url = 'url',
}

/** Streaming cursor of the table "platforms" */
export interface Platforms_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Platforms_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Platforms_Stream_Cursor_Value_Input {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "privacy_settings" */
export interface Privacy_Settings {
  __typename?: 'privacy_settings';
  /** An array relationship */
  activities: Array<Activities>;
  id: Scalars['Int']['output'];
  /** An array relationship */
  lists: Array<Lists>;
  /** An aggregate relationship */
  lists_aggregate: Lists_Aggregate;
  /** An array relationship */
  prompts: Array<Prompts>;
  setting: Scalars['String']['output'];
  /** An array relationship */
  user_books: Array<User_Books>;
  /** An aggregate relationship */
  user_books_aggregate: User_Books_Aggregate;
  /** An array relationship */
  users: Array<Users>;
  /** An array relationship */
  users_by_activity: Array<Users>;
}

/** columns and relationships of "privacy_settings" */
export interface Privacy_SettingsActivitiesArgs {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
}

/** columns and relationships of "privacy_settings" */
export interface Privacy_SettingsListsArgs {
  distinct_on?: InputMaybe<Array<Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lists_Order_By>>;
  where?: InputMaybe<Lists_Bool_Exp>;
}

/** columns and relationships of "privacy_settings" */
export interface Privacy_SettingsLists_AggregateArgs {
  distinct_on?: InputMaybe<Array<Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lists_Order_By>>;
  where?: InputMaybe<Lists_Bool_Exp>;
}

/** columns and relationships of "privacy_settings" */
export interface Privacy_SettingsPromptsArgs {
  distinct_on?: InputMaybe<Array<Prompts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prompts_Order_By>>;
  where?: InputMaybe<Prompts_Bool_Exp>;
}

/** columns and relationships of "privacy_settings" */
export interface Privacy_SettingsUser_BooksArgs {
  distinct_on?: InputMaybe<Array<User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Books_Order_By>>;
  where?: InputMaybe<User_Books_Bool_Exp>;
}

/** columns and relationships of "privacy_settings" */
export interface Privacy_SettingsUser_Books_AggregateArgs {
  distinct_on?: InputMaybe<Array<User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Books_Order_By>>;
  where?: InputMaybe<User_Books_Bool_Exp>;
}

/** columns and relationships of "privacy_settings" */
export interface Privacy_SettingsUsersArgs {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
}

/** columns and relationships of "privacy_settings" */
export interface Privacy_SettingsUsers_By_ActivityArgs {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
}

/** Boolean expression to filter rows from the table "privacy_settings". All fields are combined with a logical 'AND'. */
export interface Privacy_Settings_Bool_Exp {
  _and?: InputMaybe<Array<Privacy_Settings_Bool_Exp>>;
  _not?: InputMaybe<Privacy_Settings_Bool_Exp>;
  _or?: InputMaybe<Array<Privacy_Settings_Bool_Exp>>;
  activities?: InputMaybe<Activities_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  lists?: InputMaybe<Lists_Bool_Exp>;
  lists_aggregate?: InputMaybe<Lists_Aggregate_Bool_Exp>;
  prompts?: InputMaybe<Prompts_Bool_Exp>;
  setting?: InputMaybe<String_Comparison_Exp>;
  user_books?: InputMaybe<User_Books_Bool_Exp>;
  user_books_aggregate?: InputMaybe<User_Books_Aggregate_Bool_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
  users_by_activity?: InputMaybe<Users_Bool_Exp>;
}

/** Ordering options when selecting data from "privacy_settings". */
export interface Privacy_Settings_Order_By {
  activities_aggregate?: InputMaybe<Activities_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  lists_aggregate?: InputMaybe<Lists_Aggregate_Order_By>;
  prompts_aggregate?: InputMaybe<Prompts_Aggregate_Order_By>;
  setting?: InputMaybe<Order_By>;
  user_books_aggregate?: InputMaybe<User_Books_Aggregate_Order_By>;
  users_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
  users_by_activity_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
}

/** select columns of table "privacy_settings" */
export enum Privacy_Settings_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Setting = 'setting',
}

/** Streaming cursor of the table "privacy_settings" */
export interface Privacy_Settings_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Privacy_Settings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Privacy_Settings_Stream_Cursor_Value_Input {
  id?: InputMaybe<Scalars['Int']['input']>;
  setting?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "prompt_answers" */
export interface Prompt_Answers {
  __typename?: 'prompt_answers';
  /** An object relationship */
  book: Books;
  book_id: Scalars['Int']['output'];
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  merged_at?: Maybe<Scalars['timestamp']['output']>;
  original_book_id?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  prompt: Prompts;
  /** An object relationship */
  prompt_book?: Maybe<Prompt_Books_Summary>;
  prompt_id: Scalars['Int']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int']['output'];
}

/** aggregated selection of "prompt_answers" */
export interface Prompt_Answers_Aggregate {
  __typename?: 'prompt_answers_aggregate';
  aggregate?: Maybe<Prompt_Answers_Aggregate_Fields>;
  nodes: Array<Prompt_Answers>;
}

export interface Prompt_Answers_Aggregate_Bool_Exp {
  count?: InputMaybe<Prompt_Answers_Aggregate_Bool_Exp_Count>;
}

export interface Prompt_Answers_Aggregate_Bool_Exp_Count {
  arguments?: InputMaybe<Array<Prompt_Answers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Prompt_Answers_Bool_Exp>;
  predicate: Int_Comparison_Exp;
}

/** aggregate fields of "prompt_answers" */
export interface Prompt_Answers_Aggregate_Fields {
  __typename?: 'prompt_answers_aggregate_fields';
  avg?: Maybe<Prompt_Answers_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Prompt_Answers_Max_Fields>;
  min?: Maybe<Prompt_Answers_Min_Fields>;
  stddev?: Maybe<Prompt_Answers_Stddev_Fields>;
  stddev_pop?: Maybe<Prompt_Answers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Prompt_Answers_Stddev_Samp_Fields>;
  sum?: Maybe<Prompt_Answers_Sum_Fields>;
  var_pop?: Maybe<Prompt_Answers_Var_Pop_Fields>;
  var_samp?: Maybe<Prompt_Answers_Var_Samp_Fields>;
  variance?: Maybe<Prompt_Answers_Variance_Fields>;
}

/** aggregate fields of "prompt_answers" */
export interface Prompt_Answers_Aggregate_FieldsCountArgs {
  columns?: InputMaybe<Array<Prompt_Answers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
}

/** order by aggregate values of table "prompt_answers" */
export interface Prompt_Answers_Aggregate_Order_By {
  avg?: InputMaybe<Prompt_Answers_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Prompt_Answers_Max_Order_By>;
  min?: InputMaybe<Prompt_Answers_Min_Order_By>;
  stddev?: InputMaybe<Prompt_Answers_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Prompt_Answers_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Prompt_Answers_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Prompt_Answers_Sum_Order_By>;
  var_pop?: InputMaybe<Prompt_Answers_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Prompt_Answers_Var_Samp_Order_By>;
  variance?: InputMaybe<Prompt_Answers_Variance_Order_By>;
}

/** aggregate avg on columns */
export interface Prompt_Answers_Avg_Fields {
  __typename?: 'prompt_answers_avg_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  original_book_id?: Maybe<Scalars['Float']['output']>;
  prompt_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by avg() on columns of table "prompt_answers" */
export interface Prompt_Answers_Avg_Order_By {
  book_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "prompt_answers". All fields are combined with a logical 'AND'. */
export interface Prompt_Answers_Bool_Exp {
  _and?: InputMaybe<Array<Prompt_Answers_Bool_Exp>>;
  _not?: InputMaybe<Prompt_Answers_Bool_Exp>;
  _or?: InputMaybe<Array<Prompt_Answers_Bool_Exp>>;
  book?: InputMaybe<Books_Bool_Exp>;
  book_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  merged_at?: InputMaybe<Timestamp_Comparison_Exp>;
  original_book_id?: InputMaybe<Int_Comparison_Exp>;
  prompt?: InputMaybe<Prompts_Bool_Exp>;
  prompt_book?: InputMaybe<Prompt_Books_Summary_Bool_Exp>;
  prompt_id?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
}

/** aggregate max on columns */
export interface Prompt_Answers_Max_Fields {
  __typename?: 'prompt_answers_max_fields';
  book_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  merged_at?: Maybe<Scalars['timestamp']['output']>;
  original_book_id?: Maybe<Scalars['Int']['output']>;
  prompt_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** order by max() on columns of table "prompt_answers" */
export interface Prompt_Answers_Max_Order_By {
  book_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  merged_at?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** aggregate min on columns */
export interface Prompt_Answers_Min_Fields {
  __typename?: 'prompt_answers_min_fields';
  book_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  merged_at?: Maybe<Scalars['timestamp']['output']>;
  original_book_id?: Maybe<Scalars['Int']['output']>;
  prompt_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** order by min() on columns of table "prompt_answers" */
export interface Prompt_Answers_Min_Order_By {
  book_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  merged_at?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** response of any mutation on the table "prompt_answers" */
export interface Prompt_Answers_Mutation_Response {
  __typename?: 'prompt_answers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Prompt_Answers>;
}

/** Ordering options when selecting data from "prompt_answers". */
export interface Prompt_Answers_Order_By {
  book?: InputMaybe<Books_Order_By>;
  book_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  merged_at?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  prompt?: InputMaybe<Prompts_Order_By>;
  prompt_book?: InputMaybe<Prompt_Books_Summary_Order_By>;
  prompt_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** primary key columns input for table: prompt_answers */
export interface Prompt_Answers_Pk_Columns_Input {
  id: Scalars['Int']['input'];
}

/** select columns of table "prompt_answers" */
export enum Prompt_Answers_Select_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  MergedAt = 'merged_at',
  /** column name */
  OriginalBookId = 'original_book_id',
  /** column name */
  PromptId = 'prompt_id',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "prompt_answers" */
export interface Prompt_Answers_Set_Input {
  description?: InputMaybe<Scalars['String']['input']>;
}

/** aggregate stddev on columns */
export interface Prompt_Answers_Stddev_Fields {
  __typename?: 'prompt_answers_stddev_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  original_book_id?: Maybe<Scalars['Float']['output']>;
  prompt_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev() on columns of table "prompt_answers" */
export interface Prompt_Answers_Stddev_Order_By {
  book_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** aggregate stddev_pop on columns */
export interface Prompt_Answers_Stddev_Pop_Fields {
  __typename?: 'prompt_answers_stddev_pop_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  original_book_id?: Maybe<Scalars['Float']['output']>;
  prompt_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev_pop() on columns of table "prompt_answers" */
export interface Prompt_Answers_Stddev_Pop_Order_By {
  book_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** aggregate stddev_samp on columns */
export interface Prompt_Answers_Stddev_Samp_Fields {
  __typename?: 'prompt_answers_stddev_samp_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  original_book_id?: Maybe<Scalars['Float']['output']>;
  prompt_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev_samp() on columns of table "prompt_answers" */
export interface Prompt_Answers_Stddev_Samp_Order_By {
  book_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "prompt_answers" */
export interface Prompt_Answers_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Prompt_Answers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Prompt_Answers_Stream_Cursor_Value_Input {
  book_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  merged_at?: InputMaybe<Scalars['timestamp']['input']>;
  original_book_id?: InputMaybe<Scalars['Int']['input']>;
  prompt_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
}

/** aggregate sum on columns */
export interface Prompt_Answers_Sum_Fields {
  __typename?: 'prompt_answers_sum_fields';
  book_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  original_book_id?: Maybe<Scalars['Int']['output']>;
  prompt_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** order by sum() on columns of table "prompt_answers" */
export interface Prompt_Answers_Sum_Order_By {
  book_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

export interface Prompt_Answers_Updates {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Prompt_Answers_Set_Input>;
  /** filter the rows which have to be updated */
  where: Prompt_Answers_Bool_Exp;
}

/** aggregate var_pop on columns */
export interface Prompt_Answers_Var_Pop_Fields {
  __typename?: 'prompt_answers_var_pop_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  original_book_id?: Maybe<Scalars['Float']['output']>;
  prompt_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by var_pop() on columns of table "prompt_answers" */
export interface Prompt_Answers_Var_Pop_Order_By {
  book_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** aggregate var_samp on columns */
export interface Prompt_Answers_Var_Samp_Fields {
  __typename?: 'prompt_answers_var_samp_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  original_book_id?: Maybe<Scalars['Float']['output']>;
  prompt_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by var_samp() on columns of table "prompt_answers" */
export interface Prompt_Answers_Var_Samp_Order_By {
  book_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** aggregate variance on columns */
export interface Prompt_Answers_Variance_Fields {
  __typename?: 'prompt_answers_variance_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  original_book_id?: Maybe<Scalars['Float']['output']>;
  prompt_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by variance() on columns of table "prompt_answers" */
export interface Prompt_Answers_Variance_Order_By {
  book_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** columns and relationships of "prompt_books_summary" */
export interface Prompt_Books_Summary {
  __typename?: 'prompt_books_summary';
  answers_count?: Maybe<Scalars['bigint']['output']>;
  /** An object relationship */
  book?: Maybe<Books>;
  book_id?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  prompt?: Maybe<Prompts>;
  prompt_id?: Maybe<Scalars['Int']['output']>;
}

/** order by aggregate values of table "prompt_books_summary" */
export interface Prompt_Books_Summary_Aggregate_Order_By {
  avg?: InputMaybe<Prompt_Books_Summary_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Prompt_Books_Summary_Max_Order_By>;
  min?: InputMaybe<Prompt_Books_Summary_Min_Order_By>;
  stddev?: InputMaybe<Prompt_Books_Summary_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Prompt_Books_Summary_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Prompt_Books_Summary_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Prompt_Books_Summary_Sum_Order_By>;
  var_pop?: InputMaybe<Prompt_Books_Summary_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Prompt_Books_Summary_Var_Samp_Order_By>;
  variance?: InputMaybe<Prompt_Books_Summary_Variance_Order_By>;
}

/** order by avg() on columns of table "prompt_books_summary" */
export interface Prompt_Books_Summary_Avg_Order_By {
  answers_count?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "prompt_books_summary". All fields are combined with a logical 'AND'. */
export interface Prompt_Books_Summary_Bool_Exp {
  _and?: InputMaybe<Array<Prompt_Books_Summary_Bool_Exp>>;
  _not?: InputMaybe<Prompt_Books_Summary_Bool_Exp>;
  _or?: InputMaybe<Array<Prompt_Books_Summary_Bool_Exp>>;
  answers_count?: InputMaybe<Bigint_Comparison_Exp>;
  book?: InputMaybe<Books_Bool_Exp>;
  book_id?: InputMaybe<Int_Comparison_Exp>;
  prompt?: InputMaybe<Prompts_Bool_Exp>;
  prompt_id?: InputMaybe<Int_Comparison_Exp>;
}

/** order by max() on columns of table "prompt_books_summary" */
export interface Prompt_Books_Summary_Max_Order_By {
  answers_count?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
}

/** order by min() on columns of table "prompt_books_summary" */
export interface Prompt_Books_Summary_Min_Order_By {
  answers_count?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
}

/** Ordering options when selecting data from "prompt_books_summary". */
export interface Prompt_Books_Summary_Order_By {
  answers_count?: InputMaybe<Order_By>;
  book?: InputMaybe<Books_Order_By>;
  book_id?: InputMaybe<Order_By>;
  prompt?: InputMaybe<Prompts_Order_By>;
  prompt_id?: InputMaybe<Order_By>;
}

/** select columns of table "prompt_books_summary" */
export enum Prompt_Books_Summary_Select_Column {
  /** column name */
  AnswersCount = 'answers_count',
  /** column name */
  BookId = 'book_id',
  /** column name */
  PromptId = 'prompt_id',
}

/** order by stddev() on columns of table "prompt_books_summary" */
export interface Prompt_Books_Summary_Stddev_Order_By {
  answers_count?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
}

/** order by stddev_pop() on columns of table "prompt_books_summary" */
export interface Prompt_Books_Summary_Stddev_Pop_Order_By {
  answers_count?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
}

/** order by stddev_samp() on columns of table "prompt_books_summary" */
export interface Prompt_Books_Summary_Stddev_Samp_Order_By {
  answers_count?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "prompt_books_summary" */
export interface Prompt_Books_Summary_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Prompt_Books_Summary_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Prompt_Books_Summary_Stream_Cursor_Value_Input {
  answers_count?: InputMaybe<Scalars['bigint']['input']>;
  book_id?: InputMaybe<Scalars['Int']['input']>;
  prompt_id?: InputMaybe<Scalars['Int']['input']>;
}

/** order by sum() on columns of table "prompt_books_summary" */
export interface Prompt_Books_Summary_Sum_Order_By {
  answers_count?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
}

/** order by var_pop() on columns of table "prompt_books_summary" */
export interface Prompt_Books_Summary_Var_Pop_Order_By {
  answers_count?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
}

/** order by var_samp() on columns of table "prompt_books_summary" */
export interface Prompt_Books_Summary_Var_Samp_Order_By {
  answers_count?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
}

/** order by variance() on columns of table "prompt_books_summary" */
export interface Prompt_Books_Summary_Variance_Order_By {
  answers_count?: InputMaybe<Order_By>;
  book_id?: InputMaybe<Order_By>;
  prompt_id?: InputMaybe<Order_By>;
}

/** columns and relationships of "prompts" */
export interface Prompts {
  __typename?: 'prompts';
  answers_count: Scalars['Int']['output'];
  books_count: Scalars['Int']['output'];
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description: Scalars['String']['output'];
  featured: Scalars['Boolean']['output'];
  /** An array relationship */
  followed_prompts: Array<Followed_Prompts>;
  /** An array relationship */
  followers: Array<Followed_Users>;
  id: Scalars['Int']['output'];
  /** An object relationship */
  privacy_setting: Privacy_Settings;
  privacy_setting_id: Scalars['Int']['output'];
  /** An array relationship */
  prompt_answers: Array<Prompt_Answers>;
  /** An aggregate relationship */
  prompt_answers_aggregate: Prompt_Answers_Aggregate;
  /** An array relationship */
  prompt_books: Array<Prompt_Books_Summary>;
  question: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int']['output'];
  users_count: Scalars['Int']['output'];
}

/** columns and relationships of "prompts" */
export interface PromptsFollowed_PromptsArgs {
  distinct_on?: InputMaybe<Array<Followed_Prompts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Followed_Prompts_Order_By>>;
  where?: InputMaybe<Followed_Prompts_Bool_Exp>;
}

/** columns and relationships of "prompts" */
export interface PromptsFollowersArgs {
  distinct_on?: InputMaybe<Array<Followed_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Followed_Users_Order_By>>;
  where?: InputMaybe<Followed_Users_Bool_Exp>;
}

/** columns and relationships of "prompts" */
export interface PromptsPrompt_AnswersArgs {
  distinct_on?: InputMaybe<Array<Prompt_Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prompt_Answers_Order_By>>;
  where?: InputMaybe<Prompt_Answers_Bool_Exp>;
}

/** columns and relationships of "prompts" */
export interface PromptsPrompt_Answers_AggregateArgs {
  distinct_on?: InputMaybe<Array<Prompt_Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prompt_Answers_Order_By>>;
  where?: InputMaybe<Prompt_Answers_Bool_Exp>;
}

/** columns and relationships of "prompts" */
export interface PromptsPrompt_BooksArgs {
  distinct_on?: InputMaybe<Array<Prompt_Books_Summary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prompt_Books_Summary_Order_By>>;
  where?: InputMaybe<Prompt_Books_Summary_Bool_Exp>;
}

/** order by aggregate values of table "prompts" */
export interface Prompts_Aggregate_Order_By {
  avg?: InputMaybe<Prompts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Prompts_Max_Order_By>;
  min?: InputMaybe<Prompts_Min_Order_By>;
  stddev?: InputMaybe<Prompts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Prompts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Prompts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Prompts_Sum_Order_By>;
  var_pop?: InputMaybe<Prompts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Prompts_Var_Samp_Order_By>;
  variance?: InputMaybe<Prompts_Variance_Order_By>;
}

/** order by avg() on columns of table "prompts" */
export interface Prompts_Avg_Order_By {
  answers_count?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "prompts". All fields are combined with a logical 'AND'. */
export interface Prompts_Bool_Exp {
  _and?: InputMaybe<Array<Prompts_Bool_Exp>>;
  _not?: InputMaybe<Prompts_Bool_Exp>;
  _or?: InputMaybe<Array<Prompts_Bool_Exp>>;
  answers_count?: InputMaybe<Int_Comparison_Exp>;
  books_count?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  featured?: InputMaybe<Boolean_Comparison_Exp>;
  followed_prompts?: InputMaybe<Followed_Prompts_Bool_Exp>;
  followers?: InputMaybe<Followed_Users_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  privacy_setting?: InputMaybe<Privacy_Settings_Bool_Exp>;
  privacy_setting_id?: InputMaybe<Int_Comparison_Exp>;
  prompt_answers?: InputMaybe<Prompt_Answers_Bool_Exp>;
  prompt_answers_aggregate?: InputMaybe<Prompt_Answers_Aggregate_Bool_Exp>;
  prompt_books?: InputMaybe<Prompt_Books_Summary_Bool_Exp>;
  question?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
  users_count?: InputMaybe<Int_Comparison_Exp>;
}

/** order by max() on columns of table "prompts" */
export interface Prompts_Max_Order_By {
  answers_count?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  question?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
}

/** order by min() on columns of table "prompts" */
export interface Prompts_Min_Order_By {
  answers_count?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  question?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
}

/** response of any mutation on the table "prompts" */
export interface Prompts_Mutation_Response {
  __typename?: 'prompts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Prompts>;
}

/** Ordering options when selecting data from "prompts". */
export interface Prompts_Order_By {
  answers_count?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  featured?: InputMaybe<Order_By>;
  followed_prompts_aggregate?: InputMaybe<Followed_Prompts_Aggregate_Order_By>;
  followers_aggregate?: InputMaybe<Followed_Users_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  privacy_setting?: InputMaybe<Privacy_Settings_Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  prompt_answers_aggregate?: InputMaybe<Prompt_Answers_Aggregate_Order_By>;
  prompt_books_aggregate?: InputMaybe<Prompt_Books_Summary_Aggregate_Order_By>;
  question?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
}

/** select columns of table "prompts" */
export enum Prompts_Select_Column {
  /** column name */
  AnswersCount = 'answers_count',
  /** column name */
  BooksCount = 'books_count',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Featured = 'featured',
  /** column name */
  Id = 'id',
  /** column name */
  PrivacySettingId = 'privacy_setting_id',
  /** column name */
  Question = 'question',
  /** column name */
  Slug = 'slug',
  /** column name */
  UserId = 'user_id',
  /** column name */
  UsersCount = 'users_count',
}

/** order by stddev() on columns of table "prompts" */
export interface Prompts_Stddev_Order_By {
  answers_count?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
}

/** order by stddev_pop() on columns of table "prompts" */
export interface Prompts_Stddev_Pop_Order_By {
  answers_count?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
}

/** order by stddev_samp() on columns of table "prompts" */
export interface Prompts_Stddev_Samp_Order_By {
  answers_count?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "prompts" */
export interface Prompts_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Prompts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Prompts_Stream_Cursor_Value_Input {
  answers_count?: InputMaybe<Scalars['Int']['input']>;
  books_count?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  privacy_setting_id?: InputMaybe<Scalars['Int']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
  users_count?: InputMaybe<Scalars['Int']['input']>;
}

/** order by sum() on columns of table "prompts" */
export interface Prompts_Sum_Order_By {
  answers_count?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
}

/** order by var_pop() on columns of table "prompts" */
export interface Prompts_Var_Pop_Order_By {
  answers_count?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
}

/** order by var_samp() on columns of table "prompts" */
export interface Prompts_Var_Samp_Order_By {
  answers_count?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
}

/** order by variance() on columns of table "prompts" */
export interface Prompts_Variance_Order_By {
  answers_count?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  users_count?: InputMaybe<Order_By>;
}

/** columns and relationships of "publishers" */
export interface Publishers {
  __typename?: 'publishers';
  canonical_id?: Maybe<Scalars['Int']['output']>;
  created_at: Scalars['timestamp']['output'];
  /** An array relationship */
  editions: Array<Editions>;
  editions_count: Scalars['Int']['output'];
  id: Scalars['bigint']['output'];
  locked: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  parent_publisher?: Maybe<Publishers>;
  slug: Scalars['String']['output'];
  state: Scalars['String']['output'];
  updated_at: Scalars['timestamp']['output'];
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** columns and relationships of "publishers" */
export interface PublishersEditionsArgs {
  distinct_on?: InputMaybe<Array<Editions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Editions_Order_By>>;
  where?: InputMaybe<Editions_Bool_Exp>;
}

/** Boolean expression to filter rows from the table "publishers". All fields are combined with a logical 'AND'. */
export interface Publishers_Bool_Exp {
  _and?: InputMaybe<Array<Publishers_Bool_Exp>>;
  _not?: InputMaybe<Publishers_Bool_Exp>;
  _or?: InputMaybe<Array<Publishers_Bool_Exp>>;
  canonical_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  editions?: InputMaybe<Editions_Bool_Exp>;
  editions_count?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  locked?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  parent_id?: InputMaybe<Int_Comparison_Exp>;
  parent_publisher?: InputMaybe<Publishers_Bool_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
}

/** Ordering options when selecting data from "publishers". */
export interface Publishers_Order_By {
  canonical_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  editions_aggregate?: InputMaybe<Editions_Aggregate_Order_By>;
  editions_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  locked?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
  parent_publisher?: InputMaybe<Publishers_Order_By>;
  slug?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** select columns of table "publishers" */
export enum Publishers_Select_Column {
  /** column name */
  CanonicalId = 'canonical_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EditionsCount = 'editions_count',
  /** column name */
  Id = 'id',
  /** column name */
  Locked = 'locked',
  /** column name */
  Name = 'name',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  Slug = 'slug',
  /** column name */
  State = 'state',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** Streaming cursor of the table "publishers" */
export interface Publishers_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Publishers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Publishers_Stream_Cursor_Value_Input {
  canonical_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  editions_count?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent_id?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface Query_Root {
  __typename?: 'query_root';
  /** An array relationship */
  activities: Array<Activities>;
  /** fetch data from the table: "activities" using primary key columns */
  activities_by_pk?: Maybe<Activities>;
  /** execute function "activity_feed" which returns "activities" */
  activity_feed: Array<Activities>;
  /** execute function "activity_foryou_feed" which returns "activities" */
  activity_foryou_feed: Array<Activities>;
  /** fetch data from the table: "authors" */
  authors: Array<Authors>;
  /** fetch data from the table: "authors" using primary key columns */
  authors_by_pk?: Maybe<Authors>;
  /** fetch data from the table: "book_categories" */
  book_categories: Array<Book_Categories>;
  /** fetch data from the table: "book_categories" using primary key columns */
  book_categories_by_pk?: Maybe<Book_Categories>;
  /** An array relationship */
  book_characters: Array<Book_Characters>;
  /** fetch data from the table: "book_characters" using primary key columns */
  book_characters_by_pk?: Maybe<Book_Characters>;
  /** fetch data from the table: "book_collections" */
  book_collections: Array<Book_Collections>;
  /** fetch data from the table: "book_collections" using primary key columns */
  book_collections_by_pk?: Maybe<Book_Collections>;
  /** An array relationship */
  book_mappings: Array<Book_Mappings>;
  /** fetch data from the table: "book_mappings" using primary key columns */
  book_mappings_by_pk?: Maybe<Book_Mappings>;
  /** An array relationship */
  book_series: Array<Book_Series>;
  /** An aggregate relationship */
  book_series_aggregate: Book_Series_Aggregate;
  /** fetch data from the table: "book_series" using primary key columns */
  book_series_by_pk?: Maybe<Book_Series>;
  /** fetch data from the table: "book_statuses" */
  book_statuses: Array<Book_Statuses>;
  /** fetch data from the table: "book_statuses" using primary key columns */
  book_statuses_by_pk?: Maybe<Book_Statuses>;
  /** fetch data from the table: "bookles" */
  bookles: Array<Bookles>;
  /** fetch data from the table: "bookles" using primary key columns */
  bookles_by_pk?: Maybe<Bookles>;
  /** An array relationship */
  books: Array<Books>;
  /** An aggregate relationship */
  books_aggregate: Books_Aggregate;
  /** fetch data from the table: "books" using primary key columns */
  books_by_pk?: Maybe<Books>;
  /** books_trending */
  books_trending?: Maybe<TrendingBookType>;
  /** fetch data from the table: "characters" */
  characters: Array<Characters>;
  /** fetch data from the table: "characters" using primary key columns */
  characters_by_pk?: Maybe<Characters>;
  /** An array relationship */
  collection_import_results: Array<Collection_Import_Results>;
  /** fetch data from the table: "collection_import_results" using primary key columns */
  collection_import_results_by_pk?: Maybe<Collection_Import_Results>;
  /** An array relationship */
  collection_imports: Array<Collection_Imports>;
  /** fetch data from the table: "collection_imports" using primary key columns */
  collection_imports_by_pk?: Maybe<Collection_Imports>;
  /** An array relationship */
  contributions: Array<Contributions>;
  /** An aggregate relationship */
  contributions_aggregate: Contributions_Aggregate;
  /** fetch data from the table: "contributions" using primary key columns */
  contributions_by_pk?: Maybe<Contributions>;
  /** fetch data from the table: "countries" */
  countries: Array<Countries>;
  /** fetch data from the table: "countries" using primary key columns */
  countries_by_pk?: Maybe<Countries>;
  /** An array relationship */
  editions: Array<Editions>;
  /** fetch data from the table: "editions" using primary key columns */
  editions_by_pk?: Maybe<Editions>;
  /** fetch data from the table: "flag_statuses" */
  flag_statuses: Array<Flag_Statuses>;
  /** fetch data from the table: "flag_statuses" using primary key columns */
  flag_statuses_by_pk?: Maybe<Flag_Statuses>;
  /** An array relationship */
  followed_lists: Array<Followed_Lists>;
  /** fetch data from the table: "followed_lists" using primary key columns */
  followed_lists_by_pk?: Maybe<Followed_Lists>;
  /** An array relationship */
  followed_prompts: Array<Followed_Prompts>;
  /** fetch data from the table: "followed_prompts" using primary key columns */
  followed_prompts_by_pk?: Maybe<Followed_Prompts>;
  /** fetch data from the table: "followed_user_books" */
  followed_user_books: Array<Followed_User_Books>;
  /** fetch aggregated fields from the table: "followed_user_books" */
  followed_user_books_aggregate: Followed_User_Books_Aggregate;
  /** An array relationship */
  followed_users: Array<Followed_Users>;
  /** fetch data from the table: "followed_users" using primary key columns */
  followed_users_by_pk?: Maybe<Followed_Users>;
  /** fetch data from the table: "following_user_books" */
  following_user_books: Array<Following_User_Books>;
  /** fetch aggregated fields from the table: "following_user_books" */
  following_user_books_aggregate: Following_User_Books_Aggregate;
  /** An array relationship */
  goals: Array<Goals>;
  /** fetch data from the table: "goals" using primary key columns */
  goals_by_pk?: Maybe<Goals>;
  /** An array relationship */
  images: Array<Images>;
  /** fetch data from the table: "images" using primary key columns */
  images_by_pk?: Maybe<Images>;
  /** fetch data from the table: "languages" */
  languages: Array<Languages>;
  /** fetch data from the table: "languages" using primary key columns */
  languages_by_pk?: Maybe<Languages>;
  /** An array relationship */
  likes: Array<Likes>;
  /** fetch data from the table: "likes" using primary key columns */
  likes_by_pk?: Maybe<Likes>;
  /** An array relationship */
  list_books: Array<List_Books>;
  /** An aggregate relationship */
  list_books_aggregate: List_Books_Aggregate;
  /** fetch data from the table: "list_books" using primary key columns */
  list_books_by_pk?: Maybe<List_Books>;
  /** An array relationship */
  lists: Array<Lists>;
  /** An aggregate relationship */
  lists_aggregate: Lists_Aggregate;
  /** fetch data from the table: "lists" using primary key columns */
  lists_by_pk?: Maybe<Lists>;
  /** execute function "me" which returns "users" */
  me: Array<Users>;
  /** newsletter */
  newsletter?: Maybe<NewsletterStatusType>;
  /** fetch data from the table: "notification_channels" */
  notification_channels: Array<Notification_Channels>;
  /** fetch data from the table: "notification_channels" using primary key columns */
  notification_channels_by_pk?: Maybe<Notification_Channels>;
  /** An array relationship */
  notification_deliveries: Array<Notification_Deliveries>;
  /** An aggregate relationship */
  notification_deliveries_aggregate: Notification_Deliveries_Aggregate;
  /** fetch data from the table: "notification_deliveries" using primary key columns */
  notification_deliveries_by_pk?: Maybe<Notification_Deliveries>;
  /** fetch data from the table: "notification_settings" */
  notification_settings: Array<Notification_Settings>;
  /** fetch data from the table: "notification_settings" using primary key columns */
  notification_settings_by_pk?: Maybe<Notification_Settings>;
  /** fetch data from the table: "notification_types" */
  notification_types: Array<Notification_Types>;
  /** fetch data from the table: "notification_types" using primary key columns */
  notification_types_by_pk?: Maybe<Notification_Types>;
  /** fetch data from the table: "notifications" */
  notifications: Array<Notifications>;
  /** fetch data from the table: "notifications" using primary key columns */
  notifications_by_pk?: Maybe<Notifications>;
  /** fetch data from the table: "platforms" */
  platforms: Array<Platforms>;
  /** fetch data from the table: "platforms" using primary key columns */
  platforms_by_pk?: Maybe<Platforms>;
  /** fetch data from the table: "privacy_settings" */
  privacy_settings: Array<Privacy_Settings>;
  /** fetch data from the table: "privacy_settings" using primary key columns */
  privacy_settings_by_pk?: Maybe<Privacy_Settings>;
  /** An array relationship */
  prompt_answers: Array<Prompt_Answers>;
  /** An aggregate relationship */
  prompt_answers_aggregate: Prompt_Answers_Aggregate;
  /** fetch data from the table: "prompt_answers" using primary key columns */
  prompt_answers_by_pk?: Maybe<Prompt_Answers>;
  /** fetch data from the table: "prompt_books_summary" */
  prompt_books_summary: Array<Prompt_Books_Summary>;
  /** An array relationship */
  prompts: Array<Prompts>;
  /** fetch data from the table: "prompts" using primary key columns */
  prompts_by_pk?: Maybe<Prompts>;
  /** fetch data from the table: "publishers" */
  publishers: Array<Publishers>;
  /** fetch data from the table: "publishers" using primary key columns */
  publishers_by_pk?: Maybe<Publishers>;
  /** fetch data from the table: "reading_formats" */
  reading_formats: Array<Reading_Formats>;
  /** fetch data from the table: "reading_formats" using primary key columns */
  reading_formats_by_pk?: Maybe<Reading_Formats>;
  /** An array relationship */
  reading_journals: Array<Reading_Journals>;
  /** fetch data from the table: "reading_journals" using primary key columns */
  reading_journals_by_pk?: Maybe<Reading_Journals>;
  /** fetch data from the table: "reading_journals_summary" */
  reading_journals_summary: Array<Reading_Journals_Summary>;
  /** An array relationship */
  recommendations: Array<Recommendations>;
  /** fetch data from the table: "disco_recommendations" using primary key columns */
  recommendations_by_pk?: Maybe<Recommendations>;
  /** referrals_for_user */
  referrals_for_user?: Maybe<Array<Maybe<ReferralType>>>;
  search?: Maybe<SearchOutput>;
  /** fetch data from the table: "series" */
  series: Array<Series>;
  /** fetch data from the table: "series" using primary key columns */
  series_by_pk?: Maybe<Series>;
  /** subscriptions */
  subscriptions?: Maybe<SubscriptionsType>;
  /** fetch data from the table: "tag_categories" */
  tag_categories: Array<Tag_Categories>;
  /** fetch data from the table: "tag_categories" using primary key columns */
  tag_categories_by_pk?: Maybe<Tag_Categories>;
  /** An array relationship */
  taggable_counts: Array<Taggable_Counts>;
  /** fetch data from the table: "taggable_counts" using primary key columns */
  taggable_counts_by_pk?: Maybe<Taggable_Counts>;
  /** An array relationship */
  taggings: Array<Taggings>;
  /** An aggregate relationship */
  taggings_aggregate: Taggings_Aggregate;
  /** fetch data from the table: "taggings" using primary key columns */
  taggings_by_pk?: Maybe<Taggings>;
  /** An array relationship */
  tags: Array<Tags>;
  /** An aggregate relationship */
  tags_aggregate: Tags_Aggregate;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
  /** fetch data from the table: "user_blocks" */
  user_blocks: Array<User_Blocks>;
  /** fetch data from the table: "user_blocks" using primary key columns */
  user_blocks_by_pk?: Maybe<User_Blocks>;
  /** An array relationship */
  user_book_reads: Array<User_Book_Reads>;
  /** An aggregate relationship */
  user_book_reads_aggregate: User_Book_Reads_Aggregate;
  /** fetch data from the table: "user_book_reads" using primary key columns */
  user_book_reads_by_pk?: Maybe<User_Book_Reads>;
  /** fetch data from the table: "user_book_statuses" */
  user_book_statuses: Array<User_Book_Statuses>;
  /** fetch aggregated fields from the table: "user_book_statuses" */
  user_book_statuses_aggregate: User_Book_Statuses_Aggregate;
  /** fetch data from the table: "user_book_statuses" using primary key columns */
  user_book_statuses_by_pk?: Maybe<User_Book_Statuses>;
  /** An array relationship */
  user_books: Array<User_Books>;
  /** An aggregate relationship */
  user_books_aggregate: User_Books_Aggregate;
  /** fetch data from the table: "user_books" using primary key columns */
  user_books_by_pk?: Maybe<User_Books>;
  /** An array relationship */
  user_flags: Array<User_Flags>;
  /** fetch data from the table: "user_flags" using primary key columns */
  user_flags_by_pk?: Maybe<User_Flags>;
  /** fetch data from the table: "user_referrals" */
  user_referrals: Array<User_Referrals>;
  /** fetch data from the table: "user_referrals" using primary key columns */
  user_referrals_by_pk?: Maybe<User_Referrals>;
  /** fetch data from the table: "user_statuses" */
  user_statuses: Array<User_Statuses>;
  /** fetch data from the table: "user_statuses" using primary key columns */
  user_statuses_by_pk?: Maybe<User_Statuses>;
  /** An array relationship */
  users: Array<Users>;
  /** fetch data from the table: "users_aggregate_by_created_at_date" */
  users_aggregate_by_created_at_date: Array<Users_Aggregate_By_Created_At_Date>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
}

export interface Query_RootActivitiesArgs {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
}

export interface Query_RootActivities_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Query_RootActivity_FeedArgs {
  args: Activity_Feed_Args;
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
}

export interface Query_RootActivity_Foryou_FeedArgs {
  args: Activity_Foryou_Feed_Args;
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
}

export interface Query_RootAuthorsArgs {
  distinct_on?: InputMaybe<Array<Authors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Authors_Order_By>>;
  where?: InputMaybe<Authors_Bool_Exp>;
}

export interface Query_RootAuthors_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Query_RootBook_CategoriesArgs {
  distinct_on?: InputMaybe<Array<Book_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Categories_Order_By>>;
  where?: InputMaybe<Book_Categories_Bool_Exp>;
}

export interface Query_RootBook_Categories_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Query_RootBook_CharactersArgs {
  distinct_on?: InputMaybe<Array<Book_Characters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Characters_Order_By>>;
  where?: InputMaybe<Book_Characters_Bool_Exp>;
}

export interface Query_RootBook_Characters_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Query_RootBook_CollectionsArgs {
  distinct_on?: InputMaybe<Array<Book_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Collections_Order_By>>;
  where?: InputMaybe<Book_Collections_Bool_Exp>;
}

export interface Query_RootBook_Collections_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Query_RootBook_MappingsArgs {
  distinct_on?: InputMaybe<Array<Book_Mappings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Mappings_Order_By>>;
  where?: InputMaybe<Book_Mappings_Bool_Exp>;
}

export interface Query_RootBook_Mappings_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Query_RootBook_SeriesArgs {
  distinct_on?: InputMaybe<Array<Book_Series_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Series_Order_By>>;
  where?: InputMaybe<Book_Series_Bool_Exp>;
}

export interface Query_RootBook_Series_AggregateArgs {
  distinct_on?: InputMaybe<Array<Book_Series_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Series_Order_By>>;
  where?: InputMaybe<Book_Series_Bool_Exp>;
}

export interface Query_RootBook_Series_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Query_RootBook_StatusesArgs {
  distinct_on?: InputMaybe<Array<Book_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Statuses_Order_By>>;
  where?: InputMaybe<Book_Statuses_Bool_Exp>;
}

export interface Query_RootBook_Statuses_By_PkArgs {
  id: Scalars['smallint']['input'];
}

export interface Query_RootBooklesArgs {
  distinct_on?: InputMaybe<Array<Bookles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bookles_Order_By>>;
  where?: InputMaybe<Bookles_Bool_Exp>;
}

export interface Query_RootBookles_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Query_RootBooksArgs {
  distinct_on?: InputMaybe<Array<Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Books_Order_By>>;
  where?: InputMaybe<Books_Bool_Exp>;
}

export interface Query_RootBooks_AggregateArgs {
  distinct_on?: InputMaybe<Array<Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Books_Order_By>>;
  where?: InputMaybe<Books_Bool_Exp>;
}

export interface Query_RootBooks_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Query_RootBooks_TrendingArgs {
  from: Scalars['date']['input'];
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  to: Scalars['date']['input'];
}

export interface Query_RootCharactersArgs {
  distinct_on?: InputMaybe<Array<Characters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Characters_Order_By>>;
  where?: InputMaybe<Characters_Bool_Exp>;
}

export interface Query_RootCharacters_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Query_RootCollection_Import_ResultsArgs {
  distinct_on?: InputMaybe<Array<Collection_Import_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Collection_Import_Results_Order_By>>;
  where?: InputMaybe<Collection_Import_Results_Bool_Exp>;
}

export interface Query_RootCollection_Import_Results_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Query_RootCollection_ImportsArgs {
  distinct_on?: InputMaybe<Array<Collection_Imports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Collection_Imports_Order_By>>;
  where?: InputMaybe<Collection_Imports_Bool_Exp>;
}

export interface Query_RootCollection_Imports_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Query_RootContributionsArgs {
  distinct_on?: InputMaybe<Array<Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contributions_Order_By>>;
  where?: InputMaybe<Contributions_Bool_Exp>;
}

export interface Query_RootContributions_AggregateArgs {
  distinct_on?: InputMaybe<Array<Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contributions_Order_By>>;
  where?: InputMaybe<Contributions_Bool_Exp>;
}

export interface Query_RootContributions_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Query_RootCountriesArgs {
  distinct_on?: InputMaybe<Array<Countries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Countries_Order_By>>;
  where?: InputMaybe<Countries_Bool_Exp>;
}

export interface Query_RootCountries_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Query_RootEditionsArgs {
  distinct_on?: InputMaybe<Array<Editions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Editions_Order_By>>;
  where?: InputMaybe<Editions_Bool_Exp>;
}

export interface Query_RootEditions_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Query_RootFlag_StatusesArgs {
  distinct_on?: InputMaybe<Array<Flag_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Flag_Statuses_Order_By>>;
  where?: InputMaybe<Flag_Statuses_Bool_Exp>;
}

export interface Query_RootFlag_Statuses_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Query_RootFollowed_ListsArgs {
  distinct_on?: InputMaybe<Array<Followed_Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Followed_Lists_Order_By>>;
  where?: InputMaybe<Followed_Lists_Bool_Exp>;
}

export interface Query_RootFollowed_Lists_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Query_RootFollowed_PromptsArgs {
  distinct_on?: InputMaybe<Array<Followed_Prompts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Followed_Prompts_Order_By>>;
  where?: InputMaybe<Followed_Prompts_Bool_Exp>;
}

export interface Query_RootFollowed_Prompts_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Query_RootFollowed_User_BooksArgs {
  distinct_on?: InputMaybe<Array<Followed_User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Followed_User_Books_Order_By>>;
  where?: InputMaybe<Followed_User_Books_Bool_Exp>;
}

export interface Query_RootFollowed_User_Books_AggregateArgs {
  distinct_on?: InputMaybe<Array<Followed_User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Followed_User_Books_Order_By>>;
  where?: InputMaybe<Followed_User_Books_Bool_Exp>;
}

export interface Query_RootFollowed_UsersArgs {
  distinct_on?: InputMaybe<Array<Followed_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Followed_Users_Order_By>>;
  where?: InputMaybe<Followed_Users_Bool_Exp>;
}

export interface Query_RootFollowed_Users_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Query_RootFollowing_User_BooksArgs {
  distinct_on?: InputMaybe<Array<Following_User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Following_User_Books_Order_By>>;
  where?: InputMaybe<Following_User_Books_Bool_Exp>;
}

export interface Query_RootFollowing_User_Books_AggregateArgs {
  distinct_on?: InputMaybe<Array<Following_User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Following_User_Books_Order_By>>;
  where?: InputMaybe<Following_User_Books_Bool_Exp>;
}

export interface Query_RootGoalsArgs {
  distinct_on?: InputMaybe<Array<Goals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Order_By>>;
  where?: InputMaybe<Goals_Bool_Exp>;
}

export interface Query_RootGoals_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Query_RootImagesArgs {
  distinct_on?: InputMaybe<Array<Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Images_Order_By>>;
  where?: InputMaybe<Images_Bool_Exp>;
}

export interface Query_RootImages_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Query_RootLanguagesArgs {
  distinct_on?: InputMaybe<Array<Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Languages_Order_By>>;
  where?: InputMaybe<Languages_Bool_Exp>;
}

export interface Query_RootLanguages_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Query_RootLikesArgs {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
}

export interface Query_RootLikes_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Query_RootList_BooksArgs {
  distinct_on?: InputMaybe<Array<List_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<List_Books_Order_By>>;
  where?: InputMaybe<List_Books_Bool_Exp>;
}

export interface Query_RootList_Books_AggregateArgs {
  distinct_on?: InputMaybe<Array<List_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<List_Books_Order_By>>;
  where?: InputMaybe<List_Books_Bool_Exp>;
}

export interface Query_RootList_Books_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Query_RootListsArgs {
  distinct_on?: InputMaybe<Array<Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lists_Order_By>>;
  where?: InputMaybe<Lists_Bool_Exp>;
}

export interface Query_RootLists_AggregateArgs {
  distinct_on?: InputMaybe<Array<Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lists_Order_By>>;
  where?: InputMaybe<Lists_Bool_Exp>;
}

export interface Query_RootLists_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Query_RootMeArgs {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
}

export interface Query_RootNotification_ChannelsArgs {
  distinct_on?: InputMaybe<Array<Notification_Channels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notification_Channels_Order_By>>;
  where?: InputMaybe<Notification_Channels_Bool_Exp>;
}

export interface Query_RootNotification_Channels_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Query_RootNotification_DeliveriesArgs {
  distinct_on?: InputMaybe<Array<Notification_Deliveries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notification_Deliveries_Order_By>>;
  where?: InputMaybe<Notification_Deliveries_Bool_Exp>;
}

export interface Query_RootNotification_Deliveries_AggregateArgs {
  distinct_on?: InputMaybe<Array<Notification_Deliveries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notification_Deliveries_Order_By>>;
  where?: InputMaybe<Notification_Deliveries_Bool_Exp>;
}

export interface Query_RootNotification_Deliveries_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Query_RootNotification_SettingsArgs {
  distinct_on?: InputMaybe<Array<Notification_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notification_Settings_Order_By>>;
  where?: InputMaybe<Notification_Settings_Bool_Exp>;
}

export interface Query_RootNotification_Settings_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Query_RootNotification_TypesArgs {
  distinct_on?: InputMaybe<Array<Notification_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notification_Types_Order_By>>;
  where?: InputMaybe<Notification_Types_Bool_Exp>;
}

export interface Query_RootNotification_Types_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Query_RootNotificationsArgs {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
}

export interface Query_RootNotifications_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Query_RootPlatformsArgs {
  distinct_on?: InputMaybe<Array<Platforms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Platforms_Order_By>>;
  where?: InputMaybe<Platforms_Bool_Exp>;
}

export interface Query_RootPlatforms_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Query_RootPrivacy_SettingsArgs {
  distinct_on?: InputMaybe<Array<Privacy_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Privacy_Settings_Order_By>>;
  where?: InputMaybe<Privacy_Settings_Bool_Exp>;
}

export interface Query_RootPrivacy_Settings_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Query_RootPrompt_AnswersArgs {
  distinct_on?: InputMaybe<Array<Prompt_Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prompt_Answers_Order_By>>;
  where?: InputMaybe<Prompt_Answers_Bool_Exp>;
}

export interface Query_RootPrompt_Answers_AggregateArgs {
  distinct_on?: InputMaybe<Array<Prompt_Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prompt_Answers_Order_By>>;
  where?: InputMaybe<Prompt_Answers_Bool_Exp>;
}

export interface Query_RootPrompt_Answers_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Query_RootPrompt_Books_SummaryArgs {
  distinct_on?: InputMaybe<Array<Prompt_Books_Summary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prompt_Books_Summary_Order_By>>;
  where?: InputMaybe<Prompt_Books_Summary_Bool_Exp>;
}

export interface Query_RootPromptsArgs {
  distinct_on?: InputMaybe<Array<Prompts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prompts_Order_By>>;
  where?: InputMaybe<Prompts_Bool_Exp>;
}

export interface Query_RootPrompts_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Query_RootPublishersArgs {
  distinct_on?: InputMaybe<Array<Publishers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Publishers_Order_By>>;
  where?: InputMaybe<Publishers_Bool_Exp>;
}

export interface Query_RootPublishers_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Query_RootReading_FormatsArgs {
  distinct_on?: InputMaybe<Array<Reading_Formats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reading_Formats_Order_By>>;
  where?: InputMaybe<Reading_Formats_Bool_Exp>;
}

export interface Query_RootReading_Formats_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Query_RootReading_JournalsArgs {
  distinct_on?: InputMaybe<Array<Reading_Journals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reading_Journals_Order_By>>;
  where?: InputMaybe<Reading_Journals_Bool_Exp>;
}

export interface Query_RootReading_Journals_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Query_RootReading_Journals_SummaryArgs {
  distinct_on?: InputMaybe<Array<Reading_Journals_Summary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reading_Journals_Summary_Order_By>>;
  where?: InputMaybe<Reading_Journals_Summary_Bool_Exp>;
}

export interface Query_RootRecommendationsArgs {
  distinct_on?: InputMaybe<Array<Recommendations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recommendations_Order_By>>;
  where?: InputMaybe<Recommendations_Bool_Exp>;
}

export interface Query_RootRecommendations_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Query_RootReferrals_For_UserArgs {
  end_date?: InputMaybe<Scalars['date']['input']>;
  limit: Scalars['Int']['input'];
  start_date?: InputMaybe<Scalars['date']['input']>;
  user_id: Scalars['Int']['input'];
}

export interface Query_RootSearchArgs {
  fields?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
  query_type?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  weights?: InputMaybe<Scalars['String']['input']>;
}

export interface Query_RootSeriesArgs {
  distinct_on?: InputMaybe<Array<Series_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Series_Order_By>>;
  where?: InputMaybe<Series_Bool_Exp>;
}

export interface Query_RootSeries_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Query_RootSubscriptionsArgs {
  default_payment_system_id: Scalars['Int']['input'];
}

export interface Query_RootTag_CategoriesArgs {
  distinct_on?: InputMaybe<Array<Tag_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tag_Categories_Order_By>>;
  where?: InputMaybe<Tag_Categories_Bool_Exp>;
}

export interface Query_RootTag_Categories_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Query_RootTaggable_CountsArgs {
  distinct_on?: InputMaybe<Array<Taggable_Counts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Taggable_Counts_Order_By>>;
  where?: InputMaybe<Taggable_Counts_Bool_Exp>;
}

export interface Query_RootTaggable_Counts_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Query_RootTaggingsArgs {
  distinct_on?: InputMaybe<Array<Taggings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Taggings_Order_By>>;
  where?: InputMaybe<Taggings_Bool_Exp>;
}

export interface Query_RootTaggings_AggregateArgs {
  distinct_on?: InputMaybe<Array<Taggings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Taggings_Order_By>>;
  where?: InputMaybe<Taggings_Bool_Exp>;
}

export interface Query_RootTaggings_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Query_RootTagsArgs {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
}

export interface Query_RootTags_AggregateArgs {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
}

export interface Query_RootTags_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Query_RootUser_BlocksArgs {
  distinct_on?: InputMaybe<Array<User_Blocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Blocks_Order_By>>;
  where?: InputMaybe<User_Blocks_Bool_Exp>;
}

export interface Query_RootUser_Blocks_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Query_RootUser_Book_ReadsArgs {
  distinct_on?: InputMaybe<Array<User_Book_Reads_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Book_Reads_Order_By>>;
  where?: InputMaybe<User_Book_Reads_Bool_Exp>;
}

export interface Query_RootUser_Book_Reads_AggregateArgs {
  distinct_on?: InputMaybe<Array<User_Book_Reads_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Book_Reads_Order_By>>;
  where?: InputMaybe<User_Book_Reads_Bool_Exp>;
}

export interface Query_RootUser_Book_Reads_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Query_RootUser_Book_StatusesArgs {
  distinct_on?: InputMaybe<Array<User_Book_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Book_Statuses_Order_By>>;
  where?: InputMaybe<User_Book_Statuses_Bool_Exp>;
}

export interface Query_RootUser_Book_Statuses_AggregateArgs {
  distinct_on?: InputMaybe<Array<User_Book_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Book_Statuses_Order_By>>;
  where?: InputMaybe<User_Book_Statuses_Bool_Exp>;
}

export interface Query_RootUser_Book_Statuses_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Query_RootUser_BooksArgs {
  distinct_on?: InputMaybe<Array<User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Books_Order_By>>;
  where?: InputMaybe<User_Books_Bool_Exp>;
}

export interface Query_RootUser_Books_AggregateArgs {
  distinct_on?: InputMaybe<Array<User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Books_Order_By>>;
  where?: InputMaybe<User_Books_Bool_Exp>;
}

export interface Query_RootUser_Books_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Query_RootUser_FlagsArgs {
  distinct_on?: InputMaybe<Array<User_Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Flags_Order_By>>;
  where?: InputMaybe<User_Flags_Bool_Exp>;
}

export interface Query_RootUser_Flags_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Query_RootUser_ReferralsArgs {
  distinct_on?: InputMaybe<Array<User_Referrals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Referrals_Order_By>>;
  where?: InputMaybe<User_Referrals_Bool_Exp>;
}

export interface Query_RootUser_Referrals_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Query_RootUser_StatusesArgs {
  distinct_on?: InputMaybe<Array<User_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Statuses_Order_By>>;
  where?: InputMaybe<User_Statuses_Bool_Exp>;
}

export interface Query_RootUser_Statuses_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Query_RootUsersArgs {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
}

export interface Query_RootUsers_Aggregate_By_Created_At_DateArgs {
  distinct_on?: InputMaybe<Array<Users_Aggregate_By_Created_At_Date_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Aggregate_By_Created_At_Date_Order_By>>;
  where?: InputMaybe<Users_Aggregate_By_Created_At_Date_Bool_Exp>;
}

export interface Query_RootUsers_By_PkArgs {
  id: Scalars['Int']['input'];
}

/** columns and relationships of "reading_formats" */
export interface Reading_Formats {
  __typename?: 'reading_formats';
  format: Scalars['String']['output'];
  id: Scalars['Int']['output'];
}

/** Boolean expression to filter rows from the table "reading_formats". All fields are combined with a logical 'AND'. */
export interface Reading_Formats_Bool_Exp {
  _and?: InputMaybe<Array<Reading_Formats_Bool_Exp>>;
  _not?: InputMaybe<Reading_Formats_Bool_Exp>;
  _or?: InputMaybe<Array<Reading_Formats_Bool_Exp>>;
  format?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
}

/** Ordering options when selecting data from "reading_formats". */
export interface Reading_Formats_Order_By {
  format?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
}

/** select columns of table "reading_formats" */
export enum Reading_Formats_Select_Column {
  /** column name */
  Format = 'format',
  /** column name */
  Id = 'id',
}

/** Streaming cursor of the table "reading_formats" */
export interface Reading_Formats_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Reading_Formats_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Reading_Formats_Stream_Cursor_Value_Input {
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
}

/** columns and relationships of "reading_journals" */
export interface Reading_Journals {
  __typename?: 'reading_journals';
  /** An object relationship */
  book?: Maybe<Books>;
  book_id?: Maybe<Scalars['Int']['output']>;
  created_at: Scalars['timestamp']['output'];
  /** An object relationship */
  edition?: Maybe<Editions>;
  edition_id?: Maybe<Scalars['Int']['output']>;
  entry?: Maybe<Scalars['String']['output']>;
  event?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  followers: Array<Followed_Users>;
  id: Scalars['bigint']['output'];
  /** An array relationship */
  likes: Array<Likes>;
  likes_count: Scalars['Int']['output'];
  metadata: Scalars['jsonb']['output'];
  object_type: Scalars['String']['output'];
  privacy_setting_id: Scalars['Int']['output'];
  /** An array relationship */
  taggings: Array<Taggings>;
  /** An aggregate relationship */
  taggings_aggregate: Taggings_Aggregate;
  updated_at: Scalars['timestamp']['output'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** columns and relationships of "reading_journals" */
export interface Reading_JournalsFollowersArgs {
  distinct_on?: InputMaybe<Array<Followed_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Followed_Users_Order_By>>;
  where?: InputMaybe<Followed_Users_Bool_Exp>;
}

/** columns and relationships of "reading_journals" */
export interface Reading_JournalsLikesArgs {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
}

/** columns and relationships of "reading_journals" */
export interface Reading_JournalsMetadataArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "reading_journals" */
export interface Reading_JournalsTaggingsArgs {
  distinct_on?: InputMaybe<Array<Taggings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Taggings_Order_By>>;
  where?: InputMaybe<Taggings_Bool_Exp>;
}

/** columns and relationships of "reading_journals" */
export interface Reading_JournalsTaggings_AggregateArgs {
  distinct_on?: InputMaybe<Array<Taggings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Taggings_Order_By>>;
  where?: InputMaybe<Taggings_Bool_Exp>;
}

/** order by aggregate values of table "reading_journals" */
export interface Reading_Journals_Aggregate_Order_By {
  avg?: InputMaybe<Reading_Journals_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Reading_Journals_Max_Order_By>;
  min?: InputMaybe<Reading_Journals_Min_Order_By>;
  stddev?: InputMaybe<Reading_Journals_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Reading_Journals_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Reading_Journals_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Reading_Journals_Sum_Order_By>;
  var_pop?: InputMaybe<Reading_Journals_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Reading_Journals_Var_Samp_Order_By>;
  variance?: InputMaybe<Reading_Journals_Variance_Order_By>;
}

/** order by avg() on columns of table "reading_journals" */
export interface Reading_Journals_Avg_Order_By {
  book_id?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "reading_journals". All fields are combined with a logical 'AND'. */
export interface Reading_Journals_Bool_Exp {
  _and?: InputMaybe<Array<Reading_Journals_Bool_Exp>>;
  _not?: InputMaybe<Reading_Journals_Bool_Exp>;
  _or?: InputMaybe<Array<Reading_Journals_Bool_Exp>>;
  book?: InputMaybe<Books_Bool_Exp>;
  book_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  edition?: InputMaybe<Editions_Bool_Exp>;
  edition_id?: InputMaybe<Int_Comparison_Exp>;
  entry?: InputMaybe<String_Comparison_Exp>;
  event?: InputMaybe<String_Comparison_Exp>;
  followers?: InputMaybe<Followed_Users_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  likes?: InputMaybe<Likes_Bool_Exp>;
  likes_count?: InputMaybe<Int_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  object_type?: InputMaybe<String_Comparison_Exp>;
  privacy_setting_id?: InputMaybe<Int_Comparison_Exp>;
  taggings?: InputMaybe<Taggings_Bool_Exp>;
  taggings_aggregate?: InputMaybe<Taggings_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
}

/** order by max() on columns of table "reading_journals" */
export interface Reading_Journals_Max_Order_By {
  book_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  entry?: InputMaybe<Order_By>;
  event?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  object_type?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by min() on columns of table "reading_journals" */
export interface Reading_Journals_Min_Order_By {
  book_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  entry?: InputMaybe<Order_By>;
  event?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  object_type?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Ordering options when selecting data from "reading_journals". */
export interface Reading_Journals_Order_By {
  book?: InputMaybe<Books_Order_By>;
  book_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  edition?: InputMaybe<Editions_Order_By>;
  edition_id?: InputMaybe<Order_By>;
  entry?: InputMaybe<Order_By>;
  event?: InputMaybe<Order_By>;
  followers_aggregate?: InputMaybe<Followed_Users_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  likes_aggregate?: InputMaybe<Likes_Aggregate_Order_By>;
  likes_count?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  object_type?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  taggings_aggregate?: InputMaybe<Taggings_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** select columns of table "reading_journals" */
export enum Reading_Journals_Select_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EditionId = 'edition_id',
  /** column name */
  Entry = 'entry',
  /** column name */
  Event = 'event',
  /** column name */
  Id = 'id',
  /** column name */
  LikesCount = 'likes_count',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  ObjectType = 'object_type',
  /** column name */
  PrivacySettingId = 'privacy_setting_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** order by stddev() on columns of table "reading_journals" */
export interface Reading_Journals_Stddev_Order_By {
  book_id?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by stddev_pop() on columns of table "reading_journals" */
export interface Reading_Journals_Stddev_Pop_Order_By {
  book_id?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by stddev_samp() on columns of table "reading_journals" */
export interface Reading_Journals_Stddev_Samp_Order_By {
  book_id?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "reading_journals" */
export interface Reading_Journals_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Reading_Journals_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Reading_Journals_Stream_Cursor_Value_Input {
  book_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  edition_id?: InputMaybe<Scalars['Int']['input']>;
  entry?: InputMaybe<Scalars['String']['input']>;
  event?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  likes_count?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  object_type?: InputMaybe<Scalars['String']['input']>;
  privacy_setting_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
}

/** order by sum() on columns of table "reading_journals" */
export interface Reading_Journals_Sum_Order_By {
  book_id?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** columns and relationships of "reading_journals_summary" */
export interface Reading_Journals_Summary {
  __typename?: 'reading_journals_summary';
  /** An object relationship */
  book?: Maybe<Books>;
  book_id?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  followers: Array<Followed_Users>;
  journals_count?: Maybe<Scalars['bigint']['output']>;
  last_updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** An array relationship */
  reading_journals: Array<Reading_Journals>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** columns and relationships of "reading_journals_summary" */
export interface Reading_Journals_SummaryFollowersArgs {
  distinct_on?: InputMaybe<Array<Followed_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Followed_Users_Order_By>>;
  where?: InputMaybe<Followed_Users_Bool_Exp>;
}

/** columns and relationships of "reading_journals_summary" */
export interface Reading_Journals_SummaryReading_JournalsArgs {
  distinct_on?: InputMaybe<Array<Reading_Journals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reading_Journals_Order_By>>;
  where?: InputMaybe<Reading_Journals_Bool_Exp>;
}

/** Boolean expression to filter rows from the table "reading_journals_summary". All fields are combined with a logical 'AND'. */
export interface Reading_Journals_Summary_Bool_Exp {
  _and?: InputMaybe<Array<Reading_Journals_Summary_Bool_Exp>>;
  _not?: InputMaybe<Reading_Journals_Summary_Bool_Exp>;
  _or?: InputMaybe<Array<Reading_Journals_Summary_Bool_Exp>>;
  book?: InputMaybe<Books_Bool_Exp>;
  book_id?: InputMaybe<Int_Comparison_Exp>;
  followers?: InputMaybe<Followed_Users_Bool_Exp>;
  journals_count?: InputMaybe<Bigint_Comparison_Exp>;
  last_updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  reading_journals?: InputMaybe<Reading_Journals_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
}

/** Ordering options when selecting data from "reading_journals_summary". */
export interface Reading_Journals_Summary_Order_By {
  book?: InputMaybe<Books_Order_By>;
  book_id?: InputMaybe<Order_By>;
  followers_aggregate?: InputMaybe<Followed_Users_Aggregate_Order_By>;
  journals_count?: InputMaybe<Order_By>;
  last_updated_at?: InputMaybe<Order_By>;
  reading_journals_aggregate?: InputMaybe<Reading_Journals_Aggregate_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** select columns of table "reading_journals_summary" */
export enum Reading_Journals_Summary_Select_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  JournalsCount = 'journals_count',
  /** column name */
  LastUpdatedAt = 'last_updated_at',
  /** column name */
  UserId = 'user_id',
}

/** Streaming cursor of the table "reading_journals_summary" */
export interface Reading_Journals_Summary_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Reading_Journals_Summary_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Reading_Journals_Summary_Stream_Cursor_Value_Input {
  book_id?: InputMaybe<Scalars['Int']['input']>;
  journals_count?: InputMaybe<Scalars['bigint']['input']>;
  last_updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
}

/** order by var_pop() on columns of table "reading_journals" */
export interface Reading_Journals_Var_Pop_Order_By {
  book_id?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by var_samp() on columns of table "reading_journals" */
export interface Reading_Journals_Var_Samp_Order_By {
  book_id?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by variance() on columns of table "reading_journals" */
export interface Reading_Journals_Variance_Order_By {
  book_id?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** columns and relationships of "disco_recommendations" */
export interface Recommendations {
  __typename?: 'recommendations';
  context?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamp']['output'];
  id: Scalars['bigint']['output'];
  /** An object relationship */
  item_book?: Maybe<Books>;
  item_id?: Maybe<Scalars['bigint']['output']>;
  item_type?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  item_user?: Maybe<Users>;
  score?: Maybe<Scalars['float8']['output']>;
  subject_id?: Maybe<Scalars['bigint']['output']>;
  subject_type?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  subject_user?: Maybe<Users>;
  updated_at: Scalars['timestamp']['output'];
}

/** order by aggregate values of table "disco_recommendations" */
export interface Recommendations_Aggregate_Order_By {
  avg?: InputMaybe<Recommendations_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Recommendations_Max_Order_By>;
  min?: InputMaybe<Recommendations_Min_Order_By>;
  stddev?: InputMaybe<Recommendations_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Recommendations_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Recommendations_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Recommendations_Sum_Order_By>;
  var_pop?: InputMaybe<Recommendations_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Recommendations_Var_Samp_Order_By>;
  variance?: InputMaybe<Recommendations_Variance_Order_By>;
}

/** order by avg() on columns of table "disco_recommendations" */
export interface Recommendations_Avg_Order_By {
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  subject_id?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "disco_recommendations". All fields are combined with a logical 'AND'. */
export interface Recommendations_Bool_Exp {
  _and?: InputMaybe<Array<Recommendations_Bool_Exp>>;
  _not?: InputMaybe<Recommendations_Bool_Exp>;
  _or?: InputMaybe<Array<Recommendations_Bool_Exp>>;
  context?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  item_book?: InputMaybe<Books_Bool_Exp>;
  item_id?: InputMaybe<Bigint_Comparison_Exp>;
  item_type?: InputMaybe<String_Comparison_Exp>;
  item_user?: InputMaybe<Users_Bool_Exp>;
  score?: InputMaybe<Float8_Comparison_Exp>;
  subject_id?: InputMaybe<Bigint_Comparison_Exp>;
  subject_type?: InputMaybe<String_Comparison_Exp>;
  subject_user?: InputMaybe<Users_Bool_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
}

/** order by max() on columns of table "disco_recommendations" */
export interface Recommendations_Max_Order_By {
  context?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  item_type?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  subject_id?: InputMaybe<Order_By>;
  subject_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
}

/** order by min() on columns of table "disco_recommendations" */
export interface Recommendations_Min_Order_By {
  context?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  item_type?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  subject_id?: InputMaybe<Order_By>;
  subject_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
}

/** Ordering options when selecting data from "disco_recommendations". */
export interface Recommendations_Order_By {
  context?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item_book?: InputMaybe<Books_Order_By>;
  item_id?: InputMaybe<Order_By>;
  item_type?: InputMaybe<Order_By>;
  item_user?: InputMaybe<Users_Order_By>;
  score?: InputMaybe<Order_By>;
  subject_id?: InputMaybe<Order_By>;
  subject_type?: InputMaybe<Order_By>;
  subject_user?: InputMaybe<Users_Order_By>;
  updated_at?: InputMaybe<Order_By>;
}

/** select columns of table "disco_recommendations" */
export enum Recommendations_Select_Column {
  /** column name */
  Context = 'context',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ItemId = 'item_id',
  /** column name */
  ItemType = 'item_type',
  /** column name */
  Score = 'score',
  /** column name */
  SubjectId = 'subject_id',
  /** column name */
  SubjectType = 'subject_type',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** order by stddev() on columns of table "disco_recommendations" */
export interface Recommendations_Stddev_Order_By {
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  subject_id?: InputMaybe<Order_By>;
}

/** order by stddev_pop() on columns of table "disco_recommendations" */
export interface Recommendations_Stddev_Pop_Order_By {
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  subject_id?: InputMaybe<Order_By>;
}

/** order by stddev_samp() on columns of table "disco_recommendations" */
export interface Recommendations_Stddev_Samp_Order_By {
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  subject_id?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "recommendations" */
export interface Recommendations_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Recommendations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Recommendations_Stream_Cursor_Value_Input {
  context?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  item_id?: InputMaybe<Scalars['bigint']['input']>;
  item_type?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['float8']['input']>;
  subject_id?: InputMaybe<Scalars['bigint']['input']>;
  subject_type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
}

/** order by sum() on columns of table "disco_recommendations" */
export interface Recommendations_Sum_Order_By {
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  subject_id?: InputMaybe<Order_By>;
}

/** order by var_pop() on columns of table "disco_recommendations" */
export interface Recommendations_Var_Pop_Order_By {
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  subject_id?: InputMaybe<Order_By>;
}

/** order by var_samp() on columns of table "disco_recommendations" */
export interface Recommendations_Var_Samp_Order_By {
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  subject_id?: InputMaybe<Order_By>;
}

/** order by variance() on columns of table "disco_recommendations" */
export interface Recommendations_Variance_Order_By {
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  subject_id?: InputMaybe<Order_By>;
}

/** columns and relationships of "series" */
export interface Series {
  __typename?: 'series';
  /** An object relationship */
  author?: Maybe<Authors>;
  author_id?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  book_series: Array<Book_Series>;
  /** An aggregate relationship */
  book_series_aggregate: Book_Series_Aggregate;
  books_count: Scalars['Int']['output'];
  /** An object relationship */
  canonical?: Maybe<Series>;
  canonical_id?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  creator?: Maybe<Users>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  identifiers: Scalars['jsonb']['output'];
  is_completed?: Maybe<Scalars['Boolean']['output']>;
  locked: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  primary_books_count?: Maybe<Scalars['Int']['output']>;
  slug: Scalars['String']['output'];
  state: Scalars['String']['output'];
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** columns and relationships of "series" */
export interface SeriesBook_SeriesArgs {
  distinct_on?: InputMaybe<Array<Book_Series_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Series_Order_By>>;
  where?: InputMaybe<Book_Series_Bool_Exp>;
}

/** columns and relationships of "series" */
export interface SeriesBook_Series_AggregateArgs {
  distinct_on?: InputMaybe<Array<Book_Series_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Series_Order_By>>;
  where?: InputMaybe<Book_Series_Bool_Exp>;
}

/** columns and relationships of "series" */
export interface SeriesIdentifiersArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** Boolean expression to filter rows from the table "series". All fields are combined with a logical 'AND'. */
export interface Series_Bool_Exp {
  _and?: InputMaybe<Array<Series_Bool_Exp>>;
  _not?: InputMaybe<Series_Bool_Exp>;
  _or?: InputMaybe<Array<Series_Bool_Exp>>;
  author?: InputMaybe<Authors_Bool_Exp>;
  author_id?: InputMaybe<Int_Comparison_Exp>;
  book_series?: InputMaybe<Book_Series_Bool_Exp>;
  book_series_aggregate?: InputMaybe<Book_Series_Aggregate_Bool_Exp>;
  books_count?: InputMaybe<Int_Comparison_Exp>;
  canonical?: InputMaybe<Series_Bool_Exp>;
  canonical_id?: InputMaybe<Int_Comparison_Exp>;
  creator?: InputMaybe<Users_Bool_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  identifiers?: InputMaybe<Jsonb_Comparison_Exp>;
  is_completed?: InputMaybe<Boolean_Comparison_Exp>;
  locked?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  primary_books_count?: InputMaybe<Int_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
}

/** Ordering options when selecting data from "series". */
export interface Series_Order_By {
  author?: InputMaybe<Authors_Order_By>;
  author_id?: InputMaybe<Order_By>;
  book_series_aggregate?: InputMaybe<Book_Series_Aggregate_Order_By>;
  books_count?: InputMaybe<Order_By>;
  canonical?: InputMaybe<Series_Order_By>;
  canonical_id?: InputMaybe<Order_By>;
  creator?: InputMaybe<Users_Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  identifiers?: InputMaybe<Order_By>;
  is_completed?: InputMaybe<Order_By>;
  locked?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  primary_books_count?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** select columns of table "series" */
export enum Series_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  BooksCount = 'books_count',
  /** column name */
  CanonicalId = 'canonical_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Identifiers = 'identifiers',
  /** column name */
  IsCompleted = 'is_completed',
  /** column name */
  Locked = 'locked',
  /** column name */
  Name = 'name',
  /** column name */
  PrimaryBooksCount = 'primary_books_count',
  /** column name */
  Slug = 'slug',
  /** column name */
  State = 'state',
  /** column name */
  UserId = 'user_id',
}

/** Streaming cursor of the table "series" */
export interface Series_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Series_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Series_Stream_Cursor_Value_Input {
  author_id?: InputMaybe<Scalars['Int']['input']>;
  books_count?: InputMaybe<Scalars['Int']['input']>;
  canonical_id?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  identifiers?: InputMaybe<Scalars['jsonb']['input']>;
  is_completed?: InputMaybe<Scalars['Boolean']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  primary_books_count?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
}

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export interface Smallint_Comparison_Exp {
  _eq?: InputMaybe<Scalars['smallint']['input']>;
  _gt?: InputMaybe<Scalars['smallint']['input']>;
  _gte?: InputMaybe<Scalars['smallint']['input']>;
  _in?: InputMaybe<Array<Scalars['smallint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['smallint']['input']>;
  _lte?: InputMaybe<Scalars['smallint']['input']>;
  _neq?: InputMaybe<Scalars['smallint']['input']>;
  _nin?: InputMaybe<Array<Scalars['smallint']['input']>>;
}

export interface Subscription_Root {
  __typename?: 'subscription_root';
  /** An array relationship */
  activities: Array<Activities>;
  /** fetch data from the table: "activities" using primary key columns */
  activities_by_pk?: Maybe<Activities>;
  /** fetch data from the table in a streaming manner: "activities" */
  activities_stream: Array<Activities>;
  /** execute function "activity_feed" which returns "activities" */
  activity_feed: Array<Activities>;
  /** execute function "activity_foryou_feed" which returns "activities" */
  activity_foryou_feed: Array<Activities>;
  /** fetch data from the table: "authors" */
  authors: Array<Authors>;
  /** fetch data from the table: "authors" using primary key columns */
  authors_by_pk?: Maybe<Authors>;
  /** fetch data from the table in a streaming manner: "authors" */
  authors_stream: Array<Authors>;
  /** fetch data from the table: "book_categories" */
  book_categories: Array<Book_Categories>;
  /** fetch data from the table: "book_categories" using primary key columns */
  book_categories_by_pk?: Maybe<Book_Categories>;
  /** fetch data from the table in a streaming manner: "book_categories" */
  book_categories_stream: Array<Book_Categories>;
  /** An array relationship */
  book_characters: Array<Book_Characters>;
  /** fetch data from the table: "book_characters" using primary key columns */
  book_characters_by_pk?: Maybe<Book_Characters>;
  /** fetch data from the table in a streaming manner: "book_characters" */
  book_characters_stream: Array<Book_Characters>;
  /** fetch data from the table: "book_collections" */
  book_collections: Array<Book_Collections>;
  /** fetch data from the table: "book_collections" using primary key columns */
  book_collections_by_pk?: Maybe<Book_Collections>;
  /** fetch data from the table in a streaming manner: "book_collections" */
  book_collections_stream: Array<Book_Collections>;
  /** An array relationship */
  book_mappings: Array<Book_Mappings>;
  /** fetch data from the table: "book_mappings" using primary key columns */
  book_mappings_by_pk?: Maybe<Book_Mappings>;
  /** fetch data from the table in a streaming manner: "book_mappings" */
  book_mappings_stream: Array<Book_Mappings>;
  /** An array relationship */
  book_series: Array<Book_Series>;
  /** An aggregate relationship */
  book_series_aggregate: Book_Series_Aggregate;
  /** fetch data from the table: "book_series" using primary key columns */
  book_series_by_pk?: Maybe<Book_Series>;
  /** fetch data from the table in a streaming manner: "book_series" */
  book_series_stream: Array<Book_Series>;
  /** fetch data from the table: "book_statuses" */
  book_statuses: Array<Book_Statuses>;
  /** fetch data from the table: "book_statuses" using primary key columns */
  book_statuses_by_pk?: Maybe<Book_Statuses>;
  /** fetch data from the table in a streaming manner: "book_statuses" */
  book_statuses_stream: Array<Book_Statuses>;
  /** fetch data from the table: "bookles" */
  bookles: Array<Bookles>;
  /** fetch data from the table: "bookles" using primary key columns */
  bookles_by_pk?: Maybe<Bookles>;
  /** fetch data from the table in a streaming manner: "bookles" */
  bookles_stream: Array<Bookles>;
  /** An array relationship */
  books: Array<Books>;
  /** An aggregate relationship */
  books_aggregate: Books_Aggregate;
  /** fetch data from the table: "books" using primary key columns */
  books_by_pk?: Maybe<Books>;
  /** fetch data from the table in a streaming manner: "books" */
  books_stream: Array<Books>;
  /** fetch data from the table: "characters" */
  characters: Array<Characters>;
  /** fetch data from the table: "characters" using primary key columns */
  characters_by_pk?: Maybe<Characters>;
  /** fetch data from the table in a streaming manner: "characters" */
  characters_stream: Array<Characters>;
  /** An array relationship */
  collection_import_results: Array<Collection_Import_Results>;
  /** fetch data from the table: "collection_import_results" using primary key columns */
  collection_import_results_by_pk?: Maybe<Collection_Import_Results>;
  /** fetch data from the table in a streaming manner: "collection_import_results" */
  collection_import_results_stream: Array<Collection_Import_Results>;
  /** An array relationship */
  collection_imports: Array<Collection_Imports>;
  /** fetch data from the table: "collection_imports" using primary key columns */
  collection_imports_by_pk?: Maybe<Collection_Imports>;
  /** fetch data from the table in a streaming manner: "collection_imports" */
  collection_imports_stream: Array<Collection_Imports>;
  /** An array relationship */
  contributions: Array<Contributions>;
  /** An aggregate relationship */
  contributions_aggregate: Contributions_Aggregate;
  /** fetch data from the table: "contributions" using primary key columns */
  contributions_by_pk?: Maybe<Contributions>;
  /** fetch data from the table in a streaming manner: "contributions" */
  contributions_stream: Array<Contributions>;
  /** fetch data from the table: "countries" */
  countries: Array<Countries>;
  /** fetch data from the table: "countries" using primary key columns */
  countries_by_pk?: Maybe<Countries>;
  /** fetch data from the table in a streaming manner: "countries" */
  countries_stream: Array<Countries>;
  /** An array relationship */
  editions: Array<Editions>;
  /** fetch data from the table: "editions" using primary key columns */
  editions_by_pk?: Maybe<Editions>;
  /** fetch data from the table in a streaming manner: "editions" */
  editions_stream: Array<Editions>;
  /** fetch data from the table: "flag_statuses" */
  flag_statuses: Array<Flag_Statuses>;
  /** fetch data from the table: "flag_statuses" using primary key columns */
  flag_statuses_by_pk?: Maybe<Flag_Statuses>;
  /** fetch data from the table in a streaming manner: "flag_statuses" */
  flag_statuses_stream: Array<Flag_Statuses>;
  /** An array relationship */
  followed_lists: Array<Followed_Lists>;
  /** fetch data from the table: "followed_lists" using primary key columns */
  followed_lists_by_pk?: Maybe<Followed_Lists>;
  /** fetch data from the table in a streaming manner: "followed_lists" */
  followed_lists_stream: Array<Followed_Lists>;
  /** An array relationship */
  followed_prompts: Array<Followed_Prompts>;
  /** fetch data from the table: "followed_prompts" using primary key columns */
  followed_prompts_by_pk?: Maybe<Followed_Prompts>;
  /** fetch data from the table in a streaming manner: "followed_prompts" */
  followed_prompts_stream: Array<Followed_Prompts>;
  /** fetch data from the table: "followed_user_books" */
  followed_user_books: Array<Followed_User_Books>;
  /** fetch aggregated fields from the table: "followed_user_books" */
  followed_user_books_aggregate: Followed_User_Books_Aggregate;
  /** fetch data from the table in a streaming manner: "followed_user_books" */
  followed_user_books_stream: Array<Followed_User_Books>;
  /** An array relationship */
  followed_users: Array<Followed_Users>;
  /** fetch data from the table: "followed_users" using primary key columns */
  followed_users_by_pk?: Maybe<Followed_Users>;
  /** fetch data from the table in a streaming manner: "followed_users" */
  followed_users_stream: Array<Followed_Users>;
  /** fetch data from the table: "following_user_books" */
  following_user_books: Array<Following_User_Books>;
  /** fetch aggregated fields from the table: "following_user_books" */
  following_user_books_aggregate: Following_User_Books_Aggregate;
  /** fetch data from the table in a streaming manner: "following_user_books" */
  following_user_books_stream: Array<Following_User_Books>;
  /** An array relationship */
  goals: Array<Goals>;
  /** fetch data from the table: "goals" using primary key columns */
  goals_by_pk?: Maybe<Goals>;
  /** fetch data from the table in a streaming manner: "goals" */
  goals_stream: Array<Goals>;
  /** An array relationship */
  images: Array<Images>;
  /** fetch data from the table: "images" using primary key columns */
  images_by_pk?: Maybe<Images>;
  /** fetch data from the table in a streaming manner: "images" */
  images_stream: Array<Images>;
  /** fetch data from the table: "languages" */
  languages: Array<Languages>;
  /** fetch data from the table: "languages" using primary key columns */
  languages_by_pk?: Maybe<Languages>;
  /** fetch data from the table in a streaming manner: "languages" */
  languages_stream: Array<Languages>;
  /** An array relationship */
  likes: Array<Likes>;
  /** fetch data from the table: "likes" using primary key columns */
  likes_by_pk?: Maybe<Likes>;
  /** fetch data from the table in a streaming manner: "likes" */
  likes_stream: Array<Likes>;
  /** An array relationship */
  list_books: Array<List_Books>;
  /** An aggregate relationship */
  list_books_aggregate: List_Books_Aggregate;
  /** fetch data from the table: "list_books" using primary key columns */
  list_books_by_pk?: Maybe<List_Books>;
  /** fetch data from the table in a streaming manner: "list_books" */
  list_books_stream: Array<List_Books>;
  /** An array relationship */
  lists: Array<Lists>;
  /** An aggregate relationship */
  lists_aggregate: Lists_Aggregate;
  /** fetch data from the table: "lists" using primary key columns */
  lists_by_pk?: Maybe<Lists>;
  /** fetch data from the table in a streaming manner: "lists" */
  lists_stream: Array<Lists>;
  /** execute function "me" which returns "users" */
  me: Array<Users>;
  /** fetch data from the table: "notification_channels" */
  notification_channels: Array<Notification_Channels>;
  /** fetch data from the table: "notification_channels" using primary key columns */
  notification_channels_by_pk?: Maybe<Notification_Channels>;
  /** fetch data from the table in a streaming manner: "notification_channels" */
  notification_channels_stream: Array<Notification_Channels>;
  /** An array relationship */
  notification_deliveries: Array<Notification_Deliveries>;
  /** An aggregate relationship */
  notification_deliveries_aggregate: Notification_Deliveries_Aggregate;
  /** fetch data from the table: "notification_deliveries" using primary key columns */
  notification_deliveries_by_pk?: Maybe<Notification_Deliveries>;
  /** fetch data from the table in a streaming manner: "notification_deliveries" */
  notification_deliveries_stream: Array<Notification_Deliveries>;
  /** fetch data from the table: "notification_settings" */
  notification_settings: Array<Notification_Settings>;
  /** fetch data from the table: "notification_settings" using primary key columns */
  notification_settings_by_pk?: Maybe<Notification_Settings>;
  /** fetch data from the table in a streaming manner: "notification_settings" */
  notification_settings_stream: Array<Notification_Settings>;
  /** fetch data from the table: "notification_types" */
  notification_types: Array<Notification_Types>;
  /** fetch data from the table: "notification_types" using primary key columns */
  notification_types_by_pk?: Maybe<Notification_Types>;
  /** fetch data from the table in a streaming manner: "notification_types" */
  notification_types_stream: Array<Notification_Types>;
  /** fetch data from the table: "notifications" */
  notifications: Array<Notifications>;
  /** fetch data from the table: "notifications" using primary key columns */
  notifications_by_pk?: Maybe<Notifications>;
  /** fetch data from the table in a streaming manner: "notifications" */
  notifications_stream: Array<Notifications>;
  /** fetch data from the table: "platforms" */
  platforms: Array<Platforms>;
  /** fetch data from the table: "platforms" using primary key columns */
  platforms_by_pk?: Maybe<Platforms>;
  /** fetch data from the table in a streaming manner: "platforms" */
  platforms_stream: Array<Platforms>;
  /** fetch data from the table: "privacy_settings" */
  privacy_settings: Array<Privacy_Settings>;
  /** fetch data from the table: "privacy_settings" using primary key columns */
  privacy_settings_by_pk?: Maybe<Privacy_Settings>;
  /** fetch data from the table in a streaming manner: "privacy_settings" */
  privacy_settings_stream: Array<Privacy_Settings>;
  /** An array relationship */
  prompt_answers: Array<Prompt_Answers>;
  /** An aggregate relationship */
  prompt_answers_aggregate: Prompt_Answers_Aggregate;
  /** fetch data from the table: "prompt_answers" using primary key columns */
  prompt_answers_by_pk?: Maybe<Prompt_Answers>;
  /** fetch data from the table in a streaming manner: "prompt_answers" */
  prompt_answers_stream: Array<Prompt_Answers>;
  /** fetch data from the table: "prompt_books_summary" */
  prompt_books_summary: Array<Prompt_Books_Summary>;
  /** fetch data from the table in a streaming manner: "prompt_books_summary" */
  prompt_books_summary_stream: Array<Prompt_Books_Summary>;
  /** An array relationship */
  prompts: Array<Prompts>;
  /** fetch data from the table: "prompts" using primary key columns */
  prompts_by_pk?: Maybe<Prompts>;
  /** fetch data from the table in a streaming manner: "prompts" */
  prompts_stream: Array<Prompts>;
  /** fetch data from the table: "publishers" */
  publishers: Array<Publishers>;
  /** fetch data from the table: "publishers" using primary key columns */
  publishers_by_pk?: Maybe<Publishers>;
  /** fetch data from the table in a streaming manner: "publishers" */
  publishers_stream: Array<Publishers>;
  /** fetch data from the table: "reading_formats" */
  reading_formats: Array<Reading_Formats>;
  /** fetch data from the table: "reading_formats" using primary key columns */
  reading_formats_by_pk?: Maybe<Reading_Formats>;
  /** fetch data from the table in a streaming manner: "reading_formats" */
  reading_formats_stream: Array<Reading_Formats>;
  /** An array relationship */
  reading_journals: Array<Reading_Journals>;
  /** fetch data from the table: "reading_journals" using primary key columns */
  reading_journals_by_pk?: Maybe<Reading_Journals>;
  /** fetch data from the table in a streaming manner: "reading_journals" */
  reading_journals_stream: Array<Reading_Journals>;
  /** fetch data from the table: "reading_journals_summary" */
  reading_journals_summary: Array<Reading_Journals_Summary>;
  /** fetch data from the table in a streaming manner: "reading_journals_summary" */
  reading_journals_summary_stream: Array<Reading_Journals_Summary>;
  /** An array relationship */
  recommendations: Array<Recommendations>;
  /** fetch data from the table: "disco_recommendations" using primary key columns */
  recommendations_by_pk?: Maybe<Recommendations>;
  /** fetch data from the table in a streaming manner: "disco_recommendations" */
  recommendations_stream: Array<Recommendations>;
  /** fetch data from the table: "series" */
  series: Array<Series>;
  /** fetch data from the table: "series" using primary key columns */
  series_by_pk?: Maybe<Series>;
  /** fetch data from the table in a streaming manner: "series" */
  series_stream: Array<Series>;
  /** fetch data from the table: "tag_categories" */
  tag_categories: Array<Tag_Categories>;
  /** fetch data from the table: "tag_categories" using primary key columns */
  tag_categories_by_pk?: Maybe<Tag_Categories>;
  /** fetch data from the table in a streaming manner: "tag_categories" */
  tag_categories_stream: Array<Tag_Categories>;
  /** An array relationship */
  taggable_counts: Array<Taggable_Counts>;
  /** fetch data from the table: "taggable_counts" using primary key columns */
  taggable_counts_by_pk?: Maybe<Taggable_Counts>;
  /** fetch data from the table in a streaming manner: "taggable_counts" */
  taggable_counts_stream: Array<Taggable_Counts>;
  /** An array relationship */
  taggings: Array<Taggings>;
  /** An aggregate relationship */
  taggings_aggregate: Taggings_Aggregate;
  /** fetch data from the table: "taggings" using primary key columns */
  taggings_by_pk?: Maybe<Taggings>;
  /** fetch data from the table in a streaming manner: "taggings" */
  taggings_stream: Array<Taggings>;
  /** An array relationship */
  tags: Array<Tags>;
  /** An aggregate relationship */
  tags_aggregate: Tags_Aggregate;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
  /** fetch data from the table in a streaming manner: "tags" */
  tags_stream: Array<Tags>;
  /** fetch data from the table: "user_blocks" */
  user_blocks: Array<User_Blocks>;
  /** fetch data from the table: "user_blocks" using primary key columns */
  user_blocks_by_pk?: Maybe<User_Blocks>;
  /** fetch data from the table in a streaming manner: "user_blocks" */
  user_blocks_stream: Array<User_Blocks>;
  /** An array relationship */
  user_book_reads: Array<User_Book_Reads>;
  /** An aggregate relationship */
  user_book_reads_aggregate: User_Book_Reads_Aggregate;
  /** fetch data from the table: "user_book_reads" using primary key columns */
  user_book_reads_by_pk?: Maybe<User_Book_Reads>;
  /** fetch data from the table in a streaming manner: "user_book_reads" */
  user_book_reads_stream: Array<User_Book_Reads>;
  /** fetch data from the table: "user_book_statuses" */
  user_book_statuses: Array<User_Book_Statuses>;
  /** fetch aggregated fields from the table: "user_book_statuses" */
  user_book_statuses_aggregate: User_Book_Statuses_Aggregate;
  /** fetch data from the table: "user_book_statuses" using primary key columns */
  user_book_statuses_by_pk?: Maybe<User_Book_Statuses>;
  /** fetch data from the table in a streaming manner: "user_book_statuses" */
  user_book_statuses_stream: Array<User_Book_Statuses>;
  /** An array relationship */
  user_books: Array<User_Books>;
  /** An aggregate relationship */
  user_books_aggregate: User_Books_Aggregate;
  /** fetch data from the table: "user_books" using primary key columns */
  user_books_by_pk?: Maybe<User_Books>;
  /** fetch data from the table in a streaming manner: "user_books" */
  user_books_stream: Array<User_Books>;
  /** An array relationship */
  user_flags: Array<User_Flags>;
  /** fetch data from the table: "user_flags" using primary key columns */
  user_flags_by_pk?: Maybe<User_Flags>;
  /** fetch data from the table in a streaming manner: "user_flags" */
  user_flags_stream: Array<User_Flags>;
  /** fetch data from the table: "user_referrals" */
  user_referrals: Array<User_Referrals>;
  /** fetch data from the table: "user_referrals" using primary key columns */
  user_referrals_by_pk?: Maybe<User_Referrals>;
  /** fetch data from the table in a streaming manner: "user_referrals" */
  user_referrals_stream: Array<User_Referrals>;
  /** fetch data from the table: "user_statuses" */
  user_statuses: Array<User_Statuses>;
  /** fetch data from the table: "user_statuses" using primary key columns */
  user_statuses_by_pk?: Maybe<User_Statuses>;
  /** fetch data from the table in a streaming manner: "user_statuses" */
  user_statuses_stream: Array<User_Statuses>;
  /** An array relationship */
  users: Array<Users>;
  /** fetch data from the table: "users_aggregate_by_created_at_date" */
  users_aggregate_by_created_at_date: Array<Users_Aggregate_By_Created_At_Date>;
  /** fetch data from the table in a streaming manner: "users_aggregate_by_created_at_date" */
  users_aggregate_by_created_at_date_stream: Array<Users_Aggregate_By_Created_At_Date>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
}

export interface Subscription_RootActivitiesArgs {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
}

export interface Subscription_RootActivities_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Subscription_RootActivities_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Activities_Stream_Cursor_Input>>;
  where?: InputMaybe<Activities_Bool_Exp>;
}

export interface Subscription_RootActivity_FeedArgs {
  args: Activity_Feed_Args;
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
}

export interface Subscription_RootActivity_Foryou_FeedArgs {
  args: Activity_Foryou_Feed_Args;
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
}

export interface Subscription_RootAuthorsArgs {
  distinct_on?: InputMaybe<Array<Authors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Authors_Order_By>>;
  where?: InputMaybe<Authors_Bool_Exp>;
}

export interface Subscription_RootAuthors_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Subscription_RootAuthors_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Authors_Stream_Cursor_Input>>;
  where?: InputMaybe<Authors_Bool_Exp>;
}

export interface Subscription_RootBook_CategoriesArgs {
  distinct_on?: InputMaybe<Array<Book_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Categories_Order_By>>;
  where?: InputMaybe<Book_Categories_Bool_Exp>;
}

export interface Subscription_RootBook_Categories_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Subscription_RootBook_Categories_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Book_Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Book_Categories_Bool_Exp>;
}

export interface Subscription_RootBook_CharactersArgs {
  distinct_on?: InputMaybe<Array<Book_Characters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Characters_Order_By>>;
  where?: InputMaybe<Book_Characters_Bool_Exp>;
}

export interface Subscription_RootBook_Characters_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Subscription_RootBook_Characters_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Book_Characters_Stream_Cursor_Input>>;
  where?: InputMaybe<Book_Characters_Bool_Exp>;
}

export interface Subscription_RootBook_CollectionsArgs {
  distinct_on?: InputMaybe<Array<Book_Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Collections_Order_By>>;
  where?: InputMaybe<Book_Collections_Bool_Exp>;
}

export interface Subscription_RootBook_Collections_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Subscription_RootBook_Collections_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Book_Collections_Stream_Cursor_Input>>;
  where?: InputMaybe<Book_Collections_Bool_Exp>;
}

export interface Subscription_RootBook_MappingsArgs {
  distinct_on?: InputMaybe<Array<Book_Mappings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Mappings_Order_By>>;
  where?: InputMaybe<Book_Mappings_Bool_Exp>;
}

export interface Subscription_RootBook_Mappings_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Subscription_RootBook_Mappings_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Book_Mappings_Stream_Cursor_Input>>;
  where?: InputMaybe<Book_Mappings_Bool_Exp>;
}

export interface Subscription_RootBook_SeriesArgs {
  distinct_on?: InputMaybe<Array<Book_Series_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Series_Order_By>>;
  where?: InputMaybe<Book_Series_Bool_Exp>;
}

export interface Subscription_RootBook_Series_AggregateArgs {
  distinct_on?: InputMaybe<Array<Book_Series_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Series_Order_By>>;
  where?: InputMaybe<Book_Series_Bool_Exp>;
}

export interface Subscription_RootBook_Series_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Subscription_RootBook_Series_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Book_Series_Stream_Cursor_Input>>;
  where?: InputMaybe<Book_Series_Bool_Exp>;
}

export interface Subscription_RootBook_StatusesArgs {
  distinct_on?: InputMaybe<Array<Book_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Book_Statuses_Order_By>>;
  where?: InputMaybe<Book_Statuses_Bool_Exp>;
}

export interface Subscription_RootBook_Statuses_By_PkArgs {
  id: Scalars['smallint']['input'];
}

export interface Subscription_RootBook_Statuses_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Book_Statuses_Stream_Cursor_Input>>;
  where?: InputMaybe<Book_Statuses_Bool_Exp>;
}

export interface Subscription_RootBooklesArgs {
  distinct_on?: InputMaybe<Array<Bookles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bookles_Order_By>>;
  where?: InputMaybe<Bookles_Bool_Exp>;
}

export interface Subscription_RootBookles_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Subscription_RootBookles_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Bookles_Stream_Cursor_Input>>;
  where?: InputMaybe<Bookles_Bool_Exp>;
}

export interface Subscription_RootBooksArgs {
  distinct_on?: InputMaybe<Array<Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Books_Order_By>>;
  where?: InputMaybe<Books_Bool_Exp>;
}

export interface Subscription_RootBooks_AggregateArgs {
  distinct_on?: InputMaybe<Array<Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Books_Order_By>>;
  where?: InputMaybe<Books_Bool_Exp>;
}

export interface Subscription_RootBooks_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Subscription_RootBooks_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Books_Stream_Cursor_Input>>;
  where?: InputMaybe<Books_Bool_Exp>;
}

export interface Subscription_RootCharactersArgs {
  distinct_on?: InputMaybe<Array<Characters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Characters_Order_By>>;
  where?: InputMaybe<Characters_Bool_Exp>;
}

export interface Subscription_RootCharacters_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Subscription_RootCharacters_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Characters_Stream_Cursor_Input>>;
  where?: InputMaybe<Characters_Bool_Exp>;
}

export interface Subscription_RootCollection_Import_ResultsArgs {
  distinct_on?: InputMaybe<Array<Collection_Import_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Collection_Import_Results_Order_By>>;
  where?: InputMaybe<Collection_Import_Results_Bool_Exp>;
}

export interface Subscription_RootCollection_Import_Results_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Subscription_RootCollection_Import_Results_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Collection_Import_Results_Stream_Cursor_Input>>;
  where?: InputMaybe<Collection_Import_Results_Bool_Exp>;
}

export interface Subscription_RootCollection_ImportsArgs {
  distinct_on?: InputMaybe<Array<Collection_Imports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Collection_Imports_Order_By>>;
  where?: InputMaybe<Collection_Imports_Bool_Exp>;
}

export interface Subscription_RootCollection_Imports_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Subscription_RootCollection_Imports_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Collection_Imports_Stream_Cursor_Input>>;
  where?: InputMaybe<Collection_Imports_Bool_Exp>;
}

export interface Subscription_RootContributionsArgs {
  distinct_on?: InputMaybe<Array<Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contributions_Order_By>>;
  where?: InputMaybe<Contributions_Bool_Exp>;
}

export interface Subscription_RootContributions_AggregateArgs {
  distinct_on?: InputMaybe<Array<Contributions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contributions_Order_By>>;
  where?: InputMaybe<Contributions_Bool_Exp>;
}

export interface Subscription_RootContributions_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Subscription_RootContributions_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Contributions_Stream_Cursor_Input>>;
  where?: InputMaybe<Contributions_Bool_Exp>;
}

export interface Subscription_RootCountriesArgs {
  distinct_on?: InputMaybe<Array<Countries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Countries_Order_By>>;
  where?: InputMaybe<Countries_Bool_Exp>;
}

export interface Subscription_RootCountries_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Subscription_RootCountries_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Countries_Stream_Cursor_Input>>;
  where?: InputMaybe<Countries_Bool_Exp>;
}

export interface Subscription_RootEditionsArgs {
  distinct_on?: InputMaybe<Array<Editions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Editions_Order_By>>;
  where?: InputMaybe<Editions_Bool_Exp>;
}

export interface Subscription_RootEditions_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Subscription_RootEditions_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Editions_Stream_Cursor_Input>>;
  where?: InputMaybe<Editions_Bool_Exp>;
}

export interface Subscription_RootFlag_StatusesArgs {
  distinct_on?: InputMaybe<Array<Flag_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Flag_Statuses_Order_By>>;
  where?: InputMaybe<Flag_Statuses_Bool_Exp>;
}

export interface Subscription_RootFlag_Statuses_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Subscription_RootFlag_Statuses_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Flag_Statuses_Stream_Cursor_Input>>;
  where?: InputMaybe<Flag_Statuses_Bool_Exp>;
}

export interface Subscription_RootFollowed_ListsArgs {
  distinct_on?: InputMaybe<Array<Followed_Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Followed_Lists_Order_By>>;
  where?: InputMaybe<Followed_Lists_Bool_Exp>;
}

export interface Subscription_RootFollowed_Lists_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Subscription_RootFollowed_Lists_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Followed_Lists_Stream_Cursor_Input>>;
  where?: InputMaybe<Followed_Lists_Bool_Exp>;
}

export interface Subscription_RootFollowed_PromptsArgs {
  distinct_on?: InputMaybe<Array<Followed_Prompts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Followed_Prompts_Order_By>>;
  where?: InputMaybe<Followed_Prompts_Bool_Exp>;
}

export interface Subscription_RootFollowed_Prompts_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Subscription_RootFollowed_Prompts_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Followed_Prompts_Stream_Cursor_Input>>;
  where?: InputMaybe<Followed_Prompts_Bool_Exp>;
}

export interface Subscription_RootFollowed_User_BooksArgs {
  distinct_on?: InputMaybe<Array<Followed_User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Followed_User_Books_Order_By>>;
  where?: InputMaybe<Followed_User_Books_Bool_Exp>;
}

export interface Subscription_RootFollowed_User_Books_AggregateArgs {
  distinct_on?: InputMaybe<Array<Followed_User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Followed_User_Books_Order_By>>;
  where?: InputMaybe<Followed_User_Books_Bool_Exp>;
}

export interface Subscription_RootFollowed_User_Books_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Followed_User_Books_Stream_Cursor_Input>>;
  where?: InputMaybe<Followed_User_Books_Bool_Exp>;
}

export interface Subscription_RootFollowed_UsersArgs {
  distinct_on?: InputMaybe<Array<Followed_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Followed_Users_Order_By>>;
  where?: InputMaybe<Followed_Users_Bool_Exp>;
}

export interface Subscription_RootFollowed_Users_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Subscription_RootFollowed_Users_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Followed_Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Followed_Users_Bool_Exp>;
}

export interface Subscription_RootFollowing_User_BooksArgs {
  distinct_on?: InputMaybe<Array<Following_User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Following_User_Books_Order_By>>;
  where?: InputMaybe<Following_User_Books_Bool_Exp>;
}

export interface Subscription_RootFollowing_User_Books_AggregateArgs {
  distinct_on?: InputMaybe<Array<Following_User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Following_User_Books_Order_By>>;
  where?: InputMaybe<Following_User_Books_Bool_Exp>;
}

export interface Subscription_RootFollowing_User_Books_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Following_User_Books_Stream_Cursor_Input>>;
  where?: InputMaybe<Following_User_Books_Bool_Exp>;
}

export interface Subscription_RootGoalsArgs {
  distinct_on?: InputMaybe<Array<Goals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Order_By>>;
  where?: InputMaybe<Goals_Bool_Exp>;
}

export interface Subscription_RootGoals_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Subscription_RootGoals_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Goals_Stream_Cursor_Input>>;
  where?: InputMaybe<Goals_Bool_Exp>;
}

export interface Subscription_RootImagesArgs {
  distinct_on?: InputMaybe<Array<Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Images_Order_By>>;
  where?: InputMaybe<Images_Bool_Exp>;
}

export interface Subscription_RootImages_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Subscription_RootImages_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Images_Stream_Cursor_Input>>;
  where?: InputMaybe<Images_Bool_Exp>;
}

export interface Subscription_RootLanguagesArgs {
  distinct_on?: InputMaybe<Array<Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Languages_Order_By>>;
  where?: InputMaybe<Languages_Bool_Exp>;
}

export interface Subscription_RootLanguages_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Subscription_RootLanguages_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Languages_Stream_Cursor_Input>>;
  where?: InputMaybe<Languages_Bool_Exp>;
}

export interface Subscription_RootLikesArgs {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
}

export interface Subscription_RootLikes_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Subscription_RootLikes_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Likes_Stream_Cursor_Input>>;
  where?: InputMaybe<Likes_Bool_Exp>;
}

export interface Subscription_RootList_BooksArgs {
  distinct_on?: InputMaybe<Array<List_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<List_Books_Order_By>>;
  where?: InputMaybe<List_Books_Bool_Exp>;
}

export interface Subscription_RootList_Books_AggregateArgs {
  distinct_on?: InputMaybe<Array<List_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<List_Books_Order_By>>;
  where?: InputMaybe<List_Books_Bool_Exp>;
}

export interface Subscription_RootList_Books_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Subscription_RootList_Books_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<List_Books_Stream_Cursor_Input>>;
  where?: InputMaybe<List_Books_Bool_Exp>;
}

export interface Subscription_RootListsArgs {
  distinct_on?: InputMaybe<Array<Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lists_Order_By>>;
  where?: InputMaybe<Lists_Bool_Exp>;
}

export interface Subscription_RootLists_AggregateArgs {
  distinct_on?: InputMaybe<Array<Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lists_Order_By>>;
  where?: InputMaybe<Lists_Bool_Exp>;
}

export interface Subscription_RootLists_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Subscription_RootLists_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Lists_Stream_Cursor_Input>>;
  where?: InputMaybe<Lists_Bool_Exp>;
}

export interface Subscription_RootMeArgs {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
}

export interface Subscription_RootNotification_ChannelsArgs {
  distinct_on?: InputMaybe<Array<Notification_Channels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notification_Channels_Order_By>>;
  where?: InputMaybe<Notification_Channels_Bool_Exp>;
}

export interface Subscription_RootNotification_Channels_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Subscription_RootNotification_Channels_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Notification_Channels_Stream_Cursor_Input>>;
  where?: InputMaybe<Notification_Channels_Bool_Exp>;
}

export interface Subscription_RootNotification_DeliveriesArgs {
  distinct_on?: InputMaybe<Array<Notification_Deliveries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notification_Deliveries_Order_By>>;
  where?: InputMaybe<Notification_Deliveries_Bool_Exp>;
}

export interface Subscription_RootNotification_Deliveries_AggregateArgs {
  distinct_on?: InputMaybe<Array<Notification_Deliveries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notification_Deliveries_Order_By>>;
  where?: InputMaybe<Notification_Deliveries_Bool_Exp>;
}

export interface Subscription_RootNotification_Deliveries_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Subscription_RootNotification_Deliveries_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Notification_Deliveries_Stream_Cursor_Input>>;
  where?: InputMaybe<Notification_Deliveries_Bool_Exp>;
}

export interface Subscription_RootNotification_SettingsArgs {
  distinct_on?: InputMaybe<Array<Notification_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notification_Settings_Order_By>>;
  where?: InputMaybe<Notification_Settings_Bool_Exp>;
}

export interface Subscription_RootNotification_Settings_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Subscription_RootNotification_Settings_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Notification_Settings_Stream_Cursor_Input>>;
  where?: InputMaybe<Notification_Settings_Bool_Exp>;
}

export interface Subscription_RootNotification_TypesArgs {
  distinct_on?: InputMaybe<Array<Notification_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notification_Types_Order_By>>;
  where?: InputMaybe<Notification_Types_Bool_Exp>;
}

export interface Subscription_RootNotification_Types_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Subscription_RootNotification_Types_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Notification_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Notification_Types_Bool_Exp>;
}

export interface Subscription_RootNotificationsArgs {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
}

export interface Subscription_RootNotifications_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Subscription_RootNotifications_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Notifications_Stream_Cursor_Input>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
}

export interface Subscription_RootPlatformsArgs {
  distinct_on?: InputMaybe<Array<Platforms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Platforms_Order_By>>;
  where?: InputMaybe<Platforms_Bool_Exp>;
}

export interface Subscription_RootPlatforms_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Subscription_RootPlatforms_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Platforms_Stream_Cursor_Input>>;
  where?: InputMaybe<Platforms_Bool_Exp>;
}

export interface Subscription_RootPrivacy_SettingsArgs {
  distinct_on?: InputMaybe<Array<Privacy_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Privacy_Settings_Order_By>>;
  where?: InputMaybe<Privacy_Settings_Bool_Exp>;
}

export interface Subscription_RootPrivacy_Settings_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Subscription_RootPrivacy_Settings_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Privacy_Settings_Stream_Cursor_Input>>;
  where?: InputMaybe<Privacy_Settings_Bool_Exp>;
}

export interface Subscription_RootPrompt_AnswersArgs {
  distinct_on?: InputMaybe<Array<Prompt_Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prompt_Answers_Order_By>>;
  where?: InputMaybe<Prompt_Answers_Bool_Exp>;
}

export interface Subscription_RootPrompt_Answers_AggregateArgs {
  distinct_on?: InputMaybe<Array<Prompt_Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prompt_Answers_Order_By>>;
  where?: InputMaybe<Prompt_Answers_Bool_Exp>;
}

export interface Subscription_RootPrompt_Answers_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Subscription_RootPrompt_Answers_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Prompt_Answers_Stream_Cursor_Input>>;
  where?: InputMaybe<Prompt_Answers_Bool_Exp>;
}

export interface Subscription_RootPrompt_Books_SummaryArgs {
  distinct_on?: InputMaybe<Array<Prompt_Books_Summary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prompt_Books_Summary_Order_By>>;
  where?: InputMaybe<Prompt_Books_Summary_Bool_Exp>;
}

export interface Subscription_RootPrompt_Books_Summary_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Prompt_Books_Summary_Stream_Cursor_Input>>;
  where?: InputMaybe<Prompt_Books_Summary_Bool_Exp>;
}

export interface Subscription_RootPromptsArgs {
  distinct_on?: InputMaybe<Array<Prompts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prompts_Order_By>>;
  where?: InputMaybe<Prompts_Bool_Exp>;
}

export interface Subscription_RootPrompts_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Subscription_RootPrompts_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Prompts_Stream_Cursor_Input>>;
  where?: InputMaybe<Prompts_Bool_Exp>;
}

export interface Subscription_RootPublishersArgs {
  distinct_on?: InputMaybe<Array<Publishers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Publishers_Order_By>>;
  where?: InputMaybe<Publishers_Bool_Exp>;
}

export interface Subscription_RootPublishers_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Subscription_RootPublishers_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Publishers_Stream_Cursor_Input>>;
  where?: InputMaybe<Publishers_Bool_Exp>;
}

export interface Subscription_RootReading_FormatsArgs {
  distinct_on?: InputMaybe<Array<Reading_Formats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reading_Formats_Order_By>>;
  where?: InputMaybe<Reading_Formats_Bool_Exp>;
}

export interface Subscription_RootReading_Formats_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Subscription_RootReading_Formats_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Reading_Formats_Stream_Cursor_Input>>;
  where?: InputMaybe<Reading_Formats_Bool_Exp>;
}

export interface Subscription_RootReading_JournalsArgs {
  distinct_on?: InputMaybe<Array<Reading_Journals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reading_Journals_Order_By>>;
  where?: InputMaybe<Reading_Journals_Bool_Exp>;
}

export interface Subscription_RootReading_Journals_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Subscription_RootReading_Journals_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Reading_Journals_Stream_Cursor_Input>>;
  where?: InputMaybe<Reading_Journals_Bool_Exp>;
}

export interface Subscription_RootReading_Journals_SummaryArgs {
  distinct_on?: InputMaybe<Array<Reading_Journals_Summary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reading_Journals_Summary_Order_By>>;
  where?: InputMaybe<Reading_Journals_Summary_Bool_Exp>;
}

export interface Subscription_RootReading_Journals_Summary_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Reading_Journals_Summary_Stream_Cursor_Input>>;
  where?: InputMaybe<Reading_Journals_Summary_Bool_Exp>;
}

export interface Subscription_RootRecommendationsArgs {
  distinct_on?: InputMaybe<Array<Recommendations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recommendations_Order_By>>;
  where?: InputMaybe<Recommendations_Bool_Exp>;
}

export interface Subscription_RootRecommendations_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Subscription_RootRecommendations_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Recommendations_Stream_Cursor_Input>>;
  where?: InputMaybe<Recommendations_Bool_Exp>;
}

export interface Subscription_RootSeriesArgs {
  distinct_on?: InputMaybe<Array<Series_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Series_Order_By>>;
  where?: InputMaybe<Series_Bool_Exp>;
}

export interface Subscription_RootSeries_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Subscription_RootSeries_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Series_Stream_Cursor_Input>>;
  where?: InputMaybe<Series_Bool_Exp>;
}

export interface Subscription_RootTag_CategoriesArgs {
  distinct_on?: InputMaybe<Array<Tag_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tag_Categories_Order_By>>;
  where?: InputMaybe<Tag_Categories_Bool_Exp>;
}

export interface Subscription_RootTag_Categories_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Subscription_RootTag_Categories_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Tag_Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Tag_Categories_Bool_Exp>;
}

export interface Subscription_RootTaggable_CountsArgs {
  distinct_on?: InputMaybe<Array<Taggable_Counts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Taggable_Counts_Order_By>>;
  where?: InputMaybe<Taggable_Counts_Bool_Exp>;
}

export interface Subscription_RootTaggable_Counts_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Subscription_RootTaggable_Counts_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Taggable_Counts_Stream_Cursor_Input>>;
  where?: InputMaybe<Taggable_Counts_Bool_Exp>;
}

export interface Subscription_RootTaggingsArgs {
  distinct_on?: InputMaybe<Array<Taggings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Taggings_Order_By>>;
  where?: InputMaybe<Taggings_Bool_Exp>;
}

export interface Subscription_RootTaggings_AggregateArgs {
  distinct_on?: InputMaybe<Array<Taggings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Taggings_Order_By>>;
  where?: InputMaybe<Taggings_Bool_Exp>;
}

export interface Subscription_RootTaggings_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Subscription_RootTaggings_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Taggings_Stream_Cursor_Input>>;
  where?: InputMaybe<Taggings_Bool_Exp>;
}

export interface Subscription_RootTagsArgs {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
}

export interface Subscription_RootTags_AggregateArgs {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
}

export interface Subscription_RootTags_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Subscription_RootTags_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Tags_Stream_Cursor_Input>>;
  where?: InputMaybe<Tags_Bool_Exp>;
}

export interface Subscription_RootUser_BlocksArgs {
  distinct_on?: InputMaybe<Array<User_Blocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Blocks_Order_By>>;
  where?: InputMaybe<User_Blocks_Bool_Exp>;
}

export interface Subscription_RootUser_Blocks_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Subscription_RootUser_Blocks_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Blocks_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Blocks_Bool_Exp>;
}

export interface Subscription_RootUser_Book_ReadsArgs {
  distinct_on?: InputMaybe<Array<User_Book_Reads_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Book_Reads_Order_By>>;
  where?: InputMaybe<User_Book_Reads_Bool_Exp>;
}

export interface Subscription_RootUser_Book_Reads_AggregateArgs {
  distinct_on?: InputMaybe<Array<User_Book_Reads_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Book_Reads_Order_By>>;
  where?: InputMaybe<User_Book_Reads_Bool_Exp>;
}

export interface Subscription_RootUser_Book_Reads_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Subscription_RootUser_Book_Reads_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Book_Reads_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Book_Reads_Bool_Exp>;
}

export interface Subscription_RootUser_Book_StatusesArgs {
  distinct_on?: InputMaybe<Array<User_Book_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Book_Statuses_Order_By>>;
  where?: InputMaybe<User_Book_Statuses_Bool_Exp>;
}

export interface Subscription_RootUser_Book_Statuses_AggregateArgs {
  distinct_on?: InputMaybe<Array<User_Book_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Book_Statuses_Order_By>>;
  where?: InputMaybe<User_Book_Statuses_Bool_Exp>;
}

export interface Subscription_RootUser_Book_Statuses_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Subscription_RootUser_Book_Statuses_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Book_Statuses_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Book_Statuses_Bool_Exp>;
}

export interface Subscription_RootUser_BooksArgs {
  distinct_on?: InputMaybe<Array<User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Books_Order_By>>;
  where?: InputMaybe<User_Books_Bool_Exp>;
}

export interface Subscription_RootUser_Books_AggregateArgs {
  distinct_on?: InputMaybe<Array<User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Books_Order_By>>;
  where?: InputMaybe<User_Books_Bool_Exp>;
}

export interface Subscription_RootUser_Books_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Subscription_RootUser_Books_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Books_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Books_Bool_Exp>;
}

export interface Subscription_RootUser_FlagsArgs {
  distinct_on?: InputMaybe<Array<User_Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Flags_Order_By>>;
  where?: InputMaybe<User_Flags_Bool_Exp>;
}

export interface Subscription_RootUser_Flags_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Subscription_RootUser_Flags_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Flags_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Flags_Bool_Exp>;
}

export interface Subscription_RootUser_ReferralsArgs {
  distinct_on?: InputMaybe<Array<User_Referrals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Referrals_Order_By>>;
  where?: InputMaybe<User_Referrals_Bool_Exp>;
}

export interface Subscription_RootUser_Referrals_By_PkArgs {
  id: Scalars['bigint']['input'];
}

export interface Subscription_RootUser_Referrals_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Referrals_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Referrals_Bool_Exp>;
}

export interface Subscription_RootUser_StatusesArgs {
  distinct_on?: InputMaybe<Array<User_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Statuses_Order_By>>;
  where?: InputMaybe<User_Statuses_Bool_Exp>;
}

export interface Subscription_RootUser_Statuses_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Subscription_RootUser_Statuses_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Statuses_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Statuses_Bool_Exp>;
}

export interface Subscription_RootUsersArgs {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
}

export interface Subscription_RootUsers_Aggregate_By_Created_At_DateArgs {
  distinct_on?: InputMaybe<Array<Users_Aggregate_By_Created_At_Date_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Aggregate_By_Created_At_Date_Order_By>>;
  where?: InputMaybe<Users_Aggregate_By_Created_At_Date_Bool_Exp>;
}

export interface Subscription_RootUsers_Aggregate_By_Created_At_Date_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Aggregate_By_Created_At_Date_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Aggregate_By_Created_At_Date_Bool_Exp>;
}

export interface Subscription_RootUsers_By_PkArgs {
  id: Scalars['Int']['input'];
}

export interface Subscription_RootUsers_StreamArgs {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
}

/** columns and relationships of "tag_categories" */
export interface Tag_Categories {
  __typename?: 'tag_categories';
  category?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['bigint']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  tags: Array<Tags>;
  /** An aggregate relationship */
  tags_aggregate: Tags_Aggregate;
}

/** columns and relationships of "tag_categories" */
export interface Tag_CategoriesTagsArgs {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
}

/** columns and relationships of "tag_categories" */
export interface Tag_CategoriesTags_AggregateArgs {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
}

/** Boolean expression to filter rows from the table "tag_categories". All fields are combined with a logical 'AND'. */
export interface Tag_Categories_Bool_Exp {
  _and?: InputMaybe<Array<Tag_Categories_Bool_Exp>>;
  _not?: InputMaybe<Tag_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Tag_Categories_Bool_Exp>>;
  category?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  tags?: InputMaybe<Tags_Bool_Exp>;
  tags_aggregate?: InputMaybe<Tags_Aggregate_Bool_Exp>;
}

/** Ordering options when selecting data from "tag_categories". */
export interface Tag_Categories_Order_By {
  category?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  tags_aggregate?: InputMaybe<Tags_Aggregate_Order_By>;
}

/** select columns of table "tag_categories" */
export enum Tag_Categories_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
}

/** Streaming cursor of the table "tag_categories" */
export interface Tag_Categories_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Tag_Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Tag_Categories_Stream_Cursor_Value_Input {
  category?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "taggable_counts" */
export interface Taggable_Counts {
  __typename?: 'taggable_counts';
  /** An object relationship */
  book?: Maybe<Books>;
  count: Scalars['Int']['output'];
  created_at: Scalars['timestamp']['output'];
  hardcover_tagged: Scalars['Boolean']['output'];
  id: Scalars['bigint']['output'];
  spoiler_ratio?: Maybe<Scalars['float8']['output']>;
  /** An object relationship */
  tag?: Maybe<Tags>;
  tag_id: Scalars['Int']['output'];
  taggable_id: Scalars['bigint']['output'];
  taggable_type: Scalars['String']['output'];
  updated_at: Scalars['timestamp']['output'];
}

/** order by aggregate values of table "taggable_counts" */
export interface Taggable_Counts_Aggregate_Order_By {
  avg?: InputMaybe<Taggable_Counts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Taggable_Counts_Max_Order_By>;
  min?: InputMaybe<Taggable_Counts_Min_Order_By>;
  stddev?: InputMaybe<Taggable_Counts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Taggable_Counts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Taggable_Counts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Taggable_Counts_Sum_Order_By>;
  var_pop?: InputMaybe<Taggable_Counts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Taggable_Counts_Var_Samp_Order_By>;
  variance?: InputMaybe<Taggable_Counts_Variance_Order_By>;
}

/** order by avg() on columns of table "taggable_counts" */
export interface Taggable_Counts_Avg_Order_By {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  spoiler_ratio?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
  taggable_id?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "taggable_counts". All fields are combined with a logical 'AND'. */
export interface Taggable_Counts_Bool_Exp {
  _and?: InputMaybe<Array<Taggable_Counts_Bool_Exp>>;
  _not?: InputMaybe<Taggable_Counts_Bool_Exp>;
  _or?: InputMaybe<Array<Taggable_Counts_Bool_Exp>>;
  book?: InputMaybe<Books_Bool_Exp>;
  count?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  hardcover_tagged?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  spoiler_ratio?: InputMaybe<Float8_Comparison_Exp>;
  tag?: InputMaybe<Tags_Bool_Exp>;
  tag_id?: InputMaybe<Int_Comparison_Exp>;
  taggable_id?: InputMaybe<Bigint_Comparison_Exp>;
  taggable_type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
}

/** order by max() on columns of table "taggable_counts" */
export interface Taggable_Counts_Max_Order_By {
  count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  spoiler_ratio?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
  taggable_id?: InputMaybe<Order_By>;
  taggable_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
}

/** order by min() on columns of table "taggable_counts" */
export interface Taggable_Counts_Min_Order_By {
  count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  spoiler_ratio?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
  taggable_id?: InputMaybe<Order_By>;
  taggable_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
}

/** Ordering options when selecting data from "taggable_counts". */
export interface Taggable_Counts_Order_By {
  book?: InputMaybe<Books_Order_By>;
  count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  hardcover_tagged?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  spoiler_ratio?: InputMaybe<Order_By>;
  tag?: InputMaybe<Tags_Order_By>;
  tag_id?: InputMaybe<Order_By>;
  taggable_id?: InputMaybe<Order_By>;
  taggable_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
}

/** select columns of table "taggable_counts" */
export enum Taggable_Counts_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HardcoverTagged = 'hardcover_tagged',
  /** column name */
  Id = 'id',
  /** column name */
  SpoilerRatio = 'spoiler_ratio',
  /** column name */
  TagId = 'tag_id',
  /** column name */
  TaggableId = 'taggable_id',
  /** column name */
  TaggableType = 'taggable_type',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** order by stddev() on columns of table "taggable_counts" */
export interface Taggable_Counts_Stddev_Order_By {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  spoiler_ratio?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
  taggable_id?: InputMaybe<Order_By>;
}

/** order by stddev_pop() on columns of table "taggable_counts" */
export interface Taggable_Counts_Stddev_Pop_Order_By {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  spoiler_ratio?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
  taggable_id?: InputMaybe<Order_By>;
}

/** order by stddev_samp() on columns of table "taggable_counts" */
export interface Taggable_Counts_Stddev_Samp_Order_By {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  spoiler_ratio?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
  taggable_id?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "taggable_counts" */
export interface Taggable_Counts_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Taggable_Counts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Taggable_Counts_Stream_Cursor_Value_Input {
  count?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  hardcover_tagged?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  spoiler_ratio?: InputMaybe<Scalars['float8']['input']>;
  tag_id?: InputMaybe<Scalars['Int']['input']>;
  taggable_id?: InputMaybe<Scalars['bigint']['input']>;
  taggable_type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
}

/** order by sum() on columns of table "taggable_counts" */
export interface Taggable_Counts_Sum_Order_By {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  spoiler_ratio?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
  taggable_id?: InputMaybe<Order_By>;
}

/** order by var_pop() on columns of table "taggable_counts" */
export interface Taggable_Counts_Var_Pop_Order_By {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  spoiler_ratio?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
  taggable_id?: InputMaybe<Order_By>;
}

/** order by var_samp() on columns of table "taggable_counts" */
export interface Taggable_Counts_Var_Samp_Order_By {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  spoiler_ratio?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
  taggable_id?: InputMaybe<Order_By>;
}

/** order by variance() on columns of table "taggable_counts" */
export interface Taggable_Counts_Variance_Order_By {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  spoiler_ratio?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
  taggable_id?: InputMaybe<Order_By>;
}

/** columns and relationships of "taggings" */
export interface Taggings {
  __typename?: 'taggings';
  /** An object relationship */
  book?: Maybe<Books>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['bigint']['output'];
  spoiler: Scalars['Boolean']['output'];
  /** An object relationship */
  tag: Tags;
  tag_id: Scalars['Int']['output'];
  taggable_id?: Maybe<Scalars['bigint']['output']>;
  taggable_type?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int']['output'];
}

/** aggregated selection of "taggings" */
export interface Taggings_Aggregate {
  __typename?: 'taggings_aggregate';
  aggregate?: Maybe<Taggings_Aggregate_Fields>;
  nodes: Array<Taggings>;
}

export interface Taggings_Aggregate_Bool_Exp {
  bool_and?: InputMaybe<Taggings_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Taggings_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Taggings_Aggregate_Bool_Exp_Count>;
}

export interface Taggings_Aggregate_Bool_Exp_Bool_And {
  arguments: Taggings_Select_Column_Taggings_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Taggings_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
}

export interface Taggings_Aggregate_Bool_Exp_Bool_Or {
  arguments: Taggings_Select_Column_Taggings_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Taggings_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
}

export interface Taggings_Aggregate_Bool_Exp_Count {
  arguments?: InputMaybe<Array<Taggings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Taggings_Bool_Exp>;
  predicate: Int_Comparison_Exp;
}

/** aggregate fields of "taggings" */
export interface Taggings_Aggregate_Fields {
  __typename?: 'taggings_aggregate_fields';
  avg?: Maybe<Taggings_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Taggings_Max_Fields>;
  min?: Maybe<Taggings_Min_Fields>;
  stddev?: Maybe<Taggings_Stddev_Fields>;
  stddev_pop?: Maybe<Taggings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Taggings_Stddev_Samp_Fields>;
  sum?: Maybe<Taggings_Sum_Fields>;
  var_pop?: Maybe<Taggings_Var_Pop_Fields>;
  var_samp?: Maybe<Taggings_Var_Samp_Fields>;
  variance?: Maybe<Taggings_Variance_Fields>;
}

/** aggregate fields of "taggings" */
export interface Taggings_Aggregate_FieldsCountArgs {
  columns?: InputMaybe<Array<Taggings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
}

/** order by aggregate values of table "taggings" */
export interface Taggings_Aggregate_Order_By {
  avg?: InputMaybe<Taggings_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Taggings_Max_Order_By>;
  min?: InputMaybe<Taggings_Min_Order_By>;
  stddev?: InputMaybe<Taggings_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Taggings_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Taggings_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Taggings_Sum_Order_By>;
  var_pop?: InputMaybe<Taggings_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Taggings_Var_Samp_Order_By>;
  variance?: InputMaybe<Taggings_Variance_Order_By>;
}

/** aggregate avg on columns */
export interface Taggings_Avg_Fields {
  __typename?: 'taggings_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  tag_id?: Maybe<Scalars['Float']['output']>;
  taggable_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by avg() on columns of table "taggings" */
export interface Taggings_Avg_Order_By {
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
  taggable_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "taggings". All fields are combined with a logical 'AND'. */
export interface Taggings_Bool_Exp {
  _and?: InputMaybe<Array<Taggings_Bool_Exp>>;
  _not?: InputMaybe<Taggings_Bool_Exp>;
  _or?: InputMaybe<Array<Taggings_Bool_Exp>>;
  book?: InputMaybe<Books_Bool_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  spoiler?: InputMaybe<Boolean_Comparison_Exp>;
  tag?: InputMaybe<Tags_Bool_Exp>;
  tag_id?: InputMaybe<Int_Comparison_Exp>;
  taggable_id?: InputMaybe<Bigint_Comparison_Exp>;
  taggable_type?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
}

/** aggregate max on columns */
export interface Taggings_Max_Fields {
  __typename?: 'taggings_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  tag_id?: Maybe<Scalars['Int']['output']>;
  taggable_id?: Maybe<Scalars['bigint']['output']>;
  taggable_type?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** order by max() on columns of table "taggings" */
export interface Taggings_Max_Order_By {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
  taggable_id?: InputMaybe<Order_By>;
  taggable_type?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** aggregate min on columns */
export interface Taggings_Min_Fields {
  __typename?: 'taggings_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  tag_id?: Maybe<Scalars['Int']['output']>;
  taggable_id?: Maybe<Scalars['bigint']['output']>;
  taggable_type?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** order by min() on columns of table "taggings" */
export interface Taggings_Min_Order_By {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
  taggable_id?: InputMaybe<Order_By>;
  taggable_type?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Ordering options when selecting data from "taggings". */
export interface Taggings_Order_By {
  book?: InputMaybe<Books_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  spoiler?: InputMaybe<Order_By>;
  tag?: InputMaybe<Tags_Order_By>;
  tag_id?: InputMaybe<Order_By>;
  taggable_id?: InputMaybe<Order_By>;
  taggable_type?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** select columns of table "taggings" */
export enum Taggings_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Spoiler = 'spoiler',
  /** column name */
  TagId = 'tag_id',
  /** column name */
  TaggableId = 'taggable_id',
  /** column name */
  TaggableType = 'taggable_type',
  /** column name */
  UserId = 'user_id',
}

/** select "taggings_aggregate_bool_exp_bool_and_arguments_columns" columns of table "taggings" */
export enum Taggings_Select_Column_Taggings_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Spoiler = 'spoiler',
}

/** select "taggings_aggregate_bool_exp_bool_or_arguments_columns" columns of table "taggings" */
export enum Taggings_Select_Column_Taggings_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Spoiler = 'spoiler',
}

/** aggregate stddev on columns */
export interface Taggings_Stddev_Fields {
  __typename?: 'taggings_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  tag_id?: Maybe<Scalars['Float']['output']>;
  taggable_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev() on columns of table "taggings" */
export interface Taggings_Stddev_Order_By {
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
  taggable_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** aggregate stddev_pop on columns */
export interface Taggings_Stddev_Pop_Fields {
  __typename?: 'taggings_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  tag_id?: Maybe<Scalars['Float']['output']>;
  taggable_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev_pop() on columns of table "taggings" */
export interface Taggings_Stddev_Pop_Order_By {
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
  taggable_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** aggregate stddev_samp on columns */
export interface Taggings_Stddev_Samp_Fields {
  __typename?: 'taggings_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  tag_id?: Maybe<Scalars['Float']['output']>;
  taggable_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev_samp() on columns of table "taggings" */
export interface Taggings_Stddev_Samp_Order_By {
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
  taggable_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "taggings" */
export interface Taggings_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Taggings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Taggings_Stream_Cursor_Value_Input {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  spoiler?: InputMaybe<Scalars['Boolean']['input']>;
  tag_id?: InputMaybe<Scalars['Int']['input']>;
  taggable_id?: InputMaybe<Scalars['bigint']['input']>;
  taggable_type?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
}

/** aggregate sum on columns */
export interface Taggings_Sum_Fields {
  __typename?: 'taggings_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  tag_id?: Maybe<Scalars['Int']['output']>;
  taggable_id?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** order by sum() on columns of table "taggings" */
export interface Taggings_Sum_Order_By {
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
  taggable_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** aggregate var_pop on columns */
export interface Taggings_Var_Pop_Fields {
  __typename?: 'taggings_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  tag_id?: Maybe<Scalars['Float']['output']>;
  taggable_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by var_pop() on columns of table "taggings" */
export interface Taggings_Var_Pop_Order_By {
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
  taggable_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** aggregate var_samp on columns */
export interface Taggings_Var_Samp_Fields {
  __typename?: 'taggings_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  tag_id?: Maybe<Scalars['Float']['output']>;
  taggable_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by var_samp() on columns of table "taggings" */
export interface Taggings_Var_Samp_Order_By {
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
  taggable_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** aggregate variance on columns */
export interface Taggings_Variance_Fields {
  __typename?: 'taggings_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  tag_id?: Maybe<Scalars['Float']['output']>;
  taggable_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by variance() on columns of table "taggings" */
export interface Taggings_Variance_Order_By {
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
  taggable_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** columns and relationships of "tags" */
export interface Tags {
  __typename?: 'tags';
  count: Scalars['Int']['output'];
  id: Scalars['bigint']['output'];
  slug: Scalars['String']['output'];
  tag: Scalars['String']['output'];
  /** An object relationship */
  tag_category: Tag_Categories;
  tag_category_id: Scalars['Int']['output'];
  /** An array relationship */
  taggings: Array<Taggings>;
  /** An aggregate relationship */
  taggings_aggregate: Taggings_Aggregate;
}

/** columns and relationships of "tags" */
export interface TagsTaggingsArgs {
  distinct_on?: InputMaybe<Array<Taggings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Taggings_Order_By>>;
  where?: InputMaybe<Taggings_Bool_Exp>;
}

/** columns and relationships of "tags" */
export interface TagsTaggings_AggregateArgs {
  distinct_on?: InputMaybe<Array<Taggings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Taggings_Order_By>>;
  where?: InputMaybe<Taggings_Bool_Exp>;
}

/** aggregated selection of "tags" */
export interface Tags_Aggregate {
  __typename?: 'tags_aggregate';
  aggregate?: Maybe<Tags_Aggregate_Fields>;
  nodes: Array<Tags>;
}

export interface Tags_Aggregate_Bool_Exp {
  count?: InputMaybe<Tags_Aggregate_Bool_Exp_Count>;
}

export interface Tags_Aggregate_Bool_Exp_Count {
  arguments?: InputMaybe<Array<Tags_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Tags_Bool_Exp>;
  predicate: Int_Comparison_Exp;
}

/** aggregate fields of "tags" */
export interface Tags_Aggregate_Fields {
  __typename?: 'tags_aggregate_fields';
  avg?: Maybe<Tags_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Tags_Max_Fields>;
  min?: Maybe<Tags_Min_Fields>;
  stddev?: Maybe<Tags_Stddev_Fields>;
  stddev_pop?: Maybe<Tags_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tags_Stddev_Samp_Fields>;
  sum?: Maybe<Tags_Sum_Fields>;
  var_pop?: Maybe<Tags_Var_Pop_Fields>;
  var_samp?: Maybe<Tags_Var_Samp_Fields>;
  variance?: Maybe<Tags_Variance_Fields>;
}

/** aggregate fields of "tags" */
export interface Tags_Aggregate_FieldsCountArgs {
  columns?: InputMaybe<Array<Tags_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
}

/** order by aggregate values of table "tags" */
export interface Tags_Aggregate_Order_By {
  avg?: InputMaybe<Tags_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Tags_Max_Order_By>;
  min?: InputMaybe<Tags_Min_Order_By>;
  stddev?: InputMaybe<Tags_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Tags_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Tags_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Tags_Sum_Order_By>;
  var_pop?: InputMaybe<Tags_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Tags_Var_Samp_Order_By>;
  variance?: InputMaybe<Tags_Variance_Order_By>;
}

/** aggregate avg on columns */
export interface Tags_Avg_Fields {
  __typename?: 'tags_avg_fields';
  count?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  tag_category_id?: Maybe<Scalars['Float']['output']>;
}

/** order by avg() on columns of table "tags" */
export interface Tags_Avg_Order_By {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_category_id?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "tags". All fields are combined with a logical 'AND'. */
export interface Tags_Bool_Exp {
  _and?: InputMaybe<Array<Tags_Bool_Exp>>;
  _not?: InputMaybe<Tags_Bool_Exp>;
  _or?: InputMaybe<Array<Tags_Bool_Exp>>;
  count?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  tag?: InputMaybe<String_Comparison_Exp>;
  tag_category?: InputMaybe<Tag_Categories_Bool_Exp>;
  tag_category_id?: InputMaybe<Int_Comparison_Exp>;
  taggings?: InputMaybe<Taggings_Bool_Exp>;
  taggings_aggregate?: InputMaybe<Taggings_Aggregate_Bool_Exp>;
}

/** aggregate max on columns */
export interface Tags_Max_Fields {
  __typename?: 'tags_max_fields';
  count?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  tag_category_id?: Maybe<Scalars['Int']['output']>;
}

/** order by max() on columns of table "tags" */
export interface Tags_Max_Order_By {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  tag?: InputMaybe<Order_By>;
  tag_category_id?: InputMaybe<Order_By>;
}

/** aggregate min on columns */
export interface Tags_Min_Fields {
  __typename?: 'tags_min_fields';
  count?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  tag_category_id?: Maybe<Scalars['Int']['output']>;
}

/** order by min() on columns of table "tags" */
export interface Tags_Min_Order_By {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  tag?: InputMaybe<Order_By>;
  tag_category_id?: InputMaybe<Order_By>;
}

/** Ordering options when selecting data from "tags". */
export interface Tags_Order_By {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  tag?: InputMaybe<Order_By>;
  tag_category?: InputMaybe<Tag_Categories_Order_By>;
  tag_category_id?: InputMaybe<Order_By>;
  taggings_aggregate?: InputMaybe<Taggings_Aggregate_Order_By>;
}

/** select columns of table "tags" */
export enum Tags_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  Tag = 'tag',
  /** column name */
  TagCategoryId = 'tag_category_id',
}

/** aggregate stddev on columns */
export interface Tags_Stddev_Fields {
  __typename?: 'tags_stddev_fields';
  count?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  tag_category_id?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev() on columns of table "tags" */
export interface Tags_Stddev_Order_By {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_category_id?: InputMaybe<Order_By>;
}

/** aggregate stddev_pop on columns */
export interface Tags_Stddev_Pop_Fields {
  __typename?: 'tags_stddev_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  tag_category_id?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev_pop() on columns of table "tags" */
export interface Tags_Stddev_Pop_Order_By {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_category_id?: InputMaybe<Order_By>;
}

/** aggregate stddev_samp on columns */
export interface Tags_Stddev_Samp_Fields {
  __typename?: 'tags_stddev_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  tag_category_id?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev_samp() on columns of table "tags" */
export interface Tags_Stddev_Samp_Order_By {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_category_id?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "tags" */
export interface Tags_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Tags_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Tags_Stream_Cursor_Value_Input {
  count?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tag_category_id?: InputMaybe<Scalars['Int']['input']>;
}

/** aggregate sum on columns */
export interface Tags_Sum_Fields {
  __typename?: 'tags_sum_fields';
  count?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  tag_category_id?: Maybe<Scalars['Int']['output']>;
}

/** order by sum() on columns of table "tags" */
export interface Tags_Sum_Order_By {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_category_id?: InputMaybe<Order_By>;
}

/** aggregate var_pop on columns */
export interface Tags_Var_Pop_Fields {
  __typename?: 'tags_var_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  tag_category_id?: Maybe<Scalars['Float']['output']>;
}

/** order by var_pop() on columns of table "tags" */
export interface Tags_Var_Pop_Order_By {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_category_id?: InputMaybe<Order_By>;
}

/** aggregate var_samp on columns */
export interface Tags_Var_Samp_Fields {
  __typename?: 'tags_var_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  tag_category_id?: Maybe<Scalars['Float']['output']>;
}

/** order by var_samp() on columns of table "tags" */
export interface Tags_Var_Samp_Order_By {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_category_id?: InputMaybe<Order_By>;
}

/** aggregate variance on columns */
export interface Tags_Variance_Fields {
  __typename?: 'tags_variance_fields';
  count?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  tag_category_id?: Maybe<Scalars['Float']['output']>;
}

/** order by variance() on columns of table "tags" */
export interface Tags_Variance_Order_By {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_category_id?: InputMaybe<Order_By>;
}

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export interface Timestamp_Comparison_Exp {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface Timestamptz_Comparison_Exp {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
}

export interface Update_User_Input {
  account_privacy_setting_id?: InputMaybe<Scalars['Int']['input']>;
  activity_privacy_settings_id?: InputMaybe<Scalars['Int']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  birthdate?: InputMaybe<Scalars['date']['input']>;
  cover?: InputMaybe<Scalars['String']['input']>;
  current_password?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  onboarded?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  password_confirmation?: InputMaybe<Scalars['String']['input']>;
  pronoun_personal?: InputMaybe<Scalars['String']['input']>;
  pronoun_possessive?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "user_blocks" */
export interface User_Blocks {
  __typename?: 'user_blocks';
  /** An object relationship */
  blocked_user?: Maybe<Users>;
  blocked_user_id?: Maybe<Scalars['Int']['output']>;
  created_at: Scalars['timestamp']['output'];
  id: Scalars['bigint']['output'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** order by aggregate values of table "user_blocks" */
export interface User_Blocks_Aggregate_Order_By {
  avg?: InputMaybe<User_Blocks_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Blocks_Max_Order_By>;
  min?: InputMaybe<User_Blocks_Min_Order_By>;
  stddev?: InputMaybe<User_Blocks_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Blocks_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Blocks_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Blocks_Sum_Order_By>;
  var_pop?: InputMaybe<User_Blocks_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Blocks_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Blocks_Variance_Order_By>;
}

/** order by avg() on columns of table "user_blocks" */
export interface User_Blocks_Avg_Order_By {
  blocked_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "user_blocks". All fields are combined with a logical 'AND'. */
export interface User_Blocks_Bool_Exp {
  _and?: InputMaybe<Array<User_Blocks_Bool_Exp>>;
  _not?: InputMaybe<User_Blocks_Bool_Exp>;
  _or?: InputMaybe<Array<User_Blocks_Bool_Exp>>;
  blocked_user?: InputMaybe<Users_Bool_Exp>;
  blocked_user_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
}

/** unique or primary key constraints on table "user_blocks" */
export enum User_Blocks_Constraint {
  /** unique or primary key constraint on columns "user_id", "blocked_user_id" */
  IndexUserBlocksOnUserIdAndBlockedUserId = 'index_user_blocks_on_user_id_and_blocked_user_id',
  /** unique or primary key constraint on columns "id" */
  UserBlocksPkey = 'user_blocks_pkey',
}

/** input type for inserting data into table "user_blocks" */
export interface User_Blocks_Insert_Input {
  blocked_user_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
}

/** order by max() on columns of table "user_blocks" */
export interface User_Blocks_Max_Order_By {
  blocked_user_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by min() on columns of table "user_blocks" */
export interface User_Blocks_Min_Order_By {
  blocked_user_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** response of any mutation on the table "user_blocks" */
export interface User_Blocks_Mutation_Response {
  __typename?: 'user_blocks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Blocks>;
}

/** on_conflict condition type for table "user_blocks" */
export interface User_Blocks_On_Conflict {
  constraint: User_Blocks_Constraint;
  update_columns?: Array<User_Blocks_Update_Column>;
  where?: InputMaybe<User_Blocks_Bool_Exp>;
}

/** Ordering options when selecting data from "user_blocks". */
export interface User_Blocks_Order_By {
  blocked_user?: InputMaybe<Users_Order_By>;
  blocked_user_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** select columns of table "user_blocks" */
export enum User_Blocks_Select_Column {
  /** column name */
  BlockedUserId = 'blocked_user_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id',
}

/** order by stddev() on columns of table "user_blocks" */
export interface User_Blocks_Stddev_Order_By {
  blocked_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by stddev_pop() on columns of table "user_blocks" */
export interface User_Blocks_Stddev_Pop_Order_By {
  blocked_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by stddev_samp() on columns of table "user_blocks" */
export interface User_Blocks_Stddev_Samp_Order_By {
  blocked_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "user_blocks" */
export interface User_Blocks_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: User_Blocks_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface User_Blocks_Stream_Cursor_Value_Input {
  blocked_user_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
}

/** order by sum() on columns of table "user_blocks" */
export interface User_Blocks_Sum_Order_By {
  blocked_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** placeholder for update columns of table "user_blocks" (current role has no relevant permissions) */
export enum User_Blocks_Update_Column {
  /** placeholder (do not use) */
  Placeholder = '_PLACEHOLDER',
}

/** order by var_pop() on columns of table "user_blocks" */
export interface User_Blocks_Var_Pop_Order_By {
  blocked_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by var_samp() on columns of table "user_blocks" */
export interface User_Blocks_Var_Samp_Order_By {
  blocked_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by variance() on columns of table "user_blocks" */
export interface User_Blocks_Variance_Order_By {
  blocked_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** columns and relationships of "user_book_reads" */
export interface User_Book_Reads {
  __typename?: 'user_book_reads';
  /** An object relationship */
  edition?: Maybe<Editions>;
  edition_id?: Maybe<Scalars['Int']['output']>;
  finished_at?: Maybe<Scalars['date']['output']>;
  id: Scalars['Int']['output'];
  paused_at?: Maybe<Scalars['date']['output']>;
  progress?: Maybe<Scalars['float8']['output']>;
  progress_pages?: Maybe<Scalars['Int']['output']>;
  progress_seconds?: Maybe<Scalars['Int']['output']>;
  started_at?: Maybe<Scalars['date']['output']>;
  /** An object relationship */
  user_book?: Maybe<User_Books>;
  user_book_id: Scalars['Int']['output'];
}

/** aggregated selection of "user_book_reads" */
export interface User_Book_Reads_Aggregate {
  __typename?: 'user_book_reads_aggregate';
  aggregate?: Maybe<User_Book_Reads_Aggregate_Fields>;
  nodes: Array<User_Book_Reads>;
}

export interface User_Book_Reads_Aggregate_Bool_Exp {
  avg?: InputMaybe<User_Book_Reads_Aggregate_Bool_Exp_Avg>;
  corr?: InputMaybe<User_Book_Reads_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<User_Book_Reads_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<User_Book_Reads_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<User_Book_Reads_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<User_Book_Reads_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<User_Book_Reads_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<User_Book_Reads_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<User_Book_Reads_Aggregate_Bool_Exp_Var_Samp>;
}

export interface User_Book_Reads_Aggregate_Bool_Exp_Avg {
  arguments: User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Book_Reads_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
}

export interface User_Book_Reads_Aggregate_Bool_Exp_Corr {
  arguments: User_Book_Reads_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Book_Reads_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
}

export interface User_Book_Reads_Aggregate_Bool_Exp_Corr_Arguments {
  X: User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Corr_Arguments_Columns;
}

export interface User_Book_Reads_Aggregate_Bool_Exp_Count {
  arguments?: InputMaybe<Array<User_Book_Reads_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Book_Reads_Bool_Exp>;
  predicate: Int_Comparison_Exp;
}

export interface User_Book_Reads_Aggregate_Bool_Exp_Covar_Samp {
  arguments: User_Book_Reads_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Book_Reads_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
}

export interface User_Book_Reads_Aggregate_Bool_Exp_Covar_Samp_Arguments {
  X: User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
}

export interface User_Book_Reads_Aggregate_Bool_Exp_Max {
  arguments: User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Book_Reads_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
}

export interface User_Book_Reads_Aggregate_Bool_Exp_Min {
  arguments: User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Book_Reads_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
}

export interface User_Book_Reads_Aggregate_Bool_Exp_Stddev_Samp {
  arguments: User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Book_Reads_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
}

export interface User_Book_Reads_Aggregate_Bool_Exp_Sum {
  arguments: User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Book_Reads_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
}

export interface User_Book_Reads_Aggregate_Bool_Exp_Var_Samp {
  arguments: User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Book_Reads_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
}

/** aggregate fields of "user_book_reads" */
export interface User_Book_Reads_Aggregate_Fields {
  __typename?: 'user_book_reads_aggregate_fields';
  avg?: Maybe<User_Book_Reads_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Book_Reads_Max_Fields>;
  min?: Maybe<User_Book_Reads_Min_Fields>;
  stddev?: Maybe<User_Book_Reads_Stddev_Fields>;
  stddev_pop?: Maybe<User_Book_Reads_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Book_Reads_Stddev_Samp_Fields>;
  sum?: Maybe<User_Book_Reads_Sum_Fields>;
  var_pop?: Maybe<User_Book_Reads_Var_Pop_Fields>;
  var_samp?: Maybe<User_Book_Reads_Var_Samp_Fields>;
  variance?: Maybe<User_Book_Reads_Variance_Fields>;
}

/** aggregate fields of "user_book_reads" */
export interface User_Book_Reads_Aggregate_FieldsCountArgs {
  columns?: InputMaybe<Array<User_Book_Reads_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
}

/** order by aggregate values of table "user_book_reads" */
export interface User_Book_Reads_Aggregate_Order_By {
  avg?: InputMaybe<User_Book_Reads_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Book_Reads_Max_Order_By>;
  min?: InputMaybe<User_Book_Reads_Min_Order_By>;
  stddev?: InputMaybe<User_Book_Reads_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Book_Reads_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Book_Reads_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Book_Reads_Sum_Order_By>;
  var_pop?: InputMaybe<User_Book_Reads_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Book_Reads_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Book_Reads_Variance_Order_By>;
}

/** aggregate avg on columns */
export interface User_Book_Reads_Avg_Fields {
  __typename?: 'user_book_reads_avg_fields';
  edition_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  progress?: Maybe<Scalars['Float']['output']>;
  progress_pages?: Maybe<Scalars['Float']['output']>;
  progress_seconds?: Maybe<Scalars['Float']['output']>;
  user_book_id?: Maybe<Scalars['Float']['output']>;
}

/** order by avg() on columns of table "user_book_reads" */
export interface User_Book_Reads_Avg_Order_By {
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  progress_pages?: InputMaybe<Order_By>;
  progress_seconds?: InputMaybe<Order_By>;
  user_book_id?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "user_book_reads". All fields are combined with a logical 'AND'. */
export interface User_Book_Reads_Bool_Exp {
  _and?: InputMaybe<Array<User_Book_Reads_Bool_Exp>>;
  _not?: InputMaybe<User_Book_Reads_Bool_Exp>;
  _or?: InputMaybe<Array<User_Book_Reads_Bool_Exp>>;
  edition?: InputMaybe<Editions_Bool_Exp>;
  edition_id?: InputMaybe<Int_Comparison_Exp>;
  finished_at?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  paused_at?: InputMaybe<Date_Comparison_Exp>;
  progress?: InputMaybe<Float8_Comparison_Exp>;
  progress_pages?: InputMaybe<Int_Comparison_Exp>;
  progress_seconds?: InputMaybe<Int_Comparison_Exp>;
  started_at?: InputMaybe<Date_Comparison_Exp>;
  user_book?: InputMaybe<User_Books_Bool_Exp>;
  user_book_id?: InputMaybe<Int_Comparison_Exp>;
}

/** aggregate max on columns */
export interface User_Book_Reads_Max_Fields {
  __typename?: 'user_book_reads_max_fields';
  edition_id?: Maybe<Scalars['Int']['output']>;
  finished_at?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  paused_at?: Maybe<Scalars['date']['output']>;
  progress?: Maybe<Scalars['float8']['output']>;
  progress_pages?: Maybe<Scalars['Int']['output']>;
  progress_seconds?: Maybe<Scalars['Int']['output']>;
  started_at?: Maybe<Scalars['date']['output']>;
  user_book_id?: Maybe<Scalars['Int']['output']>;
}

/** order by max() on columns of table "user_book_reads" */
export interface User_Book_Reads_Max_Order_By {
  edition_id?: InputMaybe<Order_By>;
  finished_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  paused_at?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  progress_pages?: InputMaybe<Order_By>;
  progress_seconds?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
  user_book_id?: InputMaybe<Order_By>;
}

/** aggregate min on columns */
export interface User_Book_Reads_Min_Fields {
  __typename?: 'user_book_reads_min_fields';
  edition_id?: Maybe<Scalars['Int']['output']>;
  finished_at?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  paused_at?: Maybe<Scalars['date']['output']>;
  progress?: Maybe<Scalars['float8']['output']>;
  progress_pages?: Maybe<Scalars['Int']['output']>;
  progress_seconds?: Maybe<Scalars['Int']['output']>;
  started_at?: Maybe<Scalars['date']['output']>;
  user_book_id?: Maybe<Scalars['Int']['output']>;
}

/** order by min() on columns of table "user_book_reads" */
export interface User_Book_Reads_Min_Order_By {
  edition_id?: InputMaybe<Order_By>;
  finished_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  paused_at?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  progress_pages?: InputMaybe<Order_By>;
  progress_seconds?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
  user_book_id?: InputMaybe<Order_By>;
}

/** Ordering options when selecting data from "user_book_reads". */
export interface User_Book_Reads_Order_By {
  edition?: InputMaybe<Editions_Order_By>;
  edition_id?: InputMaybe<Order_By>;
  finished_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  paused_at?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  progress_pages?: InputMaybe<Order_By>;
  progress_seconds?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
  user_book?: InputMaybe<User_Books_Order_By>;
  user_book_id?: InputMaybe<Order_By>;
}

/** select columns of table "user_book_reads" */
export enum User_Book_Reads_Select_Column {
  /** column name */
  EditionId = 'edition_id',
  /** column name */
  FinishedAt = 'finished_at',
  /** column name */
  Id = 'id',
  /** column name */
  PausedAt = 'paused_at',
  /** column name */
  Progress = 'progress',
  /** column name */
  ProgressPages = 'progress_pages',
  /** column name */
  ProgressSeconds = 'progress_seconds',
  /** column name */
  StartedAt = 'started_at',
  /** column name */
  UserBookId = 'user_book_id',
}

/** select "user_book_reads_aggregate_bool_exp_avg_arguments_columns" columns of table "user_book_reads" */
export enum User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  Progress = 'progress',
}

/** select "user_book_reads_aggregate_bool_exp_corr_arguments_columns" columns of table "user_book_reads" */
export enum User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  Progress = 'progress',
}

/** select "user_book_reads_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "user_book_reads" */
export enum User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  Progress = 'progress',
}

/** select "user_book_reads_aggregate_bool_exp_max_arguments_columns" columns of table "user_book_reads" */
export enum User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  Progress = 'progress',
}

/** select "user_book_reads_aggregate_bool_exp_min_arguments_columns" columns of table "user_book_reads" */
export enum User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  Progress = 'progress',
}

/** select "user_book_reads_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "user_book_reads" */
export enum User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  Progress = 'progress',
}

/** select "user_book_reads_aggregate_bool_exp_sum_arguments_columns" columns of table "user_book_reads" */
export enum User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  Progress = 'progress',
}

/** select "user_book_reads_aggregate_bool_exp_var_samp_arguments_columns" columns of table "user_book_reads" */
export enum User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  Progress = 'progress',
}

/** aggregate stddev on columns */
export interface User_Book_Reads_Stddev_Fields {
  __typename?: 'user_book_reads_stddev_fields';
  edition_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  progress?: Maybe<Scalars['Float']['output']>;
  progress_pages?: Maybe<Scalars['Float']['output']>;
  progress_seconds?: Maybe<Scalars['Float']['output']>;
  user_book_id?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev() on columns of table "user_book_reads" */
export interface User_Book_Reads_Stddev_Order_By {
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  progress_pages?: InputMaybe<Order_By>;
  progress_seconds?: InputMaybe<Order_By>;
  user_book_id?: InputMaybe<Order_By>;
}

/** aggregate stddev_pop on columns */
export interface User_Book_Reads_Stddev_Pop_Fields {
  __typename?: 'user_book_reads_stddev_pop_fields';
  edition_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  progress?: Maybe<Scalars['Float']['output']>;
  progress_pages?: Maybe<Scalars['Float']['output']>;
  progress_seconds?: Maybe<Scalars['Float']['output']>;
  user_book_id?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev_pop() on columns of table "user_book_reads" */
export interface User_Book_Reads_Stddev_Pop_Order_By {
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  progress_pages?: InputMaybe<Order_By>;
  progress_seconds?: InputMaybe<Order_By>;
  user_book_id?: InputMaybe<Order_By>;
}

/** aggregate stddev_samp on columns */
export interface User_Book_Reads_Stddev_Samp_Fields {
  __typename?: 'user_book_reads_stddev_samp_fields';
  edition_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  progress?: Maybe<Scalars['Float']['output']>;
  progress_pages?: Maybe<Scalars['Float']['output']>;
  progress_seconds?: Maybe<Scalars['Float']['output']>;
  user_book_id?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev_samp() on columns of table "user_book_reads" */
export interface User_Book_Reads_Stddev_Samp_Order_By {
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  progress_pages?: InputMaybe<Order_By>;
  progress_seconds?: InputMaybe<Order_By>;
  user_book_id?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "user_book_reads" */
export interface User_Book_Reads_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: User_Book_Reads_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface User_Book_Reads_Stream_Cursor_Value_Input {
  edition_id?: InputMaybe<Scalars['Int']['input']>;
  finished_at?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  paused_at?: InputMaybe<Scalars['date']['input']>;
  progress?: InputMaybe<Scalars['float8']['input']>;
  progress_pages?: InputMaybe<Scalars['Int']['input']>;
  progress_seconds?: InputMaybe<Scalars['Int']['input']>;
  started_at?: InputMaybe<Scalars['date']['input']>;
  user_book_id?: InputMaybe<Scalars['Int']['input']>;
}

/** aggregate sum on columns */
export interface User_Book_Reads_Sum_Fields {
  __typename?: 'user_book_reads_sum_fields';
  edition_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  progress?: Maybe<Scalars['float8']['output']>;
  progress_pages?: Maybe<Scalars['Int']['output']>;
  progress_seconds?: Maybe<Scalars['Int']['output']>;
  user_book_id?: Maybe<Scalars['Int']['output']>;
}

/** order by sum() on columns of table "user_book_reads" */
export interface User_Book_Reads_Sum_Order_By {
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  progress_pages?: InputMaybe<Order_By>;
  progress_seconds?: InputMaybe<Order_By>;
  user_book_id?: InputMaybe<Order_By>;
}

/** aggregate var_pop on columns */
export interface User_Book_Reads_Var_Pop_Fields {
  __typename?: 'user_book_reads_var_pop_fields';
  edition_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  progress?: Maybe<Scalars['Float']['output']>;
  progress_pages?: Maybe<Scalars['Float']['output']>;
  progress_seconds?: Maybe<Scalars['Float']['output']>;
  user_book_id?: Maybe<Scalars['Float']['output']>;
}

/** order by var_pop() on columns of table "user_book_reads" */
export interface User_Book_Reads_Var_Pop_Order_By {
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  progress_pages?: InputMaybe<Order_By>;
  progress_seconds?: InputMaybe<Order_By>;
  user_book_id?: InputMaybe<Order_By>;
}

/** aggregate var_samp on columns */
export interface User_Book_Reads_Var_Samp_Fields {
  __typename?: 'user_book_reads_var_samp_fields';
  edition_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  progress?: Maybe<Scalars['Float']['output']>;
  progress_pages?: Maybe<Scalars['Float']['output']>;
  progress_seconds?: Maybe<Scalars['Float']['output']>;
  user_book_id?: Maybe<Scalars['Float']['output']>;
}

/** order by var_samp() on columns of table "user_book_reads" */
export interface User_Book_Reads_Var_Samp_Order_By {
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  progress_pages?: InputMaybe<Order_By>;
  progress_seconds?: InputMaybe<Order_By>;
  user_book_id?: InputMaybe<Order_By>;
}

/** aggregate variance on columns */
export interface User_Book_Reads_Variance_Fields {
  __typename?: 'user_book_reads_variance_fields';
  edition_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  progress?: Maybe<Scalars['Float']['output']>;
  progress_pages?: Maybe<Scalars['Float']['output']>;
  progress_seconds?: Maybe<Scalars['Float']['output']>;
  user_book_id?: Maybe<Scalars['Float']['output']>;
}

/** order by variance() on columns of table "user_book_reads" */
export interface User_Book_Reads_Variance_Order_By {
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  progress_pages?: InputMaybe<Order_By>;
  progress_seconds?: InputMaybe<Order_By>;
  user_book_id?: InputMaybe<Order_By>;
}

/** columns and relationships of "user_book_statuses" */
export interface User_Book_Statuses {
  __typename?: 'user_book_statuses';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  /** An array relationship */
  user_books: Array<User_Books>;
  /** An aggregate relationship */
  user_books_aggregate: User_Books_Aggregate;
}

/** columns and relationships of "user_book_statuses" */
export interface User_Book_StatusesUser_BooksArgs {
  distinct_on?: InputMaybe<Array<User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Books_Order_By>>;
  where?: InputMaybe<User_Books_Bool_Exp>;
}

/** columns and relationships of "user_book_statuses" */
export interface User_Book_StatusesUser_Books_AggregateArgs {
  distinct_on?: InputMaybe<Array<User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Books_Order_By>>;
  where?: InputMaybe<User_Books_Bool_Exp>;
}

/** aggregated selection of "user_book_statuses" */
export interface User_Book_Statuses_Aggregate {
  __typename?: 'user_book_statuses_aggregate';
  aggregate?: Maybe<User_Book_Statuses_Aggregate_Fields>;
  nodes: Array<User_Book_Statuses>;
}

/** aggregate fields of "user_book_statuses" */
export interface User_Book_Statuses_Aggregate_Fields {
  __typename?: 'user_book_statuses_aggregate_fields';
  avg?: Maybe<User_Book_Statuses_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Book_Statuses_Max_Fields>;
  min?: Maybe<User_Book_Statuses_Min_Fields>;
  stddev?: Maybe<User_Book_Statuses_Stddev_Fields>;
  stddev_pop?: Maybe<User_Book_Statuses_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Book_Statuses_Stddev_Samp_Fields>;
  sum?: Maybe<User_Book_Statuses_Sum_Fields>;
  var_pop?: Maybe<User_Book_Statuses_Var_Pop_Fields>;
  var_samp?: Maybe<User_Book_Statuses_Var_Samp_Fields>;
  variance?: Maybe<User_Book_Statuses_Variance_Fields>;
}

/** aggregate fields of "user_book_statuses" */
export interface User_Book_Statuses_Aggregate_FieldsCountArgs {
  columns?: InputMaybe<Array<User_Book_Statuses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
}

/** aggregate avg on columns */
export interface User_Book_Statuses_Avg_Fields {
  __typename?: 'user_book_statuses_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
}

/** Boolean expression to filter rows from the table "user_book_statuses". All fields are combined with a logical 'AND'. */
export interface User_Book_Statuses_Bool_Exp {
  _and?: InputMaybe<Array<User_Book_Statuses_Bool_Exp>>;
  _not?: InputMaybe<User_Book_Statuses_Bool_Exp>;
  _or?: InputMaybe<Array<User_Book_Statuses_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  user_books?: InputMaybe<User_Books_Bool_Exp>;
  user_books_aggregate?: InputMaybe<User_Books_Aggregate_Bool_Exp>;
}

/** aggregate max on columns */
export interface User_Book_Statuses_Max_Fields {
  __typename?: 'user_book_statuses_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
}

/** aggregate min on columns */
export interface User_Book_Statuses_Min_Fields {
  __typename?: 'user_book_statuses_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
}

/** Ordering options when selecting data from "user_book_statuses". */
export interface User_Book_Statuses_Order_By {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  user_books_aggregate?: InputMaybe<User_Books_Aggregate_Order_By>;
}

/** select columns of table "user_book_statuses" */
export enum User_Book_Statuses_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  Status = 'status',
}

/** aggregate stddev on columns */
export interface User_Book_Statuses_Stddev_Fields {
  __typename?: 'user_book_statuses_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
}

/** aggregate stddev_pop on columns */
export interface User_Book_Statuses_Stddev_Pop_Fields {
  __typename?: 'user_book_statuses_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
}

/** aggregate stddev_samp on columns */
export interface User_Book_Statuses_Stddev_Samp_Fields {
  __typename?: 'user_book_statuses_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
}

/** Streaming cursor of the table "user_book_statuses" */
export interface User_Book_Statuses_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: User_Book_Statuses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface User_Book_Statuses_Stream_Cursor_Value_Input {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
}

/** aggregate sum on columns */
export interface User_Book_Statuses_Sum_Fields {
  __typename?: 'user_book_statuses_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
}

/** aggregate var_pop on columns */
export interface User_Book_Statuses_Var_Pop_Fields {
  __typename?: 'user_book_statuses_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
}

/** aggregate var_samp on columns */
export interface User_Book_Statuses_Var_Samp_Fields {
  __typename?: 'user_book_statuses_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
}

/** aggregate variance on columns */
export interface User_Book_Statuses_Variance_Fields {
  __typename?: 'user_book_statuses_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
}

/** columns and relationships of "user_books" */
export interface User_Books {
  __typename?: 'user_books';
  /** An object relationship */
  book: Books;
  book_id: Scalars['Int']['output'];
  cached_match_score?: Maybe<Scalars['float8']['output']>;
  created_at: Scalars['timestamptz']['output'];
  date_added: Scalars['date']['output'];
  /** An object relationship */
  edition?: Maybe<Editions>;
  edition_id?: Maybe<Scalars['Int']['output']>;
  first_read_date?: Maybe<Scalars['date']['output']>;
  first_started_reading_date?: Maybe<Scalars['date']['output']>;
  /** An array relationship */
  followers: Array<Followed_Users>;
  has_review: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  imported?: Maybe<Scalars['Boolean']['output']>;
  last_read_date?: Maybe<Scalars['date']['output']>;
  /** An array relationship */
  likes: Array<Likes>;
  likes_count: Scalars['Int']['output'];
  media_url?: Maybe<Scalars['String']['output']>;
  merged_at?: Maybe<Scalars['timestamp']['output']>;
  object_type: Scalars['String']['output'];
  original_book_id?: Maybe<Scalars['Int']['output']>;
  original_edition_id?: Maybe<Scalars['Int']['output']>;
  owned: Scalars['Boolean']['output'];
  owned_copies?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  privacy_setting: Privacy_Settings;
  privacy_setting_id: Scalars['Int']['output'];
  private_notes?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['numeric']['output']>;
  read_count: Scalars['Int']['output'];
  /** An object relationship */
  reading_format?: Maybe<Reading_Formats>;
  reading_format_id: Scalars['Int']['output'];
  /** An object relationship */
  reading_journal_summary?: Maybe<Reading_Journals_Summary>;
  /** An array relationship */
  reading_journals: Array<Reading_Journals>;
  recommended_by?: Maybe<Scalars['String']['output']>;
  recommended_for?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  referrer?: Maybe<Users>;
  referrer_user_id?: Maybe<Scalars['Int']['output']>;
  review?: Maybe<Scalars['String']['output']>;
  review_has_spoilers: Scalars['Boolean']['output'];
  review_html?: Maybe<Scalars['String']['output']>;
  review_length: Scalars['Int']['output'];
  review_migrated?: Maybe<Scalars['Boolean']['output']>;
  review_object: Scalars['jsonb']['output'];
  review_raw?: Maybe<Scalars['String']['output']>;
  review_slate: Scalars['jsonb']['output'];
  reviewed_at?: Maybe<Scalars['timestamp']['output']>;
  sponsored_review: Scalars['Boolean']['output'];
  starred: Scalars['Boolean']['output'];
  status_id: Scalars['Int']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  user: Users;
  /** An array relationship */
  user_book_reads: Array<User_Book_Reads>;
  /** An aggregate relationship */
  user_book_reads_aggregate: User_Book_Reads_Aggregate;
  /** An object relationship */
  user_book_status: User_Book_Statuses;
  /** An array relationship */
  user_books: Array<User_Books>;
  /** An aggregate relationship */
  user_books_aggregate: User_Books_Aggregate;
  user_id: Scalars['Int']['output'];
}

/** columns and relationships of "user_books" */
export interface User_BooksFollowersArgs {
  distinct_on?: InputMaybe<Array<Followed_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Followed_Users_Order_By>>;
  where?: InputMaybe<Followed_Users_Bool_Exp>;
}

/** columns and relationships of "user_books" */
export interface User_BooksLikesArgs {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
}

/** columns and relationships of "user_books" */
export interface User_BooksReading_JournalsArgs {
  distinct_on?: InputMaybe<Array<Reading_Journals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reading_Journals_Order_By>>;
  where?: InputMaybe<Reading_Journals_Bool_Exp>;
}

/** columns and relationships of "user_books" */
export interface User_BooksReview_ObjectArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "user_books" */
export interface User_BooksReview_SlateArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "user_books" */
export interface User_BooksUser_Book_ReadsArgs {
  distinct_on?: InputMaybe<Array<User_Book_Reads_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Book_Reads_Order_By>>;
  where?: InputMaybe<User_Book_Reads_Bool_Exp>;
}

/** columns and relationships of "user_books" */
export interface User_BooksUser_Book_Reads_AggregateArgs {
  distinct_on?: InputMaybe<Array<User_Book_Reads_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Book_Reads_Order_By>>;
  where?: InputMaybe<User_Book_Reads_Bool_Exp>;
}

/** columns and relationships of "user_books" */
export interface User_BooksUser_BooksArgs {
  distinct_on?: InputMaybe<Array<User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Books_Order_By>>;
  where?: InputMaybe<User_Books_Bool_Exp>;
}

/** columns and relationships of "user_books" */
export interface User_BooksUser_Books_AggregateArgs {
  distinct_on?: InputMaybe<Array<User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Books_Order_By>>;
  where?: InputMaybe<User_Books_Bool_Exp>;
}

/** aggregated selection of "user_books" */
export interface User_Books_Aggregate {
  __typename?: 'user_books_aggregate';
  aggregate?: Maybe<User_Books_Aggregate_Fields>;
  nodes: Array<User_Books>;
}

export interface User_Books_Aggregate_Bool_Exp {
  avg?: InputMaybe<User_Books_Aggregate_Bool_Exp_Avg>;
  bool_and?: InputMaybe<User_Books_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<User_Books_Aggregate_Bool_Exp_Bool_Or>;
  corr?: InputMaybe<User_Books_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<User_Books_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<User_Books_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<User_Books_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<User_Books_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<User_Books_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<User_Books_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<User_Books_Aggregate_Bool_Exp_Var_Samp>;
}

export interface User_Books_Aggregate_Bool_Exp_Avg {
  arguments: User_Books_Select_Column_User_Books_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Books_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
}

export interface User_Books_Aggregate_Bool_Exp_Bool_And {
  arguments: User_Books_Select_Column_User_Books_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Books_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
}

export interface User_Books_Aggregate_Bool_Exp_Bool_Or {
  arguments: User_Books_Select_Column_User_Books_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Books_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
}

export interface User_Books_Aggregate_Bool_Exp_Corr {
  arguments: User_Books_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Books_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
}

export interface User_Books_Aggregate_Bool_Exp_Corr_Arguments {
  X: User_Books_Select_Column_User_Books_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: User_Books_Select_Column_User_Books_Aggregate_Bool_Exp_Corr_Arguments_Columns;
}

export interface User_Books_Aggregate_Bool_Exp_Count {
  arguments?: InputMaybe<Array<User_Books_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Books_Bool_Exp>;
  predicate: Int_Comparison_Exp;
}

export interface User_Books_Aggregate_Bool_Exp_Covar_Samp {
  arguments: User_Books_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Books_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
}

export interface User_Books_Aggregate_Bool_Exp_Covar_Samp_Arguments {
  X: User_Books_Select_Column_User_Books_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: User_Books_Select_Column_User_Books_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
}

export interface User_Books_Aggregate_Bool_Exp_Max {
  arguments: User_Books_Select_Column_User_Books_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Books_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
}

export interface User_Books_Aggregate_Bool_Exp_Min {
  arguments: User_Books_Select_Column_User_Books_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Books_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
}

export interface User_Books_Aggregate_Bool_Exp_Stddev_Samp {
  arguments: User_Books_Select_Column_User_Books_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Books_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
}

export interface User_Books_Aggregate_Bool_Exp_Sum {
  arguments: User_Books_Select_Column_User_Books_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Books_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
}

export interface User_Books_Aggregate_Bool_Exp_Var_Samp {
  arguments: User_Books_Select_Column_User_Books_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Books_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
}

/** aggregate fields of "user_books" */
export interface User_Books_Aggregate_Fields {
  __typename?: 'user_books_aggregate_fields';
  avg?: Maybe<User_Books_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Books_Max_Fields>;
  min?: Maybe<User_Books_Min_Fields>;
  stddev?: Maybe<User_Books_Stddev_Fields>;
  stddev_pop?: Maybe<User_Books_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Books_Stddev_Samp_Fields>;
  sum?: Maybe<User_Books_Sum_Fields>;
  var_pop?: Maybe<User_Books_Var_Pop_Fields>;
  var_samp?: Maybe<User_Books_Var_Samp_Fields>;
  variance?: Maybe<User_Books_Variance_Fields>;
}

/** aggregate fields of "user_books" */
export interface User_Books_Aggregate_FieldsCountArgs {
  columns?: InputMaybe<Array<User_Books_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
}

/** order by aggregate values of table "user_books" */
export interface User_Books_Aggregate_Order_By {
  avg?: InputMaybe<User_Books_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Books_Max_Order_By>;
  min?: InputMaybe<User_Books_Min_Order_By>;
  stddev?: InputMaybe<User_Books_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Books_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Books_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Books_Sum_Order_By>;
  var_pop?: InputMaybe<User_Books_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Books_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Books_Variance_Order_By>;
}

/** aggregate avg on columns */
export interface User_Books_Avg_Fields {
  __typename?: 'user_books_avg_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  cached_match_score?: Maybe<Scalars['Float']['output']>;
  edition_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  likes_count?: Maybe<Scalars['Float']['output']>;
  original_book_id?: Maybe<Scalars['Float']['output']>;
  original_edition_id?: Maybe<Scalars['Float']['output']>;
  owned_copies?: Maybe<Scalars['Float']['output']>;
  privacy_setting_id?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  read_count?: Maybe<Scalars['Float']['output']>;
  reading_format_id?: Maybe<Scalars['Float']['output']>;
  referrer_user_id?: Maybe<Scalars['Float']['output']>;
  review_length?: Maybe<Scalars['Float']['output']>;
  status_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by avg() on columns of table "user_books" */
export interface User_Books_Avg_Order_By {
  book_id?: InputMaybe<Order_By>;
  cached_match_score?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  original_edition_id?: InputMaybe<Order_By>;
  owned_copies?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  read_count?: InputMaybe<Order_By>;
  reading_format_id?: InputMaybe<Order_By>;
  referrer_user_id?: InputMaybe<Order_By>;
  review_length?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "user_books". All fields are combined with a logical 'AND'. */
export interface User_Books_Bool_Exp {
  _and?: InputMaybe<Array<User_Books_Bool_Exp>>;
  _not?: InputMaybe<User_Books_Bool_Exp>;
  _or?: InputMaybe<Array<User_Books_Bool_Exp>>;
  book?: InputMaybe<Books_Bool_Exp>;
  book_id?: InputMaybe<Int_Comparison_Exp>;
  cached_match_score?: InputMaybe<Float8_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  date_added?: InputMaybe<Date_Comparison_Exp>;
  edition?: InputMaybe<Editions_Bool_Exp>;
  edition_id?: InputMaybe<Int_Comparison_Exp>;
  first_read_date?: InputMaybe<Date_Comparison_Exp>;
  first_started_reading_date?: InputMaybe<Date_Comparison_Exp>;
  followers?: InputMaybe<Followed_Users_Bool_Exp>;
  has_review?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  imported?: InputMaybe<Boolean_Comparison_Exp>;
  last_read_date?: InputMaybe<Date_Comparison_Exp>;
  likes?: InputMaybe<Likes_Bool_Exp>;
  likes_count?: InputMaybe<Int_Comparison_Exp>;
  media_url?: InputMaybe<String_Comparison_Exp>;
  merged_at?: InputMaybe<Timestamp_Comparison_Exp>;
  object_type?: InputMaybe<String_Comparison_Exp>;
  original_book_id?: InputMaybe<Int_Comparison_Exp>;
  original_edition_id?: InputMaybe<Int_Comparison_Exp>;
  owned?: InputMaybe<Boolean_Comparison_Exp>;
  owned_copies?: InputMaybe<Int_Comparison_Exp>;
  privacy_setting?: InputMaybe<Privacy_Settings_Bool_Exp>;
  privacy_setting_id?: InputMaybe<Int_Comparison_Exp>;
  private_notes?: InputMaybe<String_Comparison_Exp>;
  rating?: InputMaybe<Numeric_Comparison_Exp>;
  read_count?: InputMaybe<Int_Comparison_Exp>;
  reading_format?: InputMaybe<Reading_Formats_Bool_Exp>;
  reading_format_id?: InputMaybe<Int_Comparison_Exp>;
  reading_journal_summary?: InputMaybe<Reading_Journals_Summary_Bool_Exp>;
  reading_journals?: InputMaybe<Reading_Journals_Bool_Exp>;
  recommended_by?: InputMaybe<String_Comparison_Exp>;
  recommended_for?: InputMaybe<String_Comparison_Exp>;
  referrer?: InputMaybe<Users_Bool_Exp>;
  referrer_user_id?: InputMaybe<Int_Comparison_Exp>;
  review?: InputMaybe<String_Comparison_Exp>;
  review_has_spoilers?: InputMaybe<Boolean_Comparison_Exp>;
  review_html?: InputMaybe<String_Comparison_Exp>;
  review_length?: InputMaybe<Int_Comparison_Exp>;
  review_migrated?: InputMaybe<Boolean_Comparison_Exp>;
  review_object?: InputMaybe<Jsonb_Comparison_Exp>;
  review_raw?: InputMaybe<String_Comparison_Exp>;
  review_slate?: InputMaybe<Jsonb_Comparison_Exp>;
  reviewed_at?: InputMaybe<Timestamp_Comparison_Exp>;
  sponsored_review?: InputMaybe<Boolean_Comparison_Exp>;
  starred?: InputMaybe<Boolean_Comparison_Exp>;
  status_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_book_reads?: InputMaybe<User_Book_Reads_Bool_Exp>;
  user_book_reads_aggregate?: InputMaybe<User_Book_Reads_Aggregate_Bool_Exp>;
  user_book_status?: InputMaybe<User_Book_Statuses_Bool_Exp>;
  user_books?: InputMaybe<User_Books_Bool_Exp>;
  user_books_aggregate?: InputMaybe<User_Books_Aggregate_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
}

/** aggregate max on columns */
export interface User_Books_Max_Fields {
  __typename?: 'user_books_max_fields';
  book_id?: Maybe<Scalars['Int']['output']>;
  cached_match_score?: Maybe<Scalars['float8']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  date_added?: Maybe<Scalars['date']['output']>;
  edition_id?: Maybe<Scalars['Int']['output']>;
  first_read_date?: Maybe<Scalars['date']['output']>;
  first_started_reading_date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  last_read_date?: Maybe<Scalars['date']['output']>;
  likes_count?: Maybe<Scalars['Int']['output']>;
  media_url?: Maybe<Scalars['String']['output']>;
  merged_at?: Maybe<Scalars['timestamp']['output']>;
  object_type?: Maybe<Scalars['String']['output']>;
  original_book_id?: Maybe<Scalars['Int']['output']>;
  original_edition_id?: Maybe<Scalars['Int']['output']>;
  owned_copies?: Maybe<Scalars['Int']['output']>;
  privacy_setting_id?: Maybe<Scalars['Int']['output']>;
  private_notes?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['numeric']['output']>;
  read_count?: Maybe<Scalars['Int']['output']>;
  reading_format_id?: Maybe<Scalars['Int']['output']>;
  recommended_by?: Maybe<Scalars['String']['output']>;
  recommended_for?: Maybe<Scalars['String']['output']>;
  referrer_user_id?: Maybe<Scalars['Int']['output']>;
  review?: Maybe<Scalars['String']['output']>;
  review_html?: Maybe<Scalars['String']['output']>;
  review_length?: Maybe<Scalars['Int']['output']>;
  review_raw?: Maybe<Scalars['String']['output']>;
  reviewed_at?: Maybe<Scalars['timestamp']['output']>;
  status_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** order by max() on columns of table "user_books" */
export interface User_Books_Max_Order_By {
  book_id?: InputMaybe<Order_By>;
  cached_match_score?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date_added?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  first_read_date?: InputMaybe<Order_By>;
  first_started_reading_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_read_date?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  media_url?: InputMaybe<Order_By>;
  merged_at?: InputMaybe<Order_By>;
  object_type?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  original_edition_id?: InputMaybe<Order_By>;
  owned_copies?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  private_notes?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  read_count?: InputMaybe<Order_By>;
  reading_format_id?: InputMaybe<Order_By>;
  recommended_by?: InputMaybe<Order_By>;
  recommended_for?: InputMaybe<Order_By>;
  referrer_user_id?: InputMaybe<Order_By>;
  review?: InputMaybe<Order_By>;
  review_html?: InputMaybe<Order_By>;
  review_length?: InputMaybe<Order_By>;
  review_raw?: InputMaybe<Order_By>;
  reviewed_at?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** aggregate min on columns */
export interface User_Books_Min_Fields {
  __typename?: 'user_books_min_fields';
  book_id?: Maybe<Scalars['Int']['output']>;
  cached_match_score?: Maybe<Scalars['float8']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  date_added?: Maybe<Scalars['date']['output']>;
  edition_id?: Maybe<Scalars['Int']['output']>;
  first_read_date?: Maybe<Scalars['date']['output']>;
  first_started_reading_date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  last_read_date?: Maybe<Scalars['date']['output']>;
  likes_count?: Maybe<Scalars['Int']['output']>;
  media_url?: Maybe<Scalars['String']['output']>;
  merged_at?: Maybe<Scalars['timestamp']['output']>;
  object_type?: Maybe<Scalars['String']['output']>;
  original_book_id?: Maybe<Scalars['Int']['output']>;
  original_edition_id?: Maybe<Scalars['Int']['output']>;
  owned_copies?: Maybe<Scalars['Int']['output']>;
  privacy_setting_id?: Maybe<Scalars['Int']['output']>;
  private_notes?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['numeric']['output']>;
  read_count?: Maybe<Scalars['Int']['output']>;
  reading_format_id?: Maybe<Scalars['Int']['output']>;
  recommended_by?: Maybe<Scalars['String']['output']>;
  recommended_for?: Maybe<Scalars['String']['output']>;
  referrer_user_id?: Maybe<Scalars['Int']['output']>;
  review?: Maybe<Scalars['String']['output']>;
  review_html?: Maybe<Scalars['String']['output']>;
  review_length?: Maybe<Scalars['Int']['output']>;
  review_raw?: Maybe<Scalars['String']['output']>;
  reviewed_at?: Maybe<Scalars['timestamp']['output']>;
  status_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** order by min() on columns of table "user_books" */
export interface User_Books_Min_Order_By {
  book_id?: InputMaybe<Order_By>;
  cached_match_score?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date_added?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  first_read_date?: InputMaybe<Order_By>;
  first_started_reading_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_read_date?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  media_url?: InputMaybe<Order_By>;
  merged_at?: InputMaybe<Order_By>;
  object_type?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  original_edition_id?: InputMaybe<Order_By>;
  owned_copies?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  private_notes?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  read_count?: InputMaybe<Order_By>;
  reading_format_id?: InputMaybe<Order_By>;
  recommended_by?: InputMaybe<Order_By>;
  recommended_for?: InputMaybe<Order_By>;
  referrer_user_id?: InputMaybe<Order_By>;
  review?: InputMaybe<Order_By>;
  review_html?: InputMaybe<Order_By>;
  review_length?: InputMaybe<Order_By>;
  review_raw?: InputMaybe<Order_By>;
  reviewed_at?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Ordering options when selecting data from "user_books". */
export interface User_Books_Order_By {
  book?: InputMaybe<Books_Order_By>;
  book_id?: InputMaybe<Order_By>;
  cached_match_score?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date_added?: InputMaybe<Order_By>;
  edition?: InputMaybe<Editions_Order_By>;
  edition_id?: InputMaybe<Order_By>;
  first_read_date?: InputMaybe<Order_By>;
  first_started_reading_date?: InputMaybe<Order_By>;
  followers_aggregate?: InputMaybe<Followed_Users_Aggregate_Order_By>;
  has_review?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imported?: InputMaybe<Order_By>;
  last_read_date?: InputMaybe<Order_By>;
  likes_aggregate?: InputMaybe<Likes_Aggregate_Order_By>;
  likes_count?: InputMaybe<Order_By>;
  media_url?: InputMaybe<Order_By>;
  merged_at?: InputMaybe<Order_By>;
  object_type?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  original_edition_id?: InputMaybe<Order_By>;
  owned?: InputMaybe<Order_By>;
  owned_copies?: InputMaybe<Order_By>;
  privacy_setting?: InputMaybe<Privacy_Settings_Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  private_notes?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  read_count?: InputMaybe<Order_By>;
  reading_format?: InputMaybe<Reading_Formats_Order_By>;
  reading_format_id?: InputMaybe<Order_By>;
  reading_journal_summary?: InputMaybe<Reading_Journals_Summary_Order_By>;
  reading_journals_aggregate?: InputMaybe<Reading_Journals_Aggregate_Order_By>;
  recommended_by?: InputMaybe<Order_By>;
  recommended_for?: InputMaybe<Order_By>;
  referrer?: InputMaybe<Users_Order_By>;
  referrer_user_id?: InputMaybe<Order_By>;
  review?: InputMaybe<Order_By>;
  review_has_spoilers?: InputMaybe<Order_By>;
  review_html?: InputMaybe<Order_By>;
  review_length?: InputMaybe<Order_By>;
  review_migrated?: InputMaybe<Order_By>;
  review_object?: InputMaybe<Order_By>;
  review_raw?: InputMaybe<Order_By>;
  review_slate?: InputMaybe<Order_By>;
  reviewed_at?: InputMaybe<Order_By>;
  sponsored_review?: InputMaybe<Order_By>;
  starred?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_book_reads_aggregate?: InputMaybe<User_Book_Reads_Aggregate_Order_By>;
  user_book_status?: InputMaybe<User_Book_Statuses_Order_By>;
  user_books_aggregate?: InputMaybe<User_Books_Aggregate_Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** select columns of table "user_books" */
export enum User_Books_Select_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  CachedMatchScore = 'cached_match_score',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DateAdded = 'date_added',
  /** column name */
  EditionId = 'edition_id',
  /** column name */
  FirstReadDate = 'first_read_date',
  /** column name */
  FirstStartedReadingDate = 'first_started_reading_date',
  /** column name */
  HasReview = 'has_review',
  /** column name */
  Id = 'id',
  /** column name */
  Imported = 'imported',
  /** column name */
  LastReadDate = 'last_read_date',
  /** column name */
  LikesCount = 'likes_count',
  /** column name */
  MediaUrl = 'media_url',
  /** column name */
  MergedAt = 'merged_at',
  /** column name */
  ObjectType = 'object_type',
  /** column name */
  OriginalBookId = 'original_book_id',
  /** column name */
  OriginalEditionId = 'original_edition_id',
  /** column name */
  Owned = 'owned',
  /** column name */
  OwnedCopies = 'owned_copies',
  /** column name */
  PrivacySettingId = 'privacy_setting_id',
  /** column name */
  PrivateNotes = 'private_notes',
  /** column name */
  Rating = 'rating',
  /** column name */
  ReadCount = 'read_count',
  /** column name */
  ReadingFormatId = 'reading_format_id',
  /** column name */
  RecommendedBy = 'recommended_by',
  /** column name */
  RecommendedFor = 'recommended_for',
  /** column name */
  ReferrerUserId = 'referrer_user_id',
  /** column name */
  Review = 'review',
  /** column name */
  ReviewHasSpoilers = 'review_has_spoilers',
  /** column name */
  ReviewHtml = 'review_html',
  /** column name */
  ReviewLength = 'review_length',
  /** column name */
  ReviewMigrated = 'review_migrated',
  /** column name */
  ReviewObject = 'review_object',
  /** column name */
  ReviewRaw = 'review_raw',
  /** column name */
  ReviewSlate = 'review_slate',
  /** column name */
  ReviewedAt = 'reviewed_at',
  /** column name */
  SponsoredReview = 'sponsored_review',
  /** column name */
  Starred = 'starred',
  /** column name */
  StatusId = 'status_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url',
  /** column name */
  UserId = 'user_id',
}

/** select "user_books_aggregate_bool_exp_avg_arguments_columns" columns of table "user_books" */
export enum User_Books_Select_Column_User_Books_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  CachedMatchScore = 'cached_match_score',
}

/** select "user_books_aggregate_bool_exp_bool_and_arguments_columns" columns of table "user_books" */
export enum User_Books_Select_Column_User_Books_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  HasReview = 'has_review',
  /** column name */
  Imported = 'imported',
  /** column name */
  Owned = 'owned',
  /** column name */
  ReviewHasSpoilers = 'review_has_spoilers',
  /** column name */
  ReviewMigrated = 'review_migrated',
  /** column name */
  SponsoredReview = 'sponsored_review',
  /** column name */
  Starred = 'starred',
}

/** select "user_books_aggregate_bool_exp_bool_or_arguments_columns" columns of table "user_books" */
export enum User_Books_Select_Column_User_Books_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  HasReview = 'has_review',
  /** column name */
  Imported = 'imported',
  /** column name */
  Owned = 'owned',
  /** column name */
  ReviewHasSpoilers = 'review_has_spoilers',
  /** column name */
  ReviewMigrated = 'review_migrated',
  /** column name */
  SponsoredReview = 'sponsored_review',
  /** column name */
  Starred = 'starred',
}

/** select "user_books_aggregate_bool_exp_corr_arguments_columns" columns of table "user_books" */
export enum User_Books_Select_Column_User_Books_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  CachedMatchScore = 'cached_match_score',
}

/** select "user_books_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "user_books" */
export enum User_Books_Select_Column_User_Books_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  CachedMatchScore = 'cached_match_score',
}

/** select "user_books_aggregate_bool_exp_max_arguments_columns" columns of table "user_books" */
export enum User_Books_Select_Column_User_Books_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  CachedMatchScore = 'cached_match_score',
}

/** select "user_books_aggregate_bool_exp_min_arguments_columns" columns of table "user_books" */
export enum User_Books_Select_Column_User_Books_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  CachedMatchScore = 'cached_match_score',
}

/** select "user_books_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "user_books" */
export enum User_Books_Select_Column_User_Books_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  CachedMatchScore = 'cached_match_score',
}

/** select "user_books_aggregate_bool_exp_sum_arguments_columns" columns of table "user_books" */
export enum User_Books_Select_Column_User_Books_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  CachedMatchScore = 'cached_match_score',
}

/** select "user_books_aggregate_bool_exp_var_samp_arguments_columns" columns of table "user_books" */
export enum User_Books_Select_Column_User_Books_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  CachedMatchScore = 'cached_match_score',
}

/** aggregate stddev on columns */
export interface User_Books_Stddev_Fields {
  __typename?: 'user_books_stddev_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  cached_match_score?: Maybe<Scalars['Float']['output']>;
  edition_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  likes_count?: Maybe<Scalars['Float']['output']>;
  original_book_id?: Maybe<Scalars['Float']['output']>;
  original_edition_id?: Maybe<Scalars['Float']['output']>;
  owned_copies?: Maybe<Scalars['Float']['output']>;
  privacy_setting_id?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  read_count?: Maybe<Scalars['Float']['output']>;
  reading_format_id?: Maybe<Scalars['Float']['output']>;
  referrer_user_id?: Maybe<Scalars['Float']['output']>;
  review_length?: Maybe<Scalars['Float']['output']>;
  status_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev() on columns of table "user_books" */
export interface User_Books_Stddev_Order_By {
  book_id?: InputMaybe<Order_By>;
  cached_match_score?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  original_edition_id?: InputMaybe<Order_By>;
  owned_copies?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  read_count?: InputMaybe<Order_By>;
  reading_format_id?: InputMaybe<Order_By>;
  referrer_user_id?: InputMaybe<Order_By>;
  review_length?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** aggregate stddev_pop on columns */
export interface User_Books_Stddev_Pop_Fields {
  __typename?: 'user_books_stddev_pop_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  cached_match_score?: Maybe<Scalars['Float']['output']>;
  edition_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  likes_count?: Maybe<Scalars['Float']['output']>;
  original_book_id?: Maybe<Scalars['Float']['output']>;
  original_edition_id?: Maybe<Scalars['Float']['output']>;
  owned_copies?: Maybe<Scalars['Float']['output']>;
  privacy_setting_id?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  read_count?: Maybe<Scalars['Float']['output']>;
  reading_format_id?: Maybe<Scalars['Float']['output']>;
  referrer_user_id?: Maybe<Scalars['Float']['output']>;
  review_length?: Maybe<Scalars['Float']['output']>;
  status_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev_pop() on columns of table "user_books" */
export interface User_Books_Stddev_Pop_Order_By {
  book_id?: InputMaybe<Order_By>;
  cached_match_score?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  original_edition_id?: InputMaybe<Order_By>;
  owned_copies?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  read_count?: InputMaybe<Order_By>;
  reading_format_id?: InputMaybe<Order_By>;
  referrer_user_id?: InputMaybe<Order_By>;
  review_length?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** aggregate stddev_samp on columns */
export interface User_Books_Stddev_Samp_Fields {
  __typename?: 'user_books_stddev_samp_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  cached_match_score?: Maybe<Scalars['Float']['output']>;
  edition_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  likes_count?: Maybe<Scalars['Float']['output']>;
  original_book_id?: Maybe<Scalars['Float']['output']>;
  original_edition_id?: Maybe<Scalars['Float']['output']>;
  owned_copies?: Maybe<Scalars['Float']['output']>;
  privacy_setting_id?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  read_count?: Maybe<Scalars['Float']['output']>;
  reading_format_id?: Maybe<Scalars['Float']['output']>;
  referrer_user_id?: Maybe<Scalars['Float']['output']>;
  review_length?: Maybe<Scalars['Float']['output']>;
  status_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by stddev_samp() on columns of table "user_books" */
export interface User_Books_Stddev_Samp_Order_By {
  book_id?: InputMaybe<Order_By>;
  cached_match_score?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  original_edition_id?: InputMaybe<Order_By>;
  owned_copies?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  read_count?: InputMaybe<Order_By>;
  reading_format_id?: InputMaybe<Order_By>;
  referrer_user_id?: InputMaybe<Order_By>;
  review_length?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "user_books" */
export interface User_Books_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: User_Books_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface User_Books_Stream_Cursor_Value_Input {
  book_id?: InputMaybe<Scalars['Int']['input']>;
  cached_match_score?: InputMaybe<Scalars['float8']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  date_added?: InputMaybe<Scalars['date']['input']>;
  edition_id?: InputMaybe<Scalars['Int']['input']>;
  first_read_date?: InputMaybe<Scalars['date']['input']>;
  first_started_reading_date?: InputMaybe<Scalars['date']['input']>;
  has_review?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  imported?: InputMaybe<Scalars['Boolean']['input']>;
  last_read_date?: InputMaybe<Scalars['date']['input']>;
  likes_count?: InputMaybe<Scalars['Int']['input']>;
  media_url?: InputMaybe<Scalars['String']['input']>;
  merged_at?: InputMaybe<Scalars['timestamp']['input']>;
  object_type?: InputMaybe<Scalars['String']['input']>;
  original_book_id?: InputMaybe<Scalars['Int']['input']>;
  original_edition_id?: InputMaybe<Scalars['Int']['input']>;
  owned?: InputMaybe<Scalars['Boolean']['input']>;
  owned_copies?: InputMaybe<Scalars['Int']['input']>;
  privacy_setting_id?: InputMaybe<Scalars['Int']['input']>;
  private_notes?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['numeric']['input']>;
  read_count?: InputMaybe<Scalars['Int']['input']>;
  reading_format_id?: InputMaybe<Scalars['Int']['input']>;
  recommended_by?: InputMaybe<Scalars['String']['input']>;
  recommended_for?: InputMaybe<Scalars['String']['input']>;
  referrer_user_id?: InputMaybe<Scalars['Int']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  review_has_spoilers?: InputMaybe<Scalars['Boolean']['input']>;
  review_html?: InputMaybe<Scalars['String']['input']>;
  review_length?: InputMaybe<Scalars['Int']['input']>;
  review_migrated?: InputMaybe<Scalars['Boolean']['input']>;
  review_object?: InputMaybe<Scalars['jsonb']['input']>;
  review_raw?: InputMaybe<Scalars['String']['input']>;
  review_slate?: InputMaybe<Scalars['jsonb']['input']>;
  reviewed_at?: InputMaybe<Scalars['timestamp']['input']>;
  sponsored_review?: InputMaybe<Scalars['Boolean']['input']>;
  starred?: InputMaybe<Scalars['Boolean']['input']>;
  status_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
}

/** aggregate sum on columns */
export interface User_Books_Sum_Fields {
  __typename?: 'user_books_sum_fields';
  book_id?: Maybe<Scalars['Int']['output']>;
  cached_match_score?: Maybe<Scalars['float8']['output']>;
  edition_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  likes_count?: Maybe<Scalars['Int']['output']>;
  original_book_id?: Maybe<Scalars['Int']['output']>;
  original_edition_id?: Maybe<Scalars['Int']['output']>;
  owned_copies?: Maybe<Scalars['Int']['output']>;
  privacy_setting_id?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['numeric']['output']>;
  read_count?: Maybe<Scalars['Int']['output']>;
  reading_format_id?: Maybe<Scalars['Int']['output']>;
  referrer_user_id?: Maybe<Scalars['Int']['output']>;
  review_length?: Maybe<Scalars['Int']['output']>;
  status_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** order by sum() on columns of table "user_books" */
export interface User_Books_Sum_Order_By {
  book_id?: InputMaybe<Order_By>;
  cached_match_score?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  original_edition_id?: InputMaybe<Order_By>;
  owned_copies?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  read_count?: InputMaybe<Order_By>;
  reading_format_id?: InputMaybe<Order_By>;
  referrer_user_id?: InputMaybe<Order_By>;
  review_length?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** aggregate var_pop on columns */
export interface User_Books_Var_Pop_Fields {
  __typename?: 'user_books_var_pop_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  cached_match_score?: Maybe<Scalars['Float']['output']>;
  edition_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  likes_count?: Maybe<Scalars['Float']['output']>;
  original_book_id?: Maybe<Scalars['Float']['output']>;
  original_edition_id?: Maybe<Scalars['Float']['output']>;
  owned_copies?: Maybe<Scalars['Float']['output']>;
  privacy_setting_id?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  read_count?: Maybe<Scalars['Float']['output']>;
  reading_format_id?: Maybe<Scalars['Float']['output']>;
  referrer_user_id?: Maybe<Scalars['Float']['output']>;
  review_length?: Maybe<Scalars['Float']['output']>;
  status_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by var_pop() on columns of table "user_books" */
export interface User_Books_Var_Pop_Order_By {
  book_id?: InputMaybe<Order_By>;
  cached_match_score?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  original_edition_id?: InputMaybe<Order_By>;
  owned_copies?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  read_count?: InputMaybe<Order_By>;
  reading_format_id?: InputMaybe<Order_By>;
  referrer_user_id?: InputMaybe<Order_By>;
  review_length?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** aggregate var_samp on columns */
export interface User_Books_Var_Samp_Fields {
  __typename?: 'user_books_var_samp_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  cached_match_score?: Maybe<Scalars['Float']['output']>;
  edition_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  likes_count?: Maybe<Scalars['Float']['output']>;
  original_book_id?: Maybe<Scalars['Float']['output']>;
  original_edition_id?: Maybe<Scalars['Float']['output']>;
  owned_copies?: Maybe<Scalars['Float']['output']>;
  privacy_setting_id?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  read_count?: Maybe<Scalars['Float']['output']>;
  reading_format_id?: Maybe<Scalars['Float']['output']>;
  referrer_user_id?: Maybe<Scalars['Float']['output']>;
  review_length?: Maybe<Scalars['Float']['output']>;
  status_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by var_samp() on columns of table "user_books" */
export interface User_Books_Var_Samp_Order_By {
  book_id?: InputMaybe<Order_By>;
  cached_match_score?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  original_edition_id?: InputMaybe<Order_By>;
  owned_copies?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  read_count?: InputMaybe<Order_By>;
  reading_format_id?: InputMaybe<Order_By>;
  referrer_user_id?: InputMaybe<Order_By>;
  review_length?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** aggregate variance on columns */
export interface User_Books_Variance_Fields {
  __typename?: 'user_books_variance_fields';
  book_id?: Maybe<Scalars['Float']['output']>;
  cached_match_score?: Maybe<Scalars['Float']['output']>;
  edition_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  likes_count?: Maybe<Scalars['Float']['output']>;
  original_book_id?: Maybe<Scalars['Float']['output']>;
  original_edition_id?: Maybe<Scalars['Float']['output']>;
  owned_copies?: Maybe<Scalars['Float']['output']>;
  privacy_setting_id?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  read_count?: Maybe<Scalars['Float']['output']>;
  reading_format_id?: Maybe<Scalars['Float']['output']>;
  referrer_user_id?: Maybe<Scalars['Float']['output']>;
  review_length?: Maybe<Scalars['Float']['output']>;
  status_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
}

/** order by variance() on columns of table "user_books" */
export interface User_Books_Variance_Order_By {
  book_id?: InputMaybe<Order_By>;
  cached_match_score?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_count?: InputMaybe<Order_By>;
  original_book_id?: InputMaybe<Order_By>;
  original_edition_id?: InputMaybe<Order_By>;
  owned_copies?: InputMaybe<Order_By>;
  privacy_setting_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  read_count?: InputMaybe<Order_By>;
  reading_format_id?: InputMaybe<Order_By>;
  referrer_user_id?: InputMaybe<Order_By>;
  review_length?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** columns and relationships of "user_flags" */
export interface User_Flags {
  __typename?: 'user_flags';
  action_id?: Maybe<Scalars['Int']['output']>;
  action_type?: Maybe<Scalars['String']['output']>;
  category: Scalars['String']['output'];
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  details: Scalars['String']['output'];
  /** An object relationship */
  flag_status: Flag_Statuses;
  flag_status_id: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  reported_user_id: Scalars['Int']['output'];
  user_id: Scalars['Int']['output'];
  /** An object relationship */
  user_reported: Users;
  /** An object relationship */
  user_submitted: Users;
}

/** order by aggregate values of table "user_flags" */
export interface User_Flags_Aggregate_Order_By {
  avg?: InputMaybe<User_Flags_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Flags_Max_Order_By>;
  min?: InputMaybe<User_Flags_Min_Order_By>;
  stddev?: InputMaybe<User_Flags_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Flags_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Flags_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Flags_Sum_Order_By>;
  var_pop?: InputMaybe<User_Flags_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Flags_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Flags_Variance_Order_By>;
}

/** order by avg() on columns of table "user_flags" */
export interface User_Flags_Avg_Order_By {
  action_id?: InputMaybe<Order_By>;
  flag_status_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reported_user_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "user_flags". All fields are combined with a logical 'AND'. */
export interface User_Flags_Bool_Exp {
  _and?: InputMaybe<Array<User_Flags_Bool_Exp>>;
  _not?: InputMaybe<User_Flags_Bool_Exp>;
  _or?: InputMaybe<Array<User_Flags_Bool_Exp>>;
  action_id?: InputMaybe<Int_Comparison_Exp>;
  action_type?: InputMaybe<String_Comparison_Exp>;
  category?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  details?: InputMaybe<String_Comparison_Exp>;
  flag_status?: InputMaybe<Flag_Statuses_Bool_Exp>;
  flag_status_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  reported_user_id?: InputMaybe<Int_Comparison_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
  user_reported?: InputMaybe<Users_Bool_Exp>;
  user_submitted?: InputMaybe<Users_Bool_Exp>;
}

/** unique or primary key constraints on table "user_flags" */
export enum User_Flags_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserFlagsIdKey = 'user_flags_id_key',
  /** unique or primary key constraint on columns "id" */
  UserFlagsPkey = 'user_flags_pkey',
}

/** input type for inserting data into table "user_flags" */
export interface User_Flags_Insert_Input {
  action_id?: InputMaybe<Scalars['Int']['input']>;
  action_type?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  reported_user_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
}

/** order by max() on columns of table "user_flags" */
export interface User_Flags_Max_Order_By {
  action_id?: InputMaybe<Order_By>;
  action_type?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  flag_status_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reported_user_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by min() on columns of table "user_flags" */
export interface User_Flags_Min_Order_By {
  action_id?: InputMaybe<Order_By>;
  action_type?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  flag_status_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reported_user_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** response of any mutation on the table "user_flags" */
export interface User_Flags_Mutation_Response {
  __typename?: 'user_flags_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Flags>;
}

/** on_conflict condition type for table "user_flags" */
export interface User_Flags_On_Conflict {
  constraint: User_Flags_Constraint;
  update_columns?: Array<User_Flags_Update_Column>;
  where?: InputMaybe<User_Flags_Bool_Exp>;
}

/** Ordering options when selecting data from "user_flags". */
export interface User_Flags_Order_By {
  action_id?: InputMaybe<Order_By>;
  action_type?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  flag_status?: InputMaybe<Flag_Statuses_Order_By>;
  flag_status_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reported_user_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  user_reported?: InputMaybe<Users_Order_By>;
  user_submitted?: InputMaybe<Users_Order_By>;
}

/** select columns of table "user_flags" */
export enum User_Flags_Select_Column {
  /** column name */
  ActionId = 'action_id',
  /** column name */
  ActionType = 'action_type',
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Details = 'details',
  /** column name */
  FlagStatusId = 'flag_status_id',
  /** column name */
  Id = 'id',
  /** column name */
  ReportedUserId = 'reported_user_id',
  /** column name */
  UserId = 'user_id',
}

/** order by stddev() on columns of table "user_flags" */
export interface User_Flags_Stddev_Order_By {
  action_id?: InputMaybe<Order_By>;
  flag_status_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reported_user_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by stddev_pop() on columns of table "user_flags" */
export interface User_Flags_Stddev_Pop_Order_By {
  action_id?: InputMaybe<Order_By>;
  flag_status_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reported_user_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by stddev_samp() on columns of table "user_flags" */
export interface User_Flags_Stddev_Samp_Order_By {
  action_id?: InputMaybe<Order_By>;
  flag_status_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reported_user_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "user_flags" */
export interface User_Flags_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: User_Flags_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface User_Flags_Stream_Cursor_Value_Input {
  action_id?: InputMaybe<Scalars['Int']['input']>;
  action_type?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  flag_status_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  reported_user_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
}

/** order by sum() on columns of table "user_flags" */
export interface User_Flags_Sum_Order_By {
  action_id?: InputMaybe<Order_By>;
  flag_status_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reported_user_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** placeholder for update columns of table "user_flags" (current role has no relevant permissions) */
export enum User_Flags_Update_Column {
  /** placeholder (do not use) */
  Placeholder = '_PLACEHOLDER',
}

/** order by var_pop() on columns of table "user_flags" */
export interface User_Flags_Var_Pop_Order_By {
  action_id?: InputMaybe<Order_By>;
  flag_status_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reported_user_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by var_samp() on columns of table "user_flags" */
export interface User_Flags_Var_Samp_Order_By {
  action_id?: InputMaybe<Order_By>;
  flag_status_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reported_user_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** order by variance() on columns of table "user_flags" */
export interface User_Flags_Variance_Order_By {
  action_id?: InputMaybe<Order_By>;
  flag_status_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reported_user_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** columns and relationships of "user_referrals" */
export interface User_Referrals {
  __typename?: 'user_referrals';
  created_at: Scalars['timestamp']['output'];
  id: Scalars['bigint']['output'];
  /** An object relationship */
  referrer?: Maybe<Users>;
  referrer_id?: Maybe<Scalars['Int']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamp']['output'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['Int']['output']>;
}

/** Boolean expression to filter rows from the table "user_referrals". All fields are combined with a logical 'AND'. */
export interface User_Referrals_Bool_Exp {
  _and?: InputMaybe<Array<User_Referrals_Bool_Exp>>;
  _not?: InputMaybe<User_Referrals_Bool_Exp>;
  _or?: InputMaybe<Array<User_Referrals_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  referrer?: InputMaybe<Users_Bool_Exp>;
  referrer_id?: InputMaybe<Int_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
}

/** Ordering options when selecting data from "user_referrals". */
export interface User_Referrals_Order_By {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  referrer?: InputMaybe<Users_Order_By>;
  referrer_id?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
}

/** select columns of table "user_referrals" */
export enum User_Referrals_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ReferrerId = 'referrer_id',
  /** column name */
  State = 'state',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** Streaming cursor of the table "user_referrals" */
export interface User_Referrals_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: User_Referrals_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface User_Referrals_Stream_Cursor_Value_Input {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  referrer_id?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
}

/** columns and relationships of "user_statuses" */
export interface User_Statuses {
  __typename?: 'user_statuses';
  id: Scalars['Int']['output'];
  status: Scalars['String']['output'];
  /** An array relationship */
  users: Array<Users>;
}

/** columns and relationships of "user_statuses" */
export interface User_StatusesUsersArgs {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
}

/** Boolean expression to filter rows from the table "user_statuses". All fields are combined with a logical 'AND'. */
export interface User_Statuses_Bool_Exp {
  _and?: InputMaybe<Array<User_Statuses_Bool_Exp>>;
  _not?: InputMaybe<User_Statuses_Bool_Exp>;
  _or?: InputMaybe<Array<User_Statuses_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
}

/** Ordering options when selecting data from "user_statuses". */
export interface User_Statuses_Order_By {
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
}

/** select columns of table "user_statuses" */
export enum User_Statuses_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
}

/** Streaming cursor of the table "user_statuses" */
export interface User_Statuses_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: User_Statuses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface User_Statuses_Stream_Cursor_Value_Input {
  id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "users" */
export interface Users {
  __typename?: 'users';
  access_level?: Maybe<Scalars['Int']['output']>;
  account_privacy_setting_id: Scalars['Int']['output'];
  /** An array relationship */
  activities: Array<Activities>;
  activity_privacy_settings_id: Scalars['Int']['output'];
  admin: Scalars['Boolean']['output'];
  bio?: Maybe<Scalars['String']['output']>;
  birthdate?: Maybe<Scalars['date']['output']>;
  /** An array relationship */
  blocked_users: Array<User_Blocks>;
  books_count: Scalars['Int']['output'];
  cached_cover: Scalars['jsonb']['output'];
  cached_genres: Scalars['jsonb']['output'];
  cached_image: Scalars['jsonb']['output'];
  /** An array relationship */
  collection_imports: Array<Collection_Imports>;
  confirmation_sent_at?: Maybe<Scalars['timestamp']['output']>;
  confirmed_at?: Maybe<Scalars['timestamp']['output']>;
  created_at: Scalars['timestamptz']['output'];
  current_sign_in_at?: Maybe<Scalars['timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_verified?: Maybe<Scalars['timestamptz']['output']>;
  flair?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  followed_by_users: Array<Followed_Users>;
  /** An array relationship */
  followed_lists: Array<Followed_Lists>;
  /** An array relationship */
  followed_prompts: Array<Followed_Prompts>;
  /** An array relationship */
  followed_users: Array<Followed_Users>;
  followed_users_count: Scalars['Int']['output'];
  followers_count: Scalars['Int']['output'];
  /** An array relationship */
  goals: Array<Goals>;
  id: Scalars['Int']['output'];
  /** An object relationship */
  image?: Maybe<Images>;
  image_id?: Maybe<Scalars['Int']['output']>;
  last_activity_at?: Maybe<Scalars['timestamp']['output']>;
  last_sign_in_at?: Maybe<Scalars['timestamp']['output']>;
  librarian_roles: Scalars['jsonb']['output'];
  link?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  lists: Array<Lists>;
  /** An aggregate relationship */
  lists_aggregate: Lists_Aggregate;
  location?: Maybe<Scalars['String']['output']>;
  locked_at?: Maybe<Scalars['timestamp']['output']>;
  match_updated_at?: Maybe<Scalars['timestamp']['output']>;
  membership?: Maybe<Scalars['String']['output']>;
  membership_ends_at?: Maybe<Scalars['timestamp']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  notification_deliveries: Array<Notification_Deliveries>;
  /** An aggregate relationship */
  notification_deliveries_aggregate: Notification_Deliveries_Aggregate;
  object_type?: Maybe<Scalars['String']['output']>;
  onboarded: Scalars['Boolean']['output'];
  payment_system_id?: Maybe<Scalars['Int']['output']>;
  pro: Scalars['Boolean']['output'];
  /** An array relationship */
  prompt_answers: Array<Prompt_Answers>;
  /** An aggregate relationship */
  prompt_answers_aggregate: Prompt_Answers_Aggregate;
  /** An array relationship */
  prompts: Array<Prompts>;
  pronoun_personal: Scalars['String']['output'];
  pronoun_possessive: Scalars['String']['output'];
  /** An array relationship */
  recommendations: Array<Recommendations>;
  /** An array relationship */
  recommended: Array<Recommendations>;
  referrer_id?: Maybe<Scalars['Int']['output']>;
  referrer_url?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  referrered_users: Array<User_Books>;
  /** An aggregate relationship */
  referrered_users_aggregate: User_Books_Aggregate;
  remember_created_at?: Maybe<Scalars['timestamp']['output']>;
  /** An array relationship */
  reported_user_flags: Array<User_Flags>;
  reset_password_sent_at?: Maybe<Scalars['timestamp']['output']>;
  sign_in_count?: Maybe<Scalars['Int']['output']>;
  status_id: Scalars['Int']['output'];
  /** An array relationship */
  taggings: Array<Taggings>;
  /** An aggregate relationship */
  taggings_aggregate: Taggings_Aggregate;
  unconfirmed_email?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  user_books: Array<User_Books>;
  /** An aggregate relationship */
  user_books_aggregate: User_Books_Aggregate;
  /** An array relationship */
  user_flags: Array<User_Flags>;
  username?: Maybe<Scalars['citext']['output']>;
}

/** columns and relationships of "users" */
export interface UsersActivitiesArgs {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
}

/** columns and relationships of "users" */
export interface UsersBlocked_UsersArgs {
  distinct_on?: InputMaybe<Array<User_Blocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Blocks_Order_By>>;
  where?: InputMaybe<User_Blocks_Bool_Exp>;
}

/** columns and relationships of "users" */
export interface UsersCached_CoverArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "users" */
export interface UsersCached_GenresArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "users" */
export interface UsersCached_ImageArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "users" */
export interface UsersCollection_ImportsArgs {
  distinct_on?: InputMaybe<Array<Collection_Imports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Collection_Imports_Order_By>>;
  where?: InputMaybe<Collection_Imports_Bool_Exp>;
}

/** columns and relationships of "users" */
export interface UsersFollowed_By_UsersArgs {
  distinct_on?: InputMaybe<Array<Followed_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Followed_Users_Order_By>>;
  where?: InputMaybe<Followed_Users_Bool_Exp>;
}

/** columns and relationships of "users" */
export interface UsersFollowed_ListsArgs {
  distinct_on?: InputMaybe<Array<Followed_Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Followed_Lists_Order_By>>;
  where?: InputMaybe<Followed_Lists_Bool_Exp>;
}

/** columns and relationships of "users" */
export interface UsersFollowed_PromptsArgs {
  distinct_on?: InputMaybe<Array<Followed_Prompts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Followed_Prompts_Order_By>>;
  where?: InputMaybe<Followed_Prompts_Bool_Exp>;
}

/** columns and relationships of "users" */
export interface UsersFollowed_UsersArgs {
  distinct_on?: InputMaybe<Array<Followed_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Followed_Users_Order_By>>;
  where?: InputMaybe<Followed_Users_Bool_Exp>;
}

/** columns and relationships of "users" */
export interface UsersGoalsArgs {
  distinct_on?: InputMaybe<Array<Goals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Goals_Order_By>>;
  where?: InputMaybe<Goals_Bool_Exp>;
}

/** columns and relationships of "users" */
export interface UsersLibrarian_RolesArgs {
  path?: InputMaybe<Scalars['String']['input']>;
}

/** columns and relationships of "users" */
export interface UsersListsArgs {
  distinct_on?: InputMaybe<Array<Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lists_Order_By>>;
  where?: InputMaybe<Lists_Bool_Exp>;
}

/** columns and relationships of "users" */
export interface UsersLists_AggregateArgs {
  distinct_on?: InputMaybe<Array<Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lists_Order_By>>;
  where?: InputMaybe<Lists_Bool_Exp>;
}

/** columns and relationships of "users" */
export interface UsersNotification_DeliveriesArgs {
  distinct_on?: InputMaybe<Array<Notification_Deliveries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notification_Deliveries_Order_By>>;
  where?: InputMaybe<Notification_Deliveries_Bool_Exp>;
}

/** columns and relationships of "users" */
export interface UsersNotification_Deliveries_AggregateArgs {
  distinct_on?: InputMaybe<Array<Notification_Deliveries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notification_Deliveries_Order_By>>;
  where?: InputMaybe<Notification_Deliveries_Bool_Exp>;
}

/** columns and relationships of "users" */
export interface UsersPrompt_AnswersArgs {
  distinct_on?: InputMaybe<Array<Prompt_Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prompt_Answers_Order_By>>;
  where?: InputMaybe<Prompt_Answers_Bool_Exp>;
}

/** columns and relationships of "users" */
export interface UsersPrompt_Answers_AggregateArgs {
  distinct_on?: InputMaybe<Array<Prompt_Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prompt_Answers_Order_By>>;
  where?: InputMaybe<Prompt_Answers_Bool_Exp>;
}

/** columns and relationships of "users" */
export interface UsersPromptsArgs {
  distinct_on?: InputMaybe<Array<Prompts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prompts_Order_By>>;
  where?: InputMaybe<Prompts_Bool_Exp>;
}

/** columns and relationships of "users" */
export interface UsersRecommendationsArgs {
  distinct_on?: InputMaybe<Array<Recommendations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recommendations_Order_By>>;
  where?: InputMaybe<Recommendations_Bool_Exp>;
}

/** columns and relationships of "users" */
export interface UsersRecommendedArgs {
  distinct_on?: InputMaybe<Array<Recommendations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Recommendations_Order_By>>;
  where?: InputMaybe<Recommendations_Bool_Exp>;
}

/** columns and relationships of "users" */
export interface UsersReferrered_UsersArgs {
  distinct_on?: InputMaybe<Array<User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Books_Order_By>>;
  where?: InputMaybe<User_Books_Bool_Exp>;
}

/** columns and relationships of "users" */
export interface UsersReferrered_Users_AggregateArgs {
  distinct_on?: InputMaybe<Array<User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Books_Order_By>>;
  where?: InputMaybe<User_Books_Bool_Exp>;
}

/** columns and relationships of "users" */
export interface UsersReported_User_FlagsArgs {
  distinct_on?: InputMaybe<Array<User_Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Flags_Order_By>>;
  where?: InputMaybe<User_Flags_Bool_Exp>;
}

/** columns and relationships of "users" */
export interface UsersTaggingsArgs {
  distinct_on?: InputMaybe<Array<Taggings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Taggings_Order_By>>;
  where?: InputMaybe<Taggings_Bool_Exp>;
}

/** columns and relationships of "users" */
export interface UsersTaggings_AggregateArgs {
  distinct_on?: InputMaybe<Array<Taggings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Taggings_Order_By>>;
  where?: InputMaybe<Taggings_Bool_Exp>;
}

/** columns and relationships of "users" */
export interface UsersUser_BooksArgs {
  distinct_on?: InputMaybe<Array<User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Books_Order_By>>;
  where?: InputMaybe<User_Books_Bool_Exp>;
}

/** columns and relationships of "users" */
export interface UsersUser_Books_AggregateArgs {
  distinct_on?: InputMaybe<Array<User_Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Books_Order_By>>;
  where?: InputMaybe<User_Books_Bool_Exp>;
}

/** columns and relationships of "users" */
export interface UsersUser_FlagsArgs {
  distinct_on?: InputMaybe<Array<User_Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Flags_Order_By>>;
  where?: InputMaybe<User_Flags_Bool_Exp>;
}

/** columns and relationships of "users_aggregate_by_created_at_date" */
export interface Users_Aggregate_By_Created_At_Date {
  __typename?: 'users_aggregate_by_created_at_date';
  count?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['date']['output']>;
}

/** Boolean expression to filter rows from the table "users_aggregate_by_created_at_date". All fields are combined with a logical 'AND'. */
export interface Users_Aggregate_By_Created_At_Date_Bool_Exp {
  _and?: InputMaybe<Array<Users_Aggregate_By_Created_At_Date_Bool_Exp>>;
  _not?: InputMaybe<Users_Aggregate_By_Created_At_Date_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Aggregate_By_Created_At_Date_Bool_Exp>>;
  count?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
}

/** Ordering options when selecting data from "users_aggregate_by_created_at_date". */
export interface Users_Aggregate_By_Created_At_Date_Order_By {
  count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
}

/** select columns of table "users_aggregate_by_created_at_date" */
export enum Users_Aggregate_By_Created_At_Date_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  CreatedAt = 'created_at',
}

/** Streaming cursor of the table "users_aggregate_by_created_at_date" */
export interface Users_Aggregate_By_Created_At_Date_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Users_Aggregate_By_Created_At_Date_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Users_Aggregate_By_Created_At_Date_Stream_Cursor_Value_Input {
  count?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['date']['input']>;
}

/** order by aggregate values of table "users" */
export interface Users_Aggregate_Order_By {
  avg?: InputMaybe<Users_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
  stddev?: InputMaybe<Users_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Users_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Users_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Users_Sum_Order_By>;
  var_pop?: InputMaybe<Users_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Users_Var_Samp_Order_By>;
  variance?: InputMaybe<Users_Variance_Order_By>;
}

/** order by avg() on columns of table "users" */
export interface Users_Avg_Order_By {
  access_level?: InputMaybe<Order_By>;
  account_privacy_setting_id?: InputMaybe<Order_By>;
  activity_privacy_settings_id?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  followed_users_count?: InputMaybe<Order_By>;
  followers_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  payment_system_id?: InputMaybe<Order_By>;
  referrer_id?: InputMaybe<Order_By>;
  sign_in_count?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export interface Users_Bool_Exp {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  access_level?: InputMaybe<Int_Comparison_Exp>;
  account_privacy_setting_id?: InputMaybe<Int_Comparison_Exp>;
  activities?: InputMaybe<Activities_Bool_Exp>;
  activity_privacy_settings_id?: InputMaybe<Int_Comparison_Exp>;
  admin?: InputMaybe<Boolean_Comparison_Exp>;
  bio?: InputMaybe<String_Comparison_Exp>;
  birthdate?: InputMaybe<Date_Comparison_Exp>;
  blocked_users?: InputMaybe<User_Blocks_Bool_Exp>;
  books_count?: InputMaybe<Int_Comparison_Exp>;
  cached_cover?: InputMaybe<Jsonb_Comparison_Exp>;
  cached_genres?: InputMaybe<Jsonb_Comparison_Exp>;
  cached_image?: InputMaybe<Jsonb_Comparison_Exp>;
  collection_imports?: InputMaybe<Collection_Imports_Bool_Exp>;
  confirmation_sent_at?: InputMaybe<Timestamp_Comparison_Exp>;
  confirmed_at?: InputMaybe<Timestamp_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  current_sign_in_at?: InputMaybe<Timestamp_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  email_verified?: InputMaybe<Timestamptz_Comparison_Exp>;
  flair?: InputMaybe<String_Comparison_Exp>;
  followed_by_users?: InputMaybe<Followed_Users_Bool_Exp>;
  followed_lists?: InputMaybe<Followed_Lists_Bool_Exp>;
  followed_prompts?: InputMaybe<Followed_Prompts_Bool_Exp>;
  followed_users?: InputMaybe<Followed_Users_Bool_Exp>;
  followed_users_count?: InputMaybe<Int_Comparison_Exp>;
  followers_count?: InputMaybe<Int_Comparison_Exp>;
  goals?: InputMaybe<Goals_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<Images_Bool_Exp>;
  image_id?: InputMaybe<Int_Comparison_Exp>;
  last_activity_at?: InputMaybe<Timestamp_Comparison_Exp>;
  last_sign_in_at?: InputMaybe<Timestamp_Comparison_Exp>;
  librarian_roles?: InputMaybe<Jsonb_Comparison_Exp>;
  link?: InputMaybe<String_Comparison_Exp>;
  lists?: InputMaybe<Lists_Bool_Exp>;
  lists_aggregate?: InputMaybe<Lists_Aggregate_Bool_Exp>;
  location?: InputMaybe<String_Comparison_Exp>;
  locked_at?: InputMaybe<Timestamp_Comparison_Exp>;
  match_updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  membership?: InputMaybe<String_Comparison_Exp>;
  membership_ends_at?: InputMaybe<Timestamp_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  notification_deliveries?: InputMaybe<Notification_Deliveries_Bool_Exp>;
  notification_deliveries_aggregate?: InputMaybe<Notification_Deliveries_Aggregate_Bool_Exp>;
  object_type?: InputMaybe<String_Comparison_Exp>;
  onboarded?: InputMaybe<Boolean_Comparison_Exp>;
  payment_system_id?: InputMaybe<Int_Comparison_Exp>;
  pro?: InputMaybe<Boolean_Comparison_Exp>;
  prompt_answers?: InputMaybe<Prompt_Answers_Bool_Exp>;
  prompt_answers_aggregate?: InputMaybe<Prompt_Answers_Aggregate_Bool_Exp>;
  prompts?: InputMaybe<Prompts_Bool_Exp>;
  pronoun_personal?: InputMaybe<String_Comparison_Exp>;
  pronoun_possessive?: InputMaybe<String_Comparison_Exp>;
  recommendations?: InputMaybe<Recommendations_Bool_Exp>;
  recommended?: InputMaybe<Recommendations_Bool_Exp>;
  referrer_id?: InputMaybe<Int_Comparison_Exp>;
  referrer_url?: InputMaybe<String_Comparison_Exp>;
  referrered_users?: InputMaybe<User_Books_Bool_Exp>;
  referrered_users_aggregate?: InputMaybe<User_Books_Aggregate_Bool_Exp>;
  remember_created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  reported_user_flags?: InputMaybe<User_Flags_Bool_Exp>;
  reset_password_sent_at?: InputMaybe<Timestamp_Comparison_Exp>;
  sign_in_count?: InputMaybe<Int_Comparison_Exp>;
  status_id?: InputMaybe<Int_Comparison_Exp>;
  taggings?: InputMaybe<Taggings_Bool_Exp>;
  taggings_aggregate?: InputMaybe<Taggings_Aggregate_Bool_Exp>;
  unconfirmed_email?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_books?: InputMaybe<User_Books_Bool_Exp>;
  user_books_aggregate?: InputMaybe<User_Books_Aggregate_Bool_Exp>;
  user_flags?: InputMaybe<User_Flags_Bool_Exp>;
  username?: InputMaybe<Citext_Comparison_Exp>;
}

/** order by max() on columns of table "users" */
export interface Users_Max_Order_By {
  access_level?: InputMaybe<Order_By>;
  account_privacy_setting_id?: InputMaybe<Order_By>;
  activity_privacy_settings_id?: InputMaybe<Order_By>;
  bio?: InputMaybe<Order_By>;
  birthdate?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  confirmation_sent_at?: InputMaybe<Order_By>;
  confirmed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_sign_in_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_verified?: InputMaybe<Order_By>;
  flair?: InputMaybe<Order_By>;
  followed_users_count?: InputMaybe<Order_By>;
  followers_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  last_activity_at?: InputMaybe<Order_By>;
  last_sign_in_at?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  locked_at?: InputMaybe<Order_By>;
  match_updated_at?: InputMaybe<Order_By>;
  membership?: InputMaybe<Order_By>;
  membership_ends_at?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  object_type?: InputMaybe<Order_By>;
  payment_system_id?: InputMaybe<Order_By>;
  pronoun_personal?: InputMaybe<Order_By>;
  pronoun_possessive?: InputMaybe<Order_By>;
  referrer_id?: InputMaybe<Order_By>;
  referrer_url?: InputMaybe<Order_By>;
  remember_created_at?: InputMaybe<Order_By>;
  reset_password_sent_at?: InputMaybe<Order_By>;
  sign_in_count?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  unconfirmed_email?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
}

/** order by min() on columns of table "users" */
export interface Users_Min_Order_By {
  access_level?: InputMaybe<Order_By>;
  account_privacy_setting_id?: InputMaybe<Order_By>;
  activity_privacy_settings_id?: InputMaybe<Order_By>;
  bio?: InputMaybe<Order_By>;
  birthdate?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  confirmation_sent_at?: InputMaybe<Order_By>;
  confirmed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_sign_in_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_verified?: InputMaybe<Order_By>;
  flair?: InputMaybe<Order_By>;
  followed_users_count?: InputMaybe<Order_By>;
  followers_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  last_activity_at?: InputMaybe<Order_By>;
  last_sign_in_at?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  locked_at?: InputMaybe<Order_By>;
  match_updated_at?: InputMaybe<Order_By>;
  membership?: InputMaybe<Order_By>;
  membership_ends_at?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  object_type?: InputMaybe<Order_By>;
  payment_system_id?: InputMaybe<Order_By>;
  pronoun_personal?: InputMaybe<Order_By>;
  pronoun_possessive?: InputMaybe<Order_By>;
  referrer_id?: InputMaybe<Order_By>;
  referrer_url?: InputMaybe<Order_By>;
  remember_created_at?: InputMaybe<Order_By>;
  reset_password_sent_at?: InputMaybe<Order_By>;
  sign_in_count?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  unconfirmed_email?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
}

/** Ordering options when selecting data from "users". */
export interface Users_Order_By {
  access_level?: InputMaybe<Order_By>;
  account_privacy_setting_id?: InputMaybe<Order_By>;
  activities_aggregate?: InputMaybe<Activities_Aggregate_Order_By>;
  activity_privacy_settings_id?: InputMaybe<Order_By>;
  admin?: InputMaybe<Order_By>;
  bio?: InputMaybe<Order_By>;
  birthdate?: InputMaybe<Order_By>;
  blocked_users_aggregate?: InputMaybe<User_Blocks_Aggregate_Order_By>;
  books_count?: InputMaybe<Order_By>;
  cached_cover?: InputMaybe<Order_By>;
  cached_genres?: InputMaybe<Order_By>;
  cached_image?: InputMaybe<Order_By>;
  collection_imports_aggregate?: InputMaybe<Collection_Imports_Aggregate_Order_By>;
  confirmation_sent_at?: InputMaybe<Order_By>;
  confirmed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_sign_in_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_verified?: InputMaybe<Order_By>;
  flair?: InputMaybe<Order_By>;
  followed_by_users_aggregate?: InputMaybe<Followed_Users_Aggregate_Order_By>;
  followed_lists_aggregate?: InputMaybe<Followed_Lists_Aggregate_Order_By>;
  followed_prompts_aggregate?: InputMaybe<Followed_Prompts_Aggregate_Order_By>;
  followed_users_aggregate?: InputMaybe<Followed_Users_Aggregate_Order_By>;
  followed_users_count?: InputMaybe<Order_By>;
  followers_count?: InputMaybe<Order_By>;
  goals_aggregate?: InputMaybe<Goals_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Images_Order_By>;
  image_id?: InputMaybe<Order_By>;
  last_activity_at?: InputMaybe<Order_By>;
  last_sign_in_at?: InputMaybe<Order_By>;
  librarian_roles?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  lists_aggregate?: InputMaybe<Lists_Aggregate_Order_By>;
  location?: InputMaybe<Order_By>;
  locked_at?: InputMaybe<Order_By>;
  match_updated_at?: InputMaybe<Order_By>;
  membership?: InputMaybe<Order_By>;
  membership_ends_at?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  notification_deliveries_aggregate?: InputMaybe<Notification_Deliveries_Aggregate_Order_By>;
  object_type?: InputMaybe<Order_By>;
  onboarded?: InputMaybe<Order_By>;
  payment_system_id?: InputMaybe<Order_By>;
  pro?: InputMaybe<Order_By>;
  prompt_answers_aggregate?: InputMaybe<Prompt_Answers_Aggregate_Order_By>;
  prompts_aggregate?: InputMaybe<Prompts_Aggregate_Order_By>;
  pronoun_personal?: InputMaybe<Order_By>;
  pronoun_possessive?: InputMaybe<Order_By>;
  recommendations_aggregate?: InputMaybe<Recommendations_Aggregate_Order_By>;
  recommended_aggregate?: InputMaybe<Recommendations_Aggregate_Order_By>;
  referrer_id?: InputMaybe<Order_By>;
  referrer_url?: InputMaybe<Order_By>;
  referrered_users_aggregate?: InputMaybe<User_Books_Aggregate_Order_By>;
  remember_created_at?: InputMaybe<Order_By>;
  reported_user_flags_aggregate?: InputMaybe<User_Flags_Aggregate_Order_By>;
  reset_password_sent_at?: InputMaybe<Order_By>;
  sign_in_count?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  taggings_aggregate?: InputMaybe<Taggings_Aggregate_Order_By>;
  unconfirmed_email?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_books_aggregate?: InputMaybe<User_Books_Aggregate_Order_By>;
  user_flags_aggregate?: InputMaybe<User_Flags_Aggregate_Order_By>;
  username?: InputMaybe<Order_By>;
}

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AccessLevel = 'access_level',
  /** column name */
  AccountPrivacySettingId = 'account_privacy_setting_id',
  /** column name */
  ActivityPrivacySettingsId = 'activity_privacy_settings_id',
  /** column name */
  Admin = 'admin',
  /** column name */
  Bio = 'bio',
  /** column name */
  Birthdate = 'birthdate',
  /** column name */
  BooksCount = 'books_count',
  /** column name */
  CachedCover = 'cached_cover',
  /** column name */
  CachedGenres = 'cached_genres',
  /** column name */
  CachedImage = 'cached_image',
  /** column name */
  ConfirmationSentAt = 'confirmation_sent_at',
  /** column name */
  ConfirmedAt = 'confirmed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrentSignInAt = 'current_sign_in_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  Flair = 'flair',
  /** column name */
  FollowedUsersCount = 'followed_users_count',
  /** column name */
  FollowersCount = 'followers_count',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  LastActivityAt = 'last_activity_at',
  /** column name */
  LastSignInAt = 'last_sign_in_at',
  /** column name */
  LibrarianRoles = 'librarian_roles',
  /** column name */
  Link = 'link',
  /** column name */
  Location = 'location',
  /** column name */
  LockedAt = 'locked_at',
  /** column name */
  MatchUpdatedAt = 'match_updated_at',
  /** column name */
  Membership = 'membership',
  /** column name */
  MembershipEndsAt = 'membership_ends_at',
  /** column name */
  Name = 'name',
  /** column name */
  ObjectType = 'object_type',
  /** column name */
  Onboarded = 'onboarded',
  /** column name */
  PaymentSystemId = 'payment_system_id',
  /** column name */
  Pro = 'pro',
  /** column name */
  PronounPersonal = 'pronoun_personal',
  /** column name */
  PronounPossessive = 'pronoun_possessive',
  /** column name */
  ReferrerId = 'referrer_id',
  /** column name */
  ReferrerUrl = 'referrer_url',
  /** column name */
  RememberCreatedAt = 'remember_created_at',
  /** column name */
  ResetPasswordSentAt = 'reset_password_sent_at',
  /** column name */
  SignInCount = 'sign_in_count',
  /** column name */
  StatusId = 'status_id',
  /** column name */
  UnconfirmedEmail = 'unconfirmed_email',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username',
}

/** order by stddev() on columns of table "users" */
export interface Users_Stddev_Order_By {
  access_level?: InputMaybe<Order_By>;
  account_privacy_setting_id?: InputMaybe<Order_By>;
  activity_privacy_settings_id?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  followed_users_count?: InputMaybe<Order_By>;
  followers_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  payment_system_id?: InputMaybe<Order_By>;
  referrer_id?: InputMaybe<Order_By>;
  sign_in_count?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
}

/** order by stddev_pop() on columns of table "users" */
export interface Users_Stddev_Pop_Order_By {
  access_level?: InputMaybe<Order_By>;
  account_privacy_setting_id?: InputMaybe<Order_By>;
  activity_privacy_settings_id?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  followed_users_count?: InputMaybe<Order_By>;
  followers_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  payment_system_id?: InputMaybe<Order_By>;
  referrer_id?: InputMaybe<Order_By>;
  sign_in_count?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
}

/** order by stddev_samp() on columns of table "users" */
export interface Users_Stddev_Samp_Order_By {
  access_level?: InputMaybe<Order_By>;
  account_privacy_setting_id?: InputMaybe<Order_By>;
  activity_privacy_settings_id?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  followed_users_count?: InputMaybe<Order_By>;
  followers_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  payment_system_id?: InputMaybe<Order_By>;
  referrer_id?: InputMaybe<Order_By>;
  sign_in_count?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
}

/** Streaming cursor of the table "users" */
export interface Users_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Users_Stream_Cursor_Value_Input {
  access_level?: InputMaybe<Scalars['Int']['input']>;
  account_privacy_setting_id?: InputMaybe<Scalars['Int']['input']>;
  activity_privacy_settings_id?: InputMaybe<Scalars['Int']['input']>;
  admin?: InputMaybe<Scalars['Boolean']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  birthdate?: InputMaybe<Scalars['date']['input']>;
  books_count?: InputMaybe<Scalars['Int']['input']>;
  cached_cover?: InputMaybe<Scalars['jsonb']['input']>;
  cached_genres?: InputMaybe<Scalars['jsonb']['input']>;
  cached_image?: InputMaybe<Scalars['jsonb']['input']>;
  confirmation_sent_at?: InputMaybe<Scalars['timestamp']['input']>;
  confirmed_at?: InputMaybe<Scalars['timestamp']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  current_sign_in_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verified?: InputMaybe<Scalars['timestamptz']['input']>;
  flair?: InputMaybe<Scalars['String']['input']>;
  followed_users_count?: InputMaybe<Scalars['Int']['input']>;
  followers_count?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image_id?: InputMaybe<Scalars['Int']['input']>;
  last_activity_at?: InputMaybe<Scalars['timestamp']['input']>;
  last_sign_in_at?: InputMaybe<Scalars['timestamp']['input']>;
  librarian_roles?: InputMaybe<Scalars['jsonb']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  locked_at?: InputMaybe<Scalars['timestamp']['input']>;
  match_updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  membership?: InputMaybe<Scalars['String']['input']>;
  membership_ends_at?: InputMaybe<Scalars['timestamp']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  object_type?: InputMaybe<Scalars['String']['input']>;
  onboarded?: InputMaybe<Scalars['Boolean']['input']>;
  payment_system_id?: InputMaybe<Scalars['Int']['input']>;
  pro?: InputMaybe<Scalars['Boolean']['input']>;
  pronoun_personal?: InputMaybe<Scalars['String']['input']>;
  pronoun_possessive?: InputMaybe<Scalars['String']['input']>;
  referrer_id?: InputMaybe<Scalars['Int']['input']>;
  referrer_url?: InputMaybe<Scalars['String']['input']>;
  remember_created_at?: InputMaybe<Scalars['timestamp']['input']>;
  reset_password_sent_at?: InputMaybe<Scalars['timestamp']['input']>;
  sign_in_count?: InputMaybe<Scalars['Int']['input']>;
  status_id?: InputMaybe<Scalars['Int']['input']>;
  unconfirmed_email?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  username?: InputMaybe<Scalars['citext']['input']>;
}

/** order by sum() on columns of table "users" */
export interface Users_Sum_Order_By {
  access_level?: InputMaybe<Order_By>;
  account_privacy_setting_id?: InputMaybe<Order_By>;
  activity_privacy_settings_id?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  followed_users_count?: InputMaybe<Order_By>;
  followers_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  payment_system_id?: InputMaybe<Order_By>;
  referrer_id?: InputMaybe<Order_By>;
  sign_in_count?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
}

/** order by var_pop() on columns of table "users" */
export interface Users_Var_Pop_Order_By {
  access_level?: InputMaybe<Order_By>;
  account_privacy_setting_id?: InputMaybe<Order_By>;
  activity_privacy_settings_id?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  followed_users_count?: InputMaybe<Order_By>;
  followers_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  payment_system_id?: InputMaybe<Order_By>;
  referrer_id?: InputMaybe<Order_By>;
  sign_in_count?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
}

/** order by var_samp() on columns of table "users" */
export interface Users_Var_Samp_Order_By {
  access_level?: InputMaybe<Order_By>;
  account_privacy_setting_id?: InputMaybe<Order_By>;
  activity_privacy_settings_id?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  followed_users_count?: InputMaybe<Order_By>;
  followers_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  payment_system_id?: InputMaybe<Order_By>;
  referrer_id?: InputMaybe<Order_By>;
  sign_in_count?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
}

/** order by variance() on columns of table "users" */
export interface Users_Variance_Order_By {
  access_level?: InputMaybe<Order_By>;
  account_privacy_setting_id?: InputMaybe<Order_By>;
  activity_privacy_settings_id?: InputMaybe<Order_By>;
  books_count?: InputMaybe<Order_By>;
  followed_users_count?: InputMaybe<Order_By>;
  followers_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  payment_system_id?: InputMaybe<Order_By>;
  referrer_id?: InputMaybe<Order_By>;
  sign_in_count?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
}

export type GetBooksQueryVariables = Exact<{
  minDate: Scalars['date']['input'];
}>;

export interface GetBooksQuery {
  __typename?: 'query_root';
  me: Array<{
    __typename?: 'users';
    user_books: Array<{
      __typename?: 'user_books';
      last_read_date?: any | null;
      review_slate: any;
      review_has_spoilers: boolean;
      rating?: any | null;
      book: {
        __typename?: 'books';
        title?: string | null;
        subtitle?: string | null;
        slug?: string | null;
        release_date?: any | null;
        book_series: Array<{
          __typename?: 'book_series';
          position?: any | null;
          series?: { __typename?: 'series'; name: string } | null;
        }>;
        image?: { __typename?: 'images'; url?: string | null } | null;
      };
      edition?: {
        __typename?: 'editions';
        id: number;
        isbn_10?: string | null;
        isbn_13?: string | null;
        asin?: string | null;
        image?: { __typename?: 'images'; url?: string | null } | null;
        contributions: Array<{
          __typename?: 'contributions';
          contribution?: string | null;
          author?: { __typename?: 'authors'; name: string } | null;
        }>;
      } | null;
      user_book_status: { __typename?: 'user_book_statuses'; status: string };
      reading_journals: Array<{ __typename?: 'reading_journals'; started_at: any }>;
    }>;
  }>;
}

export type GetUpNextQueryVariables = Exact<{
  edition: Scalars['Int']['input'];
}>;

export interface GetUpNextQuery {
  __typename?: 'query_root';
  editions: Array<{
    __typename?: 'editions';
    id: number;
    isbn_10?: string | null;
    isbn_13?: string | null;
    asin?: string | null;
    image?: { __typename?: 'images'; url?: string | null } | null;
    contributions: Array<{
      __typename?: 'contributions';
      contribution?: string | null;
      author?: { __typename?: 'authors'; name: string } | null;
    }>;
    book: {
      __typename?: 'books';
      title?: string | null;
      subtitle?: string | null;
      slug?: string | null;
      release_date?: any | null;
      book_series: Array<{
        __typename?: 'book_series';
        position?: any | null;
        series?: { __typename?: 'series'; name: string } | null;
      }>;
      image?: { __typename?: 'images'; url?: string | null } | null;
    };
  }>;
}

export const GetBooksDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetBooks' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'minDate' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'date' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'me' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user_books' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'where' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_or' },
                            value: {
                              kind: 'ListValue',
                              values: [
                                {
                                  kind: 'ObjectValue',
                                  fields: [
                                    {
                                      kind: 'ObjectField',
                                      name: { kind: 'Name', value: 'last_read_date' },
                                      value: {
                                        kind: 'ObjectValue',
                                        fields: [
                                          {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: '_gte' },
                                            value: { kind: 'Variable', name: { kind: 'Name', value: 'minDate' } },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                                {
                                  kind: 'ObjectValue',
                                  fields: [
                                    {
                                      kind: 'ObjectField',
                                      name: { kind: 'Name', value: 'user_book_status' },
                                      value: {
                                        kind: 'ObjectValue',
                                        fields: [
                                          {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'status' },
                                            value: {
                                              kind: 'ObjectValue',
                                              fields: [
                                                {
                                                  kind: 'ObjectField',
                                                  name: { kind: 'Name', value: '_eq' },
                                                  value: {
                                                    kind: 'StringValue',
                                                    value: 'Currently Reading',
                                                    block: false,
                                                  },
                                                },
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      kind: 'ObjectField',
                                      name: { kind: 'Name', value: 'user_book_reads' },
                                      value: {
                                        kind: 'ObjectValue',
                                        fields: [
                                          {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'started_at' },
                                            value: {
                                              kind: 'ObjectValue',
                                              fields: [
                                                {
                                                  kind: 'ObjectField',
                                                  name: { kind: 'Name', value: '_gte' },
                                                  value: { kind: 'Variable', name: { kind: 'Name', value: 'minDate' } },
                                                },
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'book' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'book_series' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'limit' },
                                  value: { kind: 'IntValue', value: '1' },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'series' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                                    },
                                  },
                                  { kind: 'Field', name: { kind: 'Name', value: 'position' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'image' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
                              },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'release_date' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'edition' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'isbn_10' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'isbn_13' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'asin' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'image' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'contributions' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'where' },
                                  value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                      {
                                        kind: 'ObjectField',
                                        name: { kind: 'Name', value: '_or' },
                                        value: {
                                          kind: 'ListValue',
                                          values: [
                                            {
                                              kind: 'ObjectValue',
                                              fields: [
                                                {
                                                  kind: 'ObjectField',
                                                  name: { kind: 'Name', value: 'contribution' },
                                                  value: {
                                                    kind: 'ObjectValue',
                                                    fields: [
                                                      {
                                                        kind: 'ObjectField',
                                                        name: { kind: 'Name', value: '_is_null' },
                                                        value: { kind: 'BooleanValue', value: true },
                                                      },
                                                    ],
                                                  },
                                                },
                                              ],
                                            },
                                            {
                                              kind: 'ObjectValue',
                                              fields: [
                                                {
                                                  kind: 'ObjectField',
                                                  name: { kind: 'Name', value: 'contribution' },
                                                  value: {
                                                    kind: 'ObjectValue',
                                                    fields: [
                                                      {
                                                        kind: 'ObjectField',
                                                        name: { kind: 'Name', value: '_eq' },
                                                        value: { kind: 'StringValue', value: 'Narrator', block: false },
                                                      },
                                                    ],
                                                  },
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'contribution' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'author' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'last_read_date' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'review_slate' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'review_has_spoilers' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user_book_status' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'status' } }],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'reading_journals' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'where' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'event' },
                                  value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                      {
                                        kind: 'ObjectField',
                                        name: { kind: 'Name', value: '_eq' },
                                        value: { kind: 'StringValue', value: 'user_book_read_started', block: false },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'order_by' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'created_at' },
                                  value: { kind: 'EnumValue', value: 'asc_nulls_last' },
                                },
                              ],
                            },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'limit' },
                            value: { kind: 'IntValue', value: '1' },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              alias: { kind: 'Name', value: 'started_at' },
                              name: { kind: 'Name', value: 'metadata' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'path' },
                                  value: { kind: 'StringValue', value: 'started_at', block: false },
                                },
                              ],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetBooksQuery, GetBooksQueryVariables>;
export const GetUpNextDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetUpNext' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'edition' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'editions' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_eq' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'edition' } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isbn_10' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isbn_13' } },
                { kind: 'Field', name: { kind: 'Name', value: 'asin' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'image' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contributions' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'where' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_or' },
                            value: {
                              kind: 'ListValue',
                              values: [
                                {
                                  kind: 'ObjectValue',
                                  fields: [
                                    {
                                      kind: 'ObjectField',
                                      name: { kind: 'Name', value: 'contribution' },
                                      value: {
                                        kind: 'ObjectValue',
                                        fields: [
                                          {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: '_is_null' },
                                            value: { kind: 'BooleanValue', value: true },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                                {
                                  kind: 'ObjectValue',
                                  fields: [
                                    {
                                      kind: 'ObjectField',
                                      name: { kind: 'Name', value: 'contribution' },
                                      value: {
                                        kind: 'ObjectValue',
                                        fields: [
                                          {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: '_eq' },
                                            value: { kind: 'StringValue', value: 'Narrator', block: false },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'contribution' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'author' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'book' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'book_series' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'limit' },
                            value: { kind: 'IntValue', value: '1' },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'series' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                              },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'position' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'image' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'release_date' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUpNextQuery, GetUpNextQueryVariables>;
