import { useEffect } from "preact/hooks";

export default function BeforeUnloadHandler() {
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      console.log("beforeunload");
      e.preventDefault();
      e.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div class="px-4 py-8 mx-auto">
      <h1>
        This island will handle the beforeunload event to prevent you from
        leaving the page without confirmation
      </h1>

      <a href="/another-page">Go to another page</a>
    </div>
  );
}
