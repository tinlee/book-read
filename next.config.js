/*
 * @Date: 2022-10-28 14:31:01
 * @LastEditors: “李天元” “tianyuan.li@weimob.com”
 * @LastEditTime: 2022-10-28 14:31:06
 * @FilePath: /codehike/a next.config.js
 */

const theme = require("shiki/themes/nord.json");
const { remarkCodeHike } = require("@code-hike/mdx");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkCodeHike, { theme }]],
  },
});

module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
