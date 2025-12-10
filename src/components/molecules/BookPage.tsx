export default function BookPage() {
  return (
    <div className="bg-foreground text-text-dark flex flex-col justify-around rounded-e-lg px-4 py-2">
      <h3 className="font-playfair border-b-text-dark border-b pb-1 text-[14px] font-black">
        The Fractalist
      </h3>
      <p className="font-playfair indent-2 text-[11px] font-semibold">
        In The Fractalist, Benoit Mandelbrot recounts his life and the rise of
        fractal geometry, showing how irregular patterns unveil hidden order
        across nature, markets, art, and modern science.
      </p>
      <div className="flex flex-col gap-1.5">
        <p className="font-playfair text-[11px] leading-2.5 font-extrabold">
          ¹. Benoit Mandelbrot
        </p>
        <p className="font-playfair truncate text-[11px] leading-2.5 font-extrabold">
          ². Tecnologia, Ciência, Matemática
        </p>
      </div>
      <span className="font-playfair flex w-full justify-end text-[10px] font-bold">
        p. 248
      </span>
    </div>
  );
}
