export interface Tags {
  id: string;
  title: string;
  content?: string;
  links?: string;
  createdAt?: string;
  updatedAt;
}

export type newTag = Pick<Tags, title | contet | links>;
