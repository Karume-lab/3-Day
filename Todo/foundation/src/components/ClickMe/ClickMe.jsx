import './ClickMe.css';

const ClickMe = () => {
	const handleClickEvent = (e) => {
		e.target.parentElement.classList.toggle("red");
	}
	return (
		<div className="container">
			<span>Click Me to change color</span>
			<br />
			<button type="submit" onClick={handleClickEvent}>Click Here</button>
		</div>
	);
}


export default ClickMe;
