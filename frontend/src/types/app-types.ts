import { ActualFileObject } from 'filepond';
import React from 'react';
export interface IUser {
  id?: number;
  email: string | undefined;
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
  setUserInfo: React.Dispatch<IUser>;
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

export interface IFileImage {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

export interface IEditUser extends IUser {
  userPic: ActualFileObject | string;
}
