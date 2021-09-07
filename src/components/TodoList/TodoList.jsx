import { useState } from 'react';
import Button from '../Button/Button';
import InputText from '../Input/InputText';
import List from '../List/List';


const TodoList = () => {

	const [inputTextVal, setInputTextVal] = useState('');
	const [todoList, setTodoList] = useState([]);

	const buttonClickHandler = () => {
		if (inputTextVal.trim()) {
			const list = [...todoList];
			const listItem = {
				item : inputTextVal,
				isDone : false
			}
			list.push(listItem);
			setInputTextVal('');
			setTodoList(list);
		}
	}
	const inputTextChangeHandler = (event) => {
		const textValue = event.target.value;
		setInputTextVal(textValue);
	}

	return (
		<>
			<div className="p-5">
				<InputText
					onInputTextChange={inputTextChangeHandler}

					onKeyUpInput={(event) => {
						if (event.which === 13) {
							buttonClickHandler();
						}
					}}
					value={inputTextVal} />
				<Button
					onButtonClick={buttonClickHandler}
				/>
				<List todoList={todoList} />
			</div>
		</>
	);
};

export default TodoList;
