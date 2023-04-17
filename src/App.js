import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBox from '@mui/icons-material/CheckBox';
import FormControlLabel from '@mui/material/FormControlLabel';


function CheckBoxExample() {
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    console.log(event.target.checked);
    setChecked(event.target.checked);
  };
  return (
    <FormControlLabel
      control= { 
      <CheckBox 
      checked = {checked}
      onChange = {handleChange}
      inputprops={{ 'aria-label': 'secondary checkbox' }} 
    />
  }
        label = "Testing Checkbox"
        
    />
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CheckBoxExample />
        <ButtonGroup variant='contained' aria-label='outlined primary button group' color='primary'>
        <Button
        startIcon = {<SaveIcon />}
        >
          Save
        </Button>

        <Button
        startIcon = {<DeleteIcon />}
        >
          Discard
        </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
