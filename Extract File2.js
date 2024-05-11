function extract(input){

    let fileName = input.split('\\').pop().split('.');
    //let fileName = name.split('.')
    console.log(`File name: ${fileName[0]}\nFile extension: ${fileName[1]}`);

}
extract('C:\\Internal\\training-internal\\Template.pptx')