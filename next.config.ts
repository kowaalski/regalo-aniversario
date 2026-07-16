import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // Las fotos de ejemplo de /public/timeline son SVG; al sustituirlas por
    // fotos reales (jpg/png) esto deja de ser necesario pero no molesta.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
