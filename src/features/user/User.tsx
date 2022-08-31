import { FC } from 'react';
import { User, Address } from './models';

type UserComponentProps = {
	name: User['name'];
	phone: User['phone'];
	city: Address['city'];
};

export const UserComponent: FC<UserComponentProps> = ({
	name,
	city,
	phone,
}) => {
	return (
		<div>
			<h1>{name}</h1>
			<a href={`tel:${phone}`}>{phone}</a>
			<span>{city}</span>
		</div>
	);
};
