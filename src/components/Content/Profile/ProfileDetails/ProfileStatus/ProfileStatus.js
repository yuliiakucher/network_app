import React from "react";


class ProfileStatus extends React.Component {
    state = {
        editState: false
    }

    changeEditState = () => {
        this.setState({
            editState: !this.state.editState
        })
    }

    render() {
        return (
            <div>
                {this.state.editState
                    ? <input autoFocus={true} onBlur={this.changeEditState} />
                    : <div onDoubleClick={this.changeEditState}>{this.props.status}</div>
                }


            </div>
        )
    }
}

export default ProfileStatus
