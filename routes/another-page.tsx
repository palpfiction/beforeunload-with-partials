export default function AnotherPage() {
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">
          This is another page
        </h1>
        <p>
          It worked, right? now checkout the branch{" "}
          <code >origin/using-partials</code> to see it fail
        </p>
      </div>
    </div>
  );
}
