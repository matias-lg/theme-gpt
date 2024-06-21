import * as vscode from "vscode";
import { TokenColors } from "./tokenColors";
import {
  GPT_MODEL_SETTING,
  OPENAI_API_KEY_SETTING,
  THEME_NAME,
  TOKEN_COLOR_SETTING,
  WORKBENCH_SETTING,
} from "./constants";
import { ColorPalette } from "./types";
import OpenAI from "openai";

export function updateSettings(tokenColors: TokenColors) {
  const config = vscode.workspace.getConfiguration();

  const colorCustomizations = config.inspect(WORKBENCH_SETTING)
    ?.globalValue as Record<string, unknown>;

  const tokenCustomizations = config.inspect(TOKEN_COLOR_SETTING)
    ?.globalValue as Record<string, unknown>;

  // update workbench with new colors
  config.update(
    WORKBENCH_SETTING,
    {
      ...colorCustomizations,
      [`[${THEME_NAME}]`]: tokenColors.workbenchColorCustomizations,
    },
    vscode.ConfigurationTarget.Global
  );

  // update syntax highlighting colors
  config.update(
    TOKEN_COLOR_SETTING,
    {
      ...tokenCustomizations,
      [`[${THEME_NAME}]`]: {
        textMateRules: tokenColors.tokenColorCustomizations,
      },
    },
    vscode.ConfigurationTarget.Global
  );
}

export function logPaletteGenerated(userPrompt: string, palette: ColorPalette) {
  return `-- Generated palette --
  user prompt: \"${userPrompt}\"
  palette:
  ${JSON.stringify(palette, null, 2)}
  `;
}

export function setConfigApiKey(apiKey: string) {
  const configuration = vscode.workspace.getConfiguration();
  configuration.update(
    OPENAI_API_KEY_SETTING,
    apiKey,
    vscode.ConfigurationTarget.Global
  );
}

export function setConfigGptModel(model: OpenAI.Chat.ChatModel) {
  const configuration = vscode.workspace.getConfiguration();
  configuration.update(
    GPT_MODEL_SETTING,
    model,
    vscode.ConfigurationTarget.Global
  );
}

export function getApiKeyFromConfig(): string | null {
  return (
    vscode.workspace.getConfiguration().get<string>(OPENAI_API_KEY_SETTING) ||
    null
  );
}

export function getGptModelFromConfig() {
  return (
    vscode.workspace
      .getConfiguration()
      .get<OpenAI.Chat.ChatModel>(GPT_MODEL_SETTING) || "gpt-4o"
  );
}
