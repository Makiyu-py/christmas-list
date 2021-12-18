export default function Item({ src, caption, link }) {
	return (
		<figure className="w-[min-content] m-0 hover:text-zinc-200 hover:underline">
			<a href={link} target="_blank" rel="noreferrer">
				<img
					className="max-w-[100vw] h-[200px]"
					src={src}
					alt={caption}
				></img>
				<figcaption className="mt-1 text-center text-zinc-100">
					{caption}
				</figcaption>
			</a>
		</figure>
	);
}
