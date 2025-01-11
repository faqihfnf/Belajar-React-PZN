import React from "react";
import Row from "./Row";
import Rows from "./Row";

export default function Table() {
  return (
    <>
      {/* contoh tidak menggunakan pure component */}
      {/* <table border={1}>
        <tbody>
          <Row text="Satu" />
          <Row text="Dua" />
          <Row text="Tiga" />
        </tbody>
      </table> */}
      <br />
      {/* contoh  menggunakan pure component */}
      <table border={1}>
        <tbody>
          <Rows id="1" texts="Satu" />
          <Rows id="2" texts="Dua" />
          <Rows id="3" texts="Tiga" />
        </tbody>
      </table>
    </>
  );
}
