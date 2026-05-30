import { ArrowRight, CheckCircle2, Mail, Search, Sparkles } from "lucide-react";

const examples = [
  "Automate weekly reports",
  "Summarize meeting notes",
  "Create social content",
  "Write client proposals",
];

const workflows = [
  "Weekly Reporting Workflow",
  "Meeting Notes + Action Items Workflow",
  "Client Proposal Workflow",
  "Social Content Planning Workflow",
  "Small Business AI Starter Stack",
  "Manager Productivity Workflow",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto flex max-w-6xl flex-col px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-yellow-300 text-black">
              <Search size={22} />
            </div>
            <div>
              <p className="text-xl font-black tracking-tight">QueryDriven</p>
              <p className="text-xs text-neutral-400">AI workflows for practical business problems</p>
            </div>
          </div>
          <a href="#join" className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold hover:bg-white hover:text-black">
            Join waitlist
          </a>
        </nav>

        <div className="grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-300/10 px-4 py-2 text-sm font-bold text-yellow-200">
              <Sparkles size={16} /> Coming Soon: QueryDriven V0.1
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Practical AI workflows for overwhelmed professionals.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              Stop hunting through random AI tools. QueryDriven will help you describe a business problem and get a simple workflow, recommended tools, and next steps you can actually use.
            </p>

            <div id="join" className="mt-8 rounded-3xl border border-white/10 bg-white p-3 shadow-2xl shadow-black/40">
              <form name="querydriven-waitlist" method="POST" data-netlify="true" className="flex flex-col gap-3 sm:flex-row">
                <input type="hidden" name="form-name" value="querydriven-waitlist" />
                <div className="flex flex-1 items-center gap-3 rounded-2xl px-4 py-3 text-black">
                  <Mail className="text-neutral-500" size={22} />
                  <input name="email" type="email" required placeholder="Enter your email" className="w-full bg-transparent outline-none placeholder:text-neutral-500" />
                </div>
                <button className="rounded-2xl bg-black px-6 py-4 font-black text-white hover:bg-neutral-800">
                  Get early access
                </button>
              </form>
            </div>

            <p className="mt-4 text-sm text-neutral-500">
              Early subscribers will get the first AI workflow checklist and launch updates.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-200">Preview</p>
            <h2 className="mt-2 text-3xl font-black">What are you trying to solve?</h2>
            <div className="mt-6 rounded-3xl bg-white p-4 text-black">
              <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 px-4 py-4">
                <Search className="text-neutral-500" />
                <span className="text-neutral-500">Example: automate weekly reports</span>
              </div>
              <div className="mt-5 space-y-3">
                <div className="rounded-2xl bg-yellow-100 p-4">
                  <p className="text-sm font-bold uppercase tracking-wide text-black/60">Recommended Workflow</p>
                  <p className="mt-1 text-xl font-black">Weekly Reporting Workflow</p>
                </div>
                <div className="rounded-2xl border border-neutral-200 p-4">
                  <p className="font-black">Suggested tools</p>
                  <p className="mt-1 text-neutral-600">ChatGPT, Claude, Zapier, Google Sheets</p>
                </div>
                <div className="rounded-2xl border border-neutral-200 p-4">
                  <p className="font-black">Next step</p>
                  <p className="mt-1 text-neutral-600">Turn your current report process into a repeatable AI-assisted checklist.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-neutral-900">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-3">
          <div>
            <CheckCircle2 className="mb-4 text-yellow-200" />
            <h3 className="text-xl font-black">Describe the problem</h3>
            <p className="mt-2 text-neutral-400">Search by business problem, not by tool name.</p>
          </div>
          <div>
            <CheckCircle2 className="mb-4 text-yellow-200" />
            <h3 className="text-xl font-black">Get the workflow</h3>
            <p className="mt-2 text-neutral-400">See a simple process, tool stack, and next step.</p>
          </div>
          <div>
            <CheckCircle2 className="mb-4 text-yellow-200" />
            <h3 className="text-xl font-black">Save time faster</h3>
            <p className="mt-2 text-neutral-400">Focus on execution instead of AI overwhelm.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-200">Launching first</p>
            <h2 className="mt-2 text-4xl font-black">Initial workflow library</h2>
            <p className="mt-4 text-neutral-400">These are the first practical AI workflows planned for QueryDriven.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {workflows.map((workflow) => (
              <div key={workflow} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="font-black">{workflow}</p>
                <p className="mt-2 text-sm text-neutral-400">Tools, prompts, steps, and implementation guidance.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-yellow-300 text-black">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
            <div>
              <h2 className="text-4xl font-black">Get early access to QueryDriven.</h2>
              <p className="mt-3 text-black/70">Join the waitlist and help shape the first searchable AI workflow engine for business professionals.</p>
            </div>
            <a href="#join" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-6 py-4 font-black text-white hover:bg-neutral-800">
              Join the waitlist <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 py-8 text-center text-sm text-neutral-500">
        © 2026 QueryDriven. Practical AI workflows for overwhelmed professionals.
      </footer>
    </main>
  );
}
