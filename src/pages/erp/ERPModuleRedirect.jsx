import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { erpModulePageUrl } from "../../config/erp";

// Old /erp/:slug module pages now live on the Impacgo ERP site — send any
// existing link or bookmark straight to that module's own page there. replace()
// keeps the old URL out of the back-button history.
export default function ERPModuleRedirect() {
  const { slug } = useParams();
  useEffect(() => {
    window.location.replace(erpModulePageUrl(slug));
  }, [slug]);
  return null;
}
