import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Route, Routes, useParams } from "react-router";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";


function App() {
  return (
   <div>
    <Container>
      <Navi/>
      <Routes>
        <Route path="/"exact Component={Dashboard}/>
        <Route path="/product" Component={Dashboard}/>
        <Route path="/cart" Component={CartDetail}/>
        <Route path="/saveproduct/:productId" Component={AddOrUpdateProduct}/>
        <Route path="/saveproduct"  Component={AddOrUpdateProduct} />
        <Route path="*" Component={NotFound}/>
      </Routes>
    </Container>
   </div>
  );
}

export default App;
