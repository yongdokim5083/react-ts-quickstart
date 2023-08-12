import { useState } from "react";
import CountryList from "./CountryList";
import styles from "./App.module.css";
import Footer from "./Footer";
import { DefaultTheme } from "styled-components";

export type CountryType = {
  no: number;
  country: string;
  visited: boolean;
};

const App = () => {
  const [msg, setMsg] = useState<string>("World");
  const [list, setList] = useState<Array<CountryType>>([
    { no: 1, country: "이집트", visited: false },
    { no: 2, country: "일본", visited: true },
    { no: 3, country: "피지", visited: false },
    { no: 4, country: "콜롬비아", visited: false },
  ]);
  const [theme, setTheme] = useState<DefaultTheme>('basic' as unknown as DefaultTheme);

  const addResult = (x: number, y: number) => {
    return (
      <div className="card card-body bg-light mb-3">
        {x} + {y} = {x + y}
      </div>
    );
  };

  return (
    <div className="container">
      <h2 className={styles.test}>Hello {msg}!</h2>
      <hr className="dash-style" />
      {addResult(4, 3)}
      <CountryList countries={list} />
      <Footer theme="basic"/>
    </div>
  );
};

export default App;
