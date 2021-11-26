type Days =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | '22'
  | '23'
  | '24'
  | '25'
  | '26'
  | '27';
type Types = 'morning' | 'evening' | 'psalms';
export type Ref = `${Days}/${Types}`;
export type Condition = { args: Ref[] } & (
  | {
      type: 'in';
    }
  | {
      type: 'perfect in range' | 'in range';
      includePsalms?: boolean;
    }
  | {
      type: 'in psalm range';
    }
);
export type Completion = {
  user: string;
  read: string;
  type: 'morning' | 'evening' | 'psalms';
  day: number;
};
