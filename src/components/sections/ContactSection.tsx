import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/Baodng2402", label: "GitHub", icon: Github },
  {
    href: "https://www.linkedin.com/in/baodngworkstation",
    label: "LinkedIn",
    icon: Linkedin,
  },
  { href: "https://www.facebook.com/gb.2402", label: "Facebook", icon: Facebook },
  { href: "mailto:baodngworkstation@gmail.com", label: "Email", icon: Mail },
] as const;

const ContactSection = () => {
  return (
    <Section id="contact" variant="elevated" className="!pb-16 sm:!pb-24">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeader
          label="Contact"
          title="Let's connect"
          description="Open to frontend roles and collaborations. Drop a message — I'll get back to you."
          className="mx-auto text-center [&_p]:mx-auto"
        />

        <a
          href="mailto:baodngworkstation@gmail.com"
          className="contact-reveal mt-6 inline-block max-w-full break-all px-1 font-mono text-sm text-[var(--color-accent)] underline underline-offset-4 transition-colors hover:text-[var(--color-accent-hover)] sm:mt-8 sm:text-base md:text-lg"
        >
          baodngworkstation@gmail.com
        </a>

        <div className="contact-reveal mt-6 flex flex-wrap justify-center gap-2.5 sm:mt-8 sm:gap-3">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={label}
              className="icon-btn !p-2.5 sm:!p-3"
            >
              <Icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" aria-hidden />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
