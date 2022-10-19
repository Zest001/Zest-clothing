import "./App.css";
import React from "react";
import HomePage from "./E-Commerce/page/homepage/HomePage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./E-Commerce/page/Shop/Shop.component";
import Header from "./E-Commerce/Header/Header.component";

const Hatpage = () => (
  <div>
    <h1>THE HATS PAGE</h1>
  </div>
);

const App = () => {
  return (
    <div className="body">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       showtext: false,
//       text: "",
//     };
//   }

//   render() {
//     const { text, showtext } = this.state;
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />

//           <button
//             style={{ cursor: "pointer", padding: "12px", margin: "40px" }}
//             onClick={() =>
//               this.setState((state) => ({ showtext: !state.showtext }))
//             }
//           >
//             Toggal Lifecycles
//           </button>
//           <button
//             style={{ cursor: "pointer", padding: "12px" }}
//             onClick={() =>
//               this.setState(() => ({ text: this.state.text + "_hello" }))
//             }
//           >
//             Update Taxt
//           </button>
//           {showtext ? <h3>LIFECYCLES COMPONENT</h3> : null}

//           {/* <Lifecycle text={this.state.text} /> */}
//           <h1>{text}</h1>
//         </header>
//       </div>
//     );
//   }
// }
