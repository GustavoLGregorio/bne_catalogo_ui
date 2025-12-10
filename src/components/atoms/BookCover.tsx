import Image from "next/image";

export default function BookCover() {
  return (
    <div className="col-start-1 aspect-2/3 object-cover">
      <Image
        className="rounded-s-lg"
        src={require("@/assets/img/the_fractalist.webp")}
        alt=""
      />
    </div>
  );
}
