import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div
        class="px-4 py-8 h-screen bg-gradient-to-br flex align-middle justify-items-center"
        style={{
          background: "linear-gradient(159deg, #9fd, #d9f)",
        }}
      >
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          {/* 404 text  */}
          <h1 class="text-5xl font-bold">
            <span>404</span>
            <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <span>Page not found</span>
          </h1>

          <p class="my-4">
            The page you were looking for doesn't exist.
          </p>
          <a href="/" class="underline">Go back home</a>
        </div>
      </div>
    </>
  );
}
