import React from 'react';
import { useEffect } from 'react';
import { ThemeList } from './lib/theme';
import { parseCalcul } from './lib/calcul';

export default function App() {

  const [display, setDisplay] = React.useState("");
  const [multiplier, setMultiplier] = React.useState(true);
  const [operator, setOperator] = React.useState("");
  const [toOperate, setToOperate] = React.useState("");

  const [target, setTarget] = React.useState(0);

  const toEdit = [setDisplay, setToOperate]
  const toEditValue = [display, toOperate]



  useEffect(() => {

    for (const theme of ThemeList) {
      theme.Root()
    }

    ThemeList[2].specialTheme('hsl(198, 20%, 13%)', document.querySelector('section:last-child>div:last-child>button:last-child'), 'color');


    const selector = document.querySelector("#them-selector") as HTMLInputElement;





  }, []);

  return (<main>

    <header>
      <h2>calc</h2>
      <p>THEME</p>

      <div>
        <input type="range" min="0" max="2" step="1" id="them-selector"
          index={0}

          onChange={(e) => {
            ThemeList[e.target.value].setTheme()
          }}
        />
        <label htmlFor="them-selector">1</label>
        <label htmlFor="them-selector">2</label>
        <label htmlFor="them-selector">3</label>
      </div>
    </header>

    <section>
      <h1 id="left">
        <p>{display}{operator}</p>
        <p>{toOperate}</p>
      </h1>
      <p id="operator"></p>
      <p id="right"></p>
    </section>

    <section>
      <div><button onClick={() => {
        toEdit[target](multiplier ? "7" + toEditValue[target] : toEditValue[target] + "7")

      }} >7</button></div>
      <div><button onClick={() => {
        toEdit[target](multiplier ? "8" + toEditValue[target] : toEditValue[target] + "8")

      }}  >8</button></div>
      <div><button onClick={() => {
        toEdit[target](multiplier ? "9" + toEditValue[target] : toEditValue[target] + "9")

      }} >9</button></div>
      <div><button onClick={() => {
        toEdit[target](display.slice(0, toEditValue[target].length - 1))

      }} >DEL</button></div>
      <div><button onClick={() => {
        toEdit[target](multiplier ? "4" + toEditValue[target] : toEditValue[target] + "4")
      }} >4</button></div>
      <div><button onClick={() => {
        toEdit[target](multiplier ? "5" + toEditValue[target] : toEditValue[target] + "5")

      }} >5</button></div>
      <div><button onClick={() => {
        toEdit[target](multiplier ? "6" + toEditValue[target] : toEditValue[target] + "6")

      }} >6</button></div>
      <div><button onClick={() => {
        setOperator("+")
        setTarget(1)
      }} >+</button></div>
      <div><button onClick={() => {
        toEdit[target](multiplier ? "1" + toEditValue[target] : toEditValue[target] + "1")

      }} >1</button></div>
      <div><button onClick={() => {
        toEdit[target](multiplier ? "2" + toEditValue[target] : toEditValue[target] + "2")
      }} >2</button></div>
      <div><button onClick={() => {
        toEdit[target](multiplier ? "3" + toEditValue[target] : toEditValue[target] + "3")
      }} >3</button></div>
      <div><button onClick={() => {
        setOperator("-")
        setTarget(1)
      }} >-</button></div>
      <div><button onClick={() => {
        if (multiplier) toEdit[target](toEditValue[target] + ".")
        setMultiplier(false)

      }}
      >.</button></div>
      <div><button onClick={() => {
        toEdit[target](multiplier ? "0" + toEditValue[target] : toEditValue[target] + "0")

      }} >0</button></div>
      <div><button onClick={() => {
        setOperator("÷")
        setTarget(1)
      }} >÷</button></div>
      <div>
        <button
          onClick={() => {
            setOperator("x")
            setTarget(1)
          }}
        >
          <div>x</div>
        </button>
      </div>
      <div><button
        onClick={() => {
          setDisplay("")
          setToOperate("")
          setOperator("")
          setMultiplier(true)
          setTarget(0)
        }}

      >RESET</button></div>
      <div><button
        onClick={() => {
          if (operator != "" && toOperate != "") {
            setDisplay(parseCalcul(display, toOperate, operator).toString())
            setToOperate("")
            setOperator("")
            setMultiplier(true)
          }
        }}
      >=</button></div>
    </section>
  </main >);

}



