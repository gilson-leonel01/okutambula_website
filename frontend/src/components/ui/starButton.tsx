import { useState } from "react";
import { Star, StarOff } from "lucide-react";

export default function StarButton() {
    const [isStarred, setIsStarred] = useState(false);

    const toggleStar = () => {
        setIsStarred(!isStarred);
    };

    return (
        <button
            onClick={toggleStar}
            className={`mt-2 flex items-center gap-1 hover:cursor-pointer ${
                isStarred ? "text-amber-500" : "text-zinc-500"
            } hover:text-amber-500 transition-colors duration-200`}
        >
            {isStarred ? <Star /> : <StarOff />}
        </button>
    );
}