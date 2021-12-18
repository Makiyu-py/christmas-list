import Item from './Item';

export default function List({ name, list }) {
    let listUI = list.map((i) => <div className="flex-initial"><Item {...i} /></div>)
	return (
		<div className="mt-5">
			<div
				className="mb-5 sm:mb-0 scroll-mt-20 text-2xl text-zinc-100 capitalize text-center font-bold"
				id={name}
			>
				{name}
			</div>
			<div className="flex flex-wrap max-w-[80%] gap-x-20 gap-y-5 sm:mt-5 ml-auto mr-auto justify-center">
				{listUI}
			</div>
		</div>
	);
}
