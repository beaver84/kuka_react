import React, {Component, Fragment} from 'react';

class PhoneInfo extends Component {

    state = {
        editing: false,
        name: '',
        phone: ''
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state !== nextState) {
            return true;
        }
        return this.props.info !== nextProps.info;
    }

    handleRemove = () => {
        const {info, onRemove} = this.props;
        onRemove(info.id)
    }

    handleToggleEdit = () => {
        // true -> false
            //onUpdate
        // false -> true
            //state 에 info 값들 넣어주기
        const { info, onUpdate} = this.props;
        if (this.state.editing) {
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        } else {
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }
        this.setState({
            editing: !this.state.editing,
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { name, phone} = this.props.info;
        const {editing,} = this.state;

        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        }

        console.log(name);

        return (
            <div style={style}>
                {
                    editing ? (
                        <Fragment>
                            <input
                                name = "name"
                                onChange={this.handleChange}
                                value={this.state.name}
                            />
                            <input
                                name = "phone"
                                onChange={this.handleChange}
                                value={this.state.phone}
                            />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <div><b>{name}</b></div>
                            <div>{phone}</div>
                        </Fragment>
                    )
                }
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleToggleEdit}>
                    { editing ? '적용' : '수정' }
                </button>
            </div>
        );
    }
}

export default PhoneInfo;