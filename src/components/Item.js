export default function Item({ src, caption, link }) {
	return (
		<figure className="w-[min-content] m-0 hover:text-zinc-700 hover:underline">
			<a href={link} target="_blank">
				<img
					className="max-w-[100vw] h-[200px]"
					src={src}
					alt={caption}
				></img>
				<figcaption className="mt-1 text-center">
					{caption}
				</figcaption>
			</a>
		</figure>
	);
}
