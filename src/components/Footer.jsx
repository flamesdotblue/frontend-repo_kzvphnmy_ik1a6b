import { Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-flex items-center gap-2">
              <div className="h-7 w-7 rounded-md bg-gradient-to-br from-fuchsia-500 via-purple-500 to-sky-500" />
              <span className="font-semibold tracking-tight text-white">Connectiv</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-zinc-400">Find your perfect collaborator and ship faster. Built by students, for students.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#how" className="hover:text-white">How it works</a></li>
              <li><a href="#waitlist" className="hover:text-white">Waitlist</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Get updates</h4>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thanks! You are subscribed.');
              }}
              className="mt-3 flex gap-2"
            >
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus:border-white/20"
                required
              />
              <button
                type="submit"
                className="rounded-md px-3 py-2 text-sm font-medium text-black"
                style={{ backgroundColor: '#E6FF57' }}
              >
                Subscribe
              </button>
            </form>
            <div className="mt-4 flex items-center gap-3">
              <a href="https://twitter.com" className="text-zinc-300 hover:text-white" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
              <a href="https://linkedin.com" className="text-zinc-300 hover:text-white" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              <a href="mailto:hello@connectiv.app" className="ml-auto text-sm text-zinc-300 hover:text-white">hello@connectiv.app</a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} Connectiv. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
