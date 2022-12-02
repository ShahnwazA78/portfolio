export const scrollToSection=(goto)=>{
    document.querySelector("#"+goto).scrollIntoView({behaviour:"smooth"})
}