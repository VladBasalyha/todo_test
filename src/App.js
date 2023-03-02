import { Container, padding } from "@mui/system";
import "./App.css";
import { ListOfTodo } from "./components/ListOfTodo";

function App() {
	return (
		<>
			<Container style={{ padding: "20px" }}>
				<ListOfTodo></ListOfTodo>
			</Container>
		</>
	);
}

export default App;
