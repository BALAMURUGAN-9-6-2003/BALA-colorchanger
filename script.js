const body = document.querySelector(".body")
function Call() {
    n = Math.random(1, 10)
    l = ["Black", "Orange", "Green", "Sky", "blue", "Crimson", "Grey", "Purple", "Mustard",
        "Violet"]
    n=parseInt(n * 10)
    const body = document.querySelector(".body").bgColor = l[n]
    // document.write("HELLO")
}