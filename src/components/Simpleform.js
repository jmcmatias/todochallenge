/* Simpleform Component
   This Component assumes that you pass as props
   1- The innerText if you want to preset a value 
   2- Placeholder if needed
   3- The buttonName
   4- And the props.inputValue will be the callback witch 
      returns the value of the input after the submission 
      (So you need to have a function to handle this)
       - "The idea is to have one Simpleform component for all the app"

      #NOTE: // State is preset with the innerText props (if you need to just edit the input, pass the intended value)
*/
import { useState } from "react";
import { Button, FormStyle, Input } from "./Simpleform-style";

const Simpleform = (props) => {
  const [input, setInput] = useState(props.innerText); // Set the state with the innerText props (if you need to just edit the input, pass the intended value)

  const handleInputChange = (e) => {
    if (e) setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.inputValue(input);
    setInput("");
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <Input
        placeholder={props.placeholder}
        type="text"
        value={input}
        onChange={handleInputChange}
      />
      <Button type="submit">{props.buttonName}</Button>
    </FormStyle>
  );
};

export default Simpleform;
