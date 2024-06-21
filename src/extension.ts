import OpenAI from "openai";
import * as vscode from "vscode";
import { GptPaletteGenerator } from "./GptPaletteGenerator";
import { TokenColors } from "./tokenColors";
import {
  getApiKeyFromConfig,
  getGptModelFromConfig,
  logPaletteGenerated,
  setConfigApiKey,
  setConfigGptModel,
  updateSettings,
} from "./util";


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const outputChannel = vscode.window.createOutputChannel("Theme GPT");
  outputChannel.appendLine("theme-gpt is now active!");

  const generatePalette = vscode.commands.registerCommand(
    "theme-gpt.generatePalette",
    async () => {
      // load from user settings
      const openaiApiKey = getApiKeyFromConfig();
      const gptModel = getGptModelFromConfig();

      if (!openaiApiKey) {
        vscode.window.showErrorMessage("OpenAI API key not set.");
        return;
      }

      const gptPaletteGenerator = new GptPaletteGenerator(
        openaiApiKey,
        gptModel
      );

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

  const setApiKey = vscode.commands.registerCommand(
    "theme-gpt.setOpenAiApiKey",
    async () => {
      const apiKey = await vscode.window.showInputBox({
        placeHolder: "Your OpenAI API key",
      });

      if (apiKey === undefined || apiKey === "") {
        vscode.window.showInformationMessage(
          "You must provide a non-empty API key."
        );
        return;
      }

      setConfigApiKey(apiKey);
      vscode.window.showInformationMessage("API key set!");
    }
  );

  const setGptModel = vscode.commands.registerCommand(
    "theme-gpt.setGptModel",
    async () => {
      const model = (await vscode.window.showQuickPick([
        "gpt-4o",
        "gpt-4o-2024-05-13",
        "gpt-4-turbo",
        "gpt-4-turbo-2024-04-09",
        "gpt-4-0125-preview",
        "gpt-4-turbo-preview",
        "gpt-4-1106-preview",
        "gpt-4-vision-preview",
        "gpt-4",
        "gpt-4-0314",
        "gpt-4-0613",
        "gpt-4-32k",
        "gpt-4-32k-0314",
        "gpt-4-32k-0613",
        "gpt-3.5-turbo",
        "gpt-3.5-turbo-16k",
        "gpt-3.5-turbo-0301",
        "gpt-3.5-turbo-0613",
        "gpt-3.5-turbo-1106",
        "gpt-3.5-turbo-0125",
        "gpt-3.5-turbo-16k-0613",
      ])) as OpenAI.Chat.ChatModel;
      if (model === undefined) {
        return;
      }
      setConfigGptModel(model);
      vscode.window.showInformationMessage("Model set!");
    }
  );

  context.subscriptions.push(generatePalette, setApiKey, setGptModel);
}

// This method is called when your extension is deactivated
export function deactivate() {}
