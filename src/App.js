import React, {Component} from 'react';
import PhoneForm from "./component/PhoneForm";



class App extends Component {

    id = 0;

    state = {
        information: [],
    }
    handleCreate = (data) => {
        const { information } = this.state;
        this.setState({
            information: information.concat({
                ...data,
                id: this.id++
            })
        })
    }

    render() {
        return (
            <div>
                <PhoneForm onCreate={this.handleCreate}/>
                {JSON.stringify(this.state.information)}
            </div>
        );
    }
}

export default App;