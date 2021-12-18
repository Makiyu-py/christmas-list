export default function NavBar() {
	// capitalize not working on second anchor tag so
	const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

	let redirects = ['games', 'books'].map((i) => (
		<a
			href={`#${i}`}
			className="px-3 py-2 rounded-md text-sm font-medium underline hover:bg-gray-900"
		>
			{capitalize(i)}
		</a>
	));
	return (
		<div className="sticky top-0 text-slate-100 p-5 w-full bg-gray-800 border-b border-slate-700">
			Christmas List 2021
			<div className="float-right mr-2">{redirects}</div>
		</div>
	);
}
