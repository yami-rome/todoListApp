import React from "react"
import { useState } from "react"
import { timer } from "../../utils/timer"
import { BackDropLoading, Loading, MessageLoading } from "./Loading.styled"

interface ILoadingComponent {
    message: string
    isOpen: boolean
}

export const LoadingComponent = (props: ILoadingComponent) => {
    const [isRenderer, setIsRenderer] = useState<boolean>(false)
    const [isOpenAnimation, setisOpenAnimation] = useState<boolean>(false)

    React.useEffect(() => {
        if (props.isOpen !== isRenderer) openAnimation(props.isOpen)
    }, [props.isOpen])

    const openAnimation = async (isOpen: boolean) => {
        if (props.isOpen) {
            setIsRenderer(true)
            await timer(50)
            setisOpenAnimation(true)
        } else {
            setisOpenAnimation(false)
            await timer(300)
            setIsRenderer(false)
        }
    }

    return (
        <div>
            {
                isRenderer ? (
                    <BackDropLoading isOpen={isOpenAnimation}>
                        <Loading />
                        <MessageLoading>{props.message}</MessageLoading>
                    </BackDropLoading>
                ) : null
            }
        </div>
    )
}