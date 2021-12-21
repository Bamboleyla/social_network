import React from "react";
import style from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  activatedEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivatedEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.props.userID, this.state.status);
  };
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };
  render() {
    return (
      <div className={style.status}>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activatedEditMode}>
              {this.props.status}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              onBlur={this.deactivatedEditMode}
              autoFocus={true}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
