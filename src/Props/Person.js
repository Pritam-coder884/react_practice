import React,{Component} from "react";
class Person extends Component{
    constructor(props){
        super(props);
        this.props=props;
    }
    render(){
        return(
            <div>
                <h1>
                    <i>Dear {this.props.name},{this.props.age} year old, welcome to this world</i>
                </h1>
            </div>
        )
    }
}
export default Person;