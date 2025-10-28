"use client";

import { useParams } from "next/navigation";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useCourseComments } from "../../_api/get-comments";

import { Button } from "@/components/ui/button";
import { Comment } from "@/components/ui/comment";
import { Comment as CommentType } from "@/types/comment.interface";

const CourseComments = () => {
  const { ref, inView } = useInView({});
  const { slug } = useParams();

  const {
    data: comments,
    error,
    isFetching,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useCourseComments({
    params: {
      slug: slug as string,
      page: 1,
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (error) {
    return (
      <>
        {/* <Alert variant="error">خطا در برقراری ارتباط با سرور</Alert> */}
        <div className="text-center mt-3">
          <Button
            variant="neutral"
            className="font-semibold"
            isOutline={true}
            shape="wide"
            onClick={() => refetch()}
          >
            تلاش مجدد
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      {comments?.pages.map((page, index) => (
        <Fragment key={`comment-page-${index}`}>
          {page.data.map((comment: CommentType) => (
            <Comment key={comment.id} {...comment} isResponse={false} />
          ))}
        </Fragment>
      ))}
      {(isFetching || hasNextPage) && <div ref={ref} />}
    </>
  );
};

export default CourseComments;
