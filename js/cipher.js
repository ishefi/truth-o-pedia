var key = 'this 1s @ VeRy $tUpid K3y!';


function decipher(str){
    var strBytes = CryptoJS.AES.decrypt(str, key);
    return strBytes.toString(CryptoJS.enc.Utf8);
}

function cipher(str){
    var strBytes = CryptoJS.AES.encrypt(str, key);
    return strBytes.toString();
}

