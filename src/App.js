import { games, books } from './cl';
import NavBar from './components/Nav';
import List from './components/List';

export default function App() {
	return (
		<div>
			<NavBar />
			<main>
				<h1 className="pt-2 text-white text-3xl font-bold capitalize underline text-center">
					Stuff that I want for this year's Christmas
				</h1>
				<List name="games" list={games} />
				<List name="books" list={books} />
			</main>
		</div>
	);
}
