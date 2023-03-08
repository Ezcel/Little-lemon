import Weekday from "./Weekday";
import Weekend from "./Weekend";




function CurrentMessage(){
    const day = new Date().getDay();

    return (
        (day >= 1 && day <= 5)
        ? <Weekday />
        : <Weekend />      
    );
};

export default CurrentMessage;