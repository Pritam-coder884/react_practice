import React,{Component} from "react";
class Person extends Component{
    constructor(props){
        super(props);
        this.props=props;
        this.state={
            name:"swatik",
            age:23
        };
    }
    nameChangeHandler(){
        console.log(this.state);
        this.setState({name:"somu", age:"19"},()=>{
            console.log(this.state);
        });
    }
    render(){
        return(
            <div>
                <h1>
                    <i>Dear {this.state.name},{this.state.age} year old, welcome to this world</i>
                    <br/>
                    <button onClick={()=>this.nameChangeHandler()}>click me</button>
                </h1>
            </div>
        )
    }
}
export default Person;