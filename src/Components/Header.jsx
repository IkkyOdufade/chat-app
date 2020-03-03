import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { FiMenu } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import {useHistory} from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const HeaderContainer = styled.main`
  backkground: #fff;

  .headerbox {
    @media (max-width: 600px) {
      height: 70px;
    }
    box-shadow: 0px 10px 40px rgba(89, 120, 150, 0.06);
    height: 83px;
    background: #ffffff;
    border-radius: 4px;
    position: relative;
    display: flex;
  }

  .logo {
    @media (max-width: 600px) {
      height: 40px;
      width: 100px;
      line-height: 28px;
      display: flex;
      align-items: center;
      color: #436689;
    }
    font-family: PT Serif;
    font-style: normal;
    font-weight: normal;
    font-size: 45px;
    line-height: 60px;  
    text-align: center;
    display: flex;

    color: #46948F;
  }

  .content {
    display: flex;
  }

  .line {
    @media (max-width: 600px) {
      display: none;
    }
    width: 1px;
    height: 83px;
  }
  .logodiv {
    @media (max-width: 600px) {
      padding-left: 35px;
      padding-bottom: 10px;
    }
    display: flex;
  }

  .lineD {
    @media (max-width: 600px) {
      display: none;
    }
    display: flex;
  }

  .logoD {
    @media (max-width: 600px) {
      padding-top: 13px;
      margin-left: 50px;
    }
    padding-top: 30px;
    margin-left: -65px;
  }

  .userprofile {
    display: flex;
    @media (max-width: 600px){
        display:none;
    }
  }

  .profilebox {
    @media (max-width: 600px) {
      height: 50px;
      width: 330px;
      display: flex;
      padding-top: 5px;
      padding-left: 40px;
    }

    display:none;
    border-right: 1px solid #f4f4f4;
    border-left: 1px solid #f4f4f4;
    height: 83px;
    width: 330px;
    padding-top: 40px;
    margin-left: 10px;
  }

  .profilename {
    margin-right: 25px;
    @media (min-width: 600px) {
      display: none;
    }
  }

  .profileicon {
    @media (min-width: 600px) {
      margin-right: 25px;
    }
    width: 24px;
    height: 24px;
  }

  .menuicon {
    @media (max-width: 600px) {
      height: 25px;
      width: 25px;
    }
  }
  .menudiv {
    @media (min-width: 600px) {
      display: none;
    }
  }

  .signupdiv {
    @media (min-width: 320px) and (max-width: 480px) {
      display: none;
    }
    margin-top:15px;
    display:block
  }
  .signupdiv button{
    width: 132px;
    height: 48px;
    background: #46948F;
    border: 3px solid #46948F;
    border-radius: 10px;
    color:#fff;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;  
}

  .logindiv{
    @media (min-width: 320px) and (max-width: 480px) {
        display: none;
      }
      margin-top:15px;
  }
  .logindiv button{
    width: 132px;
    height: 48px;
    background: #46948F;
    border: 3px solid #46948F;
    border-radius: 10px;
    font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;
color:#fff;

  }
`;

export default function HeaderforHomepage() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <HeaderContainer>
      <nav className="headerbox">
        <Grid xs={1} item sm={false}>
          <div className="menudiv">
            <FiMenu className="menuicon" />
          </div>
        </Grid>

        <Grid item xs={5} sm={4}>
          <div className="logodiv">
            <title className="logo">revolt</title>
          </div>
        </Grid>
        <Grid xs={1} item sm={4}></Grid>
        <Grid xs={3} item sm={false}>
          <div className="userprofile">
            <div className="profilebox">
              <AiOutlineUser className="profileicon" />
            </div>
            <p className="profilename"> </p>
          </div>
        </Grid>
        <Grid xs={false} item sm={2}>
          <div className="signupdiv">
            <button onClick={()=>{history.push("/signup")}}>Sign up</button>
          </div>
        </Grid>
        <Grid xs={false} item sm={2}>
          <div className="logindiv">
            <button>Log in</button>
          </div>
        </Grid>
      </nav>
    </HeaderContainer>
  );
}
