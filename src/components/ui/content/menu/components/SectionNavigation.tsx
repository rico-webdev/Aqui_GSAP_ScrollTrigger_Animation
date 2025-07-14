import { Menu } from "@/types/global";
import AnimatedButton from "@/components/ui/common/btns/AnimatedButton";

interface SectionNavigationProps {
  sections: Menu[];
  isActiveSection: (index: number) => boolean;
  onSectionChange: (index: number) => void;
}

const SectionNavigation = ({
  sections,
  isActiveSection,
  onSectionChange,
}: SectionNavigationProps) => {
  return (
    <ul className="row-center gap-x-15 gap-y-3 flex-wrap">
      {sections.map((section, i) => (
        <li key={section.id}>
          <AnimatedButton
            isActive={isActiveSection(i)}
            perspective={18}
            fontSize="text-5xl"
            className=""
            onClick={() => onSectionChange(i)}>
            {section.name}
          </AnimatedButton>
        </li>
      ))}
    </ul>
  );
};

export default SectionNavigation;
