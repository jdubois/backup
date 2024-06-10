import { IAttendee, NewAttendee } from './attendee.model';

export const sampleWithRequiredData: IAttendee = {
  id: 8472,
};

export const sampleWithPartialData: IAttendee = {
  id: 13310,
};

export const sampleWithFullData: IAttendee = {
  id: 16588,
  firstName: 'Helen',
  lastName: 'Turner',
  email: 'Sidney.Watsica68@yahoo.com',
  telephone: '(829) 810-6482 x76427',
};

export const sampleWithNewData: NewAttendee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
