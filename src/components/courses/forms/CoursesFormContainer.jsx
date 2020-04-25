import React, {Component} from 'react'
import CoursesForm from './CoursesForm'


export default class CourseFormContainer extends Component {
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
            <CoursesForm 
                handleChange={this.handleChange}
                data={this.state}
            />
        )
    }
}