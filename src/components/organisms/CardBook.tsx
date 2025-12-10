import BookCover from "../atoms/BookCover";
import BookPage from "../molecules/BookPage";
import CustomIcon from "../atoms/CustomIcon";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function CardBook() {
  return (
    <div className="">
      <div className="book-shadow bg-tint-light relative grid grid-cols-2 rounded-lg">
        <BookCover />
        <BookPage />
      </div>
    </div>
  );
}
