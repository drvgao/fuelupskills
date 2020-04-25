import React, {Component} from 'react'
import StartLearningForm from './StartLearningForm'


export default class StartLearningFormContainer extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            courseName: '',
            packageName: '',
            price: '',
            description: '',
            tnc: true,
            courses: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }

    handleSubmit(){

    }

    render(){
        return(
            <StartLearningForm 
                handleChange={this.handleChange}
                data={this.state}
            />
        )
    }
}