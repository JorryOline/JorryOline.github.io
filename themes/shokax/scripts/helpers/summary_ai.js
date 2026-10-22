var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_node_fs = __toESM(require("node:fs"));
function getContent(post) {
  return post?.raw ?? post?._content ?? post.content;
}
let db;
function postMessage(path, content, dbPath, startMessage) {
  if (import_node_fs.default.existsSync("summary.json")) {
    db = JSON.parse(import_node_fs.default.readFileSync("summary.json", { encoding: "utf-8" }));
  } else {
    db = {};
  }
  const config = hexo.theme.config.summary;
  if (config.enable) {
    if (typeof db?.[path] !== "undefined" && typeof db?.[path]?.[dbPath] !== "undefined") {
      return db[path][dbPath];
    } else {
      if (typeof db?.[path] === "undefined") {
        db[path] = {};
      } else {
        db[path][dbPath] = "";
      }
    }
    if (config.mode === "openai") {
      const request = () => {
        fetch(`${config.openai.remote}/v1/chat/completions`, {
          method: "POST",
          headers: requestHeaders,
          body: JSON.stringify(requestBody)
        }).then((response) => {
          if (!response.ok) {
            throw Error("ERROR: Failed to get summary from Openai API");
          }
          response.json().then((data) => {
            const summary = data.choices[0].message.content;
            try {
              db[path][dbPath] = summary;
            } catch (e) {
              db ??= {};
              db[path] ??= {};
              db[path][dbPath] ??= "";
              db[path][dbPath] = summary;
            }
            import_node_fs.default.writeFileSync("summary.json", JSON.stringify(db));
            if (import_node_fs.default.existsSync("requested.lock")) {
              import_node_fs.default.unlinkSync("requested.lock");
            }
            return summary;
          });
        });
      };
      const checkTime = (waitTime) => {
        if (import_node_fs.default.existsSync("request.lock")) {
          if (import_node_fs.default.existsSync("requested.lock")) {
            setTimeout(checkTime, 1e3 * waitTime);
            return;
          }
          import_node_fs.default.writeFileSync("requested.lock", "");
          setTimeout(request, 1e3 * 2.5 * waitTime);
          import_node_fs.default.unlinkSync("request.lock");
        } else {
          import_node_fs.default.writeFileSync("request.lock", "");
          request();
        }
      };
      const requestHeaders = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.openai.apikey}`
      };
      const requestBody = {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: `${startMessage} ${content}` }],
        temperature: 0.7
      };
      if (config.pricing === "trial") {
        hexo.log.info("Requesting OpenAI API... (3 RPM mode)");
        hexo.log.info("It may take 20 minutes or more (depending on the number of articles, each one takes 25 seconds)");
        checkTime(10);
      } else {
        hexo.log.info("Requesting OpenAI API... (60 RPM mode)");
        checkTime(0.5);
      }
    } else {
    }
  }
}
hexo.extend.helper.register("get_summary", (post) => {
  return postMessage(post.path, getContent(post), "summary", "\u8BF7\u4E3A\u4E0B\u8FF0\u6587\u7AE0\u63D0\u4F9B\u4E00\u4EFD200\u5B57\u4EE5\u5185\u7684\u6982\u62EC\uFF0C\u4F7F\u7528\u4E2D\u6587\u56DE\u7B54\u4E14\u5C3D\u53EF\u80FD\u7B80\u6D01: ");
});
hexo.extend.helper.register("get_introduce", () => {
  return hexo.theme.config.summary.introduce;
});
