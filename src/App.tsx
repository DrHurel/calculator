
import { useState, useEffect } from 'react';
import { ThemeList } from './lib/theme';
import { parseCalcul } from './lib/calcul';
import React from 'react';
import { ThemeSelector } from './components/themeSelector';
import { Key } from './components/keyNumber';

export default function App() {

  const [display, setDisplay] = useState("");
  const [multiplier, setMultiplier] = useState(true);
  const [operator, setOperator] = useState("");
  const [toOperate, setToOperate] = useState("");

  const [target, setTarget] = useState(0);

  const toEdit = [setDisplay, setToOperate]
  const toEditValue = [display, toOperate]

  const addNumber = (number: string) => () => toEdit[target](toEditValue[target] + number)

  const Operator = (o: string) => () => {
    if (target == 1 && operator != "" && toOperate != "") {
      setDisplay(parseCalcul(display, toOperate, o).toString())
      setToOperate("")
      setOperator("")
    } else {

      setOperator(o)
      setTarget(1)
    }
  }


  useEffect(() => {

    for (const theme of ThemeList) {
      theme.Root(document.querySelector(':root'))
    }

    ThemeList[2].specialTheme('hsl(198, 20%, 13%)', document.querySelector('section:last-child>div:last-child>button:last-child'), 'color');



  }, []);

  return (<main>

    <header>
      <h2>calc</h2>
      <p>THEME</p>

      <ThemeSelector />
    </header>

    <section>
      <h1 id="left">
        {display}
      </h1>
      <p id="operator">{operator}</p>
      <p id="right">{toOperate}</p>
    </section>

    <section>
      <Key action={addNumber("7")} value={7} />
      <Key action={addNumber("8")} value={8} />
      <Key action={addNumber("9")} value={9} />

      <Key action={() => {
        toEdit[target](display.slice(0, toEditValue[target].length - 1))
        if (toEditValue[target].length == 1) {
          toEdit[target]("")
          setTarget(0)
        }
      }} value={"DEL"} />

      <Key action={addNumber("4")} value={4} />
      <Key action={addNumber("5")} value={5} />
      <Key action={addNumber("6")} value={6} />

      <Key action={Operator("+")} value={"+"} />

      <Key action={addNumber("1")} value={1} />
      <Key action={addNumber("2")} value={2} />
      <Key action={addNumber("3")} value={3} />

      <Key action={Operator("-")} value={"-"} />


      <Key action={() => {
        if (multiplier) toEdit[target](toEditValue[target] + ".")
        setMultiplier(false)
      }} value={"."} />

      <Key action={addNumber("0")} value={0} />

      <Key action={Operator("÷")} value={"÷"} />

      <Key
        action={Operator("x")} value={"x"} />


      <Key
        action={() => {
          setDisplay("")
          setToOperate("")
          setOperator("")
          setMultiplier(true)
          setTarget(0)
        }}
        value={"RESET"}
      />
      <Key
        action={() => {
          if (operator != "" && toOperate != "") {
            setDisplay(parseCalcul(display, toOperate, operator).toString())
            setToOperate("")
            setOperator("")
            setMultiplier(true)
          }
        }}
        value={"="}
      />
    </section>
  </main >);

}



