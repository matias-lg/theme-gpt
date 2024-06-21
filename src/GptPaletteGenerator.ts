import OpenAI from "openai";
import { ColorPalette } from "./types";

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
You must only answer with the json object. Note that this is for a text editor in \"dark mode\", so the foreground and accent colors should all be brighter than the background color. Remember to incorporate the main aspects of the theme into the background ("bg"), grey, and foreground ("fg") colors. Also ensure that the different accents are not very similar, but mantain an aesthetically pleasing palette.`;

export class GptPaletteGenerator {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      // TODO: read from vscode user setting
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async generatePalette(userPrompt: string): Promise<ColorPalette | null> {
    const completion = await this.openai.chat.completions.create({
      model: "gpt-4o",
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    });

    const answer = completion.choices[0].message.content;

    if (answer === null) {
      return null;
    }

    const gptPalette = JSON.parse(answer) as ColorPalette;
    return gptPalette;
  }
}
