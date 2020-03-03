import React, { useState } from "react";
import styled from "styled-components";
import { Input, InputLabel } from "@material-ui/core";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useHistory } from "react-router-dom";
import HeaderforOtherPages from "./HeaderforOtherPages";
import firebase from "firebase";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundColor: "#A8D8D6",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  mainGrid: {
    display: "block",
    width: "auto",
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3)
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "-webkit-fill-available",
    boxShadow: "none"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Component = styled.div`
  .maindiv {
    display: flex;
  }
  .mainGrid {
    background: #fff;
  }
  .custominput {
    margin-bottom: 30px;
    padding-right: 20px;
    font-size: 13px;
    width: -webkit-fill-available;
    border: none;
    border-bottom: 1px solid #a8d8d6;
    height: 20px;
  }
  .signuptext {
    font-family: PT Serif;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 37px;
    text-align: center;

    color: #000000;
  }
  .customlabel {
    height: 14px;
    font-size: 16px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    text-transform: uppercase;
    line-height: normal;
    letter-spacing: normal;
    color: #a8d8d6;
    padding-bottom: 30px;
  }
  .gridform {
    width: -webkit-fill-available;
  }

  .secondpart {
    display: flex;
  }
  .submitbutton {
    width: 320px;
    height: 60px;
    color: #fff;
    background: #a8d8d6;
    text-align: center;
    border-radius: 20px;
    font-size: 17px;
  }
`;

export default function SignUp() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");
  const [signupError, setsignupError] = useState("");

  const history = useHistory();
  const classes = useStyles();

  const passwordMatch = () => password === passwordConfirm;

  const handleSubmit = e => {
    e.preventDefault();
    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(password);
    console.log(passwordConfirm);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(authRes => {
        const userObj = {
          email: authRes.user.email
        };

        firebase
          .firestore()
          .collection("user")
          .doc(email)
          .set(userObj)
          .then(() => {
            history.push("/dashboard");
          });
      });

    if (!passwordMatch()) return "Passwords dont match";
  };

  return (
    <Component className={classes.root}>
      <main className="maindiv">
        <HeaderforOtherPages />
        <CssBaseline />

        <Grid item sm={6} className={classes.image}></Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          component={Paper}
          elevation={6}
          square
          className="mainGrid"
        >
          <div className="gridform">
            <Paper className={classes.paper}>
              <section>
                <p className="signuptext">
                  Sign up for <span>revolt</span>
                </p>
                <form
                  className={classes.form}
                  onSubmit={e => {
                    handleSubmit(e);
                  }}
                >
                 

                  <InputLabel className="customlabel" htmlFor="email">
                    Email Address
                  </InputLabel>
                  <input
                    autoComplete
                    autoFocus
                    type="email"
                    placeholder="Email Address"
                    className="custominput"
                    id="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <InputLabel className="customlabel" htmlFor="password">
                    Enter your password
                  </InputLabel>
                  <input
                    required
                    autoComplete
                    autoFocus
                    type="password"
                    placeholder="Enter your password"
                    className="custominput"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  

                  <div className="submitdiv">
                    <button type="submit" className="submitbutton">
                      Log in
                    </button>
                  <p>  Don't have an account? <a href="/signup">Sign up</a></p>
                  </div>
                </form>
              </section>
            </Paper>
          </div>
        </Grid>
      </main>
    </Component>
  );
}

