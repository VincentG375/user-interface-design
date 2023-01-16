import './App.css';
import Homepage from './components/Homepage';
import {Card} from "react-bootstrap";
function App() {
  return (
      <div>
          <Card style={{
              marginTop: '1rem',
              width: '50rem',
              height: '20rem',
              alginItems:'center',
              marginLeft: 'auto',
              marginRight: 'auto',

          }}>
            <Card.Body>
                <Homepage/>
            </Card.Body>
          </Card>
      </div>
  );
}
export default App;
