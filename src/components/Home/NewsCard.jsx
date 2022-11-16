import Image from "next/image";
import React from "react";

const TodoCard = (props) => {
  const { title, urlToImage } = props;

  const imageSrc = urlToImage || "/images/profile.jpg";

  return (
    <div className="mb-4 p-2 shadow bg-white flex gap-4 border rounded-xl">
      <div className="min-w-[150px] min-h-[150px] max-w-[150px] max-h-[150px]">
        <Image
          className="w-full h-full object-cover"
          src={imageSrc}
          alt={title}
          width={150}
          height={150}
          onError={() => "/images/profile.jpg"}
        />
      </div>

      <h3 className="text-2xl font-semibold">{title}</h3>
    </div>
  );
};

export default TodoCard;
