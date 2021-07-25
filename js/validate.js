const inputCPF = document.getElementById("cpf")
const inputTEL = document.getElementById("tel_C")


inputCPF.addEventListener('focus', function(e) {
    inputCPF.value = "___.___.___-__"
    setTimeout(function() {
        inputCPF.setSelectionRange(0, 0)
    }, 1)
})

inputTEL.addEventListener('focus', function(e) {
    inputTEL.value = "(11)99999-9999"
    setTimeout(function() {
        inputTEL.setSelectionRange(0, 0)
    }, 1)
})

inputCPF.addEventListener("keydown", function(e) {
    e.preventDefault()
    if("0123456789".indexOf(e.key) !== -1
        && this.value.indexOf("_") !== -1) {
            this.value = this.value.replace(/_/, e.key)
            const nextIndex = this.value.indexOf("_")
            this.setSelectionRange(nextIndex, nextIndex)
    } else if (e.key === "Backspace") {
        this.value = this.value.replace(/(\d$)|(\d(?=\D+$))/, "_")
        const nextIndex = this.value.indexOf("_")
        this.setSelectionRange(nextIndex, nextIndex)
    }
})

inputCPF.addEventListener('focus', function(e) {
    inputCPF.value = "___.___.___-__"
    setTimeout(function() {
        inputCPF.setSelectionRange(0, 0)
    }, 1)
})

inputTEL.addEventListener('focus', function(e) {
    inputTEL.value = "(11)99999-9999"
    setTimeout(function() {
        inputTEL.setSelectionRange(0, 0)
    }, 1)
})

inputTEL.addEventListener("keydown", function(e) {
    e.preventDefault()
    if("0123456789".indexOf(e.key) !== -1
        && this.value.indexOf("9") !== -1) {
            this.value = this.value.replace(/9/, e.key)
            const nextIndex = this.value.indexOf("9")
            this.setSelectionRange(nextIndex, nextIndex)
    } else if (e.key === "Backspace") {
        this.value = this.value.replace(/(\d$)|(\d(?=\D+$))/, "9")
        const nextIndex = this.value.indexOf("9")
        this.setSelectionRange(nextIndex, nextIndex)
    }
})