import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <>
      {/* Inline script to hide and show the body */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.body.style.display = "none";
            window.onload = function () {
              setTimeout(function () {
                document.body.style.display = "";
              }, 200);
            };
          `,
        }}
      ></script>
      <main className="relative bg-black flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProjects />
          <Experience />
          <Education />
          <Footer />
        </div>
      </main>
    </>
  );
}
