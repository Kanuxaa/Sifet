const questionNum = document.getElementById("order")
const questionNode = document.getElementById("question")
const ans1 = document.getElementById("ans1")
const answ1 = document.getElementById("answ1")
const answer1 = document.getElementById("answer1")
const ans2 = document.getElementById("ans2")
const answ2 = document.getElementById("answ2")
const answer2 = document.getElementById("answer2")
const ans3 = document.getElementById("ans3")
const answ3 = document.getElementById("answ3")
const answer3 = document.getElementById("answer3")
const ans4 = document.getElementById("ans4")
const answ4 = document.getElementById("answ4")
const answer4 = document.getElementById("answer4")
const allAns = document.getElementById("allAns")
const yes = document.getElementById("yes")
const no = document.getElementById("no")
const btnNode = document.getElementById("btn")
const result = document.getElementById("res")
const start = document.getElementById("start")
const end = document.getElementById("end")
const summary = document.getElementById("summary")
const radioButtons = document.querySelectorAll('input[name="ans"]')
const cheet = document.getElementById('cheetlist')
const activate = document.getElementById('activate')

const answe1 = document.getElementById("answe1")
const answe2 = document.getElementById("answe2")
const answe3 = document.getElementById("answe3")
const answe4 = document.getElementById("answe4")
const answi1 = document.getElementById("answi1")
const answi2 = document.getElementById("answi2")
const answi3 = document.getElementById("answi3")
const answi4 = document.getElementById("answi4")



const questions = [
    {
        question: "Yalnız sifətin suallarından ibarət cərgəni göstərin:",
        answers: ["Necə, nə cür, hansı?", "Kim, nə, hara?", "Nə, niyə, hansı?", "Kim, necə, nə edir?"],
        correctAns: "1"
    },

    {
        question: "Sifət qrammatik mənasına görə bildirir:",
        answers: ["Hərəkət", "Ad", "Miqdar", "Əlamət"],
        correctAns: "4"
    },

    {
        question: "Rəng bildirən sifətlər cərgəsini göstərin:",
        answers: ["Qoçaq, çərkəzi, dalğavarı", "Gümüşü, bənövşəyi, mavi", "Hərbi, tibbi, sarışın", "Uzun, nurani, armudu"],
        correctAns: "2"
    },

    {
        question: "Biri dad bildirən sifət deyil:",
        answers: ["Şirin", "Gözəl", "Turş", "Acı"],
        correctAns: "2"
    },

    {
        question: "Sözlərdən biri sifət deyil:",
        answers: ["Daş", "Parlaq", "Gözəl", "Qoca"],
        correctAns: "1"
    },

    {
        question: "Qoxusuz lalədir mənasız şeir, Qanadsız bir qusdur xülyasız şeir. Gözəlsiz, çalğısız məclisə bənzər, Məzmunsuz, ahəngsiz, ədasız şeir. \nŞeir parçasında işlənmiş sifətlərin sayını müəyyən edin:",
        answers: ["9", "7", "10", "8"],
        correctAns: "1"
    },

    {
        question: "Sifət hansı cümlədə ismi əvəz edib?",
        answers: ["Al-Əlvan Çiçəklərin ətri ətrafı bürümüşdü", "Azərbaycanın zəngin və qədim tarixi var", "Rahat həyat hamının arzusudur", "Qaralar futbol komandasında seçilirdi"],
        correctAns: "4"
    },

    {
        question: "Sifət cümlədə əsasən hansı vəzifələrdə işlənir?",
        answers: ["Tamamlıq və xəbər vəzifəsində.", "Zərflik və tamamlıq vəzifəsində.", "Təyin və xəbər vəzifəsində.", "Zərflik və təyin vəzifəsində."],
        correctAns: "3"
    },

    {
        question: "Hansı söz rəng bildirir?",
        answers: ["siçan", "qapı", "qızılı", "kitab"],
        correctAns: "3"
    },

    {
        question: "Hansı sifət azaltma dərəcəsində deyil?",
        answers: ["Açıq-aşkar", "Azacıq", "Sarışın", "Açıq-sarı"],
        correctAns: "1"
    },

    {
        question: "Sifət hansı nitq hissəsinə aid olur?",
        answers: ["Felə", "Ismə", "Zərfə", "Əvəzliyə"],
        correctAns: "2"
    },

    {
        question: "Sözlərdən biri həm isim, həm də sifət kimi işlənə bilər.",
        answers: ["yağış", "sınıq", "geniş", "sevinc"],
        correctAns: "2"
    },

    {
        question: "Hansı cümlədə sifət yerində işlədilməyib?",
        answers: ["Mötəbər rəvayətlərə görə Maştağa qəsəbəsinin adı massaget tayfasının adından götürülmüşdür", "Yalnız azad millət milli xarakterə malikdir", "Əqidəsi olmayan ən cəsur insan da gec-tez qorxağa çevrilir", "Xalqın iradəsi ən yaxşı qanundur"],
        correctAns: "1"
    },

    {
        question: "Sifət bildirir:",
        answers: ["əşyanın adını", "əşyanın hərəkətini", "əşyanın necəliyini", "əşyanın sayını"],
        correctAns: "3"
    },

    {
        question: "Hansı cərgədəki sözlər zahiri əlamət bildirir?",
        answers: ["çalışqan, ağıllı, tənbəl", "enlikürək, qaragöz, uzunsaç", "şirin, acı, qısa", "maraqlı, əlverişli, uzun"],
        correctAns: "2"
    },

    {
        question: "Sifətin halını göstərin",
        answers: ["Heç biri", "Yönlük hal", "Yerlik hal", "Sifətin halları yoxdur"],
        correctAns: "4"
    },

    {
        question: "Sifət cümlədə hansı vəzifəni daşıyır?",
        answers: ["xəbər və təyin", " tamamlıq", "mübtəda və xəbər", "xitab"],
        correctAns: "1"
    },

    {
        question: "Sifət nə zaman hansı? sualına cavab verir?",
        answers: ["-dakı şəkilçisi qəbul edəndə", "hallananda", "hansı sualına cavab vermir", "isimləşəndə"],
        correctAns: "1"
    },

    {
        question: "Sifətə aid olmayan xüsusiyyətləri göstərin",
        answers: ["feli birləşmənin əsas tərəfi olmaq", "əşyaya aid olmaq", "əlamət bildirmək", "dərəcə bildirmək"],
        correctAns: "1"
    },

    {
        question: "Hansı sifət həcm bildirir?",
        answers: ["xırda", "yumru", "yaraşıqlı", "dairəvi"],
        correctAns: "1"
    }
]



let count = 0
let correct = 0


btnNode.addEventListener("click", ()=>{
    if (count===0){
        start.style.display="none"
        allAns.style.display="flex"
        btnNode.innerHTML="Cavab ver"
        questionNum.innerHTML = `Sual ${count+1}:`
        questionNode.innerHTML = questions[count].question
        ans1.innerHTML = questions[count].answers[0]
        ans2.innerHTML = questions[count].answers[1]
        ans3.innerHTML = questions[count].answers[2]
        ans4.innerHTML = questions[count].answers[3]
        count++
    } else if (allAns.style.display==="none" && count <= questions.length){
        yes.style.display="none"
        no.style.display="none"
        if (count!==questions.length){
            allAns.style.display="flex"
            btnNode.innerHTML="Cavab ver"
            questionNum.innerHTML = `Sual ${count+1}:`
                questionNode.innerHTML = questions[count].question
                ans1.innerHTML = questions[count].answers[0]
                ans2.innerHTML = questions[count].answers[1]
                ans3.innerHTML = questions[count].answers[2]
                ans4.innerHTML = questions[count].answers[3]
        } else{
            questionNum.innerHTML = "Son!"
            questionNode.innerHTML = ""
            allAns.style.display = "none"
            summary.style.display = "block"
            if (correct>=0 && correct<=5){
                result.innerHTML = "Təəssüf ki, çox zəif göstəricidir."
            } else if (correct<=10){
                result.innerHTML = "Daha çox çalışın!"
            } else if (correct<=14){
                result.innerHTML = "Yaxşı nəticədir!"
            } else if (correct<=19){
                result.innerHTML = "Əla nəticədir!"
            } else {
                result.innerHTML = "Ən yüksək nəticə! Təbrik edirik!"
            }
            end.innerHTML = `Nəticə: ${correct}/${questions.length}`
            btnNode.innerHTML = "Yenidən başla"
            count++
        }
            count++
    } else if (count <= questions.length){
        let variant;
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    variant = radioButton.value;
                    radioButton.checked=false
                    break;
                }
            }
        if (variant){
            allAns.style.display="none"
            btnNode.innerHTML="Davam"
            if (variant === questions[count-1].correctAns){
                correct++
                yes.style.display="flex"
                answe1.innerText = questions[count-1].answers[0]
                answe1.style.background = "red"
                if (questions[count-1].correctAns === '1') answe1.style.background = "green"
                answe2.innerText = questions[count-1].answers[1]
                answe2.style.background = "red"
                if (questions[count-1].correctAns === '2') answe2.style.background = "green"
                answe3.innerText = questions[count-1].answers[2]
                answe3.style.background = "red"
                if (questions[count-1].correctAns === '3') answe3.style.background = "green"
                answe4.innerText = questions[count-1].answers[3]
                answe4.style.background = "red"
                if (questions[count-1].correctAns === '4') answe4.style.background = "green"

            } else {
                no.style.display="flex"
                answi1.innerText = questions[count-1].answers[0]
                answi1.style.background = "red"
                if (questions[count-1].correctAns === '1') answi1.style.background = "green"
                answi2.innerText = questions[count-1].answers[1]
                answi2.style.background = "red"
                if (questions[count-1].correctAns === '2') answi2.style.background = "green"
                answi3.innerText = questions[count-1].answers[2]
                answi3.style.background = "red"
                if (questions[count-1].correctAns === '3') answi3.style.background = "green"
                answi4.innerText = questions[count-1].answers[3]
                answi4.style.background = "red"
                if (questions[count-1].correctAns === '4') answi4.style.background = "green"
            }
        }
    } else {
        location.reload()
    }
})

answer1.addEventListener("click", ()=>{
    answ1.checked=true
})
answer2.addEventListener("click", ()=>{
    answ2.checked=true
})
answer3.addEventListener("click", ()=>{
    answ3.checked=true
})
answer4.addEventListener("click", ()=>{
    answ4.checked=true
})

activate.addEventListener("click", ()=>{
    if (cheet.style.display === 'block'){
        cheet.style.display = 'none'
    } else {
        cheet.style.display = 'block'
    }

})