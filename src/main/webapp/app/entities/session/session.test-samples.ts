import { ISession, NewSession } from './session.model';

export const sampleWithRequiredData: ISession = {
  id: 3689,
  title: 'minus',
};

export const sampleWithPartialData: ISession = {
  id: 30922,
  title: 'ultimate without yuck',
  room: 'instead gosh',
};

export const sampleWithFullData: ISession = {
  id: 1113,
  title: 'successfully',
  description: 'whoa but hilarious',
  room: 'ugh',
};

export const sampleWithNewData: NewSession = {
  title: 'discontinue expertise',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
