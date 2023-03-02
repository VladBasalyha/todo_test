import { Container, padding } from "@mui/system";
import "./App.css";
import { FormTodo } from "./components/FormTodo";
import { ListOfTodo } from "./components/ListOfTodo";

function App() {
	return (
		<>
			<Container style={{ padding: "30px" }}>
				<ListOfTodo></ListOfTodo>
			</Container>
		</>
	);
}

export default App;
