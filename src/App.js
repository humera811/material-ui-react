import './App.css';
import React from 'react';
import logo from './logo.svg';
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { orange, green } from '@mui/material/colors';
import '@fontsource/roboto';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar'; 
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const theme = createTheme({
  typography:{
    h2: {
      fontSize : 18,
      marginBottom : 15,
      marginTop : 15,
    }
  },
  
});


const useStyles = makeStyles({
  root:{
    backgroundColor : 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border : 0,
    marginBottom : 15,
    borderRadius : 15,
    color : 'white',
    padding :'5px 30px'

  } 
})

function ButtonStyled (){
    const Classes = useStyles();
    return <Button className={Classes.root}>Test Styled Button</Button>

}
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
          icon = {<DeleteIcon/>}
          checkedIcon = {<SaveIcon/>}
          onClick = {handleChange}
          inputprops={{ 'aria-label': 'controlled' }} 
    />
  } 
        label = "Testing Checkbox"
        component = 'div'
        
    />
  );  
}


function App() {
  return (
    <ThemeProvider theme = {theme}>
      <Container maxWidth = "md">
        <div className="App">
          <header className="App-header">
            <AppBar color = 'secondary'> 
              <Toolbar>
                <IconButton> 
                  <MenuIcon />
                  </IconButton>
                  <Typography variant='h6'>
                    MUI Theme
                  </Typography>
                  <Button>
                    Login
                  </Button>
              </Toolbar>
            </AppBar>
            <Typography variant='h2' component='div'>
              Welcome to MUI
            </Typography>
            <Typography variant='subtitle1'>
              Learn how to use material UI
            </Typography>
            <ButtonStyled/>
              <Grid container spacing = {2} justifyContent={'center'} alignItems= {'center'}>
                <Grid item xs>
                  <Paper style = {{ height : 75, width : '100%', }} />
                </Grid>
                <Grid item xs>
                  <Paper style = {{ height : 75, width : '100%', }} />
                </Grid>
                <Grid item xs>
                  <Paper style = {{ height : 75, width : '100%', }} />
                </Grid>
              </Grid> 
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
      </Container>
    </ThemeProvider>
  );
}

export default App;
