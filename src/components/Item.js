export default function Item({ src, caption, link, gotten }) {
	let figClassGottenExtra = !gotten ? " hover:underline" : ""
	
	let figcaptionClasses = ["mt-1", "text-center"]
	if (gotten) figcaptionClasses.push("text-zinc-400", "line-through")
	else figcaptionClasses.push("text-zinc-100")

	return (
		<figure className={"w-[min-content] m-0 hover:text-zinc-200" + figClassGottenExtra}>
			<a href={link} target="_blank" rel="noreferrer">
				<img
					className="max-w-[100vw] h-[200px]"
					src={src}
					alt={caption}
				></img>
				<figcaption className={figcaptionClasses.join(' ')}>
					{caption}
				</figcaption>
			</a>
		</figure>
	);
}
