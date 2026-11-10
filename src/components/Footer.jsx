import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <div>
            <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white py-8">
        <div className="container mx-auto px-4 ">
            <div className="flex flex-col items-center justify-center gap-3 text-center">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-2">
            <iframe id='Iframe1' title="D&B Registered Seal" src='https://dunsregistered.dnb.com/SealAuthentication.aspx?Cid=1' width='114px' height='97px' frameBorder='0' scrolling='no'></iframe>
          </div>
          <p className="text-white/80">&copy; {new Date().getFullYear()} Impacgo Solutions. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-white/50">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span aria-hidden="true">&middot;</span>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
            </div>
        </div>
      </footer>
        </div>
    )
}
