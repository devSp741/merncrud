import apiClient from '@/lib/api/client';

export const loginUser = async (email, password) => {
    console.log('loginUser', email, password);
  return apiClient('/auth/login', {
    method: 'POST',
    body: { email, password },
  });
};

export const registerUser = async (name, email, password) => {
  return apiClient('/auth/register', {
    method: 'POST',
    body: { name, email, password },
  });
};
