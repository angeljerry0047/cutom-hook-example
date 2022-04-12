import "./styles.css";
import InputItem from "../src/components/InputItem";
import { useInputs } from "../src/hooks/useInputs";

const inputsScheme = {
  name: {
    name: "name",
    validate: {
      isRequired: true
    }
  },
  email: {
    name: "email",
    validate: {
      isRequired: true,
      email: true
    }
  }
};
export default function App() {
  const data = useInputs(inputsScheme);
  console.log(data.state);
  return (
    <div className="App">
      {Object.keys(inputsScheme).map((name) => (
        <InputItem
          key={name}
          name={name}
          value={data.state[name].value}
          onChange={(value) => {
            data.onChangeText(name, value);
          }}
        />
      ))}
    </div>
  );
}
