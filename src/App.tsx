import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/main";

function App() {

	return (
		<div className='flex flex-col justify-between h-screen bg-spotify-green'>
			<Header />
			<Main />
			<Footer />
		</div>
	)
}

export default App;