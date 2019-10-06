export default function readUserBinaryFile(inputFile) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        let binaryString;

        function loadData() {
            let array = new Uint8Array(this.result);
            binaryString = String.fromCharCode.apply(null, array);
            resolve(binaryString)
        }

        reader.onload = loadData;
        reader.readAsArrayBuffer(inputFile);
        // reader.readAsText(selectedFile);
    });
}
