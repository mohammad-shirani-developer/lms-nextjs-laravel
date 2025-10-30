import { Avatar } from "../avatar";
import { Rating } from "../rating";
import { CommentProps } from "./comment.types";

const Comment = ({
  userId,
  fullName,
  date,
  commentText,
  score,
  isResponse,
  replies,
  avatarUrl,
}: CommentProps) => {
  const srcPath = userId ? avatarUrl : undefined;

  // رنگ پس‌زمینه بسته به نوع کامنت (کاربر یا پاسخ مدرس)
  const bgColor = isResponse
    ? "bg-primary/20 text-primary-foreground border border-primary/30"
    : "bg-base-200 text-base-content border border-base-300";

  return (
    <div className="flex w-full justify-end mb-5" dir="rtl">
      <div
        className={`flex items-start w-full max-w-3xl ${bgColor} rounded-2xl p-4 shadow-md border transition-all duration-200 hover:border-primary/50 gap-4`}
      >
        {/* آواتار همیشه در سمت راست */}
        <Avatar src={srcPath} size="sm" className="shrink-0 ml-3" />

        {/* محتوای نظر */}
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-base">{fullName}</span>
            <time className="text-xs opacity-50">{date}</time>
          </div>

          <p className="text-sm leading-6">{commentText}</p>

          {score != null && score > 0 && (
            <div className="mt-2">
              <Rating rate={score} size="xs" variant="accent" />
            </div>
          )}

          {/* پاسخ‌ها */}
          {replies && replies.length > 0 && (
            <div className="mt-4 pr-6 border-r-2 border-base-300/30">
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
