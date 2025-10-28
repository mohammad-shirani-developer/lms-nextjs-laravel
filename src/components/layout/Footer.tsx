import Link from "next/link";

const Footer = () => {
  return (
    <div className=" bg-base-100 text-base-content p-8">
      <div className="container mx-auto w-full max-w-screen-xl px-4 md:px-0">
        <div className="flex gap-12 justify-between">
          <div className="flex flex-col max-w-sm">
            <h2 className="font-bold text-3xl text-primary">سایت من</h2>
            <p className="mt-4 text-md font-medium">
              سایت من پلتفرمی برای یادگیری زبان‌های برنامه‌نویسی است. ما با
              ارائه دوره‌های کاربردی و پروژه‌محور، شما را در مسیر تبدیل شدن به
              یک برنامه‌نویس حرفه‌ای همراهی می‌کنیم. از مبتدی تا پیشرفته، با
              کدهالیک آینده‌ی شغلی خود را بسازید.
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-2xl">لینک های سریع</h3>
            <Link className="mt-4 text-md font-medium" href="/">
              دوره ها
            </Link>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-2xl"> ارتباط با ما</h3>
            <p className="mt-4 text-md font-medium">
              <a href="mailto:info@example.com">info@example.com</a>
            </p>
          </div>
        </div>
      </div>
      <div>
        <hr className="my-6 border-base-25" />
      </div>

      <p className="text-center text-sm">
        © 1404 سایت من - تمامی حقوق محفوظ است
      </p>
    </div>
  );
};

export default Footer;
