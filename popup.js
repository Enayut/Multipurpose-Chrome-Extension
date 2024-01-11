const takeSS = () =>{
    chrome.tabs.captureVisibleTab({format:"png"},(ssUrl)=>{
        const link = document.createElement("a")
        link.href = ssUrl
        link.download = "ScreenShot.png"
        link.click()
    })
}

document.addEventListener("DOMContentLoaded",()=>{
    const btn = document.getElementById("btn")
    btn.addEventListener("click",takeSS)
})
