/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

interface IArticle {
  content: string;
  created_at: string;
  id: number;
  location: string;
  media: Array<IMedia>;
  postid: number;
  published_at: string;
  rating: number;
  status: number;
  summary: string;
  title: string;
  updated_at: string;
  uploaddate: string;
  view: number;
}

interface IMedia {
  alternativeText: string;
  caption: string;
  created_at: string;
  ext: string;
  formats: any;
  hash: string;
  height: number;
  id: number;
  mime: string;
  name: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  size: number;
  updated_at: string;
  url: string;
  width: number;
}
