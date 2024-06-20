import * as dotenv from "dotenv";
import OpenAI from "openai";
import * as vscode from "vscode";
import { TokenColors } from "./token-colors";
import { updateSettings } from "./util";
import { ColorPalette } from "./types";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const systemPrompt = `You are a color palette generator. Given a prompt describing a theme, mood or specific topic you will create a visually appealing color palette that best represents the prompt. You must deliver the color palette as a JSON object, with only the properties as this example:
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
  accent1: "<hex code>",
  accent2: "<hex code>",
  accent3: "<hex code>",
  accent4: "<hex code>",
  accent5: "<hex code>",
  accent6: "<hex code>",
  accent7: "<hex code>",
  dimAccent1: "<hex code>",
  dimAccent2: "<hex code>",
  dimAccent3: "<hex code>",
  dimAccent4: "<hex code>",
  dimAccent5: "<hex code>",
  dimAccent6: "<hex code>",
  dimAccent7: "<hex code>",
  selGreen: "<hex code>",
  selRed: "<hex code>",
  selBlue: "<hex code>",
  gitDiffGreen: "<hex code>",
  gitDiffRed: "<hex code>",
  gitDiffBlue: "<hex code>",
  shadow: "<hex code>",
}\`
You must only answer with the json object. Note that this is for a text editor in \"dark mode\", so the foreground and accent colors should all be brighter than the background color. Also ensure that the different accents are not very similar.`;

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
        model: "gpt-4o",
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

      const gptPalette = JSON.parse(answer) as ColorPalette;
      const newThemeColors = new TokenColors(gptPalette);
      updateSettings(newThemeColors);
      vscode.window.showInformationMessage("Theme generated!");
    }
  );

  context.subscriptions.push(generatePalette);
}

// This method is called when your extension is deactivated
export function deactivate() {}
