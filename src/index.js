// import './rc2'
import Crypto from './crypto'
import download from './download'
import readUserBinaryFile from './readUserBinaryFile'

const decryptArea = document.getElementById("decryptArea");
const encryptArea = document.getElementById("encryptArea");
const passwordElement = document.getElementById('password');

document.getElementById("encryptButton").onclick = function () {
    const decryptFileData = decryptArea.value;
    const encryptFileData = Crypto.encryptRC2(decryptFileData, passwordElement.value);
    encryptArea.value = encryptFileData;
};

document.getElementById("decryptButton").onclick = function () {
    const encryptFileData = encryptArea.value;
    const decryptFileData = Crypto.decryptRC2(encryptFileData, passwordElement.value);
    decryptArea.value = decryptFileData;
};

document.querySelector('#decryptFile').addEventListener('change', async function () {
    const fileStream = this.files[0];
    const fileData = await readUserBinaryFile(fileStream);
    decryptArea.value = fileData;
}, false);

document.querySelector('#encryptFile').addEventListener('change', async function () {
    const fileStream = this.files[0];
    const fileData = await readUserBinaryFile(fileStream);
    encryptArea.value = fileData;
}, false);

document.getElementById("downloadDecryptArea").onclick = function () {
    const decryptFileData = decryptArea.value;
    download(decryptFileData, 'decryptFileData', 'rc');
};

document.getElementById("downloadEncryptArea").onclick = function () {
    const encryptFileData = encryptArea.value;
    download(encryptFileData, 'encryptFileData', 'rc');
};