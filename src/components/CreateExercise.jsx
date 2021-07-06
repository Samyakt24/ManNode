import React, { Component } from 'react';

export default class CreateExercise extends Component {
    constructor(props){
        super(props);
        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onChangeDescription=this.onChangeDescription.bind(this);
        this.onChangeDuration=this.onChangeDuration.bind(this);
        this.onChangedate=this.onChangedate.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            username:'',
            description: " ",
            duration: 0,
            date: new Date()
        }
    }

    onChangeUsername (event){
        this.setState({
            username:event.target.value
        })
    }

    onChangeDuration (event){
        this.setState({
            duration:event.target.value
        })
    }

    onChangedate (event){
        this.setState({
            date:event.target.value
        })
        console.log(event.target.value);
        console.log(event);
    }

    onChangeDescription (event){
        this.setState({
            description:event.target.value
        })
    }

    onSubmit (event){
        event.preventDefault();

        const exercise = {
            username:this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise);
    }

    render() {
        return(
            <div>
              <h1>Please Enter for New !</h1>
            <form>
                <div className="form-group">
                    <label >Username</label>
                    <input type='text' required className="form-control" onChange={this.onChangeUsername} value={this.state.username} />
                </div>
                <div className='form-group'>
                    <label>Description</label>
                    <input type='text' required className="form-control" onChange={this.onChangeDescription}></input>
                </div>
                <div className='form-group'>

                    <label>Duration</label>
                    <input type='text' className="form-control" onChange={this.onChangeDuration}></input>
                </div>
                <div className='form-group'>
                    <label>Date</label>
                    <input type='date' className="form-control" onChange={this.onChangedate}></input>
                </div>
                <button type='submit' className='btn btn-dark ' onClick={this.onSubmit}>Submit</button>
            </form>
         </div>
        )
    }
}