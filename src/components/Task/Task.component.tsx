import { ITask } from "../../store/task/task.model.store"
import { ButtonCard, Card, ContentCard, GroupButtonsCard, HeadCard, LabelCard, MaximizedButtonCard, MinimizedButtonCard, SelectCard, ValueLabelCard, Wrapper } from "./Task.styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faChevronDown, faChevronUp, faPenToSquare, faStar, faTrash } from "@fortawesome/free-solid-svg-icons"
interface ITaskComponent {
    onUpdate: (taskUpdated: ITask) => void
    onDelete: (task: ITask) => void
    onMaximized: (task: ITask) => void
    onMinimized: (task: ITask) => void
    onUpTask: (task: ITask) => void
    onDownTask: (task: ITask) => void
    onChangeFavoriteTaskButton: (task: ITask) => void
    onSelectedStatus: (task: ITask, status: 'pending' | 'progress' | 'success') => void
    task: ITask
    isMaximized: boolean
    isDisabledUpdButton: boolean
    isDisabledDownButton: boolean
}

export const TaskComponent = (props: ITaskComponent) => {

    const onChangeStatusHandler = (value: string) => {
        if (value === 'pending') return props.onSelectedStatus(props.task, value)
        if (value === 'progress') return props.onSelectedStatus(props.task, value)
        if (value === 'success') return props.onSelectedStatus(props.task, value)
    }

    return (

        <Wrapper>
            {
                props.isMaximized ? (

                    <Card>
                        <HeadCard>
                            <MinimizedButtonCard
                                type="button"
                                data-testid={`minimizedButtonCard-${props.task.id}`}
                                onClick={() => props.onMinimized(props.task)}><FontAwesomeIcon icon={faChevronUp} />
                            </MinimizedButtonCard>
                        </HeadCard>
                        <ContentCard>
                            <LabelCard> #Id: <ValueLabelCard>{props.task.id}</ValueLabelCard> </LabelCard>
                            <LabelCard> Title: <ValueLabelCard> {props.task.title} </ValueLabelCard> </LabelCard>
                            <LabelCard> Status: <ValueLabelCard>{props.task.status}</ValueLabelCard></LabelCard>
                            <LabelCard> Position: <ValueLabelCard> {props.task.position}</ValueLabelCard>  </LabelCard>
                            <LabelCard> Description: <ValueLabelCard> {props.task.description}</ValueLabelCard>  </LabelCard>
                            <LabelCard> Is Favorite?: <ValueLabelCard> {props.task.isFavorite ? "Yes" : "No"} </ValueLabelCard> </LabelCard>
                        </ContentCard>
                    </Card>
                ) : null
            }
            {
                props.isMaximized === false ? (
                    <Card>
                        <HeadCard>
                            <MaximizedButtonCard
                                type="button"
                                data-testid={`maximizedButtonCard-${props.task.id}`}
                                onClick={() => props.onMaximized(props.task)}><FontAwesomeIcon icon={faChevronDown} />
                            </MaximizedButtonCard>
                        </HeadCard>

                        <ContentCard>
                            <LabelCard>Title:<ValueLabelCard>  {props.task.title}</ValueLabelCard>  </LabelCard>
                            <LabelCard> Status: </LabelCard>

                            <SelectCard
                                value={props.task.status}
                                data-testid='selectStatusCard'
                                onChange={e => onChangeStatusHandler(e.target.value)}
                            >
                                <option value={'pending'}>Pending</option>
                                <option value={'progress'}>Progress</option>
                                <option value={'success'}>Success</option>
                            </SelectCard>
                            <GroupButtonsCard>
                                <ButtonCard
                                    style={{ color: props.task.isFavorite ? "skyblue" : "black" }}
                                    data-testid="favoriteButtonCard"
                                    type="button"
                                    onClick={() => props.onChangeFavoriteTaskButton(props.task)}>
                                    <FontAwesomeIcon icon={faStar} />
                                </ButtonCard>
                                <ButtonCard
                                    type="button"
                                    data-testid="editButtonCard"
                                    onClick={() => props.onUpdate(props.task)}><FontAwesomeIcon icon={faPenToSquare} />
                                </ButtonCard>
                                <ButtonCard
                                    type="button"
                                    data-testid="deleteButtonCard"
                                    onClick={() => props.onDelete(props.task)}><FontAwesomeIcon icon={faTrash} />
                                </ButtonCard>
                                <ButtonCard
                                    type="button"
                                    data-testid="upButtonCard"
                                    disabled={props.isDisabledUpdButton}
                                    onClick={() => props.onUpTask(props.task)}><FontAwesomeIcon icon={faArrowUp} />
                                </ButtonCard>
                                <ButtonCard
                                    type="button"
                                    data-testid="downButtonCard"
                                    disabled={props.isDisabledDownButton}
                                    onClick={() => props.onDownTask(props.task)}><FontAwesomeIcon icon={faArrowDown} />
                                </ButtonCard>
                            </GroupButtonsCard>
                        </ContentCard>
                    </Card>
                ) : null
            }

        </Wrapper>

    )

}