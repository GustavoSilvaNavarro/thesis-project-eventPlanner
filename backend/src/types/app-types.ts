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

export interface IMember {
  id?: number;
  activeMember?: boolean;
  user_id?: number;
  event_id?: number;
  user?: Array<IUser>;
}

interface MultiSelectValues {
  value: string;
  label: string;
}

export interface IMembersResFetch {
  members: Array<MultiSelectValues>;
}

export interface IListItems {
  id?: number;
  event_id?: number;
  item_name: string;
}

export interface IMemberItems {
  id?: number;
  added: boolean;
  item_id: number;
  member_id: number;
  user?: IUser;
}

export interface IMessagesEvent {
  id?: number;
  message: string;
  event_id: number;
  user_id: number;
  roomChatId: string;
}
