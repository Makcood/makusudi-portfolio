import { Container } from "@/components/ui";

import FooterNavigation from "./footer-navigation";

export default function Footer() {
  return (
    <footer className="min-h-dvh">
      <Container className="space-x-8">
        <div className="flex flex-col gap-8 md:flex-row">
          <FooterNavigation />
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:justify-between"></div>
      </Container>
    </footer>
  );
}
