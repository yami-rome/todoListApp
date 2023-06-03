export interface ITask {
    id: number
    title: string
    description: string
    position: number
    isFavorite: boolean
    status: 'pending' | 'progress' | 'success' 
}

export const taskDefault = (): ITask => ({
    id: 0,
    title: '',
    description: '',
    position: 0,
    isFavorite: false,
    status : 'pending'
})