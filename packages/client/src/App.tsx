import { useEffect, useState } from "react"


function App() {
	const [message, setMessage] = useState('');

	useEffect(() => {
		fetch('/api/hello')
			.then(response => response.json())
			.then(data => setMessage(data.message));
	}, []);

	return (
		<div>
			<h1>Message from server:</h1>
			<p>{message}</p>
		</div>
	);
}

export default App;
