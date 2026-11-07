import { Container } from "@/components/ui";

import FooterForm from "./footer-form";
import FooterLegal from "./footer-legal";
import FooterNavigation from "./footer-navigation";

export default function Footer() {
  return (
    <footer className="py-12 lg:py-16">
      <Container className="flex flex-col gap-8 md:gap-12">
        <div className="flex flex-col gap-8 md:gap-12 lg:flex-row lg:items-start lg:gap-8">
          <FooterNavigation className="lg:w-3/4" />
          <FooterForm />
        </div>
        <FooterLegal />
      </Container>
    </footer>
  );
}
