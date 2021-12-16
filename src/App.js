import { games, books } from './cl';
import NavBar from './components/Nav';
import List from './components/List';
import './App.css';

export default function App() {
	return (
		<div className="scroll-smooth">
			<NavBar />
			<main className="mt-2">
				<h1 className="text-3xl font-bold capitalize underline text-center">
					Stuff that I want for this year's Christmas
				</h1>
				<List name="games" list={games} />
				<List name="books" list={books} />
			</main>
		</div>
	);
}
