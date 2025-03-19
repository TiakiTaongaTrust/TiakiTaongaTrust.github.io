import { Subpagehero } from "../components/sub-page-hero/SubPageHero";

interface LibraryLayoutProps {
  children: React.ReactNode;
}
export default function LibraryLayout({
  // Now using the title prop correctly
  children,
}: LibraryLayoutProps) {
  return (
    <>
      {/* This ensures Subpagehero is always displayed */}
      <Subpagehero title="Wai 262 Library" herobg="community-bg" />
      <div className="mt-32">
        <div className="container">{children}</div>
      </div>
    </>
  );
}
