import { classNames } from "@/utils/classNames";
import Image from "next/image";

const featuredTestimonial = {
  body: "با شرکت در دوره‌ی معماری پروژه‌های لارج‌اسکیل، درک عمیق‌تری از ساختار پروژه‌ها به دست میاد. طوری که تمام دانش قبلی که داری حالا به شکلی منسجم و کاربردی در ذهن جمع‌بندی می‌شوند. مباحث این دوره کاملاً با نیازهای بازار کار هم‌راستاست و پس از گذراندن آن، کد های شما را که ببینند، متوجه ساختارمند بودن شیوه‌ی کدنویسی‌ تان می‌شوند.",
  author: {
    name: "نسرین محمدی",
    imageUrl: "/images/t/1.webp",
  },
};

const testimonials = [
  [
    [
      {
        body: "وقتی دنبال یک مرجع با کیفیت و قابل اعتماد برای یادگیری برنامه‌نویسی و توسعه نرم‌افزار هستی، به سراغ این دوره بیا و کیفیت محتوای آن را از نزدیک تجربه کنید.",
        author: {
          name: "امیر قاضی زاده",
          imageUrl: "/images/t/2.webp",
        },
      },
      {
        body: "به نظر من  یه کار خیلی بزرگ و اجتماعی انجام می‌ده. این‌جوری نیست که فقط یه سری افراد خاص از این آموزش‌ها بهره‌مند بشن، بلکه همه می‌تونن ازش استفاده کنن و یاد بگیرن.",
        author: {
          name: "امیر عباس قائم پناه",
          imageUrl: "/images/t/3.webp",
        },
      },
      {
        body: "دوره‌های آموزشی سایت واقعاً عالی و کاربردی هستند، به‌خصوص برای کسانی که می‌خواهند مفاهیم را به‌صورت پیشرفته دنبال کنند.  قطعاً یکی از بهترین تجربیات آموزشی من بود و به همه کسانی که به‌دنبال یادگیری حرفه‌ای و اصولی هستند، توصیه می‌کنم.",
        author: {
          name: "سمانه سرلک",
          imageUrl: "/images/t/4.webp",
        },
      },
    ],
    [
      {
        body: "به عنوان یک پروداکت منیجر، دوره فرانت‌اند سایت به من کمک کرد زبان مشترکی با تیم فنی پیدا کنم و تصمیمات محصولی دقیق‌تری بگیرم. آموزش کاربردی، پروژه‌های عملی و منتورینگ قوی باعث شد یادگیری‌ام سریع و مؤثر باشد. این دوره را به همه توصیه می‌کنم.",
        author: {
          name: "پوریا نیک‌روش",
          imageUrl: "/images/t/5.webp",
        },
      },
      {
        body: "این دوره آموزشی واقعاً عالی بود و به من کمک کرد تا مهارت‌های برنامه‌نویسی‌ام را به سطح بالاتری ببرم. مطالب به صورت جامع و کاربردی ارائه شده بودند و من توانستم با پروژه‌های عملی، دانش خود را تقویت کنم.",
        author: {
          name: "محمد رضایی",
          imageUrl: "/images/t/6.webp",
        },
      },
    ],
  ],
  [
    [
      {
        body: "آموزش‌های  دقیقاً همون چیزیه که همیشه دنبالش بودم: ساده، کاربردی و بدون حاشیه. یاد گرفتن باهاش واقعاً لذت‌بخشه، چون حس می‌کنی یکی داره رفیق‌طور کمکت می‌کنه.",
        author: {
          name: "احمد موسوی",
          imageUrl: "/images/t/7.webp",
        },
      },
      {
        body: "به واسطه فیلد کاری متفاوت، من تجربه استفاده از دوره ها  رو نداشتم ولی هر کدوم از بچه های تیم‌ فنی‌مون که یک دوره از مجموعه تهیه کرده،‌ هم رضایت بالایی داشتند هم دوره ها براشون خیلی کاربردی بوده. ",
        author: {
          name: "مهدی زارعی",
          imageUrl: "/images/t/8.webp",
        },
      },
    ],
    [
      {
        body: "شاید تنها ترین مجموعه در ایران باشد، که آموزش های کاربردی، بروز و پروژه محور متناسب با نیاز بازار داخلی و جهانی ارائه میده! دمتون گرم",
        author: {
          name: "وحید زمانی",
          imageUrl: "/images/t/9.webp",
        },
      },
      {
        body: "این دوره‌ها واقعاً عالی هستند! من به عنوان یک توسعه‌دهنده وب، همیشه دنبال منابع آموزشی خوب و کاربردی بودم و این دوره‌ها دقیقاً همون چیزی هستند که نیاز داشتم. مطالب به صورت جامع و با مثال‌های عملی ارائه شده‌اند که باعث می‌شود یادگیری بسیار آسان‌تر شود.",
        author: {
          name: "ساناز احمدی",
          imageUrl: "/images/t/10.png",
        },
      },
      {
        body: "من از شرکت در این دوره‌ها واقعاً راضی هستم. مطالب به صورت جامع و کاربردی ارائه شده‌اند و من توانستم با پروژه‌های عملی، دانش خود را تقویت کنم. همچنین، پشتیبانی و پاسخگویی تیم آموزشی بسیار عالی بود که باعث شد تجربه یادگیری‌ام بسیار مثبت باشد.",
        author: {
          name: "علی بهمنی",
          imageUrl: "/images/t/11.png",
        },
      },
    ],
  ],
];

const Testimonials = () => {
  return (
    <div className="relative isolate pt-24 pb-32 sm:pt-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="ml-[max(50%,38rem)] aspect-1313/771 w-328.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="-ml-88 aspect-1313/771 w-328.25 flex-none origin-top-right rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] xl:mr-[calc(50%-12rem)] xl:ml-0"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-400 mb-5">
            تجربه‌های موفق دانشجویان
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            تجربه شرکت‌کنندگان دوره‌ها و همکاران
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-100 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="rounded-2xl bg-gray-800/75 ring-1 ring-white/10 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold tracking-tight text-white sm:p-12 sm:text-xl/8">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-white/10 px-6 py-4 sm:flex-nowrap">
              <Image
                alt=""
                width={80}
                height={80}
                src={featuredTestimonial.author.imageUrl}
                className="size-16 flex-none rounded-full bg-gray-700"
              />
              <div className="flex-auto">
                <div className="font-semibold text-white">
                  {featuredTestimonial.author.name}
                </div>
              </div>
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8"
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.name}
                      className="rounded-2xl bg-gray-800/75 p-6 ring-1 ring-white/10"
                    >
                      <blockquote className="text-white">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <Image
                          width={80}
                          height={80}
                          alt=""
                          src={testimonial.author.imageUrl}
                          className="size-10 rounded-full bg-gray-700"
                        />
                        <div>
                          <div className="font-semibold text-white">
                            {testimonial.author.name}
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
