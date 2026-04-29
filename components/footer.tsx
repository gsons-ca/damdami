import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-[#fffaf0] px-6 py-10 text-sm text-slate-600 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl space-y-3">
          <p className="text-base font-semibold text-[#002b7a]">Damdami Taksal Canada</p>
          <p className="leading-7 text-slate-600">
            Preserving Gurmat Vidya in Canada with respect, humility, and the spirit of the Sikh Panth.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="font-semibold text-[#002b7a]">Explore</p>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>
                <Link href="/history" className="hover:text-[#002b7a]">
                  History
                </Link>
              </li>
              <li>
                <Link href="/mahopurakh" className="hover:text-[#002b7a]">
                  Mahapurakh
                </Link>
              </li>
              <li>
                <Link href="/gurbani" className="hover:text-[#002b7a]">
                  Gurbani & Santhiya
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-[#002b7a]">Contact</p>
            <p className="mt-3 leading-7 text-slate-700">
              Canada Headquarters
              <br />
              CONTENT_HOLDER: Local Canadian address
              <br />
              contact@damdamitaksal.ca
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-slate-200/70 pt-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Damdami Taksal Canada. All rights reserved.
      </div>
    </footer>
  );
}
