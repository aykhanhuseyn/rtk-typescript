import React, { useEffect } from 'react';
import map from 'lodash/map';
// import * as _ from 'lodash';
import { UserComponent } from './User';
import { getUsers } from './userSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

export const UserList = () => {
	const dispatch = useAppDispatch();
	const users = useAppSelector((st) => st.user.data);

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	return (
		<div>
			<h1>UserList</h1>
			<ul>
				{map(users, ({ name, phone, address: { city } }) => (
					<UserComponent name={name} phone={phone} city={city} />
				))}
			</ul>
		</div>
	);
};
