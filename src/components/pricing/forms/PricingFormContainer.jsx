import React, {Component} from 'react'
import PricingForm from './PricingForm'


export default class PricingFormContainer extends Component {
    constructor(){
        super()
        this.state = {
            fullname: '',
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
            <PricingForm 
                handleChange={this.handleChange}
                data={this.state}
            />
        )
    }
}