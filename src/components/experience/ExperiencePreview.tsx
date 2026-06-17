import Link from "next/link";

const ExperiencePreview = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Professional Experience
        </h2>

        <p className="text-muted-foreground mb-8">
          A quick overview of my professional journey in AI engineering,
          machine learning, software development, and cloud-based applications.
        </p>

        <Link
          href="/experience"
          className="inline-flex items-center rounded-xl px-6 py-3 bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
        >
          View Full Experience
        </Link>
      </div>
    </section>
  );
};

export default ExperiencePreview;