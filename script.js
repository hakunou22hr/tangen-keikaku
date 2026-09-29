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
  },
  "数学A": {
    "図形の性質": {
      goals: [
        "三角形・円・空間図形の基本的な性質を理解し、図形の関係を捉えるための知識と技能を身に付ける。",
        "図形の構成要素や既習の性質に着目し、新たな性質を見いだして論理的に考察・説明する力を養う。",
        "図形の性質を問題解決に活用し、考察の過程を振り返ってよりよい説明や解決を目指す態度を養う。"
      ],
      criteria: [
        "三角形、円、空間図形に関する基本的な性質や関係を理解し、必要な性質を用いて図形を考察することができる。",
        "図形の構成要素間の関係や既習事項を基に性質を見いだし、根拠を明確にして論理的に説明することができる。",
        "図形の性質を用いて考察するよさを認識し、粘り強く問題に取り組み、解決過程を振り返って改善しようとしている。"
      ]
    },
    "場合の数と確率": {
      goals: [
        "場合の数、順列・組合せ、確率、独立な試行、条件付き確率、期待値の基本的な考え方を理解し、適切に計算する技能を身に付ける。",
        "不確実な事象に着目し、場合の数や確率の性質を用いて事象の起こりやすさを比較・判断する力を養う。",
        "確率の考えを身近な問題に活用し、結果と方法を振り返りながらより妥当な判断を目指す態度を養う。"
      ],
      criteria: [
        "順列・組合せによる場合の数の求め方、確率の基本性質、独立な試行、条件付き確率、期待値について理解し、基本的な計算ができる。",
        "事象の構造を整理して数え上げ方を選び、確率の性質に基づいて事象の起こりやすさや判断の妥当性を考察できる。",
        "場合の数や確率を用いるよさを認識し、粘り強く考察し、解決方法や結論を振り返って改善しようとしている。"
      ]
    },
    "数学と人間の活動": {
      goals: [
        "数量や図形と人間の活動との関わりに触れ、整数の性質や数学的な考え方が文化・生活の中で用いられてきたことへの理解を深める。",
        "身近な事象や数学の歴史的・文化的な題材の中に数学的な構造を見いだし、数理的に考察する力を養う。",
        "数学と人間の活動のつながりに関心をもち、数学を生活や社会の問題解決に活用しようとする態度を養う。"
      ],
      criteria: [
        "数や図形に関する数学的な考え方と人間の活動との関わりを理解し、題材に応じて数学的に表現・処理することができる。",
        "日常・社会・文化的な事象に数学的な構造を見いだし、既習の考え方を用いて数理的に考察し説明することができる。",
        "数学が人間の活動と深く関わることを認識し、身近な事象を数学的に捉え、解決過程を振り返りながら探究しようとしている。"
      ]
    }
  },
  "数学Ⅱ": {
    "いろいろな式": {
      goals: [
        "多項式の除法、分数式、複素数、二次方程式、高次方程式、等式・不等式の証明などの基本的な概念と処理を理解する。",
        "数の範囲や式の性質に着目し、目的に応じて式を変形したり、等式・不等式が成り立つ理由を論理的に考察したりする力を養う。",
        "式の変形や証明のよさを認識し、粘り強く考え、解決過程を振り返ってよりよい方法を探る態度を養う。"
      ],
      criteria: [
        "多項式・分数式・複素数・方程式に関する基本事項を理解し、式の計算や方程式の処理を適切に行うことができる。",
        "式を多面的に捉えて目的に応じて変形し、等式や不等式が成り立つことを根拠を示して論理的に説明できる。",
        "式を用いて考察するよさを認識し、粘り強く問題に取り組み、解法や証明を振り返って改善しようとしている。"
      ]
    },
    "図形と方程式": {
      goals: [
        "座標や方程式を用いた直線・円などの表現、軌跡や領域の考え方を理解し、図形を式で扱う技能を身に付ける。",
        "座標平面上の図形の構成要素間の関係に着目し、方程式を用いて図形を表現し、その性質を考察する力を養う。",
        "図形を方程式で表すよさを認識し、図と式を往還しながら問題解決に活用しようとする態度を養う。"
      ],
      criteria: [
        "点と直線、円、軌跡、領域などを方程式や不等式で表す方法を理解し、基本的な問題を処理できる。",
        "図形と方程式を相互に関連付け、図形の性質や位置関係を式に基づいて論理的に考察し表現できる。",
        "座標や方程式を用いるよさを認識し、粘り強く考察し、図と式の両面から解決過程を振り返ろうとしている。"
      ]
    },
    "指数関数・対数関数": {
      goals: [
        "指数を実数まで拡張する考え、指数関数・対数関数の意味や性質、グラフの特徴を理解し、基本的な計算技能を身に付ける。",
        "関数の式とグラフの関係に着目し、指数的・対数的な変化を捉え、事象の特徴を数学的に考察する力を養う。",
        "指数関数・対数関数の有用性を認識し、自然現象や社会現象の考察に活用しようとする態度を養う。"
      ],
      criteria: [
        "指数法則、指数関数・対数関数の定義や性質、常用対数などを理解し、基本的な式や方程式・不等式を処理できる。",
        "式とグラフを関連付けて関数の増減や変化を考察し、指数的・対数的な現象を数学的に表現して説明できる。",
        "指数関数・対数関数のよさを認識し、問題解決に活用し、結果や方法を振り返って考察を深めようとしている。"
      ]
    },
    "三角関数": {
      goals: [
        "一般角、弧度法、三角関数の意味・性質、加法定理などを理解し、三角関数を扱う技能を身に付ける。",
        "周期性やグラフの特徴に着目し、三角関数の式とグラフを関連付け、数量の変化を考察する力を養う。",
        "周期的な現象を三角関数で捉えるよさを認識し、問題解決に活用しようとする態度を養う。"
      ],
      criteria: [
        "三角関数の定義、相互関係、グラフ、加法定理とその派生公式を理解し、基本的な計算や方程式を処理できる。",
        "三角関数の式とグラフ、周期性を関連付け、事象の変化や関数の特徴を多面的に考察して表現できる。",
        "三角関数を用いて考察するよさを認識し、粘り強く取り組み、解決過程を振り返って改善しようとしている。"
      ]
    },
    "微分・積分の考え": {
      goals: [
        "微分係数・導関数、接線、関数の増減や極値、不定積分・定積分と面積の基本的な考え方を理解する。",
        "関数の局所的な変化に着目して微分を用い、変化や最大・最小を考察するとともに、積分を面積などの問題に活用する力を養う。",
        "微分・積分を用いて変化や量を捉えるよさを認識し、問題解決の過程を振り返って考察を深める態度を養う。"
      ],
      criteria: [
        "微分係数・導関数の意味と計算、関数の増減・極値、不定積分・定積分の基本を理解し、基本的な処理ができる。",
        "導関数とグラフの関係を用いて関数の変化を考察し、微分・積分を具体的な問題の解決に活用して説明できる。",
        "微分・積分の考えを活用するよさを認識し、粘り強く考え、解決過程や結果を振り返って改善しようとしている。"
      ]
    }
  },
  "数学B": {
    "数列": {
      goals: [
        "等差数列・等比数列、いろいろな数列の和、漸化式、数学的帰納法などの基本的な概念と方法を理解する。",
        "離散的な変化の規則性や再帰的な関係に着目し、数列を用いて事象を数学的に表現・考察する力を養う。",
        "数列を用いて規則性を捉えるよさを認識し、粘り強く考え、解決過程を振り返る態度を養う。"
      ],
      criteria: [
        "等差・等比数列の一般項や和、各種の和、漸化式、数学的帰納法の基本を理解し、必要な計算や証明ができる。",
        "事象から離散的な変化の規則性を見いだし、数列や漸化式で表現して一般化・考察することができる。",
        "数列の考えを問題解決に活用し、粘り強く考え、解法や結論を振り返って評価・改善しようとしている。"
      ]
    },
    "統計的な推測": {
      goals: [
        "確率変数と確率分布、二項分布・正規分布、標本分布、推定、仮説検定の基本的な考え方を理解する。",
        "確率分布や標本分布の性質に着目し、標本から母集団の傾向を推測・判断し、結果を批判的に考察する力を養う。",
        "統計的な推測を実際のデータに活用し、結果の妥当性を検討しながら判断しようとする態度を養う。"
      ],
      criteria: [
        "確率変数、確率分布、期待値・分散、代表的な分布、標本調査、区間推定や仮説検定の基本を理解している。",
        "標本分布の性質を基に母集団の傾向を推測し、推定・検定の結果を根拠とともに解釈し批判的に考察できる。",
        "統計的な方法の有用性を認識し、実際のデータを用いて粘り強く考察し、判断の妥当性を振り返ろうとしている。"
      ]
    },
    "数学と社会生活": {
      goals: [
        "数学が社会生活のさまざまな場面で活用されていることを理解し、事象を数学化して処理するための技能を身に付ける。",
        "日常や社会の事象から課題を見いだし、数学的なモデルをつくって問題を解決し、結果を現実に照らして考察する力を養う。",
        "数学を社会の問題解決に活用するよさを認識し、方法や結果を評価・改善しながら探究する態度を養う。"
      ],
      criteria: [
        "社会生活に関わる事象を数学的に表現・処理するための基本的な考え方や方法を理解し、必要な情報を整理できる。",
        "現実の事象を数学化し、モデルを用いて解決した結果を現実の状況と照らして解釈・評価することができる。",
        "数学を社会生活に活用する意義を認識し、粘り強く問題に取り組み、解決過程を振り返って改善しようとしている。"
      ]
    }
  },
  "数学C": {
    "ベクトル": {
      goals: [
        "平面・空間のベクトル、成分、内積、位置ベクトルなどの基本的な概念や性質を理解し、図形をベクトルで扱う技能を身に付ける。",
        "大きさと向きをもつ量に着目し、ベクトルの演算法則や図形的な意味を考察し、図形の性質を多面的に捉える力を養う。",
        "ベクトルを図形や事象の考察に用いるよさを認識し、問題解決に活用しようとする態度を養う。"
      ],
      criteria: [
        "ベクトルの意味、演算、成分表示、位置ベクトル、内積、空間ベクトルの基本的な性質を理解し、適切に処理できる。",
        "ベクトルや内積を用いて平面・空間図形の性質や位置関係を見いだし、多面的に考察して表現できる。",
        "ベクトルを用いるよさを認識し、粘り強く考え、問題解決の過程を振り返って評価・改善しようとしている。"
      ]
    },
    "平面上の曲線と複素数平面": {
      goals: [
        "二次曲線、媒介変数表示、極座標、複素数平面の基本的な概念と性質を理解し、図形を多様な方法で表現する技能を身に付ける。",
        "図形や図形の構造に着目し、方程式・媒介変数・極座標・複素数を関連付けて統合的・発展的に考察する力を養う。",
        "図形を多様な表現で捉えるよさを認識し、問題解決に活用しながら考察を深める態度を養う。"
      ],
      criteria: [
        "放物線・楕円・双曲線、媒介変数表示、極座標、複素数平面の基本事項を理解し、基本的な表現や計算ができる。",
        "曲線や図形を複数の表現で捉え、複素数の演算と図形的意味を関連付けて性質や位置関係を考察できる。",
        "多様な表現を用いるよさを認識し、粘り強く考察し、解決過程を振り返って評価・改善しようとしている。"
      ]
    },
    "数学的な表現の工夫": {
      goals: [
        "図、表、式、グラフ、行列などの数学的な表現がもつ特徴を理解し、目的に応じて適切に用いる技能を身に付ける。",
        "事象の特徴や関係を簡潔・明瞭・的確に伝えるために、複数の数学的表現を比較し、適切な表現を選択・改善する力を養う。",
        "数学的な表現を工夫するよさを認識し、より分かりやすい表現を主体的に探究する態度を養う。"
      ],
      criteria: [
        "数学的な表現の種類や特徴を理解し、事象に応じて図・表・式・グラフなどを用いて表現・処理できる。",
        "目的や相手に応じて複数の表現を比較し、事象を簡潔・明瞭・的確に表す方法を考察して改善できる。",
        "表現を工夫する意義を認識し、よりよい表現を粘り強く検討し、表現方法を振り返って改善しようとしている。"
      ]
    }
  },
  "数学Ⅲ": {
    "極限": {
      goals: [
        "数列・無限級数・関数の極限の概念と基本的な性質を理解し、さまざまな極限を求める技能を身に付ける。",
        "数列や関数の値の変化に着目し、式の変形や既習の関数の性質を用いて極限を考察する力を養う。",
        "極限の考えを用いて変化を捉えるよさを認識し、粘り強く考え、解決過程を振り返る態度を養う。"
      ],
      criteria: [
        "数列の極限、無限級数、関数の極限と連続性の基本を理解し、基本的な極限を求めることができる。",
        "式を目的に応じて変形したり既習事項と関連付けたりして、数列や関数の極限を論理的に考察できる。",
        "極限の考えを問題解決に活用し、粘り強く考え、求め方や結論を振り返って評価・改善しようとしている。"
      ]
    },
    "微分法": {
      goals: [
        "さまざまな関数の導関数、高次導関数、接線、平均値の定理などの基本的な概念と法則を理解する。",
        "関数の局所的・大域的な性質に着目し、導関数を用いて増減、極値、凹凸、最大・最小などを考察する力を養う。",
        "微分法を変化の分析に活用するよさを認識し、問題解決の過程を振り返って考察を深める態度を養う。"
      ],
      criteria: [
        "合成関数・逆関数を含む各種関数の微分法や高次導関数を理解し、導関数を適切に求めることができる。",
        "導関数や高次導関数を用いて関数の増減・極値・凹凸・最大最小などを分析し、グラフや事象を考察できる。",
        "微分法を用いるよさを認識し、粘り強く考察し、解決過程や結果を振り返って評価・改善しようとしている。"
      ]
    },
    "積分法": {
      goals: [
        "さまざまな関数の不定積分・定積分、置換積分・部分積分などの方法を理解し、積分を求める技能を身に付ける。",
        "積分と微分の関係に着目し、面積・体積・曲線の長さなどの量を積分で表し、事象を考察する力を養う。",
        "積分法を量の総和や変化の累積を捉えるために活用し、問題解決の過程を振り返る態度を養う。"
      ],
      criteria: [
        "各種関数の積分法、置換積分法・部分積分法、定積分の性質を理解し、基本的な積分計算ができる。",
        "積分と微分の関係を活用し、面積・体積・曲線の長さなどを適切な定積分で表して考察・説明できる。",
        "積分法を問題解決に活用するよさを認識し、粘り強く考え、解法や結果を振り返って評価・改善しようとしている。"
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
function fillSelect(select, values, selected) {
  select.innerHTML = values.map(v => `<option value="${v}" ${v === selected ? "selected" : ""}>${v}</option>`).join("");
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
const ANNUAL_MONTHS = ["4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月"];
const ANNUAL_STORAGE_KEY = "math-annual-planner:v2";

function defaultAnnualPlanner() {
  return {
    subjectName: "数学Ⅰ",
    credits: 3,
    weeklyHours: 3,
    days: Object.fromEntries(ANNUAL_MONTHS.map(month => [month, 0]))
  };
}
function loadAnnualPlanner() {
  const defaults = defaultAnnualPlanner();
  try {
    const saved = JSON.parse(localStorage.getItem(ANNUAL_STORAGE_KEY) || "{}");
    return {
      ...defaults,
      ...saved,
      days: { ...defaults.days, ...(saved.days || {}) }
    };
  } catch {
    return defaults;
  }
}
function saveAnnualPlanner() {
  const data = {
    subjectName: $("#annualSubjectName").value.trim(),
    credits: Number($("#annualCredits").value) || 0,
    weeklyHours: Number($("#annualWeeklyHours").value) || 0,
    days: Object.fromEntries(ANNUAL_MONTHS.map(month => {
      const input = document.querySelector(`[data-annual-month="${month}"]`);
      return [month, Math.max(0, Number(input?.value) || 0)];
    }))
  };
  localStorage.setItem(ANNUAL_STORAGE_KEY, JSON.stringify(data));
  return data;
}
function allocateAnnualHours(monthEstimates, standardHours) {
  const totalEstimate = monthEstimates.reduce((sum, value) => sum + value, 0);
  if (standardHours <= 0 || totalEstimate <= 0) return monthEstimates.map(() => 0);
  const raw = monthEstimates.map(value => value / totalEstimate * standardHours);
  const allocation = raw.map(Math.floor);
  let remaining = Math.max(0, standardHours - allocation.reduce((sum, value) => sum + value, 0));
  raw
    .map((value, index) => ({ index, fraction: value - Math.floor(value) }))
    .sort((a, b) => b.fraction - a.fraction || a.index - b.index)
    .slice(0, remaining)
    .forEach(({ index }) => { allocation[index] += 1; });
  return allocation;
}
function calculateAnnualPlanner(data) {
  const standardHours = Math.max(0, Math.round(data.credits * 35));
  const days = ANNUAL_MONTHS.map(month => Math.max(0, Number(data.days[month]) || 0));
  const estimates = days.map(value => value * data.weeklyHours / 5);
  const allocations = allocateAnnualHours(estimates, standardHours);
  return {
    standardHours,
    days,
    estimates,
    allocations,
    totalDays: days.reduce((sum, value) => sum + value, 0),
    totalEstimate: estimates.reduce((sum, value) => sum + value, 0),
    totalAllocation: allocations.reduce((sum, value) => sum + value, 0)
  };
}
function renderAnnual() {
  const data = loadAnnualPlanner();
  $("#annualSubjectName").value = data.subjectName;
  $("#annualCredits").value = data.credits;
  $("#annualWeeklyHours").value = data.weeklyHours;
  $("#annualMonthInputs").innerHTML = ANNUAL_MONTHS.map(month => `
    <label class="annual-month-input">
      <span>${month}</span>
      <div><input type="number" min="0" max="31" step="1" inputmode="numeric" data-annual-month="${month}" value="${data.days[month] ?? 0}"><small>日</small></div>
    </label>`).join("");
  updateAnnualPlanner(false);
}
function updateAnnualPlanner(persist = true) {
  const data = persist ? saveAnnualPlanner() : loadAnnualPlanner();
  const result = calculateAnnualPlanner(data);
  $("#annualStandardHours").textContent = `${result.standardHours}時間`;
  $("#annualSummaryStandard").textContent = `${result.standardHours}時間`;
  $("#annualSummaryDays").textContent = `${result.totalDays}日`;
  $("#annualSummaryEstimate").textContent = `${result.totalEstimate.toFixed(1)}時間`;
  $("#annualSummaryEstimateRound").textContent = `（約${Math.round(result.totalEstimate)}時間）`;
  $("#annualSummaryAllocation").textContent = `${result.totalAllocation} / ${result.standardHours}時間`;
  $("#annualResultRows").innerHTML = ANNUAL_MONTHS.map((month, index) => `
    <tr>
      <th>${month}</th>
      <td>${result.days[index]}日</td>
      <td>${result.estimates[index].toFixed(1)}h</td>
      <td><strong>${result.allocations[index]}h</strong></td>
    </tr>`).join("");
  $("#annualResultDaysTotal").textContent = `${result.totalDays}日`;
  $("#annualResultEstimateTotal").textContent = `${result.totalEstimate.toFixed(1)}h`;
  $("#annualResultAllocationTotal").textContent = `${result.totalAllocation}h`;
}
async function copyText(text, successMessage) {
  try {
    await navigator.clipboard.writeText(text);
    alert(successMessage);
  } catch {
    const area = document.createElement("textarea");
    area.value = text; document.body.appendChild(area); area.select(); document.execCommand("copy"); area.remove();
    alert(successMessage);
  }
}
function annualCopyAllocation() {
  const data = saveAnnualPlanner();
  const result = calculateAnnualPlanner(data);
  const text = ANNUAL_MONTHS.map((month, index) => `${month}\t${result.allocations[index]}時間`).join("\n");
  copyText(text, "月別配当をコピーしました。");
}
function annualCopySummary() {
  const data = saveAnnualPlanner();
  const result = calculateAnnualPlanner(data);
  const lines = [
    `科目名：${data.subjectName || "未入力"}`,
    `単位数：${data.credits}`,
    `標準年間時数：${result.standardHours}時間`,
    `週授業時数：${data.weeklyHours}`,
    `授業可能日数：${result.totalDays}日`,
    `実働見込み：${result.totalEstimate.toFixed(1)}時間（約${Math.round(result.totalEstimate)}時間）`,
    `年計上の配当：${result.totalAllocation} / ${result.standardHours}時間`,
    "",
    "月\t授業可能日\t実働見込み\t年計上の配当",
    ...ANNUAL_MONTHS.map((month, index) => `${month}\t${result.days[index]}日\t${result.estimates[index].toFixed(1)}h\t${result.allocations[index]}h`)
  ];
  copyText(lines.join("\n"), "計算結果をまとめてコピーしました。");
}
function resetAnnualPlanner() {
  if (!confirm("年間時数配分の入力を初期値に戻しますか？")) return;
  localStorage.removeItem(ANNUAL_STORAGE_KEY);
  renderAnnual();
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
    const nodes = [...paragraph.matchAll(textPattern)].map(match => ({ open: match[1], text: match[2], close: match[3] }));
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
  fillSelect($("#subject"), SUBJECTS, "数学Ⅰ"); fillSelect($("#criteriaSubject"), SUBJECTS, "数学Ⅰ");
  fillSelect($("#unit"), Object.keys(UNITS["数学Ⅰ"]), "数と式"); fillSelect($("#criteriaUnit"), Object.keys(UNITS["数学Ⅰ"]), "数と式");
  switchUnit(); renderCriteria(); renderAnnual();
  document.querySelectorAll(".tab").forEach(tab => tab.addEventListener("click", () => { document.querySelectorAll(".tab").forEach(x => x.classList.toggle("active", x === tab)); document.querySelectorAll(".panel").forEach(x => { x.hidden = x.id !== tab.dataset.tab; x.classList.toggle("active", x.id === tab.dataset.tab); }); }));
  $("#subject").addEventListener("change", changeContext); $("#unit").addEventListener("change", () => { saveModel(); switchUnit(); });
  $("#criteriaSubject").addEventListener("change", () => { const subject = $("#criteriaSubject").value; const units = Object.keys(UNITS[subject] || {}); fillSelect($("#criteriaUnit"), units.length ? units : ["準備中"], units[0] || "準備中"); renderCriteria(); }); $("#criteriaUnit").addEventListener("change", renderCriteria);
  ["#affiliation", "#teacherName"].forEach(id => $(id).addEventListener("input", saveModel)); $("#hours").addEventListener("change", e => resizeLessons(e.target.value));
  [$("#lessonRows"), $("#lessonCards")].forEach(x => { x.addEventListener("click", updateLesson); x.addEventListener("input", updateLesson); });
  $("#annual").addEventListener("input", () => updateAnnualPlanner(true)); $("#annualCopyAlloc").addEventListener("click", annualCopyAllocation); $("#annualCopySummary").addEventListener("click", annualCopySummary); $("#annualReset").addEventListener("click", resetAnnualPlanner); $("#exportWord").addEventListener("click", exportWord);
}
document.addEventListener("DOMContentLoaded", init);
