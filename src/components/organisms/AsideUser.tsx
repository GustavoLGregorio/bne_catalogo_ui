import Logo from "../molecules/Logo";
import { emitter } from "@/tools/eventBus";
import CustomIcon from "../atoms/CustomIcon";
import { faBookmark, faHouse, faX } from "@fortawesome/free-solid-svg-icons";
import Footer from "../atoms/Footer";

export default function AsideUser() {
  return (
    <aside className={`fixed top-0 -right-full h-full w-full`}>
      <nav className="bg-nav-background absolute z-50 h-full w-2/3 px-3"></nav>
      <button
        className="bg-nav-background-layer h-full w-full cursor-pointer"
        type="button"
        onClick={() => emitter.emit("toggleUser")}
      ></button>
    </aside>
  );
}
