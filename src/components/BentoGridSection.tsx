import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function BentoGridSection() {
  return (
    <BentoGrid className="max-w-4xl my-20 mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

type SkeletonProps = {
  image: string;
  alt?: string;
};

const Skeleton = ({ image, alt = "" }: SkeletonProps) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img
      src={image}
      alt={alt}
      className="w-full h-full object-cover"
    />
  </div>
);


const items = [
  {
    title: "The Future Of Table Tennis",
    description: "Prince Mohammed bin Abdulrahman bin Nasser Al Saud creates a legacy of excellence in Saudi table tennis.",
    header: <Skeleton image="/images/bento/bento1.jpg" alt="Future of table tennis" />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Partnerships For Progress",
    description: "Prince Mohammed bin Abdulrahman bin Nasser Al Saud forges strong alliances to drive growth and innovation.",
    header: <Skeleton image="/images/bento/bento2.jpg" alt="Future of table tennis" />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art Of Training",
    description: "Prince Mohammed bin Abdulrahman bin Nasser Al Saud Secures world-class training for the youth of the nation.",
    header: <Skeleton image="/images/bento/bento3.jpg" alt="Future of table tennis" />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Prince Mohammed bin Abdulrahman bin Nasser Al Saud drives digital transformation in Saudi table tennis.",
    header: <Skeleton image="/images/bento/bento4.png" alt="Future of table tennis" />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Collaboration & Community",
    description: "Community and Support: Prince Mohammed bin Abdulrahman bin Nasser Al Saud established a dedicated foundation arm to expand sports access across underserved communities and stakeholders.",
    header: <Skeleton image="/images/bento/bento5.jpg" alt="Future of table tennis" />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Award-Winning Team",
    description: "Prince Mohammed bin Abdulrahman bin Nasser Al Saud is building a team that consistently dominates regional and global medal standings.",
    header: <Skeleton image="/images/bento/bento6.jpg" alt="Future of table tennis" />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Learning from leadership: Prince Mohammed bin Abdulrahman bin Nasser Al Saud aspires to follow the path of the nation’s ambitious leaders.",
    header: <Skeleton image="/images/bento/bento7.jpg" alt="Future of table tennis" />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
