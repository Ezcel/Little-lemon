
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// function Old(){
//   const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// 
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// 
// 
// 
// import React, { Component } from "react";
// import ReactDOM from "react-dom";  
// import './index.css';
// import PropTypes from "prop-types"
// 
// // Stateless function COMPONENTS
// // This is a primary way of writing React components
// // Component names are started with uppercase
// // function HelloWorld(){
// //   let buttonLabel = "Submit";
// //   return(
// //     // <div>Hello World!</div>
// // 
// //     //The <div></div> tags are used because a Component function must return a single element
// //     <div>
// //       <Hello/><World/>!
// //       <br />
// //       {/* You can return real JS expressions within JSX code by surrounding it with single braces */}
// //       <button>{buttonLabel}</button>
// //       <div className="book">
// //         <div className="title">
// //           The title
// //         </div>
// //         <div className="author">
// //           The author
// //         </div>
// //         <ul className="stats">
// //           <li className="rating">
// //             5 stars
// //             {'   '}
// // 
// //           </li>
// //           <li className="isbn">
// //             12-345678-910
// //           </li>
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // }
// 
// // ReactDOM.render is what makes the code get displayed
// // ReactDOM.render takes two arguments - 
// // 1. your component or React Element (what you want to render)
// // 2. real DOM Element (where you want it to render to )
// // i.e ReactDOM.render([React Element], [DOM element])
// // ReactDOM.render(
// //   <HelloWorld/>, //JSX
// //   document.querySelector("#root")
// // )
// 
// // function Hello() {
// //   return("Hello");
// // }
// 
// // function World() {
// //   return("World!");
// // }
// 
// 
// 
// // Old way of doing the above (everything is done at once)
// // function HelloWorld(){
// //   return(
// //     
// //     React.createElement(
// //     'li',
// //     {},
// //     "Hello",
// //     "Worlds"
// //     )
// //   );
// // }
// 
// 
// 
// 
// // JSX - HTML-like syntax in React
// // JSX is compiled to JavaScript by a tool called Babel.
// // Babel is a "transpiler" - a made-up word that means it transforms code into valid ES5 JavaScript
// // that all browsers can understand
// // JSX requires that every element be closed, including the ones normally open in HTML5
// // e.g <br> should be written as <br />
// 
// // if statement in JSX.
// // if statements are usually written using the ternary operator (?:)
// 
// function Tweet({tweet}){
//   return(
//     <div>
//       <section className="Tweet">
//         Tweet
//         <div className="content">
//           <Avatar/>
//           <div className="text">
//             <NameWithHandle author={tweet.author}/>
//             <br />
//             <div className="message">
//             <Hello name="Eziama"/>
//               <Message text={tweet.message}/>
//             </div>
//         </div>
//         </div>
//       </section>
//       <section className="fbpost">
//         <FbPost demo={demo}/>
//       </section>
//       {/* <Hello2 name="This boy"/> */}
//     </div>
//   )
// }
// 
// function Avatar(){
//   return(
//     <img src="assets/images/profileIcon.png"
//       className="avatar"
//       alt="avatar"
//     />
//   )
// }
// function Message({text}){
//   return(
//     <span className="message">
//       {text}
//     </span>
//   );
// }
// function NameWithHandle({author, time}){
//   const {name, handle} = author;
//   // const {time} = time;
//   return(
//     <div className="name-with-handle">
//       <span className="name">{name} </span>
//       <span className="handle">@{handle}</span>
//       <span> <Time time={testTweet.time}/></span>
//     </div>
//   );
// }
// 
// const Time = ({time}) => {
//   const timestamp = time;
//   <span className="time">{timestamp}</span>
// }
// 
// // const Hello2 = ({name}) => (
// //   <span>Hellow {name}</span>
// // )
// function Hello(props){
//   return(
//     <span>Hello { props.name } !!!!</span>
//   )
// }
// 
// <Hello name="Eziama"/>
// 
// var testTweet = {
//   message: "Something about cats",
//   author: {
//     handle: "Catperson",
//     name: "IAMA Catperson"
//   },
//   likes: 2,
//   retweet: 5,
//   timestamp: "2020-07-20 21:24:37"
// };
// 
// function FbPost({demo}){
//   return(
//     <div className="post">
//       <div className="user-details">
//         <UserIcon/>
//         <div className="post-info">
//           <UserName/>
//           <PostInfo/>
//       </div>
//       </div>
//       <div className="post-body">
//         <PostCopy/>
//         <div className="post-image">
//           <Image/>
//         </div>
//       </div>
//       <div className="post-footer">
//         <Actions/>
//       </div>
//       {/* <Comment author='somebody' message='a likable message' likes={1}/>
//       <Comment author='mr_unpopular' message='unlikable message'/>
//       <Comment author='mr_unpopular' message='another message' likes={0}/> */}
//       <Comment author='error_missing_message'/>
//       <Comment message='mysteryy author'/>
//       <Comment author={42}/>
// 
//     </div>
//   );
// }
// 
// 
// function UserIcon(){
//   return(
//     <img src="assets/images/alberto.png" className="avatar" alt="avatar"/>
//   );
// }
// 
// function UserName({name}){
//   return(
//     <h4>{demo.name}</h4>
//   );
// }
// 
// function PostInfo(){
//   return(
//     <small>
//       September 17 at 1:33 PM . Facebook for Android
//     </small>
//   );
//   
// }
// 
// function PostCopy({copy}){
//   return(
//     <p>{demo.copy}</p>
//   );
// }
// 
// function Image(){
//   return(
//     <img src="assets/images/me.JPG" className="post-image" alt="post iage"/>
//   );
// }
// 
// function Actions(){
//   return(
//     <div className="actions">
//       <p>Like</p>
//       <p>Comment</p>
//       <p>Share</p>
//     </div>
//   );
// }
// 
// function Comment({author, message, likes}){
//   return(
//     <div>
//       <div className="author">{author}</div>
//       <div className="message">{message}</div>
//       <div className="likes">
//         {likes > 0 ? likes : "No"}
//       </div>
//     </div>
//   );
// }
// 
// Comment.propTypes = {
//   message: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
//   likes: PropTypes.number
// }
// 
// const demo = {
//   name: "Somebody's name",
//   copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores numquam deserunt perferendis libero aut minus saepe, officiis, dicta tenetur ipsam recusandae quibusdam mollitia quos ea accusamus modi vero, voluptatem velit quia aliquam? Aliquid cumque quisquam earum error, non amet molestiae veniam dignissimos eaque reprehenderit excepturi! Distinctio minima aspernatur dolorum sapiente."
// }
// }


ReactDOM.createRoot(
  document.querySelector('#root')
).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

// ReactDOM.render(
//   <App />,
//   document.querySelector('#root')
// )

