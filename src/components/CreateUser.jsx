import React, { Component } from 'react';

export default class CreateExercise extends Component {
    constructor(props){
        super(props);
        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            username:'',

        }
    }

    onChangeUsername (event){
        this.setState({
            username:event.target.value
        })
    }

    onSubmit (event){
        event.preventDefault();

        const user = {
            username:this.state.username,
        }

        console.log(user);
    }

    render() {
        return(
            <div>
              <h1>New User </h1>
            <form>
                <div className="form-group">
                    <label >Username</label>
                    <input type='text' required className="form-control" onChange={this.onChangeUsername} value={this.state.username} />
                </div>
                
                <button type='submit' className='btn btn-dark ' onClick={this.onSubmit}>Submit</button>
              
            </form>
         </div>
        )
    }
}