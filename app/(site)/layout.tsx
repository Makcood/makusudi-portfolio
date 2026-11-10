import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
