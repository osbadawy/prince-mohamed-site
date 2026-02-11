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
    title: "The Future of Table tennis",
    description: "Prince Mohamed Al Saud creates a legacy of excellence in Saudi table tennis.",
    header: <Skeleton image="/images/bento/bento1.jpg" alt="Future of table tennis" />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Partnerships for Progress",
    description: "Prince Mohamed Al Saud forges strong alliances to drive growth and innovation.",
    header: <Skeleton image="/images/bento/bento2.jpg" alt="Future of table tennis" />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of training",
    description: "Prince Mohamed Al Saud Secures world-class training for the youth of the nation.",
    header: <Skeleton image="/images/bento/bento3.jpg" alt="Future of table tennis" />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Prince Mohamed Al Saud drives digital transformation in Saudi table tennis.",
    header: <Skeleton image="/images/bento/bento4.jpg" alt="Future of table tennis" />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Collaboration and Community",
    description: "Prince Mohamed Al Saud builds an ecosystem of collaboration and community",
    header: <Skeleton image="/images/bento/bento5.jpg" alt="Future of table tennis" />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Award-Winning Team",
    description: "Prince Mohamed Al Saud leads an award-winning team.",
    header: <Skeleton image="/images/bento/bento6.jpg" alt="Future of table tennis" />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Learn more about Prince Mohamed Al Saud's adventurous spirit and his journey to success.",
    header: <Skeleton image="/images/bento/bento7.jpg" alt="Future of table tennis" />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
