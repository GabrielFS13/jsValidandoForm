const initCam = document.querySelector("[data-video-botao]")
const campoCam = document.querySelector("[data-camera]")
const video = document.querySelector("[data-video]")
const tirarFt = document.querySelector("[data-tirar-foto]")
const canvas = document.querySelector("[data-video-canvas]")
const msg = document.querySelector("[data-mensagem]")
const enviar = document.querySelector("[data-enviar]")

let imgURL = ""

initCam.addEventListener("click",async function(){
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false})
    
    initCam.style.display = 'none'
    campoCam.style.display = 'block'

    video.srcObject = iniciarVideo
})


tirarFt.addEventListener("click", function(){
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height )

    imgURL = canvas.toDataURL("image/jpeg")

    campoCam.style.display = 'none'
    msg.style.display = 'block'
})

enviar.addEventListener("click", () =>{
    const bordao_do_luva_de_pedreiro = localStorage.getItem('cadatro')
    const recebo = JSON.parse(bordao_do_luva_de_pedreiro)

    recebo.imagem = imgURL

    localStorage.setItem("cadastro", JSON.stringify(recebo))

    window.location.href = './abrir-conta-form-3.html'
})