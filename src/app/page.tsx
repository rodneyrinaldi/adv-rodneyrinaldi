import Section from "./components/layout/Section";
import SectionHeader from "./components/sections/SectionHeader";
import SectionMain from "./components/sections/SectionMain";
import SectionFocus from "./components/sections/SectionFocus"

export default function Home() {
  return (
    <>
      <Section>
        <SectionHeader />
      </Section>
      <Section>
        <SectionMain />
      </Section>
      <Section>
        <SectionFocus />
      </Section>
    </>
  );
}
