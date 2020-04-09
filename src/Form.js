import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            message:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    onChangeMessage(event){
        this.setState({message: event.target.value});
    }

    handleSubmit(event) {
        alert('Отправленное имя: ' + this.state.value +' Message: '+ this.state.message);
        event.preventDefault();
    }

    render() {
        console.log(this.state.message)
        return (
            <form onSubmit={this.handleSubmit} action="send.php" method="post">
                    <input type="text" placeholder='Your name' value={this.state.value} onChange={this.handleChange}/>

                <textarea placeholder='your text' value={this.state.message}
                          onChange={this.onChangeMessage}/>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}

export default Form;