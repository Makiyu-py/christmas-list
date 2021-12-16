import Item from './Item';

export default function List({ name, list }) {
    let listUI = list.map((i) => <div className=""><Item {...i} /></div>)
	return (
		<div className="mt-5 scroll-mt-20">
			<div
				className="mb-5 sm:mb-0 text-2xl text-gray-500 capitalize text-center font-bold"
				id={name}
			>
				{name}
			</div>
			<div className="grid sm:grid-cols-2 md:grid-cols-none md:grid-flow-col md:auto-cols-auto gap-x-[6%] gap-y-5 sm:mt-5 justify-items-center justify-center">
				{listUI}
			</div>
		</div>
	);
}
