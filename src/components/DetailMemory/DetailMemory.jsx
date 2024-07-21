import './DetailMemory.css';
import TagDetail from '../TagDetail/TagDetail';

function DetailMemory({id, title, description, tags}) {


	return (
		<>
			<h1>{title}</h1>
			{tags.map(tag => (
				<TagDetail tag={tag} key={id}/>
			))}
			<p>{description}</p>
		</>
	);
}

export default DetailMemory;
