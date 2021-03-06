import styled from "styled-components";
// import { ToastContainer } from "react-toastify";


export const Styles = styled.div`
 background: lavender;
 padding: 25px 20px 0px 25px;
 margin: 0px;
 color: #3d3d3d;


 h1 {
   border-bottom: 1px solid white;
   color: #3d3d3d;
   font-family: sans-serif;
   font-size: 20px;
   font-weight: 600;
   line-height: 24px;
   padding: 10px;
   text-align: center;
 }

 form {
   background: white;
   border: 1px solid #dedede;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   margin: 0 auto;
   max-width: 350px;
   padding: 20px 20px;
 }

 input {
   border: 1px solid #d9d9d9;
   border-radius: 2px;
   box-sizing: border-box;
   margin-bottom: 1px;
   padding: 10px;
   width: 100%;
   flex: 10;
 }

 .form-group{
  margin: 5px 0px;
}


 .Error-Info-Icon{
   flex: 1;
   padding: 15px 0px 0px 5px;
   z-index: 5;
   font-size: 10px;
 }

 .Error-Info-Icon svg{
  color: #e62727;
   /* font-family: sans-serif; */
   /* font-size: 12px; */
   /* height: 30px; */
 }

 .name-div{
  /* border: 1px solid #d9d9d9; */
  border-radius: 4px;

   display: flex;
 }

 
 .gender-div{
  /* border: 1px solid #d9d9d9; */
  border-radius: 4px;
   display: flex;
 }
 
 .date-div{
  /* border: 1px solid #d9d9d9; */
  border-radius: 4px;
   display: flex;
 }

 .salary-div{
  /* border: 1px solid #d9d9d9; */
  border-radius: 4px;
   display: flex;
 }

 
 .gender-select-div{
  flex: 10;

 }

 #Gender-Select{
  border: 1px solid #d9d9d9;
   border-radius: 4px;
   box-sizing: border-box;
   padding: 10px 10px 10px 5px;
   width: 100%;
   color: #3d3d3d; 
    

 }

 

 #Gender-Placeholder{
   display: none;
 }

 .DateOfBirth-DatePicker{
  border: 1px solid #d9d9d9;
   border-radius: 4px;
   box-sizing: border-box;
   width: 100%;
   float: left;
   flex: 10;
   color: #3d3d3d;
 }

 .searchText{
  width: 50%;
  padding: 10px;
 }

 .label-div{
   clear: right;
   /* float: left; */
 }

 label {
   color: #3d3d3d;
   display: block;
   font-family: sans-serif;
   font-size: 14px;
   font-weight: 500;
   margin-bottom: 5px;
 }


 .submitButton {
   background-color: #6976d9;
   color: white;
   font-family: 'Segoe UI''Courier New', Courier, monospace, sans-serif;
   font-size: 13px;
   width: 92%;
   height: 50px;
   margin: 10px 0px;
   border: 0px;
   align-self: center;
   cursor: pointer;
   text-transform: uppercase;
  font-weight: 600;
 }

 .clearButton{
  background-color: #e62727;
   color: white;
   font-family: sans-serif;
   font-size: 13px;
   width: 92%;
   height: 50px;
   margin: 10px 0px;
   border: 0px;
   align-self: center;
   cursor: pointer;
   text-transform: uppercase;
   font-weight: 600;



 }


 .employeesResult{
  width: 60%;
  height: 520px;
  float: left;
  margin-right: 50px;
  overflow-y: scroll;
  background-color: white;
  padding: 10px;
  /* -ms-overflow-style: none;  /* Internet Explorer 10+ */
    /* scrollbar-width: 2px;
    scrollbar  */ 
  
 }

 .employeesResult::-webkit-scrollbar { 
  background-color: transparent;
  /* border-left: 1px solid lightgray; */
  width: 10px;
  /* border-radius: 20px; */

    /* display: c/ontents;  Safari and Chrome */
}

.employeesResult::-webkit-scrollbar-thumb {
  background-color: lightgray;
  border-radius: 2px;
  /* outline: 1px solid slategrey; */
}

.employeesResult::-webkit-scrollbar-thumb:hover{
  background-color: darkgray;
  transition: all 5s;
  /* border-radius: 5px; */
  /* outline: 1px solid slategrey; */
}

 /* .searchArea{
  margin:0px;
  padding:  0px;

 } */

 
.Card{
  margin: 2px 15px 2px 15px;
  /* border: 1px solid #a3a3a3; */
  width: 95%;
  background-color: whitesmoke;
  /* border-radius: 5px; */
  padding: 10px 5px;
  float: left;
  display: flex;
  /* text-align: center; */

}

.Employee-Icon{
  font-size: 50px;
  display: inline;
  margin: auto 0px auto 5px;
  text-align: center;
  background-color: #151525;
  padding-top: 5px;
  /* border-radius: 100px; */
  
  /* vertical-align: middle; */
  flex: 1.5;
}

.Employee-Icon svg{
  /* text-align: center;
   */
  color: white;
}
.Employee-Personal-Info{
  /* font-size: 50px; */
  /* vertical-align: middle; */
  flex: 5;
  display: inline;
  margin: auto 5px auto 10px;
  /* text-align: center; */
}

.Employee-Personal-Info h5,h6, p{
  margin: 7px;
}
.Employee-Personal-Info p{
  font-size: 12px;

}
.Employee-Personal-Info h5{
  text-transform: capitalize;

}
.Employee-Salary{
  /* font-size: 50px; */
  /* vertical-align: middle; */
  flex: 3;
  display: inline;
  margin: auto 5px auto 0px;
  text-align: start;
  font-size: 12px;
  /* padding-bottom: 8px; */

}
.Card-Buttons{
  /* font-size: 50px; */
  /* vertical-align: middle; */
  flex: 3;
  display: inline;
  margin: auto 5px auto 0px;
  text-align: justify;
  

}

.editButton {
    background-color: whitesmoke;
    color: #6976d9;
    font-size: 15px;
    width: 45%;
    height: 40px;
    border: 0px;
    margin-right: 5px;
  }

  .deleteButton {
    background-color: whitesmoke;
    color: #e62727;
    font-size: 15px;
    width: 45%;
    height: 40px;
    border: 0px;
  }

  .Card-Buttons svg {
    cursor: pointer;
  }

.Toast-Message {
  display: flex;
}

.Toast-Body p{
  margin: 0px 5px;
  padding: 0;
}
.Toast-Action{
  margin-top: 15px;
  display: flex;

}



.Toastify__toast{
    position: absolute !important;
    top: 60px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 100px;

  /* background: #6976d9 !important; */

}

@media screen and (max-width: 650px) {


.Employee-Personal-Info p{
font-size: 10px !important;

text-transform: capitalize;

}
.Employee-Personal-Info strong{
font-size: 11px !important;

}
.Employee-Salary{
/* font-size: 50px; */
/* vertical-align: middle; */
/* flex: 3;
display: inline;
margin: auto 5px auto 0px;
text-align: start; */
font-size: 10px !important;
/* padding-bottom: 8px; */

}


}

@media screen and (max-width: 950px) {

  section{
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
  }
  .employeesResult{
  width: 95%;
  /* height: 520px; */
  /* clear: right !important; */
  /* margin-right: 0px;
  margin-top: 10px; */
  /* margin-top: 10px; */
  /* margin-left: 5%; */
  margin: 10px auto 0px auto;
  /* padding: 25px - 0px 0px; */
  /* overflow-y: scroll; */
  background-color: white;
  padding: 10px 10px 10px 10px;
  /* -ms-overflow-style: none;  /* Internet Explorer 10+ */
    /* scrollbar-width: 2px;
    scrollbar  */ 
  
 }

 form {
   background: white;
   border: 1px solid #dedede;
   display: flex;
   /* clear: both !important; */

   flex-direction: column;
   justify-content: space-around;
   margin: 0 auto;
   max-width: 90%;
   padding: 20px 20px;
 }

 .Card{
  margin: 2px 10px 2px 5px;
  /* border: 1px solid #a3a3a3; */
  width: 95%;
  background-color: whitesmoke;
  /* border-radius: 5px; */
  padding: 5px 5px;
  float: left;
  display: flex;
  /* text-align: center; */

}

.Employee-Icon{
  font-size: 30px;
  display: inline;
  margin: auto auto auto 5px;
  text-align: center;
  background-color: #151525;
  padding-top: 5px;
  /* border-radius: 100px; */
  
  /* vertical-align: middle; */
  flex: 1.5;
}

.Employee-Icon svg{
  /* text-align: center;
   */
  color: white;
}
.Employee-Personal-Info{
  /* font-size: 50px; */
  /* vertical-align: middle; */
  flex: 7;
  display: inline;
  margin: auto 5px auto 5px;
  /* text-align: center; */
}

.Employee-Personal-Info h5, h6, p{
  margin: 7px;

}

.Employee-Personal-Info h6{
  font-weight: 900; 

}
.Employee-Personal-Info p{
  font-size: 12px;

}
.Employee-Personal-Info h5{
  text-transform: capitalize;

}
.Employee-Salary{
  /* font-size: 50px; */
  /* vertical-align: middle; */
  flex: 3;
  display: inline;
  margin: auto 5px auto 0px;
  text-align: start;
  font-size: 12px;
  /* padding-bottom: 8px; */

}
.Card-Buttons{
  /* font-size: 50px; */
  /* vertical-align: middle; */
  flex: 4;
  display: inline;
  margin: auto 5px auto 0px;
  text-align: justify;
  

}


}
`;