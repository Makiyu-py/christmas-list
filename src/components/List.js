import Item from './Item';

export default function List({ name, list }) {
    let listUI = list.map((i) => <div className="flex-initial"><Item {...i} /></div>)
	return (
		<div className="mt-5 scroll-mt-20">
			<div
				className="mb-5 sm:mb-0 text-2xl text-gray-500 capitalize text-center font-bold"
				id={name}
			>
				{name}
			</div>
			<div className="flex flex-wrap gap-x-20 gap-y-5 sm:mt-5 justify-center">
				{listUI}
			</div>
		</div>
	);
}
