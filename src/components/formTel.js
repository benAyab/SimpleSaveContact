import React from 'react';
import Navbar from './navbar';
import Content from './content';
import Modal from './modal';

import '../globalStyle.css';
import '../feather.css';

class Tel extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            value: "",
            phoneNumbers: [],
            showModal: false,
            duplicated: "",
            duplicatedIndex: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.overwrite = this.overwrite.bind(this);
    }

    handleChange(val) {
        this.setState({value: val});
    }

    overwrite(val){
        if(val){
            this.setState({phoneNumbers: [...this.state.phoneNumbers, this.state.duplicated], value: '', showModal: false });
        }else{
            this.setState({value: '', showModal: false })
        }
    }
    
    handleAdd(val) {
        let position = [];
        let existingValues = this.state.phoneNumbers.filter( (elt, index) =>{
            if(val === elt){
                position.push(index+1);
                return true;
            }
            return false;
        });

        if(existingValues.length >0){
            this.setState({showModal: true, duplicated: existingValues[0], duplicatedIndex: [...position] });
        }else{
            this.setState({ phoneNumbers: [...this.state.phoneNumbers, val], value: '' }) 
        }
    }

    render(){
        if(this.state.showModal){
            return (
                <div className="container">
                    <Navbar value={this.state.value} handleAdd={this.handleAdd} handleChange={this.handleChange} indication={"ex: 657451201"} />
                    <hr/>
                    <Content data={this.state.phoneNumbers} />
                    <Modal overwrite={this.overwrite} elements={this.state.duplicatedIndex} />
                </div>
            );
        }else{
            return (
                <div className="container">
                    <Navbar value={this.state.value} handleAdd={this.handleAdd} handleChange={this.handleChange} indication={"ex: 657451201"} />
                    <hr/>
                    <Content data={this.state.phoneNumbers} />
                </div>
            );
        }
    }
}

export default Tel;
