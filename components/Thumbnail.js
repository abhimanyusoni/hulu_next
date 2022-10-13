import Image from "next/image";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div ref={ref} className="group cursor-pointer p-2">
      <Image
        src={`${BASE_URL}${result.backdrop_path}`}
        layout="responsive"
        width={1920}
        height={1080}
        className="group-hover:scale-110 transition-all duration-300"
      />
      <div className="py-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="text-xl font-bold mt-1">
          {result.title || result.original_name}
        </h2>
      </div>
    </div>
  );
});

export default Thumbnail;
