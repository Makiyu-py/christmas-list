export default function NavBar() {
	return (
		<div className="sticky top-0 text-indigo-50 p-5 w-full bg-indigo-400">
			Christmas List 2021
			<div className="float-right mr-2 underline">
				<a href="#games" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">Games</a>
				<a href="#books" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">Books</a>
			</div>
		</div>
	);
}
