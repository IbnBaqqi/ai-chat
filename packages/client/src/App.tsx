import { useEffect, useState } from "react"


function App() {
	const [message, setMessage] = useState('');

	useEffect(() => {
		fetch('/api/hello')
			.then(response => response.json())
			.then(data => setMessage(data.message));
	}, []);

	return <p className="text-3xl font-bold p-4">{message}</p>
}

export default App
