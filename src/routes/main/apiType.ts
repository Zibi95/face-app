export interface Output {
  id: string;
  status: Status;
  created_at: CreatedAt;
  model: Model;
  input: Input;
  data: Data2;
}

export interface Status {
  stack_trace: any[];
  code: number;
  description: string;
  details: string;
  percent_completed: number;
  time_remaining: number;
  req_id: string;
  internal_details: string;
}

export interface CreatedAt {
  seconds: string;
  nanos: number;
}

export interface CreatedAt2 {
  seconds: string;
  nanos: number;
}

export interface CreatedAt3 {
  seconds: string;
  nanos: number;
}

export interface Status2 {
  stack_trace: any[];
  code: number;
  description: string;
  details: string;
  percent_completed: number;
  time_remaining: number;
  req_id: string;
  internal_details: string;
}

export interface Visibility {
  gettable: number;
}

export interface Fields {}

export interface Metadata {
  fields: Fields;
}

export interface ModelVersion {
  id: string;
  created_at: CreatedAt3;
  status: Status2;
  active_concept_count: number;
  metrics?: any;
  total_input_count: number;
  completed_at?: any;
  description: string;
  visibility: Visibility;
  app_id: string;
  user_id: string;
  modified_at?: any;
  metadata: Metadata;
  license: string;
  dataset_version?: any;
}

export interface Visibility2 {
  gettable: number;
}

export interface ModifiedAt {
  seconds: string;
  nanos: number;
}

export interface Model {
  toolkits: any[];
  use_cases: any[];
  languages: any[];
  id: string;
  name: string;
  created_at: CreatedAt2;
  app_id: string;
  output_info?: any;
  model_version: ModelVersion;
  display_name: string;
  user_id: string;
  input_info?: any;
  train_info?: any;
  model_type_id: string;
  visibility: Visibility2;
  description: string;
  metadata?: any;
  notes: string;
  modified_at: ModifiedAt;
  is_starred: boolean;
  star_count: number;
  import_info?: any;
}

export interface Base64 {
  type: string;
  data: any[];
}

export interface Image {
  url: string;
  base64: Base64;
  allow_duplicate_url: boolean;
  hosted?: any;
  image_info?: any;
}

export interface Data {
  concepts: any[];
  colors: any[];
  clusters: any[];
  embeddings: any[];
  regions: any[];
  frames: any[];
  tracks: any[];
  time_segments: any[];
  hits: any[];
  image: Image;
  video?: any;
  metadata?: any;
  geo?: any;
  text?: any;
  audio?: any;
}

export interface Input {
  dataset_ids: any[];
  id: string;
  data: Data;
  created_at?: any;
  modified_at?: any;
  status?: any;
}

export interface BoundingBox {
  top_row: number;
  left_col: number;
  bottom_row: number;
  right_col: number;
}

export interface RegionInfo {
  bounding_box: BoundingBox;
  mask?: any;
  polygon?: any;
  point?: any;
}

export interface Concept {
  id: string;
  name: string;
  value: number;
  created_at?: any;
  language: string;
  app_id: string;
  definition: string;
  vocab_id: string;
  visibility?: any;
  user_id: string;
}

export interface Data3 {
  concepts: Concept[];
  colors: any[];
  clusters: any[];
  embeddings: any[];
  regions: any[];
  frames: any[];
  tracks: any[];
  time_segments: any[];
  hits: any[];
  image?: any;
  video?: any;
  metadata?: any;
  geo?: any;
  text?: any;
  audio?: any;
}

export interface Region {
  id: string;
  region_info: RegionInfo;
  data: Data3;
  value: number;
  track_id: string;
}

export interface Data2 {
  concepts: any[];
  colors: any[];
  clusters: any[];
  embeddings: any[];
  regions: Region[];
  frames: any[];
  tracks: any[];
  time_segments: any[];
  hits: any[];
  image?: any;
  video?: any;
  metadata?: any;
  geo?: any;
  text?: any;
  audio?: any;
}

export interface Status3 {
  stack_trace: any[];
  code: number;
  description: string;
  details: string;
  percent_completed: number;
  time_remaining: number;
  req_id: string;
  internal_details: string;
}

export interface RootObject {
  outputs: Output[];
  status: Status3;
}
