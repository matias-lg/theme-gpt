import * as dotenv from "dotenv";
import * as vscode from "vscode";
import { GptPaletteGenerator } from "./GptPaletteGenerator";
import { TokenColors } from "./tokenColors";
import { logPaletteGenerated, updateSettings } from "./util";

dotenv.config();

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const gptPaletteGenerator = new GptPaletteGenerator();
  const outputChannel = vscode.window.createOutputChannel("theme gpt");
  outputChannel.appendLine("theme-gpt is now active!");

  const generatePalette = vscode.commands.registerCommand(
    "theme-gpt.generatePalette",
    async () => {
      const userPrompt = await vscode.window.showInputBox({
        placeHolder: "Your prompt to generate a theme",
      });

      if (userPrompt === undefined || userPrompt === "") {
        vscode.window.showInformationMessage(
          "You must provide a non-empty prompt."
        );
        return;
      }

      const gptPalette = await gptPaletteGenerator.generatePalette(userPrompt);
      if (!gptPalette) {
        vscode.window.showErrorMessage("Palette generation failed.");
        outputChannel.appendLine("failed to generate palette");
        return;
      }
      outputChannel.appendLine(logPaletteGenerated(userPrompt, gptPalette));

      const newThemeColors = new TokenColors(gptPalette);
      updateSettings(newThemeColors);

      vscode.window.showInformationMessage("Theme generated!");
    }
  );

  context.subscriptions.push(generatePalette);
}

// This method is called when your extension is deactivated
export function deactivate() {}
