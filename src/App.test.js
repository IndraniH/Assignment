import React from 'C:/Users/hp/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import ReactDOM from 'C:/Users/hp/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-dom';
import App from './containers/App';
import employeeDetailsInput from './containers/EmployeeDetailsInput';
import viewEmpDetails from './components/ViewEmpDetails';
import {shallow, mount} from 'C:/Users/hp/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/enzyme';

/* it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});*/


describe ('<App />', () => {
    it('renders 1 <App /> component', () => {
      const component = shallow(<App />);
      expect(component).toHaveLength(1);
    });

    it('renders 1 <employeeDetailsInput /> component', () => {
      const component = shallow(<employeeDetailsInput 
        employeeDetailsInput="{id: 1, first_name='Harry', last_name='Smith'}"/>);
      expect(component).toHaveLength(1);
    });
    describe('it renders props correctly', ()=> {
      const component = shallow(<employeeDetailsInput 
        employeeDetailsInput="{id: 1, first_name='Harry', last_name='Smith'}"/>);
        expect(component.instance().employeeDetails).toBe('employeeDetailsInput');
    });
    describe('<employeeDetailsInput />', () => {
      it('renders 1 <employeeDetailsInput /> component', () => {
        const component = shallow(<employeeDetailsInput />);
        expect(component).toHaveLength(1);
      });
    });
    
    
    describe('<viewEmpDetails />', () => {
      it('renders 1 <viewEmpDetails /> component', () => {
        const component = shallow(<viewEmpDetails />);
        expect(component).toHaveLength(1);
      });
    });
});

