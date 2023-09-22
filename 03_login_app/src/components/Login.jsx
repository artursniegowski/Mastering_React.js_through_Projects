// Login component
import Input from "./Input";

function Login(props) {
    return (
    <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        {/* {props.userRegistered === false && <Input type="password" placeholder="Confirm Password" />} */}
        {!props.userRegistered && <Input type="password" placeholder="Confirm Password" />}
        <button type="submit" className="btn">{props.userRegistered ? "Login" : "Register"}</button>
    </form>
    );
}

export default Login;