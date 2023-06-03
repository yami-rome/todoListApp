import { SelectCard } from "../Task/Task.styled"
import { LabelSelectPagination, Pagination } from "./SelectPagination.styled"

interface ISelectPagination {
    onChangeRowPerPage: (numberPage: number) => void
    taskPerPage: number
}

export const SelectPagination = (props: ISelectPagination) => {
    return (
        <Pagination>
            <SelectCard
                value={props.taskPerPage}
                data-testid='selectPagination'
                onChange={(e) => props.onChangeRowPerPage(Number((e.target.value)))}
            >
                <option value={2}>2 Rows</option>
                <option value={3}>3 Rows</option>
                <option value={6}>6 Rows</option>
                <option value={9}>9 Rows</option>
            </SelectCard>
            
        </Pagination>
    )
}