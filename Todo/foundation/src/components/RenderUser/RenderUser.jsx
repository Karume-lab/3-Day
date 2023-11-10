function RenderUser(user) {
	return (
		<div className="user_data">
			<span>Welcome, {user.userName}</span>
			<span>{user.age}</span>
			<span>{user.subscription}</span>
			<span>{user.title}</span>
		</div>
	);
}

export default RenderUser;
