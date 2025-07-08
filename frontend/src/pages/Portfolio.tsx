import { motion } from "framer-motion";

const projects = [
  {
    title: "Nightingale",
    description: `Full-stack journaling app with GPT 3.5 Turbo AI integrated feedback, JWT-secured CRUD, and PostgreSQL backend. Built with React, FastAPI, and Tailwind. Includes mobile optimization, dark-mode UI, and email-based password reset via SendGrid. Deployed on Vercel and Render. Demo login: demo@nightingale.ai | demo123!`,
    tech: "React, Python, FastAPI, PostgreSQL, OpenAI API, Tailwind CSS, JWT, SendGrid, Vercel, Render",
    github: "https://github.com/Cyberbot777/nightingale",
    demo: "https://nightingaleapp.ai",
  },
  {
    title: "Nightingale GPT",
    description: `Custom GPT-4 assistant fully integrated into my FastAPI backend using OpenAI’s API. Connected to a PostgreSQL database with OpenAPI (3.1) for full CRUD operations on journal entries. Delivers structured AI feedback tied to user data, with secure JWT authentication and feedback rate limiting.`,
    tech: "Python, FastAPI, OpenAI API, PostgreSQL, OpenAPI 3.1, JWT, REST, Render",
    github: "https://github.com/Cyberbot777/nightingale",
    demo: "https://chatgpt.com/g/g-6844bc07cb148191b8afa39dde1a1a91-nightingale-your-journal-companion",
  },
  {
    title: "PromptPilot",
    description: `Full-stack AI prompt testing platform with a dual-pane interface for editing system instructions and testing GPT and Claude responses in real-time. Features animated output, Markdown rendering, model toggle, export/import for .json/.md/.txt files, and secure multi-model API proxying via FastAPI backend.`,
    tech: "React, TypeScript, FastAPI, PostgreSQL, OpenAI API, Claude API, Tailwind CSS, Framer Motion, Render, Vercel",
    github: "https://github.com/Cyberbot777/prompt-pilot",
    demo: "https://prompt-pilot.ai",
  },
  {
    title: "EtherScope",
    description: `Full-stack Web3 wallet dashboard for Ethereum (Sepolia testnet). Connect your wallet to view ETH balance, transactions, and deposit events in a sleek dApp interface. Features a dark-themed UI, MetaMask + WalletConnect integration, and smart contract deposit tracking. Built with Solidity, Node.js, and React, and deployed on Vercel and Render.`,
    tech: "Solidity, Hardhat, Node.js, Express, Ethers.js, React, Vite, Tailwind CSS, Wagmi, RainbowKit, Alchemy, Etherscan API, Vercel, Render",
    github: "https://github.com/Cyberbot777/etherscope",
    demo: "https://etherscope.vercel.app/",
  },
];

export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Header */}
      <section className="min-h-[50vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden pt-20 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-4"
        >
          Richard Hall
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-2xl md:text-3xl text-gray-400"
        >
          Full-Stack Developer
        </motion.h2>
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-6xl mx-auto px-6 my-12"
        >
          <div className="flex justify-end">
            <div className="grid md:grid-cols-2 gap-6 items-center pl-12 md:pl-14">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
                  About Me
                </h2>
                <p className="text-lg text-gray-400 text-center md:text-left">
                  Veteran, business owner, and former ER nurse turned full-stack
                  developer. Skilled in building AI-integrated web applications
                  with Python, React, and PostgreSQL.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="/ProfileCLOSE_dark.jpg"
                  alt="Richard Hall"
                  className="rounded-full w-40 h-40 object-cover"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-zinc-900 to-black pointer-events-none" />
      </section>

      {/* Projects Section */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Projects
          </h2>

          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 text-gray-200 rounded-xl shadow-lg p-6 max-w-[350px] min-h-[400px] flex flex-col justify-between items-center transform transition-transform duration-300 hover:scale-105"
                >
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{project.description}</p>
                    <p className="text-sm">
                      <span className="font-semibold">Tech:</span>{" "}
                      {project.tech}
                    </p>
                  </div>
                  <div className="flex justify-center space-x-4 mt-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 border border-gray-600 rounded-full text-sm hover:bg-gray-700 transition"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 border border-gray-600 rounded-full text-sm hover:bg-gray-700 transition"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact</h2>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/Cyberbot777"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-gray-600 rounded-full text-sm bg-zinc-900 hover:bg-gray-700 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/cyberbot777"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-gray-600 rounded-full text-sm bg-zinc-900 hover:bg-gray-700 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
