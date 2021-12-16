import React from "react";
import style from "./ProfileStatus.module.css"

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
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
  };
  render() {
    return (
      <div className={style.status}>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activatedEditMode.bind(this)}>
              {this.props.status}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onBlur={this.deactivatedEditMode.bind(this)}
              autoFocus={true}
              value={this.props.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
