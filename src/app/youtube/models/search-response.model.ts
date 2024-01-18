import { IItem } from './search-item.model';

export interface IResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: IItem[];
  TODO?: string;
}
