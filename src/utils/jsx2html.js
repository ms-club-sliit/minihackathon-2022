import ReactDOMServer from "react-dom/server";

export default function jsx2html(element) {
    return ReactDOMServer.renderToString(element);
}