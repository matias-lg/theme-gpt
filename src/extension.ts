// export const vs_dark: IStandaloneThemeData = {
// 	base: 'vs-dark',
// 	inherit: false,
// 	rules: [
// 		{ token: '', foreground: 'D4D4D4', background: '1E1E1E' },
// 		{ token: 'invalid', foreground: 'f44747' },
// 		{ token: 'emphasis', fontStyle: 'italic' },
// 		{ token: 'strong', fontStyle: 'bold' },

// 		{ token: 'variable', foreground: '74B0DF' },
// 		{ token: 'variable.predefined', foreground: '4864AA' },
// 		{ token: 'variable.parameter', foreground: '9CDCFE' },
// 		{ token: 'constant', foreground: '569CD6' },
// 		{ token: 'comment', foreground: '608B4E' },
// 		{ token: 'number', foreground: 'B5CEA8' },
// 		{ token: 'number.hex', foreground: '5BB498' },
// 		{ token: 'regexp', foreground: 'B46695' },
// 		{ token: 'annotation', foreground: 'cc6666' },
// 		{ token: 'type', foreground: '3DC9B0' },

// 		{ token: 'delimiter', foreground: 'DCDCDC' },
// 		{ token: 'delimiter.html', foreground: '808080' },
// 		{ token: 'delimiter.xml', foreground: '808080' },

// 		{ token: 'tag', foreground: '569CD6' },
// 		{ token: 'tag.id.pug', foreground: '4F76AC' },
// 		{ token: 'tag.class.pug', foreground: '4F76AC' },
// 		{ token: 'meta.scss', foreground: 'A79873' },
// 		{ token: 'meta.tag', foreground: 'CE9178' },
// 		{ token: 'metatag', foreground: 'DD6A6F' },
// 		{ token: 'metatag.content.html', foreground: '9CDCFE' },
// 		{ token: 'metatag.html', foreground: '569CD6' },
// 		{ token: 'metatag.xml', foreground: '569CD6' },
// 		{ token: 'metatag.php', fontStyle: 'bold' },

// 		{ token: 'key', foreground: '9CDCFE' },
// 		{ token: 'string.key.json', foreground: '9CDCFE' },
// 		{ token: 'string.value.json', foreground: 'CE9178' },

// 		{ token: 'attribute.name', foreground: '9CDCFE' },
// 		{ token: 'attribute.value', foreground: 'CE9178' },
// 		{ token: 'attribute.value.number.css', foreground: 'B5CEA8' },
// 		{ token: 'attribute.value.unit.css', foreground: 'B5CEA8' },
// 		{ token: 'attribute.value.hex.css', foreground: 'D4D4D4' },

// 		{ token: 'string', foreground: 'CE9178' },
// 		{ token: 'string.sql', foreground: 'FF0000' },

// 		{ token: 'keyword', foreground: '569CD6' },
// 		{ token: 'keyword.flow', foreground: 'C586C0' },
// 		{ token: 'keyword.json', foreground: 'CE9178' },
// 		{ token: 'keyword.flow.scss', foreground: '569CD6' },

// 		{ token: 'operator.scss', foreground: '909090' },
// 		{ token: 'operator.sql', foreground: '778899' },
// 		{ token: 'operator.swift', foreground: '909090' },
// 		{ token: 'predefined.sql', foreground: 'FF00FF' },
// 	],
// 	colors: {
// 		[editorBackground]: '#1E1E1E',
// 		[editorForeground]: '#D4D4D4',
// 		[editorInactiveSelection]: '#3A3D41',
// 		[editorIndentGuide1]: '#404040',
// 		[editorActiveIndentGuide1]: '#707070',
// 		[editorSelectionHighlight]: '#ADD6FF26'
// 	}
// };

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import * as dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type ColorPalette = {
  bg0: string;
  bg1: string;
  bg: string;
  bg2: string;
  bg3: string;
  bg4: string;
  bg5: string;
  bg6: string;
  bg7: string;
  bg8: string;
  bg9: string;
  grey0: string;
  grey1: string;
  grey2: string;
  fg0: string;
  fg: string;
  fg1: string;
  red: string;
  orange: string;
  yellow: string;
  green: string;
  aqua: string;
  blue: string;
  purple: string;
  darkRed: string;
  darkOrange: string;
  darkYellow: string;
  darkGreen: string;
  darkAqua: string;
  darkBlue: string;
  darkPurple: string;
  selGreen: string;
  selRed: string;
  selBlue: string;
  diffGreen: string;
  diffRed: string;
  diffBlue: string;
  shadow: string;
};

const defaultPalette: ColorPalette = {
  bg0: "#191a1a",
  bg1: "#202121",
  bg: "#292828",
  bg2: "#32302f",
  bg3: "#383432",
  bg4: "#3c3836",
  bg5: "#45403d",
  bg6: "#504945",
  bg7: "#5a524c",
  bg8: "#665c54",
  bg9: "#7c6f64",
  grey0: "#7c6f64",
  grey1: "#928374",
  grey2: "#a89984",
  fg0: "#fbf1c7",
  fg: "#ebdbb2",
  fg1: "#c9b99a",
  red: "#fb4934",
  orange: "#fe8019",
  yellow: "#fabd2f",
  green: "#b8bb26",
  aqua: "#8ec07c",
  blue: "#83a598",
  purple: "#d3869b",
  darkRed: "#b85651",
  darkOrange: "#bd6f3e",
  darkYellow: "#c18f41",
  darkGreen: "#8f9a52",
  darkAqua: "#72966c",
  darkBlue: "#68948a",
  darkPurple: "#ab6c7d",
  selGreen: "#3b4439",
  selRed: "#4c3432",
  selBlue: "#374141",
  diffGreen: "#34381b",
  diffRed: "#402120",
  diffBlue: "#0e363e",
  shadow: "#00000070",
};

const systemPrompt = `You are a color palette generator, your task is to create a color palette that best represents the user prompt. You must deliver the color palette as a JSON object, with only the properties as this example:
  \`{
  bg0: "<hex code>",
  bg1: "<hex code>",
  bg: "<hex code>",
  bg2: "<hex code>",
  bg3: "<hex code>",
  bg4: "<hex code>",
  bg5: "<hex code>",
  bg6: "<hex code>",
  bg7: "<hex code>",
  bg8: "<hex code>",
  bg9: "<hex code>",
  grey0: "<hex code>",
  grey1: "<hex code>",
  grey2: "<hex code>",
  fg0: "<hex code>",
  fg: "<hex code>",
  fg1: "<hex code>",
  red: "<hex code>",
  orange: "<hex code>",
  yellow: "<hex code>",
  green: "<hex code>",
  aqua: "<hex code>",
  blue: "<hex code>",
  purple: "<hex code>",
  darkRed: "<hex code>",
  darkOrange: "<hex code>",
  darkYellow: "<hex code>",
  darkGreen: "<hex code>",
  darkAqua: "<hex code>",
  darkBlue: "<hex code>",
  darkPurple: "<hex code>",
  selGreen: "<hex code>",
  selRed: "<hex code>",
  selBlue: "<hex code>",
  diffGreen: "<hex code>",
  diffRed: "<hex code>",
  diffBlue: "<hex code>",
  shadow: "<hex code>"
}\`
You must only answer with the json object.`;

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "theme-gpt" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const generatePalette = vscode.commands.registerCommand(
    "theme-gpt.generatePalette",
    async () => {
      const userInput = await vscode.window.showInputBox({
        placeHolder: "Your prompt to generate a theme",
      });

      if (userInput === undefined || userInput === "") {
        vscode.window.showInformationMessage(
          "You must provide a non-empty prompt."
        );
        return;
      }

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userInput },
        ],
      });

      const answer = completion.choices[0].message.content;

      if (answer === null) {
        vscode.window.showInformationMessage("Error when generating palette.");
        return;
      }

      const generatedPallete = JSON.parse(answer) as ColorPalette;

      vscode.window.showInformationMessage(JSON.stringify(generatedPallete));
    }
  );

  context.subscriptions.push(...[generatePalette]);
}

// This method is called when your extension is deactivated
export function deactivate() {}
