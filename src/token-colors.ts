import { ColorPalette } from "./types";

// adapted from https://github.com/sainnhe/gruvbox-material-vscode/

export class TokenColors {
  palette: ColorPalette;
  tokenColorCustomizations: ReturnType<TokenColors["getSyntaxColors"]>;
  workbenchColorCustomizations: Record<string, string>;

  constructor(palette: ColorPalette) {
    this.palette = palette;
    const semanticColors = this.getSemanticColors(palette);
    this.workbenchColorCustomizations = this.getWorkbenchColors(palette);
    this.tokenColorCustomizations = this.getSyntaxColors(palette);
  }

  getSemanticColors(palette: ColorPalette) {
    return {
      operatorOverload: `${palette.accent2}`,
      memberOperatorOverload: `${palette.accent2}`,

      "variable.defaultLibrary:javascript": `${palette.accent7}`,
      "property.defaultLibrary:javascript": `${palette.accent7}`,

      "variable.defaultLibrary:javascriptreact": `${palette.accent7}`,
      "property.defaultLibrary:javascriptreact": `${palette.accent7}`,

      "class:typescript": `${palette.accent5}`,
      "interface:typescript": `${palette.accent5}`,
      "enum:typescript": `${palette.accent7}`,
      "enumMember:typescript": `${palette.accent6}`,
      "namespace:typescript": `${palette.accent7}`,
      "variable.defaultLibrary:typescript": `${palette.accent7}`,
      "property.defaultLibrary:typescript": `${palette.accent7}`,

      "class:typescriptreact": `${palette.accent5}`,
      "interface:typescriptreact": `${palette.accent5}`,
      "enum:typescriptreact": `${palette.accent7}`,
      "enumMember:typescriptreact": `${palette.accent6}`,
      "namespace:typescriptreact": `${palette.accent7}`,
      "variable.defaultLibrary:typescriptreact": `${palette.accent7}`,
      "property.defaultLibrary:typescriptreact": `${palette.accent7}`,

      "intrinsic:python": `${palette.accent7}`,
      "module:python": `${palette.accent6}`,
      "class:python": `${palette.accent5}`,

      "macro:rust": `${palette.accent5}`,
      "namespace:rust": `${palette.accent7}`,
      "selfKeyword:rust": `${palette.accent7}`,
    };
  }

  getSyntaxColors(palette: ColorPalette) {
    const syntax = [
      {
        name: "Keyword",
        scope:
          "keyword, storage.type.function, storage.type.class, storage.type.enum, storage.type.interface, storage.type.property, keyword.operator.new, keyword.operator.expression, keyword.operator.new, keyword.operator.delete, storage.type.extends",
        settings: {
          foreground: palette.accent1,
        },
      },
      {
        name: "Debug",
        scope: "keyword.other.debugger",
        settings: {
          foreground: palette.accent1,
        },
      },
      {
        name: "Storage",
        scope:
          "storage, modifier, keyword.var, entity.name.tag, keyword.control.case, keyword.control.switch",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "Operator",
        scope: "keyword.operator",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "String",
        scope:
          "string, punctuation.definition.string.end, punctuation.definition.string.begin, punctuation.definition.string.template.begin, punctuation.definition.string.template.end",
        settings: {
          foreground: palette.accent3,
        },
      },
      {
        name: "Attribute",
        scope: "entity.other.attribute-name",
        settings: {
          foreground: palette.accent3,
        },
      },
      {
        name: "String Escape",
        scope:
          "constant.character.escape, punctuation.quasi.element, punctuation.definition.template-expression, punctuation.section.embedded, storage.type.format, constant.other.placeholder, constant.other.placeholder, variable.interpolation",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "Function",
        scope:
          "entity.name.function, support.function, meta.function, meta.function-call, meta.definition.method",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "Preproc",
        scope:
          "keyword.control.at-rule, keyword.control.import, keyword.control.export, storage.type.namespace, punctuation.decorator, keyword.control.directive, keyword.preprocessor, punctuation.definition.preprocessor, punctuation.definition.directive, keyword.other.import, keyword.other.package, entity.name.type.namespace, entity.name.scope-resolution, keyword.other.using, keyword.package, keyword.import, keyword.map",
        settings: {
          foreground: palette.accent5,
        },
      },
      {
        name: "Annotation",
        scope: "storage.type.annotation",
        settings: {
          foreground: palette.accent5,
        },
      },
      {
        name: "Label",
        scope: "entity.name.label, constant.other.label",
        settings: {
          foreground: palette.accent5,
        },
      },
      {
        name: "Modules",
        scope:
          "support.module, support.node, support.other.module, support.type.object.module, entity.name.type.module, entity.name.type.class.module, keyword.control.module",
        settings: {
          foreground: palette.accent5,
        },
      },
      {
        name: "Type",
        scope: "storage.type, support.type, entity.name.type, keyword.type",
        settings: {
          foreground: palette.accent6,
        },
      },
      {
        name: "Class",
        scope:
          "entity.name.type.class, support.class, entity.name.class, entity.other.inherited-class, storage.class",
        settings: {
          foreground: palette.accent6,
        },
      },
      {
        name: "Number",
        scope: "constant.numeric",
        settings: {
          foreground: palette.accent7,
        },
      },
      {
        name: "Boolean",
        scope: "constant.language.boolean",
        settings: {
          foreground: palette.accent7,
        },
      },
      {
        name: "Macro",
        scope: "entity.name.function.preprocessor",
        settings: {
          foreground: palette.accent7,
        },
      },
      {
        name: "Special identifier",
        scope:
          "variable.language.this, variable.language.self, variable.language.super, keyword.other.this, variable.language.special, constant.language.null, constant.language.undefined, constant.language.nan",
        settings: {
          foreground: palette.accent7,
        },
      },
      {
        name: "Constant",
        scope: "constant.language, support.constant",
        settings: {
          foreground: palette.accent7,
        },
      },
      {
        name: "Identifier",
        scope: "variable, support.variable, meta.definition.variable",
        settings: {
          foreground: palette.fg,
        },
      },
      {
        name: "Property",
        scope:
          "variable.object.property, support.variable.property, variable.other.property, variable.other.object.property, variable.other.enummember, variable.other.member, meta.object-literal.key",
        settings: {
          foreground: palette.fg,
        },
      },
      {
        name: "Delimiter",
        scope: "punctuation, meta.brace, meta.delimiter, meta.bracket",
        settings: {
          foreground: palette.fg,
        },
      },
      // }}}
      // Markdown{{{
      {
        name: "Markdown heading1",
        scope: "heading.1.markdown, markup.heading.setext.1.markdown",
        settings: {
          foreground: palette.accent1,
          fontStyle: "bold",
        },
      },
      {
        name: "Markdown heading2",
        scope: "heading.2.markdown, markup.heading.setext.2.markdown",
        settings: {
          foreground: palette.accent2,
          fontStyle: "bold",
        },
      },
      {
        name: "Markdown heading3",
        scope: "heading.3.markdown",
        settings: {
          foreground: palette.accent3,
          fontStyle: "bold",
        },
      },
      {
        name: "Markdown heading4",
        scope: "heading.4.markdown",
        settings: {
          foreground: palette.accent4,
          fontStyle: "bold",
        },
      },
      {
        name: "Markdown heading5",
        scope: "heading.5.markdown",
        settings: {
          foreground: palette.accent6,
          fontStyle: "bold",
        },
      },
      {
        name: "Markdown heading6",
        scope: "heading.6.markdown",
        settings: {
          foreground: palette.accent7,
          fontStyle: "bold",
        },
      },
      
      {
        name: "Markdown link text",
        scope:
          "markup.underline.link.image.markdown, markup.underline.link.markdown",
        settings: {
          foreground: palette.accent4,
          fontStyle: "underline",
        },
      },
      {
        name: "Markdown delimiter",
        scope:
          "punctuation.definition.string.begin.markdown, punctuation.definition.string.end.markdown, punctuation.definition.italic.markdown, punctuation.definition.quote.begin.markdown, punctuation.definition.metadata.markdown, punctuation.separator.key-value.markdown, punctuation.definition.constant.markdown",
        settings: {
          foreground: palette.grey1,
        },
      },
      
      {
        name: "Markdown separator delimiter",
        scope:
          "meta.separator.markdown, punctuation.definition.constant.begin.markdown, punctuation.definition.constant.end.markdown",
        settings: {
          foreground: palette.grey1,
          fontStyle: "bold",
        },
      },
      {
        name: "Markdown italic",
        scope: "markup.italic",
        settings: {
          fontStyle: "italic",
        },
      },
      {
        name: "Markdown bold",
        scope: "markup.bold",
        settings: {
          fontStyle: "bold",
        },
      },
      {
        name: "Markdown bold italic",
        scope: "markup.bold markup.italic, markup.italic markup.bold",
        settings: {
          fontStyle: "italic bold",
        },
      },
      {
        name: "Markdown code delimiter",
        scope:
          "punctuation.definition.markdown, punctuation.definition.raw.markdown",
        settings: {
          foreground: palette.accent3,
        },
      },
      {
        name: "Markdown code type",
        scope: "fenced_code.block.language",
        settings: {
          foreground: palette.accent3,
        },
      },
      {
        name: "Markdown code block",
        scope:
          "markup.fenced_code.block.markdown, markup.inline.raw.string.markdown",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "Markdown list mark",
        scope: "punctuation.definition.list.begin.markdown",
        settings: {
          foreground: palette.accent1,
        },
      },
      // }}}
      // reStructuredText{{{
      {
        name: "reStructuredText heading",
        scope: "punctuation.definition.heading.restructuredtext",
        settings: {
          foreground: palette.accent2,
          fontStyle: "bold",
        },
      },
      {
        name: "reStructuredText delimiter",
        scope:
          "punctuation.definition.field.restructuredtext, punctuation.separator.key-value.restructuredtext, punctuation.definition.directive.restructuredtext, punctuation.definition.constant.restructuredtext, punctuation.definition.italic.restructuredtext, punctuation.definition.table.restructuredtext",
        settings: {
          foreground: palette.grey1,
        },
      },
      
      {
        name: "reStructuredText aqua",
        scope:
          "entity.name.tag.restructuredtext, punctuation.definition.link.restructuredtext, punctuation.definition.raw.restructuredtext, punctuation.section.raw.restructuredtext",
        settings: {
          foreground: palette.accent5,
        },
      },
      {
        name: "reStructuredText purple",
        scope: "constant.other.footnote.link.restructuredtext",
        settings: {
          foreground: palette.accent7,
        },
      },
      {
        name: "reStructuredText red",
        scope: "support.directive.restructuredtext",
        settings: {
          foreground: palette.accent1,
        },
      },
      {
        name: "reStructuredText green",
        scope:
          "entity.name.directive.restructuredtext, markup.raw.restructuredtext, markup.raw.inner.restructuredtext, string.other.link.title.restructuredtext",
        settings: {
          foreground: palette.accent4,
        },
      },
      // }}}
      // LaTex{{{
      {
        name: "LaTex delimiter",
        scope:
          "punctuation.definition.function.latex, punctuation.definition.function.tex, punctuation.definition.keyword.latex, constant.character.newline.tex, punctuation.definition.keyword.tex",
        settings: {
          foreground: palette.grey1,
        },
      },
      {
        name: "LaTex red",
        scope: "support.function.be.latex",
        settings: {
          foreground: palette.accent1,
        },
      },
      {
        name: "LaTex orange",
        scope:
          "support.function.section.latex, keyword.control.table.cell.latex, keyword.control.table.newline.latex",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "LaTex yellow",
        scope:
          "support.class.latex, variable.parameter.latex, variable.parameter.function.latex, variable.parameter.definition.label.latex, constant.other.reference.label.latex",
        settings: {
          foreground: palette.accent3,
        },
      },
      {
        name: "LaTex purple",
        scope: "keyword.control.preamble.latex",
        settings: {
          foreground: palette.accent7,
        },
      },
      // }}}
      // Html/Xml{{{
      {
        name: "Html grey",
        scope: "punctuation.separator.namespace.xml",
        settings: {
          foreground: palette.grey1,
        },
      },
      {
        name: "Html orange",
        scope:
          "entity.name.tag.html, entity.name.tag.xml, entity.name.tag.localname.xml",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "Html yellow",
        scope:
          "entity.other.attribute-name.html, entity.other.attribute-name.xml, entity.other.attribute-name.localname.xml",
        settings: {
          foreground: palette.accent3,
        },
      },
      {
        name: "Html green",
        scope:
          "string.quoted.double.html, string.quoted.single.html, punctuation.definition.string.begin.html, punctuation.definition.string.end.html, punctuation.separator.key-value.html, punctuation.definition.string.begin.xml, punctuation.definition.string.end.xml, string.quoted.double.xml, string.quoted.single.xml, punctuation.definition.tag.begin.html, punctuation.definition.tag.end.html, punctuation.definition.tag.xml, meta.tag.xml, meta.tag.preprocessor.xml, meta.tag.other.html, meta.tag.block.any.html, meta.tag.inline.any.html",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "Html purple",
        scope: "variable.language.documentroot.xml, meta.tag.sgml.doctype.xml",
        settings: {
          foreground: palette.accent7,
        },
      },
      // }}}
      // Proto{{{
      {
        name: "Proto yellow",
        scope: "storage.type.proto",
        settings: {
          foreground: palette.accent3,
        },
      },
      {
        name: "Proto green",
        scope:
          "string.quoted.double.proto.syntax, string.quoted.single.proto.syntax, string.quoted.double.proto, string.quoted.single.proto",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "Proto aqua",
        scope: "entity.name.class.proto, entity.name.class.message.proto",
        settings: {
          foreground: palette.accent5,
        },
      },
      // }}}
      // CSS{{{
      {
        name: "CSS grey",
        scope:
          "punctuation.definition.entity.css, punctuation.separator.key-value.css, punctuation.terminator.rule.css, punctuation.separator.list.comma.css",
        settings: {
          foreground: palette.grey1,
        },
      },
      {
        name: "CSS red",
        scope: "entity.other.attribute-name.class.css",
        settings: {
          foreground: palette.accent1,
        },
      },
      {
        name: "CSS orange",
        scope: "keyword.other.unit",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "CSS yellow",
        scope:
          "entity.other.attribute-name.pseudo-class.css, entity.other.attribute-name.pseudo-element.css",
        settings: {
          foreground: palette.accent3,
        },
      },
      {
        name: "CSS green",
        scope:
          "string.quoted.single.css, string.quoted.double.css, support.constant.property-value.css, meta.property-value.css, punctuation.definition.string.begin.css, punctuation.definition.string.end.css, constant.numeric.css, support.constant.font-name.css, variable.parameter.keyframe-list.css",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "CSS aqua",
        scope: "support.type.property-name.css",
        settings: {
          foreground: palette.accent5,
        },
      },
      {
        name: "CSS blue",
        scope: "support.type.vendored.property-name.css",
        settings: {
          foreground: palette.accent6,
        },
      },
      {
        name: "CSS purple",
        scope:
          "entity.name.tag.css, entity.other.keyframe-offset.css, punctuation.definition.keyword.css, keyword.control.at-rule.keyframes.css, meta.selector.css",
        settings: {
          foreground: palette.accent7,
        },
      },
      // }}}
      // SASS{{{
      {
        name: "SASS grey",
        scope:
          "punctuation.definition.entity.scss, punctuation.separator.key-value.scss, punctuation.terminator.rule.scss, punctuation.separator.list.comma.scss",
        settings: {
          foreground: palette.grey1,
        },
      },
      {
        name: "SASS orange",
        scope: "keyword.control.at-rule.keyframes.scss",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "SASS yellow",
        scope:
          "punctuation.definition.interpolation.begin.bracket.curly.scss, punctuation.definition.interpolation.end.bracket.curly.scss",
        settings: {
          foreground: palette.accent3,
        },
      },
      {
        name: "SASS green",
        scope:
          "punctuation.definition.string.begin.scss, punctuation.definition.string.end.scss, string.quoted.double.scss, string.quoted.single.scss, constant.character.css.sass, meta.property-value.scss",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "SASS purple",
        scope:
          "keyword.control.at-rule.include.scss, keyword.control.at-rule.use.scss, keyword.control.at-rule.mixin.scss, keyword.control.at-rule.extend.scss, keyword.control.at-rule.import.scss",
        settings: {
          foreground: palette.accent7,
        },
      },
      // }}}
      // Stylus{{{
      {
        name: "Stylus white",
        scope: "meta.function.stylus",
        settings: {
          foreground: palette.fg,
        },
      },
      {
        name: "Stylus yellow",
        scope: "entity.name.function.stylus",
        settings: {
          foreground: palette.accent3,
        },
      },
      // }}}
      // JavaScript{{{
      {
        name: "JavaScript white",
        scope: "string.unquoted.js",
        settings: {
          foreground: palette.fg,
        },
      },
      {
        name: "JavaScript grey",
        scope:
          "punctuation.accessor.js, punctuation.separator.key-value.js, punctuation.separator.label.js, keyword.operator.accessor.js",
        settings: {
          foreground: palette.grey1,
        },
      },
      {
        name: "JavaScript red",
        scope: "punctuation.definition.block.tag.jsdoc",
        settings: {
          foreground: palette.accent1,
        },
      },
      {
        name: "JavaScript orange",
        scope: "storage.type.js, storage.type.function.arrow.js",
        settings: {
          foreground: palette.accent2,
        },
      },
      // }}}
      // JSX{{{
      {
        name: "JSX white",
        scope: "JSXNested",
        settings: {
          foreground: palette.fg,
        },
      },
      {
        name: "JSX green",
        scope:
          "punctuation.definition.tag.jsx, entity.other.attribute-name.jsx, punctuation.definition.tag.begin.js.jsx, punctuation.definition.tag.end.js.jsx, entity.other.attribute-name.js.jsx",
        settings: {
          foreground: palette.accent4,
        },
      },
      // }}}
      // TypeScript{{{
      {
        name: "TypeScript white",
        scope: "entity.name.type.module.ts",
        settings: {
          foreground: palette.fg,
        },
      },
      {
        name: "TypeScript grey",
        scope:
          "keyword.operator.type.annotation.ts, punctuation.accessor.ts, punctuation.separator.key-value.ts",
        settings: {
          foreground: palette.grey1,
        },
      },
      {
        name: "TypeScript green",
        scope:
          "punctuation.definition.tag.directive.ts, entity.other.attribute-name.directive.ts",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "TypeScript aqua",
        scope:
          "entity.name.type.ts, entity.name.type.interface.ts, entity.other.inherited-class.ts, entity.name.type.alias.ts, entity.name.type.class.ts, entity.name.type.enum.ts",
        settings: {
          foreground: palette.accent5,
        },
      },
      {
        name: "TypeScript orange",
        scope:
          "storage.type.ts, storage.type.function.arrow.ts, storage.type.type.ts",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "TypeScript blue",
        scope: "entity.name.type.module.ts",
        settings: {
          foreground: palette.accent6,
        },
      },
      {
        name: "TypeScript purple",
        scope:
          "keyword.control.import.ts, keyword.control.export.ts, storage.type.namespace.ts",
        settings: {
          foreground: palette.accent7,
        },
      },
      // }}}
      // TSX{{{
      {
        name: "TSX white",
        scope: "entity.name.type.module.tsx",
        settings: {
          foreground: palette.fg,
        },
      },
      {
        name: "TSX grey",
        scope:
          "keyword.operator.type.annotation.tsx, punctuation.accessor.tsx, punctuation.separator.key-value.tsx",
        settings: {
          foreground: palette.grey1,
        },
      },
      {
        name: "TSX green",
        scope:
          "punctuation.definition.tag.directive.tsx, entity.other.attribute-name.directive.tsx, punctuation.definition.tag.begin.tsx, punctuation.definition.tag.end.tsx, entity.other.attribute-name.tsx",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "TSX aqua",
        scope:
          "entity.name.type.tsx, entity.name.type.interface.tsx, entity.other.inherited-class.tsx, entity.name.type.alias.tsx, entity.name.type.class.tsx, entity.name.type.enum.tsx",
        settings: {
          foreground: palette.accent5,
        },
      },
      {
        name: "TSX blue",
        scope: "entity.name.type.module.tsx",
        settings: {
          foreground: palette.accent6,
        },
      },
      {
        name: "TSX purple",
        scope:
          "keyword.control.import.tsx, keyword.control.export.tsx, storage.type.namespace.tsx",
        settings: {
          foreground: palette.accent7,
        },
      },
      {
        name: "TSX orange",
        scope:
          "storage.type.tsx, storage.type.function.arrow.tsx, storage.type.type.tsx, support.class.component.tsx",
        settings: {
          foreground: palette.accent2,
        },
      },
      // }}}
      // CoffeeScript{{{
      {
        name: "CoffeeScript orange",
        scope: "storage.type.function.coffee",
        settings: {
          foreground: palette.accent2,
        },
      },
      // }}}
      // PureScript{{{
      {
        name: "PureScript white",
        scope: "meta.type-signature.purescript",
        settings: {
          foreground: palette.fg,
        },
      },
      {
        name: "PureScript orange",
        scope:
          "keyword.other.double-colon.purescript, keyword.other.arrow.purescript, keyword.other.big-arrow.purescript",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "PureScript yellow",
        scope: "entity.name.function.purescript",
        settings: {
          foreground: palette.accent3,
        },
      },
      {
        name: "PureScript green",
        scope:
          "string.quoted.single.purescript, string.quoted.double.purescript, punctuation.definition.string.begin.purescript, punctuation.definition.string.end.purescript, string.quoted.triple.purescript, entity.name.type.purescript",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "PureScript purple",
        scope: "support.other.module.purescript",
        settings: {
          foreground: palette.accent7,
        },
      },
      // }}}
      // Dart{{{
      {
        name: "Dart grey",
        scope: "punctuation.dot.dart",
        settings: {
          foreground: palette.grey1,
        },
      },
      {
        name: "Dart orange",
        scope: "storage.type.primitive.dart",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "Dart yellow",
        scope: "support.class.dart",
        settings: {
          foreground: palette.accent3,
        },
      },
      {
        name: "Dart green",
        scope:
          "entity.name.function.dart, string.interpolated.single.dart, string.interpolated.double.dart",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "Dart blue",
        scope: "variable.language.dart",
        settings: {
          foreground: palette.accent6,
        },
      },
      {
        name: "Dart purple",
        scope: "keyword.other.import.dart, storage.type.annotation.dart",
        settings: {
          foreground: palette.accent7,
        },
      },
      // }}}
      // Pug{{{
      {
        name: "Pug red",
        scope: "entity.other.attribute-name.class.pug",
        settings: {
          foreground: palette.accent1,
        },
      },
      {
        name: "Pug orange",
        scope: "storage.type.function.pug",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "Pug aqua",
        scope: "entity.other.attribute-name.tag.pug",
        settings: {
          foreground: palette.accent5,
        },
      },
      {
        name: "Pug purple",
        scope: "entity.name.tag.pug, storage.type.import.include.pug",
        settings: {
          foreground: palette.accent7,
        },
      },
      // }}}
      // C{{{
      {
        name: "C white",
        scope:
          "meta.function-call.c, storage.modifier.array.bracket.square.c, meta.function.definition.parameters.c",
        settings: {
          foreground: palette.fg,
        },
      },
      {
        name: "C grey",
        scope:
          "punctuation.separator.dot-access.c, constant.character.escape.line-continuation.c",
        settings: {
          foreground: palette.grey1,
        },
      },
      {
        name: "C red",
        scope:
          "keyword.control.directive.include.c, punctuation.definition.directive.c, keyword.control.directive.pragma.c, keyword.control.directive.line.c, keyword.control.directive.define.c, keyword.control.directive.conditional.c, keyword.control.directive.diagnostic.error.c, keyword.control.directive.undef.c, keyword.control.directive.conditional.ifdef.c, keyword.control.directive.endif.c, keyword.control.directive.conditional.ifndef.c, keyword.control.directive.conditional.if.c, keyword.control.directive.else.c",
        settings: {
          foreground: palette.accent1,
        },
      },
      {
        name: "C orange",
        scope: "punctuation.separator.pointer-access.c",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "C aqua",
        scope: "variable.other.member.c",
        settings: {
          foreground: palette.accent5,
        },
      },
      // }}}
      // C++{{{
      {
        name: "C++ white",
        scope:
          "meta.function-call.cpp, storage.modifier.array.bracket.square.cpp, meta.function.definition.parameters.cpp, meta.body.function.definition.cpp",
        settings: {
          foreground: palette.fg,
        },
      },
      {
        name: "C++ grey",
        scope:
          "punctuation.separator.dot-access.cpp, constant.character.escape.line-continuation.cpp",
        settings: {
          foreground: palette.grey1,
        },
      },
      {
        name: "C++ red",
        scope:
          "keyword.control.directive.include.cpp, punctuation.definition.directive.cpp, keyword.control.directive.pragma.cpp, keyword.control.directive.line.cpp, keyword.control.directive.define.cpp, keyword.control.directive.conditional.cpp, keyword.control.directive.diagnostic.error.cpp, keyword.control.directive.undef.cpp, keyword.control.directive.conditional.ifdef.cpp, keyword.control.directive.endif.cpp, keyword.control.directive.conditional.ifndef.cpp, keyword.control.directive.conditional.if.cpp, keyword.control.directive.else.cpp, storage.type.namespace.definition.cpp, keyword.other.using.directive.cpp, storage.type.struct.cpp",
        settings: {
          foreground: palette.accent1,
        },
      },
      {
        name: "C++ orange",
        scope:
          "punctuation.separator.pointer-access.cpp, punctuation.section.angle-brackets.begin.template.call.cpp, punctuation.section.angle-brackets.end.template.call.cpp",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "C++ aqua",
        scope: "variable.other.member.cpp",
        settings: {
          foreground: palette.accent5,
        },
      },
      // }}}
      // C#{{{
      {
        name: "C# red",
        scope: "keyword.other.using.cs",
        settings: {
          foreground: palette.accent1,
        },
      },
      {
        name: "C# yellow",
        scope:
          "keyword.type.cs, constant.character.escape.cs, punctuation.definition.interpolation.begin.cs, punctuation.definition.interpolation.end.cs",
        settings: {
          foreground: palette.accent3,
        },
      },
      {
        name: "C# green",
        scope:
          "string.quoted.double.cs, string.quoted.single.cs, punctuation.definition.string.begin.cs, punctuation.definition.string.end.cs",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "C# aqua",
        scope: "variable.other.object.property.cs",
        settings: {
          foreground: palette.accent5,
        },
      },
      {
        name: "C# purple",
        scope: "entity.name.type.namespace.cs",
        settings: {
          foreground: palette.accent7,
        },
      },
      // }}}
      // F#{{{
      {
        name: "F# white",
        scope: "keyword.symbol.fsharp, constant.language.unit.fsharp",
        settings: {
          foreground: palette.fg,
        },
      },
      {
        name: "F# yellow",
        scope: "keyword.format.specifier.fsharp, entity.name.type.fsharp",
        settings: {
          foreground: palette.accent3,
        },
      },
      {
        name: "F# green",
        scope:
          "string.quoted.double.fsharp, string.quoted.single.fsharp, punctuation.definition.string.begin.fsharp, punctuation.definition.string.end.fsharp",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "F# blue",
        scope: "entity.name.section.fsharp",
        settings: {
          foreground: palette.accent6,
        },
      },
      {
        name: "F# purple",
        scope: "support.function.attribute.fsharp",
        settings: {
          foreground: palette.accent7,
        },
      },
      // }}}
      // Java{{{
      {
        name: "Java grey",
        scope: "punctuation.separator.java, punctuation.separator.period.java",
        settings: {
          foreground: palette.grey1,
        },
      },
      {
        name: "Java red",
        scope: "keyword.other.import.java, keyword.other.package.java",
        settings: {
          foreground: palette.accent1,
        },
      },
      {
        name: "Java orange",
        scope: "storage.type.function.arrow.java, keyword.control.ternary.java",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "Java aqua",
        scope: "variable.other.property.java",
        settings: {
          foreground: palette.accent5,
        },
      },
      {
        name: "Java purple",
        scope:
          "variable.language.wildcard.java, storage.modifier.import.java, storage.type.annotation.java, punctuation.definition.annotation.java, storage.modifier.package.java, entity.name.type.module.java",
        settings: {
          foreground: palette.accent7,
        },
      },
      // }}}
      // Kotlin{{{
      {
        name: "Kotlin red",
        scope: "keyword.other.import.kotlin",
        settings: {
          foreground: palette.accent1,
        },
      },
      {
        name: "Kotlin orange",
        scope: "storage.type.kotlin",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "Kotlin aqua",
        scope: "constant.language.kotlin",
        settings: {
          foreground: palette.accent5,
        },
      },
      {
        name: "Kotlin purple",
        scope: "entity.name.package.kotlin, storage.type.annotation.kotlin",
        settings: {
          foreground: palette.accent7,
        },
      },
      // }}}
      // Scala{{{
      {
        name: "Scala purple",
        scope: "entity.name.package.scala",
        settings: {
          foreground: palette.accent7,
        },
      },
      {
        name: "Scala blue",
        scope: "constant.language.scala",
        settings: {
          foreground: palette.accent6,
        },
      },
      {
        name: "Scala aqua",
        scope: "entity.name.import.scala",
        settings: {
          foreground: palette.accent5,
        },
      },
      {
        name: "Scala green",
        scope:
          "string.quoted.double.scala, string.quoted.single.scala, punctuation.definition.string.begin.scala, punctuation.definition.string.end.scala, string.quoted.double.interpolated.scala, string.quoted.single.interpolated.scala, string.quoted.triple.scala",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "Scala yellow",
        scope: "entity.name.class, entity.other.inherited-class.scala",
        settings: {
          foreground: palette.accent3,
        },
      },
      {
        name: "Scala orange",
        scope: "keyword.declaration.stable.scala, keyword.other.arrow.scala",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "Scala red",
        scope: "keyword.other.import.scala",
        settings: {
          foreground: palette.accent1,
        },
      },
      // }}}
      // Groovy{{{
      {
        name: "Groovy white",
        scope:
          "keyword.operator.navigation.groovy, meta.method.body.java, meta.definition.method.groovy, meta.definition.method.signature.java",
        settings: {
          foreground: palette.fg,
        },
      },
      {
        name: "Scala grey",
        scope: "punctuation.separator.groovy",
        settings: {
          foreground: palette.grey1,
        },
      },
      {
        name: "Scala red",
        scope:
          "keyword.other.import.groovy, keyword.other.package.groovy, keyword.other.import.static.groovy",
        settings: {
          foreground: palette.accent1,
        },
      },
      {
        name: "Groovy orange",
        scope: "storage.type.def.groovy",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "Groovy green",
        scope: "variable.other.interpolated.groovy, meta.method.groovy",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "Groovy aqua",
        scope:
          "storage.modifier.import.groovy, storage.modifier.package.groovy",
        settings: {
          foreground: palette.accent5,
        },
      },
      {
        name: "Groovy purple",
        scope: "storage.type.annotation.groovy",
        settings: {
          foreground: palette.accent7,
        },
      },
      // }}}
      // Go{{{
      {
        name: "Go red",
        scope: "keyword.type.go",
        settings: {
          foreground: palette.accent1,
        },
      },
      {
        name: "Go aqua",
        scope: "entity.name.package.go",
        settings: {
          foreground: palette.accent5,
        },
      },
      {
        name: "Go purple",
        scope: "keyword.import.go, keyword.package.go",
        settings: {
          foreground: palette.accent7,
        },
      },
      // }}}
      // Rust{{{
      {
        name: "Rust white",
        scope: "entity.name.type.mod.rust",
        settings: {
          foreground: palette.fg,
        },
      },
      {
        name: "Rust grey",
        scope:
          "keyword.operator.path.rust, keyword.operator.member-access.rust",
        settings: {
          foreground: palette.grey1,
        },
      },
      {
        name: "Rust orange",
        scope: "storage.type.rust",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "Rust aqua",
        scope: "support.constant.core.rust",
        settings: {
          foreground: palette.accent5,
        },
      },
      {
        name: "Rust purple",
        scope:
          "meta.attribute.rust, variable.language.rust, storage.type.module.rust",
        settings: {
          foreground: palette.accent7,
        },
      },
      // }}}
      // Swift{{{
      {
        name: "Swift white",
        scope: "meta.function-call.swift, support.function.any-method.swift",
        settings: {
          foreground: palette.fg,
        },
      },
      {
        name: "Swift aqua",
        scope: "support.variable.swift",
        settings: {
          foreground: palette.accent5,
        },
      },
      // }}}
      // PHP{{{
      {
        name: "PHP white",
        scope: "keyword.operator.class.php",
        settings: {
          foreground: palette.fg,
        },
      },
      {
        name: "PHP orange",
        scope: "storage.type.trait.php",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "PHP aqua",
        scope: "constant.language.php, support.other.namespace.php",
        settings: {
          foreground: palette.accent5,
        },
      },
      {
        name: "PHP blue",
        scope:
          "storage.type.modifier.access.control.public.cpp, storage.type.modifier.access.control.private.cpp",
        settings: {
          foreground: palette.accent6,
        },
      },
      {
        name: "PHP purple",
        scope: "keyword.control.import.include.php, storage.type.php",
        settings: {
          foreground: palette.accent7,
        },
      },
      // }}}
      // Python{{{
      {
        name: "Python white",
        scope: "meta.function-call.arguments.python",
        settings: {
          foreground: palette.fg,
        },
      },
      {
        name: "Python grey",
        scope:
          "punctuation.definition.decorator.python, punctuation.separator.period.python",
        settings: {
          foreground: palette.grey1,
        },
      },
      {
        name: "Python aqua",
        scope: "constant.language.python",
        settings: {
          foreground: palette.accent5,
        },
      },
      {
        name: "Python purple",
        scope:
          "keyword.control.import.python, keyword.control.import.from.python",
        settings: {
          foreground: palette.accent7,
        },
      },
      // }}}
      // Lua{{{
      {
        name: "Lua aqua",
        scope: "constant.language.lua",
        settings: {
          foreground: palette.accent5,
        },
      },
      {
        name: "Lua blue",
        scope: "entity.name.class.lua",
        settings: {
          foreground: palette.accent6,
        },
      },
      // }}}
      // Ruby{{{
      {
        name: "Ruby white",
        scope: "meta.function.method.with-arguments.ruby",
        settings: {
          foreground: palette.fg,
        },
      },
      {
        name: "Ruby grey",
        scope: "punctuation.separator.method.ruby",
        settings: {
          foreground: palette.grey1,
        },
      },
      {
        name: "Ruby orange",
        scope: "keyword.control.pseudo-method.ruby, storage.type.variable.ruby",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "Ruby green",
        scope: "keyword.other.special-method.ruby",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "Ruby purple",
        scope:
          "keyword.control.module.ruby, punctuation.definition.constant.ruby",
        settings: {
          foreground: palette.accent7,
        },
      },
      {
        name: "Ruby yellow",
        scope:
          "string.regexp.character-class.ruby,string.regexp.interpolated.ruby,punctuation.definition.character-class.ruby,string.regexp.group.ruby, punctuation.section.regexp.ruby, punctuation.definition.group.ruby",
        settings: {
          foreground: palette.accent3,
        },
      },
      {
        name: "Ruby blue",
        scope: "variable.other.constant.ruby",
        settings: {
          foreground: palette.accent6,
        },
      },
      // }}}
      // Haskell{{{
      {
        name: "Haskell orange",
        scope:
          "keyword.other.arrow.haskell, keyword.other.big-arrow.haskell, keyword.other.double-colon.haskell",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "Haskell yellow",
        scope: "storage.type.haskell",
        settings: {
          foreground: palette.accent3,
        },
      },
      {
        name: "Haskell green",
        scope:
          "constant.other.haskell, string.quoted.double.haskell, string.quoted.single.haskell, punctuation.definition.string.begin.haskell, punctuation.definition.string.end.haskell",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "Haskell blue",
        scope: "entity.name.function.haskell",
        settings: {
          foreground: palette.accent6,
        },
      },
      {
        name: "Haskell aqua",
        scope: "entity.name.namespace, meta.preprocessor.haskell",
        settings: {
          foreground: palette.accent5,
        },
      },
      // }}}
      // Julia{{{
      {
        name: "Julia red",
        scope: "keyword.control.import.julia, keyword.control.export.julia",
        settings: {
          foreground: palette.accent1,
        },
      },
      {
        name: "Julia orange",
        scope: "keyword.storage.modifier.julia",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "Julia aqua",
        scope: "constant.language.julia",
        settings: {
          foreground: palette.accent5,
        },
      },
      {
        name: "Julia purple",
        scope: "support.function.macro.julia",
        settings: {
          foreground: palette.accent7,
        },
      },
      // }}}
      // Elm{{{
      {
        name: "Elm white",
        scope: "keyword.other.period.elm",
        settings: {
          foreground: palette.fg,
        },
      },
      {
        name: "Elm yellow",
        scope: "storage.type.elm",
        settings: {
          foreground: palette.accent3,
        },
      },
      // }}}
      // R{{{
      {
        name: "R orange",
        scope: "keyword.other.r",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "R green",
        scope: "entity.name.function.r, variable.function.r",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "R aqua",
        scope: "constant.language.r",
        settings: {
          foreground: palette.accent5,
        },
      },
      {
        name: "R purple",
        scope: "entity.namespace.r",
        settings: {
          foreground: palette.accent7,
        },
      },
      // }}}
      // Erlang{{{
      {
        name: "Erlang grey",
        scope:
          "punctuation.separator.module-function.erlang, punctuation.section.directive.begin.erlang",
        settings: {
          foreground: palette.grey1,
        },
      },
      {
        name: "Erlang red",
        scope:
          "keyword.control.directive.erlang, keyword.control.directive.define.erlang",
        settings: {
          foreground: palette.accent1,
        },
      },
      {
        name: "Erlang yellow",
        scope: "entity.name.type.class.module.erlang",
        settings: {
          foreground: palette.accent3,
        },
      },
      {
        name: "Erlang green",
        scope:
          "string.quoted.double.erlang, string.quoted.single.erlang, punctuation.definition.string.begin.erlang, punctuation.definition.string.end.erlang",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "Erlang purple",
        scope:
          "keyword.control.directive.export.erlang, keyword.control.directive.module.erlang, keyword.control.directive.import.erlang, keyword.control.directive.behaviour.erlang",
        settings: {
          foreground: palette.accent7,
        },
      },
      // }}}
      // Elixir{{{
      {
        name: "Elixir aqua",
        scope:
          "variable.other.readwrite.module.elixir, punctuation.definition.variable.elixir",
        settings: {
          foreground: palette.accent5,
        },
      },
      {
        name: "Elixir blue",
        scope: "constant.language.elixir",
        settings: {
          foreground: palette.accent6,
        },
      },
      {
        name: "Elixir purple",
        scope: "keyword.control.module.elixir",
        settings: {
          foreground: palette.accent7,
        },
      },
      // }}}
      // OCaml{{{
      {
        name: "OCaml white",
        scope: "entity.name.type.value-signature.ocaml",
        settings: {
          foreground: palette.fg,
        },
      },
      {
        name: "OCaml orange",
        scope: "keyword.other.ocaml",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "OCaml aqua",
        scope: "constant.language.variant.ocaml",
        settings: {
          foreground: palette.accent5,
        },
      },
      // }}}
      // Perl{{{
      {
        name: "Perl red",
        scope: "storage.type.sub.perl, storage.type.declare.routine.perl",
        settings: {
          foreground: palette.accent1,
        },
      },
      // }}}
      // Common Lisp{{{
      {
        name: "Lisp white",
        scope: "meta.function.lisp",
        settings: {
          foreground: palette.fg,
        },
      },
      {
        name: "Lisp red",
        scope: "storage.type.function-type.lisp",
        settings: {
          foreground: palette.accent1,
        },
      },
      {
        name: "Lisp green",
        scope: "keyword.constant.lisp",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "Lisp aqua",
        scope: "entity.name.function.lisp",
        settings: {
          foreground: palette.accent5,
        },
      },
      // }}}
      // Clojure{{{
      {
        name: "Clojure green",
        scope:
          "constant.keyword.clojure, support.variable.clojure, meta.definition.variable.clojure",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "Clojure purple",
        scope: "entity.global.clojure",
        settings: {
          foreground: palette.accent7,
        },
      },
      {
        name: "Clojure blue",
        scope: "entity.name.function.clojure",
        settings: {
          foreground: palette.accent6,
        },
      },
      // }}}
      // Shell{{{
      {
        name: "Shell white",
        scope: "meta.scope.if-block.shell, meta.scope.group.shell",
        settings: {
          foreground: palette.fg,
        },
      },
      {
        name: "Shell yellow",
        scope: "support.function.builtin.shell, entity.name.function.shell",
        settings: {
          foreground: palette.accent3,
        },
      },
      {
        name: "Shell green",
        scope:
          "string.quoted.double.shell, string.quoted.single.shell, punctuation.definition.string.begin.shell, punctuation.definition.string.end.shell, string.unquoted.heredoc.shell",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "Shell purple",
        scope:
          "keyword.control.heredoc-token.shell, variable.other.normal.shell, punctuation.definition.variable.shell, variable.other.special.shell, variable.other.positional.shell, variable.other.bracket.shell",
        settings: {
          foreground: palette.accent7,
        },
      },
      // }}}
      // Fish{{{
      {
        name: "Fish red",
        scope: "support.function.builtin.fish",
        settings: {
          foreground: palette.accent1,
        },
      },
      {
        name: "Fish orange",
        scope: "support.function.unix.fish",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "Fish blue",
        scope:
          "variable.other.normal.fish, punctuation.definition.variable.fish, variable.other.fixed.fish, variable.other.special.fish",
        settings: {
          foreground: palette.accent6,
        },
      },
      {
        name: "Fish green",
        scope:
          "string.quoted.double.fish, punctuation.definition.string.end.fish, punctuation.definition.string.begin.fish, string.quoted.single.fish",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "Fish purple",
        scope: "constant.character.escape.single.fish",
        settings: {
          foreground: palette.accent7,
        },
      },
      // }}}
      // PowerShell{{{
      {
        name: "PowerShell grey",
        scope: "punctuation.definition.variable.powershell",
        settings: {
          foreground: palette.grey1,
        },
      },
      {
        name: "PowerShell yellow",
        scope:
          "entity.name.function.powershell, support.function.attribute.powershell, support.function.powershell",
        settings: {
          foreground: palette.accent3,
        },
      },
      {
        name: "PowerShell green",
        scope:
          "string.quoted.single.powershell, string.quoted.double.powershell, punctuation.definition.string.begin.powershell, punctuation.definition.string.end.powershell, string.quoted.double.heredoc.powershell",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "PowerShell aqua",
        scope: "variable.other.member.powershell",
        settings: {
          foreground: palette.accent5,
        },
      },
      // }}}
      // GraphQL{{{
      {
        name: "GraphQL white",
        scope: "string.unquoted.alias.graphql",
        settings: {
          foreground: palette.fg,
        },
      },
      {
        name: "GraphQL red",
        scope: "keyword.type.graphql",
        settings: {
          foreground: palette.accent1,
        },
      },
      {
        name: "GraphQL purple",
        scope: "entity.name.fragment.graphql",
        settings: {
          foreground: palette.accent7,
        },
      },
      // }}}
      // {{{Makefile
      {
        name: "Makefile orange",
        scope: "entity.name.function.target.makefile",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "Makefile yellow",
        scope: "variable.other.makefile",
        settings: {
          foreground: palette.accent3,
        },
      },
      {
        name: "Makefile green",
        scope: "meta.scope.prerequisites.makefile",
        settings: {
          foreground: palette.accent4,
        },
      },
      // }}}
      // {{{CMake
      {
        name: "CMake green",
        scope: "string.source.cmake",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "CMake aqua",
        scope: "entity.source.cmake",
        settings: {
          foreground: palette.accent5,
        },
      },
      {
        name: "CMake purple",
        scope: "storage.source.cmake",
        settings: {
          foreground: palette.accent7,
        },
      },
      // }}}
      // {{{VimL
      {
        name: "VimL grey",
        scope: "punctuation.definition.map.viml",
        settings: {
          foreground: palette.grey1,
        },
      },
      {
        name: "VimL orange",
        scope: "storage.type.map.viml",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "VimL green",
        scope: "constant.character.map.viml, constant.character.map.key.viml",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "VimL blue",
        scope: "constant.character.map.special.viml",
        settings: {
          foreground: palette.accent6,
        },
      },
      // }}}
      // {{{Tmux
      {
        name: "Tmux green",
        scope: "constant.language.tmux, constant.numeric.tmux",
        settings: {
          foreground: palette.accent4,
        },
      },
      // }}}
      // {{{Dockerfile
      {
        name: "Dockerfile orange",
        scope: "entity.name.function.package-manager.dockerfile",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "Dockerfile yellow",
        scope: "keyword.operator.flag.dockerfile",
        settings: {
          foreground: palette.accent3,
        },
      },
      {
        name: "Dockerfile green",
        scope:
          "string.quoted.double.dockerfile, string.quoted.single.dockerfile",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "Dockerfile aqua",
        scope: "constant.character.escape.dockerfile",
        settings: {
          foreground: palette.accent5,
        },
      },
      {
        name: "Dockerfile purple",
        scope:
          "entity.name.type.base-image.dockerfile, entity.name.image.dockerfile",
        settings: {
          foreground: palette.accent7,
        },
      },
      // }}}
      // Diff{{{
      {
        name: "Diff grey",
        scope: "punctuation.definition.separator.diff",
        settings: {
          foreground: palette.grey1,
        },
      },
      {
        name: "Diff red",
        scope: "markup.deleted.diff, punctuation.definition.deleted.diff",
        settings: {
          foreground: palette.accent1,
        },
      },
      {
        name: "Diff orange",
        scope: "meta.diff.range.context, punctuation.definition.range.diff",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "Diff yellow",
        scope: "meta.diff.header.from-file",
        settings: {
          foreground: palette.accent3,
        },
      },
      {
        name: "Diff green",
        scope: "markup.inserted.diff, punctuation.definition.inserted.diff",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "Diff blue",
        scope: "markup.changed.diff, punctuation.definition.changed.diff",
        settings: {
          foreground: palette.accent6,
        },
      },
      {
        name: "Diff purple",
        scope: "punctuation.definition.from-file.diff",
        settings: {
          foreground: palette.accent7,
        },
      },
      // }}}
      // {{{Git
      {
        name: "Git red",
        scope:
          "entity.name.section.group-title.ini, punctuation.definition.entity.ini",
        settings: {
          foreground: palette.accent1,
        },
      },
      {
        name: "Git orange",
        scope: "punctuation.separator.key-value.ini",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "Git green",
        scope:
          "string.quoted.double.ini, string.quoted.single.ini, punctuation.definition.string.begin.ini, punctuation.definition.string.end.ini",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "Git aqua",
        scope: "keyword.other.definition.ini",
        settings: {
          foreground: palette.accent5,
        },
      },
      // }}}
      // SQL{{{
      {
        name: "SQL yellow",
        scope: "support.function.aggregate.sql",
        settings: {
          foreground: palette.accent3,
        },
      },
      {
        name: "SQL green",
        scope:
          "string.quoted.single.sql, punctuation.definition.string.end.sql, punctuation.definition.string.begin.sql, string.quoted.double.sql",
        settings: {
          foreground: palette.accent4,
        },
      },
      // }}}
      // GraphQL{{{
      {
        name: "GraphQL yellow",
        scope: "support.type.graphql",
        settings: {
          foreground: palette.accent3,
        },
      },
      {
        name: "GraphQL blue",
        scope: "variable.parameter.graphql",
        settings: {
          foreground: palette.accent6,
        },
      },
      {
        name: "GraphQL aqua",
        scope: "constant.character.enum.graphql",
        settings: {
          foreground: palette.accent5,
        },
      },
      // }}}
      // JSON{{{
      {
        name: "JSON grey",
        scope:
          "punctuation.support.type.property-name.begin.json, punctuation.support.type.property-name.end.json, punctuation.separator.dictionary.key-value.json, punctuation.definition.string.begin.json, punctuation.definition.string.end.json, punctuation.separator.dictionary.pair.json, punctuation.separator.array.json",
        settings: {
          foreground: palette.grey1,
        },
      },
      {
        name: "JSON orange",
        scope: "support.type.property-name.json",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "JSON green",
        scope: "string.quoted.double.json",
        settings: {
          foreground: palette.accent4,
        },
      },
      // }}}
      // YAML{{{
      {
        name: "YAML grey",
        scope: "punctuation.separator.key-value.mapping.yaml",
        settings: {
          foreground: palette.grey1,
        },
      },
      {
        name: "YAML green",
        scope:
          "string.unquoted.plain.out.yaml, string.quoted.single.yaml, string.quoted.double.yaml, punctuation.definition.string.begin.yaml, punctuation.definition.string.end.yaml, string.unquoted.plain.in.yaml, string.unquoted.block.yaml",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "YAML aqua",
        scope:
          "punctuation.definition.anchor.yaml, punctuation.definition.block.sequence.item.yaml",
        settings: {
          foreground: palette.accent5,
        },
      },
      // }}}
      // TOML{{{
      {
        name: "TOML orange",
        scope: "keyword.key.toml",
        settings: {
          foreground: palette.accent2,
        },
      },
      {
        name: "TOML green",
        scope:
          "string.quoted.single.basic.line.toml, string.quoted.single.literal.line.toml, punctuation.definition.keyValuePair.toml",
        settings: {
          foreground: palette.accent4,
        },
      },
      {
        name: "TOML blue",
        scope: "constant.other.boolean.toml",
        settings: {
          foreground: palette.accent6,
        },
      },
      {
        name: "TOML purple",
        scope:
          "entity.other.attribute-name.table.toml, punctuation.definition.table.toml, entity.other.attribute-name.table.array.toml, punctuation.definition.table.array.toml",
        settings: {
          foreground: palette.accent7,
        },
      },
      {
        name: "Comment",
        scope: "comment, string.comment, punctuation.definition.comment",
        settings: {
          foreground: palette.grey1,
        },
      },
    ];
    return syntax;
  }

  getWorkbenchColors(palette: ColorPalette) {
    let selectionBg = `${palette.bg6}d0`;
    let editorSelectionBg = `${palette.bg6}b0`;
    let editorSelectionBgHl = `${palette.bg6}58`;
    let cursorFg = `${palette.fg}`;
    const tokens = {
      foreground: `${palette.grey2}`,
      focusBorder: `${palette.bg5}00`,
      "widget.shadow": `${palette.shadow}`,
      "selection.background": `${selectionBg}`,
      descriptionForeground: `${palette.grey1}`,
      errorForeground: `${palette.accent1}`,
      "icon.foreground": `${palette.accent5}`,
      "textLink.foreground": `${palette.accent4}`,
      "textLink.activeForeground": `${palette.dimAccent4}`,
      "textCodeBlock.background": `${palette.bg2}`,
      "textBlockQuote.background": `${palette.bg2}`,
      "textBlockQuote.border": `${palette.grey2}`,
      "textPreformat.foreground": `${palette.accent3}`,
      "toolbar.hoverBackground": `${palette.bg3}`,
      "button.background": `${palette.grey2}`,
      "button.hoverBackground": `${palette.grey1}`,
      "button.foreground": `${palette.bg}`,
      "button.secondaryBackground": `${palette.bg4}`,
      "button.secondaryForeground": `${palette.fg}`,
      "button.secondaryHoverBackground": `${palette.bg5}`,
      "checkbox.background": `${palette.bg}`,
      "checkbox.foreground": `${palette.accent2}`,
      "checkbox.border": `${palette.bg7}`,
      "dropdown.border": `${palette.bg5}`,
      "dropdown.background": `${palette.bg}`,
      "dropdown.foreground": `${palette.grey2}`,
      "input.border": `${palette.bg5}`,
      "input.background": `${palette.bg}00`,
      "input.foreground": `${palette.fg}`,
      "input.placeholderForeground": `${palette.grey0}`,
      "inputOption.activeBorder": `${palette.accent5}`,
      "inputValidation.errorBorder": `${palette.accent1}`,
      "inputValidation.errorBackground": `${palette.dimAccent1}`,
      "inputValidation.errorForeground": `${palette.fg}`,
      "inputValidation.infoBorder": `${palette.accent6}`,
      "inputValidation.infoBackground": `${palette.dimAccent6}`,
      "inputValidation.infoForeground": `${palette.fg}`,
      "inputValidation.warningBorder": `${palette.accent3}`,
      "inputValidation.warningBackground": `${palette.dimAccent3}`,
      "inputValidation.warningForeground": `${palette.fg}`,
      "scrollbar.shadow": `${palette.shadow}`,
      "scrollbarSlider.activeBackground": `${palette.grey2}`,
      "scrollbarSlider.hoverBackground": `${palette.bg9}`,
      "scrollbarSlider.background": `${palette.bg9}80`,
      "badge.background": `${palette.grey2}`,
      "badge.foreground": `${palette.bg}`,
      "progressBar.background": `${palette.accent4}`,
      "list.activeSelectionForeground": `${palette.fg}`,
      "list.activeSelectionBackground": `${palette.bg5}60`,
      "list.inactiveSelectionForeground": `${palette.grey2}`,
      "list.inactiveSelectionBackground": `${palette.bg5}48`,
      "list.dropBackground": `${palette.bg2}80`,
      "list.focusForeground": `${palette.fg}`,
      "list.focusBackground": `${palette.bg5}60`,
      "list.inactiveFocusBackground": `${palette.bg5}48`,
      "list.highlightForeground": `${palette.accent4}`,
      "list.hoverForeground": `${palette.fg}`,
      "list.hoverBackground": `${palette.bg}00`,
      "list.invalidItemForeground": `${palette.dimAccent1}`,
      "list.errorForeground": `${palette.accent1}`,
      "list.warningForeground": `${palette.accent3}`,
      "tree.indentGuidesStroke": `${palette.grey0}`,
      "activityBar.border": `${palette.bg}`,
      "activityBar.background": `${palette.bg}`,
      "activityBar.foreground": `${palette.grey2}`,
      "activityBar.inactiveForeground": `${palette.grey0}`,
      "activityBar.dropBackground": `${palette.bg}`,
      "activityBar.activeBorder": `${palette.grey1}`,
      "activityBar.activeFocusBorder": `${palette.grey1}`,
      "activityBarBadge.background": `${palette.grey2}`,
      "activityBarBadge.foreground": `${palette.bg}`,
      "sideBar.foreground": `${palette.grey1}`,
      "sideBar.background": `${palette.bg}`,
      "sideBarSectionHeader.background": `${palette.bg}00`,
      "sideBarTitle.foreground": `${palette.grey2}`,
      "sideBarSectionHeader.foreground": `${palette.grey2}`,
      "minimap.findMatchHighlight": `${palette.dimAccent5}60`,
      "minimap.selectionHighlight": `${palette.bg6}f0`,
      "minimap.errorHighlight": `${palette.dimAccent1}80`,
      "minimap.warningHighlight": `${palette.dimAccent3}80`,
      "minimapGutter.addedBackground": `${palette.dimAccent4}a0`,
      "minimapGutter.modifiedBackground": `${palette.dimAccent6}a0`,
      "minimapGutter.deletedBackground": `${palette.dimAccent1}a0`,
      "editorGroup.border": `${palette.bg0}`,
      "editorGroupHeader.tabsBackground": `${palette.bg}`,
      "editorGroupHeader.noTabsBackground": `${palette.bg}`,
      "editorGroup.dropBackground": `${palette.bg5}60`,
      "tab.border": `${palette.bg}`,
      "tab.activeBorder": `${palette.grey2}`,
      "tab.inactiveBackground": `${palette.bg}`,
      "tab.hoverBackground": `${palette.bg}`,
      "tab.hoverForeground": `${palette.fg}`,
      "tab.activeBackground": `${palette.bg}`,
      "tab.activeForeground": `${palette.fg}`,
      "tab.inactiveForeground": `${palette.grey0}`,
      "tab.unfocusedActiveForeground": `${palette.grey2}`,
      "tab.unfocusedActiveBorder": `${palette.grey1}`,
      "tab.unfocusedInactiveForeground": `${palette.grey0}`,
      "tab.unfocusedHoverForeground": `${palette.fg}`,
      "tab.lastPinnedBorder": `${palette.grey2}`,
      "editor.background": `${palette.bg}`,
      "editor.foreground": `${palette.fg}`,
      "editorLineNumber.foreground": `${palette.bg9}`,
      "editorLineNumber.activeForeground": `${palette.grey1}`,
      "editorCursor.foreground": `${cursorFg}`,
      "editor.selectionBackground": `${editorSelectionBg}`,
      "editor.selectionHighlightBackground": `${editorSelectionBgHl}`,
      "editor.inactiveSelectionBackground": `${editorSelectionBgHl}`,
      "editor.wordHighlightBackground": `${palette.bg6}58`,
      "editor.wordHighlightStrongBackground": `${palette.bg6}b0`,
      "editor.hoverHighlightBackground": `${palette.bg6}b0`,
      "editor.findMatchBackground": `${palette.dimAccent2}40`,
      "editor.findMatchHighlightBackground": `${palette.dimAccent4}40`,
      "editor.findRangeHighlightBackground": `${editorSelectionBgHl}`,
      "editor.lineHighlightBorder": `${palette.bg5}00`,
      "editor.lineHighlightBackground": `${palette.bg3}90`,
      "editor.rangeHighlightBackground": `${palette.bg3}80`,
      "editor.symbolHighlightBackground": `${palette.dimAccent6}40`,
      "editorLink.activeForeground": `${palette.accent4}`,
      "editorWhitespace.foreground": `${palette.bg5}`,
      "editorIndentGuide.background": `${palette.grey2}20`,
      "editorIndentGuide.activeBackground": `${palette.grey2}50`,
      "editorInlayHint.background": `${palette.bg}00`,
      "editorInlayHint.foreground": `${palette.bg9}`,
      "editorInlayHint.typeBackground": `${palette.bg}00`,
      "editorInlayHint.typeForeground": `${palette.bg9}`,
      "editorInlayHint.parameterBackground": `${palette.bg}00`,
      "editorInlayHint.parameterForeground": `${palette.bg9}`,
      "editorRuler.foreground": `${palette.bg8}a0`,
      "editorCodeLens.foreground": `${palette.bg9}`,
      "editor.foldBackground": `${palette.bg5}80`,
      "editorBracketMatch.border": `${palette.bg}00`,
      "editorBracketMatch.background": `${palette.grey0}80`,
      "editorBracketHighlight.foreground1": `${palette.accent1}`,
      "editorBracketHighlight.foreground2": `${palette.accent3}`,
      "editorBracketHighlight.foreground3": `${palette.accent4}`,
      "editorBracketHighlight.foreground4": `${palette.accent6}`,
      "editorBracketHighlight.foreground5": `${palette.accent2}`,
      "editorBracketHighlight.foreground6": `${palette.accent7}`,
      "editorBracketHighlight.unexpectedBracket.foreground": `${palette.grey1}`,
      "editorOverviewRuler.border": `${palette.bg}00`,
      "editorOverviewRuler.findMatchForeground": `${palette.dimAccent5}`,
      "editorOverviewRuler.rangeHighlightForeground": `${palette.dimAccent5}`,
      "editorOverviewRuler.selectionHighlightForeground": `${palette.dimAccent5}`,
      "editorOverviewRuler.wordHighlightForeground": `${palette.bg9}`,
      "editorOverviewRuler.wordHighlightStrongForeground": `${palette.bg9}`,
      "editorOverviewRuler.modifiedForeground": `${palette.dimAccent6}a0`,
      "editorOverviewRuler.addedForeground": `${palette.dimAccent4}a0`,
      "editorOverviewRuler.deletedForeground": `${palette.dimAccent1}a0`,
      "editorOverviewRuler.errorForeground": `${palette.accent1}`,
      "editorOverviewRuler.warningForeground": `${palette.accent3}`,
      "editorOverviewRuler.infoForeground": `${palette.accent7}`,
      "editorOverviewRuler.currentContentForeground": `${palette.dimAccent6}`,
      "editorOverviewRuler.incomingContentForeground": `${palette.dimAccent5}`,
      "editorOverviewRuler.commonContentForeground": `${palette.grey1}`,
      "problemsErrorIcon.foreground": `${palette.accent1}`,
      "problemsWarningIcon.foreground": `${palette.accent3}`,
      "problemsInfoIcon.foreground": `${palette.accent6}`,
      "editorUnnecessaryCode.border": `${palette.bg}`,
      "editorUnnecessaryCode.opacity": `#00000080`,
      "editorError.foreground": `${palette.dimAccent1}`,
      "editorWarning.foreground": `${palette.dimAccent3}`,
      "editorInfo.foreground": `${palette.dimAccent6}`,
      "editorHint.foreground": `${palette.dimAccent7}`,
      "editorError.background": `${palette.dimAccent1}00`,
      "editorWarning.background": `${palette.dimAccent3}00`,
      "editorInfo.background": `${palette.dimAccent6}00`,
      "editorGutter.background": `${palette.bg}00`,
      "editorGutter.modifiedBackground": `${palette.dimAccent6}a0`,
      "editorGutter.addedBackground": `${palette.dimAccent4}a0`,
      "editorGutter.deletedBackground": `${palette.dimAccent1}a0`,
      "editorGutter.commentRangeForeground": `${palette.grey0}`,
      "diffEditor.insertedTextBackground": `${palette.dimAccent5}40`,
      "diffEditor.removedTextBackground": `${palette.dimAccent1}40`,
      "diffEditor.diagonalFill": `${palette.bg6}`,
      "editorSuggestWidget.background": `${palette.bg3}`,
      "editorSuggestWidget.foreground": `${palette.fg}`,
      "editorSuggestWidget.highlightForeground": `${palette.accent4}`,
      "editorSuggestWidget.selectedBackground": `${palette.bg5}`,
      "editorSuggestWidget.border": `${palette.bg3}`,
      "editorWidget.background": `${palette.bg}`,
      "editorWidget.foreground": `${palette.fg}`,
      "editorWidget.border": `${palette.bg9}`,
      "editorHoverWidget.background": `${palette.bg2}`,
      "editorHoverWidget.border": `${palette.bg6}`,
      "editorGhostText.background": `${palette.bg}00`,
      "editorGhostText.foreground": `${palette.bg9}`,
      "editorMarkerNavigation.background": `${palette.bg2}`,
      "editorMarkerNavigationError.background": `${palette.dimAccent1}80`,
      "editorMarkerNavigationWarning.background": `${palette.dimAccent3}80`,
      "editorMarkerNavigationInfo.background": `${palette.dimAccent6}80`,
      "peekView.border": `${palette.bg4}`,
      "peekViewEditor.background": `${palette.bg2}`,
      "peekViewEditor.matchHighlightBackground": `${palette.dimAccent3}50`,
      "peekViewEditorGutter.background": `${palette.bg2}`,
      "peekViewResult.fileForeground": `${palette.fg}`,
      "peekViewResult.lineForeground": `${palette.grey2}`,
      "peekViewResult.matchHighlightBackground": `${palette.dimAccent3}50`,
      "peekViewResult.selectionBackground": `${palette.dimAccent5}50`,
      "peekViewResult.selectionForeground": `${palette.fg1}`,
      "peekViewTitleDescription.foreground": `${palette.fg1}`,
      "peekViewTitleLabel.foreground": `${palette.accent4}`,
      "peekViewResult.background": `${palette.bg2}`,
      "peekViewTitle.background": `${palette.bg4}`,
      "pickerGroup.border": `${palette.fg0}1a`,
      "terminal.foreground": `${palette.fg}`,
      "terminalCursor.foreground": `${cursorFg}`,
      "terminal.ansiBlack": `${palette.bg2}`,
      "terminal.ansiBlue": `${palette.accent6}`,
      "terminal.ansiBrightBlack": `${palette.grey1}`,
      "terminal.ansiBrightBlue": `${palette.accent6}`,
      "terminal.ansiBrightCyan": `${palette.accent5}`,
      "terminal.ansiBrightGreen": `${palette.accent4}`,
      "terminal.ansiBrightMagenta": `${palette.accent7}`,
      "terminal.ansiBrightRed": `${palette.accent1}`,
      "terminal.ansiBrightWhite": `${palette.fg0}`,
      "terminal.ansiBrightYellow": `${palette.accent3}`,
      "terminal.ansiCyan": `${palette.accent5}`,
      "terminal.ansiGreen": `${palette.accent4}`,
      "terminal.ansiMagenta": `${palette.accent7}`,
      "terminal.ansiRed": `${palette.accent1}`,
      "terminal.ansiWhite": `${palette.fg}`,
      "terminal.ansiYellow": `${palette.accent3}`,
      "debugToolBar.background": `${palette.bg}`,
      "debugTokenExpression.name": `${palette.accent6}`,
      "debugTokenExpression.value": `${palette.accent4}`,
      "debugTokenExpression.string": `${palette.accent3}`,
      "debugTokenExpression.boolean": `${palette.accent7}`,
      "debugTokenExpression.number": `${palette.accent7}`,
      "debugTokenExpression.error": `${palette.accent1}`,
      "debugIcon.breakpointForeground": `${palette.accent1}`,
      "debugIcon.breakpointDisabledForeground": `${palette.dimAccent1}`,
      "debugIcon.breakpointUnverifiedForeground": `${palette.grey2}`,
      "debugIcon.breakpointCurrentStackframeForeground": `${palette.accent6}`,
      "debugIcon.breakpointStackframeForeground": `${palette.accent1}`,
      "debugIcon.startForeground": `${palette.accent5}`,
      "debugIcon.pauseForeground": `${palette.accent3}`,
      "debugIcon.stopForeground": `${palette.accent1}`,
      "debugIcon.disconnectForeground": `${palette.accent7}`,
      "debugIcon.restartForeground": `${palette.accent5}`,
      "debugIcon.stepOverForeground": `${palette.accent6}`,
      "debugIcon.stepIntoForeground": `${palette.accent6}`,
      "debugIcon.stepOutForeground": `${palette.accent6}`,
      "debugIcon.continueForeground": `${palette.accent6}`,
      "debugIcon.stepBackForeground": `${palette.accent6}`,
      "debugConsole.infoForeground": `${palette.accent4}`,
      "debugConsole.warningForeground": `${palette.accent3}`,
      "debugConsole.errorForeground": `${palette.accent1}`,
      "debugConsole.sourceForeground": `${palette.accent7}`,
      "debugConsoleInputIcon.foreground": `${palette.accent5}`,
      "merge.incomingHeaderBackground": `${palette.dimAccent5}80`,
      "merge.incomingContentBackground": `${palette.dimAccent5}40`,
      "merge.currentHeaderBackground": `${palette.dimAccent6}80`,
      "merge.currentContentBackground": `${palette.dimAccent6}40`,
      "merge.border": `${palette.bg}00`,
      "panel.background": `${palette.bg}`,
      "panel.border": `${palette.bg}`,
      "panelInput.border": `${palette.bg5}`,
      "panelTitle.activeForeground": `${palette.grey2}`,
      "panelTitle.activeBorder": `${palette.grey1}`,
      "panelTitle.inactiveForeground": `${palette.grey0}`,
      "panelSection.border": `${palette.bg0}`,
      "panelSectionHeader.background": `${palette.bg}`,
      "imagePreview.border": `${palette.bg}`,
      "statusBar.background": `${palette.bg}`,
      "statusBar.foreground": `${palette.grey2}`,
      "statusBar.border": `${palette.bg}`,
      "statusBar.debuggingForeground": `${palette.accent2}`,
      "statusBar.debuggingBackground": `${palette.bg}`,
      "statusBar.noFolderBackground": `${palette.bg}`,
      "statusBar.noFolderForeground": `${palette.grey2}`,
      "statusBar.noFolderBorder": `${palette.bg}`,
      "statusBarItem.hoverBackground": `${palette.bg4}`,
      "statusBarItem.activeBackground": `${palette.bg4}a0`,
      "statusBarItem.prominentForeground": `${palette.fg}`,
      "statusBarItem.prominentBackground": `${palette.bg}`,
      "statusBarItem.prominentHoverBackground": `${palette.bg4}a0`,
      "statusBarItem.remoteBackground": `${palette.bg}`,
      "statusBarItem.remoteForeground": `${palette.grey2}`,
      "statusBarItem.errorBackground": `${palette.bg}`,
      "statusBarItem.errorForeground": `${palette.accent1}`,
      "statusBarItem.warningBackground": `${palette.bg}`,
      "statusBarItem.warningForeground": `${palette.accent3}`,
      "titleBar.activeBackground": `${palette.bg}`,
      "titleBar.activeForeground": `${palette.grey2}`,
      "titleBar.inactiveBackground": `${palette.bg}`,
      "titleBar.inactiveForeground": `${palette.grey0}`,
      "titleBar.border": `${palette.bg}`,
      "menubar.selectionBackground": `${palette.bg}`,
      "menubar.selectionBorder": `${palette.bg}`,
      "menu.foreground": `${palette.grey2}`,
      "menu.background": `${palette.bg}`,
      "menu.selectionForeground": `${palette.fg}`,
      "menu.selectionBackground": `${palette.bg2}`,
      "gitDecoration.addedResourceForeground": `${palette.accent4}a0`,
      "gitDecoration.modifiedResourceForeground": `${palette.accent6}a0`,
      "gitDecoration.deletedResourceForeground": `${palette.accent1}a0`,
      "gitDecoration.untrackedResourceForeground": `${palette.accent3}a0`,
      "gitDecoration.ignoredResourceForeground": `${palette.bg7}`,
      "gitDecoration.conflictingResourceForeground": `${palette.accent7}a0`,
      "gitDecoration.submoduleResourceForeground": `${palette.accent2}a0`,
      "gitDecoration.stageDeletedResourceForeground": `${palette.accent5}a0`,
      "gitDecoration.stageModifiedResourceForeground": `${palette.accent5}a0`,
      "notificationCenterHeader.foreground": `${palette.fg0}`,
      "notificationCenterHeader.background": `${palette.bg6}`,
      "notifications.foreground": `${palette.fg}`,
      "notifications.background": `${palette.bg}`,
      "notificationLink.foreground": `${palette.accent4}`,
      "notificationsErrorIcon.foreground": `${palette.accent1}`,
      "notificationsWarningIcon.foreground": `${palette.accent3}`,
      "notificationsInfoIcon.foreground": `${palette.accent6}`,
      "extensionButton.prominentForeground": `${palette.bg}`,
      "extensionButton.prominentBackground": `${palette.grey2}`,
      "extensionButton.prominentHoverBackground": `${palette.grey1}`,
      "extensionBadge.remoteBackground": `${palette.grey2}`,
      "extensionBadge.remoteForeground": `${palette.bg}`,
      "extensionIcon.starForeground": `${palette.accent5}`,
      "extensionIcon.verifiedForeground": `${palette.accent4}`,
      "extensionIcon.preReleaseForeground": `${palette.accent2}`,
      "pickerGroup.foreground": `${palette.fg}`,
      "quickInputTitle.background": `${palette.bg4}`,
      "keybindingLabel.background": `${palette.bg}00`,
      "keybindingLabel.foreground": `${palette.fg}`,
      "keybindingLabel.border": `${palette.bg1}`,
      "keybindingLabel.bottomBorder": `${palette.bg0}`,
      "keybindingTable.headerBackground": `${palette.bg3}`,
      "keybindingTable.rowsBackground": `${palette.bg2}`,
      "settings.headerForeground": `${palette.grey2}`,
      "settings.numberInputBackground": `${palette.bg}`,
      "settings.numberInputForeground": `${palette.accent7}`,
      "settings.numberInputBorder": `${palette.bg7}`,
      "settings.textInputBackground": `${palette.bg}`,
      "settings.textInputForeground": `${palette.accent6}`,
      "settings.textInputBorder": `${palette.bg7}`,
      "settings.checkboxBackground": `${palette.bg}`,
      "settings.checkboxForeground": `${palette.accent2}`,
      "settings.checkboxBorder": `${palette.bg7}`,
      "settings.dropdownBackground": `${palette.bg}`,
      "settings.dropdownForeground": `${palette.accent5}`,
      "settings.dropdownBorder": `${palette.bg7}`,
      "settings.modifiedItemIndicator": `${palette.grey0}`,
      "settings.focusedRowBackground": `${palette.bg2}`,
      "settings.rowHoverBackground": `${palette.bg2}`,
      "editorLightBulb.foreground": `${palette.accent3}`,
      "editorLightBulbAutoFix.foreground": `${palette.accent5}`,
      "welcomePage.progress.foreground": `${palette.accent4}`,
      "welcomePage.tileHoverBackground": `${palette.bg2}`,
      "welcomePage.buttonBackground": `${palette.bg2}`,
      "welcomePage.buttonHoverBackground": `${palette.bg2}a0`,
      "walkThrough.embeddedEditorBackground": `${palette.bg1}`,
      "breadcrumb.foreground": `${palette.grey1}`,
      "breadcrumb.focusForeground": `${palette.fg0}`,
      "breadcrumb.activeSelectionForeground": `${palette.fg}`,
      "symbolIcon.colorForeground": `${palette.fg}`,
      "symbolIcon.snippetForeground": `${palette.fg}`,
      "symbolIcon.fieldForeground": `${palette.fg}`,
      "symbolIcon.fileForeground": `${palette.fg}`,
      "symbolIcon.folderForeground": `${palette.fg}`,
      "symbolIcon.textForeground": `${palette.fg}`,
      "symbolIcon.unitForeground": `${palette.fg}`,
      "symbolIcon.keywordForeground": `${palette.accent1}`,
      "symbolIcon.operatorForeground": `${palette.accent2}`,
      "symbolIcon.classForeground": `${palette.accent3}`,
      "symbolIcon.eventForeground": `${palette.accent3}`,
      "symbolIcon.interfaceForeground": `${palette.accent3}`,
      "symbolIcon.structForeground": `${palette.accent3}`,
      "symbolIcon.functionForeground": `${palette.accent4}`,
      "symbolIcon.keyForeground": `${palette.accent4}`,
      "symbolIcon.methodForeground": `${palette.accent4}`,
      "symbolIcon.stringForeground": `${palette.accent4}`,
      "symbolIcon.constantForeground": `${palette.accent5}`,
      "symbolIcon.enumeratorMemberForeground": `${palette.accent5}`,
      "symbolIcon.nullForeground": `${palette.accent5}`,
      "symbolIcon.propertyForeground": `${palette.accent5}`,
      "symbolIcon.typeParameterForeground": `${palette.accent5}`,
      "symbolIcon.arrayForeground": `${palette.accent6}`,
      "symbolIcon.referenceForeground": `${palette.accent6}`,
      "symbolIcon.variableForeground": `${palette.accent6}`,
      "symbolIcon.booleanForeground": `${palette.accent7}`,
      "symbolIcon.constructorForeground": `${palette.accent7}`,
      "symbolIcon.enumeratorForeground": `${palette.accent7}`,
      "symbolIcon.moduleForeground": `${palette.accent7}`,
      "symbolIcon.namespaceForeground": `${palette.accent7}`,
      "symbolIcon.numberForeground": `${palette.accent7}`,
      "symbolIcon.objectForeground": `${palette.accent7}`,
      "symbolIcon.packageForeground": `${palette.accent7}`,
      "editor.snippetTabstopHighlightBackground": `${palette.bg5}a0`,
      "editor.snippetFinalTabstopHighlightBackground": `${palette.dimAccent4}40`,
      "editor.snippetFinalTabstopHighlightBorder": `${palette.bg}`,
      "charts.red": `${palette.accent1}`,
      "charts.orange": `${palette.accent2}`,
      "charts.yellow": `${palette.accent3}`,
      "charts.green": `${palette.accent4}`,
      "charts.blue": `${palette.accent6}`,
      "charts.purple": `${palette.accent7}`,
      "charts.foreground": `${palette.fg}`,
      "ports.iconRunningProcessForeground": `${palette.accent2}`,
      "sash.hoverBorder": `${palette.grey0}`,
      "notebook.cellBorderColor": `${palette.bg7}`,
      "notebook.cellStatusBarItemHoverBackground": `${palette.bg4}`,
      "notebook.focusedCellBackground": `${palette.bg}`,
      "notebook.cellHoverBackground": `${palette.bg}`,
      "notebook.outputContainerBackgroundColor": `${palette.bg2}`,
      "notebookStatusSuccessIcon.foreground": `${palette.accent4}`,
      "notebookStatusErrorIcon.foreground": `${palette.accent1}`,
      "notebookStatusRunningIcon.foreground": `${palette.accent6}`,
      "notebook.focusedCellBorder": `${palette.bg7}`,
      "notebook.focusedEditorBorder": `${palette.bg7}`,
      "notebook.selectedCellBorder": `${palette.bg7}`,
      "notebook.focusedRowBorder": `${palette.bg7}`,
      "notebook.inactiveFocusedCellBorder": `${palette.bg7}`,
      "notebook.cellToolbarSeparator": `${palette.bg7}`,
      "testing.iconFailed": `${palette.accent1}`,
      "testing.iconErrored": `${palette.accent1}`,
      "testing.iconPassed": `${palette.accent5}`,
      "testing.runAction": `${palette.accent5}`,
      "testing.iconQueued": `${palette.accent6}`,
      "testing.iconUnset": `${palette.accent3}`,
      "testing.iconSkipped": `${palette.accent7}`,
      "gitlens.gutterBackgroundColor": `${palette.bg}`,
      "gitlens.gutterForegroundColor": `${palette.fg}`,
      "gitlens.gutterUncommittedForegroundColor": `${palette.accent6}`,
      "gitlens.trailingLineForegroundColor": `${palette.grey1}`,
      "gitlens.lineHighlightBackgroundColor": `${palette.bg2}`,
      "gitlens.lineHighlightOverviewRulerColor": `${palette.grey2}`,
      "gitlens.closedPullRequestIconColor": `${palette.accent1}`,
      "gitlens.openPullRequestIconColor": `${palette.accent5}`,
      "gitlens.mergedPullRequestIconColor": `${palette.accent7}`,
      "gitlens.unpushlishedChangesIconColor": `${palette.accent6}`,
      "gitlens.unpublishedCommitIconColor": `${palette.accent3}`,
      "gitlens.unpulledChangesIconColor": `${palette.accent2}`,
      "gitlens.decorations.addedForegroundColor": `${palette.accent4}`,
      "gitlens.decorations.copiedForegroundColor": `${palette.accent7}`,
      "gitlens.decorations.deletedForegroundColor": `${palette.accent1}`,
      "gitlens.decorations.ignoredForegroundColor": `${palette.grey2}`,
      "gitlens.decorations.modifiedForegroundColor": `${palette.accent6}`,
      "gitlens.decorations.untrackedForegroundColor": `${palette.accent3}`,
      "gitlens.decorations.renamedForegroundColor": `${palette.accent7}`,
      "gitlens.decorations.branchAheadForegroundColor": `${palette.accent5}`,
      "gitlens.decorations.branchBehindForegroundColor": `${palette.accent2}`,
      "gitlens.decorations.branchDivergedForegroundColor": `${palette.accent3}`,
      "gitlens.decorations.branchUpToDateForegroundColor": `${palette.fg}`,
      "gitlens.decorations.branchUnpublishedForegroundColor": `${palette.accent6}`,
      "gitlens.decorations.branchMissingUpstreamForegroundColor": `${palette.accent1}`,
      "issues.open": `${palette.accent5}`,
      "issues.closed": `${palette.accent1}`,
      "rust_analyzer.inlayHints.foreground": `${palette.bg9}`,
      "rust_analyzer.inlayHints.background": `${palette.bg}00`,
      "rust_analyzer.syntaxTreeBorder": `${palette.accent1}`,
    };
    return tokens;
  }
}
