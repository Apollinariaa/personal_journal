import './JournalItem.css';

function JournalItem({ title, description }) {


	return (
		<div>
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
}

export default JournalItem;
