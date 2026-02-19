"use client";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";

export function MohamedBio() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {princeMohamedSections.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-xl mb-4">
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}
// /data/princeMohamedSections.ts

export const princeMohamedSections = [
  {
    title: "National Leadership in Table Tennis",
    badge: "STTF President",
    image: "/images/mohamedBio/bento5.jpg",
    description: (
      <>
        <p>
          Since December 2024, Prince Mohamed bin Abdulrahman bin Nasser Al Saud
          has served as President of the Saudi Table Tennis Federation, guiding
          the sport through a period of accelerated development and renewed
          ambition. His leadership has emphasized modern governance, clear
          performance targets, and a professional operating model that supports
          athletes, clubs, and stakeholders across the Kingdom.
        </p>
        <p>
          During this phase, the Federation has strengthened national pathways
          for talent—expanding youth participation, improving high-performance
          preparation, and raising competitive standards through more structured
          calendars, enhanced event delivery, and a stronger domestic product.
          These efforts have helped elevate the visibility of Saudi table tennis
          and create momentum around participation and achievement.
        </p>
        <p>
          With a focus on long-term sustainability, he continues to prioritize
          institutional excellence, athlete-centric development, and the
          positioning of Saudi Arabia as a credible host and contributor within
          the regional and international table tennis landscape.
        </p>
      </>
    ),
    content: null,
  },
  {
    title: "Regional & International Influence",
    badge: "ITTF • WATTF • ATTU",
    image: "/images/mohamedBio/ITTF.png",
    description: (
      <>
        <p>
          Beyond his national presidency, Prince Mohamed plays a strategic role
          in shaping table tennis governance at both regional and international
          levels. Since July 2025, he has served as President of the ITTF
          Advisory Council, contributing to forward-looking dialogue on the
          sport’s global development, institutional priorities, and the evolving
          needs of federations and athletes worldwide.
        </p>
        <p>
          In December 2025, he assumed the presidency of the West Asia Table
          Tennis Federation, reinforcing cooperation across West Asian
          federations and supporting initiatives that elevate competition,
          officiating standards, knowledge-sharing, and event readiness across
          the region.
        </p>
        <p>
          As a Council Member of the Asian Table Tennis Union since December
          2024, he also participates in broader continental decision-making,
          aligning regional programs with international best practice and
          contributing to stronger pathways for events, talent, and federation
          performance across Asia.
        </p>
      </>
    ),
    content: null,
  },
  {
    title: "Strategic Government & Digital Leadership Background",
    badge: "Gov • Digital • Comms",
    image: "/images/mohamedBio/hero15.jpg",
    description: (
      <>
        <p>
          Prince Mohamed brings a substantial public-sector leadership
          background that bridges communications, digital transformation, and
          national program execution. His experience includes roles within the
          Ministry of Communications and Information Technology—first as Digital
          Content Section Manager and later as Digital Impact Manager—where he
          contributed to modern public engagement and outcome-driven digital
          initiatives.
        </p>
        <p>
          From June 2019 to October 2022, he served as Public Relations Section
          Manager at the State Security Presidency, building deep expertise in
          institutional communications, stakeholder coordination, and
          high-accountability operations. He later joined the Quality of Life
          Program as Chief Marketing Specialist (May 2023 – April 2025), helping
          drive public-facing initiatives aligned with national transformation.
        </p>
        <p>
          In 2025, he served as Program Manager at the Saudi Commission for
          Health Specialties, further reinforcing his operational leadership and
          program governance capabilities—experience that translates directly
          into modern sports administration, commercial development, and
          federation-wide execution.
        </p>
      </>
    ),
    content: null,
  },
  {
    title: "A Visionary President Redefining Saudi Table Tennis",
    badge: "Vision 2030",
    image: "/images/mohamedBio/hero5.jpg",
    description: (
      <>
        <p>
          The common thread across Prince Mohamed’s leadership is a clear,
          future-focused vision: building an ecosystem where sport is a driver
          of national pride, health, opportunity, and community. By combining
          institutional rigor with modern communication, commercial awareness,
          and international collaboration, he has strengthened the foundations
          required for sustainable growth in Saudi table tennis.
        </p>
        <p>
          His approach balances high performance with participation—developing
          talent pipelines while widening access through structured events,
          stronger stakeholder alignment, and elevated presentation of the sport
          domestically and regionally. This creates a platform where athletes,
          clubs, and fans can all play a role in the sport’s progress.
        </p>
        <p>
          Ultimately, he is a visionary president who has redefined the Saudi
          Table Tennis Federation—setting higher standards, expanding the
          Federation’s reach, and positioning Saudi Arabia as a rising force in
          the global table tennis community.
        </p>
      </>
    ),
    content: null,
  },
] as const;