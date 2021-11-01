function data(input) {

    let file = input.split('\\').pop()
    let fileName = file.lastIndexOf('.')
    let firstElement = file.substring(0, fileName)
    let lastElement = file.substring(fileName + 1)

    console.log(`File name: ${firstElement}`);
    console.log(`File extension: ${lastElement}`);

}

data('C:\\Internal\\training-internal\\Template.bak.pptx')