import React from 'react'
import { AppBar, ContentLogo, FilterSelect, Logo, Search, Select } from './AppBar.styled'
import logo from '../../assets/react-ts.png'

interface IAppBarComponent {
    onChangeSearchTaskInput: (value: string) => void
    onSelectedStatus: (status: 'all' | 'pending' | 'progress' | 'success') => void
    selectedStatus: 'all' | 'pending' | 'progress' | 'success'
    searchTask: string
    selectedFavoriteValue: 'all' | 'favorites' | 'not favorites'
    onSelectedFavoriteValues: (value: 'all' | 'favorites' | 'not favorites') => void
}

export const AppBarComponent = (props: IAppBarComponent) => {

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChangeSearchTaskInput(e.target.value)
    }

    const onChangeStatusHandler = (value: string): void => {
        if (value === 'pending') return props.onSelectedStatus(value)
        if (value === 'progress') return props.onSelectedStatus(value)
        if (value === 'success') return props.onSelectedStatus(value)
        return props.onSelectedStatus('all')
    }

    const onChangeFilterFavoritesHandler = (value: string): void => {
        if (value === 'favorites') return props.onSelectedFavoriteValues(value)
        if (value === 'not favorites') return props.onSelectedFavoriteValues(value)
        return props.onSelectedFavoriteValues('all')
    }

    return (
        <AppBar>

            <ContentLogo>
                <Logo src={logo} alt="logo-react+ts" />
            </ContentLogo>


            <Select>
                <FilterSelect
                    value={props.selectedFavoriteValue}
                    onChange={e => onChangeFilterFavoritesHandler(e.target.value)}
                    data-testid='filterSelectFavorite'
                >
                    <option value={'all'}>Favorites/Not Favorites</option>
                    <option value={'favorites'}>Favorites</option>
                    <option value={'not favorites'}>Not favorites</option>
                </FilterSelect>
            </Select>


            <Select>
                <FilterSelect value={props.selectedStatus} data-testid='filterSelectStatus' onChange={(e) => onChangeStatusHandler(e.target.value)}>
                    <option value={'all'}>Pending/ Progress/ Success</option>
                    <option value={'pending'}>Pending</option>
                    <option value={'progress'}>Progress</option>
                    <option value={'success'}>Success</option>
                </FilterSelect>
            </Select>

            <Search
                type='search'
                data-testid='filterInput'
                placeholder='🔍 Search...'
                value={props.searchTask}
                onChange={onChangeHandler}
            />

        </AppBar>
    )
}






