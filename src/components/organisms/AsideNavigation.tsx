import Logo from "../molecules/Logo";
import { emitter } from "@/tools/eventBus";
import CustomIcon from "../atoms/CustomIcon";
import { faBookmark, faHouse, faX } from "@fortawesome/free-solid-svg-icons";
import Footer from "../atoms/Footer";

export default function AsideNavigation() {
  return (
    <nav className="bg-nav-background absolute z-50 h-full w-2/3 px-3">
      <div className="mb-3 flex flex-row justify-between py-3">
        <h1>
          <Logo />
        </h1>
        <button
          className="aspect-square w-5 cursor-pointer"
          type="button"
          onClick={() => emitter.emit("toggleNavigation")}
        >
          <CustomIcon icon={faX} hasRounding={false} hasBackground={false} />
        </button>
      </div>
      <ul className="font-inter flex flex-col gap-1 font-medium tracking-wide">
        <li className="w-full">
          <a
            className="hover:bg-nav-tint flex h-full w-full flex-row items-center rounded-lg py-0.5 hover:font-bold"
            href="#"
          >
            <span className="ms-2 inline-block aspect-square w-[22px]">
              <CustomIcon
                icon={faHouse}
                hasRounding={false}
                hasBackground={false}
                removePadding={true}
              />
            </span>
            <span className="ms-2">Início</span>
          </a>
        </li>
        <li className="w-full">
          <a
            className="hover:bg-nav-tint flex h-full w-full flex-row items-center rounded-lg py-0.5 hover:font-bold"
            href="#"
          >
            <span className="ms-2 inline-block aspect-square w-[22px]">
              <CustomIcon
                icon={faBookmark}
                hasRounding={false}
                hasBackground={false}
                removePadding={true}
              />
            </span>
            <span className="ms-2">Seguindo</span>
          </a>
        </li>
        <li className="w-full">
          <a
            className="hover:bg-nav-tint flex h-full w-full flex-row items-center rounded-lg py-0.5 hover:font-bold"
            href="#"
          >
            <span className="ms-2">Lendo</span>
          </a>
        </li>
        <li className="w-full">
          <a
            className="hover:bg-nav-tint flex h-full w-full flex-row items-center rounded-lg py-0.5 hover:font-bold"
            href="#"
          >
            <span className="ms-2">Biblioteca</span>
          </a>
        </li>
      </ul>
      <Footer />
    </nav>
  );
}
