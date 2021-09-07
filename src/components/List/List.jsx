const mystyle = { width: '30%' };
const List = (props) => {

	const listItems = props.todoList.map((listItem, index) => {
		return (
			<li class="list-group-item mt-4" key={index}>{listItem.item}<button type="button" className="btn btn-danger">Done</button></li>
		);
	})

	return (
		<ol className="list-group list-group-numbered mt-3" style={mystyle}>{listItems}</ol>
	);
};

export default List;