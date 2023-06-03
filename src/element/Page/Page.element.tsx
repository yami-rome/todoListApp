import { Page } from "./Page.styled"

export const PageElement: React.FC<{children: React.ReactNode}>  = props => {
    return (
        <Page>
            {props.children}
        </Page>
    )
}



