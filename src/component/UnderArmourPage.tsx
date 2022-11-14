import MenuView from "./MenuView";
import { useLocation } from 'react-router-dom';

export default function UnderArmourPage() {
  const location = useLocation();

  return (
    <MenuView brand_name={location.state.name} />
  )
}