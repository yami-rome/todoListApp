import React from "react"
import { timer } from "../../utils/timer"
import { BackDropModalShadow, ModalCloseButton, ModalContent, ModalHeader, ModalWrapper } from "./Modal.styled"

export const Modal = (props: {
    title: string,
    isOpen: boolean,
    children: React.ReactNode,
    onClose: () => void
}) => {

    const [isRendered, setIsRendered] = React.useState<boolean>(false)
    const [isOpenAnimation, setIsOpenAnimation] = React.useState<boolean>(false)

    React.useEffect(() => {
        if (props.isOpen !== isRendered) changeAnimation(props.isOpen)
    }, [props.isOpen])

    const changeAnimation = async (isOpen: boolean) => {
        if (props.isOpen) {
            setIsRendered(true)
            await timer(100)
            setIsOpenAnimation(true)
        } else {
            setIsOpenAnimation(false)
            await timer(600)
            setIsRendered(false)
        }
    }

    const onClickHandler = () => {
        props.onClose()
    }

    return (
        <div>
            {isRendered ? (
                <BackDropModalShadow isOpen={isOpenAnimation}>
                    <ModalWrapper>
                        <ModalHeader>
                            <ModalCloseButton onClick={onClickHandler} data-testid='modalCloseButton'></ModalCloseButton>
                            <h1 style={{
                                color: '#333',
                                textAlign: 'center',
                                width: '100%',
                                fontSize: '20px',
                            }}>
                                {props.title}
                            </h1>
                        </ModalHeader>
                        <ModalContent>
                            {props.children}
                        </ModalContent>
                    </ModalWrapper>
                </BackDropModalShadow>
            ) : null}
        </div>
    )
}
