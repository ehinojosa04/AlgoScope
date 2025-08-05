export default function Hero() {
  return (
    <section className="bg-background text-text py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
          Build Smarter. Visualize Faster.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-accent max-w-2xl mx-auto">
          Welcome to <strong>AlgoScope</strong>, a powerful algorithm visualizer to help you learn, debug, and explore code like never before.
        </p>
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="#get-started"
            className="bg-secondary text-background font-medium px-6 py-3 rounded-[--radius-md] hover:bg-orange-400 transition"
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            className="border border-secondary text-secondary font-medium px-6 py-3 rounded-[--radius-md] hover:bg-surface transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
