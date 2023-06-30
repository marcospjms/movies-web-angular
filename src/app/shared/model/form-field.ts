export interface ISelectionOption {
  label: string;
  value: any;
}

export enum formFieldTypeEnum {
  text = 'text',
  select = 'select',
  list = 'list',
}

export interface IFormField {
  label: string;
  property: string;
  type: formFieldTypeEnum;
  disabled?: boolean;
  options?: ISelectionOption[];
  compareFunc?: (o1: any, o2: any) => boolean;
}
