import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 1672,
  login: 'bC',
};

export const sampleWithPartialData: IUser = {
  id: 31377,
  login: 'W-~?b@Z\\nZmYi',
};

export const sampleWithFullData: IUser = {
  id: 32437,
  login: '|Pf!$@X-EaB5\\=Dzx\\-r9\\/KU',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
