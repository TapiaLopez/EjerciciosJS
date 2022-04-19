const baseUrl= 'https://opentdb.com/api.php?amount=10&type=multiple'

const starGame$$ = document.querySelector('[data-function="start-game"]')
const inputGame$$=document.querySelector('[data-function="questions-number"]')
const divGame$$= document.querySelector('[data-function="gameboard"]')
const butGame$$ =document.querySelector('[data-function="check-game"]')
const userAnswer = []

const asnweredQuestions= []
fetch(baseUrl)

.then((res) =>{
   return res.json()
})
.them((questions) =>{

})


    for (let i = 0; i < one.results.length; i++){
        const one= 
        console.log(one);
        let div$$ = document.createElement("div");
        let h4$$ = document.createElement("h4");
        divGame$$.appendchild(div$$)
        h4$$.innerHTML = one.question;
        divGame$$.appendchild(h4$$);
        const allAnswer = [one.correct_answer,...one.correct_answer]
        for(let answer of allAnswer){
            let p1$$ = document.createElement("p")
            p1$$.innerHTML= answer
            p1$$.classList.add("answer")
            divGame$$.appendchild(p1$$)

            for(let answer of allAnswer){
                let p1$$ = document.createElement("P")
                p1$$.innerHTML= answer;
                p1$$.classList.add("answer")
                divGame$$.appenDchild(h4$$);
            }
            p1$$.addEventListener("click", () =>{
                userAnswer[i] = answer === one.correct_answer
            
            
            })
        }
    }

butGame$$.addEventListener("click", () =>{
    console.log(userAnswer)
})

