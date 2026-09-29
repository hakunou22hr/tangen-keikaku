/* global ANNUAL_HOURS */
const SUBJECTS = ["数学Ⅰ", "数学A", "数学Ⅱ", "数学B", "数学C", "数学Ⅲ"];
const UNITS = {
  "数学Ⅰ": {
    "数と式": {
      goals: [
        "数を実数まで拡張する意義や集合と命題に関する基本的な概念を理解し、式を多面的に見たり処理したりする技能を身に付ける。",
        "数の範囲や式の性質に着目し、目的に応じて式を変形したり、集合や命題を論理的に考察し表現したりする力を養う。",
        "数と式のよさを認識し、問題解決に活用しようと粘り強く考え、その過程を振り返って考察を深める態度を養う。"
      ],
      criteria: [
        "実数、集合と命題の基本的な概念や原理・法則を理解し、式の展開や因数分解、一次不等式などを処理する技能を身に付けている。",
        "問題を解決する際に数の範囲に着目して適切に捉え直し、式の特徴を目的に応じて変形することや、命題を論理的に考察して表現することができる。",
        "数と式について数学のよさを認識し、粘り強く考え、数学的論拠に基づいて判断しようとするとともに、解決の過程を振り返って考察を深めようとしている。"
      ]
    },
    "図形と計量": {
      goals: [
        "三角比の意味や基本的な性質、図形の計量の基本的な考え方を理解し、必要な数量を求める技能を身に付ける。",
        "図形の構成要素間の関係に着目し、三角比を用いて図形の性質や計量について論理的に考察し表現する力を養う。",
        "図形と計量のよさを認識し、日常や社会の問題に活用しようと粘り強く考え、その過程を振り返る態度を養う。"
      ],
      criteria: [
        "鋭角・鈍角の三角比、相互関係、正弦定理や余弦定理について理解し、三角比を用いて図形の辺の長さや角の大きさなどを求めることができる。",
        "図形の構成要素間の関係を三角比を用いて捉え、図形の性質や計量について論理的に考察し、日常の事象を数学化して表現することができる。",
        "図形と計量について数学のよさを認識し、粘り強く考え、数学的論拠に基づいて判断しようとするとともに、解決過程を振り返り考察を深めようとしている。"
      ]
    },
    "二次関数": {
      goals: [
        "二次関数の値の変化やグラフの特徴について理解し、二次関数を用いて数量の関係を表現する技能を身に付ける。",
        "関数関係に着目し、二次関数の式とグラフを相互に関連付けて考察し、最大・最小や方程式・不等式の解を問題解決に活用する力を養う。",
        "二次関数のよさを認識し、事象の考察に活用しようと粘り強く考え、解決過程を振り返る態度を養う。"
      ],
      criteria: [
        "二次関数のグラフの特徴や値の変化、最大・最小、二次方程式及び二次不等式とグラフとの関係を理解し、適切に処理することができる。",
        "二次関数の式とグラフとの関係について多面的に考察し、二つの数量の関係を二次関数で表して問題を解決し、その過程を表現することができる。",
        "二次関数について数学のよさを認識し、粘り強く考え、数学的論拠に基づき判断しようとするとともに、解決過程を振り返って考察を深めようとしている。"
      ]
    },
    "データの分析": {
      goals: [
        "分散、標準偏差、散布図、相関係数などの意味や用い方と、仮説検定の考え方を理解し、データを整理・分析する技能を身に付ける。",
        "データの散らばりや変量間の関係に着目して適切な手法を選び、分析結果を批判的に考察して判断し表現する力を養う。",
        "データの分析のよさを認識し、身近な事象の問題解決に活用しようと粘り強く考え、分析過程を振り返る態度を養う。"
      ],
      criteria: [
        "分散、標準偏差、散布図及び相関係数の意味や用い方、外れ値及び仮説検定の考え方を理解し、データを適切に整理・分析できる。",
        "目的に応じて複数の種類のデータを収集し、適切な統計量やグラフ、手法を選択して分析を行い、データの傾向を把握して事象の特徴を表現できる。",
        "データの分析について数学のよさを認識し、粘り強く考え、分析結果を批判的に検討しようとするとともに、問題解決の過程を振り返ろうとしている。"
      ]
    }
  }
};

const $ = (selector) => document.querySelector(selector);
const labels = ["（1）知識及び技能", "（2）思考力・判断力・表現力等", "（3）学びに向かう力、人間性等"];
const criteriaLabels = ["知識・技能", "思考・判断・表現", "主体的に学習に取り組む態度"];
let model = null;
let saveTimer;

function storageKey(subject = $("#subject").value, unit = $("#unit").value) {
  return `math-unit-plan:v1:${subject}:${unit}`;
}
function blankModel(subject, unit) {
  const defaultHours = (ANNUAL_HOURS[subject] || []).find(x => x.unit === unit)?.hours || 1;
  return { affiliation: "", teacherName: "", subject, unit, hours: defaultHours, lessons: Array.from({ length: defaultHours }, (_, i) => blankLesson(i)) };
}
function blankLesson(i) { return { hour: i + 1, activity: "", knowledge: "", thinking: "", attitude: "", method: "" }; }
function loadModel(subject, unit) {
  try { return { ...blankModel(subject, unit), ...JSON.parse(localStorage.getItem(storageKey(subject, unit))) }; }
  catch { return blankModel(subject, unit); }
}
function saveModel() {
  syncBasics();
  localStorage.setItem(storageKey(model.subject, model.unit), JSON.stringify(model));
  $("#saveState").textContent = "保存しました";
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => { $("#saveState").textContent = "この端末に自動保存されます"; }, 1800);
}
function syncBasics() {
  model.affiliation = $("#affiliation").value;
  model.teacherName = $("#teacherName").value;
  model.hours = Number($("#hours").value);
}
function fillSelect(select, values, selected, disabledAfterFirst = false) {
  select.innerHTML = values.map((v, i) => `<option ${v === selected ? "selected" : ""} ${disabledAfterFirst && i > 0 ? "disabled" : ""}>${v}</option>`).join("");
}
function renderAutoContent(target, subject, unit) {
  const data = UNITS[subject]?.[unit];
  if (!data) { target.innerHTML = '<div class="empty">この科目のデータは今後追加予定です。</div>'; return; }
  target.innerHTML = `<div class="auto-grid"><section><div class="mini-title"><span>01</span><h3>単元の目標</h3></div>${data.goals.map((x, i) => `<article class="goal"><b>${labels[i]}</b><p>${x}</p></article>`).join("")}</section><section><div class="mini-title"><span>02</span><h3>単元の評価規準</h3></div>${data.criteria.map((x, i) => `<article class="criterion c${i}"><b>${criteriaLabels[i]}</b><p>${x}</p></article>`).join("")}</section></div>`;
}
function renderCriteria() { renderAutoContent($("#criteriaContent"), $("#criteriaSubject").value, $("#criteriaUnit").value); }
function changeContext() {
  if (model) saveModel();
  const subject = $("#subject").value;
  const units = Object.keys(UNITS[subject] || {});
  fillSelect($("#unit"), units.length ? units : ["準備中"], units[0]);
  switchUnit();
}
function switchUnit() {
  model = loadModel($("#subject").value, $("#unit").value);
  $("#affiliation").value = model.affiliation;
  $("#teacherName").value = model.teacherName;
  $("#hours").value = model.hours;
  renderAutoContent($("#autoContent"), model.subject, model.unit);
  resizeLessons(model.hours, false);
}
function markButton(value, index, field, label) {
  return `<button type="button" class="mark ${value === "◎" ? "double" : ""}" data-index="${index}" data-field="${field}" aria-label="${label}の評価。現在${value || "空欄"}">${value}</button>`;
}
function lessonRow(lesson, i) {
  return `<tr><th>${i + 1}</th><td><textarea data-index="${i}" data-field="activity" aria-label="${i + 1}時間目の学習活動">${lesson.activity}</textarea></td><td>${markButton(lesson.knowledge, i, "knowledge", "知識・技能")}</td><td>${markButton(lesson.thinking, i, "thinking", "思考・判断・表現")}</td><td>${markButton(lesson.attitude, i, "attitude", "主体的態度")}</td><td><textarea data-index="${i}" data-field="method" aria-label="${i + 1}時間目の評価方法">${lesson.method}</textarea></td></tr>`;
}
function lessonCard(lesson, i) {
  return `<article class="lesson-card"><h3><span>${String(i + 1).padStart(2,"0")}</span>${i + 1}時間目</h3><label>学習活動・学習内容<textarea data-index="${i}" data-field="activity">${lesson.activity}</textarea></label><fieldset><legend>評価場面</legend><div class="mobile-marks"><label>知識・技能${markButton(lesson.knowledge, i, "knowledge", "知識・技能")}</label><label>思考・判断・表現${markButton(lesson.thinking, i, "thinking", "思考・判断・表現")}</label><label>主体的態度${markButton(lesson.attitude, i, "attitude", "主体的態度")}</label></div></fieldset><label>評価の観点及び方法<textarea data-index="${i}" data-field="method">${lesson.method}</textarea></label></article>`;
}
function resizeLessons(count, persist = true) {
  count = Math.max(1, Math.min(50, Number(count) || 1));
  while (model.lessons.length < count) model.lessons.push(blankLesson(model.lessons.length));
  model.lessons = model.lessons.slice(0, count).map((x, i) => ({ ...x, hour: i + 1 }));
  model.hours = count; $("#hours").value = count;
  $("#lessonRows").innerHTML = model.lessons.map(lessonRow).join("");
  $("#lessonCards").innerHTML = model.lessons.map(lessonCard).join("");
  if (persist) saveModel();
}
function updateLesson(event) {
  const el = event.target.closest("[data-index][data-field]"); if (!el) return;
  const { index, field } = el.dataset;
  if (el.classList.contains("mark")) {
    const states = ["", "○", "◎"]; const value = states[(states.indexOf(model.lessons[index][field]) + 1) % 3];
    model.lessons[index][field] = value;
    document.querySelectorAll(`[data-index="${index}"][data-field="${field}"]`).forEach(x => { x.textContent = value; x.classList.toggle("double", value === "◎"); x.setAttribute("aria-label", `${field}の評価。現在${value || "空欄"}`); });
  } else {
    model.lessons[index][field] = el.value;
    document.querySelectorAll(`[data-index="${index}"][data-field="${field}"]`).forEach(x => { if (x !== el) x.value = el.value; });
  }
  saveModel();
}
function renderAnnual() {
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem("math-annual-hours:v1") || "{}"); } catch { saved = {}; }
  $("#annualHours").innerHTML = ANNUAL_HOURS["数学Ⅰ"].map((x, i) => `<label><span><b>${String(i + 1).padStart(2,"0")}</b>${x.unit}</span><span class="number-field"><input type="number" min="0" data-unit="${x.unit}" value="${saved[x.unit] ?? x.hours}"><small>時間</small></span></label>`).join("");
  updateAnnualTotal();
}
function updateAnnualTotal() {
  const data = {}; let total = 0;
  document.querySelectorAll("#annualHours input").forEach(x => { data[x.dataset.unit] = Number(x.value); total += Number(x.value); });
  $("#annualTotal").textContent = total; localStorage.setItem("math-annual-hours:v1", JSON.stringify(data));
}
async function exportWord() {
  const button = $("#exportWord"); button.disabled = true; button.querySelector("span").textContent = "作成中…";
  try {
    const response = await fetch("public/templates/unit-plan-template.docx"); if (!response.ok) throw new Error("Wordテンプレートを読み込めませんでした。");
    const data = UNITS[model.subject][model.unit];
    const files = await readZip(await response.arrayBuffer());
    let xml = normalizeTemplateTags(new TextDecoder().decode(files["word/document.xml"]));
    const values = { affiliation: model.affiliation, teacherName: model.teacherName, unit: `${model.subject}　${model.unit}`, goal1: data.goals[0], goal2: data.goals[1], goal3: data.goals[2], criteriaKnowledge: data.criteria[0], criteriaThinking: data.criteria[1], criteriaAttitude: data.criteria[2] };
    const tableRows = xml.match(/<w:tr(?:\s[^>]*)?>[\s\S]*?<\/w:tr>/g) || [];
    const loopRow = tableRows.find(row => row.includes("{#lessons}") && row.includes("{/lessons}"));
    if (!loopRow) throw new Error("テンプレートの授業行タグが見つかりません。");
    const lessonRow = loopRow.replace("{#lessons}", "").replace("{/lessons}", "");
    const rows = model.lessons.map(lesson => replaceTags(lessonRow, { ...lesson, hour: `${lesson.hour}時間目` })).join("");
    xml = replaceTags(xml.replace(loopRow, rows), values);
    files["word/document.xml"] = new TextEncoder().encode(xml);
    downloadBlob(buildZip(files), `${model.subject}_${model.unit}_指導と評価の計画.docx`);
  } catch (error) { alert(error.message || "Word出力に失敗しました。"); }
  finally { button.disabled = false; button.querySelector("span").textContent = "Word形式で出力"; }
}
const TEMPLATE_TAGS = ["#lessons", "/lessons", "hour", "activity", "knowledge", "thinking", "attitude", "method", "affiliation", "teacherName", "unit", "goal1", "goal2", "goal3", "criteriaKnowledge", "criteriaThinking", "criteriaAttitude"].map(tag => `{${tag}}`);
function normalizeTemplateTags(xml) {
  return xml.replace(/<w:p(?:\s[^>]*)?>[\s\S]*?<\/w:p>/g, paragraph => {
    const textPattern = /(<w:t(?:\s[^>]*)?>)([\s\S]*?)(<\/w:t>)/g;
    const nodes = [...paragraph.matchAll(textPattern)].map(match => ({ full: match[0], open: match[1], text: match[2], close: match[3] }));
    if (nodes.length < 2) return paragraph;
    for (const tag of TEMPLATE_TAGS) {
      let joined = nodes.map(node => node.text).join("");
      let start = joined.indexOf(tag);
      while (start !== -1) {
        const end = start + tag.length;
        let cursor = 0; let startNode = -1; let endNode = -1; let startOffset = 0; let endOffset = 0;
        nodes.forEach((node, index) => {
          const next = cursor + node.text.length;
          if (startNode === -1 && start >= cursor && start < next) { startNode = index; startOffset = start - cursor; }
          if (endNode === -1 && end > cursor && end <= next) { endNode = index; endOffset = end - cursor; }
          cursor = next;
        });
        if (startNode === -1 || endNode === -1 || startNode === endNode) break;
        const suffix = nodes[endNode].text.slice(endOffset);
        nodes[startNode].text = nodes[startNode].text.slice(0, startOffset) + tag;
        for (let index = startNode + 1; index < endNode; index++) nodes[index].text = "";
        nodes[endNode].text = suffix;
        joined = nodes.map(node => node.text).join("");
        start = joined.indexOf(tag, start + tag.length);
      }
    }
    let index = 0;
    return paragraph.replace(textPattern, () => {
      const node = nodes[index++];
      return node.open + node.text + node.close;
    });
  });
}
function replaceTags(xml, values) {
  return Object.entries(values).reduce((text, [key, value]) => text.replaceAll(`{${key}}`, escapeXml(String(value ?? ""))), xml);
}
function escapeXml(value) { return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;"); }
async function readZip(buffer) {
  const view = new DataView(buffer); const bytes = new Uint8Array(buffer); const files = {}; let offset = 0;
  while (offset + 30 <= bytes.length && view.getUint32(offset, true) === 0x04034b50) {
    const method = view.getUint16(offset + 8, true); const compressedSize = view.getUint32(offset + 18, true); const nameLength = view.getUint16(offset + 26, true); const extraLength = view.getUint16(offset + 28, true);
    const name = new TextDecoder().decode(bytes.slice(offset + 30, offset + 30 + nameLength)); const start = offset + 30 + nameLength + extraLength; const compressed = bytes.slice(start, start + compressedSize);
    if (method === 0) files[name] = compressed;
    else if (method === 8) files[name] = new Uint8Array(await new Response(new Blob([compressed]).stream().pipeThrough(new DecompressionStream("deflate-raw"))).arrayBuffer());
    else throw new Error(`未対応の圧縮形式です (${method})`);
    offset = start + compressedSize;
  }
  return files;
}
function crc32(bytes) {
  let crc = -1;
  for (const byte of bytes) { crc ^= byte; for (let i = 0; i < 8; i++) crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1)); }
  return (crc ^ -1) >>> 0;
}
function buildZip(files) {
  const chunks = []; const central = []; let offset = 0;
  Object.entries(files).forEach(([name, data]) => {
    const nameBytes = new TextEncoder().encode(name); const crc = crc32(data);
    const local = new Uint8Array(30 + nameBytes.length); const lv = new DataView(local.buffer);
    lv.setUint32(0, 0x04034b50, true); lv.setUint16(4, 20, true); lv.setUint32(14, crc, true); lv.setUint32(18, data.length, true); lv.setUint32(22, data.length, true); lv.setUint16(26, nameBytes.length, true); local.set(nameBytes, 30);
    chunks.push(local, data);
    const directory = new Uint8Array(46 + nameBytes.length); const dv = new DataView(directory.buffer);
    dv.setUint32(0, 0x02014b50, true); dv.setUint16(4, 20, true); dv.setUint16(6, 20, true); dv.setUint32(16, crc, true); dv.setUint32(20, data.length, true); dv.setUint32(24, data.length, true); dv.setUint16(28, nameBytes.length, true); dv.setUint32(42, offset, true); directory.set(nameBytes, 46); central.push(directory);
    offset += local.length + data.length;
  });
  const centralSize = central.reduce((n, x) => n + x.length, 0); const count = central.length;
  const end = new Uint8Array(22); const ev = new DataView(end.buffer); ev.setUint32(0, 0x06054b50, true); ev.setUint16(8, count, true); ev.setUint16(10, count, true); ev.setUint32(12, centralSize, true); ev.setUint32(16, offset, true); chunks.push(...central, end);
  return new Blob(chunks, { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
}
function downloadBlob(blob, name) {
  const link = document.createElement("a"); const url = URL.createObjectURL(blob); link.href = url; link.download = name; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function init() {
  fillSelect($("#subject"), SUBJECTS, "数学Ⅰ", true); fillSelect($("#criteriaSubject"), SUBJECTS, "数学Ⅰ", true);
  fillSelect($("#unit"), Object.keys(UNITS["数学Ⅰ"]), "数と式"); fillSelect($("#criteriaUnit"), Object.keys(UNITS["数学Ⅰ"]), "数と式");
  switchUnit(); renderCriteria(); renderAnnual();
  document.querySelectorAll(".tab").forEach(tab => tab.addEventListener("click", () => { document.querySelectorAll(".tab").forEach(x => x.classList.toggle("active", x === tab)); document.querySelectorAll(".panel").forEach(x => { x.hidden = x.id !== tab.dataset.tab; x.classList.toggle("active", x.id === tab.dataset.tab); }); }));
  $("#subject").addEventListener("change", changeContext); $("#unit").addEventListener("change", () => { saveModel(); switchUnit(); });
  $("#criteriaSubject").addEventListener("change", renderCriteria); $("#criteriaUnit").addEventListener("change", renderCriteria);
  ["#affiliation", "#teacherName"].forEach(id => $(id).addEventListener("input", saveModel)); $("#hours").addEventListener("change", e => resizeLessons(e.target.value));
  [$("#lessonRows"), $("#lessonCards")].forEach(x => { x.addEventListener("click", updateLesson); x.addEventListener("input", updateLesson); });
  $("#annualHours").addEventListener("input", updateAnnualTotal); $("#exportWord").addEventListener("click", exportWord);
}
document.addEventListener("DOMContentLoaded", init);
