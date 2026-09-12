import { SECTION_REGISTRY } from './registry';
import type { Section } from './types';

/**
 * Renders one section by looking its component up in the registry.
 *
 * The cast is contained here: TypeScript can't prove the union member and its
 * registry entry line up across a generic boundary, but `satisfies Registry`
 * guarantees they do.
 */
export function SectionRenderer({ section }: { section: Section }) {
  const entry = SECTION_REGISTRY[section.type];
  const Component = entry.canvas as React.ComponentType<Section['data']>;

  return <Component {...section.data} />;
}
