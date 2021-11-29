
//Get hold of Elements
var maindiv = document.querySelector(".container").innerHTML
const subdiv = document.getElementsByClassName("subcontainer")
const btn = document.querySelector(".btn")

//api Url 
const url = "https://the-dune-api.herokuapp.com/books"



//Fetch data on event
btn.addEventListener("click", () => {

    const fetchData = async () => {
        try {


            const response = await fetch(url);
            const Bookdata = await response.json();
            console.log(Bookdata[0]);

            //appending data to HTML
            let realData = Bookdata[0]
            document.getElementById("p1").innerHTML = ` ${realData.title}`
            document.getElementById("p2").innerHTML = `${realData.year}`
            document.getElementById("p3").innerHTML = `${realData.author}`
            document.getElementById("url").innerHTML = `<a href=${realData.wiki_url}>Wikipedia</a>
            `
            //Error Handling
        } catch (err) {
            console.log(err)
        }
    };
    //calling fecth function
    fetchData();

});






