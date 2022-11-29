import { ActualFileObject } from 'filepond';
export interface IUser {
  id?: number;
  email: string;
  picUrl?: string;
  publicPic_id?: string;
  username?: string;
  name?: string;
  bio?: string;
  lastName?: string;
}

export interface ServerErrors {
  name: string;
  description: string;
  trace: string;
  status: number;
  code: number;
  error: boolean;
}

export interface IUserContext {
  userInfo: IUser | null;
}

export interface IEvents {
  id?: number;
  createdBy?: number;
  location: string;
  eventDate: string;
  eventName: string;
  description: string;
  picUrl?: string;
  publicPic_id?: string;
  topic?: string;
}

export interface IEventsData {
  createdBy: string;
  location: string;
  eventDate: string;
  eventName: string;
  description: string;
  eventPic: ActualFileObject;
}