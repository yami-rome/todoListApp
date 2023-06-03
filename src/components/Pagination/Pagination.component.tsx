import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ITask } from "../../store/task/task.model.store"
import { PreviusButton, NextButton, CurrentPageButton, Pagination } from "./Pagination.styled"


interface IPaginationComponent {
    onPrevPageButton: () => void
    onNextPageButton: () => void
    currentPage: number
    totalPage: number
    todoList: Array<ITask>
}

export const PaginationComponent = (props: IPaginationComponent) => {
    return (
        <Pagination>
            <PreviusButton
                type="button"
                data-testid='previusButton'
                disabled={props.currentPage === 0}
                onClick={() => props.onPrevPageButton()}>
                <FontAwesomeIcon icon={faCaretLeft} />
            </PreviusButton>
            <CurrentPageButton>{props.currentPage + 1} / {props.totalPage}</CurrentPageButton>
            <NextButton
                type="button"
                data-testid='nextButton'
                disabled={props.currentPage >= props.totalPage - 1}
                onClick={() => props.onNextPageButton()}>
                <FontAwesomeIcon icon={faCaretRight} />
            </NextButton>
        </Pagination>
    )
}