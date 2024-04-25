'use strict';

var obsidian = require('obsidian');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var commands$3 = {
	"Format Document": "Dokument formatieren"
};
var editorMenu$3 = {
	"Format Document": "Dokument formatieren"
};
var noticeMessages$3 = {
	"Document Formatted!": "",
	"Document is already formatted!": "",
	"No open document is found.": "",
	"You can only format in editing mode.": "",
	"Please enter a valid number.\nIt should be at least 0.": "",
	"Please enter a valid number.\nIt should be a whole number.": ""
};
var settingSections$3 = {
	"Heading gaps": "",
	"Other gaps": "",
	"Format options": "",
	"Other options": ""
};
var headingGaps$3 = {
	"Before top level headings": "",
	"Decides gaps before top level of headings.": "",
	"Before first sub heading": "",
	"Decides the child heading gap right before a parent heading.": "",
	"Before sub headings": "",
	"Decides gaps before headings that are not in the top level.": ""
};
var otherGaps$3 = {
	"After properties": "",
	"Decides the gap after the property section.": "",
	"Before contents": "",
	"Decides gaps before contents. (ex: Text section before headings)": "",
	"Before contents after code blocks": "",
	"Decides gaps before 'contents that are after code blocks'.": "",
	"Before code blocks": "",
	"Decides gaps before code blocks.": "",
	"Before code blocks after headings": "",
	"Decides gaps before 'code blocks that are after headings'.": ""
};
var formatOptions$3 = {
	"Newline at the end of a document": "",
	"Inserts a newline at the end of a document.": ""
};
var otherOptions$3 = {
	"Notify when no change is needed": "",
	"Displays a different message when no change was made.": "",
	"Show more detailed error messages": "",
	"Displays additional information when parsing fails.": ""
};
var wasm$4 = {
	parsing: {
		"Failed to parse the document. [Line: {LINE_NUMBER}]": "",
		"Failed to parse the document.": ""
	},
	formatting: {
		"Failed to read options. Please make sure there is no option with an empty value.": "",
		"Failed to read options. Some of them are possibly not positive number values.": "",
		"Failed to read option properties.": ""
	}
};
var de = {
	commands: commands$3,
	editorMenu: editorMenu$3,
	noticeMessages: noticeMessages$3,
	settingSections: settingSections$3,
	headingGaps: headingGaps$3,
	otherGaps: otherGaps$3,
	formatOptions: formatOptions$3,
	otherOptions: otherOptions$3,
	wasm: wasm$4
};

var commands$2 = {
	"Format Document": "Format Document"
};
var editorMenu$2 = {
	"Format Document": "Format Document"
};
var noticeMessages$2 = {
	"Document Formatted!": "Document Formatted!",
	"Document is already formatted!": "Document is already formatted!",
	"No open document is found.": "No open document is found.",
	"You can only format in editing mode.": "You can only format in editing mode.",
	"Please enter a valid number.\nIt should be at least 0.": "Please enter a valid number.\nIt should be at least 0.",
	"Please enter a valid number.\nIt should be a whole number.": "Please enter a valid number.\nIt should be a whole number."
};
var settingSections$2 = {
	"Heading gaps": "Heading gaps",
	"Other gaps": "Other gaps",
	"Format options": "Format options",
	"Other options": "Other options"
};
var headingGaps$2 = {
	"Before top level headings": "Before top level headings",
	"Decides gaps before top level of headings.": "Decides gaps before top level of headings.",
	"Before first sub heading": "Before first sub heading",
	"Decides the child heading gap right before a parent heading.": "Decides the child heading gap right before a parent heading.",
	"Before sub headings": "Before sub headings",
	"Decides gaps before headings that are not in the top level.": "Decides gaps before headings that are not in the top level."
};
var otherGaps$2 = {
	"After properties": "After properties",
	"Decides the gap after the property section.": "Decides the gap after the property section.",
	"Before contents": "Before contents",
	"Decides gaps before contents. (ex: Text section before headings)": "Decides gaps before contents. (ex: Text section before headings)",
	"Before contents after code blocks": "Before contents after code blocks",
	"Decides gaps before 'contents that are after code blocks'.": "Decides gaps before 'contents that are after code blocks'.",
	"Before code blocks": "Before code blocks",
	"Decides gaps before code blocks.": "Decides gaps before code blocks.",
	"Before code blocks after headings": "Before code blocks after headings",
	"Decides gaps before 'code blocks that are after headings'.": "Decides gaps before 'code blocks that are after headings'."
};
var formatOptions$2 = {
	"Newline at the end of a document": "Newline at the end of a document",
	"Inserts a newline at the end of a document.": "Inserts a newline at the end of a document."
};
var otherOptions$2 = {
	"Notify when no change is needed": "Notify when no change is needed",
	"Displays a different message when no change was made.": "Displays a different message when no change was made.",
	"Show more detailed error messages": "Show more detailed error messages",
	"Displays additional information when parsing fails.": "Displays additional information when parsing fails."
};
var wasm$3 = {
	parsing: {
		"Failed to parse the document. [Line: {LINE_NUMBER}]": "Failed to parse the document. [Line: {LINE_NUMBER}]",
		"Failed to parse the document.": "Failed to parse the document."
	},
	formatting: {
		"Failed to read options. Please make sure there is no option with an empty value.": "Failed to read options. Please make sure there is no option with an empty value.",
		"Failed to read options. Some of them are possibly not positive number values.": "Failed to read options. Some of them are possibly not positive number values.",
		"Failed to read option properties.": "Failed to read option properties."
	}
};
var en = {
	commands: commands$2,
	editorMenu: editorMenu$2,
	noticeMessages: noticeMessages$2,
	settingSections: settingSections$2,
	headingGaps: headingGaps$2,
	otherGaps: otherGaps$2,
	formatOptions: formatOptions$2,
	otherOptions: otherOptions$2,
	wasm: wasm$3
};

var commands$1 = {
	"Format Document": "Dokumentum formázása"
};
var editorMenu$1 = {
	"Format Document": "Dokumentum formázása"
};
var noticeMessages$1 = {
	"Document Formatted!": "A dokumentum meg lett formázva!",
	"Document is already formatted!": "A dokumentum már meg van formázva!",
	"No open document is found.": "Nem található megnyitott dokumentum",
	"You can only format in editing mode.": "A formázás csakis a szerkesztői módban lehetséges. ",
	"Please enter a valid number.\nIt should be at least 0.": "Kérlek egy megfelelő számot írjál be.\nLegalább 0 legyen.",
	"Please enter a valid number.\nIt should be a whole number.": "Kérlek egy megfelelő számot írjál be.\nEgész szám legyen."
};
var settingSections$1 = {
	"Heading gaps": "Fejléc hézagok",
	"Other gaps": "Egyéb hézagok",
	"Format options": "Formázási opciók",
	"Other options": "Egyéb opciók"
};
var headingGaps$1 = {
	"Before top level headings": "Fő címsorok előtt",
	"Decides gaps before top level of headings.": "Meghatározza a hézag nagyságát a fő címsorok előtt.",
	"Before first sub heading": "Az első alcím előtt",
	"Decides the child heading gap right before a parent heading.": "Meghatározza a gyerekcím hézagát közvetlenül a szülőcím előtt.",
	"Before sub headings": "Alcímek előtt",
	"Decides gaps before headings that are not in the top level.": "Meghatározza a nem fő címsorok előtti részeket"
};
var otherGaps$1 = {
	"After properties": "Tulajdonságok után",
	"Decides the gap after the property section.": "Meghatározza a hézagot a tulajdonságok szekció után.",
	"Before contents": "Tartalmak előtt",
	"Decides gaps before contents. (ex: Text section before headings)": "Meghatározza a hézagot a tartalmak előtt. (pl.: Szövegrész a címsorok előtt)",
	"Before contents after code blocks": "Tartalmak előtti kód részek",
	"Decides gaps before 'contents that are after code blocks'.": "Meghatározza azon tartalmi hézagokat, melyek kód részek előtt vannak.",
	"Before code blocks": "Kód részek előtt",
	"Decides gaps before code blocks.": "Meghatározza a hézagot kód részek előtt.",
	"Before code blocks after headings": "Kód részek előtt, a címsorok előtt",
	"Decides gaps before 'code blocks that are after headings'.": "Meghatározza azon kód részi hézagokat, melyek címsorok után vannak."
};
var formatOptions$1 = {
	"Newline at the end of a document": "Új sor a dokumentum végére.",
	"Inserts a newline at the end of a document.": "Beszúr egy új sort a dokumentum végére."
};
var otherOptions$1 = {
	"Notify when no change is needed": "Értesítsen, hogyha nem szükséges változás",
	"Displays a different message when no change was made.": "Eltérő üzenetet mutat, hogyha nem történt változás",
	"Show more detailed error messages": "Mutasson részletesebb hiba üzeneteket",
	"Displays additional information when parsing fails.": "Plusz információt mutat, amikor az átírás közben hiba történik."
};
var wasm$2 = {
	parsing: {
		"Failed to parse the document. [Line: {LINE_NUMBER}]": "",
		"Failed to parse the document.": ""
	},
	formatting: {
		"Failed to read options. Please make sure there is no option with an empty value.": "",
		"Failed to read options. Some of them are possibly not positive number values.": "",
		"Failed to read option properties.": ""
	}
};
var hu = {
	commands: commands$1,
	editorMenu: editorMenu$1,
	noticeMessages: noticeMessages$1,
	settingSections: settingSections$1,
	headingGaps: headingGaps$1,
	otherGaps: otherGaps$1,
	formatOptions: formatOptions$1,
	otherOptions: otherOptions$1,
	wasm: wasm$2
};

var commands = {
	"Format Document": "문서 포맷하기"
};
var editorMenu = {
	"Format Document": "문서 포맷하기"
};
var noticeMessages = {
	"Document Formatted!": "포맷 완료!",
	"Document is already formatted!": "문서가 이미 포맷돼 있습니다.",
	"No open document is found.": "열려있는 문서를 찾지 못했습니다.",
	"You can only format in editing mode.": "편집 모드에서만 포맷할수 있습니다.",
	"Please enter a valid number.\nIt should be at least 0.": "유효한 숫자를 입력해주세요.\n0 이상만 입력할수 있습니다.",
	"Please enter a valid number.\nIt should be a whole number.": "유효한 숫자를 입력해주세요.\n자연수만 입력할 수 있습니다."
};
var settingSections = {
	"Heading gaps": "제목 여백",
	"Other gaps": "기타 여백",
	"Format options": "포맷 옵션",
	"Other options": "기타 옵션"
};
var headingGaps = {
	"Before top level headings": "최상위 제목 앞",
	"Decides gaps before top level of headings.": "최상위 제목 앞의 여백을 결정합니다.",
	"Before first sub heading": "첫 번째 하위 제목 앞",
	"Decides the child heading gap right before a parent heading.": "부모 제목 바로 앞의 자식 제목 여백을 결정합니다.",
	"Before sub headings": "하위 제목 앞",
	"Decides gaps before headings that are not in the top level.": "최상위 제목이 아닌 제목 앞의 여백을 결정합니다."
};
var otherGaps = {
	"After properties": "프로퍼티 섹션 뒤",
	"Decides the gap after the property section.": "프로퍼티 뒤 여백을 결정합니다.",
	"Before contents": "콘텐츠 섹션 앞",
	"Decides gaps before contents. (ex: Text section before headings)": "콘텐츠 섹션 앞의 여백을 결정합니다. (예: 제목 앞 텍스트)",
	"Before contents after code blocks": "코드 블럭 뒤 콘텐츠 섹션 앞",
	"Decides gaps before 'contents that are after code blocks'.": "'코드 블럭 뒤 콘텐츠 섹션' 앞의 여백을 결정합니다.",
	"Before code blocks": "코드 블럭 앞",
	"Decides gaps before code blocks.": "코드 블럭 앞의 여백을 결정합니다.",
	"Before code blocks after headings": "제목 뒤 코드 블럭 앞",
	"Decides gaps before 'code blocks that are after headings'.": "'제목 뒤에 있는 코드 블럭' 앞의 줄 바꿈을 결정합니다."
};
var formatOptions = {
	"Newline at the end of a document": "문서 끝에 새 줄 추가하기",
	"Inserts a newline at the end of a document.": "문서 끝에 새 줄을 추가합니다."
};
var otherOptions = {
	"Notify when no change is needed": "변경할 사항이 없을 때 알려주기",
	"Displays a different message when no change was made.": "변경할 사항이 없으면 다른 메세지를 표시합니다.",
	"Show more detailed error messages": "더 상세한 에러 메세지 표시하기",
	"Displays additional information when parsing fails.": "문서를 읽지 못했을 때 추가 정보를 표시합니다."
};
var wasm$1 = {
	parsing: {
		"Failed to parse the document. [Line: {LINE_NUMBER}]": "문서를 읽지 못했습니다. [줄: {LINE_NUMBER}]",
		"Failed to parse the document.": "문서를 읽지 못했습니다."
	},
	formatting: {
		"Failed to read options. Please make sure there is no option with an empty value.": "옵션을 읽지 못했습니다. 값이 비어있는 옵션이 없는지 다시 확인해주세요.",
		"Failed to read options. Some of them are possibly not positive number values.": "설정을 읽지 못했습니다. 양수가 아닌 값이 있을수도 있습니다.",
		"Failed to read option properties.": "옵션 프로퍼티를 읽지 못했습니다."
	}
};
var ko = {
	commands: commands,
	editorMenu: editorMenu,
	noticeMessages: noticeMessages,
	settingSections: settingSections,
	headingGaps: headingGaps,
	otherGaps: otherGaps,
	formatOptions: formatOptions,
	otherOptions: otherOptions,
	wasm: wasm$1
};

const detectedLanguage = window.localStorage.getItem("language");
const LOCALE_CATEGORY = {
    COMMANDS: "commands",
    EDITOR_MENU: "editorMenu",
    NOTICE_MESSAGES: "noticeMessages",
    SETTING_SECTIONS: "settingSections",
    HEADING_GAPS: "headingGaps",
    OTHER_GAPS: "otherGaps",
    FORMAT_OPTIONS: "formatOptions",
    OTHER_OPTIONS: "otherOptions",
};
const locales = {
    en: en,
    de: de,
    hu: hu,
    ko: ko,
};
/** @example getLocale(LOCALE_CATEGORY.COMMANDS, "Format Document") */
const getLocale = (category, key) => {
    var _a;
    const usingLocale = (_a = locales[detectedLanguage]) !== null && _a !== void 0 ? _a : locales.en;
    const message = usingLocale[category][key];
    if (message === "") {
        const usingLocale = locales.en;
        return usingLocale[category][key];
    }
    return usingLocale[category][key];
};
/** Returns the "wasm" object in the locale file. */
const getWasmLocale = () => {
    var _a;
    const usingLocale = (_a = locales[detectedLanguage]) !== null && _a !== void 0 ? _a : locales.en;
    return usingLocale.wasm;
};

class FormattoCommands {
    constructor(plugin) {
        this.plugin = plugin;
    }
    registerCommands() {
        this.getCommandsArr().forEach((item) => {
            this.plugin.addCommand(item);
        });
    }
    getCommandsArr() {
        return [
            {
                id: "formatto-logo",
                name: getLocale(LOCALE_CATEGORY.COMMANDS, "Format Document"),
                icon: "formatto-logo",
                editorCallback: (editor) => {
                    this.plugin.utils.formatDocument(editor);
                },
            },
        ];
    }
}

class FormattoEditorMenu {
    constructor(plugin) {
        this.plugin = plugin;
    }
    registerEditorMenus() {
        this.getEventsArr().forEach((item) => {
            this.plugin.registerEvent(item);
        });
    }
    getEventsArr() {
        return [
            this.plugin.app.workspace.on("editor-menu", (menu, editor) => {
                menu.addItem((item) => item
                    .setTitle(getLocale(LOCALE_CATEGORY.EDITOR_MENU, "Format Document"))
                    .setIcon("formatto-logo")
                    .onClick(() => {
                    this.plugin.utils.formatDocument(editor);
                }));
            }),
        ];
    }
}

var formattoLogo = "<svg class=\"formatto__custom-icons\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1.96533\" y=\"2\" width=\"6.65444\" height=\"2.5723\" rx=\"0.4\" />\n<rect x=\"1.96533\" y=\"6.31047\" width=\"12.0693\" height=\"3.44838\" rx=\"0.4\" />\n<rect x=\"1.96533\" y=\"11.483\" width=\"6.98996\" height=\"3.01966\" rx=\"0.4\" />\n<rect x=\"10.5863\" y=\"2\" width=\"3.44838\" height=\"6.03466\" rx=\"0.4\" />\n</svg>";

class FormattoIcons {
    constructor() {
        this.icons = [{ iconId: "formatto-logo", svg: formattoLogo }];
        this.registerIcons = () => {
            this.icons.forEach(({ iconId, svg }) => {
                obsidian.addIcon(iconId, svg);
            });
        };
    }
}

class FormattoRibbonIcons {
    constructor(plugin) {
        this.registerRibbonIcons = () => {
            this.plugin.addRibbonIcon("formatto-logo", "Format Document", () => {
                var _a;
                const editor = (_a = this.plugin.app.workspace.activeEditor) === null || _a === void 0 ? void 0 : _a.editor;
                const activeView = this.plugin.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
                if (!editor) {
                    new obsidian.Notice(getLocale(LOCALE_CATEGORY.NOTICE_MESSAGES, "No open document is found."));
                    return;
                }
                if (activeView.getMode() !== "source") {
                    new obsidian.Notice(getLocale(LOCALE_CATEGORY.NOTICE_MESSAGES, "You can only format in editing mode."));
                    return;
                }
                this.plugin.utils.formatDocument(editor);
            });
        };
        this.plugin = plugin;
    }
}

/*
  Type Declarations
*/
/*
  Fallback Option Values
*/
const FALLBACK_HEADING_GAPS = {
    beforeTopLevelHeadings: "3",
    beforeFirstSubHeading: "1",
    beforeSubHeadings: "2",
};
const FALLBACK_OTHER_GAPS = {
    afterProperties: "2",
    beforeContents: "0",
    beforeContentsAfterCodeBlocks: "1",
    beforeCodeBlocks: "1",
    beforeCodeBlocksAfterHeadings: "0",
};
const FALLBACK_FORMAT_OPTIONS = {
    insertNewline: true,
};
const FALLBACK_OTHER_OPTIONS = {
    notifyWhenUnchanged: true,
    showMoreDetailedErrorMessages: false,
};
const FALLBACK_SETTINGS = {
    headingGaps: FALLBACK_HEADING_GAPS,
    otherGaps: FALLBACK_OTHER_GAPS,
    formatOptions: FALLBACK_FORMAT_OPTIONS,
    otherOptions: FALLBACK_OTHER_OPTIONS,
};
/*
  Default Option Values
*/
const EMPTY_HEADING_GAPS = {
    beforeTopLevelHeadings: "",
    beforeFirstSubHeading: "",
    beforeSubHeadings: "",
};
const EMPTY_OTHER_GAPS = {
    afterProperties: "",
    beforeContents: "",
    beforeContentsAfterCodeBlocks: "",
    beforeCodeBlocks: "",
    beforeCodeBlocksAfterHeadings: "",
};
const DEFAULT_SETTINGS = {
    headingGaps: EMPTY_HEADING_GAPS,
    otherGaps: EMPTY_OTHER_GAPS,
    formatOptions: FALLBACK_FORMAT_OPTIONS,
    otherOptions: FALLBACK_OTHER_OPTIONS,
};

class FormattoSettingTab extends obsidian.PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.noticeMessages = {
            invalidNumberMessage: getLocale(LOCALE_CATEGORY.NOTICE_MESSAGES, "Please enter a valid number.\nIt should be at least 0."),
            notWholeNumberMessage: getLocale(LOCALE_CATEGORY.NOTICE_MESSAGES, "Please enter a valid number.\nIt should be a whole number."),
        };
        this.plugin = plugin;
    }
    checkDecimal(value) {
        return value !== "0" && value !== "1" && parseFloat(value) % 1 !== 0;
    }
    putDefaultIndicator(value) {
        return `${value} (Default)`;
    }
    display() {
        const { containerEl } = this;
        containerEl.empty();
        const debounceMsg = obsidian.debounce((value) => {
            if (value !== "") {
                // Check if the value is a valid number
                if (isNaN(parseInt(value)) || parseInt(value) < 0) {
                    new obsidian.Notice(this.noticeMessages.invalidNumberMessage);
                    return;
                }
                // Check if the value is a whole number
                if (this.checkDecimal(value)) {
                    new obsidian.Notice(this.noticeMessages.notWholeNumberMessage);
                    return;
                }
            }
        }, 1000, true);
        // Heading Gaps
        containerEl.createEl("h2", {
            text: getLocale(LOCALE_CATEGORY.SETTING_SECTIONS, "Heading gaps"),
        });
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.HEADING_GAPS, "Before top level headings"))
            .setDesc(getLocale(LOCALE_CATEGORY.HEADING_GAPS, "Decides gaps before top level of headings."))
            .addText((text) => text
            .setPlaceholder(this.putDefaultIndicator(FALLBACK_SETTINGS.headingGaps.beforeTopLevelHeadings))
            .setValue(this.plugin.settings.headingGaps.beforeTopLevelHeadings)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            debounceMsg(value);
            this.plugin.settings.headingGaps.beforeTopLevelHeadings =
                value;
            yield this.plugin.saveSettings();
        })));
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.HEADING_GAPS, "Before first sub heading"))
            .setDesc(getLocale(LOCALE_CATEGORY.HEADING_GAPS, "Decides the child heading gap right before a parent heading."))
            .addText((text) => text
            .setPlaceholder(this.putDefaultIndicator(FALLBACK_SETTINGS.headingGaps.beforeFirstSubHeading))
            .setValue(this.plugin.settings.headingGaps.beforeFirstSubHeading)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            debounceMsg(value);
            this.plugin.settings.headingGaps.beforeFirstSubHeading =
                value;
            yield this.plugin.saveSettings();
        })));
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.HEADING_GAPS, "Before sub headings"))
            .setDesc(getLocale(LOCALE_CATEGORY.HEADING_GAPS, "Decides gaps before headings that are not in the top level."))
            .addText((text) => text
            .setPlaceholder(this.putDefaultIndicator(FALLBACK_SETTINGS.headingGaps.beforeSubHeadings))
            .setValue(this.plugin.settings.headingGaps.beforeSubHeadings)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            debounceMsg(value);
            this.plugin.settings.headingGaps.beforeSubHeadings =
                value;
            yield this.plugin.saveSettings();
        })));
        // Other Gaps
        containerEl.createEl("h2", {
            text: getLocale(LOCALE_CATEGORY.SETTING_SECTIONS, "Other gaps"),
        });
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.OTHER_GAPS, "After properties"))
            .setDesc(getLocale(LOCALE_CATEGORY.OTHER_GAPS, "Decides the gap after the property section."))
            .addText((text) => text
            .setPlaceholder(this.putDefaultIndicator(FALLBACK_SETTINGS.otherGaps.afterProperties))
            .setValue(this.plugin.settings.otherGaps.afterProperties)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            debounceMsg(value);
            this.plugin.settings.otherGaps.afterProperties = value;
            yield this.plugin.saveSettings();
        })));
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.OTHER_GAPS, "Before contents"))
            .setDesc(getLocale(LOCALE_CATEGORY.OTHER_GAPS, "Decides gaps before contents. (ex: Text section before headings)"))
            .addText((text) => text
            .setPlaceholder(this.putDefaultIndicator(FALLBACK_SETTINGS.otherGaps.beforeContents))
            .setValue(this.plugin.settings.otherGaps.beforeContents)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            debounceMsg(value);
            this.plugin.settings.otherGaps.beforeContents = value;
            yield this.plugin.saveSettings();
        })));
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.OTHER_GAPS, "Before contents after code blocks"))
            .setDesc(getLocale(LOCALE_CATEGORY.OTHER_GAPS, "Decides gaps before 'contents that are after code blocks'."))
            .addText((text) => text
            .setPlaceholder(this.putDefaultIndicator(FALLBACK_SETTINGS.otherGaps
            .beforeContentsAfterCodeBlocks))
            .setValue(this.plugin.settings.otherGaps
            .beforeContentsAfterCodeBlocks)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            debounceMsg(value);
            this.plugin.settings.otherGaps.beforeContentsAfterCodeBlocks =
                value;
            yield this.plugin.saveSettings();
        })));
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.OTHER_GAPS, "Before code blocks"))
            .setDesc(getLocale(LOCALE_CATEGORY.OTHER_GAPS, "Decides gaps before code blocks."))
            .addText((text) => text
            .setPlaceholder(this.putDefaultIndicator(FALLBACK_SETTINGS.otherGaps.beforeCodeBlocks))
            .setValue(this.plugin.settings.otherGaps.beforeCodeBlocks)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            debounceMsg(value);
            this.plugin.settings.otherGaps.beforeCodeBlocks = value;
            yield this.plugin.saveSettings();
        })));
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.OTHER_GAPS, "Before code blocks after headings"))
            .setDesc(getLocale(LOCALE_CATEGORY.OTHER_GAPS, "Decides gaps before 'code blocks that are after headings'."))
            .addText((text) => text
            .setPlaceholder(this.putDefaultIndicator(FALLBACK_SETTINGS.otherGaps
            .beforeCodeBlocksAfterHeadings))
            .setValue(this.plugin.settings.otherGaps
            .beforeCodeBlocksAfterHeadings)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            debounceMsg(value);
            this.plugin.settings.otherGaps.beforeCodeBlocksAfterHeadings =
                value;
            yield this.plugin.saveSettings();
        })));
        // Format Settings
        containerEl.createEl("h2", {
            text: getLocale(LOCALE_CATEGORY.SETTING_SECTIONS, "Format options"),
        });
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.FORMAT_OPTIONS, "Newline at the end of a document"))
            .setDesc(getLocale(LOCALE_CATEGORY.FORMAT_OPTIONS, "Inserts a newline at the end of a document."))
            .addToggle((text) => text
            .setValue(this.plugin.settings.formatOptions.insertNewline)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            this.plugin.settings.formatOptions.insertNewline =
                value;
            yield this.plugin.saveSettings();
        })));
        // Other Settings
        containerEl.createEl("h2", {
            text: getLocale(LOCALE_CATEGORY.SETTING_SECTIONS, "Other options"),
        });
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.OTHER_OPTIONS, "Notify when no change is needed"))
            .setDesc(getLocale(LOCALE_CATEGORY.OTHER_OPTIONS, "Displays a different message when no change was made."))
            .addToggle((text) => text
            .setValue(this.plugin.settings.otherOptions.notifyWhenUnchanged)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            this.plugin.settings.otherOptions.notifyWhenUnchanged =
                value;
            yield this.plugin.saveSettings();
        })));
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.OTHER_OPTIONS, "Show more detailed error messages"))
            .setDesc(getLocale(LOCALE_CATEGORY.OTHER_OPTIONS, "Displays additional information when parsing fails."))
            .addToggle((text) => text
            .setValue(this.plugin.settings.otherOptions
            .showMoreDetailedErrorMessages)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            this.plugin.settings.otherOptions.showMoreDetailedErrorMessages =
                value;
            yield this.plugin.saveSettings();
        })));
    }
}

let wasm;

const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

let WASM_VECTOR_LEN = 0;

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

const cachedTextEncoder = (typeof TextEncoder !== 'undefined' ? new TextEncoder('utf-8') : { encode: () => { throw Error('TextEncoder not available') } } );

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachedInt32Memory0 = null;

function getInt32Memory0() {
    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

let cachedFloat64Memory0 = null;

function getFloat64Memory0() {
    if (cachedFloat64Memory0 === null || cachedFloat64Memory0.byteLength === 0) {
        cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer);
    }
    return cachedFloat64Memory0;
}

const cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );

if (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); }
function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}
/**
* This function will be called from the TypeScript side.
* @param {string} input
* @param {any} js_settings
* @param {any} js_locales
* @returns {string}
*/
function format_document(input, js_settings, js_locales) {
    let deferred2_0;
    let deferred2_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(input, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.format_document(retptr, ptr0, len0, addHeapObject(js_settings), addHeapObject(js_locales));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        deferred2_0 = r0;
        deferred2_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        takeObject(arg0);
    };
    imports.wbg.__wbindgen_is_undefined = function(arg0) {
        const ret = getObject(arg0) === undefined;
        return ret;
    };
    imports.wbg.__wbindgen_in = function(arg0, arg1) {
        const ret = getObject(arg0) in getObject(arg1);
        return ret;
    };
    imports.wbg.__wbindgen_boolean_get = function(arg0) {
        const v = getObject(arg0);
        const ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;
        return ret;
    };
    imports.wbg.__wbindgen_string_get = function(arg0, arg1) {
        const obj = getObject(arg1);
        const ret = typeof(obj) === 'string' ? obj : undefined;
        var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len1;
        getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    imports.wbg.__wbindgen_is_object = function(arg0) {
        const val = getObject(arg0);
        const ret = typeof(val) === 'object' && val !== null;
        return ret;
    };
    imports.wbg.__wbg_error_116f75a7476b7cbd = function(arg0, arg1) {
        console.error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
        const ret = getObject(arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_jsval_loose_eq = function(arg0, arg1) {
        const ret = getObject(arg0) == getObject(arg1);
        return ret;
    };
    imports.wbg.__wbindgen_number_get = function(arg0, arg1) {
        const obj = getObject(arg1);
        const ret = typeof(obj) === 'number' ? obj : undefined;
        getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
        getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
    };
    imports.wbg.__wbg_String_b9412f8799faab3e = function(arg0, arg1) {
        const ret = String(getObject(arg1));
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len1;
        getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    imports.wbg.__wbindgen_error_new = function(arg0, arg1) {
        const ret = new Error(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
        const ret = getStringFromWasm0(arg0, arg1);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getwithrefkey_edc2c8960f0f1191 = function(arg0, arg1) {
        const ret = getObject(arg0)[getObject(arg1)];
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_instanceof_ArrayBuffer_836825be07d4c9d2 = function(arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof ArrayBuffer;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_buffer_12d079cc21e14bdb = function(arg0) {
        const ret = getObject(arg0).buffer;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_63b92bc8671ed464 = function(arg0) {
        const ret = new Uint8Array(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_a47bac70306a19a7 = function(arg0, arg1, arg2) {
        getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    };
    imports.wbg.__wbg_length_c20a40f15020d68a = function(arg0) {
        const ret = getObject(arg0).length;
        return ret;
    };
    imports.wbg.__wbg_instanceof_Uint8Array_2b3bbecd033d19f6 = function(arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof Uint8Array;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbindgen_debug_string = function(arg0, arg1) {
        const ret = debugString(getObject(arg1));
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len1;
        getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbindgen_memory = function() {
        const ret = wasm.memory;
        return addHeapObject(ret);
    };

    return imports;
}

function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedFloat64Memory0 = null;
    cachedInt32Memory0 = null;
    cachedUint8Memory0 = null;


    return wasm;
}

async function __wbg_init(input) {
    if (wasm !== undefined) return wasm;

    if (typeof input === 'undefined') {
        input = new URL('formatto_wasm_bg.wasm', (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.src || new URL('main.js', document.baseURI).href)));
    }
    const imports = __wbg_get_imports();

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }

    const { instance, module } = await __wbg_load(await input, imports);

    return __wbg_finalize_init(instance, module);
}

class FormattoUtils {
    constructor(plugin) {
        this.plugin = plugin;
    }
    formatDocument(editor) {
        const copiedSettings = JSON.parse(JSON.stringify(this.plugin.settings));
        this.handleEmptyOptions(copiedSettings);
        this.cursorPosition = editor.getCursor();
        this.originalDocument = editor.getValue();
        try {
            this.formattedDocument = format_document(this.originalDocument, copiedSettings, JSON.stringify(getWasmLocale()));
            this.displayMessage();
        }
        catch (error) {
            new obsidian.Notice(error);
        }
        if (!this.formattedDocument)
            return;
        if (this.formattedDocument !== this.originalDocument) {
            editor.setValue(this.formattedDocument);
            editor.setSelection(this.cursorPosition, this.cursorPosition);
        }
        this.clearVariables();
    }
    displayMessage() {
        if (this.plugin.settings.otherOptions.notifyWhenUnchanged &&
            this.formattedDocument === this.originalDocument) {
            new obsidian.Notice(getLocale(LOCALE_CATEGORY.NOTICE_MESSAGES, "Document is already formatted!"));
        }
        else {
            new obsidian.Notice(getLocale(LOCALE_CATEGORY.NOTICE_MESSAGES, "Document Formatted!"));
        }
    }
    handleEmptyOptions(copiedSettings) {
        for (const optionSection of Object.keys(copiedSettings)) {
            for (const optionKey of Object.keys(copiedSettings[optionSection])) {
                if (copiedSettings[optionSection][optionKey] === "") {
                    copiedSettings[optionSection][optionKey] =
                        FALLBACK_SETTINGS[optionSection][optionKey];
                }
            }
        }
    }
    clearVariables() {
        this.cursorPosition = undefined;
        this.originalDocument = undefined;
        this.formattedDocument = undefined;
    }
}

function _loadWasmModule (sync, filepath, src, imports) {
  function _instantiateOrCompile(source, imports, stream) {
    var instantiateFunc = stream ? WebAssembly.instantiateStreaming : WebAssembly.instantiate;
    var compileFunc = stream ? WebAssembly.compileStreaming : WebAssembly.compile;

    if (imports) {
      return instantiateFunc(source, imports)
    } else {
      return compileFunc(source)
    }
  }

  
var buf = null;
var isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;

if (filepath && isNode) {
  
var fs = require("fs");
var path = require("path");

return new Promise((resolve, reject) => {
  fs.readFile(path.resolve(__dirname, filepath), (error, buffer) => {
    if (error != null) {
      reject(error);
    } else {
      resolve(_instantiateOrCompile(buffer, imports, false));
    }
  });
});

} else if (filepath) {
  
return _instantiateOrCompile(fetch(filepath), imports, true);

}

if (isNode) {
  
buf = Buffer.from(src, 'base64');

} else {
  
var raw = globalThis.atob(src);
var rawLength = raw.length;
buf = new Uint8Array(new ArrayBuffer(rawLength));
for(var i = 0; i < rawLength; i++) {
   buf[i] = raw.charCodeAt(i);
}

}


  if(sync) {
    var mod = new WebAssembly.Module(buf);
    return imports ? new WebAssembly.Instance(mod, imports) : mod
  } else {
    return _instantiateOrCompile(buf, imports, false)
  }
}

function formatto_wasm(imports){return _loadWasmModule(0, null, 'AGFzbQEAAAABwAEaYAJ/fwF/YAJ/fwBgA39/fwF/YAN/f38AYAF/AGABfwF/YAR/f39/AGAFf39/f38AYAR/f39/AX9gAAF/YAV/f39+fwBgBn9/f39/fwBgBX9/f39/AX9gBn9/f39/fwF/YAd/f39/f39/AGAAAGAJf39/f39/fn5+AGAHf39/f39/fwF/YAN+f38Bf2AEf39/fgBgBX9/fn9/AGAEf35/fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwAC7QUXA3diZxpfX3diaW5kZ2VuX29iamVjdF9kcm9wX3JlZgAEA3diZxdfX3diaW5kZ2VuX2lzX3VuZGVmaW5lZAAFA3diZw1fX3diaW5kZ2VuX2luAAADd2JnFl9fd2JpbmRnZW5fYm9vbGVhbl9nZXQABQN3YmcVX193YmluZGdlbl9zdHJpbmdfZ2V0AAEDd2JnFF9fd2JpbmRnZW5faXNfb2JqZWN0AAUDd2JnHF9fd2JnX2Vycm9yXzExNmY3NWE3NDc2YjdjYmQAAQN3YmcbX193YmluZGdlbl9vYmplY3RfY2xvbmVfcmVmAAUDd2JnGV9fd2JpbmRnZW5fanN2YWxfbG9vc2VfZXEAAAN3YmcVX193YmluZGdlbl9udW1iZXJfZ2V0AAEDd2JnHV9fd2JnX1N0cmluZ19iOTQxMmY4Nzk5ZmFhYjNlAAEDd2JnFF9fd2JpbmRnZW5fZXJyb3JfbmV3AAADd2JnFV9fd2JpbmRnZW5fc3RyaW5nX25ldwAAA3diZyRfX3diZ19nZXR3aXRocmVma2V5X2VkYzJjODk2MGYwZjExOTEAAAN3YmctX193YmdfaW5zdGFuY2VvZl9BcnJheUJ1ZmZlcl84MzY4MjViZTA3ZDRjOWQyAAUDd2JnHV9fd2JnX2J1ZmZlcl8xMmQwNzljYzIxZTE0YmRiAAUDd2JnGl9fd2JnX25ld182M2I5MmJjODY3MWVkNDY0AAUDd2JnGl9fd2JnX3NldF9hNDdiYWM3MDMwNmExOWE3AAMDd2JnHV9fd2JnX2xlbmd0aF9jMjBhNDBmMTUwMjBkNjhhAAUDd2JnLF9fd2JnX2luc3RhbmNlb2ZfVWludDhBcnJheV8yYjNiYmVjZDAzM2QxOWY2AAUDd2JnF19fd2JpbmRnZW5fZGVidWdf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BE8NCwJAIAMgBmotAAAiBiADIA1qLQAAIg1LBEAgDkEBaiIGIAlrIQhBACEFDAELIAYgDUcEQCAKQQFqIQZBACEFQQEhCCAKIQkMAQtBACAFQQFqIgYgBiAIRiINGyEFIAZBACANGyAKaiEGCyAHIAhHDQELCyAEIAwgCSAJIAxJG2shDAJAIAdFBEBBACEHQQAhCgwBCyAHQQNxIQZBACEKAkAgB0EESQRAQQAhCAwBCyAHQXxxIQlBACEIA0BCASADIAhqIgVBA2oxAACGQgEgBTEAAIYgD4RCASAFQQFqMQAAhoRCASAFQQJqMQAAhoSEIQ8gCSAIQQRqIghHDQALCyAGRQ0AIAMgCGohBQNAQgEgBTEAAIYgD4QhDyAFQQFqIQUgBkEBayIGDQALCyAECyEFIAAgAzYCOCAAIAE2AjAgACAFNgIoIAAgCjYCJCAAIAI2AiAgAEEANgIcIAAgBzYCGCAAIAw2AhQgACALNgIQIAAgDzcDCCAAQQE2AgAgAEE8aiAENgIADAkLIAggBEGU8sAAEHkACyANIARBlPLAABB5AAsgCyAEQfTxwAAQegALIAcgBUGE8sAAEHsACyAFIARBhPLAABB6AAsgBiAEQaTywAAQeQALIAkgBEG08sAAEHkACyAGIARBpPLAABB5AAsgDSAEQbTywAAQeQALIABBNGogAjYCAAvGCwEEfyMAQTBrIgMkACMAQSBrIgYkACADQSRqIgQCfyAAKAIIIgUgACgCBE8EQCAGQQQ2AhQgBkEIaiAAIAUQcyAEIAZBFGogBigCCCAGKAIMEI8BNgIEQQEMAQsgACAFQQFqNgIIIAQgACgCACAFai0AADoAAUEACzoAACAGQSBqJAACfwJAAkACQAJAAkACQAJAAkACQCADLQAkDQACQAJAAkACQAJAAkACQAJAAkAgAy0AJSIEQe0ATQRAIARB4QBNBEAgBEEiRg0CIARBL0YNBCAEQdwARg0DDBMLIARB4gBrDgUEEhISBRILIARB7gBrDggFERERBhEHCBELIAIoAggiACACKAIARgR/IAIgABCMASACKAIIBSAACyACKAIEakEiOgAAIAIgAigCCEEBajYCCEEADBELIAIoAggiACACKAIARgR/IAIgABCMASACKAIIBSAACyACKAIEakHcADoAACACIAIoAghBAWo2AghBAAwQCyACKAIIIgAgAigCAEYEfyACIAAQjAEgAigCCAUgAAsgAigCBGpBLzoAACACIAIoAghBAWo2AghBAAwPCyACKAIIIgAgAigCAEYEfyACIAAQjAEgAigCCAUgAAsgAigCBGpBCDoAACACIAIoAghBAWo2AghBAAwOCyACKAIIIgAgAigCAEYEfyACIAAQjAEgAigCCAUgAAsgAigCBGpBDDoAACACIAIoAghBAWo2AghBAAwNCyACKAIIIgAgAigCAEYEfyACIAAQjAEgAigCCAUgAAsgAigCBGpBCjoAACACIAIoAghBAWo2AghBAAwMCyACKAIIIgAgAigCAEYEfyACIAAQjAEgAigCCAUgAAsgAigCBGpBDToAACACIAIoAghBAWo2AghBAAwLCyACKAIIIgAgAigCAEYEfyACIAAQjAEgAigCCAUgAAsgAigCBGpBCToAACACIAIoAghBAWo2AghBAAwKCyADQRxqIAAQTyADLwEcDQQCQAJAIAMvAR4iBEGA+ANxIgVBgLADRwRAIAVBgLgDRgRAIAFFDQIgA0EUNgIkIAAgA0EkahCeAQwNCyAEQYCwv39zQf+PvH9NDQgMCgsgA0EkaiAAEHwgAy0AJA0CIAMtACVB3ABGDQEgAQ0FCyACIAQQhQFBAAwKCyAAIAAoAggiBUEBajYCCCADQSRqIAAQfCADLQAkDQAgAy0AJUH1AEcEQCABDQMgAiAEEIUBIABBACACEBoMCgsgACAFQQJqNgIIIANBJGogABBPIAMvASRFDQELIAMoAigMCAsgAy8BJiIBQYBAa0H//wNxQYD4A0kNBCABQYDIAGpB//8DcSAEQYDQAGpB//8DcUEKdHJBgIAEaiIEQYCAxABHIARBgLADc0GAgMQAa0H/j7x/S3ENBSADQQ82AiQgACADQSRqEJ4BDAcLIAAgBUECajYCCCADQRc2AiQgACADQSRqEJ4BDAYLIAAgACgCCEEBajYCCCADQRc2AiQgACADQSRqEJ4BDAULIAMoAiAMBAtBnLjAABDfAQALIANBFDYCJCAAIANBJGoQngEMAgsgA0EANgIkIANBJGohASADQRBqIgACfwJAAkAgBEGAAU8EQCAEQYAQSQ0BIARBgIAETw0CIAEgBEE/cUGAAXI6AAIgASAEQQx2QeABcjoAACABIARBBnZBP3FB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QSxGDQIgBkHdAEYNAQsgAS0ABA0CIAJBBzYCKCACQQhqIAcgBCADQQFqIgEgASAESxsQcyACQShqIAIoAgggAigCDBCPASEBIABBBzoAACAAIAE2AgQMBwsgAEEGOgAADAYLIAEtAAQNACAFIANBAWoiAzYCFCADIARJBEADQCADIAhqLQAAIgZBCWsiAUEXS0EBIAF0QZOAgARxRXINAyAFIANBAWoiAzYCFCADIARHDQALIAQhAwsgAkEFNgIoIAJBIGogByAEIANBAWoiASABIARLGxBzIAJBKGogAigCICACKAIkEI8BIQEgAEEHOgAAIAAgATYCBAwFCyABQQA6AAQLIAZB3QBGBEAgAkEVNgIoIAJBEGogByAEIANBAWoiASABIARLGxBzIAJBKGogAigCECACKAIUEI8BIQEgAEEHOgAAIAAgATYCBAwECyACQShqIAUQGCACLQAoQQZHBEAgACACKQMoNwMAIABBEGogAkE4aikDADcDACAAQQhqIAJBMGopAwA3AwAMBAsgACACKAIsNgIEIABBBzoAAAwDCyAFIANBAWoiAzYCFCADIARHDQALIAQhAwsgAkECNgIoIAJBGGogBUEMaiAEIANBAWoiASABIARLGxBzIAJBKGogAigCGCACKAIcEI8BIQEgAEEHOgAAIAAgATYCBAsgAkFAayQAC+kFAgF/AXwjAEEwayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCAALQAAQQFrDhEBAgMEBQYHCAkKCwwNDg8QEQALIAIgAC0AAToACCACQRxqQgE3AgAgAkECNgIUIAJBpMDAADYCECACQcQANgIsIAIgAkEoajYCGCACIAJBCGo2AiggASACQRBqEMYBDBELIAIgACkDCDcDCCACQRxqQgE3AgAgAkECNgIUIAJBwMDAADYCECACQcUANgIsIAIgAkEoajYCGCACIAJBCGo2AiggASACQRBqEMYBDBALIAIgACkDCDcDCCACQRxqQgE3AgAgAkECNgIUIAJBwMDAADYCECACQcYANgIsIAIgAkEoajYCGCACIAJBCGo2AiggASACQRBqEMYBDA8LIAArAwghAyACQRxqQgE3AgAgAkECNgIUIAJB4MDAADYCECACQccANgIMIAIgAzkDKCACIAJBCGo2Ahgg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gBA3AkQgBUHQAGoiBiACIANBm4PAAEENEBkgBUGUAWogBhAtIAUoApQBBEADQCAFKAKYASABayEGIAEgAmohCCAFKAKcASEBIAVBxABqIgkgCCAGENMBIAkgByAEENMBIAVBlAFqIAVB0ABqEC0gBSgClAENAAsLIAVBxABqIAEgAmogAyABaxDTASAFQdgAaiIBIAVBzABqKAIANgIAIAUgBSkCRDcDUCAFQSBqELoBIAVBKGoiAiABKAIANgIAIAUgBSkDUDcDICAFQTBqELoBIAEgAigCADYCACAFIAUpAyA3A1AgBUEIaiAFQdAAahCSASAFKAIMIQMgBSgCCAwCC0GYgMAAQTcgBUHEAGpB0IDAAEGsgcAAEHIACyAFQRRqIgEgA0EAQaiDwABBHRBUIAUgARCSASAFKAIEIQMgBSgCAAshASAAIAM2AgQgACABNgIAIAVBoAFqJAALlwYCBn8BfCMAQZABayIDJAACQCAAKAIAIgRBgQEQCARAQQchBkEAIQAMAQtBAUECIAQQAyIFQQFGG0EAIAUbIgVBAkcEQEEAIQAMAQsgA0EoaiAEEAkgAygCKCEGIANBGGoiByADKwMwOQMIIAcgBkEAR603AwAgAykDGKdBAUYEQCADKwMgIQlBAyEGQQAhAAwBCyADQRBqIAQQBAJ/AkAgAygCECIERQ0AIANBCGogBCADKAIUEJsBIANB2ABqIAMoAgggAygCDBDCASADKAJYQYCAgIB4Rg0AIANBQGsgA0HgAGooAgAiBTYCACADIAMpAlg3AzhBBSEGIAMoAjwhBEEBDAELIANB5ABqIQUjAEEQayIEJAACQAJAIAAoAgAQE0UEQCAAKAIAEA4NASAFQYCAgIB4NgIADAILIARBBGogABCIASAFQQhqIARBDGooAgA2AgAgBSAEKQIENwIADAELIAQgACgCABAQNgIAIARBBGogBBCIASAFQQhqIARBDGooAgA2AgAgBSAEKQIENwIAIAQoAgAiBUGEAUkNACAFEAALIARBEGokAAJ/IAMoAmQiB0GAgICAeEciCEUEQCADQThqIgZBBHIhBCADQUBrIQUgA0H8AGpCATcCACADQQE2AnQgA0HQlsAANgJwIANBKDYCjAEgAyAANgKIASADIANBiAFqNgJ4IAYgA0HwAGoQO0ERDAELIANBzABqIQQg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ACAENgIEIAAgAzYCAAvpAQEFfyMAQRBrIgIkACACIAE2AgQCQCACQQRqEM8BRQRAIAJBCGohBCACKAIEIQEjAEEQayIDJAAgAyABNgIIQQEhBQJAIAEQAyIGQQFNBEBBACEFIAQgBkEARzoAAQwBCyAEIANBCGogA0EPakGYhMAAECo2AgQgAygCCCEBCyAEIAU6AAAgAUGEAU8EQCABEAALIANBEGokACAAAn8gAi0ACEUEQCAAIAItAAk6AAFBAAwBCyAAIAIoAgw2AgRBAQs6AAAMAQsgAEGABDsBACACKAIEIgBBhAFJDQAgABAACyACQRBqJAAL0QIBBX8jAEEwayICJAACfyAAKAIAIgFFBEBBACEAQQAMAQsgAiABNgIkIAJBADYCICACIAE2AhQgAkEANgIQIAIgACgCBCIBNgIoIAIgATYCGCAAKAIIIQBBAQshASACIAA2AiwgAiABNgIcIAIgATYCDCMAQRBrIgMkACADQQRqIAJBDGoiBRBlIAMoAgQiAARAA0AgACADKAIMIgFBDGxqQYwCaiIEKAIABEAgBCgCBBAjCwJAAkACQAJAIAAgAUEYbGoiAS0AAA4FAwMDAQIACyABQQRqEHUMAgsgASgCBEUNASABQQhqKAIAECMMAQsgAUEMaigCACIEBEAgAUEIaigCACEAA0AgABBuIABBGGohACAEQQFrIgQNAAsLIAEoAgRFDQAgASgCCBAjCyADQQRqIAUQZSADKAIEIgANAAsLIANBEGokACACQTBqJAALcAEDfwJAAkACQCAAKAIAIgAoAgAOAgABAgsgAEEIaigCAEUNASAAKAIEECMMAQsgAC0ABEEDRw0AIABBCGooAgAiASgCACIDIAEoAgQiAigCABEEACACKAIEBEAgAigCCBogAxAjCyABECMLIAAQIwtsAQF/IwBBMGsiAiQAIAJBGGogACgCABAKIAJBEGogAigCGCACKAIcEM4BIAJBCGogAigCECACKAIUEJsBIAJBJGoiACACKAIIIAIoAgwQwgEgAigCKCACKAIsIAEQ+AEgABC6ASACQTBqJAALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQTk2AgAgA0ECNgIMIANBvPDAADYCCCADQTk2AiQgAyADQSBqNgIQIAMgA0EEajYC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hCAEQgGGQv7///////8PgyAEQjSIp0H/D3EiGhsiAkIBgyEFQQMhAAJAAkACQEEBQQJBBCAEQoCAgICAgID4/wCDIgdQIhsbIAdCgICAgICAgPj/AFEbQQNBBCAbGyAGUBtBAmsOAwABAgMLQQQhAAwCCyAaQbMIayEBIAVQIQBCASEDDAELQoCAgICAgIAgIAJCAYYgAkKAgICAgICACFEiABshAkICQgEgABshA0HLd0HMdyAAGyAaaiEBIAVQIQALIB4gATsB6AggHiADNwPgCCAeQgE3A9gIIB4gAjcD0AggHiAAOgDqCAJAAn8CQAJAAkACQEEDIABBAmtB/wFxIgAgAEEDTxsiGgRAQffnwABB+OfAAEHE0MAAIBgbIARCAFMbISxBASEAIARCP4inIBhyITIgGkECaw4CAgMBCyAeQQM2ApgIIB5B+efAADYClAggHkECOwGQCEEBIQBBxNDAACEsIB5BkAhqDAQLIB5BAzYCmAggHkH858AANgKUCCAeQQI7AZAIIB5BkAhqDAMLQQIhACAeQQI7AZAIIChFDQEgHkGgCGogKDYCACAeQQA7AZwIIB5BAjYCmAggHkH158AANgKUCCAeQZAIagwCC0F0QQUgAcEiAEEASBsgAGwiAEHA/QBJBEAgHkGQCGohIiAeQRBqISYgAEEEdkEVaiIfIQFBgIB+QQAgKGsgKEGAgAJPGyEhAkACQAJ/AkACQAJAAkAgHkHQCGoiACkDACICUEUEQCACQoCAgICAgICAIFoNASABRQ0CQaB/IAAvARgiAEEgayAAIAJCgICAgBBUIgAbIhhBEGsgGCACQiCGIAIgABsiAkKAgICAgIDAAFQiABsiGEEIayAYIAJCEIYgAiAAGyICQoCAgICAgICAAVQiABsiGEEEayAYIAJCCIYgAiAAGyICQoCAgICAgICAEFQiABsiGEECayAYIAJCBIYgAiAAGyICQoCAgICAgICAwABUIgAbIAJCAoYgAiAAGyICQgBZayIaa8FB0ABsQbCnBWpBzhBtIgBB0QBPDQMgAEEEdCIYQZjYwABqKQMAIgNC/////w+DIgQgAiACQn+FQj+IhiICQiCIIgV+IgZCIIggA0IgiCIDIAV+fCADIAJC/////w+DIgJ+IgNCIIh8IAZC/////w+DIAIgBH5CIIh8IANC/////w+D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AgAiBU0EQAJ/QYGAgIB4IAVFDQAaIAIoAgQhCAJAIAFFBEBBASEFIAgQIwwBC0EBIAggBUEBIAEQwwEiBUUNARoLIAIgATYCACACIAU2AgRBgYCAgHgLIQIgByABNgIEIAcgAjYCACAEQSBqJAAMAQsgBEEUakIANwIAIARBATYCDCAEQayYwAA2AgggBEGImMAANgIQIARBCGpBgJnAABCdAQALIAYoAggiAUGBgICAeEYNACABRQ0BIAEgBigCDBD0AQALIAZBEGokAAwBCxCcAQALIAAgAykCCDcDACADQRBqJAALQAEBfyMAQSBrIgAkACAAQRRqQgA3AgAgAEEBNgIMIABB2M7AADYCCCAAQYjOwAA2AhAgAEEIakHgzsAAEJ0BAAuvAgECfyMAQSBrIgIkACACQQE7ARwgAiABNgIYIAIgADYCFCACQeTqwAA2AhAgAkHE0MAANgIMIwBBEGsiASQAIAJBDGoiACgCCCICRQRAQeTJwAAQ3wEACyABIAAoAgw2AgwgASAANgIIIAEgAjYCBCMAQRBrIgAkACABQQRqIgEoAgAiAkEMaigCACEDAkACfwJAAkAgAigCBA4CAAEDCyADDQJBACECQazCwAAMAQsgAw0BIAIoAgAiAygCBCECIAMoAgALIQMgACACNgIEIAAgAzYCACAAQZTKwAAgASgCBCIAKAIIIAEoAgggAC0AECAALQAREF0ACyAAIAI2AgwgAEGAgICAeDYCACAAQajKwAAgASgCBCIAKAIIIAEoAgggAC0AECAALQAREF0ACzEBAX8jAEEQayICJAAgAkEIaiAAIAAoAggQcyABIAIoAgggAigCDBCPASACQRBqJAALLQEBfyAAKAIIIgEEQCAAKAIEIQADQCAAELoBIABBDGohACABQQFrIgENAAsLCy4AAkAgA2lBAUdBgICAgHggA2sgAUlyRQRAIAAgASADIAIQwwEiAA0BCwALIAALMgEBfyAAKAIQIgFBhAFPBEAgARAACwJAIAAoAgBFDQAgACgCBCIAQYQBSQ0AIAAQAAsLqgQCBn8BfiMAQRBrIgUkACAFIAA2AgwgBUEMaiEHIwBBEGsiAiQAIAIgASgCFEHEiMAAQQUgAUEYaigCACgCDBECADoADCACIAE2AgggAkEAOgANIAJBADYCBCMAQUBqIgAkACACQQRq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DwAgACgCAEGBARAIQQBHCw4AIAAoAgAgASgCABANCyEAIABCs6fGusjS4NUlNwMIIABCqfu6k6rZxuS6fzcDAAsQACAAKAIEIAAoAgggARAdCw4AIAAgASABIAJqEI0BCxAAIAAoAgAgACgCBCABEB0LEQAgACgCACAAKAIEIAEQ+AELIAAgAELk3seFkNCF3n03AwggAELB9/nozJOy0UE3AwALIgAgAEKi36vmru3nj+AANwMIIABC36v/r+ChpYCsfzcDAAshACAAQuiKppijg97ijn83AwggAELfx4S2pJqD9Bs3AwALEwAgAEGEysAANgIEIAAgATYCAAsiACAAQqTLpfjC9M2hpX83AwggAEKOisaw+vCLm8AANwMACxAAIAEgACgCACAAKAIEEBsLDQAgACABIAIQ0wFBAAsOACAAKAIAGgNADAALAAsNACAANQIAQQEgARBBCw8AQbjqwABBKyAAEJQBAAsNACAAKQMAQQEgARBBC7kCAgJ/AX4CfyAAKAIAKQMAIQQjAEGAAWsiAyQAAkACQAJ/AkAgASgCHCIAQRBxRQRAIABBIHENASAEQQEgARBBDAILQQAhAANAIAAgA2pB/wBqQTBB1wAgBKdBD3EiAkEKSRsgAmo6AAAgAEEBayEAIARCEFQgBEIEiCEERQ0ACyAAQYABaiICQYABSw0CIAFBAUHA7cAAQQIgACADakGAAWpBACAAaxAhDAELQQAhAANAIAAgA2pB/wBqQTBBNyAEp0EPcSICQQpJGyACajoAACAAQQFrIQAgBEIQVCAEQgSIIQRFDQALIABBgAFqIgJBgAFLDQIgAUEBQcDtwABBAiAAIANqQYABakEAIABrECELIANBgAFqJAAMAgsgAkGAAUGw7cAAEHgACyACQYABQbDtwAAQeAALCwsAIAAjAGokACMACwcAIAAQugELDgAgAUG8gsAAQQUQwAELCwAgACgCACABEGwLDgAgAUHMisAAQRIQwAELDgAgAUHwi8AAQRAQwAELDgAgAUGYjMAAQRQQwAELDgAgAUHsjMAAQRMQwAELDgAgAUHcjcAAQRUQwAELDgAgAUGwj8AAQQUQwAELCQAgACABEBUACw4AIAFB6JrAAEEFEMABC5EBAQF/IAAoAgAhAiMAQTBrIgAkAAJ/IAIoAgxFBEAgAiABEEUMAQsgAEEs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dHNiZWZvcmVDb250ZW50c0FmdGVyQ29kZUJsb2Nrc2JlZm9yZUNvZGVCbG9ja3NiZWZvcmVDb2RlQmxvY2tzQWZ0ZXJIZWFkaW5nc2luc2VydE5ld2xpbmVub3RpZnlXaGVuVW5jaGFuZ2Vkc2hvd01vcmVEZXRhaWxlZEVycm9yTWVzc2FnZXNoZWFkaW5nR2Fwc290aGVyR2Fwc2Zvcm1hdE9wdGlvbnNvdGhlck9wdGlvbnMAAAAQAAAABAAAAAQAAAARAAAAEAAAAAQAAAAEAAAAEgAAABEAAABIAxAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAABAAAAAQAAAAZAAAAGAAAAAQAAAAEAAAAGgAAABkAAACEAxAAGwAAABwAAAAVAAAAGwAAABcAAABgdW53cmFwX3Rocm93YCBmYWlsZWRkZXNjcmlwdGlvbigpIGlzIGRlcHJlY2F0ZWQ7IHVzZSBEaXNwbGF5bWlzc2luZyBmaWVsZCBgYAAAAP0DEAAPAAAADAQQAAEAAABkdXBsaWNhdGUgZmllbGQgYAAAACAEEAARAAAADAQQAAEAAABFcnJvcgAAAB0AAAAEAAAABAAAAB4AAABgYGBzcmMvdG9vbHMvcGFyc2luZy9oZWFkaW5ncy5yc18EEAAdAAAAEwAAADsAAABfBBAAHQAAAFMAAAAMAAAAc3JjL3Rvb2xzL3BhcnNpbmcvaGVhZGluZ3MucnMAAACcBBAAHQAAAG0AAAAuAAAARmFpbGVkIHRvIHJlYWQgbG9jYWxlIGZpbGUucGFyc2luZ2Zvcm1hdHRpbmdiZWZvcmVUb3BMZXZlbEhlYWRpbmdzYmVmb3JlRmlyc3RTdWJIZWFkaW5nYmVmb3JlU3ViSGVhZGluZ3P4BBAAFgAAAA4FEAAVAAAAIwUQABEAAABzdHJ1Y3QgSGVhZGluZ0dhcHNhZnRlclByb3BlcnRpZXNiZWZvcmVDb250ZW50c2JlZm9yZUNvbnRlbnRzQWZ0ZXJDb2RlQmxvY2tzYmVmb3JlQ29kZUJsb2Nrc2JlZm9yZUNvZGVCbG9ja3NBZnRlckhlYWRpbmdzAAAAXgUQAA8AAABtBRAADgAAAHsFEAAdAAAAmAUQABAAAACoBRAAHQAAAHN0cnVjdCBPdGhlckdhcHNpbnNlcnROZXdsaW5lAAAAAAYQAA0AAABzdHJ1Y3QgRm9ybWF0T3B0aW9uc25vdGlmeVdoZW5VbmNoYW5nZWRzaG93TW9yZURldGFpbGVkRXJyb3JNZXNzYWdlcywGEAATAAAAPwYQAB0AAABzdHJ1Y3QgT3RoZXJPcHRpb25zUGx1Z2luU2V0dGluZ3NoZWFkaW5nR2Fwc290aGVyR2Fwc2Zvcm1hdE9wdGlvbnNvdGhlck9wdGlvbnMAAI0GEAALAAAAmAYQAAkAAAChBhAADQAAAK4GEAAMAAAAc3RydWN0IFBsdWdpblNldHRpbmdzAAAAHwAAAAwAAAAEAAAAIAAAACEAAAAFAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQAiAAAAAAAAAAEAAAAjAAAAL3J1c3RjL2FlZGQxNzNhMmMwODZlNTU4YzJiNjZkMzc0M2IzNDRmOTc3NjIxYTcvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAFQHEABLAAAAMwoAAA4AAABFcnJvcgAAAG1pZCA+IGxlbgAAALgHEAAJAAAAYXR0ZW1wdCB0byBqb2luIGludG8gY29sbGVjdGlvbiB3aXRoIGxlbiA+IHVzaXplOjpNQVgvcnVzdGMvYWVkZDE3M2EyYzA4NmU1NThjMmI2NmQzNzQzYjM0NGY5Nzc2MjFhNy9saWJyYXJ5L2FsbG9jL3NyYy9zdHIucnMAAAABCBAASAAAAJsAAAAKAAAAAQgQAEgAAACyAAAAFgAAAC9ydXN0Yy9hZWRkMTczYTJjMDg2ZTU1OGMyYjY2ZDM3NDNiMzQ0Zjk3NzYyMWE3L2xpYnJhcnkvY29yZS9zcmMvc3RyL3BhdHRlcm4ucnMAbAgQAE8AAAC4AQAANwAAAC9ydXN0Yy9hZWRkMTczYTJjMDg2ZTU1OGMyYjY2ZDM3NDNiMzQ0Zjk3NzYyMWE3L2xpYnJhcnkvY29yZS9zcmMvc3RyL3BhdHRlcm4ucnMAzAgQAE8AAAC3BQAAFAAAAMwIEABPAAAAtwUAACEAAADMCBAATwAAAKsFAAAhAAAAzAgQAE8AAAA7BAAAJAAAACMgIwDMCBAAAAAAAF4JEAABAAAACgAAAHAJEAAAAAAAcAkQAAAAAABwCRAAAAAAAEZhaWxlZCB0byByZWFkIG9wdGlvbnMuIFBsZWFzZSBtYWtlIHN1cmUgdGhlcmUgaXMgbm8gb3B0aW9uIHdpdGggYW4gZW1wdHkgdmFsdWUuRmFpbGVkIHRvIHJlYWQgb3B0aW9uIHByb3BlcnRpZXMuAAAAcAkQAAAAAABGYWlsZWQgdG8gcmVhZCBvcHRpb25zLiBTb21lIG9mIHRoZW0gYXJlIHBvc3NpYmx5IG5vdCBwb3NpdGl2ZSBudW1iZXIgdmFsdWVzLmNhbm5vdCBhY2Nlc3MgYSBUaHJlYWQgTG9jYWwgU3RvcmFnZSB2YWx1ZSBkdXJpbmcgb3IgYWZ0ZXIgZGVzdHJ1Y3Rpb24AKQAAAAAAAAABAAAAKgAAAC9ydXN0Yy9hZWRkMTczYTJjMDg2ZTU1OGMyYjY2ZDM3NDNiMzQ0Zjk3NzYyMWE3L2xpYnJhcnkvc3RkL3NyYy90aHJlYWQvbG9jYWwucnMArAoQAE8AAAAGAQAAGgAAAGludmFsaWQgdHlwZTogLCBleHBlY3RlZCAAAAAMCxAADgAAABoLEAALAAAA//////////84CxAAQdCWwAALtQkMCxAAAAAAACsAAAAvaG9tZS9ydW5uZXIvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZS13YXNtLWJpbmRnZW4tMC42LjUvc3JjL2xpYi5ycwAAAFwLEABlAAAANQAAAA4AAABjbG9zdXJlIGludm9rZWQgcmVjdXJzaXZlbHkgb3IgYWZ0ZXIgYmVpbmcgZHJvcHBlZAAAVHJpZWQgdG8gc2hyaW5rIHRvIGEgbGFyZ2VyIGNhcGFjaXR5CAwQACQAAAAvcnVzdGMvYWVkZDE3M2EyYzA4NmU1NThjMmI2NmQzNzQzYjM0NGY5Nzc2MjFhNy9saWJyYXJ5L2FsbG9jL3NyYy9yYXdfdmVjLnJzNAwQAEwAAADPAQAACQAAAEpzVmFsdWUoKQAAAJAMEAAIAAAAmAwQAAEAAAA8AAAADAAAAAQAAAA9AAAAPgAAAAUAAABhIERpc3BsYXkgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IgdW5leHBlY3RlZGx5AD8AAAAAAAAAAQAAAEAAAAAvcnVzdGMvYWVkZDE3M2EyYzA4NmU1NThjMmI2NmQzNzQzYjM0NGY5Nzc2MjFhNy9saWJyYXJ5L2FsbG9jL3NyYy9zdHJpbmcucnMADA0QAEsAAAAzCgAADgAAAEVycm9yRU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgIGNvbHVtbiAAAGgNEAAAAAAAoQ8QAAkAAACqDxAACAAAAEVycm9yKCwgbGluZTogLCBjb2x1bW46ICkAAADMDxAABgAAANIPEAAIAAAA2g8QAAoAAADkDxAAAQBBjqDAAAuxFvA/AAAAAAAAJEAAAAAAAABZQAAAAAAAQI9AAAAAAACIw0AAAAAAAGr4QAAAAACAhC5BAAAAANASY0EAAAAAhNeXQQAAAABlzc1BAAAAIF+gAkIAAADodkg3QgAAAKKUGm1CAABA5ZwwokIAAJAexLzWQgAANCb1awxDAIDgN3nDQUMAoNiFVzR2QwDITmdtwatDAD2R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AQEBAQEBAQEBAQEBAQAAAQBB+LbAAAsBAQBBnLjAAAvJB1waEABgAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjL2FlZGQxNzNhMmMwODZlNTU4YzJiNjZkMzc0M2IzNDRmOTc3NjIxYTcvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzLB0QAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjL2FlZGQxNzNhMmMwODZlNTU4YzJiNjZkMzc0M2IzNDRmOTc3NjIxYTcvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5yc2Fzc2VydGlvbiBmYWlsZWQ6IGVkZ2UuaGVpZ2h0ID09IHNlbGYuaGVpZ2h0IC0gMQC8HRAAWwAAAK8CAAAJAAAAvB0QAFsAAACzAgAACQAAAGFzc2VydGlvbiBmYWlsZWQ6IHNyYy5sZW4oKSA9PSBkc3QubGVuKCm8HRAAWwAAAC8HAAAFAAAAvB0QAFsAAACvBAAAIwAAALwdEABbAAAA7wQAACQAAABhc3NlcnRpb24gZmFpbGVkOiBlZGdlLmhlaWdodCA9PSBzZWxmLm5vZGUuaGVpZ2h0IC0gMQAAALwdEABbAAAA8AMAAAkAAAAvcnVzdGMvYWVkZDE3M2EyYzA4NmU1NThjMmI2NmQzNzQzYjM0NGY5Nzc2MjFhNy9saWJyYXJ5L2FsbG9jL3NyYy9jb2xsZWN0aW9ucy9idHJlZS9uYXZpZ2F0ZS5ycwAIHxAAXwAAAFkCAAAwAAAAL3J1c3RjL2FlZGQxNzNhMmMwODZlNTU4YzJiNjZkMzc0M2IzNDRmOTc3NjIxYTcvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAeB8QAF8AAADHAAAAJwBBgMDAAAv+EUsAAAAIAAAABAAAAEwAAABNAAAATgAAAGJvb2xlYW4gYGAAABggEAAJAAAAISAQAAEAAABpbnRlZ2VyIGAAAAA0IBAACQAAACEgEAABAAAAZmxvYXRpbmcgcG9pbnQgYFAgEAAQAAAAISAQAAEAAABjaGFyYWN0ZXIgYABwIBAACwAAACEgEAABAAAAc3RyaW5nIACMIBAABwAAAGJ5dGUgYXJyYXl1bml0IHZhbHVlT3B0aW9uIHZhbHVlbmV3dHlwZSBzdHJ1Y3RzZXF1ZW5jZW1hcGVudW11bml0IHZhcmlhbnRuZXd0eXBlIHZhcmlhbnR0dXBsZSB2YXJpYW50c3RydWN0IHZhcmlhbnQAACAQAAAAAAAuMGEgYm9vbGVhbmEgc3RyaW5nAFMAAAAMAAAABAAAAFQAAABVAAAAVgAAAEFjY2Vzc0Vycm9yACwhEAAAAAAAZW50aXR5IG5vdCBmb3VuZHBlcm1pc3Npb24gZGVuaWVkY29ubmVjdGlvbiByZWZ1c2VkY29ubmVjdGlvbiByZXNldGhvc3QgdW5yZWFjaGFibGVuZXR3b3JrIHVucmVhY2hhYmxlY29ubmVjdGlvbiBhYm9ydGVkbm90IGNvbm5lY3RlZGFkZHJlc3MgaW4gdXNlYWRkcmVzcyBub3QgYXZhaWxhYmxlbmV0d29yayBkb3duYnJva2VuIHBpcGVlbnRpdHkgYWxyZWFkeSBleGlzdHNvcGVyYXRpb24gd291bGQgYmxvY2tub3QgYSBkaXJlY3RvcnlpcyBhIGRpcmVjdG9yeWRpcmVjdG9yeSBub3QgZW1wdHlyZWFkLW9ubHkgZmlsZXN5c3RlbSBvciBzdG9yYWdlIG1lZGl1bWZpbGVzeXN0ZW0gbG9vcCBvciBpbmRpcmVjdGlvbiBsaW1pdCAoZS5nLiBzeW1saW5rIGxvb3Apc3RhbGUgbmV0d29yayBmaWxlIGhhbmRsZWludmFsaWQgaW5wdXQgcGFyYW1ldGVyaW52YWxpZCBkYXRhdGltZWQgb3V0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dWxkIGJlIHplcm8gZm9yIG5vbi16ZXJvIHR5cGUpLi7uNBAAAgAAADAxMjM0NTY3ODlhYmNkZWZCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IBY1EAASAAAARCgQAAAAAABjYWxsZWQgYE9wdGlvbjo6dW53cmFwKClgIG9uIGEgYE5vbmVgIHZhbHVlAHUAAAAAAAAAAQAAAHYAAABpbmRleCBvdXQgb2YgYm91bmRzOiB0aGUgbGVuIGlzICBidXQgdGhlIGluZGV4IGlzIAAAdDUQACAAAACUNRAAEgAAAHcAAAAEAAAABAAAAHgAAAA9PSE9bWF0Y2hlc2Fzc2VydGlvbiBgbGVmdCAgcmlnaHRgIGZhaWxlZAogIGxlZnQ6IAogcmlnaHQ6IADTNRAAEAAAAOM1EAAXAAAA+jUQAAkAAAAgcmlnaHRgIGZhaWxlZDogCiAgbGVmdDogAAAA0zUQABAAAAAcNhAAEAAAACw2EAAJAAAA+jUQAAkAAAA6IAAARCgQAAAAAABYNhAAAgAAAHcAAAAMAAAABAAAAHkAAAB6AAAAewAAACAgICAsICwKfSB9KCgKLGxpYnJhcnkvY29yZS9zcmMvZm10L251bS5ycwAAkzYQABsAAABpAAAAFwAAADB4MDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwAABEKBAAGwAAAPIFAAAfAAAAZmFsc2V0cnVlAAAARCgQABsAAAA1CQAAGgAAAEQoEAAbAAAALgkAACIAAAByYW5nZSBzdGFydCBpbmRleCAgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGggCDgQABIAAAAaOBAAIgAAAHJhbmdlIGVu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', imports)}

/** Entry Point. */
class FormattoPlugin extends obsidian.Plugin {
    constructor() {
        super(...arguments);
        this.utils = new FormattoUtils(this);
        this.icons = new FormattoIcons();
        this.ribbonIcons = new FormattoRibbonIcons(this);
        this.editorMenus = new FormattoEditorMenu(this);
        this.commands = new FormattoCommands(this);
    }
    /** Load and Save Settings */
    loadSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
        });
    }
    saveSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.saveData(this.settings);
        });
    }
    /** Runs whenever the user starts using the plugin in Obsidian. */
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadSettings();
            // Initialize WebAssembly
            yield (() => __awaiter(this, void 0, void 0, function* () {
                // @ts-expect-error: formatto_wasm should be called.
                yield __wbg_init(yield formatto_wasm());
            }))();
            this.addSettingTab(new FormattoSettingTab(this.app, this));
            this.icons.registerIcons();
            this.ribbonIcons.registerRibbonIcons();
            this.editorMenus.registerEditorMenus();
            this.commands.registerCommands();
            console.log("Plugin Loaded: Formatto\n(Error details are going to be displayed here.)");
        });
    }
    /** Runs when the plugin is disabled. */
    onunload() {
        console.log("Plugin Unloaded: Formatto");
    }
}

module.exports = FormattoPlugin;
