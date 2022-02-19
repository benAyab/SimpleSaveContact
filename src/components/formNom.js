import React from 'react';
import Navbar from './navbar';
import Content from './content';
import Modal from './modal';

import '../globalStyle.css';
import '../feather.css';

class Nom extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            value: "",
            names: [],
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
            this.setState({names: [...this.state.names, this.state.duplicated], value: '', showModal: false });
        }else{
            this.setState({value: '', showModal: false })
        }
    }
    
    handleAdd(val) {
        let position = [];
        let existingValues = this.state.names.filter( (elt, index) =>{
            if(val === elt){
                position.push(index+1);
                return true;
            }
            return false;
        });

        if(existingValues.length >0){
            this.setState({showModal: true, duplicated: existingValues[0], duplicatedIndex: [...position] });
        }else{
            this.setState({ names: [...this.state.names, val], value: '' }) 
        }
    }

    render(){
        if(this.state.showModal){
            return (
                <div className="container">
                    <Navbar value={this.state.value} handleAdd={this.handleAdd} handleChange={this.handleChange} indication={"ex: Ben Ayab"} />
                    <hr/>
                    <Content data={this.state.names} />
                    <Modal overwrite={this.overwrite} elements={this.state.duplicatedIndex} />
                </div>
            );
        }else{
            return (
                <div className="container">
                    <Navbar value={this.state.value} handleAdd={this.handleAdd} handleChange={this.handleChange} indication={"ex: Ben Ayab"} />
                    <hr/>
                    <Content data={this.state.names} />
                </div>
            );
        }
    }
}

export default Nom;