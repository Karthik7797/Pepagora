import { SiteFooter, SiteHeader } from './chrome';
import { SectionRenderer } from './SectionRenderer';
import s from './CatalogSite.module.scss';
import type { Section } from './types';

interface Props {
  sections: Section[];
  companyName?: string;
  /** Wraps each section so the editor can attach hover behaviour. */
  renderSection?: (section: Section, node: React.ReactNode) => React.ReactNode;
}

/** The rendered catalog website — header, visible sections, footer. */
export function CatalogSite({ sections, companyName, renderSection }: Props) {
  return (
    <div className={s.site}>
      <SiteHeader companyName={companyName} />

      {sections
        .filter((section) => section.visible)
        .map((section) => {
          const node = <SectionRenderer section={section} />;
          return (
            <div key={section.id}>
              {renderSection ? renderSection(section, node) : node}
            </div>
          );
        })}

      <SiteFooter />
    </div>
  );
}
