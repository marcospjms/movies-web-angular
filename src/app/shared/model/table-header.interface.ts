
export interface ITableHeaderCell {
  label: string;
  property?: string;
  formatter?: (model: any) => string | null;
}
