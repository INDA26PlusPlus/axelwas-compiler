//@ts-check

const values = ["zero" ,"one" ,"two" ,"three" ,"four" ,"five" ,"six" ,"seven" ,"eight" ,"nine" ,"ten" ,"ten plus one" ,"twelve" ,"thirteen" ,"fourteen" ,"fifteen" ,"four squared" ,"twelve plus five" ,"eighteen" ,"nineteen" ,"twenty" ,"twelve plus nine" ,"twelve plus ten" ,"twenty-three" ,"six cubed ninths" ,"five squared" ,"twenty-six" ,"three cubed" ,"twenty-eight" ,"twenty-nine" ,"thirty" ,"thirty-one" ,"four cubed halves" ,"thirty-three" ,"thirty-four" ,"thirty-five" ,"six squared" ,"six squared plus one" ,"thirty-eight" ,"thirty-nine" ,"forty" ,"forty-one" ,"forty-two" ,"forty-three" ,"forty-four" ,"ninety halves" ,"forty-six" ,"ninety-four halves" ,"twelve squaredthirds" ,"seven squared" ,"fifty" ,"fifty-one" ,"fifty-two" ,"fifty-three" ,"six cubed fourths" ,"fifty-five" ,"fifty-six" ,"three times nineteen" ,"fifty-eight" ,"fifty-nine" ,"sixty" ,"sixty-one" ,"sixty-two" ,"sixty-three" ,"four cubed" ,"sixty-five" ,"sixty-six" ,"four cubedplus three" ,"sixty-eight" ,"sixty-nine" ,"seventy" ,"seventy-one" ,"six cubed thirds" ,"four cubed plus nine" ,"four cubed plus ten" ,"thirty squaredtwelfths" ,"four times nineteen" ,"three hundredeight fourths" ,"six times thirteen" ,"seventy-nine" ,"eighty" ,"nine squared" ,"eighty-two" ,"eighty-three" ,"eighty-four" ,"eighty-five" ,"eighty-six" ,"nine squaredplus six" ,"eighty-eight" ,"eighty-nine" ,"ninety" ,"ninety-one" ,"ninety-two" ,"ninety-three" ,"ninety-four" ,"ninety-five" ,"eight times twelve" ,"ninety-seven" ,"ninety-eight" ,"ninety-nine" ,"ten squared" ,"ten squared plus one" ,"ten squared plus two" ,"ten squaredplus three" ,"eight times thirteen" ,"ten squaredplus five" ,"ten squared plus six" ,"ninety-nineplus eight" ,"six cubed halves" ,"ten squaredplus nine" ,"ten squared plus ten" ,"six cubed halvesplus three" ,"eight times fourteen" ,"nine hundredfour eighths" ,"six times nineteen" ,"five cubed minus ten" ,"five cubedminus nine" ,"nine times thirteen" ,"two times fifty-nine" ,"five cubed minus six" ,"ten times twelve" ,"eleven squared" ,"six hundredten fifths" ,"five cubed minus two" ,"five cubed minus one" ,"five cubed" ,"nine times fourteen" ,"five cubed plus two" ,"eight cubed fourths" ,"five cubed plus four" ,"ten times thirteen" ,"five cubed plus six" ,"twelve squaredminus twelve" ,"five cubedplus eight" ,"five cubed plus nine" ,"nine times fifteen" ,"four hundredeight thirds" ,"five cubedplus twelve" ,"twelve squaredminus six" ,"twelve squaredminus five" ,"ten times fourteen" ,"twelve squaredminus three" ,"twelve squaredminus two" ,"twelve squaredminus one" ,"twelve squared" ,"twelve squaredplus one" ,"twelve squaredplus two" ,"twelve squaredplus three" ,"twelve squaredplus four" ,"twelve squaredplus five" ,"thirty squaredsixths" ,"nine hundredsix sixths" ,"eight times nineteen" ,"twelve squaredplus nine" ,"twelve squaredplus ten" ,"three hundredten halves" ,"twelve timesthirteen" ,"twelve squaredplus thirteen" ,"twelve squaredplus fourteen" ,"three timesfifty-three" ,"forty squared tenths" ,"eight hundredfive fifths" ,"six squaredsquared eighths" ,"twelve squaredplus nineteen" ,"four times forty-one" ,"five timesthirty-three" ,"two timeseighty-three" ,"two thousandfour twelfths" ,"twelve timesfourteen" ,"thirteen squared" ,"five hundredten thirds" ,"nine times nineteen" ,"four timesforty-three" ,"thirteen squaredplus four" ,"six timestwenty-nine" ,"seven hundredfourths" ,"eight timestwenty-two" ,"three timesfifty-nine" ,"two timeseighty-nine" ,"thirteen squaredplus ten" ,"thirty squaredfifths" ,"nine hundredfive fifths" ,"nine hundredten fifths" ,"three timessixty-one" ,"eight timestwenty-three" ,"five cubedplus sixty" ,"six times thirty-one" ,"fourteen squaredminus nine" ,"two timesninety-four" ,"seven timesthree cubed" ,"ten times nineteen" ,"ten cubed fifthsminus nine" ,"twelve cubed ninths" ,"twelve cubedninths plus one" ,"twelve cubedninths plus two" ,"thirteen timesfifteen" ,"fourteen squared" ,"fourteen squaredplus one" ,"nine timestwenty-two" ,"fourteen squaredplus three" ,"ten cubed fifths" ,"two hundred one" ,"two hundred two" ,"two hundred three" ,"two hundred four" ,"two hundred five" ,"two hundred six" ,"six cubed minus nine" ,"two hundred eight" ,"two hundred nine" ,"two hundred ten" ,"six cubed minus five" ,"two hundred twelve" ,"six cubedminus three" ,"six cubed minus two" ,"six cubed minus one" ,"six cubed" ,"six cubed plus one" ,"six cubed plus two" ,"six cubed plus three" ,"six cubed plus four" ,"six cubed plus five" ,"six cubed plus six" ,"six cubed plus seven" ,"six cubed plus eight" ,"fifteen squared" ,"six cubed plus ten" ,"nine hundredeight fourths" ,"twelve timesnineteen" ,"fifteen squaredplus four" ,"ten timestwenty-three" ,"fifteen squaredplus six" ,"eight timestwenty-nine" ,"fifteen squaredplus eight" ,"thirteen timeseighteen" ,"fifteen squaredplus ten" ,"four timesfifty-nine" ,"fifteen squaredplus twelve" ,"ten cubed fourthsminus twelve" ,"nine cubed thirdsminus four" ,"twelve times twenty" ,"six cubed plusfive squared" ,"forty-foursquared eighths" ,"nine cubed thirds" ,"four times sixty-one" ,"thirty-fivesquared fifths" ,"six times forty-one" ,"thirteen timesnineteen" ,"eight timesthirty-one" ,"three timeseighty-three" ,"ten cubed fourths" ,"three thousandtwelve twelfths" ,"one thousandeight fourths" ,"one thousandtwelve fourths" ,"five hundredeight halves" ,"five hundredten halves"];
const operations = {
    "~+": () => {},
    "~-": () => {},
    "~=": () => {},
    "~*": () => {},
    "~!": () => {}
};
const keywords = {
    "^w": () => {},
    "^d": () => {}
};
const statement = {
    "]=": () => {},
    "]p": () => {}
};

/** @type {unique symbol} */
export const tokenVariable = Symbol("tokenVariable");
/** @type {unique symbol} */
export const tokenState = Symbol("tokenState");
/** @type {unique symbol} */
export const tokenKeyword = Symbol("tokenKeyword");
/** @type {unique symbol} */
export const tokenOperation = Symbol("tokenOperation");

/**
 * @typedef {typeof tokenVariable | typeof tokenState | typeof tokenKeyword | typeof tokenOperation} TokenTypes
 */



/**
 * 
 * @param {String} char
 * @returns {undefined | TokenTypes} 
 */
function tokenStart(char) {
    const starts = "$^]~".split("");
    if (char === "$") {
        return tokenVariable;
    } else if (char === "^") {
        return tokenKeyword;
    } else if (char === "]") {
        return tokenState;
    } else if (char === "~") {
        return tokenOperation;
    }

    return undefined;
}


/**
 * 
 * @param {String} program
 * @returns {{type: TokenTypes | undefined, text: String}[]} 
 */
function tokenize(program) {
    let ret = [];
    /**
     * @type {{type: TokenTypes | undefined, text: String}}
     */
    let currentToken = {type: undefined, text: ""};
    for (let i = 0; i < program.length; i++) {
        let start = tokenStart(program[i]);
        if (start !== undefined) {
            ret.push(currentToken);
            currentToken = {type: start, text: program[i]};
        } else {
            currentToken = {text: `${currentToken.text}${program[i]}`, type: currentToken.type};
        }
        
    }

    return ret;
}

/**
 * 
 * @param {String} program
 */
function compile(program) {
    const tokens = tokenize(program);

    
    
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("compile")?.addEventListener("mousedown", () => {
        const textarea = document.getElementById("code");

        if (textarea instanceof HTMLTextAreaElement) {
            compile(textarea.value)
        }
    });
});