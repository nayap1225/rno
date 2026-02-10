import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./",
  build: {
    // 모든 압축(Minification)을 해제합니다.
    minify: false,
    cssMinify: false, // CSS 압축을 명시적으로 해제합니다.
    // 멀티 페이지 엔트리 설정: html/*.html 파일들을 빌드 엔트리로 추가합니다.
    rollupOptions: {
      input: {
        globals: resolve(__dirname, "index.html"),
        main: resolve(__dirname, "page/main.html"),
        // detail: resolve(__dirname, "html/detail.html"),
        // list: resolve(__dirname, "html/list.html"),
        // timetable: resolve(__dirname, "html/timetable.html"),
      },
      output: {
        // place JS bundles under assets/js and CSS under assets/css
        entryFileNames: `assets/js/[name].js`,
        chunkFileNames: `assets/js/[name].js`,
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || "";
          if (name.endsWith(".css")) return "assets/css/[name].[ext]";
          if (name.match(/\.(png|jpe?g|svg|gif|webp|avif|ico)$/))
            return "assets/images/[name].[ext]";
        },
      },
    },
  },
});
