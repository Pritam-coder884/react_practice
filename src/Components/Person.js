import React,{Component} from "react";
class Person extends Component{
    render(){
        return(
            <div>
                <h3>Name: Pritam</h3>
                <h3>Age: 19</h3>
            </div>
        );
        

        

        //  with out using JSX
        // return React.createElement(
        //     "div",
        //     "h3",
        //     React.createElement("h3",null,"Name: Pritam"),
        //     React.createElement("h3",null,"Age: 19")
        // );
    }
}
export default Person; 