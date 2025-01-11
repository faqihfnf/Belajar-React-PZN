import React from "react";

//contoh penggunaan bukan pure component
// let counter = 0;
// export default function Row({ text }) {
//   counter++;
//   return (
//     <tr key="">
//       <td>{counter}</td>
//       <td>{text}</td>
//     </tr>
//   );
// }

// contoh menggunakan pure component
export default function Rows({ id, texts }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{texts}</td>
    </tr>
  );
}
