import { EditorToolbar } from '@/components/layout';

export default async function EditorLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ pageId: string }>;
}) {
  const { pageId } = await params;

  return (
    <>
      <EditorToolbar pageId={pageId} />
      {children}
    </>
  );
}
