import { Container } from '@chakra-ui/react';
import AirbnbCard from './components/airbnb';
import ButtonExample from "./components/button"
import Form from './components/form';
import Layout from './components/layout';

function App() {
  return (
    <div className="App">
      {/* <AirbnbCard/>
      <br/>
      <ButtonExample/> */}
      <Container>
        {/* <Form/> */}
        <Layout/>
      </Container>
    </div>
  );
}

export default App;
