import AceEditor from 'react-ace';

import 'ace-builds/webpack-resolver';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';

export interface CodeAceProps {
  code: string;
}

function CodeAce(props: CodeAceProps) {
  const { code } = props;

  return (
    <AceEditor
      mode="javascript"
      theme="monokai"
      name="js"
      readOnly
      value={code}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      maxLines={Infinity}
      width="100%"
      highlightActiveLine={true}
      enableBasicAutocompletion={true}
      enableLiveAutocompletion={true}
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
      // onLoad={editor => {
      //   editor.renderer.setPadding(12);
      // }}
    />
  );
}

export default CodeAce;
