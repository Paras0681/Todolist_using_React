const mystyle = {width: '30%'};
const InputText = (props) => {
	return (
		<input
			style={mystyle}
			placeholder="Enter your task..."
			className="form-control "
			type="text" 
			value= {props.value}
			onKeyUp={props.onKeyUpInput}
			onChange={props.onInputTextChange} 
			/>
	);
};

export default InputText;
