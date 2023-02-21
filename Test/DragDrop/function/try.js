function downloadTxt(text, fileName){
    let element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
    element.setAttribute('download', fileName)
    element.style.display = 'none'
    element.click()
}

downloadTxt('txt内容','tx文件名称')