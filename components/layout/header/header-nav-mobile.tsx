import Link from "next/link";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { appNavMenuItems, socialNavItems } from "@/config/navigation";

export default function HeaderMobileMenu() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger
          render={
            <Button variant="outline" size="icon" aria-label="Open menu">
              <Menu aria-hidden="true" />
            </Button>
          }
        />
        <SheetContent className="border-border px-6">
          <SheetHeader>
            <SheetTitle className="sr-only">Menu</SheetTitle>
          </SheetHeader>
          <nav aria-label="Main" className="flex-1 py-6">
            <ul className="flex flex-col gap-2">
              {appNavMenuItems.map((item) => (
                <li key={item.href}>
                  <SheetClose
                    nativeButton={false}
                    render={
                      <Link
                        href={item.href}
                        className="text-display-md uppercase transition-colors hover:text-brand focus-visible:text-brand"
                      >
                        {item.label}
                      </Link>
                    }
                  />
                </li>
              ))}
            </ul>
          </nav>
          <SheetFooter>
            <nav aria-labelledby="mobile-social-heading" className="flex flex-col gap-3 pb-6">
              <span id="mobile-social-heading" className="text-body-md text-brand">
                Social
              </span>
              <ul className="flex items-center gap-3">
                {socialNavItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground"
                      >
                        {Icon && <Icon className="size-4" aria-hidden="true" />}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
