import { serve } from "https://deno.land/std@0.117.0/http/server.ts";
import { content_type } from "media_types";

const PATHNAME_PREFIX = "/melhosseiny/aurora-catalog/main";

const static_path = [
  "/components",
  "/css",
  "/doc",
  "/img",
  "/favicon.ico",
  "/robots.txt",
  "/manifest.webmanifest"
];

serve(async (request) => {
  let { pathname } = new URL(request.url);
  pathname = pathname === "/" ? "/index_inline.html" : pathname;

  let response_body;
  let response_status = 200;
  
  try {
    response_body = static_path.some(prefix => pathname.startsWith(prefix))
    ? await Deno.readFile(`.${pathname}`)
    : await Deno.readFile('./index_inline.html');
  } catch (error) {
    if (error.name === "NotFound") {
      response_status = 404;
    } else {
      response_status = 500;
    }
  }

  const headers = new Headers({
    "content-type": content_type(pathname),
    "access-control-allow-origin": "*",
    "cache-control": "no-cache"
  });

  return new Response(response_body, {
    status: response_status,
    headers
  });
});
