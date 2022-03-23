import { forwardRef } from "react";

const Contact = forwardRef<HTMLElement>((props, ref) => (
  <section ref={ref}>
    <h1>Hubungi Saya</h1>
  </section>
));
Contact.displayName = "Contact";

export default Contact;
