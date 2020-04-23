import React, { Component } from "react";
import "./App.css";
import store from "./store";
import { increment, decrement, currentActiveSession } from "./action";
class App extends Component {
  // state = {
  //   days: 11,
  //   hours: 31,
  //   minutes: 27,
  //   seconds: 11,
  //   activeSession: "days"
  // };

  render() {
    const { days, hours, minutes, seconds, activeSession } = store.getState();
    console.log(days);
    const setActiveSession = e => {
      store.dispatch(currentActiveSession(e.target.value));
      //this.setState({ activeSession: e.target.value });
    };
    const handleCounter = e => {
      if(e.target.dataset.type === 'INCREASE_COUNTER'){
        store.dispatch(increment(activeSession));
      }
      else{
        store.dispatch(decrement(activeSession));
      }
    };
    return (
      <div className="App">
        <header>
          <h4 className="App__subheader">BOOK NAME</h4>
          <h1 className="App__header">Understanding Redux - 1</h1>
        </header>

        <section className="Counter">
          <h4 className="App__subheader">TOTAL TIME SPENT ON THE PROJECT</h4>

          <main className="Counter--main">
            <div className="Counter--main__session">
              <span className="Counter__text--grey">ACTIVE SESSION: </span>
              <select
                className="Counter__text--grey"
                onChange={setActiveSession}
                value={activeSession}
              >
                <option value='days'>DAYS</option>
                <option value='hours'>HOURS</option>
                <option value='minutes'>MINUTES</option>
                <option value='seconds'>SECONDS</option>
              </select>
            </div>

            <div className="Counter--main__values">
              <div>
                <span className="App__text--white Counter__text--large">
                  {days}
                </span>
                <span className="Counter__text--grey">DAYS</span>
              </div>

              <div className="Counter__separator">:</div>

              <div>
                <span className="App__text--white Counter__text--large">
                  {hours}
                </span>
                <span className="Counter__text--grey">HOURS</span>
              </div>

              <div className="Counter__separator">:</div>

              <div>
                <span className="App__text--white Counter__text--large">
                  {minutes}
                </span>
                <span className="Counter__text--grey">MINUTES</span>
              </div>

              <div className="Counter__separator">:</div>

              <div>
                <span className="App__text--white Counter__text--large">
                  {seconds}
                </span>
                <span className="Counter__text--grey">SECONDS</span>
              </div>
            </div>
          </main>
          <div className="App__buttons">
            <button className="App__text--white" data-type="INCREASE_COUNTER" onClick={handleCounter}>
              INCREASE
            </button>
            <button className="App__text--white" data-type="DECREASE_COUNTER" onClick={handleCounter}>
              DECREASE
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
