import './TagDetail.css';

function TagDetail({tag}) {

	console.log(tag);

	return (
		<>
			<p>{tag.icon}</p>
			<p>{tag.name}</p>
			<p>{tag.value}</p>
			<hr/>
		</>
	);
}

export default TagDetail;
