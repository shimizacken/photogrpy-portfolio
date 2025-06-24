export type Photo = {
  id: string;
  name: string;
  description: string;
  fullDateTaken?: string;
  yearTaken: number;
  alt: string;
  originalFileName: string;
  path: string;
  url: URL;
};
