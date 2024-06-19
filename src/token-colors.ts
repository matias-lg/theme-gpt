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
      operatorOverload: `${palette.orange}`,
      memberOperatorOverload: `${palette.orange}`,

      "variable.defaultLibrary:javascript": `${palette.purple}`,
      "property.defaultLibrary:javascript": `${palette.purple}`,

      "variable.defaultLibrary:javascriptreact": `${palette.purple}`,
      "property.defaultLibrary:javascriptreact": `${palette.purple}`,

      "class:typescript": `${palette.aqua}`,
      "interface:typescript": `${palette.aqua}`,
      "enum:typescript": `${palette.purple}`,
      "enumMember:typescript": `${palette.blue}`,
      "namespace:typescript": `${palette.purple}`,
      "variable.defaultLibrary:typescript": `${palette.purple}`,
      "property.defaultLibrary:typescript": `${palette.purple}`,

      "class:typescriptreact": `${palette.aqua}`,
      "interface:typescriptreact": `${palette.aqua}`,
      "enum:typescriptreact": `${palette.purple}`,
      "enumMember:typescriptreact": `${palette.blue}`,
      "namespace:typescriptreact": `${palette.purple}`,
      "variable.defaultLibrary:typescriptreact": `${palette.purple}`,
      "property.defaultLibrary:typescriptreact": `${palette.purple}`,

      "intrinsic:python": `${palette.purple}`,
      "module:python": `${palette.blue}`,
      "class:python": `${palette.aqua}`,

      "macro:rust": `${palette.aqua}`,
      "namespace:rust": `${palette.purple}`,
      "selfKeyword:rust": `${palette.purple}`,
    };
  }

  getSyntaxColors(palette: ColorPalette) {
    const syntax = [
      {
        name: "Keyword",
        scope:
          "keyword, storage.type.function, storage.type.class, storage.type.enum, storage.type.interface, storage.type.property, keyword.operator.new, keyword.operator.expression, keyword.operator.new, keyword.operator.delete, storage.type.extends",
        settings: {
          foreground: palette.red,
        },
      },
      {
        name: "Debug",
        scope: "keyword.other.debugger",
        settings: {
          foreground: palette.red,
        },
      },
      {
        name: "Storage",
        scope:
          "storage, modifier, keyword.var, entity.name.tag, keyword.control.case, keyword.control.switch",
        settings: {
          foreground: palette.orange,
        },
      },
      {
        name: "Operator",
        scope: "keyword.operator",
        settings: {
          foreground: palette.orange,
        },
      },
      {
        name: "String",
        scope:
          "string, punctuation.definition.string.end, punctuation.definition.string.begin, punctuation.definition.string.template.begin, punctuation.definition.string.template.end",
        settings: {
          foreground: palette.yellow,
        },
      },
      {
        name: "Attribute",
        scope: "entity.other.attribute-name",
        settings: {
          foreground: palette.yellow,
        },
      },
      {
        name: "String Escape",
        scope:
          "constant.character.escape, punctuation.quasi.element, punctuation.definition.template-expression, punctuation.section.embedded, storage.type.format, constant.other.placeholder, constant.other.placeholder, variable.interpolation",
        settings: {
          foreground: palette.green,
        },
      },
      {
        name: "Function",
        scope:
          "entity.name.function, support.function, meta.function, meta.function-call, meta.definition.method",
        settings: {
          foreground: palette.green,
        },
      },
      {
        name: "Preproc",
        scope:
          "keyword.control.at-rule, keyword.control.import, keyword.control.export, storage.type.namespace, punctuation.decorator, keyword.control.directive, keyword.preprocessor, punctuation.definition.preprocessor, punctuation.definition.directive, keyword.other.import, keyword.other.package, entity.name.type.namespace, entity.name.scope-resolution, keyword.other.using, keyword.package, keyword.import, keyword.map",
        settings: {
          foreground: palette.aqua,
        },
      },
      {
        name: "Annotation",
        scope: "storage.type.annotation",
        settings: {
          foreground: palette.aqua,
        },
      },
      {
        name: "Label",
        scope: "entity.name.label, constant.other.label",
        settings: {
          foreground: palette.aqua,
        },
      },
      {
        name: "Modules",
        scope:
          "support.module, support.node, support.other.module, support.type.object.module, entity.name.type.module, entity.name.type.class.module, keyword.control.module",
        settings: {
          foreground: palette.aqua,
        },
      },
      {
        name: "Type",
        scope: "storage.type, support.type, entity.name.type, keyword.type",
        settings: {
          foreground: palette.blue,
        },
      },
      {
        name: "Class",
        scope:
          "entity.name.type.class, support.class, entity.name.class, entity.other.inherited-class, storage.class",
        settings: {
          foreground: palette.blue,
        },
      },
      {
        name: "Number",
        scope: "constant.numeric",
        settings: {
          foreground: palette.purple,
        },
      },
      {
        name: "Boolean",
        scope: "constant.language.boolean",
        settings: {
          foreground: palette.purple,
        },
      },
      {
        name: "Macro",
        scope: "entity.name.function.preprocessor",
        settings: {
          foreground: palette.purple,
        },
      },
      {
        name: "Special identifier",
        scope:
          "variable.language.this, variable.language.self, variable.language.super, keyword.other.this, variable.language.special, constant.language.null, constant.language.undefined, constant.language.nan",
        settings: {
          foreground: palette.purple,
        },
      },
      {
        name: "Constant",
        scope: "constant.language, support.constant",
        settings: {
          foreground: palette.purple,
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
          foreground: palette.red,
          fontStyle: "bold",
        },
      },
      {
        name: "Markdown heading2",
        scope: "heading.2.markdown, markup.heading.setext.2.markdown",
        settings: {
          foreground: palette.orange,
          fontStyle: "bold",
        },
      },
      {
        name: "Markdown heading3",
        scope: "heading.3.markdown",
        settings: {
          foreground: palette.yellow,
          fontStyle: "bold",
        },
      },
      {
        name: "Markdown heading4",
        scope: "heading.4.markdown",
        settings: {
          foreground: palette.green,
          fontStyle: "bold",
        },
      },
      {
        name: "Markdown heading5",
        scope: "heading.5.markdown",
        settings: {
          foreground: palette.blue,
          fontStyle: "bold",
        },
      },
      {
        name: "Markdown heading6",
        scope: "heading.6.markdown",
        settings: {
          foreground: palette.purple,
          fontStyle: "bold",
        },
      },
      
      {
        name: "Markdown link text",
        scope:
          "markup.underline.link.image.markdown, markup.underline.link.markdown",
        settings: {
          foreground: palette.green,
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
          foreground: palette.yellow,
        },
      },
      {
        name: "Markdown code type",
        scope: "fenced_code.block.language",
        settings: {
          foreground: palette.yellow,
        },
      },
      {
        name: "Markdown code block",
        scope:
          "markup.fenced_code.block.markdown, markup.inline.raw.string.markdown",
        settings: {
          foreground: palette.green,
        },
      },
      {
        name: "Markdown list mark",
        scope: "punctuation.definition.list.begin.markdown",
        settings: {
          foreground: palette.red,
        },
      },
      // }}}
      // reStructuredText{{{
      {
        name: "reStructuredText heading",
        scope: "punctuation.definition.heading.restructuredtext",
        settings: {
          foreground: palette.orange,
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
          foreground: palette.aqua,
        },
      },
      {
        name: "reStructuredText purple",
        scope: "constant.other.footnote.link.restructuredtext",
        settings: {
          foreground: palette.purple,
        },
      },
      {
        name: "reStructuredText red",
        scope: "support.directive.restructuredtext",
        settings: {
          foreground: palette.red,
        },
      },
      {
        name: "reStructuredText green",
        scope:
          "entity.name.directive.restructuredtext, markup.raw.restructuredtext, markup.raw.inner.restructuredtext, string.other.link.title.restructuredtext",
        settings: {
          foreground: palette.green,
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
          foreground: palette.red,
        },
      },
      {
        name: "LaTex orange",
        scope:
          "support.function.section.latex, keyword.control.table.cell.latex, keyword.control.table.newline.latex",
        settings: {
          foreground: palette.orange,
        },
      },
      {
        name: "LaTex yellow",
        scope:
          "support.class.latex, variable.parameter.latex, variable.parameter.function.latex, variable.parameter.definition.label.latex, constant.other.reference.label.latex",
        settings: {
          foreground: palette.yellow,
        },
      },
      {
        name: "LaTex purple",
        scope: "keyword.control.preamble.latex",
        settings: {
          foreground: palette.purple,
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
          foreground: palette.orange,
        },
      },
      {
        name: "Html yellow",
        scope:
          "entity.other.attribute-name.html, entity.other.attribute-name.xml, entity.other.attribute-name.localname.xml",
        settings: {
          foreground: palette.yellow,
        },
      },
      {
        name: "Html green",
        scope:
          "string.quoted.double.html, string.quoted.single.html, punctuation.definition.string.begin.html, punctuation.definition.string.end.html, punctuation.separator.key-value.html, punctuation.definition.string.begin.xml, punctuation.definition.string.end.xml, string.quoted.double.xml, string.quoted.single.xml, punctuation.definition.tag.begin.html, punctuation.definition.tag.end.html, punctuation.definition.tag.xml, meta.tag.xml, meta.tag.preprocessor.xml, meta.tag.other.html, meta.tag.block.any.html, meta.tag.inline.any.html",
        settings: {
          foreground: palette.green,
        },
      },
      {
        name: "Html purple",
        scope: "variable.language.documentroot.xml, meta.tag.sgml.doctype.xml",
        settings: {
          foreground: palette.purple,
        },
      },
      // }}}
      // Proto{{{
      {
        name: "Proto yellow",
        scope: "storage.type.proto",
        settings: {
          foreground: palette.yellow,
        },
      },
      {
        name: "Proto green",
        scope:
          "string.quoted.double.proto.syntax, string.quoted.single.proto.syntax, string.quoted.double.proto, string.quoted.single.proto",
        settings: {
          foreground: palette.green,
        },
      },
      {
        name: "Proto aqua",
        scope: "entity.name.class.proto, entity.name.class.message.proto",
        settings: {
          foreground: palette.aqua,
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
          foreground: palette.red,
        },
      },
      {
        name: "CSS orange",
        scope: "keyword.other.unit",
        settings: {
          foreground: palette.orange,
        },
      },
      {
        name: "CSS yellow",
        scope:
          "entity.other.attribute-name.pseudo-class.css, entity.other.attribute-name.pseudo-element.css",
        settings: {
          foreground: palette.yellow,
        },
      },
      {
        name: "CSS green",
        scope:
          "string.quoted.single.css, string.quoted.double.css, support.constant.property-value.css, meta.property-value.css, punctuation.definition.string.begin.css, punctuation.definition.string.end.css, constant.numeric.css, support.constant.font-name.css, variable.parameter.keyframe-list.css",
        settings: {
          foreground: palette.green,
        },
      },
      {
        name: "CSS aqua",
        scope: "support.type.property-name.css",
        settings: {
          foreground: palette.aqua,
        },
      },
      {
        name: "CSS blue",
        scope: "support.type.vendored.property-name.css",
        settings: {
          foreground: palette.blue,
        },
      },
      {
        name: "CSS purple",
        scope:
          "entity.name.tag.css, entity.other.keyframe-offset.css, punctuation.definition.keyword.css, keyword.control.at-rule.keyframes.css, meta.selector.css",
        settings: {
          foreground: palette.purple,
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
          foreground: palette.orange,
        },
      },
      {
        name: "SASS yellow",
        scope:
          "punctuation.definition.interpolation.begin.bracket.curly.scss, punctuation.definition.interpolation.end.bracket.curly.scss",
        settings: {
          foreground: palette.yellow,
        },
      },
      {
        name: "SASS green",
        scope:
          "punctuation.definition.string.begin.scss, punctuation.definition.string.end.scss, string.quoted.double.scss, string.quoted.single.scss, constant.character.css.sass, meta.property-value.scss",
        settings: {
          foreground: palette.green,
        },
      },
      {
        name: "SASS purple",
        scope:
          "keyword.control.at-rule.include.scss, keyword.control.at-rule.use.scss, keyword.control.at-rule.mixin.scss, keyword.control.at-rule.extend.scss, keyword.control.at-rule.import.scss",
        settings: {
          foreground: palette.purple,
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
          foreground: palette.yellow,
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
          foreground: palette.red,
        },
      },
      {
        name: "JavaScript orange",
        scope: "storage.type.js, storage.type.function.arrow.js",
        settings: {
          foreground: palette.orange,
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
          foreground: palette.green,
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
          foreground: palette.green,
        },
      },
      {
        name: "TypeScript aqua",
        scope:
          "entity.name.type.ts, entity.name.type.interface.ts, entity.other.inherited-class.ts, entity.name.type.alias.ts, entity.name.type.class.ts, entity.name.type.enum.ts",
        settings: {
          foreground: palette.aqua,
        },
      },
      {
        name: "TypeScript orange",
        scope:
          "storage.type.ts, storage.type.function.arrow.ts, storage.type.type.ts",
        settings: {
          foreground: palette.orange,
        },
      },
      {
        name: "TypeScript blue",
        scope: "entity.name.type.module.ts",
        settings: {
          foreground: palette.blue,
        },
      },
      {
        name: "TypeScript purple",
        scope:
          "keyword.control.import.ts, keyword.control.export.ts, storage.type.namespace.ts",
        settings: {
          foreground: palette.purple,
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
          foreground: palette.green,
        },
      },
      {
        name: "TSX aqua",
        scope:
          "entity.name.type.tsx, entity.name.type.interface.tsx, entity.other.inherited-class.tsx, entity.name.type.alias.tsx, entity.name.type.class.tsx, entity.name.type.enum.tsx",
        settings: {
          foreground: palette.aqua,
        },
      },
      {
        name: "TSX blue",
        scope: "entity.name.type.module.tsx",
        settings: {
          foreground: palette.blue,
        },
      },
      {
        name: "TSX purple",
        scope:
          "keyword.control.import.tsx, keyword.control.export.tsx, storage.type.namespace.tsx",
        settings: {
          foreground: palette.purple,
        },
      },
      {
        name: "TSX orange",
        scope:
          "storage.type.tsx, storage.type.function.arrow.tsx, storage.type.type.tsx, support.class.component.tsx",
        settings: {
          foreground: palette.orange,
        },
      },
      // }}}
      // CoffeeScript{{{
      {
        name: "CoffeeScript orange",
        scope: "storage.type.function.coffee",
        settings: {
          foreground: palette.orange,
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
          foreground: palette.orange,
        },
      },
      {
        name: "PureScript yellow",
        scope: "entity.name.function.purescript",
        settings: {
          foreground: palette.yellow,
        },
      },
      {
        name: "PureScript green",
        scope:
          "string.quoted.single.purescript, string.quoted.double.purescript, punctuation.definition.string.begin.purescript, punctuation.definition.string.end.purescript, string.quoted.triple.purescript, entity.name.type.purescript",
        settings: {
          foreground: palette.green,
        },
      },
      {
        name: "PureScript purple",
        scope: "support.other.module.purescript",
        settings: {
          foreground: palette.purple,
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
          foreground: palette.orange,
        },
      },
      {
        name: "Dart yellow",
        scope: "support.class.dart",
        settings: {
          foreground: palette.yellow,
        },
      },
      {
        name: "Dart green",
        scope:
          "entity.name.function.dart, string.interpolated.single.dart, string.interpolated.double.dart",
        settings: {
          foreground: palette.green,
        },
      },
      {
        name: "Dart blue",
        scope: "variable.language.dart",
        settings: {
          foreground: palette.blue,
        },
      },
      {
        name: "Dart purple",
        scope: "keyword.other.import.dart, storage.type.annotation.dart",
        settings: {
          foreground: palette.purple,
        },
      },
      // }}}
      // Pug{{{
      {
        name: "Pug red",
        scope: "entity.other.attribute-name.class.pug",
        settings: {
          foreground: palette.red,
        },
      },
      {
        name: "Pug orange",
        scope: "storage.type.function.pug",
        settings: {
          foreground: palette.orange,
        },
      },
      {
        name: "Pug aqua",
        scope: "entity.other.attribute-name.tag.pug",
        settings: {
          foreground: palette.aqua,
        },
      },
      {
        name: "Pug purple",
        scope: "entity.name.tag.pug, storage.type.import.include.pug",
        settings: {
          foreground: palette.purple,
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
          foreground: palette.red,
        },
      },
      {
        name: "C orange",
        scope: "punctuation.separator.pointer-access.c",
        settings: {
          foreground: palette.orange,
        },
      },
      {
        name: "C aqua",
        scope: "variable.other.member.c",
        settings: {
          foreground: palette.aqua,
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
          foreground: palette.red,
        },
      },
      {
        name: "C++ orange",
        scope:
          "punctuation.separator.pointer-access.cpp, punctuation.section.angle-brackets.begin.template.call.cpp, punctuation.section.angle-brackets.end.template.call.cpp",
        settings: {
          foreground: palette.orange,
        },
      },
      {
        name: "C++ aqua",
        scope: "variable.other.member.cpp",
        settings: {
          foreground: palette.aqua,
        },
      },
      // }}}
      // C#{{{
      {
        name: "C# red",
        scope: "keyword.other.using.cs",
        settings: {
          foreground: palette.red,
        },
      },
      {
        name: "C# yellow",
        scope:
          "keyword.type.cs, constant.character.escape.cs, punctuation.definition.interpolation.begin.cs, punctuation.definition.interpolation.end.cs",
        settings: {
          foreground: palette.yellow,
        },
      },
      {
        name: "C# green",
        scope:
          "string.quoted.double.cs, string.quoted.single.cs, punctuation.definition.string.begin.cs, punctuation.definition.string.end.cs",
        settings: {
          foreground: palette.green,
        },
      },
      {
        name: "C# aqua",
        scope: "variable.other.object.property.cs",
        settings: {
          foreground: palette.aqua,
        },
      },
      {
        name: "C# purple",
        scope: "entity.name.type.namespace.cs",
        settings: {
          foreground: palette.purple,
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
          foreground: palette.yellow,
        },
      },
      {
        name: "F# green",
        scope:
          "string.quoted.double.fsharp, string.quoted.single.fsharp, punctuation.definition.string.begin.fsharp, punctuation.definition.string.end.fsharp",
        settings: {
          foreground: palette.green,
        },
      },
      {
        name: "F# blue",
        scope: "entity.name.section.fsharp",
        settings: {
          foreground: palette.blue,
        },
      },
      {
        name: "F# purple",
        scope: "support.function.attribute.fsharp",
        settings: {
          foreground: palette.purple,
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
          foreground: palette.red,
        },
      },
      {
        name: "Java orange",
        scope: "storage.type.function.arrow.java, keyword.control.ternary.java",
        settings: {
          foreground: palette.orange,
        },
      },
      {
        name: "Java aqua",
        scope: "variable.other.property.java",
        settings: {
          foreground: palette.aqua,
        },
      },
      {
        name: "Java purple",
        scope:
          "variable.language.wildcard.java, storage.modifier.import.java, storage.type.annotation.java, punctuation.definition.annotation.java, storage.modifier.package.java, entity.name.type.module.java",
        settings: {
          foreground: palette.purple,
        },
      },
      // }}}
      // Kotlin{{{
      {
        name: "Kotlin red",
        scope: "keyword.other.import.kotlin",
        settings: {
          foreground: palette.red,
        },
      },
      {
        name: "Kotlin orange",
        scope: "storage.type.kotlin",
        settings: {
          foreground: palette.orange,
        },
      },
      {
        name: "Kotlin aqua",
        scope: "constant.language.kotlin",
        settings: {
          foreground: palette.aqua,
        },
      },
      {
        name: "Kotlin purple",
        scope: "entity.name.package.kotlin, storage.type.annotation.kotlin",
        settings: {
          foreground: palette.purple,
        },
      },
      // }}}
      // Scala{{{
      {
        name: "Scala purple",
        scope: "entity.name.package.scala",
        settings: {
          foreground: palette.purple,
        },
      },
      {
        name: "Scala blue",
        scope: "constant.language.scala",
        settings: {
          foreground: palette.blue,
        },
      },
      {
        name: "Scala aqua",
        scope: "entity.name.import.scala",
        settings: {
          foreground: palette.aqua,
        },
      },
      {
        name: "Scala green",
        scope:
          "string.quoted.double.scala, string.quoted.single.scala, punctuation.definition.string.begin.scala, punctuation.definition.string.end.scala, string.quoted.double.interpolated.scala, string.quoted.single.interpolated.scala, string.quoted.triple.scala",
        settings: {
          foreground: palette.green,
        },
      },
      {
        name: "Scala yellow",
        scope: "entity.name.class, entity.other.inherited-class.scala",
        settings: {
          foreground: palette.yellow,
        },
      },
      {
        name: "Scala orange",
        scope: "keyword.declaration.stable.scala, keyword.other.arrow.scala",
        settings: {
          foreground: palette.orange,
        },
      },
      {
        name: "Scala red",
        scope: "keyword.other.import.scala",
        settings: {
          foreground: palette.red,
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
          foreground: palette.red,
        },
      },
      {
        name: "Groovy orange",
        scope: "storage.type.def.groovy",
        settings: {
          foreground: palette.orange,
        },
      },
      {
        name: "Groovy green",
        scope: "variable.other.interpolated.groovy, meta.method.groovy",
        settings: {
          foreground: palette.green,
        },
      },
      {
        name: "Groovy aqua",
        scope:
          "storage.modifier.import.groovy, storage.modifier.package.groovy",
        settings: {
          foreground: palette.aqua,
        },
      },
      {
        name: "Groovy purple",
        scope: "storage.type.annotation.groovy",
        settings: {
          foreground: palette.purple,
        },
      },
      // }}}
      // Go{{{
      {
        name: "Go red",
        scope: "keyword.type.go",
        settings: {
          foreground: palette.red,
        },
      },
      {
        name: "Go aqua",
        scope: "entity.name.package.go",
        settings: {
          foreground: palette.aqua,
        },
      },
      {
        name: "Go purple",
        scope: "keyword.import.go, keyword.package.go",
        settings: {
          foreground: palette.purple,
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
          foreground: palette.orange,
        },
      },
      {
        name: "Rust aqua",
        scope: "support.constant.core.rust",
        settings: {
          foreground: palette.aqua,
        },
      },
      {
        name: "Rust purple",
        scope:
          "meta.attribute.rust, variable.language.rust, storage.type.module.rust",
        settings: {
          foreground: palette.purple,
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
          foreground: palette.aqua,
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
          foreground: palette.orange,
        },
      },
      {
        name: "PHP aqua",
        scope: "constant.language.php, support.other.namespace.php",
        settings: {
          foreground: palette.aqua,
        },
      },
      {
        name: "PHP blue",
        scope:
          "storage.type.modifier.access.control.public.cpp, storage.type.modifier.access.control.private.cpp",
        settings: {
          foreground: palette.blue,
        },
      },
      {
        name: "PHP purple",
        scope: "keyword.control.import.include.php, storage.type.php",
        settings: {
          foreground: palette.purple,
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
          foreground: palette.aqua,
        },
      },
      {
        name: "Python purple",
        scope:
          "keyword.control.import.python, keyword.control.import.from.python",
        settings: {
          foreground: palette.purple,
        },
      },
      // }}}
      // Lua{{{
      {
        name: "Lua aqua",
        scope: "constant.language.lua",
        settings: {
          foreground: palette.aqua,
        },
      },
      {
        name: "Lua blue",
        scope: "entity.name.class.lua",
        settings: {
          foreground: palette.blue,
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
          foreground: palette.orange,
        },
      },
      {
        name: "Ruby green",
        scope: "keyword.other.special-method.ruby",
        settings: {
          foreground: palette.green,
        },
      },
      {
        name: "Ruby purple",
        scope:
          "keyword.control.module.ruby, punctuation.definition.constant.ruby",
        settings: {
          foreground: palette.purple,
        },
      },
      {
        name: "Ruby yellow",
        scope:
          "string.regexp.character-class.ruby,string.regexp.interpolated.ruby,punctuation.definition.character-class.ruby,string.regexp.group.ruby, punctuation.section.regexp.ruby, punctuation.definition.group.ruby",
        settings: {
          foreground: palette.yellow,
        },
      },
      {
        name: "Ruby blue",
        scope: "variable.other.constant.ruby",
        settings: {
          foreground: palette.blue,
        },
      },
      // }}}
      // Haskell{{{
      {
        name: "Haskell orange",
        scope:
          "keyword.other.arrow.haskell, keyword.other.big-arrow.haskell, keyword.other.double-colon.haskell",
        settings: {
          foreground: palette.orange,
        },
      },
      {
        name: "Haskell yellow",
        scope: "storage.type.haskell",
        settings: {
          foreground: palette.yellow,
        },
      },
      {
        name: "Haskell green",
        scope:
          "constant.other.haskell, string.quoted.double.haskell, string.quoted.single.haskell, punctuation.definition.string.begin.haskell, punctuation.definition.string.end.haskell",
        settings: {
          foreground: palette.green,
        },
      },
      {
        name: "Haskell blue",
        scope: "entity.name.function.haskell",
        settings: {
          foreground: palette.blue,
        },
      },
      {
        name: "Haskell aqua",
        scope: "entity.name.namespace, meta.preprocessor.haskell",
        settings: {
          foreground: palette.aqua,
        },
      },
      // }}}
      // Julia{{{
      {
        name: "Julia red",
        scope: "keyword.control.import.julia, keyword.control.export.julia",
        settings: {
          foreground: palette.red,
        },
      },
      {
        name: "Julia orange",
        scope: "keyword.storage.modifier.julia",
        settings: {
          foreground: palette.orange,
        },
      },
      {
        name: "Julia aqua",
        scope: "constant.language.julia",
        settings: {
          foreground: palette.aqua,
        },
      },
      {
        name: "Julia purple",
        scope: "support.function.macro.julia",
        settings: {
          foreground: palette.purple,
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
          foreground: palette.yellow,
        },
      },
      // }}}
      // R{{{
      {
        name: "R orange",
        scope: "keyword.other.r",
        settings: {
          foreground: palette.orange,
        },
      },
      {
        name: "R green",
        scope: "entity.name.function.r, variable.function.r",
        settings: {
          foreground: palette.green,
        },
      },
      {
        name: "R aqua",
        scope: "constant.language.r",
        settings: {
          foreground: palette.aqua,
        },
      },
      {
        name: "R purple",
        scope: "entity.namespace.r",
        settings: {
          foreground: palette.purple,
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
          foreground: palette.red,
        },
      },
      {
        name: "Erlang yellow",
        scope: "entity.name.type.class.module.erlang",
        settings: {
          foreground: palette.yellow,
        },
      },
      {
        name: "Erlang green",
        scope:
          "string.quoted.double.erlang, string.quoted.single.erlang, punctuation.definition.string.begin.erlang, punctuation.definition.string.end.erlang",
        settings: {
          foreground: palette.green,
        },
      },
      {
        name: "Erlang purple",
        scope:
          "keyword.control.directive.export.erlang, keyword.control.directive.module.erlang, keyword.control.directive.import.erlang, keyword.control.directive.behaviour.erlang",
        settings: {
          foreground: palette.purple,
        },
      },
      // }}}
      // Elixir{{{
      {
        name: "Elixir aqua",
        scope:
          "variable.other.readwrite.module.elixir, punctuation.definition.variable.elixir",
        settings: {
          foreground: palette.aqua,
        },
      },
      {
        name: "Elixir blue",
        scope: "constant.language.elixir",
        settings: {
          foreground: palette.blue,
        },
      },
      {
        name: "Elixir purple",
        scope: "keyword.control.module.elixir",
        settings: {
          foreground: palette.purple,
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
          foreground: palette.orange,
        },
      },
      {
        name: "OCaml aqua",
        scope: "constant.language.variant.ocaml",
        settings: {
          foreground: palette.aqua,
        },
      },
      // }}}
      // Perl{{{
      {
        name: "Perl red",
        scope: "storage.type.sub.perl, storage.type.declare.routine.perl",
        settings: {
          foreground: palette.red,
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
          foreground: palette.red,
        },
      },
      {
        name: "Lisp green",
        scope: "keyword.constant.lisp",
        settings: {
          foreground: palette.green,
        },
      },
      {
        name: "Lisp aqua",
        scope: "entity.name.function.lisp",
        settings: {
          foreground: palette.aqua,
        },
      },
      // }}}
      // Clojure{{{
      {
        name: "Clojure green",
        scope:
          "constant.keyword.clojure, support.variable.clojure, meta.definition.variable.clojure",
        settings: {
          foreground: palette.green,
        },
      },
      {
        name: "Clojure purple",
        scope: "entity.global.clojure",
        settings: {
          foreground: palette.purple,
        },
      },
      {
        name: "Clojure blue",
        scope: "entity.name.function.clojure",
        settings: {
          foreground: palette.blue,
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
          foreground: palette.yellow,
        },
      },
      {
        name: "Shell green",
        scope:
          "string.quoted.double.shell, string.quoted.single.shell, punctuation.definition.string.begin.shell, punctuation.definition.string.end.shell, string.unquoted.heredoc.shell",
        settings: {
          foreground: palette.green,
        },
      },
      {
        name: "Shell purple",
        scope:
          "keyword.control.heredoc-token.shell, variable.other.normal.shell, punctuation.definition.variable.shell, variable.other.special.shell, variable.other.positional.shell, variable.other.bracket.shell",
        settings: {
          foreground: palette.purple,
        },
      },
      // }}}
      // Fish{{{
      {
        name: "Fish red",
        scope: "support.function.builtin.fish",
        settings: {
          foreground: palette.red,
        },
      },
      {
        name: "Fish orange",
        scope: "support.function.unix.fish",
        settings: {
          foreground: palette.orange,
        },
      },
      {
        name: "Fish blue",
        scope:
          "variable.other.normal.fish, punctuation.definition.variable.fish, variable.other.fixed.fish, variable.other.special.fish",
        settings: {
          foreground: palette.blue,
        },
      },
      {
        name: "Fish green",
        scope:
          "string.quoted.double.fish, punctuation.definition.string.end.fish, punctuation.definition.string.begin.fish, string.quoted.single.fish",
        settings: {
          foreground: palette.green,
        },
      },
      {
        name: "Fish purple",
        scope: "constant.character.escape.single.fish",
        settings: {
          foreground: palette.purple,
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
          foreground: palette.yellow,
        },
      },
      {
        name: "PowerShell green",
        scope:
          "string.quoted.single.powershell, string.quoted.double.powershell, punctuation.definition.string.begin.powershell, punctuation.definition.string.end.powershell, string.quoted.double.heredoc.powershell",
        settings: {
          foreground: palette.green,
        },
      },
      {
        name: "PowerShell aqua",
        scope: "variable.other.member.powershell",
        settings: {
          foreground: palette.aqua,
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
          foreground: palette.red,
        },
      },
      {
        name: "GraphQL purple",
        scope: "entity.name.fragment.graphql",
        settings: {
          foreground: palette.purple,
        },
      },
      // }}}
      // {{{Makefile
      {
        name: "Makefile orange",
        scope: "entity.name.function.target.makefile",
        settings: {
          foreground: palette.orange,
        },
      },
      {
        name: "Makefile yellow",
        scope: "variable.other.makefile",
        settings: {
          foreground: palette.yellow,
        },
      },
      {
        name: "Makefile green",
        scope: "meta.scope.prerequisites.makefile",
        settings: {
          foreground: palette.green,
        },
      },
      // }}}
      // {{{CMake
      {
        name: "CMake green",
        scope: "string.source.cmake",
        settings: {
          foreground: palette.green,
        },
      },
      {
        name: "CMake aqua",
        scope: "entity.source.cmake",
        settings: {
          foreground: palette.aqua,
        },
      },
      {
        name: "CMake purple",
        scope: "storage.source.cmake",
        settings: {
          foreground: palette.purple,
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
          foreground: palette.orange,
        },
      },
      {
        name: "VimL green",
        scope: "constant.character.map.viml, constant.character.map.key.viml",
        settings: {
          foreground: palette.green,
        },
      },
      {
        name: "VimL blue",
        scope: "constant.character.map.special.viml",
        settings: {
          foreground: palette.blue,
        },
      },
      // }}}
      // {{{Tmux
      {
        name: "Tmux green",
        scope: "constant.language.tmux, constant.numeric.tmux",
        settings: {
          foreground: palette.green,
        },
      },
      // }}}
      // {{{Dockerfile
      {
        name: "Dockerfile orange",
        scope: "entity.name.function.package-manager.dockerfile",
        settings: {
          foreground: palette.orange,
        },
      },
      {
        name: "Dockerfile yellow",
        scope: "keyword.operator.flag.dockerfile",
        settings: {
          foreground: palette.yellow,
        },
      },
      {
        name: "Dockerfile green",
        scope:
          "string.quoted.double.dockerfile, string.quoted.single.dockerfile",
        settings: {
          foreground: palette.green,
        },
      },
      {
        name: "Dockerfile aqua",
        scope: "constant.character.escape.dockerfile",
        settings: {
          foreground: palette.aqua,
        },
      },
      {
        name: "Dockerfile purple",
        scope:
          "entity.name.type.base-image.dockerfile, entity.name.image.dockerfile",
        settings: {
          foreground: palette.purple,
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
          foreground: palette.red,
        },
      },
      {
        name: "Diff orange",
        scope: "meta.diff.range.context, punctuation.definition.range.diff",
        settings: {
          foreground: palette.orange,
        },
      },
      {
        name: "Diff yellow",
        scope: "meta.diff.header.from-file",
        settings: {
          foreground: palette.yellow,
        },
      },
      {
        name: "Diff green",
        scope: "markup.inserted.diff, punctuation.definition.inserted.diff",
        settings: {
          foreground: palette.green,
        },
      },
      {
        name: "Diff blue",
        scope: "markup.changed.diff, punctuation.definition.changed.diff",
        settings: {
          foreground: palette.blue,
        },
      },
      {
        name: "Diff purple",
        scope: "punctuation.definition.from-file.diff",
        settings: {
          foreground: palette.purple,
        },
      },
      // }}}
      // {{{Git
      {
        name: "Git red",
        scope:
          "entity.name.section.group-title.ini, punctuation.definition.entity.ini",
        settings: {
          foreground: palette.red,
        },
      },
      {
        name: "Git orange",
        scope: "punctuation.separator.key-value.ini",
        settings: {
          foreground: palette.orange,
        },
      },
      {
        name: "Git green",
        scope:
          "string.quoted.double.ini, string.quoted.single.ini, punctuation.definition.string.begin.ini, punctuation.definition.string.end.ini",
        settings: {
          foreground: palette.green,
        },
      },
      {
        name: "Git aqua",
        scope: "keyword.other.definition.ini",
        settings: {
          foreground: palette.aqua,
        },
      },
      // }}}
      // SQL{{{
      {
        name: "SQL yellow",
        scope: "support.function.aggregate.sql",
        settings: {
          foreground: palette.yellow,
        },
      },
      {
        name: "SQL green",
        scope:
          "string.quoted.single.sql, punctuation.definition.string.end.sql, punctuation.definition.string.begin.sql, string.quoted.double.sql",
        settings: {
          foreground: palette.green,
        },
      },
      // }}}
      // GraphQL{{{
      {
        name: "GraphQL yellow",
        scope: "support.type.graphql",
        settings: {
          foreground: palette.yellow,
        },
      },
      {
        name: "GraphQL blue",
        scope: "variable.parameter.graphql",
        settings: {
          foreground: palette.blue,
        },
      },
      {
        name: "GraphQL aqua",
        scope: "constant.character.enum.graphql",
        settings: {
          foreground: palette.aqua,
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
          foreground: palette.orange,
        },
      },
      {
        name: "JSON green",
        scope: "string.quoted.double.json",
        settings: {
          foreground: palette.green,
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
          foreground: palette.green,
        },
      },
      {
        name: "YAML aqua",
        scope:
          "punctuation.definition.anchor.yaml, punctuation.definition.block.sequence.item.yaml",
        settings: {
          foreground: palette.aqua,
        },
      },
      // }}}
      // TOML{{{
      {
        name: "TOML orange",
        scope: "keyword.key.toml",
        settings: {
          foreground: palette.orange,
        },
      },
      {
        name: "TOML green",
        scope:
          "string.quoted.single.basic.line.toml, string.quoted.single.literal.line.toml, punctuation.definition.keyValuePair.toml",
        settings: {
          foreground: palette.green,
        },
      },
      {
        name: "TOML blue",
        scope: "constant.other.boolean.toml",
        settings: {
          foreground: palette.blue,
        },
      },
      {
        name: "TOML purple",
        scope:
          "entity.other.attribute-name.table.toml, punctuation.definition.table.toml, entity.other.attribute-name.table.array.toml, punctuation.definition.table.array.toml",
        settings: {
          foreground: palette.purple,
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
      errorForeground: `${palette.red}`,
      "icon.foreground": `${palette.aqua}`,
      "textLink.foreground": `${palette.green}`,
      "textLink.activeForeground": `${palette.dimGreen}`,
      "textCodeBlock.background": `${palette.bg2}`,
      "textBlockQuote.background": `${palette.bg2}`,
      "textBlockQuote.border": `${palette.grey2}`,
      "textPreformat.foreground": `${palette.yellow}`,
      "toolbar.hoverBackground": `${palette.bg3}`,
      "button.background": `${palette.grey2}`,
      "button.hoverBackground": `${palette.grey1}`,
      "button.foreground": `${palette.bg}`,
      "button.secondaryBackground": `${palette.bg4}`,
      "button.secondaryForeground": `${palette.fg}`,
      "button.secondaryHoverBackground": `${palette.bg5}`,
      "checkbox.background": `${palette.bg}`,
      "checkbox.foreground": `${palette.orange}`,
      "checkbox.border": `${palette.bg7}`,
      "dropdown.border": `${palette.bg5}`,
      "dropdown.background": `${palette.bg}`,
      "dropdown.foreground": `${palette.grey2}`,
      "input.border": `${palette.bg5}`,
      "input.background": `${palette.bg}00`,
      "input.foreground": `${palette.fg}`,
      "input.placeholderForeground": `${palette.grey0}`,
      "inputOption.activeBorder": `${palette.aqua}`,
      "inputValidation.errorBorder": `${palette.red}`,
      "inputValidation.errorBackground": `${palette.dimRed}`,
      "inputValidation.errorForeground": `${palette.fg}`,
      "inputValidation.infoBorder": `${palette.blue}`,
      "inputValidation.infoBackground": `${palette.dimBlue}`,
      "inputValidation.infoForeground": `${palette.fg}`,
      "inputValidation.warningBorder": `${palette.yellow}`,
      "inputValidation.warningBackground": `${palette.dimYellow}`,
      "inputValidation.warningForeground": `${palette.fg}`,
      "scrollbar.shadow": `${palette.shadow}`,
      "scrollbarSlider.activeBackground": `${palette.grey2}`,
      "scrollbarSlider.hoverBackground": `${palette.bg9}`,
      "scrollbarSlider.background": `${palette.bg9}80`,
      "badge.background": `${palette.grey2}`,
      "badge.foreground": `${palette.bg}`,
      "progressBar.background": `${palette.green}`,
      "list.activeSelectionForeground": `${palette.fg}`,
      "list.activeSelectionBackground": `${palette.bg5}60`,
      "list.inactiveSelectionForeground": `${palette.grey2}`,
      "list.inactiveSelectionBackground": `${palette.bg5}48`,
      "list.dropBackground": `${palette.bg2}80`,
      "list.focusForeground": `${palette.fg}`,
      "list.focusBackground": `${palette.bg5}60`,
      "list.inactiveFocusBackground": `${palette.bg5}48`,
      "list.highlightForeground": `${palette.green}`,
      "list.hoverForeground": `${palette.fg}`,
      "list.hoverBackground": `${palette.bg}00`,
      "list.invalidItemForeground": `${palette.dimRed}`,
      "list.errorForeground": `${palette.red}`,
      "list.warningForeground": `${palette.yellow}`,
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
      "minimap.findMatchHighlight": `${palette.dimAqua}60`,
      "minimap.selectionHighlight": `${palette.bg6}f0`,
      "minimap.errorHighlight": `${palette.dimRed}80`,
      "minimap.warningHighlight": `${palette.dimYellow}80`,
      "minimapGutter.addedBackground": `${palette.dimGreen}a0`,
      "minimapGutter.modifiedBackground": `${palette.dimBlue}a0`,
      "minimapGutter.deletedBackground": `${palette.dimRed}a0`,
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
      "editor.findMatchBackground": `${palette.dimOrange}40`,
      "editor.findMatchHighlightBackground": `${palette.dimGreen}40`,
      "editor.findRangeHighlightBackground": `${editorSelectionBgHl}`,
      "editor.lineHighlightBorder": `${palette.bg5}00`,
      "editor.lineHighlightBackground": `${palette.bg3}90`,
      "editor.rangeHighlightBackground": `${palette.bg3}80`,
      "editor.symbolHighlightBackground": `${palette.dimBlue}40`,
      "editorLink.activeForeground": `${palette.green}`,
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
      "editorBracketHighlight.foreground1": `${palette.red}`,
      "editorBracketHighlight.foreground2": `${palette.yellow}`,
      "editorBracketHighlight.foreground3": `${palette.green}`,
      "editorBracketHighlight.foreground4": `${palette.blue}`,
      "editorBracketHighlight.foreground5": `${palette.orange}`,
      "editorBracketHighlight.foreground6": `${palette.purple}`,
      "editorBracketHighlight.unexpectedBracket.foreground": `${palette.grey1}`,
      "editorOverviewRuler.border": `${palette.bg}00`,
      "editorOverviewRuler.findMatchForeground": `${palette.dimAqua}`,
      "editorOverviewRuler.rangeHighlightForeground": `${palette.dimAqua}`,
      "editorOverviewRuler.selectionHighlightForeground": `${palette.dimAqua}`,
      "editorOverviewRuler.wordHighlightForeground": `${palette.bg9}`,
      "editorOverviewRuler.wordHighlightStrongForeground": `${palette.bg9}`,
      "editorOverviewRuler.modifiedForeground": `${palette.dimBlue}a0`,
      "editorOverviewRuler.addedForeground": `${palette.dimGreen}a0`,
      "editorOverviewRuler.deletedForeground": `${palette.dimRed}a0`,
      "editorOverviewRuler.errorForeground": `${palette.red}`,
      "editorOverviewRuler.warningForeground": `${palette.yellow}`,
      "editorOverviewRuler.infoForeground": `${palette.purple}`,
      "editorOverviewRuler.currentContentForeground": `${palette.dimBlue}`,
      "editorOverviewRuler.incomingContentForeground": `${palette.dimAqua}`,
      "editorOverviewRuler.commonContentForeground": `${palette.grey1}`,
      "problemsErrorIcon.foreground": `${palette.red}`,
      "problemsWarningIcon.foreground": `${palette.yellow}`,
      "problemsInfoIcon.foreground": `${palette.blue}`,
      "editorUnnecessaryCode.border": `${palette.bg}`,
      "editorUnnecessaryCode.opacity": `#00000080`,
      "editorError.foreground": `${palette.dimRed}`,
      "editorWarning.foreground": `${palette.dimYellow}`,
      "editorInfo.foreground": `${palette.dimBlue}`,
      "editorHint.foreground": `${palette.dimPurple}`,
      "editorError.background": `${palette.dimRed}00`,
      "editorWarning.background": `${palette.dimYellow}00`,
      "editorInfo.background": `${palette.dimBlue}00`,
      "editorGutter.background": `${palette.bg}00`,
      "editorGutter.modifiedBackground": `${palette.dimBlue}a0`,
      "editorGutter.addedBackground": `${palette.dimGreen}a0`,
      "editorGutter.deletedBackground": `${palette.dimRed}a0`,
      "editorGutter.commentRangeForeground": `${palette.grey0}`,
      "diffEditor.insertedTextBackground": `${palette.dimAqua}40`,
      "diffEditor.removedTextBackground": `${palette.dimRed}40`,
      "diffEditor.diagonalFill": `${palette.bg6}`,
      "editorSuggestWidget.background": `${palette.bg3}`,
      "editorSuggestWidget.foreground": `${palette.fg}`,
      "editorSuggestWidget.highlightForeground": `${palette.green}`,
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
      "editorMarkerNavigationError.background": `${palette.dimRed}80`,
      "editorMarkerNavigationWarning.background": `${palette.dimYellow}80`,
      "editorMarkerNavigationInfo.background": `${palette.dimBlue}80`,
      "peekView.border": `${palette.bg4}`,
      "peekViewEditor.background": `${palette.bg2}`,
      "peekViewEditor.matchHighlightBackground": `${palette.dimYellow}50`,
      "peekViewEditorGutter.background": `${palette.bg2}`,
      "peekViewResult.fileForeground": `${palette.fg}`,
      "peekViewResult.lineForeground": `${palette.grey2}`,
      "peekViewResult.matchHighlightBackground": `${palette.dimYellow}50`,
      "peekViewResult.selectionBackground": `${palette.dimAqua}50`,
      "peekViewResult.selectionForeground": `${palette.fg1}`,
      "peekViewTitleDescription.foreground": `${palette.fg1}`,
      "peekViewTitleLabel.foreground": `${palette.green}`,
      "peekViewResult.background": `${palette.bg2}`,
      "peekViewTitle.background": `${palette.bg4}`,
      "pickerGroup.border": `${palette.fg0}1a`,
      "terminal.foreground": `${palette.fg}`,
      "terminalCursor.foreground": `${cursorFg}`,
      "terminal.ansiBlack": `${palette.bg2}`,
      "terminal.ansiBlue": `${palette.blue}`,
      "terminal.ansiBrightBlack": `${palette.grey1}`,
      "terminal.ansiBrightBlue": `${palette.blue}`,
      "terminal.ansiBrightCyan": `${palette.aqua}`,
      "terminal.ansiBrightGreen": `${palette.green}`,
      "terminal.ansiBrightMagenta": `${palette.purple}`,
      "terminal.ansiBrightRed": `${palette.red}`,
      "terminal.ansiBrightWhite": `${palette.fg0}`,
      "terminal.ansiBrightYellow": `${palette.yellow}`,
      "terminal.ansiCyan": `${palette.aqua}`,
      "terminal.ansiGreen": `${palette.green}`,
      "terminal.ansiMagenta": `${palette.purple}`,
      "terminal.ansiRed": `${palette.red}`,
      "terminal.ansiWhite": `${palette.fg}`,
      "terminal.ansiYellow": `${palette.yellow}`,
      "debugToolBar.background": `${palette.bg}`,
      "debugTokenExpression.name": `${palette.blue}`,
      "debugTokenExpression.value": `${palette.green}`,
      "debugTokenExpression.string": `${palette.yellow}`,
      "debugTokenExpression.boolean": `${palette.purple}`,
      "debugTokenExpression.number": `${palette.purple}`,
      "debugTokenExpression.error": `${palette.red}`,
      "debugIcon.breakpointForeground": `${palette.red}`,
      "debugIcon.breakpointDisabledForeground": `${palette.dimRed}`,
      "debugIcon.breakpointUnverifiedForeground": `${palette.grey2}`,
      "debugIcon.breakpointCurrentStackframeForeground": `${palette.blue}`,
      "debugIcon.breakpointStackframeForeground": `${palette.red}`,
      "debugIcon.startForeground": `${palette.aqua}`,
      "debugIcon.pauseForeground": `${palette.yellow}`,
      "debugIcon.stopForeground": `${palette.red}`,
      "debugIcon.disconnectForeground": `${palette.purple}`,
      "debugIcon.restartForeground": `${palette.aqua}`,
      "debugIcon.stepOverForeground": `${palette.blue}`,
      "debugIcon.stepIntoForeground": `${palette.blue}`,
      "debugIcon.stepOutForeground": `${palette.blue}`,
      "debugIcon.continueForeground": `${palette.blue}`,
      "debugIcon.stepBackForeground": `${palette.blue}`,
      "debugConsole.infoForeground": `${palette.green}`,
      "debugConsole.warningForeground": `${palette.yellow}`,
      "debugConsole.errorForeground": `${palette.red}`,
      "debugConsole.sourceForeground": `${palette.purple}`,
      "debugConsoleInputIcon.foreground": `${palette.aqua}`,
      "merge.incomingHeaderBackground": `${palette.dimAqua}80`,
      "merge.incomingContentBackground": `${palette.dimAqua}40`,
      "merge.currentHeaderBackground": `${palette.dimBlue}80`,
      "merge.currentContentBackground": `${palette.dimBlue}40`,
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
      "statusBar.debuggingForeground": `${palette.orange}`,
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
      "statusBarItem.errorForeground": `${palette.red}`,
      "statusBarItem.warningBackground": `${palette.bg}`,
      "statusBarItem.warningForeground": `${palette.yellow}`,
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
      "gitDecoration.addedResourceForeground": `${palette.green}a0`,
      "gitDecoration.modifiedResourceForeground": `${palette.blue}a0`,
      "gitDecoration.deletedResourceForeground": `${palette.red}a0`,
      "gitDecoration.untrackedResourceForeground": `${palette.yellow}a0`,
      "gitDecoration.ignoredResourceForeground": `${palette.bg7}`,
      "gitDecoration.conflictingResourceForeground": `${palette.purple}a0`,
      "gitDecoration.submoduleResourceForeground": `${palette.orange}a0`,
      "gitDecoration.stageDeletedResourceForeground": `${palette.aqua}a0`,
      "gitDecoration.stageModifiedResourceForeground": `${palette.aqua}a0`,
      "notificationCenterHeader.foreground": `${palette.fg0}`,
      "notificationCenterHeader.background": `${palette.bg6}`,
      "notifications.foreground": `${palette.fg}`,
      "notifications.background": `${palette.bg}`,
      "notificationLink.foreground": `${palette.green}`,
      "notificationsErrorIcon.foreground": `${palette.red}`,
      "notificationsWarningIcon.foreground": `${palette.yellow}`,
      "notificationsInfoIcon.foreground": `${palette.blue}`,
      "extensionButton.prominentForeground": `${palette.bg}`,
      "extensionButton.prominentBackground": `${palette.grey2}`,
      "extensionButton.prominentHoverBackground": `${palette.grey1}`,
      "extensionBadge.remoteBackground": `${palette.grey2}`,
      "extensionBadge.remoteForeground": `${palette.bg}`,
      "extensionIcon.starForeground": `${palette.aqua}`,
      "extensionIcon.verifiedForeground": `${palette.green}`,
      "extensionIcon.preReleaseForeground": `${palette.orange}`,
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
      "settings.numberInputForeground": `${palette.purple}`,
      "settings.numberInputBorder": `${palette.bg7}`,
      "settings.textInputBackground": `${palette.bg}`,
      "settings.textInputForeground": `${palette.blue}`,
      "settings.textInputBorder": `${palette.bg7}`,
      "settings.checkboxBackground": `${palette.bg}`,
      "settings.checkboxForeground": `${palette.orange}`,
      "settings.checkboxBorder": `${palette.bg7}`,
      "settings.dropdownBackground": `${palette.bg}`,
      "settings.dropdownForeground": `${palette.aqua}`,
      "settings.dropdownBorder": `${palette.bg7}`,
      "settings.modifiedItemIndicator": `${palette.grey0}`,
      "settings.focusedRowBackground": `${palette.bg2}`,
      "settings.rowHoverBackground": `${palette.bg2}`,
      "editorLightBulb.foreground": `${palette.yellow}`,
      "editorLightBulbAutoFix.foreground": `${palette.aqua}`,
      "welcomePage.progress.foreground": `${palette.green}`,
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
      "symbolIcon.keywordForeground": `${palette.red}`,
      "symbolIcon.operatorForeground": `${palette.orange}`,
      "symbolIcon.classForeground": `${palette.yellow}`,
      "symbolIcon.eventForeground": `${palette.yellow}`,
      "symbolIcon.interfaceForeground": `${palette.yellow}`,
      "symbolIcon.structForeground": `${palette.yellow}`,
      "symbolIcon.functionForeground": `${palette.green}`,
      "symbolIcon.keyForeground": `${palette.green}`,
      "symbolIcon.methodForeground": `${palette.green}`,
      "symbolIcon.stringForeground": `${palette.green}`,
      "symbolIcon.constantForeground": `${palette.aqua}`,
      "symbolIcon.enumeratorMemberForeground": `${palette.aqua}`,
      "symbolIcon.nullForeground": `${palette.aqua}`,
      "symbolIcon.propertyForeground": `${palette.aqua}`,
      "symbolIcon.typeParameterForeground": `${palette.aqua}`,
      "symbolIcon.arrayForeground": `${palette.blue}`,
      "symbolIcon.referenceForeground": `${palette.blue}`,
      "symbolIcon.variableForeground": `${palette.blue}`,
      "symbolIcon.booleanForeground": `${palette.purple}`,
      "symbolIcon.constructorForeground": `${palette.purple}`,
      "symbolIcon.enumeratorForeground": `${palette.purple}`,
      "symbolIcon.moduleForeground": `${palette.purple}`,
      "symbolIcon.namespaceForeground": `${palette.purple}`,
      "symbolIcon.numberForeground": `${palette.purple}`,
      "symbolIcon.objectForeground": `${palette.purple}`,
      "symbolIcon.packageForeground": `${palette.purple}`,
      "editor.snippetTabstopHighlightBackground": `${palette.bg5}a0`,
      "editor.snippetFinalTabstopHighlightBackground": `${palette.dimGreen}40`,
      "editor.snippetFinalTabstopHighlightBorder": `${palette.bg}`,
      "charts.red": `${palette.red}`,
      "charts.orange": `${palette.orange}`,
      "charts.yellow": `${palette.yellow}`,
      "charts.green": `${palette.green}`,
      "charts.blue": `${palette.blue}`,
      "charts.purple": `${palette.purple}`,
      "charts.foreground": `${palette.fg}`,
      "ports.iconRunningProcessForeground": `${palette.orange}`,
      "sash.hoverBorder": `${palette.grey0}`,
      "notebook.cellBorderColor": `${palette.bg7}`,
      "notebook.cellStatusBarItemHoverBackground": `${palette.bg4}`,
      "notebook.focusedCellBackground": `${palette.bg}`,
      "notebook.cellHoverBackground": `${palette.bg}`,
      "notebook.outputContainerBackgroundColor": `${palette.bg2}`,
      "notebookStatusSuccessIcon.foreground": `${palette.green}`,
      "notebookStatusErrorIcon.foreground": `${palette.red}`,
      "notebookStatusRunningIcon.foreground": `${palette.blue}`,
      "notebook.focusedCellBorder": `${palette.bg7}`,
      "notebook.focusedEditorBorder": `${palette.bg7}`,
      "notebook.selectedCellBorder": `${palette.bg7}`,
      "notebook.focusedRowBorder": `${palette.bg7}`,
      "notebook.inactiveFocusedCellBorder": `${palette.bg7}`,
      "notebook.cellToolbarSeparator": `${palette.bg7}`,
      "testing.iconFailed": `${palette.red}`,
      "testing.iconErrored": `${palette.red}`,
      "testing.iconPassed": `${palette.aqua}`,
      "testing.runAction": `${palette.aqua}`,
      "testing.iconQueued": `${palette.blue}`,
      "testing.iconUnset": `${palette.yellow}`,
      "testing.iconSkipped": `${palette.purple}`,
      "gitlens.gutterBackgroundColor": `${palette.bg}`,
      "gitlens.gutterForegroundColor": `${palette.fg}`,
      "gitlens.gutterUncommittedForegroundColor": `${palette.blue}`,
      "gitlens.trailingLineForegroundColor": `${palette.grey1}`,
      "gitlens.lineHighlightBackgroundColor": `${palette.bg2}`,
      "gitlens.lineHighlightOverviewRulerColor": `${palette.grey2}`,
      "gitlens.closedPullRequestIconColor": `${palette.red}`,
      "gitlens.openPullRequestIconColor": `${palette.aqua}`,
      "gitlens.mergedPullRequestIconColor": `${palette.purple}`,
      "gitlens.unpushlishedChangesIconColor": `${palette.blue}`,
      "gitlens.unpublishedCommitIconColor": `${palette.yellow}`,
      "gitlens.unpulledChangesIconColor": `${palette.orange}`,
      "gitlens.decorations.addedForegroundColor": `${palette.green}`,
      "gitlens.decorations.copiedForegroundColor": `${palette.purple}`,
      "gitlens.decorations.deletedForegroundColor": `${palette.red}`,
      "gitlens.decorations.ignoredForegroundColor": `${palette.grey2}`,
      "gitlens.decorations.modifiedForegroundColor": `${palette.blue}`,
      "gitlens.decorations.untrackedForegroundColor": `${palette.yellow}`,
      "gitlens.decorations.renamedForegroundColor": `${palette.purple}`,
      "gitlens.decorations.branchAheadForegroundColor": `${palette.aqua}`,
      "gitlens.decorations.branchBehindForegroundColor": `${palette.orange}`,
      "gitlens.decorations.branchDivergedForegroundColor": `${palette.yellow}`,
      "gitlens.decorations.branchUpToDateForegroundColor": `${palette.fg}`,
      "gitlens.decorations.branchUnpublishedForegroundColor": `${palette.blue}`,
      "gitlens.decorations.branchMissingUpstreamForegroundColor": `${palette.red}`,
      "issues.open": `${palette.aqua}`,
      "issues.closed": `${palette.red}`,
      "rust_analyzer.inlayHints.foreground": `${palette.bg9}`,
      "rust_analyzer.inlayHints.background": `${palette.bg}00`,
      "rust_analyzer.syntaxTreeBorder": `${palette.red}`,
    };
    return tokens;
  }
}
