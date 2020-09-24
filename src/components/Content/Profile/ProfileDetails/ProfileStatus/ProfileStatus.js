import React from "react";


class ProfileStatus extends React.Component {
    state = {
        editState: false,
        status:this.props.status
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    onInputChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    activateEditState = () => {
        this.setState({
            editState: true
        })
    }
    deactivateEditState = () => {
        this.setState({
            editState: false
        })
        this.props.updateStatus(this.state.status)
    }

    render() {
        console.log('render')
        return (
            <div>
                {this.state.editState
                    ? <input
                        autoFocus={true}
                        onBlur={this.deactivateEditState}
                        value={this.state.status}
                        onChange={this.onInputChange}
                    />
                    : <div onDoubleClick={this.activateEditState}>{this.props.status || '--------'}</div>
                }


            </div>
        )
    }
}

export default ProfileStatus
