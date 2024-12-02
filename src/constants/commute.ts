export interface CommuteTimeType {
  value: number;
  label: string;
}

export const COMMUTE_TIME: CommuteTimeType[] = [
  { value: 10, label: '10분' },
  { value: 20, label: '20분' },
  { value: 30, label: '30분' },
  { value: 40, label: '40분' },
  { value: 50, label: '50분' },
];

export const COMMUTE_METHOD = [
  { value: '대중교통' },
  { value: '자동차' },
  { value: '도보' },
];
