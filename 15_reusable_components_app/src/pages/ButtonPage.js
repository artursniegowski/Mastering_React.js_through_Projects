import Button from "../components/Button";
import { GoBell, GoDatabase, GoArrowUp } from 'react-icons/go'

function ButtonPage() {
    const handleClick = () => {};

    return(
        <div>
            <div>
                <Button success onClick={handleClick} className="mb-2">
                    <GoBell />  My buton
                </Button>
            </div>
            <div>
                <Button primary rounded>
                    <GoDatabase /> New Button
                </Button>
            </div>
            <div>
                <Button secondary outline><GoArrowUp/> Save</Button>
            </div>
            <div>
                <Button warning rounded outline>Back</Button>
            </div>
            <div>
                <Button danger>New</Button>
            </div>
        </div>
    );
};

export default ButtonPage;
