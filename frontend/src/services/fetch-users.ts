import { env } from '../helpers/env';
import { IUser, ServerErrors, IEditUser } from '../types/app-types';

export const createNewUser = async (data: IUser) => {
  try {
    const result = await fetch(`${env.baseUrl}/api/users`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });

    const newUser = (await result.json()) as unknown as IUser | ServerErrors;

    return newUser;
  } catch (err) {
    console.error(err);
  }
};

export const getCurrentUserInfo = async (id: number) => {
  try {
    const data = await fetch(`${env.baseUrl}/api/users/get/${id}`, {
      method: 'GET',
      mode: 'cors',
    });

    const currentUserInfo = (await data.json()) as IUser;

    return currentUserInfo;
  } catch (err) {
    console.error(err);
  }
};

export const modifyUser = async (id: number, data: IEditUser) => {
  try {
    if (!id) return;

    if (data) {
      const formData = new FormData();
      for (const name in data) {
        formData.append(name, data[name as keyof IEditUser]);
      }
      const result = await fetch(`${env.baseUrl}/api/users/modify/${id}`, {
        method: 'PUT',
        mode: 'cors',
        body: formData,
      });

      const modifiedUser = (await result.json()) as IUser;

      return modifiedUser;
    }
  } catch (err) {
    console.error(err);
  }
};
