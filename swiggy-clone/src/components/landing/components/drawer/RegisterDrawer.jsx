import React, { useState  } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { auth } from "./firebase";
const Div = styled.div`font-family: sans-serif;`;

const useStyles = makeStyles({
  list: {
    width: 450
  },
  fullList: {
    width: 'auto'
  }
});

export default function RegisterDrawer() {

  const classes = useStyles();
  const [phNo, setPhNo] = useState('');
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = React.useState({
    bottom: false
  });


  const handleSubmit = () => {
        const obj = {
          user_name: name,
          phone_num: phNo,
          email: email,
          password: password
        }
        console.log(obj);
    if(obj.user_name === "" || obj.phone_num === "" || obj.password === "" || obj.email === "" ){
             alert("Please fill all the credentials");
           }
           else{
             fetch("https://server-swiggy.herokuapp.com/users/", {
               method: 'POST',
               body: JSON.stringify(obj),
               headers: {
                 "content-type" : "application/json"
               }
             }).then(alert("Signedup successfully"))
             .then(() => {
               setState({ ...state, right: false });
               setError('');
             }).then()
             .catch(error => {
               setError(error.message);
               console.error("Error signing in with password and email", error);
             });
           }
  }
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
    setError('');
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom'
      })}
      style={{ right: 0 }}
      role="presentation"
    >
      <Div className="container mt-3" style={{ width: '90%' }}>
        <Div className="row">
          <Div className="col text-left">
            <button type="button" className="btn btn-sm" onClick={toggleDrawer(anchor, false)}>
              <i className="fas fa-times fa-lg" />
            </button>
            <div className="container mt-2">
              <div className="row">
                <div className="col-lg-6 ml-3">
                  <h3>Sign up</h3>
                  <small>
                    or <b style={{ color: '#fc8019' }}>login to your account</b>
                  </small>
                </div>
                <div className="col-lg-4 ml-3">
                  <img
                    className="img-fluid"
                    style={{
                      width: '105px',
                      height: '100px',
                      borderRadius: '50%',
                      fload: 'right'
                    }}
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                    alt="logo of wrap"
                  />
                </div>
              </div>
              <div className="container-fluid mt-3">
                <div className="row">
                  <div className="col-lg-12">
                    <TextField
                      label="+91"
                      placeholder=""
                      fullWidth
                      variant="outlined"
                      style={{
                        marginLeft: '0px',
                        borderRadius: '0px',
                        marginTop: '15px'
                      }}
                      onChange={(e) => {
                        setPhNo(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="col-lg-12">
                    <TextField
                      label="Name"
                      fullWidth
                      variant="outlined"
                      style={{
                        marginLeft: '0px',
                        borderRadius: '0px',
                        marginTop: '15px'
                      }}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="col-lg-12">
                    <TextField
                      label="Email"
                      placeholder=""
                      fullWidth
                      variant="outlined"
                      style={{
                        marginLeft: '0px',
                        borderRadius: '0px',
                        marginTop: '15px'
                      }}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="col-lg-12">
                    <TextField
                      type="password"
                      label="Password"
                      placeholder=""
                      fullWidth
                      variant="outlined"
                      style={{
                        marginLeft: '0px',
                        borderRadius: '0px',
                        marginTop: '15px'
                      }}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="col-lg-12 mt-3">
                    <small
                      style={{
                        color: '#5d8ed5',
                        marginLeft: '1%',
                        fontWeight: 'bold'
                      }}
                    >
                      Have a referral code
										</small>
                  </div>
                  <div>
                    <small
                      style={{
                        fontSize: '9px',
                        fontWeight: 'bold'
                      }}
                      className="text-muted mx-3"
                    >
                      By creating an account, I accept the{' '}
                      <small
                        style={{
                          color: '#5d8ed5',
                          fontSize: '9px',
                          fontWeight: 'bold'
                        }}
                      >
                        Terms & Conditions
											</small>
                    </small>
                  </div>
                  <div className='col-lg-12 text-center'>{error}</div>
                  <div className='col-lg-12 text-center'>
                    <button
                      style={{
                        background: '#fc8019',
                        border: '1px solid #fc8019',
                        color: 'white',
                        marginTop: '15px',
                        width: '318px',
                        borderRadius: '2%',
                      }}
                      onClick={handleSubmit}
                    >
                      <p
                        style={{
                          fontWeight: 'bold',
                          marginTop: '9px',
                        }}
                      >
                        SignUp
                                            </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Div>
        </Div>
      </Div>
    </div>
  );

  return (
    <div>
      { <button
        type="button"
        className=" btn btn-lg align-self-center font-weight-bold"
        onClick={toggleDrawer('right', true)}
        style={{
          borderRadius: '0px',
          color: 'white',
          backgroundColor: 'black',
          marginBottom : '10px',
        }}
      >
        {'Sign up'}
      </button>}
      <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
        {list('right')}
      </Drawer>
    </div>
  );
}