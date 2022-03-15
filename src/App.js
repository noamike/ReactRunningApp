import "./styles.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function App() {
  return (
    <div className="App">
      <h1>Track your Progress!</h1>
      <table>
        <tr>
          <td>Distance</td>
          <td>
            <TextField
              id="outlined-number"
              label="number"
              type="number"
            ></TextField>
          </td>
        </tr>
        <tr>
          <td>Notes</td>
          <td>
            <textarea></textarea>
          </td>
        </tr>
      </table>
      <Button variant="contained"> Submit </Button>
      <Button variant="contained">Clear</Button>
    </div>
  );
}
