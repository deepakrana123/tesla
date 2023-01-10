import styled from "styled-components"
import React,{useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from "@material-ui/icons/Close";
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux';
function Header(props) {

    const [burgerStatus, setBurgerStatus]=useState(false);
    const cars= useSelector(selectCars);
    console.log(cars);
    return (
        <Container>
        <a href="/home">
        <img src="/images/logo.svg" alt=""/>
        </a>
        <Menu>
        {cars && cars.map(( car ,index)=>(
            <a href="/home" key={index}> {car}</a>

        ))}
        
        </Menu>
        <RightMenu>
        <a href="/home">Shop</a>
        <a href="/home">Tesla Account</a>
        <CustomMenu  onClick={()=>setBurgerStatus(true)}/>
        </RightMenu>
        <BurgerNav  show={burgerStatus}>
        <CloseWrapper>
         <CustomCloseButton onClick={()=>setBurgerStatus(false)}/>
        </CloseWrapper>
       {cars && cars.map((car, index)=>(
        <li><a href="/home" key={index}>{car}</a></li>

       ))}
        <li><a href="/home">Existing Inventory</a></li>
        <li><a href="/home">Used Inventory</a></li>
        <li><a href="/home">Trade-In</a></li>
        <li><a href="/home">Cybertruck</a></li>
        <li><a href="/home">Roadster</a></li>
        
        </BurgerNav>
        </Container>
    )
}


export default Header;

const Container = styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 20px;
top:0;
left:0;
right:0;
z-index:1;
`;

const Menu = styled.div`
display:flex;
align-items:center;
flex:1;
justify-content:center;
a{
    font-weight:600;
    text-decoration:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
}

@media(max-width:768px)
{
    display:none;

}

`;

const RightMenu = styled.div`
display:flex;
align-items:center;
 
a{
    font-weight:600;
    text-decoration:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
}

`;


const CustomMenu = styled(MenuIcon)`
    cursor:pointer;

`;


const BurgerNav = styled.div`
   position:fixed;
   top:0;
   right:0;
   bottom:0;
   background-color: white;
   width: 300px;
   z-index:16;
   list-style: none;
   padding: 20px;
   display: flex;
   flex-direction:column;
   text-align: start;
   
   transform:${props => props.show ? 'translateX(0) ' : 'translateX(100%)'};

   li  {
       padding: 15px 0;
       border-bottom: 1px solid rgba(255,255,255,0.2);
   }
     a {
         font-weight:600;
     }
`;


const CustomCloseButton= styled(CloseIcon)`


  cursor: pointer;

`;


const CloseWrapper = styled.div`
   display: flex;
   justify-content: flex-end;

`;