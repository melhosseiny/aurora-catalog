import { contentType } from "jsr:@std/media-types";
import { extname } from "jsr:@std/path";

const PATHNAME_PREFIX = "/melhosseiny/aurora-catalog/main";

const static_path = [
  "/components",
  "/css",
  "/fonts",
  "/doc",
  "/img",
  "/favicon.ico",
  "/robots.txt",
  "/manifest.webmanifest"
];

Deno.serve(async (request) => {
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
    "content-type": contentType(extname(pathname)),
    "access-control-allow-origin": "*",
    "cache-control": "no-cache"
  });

  return new Response(response_body, {
    status: response_status,
    headers
  });
});
