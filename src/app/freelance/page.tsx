import FeatureBlock from "components/feature";
import { Feature } from "components/feature";

const features: Feature[] = [
  {
    title: "Responsive Design",
    text: "Your website will look and work perfectly on every device. I build layouts that adapt seamlessly from mobile to desktop using modern CSS and React breakpoints, so your visitors always get the best experience.",
  },
  {
    title: "Custom CMS",
    text: "Update your content without touching code. I create easy-to-use content management systems tailored to your workflow, so you can manage your site exactly how you want.",
  },
  {
    title: "PWA Integration",
    text: "Turn your website into an installable app with offline support. Your site won’t just be a website, it’ll behave like a modern web app, giving users fast and reliable access anytime, anywhere.",
  },
];

export default function freelance() {
  return (
    <div>
      {/* features I offer block */}
      <div className="flex flex-col w-full justify-center bg-[#f0f0f0] font-sans font-semibold ">
        <h2 className=" mx-1 relative text-center font-normal text-[#0B6B9E] text-5xl mt-8 pb-12 xl:w-2/3 xl:mx-auto motion-preset-slide-down-lg motion-duration-1200 ease-out">
          Boost your online presence
          <svg
            className="absolute left-1/2 -bottom-2 w-full max-w-xs -translate-x-1/2 motion-preset-slide-down-lg motion-duration-1200 motion-delay-500 ease-out "
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path
              d="M0 5 Q25 0 50 5 T100 5"
              stroke="#F59E0B"
              strokeWidth="1"
              fill="transparent"
            />
          </svg>
        </h2>

        {features.map((feature, i) => (
          <div
            key={i}
            className={`flex  xl:w-[45%] xl:mx-auto mt-16 mx-3 pb-8 ${
              i % 2 === 0 ? "justify-start" : "justify-end"
            } xl:w-[35%]`}
          >
            {/* determine direction of slide in based on key */}
            <FeatureBlock
              feature={feature}
              direction={i % 2 === 0 ? "left" : "right"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
