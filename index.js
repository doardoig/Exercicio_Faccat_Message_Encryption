const aAlphabet = Array.from('abcdefghijklmnopqrstuvwxyz');
const oAlphabetMap = aAlphabet.reduce((obj, key) => Object.assign(obj, { [key]: true }), {});

function isEncryptableCharacter(sChar) { return Boolean(oAlphabetMap[sChar]) }

function getEncryptedIndex(iAlphabetLength, iBaseIndex, iRotations) {
    if (iRotations > iAlphabetLength) {
        iRotations = iRotations % iAlphabetLength
    }
    const sConvertedIndex = iBaseIndex - (iAlphabetLength - iRotations);
    if (sConvertedIndex < 0) {
        return iAlphabetLength + sConvertedIndex
    }
    return sConvertedIndex;
}

function getEncryptedCharacter(sCharacter, iRotations) {
    const bUpperCase = sCharacter === sCharacter.toUpperCase();
    sCharacter = sCharacter.toLowerCase();
    if (!isEncryptableCharacter(sCharacter)) {
        return sCharacter
    }
    const iCharacterIndex = aAlphabet.findIndex((sChar) => sChar === sCharacter);
    const sConvertedCharacter = aAlphabet[getEncryptedIndex(aAlphabet.length, iCharacterIndex, iRotations)];
    return bUpperCase ? sConvertedCharacter.toUpperCase() : sConvertedCharacter;
}

function getEncryptedText(sText, iRotations) {
    let sEncryptedText = '';
    for (let i = 0; i < sText.length; i++) {
        sEncryptedText += getEncryptedCharacter(sText[i], iRotations);
    }
    return sEncryptedText;
}

let sText = 'Ola, meu nome eh Carlos! E o seu?'
console.log(getEncryptedText(sText, 7))