export default function Footer(){
    return (
        <div>
            <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white py-8">
        <div className="container mx-auto px-4 ">
            <div className="flex flex-col items-center justify-center gap-3 text-center">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-2">
            <iframe id='Iframe1' title="D&B Registered Seal" src='https://dunsregistered.dnb.com/SealAuthentication.aspx?Cid=1' width='114px' height='97px' frameborder='0' scrolling='no' allowtransparency='true' ></iframe>
          </div>
          <p className="text-white/80">&copy; 2024 Impacgo Solutions. All rights reserved.</p>
            </div>
        </div>
      </footer>
        </div>
    )
}