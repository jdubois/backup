import { ISpeaker, NewSpeaker } from './speaker.model';

export const sampleWithRequiredData: ISpeaker = {
  id: 1019,
};

export const sampleWithPartialData: ISpeaker = {
  id: 9847,
};

export const sampleWithFullData: ISpeaker = {
  id: 2864,
  fullName: 'spreadsheet',
  email: 'Irwin_Jacobson25@gmail.com',
  company: 'when',
};

export const sampleWithNewData: NewSpeaker = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
