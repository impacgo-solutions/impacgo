import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { erpModuleUrl } from "../../config/erp";

// Old /erp/:slug module pages now live on the Impacgo ERP site — send any
// existing link or bookmark straight to that module's tab there. replace()
// keeps the old URL out of the back-button history.
export default function ERPModuleRedirect() {
  const { slug } = useParams();
  useEffect(() => {
    window.location.replace(erpModuleUrl(slug));
  }, [slug]);
  return null;
}
