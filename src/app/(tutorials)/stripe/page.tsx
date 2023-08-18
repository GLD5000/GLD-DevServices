import MarkDown from "@/markdown/tutorials/stripe.mdx";

export default function page() {
  return (
    <main
      id="main"
      className="w-screen max-h-screen overflow-y-scroll smooth-scroll-gld py-32"
    >
      <div className="w-full h-fit max-w-[1000px] sm:px-8 xl:px-0 prose prose-base sm:prose-lg lg:prose-xl prose-invert mx-auto px-2">
        <MarkDown />
      </div>
    </main>
  );
}
