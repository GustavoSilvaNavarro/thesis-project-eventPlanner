import { ActualFileObject } from 'filepond';
import { MultiValue } from 'react-select';

export interface IUser {
  id?: any;
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
  userInfo: IUserAPI | null;
  setUserInfo: React.Dispatch<IUser>;
}

export interface IEvents {
  id: number;
  createdBy: number;
  location: string;
  eventDate: string;
  eventName: string;
  description: string;
  picUrl: string;
  publicPic_id?: string;
  topic: string;
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

export interface IOptionsForMembers {
  value: string;
  label: string;
}

export interface IUserAPI {
  id: number;
  email: string;
  picUrl: string;
  publicPic_id?: string;
  username?: string;
  name: string;
  bio?: string;
  lastName?: string;
}

export interface IDataMembers {
  members: MultiValue<IOptionsForMembers[]>;
}

export interface ICurrentEventContext {
  eventData: IEvents | null;
  updateCurrentEvent: (event: IEvents) => void;
}

export interface IMembersAPI {
  id: number;
  activeMember: boolean;
  event_id: number;
  user_id: number;
}

export interface IDataItems {
  item_name: string;
}

export interface IListItems {
  id: number;
  event_id: number;
  item_name: string;
}

export interface ISingleEvent {
  id: number;
  location: string;
  eventDate: string;
  eventName: string;
  description: string;
  picUrl: string;
  topic: string;
  createdBy: number;
  members: Array<IMembersAPI>;
  items: Array<IListItems>;
}

export interface ICollaboratorsList {
  id: number;
  item_id: number;
  added: boolean;
  member_id: number;
  user: IUserAPI;
}
