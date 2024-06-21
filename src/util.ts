import * as vscode from "vscode";
import { TokenColors } from "./tokenColors";
import {
  THEME_NAME,
  TOKEN_COLOR_SETTING,
  WORKBENCH_SETTING,
} from "./constants";
import { ColorPalette } from "./types";

export function logPaletteGenerated(userPrompt: string, palette: ColorPalette) {
  return `-- Generated palette --
  user prompt: \"${userPrompt}\"
  palette:
  ${JSON.stringify(palette, null, 2)}
  `;
}

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
