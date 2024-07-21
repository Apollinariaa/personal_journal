
import './App.css';
import Button from './components/Button/Button';
import Body from './components/Body/Body';
import LeftPanel from './components/LeftPanel/LeftPanel';
import JournalItem from './components/JournalItem/JournalItem';
import JournalForm from './components/JournalForm/JournalForm';
const example = [{
	id: 1,
	active: true,
	title: 'Поход в годы',
	description: 'Горные походы открывают удивительные природные ландшафты, испытывают туристов физически и морально, дают возможность почувствовать себя первопроходцем. У горных походов свои секреты, приобщиться к которым можно только в команде единомышленников и профессионалов.',
	tags: [
		{
			icon: '#',
			name: 'Дата',
			value: 'new Date()'
		}, {
			icon: '#',
			name: 'Метки',
			value: 'Спорт'
		}
	]
}];


function App() {

	return (
		<div className='app'>
			<LeftPanel>
				<img src='/logo.png' alt='logo'/>
				<Button text={'+ Новое воспоминание'}/>
				{example.map(ex => (<JournalItem {...ex}  key={ex.id}/>))}
			</LeftPanel >
			<Body>
				<JournalForm />
			</Body>
		</div>
	);
}

export default App;
