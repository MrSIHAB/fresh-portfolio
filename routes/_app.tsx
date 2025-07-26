import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Shortcut icons */}
        <link rel="shortcut icon" href="/images/icon.png" />
        <link rel="icon" href="/images/icon.png" />
        <link rel="apple-touch-icon" href="/images/icon.png" />

        {/* google font  */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />

        {/* Other titles */}
        <title>MrSIHAB | Shoaib Hossain</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 bg-no-repeat min-h-screen font-arimo">
          <Component />
        </div>
      </body>
    </html>
  );
}
