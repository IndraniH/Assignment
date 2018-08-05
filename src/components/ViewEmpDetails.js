import React,{ Component } from 'react';


export default class ViewEmpDetails extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        if (Object.keys(this.props.employeeDetails).length > 0) {
                return (
                    <div className="viewDetails">
                        <div className="empPic">
                        <img src={this.props.employeeDetails.data.avatar} alt="EmpImg" />
                        </div>
                        <div className="basic-details">
                            <span>ID: {this.props.employeeDetails.data.id}</span>
                            <span>Name: {this.props.employeeDetails.data.first_name}  {this.props.employeeDetails.data.last_name}</span>
                        </div>
                    </div>
                );

            } else if (!this.props.isResetData) {
                return <img 
                src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="Loader"/>;
            }
             else {
                 return null;
             }
        }
};



