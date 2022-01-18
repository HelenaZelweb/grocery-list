
import { Component } from "react";
import check from './check.png';

export class GroceryList extends Component {
    state ={
userInput: "",
groceryList:[]
    }
    onChangeEvent(e){
        this.setState({userInput: e});
    }
    addItem(input){
        if (input === '') {
            alert("Plesse enter an item")
        }
        else{
        let listArray = this.state.groceryList;
        listArray.push(input);
        this.setState({groceryList:listArray,userInput:''});
        console.log(listArray);
        }
    }
    deleteItem(){
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState ({groceryList:listArray})
    }
    crosseWord(event){
        const li = event.target;
        li.classList.toggle('crossed');
    }
    render() {
return (
    <div>
    <div className="container">
        <input   type="text"
        placeholder="What do yo want to buy today?"
        onChange = {(e) => {this.onChangeEvent(e.target.value)}}
        value={this.state.userInput}/>
    </div >
    <div className="container" >
    <button className="btn add "onClick={() => this.addItem(this.state.userInput)}>ADD</button>
    </div>
    <ul>

        {this.state.groceryList.map((item,index) => (
            <li onClick={this.crosseWord} key={index}>
                
                <img  src={check} width="40px" alt="bag"/>
              
                {item}</li>
        ))}
      
    </ul>
    <div className="container">
        <button  className="btn delete " onClick={() => this.deleteItem()}>Delete</button>
    </div>
    </div>
)
    }
}