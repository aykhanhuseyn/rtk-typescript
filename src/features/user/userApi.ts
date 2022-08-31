import { api } from '../../api';
import { User } from './models';

export const getUsersList = () => api.get('users');

export const updateUser = (body: Partial<User>) => api.patch('users', { body });

export const deleteUser = () => api.delete('users');
export const addUser = () => api.post('users');
export const filterUsers = () => api.get('users');
