import { Container } from "@/components/ui";

import FooterForm from "./footer-form";
import FooterNavigation from "./footer-navigation";
import FooterSocial from "./footer-social";

export default function Footer() {
  return (
    <footer className="bg-popover py-12 md:pt-16 lg:pt-20">
      <Container className="flex flex-col gap-8 md:gap-12 lg:gap-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <FooterForm className="lg:col-span-4" />
          <FooterNavigation className="lg:col-span-8" />
        </div>
        <FooterSocial />
      </Container>
    </footer>
  );
}
