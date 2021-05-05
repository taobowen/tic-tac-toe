

interface AppState {
    next: String,
    step: number,
    stepStack: String [] [],
    valueArr: String [],
    winnerIndex: number [] | undefined,
    stepCoordinates: pieceData []
}

interface BoardProps {
    valueArr: String [],
    winnerIndex: number [] | undefined,
    onClick: Function
}

interface SquareProps {
    value: String,
    onClick: Function,
    winnerIndex: number [] | undefined,
    squareIndex: number
}

// interface StepState {
//     String []
// }

interface HistoryProps {
    stepStack: String [] [],
    chooseStep: Function,
    stepCoordinates: pieceData []
}

interface pieceData {
    X: number,
    Y: number
}