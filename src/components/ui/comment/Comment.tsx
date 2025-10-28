import { API_URL } from "@/config/global";
import { Avatar } from "../avatar";
import { Rating } from "../rating";
import { CommentProps } from "./comment.types";

// یک کامپوننت برای نمایش هر کامنت
const Comment = ({
  userId,
  fullName,
  date,
  commentText,
  score,
  isResponse,
  replies,
}: CommentProps) => {
  const srcPath = userId ? `${API_URL}/picture/${userId}` : undefined;

  const bgColor = isResponse
    ? "bg-info text-white"
    : "bg-gray-200 text-gray-900";
  const justify = isResponse ? "justify-start" : "justify-end";
  const avatarMargin = isResponse ? "ml-4" : "mr-4";

  return (
    <div className={`flex w-full ${justify} mb-4`} dir="rtl">
      <div className={`flex w-full max-w-3xl ${bgColor} rounded-lg p-4 shadow`}>
        <Avatar
          src={srcPath}
          size="sm"
          className={`flex-shrink-0 ${avatarMargin}`}
        />
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold">{fullName}</span>
            <time className="text-xs opacity-50">{date}</time>
          </div>
          <p className="break-words">{commentText}</p>
          {score != null && score > 0 && (
            <div className="mt-2">
              <Rating rate={score} size="xs" variant="accent" />
            </div>
          )}

          {/* نمایش پاسخ‌ها */}
          {replies && replies.length > 0 && (
            <div className="mt-4 pl-6 border-l-2 border-gray-300">
              {replies.map((reply) => (
                <Comment key={reply.id} {...reply} isResponse={true} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { Comment };
