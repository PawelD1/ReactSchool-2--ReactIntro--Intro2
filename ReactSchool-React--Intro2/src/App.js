import React from 'react';
import {v4 as uuid4} from 'uuid';

const styles = {
  color: "white",
  backgroundColor: "black",
  paddingTop: 15,
  paddingBottom: 15,
  paddingRight: 20,
  paddingLeft: 20,
  marginTop: 100,
  marginLeft: "auto",
  marginRight: "auto",
  width: 450,
  textAlign: "center",
  el: {
    color: "black",
    background: "#ecf0f1",
    marginLeft: 150,
    marginRight: 150,
    borderRadius: 15 
  }
}
function Generator({version, uuid, info}) {
  return (
    <div style={styles}>
      <h2>{version}</h2>
      <p>{uuid}</p>
      <p style={styles.el}>{info}</p>
    </div>
  );
}

function App() {
  let u4 = uuid4();
  return (
    <Generator version="VERSION 4 UUID CODE" uuid={u4} info="To generate new code, refresh page" />
  );
}

export default App;
