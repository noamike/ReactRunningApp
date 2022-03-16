import "./styles.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function App() {
  const inputProps = {
    step: 0.01
  };

  return (
    <div className="App">
      <h1>Track your Progress!</h1>
      <table>
        <tr>
          <td>Distance</td>
          <td>
            <TextField
              inputProps={inputProps}
              id="outlined-number"
              type="number"
              label="Miles"
              min=".01"
              size="small"
            />
          </td>
        </tr>
        <tr>
          <td>Time</td>
          <td>
            <TextField type="datetime" size="small" />
          </td>
        </tr>
        <tr>
          <td>Pace</td>
          <td></td>
        </tr>
        <tr>
          <td>Notes</td>
          <td>
            <textarea />
          </td>
        </tr>
      </table>
      <Button variant="contained"> Submit </Button>
      <Button variant="contained">Clear</Button>
    </div>
  );
}
