import React, { Component } from 'react';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { connect } from 'react-redux';
import ViewEmpDetails from '../components/ViewEmpDetails';

class EmployeeDetailsInput extends Component {
    constructor(props) {
        super(props);
        this.getDetailsHandler = this.getDetailsHandler.bind(this);
        this.clearBtnHandler = this.clearBtnHandler.bind(this);
        this.state = { 
            departmentOptions: [
                {
                    key: 'HR',
                    text: 'HR'
                },
                {
                    key: 'ENGINEERING',
                    text: 'ENGINEERING'
                }
            ],
            empIdsOptions: [{
                key: '1',
                text: '1'
            },
            {
                key: '2',
                text: '2'
            },
            {
                key: '3',
                text: '3'
            },
            {
                key: '4',
                text: '4'
            },
            {
                key: '5',
                text: '5'
            },
            {
                key: '6',
                text: '6'
            },
            {
                key: '7',
                text: '7'
            },
            {
                key: '8',
                text: '8'
            },
            {
                key: '9',
                text: '9'
            },
            {
                key: '10',
                text: '10'
            },
        ],
        selectedDepartment: undefined,
        selectedEmpId: undefined,
        errMsgDepartment: '',
        errMsgEmployeeId: '',
        isGetDetailsBtnClicked: undefined

        }
    }
    getDetailsHandler = () => {
        var empId = this.state.selectedEmpId;
        var department = this.state.selectedDepartment;
        if (empId && department) {
            this.setState({
                errMsgDepartment: '',
                errMsgEmployeeId: '',
                isGetDetailsBtnClicked: true
            });
            this.props.fetchEmpDetails(empId.key);
            
        } else {
            this.setState({
                errMsgDepartment: 'Please select department',
                errMsgEmployeeId: 'Please select employee id'
            });
        }
    }
    departmentDropdownHandler = (e) => {
        this.setState((prevState, props) => {
            return {selectedDepartment: e,
                    errMsgDepartment: ''
            }
        });
        var empOptions = [];
        if (e.key === 'HR') {
            for (var i= 1; i<=5; i++) {
                var ids = {};
                ids.key = i;
                ids.text = i;
                empOptions.push(ids);
            }
            this.setState({
                empIdsOptions: empOptions
            });
        } else if (e.key === 'ENGINEERING') {
            for (var i= 6; i<=10; i++) {
                var ids = {};
                ids.key = i;
                ids.text = i;
                empOptions.push(ids);
            }
            this.setState({
                empIdsOptions: empOptions
            });
        }
    }
    empIdDropdownHandler = (e) => {
        this.setState({
            selectedEmpId: e,
            errMsgEmployeeId: ''
        });
    }
    clearBtnHandler = () => {
        var empData = {};
        this.props.resetEmployeeDetails(empData);
    }
    render() { 
        return ( 
        <div className="container">
            <div>
                <Dropdown
                    className="departDropdown"
                    placeHolder="Select Department"
                    selectedKeys={this.state.selectedDepartment}
                    onChanged={this.departmentDropdownHandler}
                    label="Departments :" 
                    id="departmentDropDown"
                    options= {this.state.departmentOptions}
                    errorMessage={this.state.errMsgDepartment} />
            </div>
            <div>
                <Dropdown
                    className="empDrodown"
                    placeHolder="Select EmployeeId"
                    label="Employee Id:"
                    id="employeeIdsDropdown"
                    onChanged={this.empIdDropdownHandler}
                    selectedKeys={this.state.selectedEmpId}
                    options={this.state.empIdsOptions}
                    errorMessage={this.state.errMsgEmployeeId} />
            </div>
            
            <div>
                <DefaultButton
                        className="getDetailsBtn"
                        primary={true}
                        text="GetDetails"
                        onClick={this.getDetailsHandler}
                        allowDisabledFocus={true}
                />
            </div>
            <div> 
                <DefaultButton
                    className="clearBtn"
                    primary={true}
                    text="Clear"
                    onClick={this.clearBtnHandler}
                    allowDisabledFocus={true}
                />
            </div>
            
            <section className="App-viewEmpDetails">
            {this.state.isGetDetailsBtnClicked ?  (<ViewEmpDetails {...this.props}/>) : null}
                
            </section>
        </div> );
    }
}



const mapDispatchToProps = dispatch => {
    return {
        getDetailsHandler: (empId) => {
            dispatch(this.props.fetchEmpDetails(empId))
        },
        clearBtnHandler: (empData) => {
            dispatch(this.props.resetEmployeeDetails(empData))
        }
    }
};

const mapStateToProps = (state) => {
    return {
        empDetails: state.empDetails
    }
};


 
export default connect(mapStateToProps,mapDispatchToProps)(EmployeeDetailsInput);
