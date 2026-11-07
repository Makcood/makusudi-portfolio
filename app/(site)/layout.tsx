import Footer from "@/components/layout/footer/footer";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
