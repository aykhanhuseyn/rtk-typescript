import { Counter } from './features/counter/Counter';
import { UserList } from './features/user/UserList';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Counter />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<span>
					<span>Learn </span>
				</span>
				<UserList />
			</header>
		</div>
	);
}

export default App;
