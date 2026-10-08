type Literal = {
    type: "Literal",
    value: number
};

type ArithmeticExpression = {
    type: "ArithmeticExpression",
    operator: "+" | "-" | "*" | "=",
    left: Expression
    right: Expression
} | {
    type: "ArithmeticExpression",
    operator: "!",
    left: Expression
}

type Variable = {
    type: "Variable",
    identifier: string
}

type Expression = Variable | ArithmeticExpression | Literal;

type VariableStatement = {
    type: "VariableStatement",
    left: Variable
    right: Expression
};

type PrintStatement = {
    type: "PrintStatement",
    left: Expression
};

type Statement = PrintStatement | VariableStatement;

type ProgramBody = (Statement | WhileLoop)[];

type WhileLoop = {
    type: "WhileLoop",
    condition: Expression,
    body: ProgramBody
};

type Parseresult<T> = {error: string} | {result: T, next: number};