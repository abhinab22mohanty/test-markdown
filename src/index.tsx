import Markdown from "markdown-it";
import MarkdownSlack from "slack-markdown-it";

console.log(MarkdownSlack);
const md = Markdown();
md.use(MarkdownSlack);

const str = md.renderInline(
  `*This is me in bold*, test me and he is in _italic_. Don't ~strikethrough~ me!`
);
document.getElementById("root")!.innerHTML = str;
