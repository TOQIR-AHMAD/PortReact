import { Border, FadeIn, FadeInStagger } from "@/components";
import clsx from "clsx";
import { default as Image } from "next/image";

const experience = [
  {
    title: "Craftoo Solution | WordPress Developer.",
    date: "Jan 2022 - Dec 2023",
    description: [
      "Developed and customized WordPress themes and plugins using PHP, HTML, CSS, and JavaScript for dynamic and responsive websites.",
      "Implemented and maintained front-end user interfaces for WordPress sites, ensuring compatibility with various browsers and devices.",
      "Collaborated with other developers to integrate third-party APIs and services, enhancing website functionality while maintaining codebase consistency.",
    ],
    image: {
      url: "/work/westondev.jpg",
      height: 96,
      width: 96,
      className: "rounded-none",
    },
  },
  {
    title: "INFINITY-UP | Game Developer.",
    date: "Oct 2022 - Dec 2023",
    description: [
      "Developed Android 2D game from scratch and modified existing ones, by adding new screens, transitions and styling.",
      "Developed software by following the Agile Methodology.",
    ],
    image: { url: "/work/zenith.png", height: 34, width: 110, className: "" },
  },
  {
    title: "Custom Software | Backend Developer.",
    date: "Feb - Aug 2024 Present",
    description: [
      "Worked on their E-commrace saas platform by communicating with users and making the appropriate changes to the platform, following the scrum methodology.",
      "Added functionality by creating Strapi headless CMS endpoints.",
      "Made changes to their application using React, Typescript, MaterialUI, CSS, PostgreSQL,PHP,MYSQL,SQL server.",
    ],
    image: { url: "/work/bohrim.jpg", height: 96, width: 96, className: "" },
  },
];

export default function WorkExperience() {
  return (
    <div className="mt-24 text-gray-500 relative z-10 @container">
      <FadeIn
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        viewportProp={{ once: true }}
      >
        <div className="border-l border-gray-500/30 absolute bottom-0 top-0"></div>
      </FadeIn>
      <FadeInStagger>
        {experience.map((item, index) => (
          <WorkRole
            key={index}
            title={item.title}
            date={item.date}
            image={item.image}
          >
            {item.description.map((desc, index) => (
              <li key={index} className="py-1">
                {desc}
              </li>
            ))}
          </WorkRole>
        ))}
      </FadeInStagger>
    </div>
  );
}

function WorkRole({
  children,
  title,
  date,
  image,
}: {
  children: React.ReactNode;
  title: string;
  date?: string;
  image: { url: string; className: string; height: number; width: number };
}) {
  return (
    <FadeIn className="flex group mt-8 first:mt-0 px-3">
      <div className="hidden @lg:flex @lg:flex-col">
        <p className="px-4 pt-8 group-first:pt-0 text-white text-sm leading-7 min-w-[180px] max-w-[180px] @lg:min-w-[195px] @lg:max-w-[195px] @xl:max-w-[215px] @xl:min-w-[215px] flex-none">
          {date}
        </p>
        <div
          className={clsx(
            "flex-none rounded-md overflow-hidden self-center mx-4 mt-auto mb-auto",
            image.className
          )}
        >
          <Image
            src={image.url}
            alt=""
            height={image.height}
            width={image.width}
            style={{
              width: image.width || "auto",
              height: image.height || "auto",
            }}
          />
        </div>
      </div>
      <Border className="pt-8 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
        <div className="flex mb-4">
          <div
            className={clsx(
              "flex-none rounded-md overflow-hidden self-center ml-2 mr-4 @lg:hidden",
              image.className
            )}
          >
            <Image
              src={image.url}
              alt=""
              height={image.height}
              width={image.width}
              style={{
                width: image.width || "auto",
                height: image.height || "auto",
              }}
            />
          </div>
          <div>
            <p className="font-semibold text-work_experience_orange text-lg">
              {title}
            </p>
            <p className="@lg:hidden mt-2 text-white text-sm">{date}</p>
          </div>
        </div>
        <ul className="list-disc pl-10">{children}</ul>
      </Border>
    </FadeIn>
  );
}
