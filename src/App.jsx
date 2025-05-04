
import Characters from "./OP-Characters"
import data from "./Data.js"

function App() {

  const entryCharacters=data.map((entry)=>{
    return (
      <Characters 
      {...entry}
      />
    )
  })
  return (
    <div className="Chara">
      {entryCharacters}
   </div>
  )
}

export default App
