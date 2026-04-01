import Contact from "../components/Contact";
import { contactMethods, primaryEmailHref, resumePdf } from "../lib/siteContent";

function ContactPage() {
  return (
    <div className="pt-24 sm:pt-28">
      <Contact
        contactMethods={contactMethods}
        resumeUrl={resumePdf}
        primaryEmailHref={primaryEmailHref}
      />
    </div>
  );
}

export default ContactPage;
