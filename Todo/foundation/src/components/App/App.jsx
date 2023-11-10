import ClickMe from "../ClickMe/ClickMe";
import RenderUser from "../RenderUser/RenderUser";
import users from "../RenderUser/userData";


const App = () => {
	return (
		<>
			<h1>Color Changer</h1>
			<ClickMe />
			{users.map(user => <RenderUser {...user} />)}
		</>
	);
}

export default App;
