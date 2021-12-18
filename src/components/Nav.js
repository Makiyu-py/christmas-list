export default function NavBar() {
	return (
		<div className="sticky top-0 text-slate-100 p-5 w-full bg-gray-800 border-b border-slate-700">
			Christmas List 2021
			<div className="float-right mr-2 underline">
				<a
					href="#games"
					className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-900"
				>
					Games
				</a>
				<a
					href="#books"
					className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-900"
				>
					Books
				</a>
			</div>
		</div>
	);
}
