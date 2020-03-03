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
  .signuptext {
    font-family: PT Serif;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 37px;
    text-align: center;

    color: #000000;
  }

  .firstnamediv {
    position: relative;
    margin: 0;
    padding: 8px 0;
  }
  .firstnamediv fieldset {
    font-size: 100%;
    vertical-align: baseline;
    border: 0;
    background: transparent;
  }

  .firstnamediv input {
    font-size: 16px;
    vertical-align: middle;
    width: -webkit-fill-available;
    padding: 10px 12px;
    font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
      sans-serif;
    color: #333;
    border: none;
    background: rgba(0, 0, 0, 0.07);
    border-radius: 6px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
  }
  .emaildiv {
    position: relative;
    margin: 0;
    padding: 8px 0;
  }
  .emaildiv fieldset {
    font-size: 100%;
    vertical-align: baseline;
    border: 0;
    background: transparent;
  }

  .emaildiv input {
    font-size: 16px;
    background: rgba(0, 0, 0, 0.07);
    vertical-align: middle;
    width: -webkit-fill-available;
    padding: 10px 12px;
    font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
      sans-serif;
    color: #333;
    border: none;
    background: rgba(0, 0, 0, 0.07);
    border-radius: 6px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
  }
  .lastnamediv {
    position: relative;
    margin: 0;
    padding: 8px 0;
  }
  .lastnamediv fieldset {
    font-size: 100%;
    vertical-align: baseline;
    border: 0;
    background: transparent;
  }

  .lastnamediv input {
    font-size: 16px;
    background: rgba(0, 0, 0, 0.07);
    vertical-align: middle;
    width: -webkit-fill-available;
    padding: 10px 12px;
    font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
      sans-serif;
    color: #333;
    border: none;
    background: rgba(0, 0, 0, 0.07);
    border-radius: 6px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
  }

  .passwordiv {
    position: relative;
    margin: 0;
    padding: 8px 0;
  }
  .passwordiv fieldset {
    font-size: 100%;
    vertical-align: baseline;
    border: 0;
    background: transparent;
  }

  .passwordiv input {
    font-size: 16px;
    background: rgba(0, 0, 0, 0.07);
    vertical-align: middle;
    width: -webkit-fill-available;
    padding: 10px 12px;
    font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
      sans-serif;
    color: #333;
    border: none;
    background: rgba(0, 0, 0, 0.07);
    border-radius: 10px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
  }

  .confirmpasswordiv {
    position: relative;
    margin: 0;
    padding: 8px 0;
  }
  .confirmpasswordiv fieldset {
    font-size: 100%;
    vertical-align: baseline;
    border: 0;
    background: transparent;
  }

  .confirmpasswordiv input {
    font-size: 16px;
    background: rgba(0, 0, 0, 0.07);
    vertical-align: middle;
    width: -webkit-fill-available;
    padding: 10px 12px;
    font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
      sans-serif;
    color: #333;
    border: none;
    background: rgba(0, 0, 0, 0.07);
    border-radius: 10px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
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
    height: 30px;
    color: #fff;
    background: #a8d8d6;
    text-align: center;
    border-radius: 10px;
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
      .then(
        authRes => {
          const userObj = {
            email: authRes.user.email
          };

          firebase
            .firestore()
            .collection("user")
            .doc(email)
            .set(userObj)
            .then(
              () => {
                history.push("/dashboard");
              },
              drErr => {
                console.log(drErr);

                if (drErr) {
                  alert(drErr.message);
                } else {
                  alert("Sign up successful. Welcome...");
                }
              }
            );
        },
        authErr => {
          console.log(authErr);
          if (authErr) {
            alert(authErr.message);
          } else {
            alert("Sign up successful. Welcome...");
          }
        }
      );

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
                  <InputLabel className="customlabel" htmlFor="fullname">
                    First Name
                  </InputLabel>
                  <div className="firstnamediv">
                    <fieldset>
                      <input
                        required
                        type="text"
                        placeholder="First Name"
                        id="firstname"
                        value={firstname}
                        onChange={e => setFirstName(e.target.value)}
                      />
                    </fieldset>
                  </div>
                  <InputLabel className="customlabel" htmlFor="fullname">
                    Last Name
                  </InputLabel>
                  <div className="lastnamediv">
                    <fieldset>
                      <input
                        required
                        type="text"
                        placeholder="Last Name"
                        className="custominput"
                        id="lastname"
                        value={lastname}
                        onChange={e => setLastName(e.target.value)}
                      />
                    </fieldset>
                  </div>
                  <InputLabel className="customlabel" htmlFor="email">
                    Email Address
                  </InputLabel>
                  <div className="emaildiv">
                    <fieldset>
                      <input
                        autoComplete
                        autoFocus
                        type="email"
                        placeholder="Email Address"
                        id="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                    </fieldset>
                  </div>
                  <InputLabel className="customlabel" htmlFor="password">
                    Enter your password
                  </InputLabel>
                  <div className="passwordiv">
                    <fieldset>
                      <input
                        required
                        autoComplete
                        autoFocus
                        type="password"
                        placeholder="Enter your password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                    </fieldset>
                  </div>
                  <InputLabel className="customlabel" htmlFor="password">
                    Confirm Password
                  </InputLabel>
                  <div className="confirmpasswordiv">
                    <fieldset>
                      <input
                        required
                        autoComplete
                        autoFocus
                        type="password"
                        placeholder="Confirm Password."
                        id="passwordConfirm"
                        value={passwordConfirm}
                        onChange={e => setpasswordConfirm(e.target.value)}
                      />
                    </fieldset>
                  </div>
                  <div className="submitdiv">
                    <button type="submit" className="submitbutton">
                      Sign up
                    </button>
                    <p>
                      {" "}
                      Already have an account? <a href="/login">Log in</a>
                    </p>
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
