import MenuView from "./MenuView";
import { useLocation } from 'react-router-dom';

export default function PastaPage() {
  const location = useLocation();

  return (
    <MenuView food_name={location.state.name} />
  )
}