const Button = (props) => {
	return (
			<button className='btn btn-lg btn-primary mt-3' onClick={props.onButtonClick}>Add Task</button>
	);
};

export default Button;