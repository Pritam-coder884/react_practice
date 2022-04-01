import "./Person.css";
import React,{Component} from "react";
class Person extends Component{
    constructor(props){
        super(props);
        this.props=props;
    }
    render(){
        return(
            <div className="box">
                <h1>
                    <label className="b1">Name</label>:<i>{this.props.name}</i>
                    <br />
                    <label>Age</label>:<i>{this.props.age}</i>
                </h1>
            </div>
        );
    }
}
export default Person;