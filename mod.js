import { serve } from "https://deno.land/std@0.117.0/http/server.ts";
import { content_type } from "https://raw.githubusercontent.com/melhosseiny/git-fetch/main/media_types.js";

const PATHNAME_PREFIX = "/melhosseiny/aurora-catalog/main";

const static_path = [
  "/css",
  "/fonts",
  "/icons",
  "/favicon.ico",
  "/robots.txt",
  "/manifest.webmanifest"
];

serve(async (request) => {
  let { pathname } = new URL(request.url);
  pathname = pathname === "/" ? "/index_inline.html" : pathname;

  let response_body = static_path.some(prefix => pathname.startsWith(prefix))
    ? await Deno.readFile(`.${pathname}`)
    // : await Deno.readFile('./index.html');
    : await Deno.readFile('./index_inline.html');

  const headers = new Headers({
    "content-type": content_type(pathname),
    "access-control-allow-origin": "*",
    "cache-control": "no-cache"
  });

  return new Response(response_body, {
    status: 200,
    headers
  });
});
