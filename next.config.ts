import path from 'node:path';
import type { NextConfig } from 'next';

const stylesDir = path.join(process.cwd(), 'src/styles');

const nextConfig: NextConfig = {
  sassOptions: {
    // `loadPaths` is what the modern Sass compiler reads; `includePaths` is
    // kept for the legacy webpack path.
    loadPaths: [stylesDir],
    includePaths: [stylesDir],
    // Tokens, breakpoints and mixins are available in every .scss file without
    // an explicit @use. Keeps component styles focused on the component.
    additionalData: `@use 'abstracts' as *;`,
  },
};

export default nextConfig;
