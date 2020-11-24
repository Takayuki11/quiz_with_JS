const quiz = [
    {
        question: "アジアの国はどれ？",
        options: [
            "日本",
            "アメリカ",
            "イギリス",
            "オーストラリア"
        ],
        answer: "日本"
    },{
        question: "ヨーロッパの国はどれ",
        options: [
            "インド",
            "ブラジル",
            "スペイン",
            "ロシア"
        ],
        answer: "スペイン"
    },{
        question: "英語が話されていない国はどれ",
        options: [
            "カナダ",
            "アメリカ",
            "ニュージーランド",
            "ドイツ"
        ],
        answer: "ドイツ"
    }
];
let quizIndex = 0;
const quizLength = quiz.length;
let count = 0;


let $button = document.getElementsByTagName("button");

// 問題文と回答の定義
const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;

    let buttonIndex = 0;
    const buttonLength = $button.length
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].options[buttonIndex];
        buttonIndex++;
    }
};

setupQuiz();

// 正誤判定
const clickhandler = (e) => {
    if(quiz[quizIndex].answer === e.target.textContent){
        window.alert("正解");
        count++;
    } else{
        window.alert("不正解");
    }

    quizIndex++;
   
    if(quizIndex < quizLength){
        setupQuiz();
    } else{
        window.alert(count + "/" + quizLength + "正解しました。");
        quizIndex = 0;
        count = 0;
        setupQuiz();
    }
};

// クリック時の判定
let clickhandlerIndex = 0;
const buttonLength = $button.length
while(clickhandlerIndex < buttonLength){
    $button[clickhandlerIndex].addEventListener("click", (e) => {
        clickhandler(e);
    });
    clickhandlerIndex++;
}