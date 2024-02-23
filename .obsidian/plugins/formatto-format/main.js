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
            .setPlaceholder("3")
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
            .setPlaceholder("1")
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
            .setPlaceholder("2")
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
            .setPlaceholder("2")
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
            .setPlaceholder("0")
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
            .setPlaceholder("1")
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
            .setPlaceholder("1")
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
            .setPlaceholder("0")
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

// `Partial<Type>` is a TypeScript utility that returns a type with all properties of Type set to optional.
// It enables type checking while letting you only define the properties you want to provide defaults for.
// Source : https://docs.obsidian.md/Plugins/User+interface/Settings#Provide+default+values
const DEFAULT_HEADING_GAPS = {
    beforeTopLevelHeadings: "3",
    beforeFirstSubHeading: "1",
    beforeSubHeadings: "2",
};
const DEFAULT_OTHER_GAPS = {
    afterProperties: "2",
    beforeContents: "0",
    beforeContentsAfterCodeBlocks: "1",
    beforeCodeBlocks: "1",
    beforeCodeBlocksAfterHeadings: "0",
};
const DEFAULT_FORMAT_OPTIONS = {
    insertNewline: true,
};
const DEFAULT_OTHER_OPTIONS = {
    notifyWhenUnchanged: true,
    showMoreDetailedErrorMessages: false,
};
const DEFAULT_SETTINGS = {
    headingGaps: DEFAULT_HEADING_GAPS,
    otherGaps: DEFAULT_OTHER_GAPS,
    formatOptions: DEFAULT_FORMAT_OPTIONS,
    otherOptions: DEFAULT_OTHER_OPTIONS,
};

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
    imports.wbg.__wbg_error_98298ba5dc8b1b8a = function(arg0, arg1) {
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
    imports.wbg.__wbg_String_de2361487bf84fa6 = function(arg0, arg1) {
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
    imports.wbg.__wbg_getwithrefkey_da95c5f2892b1e93 = function(arg0, arg1) {
        const ret = getObject(arg0)[getObject(arg1)];
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_instanceof_ArrayBuffer_9221fa854ffb71b5 = function(arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof ArrayBuffer;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_buffer_b914fb8b50ebbc3e = function(arg0) {
        const ret = getObject(arg0).buffer;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_b1f2d6842d615181 = function(arg0) {
        const ret = new Uint8Array(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_7d988c98e6ced92d = function(arg0, arg1, arg2) {
        getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    };
    imports.wbg.__wbg_length_21c4b0ae73cba59d = function(arg0) {
        const ret = getObject(arg0).length;
        return ret;
    };
    imports.wbg.__wbg_instanceof_Uint8Array_c299a4ee232e76ba = function(arg0) {
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

function formatto_wasm(imports){return _loadWasmModule(0, null, 'AGFzbQEAAAABwAEaYAJ/fwF/YAJ/fwBgA39/fwF/YAN/f38AYAF/AGABfwF/YAR/f39/AGAFf39/f38AYAR/f39/AX9gAAF/YAV/f39+fwBgBn9/f39/fwBgBX9/f39/AX9gBn9/f39/fwF/YAd/f39/f39/AGAAAGAJf39/f39/fn5+AGAHf39/f39/fwF/YAN+f38Bf2AEf39/fgBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwAC7QUXA3diZxpfX3diaW5kZ2VuX29iamVjdF9kcm9wX3JlZgAEA3diZxdfX3diaW5kZ2VuX2lzX3VuZGVmaW5lZAAFA3diZw1fX3diaW5kZ2VuX2luAAADd2JnFl9fd2JpbmRnZW5fYm9vbGVhbl9nZXQABQN3YmcVX193YmluZGdlbl9zdHJpbmdfZ2V0AAEDd2JnFF9fd2JpbmRnZW5faXNfb2JqZWN0AAUDd2JnHF9fd2JnX2Vycm9yXzk4Mjk4YmE1ZGM4YjFiOGEAAQN3YmcbX193YmluZGdlbl9vYmplY3RfY2xvbmVfcmVmAAUDd2JnGV9fd2JpbmRnZW5fanN2YWxfbG9vc2VfZXEAAAN3YmcVX193YmluZGdlbl9udW1iZXJfZ2V0AAEDd2JnHV9fd2JnX1N0cmluZ19kZTIzNjE0ODdiZjg0ZmE2AAEDd2JnFF9fd2JpbmRnZW5fZXJyb3JfbmV3AAADd2JnFV9fd2JpbmRnZW5fc3RyaW5nX25ldwAAA3diZyRfX3diZ19nZXR3aXRocmVma2V5X2RhOTVjNWYyODkyYjFlOTMAAAN3YmctX193YmdfaW5zdGFuY2VvZl9BcnJheUJ1ZmZlcl85MjIxZmE4NTRmZmI3MWI1AAUDd2JnHV9fd2JnX2J1ZmZlcl9iOTE0ZmI4YjUwZWJiYzNlAAUDd2JnGl9fd2JnX25ld19iMWYyZDY4NDJkNjE1MTgxAAUDd2JnGl9fd2JnX3NldF83ZDk4OGM5OGU2Y2VkOTJkAAMDd2JnHV9fd2JnX2xlbmd0aF8yMWM0YjBhZTczY2JhNTlkAAUDd2JnLF9fd2JnX2luc3RhbmNlb2ZfVWludDhBcnJheV9jMjk5YTRlZTIzMmU3NmJhAAUDd2JnF19fd2JpbmRnZW5fZGVidWdf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ADcCACAGQQhqIAJBkAFqKQMANwIAIAJBQGsgCSkCADcDACACQcgAaiAIKQIANwMAIAJB0ABqIAJBuAFqKAIANgIAIAIgAikCoAE3AzggAiAHNgJUIAIgED4CWCACIBBCIIg+AlwgAkHwAGogBEEQaikCADcDACACQegAaiAEQQhqKQIANwMAIAIgBCkCADcDYCACQaABaiACQRRqIAJB1ABqIAJB4ABqEFcgAi0AoAFBBkYNASACQaABahBuDAELCyACQasBaiACQRxqKAIANgAAIAVBBToAACACIAIpAhQ3AKMBIAUgAikAoAE3AAEgBUEIaiACQacBaikAADcAAAwCCyAFIAIoAqQBNgIEIAVBBjoAACAERQ0AIBCnECMLIAJBFGoQdQsgAkHAAWokACABIAEtABhBAWo6ABgjAEEwayIEJAACfyABQRRqKAIAIgIgAUEQaigCACIFSQRAIAFBDGohByABKAIMIQgDQAJAAkACQAJAIAIgCGotAAAiBkEMTQRAIAZBCWtBAkkNBAwBCyAGQR9NBEAgBkENRw0BDAQLIAZBIEYNAyAGQf0ARg0BIAZBLEYNAgsgBEEWNgIkIARBCGogByAFIAJBAWoiAiACIAVLGxBzIARBJGogBCgCCCAEKAIMEI8BDAULIAEgAkEBajYCFEEADAQLIARBFTYCJCAEQRhqIAcgBSACQQFqIgIgAiAFSxsQcyAEQSRqIAQoAhggBCgCHBCPAQwDCyABIAJBAWoiAjYCFCACIAVHDQALIAUhAgsgBEEDNgIkIARBEGogAUEMaiAFIAJBAWoiAiACIAVLGxBzIARBJGogBCgCECAEKAIUEI8BCyECIARBMGokACADIAI2AmAgAy0ASEEGRwRAIAJFBEAgA0FAayADQdgAaikDADcDACADQThqIANB0ABqKQMANwMAIAMgAykDSDcDMAwKCyADQQY6ADAgAyACNgI0IANByABqEG4MCQsgAyADKAJMNgI0IANBBjoAMCACRQ0IIANB4ABqEHYMCAsgA0HIAGogAUEBEC8gAykDSEIDUgRAIANBMGogA0HIAGoQbQwICyAAIAMoAlA2AgQgAEEGOgAADAoLIANBgQI7ATAMBwsgAygCTCEHDAELIANBGDYCSCADQSBqIAYgBSACQQFqIgEgASAFSxsQcyADQcgAaiADKAIgIAMo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ACAAIANyNgIAIAIMAQsgAigCCAshACACIAE2AgggACABNgIMIAEgAjYCDCABIAA2AggPC0HckMEAIAE2AgBB1JDBAEHUkMEAKAIAIABqIgA2AgAgASAAQQFyNgIEIAAgAWogADYCAAuWBQELfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgtFBEAgAkEMaigCACIARQ0BIAIoAggiASAAQQN0aiEEIABBAWtB/////wFxQQFqIQggAigCACEAA0AgAEEEaigCACIGBEAgAygCICAAKAIAIAYgAygCJCgCDBECAA0ECyABKAIAIANBDGogAUEEaigCABEAAA0DIAVBAWohBSAAQQhqIQAgAUEIaiIBIARHDQALDAELIAJBFGooAgAiAEUNACAAQQV0IQwgAEEBa0H///8/cUEBaiEIIAIoAgghBiACKAIAIQADQCAAQQRqKAIAIgEEQCADKAIgIAAoAgAgASADKAIkKAIMEQIADQMLIAMgBSALaiIBQRBqKAIANgIcIAMgAUEcai0AADoALCADIAFBGGooAgA2AiggAUEMaigCACEHQQAhCkEAIQQCQAJAAkAgAUEIaigCAEEBaw4CAAIBCyAHQQN0IAZqIg0oAgRB7wBHDQEgDSgCACgCACEHC0EBIQQLIAMgBzYCECADIAQ2AgwgAUEEaigCACEEAkACQAJAIAEoAgBBAWsOAgACAQsgBEEDdCAGaiIHKAIEQe8ARw0BIAcoAgAoAgAhBAtBASEKCyADIAQ2AhggAyAKNgIUIAYgAUEUaigCAEEDdGoiASgCACADQQxqIAFBBGooAgARAAANAiAJQQFqIQkgAEEIaiEAIAwgBUEgaiIFRw0ACwsgCCACKAIETw0BIAMoAiAgAigCACAIQQN0aiIAKAIAIAAoAgQgAygCJCgCDBECAEUNAQtBAQwBC0EACyADQTBqJAALhwUBB38jAEFAaiICJAACQCABKAIAIgVBFGooAgAiAyAFQRBqKAIAIgRJBEAgBUEMaiEHIAUoAgwhCANAAkACQAJAAkACQAJAIAMgCGotAAAiBkEMTQRAIAZBCWtBAkkNBgwBCyAGQR9NBEAgBkENRw0BDAYLIAZBIEYNBSAGQSxGDQIgBkHdAEYNAQsgAS0ABA0CIAJBBzYCKCACQQhqIAcgBCADQQFqIgEgASAESxsQcyACQShqIAIoAgggAigCDBCPASEBIABBBzoAACAAIAE2AgQMBwsgAEEGOgAADAYLIAEtAAQNACAFIANBAWoiAzYCFCADIARJBEADQCADIAhqLQAAIgZBCWsiAUEXS0EBIAF0QZOAgARxRXINAyAFIANBAWoiAzYCFCADIARHDQALIAQhAwsgAkEFNgIoIAJBIGogByAEIANBAWoiASABIARLGxBzIAJBKGogAigCICACKAIkEI8BIQEgAEEHOgAAIAAgATYCBAwFCyABQQA6AAQLIAZB3QBGBEAgAkEVNgIoIAJBEGogByAEIANBAWoiASABIARLGxBzIAJBKGogAigCECACKAIUEI8BIQEgAEEHOgAAIAAgATYCBAwECyACQShqIAUQGCACLQAoQQZHBEAgACACKQMoNwMAIABBEGogAkE4aikDADcDACAAQQhqIAJBMGopAwA3AwAMBAsgACACKAIsNgIEIABBBzoAAAwDCyAFIANBAWoiAzYCFCADIARHDQALIAQhAwsgAkECNgIoIAJBGGogBUEMaiAEIANBAWoiASABIARLGxBzIAJBKGogAigCGCACKAIcEI8BIQEgAEEHOgAAIAAgATYCBAsgAkFAayQAC+kFAgF/AXwjAEEwayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCAALQAAQQFrDhEBAgMEBQYHCAkKCwwNDg8QEQALIAIgAC0AAToACCACQRxqQgE3AgAgAkECNgIUIAJBvMHAADYCECACQcUANgIsIAIgAkEoajYCGCACIAJBCGo2AiggASACQRBqEMYBDBELIAIgACkDCDcDCCACQRxqQgE3AgAgAkECNgIUIAJB2MHAADYCECACQcYANgIsIAIgAkEoajYCGCACIAJBCGo2AiggASACQRBqEMYBDBALIAIgACkDCDcDCCACQRxqQgE3AgAgAkECNgIUIAJB2MHAADYCECACQccANgIsIAIgAkEoajYCGCACIAJBCGo2AiggASACQRBqEMYBDA8LIAArAwghAyACQRxqQgE3AgAgAkECNgIUIAJB+MHAADYCECACQcgANgIMIAIgAzkDKCACIAJBCGo2AhggAiACQShq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BUHQAGoiBiACIANBm4PAAEENEBkgBUGUAWogBhAtIAUoApQBBEADQCAFKAKYASABayEGIAEgAmohCCAFKAKcASEBIAVBxABqIgkgCCAGENMBIAkgByAEENMBIAVBlAFqIAVB0ABqEC0gBSgClAENAAsLIAVBxABqIAEgAmogAyABaxDTASAFQdgAaiIBIAVBzABqKAIANgIAIAUgBSkCRDcDUCAFQSBqELoBIAVBKGoiAiABKAIANgIAIAUgBSkDUDcDICAFQTBqELoBIAEgAigCADYCACAFIAUpAyA3A1AgBUEIaiAFQdAAahCSASAFKAIMIQMgBSgCCAwCC0GYgMAAQTcgBUHEAGpB0IDAAEGsgcAAEHIACyAFQRRqIgEgA0EAQaiDwABBHRBUIAUgARCSASAFKAIEIQMgBSgCAAshASAAIAM2AgQgACABNgIAIAVBoAFqJAALlwYCBn8BfCMAQZABayIDJAACQCAAKAIAIgRBgQEQCARAQQchBkEAIQAMAQtBAUECIAQQAyIFQQFGG0EAIAUbIgVBAkcEQEEAIQAMAQsgA0EoaiAEEAkgAygCKCEGIANBGGoiByADKwMwOQMIIAcgBkEAR603AwAgAykDGKdBAUYEQCADKwMgIQlBAyEGQQAhAAwBCyADQRBqIAQQBAJ/AkAgAygCECIERQ0AIANBCGogBCADKAIUEJsBIANB2ABqIAMoAgggAygCDBDCASADKAJYQYCAgIB4Rg0AIANBQGsgA0HgAGooAgAiBTYCACADIAMpAlg3AzhBBSEGIAMoAjwhBEEBDAELIANB5ABqIQUjAEEQayIEJAACQAJAIAAoAgAQE0UEQCAAKAIAEA4NASAFQYCAgIB4NgIADAILIARBBGogABCIASAFQQhqIARBDGooAgA2AgAgBSAEKQIENwIADAELIAQgACgCABAQNgIAIARBBGogBBCIASAFQQhqIARBDGooAgA2AgAgBSAEKQIENwIAIAQoAgAiBUGEAUkNACAFEAALIARBEGokAAJ/IAMoAmQiB0GAgICAeEciCEUEQCADQThqIgZBBHIhBCADQUBrIQUgA0H8AGpCATcCACADQQE2AnQgA0HglsAANgJwIANBKTYCjAEgAyAANgKIASADIANBiAFqNgJ4IAYgA0HwAGoQPEERDAELIANBzABqIQQgA0HQAGoi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AhAgAyABNgIMIAMgACkCADcCACADQQhqIABBCGooAgA2AgAgAwtCAQF/IAIgACgCACAAKAIIIgNrSwRAIAAgAyACEF8gACgCCCEDCyAAKAIEIANqIAEgAhD7ARogACACIANqNgIIQQALTwECf0HhjMEALQAAGiABKAIEIQIgASgCACEDQQhBBBDNASIBRQRAQQRBCBDzAQALIAEgAjYCBCABIAM2AgAgAEHIy8AANgIEIAAgATYCAAtNAQF/QeGMwQAtAAAaQQxBBBDNASICRQRAQQRBDBDzAQALIAIgASkCADcCACACQQhqIAFBCGooAgA2AgAgAEHE0MAANgIEIAAgAjYCAAtCAQF/IAIgACgCACAAKAIIIgNrSwRAIAAgAyACEGAgACgCCCEDCyAAKAIEIANqIAEgAhD7ARogACACIANqNgIIQQALSAEBfyMAQSBrIgMkACADQQxqQgA3AgAgA0EBNgIEIANBiNLAADYCCCADIAE2AhwgAyAANgIYIAMgA0EYajYCACADIAIQnQEAC0EAIAAQvgEgAEEMahC+ASAAQRhqEL4BIABBJGoQvgEgAEEwahC+ASAAQTxqEL4BIABByABqEL4BIABB1ABqEL4BCzgAAkAgAWlBAUdBgICAgHggAWsgAElyDQAgAARAQeGMwQAtAAAaIAAgARDNASIBRQ0BCyABDwsACzgBAX8gASgCACABQQA2AgAEQCABKAIEIgFBhAFPBEAgARAACyAAQQA2AgAPC0GIjMAAQRUQ6wEAC2oBAn8CQAJAAkACQCAALQAADgUBAQECAwALIABBBGoQdQsPCyAAQQRqELoBDwsgAEEEaiIAKAIIIgIEQCAAKAIEIQEDQCABEG4gAUEYaiEBIAJBAWsiAg0ACwsgACgCAARAIAAoAgQQIwsLOQACQAJ/IAJBgIDEAEcEQEEBIAAgAiABKAIQEQAADQEaCyADDQFBAAsPCyAAIAMgBCABKAIMEQIAC9N3AxZ+I38BfCABKAIcQQFxIRggACsDACE7AkAgASgCCARAAn8gASEdIAFBDGooAgAhKEEAIQEjAEHwCGsiHiQAIDu9IQQCQCA7IDtiBEBBAiEADAELIARC/////////weDIgZCgICAgICAgAiEIARCAYZC/v///////w+DIARCNIinQf8PcSIaGyICQgGDIQVBAyEAAkAC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HikCkAg3A8AICyApIB4uAcgIIgBIBEAgHkEIaiAeKALACCAeKALECCAAICggHkGQCGoQOyAeKAIMIQAgHigCCAwDC0ECIQAgHkECOwGQCCAoRQRAQQEhACAeQQE2ApgIIB5B5+nAADYClAggHkGQCGoMAwsgHkGgCGogKDYCACAeQQA7AZwIIB5BAjYCmAggHkHd6cAANgKUCCAeQZAIagwCC0Ho6cAAQSVBkOrAABCUAQALQQEhACAeQQE2ApgIIB5B5+nAADYClAggHkGQCGoLIQEgHkHMCGogADYCACAeIAE2AsgIIB4gMjYCxAggHiAsNgLACCAdIB5BwAhqECggHkHwCGokAAwBCyABQShB+ILBABB6AAsPCyABIwBBgAFrIhkkACA7vSECAkAgOyA7YgRAQQIhAAwBCyACQv////////8HgyIGQoCAgICAgIAIhCACQgGGQv7///////8PgyACQjSIp0H/D3EiARsiBEIBgyEFQQMhAAJAAkACQEEBQQJBBCACQoCAgICAgID4/wCDIgdQIhobIAdCgICAgICAgPj/AFEbQQNBBCAaGyAGUBtBAmsOAwABAgMLQQQhAAwCCyABQbMIayElIAVQIQBCASEDDAELQoCAgICAgIAgIARCAYYgBEKAgICAgICACFEiABshBEICQgEgABshA0HLd0HMdyAAGyABaiElIAVQIQALIBkgJTsBeCAZIAM3A3AgGUIBNwNoIBkgBDcDYCAZIAA6AHoCfwJAAkBBAyAAQQJrQf8BcSIAIABBA08bIgEEQEHf6cAAQeDpwAAgAkIAUyIAG0Hf6cAAQYjSwAAgABsgGBshJUEBIQAgAkI/iKcgGHIhMgJAIAFBAmsOAgMAAgsgGUEgaiEbIBlBD2ohIiMAQTBrIhokAAJAAkACfwJAAkACQAJAAkACQAJAAkAgGUHgAGoiACkDACICUEUEQCAAKQMIIgRQDQEgACkDECIDUA0CIAIgA3wiAyACVA0DIAIgBFQNBCADQoCAgICAgICAIFoNBSAaIAAvARgiADsBCCAaIAIgBH0iBDcDACAAIABBIGsgACADQoCAgIAQVCIBGyIYQRBrIBggA0IghiADIAEbIgNCgICAgICAwABUIgEbIhhBCGsgGCADQhCGIAMgARsiA0KAgICAgICAgAFUIgEbIhhBBGsgGCADQgiG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9wELIAAgAELk3seFkNCF3n03AwggAELB9/nozJOy0UE3AwALIgAgAEKNhJno6JTvgaN/NwMIIABCpIX0mIL1mKS7fzcDAAsgACAAQuud3eDozredBzcDCCAAQv3G1+brxcS9MzcDAAsTACAAQcjLwAA2AgQgACABNgIACyAAIABCs+qJ7YftsMZgNwMIIABCkcCv8JuPyPFWNwMACxAAIAEgACgCACAAKAIEEBsLDQAgACABIAIQ0wFBAAsOACAAKAIAGgNADAALAAsNACAANQIAQQEgARBBCw0AIAApAwBBASABEEELuQICAn8BfgJ/IAAoAgApAwAhBCMAQYABayIDJAACQAJAAn8CQCABKAIcIgBBEHFFBEAgAEEgcQ0BIARBASABEEEMAgtBACEAA0AgACADakH/AGpBMEHXACAEp0EPcSICQQpJGyACajoAACAAQQFrIQAgBEIQVCAEQgSIIQRFDQALIABBgAFqIgJBgAFLDQIgAUEBQfzuwABBAiAAIANqQYABakEAIABrECEMAQtBACEAA0AgACADakH/AGpBMEE3IASnQQ9xIgJBCkkbIAJqOgAAIABBAWshACAEQhBUIARCBIghBEUNAAsgAEGAAWoiAkGAAUsNAiABQQFB/O7AAEECIAAgA2pBgAFqQQAgAGsQIQsgA0GAAWokAAwCCyACQYABQezuwAAQeAALIAJBgAFB7O7AABB4AAsLCwAgACMAaiQAIwALBwAgABC6AQsOACABQbyCwABBBRDAAQsOACABQaSLwABBBRDAAQsLACAAKAIAIAEQbAsOACABQaSOwABBEhDAAQsOACABQciPwABBEBDAAQsOACABQfCPwABBFBDAAQsOACABQcSQwABBExDAAQsOACABQbSRwABBFRDAAQsJACAAIAEQFQALDgAgAUH4msAAQQUQwAELkQEBAX8gACgCACECIwBBMGsiACQAAn8gAigCDEUEQCACIAEQRQwBCyAAQSxqQTo2AgAgAEEkakE6NgIAIABBDGpCAzcCACAAQQM2AgQgAEHEn8AANgIAIAAgAkEMajYCICAAQTs2AhwgACACNgIYIAAgAkEQajYCKCAAIABBGGo2AgggASAAEMYBCyAAQTBqJAALDQAgAEHUtMAAIAEQJAsNACAAQZjBwAAgARAkCw0AIABB8MPAACABECQLDQAg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QCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsJACAAQQA2AgALDgAgAUGyw8AAQQkQwAELDgAgAUG7w8AAQQgQwAELAwABCwMAAQsLpokBEABBgIDAAAvTFgIAAAAMAAAABAAAAAMAAAAEAAAABQAAAGEgRGlzcGxheSBpbXBsZW1lbnRhdGlvbiByZXR1cm5lZCBhbiBlcnJvciB1bmV4cGVjdGVkbHkABgAAAAAAAAABAAAABwAAAC9ydXN0Yy8wN2RjYTQ4OWFjMmQ5MzNjNzhkM2M1MTU4ZTNmNDNiZWVmZWIwMmNlL2xpYnJhcnkvYWxsb2Mvc3JjL3N0cmluZy5ycwBgABAASwAAADMKAAAOAAAAL3J1c3RjLzA3ZGNhNDg5YWMyZDkzM2M3OGQzYzUxNThlM2Y0M2JlZWZlYjAyY2UvbGlicmFyeS9jb3JlL3NyYy9zdHIvcGF0dGVybi5ycwC8ABAATwAAALcFAAAUAAAAvAAQAE8AAAC3BQAAIQAAALwAEABPAAAAqwUAACEAAABFcnJvcgAAALwAEABPAAAAOwQAACQAAAAjLS0tYGBgIyAKAABdARAAAQAAAEZhaWxlZCB0byBwYXJzZSB0aGUgZG9jdW1lbnQuIFtMaW5lOiB7TElORV9OVU1CRVJ9XXtMSU5FX05VTUJFUn1GYWlsZWQgdG8gcGFyc2UgdGhlIGRvY3VtZW50LgAAAAgAAAAAAAAAAQAAAAkAAAAIAAAAAAAAAAEAAAAKAAAACAAAAAAAAAABAAAACwAAAAgAAAAAAAAAAQAAAAwAAAAIAAAAAAAAAAEAAAANAAAACAAAAAAAAAABAAAADgAAAAgAAAAAAAAAAQAAAA8AAABiZWZvcmVUb3BMZXZlbEhlYWRpbmdzYmVmb3JlRmlyc3RTdWJIZWFkaW5nYmVmb3JlU3ViSGVhZGluZ3NhZnRlclByb3BlcnRpZXNiZWZvcmVDb250ZW50c2JlZm9yZUNvbnRlbnRzQWZ0ZXJDb2RlQmxvY2tzYmVmb3JlQ29kZUJsb2Nrc2JlZm9yZUNvZGVCbG9ja3NBZnRlckhlYWRpbmdzaW5zZXJ0TmV3bGluZW5vdGlmeVdoZW5VbmNoYW5nZWRzaG93TW9yZURldGFpbGVkRXJyb3JNZXNzYWdlc2hlYWRpbmdHYXBzb3RoZXJHYXBzZm9ybWF0T3B0aW9uc290aGVyT3B0aW9ucwAAABIAAAAEAAAABAAAABMAAAASAAAABAAAAAQAAAAUAAAAEwAAAEgDEAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAEAAAABAAAABsAAAAaAAAABAAAAAQAAAAcAAAAGwAAAIQDEAAdAAAAHgAAABcAAAAfAAAAGQAAAGRlc2NyaXB0aW9uKCkgaXMgZGVwcmVjYXRlZDsgdXNlIERpc3BsYXlFcnJvcgAAACAAAAAEAAAABAAAACEAAAAKAAAAwAMQAAAAAADAAxAAAAAAAMADEAAAAAAARmFpbGVkIHRvIHJlYWQgb3B0aW9ucy4gUGxlYXNlIG1ha2Ugc3VyZSB0aGVyZSBpcyBubyBvcHRpb24gd2l0aCBhbiBlbXB0eSB2YWx1ZS5GYWlsZWQgdG8gcmVhZCBvcHRpb24gcHJvcGVydGllcy4AAADAAxAAAAAAAEZhaWxlZCB0byByZWFkIG9wdGlvbnMuIFNvbWUgb2YgdGhlbSBhcmUgcG9zc2libHkgbm90IHBvc2l0aXZlIG51bWJlciB2YWx1ZXMuAAAAIgAAAAwAAAAEAAAAIwAAACQAAAAFAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQAlAAAAAAAAAAEAAAAmAAAAL3J1c3RjLzA3ZGNhNDg5YWMyZDkzM2M3OGQzYzUxNThlM2Y0M2JlZWZlYjAyY2UvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAEgFEABLAAAAMwoAAA4AAABFcnJvci9ydXN0Yy8wN2RjYTQ4OWFjMmQ5MzNjNzhkM2M1MTU4ZTNmNDNiZWVmZWIwMmNlL2xpYnJhcnkvY29yZS9zcmMvc3RyL3BhdHRlcm4ucnOpBRAATwAAALgBAAA3AAAAYHVud3JhcF90aHJvd2AgZmFpbGVkbWlzc2luZyBmaWVsZCBgYAAAAB0GEAAPAAAALAYQAAEAAABkdXBsaWNhdGUgZmllbGQgYAAAAEAGEAARAAAALAYQAAEAAABzcmMvdG9vbHMvcGFyc2luZy9oZWFkaW5ncy5ycwAAAGQGEAAdAAAAUwAAAAwAAABkBhAAHQAAAG0AAAAuAAAARmFpbGVkIHRvIHJlYWQgbG9jYWxlIGZpbGUucGFyc2luZ2Zvcm1hdHRpbmdiZWZvcmVUb3BMZXZlbEhlYWRpbmdzYmVmb3JlRmlyc3RTdWJIZWFkaW5nYmVmb3JlU3ViSGVhZGluZ3PQBhAAFgAAAOYGEAAVAAAA+wYQABEAAABzdHJ1Y3QgSGVhZGluZ0dhcHNhZnRlclByb3BlcnRpZXNiZWZvcmVDb250ZW50c2JlZm9yZUNvbnRlbnRzQWZ0ZXJDb2RlQmxvY2tzYmVmb3JlQ29kZUJsb2Nrc2JlZm9yZUNvZGVCbG9ja3NBZnRlckhlYWRpbmdzAAAANgcQAA8AAABFBxAADgAAAFMHEAAdAAAAcAcQABAAAACABxAAHQAAAHN0cnVjdCBPdGhlckdhcHNpbnNlcnROZXdsaW5lAAAA2AcQAA0AAABzdHJ1Y3QgRm9ybWF0T3B0aW9uc25vdGlmeVdoZW5VbmNoYW5nZWRzaG93TW9yZURldGFpbGVkRXJyb3JNZXNzYWdlcwQIEAATAAAAFwgQAB0AAABzdHJ1Y3QgT3RoZXJPcHRpb25zUGx1Z2luU2V0dGluZ3NoZWFkaW5nR2Fwc290aGVyR2Fwc2Zvcm1hdE9wdGlvbnNvdGhlck9wdGlvbnMAAGUIEAALAAAAcAgQAAkAAAB5CBAADQAAAIYIEAAMAAAAc3RydWN0IFBsdWdpblNldHRpbmdzAAAAL3J1c3RjLzA3ZGNhNDg5YWMyZDkzM2M3OGQzYzUxNThlM2Y0M2JlZWZlYjAyY2UvbGlicmFyeS9jb3JlL3NyYy9zdHIvcGF0dGVybi5ycwDMCBAATwAAALcFAAAUAAAAzAgQAE8AAAC3BQAAIQAAAMwIEABPAAAAqwUAACEAAADMCBAATwAAADsEAAAkAAAAIyAjAMwIEAAAAAAAXgkQAAEAAABhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKWF0dGVtcHQgdG8gam9pbiBpbnRvIGNvbGxlY3Rpb24gd2l0aCBsZW4gPiB1c2l6ZTo6TUFYL3J1c3RjLzA3ZGNhNDg5YWMyZDkzM2M3OGQzYzUxNThlM2Y0M2JlZWZlYjAyY2UvbGlicmFyeS9hbGxvYy9zcmMvc3RyLnJzyAkQAEgAAACZAAAACgAAAMgJEABIAAAAsAAAABYAAABgYGBzcmMvdG9vbHMvcGFyc2luZy9oZWFkaW5ncy5yczMKEAAdAAAAEwAAADsAAABjYW5ub3QgYWNjZXNzIGEgVGhyZWFkIExvY2FsIFN0b3JhZ2UgdmFsdWUgZHVyaW5nIG9yIGFmdGVyIGRlc3RydWN0aW9uAAAqAAAAAAAAAAEAAAArAAAAL3J1c3RjLzA3ZGNhNDg5YWMyZDkzM2M3OGQzYzUxNThlM2Y0M2JlZWZlYjAyY2UvbGlicmFyeS9zdGQvc3JjL3RocmVhZC9sb2NhbC5ycwC4ChAATwAAAPYAAAAaAAAAaW52YWxpZCB0eXBlOiAsIGV4cGVjdGVkIAAAABgLEAAOAAAAJgsQAAsAAAAAAAAA//////////9ICxAAQeCWwAALtQkYCxAAAAAAACwAAAAvaG9tZS9ydW5uZXIvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZS13YXNtLWJpbmRnZW4tMC42LjQvc3JjL2xpYi5ycwAAAGwLEABlAAAANQAAAA4AAABjbG9zdXJlIGludm9rZWQgcmVjdXJzaXZlbHkgb3IgYWZ0ZXIgYmVpbmcgZHJvcHBlZAAAVHJpZWQgdG8gc2hyaW5rIHRvIGEgbGFyZ2VyIGNhcGFjaXR5GAwQACQAAAAvcnVzdGMvMDdkY2E0ODlhYzJkOTMzYzc4ZDNjNTE1OGUzZjQzYmVlZmViMDJjZS9saWJyYXJ5L2FsbG9jL3NyYy9yYXdfdmVjLnJzRAwQAEwAAADPAQAACQAAAEpzVmFsdWUoKQAAAKAMEAAIAAAAqAwQAAEAAAA9AAAADAAAAAQAAAA+AAAAPwAAAAUAAABhIERpc3BsYXkgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IgdW5leHBlY3RlZGx5AEAAAAAAAAAAAQAAAEEAAAAvcnVzdGMvMDdkY2E0ODlhYzJkOTMzYzc4ZDNjNTE1OGUzZjQzYmVlZmViMDJjZS9saWJyYXJ5L2FsbG9jL3NyYy9zdHJpbmcucnMAHA0QAEsAAAAzCgAADgAAAEVycm9yRU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9G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/////////////wABAgMEBQYHCAn/////////CgsMDQ4P//////////////////////////////////8KCwwNDg////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9jYWxsZWQgYE9wdGlvbjo6dW53cmFwKClgIG9uIGEgYE5vbmVgIHZhbHVlL3J1c3RjLzA3ZGNhNDg5YWMyZDkzM2M3OGQzYzUxNThlM2Y0M2JlZWZlYjAyY2UvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAJMdEABgAAAAcAEAADYAAABhc3NlcnRpb24gZmFpbGVkOiBpZHggPCBDQVBBQ0lUWS9ydXN0Yy8wN2RjYTQ4OWFjMmQ5MzNjNzhkM2M1MTU4ZTNmNDNiZWVmZWIwMmNlL2xpYnJhcnkvYWxsb2Mvc3JjL2NvbGxlY3Rpb25zL2J0cmVlL25vZGUucnNhc3NlcnRpb24gZmFpbGVkOiBlZGdlLmhlaWdodCA9PSBzZWxmLmhlaWdodCAtIDEAJB4QAFsAAACcAgAACQAAACQeEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0LmxlbigpJB4QAFsAAAAcBwAABQAAACQeEABbAAAAnAQAACMAAAAkHhAAWwAAANwEAAAkAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5ub2RlLmhlaWdodCAtIDEAAAAkHhAAWwAAAN0DAAAJAAAAL3J1c3RjLzA3ZGNhNDg5YWMyZDkzM2M3OGQzYzUxNThlM2Y0M2JlZWZlYjAyY2UvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAcB8QAF8AAABZAgAAMAAAAGNhbGxlZCBgT3B0aW9uOjp1bndyYXAoKWAgb24gYSBgTm9uZWAgdmFsdWUvcnVzdGMvMDdkY2E0ODlhYzJkOTMzYzc4ZDNjNTE1OGUzZjQzYmVlZmViMDJjZS9saWJyYXJ5L2FsbG9jL3NyYy9jb2xsZWN0aW9ucy9idHJlZS9uYXZpZ2F0ZS5ycwAACyAQAF8AAADHAAAAJwBBmMHAAAuqEkwAAAAIAAAABAAAAE0AAABOAAAATwAAAGJvb2xlYW4gYGAAALAgEAAJAAAAuSAQAAEAAABpbnRlZ2VyIGAAAADMIBAACQAAALkgEAABAAAAZmxvYXRpbmcgcG9pbnQgYOggEAAQAAAAuSAQAAEAAABjaGFyYWN0ZXIgYAAIIRAACwAAALkgEAABAAAAc3RyaW5nIAAkIRAABwAAAGJ5dGUgYXJyYXl1bml0IHZhbHVlT3B0aW9uIHZhbHVlbmV3dHlwZSBzdHJ1Y3RzZXF1ZW5jZW1hcGVudW11bml0IHZhcmlhbnRuZXd0eXBlIHZhcmlhbnR0dXBsZSB2YXJpYW50c3RydWN0IHZhcmlhbnQAmCAQAAAAAAAuMGEgYm9vbGVhbmEgc3RyaW5nAGNhbGxlZCBgT3B0aW9uOjp1bndyYXAoKWAgb24gYSBgTm9uZWAgdmFsdWUAVAAAAAwAAAAEAAAAVQAAAFYAAABXAAAAQWNjZXNzRXJyb3IAxCEQAAAAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxl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YmVyIHRvbyBsYXJnZSB0byBmaXQgaW4gdGFyZ2V0IHR5cGVudW1iZXIgdG9vIHNtYWxsIHRvIGZpdCBpbiB0YXJnZXQgdHlwZW51bWJlciB3b3VsZCBiZSB6ZXJvIGZvciBub24temVybyB0eXBlKS4u1jUQAAIAAAAwMTIzNDU2Nzg5YWJjZGVmQm9ycm93TXV0RXJyb3JhbHJlYWR5IGJvcnJvd2VkOiD+NRAAEgAAAAgpEAAAAAAAdgAAAAAAAAABAAAAdwAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAAwNhAAIAAAAFA2EAASAAAAeAAAAAQAAAAEAAAAeQAAAD09IT1tYXRjaGVzYXNzZXJ0aW9uIGBsZWZ0ICByaWdodGAgZmFpbGVkCiAgbGVmdDogCiByaWdodDogAI82EAAQAAAAnzYQABcAAAC2NhAACQAAACByaWdodGAgZmFpbGVkOiAKICBsZWZ0OiAAAACPNhAAEAAAANg2EAAQAAAA6DYQAAkAAAC2NhAACQAAADogAAAIKRAAAAAAABQ3EAACAAAAeAAAAAwAAAAEAAAAegAAAHsAAAB8AAAAICAgICwgLAp9IH0oKAosbGlicmFyeS9jb3JlL3NyYy9mbXQvbnVtLnJzAABPNxAAGwAAAGkAAAAXAAAAMHgwMDAxMDIwMzA0MDUwNjA3MDgwOTEwMTExMjEzMTQxNTE2MTcxODE5MjAyMTIyMjMyNDI1MjYyNzI4MjkzMDMxMzIzMzM0MzUzNjM3MzgzOTQwNDE0MjQzNDQ0NTQ2NDc0ODQ5NTA1MTUyNTM1NDU1NTY1NzU4NTk2MDYxNjI2MzY0NjU2NjY3Njg2OTcwNzE3MjczNzQ3NTc2Nzc3ODc5ODA4MTgyODM4NDg1ODY4Nzg4ODk5MDkxOTI5Mzk0OTU5Njk3OTg5OTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAgpEAAbAAAA8gUAAB8AAABmYWxzZXRydWUAAAAIKRAAGwAAADUJAAAaAAAACCkQABsAAAAuCQAAIgAAAHJhbmdlIHN0YXJ0IGluZGV4ICBvdXQgb2YgcmFuZ2UgZm9yIHNs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', imports)}

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

var formattoLogo = "<svg class=\"formatto__custom-icons\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1.96533\" y=\"2\" width=\"6.65444\" height=\"2.5723\" rx=\"0.4\" />\n<rect x=\"1.96533\" y=\"6.31047\" width=\"12.0693\" height=\"3.44838\" rx=\"0.4\" />\n<rect x=\"1.96533\" y=\"11.483\" width=\"6.98996\" height=\"3.01966\" rx=\"0.4\" />\n<rect x=\"10.5863\" y=\"2\" width=\"3.44838\" height=\"6.03466\" rx=\"0.4\" />\n</svg>";

class CustomIcons {
    constructor() {
        this.icons = [{ iconId: "formatto-logo", svg: formattoLogo }];
        this.registerIcons = () => {
            this.icons.forEach(({ iconId, svg }) => {
                obsidian.addIcon(iconId, svg);
            });
        };
    }
}

class RibbonIcons {
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

class FormattoUtils {
    constructor(plugin) {
        this.plugin = plugin;
    }
    formatDocument(editor) {
        const cursorPosition = editor.getCursor();
        const originalDocument = editor.getValue();
        let formattedDocument;
        try {
            formattedDocument = format_document(originalDocument, this.plugin.settings, JSON.stringify(getWasmLocale()));
        }
        catch (error) {
            new obsidian.Notice(error);
        }
        if (!formattedDocument)
            return;
        if (formattedDocument !== originalDocument) {
            editor.setValue(formattedDocument);
            editor.setSelection(cursorPosition, cursorPosition);
        }
        if (this.plugin.settings.otherOptions.notifyWhenUnchanged &&
            formattedDocument === originalDocument) {
            new obsidian.Notice(getLocale(LOCALE_CATEGORY.NOTICE_MESSAGES, "Document is already formatted!"));
        }
        else {
            new obsidian.Notice(getLocale(LOCALE_CATEGORY.NOTICE_MESSAGES, "Document Formatted!"));
        }
    }
}

/** Entry Point. */
class FormattoPlugin extends obsidian.Plugin {
    constructor() {
        super(...arguments);
        this.utils = new FormattoUtils(this);
        this.iconCreator = new CustomIcons();
        this.ribbonIcon = new RibbonIcons(this);
        this.eventsMenuCreator = new FormattoEditorMenu(this);
        this.commandCreator = new FormattoCommands(this);
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
            this.iconCreator.registerIcons();
            this.ribbonIcon.registerRibbonIcons();
            this.eventsMenuCreator.registerEditorMenus();
            this.commandCreator.registerCommands();
            console.log("Plugin Loaded: Formatto\n(Error details are going to be displayed here.)");
        });
    }
    /** Runs when the plugin is disabled. */
    onunload() {
        console.log("Plugin Unloaded: Formatto");
    }
}

module.exports = FormattoPlugin;
