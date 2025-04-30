import adapter from "@sveltejs/adapter-static";

const dev = process.env.NODE_ENV === "development";

export default {
  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: "build",
      assets: "build",
      fallback: null,
      precompress: false,
      strict: true,
    }),
    paths: {
      base: dev ? "" : "/demml.github.io", // Replace with your repository name
    },
  },
};
