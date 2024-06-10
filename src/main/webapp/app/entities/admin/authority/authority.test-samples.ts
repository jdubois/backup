import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '6dcfff6c-e192-44ad-b123-d4da4bcdaea6',
};

export const sampleWithPartialData: IAuthority = {
  name: '953ba25b-725b-48e0-ba78-5fa009fd884f',
};

export const sampleWithFullData: IAuthority = {
  name: 'ac01e95b-8fc5-4ef5-9a1f-4f0cd1dcf8c3',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
