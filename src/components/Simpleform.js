import { Button, FormStyle, Input } from "./Simpleform-style"

const Simpleform = (props) => {
    return (
        <FormStyle>
            <Input placeholder ={props.innerText}/>
            <Button type="submit">{props.buttonName}</Button>
        </FormStyle>
       
    )
}

export default Simpleform