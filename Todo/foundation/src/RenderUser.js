const user = {
	userName: "Karume",
	age: 20,
	subscription: "Gold",
	title: "COO"
};

function RenderUser() {
	return (
		<div className="user-data">
			<span>Welcome, {user.userName}</span>
			<span>{user.age}</span>
			<span>{user.subscription}</span>
			<span>{user.title}</span>
		</div>
	);
}

export default RenderUser;
