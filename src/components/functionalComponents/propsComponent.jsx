// properties are immutable


function Propcomp(props){
    return(
        <div>
            Hi {props.name} from {props.course} course
        </div>
    )
}
export default Propcomp;