import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Props {
  value: {
    code: string;
    language: string;
  };
}

const CodeBlock = ({ value }: Props) => {
  const { code, language } = value;
  return (
    <SyntaxHighlighter
      showLineNumbers={true}
      showInlineLineNumbers={true}
      language={language}
      style={darcula}
      customStyle={{
        padding: "1em",
        marginBottom: "2em",
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
