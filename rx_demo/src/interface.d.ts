

interface AppState {
    next: String,
    step: number,
    stepStack: String [] [],
    valueArr: String [],
    isWin: Boolean
}

interface BoardProps {
    next: String,
    step: Number,
    stepStack: String [] [],
    valueArr: String [],
    onClick: Function
}

interface SquareProps {
    value: String,
    onClick: Function
}

// interface StepState {
//     String []
// }

interface HistoryProps {
    stepStack: String [] [],
    chooseStep: Function
}