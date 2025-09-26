export default function Home() {
  return (
    <div className="mx-auto max-w-6xl p-4">
      <header className="py-10">
        <h1 className="text-3xl md:text-4xl font-bold">Welcome to ELRONOM Free Academy</h1>
        <p className="text-gray-300 mt-2">Learn MultiversX basics, safely and for free.</p>
      </header>
      <section className="grid md:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
          <h3 className="font-semibold mb-2">Step-by-step lessons</h3>
          <p className="text-sm text-gray-300">Interactive content and quizzes.</p>
        </div>
        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
          <h3 className="font-semibold mb-2">Testnet practice</h3>
          <p className="text-sm text-gray-300">Try transactions on testnet safely.</p>
        </div>
        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
          <h3 className="font-semibold mb-2">Community</h3>
          <p className="text-sm text-gray-300">Discuss and learn with others.</p>
        </div>
      </section>
    </div>
  );
}