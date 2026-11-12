/*
 * Every "Book a free demo" / "Talk to our team" link in the ERP site points to
 * CONTACT_HREF. <ContactModal> (mounted once in app/layout.tsx) intercepts
 * clicks on any <a href="#contact"> and opens the demo request form as a popup
 * on the current page, so visitors never leave /erp-suite. A direct link to
 * /erp-suite#contact opens it too.
 */
export const CONTACT_HREF = "#contact";

/* Impacgo contact details, shown under every demo form and in the footer. */
export const CONTACT_EMAIL = "info@impacgo.com";
export const CONTACT_PHONE = "+91 99664 77499";
export const CONTACT_PHONE_TEL = "tel:+919966477499";
