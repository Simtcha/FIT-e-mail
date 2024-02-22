/*
Pokud se přihlásíte jako student například na Fakultu Informačních Technologí ČVUT, bude vám informačním systémem automaticky přidělen e-mail, 
který se vytvoří z vašeho jména a příjmení. Z vašeho příjmení se vezme pět prvních znaků a z vašeho křestního jména první tři. 
Výsledek se převede na malá písmena a připojí se doména fit.cvut.cz. Pro jméno Jana Procházková tak vznikne adresa prochjan@fit.cvut.cz.
Vytvořte webovou stránku, která požádá uživatele nejdříve o jeho křestní jméno a pak příjmení, obojí bez diakritiky. 
Pomocí metody trim zajistěte, že ve jméně ani příjmení nebudou na začátku ani na konci žádné bílé znaky. 
Pomocí metody slice vyřízněte ze jména i příjmení příslušné části. Pomocí interpolace řetězců sestavte výslednou adresu a vypište ji do stránky.
*/


let jmeno = prompt("Zadej křestní jméno: ")
let prijmeni = prompt("Zadej příjmení: ")

jmeno = jmeno.trim()
jmeno = jmeno.toLowerCase()
jmeno = jmeno.normalize("NFD").replace(/[\u0300-\u036f]/g, "") //odstrani diakritiku
jmeno = jmeno.slice(0,3)

prijmeni = prijmeni.trim()
prijmeni = prijmeni.toLowerCase()
prijmeni = prijmeni.normalize("NFD").replace(/[\u0300-\u036f]/g, "") //odstrani diakritiku
prijmeni = prijmeni.slice(0,5)

email = prijmeni + jmeno + "@fit.cvut.cz"

//console.log(email)
document.body.innerHTML += `<p>Váš nový školní e-mail je: ${email}</p>`

stranka = document.querySelector("body")
stranka.style.backgroundColor = "#d2f3f4"

odstavec = document.querySelector("p")
odstavec.style.backgroundColor = "#90e1e4"
odstavec.style.textAlign = "center"
odstavec.style.fontFamily = "Calibri"
odstavec.style.fontSize = "40px"
odstavec.style.fontWeight = "bold"
odstavec.style.paddingBlock = "150px"

obrazek = document.querySelector("img")
obrazek.style.width = "300px"
obrazek.style.padding = "0"
obrazek.style.marginTop = "3%"
obrazek.style.marginLeft = "41%"
