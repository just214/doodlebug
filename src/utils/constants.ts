import { BiUpsideDown } from "react-icons/bi";
import { FaGrinBeamSweat, FaHands, FaMask } from "react-icons/fa";
import { RiArrowGoBackFill } from "react-icons/ri";

export const actions = [
  { name: "None", icon: FaGrinBeamSweat },
  { name: "Blindfolded", icon: FaMask },
  { name: "Switch Hands", icon: FaHands },
  { name: "Upside Down", icon: BiUpsideDown },
  { name: "Backwards", icon: RiArrowGoBackFill },
] as const;
