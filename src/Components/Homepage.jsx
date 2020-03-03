import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import HeaderforHomepage from "./Header";
import { Grid, Paper } from "@material-ui/core";
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    backgroundColor: "#A8D8D6"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow:"none",
    backgroundColor:"inherit"
  },
  avatar: {
    margin: theme.spacing(1),
  },

  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Component = styled.div`
  .maindiv {
    display: flex;
  }
  .title {
    font-family: Red Hat Display;
    font-style: normal;
    font-weight: normal;
    font-size: 72px;
    line-height: 69px;
    text-align: center;
    color: #000000;
  }
  .title span{
     color: #46948F;
  }
  .startdiv{
display:block;
  }
  .startdiv button{
    width: 280px;
    height: 80px;
    background: #FFFFFF;
    border-radius: 46px;
    font-family: Red Hat Display;
font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 60px;
/* identical to box height */

text-align: center;

color: #000000;
  }
`;

export default function Homepage() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <main className={classes.root}>
        <Component>
      <HeaderforHomepage />
    <Grid item sm={12}>
        <Paper className={classes.paper}>
        <h1 className="title">
        Find your <span>revolutionary buddies</span>  
        <br/>and take charge.
      </h1>
      <div className="startdiv">
          <button onClick={()=>{history.push("/signup")}}>
Start here
          </button>
      </div>
        </Paper>

    </Grid>
     </Component>
    </main>
  );
}
