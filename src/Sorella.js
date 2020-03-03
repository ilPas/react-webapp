import React, { useState } from "react";

//Componente con stato senza classi (Hook)
function Sorella(props) {
  const [nome, setNome] = useState("Apple");
  return (
    <div>
      <h2>Io sono la Sorella</h2>
    </div>
  );
}

export default Sorella;
