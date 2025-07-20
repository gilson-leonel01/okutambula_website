import { useState } from "react";

export default function LikeButton() {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <button
            onClick={toggleLike}
            className={`mt-2 flex items-center gap-1 hover:cursor-pointer ${
            className={`mt-2 flex items-center gap-1 ${
                liked ? "text-pink-700" : "text-gray-500"
            } hover:text-pink-700`}
        >
            <span>♥</span> {liked ? "Gostei" : "Gosto"}
        </button>
    );
}