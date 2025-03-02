import { SegmentItem } from 'components/SegmentedControl';
import BusIcon from 'svg/bus-icon.svg';
import CarIcon from 'svg/car-icon.svg';
import WalkIcon from 'svg/walk-icon.svg';

export interface CommuteTimeType {
  value: number;
  home_label: string;
  result_label: string;
}

export const COMMUTE_TIME: CommuteTimeType[] = [
  { value: 10, home_label: '10분', result_label: '10분 이내' },
  { value: 20, home_label: '20분', result_label: '20분 이내' },
  { value: 30, home_label: '30분', result_label: '30분 이내' },
  { value: 40, home_label: '40분', result_label: '40분 이내' },
  { value: 50, home_label: '50분', result_label: '50분 이내' },
];

export const COMMUTE_TIME_HOME_LABELS = COMMUTE_TIME.map(item => item.home_label);
export const COMMUTE_TIME_RESULT_LABELS = COMMUTE_TIME.map(item => item.result_label);

export const COMMUTE_METHOD: SegmentItem[] = [
  { icon: BusIcon, label: '대중교통' },
  { icon: CarIcon, label: '자동차' },
  { icon: WalkIcon, label: '도보' },
];
