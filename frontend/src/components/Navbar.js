// import styled from "styled-components";

// const Navbar = () => {
//   const navigate = useNavigate();

//   const navigateHome = () => {
//     navigate("/");
//   };
//   const navigateCart = () => {
//     navigate("/cart");
//   };

//   const goLogin = () => {
//     navigate("/login");
//   };

//   return (
//     <Container>
//       <Wrapper>
//         <Left onClick={navigateHome}>
//           MEDICAL<span>CENTRAL</span>
//         </Left>

//         <Input>
//           <input type="text" placeholder="Search.." />
//         </Input>
//         <Center onClick={navigateCart}>
//           <i
//             style={{
//               cursor: "pointer",
//               fontSize: "large",
//             }}
//             class="fa-solid fa-cart-plus"
//           ></i>
//         </Center>
//         <Right onClick={goLogin}>
//           <i
//             style={{
//               cursor: "pointer",
//               fontSize: "large",
//             }}
//             class="fa-solid fa-user"
//           ></i>
//         </Right>
//       </Wrapper>
//     </Container>
//   );
// };

// const Input = styled.div`
//   margin-top: 1.2rem;
//   margin-right: 20rem;
//   input {
//     width: 38rem;
//     height: 2.4rem;
//     text-decoration: none;
//     border: none;
//     border-radius: 2rem;
//   }
// `;

// const Container = styled.div`
//   height: 7.2rem;
//   /* background-color: #57d0d0; */
//   /* background: #a5d8dd; */
//   /* background: #a3d9ab; */
//   background-color: black;
// `;
// const Wrapper = styled.div`
//   padding: 1rem 2rem;
//   display: flex;
//   justify-content: space-between;
//   font-weight: 700;
//   /* color: #000000; */
//   color: white;
// `;
// const Right = styled.div`
//   margin-top: 1.7rem;
//   margin-right: 2rem;
// `;
// const Left = styled.div`
//   margin-top: 0.4rem;
//   flex-grow: 1;
//   &:hover {
//     cursor: pointer;
//   }
//   font-size: 2.5rem;
//   font-family: "Moul", cursive;
//   font-weight: 400;
// `;
// const Center = styled.div`
//   margin-top: 1.7rem;
//   margin-right: 3rem;
// `;

// export default Navbar;
