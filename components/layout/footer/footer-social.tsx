import { socialNavItems } from "@/config/navigation";
import { site } from "@/config/site";

async function Copyright() {
  "use cache";
  return (
    <small className="text-body-sm text-muted-foreground">
      © {new Date().getFullYear()} {site.author}
    </small>
  );
}

export default function FooterSocial() {
  return (
    <div className="flex flex-col items-center gap-5 border-t border-border pt-8 md:flex-row md:justify-between md:pt-6 lg:pt-8">
      <Copyright />
      <nav aria-label="Social">
        <ul className="flex flex-row gap-4 md:items-center">
          {socialNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground"
                >
                  {Icon && <Icon className="size-5" aria-hidden="true" />}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
