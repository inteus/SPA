import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editStatus: false,
        status: this.props.status
    }

    editModeOn = () => {
        this.setState({
            editStatus: true
        })
    }

    editModeOff = () => {
        this.setState({
            editStatus: false
        });
        this.props.updateStatusThunkCreator(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });

    }

    componentDidUpdate(prevProps) {
        if (prevProps.status !== this.props.status) {
            this.setState( {
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editStatus &&
                    <div>
                        <span onDoubleClick={this.editModeOn} >
                            {this.props.status || 'Enter your status...'}
                        </span>
                    </div>
                }
                {this.state.editStatus &&
                    <div>
                        <input autoFocus={true} onChange={this.onStatusChange} onBlur={this.editModeOff} value={this.state.status} />
                    </div>
                }
            </div>
        );
    }
}


export default ProfileStatus;