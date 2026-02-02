export interface CreateAuthorRequest {
  id?:        string;
  name:      string;
  bio:       string;
  createdAt?: Date;
  updatedAt?: Date;
}