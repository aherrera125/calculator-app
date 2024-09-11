import Disp from '../display/display'

function Number(props){
    function handleClick(){
     
    }

    return(
        <button onClick={handleClick}>{props.num}</button>
    );
}

export default Number;