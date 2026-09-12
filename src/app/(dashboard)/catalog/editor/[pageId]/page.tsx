import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EditorWorkspace } from '@/features/editor';
import { CATALOG_PAGES, getPageById } from '@/mock/pages';

interface Props {
  params: Promise<{ pageId: string }>;
}

/** Pre-renders every catalog page at build time — the set is known upfront. */
export function generateStaticParams() {
  return CATALOG_PAGES.map((page) => ({ pageId: page.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pageId } = await params;
  const page = getPageById(pageId);

  return {
    title: page ? `Editing ${page.name}` : 'Page not found',
  };
}

export default async function EditorPage({ params }: Props) {
  const { pageId } = await params;
  const page = getPageById(pageId);

  if (!page) notFound();

  return <EditorWorkspace page={page} />;
}
