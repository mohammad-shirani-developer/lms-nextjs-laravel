import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="container relative isolate px-6 pt-10 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-10"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>

      <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56 text-center">
        <h1 className="text-2xl sm:text-4xl  xl:text-6xl font-bold tracking-tight text-white">
          آموزش برنامه‌نویسی حرفه‌ای و کاربردی در سایت
        </h1>
        <p className="mt-10 text-md font-normal sm:text-lg sm:font-medium text-base-content ">
          سایت من، پلتفرم جامع آموزش برنامه‌نویسی، با ارائه دوره‌های تخصصی و
          به‌روز، مسیر یادگیری شما را هموار می‌کند. از صفر تا صد برنامه‌نویسی را
          با آموزش‌های کاربردی، پروژه‌های واقعی و پشتیبانی مستمر بیاموزید و به
          یک برنامه‌نویس حرفه‌ای تبدیل شوید.
        </p>
        <div className="flex flex-col md:flex-row md:justify-center mt-10 gap-6">
          <Button variant="primary" className="font-medium" animatedIcon={true}>
            شروع یادگیری
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 font-medium mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </Button>
          <Button variant="neutral" isOutline className="font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 font-medium mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            مشاهده دوره‌ها
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
