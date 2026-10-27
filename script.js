//@ts-check

const values=["zero","one","two","three","four","five","six","seven","eight","nine","ten","tenplusone","twelve","thirteen","fourteen","fifteen","foursquared","twelveplusfive","eighteen","nineteen","twenty","twelveplusnine","twelveplusten","twentythree","sixcubedninths","fivesquared","twentysix","threecubed","twentyeight","twentynine","thirty","thirtyone","fourcubedhalves","thirtythree","thirtyfour","thirtyfive","sixsquared","sixsquaredplusone","thirtyeight","thirtynine","forty","fortyone","fortytwo","fortythree","fortyfour","ninetyhalves","fortysix","ninetyfourhalves","twelvesquaredthirds","sevensquared","fifty","fiftyone","fiftytwo","fiftythree","sixcubedfourths","fiftyfive","fiftysix","threetimesnineteen","fiftyeight","fiftynine","sixty","sixtyone","sixtytwo","sixtythree","fourcubed","sixtyfive","sixtysix","fourcubedplusthree","sixtyeight","sixtynine","seventy","seventyone","sixcubedthirds","fourcubedplusnine","fourcubedplusten","thirtysquaredtwelfths","fourtimesnineteen","threehundredeightfourths","sixtimesthirteen","seventynine","eighty","ninesquared","eightytwo","eightythree","eightyfour","eightyfive","eightysix","ninesquaredplussix","eightyeight","eightynine","ninety","ninetyone","ninetytwo","ninetythree","ninetyfour","ninetyfive","eighttimestwelve","ninetyseven","ninetyeight","ninetynine","tensquared","tensquaredplusone","tensquaredplustwo","tensquaredplusthree","eighttimesthirteen","tensquaredplusfive","tensquaredplussix","ninetyninepluseight","sixcubedhalves","tensquaredplusnine","tensquaredplusten","sixcubedhalvesplusthree","eighttimesfourteen","ninehundredfoureighths","sixtimesnineteen","fivecubedminusten","fivecubedminusnine","ninetimesthirteen","twotimesfiftynine","fivecubedminussix","tentimestwelve","elevensquared","sixhundredtenfifths","fivecubedminustwo","fivecubedminusone","fivecubed","ninetimesfourteen","fivecubedplustwo","eightcubedfourths","fivecubedplusfour","tentimesthirteen","fivecubedplussix","twelvesquaredminustwelve","fivecubedpluseight","fivecubedplusnine","ninetimesfifteen","fourhundredeightthirds","fivecubedplustwelve","twelvesquaredminussix","twelvesquaredminusfive","tentimesfourteen","twelvesquaredminusthree","twelvesquaredminustwo","twelvesquaredminusone","twelvesquared","twelvesquaredplusone","twelvesquaredplustwo","twelvesquaredplusthree","twelvesquaredplusfour","twelvesquaredplusfive","thirtysquaredsixths","ninehundredsixsixths","eighttimesnineteen","twelvesquaredplusnine","twelvesquaredplusten","threehundredtenhalves","twelvetimesthirteen","twelvesquaredplusthirteen","twelvesquaredplusfourteen","threetimesfiftythree","fortysquaredtenths","eighthundredfivefifths","sixsquaredsquaredeighths","twelvesquaredplusnineteen","fourtimesfortyone","fivetimesthirtythree","twotimeseightythree","twothousandfourtwelfths","twelvetimesfourteen","thirteensquared","fivehundredtenthirds","ninetimesnineteen","fourtimesfortythree","thirteensquaredplusfour","sixtimestwentynine","sevenhundredfourths","eighttimestwentytwo","threetimesfiftynine","twotimeseightynine","thirteensquaredplusten","thirtysquaredfifths","ninehundredfivefifths","ninehundredtenfifths","threetimessixtyone","eighttimestwentythree","fivecubedplussixty","sixtimesthirtyone","fourteensquaredminusnine","twotimesninetyfour","seventimesthreecubed","tentimesnineteen","tencubedfifthsminusnine","twelvecubedninths","twelvecubedninthsplusone","twelvecubedninthsplustwo","thirteentimesfifteen","fourteensquared","fourteensquaredplusone","ninetimestwentytwo","fourteensquaredplusthree","tencubedfifths","twohundredone","twohundredtwo","twohundredthree","twohundredfour","twohundredfive","twohundredsix","sixcubedminusnine","twohundredeight","twohundrednine","twohundredten","sixcubedminusfive","twohundredtwelve","sixcubedminusthree","sixcubedminustwo","sixcubedminusone","sixcubed","sixcubedplusone","sixcubedplustwo","sixcubedplusthree","sixcubedplusfour","sixcubedplusfive","sixcubedplussix","sixcubedplusseven","sixcubedpluseight","fifteensquared","sixcubedplusten","ninehundredeightfourths","twelvetimesnineteen","fifteensquaredplusfour","tentimestwentythree","fifteensquaredplussix","eighttimestwentynine","fifteensquaredpluseight","thirteentimeseighteen","fifteensquaredplusten","fourtimesfiftynine","fifteensquaredplustwelve","tencubedfourthsminustwelve","ninecubedthirdsminusfour","twelvetimestwenty","sixcubedplusfivesquared","fortyfoursquaredeighths","ninecubedthirds","fourtimessixtyone","thirtyfivesquaredfifths","sixtimesfortyone","thirteentimesnineteen","eighttimesthirtyone","threetimeseightythree","tencubedfourths","threethousandtwelvetwelfths","onethousandeightfourths","onethousandtwelvefourths","fivehundredeighthalves","fivehundredtenhalves"];
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
/** @type {unique symbol} */
export const tokenValue = Symbol("tokenValue");

/**
 * @typedef {typeof tokenVariable | typeof tokenState | typeof tokenKeyword | typeof tokenOperation | typeof tokenValue} TokenTypes
 */
/**
 * @typedef {{type: TokenTypes | undefined, text: String}} Token
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

    const alphabetic = "abcdefghijklmnopqrstuvwxyz-";

    if (alphabetic.split("").includes(char)) {
        return tokenValue;
    }

    return undefined;
}


/**
 * 
 * @param {String} program
 * @returns {Token[] | string} 
 */
function tokenize(program) {
    /**
     * @type {Token[]}
     */
    let ret = [];
    /**
     * @type {Token}
     */
    let currentToken = {type: undefined, text: ""};
    for (let i = 0; i < program.length; i++) {
        if (program[i].trim() === "") {
            continue;
        }
        let start = tokenStart(program[i]);
        
        if (start === tokenKeyword || start === tokenState || start === tokenOperation) {
            // Must be 2 char word

            let char1 = program[i];
            i += 1;
            let char2 = program[i];

            ret.push({
                type: start,
                text: `${char1}${char2}`
            });
            continue;

        } else if (start === tokenVariable) {
            let whole = "";

            do {
                if (program[i].trim() !== "") {
                    whole = whole + program[i];
                }
                i += 1;

                if (program[i] === undefined) break;
            } while (tokenStart(program[i]) === undefined);

            ret.push({
                type: start,
                text: whole
            });
            i -= 1;
            continue;
        } else if (start === tokenValue) {
            let whole = "";

            let oldi = i;
            do {
                if (program[i].trim() !== "") {
                    whole = whole + program[i];
                }
                i += 1;
                if (program[i] === undefined) break;
            } while (program[i].trim() === "" || tokenStart(program[i]) === tokenValue);

            const toIndex = (() => {
                for (let i = whole.length; i > 0; i--) {
                    const possible = values.indexOf(whole.substring(0, i));
                    if (possible !== -1) {
                        return i;
                    }
                }
                return -1;
            })();
            
            if (toIndex == -1) {
                return `value: ${whole} was not a valid value. Please consult the readme for valid values.`;
            }

            i = oldi + (toIndex - 1);
            
            ret.push({
                type: tokenValue,
                text: whole.substring(0, toIndex)
            });
        } else {
            console.error("internal error. Ignoring");
        }
    }

    return ret;
}

/**
 * 
 * @param {Token[]} tokens 
 * @param {number} from
 * 
 * @returns {Parseresult<Variable>}
 */
function parseVariable(tokens, from) {
    if (tokens[from].type === tokenVariable) {
        return {
            result: {
                type: "Variable",
                identifier: tokens[from].text.substring(1, tokens[from].text.length)
            },
            next: from + 1
        };
    } 
    return {error: `Unexpected token. At token ${from}. Found ${tokens[from].text}. Expected a variable`};
}

/**
 * 
 * @param {Token[]} tokens 
 * @param {number} from
 * 
 * @returns {Parseresult<Expression>}
 */
function parseExpression(tokens, from) {
    if (tokens[from].type === tokenVariable) {
        return parseVariable(tokens, from);
    } else if (tokens[from].type === tokenValue) {
        const value = values.findIndex(s => s === tokens[from].text);
        if (value === -1) {
            return {
                error: `Expected Literal. Found: ${tokens[from].text}. Consult the readme document for valid literals.`
            };
        }

        return {
            result: {
                type: "Literal",
                value: value
            },
            next: from + 1
        };
    } else if(tokens[from].type === tokenOperation) {
        const allOperations = Object.keys(operations);
        if (tokens[from].text == "~!") {
            const left = parseExpression(tokens, from + 1);
            if ("error" in left) return left;
            return {
                result: {
                    type: "ArithmeticExpression",
                    operator: "!",
                    left: left.result
                },
                next: left.next
            };
        } else if (allOperations.includes(tokens[from].text)) {
            const left = parseExpression(tokens, from + 1);
            if ("error" in left) return left;
            const right = parseExpression(tokens, left.next);
            if ("error" in right) return right;

            const op = /** @type {"*" | "+" | "-" | "="} */ (tokens[from].text[1]);
            return {
                result: {
                    type: "ArithmeticExpression",
                    operator: op,
                    left: left.result,
                    right: right.result
                },
                next: right.next
            };
        }
    } 
    return {
        error: `Unexpected token. At token ${from}. Found:: ${tokens[from].text}. Expected an expression`
    };

}

/**
 * 
 * @param {Token[]} tokens 
 * @param {number} from
 * 
 * @returns {Parseresult<Statement>}
 */
function parseStatement(tokens, from) {
    if (tokens[from].type !== tokenState) {
        return {error: `Unexpeted token. Found: ${tokens[from].text}. Expected a statement`}
    }

    if (tokens[from].text === "]=") {
        let left = parseVariable(tokens, from + 1);
        if ("error" in left) return left;
        let right = parseExpression(tokens, left.next);
        if ("error" in right) return right;

        return {
            result: {
                type: "VariableStatement",
                left: left.result,
                right: right.result
            },
            next: right.next
        };

    } else if (tokens[from].text === "]p") {
        let left = parseExpression(tokens, from + 1);
        if ("error" in left) return left;
        return {
            result: {
                type: "PrintStatement",
                left: left.result
            },
            next: left.next
        };
    }

    return {error: `Unexpected token. At token ${from}. Found ${tokens[from].text}. Expected statement`};

}

/**
 * 
 * @param {Token[]} tokens 
 * @param {number} from
 * 
 * @returns {Parseresult<ProgramBody>}
 */
function parseBody(tokens, from) {
    /**
     * @type {ProgramBody}
     */
    let ret = [];
    let current = from;

    while (true) {
        if (tokens[current] === undefined) {
            break;
        }

        if (tokens[current].type == tokenState) {
            const statement = parseStatement(tokens, current);
            if ("error" in statement) {
                return statement;
            }
            ret.push(statement.result);
            current = statement.next;
        } else if (tokens[current].type === tokenKeyword) {
            if (tokens[current].text === "^d") {
                return {
                    result: ret,
                    next: current + 1
                };
            } else if (tokens[current].text === "^w") {
                let condition = parseExpression(tokens, current + 1);
                if ("error" in condition) return condition;
                let body = parseBody(tokens, condition.next);
                if ("error" in body) return body;
                ret.push({
                    type: "WhileLoop",
                    condition: condition.result,
                    body: body.result
                });
                current = body.next;
            } else {
                return {error: `Unexpected token. At token ${from}. Found ${tokens[current].text}. Expected keyword`};
            }
        } else {
            return {error: `Unexpected token when parsing body: ${tokens[current].text}. Expected statement`};
        }
    }

    return {
        result: ret,
        next: -1
    };
}

/**
 * 
 * @param {Token[]} tokens 
 * 
 * @returns {Parseresult<ProgramBody>}
 */
export function intoTree(tokens) {
    const mainBody = parseBody(tokens, 0);

    if ("error" in mainBody) {
        console.error(mainBody.error);
    } 

    return mainBody;
}

/**
 * 
 * @param {Variable} variable
 * @returns {string} 
 */
function resolveVariable(variable) {
    return `%x${variable.identifier}`;
}


/**
 * 
 * @param {Expression} left 
 * @returns {ExpressionIR}
*/
function resolveNotExpression(left) {
    let res = resolveExpression(left);
    if (typeof res === "number") {
        return Number((res === 0)); 
    }

    const toAppend = `%t${res.onIdent + 1} =w ceqw 0, ${res.ident}\n`;
    
    return {
        ident: `%t${res.onIdent + 1}`,
        onIdent: res.onIdent + 1,
        toAppend: res.toAppend + toAppend
    };
}

/**
 * 
 * @param {"+" | "-" | "*" | "="} op 
 * @returns {string}
 */
function resolveOpKeyword(op) {
    if (op === "*") {
        return "mul";
    }
    if (op === "+") {
        return "add";
    }
    if (op === "-") {
        return "sub";
    }
    
    return "ceqw";
    
}

/**
 * 
 * @param {Expression} left 
 * @param {Expression} right 
 * @param {"+" | "-" | "*" | "="} op 
 * 
 * @returns {ExpressionIR}
 */
function resolveArithExpression(left, right, op) {
    const leftRes = resolveExpression(left);
    const rightRes = resolveExpression(right); 

    if (typeof leftRes === "number" && typeof rightRes === "number") {
        if (op === "+") {
            return (leftRes + rightRes) % 256;
        } 
        if (op === "-") {
            return (leftRes - rightRes) % 256;
        }
        if (op === "*") {
            return (leftRes * rightRes) % 256;
        }
        if (op === "=") {
            return Number(leftRes === rightRes);
        }
    }

    const leftVal = typeof leftRes === "number" ? String(leftRes) : leftRes.ident;
    const rightVal = typeof rightRes === "number" ? String(rightRes) : rightRes.ident;
    const keyword = resolveOpKeyword(op);
    const nextIdent = Math.max(typeof leftRes === "number" ? 0 : leftRes.onIdent + 1, typeof rightRes === "number" ? 0 : rightRes.onIdent + 1);
    
    const leftAppend = typeof leftRes === "number" ? "" : leftRes.toAppend;
    const rightAppend = typeof rightRes === "number" ? "" : rightRes.toAppend;
    const toAppend = `%t${nextIdent} =w ${keyword} ${leftVal}, ${rightVal}\n`;

    return {
        ident: `%t${nextIdent}`,
        onIdent: nextIdent,
        toAppend: leftAppend + rightAppend + toAppend
    };
}

/**
 * 
 * @param {Expression} expression
 * @returns {ExpressionIR} 
 */
function resolveExpression(expression) {
    if (expression.type === "Variable") {
        return { ident: resolveVariable(expression), onIdent: 0, toAppend: "" };
    } else if (expression.type === "Literal") {
        return expression.value;
    } else {
        if (expression.operator === "!") {
            return resolveNotExpression(expression.left);
        } else {
            return resolveArithExpression(expression.left, expression.right, expression.operator);
        }
    }
}


let onBlock = 0;
/**
 * @returns {string}
 */
function generateUniqueBlockName() {
    onBlock += 1;
    return "@block" + String(onBlock);
}

/**
 * 
 * @param {ProgramBody} body 
 * 
 * @returns {string}
 */
function bodyIntoIL(body) {
    let ret = "";

    for (const statement of body) {
        if (statement.type == "VariableStatement") {
            const expr = resolveExpression(statement.right);
            const val = typeof expr === "number" ? Number(expr) : expr.ident;
            const toAppend = `%x${statement.left.identifier} =w copy ${val}\n`;
            if (typeof expr !== "number") {
                ret = ret + expr.toAppend;
            }
            ret = ret + toAppend;
        } else if (statement.type == "WhileLoop") {
            const insideBody = bodyIntoIL(statement.body);
            const exp = resolveExpression(statement.condition);
            const labelStart = generateUniqueBlockName();
            const labelEnd = generateUniqueBlockName();

            let code;
            if (typeof exp === "number") {
                code = exp !== 0 ? `${labelStart}\n` + 
                `${insideBody}` +
                `jmp ${labelStart}\n` + 
                `${labelEnd}\n` : "";

            } else {
                code =  
                `${exp.toAppend}` + 
                `jnz ${exp.ident}, ${labelStart}, ${labelEnd}\n` + 
                `${labelStart}\n` +
                `${insideBody}` + 
                `${exp.toAppend}` + 
                `jnz ${exp.ident}, ${labelStart}, ${labelEnd}\n` + 
                `${labelEnd}\n`;
            }

            ret = ret + code;
        } else {
            let code = "";

            const exp = resolveExpression(statement.left);
            if (typeof exp === "number") {
                code = `%r =w call $printBS(w ${exp})\n`;
            } else {
                code = `${exp.toAppend}` + 
                `%r =w call $printBS(w ${exp.ident})\n`;
            }

            ret = ret + code;
        }
    }

    return ret;
}

/**
 * 
 * @param {string} mainBlock
 * 
 * @returns {string} 
 */
function ILPrelude(mainBlock) {

    return `
data $default = { b "%i\\n", b 0}

function w $printBS(w %arg) {
@printstart
%r =w call $printf(l $default, w %arg)
ret 0   
}

export function w $main() {
@start
${mainBlock}
ret 0
}
`;
}

/**
 * 
 * @param {String} program
 * 
 * @returns {string | Parseresult<never>}
 */
export function compile(program) {
    const tokens = tokenize(program);
    if (typeof tokens === "string") {
        console.error("error parsing tokens:", tokens);
        return {error: tokens};
    }
    console.log(tokens);
    const body = intoTree(tokens);
    if ("error" in body) {
        console.error(body);
        return body;
    }

    const IL = bodyIntoIL(body.result);

    console.log(IL);
    console.log(ILPrelude(IL));
    return ILPrelude(IL);
    
}

    