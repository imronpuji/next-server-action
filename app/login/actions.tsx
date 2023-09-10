'use server';

import fetcher from '@/lib/fetcher';
import { LoginResponse, UserTypes } from '../types';

export const handleLogin = async (formData: FormData) => {
  const username = (await formData.get('username')) as string;
  const password = (await formData.get('password')) as string;

  const payload: UserTypes = {
    username,
    password,
  };

  try {
    const response = (await fetcher('/auth', 'POST', payload)) as LoginResponse;
    return response;
  } catch (error) {
    return error;
  }
};
