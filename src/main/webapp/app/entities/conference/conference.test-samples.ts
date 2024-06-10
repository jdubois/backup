import dayjs from 'dayjs/esm';

import { IConference, NewConference } from './conference.model';

export const sampleWithRequiredData: IConference = {
  id: 28061,
  title: 'right rightfully next',
};

export const sampleWithPartialData: IConference = {
  id: 12565,
  title: 'since breakthrough',
};

export const sampleWithFullData: IConference = {
  id: 29638,
  title: 'rudely doc',
  description: 'similarity',
  date: dayjs('2024-06-09'),
};

export const sampleWithNewData: NewConference = {
  title: 'zany sedately',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
