import ToggleChallenge from "./component/ToggleChallenge"
import UserChallenge from "./component/UserChallenge"

function App() {
  return (
    <>
      <ToggleChallenge/>
      <h2 style={{margin: "10px 0"}}>User Challenge</h2>
      <UserChallenge/>
    </>
  )
}

export default App
