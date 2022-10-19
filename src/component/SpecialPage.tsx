import MenuView from "./MenuView";
import { useLocation } from 'react-router-dom';

export default function SpecialPage() {
  const location = useLocation();

  return (
    <MenuView food_name={location.state.name} />
  )
}